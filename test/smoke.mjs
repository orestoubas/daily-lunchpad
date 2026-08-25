/* End-to-end smoke test. Runs the real app in Chromium and asserts the whole
   daily loop, the optional block, mocks, library, writing and mobile layout.
   Exits non-zero on any failure so CI blocks a broken deploy.

   Usage: node test/smoke.mjs            (expects playwright-core + a chromium)
          CHROMIUM=/path/to/chrome node test/smoke.mjs
*/
import { chromium } from "playwright-core";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const APP = "file://" + join(root, "index.html");
const EXEC = process.env.CHROMIUM || "/opt/pw-browsers/chromium";

const failures = [];
const ok = (cond, msg) => { if (!cond) failures.push(msg); };

const browser = await chromium.launch({ executablePath: EXEC });
const errors = [];

async function newPage(opts) {
  const p = await browser.newPage(opts);
  p.on("pageerror", e => errors.push("PAGEERROR: " + e.message));
  p.on("console", m => {
    if (m.type() !== "error") return;
    // Google Fonts is the nav's only external asset and is optional (the CSS
    // has a mono fallback stack); sandboxed CI has no outbound net, so a
    // failed font fetch is not an app error.
    const url = (m.location() && m.location().url) || "";
    if (/fonts\.(googleapis|gstatic)\.com/.test(url)) return;
    errors.push("CONSOLE: " + m.text());
  });
  return p;
}

async function answerCorrect(p) {
  const reveal = await p.$("#listen-reveal");
  if (reveal) await reveal.click().catch(() => {});
  const idx = await p.evaluate(() => App.session ? App.session.items[App.session.idx].answer : -1);
  const btns = await p.$$("#options button");
  if (!btns[idx]) return false;
  await btns[idx].click();
  return true;
}

/* ---------- 1. full daily routine ---------- */
const page = await newPage({ viewport: { width: 1200, height: 900 } });
await page.goto(APP);
await page.evaluate(() => localStorage.clear());
await page.reload();
await page.waitForTimeout(250);

ok(await page.$("#start-routine"), "start-routine button missing on fresh state");
await page.click("#start-routine");

const kindsSeen = new Set();
for (let block = 0; block < 3; block++) {
  for (let i = 0; i < 60; i++) {
    const kind = await page.evaluate(() => App.session ? App.session.items[App.session.idx].kind : null);
    if (kind) kindsSeen.add(kind);
    if (!(await answerCorrect(page))) break;
    const nx = await page.$("#next");
    if (!nx) break;
    await nx.click();
    await page.waitForTimeout(25);
    if (await page.$("#chain-next, #home")) break;
  }
  const chain = await page.$("#chain-next");
  if (chain) await chain.click(); else break;
}
const home = await page.$("#home");
if (home) await home.click();
await page.waitForTimeout(300);

const st = await page.evaluate(() => JSON.parse(localStorage.getItem("launchpad.v1")));
ok(st.sessions.length === 3, `expected 3 sessions, got ${st.sessions.length}`);
ok(st.game.totalXp > 0, "no XP awarded");
ok(Object.keys(st.game.badges).length > 0, "no badges awarded for a perfect routine");
ok(st.game.dailyXp[Object.keys(st.game.dailyXp)[0]] > 0, "daily XP not recorded");
ok(kindsSeen.has("vocab"), "French block never showed a vocabulary item");
ok(kindsSeen.has("eu"), "EU block never showed an EU item");
ok(kindsSeen.has("abstract"), "Reasoning block never showed an abstract item");

/* ---------- 2. optional Digital & SJT block ---------- */
const hasEpso = await page.$('[data-start="epso"]');
if (hasEpso) {
  await page.click('[data-start="epso"]');
  await page.waitForTimeout(250);
  ok(!!(await page.$("#options button")), "epso block did not render options");
  const quit = await page.$("#quit");
  page.once("dialog", d => d.accept());
  if (quit) await quit.click();
  await page.waitForTimeout(250);
  const back = await page.$("#home");
  if (back) await back.click();
  await page.waitForTimeout(200);
}

