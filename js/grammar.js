/* grammar.js — Grammar: five rules taught end to end.

   The existing banks drill grammar; this teaches it. Each chapter runs
   Lesson → Recognise → Drills → Write it → Apply, and is only finished when all
   five are. Topics unlock in order, and the upper level of a chapter opens when
   its lower level is done.

   Answer matching, the mistake autopsy and the written-answer grading all come
   from topics.js — same contract, so a wrong article is called a gender error
   here too. */

"use strict";

const GRAMMAR_STAGES = ["lesson", "recognise", "drills", "write", "apply"];
const GRAMMAR_STAGE_XP = { lesson: 90, recognise: 100, drills: 110, write: 100, apply: 100 };
const GRAMMAR_STAGE_LABEL = {
  lesson: "Lesson", recognise: "Recognise", drills: "Drills",
  write: "Write it", apply: "Apply"
};

function grammarAvailable() {
  return typeof GRAMMAR_TOPICS !== "undefined" && Object.keys(GRAMMAR_TOPICS).length > 0;
}
function grammarKey(slug, level) { return slug + "-" + level; }

function grammarLevels() {
  if (!grammarAvailable()) return [];
  const have = new Set(Object.values(GRAMMAR_TOPICS).map(t => t.level));
  return ["A1", "A2", "B1", "B2", "C1", "C2"].filter(l => have.has(l));
}

/* Chapters are not all at the same level — gender is A2 material, connectors are
   not — so the list is ordered by GRAMMAR_ORDER and shows each chapter's own
   levels rather than filtering the whole section to one level. */
function grammarChapters() {
  if (!grammarAvailable()) return [];
  return GRAMMAR_ORDER.map(slug => {
    const levels = Object.values(GRAMMAR_TOPICS)
      .filter(t => t.slug === slug)
      .map(t => t.level)
      .sort((a, b) => grammarLevels().indexOf(a) - grammarLevels().indexOf(b));
    return { slug, levels, title: (GRAMMAR_TOPICS[grammarKey(slug, levels[0])] || {}).title || slug };
  }).filter(c => c.levels.length);
}

function ensureGrammarState(state) {
  const g = ensureGame(state);
  if (!g.grammar) g.grammar = {};
  return g.grammar;
}
function grammarProgress(state, key) {
  return ensureGrammarState(state)[key] || { stages: {}, done: false, xp: 0, best: 0 };
}
function grammarDone(state, key) {
  return GRAMMAR_STAGES.every(s => grammarProgress(state, key).stages[s]);
}

/* A chapter opens when the one before it is finished at its first level; the
   second level of a chapter opens when its first is done. */
function grammarUnlocked(state, slug, level) {
  const chapters = grammarChapters();
  const ci = chapters.findIndex(c => c.slug === slug);
  if (ci < 0) return false;
  const chapter = chapters[ci];
  const li = chapter.levels.indexOf(level);
  if (li > 0) return grammarDone(state, grammarKey(slug, chapter.levels[li - 1]));
  if (ci === 0) return true;
  const prev = chapters[ci - 1];
  return grammarDone(state, grammarKey(prev.slug, prev.levels[0]));
}

function grammarOverall(state) {
  if (!grammarAvailable()) return { done: 0, total: 0, xp: 0 };
  const keys = Object.keys(GRAMMAR_TOPICS);
  return {
    done: keys.filter(k => grammarDone(state, k)).length,
    total: keys.length,
    xp: keys.reduce((n, k) => n + (grammarProgress(state, k).xp || 0), 0)
  };
}

/* Same stem rule as the topic bank: an explicit `q` always wins, and only a
   directional item without one takes its stem from fr or en. */
function grammarStem(q) {
  if (q.q) return q.q;
  if (q.format === "fr2en") return q.fr;
  if (q.format === "en2fr") return q.en;
  return q.fr || q.en || "";
}

function buildGrammarSession(state, key, stage) {
  const t = GRAMMAR_TOPICS[key];
  if (!t) return null;
  const rng = dailyRng("grammar-" + key + "-" + stage, state.seq);
  const pool = (stage === "recognise" ? t.recognise : t.drills) || [];
  const items = seededShuffle(pool.slice(), rng).map(q => {
    const opts = q.options.slice();
    const order = seededShuffle(opts.map((_, i) => i), rng);
    return {
      kind: "grammarq", id: q.id, level: q.level || t.level,
      topicKey: key, topicTitle: t.title,
      prompt: grammarStem(q),
      options: order.map(i => opts[i]),
      answer: order.indexOf(q.a),
      expl: q.expl || "", trap: q.trap || ""
    };
  });
  return { module: "grammar", topicKey: key, stage, items };
}

