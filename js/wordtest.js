/* wordtest.js — a quick production test over the whole vocabulary deck.

   Pick 15, 30 or 50 words; each is shown in English and you type the French.
   Two things make it worth more than a flashcard round:

   1. It writes straight into the same Leitner boxes as the daily French block,
      so what you prove here counts towards "words known" in the word index —
      and producing a word from memory is much stronger evidence than picking it
      out of four options.
   2. Nouns are asked WITH their article, and a right noun behind a wrong
      article is scored as its own thing. Getting « le » for « la » is not a
      vocabulary gap, it is a gender gap, and it stays invisible in multiple
      choice. The result screen lists exactly those.
*/

"use strict";

const WORDTEST_SIZES = [15, 30, 50];
const WORDTEST_XP = 4;          // per word produced correctly first time

function ensureWordTest(state) {
  const g = ensureGame(state);
  if (!g.wordtest) g.wordtest = { runs: [], best: 0, genderMisses: {} };
  if (!g.wordtest.genderMisses) g.wordtest.genderMisses = {};
  return g.wordtest;
}

/* Words worth asking: something with an English side, and short enough that
   typing it is a memory test rather than a transcription exercise. */
function wordTestCandidates() {
  return FRENCH_VOCAB.filter(c => c.fr && c.en && c.fr.split(" ").length <= 4);
}

/* Priority: cards due today, then shaky ones, then never-seen, then solid.
   Half the paper is kept for nouns where a gender exists to get wrong, because
   surfacing those is half the point of the test. */
function buildWordTest(state, n) {
  const today = todayKey();
  const rng = dailyRng("wordtest-" + n, (state.seq || 0) + 1);
  const tier = c => {
    const e = state.srs[c.id];
    if (e && e.due <= today && e.box < 5) return 0;
    if (e && e.box <= 2) return 1;
    if (!e) return 2;
    return 3;
  };
  const all = seededShuffle(wordTestCandidates(), rng)
    .map(c => ({ c, t: tier(c) }))
    .sort((a, b) => a.t - b.t)
    .map(x => x.c);

  const hasGender = c => c.pos === "noun" && (c.gender === "m" || c.gender === "f");
  const nouns = all.filter(hasGender);
  const rest = all.filter(c => !hasGender);

  const wantNouns = Math.min(nouns.length, Math.round(n / 2));
  const picked = nouns.slice(0, wantNouns).concat(rest.slice(0, n - wantNouns));
  // top up if one side ran short
  for (const c of all) {
    if (picked.length >= n) break;
    if (!picked.includes(c)) picked.push(c);
  }
  return seededShuffle(picked.slice(0, n), rng);
}

function renderWordTestView() {
  const st = App.state;
  const wt = ensureWordTest(st);
  const run = App.wt;

  if (!run) return renderWordTestSetup(st, wt);
  if (run.i >= run.items.length) return renderWordTestResult(st, wt, run);
  return renderWordTestQuestion(st, run);
}

function renderWordTestSetup(st, wt) {
  const cand = wordTestCandidates().length;
  const known = FRENCH_VOCAB.filter(c => {
    const e = st.srs[c.id];
    return e && e.box >= MASTERED_BOX;
  }).length;
  const last = (wt.runs || []).slice(-1)[0];

  $app.innerHTML = `
    <div class="pagehead">
      <h1>⌨️ Word test</h1>
      <div class="nav"><button class="ghost" data-nav="home">← Dashboard</button></div>
    </div>
    <p class="sub">English in, French out — no options to pick from. Nouns come with their
    article, so a wrong gender shows up as a wrong gender rather than hiding.</p>

    <div class="card wt-setup">
      <div class="wt-ask">How many words?</div>
      <div class="wt-sizes">
        ${WORDTEST_SIZES.map(n => `<button class="primary" data-wt="${n}">${n}</button>`).join("")}
      </div>
      <div class="wt-note">
        Drawn from your ${cand} testable words, hardest first: anything due today, then the
        cards you keep getting wrong, then words you have never met. Half the test is nouns
        wherever there are enough.
      </div>
    </div>

    <div class="tp-summary card">
      <div><b>${known}</b><span>words known</span></div>
      <div><b>${wt.best || 0}%</b><span>best score</span></div>
      <div><b>${(wt.runs || []).length}</b><span>tests taken</span></div>
    </div>
    ${last ? `<p class="small muted">Last test: ${last.correct}/${last.total} on ${esc(last.date)}.</p>` : ""}
    ${Object.keys(wt.genderMisses || {}).length ? `
      <h2>Genders to nail down</h2>
      <div class="card">
        <div class="wt-genders">
          ${Object.entries(wt.genderMisses).sort((a, b) => b[1] - a[1]).slice(0, 24).map(([id, n]) => {
            const c = FRENCH_VOCAB.find(x => x.id === id);
            return c ? `<span class="wt-gchip" lang="fr">${esc(c.fr)}<i>×${n}</i></span>` : "";
          }).join("")}
        </div>
        <p class="small muted" style="margin-top:10px">Words whose gender you have written wrong. They clear when you get one right.</p>
      </div>` : ""}`;

  document.querySelectorAll("[data-nav]").forEach(b => b.onclick = () => go(b.dataset.nav));
  document.querySelectorAll("[data-wt]").forEach(b => b.onclick = () => {
    const n = +b.dataset.wt;
    App.state.seq = (App.state.seq || 0) + 1;
    App.wt = {
      n, i: 0, tries: 0, correct: 0,
      items: buildWordTest(App.state, n),
      misses: [], genders: []
    };
    render();
  });
}

