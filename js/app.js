/* app.js — views, session runner, routing (gamified) */
"use strict";

const App = {
  state: loadState(),
  view: "home",
  session: null,
  chain: [],
  lastSummary: null
};

const $app = document.getElementById("app");

function go(view) { App.view = view; render(); }

/* Announce a message to screen readers without changing the visible UI. */
function announce(msg) {
  const el = document.getElementById("sr-live");
  if (!el) return;
  el.textContent = "";           // force re-announcement of identical text
  setTimeout(() => { el.textContent = msg; }, 30);
}

/* innerHTML re-renders destroy focus. Move it to the new view's heading so a
   keyboard or screen-reader user is never stranded at the top of the document. */
function refocusView() {
  const h = $app.querySelector("h1");
  if (h) { h.setAttribute("tabindex", "-1"); h.focus({ preventScroll: true }); }
}

function render() {
  stopTick();
  if (App.view === "home") renderHome();
  else if (App.view === "session") renderSession();
  else if (App.view === "summary") renderSummary();
  else if (App.view === "stats") renderStats();
  else if (App.view === "badges") renderBadges();
  else if (App.view === "mocks") renderMocks();
  else if (App.view === "mockresult") renderMockResult();
  else if (App.view === "library") renderLibrary();
  else if (App.view === "wordindex") renderWordIndex();
  else if (App.view === "writing") renderWriting();
  else if (App.view === "settings") renderSettings();
  window.scrollTo(0, 0);
  refocusView();
}

function greeting() {
  const h = new Date().getHours();
  if (h < 12) return "Good morning";
  if (h < 18) return "Good afternoon";
  return "Good evening";
}

/* ============================ HOME ============================ */

function ringSvg(pct, color) {
  const r = 18, c = 2 * Math.PI * r;
  const off = c * (1 - Math.min(100, pct) / 100);
  return `<svg class="ring" viewBox="0 0 46 46" aria-hidden="true">
    <circle class="bg" cx="23" cy="23" r="${r}"/>
    <circle class="fg" cx="23" cy="23" r="${r}" style="stroke:${color};stroke-dasharray:${c.toFixed(1)};stroke-dashoffset:${off.toFixed(1)}" transform="rotate(-90 23 23)"/>
  </svg>`;
}


/* The French block gets a full-width card: it is the one module with a named
   external target (B2), so the home page shows how far along that road it is
   rather than only how much XP it has earned. */
function frenchCard(st, g, done) {
  const fp = frenchProgress(st);
  const lv = levelFromXp(g.xp.french || 0);
  const level = workingLevel(st);
  const today = todayKey();
  const due = FRENCH_VOCAB.filter(c => {
    const e = st.srs[c.id];
    return e && e.due <= today && e.box < 5;
  }).length;
  const unseen = FRENCH_VOCAB.filter(c => !st.srs[c.id]).length;
  const newLeft = Math.max(0, (st.settings.newPerDay || 10) - (st.newCards[today] || 0));
  const acc = rollingAvg(st, "french", 5);
  const mastered = LEVELS.reduce((n, l) => n + fp.mastery[l].mastered, 0);
  const seen = LEVELS.reduce((n, l) => n + fp.mastery[l].seen, 0);

  const kinds = [
    ["Vocabulary", "spaced repetition, " + FRENCH_VOCAB.length + " cards"],
    ["Grammar", FRENCH_GRAMMAR.length + " drills"],
    ["Conjugation", FRENCH_CONJ.length + " drills"]
  ];
  if (typeof DICTATION_QUESTIONS !== "undefined" && DICTATION_QUESTIONS.length && "speechSynthesis" in window)
    kinds.push(["Listening", DICTATION_QUESTIONS.length + " dictations"]);
  if (typeof READING_QUESTIONS !== "undefined" && READING_QUESTIONS.length)
    kinds.push(["Reading", READING_QUESTIONS.length + " passages"]);

  return `
    <div class="card mission french-wide ${done.french ? "done" : ""}" style="--mc:var(--c-french)">
      <div class="m-head">
        <span class="m-title">🇫🇷 French</span>
        <span class="m-lvl" style="color:var(--c-french-text)">LV ${lv.level}</span>
      </div>
      <div class="fw-grid">
        <div class="fw-main">
          <div class="m-desc">
            Ten minutes a day towards <b>B2</b>. Every block mixes spaced-repetition vocabulary
            with grammar and conjugation drills, and finishes with listening and reading —
            all pitched at your working level, <b>${level}</b>.
          </div>
          <div class="fw-kinds">
            ${kinds.map(([k, n]) => `<span class="fw-chip"><b>${k}</b>${esc(n)}</span>`).join("")}
          </div>
          <div class="m-track"><div class="f" style="width:${lv.pct}%"></div></div>
          <div class="m-foot">
            <span>${lv.into} / ${lv.need} XP</span>
            <span>${done.french ? "✓ done today" : ""}</span>
          </div>
          <button data-start="french">${done.french ? "Practise again" : "Start"}</button>
        </div>
        <div class="fw-side">
          <div class="fw-side-head">
            <span>Road to B2</span><b>${fp.pct}%</b>
          </div>
          <div class="fw-b2"><div class="f" style="width:${fp.pct}%"></div></div>
          <div class="fw-band">${esc(fp.band)}</div>
          <div class="fw-levels">
            ${LEVELS.map(l => {
              const m = fp.mastery[l];
              const pctv = m.total ? Math.round(100 * m.mastered / m.total) : 0;
              return `<div class="fw-lv">
                <span class="fw-lv-name">${l}</span>
                <span class="fw-lv-track"><span class="f" style="width:${pctv}%"></span></span>
                <span class="fw-lv-num">${m.mastered}/${m.total}</span>
              </div>`;
            }).join("")}
          </div>
          <div class="fw-facts">
            <div><b>${due}</b><span>cards due</span></div>
            <div><b>${newLeft}</b><span>new today</span></div>
            <div><b>${mastered}</b><span>mastered</span></div>
            <div><b>${acc === null ? "—" : acc + "%"}</b><span>last 5 blocks</span></div>
          </div>
          <div style="margin-top:2px"><button class="ghost" data-nav="wordindex" style="width:100%">🗂️ Word index — every word and its status</button></div>
          <div class="fw-note">${seen} of ${FRENCH_VOCAB.length} cards started · ${unseen} still untouched. Mastered = Leitner box ${MASTERED_BOX}+.</div>
        </div>
      </div>
    </div>`;
}