/* ---------- views ---------- */

function grammarHead(title, back) {
  return `<div class="pagehead">
    <h1>${title}</h1>
    <div class="nav"><button class="ghost" data-nav="${back || "grammar"}">← ${back === "home" ? "Dashboard" : "Grammar"}</button></div>
  </div>`;
}

function renderGrammarView() {
  const st = App.state;
  const all = grammarOverall(st);
  const cards = grammarChapters().map((c, i) => c.levels.map(level => {
    const key = grammarKey(c.slug, level);
    const t = GRAMMAR_TOPICS[key];
    const open = grammarUnlocked(st, c.slug, level);
    const p = grammarProgress(st, key);
    const dots = GRAMMAR_STAGES.map(s =>
      `<span class="tp-dot ${p.stages[s] ? "on" : ""}" title="${GRAMMAR_STAGE_LABEL[s]}"></span>`).join("");
    return `<div class="card topiccard ${grammarDone(st, key) ? "done" : ""} ${open ? "" : "locked"}">
      <div class="tp-head">
        <span class="tp-n">${i + 1}</span>
        <div><div class="tp-title">${esc(t.title)}</div>
          <div class="tp-place">${esc(t.summary || "")}</div></div>
        <span class="tp-reg">${esc(level)}</span>
      </div>
      <div class="tp-meta">${(t.lesson || []).length} lesson sections · ${((t.recognise || []).length + (t.drills || []).length)} questions · ${(t.write || []).length} to write · ${(t.apply || []).length} to apply</div>
      <div class="tp-dots">${dots}</div>
      ${open ? `<button data-gtopic="${key}">${grammarDone(st, key) ? "Revisit" : p.xp ? "Continue" : "Start"}</button>`
             : `<button disabled>🔒 Finish the one above first</button>`}
    </div>`;
  }).join("")).join("");

  $app.innerHTML = `
    ${grammarHead("📐 Grammar", "home")}
    <p class="sub">Five rules that either compound, block the jump to B2, or earn marks in the written test.
    Each is taught, drilled, then produced.</p>
    <div class="tp-summary card">
      <div><b>${all.done}</b><span>chapters finished</span></div>
      <div><b>${all.total}</b><span>available</span></div>
      <div><b>${all.xp}</b><span>XP earned here</span></div>
    </div>
    <div class="missions">${cards}</div>`;

  document.querySelectorAll("[data-nav]").forEach(b => b.onclick = () => go(b.dataset.nav));
  document.querySelectorAll("[data-gtopic]").forEach(b => b.onclick = () => {
    App.gKey = b.dataset.gtopic; go("grammartopic");
  });
}

function renderGrammarTopicView() {
  const st = App.state;
  const key = App.gKey;
  const t = GRAMMAR_TOPICS[key];
  if (!t) return go("grammar");
  const p = grammarProgress(st, key);

  const rows = GRAMMAR_STAGES.map((s, i) => {
    const done = !!p.stages[s];
    const open = i === 0 || p.stages[GRAMMAR_STAGES[i - 1]];
    return `<div class="tp-stage ${done ? "done" : ""} ${open ? "" : "locked"}">
      <div class="tp-stage-i">${done ? "✓" : i + 1}</div>
      <div class="tp-stage-b">
        <div class="tp-stage-t">${GRAMMAR_STAGE_LABEL[s]}</div>
        <div class="tp-stage-d">${esc(grammarStageDesc(t, s))}</div>
      </div>
      <div class="tp-stage-x">+${GRAMMAR_STAGE_XP[s]} XP</div>
      ${open ? `<button data-gstage="${s}">${done ? "Again" : "Start"}</button>` : `<button disabled>🔒</button>`}
    </div>`;
  }).join("");

  $app.innerHTML = `
    ${grammarHead("📐 " + esc(t.title))}
    <p class="sub"><b>${esc(t.level)}</b> · ${esc(t.summary || "")}</p>
    ${t.why ? `<div class="card tp-note"><b>Why this one</b> — ${esc(t.why)}</div>` : ""}
    <div class="tp-stages">${rows}</div>`;

  document.querySelectorAll("[data-nav]").forEach(b => b.onclick = () => go(b.dataset.nav));
  document.querySelectorAll("[data-gstage]").forEach(b => b.onclick = () => startGrammarStage(key, b.dataset.gstage));
}