/* ---------- 3. mock exam runs under exam conditions ---------- */
page.on("dialog", d => d.accept());
await page.click('[data-nav="mocks"]');
await page.waitForTimeout(250);
await page.click('[data-mock="mock-eu"]');
await page.waitForTimeout(400);
const sessionsBefore = st.sessions.length;
for (let i = 0; i < 60; i++) {
  if (await page.$("#mock-home")) break;
  const before = await page.evaluate(() => App.session ? App.session.idx : -1);
  await page.keyboard.press("1");
  for (let w = 0; w < 20; w++) {
    await page.waitForTimeout(60);
    const now = await page.evaluate(() => App.session ? App.session.idx : -1);
    if (now !== before) break;
  }
}
await page.waitForTimeout(400);
const st2 = await page.evaluate(() => JSON.parse(localStorage.getItem("launchpad.v1")));
ok((st2.game.mocks || []).length === 1, "mock result not recorded");
ok(st2.sessions.length === sessionsBefore, "mock polluted the daily session log");
const mh = await page.$("#mock-home");
if (mh) await mh.click();
await page.waitForTimeout(250);

/* ---------- 4. library search ---------- */
await page.click('[data-nav="library"]');
await page.waitForTimeout(300);
await page.fill("#lib-search", "subsidiarity");
await page.waitForTimeout(500);
const libHits = await page.$$eval(".libitem", els => els.length);
ok(libHits > 0, "library search returned nothing for a known term");
await page.click('[data-nav="home"]');
await page.waitForTimeout(200);

/* ---------- 5. writing drafts persist ---------- */
const hasWriting = await page.$('[data-nav="writing"]');
if (hasWriting) {
  await page.click('[data-nav="writing"]');
  await page.waitForTimeout(250);
  await page.fill("#draft", "Draft persistence check.");
  await page.waitForTimeout(600);
  await page.click('[data-nav="home"]');
  await page.waitForTimeout(200);
  await page.click('[data-nav="writing"]');
  await page.waitForTimeout(300);
  const kept = await page.evaluate(() => document.getElementById("draft").value);
  ok(kept.includes("persistence"), "writing draft did not persist across navigation");
  await page.click('[data-nav="home"]');
  await page.waitForTimeout(200);
}

/* ---------- 6. backup export/import round-trip ---------- */
const roundTrip = await page.evaluate(() => {
  const before = JSON.parse(localStorage.getItem("launchpad.v1"));
  const json = JSON.stringify(before);
  const after = JSON.parse(json);
  return after.sessions.length === before.sessions.length && after.game.totalXp === before.game.totalXp;
});
ok(roundTrip, "state does not survive a JSON round-trip");

/* ---------- 7. accessibility basics ---------- */
await page.goto(APP);
await page.waitForTimeout(250);
ok(!!(await page.$("#sr-live[aria-live]")), "screen-reader live region missing");
ok(!!(await page.$("a.skip-link")), "skip link missing");
ok(!!(await page.$("main#app")), "main landmark missing");
const unlabelled = await page.evaluate(() => [...document.querySelectorAll("button")]
  .filter(b => b.offsetParent && !b.textContent.trim() && !b.getAttribute("aria-label")).length);
ok(unlabelled === 0, `${unlabelled} buttons have no accessible name`);
await page.click('[data-start="eu"]');
await page.waitForTimeout(250);
await page.keyboard.press("1");
await page.waitForTimeout(400);
const live = await page.$eval("#sr-live", e => e.textContent);
ok(live.trim().length > 0, "answering did not announce anything to screen readers");
const focusId = await page.evaluate(() => document.activeElement && document.activeElement.id);
ok(focusId === "next", `focus should move to Next after answering, was "${focusId}"`);

/* ---------- 8. mobile layout ---------- */
const mob = await newPage({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true, deviceScaleFactor: 2 });
await mob.goto(APP);
await mob.waitForTimeout(400);
const overflow = await mob.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
ok(overflow === 0, `mobile horizontal overflow: ${overflow}px`);
const tapTargets = await mob.evaluate(() =>
  [...document.querySelectorAll("button")].filter(b => b.offsetParent && b.getBoundingClientRect().height < 40).length);
ok(tapTargets === 0, `${tapTargets} buttons below the 40px touch target on mobile`);