function renderWordTestQuestion(st, run) {
  const card = run.items[run.i];
  const isNoun = card.pos === "noun" && (card.gender === "m" || card.gender === "f");

  $app.innerHTML = `
    <div class="pagehead">
      <h1>⌨️ Word test</h1>
      <div class="nav"><button class="ghost" id="wt-quit">Quit</button></div>
    </div>
    <div class="dots" aria-hidden="true">${run.items.map((_, i) =>
      `<span class="dot ${i < run.i ? "done" : i === run.i ? "now" : ""}"></span>`).join("")}</div>

    <div class="card wr-card">
      <div class="wr-count">${run.i + 1} of ${run.items.length} · ${run.correct} right</div>
      <div class="wr-en">${esc(card.en)}</div>
      <div class="wr-pos">${esc(card.pos || "")}${isNoun ? " · with its article" : ""}</div>
      <label class="visually-hidden" for="wt-input">Type the French</label>
      <input type="text" id="wt-input" lang="fr" autocomplete="off" autocapitalize="off"
             spellcheck="false" placeholder="en français…">
      <div class="rp-row">
        <button class="primary" id="wt-check">Check</button>
        <button class="ghost" id="wt-skip">Skip</button>
      </div>
      <div id="wt-verdict"></div>
    </div>`;

  document.getElementById("wt-quit").onclick = () => {
    if (confirm("Leave the test? Nothing from this run is recorded.")) { App.wt = null; go("home"); }
  };
  const input = document.getElementById("wt-input");
  input.focus();
  const v = () => document.getElementById("wt-verdict");
  const next = () => { run.i++; run.tries = 0; render(); };

  const finish = (verdict, gradedRight) => {
    // one attempt per word: this is a test, not a drill
    applySrsResult(App.state, card.id, gradedRight);
    if (gradedRight) {
      run.correct++;
      awardXp(App.state, "french", WORDTEST_XP);
      const gm = ensureWordTest(App.state).genderMisses;
      delete gm[card.id];
    } else {
      run.misses.push({ id: card.id, fr: card.fr, en: card.en, wrote: input.value, verdict });
      if (verdict === "gender") {
        run.genders.push({ id: card.id, fr: card.fr, wrote: input.value });
        const gm = ensureWordTest(App.state).genderMisses;
        gm[card.id] = (gm[card.id] || 0) + 1;
      }
    }
    saveState(App.state);
    input.disabled = true;
    const b = document.getElementById("wt-check");
    b.textContent = run.i + 1 >= run.items.length ? "See results →" : "Next →";
    b.onclick = next;
  };

  const check = () => {
    const g = gradeWritten(input.value, card.fr);
    if (g.verdict === "empty") return;
    if (g.verdict === "correct") {
      v().innerHTML = `<div class="rp-ok">✓ ${esc(card.fr)}${card.expl || card.ex ? `<div class="rp-alts">${esc(card.expl || card.ex)}</div>` : ""}</div>`;
      announce("Correct.");
      return finish("correct", true);
    }
    if (g.verdict === "gender") {
      v().innerHTML = `<div class="rp-no"><b>Right word, wrong gender.</b>
        <div class="rp-line"><span class="rp-lbl">You wrote</span><span lang="fr">${esc(input.value)}</span></div>
        <div class="rp-line"><span class="rp-lbl">It is</span><span lang="fr">${esc(card.fr)}</span></div>
        <div class="rp-hint">Noted — this one comes back on the list until you get it right.</div></div>`;
      return finish("gender", false);
    }
    if (g.verdict === "typo" && run.tries === 0) {
      run.tries++;
      v().innerHTML = `<div class="rp-no"><b>One letter out.</b><div class="rp-hint">Try again.</div></div>`;
      input.select();
      return;
    }
    const a = autopsy(input.value, card.fr);
    v().innerHTML = `<div class="rp-no">
      <div class="rp-line"><span class="rp-lbl">You wrote</span>
        <span lang="fr">${a.yourMarks.map(m => `<span class="${m.ok ? "w-ok" : "w-bad"}">${esc(m.w)}</span>`).join(" ") || "<i>nothing</i>"}</span></div>
      <div class="rp-line"><span class="rp-lbl">It is</span><span lang="fr">${esc(card.fr)}</span></div>
    </div>`;
    finish(g.verdict, false);
  };

  document.getElementById("wt-check").onclick = check;
  input.onkeydown = e => { if (e.key === "Enter") { e.preventDefault(); document.getElementById("wt-check").click(); } };
  document.getElementById("wt-skip").onclick = () => {
    v().innerHTML = `<div class="rp-no"><div class="rp-line"><span class="rp-lbl">It is</span>
      <span lang="fr">${esc(card.fr)}</span></div></div>`;
    finish("skipped", false);
  };
}