function grammarStageDesc(t, s) {
  if (s === "lesson") return `${(t.lesson || []).length} sections with worked examples — read it first.`;
  if (s === "recognise") return `${(t.recognise || []).length} questions: spot the rule working.`;
  if (s === "drills") return `${(t.drills || []).length} questions at full difficulty.`;
  if (s === "write") return `${(t.write || []).length} forms to produce, typed, no options.`;
  return `${(t.apply || []).length} whole sentences in a real situation.`;
}

function startGrammarStage(key, stage) {
  App.gKey = key;
  if (stage === "lesson") { App.gLesson = 0; return go("lesson"); }
  if (stage === "write") { App.gw = { i: 0, wrong: 0, tries: 0 }; return go("gwrite"); }
  if (stage === "apply") { App.ga = { i: 0, wrong: 0, tries: 0 }; return go("gapply"); }
  const s = buildGrammarSession(App.state, key, stage);
  if (!s || !s.items.length) { alert("Nothing to practise in this stage yet."); return; }
  App.state.seq = (App.state.seq || 0) + 1;
  App.chain = [];
  beginSession(s, "grammar");
}

/* ---------- lesson ---------- */
function grammarGlossHtml(ex) {
  let html = esc(ex.fr);
  const keys = Object.keys(ex.gloss || {}).sort((a, b) => b.length - a.length);
  for (const k of keys) {
    const safe = esc(k);
    if (!html.includes(safe)) continue;
    html = html.replace(safe, `<span class="gl" tabindex="0" role="button"
      aria-label="${esc(k)} — ${esc(ex.gloss[k])}" data-gl="${esc(ex.gloss[k])}">${safe}</span>`);
  }
  return html;
}

function renderLessonView() {
  const key = App.gKey;
  const t = GRAMMAR_TOPICS[key];
  if (!t) return go("grammar");
  const secs = t.lesson || [];
  const i = Math.min(App.gLesson || 0, secs.length - 1);
  const sec = secs[i];

  $app.innerHTML = `
    ${grammarHead("📖 " + esc(t.title), "grammartopic")}
    <div class="dots" aria-hidden="true">${secs.map((_, n) =>
      `<span class="dot ${n < i ? "done" : n === i ? "now" : ""}"></span>`).join("")}</div>
    <div class="card lesson">
      <div class="ls-n">Section ${i + 1} of ${secs.length}</div>
      <h2 class="ls-h">${esc(sec.heading)}</h2>
      <p class="ls-body">${esc(sec.body)}</p>
      ${sec.table ? `<div class="ls-tablewrap"><table class="ls-table">
        <thead><tr>${sec.table.cols.map(c => `<th scope="col">${esc(c)}</th>`).join("")}</tr></thead>
        <tbody>${sec.table.rows.map(r => `<tr>${r.map(cell => `<td>${esc(cell)}</td>`).join("")}</tr>`).join("")}</tbody>
      </table></div>` : ""}
      ${(sec.examples || []).map(ex => `<div class="ls-ex">
        <div class="ls-fr" lang="fr">${grammarGlossHtml(ex)}</div>
        <div class="ls-en">${esc(ex.en || "")}</div>
        ${ex.note ? `<div class="ls-note">${esc(ex.note)}</div>` : ""}
      </div>`).join("")}
    </div>
    <div style="margin-top:14px;display:flex;gap:8px;flex-wrap:wrap">
      ${i > 0 ? `<button class="ghost" id="ls-prev">← Back</button>` : ""}
      <button class="primary" id="ls-next">${i + 1 < secs.length ? "Next section →" : `✓ Done — collect ${GRAMMAR_STAGE_XP.lesson} XP`}</button>
    </div>`;

  document.querySelectorAll("[data-nav]").forEach(b => b.onclick = () => go(b.dataset.nav));
  bindGlosses();
  const prev = document.getElementById("ls-prev");
  if (prev) prev.onclick = () => { App.gLesson = i - 1; render(); };
  document.getElementById("ls-next").onclick = () => {
    if (i + 1 < secs.length) { App.gLesson = i + 1; render(); }
    else { completeGrammarStage(key, "lesson"); go("grammartopic"); }
  };
}

/* ---------- write it, and apply ----------
   Both type an answer; Apply asks for a whole sentence and accepts any correct
   phrasing, exactly as the Conversations role-play does. */