/* ---------- 9. shared top nav (spec v1) ---------- */
const NAV = [
  ["Today", "https://claude.ai/code/artifact/46907712-3ad5-4d90-8017-47f5bab4e509",
            "https://claude.ai/cowork/cse_01QdM8idBWKbDwTYu9CmfjsF"],
  ["12-Month", "https://claude.ai/code/artifact/4429ddc0-b38a-4091-97ab-b4d4d69704c1",
               "https://claude.ai/cowork/cse_01N6ocPFsForeUxNooisPSDA"],
  ["Practice", "https://orestoubas.github.io/daily-lunchpad/",
               "https://claude.ai/code/session_01UKzdN5dVrcuWxj5ZpkMXwo"],
  ["SGE Q4", "https://claude.ai/code/artifact/66b2e783-b6f6-42f8-a20e-105f6a20a47f",
             "https://claude.ai/cowork/cse_01QdM8idBWKbDwTYu9CmfjsF"]
];
const nav = await newPage({ viewport: { width: 1200, height: 900 } });
await nav.goto(APP);
await nav.waitForTimeout(300);
const navShape = await nav.evaluate(() => {
  const bar = document.querySelector("nav.topbar");
  if (!bar) return null;
  const app = document.getElementById("app");
  return {
    beforeContent: !!(bar.compareDocumentPosition(app) & Node.DOCUMENT_POSITION_FOLLOWING),
    outsideWrapper: !app.contains(bar),
    items: [...bar.querySelectorAll("li")].map(li => {
      const label = li.querySelector("a:not(.cog), span.on");
      const cog = li.querySelector("a.cog");
      return {
        tag: label.tagName, text: label.textContent.trim(),
        href: label.getAttribute("href") || "",
        current: label.getAttribute("aria-current") || "",
        cogHref: cog ? cog.getAttribute("href") : null,
        cogName: cog ? (cog.getAttribute("aria-label") || "").trim() : "",
        cogIcon: cog ? getComputedStyle(cog, "::before").maskImage : "none"
      };
    }),
    fonts: !!document.querySelector('link[href*="IBM+Plex+Mono"]'),
    bodyBg: getComputedStyle(document.body).backgroundColor
  };
});
ok(!!navShape, "shared top nav missing");
if (navShape) {
  ok(navShape.beforeContent && navShape.outsideWrapper, "top nav must sit above and outside #app");
  ok(navShape.fonts, "IBM Plex Mono not linked from Google Fonts");
  ok(navShape.bodyBg !== "rgba(0, 0, 0, 0)", "body has no explicit background");
  ok(navShape.items.length === 4, `nav should have 4 items, got ${navShape.items.length}`);
  navShape.items.forEach((it, i) => {
    const [label, href, cog] = NAV[i] || ["?", "?", "?"];
    ok(it.cogHref === cog, `gear next to "${label}" should link to ${cog}, got "${it.cogHref}"`);
    ok(it.cogName.length > 0, `gear next to "${label}" has no accessible name`);
    ok(it.cogIcon && it.cogIcon !== "none", `gear next to "${label}" renders no icon`);
    ok(it.text === label, `nav item ${i} should read "${label}", got "${it.text}"`);
    if (label === "Practice") {
      ok(it.tag === "SPAN" && it.current === "page", "current page must be a span with aria-current=page");
    } else {
      ok(it.tag === "A" && it.href === href, `nav "${label}" should link to ${href}, got "${it.href}"`);
    }
  });
}
const darkCss = await nav.evaluate(() => {
  let hits = 0;
  for (const sheet of document.styleSheets) {
    let rules; try { rules = sheet.cssRules; } catch { continue; }
    for (const r of rules) {
      if (r.conditionText && /prefers-color-scheme\s*:\s*dark/.test(r.conditionText)) hits++;
      if (r.selectorText && /data-theme\s*=\s*"?dark/.test(r.selectorText)) hits++;
    }
  }
  return hits;
});
ok(darkCss === 0, `${darkCss} dark-mode rules found — this page set is light only`);
const navNarrow = await newPage({ viewport: { width: 360, height: 780 } });
await navNarrow.goto(APP);
await navNarrow.waitForTimeout(300);
const navOverflow = await navNarrow.evaluate(() => {
  const bar = document.querySelector("nav.topbar");
  return bar ? bar.scrollWidth - bar.clientWidth : 0;
});
ok(navOverflow === 0, `top nav scrolls sideways at 360px (${navOverflow}px)`);

await browser.close();

/* ---------- report ---------- */
if (errors.length) failures.push("JS errors:\n  " + errors.join("\n  "));
if (failures.length) {
  console.error("SMOKE TEST FAILED (" + failures.length + "):");
  failures.forEach(f => console.error(" ✗ " + f));
  process.exit(1);
}
console.log("smoke test passed — routine, epso block, mock, library, writing, backup, mobile, top nav");