function renderWordTestResult(st, wt, run) {
  const pct = run.items.length ? Math.round(100 * run.correct / run.items.length) : 0;
  wt.runs.push({ date: todayKey(), n: run.n, correct: run.correct, total: run.items.length, pct });
  if (wt.runs.length > 60) wt.runs = wt.runs.slice(-60);
  wt.best = Math.max(wt.best || 0, pct);
  saveState(st);

  $app.innerHTML = `
    <div class="pagehead">
      <h1>⌨️ Word test</h1>
      <div class="nav"><button class="ghost" data-nav="home">← Dashboard</button></div>
    </div>
    <div class="card" style="text-align:center">
      <div style="font-size:2.4rem">${pct >= 80 ? "🎉" : pct >= 50 ? "👍" : "📚"}</div>
      <h2 style="margin:6px 0">${run.correct} / ${run.items.length} · ${pct}%</h2>
      <p class="muted">${run.correct * WORDTEST_XP} XP · every answer went into your review schedule.</p>
    </div>

    ${run.genders.length ? `
    <h2>Genders you did not know</h2>
    <div class="card">
      ${run.genders.map(g => `<div class="wt-grow">
        <span lang="fr"><b>${esc(g.fr)}</b></span>
        <span class="muted small">you wrote « ${esc(g.wrote)} »</span></div>`).join("")}
      <p class="small muted" style="margin-top:8px">The word was right — only the article was wrong.
      These stay on your list until you write one correctly.</p>
    </div>` : ""}

    ${run.misses.filter(m => m.verdict !== "gender").length ? `
    <h2>Words to revisit</h2>
    <div class="card">
      ${run.misses.filter(m => m.verdict !== "gender").map(m => `<div class="wt-grow">
        <span lang="fr"><b>${esc(m.fr)}</b> <span class="muted">${esc(m.en)}</span></span>
        <span class="muted small">${m.wrote ? "you wrote « " + esc(m.wrote) + " »" : "skipped"}</span></div>`).join("")}
    </div>` : ""}

    <div style="margin-top:14px;display:flex;gap:8px;flex-wrap:wrap">
      <button class="primary" id="wt-again">Another test</button>
      <button class="ghost" data-nav="wordindex">🗂️ Word index</button>
      <button class="ghost" data-nav="home">← Dashboard</button>
    </div>`;

  App.wt = null;
  document.querySelectorAll("[data-nav]").forEach(b => b.onclick = () => go(b.dataset.nav));
  document.getElementById("wt-again").onclick = () => render();
  if (pct >= 80) confetti();
  if (typeof syncSoon === "function") syncSoon();
}

/* Dashboard card, sitting with Conversations. */
function wordTestHomeCard(st) {
  const wt = ensureWordTest(st);
  const known = FRENCH_VOCAB.filter(c => {
    const e = st.srs[c.id];
    return e && e.box >= MASTERED_BOX;
  }).length;
  const owed = Object.keys(wt.genderMisses || {}).length;
  return `
    <div class="card mission" style="--mc:var(--c-french)">
      <div class="m-head">
        <span class="m-title">⌨️ Word test</span>
        <span class="m-lvl" style="color:var(--c-french-text)">${wt.best || 0}%</span>
      </div>
      <div class="m-desc">
        15, 30 or 50 words. English in, French out, nothing to pick from — and nouns come with
        their article, so the genders you do not know stop hiding.
        ${owed ? `<b>${owed}</b> gender${owed === 1 ? "" : "s"} still to fix.` : ""}
      </div>
      <div class="m-track"><div class="f" style="width:${Math.round(100 * known / Math.max(1, FRENCH_VOCAB.length))}%"></div></div>
      <div class="m-foot">
        <span>${known} / ${FRENCH_VOCAB.length} words known</span>
        <span>${(wt.runs || []).length} taken</span>
      </div>
      <button data-nav="wordtest">${(wt.runs || []).length ? "Test again" : "Start a test"}</button>
    </div>`;
}