function grammarTypedStage(opts) {
  const key = App.gKey;
  const t = GRAMMAR_TOPICS[key];
  if (!t) return go("grammar");
  const run = App[opts.stateKey] || (App[opts.stateKey] = { i: 0, wrong: 0, tries: 0 });
  const set = t[opts.bank] || [];
  const item = set[run.i];

  if (!item) {
    const pct = set.length ? Math.round(100 * (1 - run.wrong / set.length)) : 100;
    $app.innerHTML = `
      ${grammarHead(opts.icon + " " + esc(t.title), "grammartopic")}
      <div class="card" style="text-align:center">
        <div style="font-size:2.4rem">${pct >= 80 ? "🎉" : "📚"}</div>
        <h2 style="margin:6px 0">${opts.doneTitle}</h2>
        <p class="muted">${pct}% right first time.</p>
        <button class="primary" id="g-finish">Collect ${GRAMMAR_STAGE_XP[opts.stage]} XP</button>
      </div>`;
    document.querySelectorAll("[data-nav]").forEach(b => b.onclick = () => go(b.dataset.nav));
    document.getElementById("g-finish").onclick = () => {
      completeGrammarStage(key, opts.stage, pct);
      if (pct >= 80) confetti();
      go("grammartopic");
    };
    return;
  }

  $app.innerHTML = `
    ${grammarHead(opts.icon + " " + esc(t.title), "grammartopic")}
    <div class="dots" aria-hidden="true">${set.map((_, n) =>
      `<span class="dot ${n < run.i ? "done" : n === run.i ? "now" : ""}"></span>`).join("")}</div>
    <div class="card ${opts.stage === "apply" ? "" : "wr-card"}">
      <div class="wr-count">${run.i + 1} of ${set.length}</div>
      ${item.situation ? `<div class="ga-sit">${esc(item.situation)}</div>` : ""}
      <div class="${opts.stage === "apply" ? "ga-task" : "wr-en"}">${esc(item.task || item.prompt || "")}</div>
      ${item.hint ? `<div class="wr-pos">hint: ${esc(item.hint)}</div>` : ""}
      <label class="visually-hidden" for="g-input">Type your answer in French</label>
      <input type="text" id="g-input" lang="fr" autocomplete="off" autocapitalize="off"
             spellcheck="false" placeholder="en français…">
      <div class="rp-row">
        <button class="primary" id="g-check">Check</button>
        <button class="ghost" id="g-skip">Show me</button>
      </div>
      <div id="g-verdict"></div>
    </div>`;

  document.querySelectorAll("[data-nav]").forEach(b => b.onclick = () => go(b.dataset.nav));
  const input = document.getElementById("g-input");
  input.focus();
  const v = () => document.getElementById("g-verdict");
  const model = item.model || item.answer || (item.accept || [])[0] || "";
  const advance = () => { run.i++; run.tries = 0; render(); };
  const settle = () => {
    input.disabled = true;
    const b = document.getElementById("g-check");
    b.textContent = run.i + 1 >= set.length ? "See results →" : "Next →";
    b.onclick = advance;
  };

  const check = () => {
    const val = input.value;
    if (!normFr(val)) return;
    const okAny = matchesAccepted(val, item.accept);
    if (okAny) {
      const others = (item.accept || []).filter(a => normFr(a) !== normFr(val));
      v().innerHTML = `<div class="rp-ok">✓ Correct.
        ${others.length ? `<div class="rp-alts">Also fine: ${others.slice(0, 5).map(a => `<span lang="fr">${esc(a)}</span>`).join(" · ")}</div>` : ""}
        ${item.expl ? `<div class="rp-alts">${esc(item.expl)}</div>` : ""}</div>`;
      announce("Correct.");
      return settle();
    }
    // "Write it" answers are single forms, so the article and typo verdicts apply
    if (opts.stage === "write") {
      const g = gradeWritten(val, item.answer || model);
      if (g.verdict === "gender") {
        v().innerHTML = `<div class="rp-no"><b>Right word, wrong gender.</b>
          <div class="rp-line"><span class="rp-lbl">It is</span><span lang="fr">${esc(item.answer || model)}</span></div>
          <div class="rp-hint">${esc(item.expl || "")}</div></div>`;
        run.tries++; if (run.tries === 1) run.wrong++;
        return settle();
      }
      if (g.verdict === "typo" && run.tries === 0) {
        run.tries++; run.wrong++;
        v().innerHTML = `<div class="rp-no"><b>One letter out.</b><div class="rp-hint">Try again.</div></div>`;
        input.select();
        return;
      }
    }
    run.tries++;
    if (run.tries === 1) run.wrong++;
    const a = autopsy(val, model);
    v().innerHTML = `<div class="rp-no">
      <div class="rp-line"><span class="rp-lbl">You wrote</span>
        <span lang="fr">${a.yourMarks.map(m => `<span class="${m.ok ? "w-ok" : "w-bad"}">${esc(m.w)}</span>`).join(" ") || "<i>nothing</i>"}</span></div>
      ${run.tries >= 2 || opts.stage === "apply" ? `<div class="rp-line"><span class="rp-lbl">A native would write</span>
        <span lang="fr">${esc(model)}</span></div>${item.expl ? `<div class="rp-hint">${esc(item.expl)}</div>` : ""}`
        : `<div class="rp-hint">Not quite — one more try.</div>`}
    </div>`;
    if (run.tries >= 2 || opts.stage === "apply") settle();
    else input.select();
  };

  document.getElementById("g-check").onclick = check;
  input.onkeydown = e => { if (e.key === "Enter") { e.preventDefault(); document.getElementById("g-check").click(); } };
  document.getElementById("g-skip").onclick = () => {
    if (run.tries === 0) run.wrong++;
    run.tries = 2;
    v().innerHTML = `<div class="rp-no"><div class="rp-line"><span class="rp-lbl">Model answer</span>
      <span lang="fr">${esc(model)}</span></div>${item.expl ? `<div class="rp-hint">${esc(item.expl)}</div>` : ""}</div>`;
    input.value = model;
    settle();
  };
}

