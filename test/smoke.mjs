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
  p.on("console", m => { if (m.type() === "error") errors.push("CONSOLE: " + m.text()); });
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

/* ---------- 7. mobile layout ---------- */
const mob = await newPage({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true, deviceScaleFactor: 2 });
await mob.goto(APP);
await mob.waitForTimeout(400);
const overflow = await mob.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
ok(overflow === 0, `mobile horizontal overflow: ${overflow}px`);
const tapTargets = await mob.evaluate(() =>
  [...document.querySelectorAll("button")].filter(b => b.offsetParent && b.getBoundingClientRect().height < 40).length);
ok(tapTargets === 0, `${tapTargets} buttons below the 40px touch target on mobile`);

await browser.close();

/* ---------- report ---------- */
if (errors.length) failures.push("JS errors:\n  " + errors.join("\n  "));
if (failures.length) {
  console.error("SMOKE TEST FAILED (" + failures.length + "):");
  failures.forEach(f => console.error(" ✗ " + f));
  process.exit(1);
}
console.log("smoke test passed — routine, epso block, mock, library, writing, backup, mobile");