function renderHome() {
  const st = App.state;
  const g = ensureGame(st);
  ensureQuests(st);
  const today = todayKey();
  const done = st.days[today] || {};
  const streak = gameStreak(st);
  const dp = dailyProgress(st);
  const bc = badgeCount(st);
  const exams = examCountdowns(st).slice(0, 3);
  const quests = g.quests.items;
  const dateStr = new Date().toLocaleDateString("en-GB", { weekday: "long", day: "numeric", month: "long" });
  const pending = ["french", "eu", "reasoning"].filter(m => !done[m]);

  // French leads on its own full-width card; the EPSO test blocks share the row below.
  const missions = [
    { key: "eu", color: "var(--c-eu)", icon: "🇪🇺", title: "EU Knowledge",
      desc: "Institutions, treaties, law, policies, budget — with a mini-lesson on every question." },
    { key: "reasoning", color: "var(--c-verbal)", icon: "🧠", title: "Reasoning",
      desc: "Verbal, numerical and abstract questions at EPSO pace." }
  ];
  if (epsoBankAvailable()) missions.push({
    key: "epso", color: "var(--c-abstract)", icon: "💼", title: "Digital & SJT",
    desc: "EPSO digital-skills questions and situational judgement scenarios.", optional: true
  });

  $app.innerHTML = `
    <div class="pagehead">
      <div><h1>${greeting()}, Orestis 👋</h1><p class="sub">${dateStr}</p></div>
      <div class="nav">
        <button class="ghost" data-nav="mocks">🏁 Mocks</button>
        <button class="ghost" data-nav="library">📖 Library</button>
        <button class="ghost" data-nav="badges" aria-label="Badges" title="Badges">🏅</button>
        <button class="ghost" data-nav="stats" aria-label="Statistics" title="Statistics">📊</button>
        <button class="ghost" data-nav="settings" aria-label="Settings" title="Settings">⚙️</button>
      </div>
    </div>

    <div class="herorow">
      <div class="herotile flame">
        <div class="ht-ic">${streak > 0 ? "🔥" : "🌱"}</div>
        <div><div class="ht-v">${streak}</div><div class="ht-l">day streak</div></div>
      </div>
      <div class="herotile">
        ${ringSvg(dp.pct, dp.met ? "var(--status-good)" : "var(--c-xp)")}
        <div><div class="ht-v">${dp.xp}</div><div class="ht-l">of ${dp.goal} XP today</div></div>
      </div>
      <div class="herotile">
        <div class="ht-ic">🏅</div>
        <div><div class="ht-v">${bc.earned}<span class="muted" style="font-size:.9rem">/${bc.total}</span></div><div class="ht-l">badges earned</div></div>
      </div>
      <div class="herotile">
        <div class="ht-ic">🧊</div>
        <div><div class="ht-v">${g.freezes}</div><div class="ht-l">streak freezes</div></div>
      </div>
    </div>

    <div class="goalbar">
      <div class="gb-top"><span>Daily goal</span><span class="gb-xp">${dp.xp} / ${dp.goal} XP</span></div>
      <div class="track ${dp.met ? "done" : ""}"><div class="fill" style="width:${dp.pct}%"></div></div>
    </div>

    ${pending.length === 0
      ? `<div class="card" style="margin-bottom:16px;text-align:center">
           <div style="font-size:2rem">🎉</div>
           <b style="color:var(--good-text)">All three blocks done today.</b>
           <div class="muted small" style="margin-top:4px">Practise more any time — extra XP still counts.</div>
         </div>`
      : `<button class="primary big" id="start-routine" style="margin-bottom:16px">▶ Start today's routine · ${pending.length} × 10 min</button>`}

    ${st.sessions.length === 0 ? `
    <div class="card" style="margin-bottom:14px;border-color:#f0cf8e;background:linear-gradient(180deg,#fff8e8,var(--surface-1))">
      <b>Starting from zero here</b>
      <div class="muted small" style="margin-top:4px">Progress is saved in each browser separately —
      this one has no history yet. If you have practised on another device, in another browser, or on
      an older copy of the trainer, export a backup there and import it here.</div>
      <div style="margin-top:10px"><button class="ghost" data-nav="settings">⚙️ Import a backup</button></div>
    </div>` : ""}

    ${frenchCard(st, g, done)}

    <div class="missions">
      ${missions.map(m => {
        const lv = levelFromXp(g.xp[m.key] || 0);
        return `<div class="card mission ${done[m.key] ? "done" : ""}" style="--mc:${m.color}">
          <div class="m-head">
            <span class="m-title">${m.icon} ${m.title}</span>
            <span class="m-lvl" style="color:${m.color}">LV ${lv.level}</span>
          </div>
          <div class="m-desc">${m.desc}</div>
          <div class="m-track"><div class="f" style="width:${lv.pct}%"></div></div>
          <div class="m-foot">
            <span>${lv.into} / ${lv.need} XP</span>
            <span>${done[m.key] ? "✓ done today" : m.optional ? "optional" : ""}</span>
          </div>
          <button data-start="${m.key}">${done[m.key] ? "Practise again" : "Start"}</button>
        </div>`;
      }).join("")}
    </div>

    <h2>Weekly quests</h2>
    <div class="card">
      ${quests.map(q => `
        <div class="quest ${q.done ? "done" : ""}">
          <span class="q-ic">${q.done ? "✅" : "🎯"}</span>
          <div class="q-body">
            <div class="q-label">${esc(q.label)}</div>
            <div class="q-track"><div class="f" style="width:${Math.min(100, Math.round(100 * q.progress / q.target))}%"></div></div>
          </div>
          <span class="q-num">${Math.min(q.progress, q.target)}/${q.target}</span>
        </div>`).join("")}
      <div style="margin-top:12px">
        <button id="challenge-btn" ${challengeDone(st) ? "disabled" : ""}>
          ${challengeDone(st) ? "🛡️ Weekly challenge complete" : "🛡️ Weekly challenge — 10 questions from your weak spots"}
        </button>
      </div>
    </div>

    ${writingAvailable() ? `
    <h2>Writing practice</h2>
    <div class="card">
      <div class="m-desc" style="margin-bottom:10px">Timed EUFTE-style tasks: policy notes, essays, summaries and replies — with the key points a strong answer covers.</div>
      <button data-nav="writing">✍️ Open writing practice</button>
    </div>` : ""}

    ${backupOverdue(st) ? `
    <div class="card" style="margin-top:16px;border-color:#f0cf8e;background:linear-gradient(180deg,#fff8e8,var(--surface-1))">
      <b>💾 Back up your progress</b>
      <div class="muted small" style="margin-top:4px">Your ${st.sessions.length} sessions live only in this browser. Clearing site data would erase them.</div>
      <div style="margin-top:10px;display:flex;gap:8px;flex-wrap:wrap">
        <button id="quick-export">⬇ Export now</button>
        <button class="ghost" id="snooze-backup">Remind me later</button>
      </div>
    </div>` : ""}

    <h2>Countdown</h2>
    <div class="exams">
      ${exams.length ? exams.map(e => `
        <div class="exam">
          <div class="e-days">${e.days}<span>DAYS</span></div>
          <div><div class="e-name">${esc(e.name)}</div><div class="e-note">${esc(e.note)}${e.approx ? " · date approximate" : ""}</div></div>
        </div>`).join("") : `<div class="card muted small">No upcoming dates — add them in ⚙️ Settings.</div>`}
    </div>

    <div class="footer-note">Data stays in this browser · back it up in ⚙️ Settings</div>
  `;

  document.querySelectorAll("[data-nav]").forEach(b => b.onclick = () => go(b.dataset.nav));
  document.querySelectorAll("[data-start]").forEach(b => b.onclick = () => startSession(b.dataset.start, false));
  const sr = document.getElementById("start-routine");
  if (sr) sr.onclick = () => { App.chain = pending.slice(); startSession(App.chain.shift(), true); };
  const cb = document.getElementById("challenge-btn");
  if (cb && !challengeDone(st)) cb.onclick = () => startChallenge();
  const qe = document.getElementById("quick-export");
  if (qe) qe.onclick = () => { exportState(App.state); markBackedUp(App.state); renderHome(); };
  const sb = document.getElementById("snooze-backup");
  if (sb) sb.onclick = () => { snoozeBackup(App.state); renderHome(); };
}

function modelAvailable(id) {
  return typeof WRITING_MODELS !== "undefined" && WRITING_MODELS[id] && WRITING_MODELS[id].model;
}

function writingAvailable() {
  return typeof WRITING_PROMPTS !== "undefined" && WRITING_PROMPTS.length > 0;
}

/* Nudge a backup every 20 sessions, and never in the first week of use. */
function backupOverdue(st) {
  const g = ensureGame(st);
  if (st.sessions.length < 10) return false;
  if (g.backupSnoozedUntil && todayKey() < g.backupSnoozedUntil) return false;
  return st.sessions.length - (g.lastBackupSessions || 0) >= 20;
}
function markBackedUp(st) {
  const g = ensureGame(st);
  g.lastBackupSessions = st.sessions.length;
  g.backupSnoozedUntil = null;
  saveState(st);
}
function snoozeBackup(st) {
  const g = ensureGame(st);
  g.backupSnoozedUntil = addDays(todayKey(), 3);
  saveState(st);
}

/* ============================ SESSION ============================ */

function startSession(module, chained) {
  if (!chained) App.chain = [];
  App.state.seq = (App.state.seq || 0) + 1;
  const builders = { french: buildFrenchSession, eu: buildEuSession, reasoning: buildReasoningSession, epso: buildEpsoSession };
  const s = builders[module](App.state);
  if (!s.items.length) { alert("Question bank is empty for this module."); return; }
  beginSession(s, module);
}

function startMock(examId) {
  const s = buildMockSession(App.state, examId);
  if (!s || !s.items.length) { alert("Not enough questions for this mock yet."); return; }
  if (!confirm(`${s.exam.name}: ${s.items.length} questions in ${s.exam.minutes} minutes.\n\nNo explanations until the end and the clock does not stop. Start now?`)) return;
  App.chain = [];
  App.session = {
    module: "mock", examId, exam: s.exam, items: s.items, idx: 0, mock: true,
    results: s.items.map(it => ({ item: it, answered: false, correct: false })),
    secondsLeft: s.exam.minutes * 60,
    answeredCurrent: false, combo: 0, startedAt: Date.now()
  };
  go("session");
  startTick();
}

function startChallenge() {
  App.chain = [];
  App.state.seq = (App.state.seq || 0) + 1;
  beginSession(buildChallengeSession(App.state), "challenge");
}

function beginSession(s, module) {
  App.session = {
    module, items: s.items, idx: 0, challenge: !!s.challenge,
    results: s.items.map(it => ({ item: it, answered: false, correct: false })),
    secondsLeft: (App.state.settings.minutesPerBlock || 10) * 60,
    answeredCurrent: false, combo: 0, startedAt: Date.now()
  };
  go("session");
  startTick();
}

let tickId = null;
function startTick() {
  stopTick();
  tickId = setInterval(() => {
    const s = App.session;
    if (!s) return stopTick();
    s.secondsLeft--;
    const el = document.getElementById("timer");
    if (el) {
      el.textContent = fmtClock(Math.max(0, s.secondsLeft));
      el.classList.toggle("low", s.secondsLeft <= 60);
    }
    if (s.secondsLeft <= 0) finishSession(true);
  }, 1000);
}
function stopTick() { if (tickId) { clearInterval(tickId); tickId = null; } }

function renderSession() {
  const s = App.session;
  const it = s.items[s.idx];
  const modName = s.mock ? `${s.exam.icon} ${s.exam.name} — MOCK` : s.challenge ? "🛡️ Weekly challenge" :
    { french: "🇫🇷 French", eu: "🇪🇺 EU Knowledge", reasoning: "🧠 Reasoning", epso: "💼 Digital & SJT" }[s.module];
  const kindColor = { vocab: "var(--c-french)", grammar: "var(--c-french)", conj: "var(--c-french)",
    eu: "var(--c-eu)", verbal: "var(--c-verbal)", numerical: "var(--c-numerical)", abstract: "var(--c-abstract)",
    digital: "var(--c-abstract)", sjt: "var(--c-abstract)",
    dictation: "var(--c-french)", reading: "var(--c-french)",
    prep: "var(--c-french)", verbprep: "var(--c-french)" }[it.kind];
  const kindLabel = {
    vocab: it.listen ? `Listening ${it.level} · FR audio` : `Vocabulary ${it.level} · ${it.direction}${it.isNew ? " · NEW WORD" : ""}`,
    grammar: `Grammar ${it.level}`, conj: `Conjugation ${it.level}`,
    eu: `EU · ${it.topic}`, verbal: "Verbal reasoning",
    numerical: "Numerical reasoning", abstract: "Abstract reasoning",
    digital: `Digital skills · ${it.area}`, sjt: `Situational judgement · ${it.competency}`,
    dictation: `Dictée ${it.level} · listening`, reading: `Compréhension écrite ${it.level}`,
    prep: `Prépositions ${it.level}${it.group ? " · " + it.group : ""}`,
    verbprep: `Verbe + préposition ${it.level}${it.verb ? " · " + it.verb : ""}`
  }[it.kind] || `French ${it.level || ""}`.trim();

  let body = "";
  if (it.kind === "verbal") body += `<div class="passage">${esc(it.passage)}</div>`;
  if (it.kind === "reading") body += `<div class="passage" lang="fr">${esc(it.passage)}</div>`;
  if (it.kind === "dictation") body += `<p class="question"><button class="listen-big" id="dict-play">🔊 Écouter</button>
    <button class="ghost small" id="dict-slow">🐢 slower</button></p>`;
  if (it.kind === "numerical") body += renderDataTable(it.table);
  if (it.kind === "abstract") body += `<div class="ab-seq">${it.sequenceSvgs.join("")}<div class="ab-cell ab-unknown">?</div></div>`;
  if (it.kind === "vocab" && it.listen) {
    body += `<p class="question" id="listen-prompt">
      <button class="listen-big" id="listen-play">🔊 Listen</button>
      <button class="ghost small" id="listen-reveal">show the word</button></p>`;
  } else {
    body += `<p class="question">${esc(it.prompt)}</p>`;
  }
  const frenchKinds = ["vocab", "grammar", "conj", "dictation", "reading"];
  const optLang = frenchKinds.includes(it.kind) ? ' lang="fr"' : "";
  body += `<div class="options ${it.svgOptions ? "svg-grid" : ""}" id="options" role="group" aria-label="Answer options">${it.options.map((o, i) =>
    `<button data-opt="${i}"${optLang}><span class="opt-ic" aria-hidden="true">${"ABCD"[i]}</span>${it.svgOptions ? o : esc(o)}</button>`).join("")}</div>`;
  body += `<div id="feedback"></div>`;

  const dots = s.results.map((r, i) =>
    `<i class="${i === s.idx ? "cur" : r.answered ? (r.correct ? "ok" : "no") : ""}"></i>`).join("");

  $app.innerHTML = `
    <div class="session-head">
      <div>
        <b style="color:${kindColor}">${modName}</b>
        <div class="progdots" style="margin-top:6px" role="img" aria-label="Question ${s.idx + 1} of ${s.items.length}">${dots}</div>
      </div>
      <div style="display:flex;align-items:center;gap:12px">
        ${s.combo >= 3 ? `<span class="combo ${s.combo >= 6 ? "hot" : ""}">⚡ ${s.combo} combo</span>` : ""}
        ${it.kind === "numerical" ? `<button class="ghost" id="calc-toggle" aria-label="Open calculator" title="Calculator">🧮</button>` : ""}
        <span class="timer" id="timer" role="timer" aria-label="Time remaining">${fmtClock(s.secondsLeft)}</span>
        <button class="ghost" id="quit" aria-label="Quit this session" title="Quit">✕</button>
      </div>
    </div>
    <div class="card">
      <span class="qbadge" style="--qc:${kindColor}">${esc(kindLabel)}</span>
      ${body}
      <div class="next-row">
        <span class="kbdhint">1–4 to answer · Enter for next</span>
        <button class="primary" id="next" disabled>${s.idx === s.items.length - 1 ? "Finish" : "Next"} →</button>
      </div>
    </div>
  `;

  document.getElementById("quit").onclick = () => {
    if (confirm("Quit this session? Answered questions are still recorded.")) finishSession(false);
  };
  const ct = document.getElementById("calc-toggle");
  if (ct) ct.onclick = toggleCalculator;
  document.querySelectorAll("#options button").forEach(btn =>
    btn.onclick = () => answer(parseInt(btn.dataset.opt, 10)));
  announce(`Question ${s.idx + 1} of ${s.items.length}. ${kindLabel}. ${it.prompt}`);
  document.getElementById("next").onclick = nextQuestion;

  if (it.kind === "dictation") {
    const play = r => speakFrench(it.fr, r);
    document.getElementById("dict-play").onclick = () => play(0.95);
    document.getElementById("dict-slow").onclick = () => play(0.6);
    setTimeout(() => play(0.95), 350);
  }
  if (it.kind === "vocab" && it.listen) {
    const play = () => speakFrench(it.fr);
    document.getElementById("listen-play").onclick = play;
    document.getElementById("listen-reveal").onclick = () => {
      document.getElementById("listen-prompt").innerHTML =
        `${esc(it.fr)} <button class="tts-btn" id="listen-play2" aria-label="Play again">🔊</button>`;
      const p2 = document.getElementById("listen-play2");
      if (p2) p2.onclick = play;
    };
    setTimeout(play, 350);
  }
}

function answer(choice) {
  const s = App.session;
  if (s.answeredCurrent) return;
  s.answeredCurrent = true;
  const it = s.items[s.idx];
  const correct = choice === it.answer;
  const r = s.results[s.idx];
  r.answered = true; r.correct = correct;
  s.combo = correct ? s.combo + 1 : 0;

  if (it.kind === "vocab") applySrsResult(App.state, it.id, correct);
  const bankOf = { grammar: "grammar", conj: "conj", eu: "eu", verbal: "verbal", numerical: "numerical",
    digital: "digital", sjt: "sjt", dictation: "dictation", reading: "reading",
    prep: "prep", verbprep: "verbprep" };
  if (bankOf[it.kind]) {
    recordQuestionResult(App.state, it.id, correct);
    if (!correct) markWrong(App.state, bankOf[it.kind], it.id);
  }
  saveState(App.state);

  if (s.mock) {
    // exam conditions: record silently and advance
    document.querySelectorAll("#options button").forEach((btn, i) => {
      btn.disabled = true;
      if (i === choice) btn.classList.add("sel-mock");
    });
    const next = document.getElementById("next");
    if (next) { next.disabled = false; next.focus(); }
    setTimeout(() => { if (App.session === s && s.answeredCurrent) nextQuestion(); }, 220);
    return;
  }

  document.querySelectorAll("#options button").forEach((btn, i) => {
    btn.disabled = true;
    if (i === choice) btn.classList.add(correct ? "sel-correct" : "sel-wrong");
    if (i === it.answer && i !== choice) btn.classList.add("reveal-correct");
  });

  const mult = Math.min(XP.comboMax, 1 + Math.floor(s.combo / XP.comboStep));
  const gained = correct ? XP.correct * mult : 0;
  let fb = `<div class="verdict ${correct ? "ok" : "no"}">
      <span>${correct ? "✓ Correct" : "✗ Not quite"}</span>
      ${correct ? `<span class="xpgain">+${gained} XP${mult > 1 ? ` (${mult}×)` : ""}</span>`
                : `<span class="xpgain muted">back in your review queue</span>`}
    </div>`;

  if (it.kind === "vocab") {
    fb += `<div class="expl"><b>${esc(it.fr)}</b> — ${esc(it.en)}
      <button class="tts-btn" id="tts" aria-label="Listen in French">🔊</button><br><i>${esc(it.ex)}</i></div>`;
  } else if (it.kind === "dictation") {
    fb += `<div class="expl"><b>${esc(it.fr)}</b><button class="tts-btn" id="tts" aria-label="Listen in French">🔊</button><br>${esc(it.en)}<br><i>${esc(it.expl)}</i></div>`;
  } else if (it.expl) {
    fb += `<div class="expl">${esc(it.expl)}</div>`;
    if (it.learn) fb += `<div class="learn">📚 ${esc(it.learn)}</div>`;
  }
  document.getElementById("feedback").innerHTML = fb;
  const tts = document.getElementById("tts");
  if (tts) tts.onclick = () => speakFrench(it.kind === "dictation" ? it.fr : it.fr + ". " + it.ex);

  // refresh combo chip + dots without a full re-render
  const head = document.querySelector(".session-head .progdots");
  if (head) head.innerHTML = s.results.map((rr, i) =>
    `<i class="${i === s.idx ? "cur" : rr.answered ? (rr.correct ? "ok" : "no") : ""}"></i>`).join("");

  const next = document.getElementById("next");
  next.disabled = false;
  next.focus();
  announce(correct
    ? `Correct. Plus ${gained} XP.`
    : `Incorrect. The answer is: ${it.options[it.answer]}. ${it.expl || ""}`);
}

function nextQuestion() {
  const s = App.session;
  if (!s.answeredCurrent) return;
  s.answeredCurrent = false;
  if (s.idx >= s.items.length - 1) return finishSession(true);
  s.idx++;
  renderSession();
}

function finishSession(completed) {
  stopTick();
  removeCalculator();
  const s = App.session;
  if (!s) return;
  const st = App.state;

  if (s.mock) {
    const seconds = Math.round((Date.now() - s.startedAt) / 1000);
    const score = scoreMock(s.exam, s.results);
    recordMock(st, s.examId, score, seconds);
    // mocks award XP but never touch daily pools, streaks or rolling averages
    const xpTotal = score.correct * XP.correct;
    awardXp(st, "reasoning", Math.round(xpTotal * 0.5));
    awardXp(st, "eu", Math.round(xpTotal * 0.5));
    questProgress(st, "xp", xpTotal);
    saveState(st);
    App.lastMock = { exam: s.exam, score, seconds,
      review: s.results.filter(r => r.answered && !r.correct),
      skipped: s.results.filter(r => !r.answered).length };
    App.session = null;
    go("mockresult");
    return;
  }
  const seconds = Math.min((st.settings.minutesPerBlock || 10) * 60, Math.round((Date.now() - s.startedAt) / 1000));
  const answered = s.results.filter(r => r.answered);

  if (!s.challenge) recordSession(st, s, s.results, seconds, completed);

  const today = todayKey();
  const days = st.days[today] || {};
  const allBlocks = !!(days.french && days.eu && days.reasoning);
  const alreadyCounted = st.game && st.game.routineDay === today;
  const routineNow = allBlocks && !alreadyCounted;
  if (routineNow) ensureGame(st).routineDay = today;

  const xp = computeSessionXp(st, s.module, s.results, routineNow);
  const treeKey = s.challenge ? "eu" : (s.module === "epso" ? "reasoning" : s.module);
  const lvl = awardXp(st, treeKey, xp.total);

  // quests
  const questsDone = [];
  questsDone.push(...questProgress(st, "xp", xp.total));
  if (xp.maxCombo) questsDone.push(...questProgress(st, "combo", xp.maxCombo));
  if (s.module === "eu" && xp.pct >= 90) questsDone.push(...questProgress(st, "eu90", 1));
  if (s.module === "reasoning") questsDone.push(...questProgress(st, "reasoning", 1));
  if (s.challenge) { recordChallenge(st, xp.pct); questsDone.push(...questProgress(st, "challenge", 1)); }
  if (dailyProgress(st).met) questsDone.push(...questProgress(st, "days", 1));
  const newWords = answered.filter(r => r.item.kind === "vocab" && r.item.isNew && r.correct).length;
  if (newWords) questsDone.push(...questProgress(st, "words", newWords));

  const best = updateBest(st, s.challenge ? "challenge" : s.module, xp.pct);
  maybeEarnFreeze(st);

  const tripleCrown = allBlocks && ["french", "eu", "reasoning"].every(m => {
    const todays = st.sessions.filter(x => x.date === today && x.module === m);
    return todays.length && todays[todays.length - 1].pct >= 90;
  });
  const badges = evaluateBadges(st, {
    pct: xp.pct, answered: xp.answered, maxCombo: xp.maxCombo, finished: true,
    tripleCrown, challengePct: s.challenge ? xp.pct : undefined
  });

  saveState(st);
  syncSoon();
  App.lastSummary = {
    module: s.module, challenge: s.challenge, xp, seconds, completed,
    levelUp: lvl.leveledUp ? { tree: treeKey, to: lvl.to } : null,
    badges, questsDone, best,
    review: answered.filter(r => !r.correct),
    goalMet: dailyProgress(st).met
  };
  App.session = null;
  go("summary");
}

/* ============================ SUMMARY ============================ */

function confetti() {
  const colors = ["#f0a92b", "#2fa14a", "#2a78d6", "#eb6834", "#b466d6"];
  const wrap = document.createElement("div");
  wrap.className = "confetti-wrap";
  for (let i = 0; i < 40; i++) {
    const c = document.createElement("div");
    c.className = "confetti";
    c.style.left = Math.random() * 100 + "vw";
    c.style.top = "-20px";
    c.style.background = colors[i % colors.length];
    c.style.animationDelay = (Math.random() * 0.5) + "s";
    c.style.animationDuration = (1.8 + Math.random() * 1.2) + "s";
    wrap.appendChild(c);
  }
  document.body.appendChild(wrap);
  setTimeout(() => wrap.remove(), 3600);
}

function renderSummary() {
  const sm = App.lastSummary;
  const x = sm.xp;
  const title = sm.challenge ? "🛡️ Weekly challenge" :
    { french: "🇫🇷 French", eu: "🇪🇺 EU Knowledge", reasoning: "🧠 Reasoning", epso: "💼 Digital & SJT" }[sm.module];
  const chainNext = App.chain.length ? App.chain[0] : null;
  const rewards = [];
  if (sm.levelUp) rewards.push({ ic: "⬆️", name: `${TREES[sm.levelUp.tree].name} level ${sm.levelUp.to}!`, desc: "Your skill tree grew." });
  if (sm.best.isNew && x.answered >= 4) rewards.push({ ic: "🏆", name: "New personal best", desc: sm.best.prev == null ? `${x.pct}% — your first record here.` : `${x.pct}%, beating ${sm.best.prev}%.` });
  if (sm.goalMet) rewards.push({ ic: "🎯", name: "Daily goal reached", desc: "Your streak is safe today." });
  sm.questsDone.forEach(q => rewards.push({ ic: "✅", name: "Quest complete", desc: q.label }));
  sm.badges.forEach(b => rewards.push({ ic: b.icon, name: `Badge: ${b.name}`, desc: b.desc }));

  const emoji = x.pct >= 90 ? "🎉" : x.pct >= 70 ? "💪" : "📚";

  $app.innerHTML = `
    <div class="pagehead"><h1>${title}</h1></div>
    <div class="card">
      <div class="summary-hero">
        <div style="font-size:2.2rem">${emoji}</div>
        <div class="sh-score" style="color:${x.pct >= 90 ? "var(--good-text)" : "var(--text-primary)"}">${x.pct}%</div>
        <div class="sh-sub">${x.correct} of ${x.answered} correct · ${fmtClock(sm.seconds)}${x.maxCombo >= 3 ? ` · best combo ${x.maxCombo}⚡` : ""}</div>
      </div>
      <div class="xplist">
        <div class="xprow"><span>Correct answers</span><span class="v">+${x.base}</span></div>
        ${x.comboBonus ? `<div class="xprow"><span>Combo bonus</span><span class="v">+${x.comboBonus}</span></div>` : ""}
        ${x.accuracy ? `<div class="xprow"><span>90%+ accuracy</span><span class="v">+${x.accuracy}</span></div>` : ""}
        ${x.perfect ? `<div class="xprow"><span>Perfect session</span><span class="v">+${x.perfect}</span></div>` : ""}
        ${x.routine ? `<div class="xprow"><span>All three blocks</span><span class="v">+${x.routine}</span></div>` : ""}
        <div class="xprow total"><span>Total XP</span><span class="v">+${x.total}</span></div>
      </div>
      ${rewards.length ? `<div class="rewards">${rewards.map((r, i) => `
        <div class="reward" style="animation-delay:${Math.min(i * 0.09, 0.6)}s">
          <span class="r-ic">${r.ic}</span>
          <div><div class="r-name">${esc(r.name)}</div><div class="r-desc">${esc(r.desc)}</div></div>
        </div>`).join("")}</div>` : ""}
      <div style="margin-top:18px">
        ${chainNext
          ? `<button class="primary big" id="chain-next">▶ Next: ${{ french: "French", eu: "EU Knowledge", reasoning: "Reasoning", epso: "Digital & SJT" }[chainNext]}</button>
             <button class="ghost" id="home" style="width:100%;margin-top:8px">Stop here</button>`
          : `<button class="primary big" id="home">← Back to dashboard</button>`}
      </div>
    </div>

    ${sm.review.length ? `
      <h2>Review your misses (${sm.review.length})</h2>
      ${sm.review.map(r => `
        <div class="card" style="margin-bottom:10px">
          <p class="question" style="font-size:.98rem">${esc(r.item.prompt)}</p>
          ${r.item.svgOptions
            ? `<div class="small" style="color:var(--good-text)"><b>Answer:</b><div class="ab-review">${r.item.options[r.item.answer]}</div></div>`
            : `<p class="small" style="color:var(--good-text)"><b>Answer:</b> ${esc(r.item.options[r.item.answer])}</p>`}
          ${r.item.expl ? `<p class="small muted">${esc(r.item.expl)}</p>` : ""}
          ${r.item.learn ? `<div class="learn">📚 ${esc(r.item.learn)}</div>` : ""}
          ${r.item.kind === "vocab" ? `<p class="small muted"><i>${esc(r.item.ex)}</i></p>` : ""}
        </div>`).join("")}` : ""}
  `;

  const hb = document.getElementById("home");
  if (hb) hb.onclick = () => { App.chain = []; go("home"); };
  const cn = document.getElementById("chain-next");
  if (cn) cn.onclick = () => startSession(App.chain.shift(), true);

  if (rewards.length || x.pct >= 90) confetti();
}

/* ============================ BADGES ============================ */

function renderBadges() {
  const st = App.state;
  const g = ensureGame(st);
  const bc = badgeCount(st);
  const tiers = [
    { key: "milestone", label: "Milestones" },
    { key: "skill", label: "Skill" },
    { key: "comeback", label: "Comeback" },
    { key: "secret", label: "Secret" }
  ];

  $app.innerHTML = `
    <div class="pagehead">
      <h1>🏅 Badges <span class="muted" style="font-size:1rem">${bc.earned}/${bc.total}</span></h1>
      <div class="nav"><button class="ghost" data-nav="home">← Dashboard</button></div>
    </div>
    ${tiers.map(t => `
      <h2>${t.label}</h2>
      <div class="badgegrid">
        ${BADGES.filter(b => b.tier === t.key).map(b => {
          const earned = !!g.badges[b.id];
          const hide = b.secret && !earned;
          return `<div class="badge ${earned ? "earned" : "locked"}">
            <div class="b-ic">${hide ? "❓" : b.icon}</div>
            <div class="b-name">${hide ? "Secret" : esc(b.name)}</div>
            <div class="b-desc">${hide ? "Keep training to discover" : esc(b.desc)}</div>
          </div>`;
        }).join("")}
      </div>`).join("")}
  `;
  document.querySelectorAll("[data-nav]").forEach(b => b.onclick = () => go(b.dataset.nav));
}


/* ============================ MOCK EXAMS ============================ */

function renderMocks() {
  const st = App.state;
  const hist = mockHistory(st);
  $app.innerHTML = `
    <div class="pagehead">
      <h1>🏁 Mock exams</h1>
      <div class="nav"><button class="ghost" data-nav="home">← Dashboard</button></div>
    </div>
    <p class="sub">Real length, real clock, no explanations until the end. Nothing here affects your daily streak or rolling averages — treat it as a dress rehearsal.</p>

    <div class="missions">
      ${MOCK_EXAMS.map(e => {
        const n = e.parts.reduce((a, p) => a + p.n, 0);
        const last = hist.filter(m => m.examId === e.id).slice(-1)[0];
        return `<div class="card mission" style="--mc:var(--c-abstract)">
          <div class="m-head"><span class="m-title">${e.icon} ${esc(e.name)}</span>
            <span class="m-lvl">${n} Q · ${e.minutes} min</span></div>
          <div class="m-desc">${esc(e.blurb)}</div>
          <div class="m-foot"><span>${last ? `last: ${last.pct}%` : "not attempted"}</span>
            <span>${esc(e.note)}</span></div>
          <button data-mock="${e.id}">Start mock</button>
        </div>`;
      }).join("")}
    </div>

    ${hist.length ? `
      <h2>Mock history</h2>
      <div class="card">
        <table class="logtable">
          <thead><tr><th>Date</th><th>Exam</th><th>Score</th><th>Parts</th><th>Time</th></tr></thead>
          <tbody>${hist.slice().reverse().slice(0, 20).map(m => {
            const ex = MOCK_EXAMS.find(x => x.id === m.examId);
            return `<tr>
              <td>${m.date}</td>
              <td>${ex ? esc(ex.name) : m.examId}</td>
              <td><b style="color:${m.passedAll ? "var(--good-text)" : "var(--status-critical)"}">${m.pct}%</b> (${m.correct}/${m.total})</td>
              <td class="muted small">${m.parts.map(p => `${mockLabel(p.kind).slice(0, 3)} ${p.pct}%`).join(" · ")}</td>
              <td>${fmtClock(m.seconds || 0)}</td>
            </tr>`;
          }).join("")}</tbody>
        </table>
      </div>` : ""}
  `;
  document.querySelectorAll("[data-nav]").forEach(b => b.onclick = () => go(b.dataset.nav));
  document.querySelectorAll("[data-mock]").forEach(b => b.onclick = () => startMock(b.dataset.mock));
}

function renderMockResult() {
  const r = App.lastMock;
  const sc = r.score;
  $app.innerHTML = `
    <div class="pagehead"><h1>${r.exam.icon} ${esc(r.exam.name)} — result</h1></div>
    <div class="card">
      <div class="summary-hero">
        <div style="font-size:2.2rem">${sc.passedAll ? "🏆" : "📋"}</div>
        <div class="sh-score" style="color:${sc.passedAll ? "var(--good-text)" : "var(--text-primary)"}">${sc.pct}%</div>
        <div class="sh-sub">${sc.correct} of ${sc.total} correct · ${fmtClock(r.seconds)}${r.skipped ? ` · ${r.skipped} unanswered` : ""}</div>
      </div>
      <div class="goals" style="margin-top:18px">
        ${sc.parts.map(p => meterRow(
          mockLabel(p.kind), p.passed ? "var(--status-good)" : "var(--status-critical)",
          p.pct, p.need, `${p.correct}/${p.total} · ${p.pct}%`)).join("")}
      </div>
      <p class="small muted" style="margin-top:10px">The marker on each bar is the indicative pass mark. ${esc(r.exam.note)}</p>
      <div style="margin-top:18px"><button class="primary big" id="mock-home">← Back to dashboard</button></div>
    </div>

    ${r.review.length ? `
      <h2>Review your misses (${r.review.length})</h2>
      ${r.review.map(x => `
        <div class="card" style="margin-bottom:10px">
          <span class="qbadge" style="--qc:var(--c-abstract)">${esc(mockLabel(x.item.kind))}</span>
          ${x.item.passage ? `<div class="passage">${esc(x.item.passage)}</div>` : ""}
          ${x.item.table ? renderDataTable(x.item.table) : ""}
          ${x.item.sequenceSvgs ? `<div class="ab-seq">${x.item.sequenceSvgs.join("")}<div class="ab-cell ab-unknown">?</div></div>` : ""}
          <p class="question" style="font-size:.98rem">${esc(x.item.prompt)}</p>
          ${x.item.svgOptions
            ? `<div class="small" style="color:var(--good-text)"><b>Answer:</b><div class="ab-review">${x.item.options[x.item.answer]}</div></div>`
            : `<p class="small" style="color:var(--good-text)"><b>Answer:</b> ${esc(x.item.options[x.item.answer])}</p>`}
          ${x.item.expl ? `<p class="small muted">${esc(x.item.expl)}</p>` : ""}
          ${x.item.learn ? `<div class="learn">📚 ${esc(x.item.learn)}</div>` : ""}
        </div>`).join("")}` : ""}
  `;
  document.getElementById("mock-home").onclick = () => go("home");
}

/* ============================ LIBRARY ============================ */

function renderLibrary() {
  const st = App.state;
  const q = (App.libQuery || "").toLowerCase().trim();
  const tab = App.libTab || "eu";

  let rows = "";
  if (tab === "eu") {
    const items = EU_QUESTIONS.filter(x =>
      !q || x.q.toLowerCase().includes(q) || x.topic.toLowerCase().includes(q) ||
      (EU_LEARN[x.id] || "").toLowerCase().includes(q)).slice(0, 120);
    rows = items.map(x => `
      <div class="libitem">
        <div class="libtop"><span class="qbadge" style="--qc:var(--c-eu)">${esc(x.topic)}</span>
          <span class="libstat">${questionStreak(st, x.id) >= (st.settings.retireStreak || 3) ? "✓ mastered" : ""}</span></div>
        <div class="libq">${esc(x.q)}</div>
        <div class="liba">${esc(x.options[x.a])}</div>
        ${EU_LEARN[x.id] ? `<div class="learn">📚 ${esc(EU_LEARN[x.id])}</div>` : ""}
      </div>`).join("");
  } else {
    const items = FRENCH_VOCAB.filter(c =>
      !q || c.fr.toLowerCase().includes(q) || c.en.toLowerCase().includes(q)).slice(0, 200);
    rows = items.map(c => {
      const e = st.srs[c.id];
      const box = e ? e.box : 0;
      return `<div class="libitem">
        <div class="libtop"><span class="qbadge" style="--qc:var(--c-french)">${c.level}</span>
          <span class="libstat">${box ? `box ${box}/5` : "not seen yet"}</span></div>
        <div class="libq">${esc(c.fr)} — <span class="muted">${esc(c.en)}</span>
          <button class="tts-btn" data-say="${esc(c.fr)}">🔊</button></div>
        <div class="liba"><i>${esc(c.ex)}</i></div>
      </div>`;
    }).join("");
  }

  $app.innerHTML = `
    <div class="pagehead">
      <h1>📖 Library</h1>
      <div class="nav">
        <button class="ghost" data-nav="wordindex">🗂️ Word index</button>
        <button class="ghost" data-nav="home">← Dashboard</button>
      </div>
    </div>
    <p class="sub">Browse and revise without a quiz — search everything you are learning.</p>
    <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:12px">
      <button class="${tab === "eu" ? "primary" : ""}" data-tab="eu">🇪🇺 EU notes</button>
      <button class="${tab === "fr" ? "primary" : ""}" data-tab="fr">🇫🇷 Vocabulary</button>
      <input type="text" id="lib-search" placeholder="Search…" value="${esc(App.libQuery || "")}"
        style="flex:1;min-width:180px;font:inherit;padding:9px 12px;border-radius:var(--r-md);border:2px solid var(--grid);background:var(--surface-1)">
    </div>
    <div class="card">${rows || `<p class="muted">Nothing matches “${esc(q)}”.</p>`}</div>
    <p class="small muted" style="margin-top:10px">Showing the first matches only — narrow your search to see more.</p>
  `;
  document.querySelectorAll("[data-nav]").forEach(b => b.onclick = () => go(b.dataset.nav));
  document.querySelectorAll("[data-tab]").forEach(b => b.onclick = () => { App.libTab = b.dataset.tab; renderLibrary(); });
  document.querySelectorAll("[data-say]").forEach(b => b.onclick = () => speakFrench(b.dataset.say));
  const si = document.getElementById("lib-search");
  if (si) {
    si.oninput = e => {
      App.libQuery = e.target.value;
      clearTimeout(App.libTimer);
      App.libTimer = setTimeout(() => {
        const pos = e.target.selectionStart;
        renderLibrary();
        const el = document.getElementById("lib-search");
        if (el) { el.focus(); el.setSelectionRange(pos, pos); }
      }, 250);
    };
  }
}

/* ============================ WRITING ============================ */

function renderWriting() {
  const st = App.state;
  const g = ensureGame(st);
  g.writing = g.writing || { done: {}, current: null };
  const idx = App.writeIdx != null ? App.writeIdx : 0;
  const p = WRITING_PROMPTS[idx];
  const draftKey = "draft-" + p.id;
  const saved = (g.writing.drafts && g.writing.drafts[draftKey]) || "";

  $app.innerHTML = `
    <div class="pagehead">
      <h1>✍️ Writing practice</h1>
      <div class="nav"><button class="ghost" data-nav="home">← Dashboard</button></div>
    </div>

    <div class="card">
      <div class="m-head" style="margin-bottom:8px">
        <span class="qbadge" style="--qc:var(--c-eu)">${esc(p.type)} · ${esc(p.topic)}</span>
        <span class="m-lvl">${p.minutes} min · ${esc(p.words)} words</span>
      </div>
      <p class="question">${esc(p.prompt)}</p>
      <textarea id="draft" placeholder="Write your answer here… it is saved automatically in this browser."
        style="width:100%;min-height:260px;font:inherit;line-height:1.6;padding:14px;border-radius:var(--r-md);border:2px solid var(--grid);background:var(--surface-1);color:var(--text-primary);resize:vertical">${esc(saved)}</textarea>
      <div style="display:flex;justify-content:space-between;align-items:center;gap:10px;margin-top:8px;flex-wrap:wrap">
        <span class="muted small" id="wc">0 words</span>
        <div style="display:flex;gap:8px;flex-wrap:wrap">
          <button id="copy-draft">📋 Copy for feedback</button>
          <button id="show-points">💡 Show key points</button>
          ${modelAvailable(p.id) ? `<button id="show-model">📄 Model answer</button>` : ""}
        </div>
      </div>
      <div id="points-box"></div>
    </div>

    <div style="display:flex;justify-content:space-between;gap:8px;margin-top:14px">
      <button id="prev-prompt" ${idx === 0 ? "disabled" : ""}>← Previous</button>
      <span class="muted small" style="align-self:center">${idx + 1} / ${WRITING_PROMPTS.length}</span>
      <button id="next-prompt" ${idx >= WRITING_PROMPTS.length - 1 ? "disabled" : ""}>Next →</button>
    </div>
    <div class="learn" style="margin-top:14px">
      <b>How the real EUFTE works</b><br>
      A 40-minute free-text answer in your Language 2, marked out of 10 with a pass mark of 5, and worth
      about 15% of the final AD5 ranking. EPSO gives you a background document in advance and again on the
      day, and you answer <i>on the basis of that documentation</i>. It scores <b>written communication</b> —
      structure, concision, clarity, audience awareness and correct use of the source — not EU trivia or
      language proficiency. Only papers of candidates who clear the MCQ phase get corrected.
      <span class="muted">(Format details gathered from preparation providers summarising the competition
      notice; confirm against the official notice before relying on the exact weights.)</span>
    </div>
    <p class="small muted" style="margin-top:12px">There is no automatic marking here — free text needs a human or an AI reader. Write under the clock, then use <b>Copy for feedback</b> and paste the task plus your answer into Claude asking for EPSO-style marking.</p>
  `;

  document.querySelectorAll("[data-nav]").forEach(b => b.onclick = () => go(b.dataset.nav));
  const ta = document.getElementById("draft");
  const wc = document.getElementById("wc");
  const count = () => {
    const n = ta.value.trim() ? ta.value.trim().split(/\s+/).length : 0;
    wc.textContent = n + " words";
    const target = parseInt(String(p.words).split("-")[0], 10) || 0;
    wc.style.color = n >= target ? "var(--good-text)" : "var(--text-muted)";
  };
  count();
  ta.oninput = () => {
    count();
    clearTimeout(App.draftTimer);
    App.draftTimer = setTimeout(() => {
      g.writing.drafts = g.writing.drafts || {};
      g.writing.drafts[draftKey] = ta.value;
      saveState(st);
    }, 400);
  };
  document.getElementById("copy-draft").onclick = () => {
    const text = `EPSO ${p.type} practice — ${p.topic}\nTime: ${p.minutes} min, target ${p.words} words\n\nTASK:\n${p.prompt}\n\nMY ANSWER:\n${ta.value}\n\nPlease mark this as an EPSO assessor would: structure, argument quality, EU knowledge accuracy, clarity and register. Give a score out of 10 and three concrete improvements.`;
    navigator.clipboard.writeText(text).then(
      () => { const b = document.getElementById("copy-draft"); b.textContent = "✓ Copied"; setTimeout(() => b.textContent = "📋 Copy for feedback", 1600); },
      () => alert("Copy failed — select the text manually.")
    );
  };
  const sm = document.getElementById("show-model");
  if (sm) sm.onclick = () => {
    const n = (ta.value.trim() ? ta.value.trim().split(/\s+/).length : 0);
    if (n < 60 && !confirm("You have written " + n + " words. Reading the model answer first makes the exercise much less useful.\n\nShow it anyway?")) return;
    const m = WRITING_MODELS[p.id];
    document.getElementById("points-box").innerHTML = `
      <div class="learn" style="margin-top:12px">
        <b>Model answer</b> <span class="muted">(${m.words} words — yours: ${n})</span>
        <div class="modeltext">${esc(m.model)}</div>
        <b>Why this works</b><div>${esc(m.why)}</div>
      </div>`;
  };
  document.getElementById("show-points").onclick = () => {
    document.getElementById("points-box").innerHTML = `
      <div class="learn" style="margin-top:12px">
        <b>A strong answer covers</b>
        <ul style="margin:6px 0 10px 18px;padding:0">${p.points.map(x => `<li>${esc(x)}</li>`).join("")}</ul>
        <b>Common pitfalls</b>
        <ul style="margin:6px 0 0 18px;padding:0">${p.pitfalls.map(x => `<li>${esc(x)}</li>`).join("")}</ul>
      </div>`;
  };
  const prev = document.getElementById("prev-prompt");
  const next = document.getElementById("next-prompt");
  if (prev) prev.onclick = () => { App.writeIdx = idx - 1; renderWriting(); };
  if (next) next.onclick = () => { App.writeIdx = idx + 1; renderWriting(); };
}

/* ============================ STATS ============================ */

function renderStats() {
  const st = App.state;
  const g = ensureGame(st);
  const fp = frenchProgress(st);
  const m = fp.mastery;
  const boxes = [0, 0, 0, 0, 0];
  for (const c of FRENCH_VOCAB) { const e = st.srs[c.id]; if (e) boxes[Math.max(0, e.box - 1)]++; }
  const topics = euTopicStats(st);
  const recent = st.sessions.slice(-20).reverse();
  const modColor = { french: "var(--c-french)", eu: "var(--c-eu)", reasoning: "var(--c-verbal)" };
  const bests = g.bests || {};

  $app.innerHTML = `
    <div class="pagehead">
      <h1>📊 Statistics</h1>
      <div class="nav"><button class="ghost" data-nav="home">← Dashboard</button></div>
    </div>

    <div class="herorow">
      <div class="herotile"><div class="ht-ic">⭐</div><div><div class="ht-v">${g.totalXp}</div><div class="ht-l">total XP</div></div></div>
      <div class="herotile"><div class="ht-ic">⏱️</div><div><div class="ht-v">${totalMinutes(st)}</div><div class="ht-l">minutes trained</div></div></div>
      <div class="herotile"><div class="ht-ic">📅</div><div><div class="ht-v">${st.sessions.length}</div><div class="ht-l">sessions</div></div></div>
      <div class="herotile"><div class="ht-ic">🔥</div><div><div class="ht-v">${gameStreak(st)}</div><div class="ht-l">day streak</div></div></div>
    </div>

    <h2>Skill trees</h2>
    <div class="missions">
      ${Object.values(TREES).map(t => {
        const lv = levelFromXp(g.xp[t.key] || 0);
        return `<div class="card mission" style="--mc:${t.color}">
          <div class="m-head"><span class="m-title">${t.icon} ${t.name}</span><span class="m-lvl" style="color:${t.color}">LV ${lv.level}</span></div>
          <div class="m-track"><div class="f" style="width:${lv.pct}%"></div></div>
          <div class="m-foot"><span>${g.xp[t.key] || 0} XP total</span><span>${lv.into}/${lv.need} to LV ${lv.level + 1}</span></div>
        </div>`;
      }).join("")}
    </div>

    <h2>Consistency (last 12 weeks)</h2>
    <div class="card chart-card">${svgHeatmap(heatmapData(st, 12))}
      <div class="legendline">Blocks completed per day: 0 → 3, darker = more.</div></div>

    <h2>Scores over time <span class="muted small">(dashed line = 90% goal)</span></h2>
    <div class="chart-grid">
      <div class="card chart-card"><h3 style="color:var(--c-eu)">🇪🇺 EU knowledge ${bests.eu ? `<span class="muted">· best ${bests.eu}%</span>` : ""}</h3>${svgLineChart(scoreSeries(st, "eu", 30), "var(--c-eu)", 90)}</div>
      <div class="card chart-card"><h3 style="color:var(--c-verbal)">📖 Verbal</h3>${svgLineChart(scoreSeries(st, "verbal", 30), "var(--c-verbal)", 90)}</div>
      <div class="card chart-card"><h3 style="color:var(--c-numerical)">🔢 Numerical</h3>${svgLineChart(scoreSeries(st, "numerical", 30), "var(--c-numerical)", 90)}</div>
      <div class="card chart-card"><h3 style="color:var(--c-abstract)">🔷 Abstract</h3>${svgLineChart(scoreSeries(st, "abstract", 30), "var(--c-abstract)", 90)}</div>
      ${epsoBankAvailable() ? `
      <div class="card chart-card"><h3 style="color:var(--c-abstract)">💻 Digital skills</h3>${svgLineChart(scoreSeries(st, "digital", 30), "var(--c-abstract)", 90)}</div>
      <div class="card chart-card"><h3 style="color:var(--c-abstract)">🤝 Situational judgement</h3>${svgLineChart(scoreSeries(st, "sjt", 30), "var(--c-abstract)", 90)}</div>` : ""}
      <div class="card chart-card"><h3 style="color:var(--c-french)">🇫🇷 French accuracy ${bests.french ? `<span class="muted">· best ${bests.french}%</span>` : ""}</h3>${svgLineChart(scoreSeries(st, "french", 30), "var(--c-french)", 85)}</div>
    </div>

    <h2>French — road to B2 (${fp.pct}%)</h2>
    <div class="chart-grid">
      <div class="card chart-card"><h3>Vocabulary mastery by level</h3>
        ${svgBarsH(LEVELS.map(lv => ({
          label: `${lv} (${m[lv].mastered}/${m[lv].total})`,
          pct: m[lv].total ? Math.round(100 * m[lv].mastered / m[lv].total) : 0, n: m[lv].seen
        })), "var(--c-french)", 80)}
        <div class="legendline">Mastered = Leitner box 4+. Status: ${esc(fp.band)}.</div></div>
      <div class="card chart-card"><h3>Leitner box distribution</h3>${svgBoxes(boxes)}
        <div class="legendline">Cards move right with every correct review.</div></div>
    </div>

    <h2>EU knowledge by topic</h2>
    <div class="card chart-card">
      ${topics.length ? svgBarsH(topics, "var(--c-eu)", 90) : `<p class="muted">Complete an EU session to see the breakdown.</p>`}
      <div class="legendline">Weakest topics first — these feed your weekly challenge.</div>
    </div>

    <h2>Questions mastered (retired from rotation)</h2>
    <div class="card goals">
      ${[
        { label: "EU knowledge", color: "var(--c-eu)", m: bankMastery(st, EU_QUESTIONS.map(q => q.id)) },
        { label: "Verbal", color: "var(--c-verbal)", m: bankMastery(st, VERBAL_QUESTIONS.map(q => q.id)) },
        { label: "Numerical", color: "var(--c-numerical)", m: bankMastery(st, NUMERICAL_QUESTIONS.map(q => q.id)) },
        { label: "Grammar", color: "var(--c-french)", m: bankMastery(st, FRENCH_GRAMMAR.map(q => q.id)) },
        { label: "Conjugation", color: "var(--c-french)", m: bankMastery(st, FRENCH_CONJ.map(q => q.id)) },
        { label: "Prepositions", color: "var(--c-french)", m: bankMastery(st, (typeof PREPOSITIONS !== "undefined" ? PREPOSITIONS : []).map(q => q.id)) },
        { label: "Verb + preposition", color: "var(--c-french)", m: bankMastery(st, (typeof VERB_PREP !== "undefined" ? VERB_PREP : []).map(q => q.id)) }
      ].concat(epsoBankAvailable() ? [
        { label: "Digital skills", color: "var(--c-abstract)", m: bankMastery(st, DIGITAL_QUESTIONS.map(q => q.id)) },
        { label: "Situational judgement", color: "var(--c-abstract)", m: bankMastery(st, SJT_QUESTIONS.map(q => q.id)) }
      ] : []).map(b => meterRow(b.label, b.color, Math.round(100 * b.m.retired / Math.max(1, b.m.total)), 100, `${b.m.retired}/${b.m.total}`)).join("")}
    </div>
    <p class="small muted">Retires after ${st.settings.retireStreak || 3} correct answers in a row; one miss brings it back.</p>

    <h2>Session log</h2>
    <div class="card">
      ${recent.length === 0 ? `<p class="muted">No sessions yet.</p>` : `
      <table class="logtable">
        <thead><tr><th>Date</th><th>Block</th><th>Score</th><th>Detail</th><th>Time</th></tr></thead>
        <tbody>${recent.map(s => `
          <tr>
            <td>${s.date}</td>
            <td><span class="mdot" style="background:${modColor[s.module]}"></span>${MODULES[s.module] ? MODULES[s.module].name : s.module}</td>
            <td>${s.pct}% (${s.correct}/${s.total})</td>
            <td class="muted small">${s.sub ? (s.sub.verbal
              ? `V ${s.sub.verbal.c}/${s.sub.verbal.t} · N ${s.sub.numerical.c}/${s.sub.numerical.t}${s.sub.abstract ? ` · A ${s.sub.abstract.c}/${s.sub.abstract.t}` : ""}`
              : `D ${s.sub.digital.c}/${s.sub.digital.t} · S ${s.sub.sjt.c}/${s.sub.sjt.t}`) : ""}</td>
            <td>${fmtClock(s.seconds || 0)}</td>
          </tr>`).join("")}</tbody>
      </table>`}
    </div>
  `;
  document.querySelectorAll("[data-nav]").forEach(b => b.onclick = () => go(b.dataset.nav));
  bindChartTooltips($app);
}

/* ============================ SETTINGS ============================ */


/* Answers "where is my progress written, and is any of it here?" in one glance,
   so an empty dashboard can be told apart from a lost one. */
function fillStorageFacts(st) {
  const box = document.getElementById("st-facts");
  const originEl = document.getElementById("st-origin");
  if (!box) return;
  if (originEl) originEl.textContent = location.origin === "null" ? "this file" : location.origin;

  const g = ensureGame(st);
  const days = Object.keys(g.dailyXp || {}).sort();
  const active = days.filter(d => g.dailyXp[d] > 0);
  let bytes = 0;
  try { bytes = (localStorage.getItem(LS_KEY) || "").length; } catch (e) { bytes = 0; }

  const facts = [
    ["Sessions recorded", st.sessions.length],
    ["Days practised", active.length],
    ["First active day", active.length ? active[0] : "—"],
    ["Last active day", active.length ? active[active.length - 1] : "—"],
    ["Total XP", g.totalXp || 0],
    ["Stored size", bytes ? (bytes / 1024).toFixed(0) + " KB" : "empty"]
  ];
  box.innerHTML = facts.map(([k, v]) =>
    `<div><b>${esc(String(v))}</b><span>${k}</span></div>`).join("") +
    `<div><b id="st-persist">…</b><span>eviction-proof</span></div>`;

  const pe = document.getElementById("st-persist");
  if (!navigator.storage || !navigator.storage.persisted) { pe.textContent = "n/a"; return; }
  navigator.storage.persisted()
    .then(ok => { pe.textContent = ok ? "yes" : "no"; if (!ok) pe.style.color = "var(--status-critical)"; })
    .catch(() => { pe.textContent = "n/a"; });
}


/* Sync settings. The token is deliberately kept out of the state blob and out
   of exports; it lives in its own localStorage key on this device only. */
function syncPanel(st) {
  const c = syncCfg(st);
  const tok = syncToken();
  const on = syncReady(st);
  const status = c.lastError ? `<span style="color:var(--status-critical)">${esc(c.lastError)}</span>`
    : c.lastSync ? `Last synced ${esc(new Date(c.lastSync).toLocaleString("en-GB"))}`
    : on ? "Configured — not synced yet" : "Off";
  return `
    <div class="card">
      <div class="set-row">
        <div><b>Keep progress in a GitHub repo</b>
          <div class="s-desc">Every finished block is pushed to one JSON file in a repo you own,
          and pulled back when you open the trainer elsewhere. Histories are merged, so practising
          on the laptop and the phone on the same day keeps both.</div></div>
        <input type="checkbox" id="sync-on" ${c.enabled ? "checked" : ""}>
      </div>
      <div class="set-row">
        <div style="flex:1"><b>Repository</b>
          <div class="s-desc">owner/name — make it <b>private</b>, your study history is in it.</div></div>
        <input type="text" id="sync-repo" placeholder="orestoubas/launchpad-data"
               value="${esc(c.repo || "")}" style="width:230px">
      </div>
      <div class="set-row">
        <div style="flex:1"><b>File path</b><div class="s-desc">Created on the first sync.</div></div>
        <input type="text" id="sync-path" value="${esc(c.path)}" style="width:200px">
      </div>
      <div class="set-row">
        <div style="flex:1"><b>Access token</b>
          <div class="s-desc">A fine-grained personal access token, this repository only,
          <b>Contents: read and write</b>. Stored in this browser, never in your exported backups.
          Anyone who can use this device can read it — give it an expiry and nothing else.</div></div>
        <input type="password" id="sync-token" placeholder="${tok ? "•••••• saved" : "github_pat_…"}"
               autocomplete="off" style="width:200px">
      </div>
      <div class="set-row">
        <div><b>Status</b><div class="s-desc" id="sync-status">${status}</div></div>
        <div style="display:flex;gap:8px;flex-wrap:wrap">
          <button id="sync-restore" ${on ? "" : "disabled"}>⬇ Restore from repo</button>
          <button id="sync-run" ${on ? "" : "disabled"}>⇅ Sync now</button>
        </div>
      </div>
      <p class="small muted" style="margin-top:10px">
        New repo? <a href="https://github.com/new" target="_blank" rel="noopener">Create a private one</a>,
        then <a href="https://github.com/settings/personal-access-tokens/new" target="_blank" rel="noopener">make a fine-grained token</a>
        limited to it with Contents read and write.
      </p>
    </div>`;
}

function bindSyncPanel(st) {
  const c = syncCfg(st);
  const save = () => saveState(st);
  const setStatus = (msg, bad) => {
    const el = document.getElementById("sync-status");
    if (el) { el.textContent = msg; el.style.color = bad ? "var(--status-critical)" : ""; }
  };
  const on = document.getElementById("sync-on");
  if (!on) return;
  on.onchange = e => { c.enabled = e.target.checked; save(); render(); };
  document.getElementById("sync-repo").onchange = e => { c.repo = e.target.value.trim().replace(/^https?:\/\/github\.com\//, "").replace(/\.git$/, ""); save(); render(); };
  document.getElementById("sync-path").onchange = e => { c.path = e.target.value.trim() || "launchpad-state.json"; save(); };
  document.getElementById("sync-token").onchange = e => {
    if (e.target.value.trim()) { setSyncToken(e.target.value.trim()); e.target.value = ""; render(); }
  };
  document.getElementById("sync-run").onclick = async () => {
    setStatus("Syncing…");
    const r = await syncNow(st);
    if (r.ok && r.state) { App.state = r.state; saveState(App.state); }
    setStatus(r.msg, !r.ok);
    if (r.ok) render();
  };
  document.getElementById("sync-restore").onclick = async () => {
    if (!confirm("Pull the repo's progress and merge it into this browser?")) return;
    setStatus("Restoring…");
    const r = await syncRestore(st);
    if (r.ok && r.state) {
      App.state = r.state;
      ensureGame(App.state); ensureQuests(App.state);
      saveState(App.state);
      setStatus(r.msg);
      go("home");
    } else setStatus(r.msg, true);
  };
}

function renderSettings() {
  const st = App.state;
  const g = ensureGame(st);
  const inputStyle = "";

  $app.innerHTML = `
    <div class="pagehead">
      <h1>⚙️ Settings</h1>
      <div class="nav"><button class="ghost" data-nav="home">← Dashboard</button></div>
    </div>
    <div class="card">
      <div class="set-row">
        <div><b>Daily XP goal</b><div class="s-desc">Hit this to keep your streak alive. The full routine is worth roughly 250–350 XP.</div></div>
        <input type="number" id="set-goal" min="50" max="1000" step="10" value="${g.dailyGoal}" style="width:84px">
      </div>
      <div class="set-row">
        <div><b>Minutes per block</b><div class="s-desc">Length of each timed session.</div></div>
        <input type="number" id="set-min" min="3" max="30" value="${st.settings.minutesPerBlock}" style="width:70px">
      </div>
      <div class="set-row">
        <div><b>New French words per day</b><div class="s-desc">Unseen vocabulary introduced daily.</div></div>
        <input type="number" id="set-new" min="0" max="30" value="${st.settings.newPerDay}" style="width:70px">
      </div>
      <div class="set-row">
        <div><b>Adaptive difficulty</b><div class="s-desc">Weak topics appear more often, mastered ones fade, and session length auto-tunes to your measured pace so 10 minutes stays 10 minutes.</div></div>
        <input type="checkbox" id="set-adaptive" ${st.settings.adaptive ? "checked" : ""}>
      </div>
      <div class="set-row">
        <div><b>Retire after N correct in a row</b><div class="s-desc">A question stops appearing once you've beaten it this many times consecutively.</div></div>
        <input type="number" id="set-retire" min="2" max="10" value="${st.settings.retireStreak || 3}" style="width:70px">
      </div>
    </div>

    <h2>Exam countdowns</h2>
    <div class="card">
      <div id="exam-rows">
        ${(g.exams || []).map((e, i) => `
          <div class="set-row">
            <div style="flex:1">
              <input type="text" value="${esc(e.name)}" data-exam-name="${i}" style="width:100%;max-width:280px">
              <div class="s-desc">${esc(e.note || "")}</div>
            </div>
            <div style="display:flex;gap:6px;align-items:center">
              <input type="date" value="${esc(e.date)}" data-exam-date="${i}">
              <button class="ghost" data-exam-del="${i}">✕</button>
            </div>
          </div>`).join("")}
      </div>
      <div style="margin-top:12px"><button id="exam-add">+ Add a date</button></div>
      <p class="small muted" style="margin-top:10px">Pre-filled from published EPSO information (Aug 2026): AD5 reasoning tests are scheduled for autumn 2026 and the EU-knowledge phase for early 2027 — exact days aren't published yet, so those are marked approximate. Adjust as EPSO confirms them.</p>
    </div>

    <h2>Data</h2>
    <div class="card" id="storage-card">
      <div class="set-row">
        <div><b>Where your progress lives</b>
          <div class="s-desc">Nothing is stored on a server — not even by me. Everything is in this
          browser, on this device, under the key <code>${LS_KEY}</code> for
          <code id="st-origin">…</code>. A different browser, a different device, a private
          window, or the old claude.ai copy each has its own separate store.</div></div>
      </div>
      <div class="storage-facts" id="st-facts"></div>
      <p class="small muted" style="margin-top:10px">If this says 0 sessions but you know you
      practised, the data is in whichever browser you practised in. Open the trainer there,
      export a backup, and import it here.</p>
    </div>

    <h2>Sync with GitHub</h2>
    ${syncPanel(st)}

    <div class="card">
      <div class="set-row">
        <div><b>Export backup</b><div class="s-desc">On a phone this opens the share sheet, so you can save straight to Google Drive or Files. On a desktop it downloads a JSON file.</div></div>
        <button id="btn-export">⬇ Export / Save to Drive</button>
      </div>
      <div class="set-row">
        <div><b>Where to keep backups</b><div class="s-desc">A Drive folder is already set up for this, with restore instructions inside.</div></div>
        <a href="https://drive.google.com/drive/folders/1R4HLTIBcFeN4bbr55JTkOsDBXmNJtDcM" target="_blank" rel="noopener">Open Drive folder</a>
      </div>
      <div class="set-row">
        <div><b>Import backup</b><div class="s-desc">Restore from a JSON backup. Replaces current data.</div></div>
        <label><input type="file" id="btn-import" accept="application/json" hidden><button onclick="document.getElementById('btn-import').click()">⬆ Import</button></label>
      </div>
      <div class="set-row">
        <div><b>Reset all progress</b><div class="s-desc">Deletes every statistic, level and badge in this browser. No undo.</div></div>
        <button id="btn-reset" style="color:var(--status-critical)">Reset</button>
      </div>
    </div>
    <h2>About</h2>
    <div class="card">
      <div class="set-row">
        <div><b>Version</b><div class="s-desc">Deployed automatically from GitHub on every change.</div></div>
        <span class="muted">${APP_VERSION}</span>
      </div>
      <div class="set-row">
        <div><b>Offline</b><div class="s-desc">Installed as an app, the whole trainer works with no connection.</div></div>
        <span class="muted" id="sw-state">checking…</span>
      </div>
      <div class="set-row">
        <div><b>Source</b><div class="s-desc">Everything is open and editable.</div></div>
        <a href="https://github.com/orestoubas/daily-lunchpad" target="_blank" rel="noopener">github.com/orestoubas/daily-lunchpad</a>
      </div>
    </div>

    <p class="small muted" style="margin-top:14px">Banks: ${FRENCH_VOCAB.length} words · ${FRENCH_GRAMMAR.length} grammar · ${FRENCH_CONJ.length} conjugation · ${EU_QUESTIONS.length} EU (each with a mini-lesson) · ${VERBAL_QUESTIONS.length} verbal · ${NUMERICAL_QUESTIONS.length} numerical · ${typeof DIGITAL_QUESTIONS !== "undefined" ? DIGITAL_QUESTIONS.length : 0} digital skills · ${typeof SJT_QUESTIONS !== "undefined" ? SJT_QUESTIONS.length : 0} situational judgement · unlimited generated abstract.</p>
  `;

  document.querySelectorAll("[data-nav]").forEach(b => b.onclick = () => go(b.dataset.nav));
  fillStorageFacts(st);
  bindSyncPanel(st);
  const save = () => saveState(App.state);
  document.getElementById("set-goal").onchange = e => { g.dailyGoal = Math.max(50, Math.min(1000, +e.target.value || 150)); save(); };
  document.getElementById("set-min").onchange = e => { st.settings.minutesPerBlock = Math.max(3, Math.min(30, +e.target.value || 10)); save(); };
  document.getElementById("set-new").onchange = e => { st.settings.newPerDay = Math.max(0, Math.min(30, +e.target.value || 10)); save(); };
  document.getElementById("set-retire").onchange = e => { st.settings.retireStreak = Math.max(2, Math.min(10, +e.target.value || 3)); save(); };
  document.getElementById("set-adaptive").onchange = e => { st.settings.adaptive = e.target.checked; save(); };

  document.querySelectorAll("[data-exam-name]").forEach(inp =>
    inp.onchange = e => { g.exams[+e.target.dataset.examName].name = e.target.value; save(); });
  document.querySelectorAll("[data-exam-date]").forEach(inp =>
    inp.onchange = e => { g.exams[+e.target.dataset.examDate].date = e.target.value; save(); });
  document.querySelectorAll("[data-exam-del]").forEach(btn =>
    btn.onclick = e => { g.exams.splice(+e.currentTarget.dataset.examDel, 1); save(); renderSettings(); });
  document.getElementById("exam-add").onclick = () => {
    g.exams.push({ id: "custom-" + Date.now(), name: "New target", date: addDays(todayKey(), 90), note: "", approx: false });
    save(); renderSettings();
  };

  document.getElementById("btn-export").onclick = () => { exportState(App.state); markBackedUp(App.state); };
  const swEl = document.getElementById("sw-state");
  if (swEl) {
    if (!("serviceWorker" in navigator)) swEl.textContent = "not supported here";
    else navigator.serviceWorker.getRegistration()
      .then(r => swEl.textContent = r ? "✓ available offline" : "not installed (open over https)")
      .catch(() => swEl.textContent = "unknown");
  }
  document.getElementById("btn-import").onchange = e => {
    const f = e.target.files[0];
    if (!f) return;
    importStateFile(f, (err, st2) => {
      if (err) { alert("Import failed: " + err.message); return; }
      App.state = st2; saveState(App.state); alert("Backup imported."); go("home");
    });
  };
  document.getElementById("btn-reset").onclick = () => {
    if (confirm("Delete ALL progress in this browser?") && confirm("Last chance — this cannot be undone.")) {
      App.state = defaultState(); saveState(App.state); go("home");
    }
  };
}

/* ============================ helpers ============================ */

function renderDataTable(t) {
  if (!t) return "";
  return `<table class="qdata">
    ${t.caption ? `<caption>${esc(t.caption)}</caption>` : ""}
    <thead><tr>${t.headers.map(h => `<th>${esc(h)}</th>`).join("")}</tr></thead>
    <tbody>${t.rows.map(r => `<tr>${r.map(c => `<td>${esc(c)}</td>`).join("")}</tr>`).join("")}</tbody>
  </table>`;
}

function speakFrench(text, rate) {
  if (!("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = "fr-FR"; u.rate = rate || 0.9;
  const fr = window.speechSynthesis.getVoices().find(v => v.lang && v.lang.startsWith("fr"));
  if (fr) u.voice = fr;
  window.speechSynthesis.speak(u);
}

function toggleCalculator() {
  if (document.getElementById("calc")) return removeCalculator();
  const div = document.createElement("div");
  div.className = "calc"; div.id = "calc";
  div.innerHTML = `
    <input class="c-display" id="c-display" value="" placeholder="0" readonly>
    <div class="c-grid">
      ${["7","8","9","÷","4","5","6","×","1","2","3","−","0",".","%","+"].map(k => `<button data-k="${k}">${k}</button>`).join("")}
      <button data-k="C" style="color:var(--status-critical)">C</button>
      <button data-k="⌫">⌫</button>
      <button data-k="=" style="grid-column:span 2;background:var(--c-french);color:#fff">=</button>
    </div>`;
  document.body.appendChild(div);
  const disp = div.querySelector("#c-display");
  div.querySelectorAll("button").forEach(b => b.onclick = () => {
    const k = b.dataset.k;
    if (k === "C") disp.value = "";
    else if (k === "⌫") disp.value = disp.value.slice(0, -1);
    else if (k === "=") {
      try {
        const expr = disp.value.replace(/÷/g, "/").replace(/×/g, "*").replace(/−/g, "-").replace(/%/g, "/100");
        if (!/^[0-9+\-*/. ()]+$/.test(expr)) return;
        const val = Function('"use strict";return (' + expr + ")")();
        disp.value = Number.isFinite(val) ? String(Math.round(val * 10000) / 10000) : "";
      } catch { /* ignore */ }
    } else disp.value += k;
  });
}
function removeCalculator() { const c = document.getElementById("calc"); if (c) c.remove(); }

/* ---------- crash guard ----------
   If anything throws, the user still gets a way to rescue their progress. */
window.addEventListener("error", e => {
  console.error("uncaught", e.error || e.message);
  if (document.getElementById("crash-box")) return;
  const d = document.createElement("div");
  d.id = "crash-box";
  d.className = "save-warning";
  d.innerHTML = `<b>⚠️ Something went wrong</b>
    <span>Your progress is safe on this device. Export a backup, then reload the page.</span>
    <div style="display:flex;gap:8px;flex-wrap:wrap">
      <button id="crash-export">⬇ Export backup</button>
      <button id="crash-reload">↻ Reload</button>
    </div>`;
  document.body.appendChild(d);
  document.getElementById("crash-export").onclick = () => exportState(App.state);
  document.getElementById("crash-reload").onclick = () => location.reload();
});

/* ---------- keyboard shortcuts ---------- */
document.addEventListener("keydown", e => {
  if (e.metaKey || e.ctrlKey || e.altKey) return;
  const tag = (e.target.tagName || "").toLowerCase();
  if (tag === "input" || tag === "textarea") return;

  if (App.view === "session" && App.session) {
    const s = App.session;
    if (!s.answeredCurrent && /^[1-4]$/.test(e.key)) {
      const btns = document.querySelectorAll("#options button");
      const i = parseInt(e.key, 10) - 1;
      if (btns[i]) { e.preventDefault(); btns[i].click(); }
      return;
    }
    if (!s.answeredCurrent && /^[a-dA-D]$/.test(e.key)) {
      const btns = document.querySelectorAll("#options button");
      const i = e.key.toLowerCase().charCodeAt(0) - 97;
      if (btns[i]) { e.preventDefault(); btns[i].click(); }
      return;
    }
    if (s.answeredCurrent && (e.key === "Enter" || e.key === " ")) {
      const n = document.getElementById("next");
      if (n && !n.disabled) { e.preventDefault(); n.click(); }
      return;
    }
    if (e.key === "Escape") { const q = document.getElementById("quit"); if (q) q.click(); }
    return;
  }
  if (App.view === "home") {
    if (e.key === "Enter") { const b = document.getElementById("start-routine"); if (b) { e.preventDefault(); b.click(); } }
    if (e.key.toLowerCase() === "s") go("stats");
    if (e.key.toLowerCase() === "b") go("badges");
  } else if (e.key === "Escape") {
    go("home");
  }
});

/* Sync is best-effort and never blocks the UI: a failed push leaves the local
   state untouched and the next one retries. Debounced so finishing three
   blocks in a row is one write, not three. */
let syncTimer = null;
function syncSoon(delay) {
  if (!syncReady(App.state)) return;
  clearTimeout(syncTimer);
  syncTimer = setTimeout(async () => {
    const r = await syncNow(App.state);
    if (r.ok && r.state) { App.state = r.state; saveState(App.state); }
    else saveState(App.state);          // persist lastError for the Settings panel
    if (App.view === "settings") render();
  }, delay === undefined ? 2500 : delay);
}

/* boot */
/* Progress lives only in this browser's localStorage. Browsers are free to
   evict that when space runs low — Safari also clears it for sites left
   untouched for a week. Asking for persistent storage exempts us from both.
   It is a request, not a guarantee; Settings reports what the browser said. */
if (navigator.storage && navigator.storage.persist) {
  navigator.storage.persisted()
    .then(already => already || navigator.storage.persist())
    .catch(() => {});
}

ensureGame(App.state);
applyStreakFreeze(App.state);
ensureQuests(App.state);
saveState(App.state);
render();

/* Pull whatever the repo already holds before this browser writes anything,
   so opening the trainer on a new device restores instead of overwriting. */
if (syncReady(App.state)) {
  syncNow(App.state).then(r => {
    if (r.ok && r.state) {
      App.state = r.state;
      ensureGame(App.state);
      ensureQuests(App.state);
      saveState(App.state);
      render();
    }
  });
}