function renderGrammarWriteView() {
  grammarTypedStage({ stage: "write", bank: "write", stateKey: "gw", icon: "✍️", doneTitle: "Forms produced from memory" });
}
function renderGrammarApplyView() {
  grammarTypedStage({ stage: "apply", bank: "apply", stateKey: "ga", icon: "🎯", doneTitle: "Rule applied in real sentences" });
}

/* ---------- completion ---------- */
function completeGrammarStage(key, stage, pct) {
  const st = App.state;
  const all = ensureGrammarState(st);
  const t = all[key] || (all[key] = { stages: {}, done: false, xp: 0, best: 0 });
  const first = !t.stages[stage];
  t.stages[stage] = true;
  if (typeof pct === "number") t.best = Math.max(t.best || 0, pct);
  if (first) {
    const gain = GRAMMAR_STAGE_XP[stage] || 0;
    t.xp = (t.xp || 0) + gain;
    awardXp(st, "french", gain);
  }
  if (grammarDone(st, key) && !t.done) {
    t.done = true;
    const g = ensureGame(st);
    const badge = "grammar-" + (GRAMMAR_TOPICS[key] || {}).slug;
    if (!g.badges[badge]) g.badges[badge] = todayKey();
  }
  saveState(st);
  if (typeof syncSoon === "function") syncSoon();
}

/* Dashboard card, alongside Conversations and the word test. */
function grammarHomeCard(st) {
  const all = grammarOverall(st);
  const next = grammarChapters()
    .flatMap(c => c.levels.map(l => ({ slug: c.slug, level: l })))
    .find(x => grammarUnlocked(st, x.slug, x.level) && !grammarDone(st, grammarKey(x.slug, x.level)));
  const t = next ? GRAMMAR_TOPICS[grammarKey(next.slug, next.level)] : null;
  const pct = all.total ? Math.round(100 * all.done / all.total) : 0;
  return `
    <div class="card mission" style="--mc:var(--c-french)">
      <div class="m-head">
        <span class="m-title">📐 Grammar</span>
        <span class="m-lvl" style="color:var(--c-french-text)">${t ? esc(t.level) : "done"}</span>
      </div>
      <div class="m-desc">
        Five rules taught end to end — gender, articles, object pronouns, relative pronouns and
        connectors. ${t ? `Next: <b>${esc(t.title)}</b>.` : "Every chapter is finished."}
      </div>
      <div class="m-track"><div class="f" style="width:${pct}%"></div></div>
      <div class="m-foot">
        <span>${all.done} / ${all.total} chapters · ${all.xp} XP</span>
        <span>500 XP each</span>
      </div>
      <button data-nav="grammar">${all.xp ? "Continue" : "Open Grammar"}</button>
    </div>`;
}
