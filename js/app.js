/* app.js — views, session runner, routing */
"use strict";

const App = {
  state: loadState(),
  view: "home",
  session: null,     // {module, items, idx, results, secondsLeft, timerId, answeredCurrent, startedAt}
  chain: [],         // remaining modules when running the full routine
  lastSummary: null
};

const $app = document.getElementById("app");

function go(view) {
  App.view = view;
  render();
}

function render() {
  stopTick();
  if (App.view === "home") renderHome();
  else if (App.view === "session") renderSession();
  else if (App.view === "summary") renderSummary();
  else if (App.view === "stats") renderStats();
  else if (App.view === "settings") renderSettings();
  window.scrollTo(0, 0);
}

/* ============================ HOME ============================ */

function greeting() {
  const h = new Date().getHours();
  if (h < 12) return "Good morning";
  if (h < 18) return "Good afternoon";
  return "Good evening";
}

function renderHome() {
  const st = App.state;
  const today = todayKey();
  const done = st.days[today] || {};
  const streak = computeStreak(st);
  const fp = frenchProgress(st);
  const euAvg = rollingAvg(st, "eu", 10);
  const vAvg = rollingAvg(st, "verbal", 10);
  const nAvg = rollingAvg(st, "numerical", 10);
  const aAvg = rollingAvg(st, "abstract", 10);
  const allDone = done.french && done.eu && done.reasoning;
  const dateStr = new Date().toLocaleDateString("en-GB", { weekday: "long", day: "numeric", month: "long" });

  const missions = [
    {
      key: "french", color: "var(--c-french)", icon: "🇫🇷", title: "French — 10 min",
      desc: `Spaced-repetition vocabulary + grammar drills. Working level: <b>${workingLevel(st)}</b>. Target: <b>B2</b>.`
    },
    {
      key: "eu", color: "var(--c-eu)", icon: "🇪🇺", title: "EU Knowledge — 10 min",
      desc: "EPSO-style MCQ: institutions, treaties, law, policies, budget. Target: <b>90% rolling average</b>."
    },
    {
      key: "reasoning", color: "var(--c-verbal)", icon: "🧠", title: "Reasoning — 10 min",
      desc: "2 verbal + 2 numerical + 2 abstract questions at EPSO pace. Target: <b>90% each</b>."
    }
  ];

  $app.innerHTML = `
    <div class="topbar">
      <div><h1>${greeting()}, Orestis 🚀</h1><p class="sub">${dateStr} — 30 focused minutes, then the real work.</p></div>
      <div class="nav">
        <button class="ghost" data-nav="stats">📊 Statistics</button>
        <button class="ghost" data-nav="settings">⚙️</button>
      </div>
    </div>

    <div class="streakline">
      <div class="stat-tile"><div class="v">${streak}🔥</div><div class="l">workday streak</div></div>
      <div class="stat-tile"><div class="v">${["french","eu","reasoning"].filter(m=>done[m]).length}/3</div><div class="l">blocks today</div></div>
      <div class="stat-tile"><div class="v">${totalMinutes(st)}</div><div class="l">total minutes trained</div></div>
    </div>

    ${allDone
      ? `<div class="card" style="margin:14px 0"><b style="color:var(--good-text)">✓ Routine complete.</b> <span class="muted">See you tomorrow — go be brilliant at work.</span></div>`
      : `<div style="margin:14px 0"><button class="primary" id="start-routine">▶ Start today's routine (${["french","eu","reasoning"].filter(m=>!done[m]).length} × 10 min)</button></div>`}

    <div class="missions">
      ${missions.map(m => `
        <div class="card mission" style="--mc:${m.color}">
          <div class="m-head"><span class="m-title">${m.icon} ${m.title}</span>
            <span class="m-status ${done[m.key] ? "done" : ""}">${done[m.key] ? "✓ done" : "pending"}</span></div>
          <div class="m-desc">${m.desc}</div>
          <button data-start="${m.key}">${done[m.key] ? "Practice again" : "Start"}</button>
        </div>`).join("")}
    </div>

    <h2>Goals</h2>
    <div class="card goals">
      ${meterRow("French → B2", "var(--c-french)", fp.pct, 100, fp.pct + "% · " + esc(fp.band.split(" — ")[0]))}
      ${meterRow("EU knowledge", "var(--c-eu)", euAvg, 90, euAvg == null ? "no data" : euAvg + "% / 90%")}
      ${meterRow("Verbal", "var(--c-verbal)", vAvg, 90, vAvg == null ? "no data" : vAvg + "% / 90%")}
      ${meterRow("Numerical", "var(--c-numerical)", nAvg, 90, nAvg == null ? "no data" : nAvg + "% / 90%")}
      ${meterRow("Abstract", "var(--c-abstract)", aAvg, 90, aAvg == null ? "no data" : aAvg + "% / 90%")}
    </div>
    <p class="small muted">Rolling averages over your last 10 sessions. The French bar tracks mastery of this app's A2→B2 course (vocabulary + grammar) — pair it with listening/speaking practice for the full B2.</p>

    <div class="footer-note">Morning Launchpad · data stays in this browser · export a backup in ⚙️ Settings</div>
  `;

  document.querySelectorAll("[data-nav]").forEach(b => b.onclick = () => go(b.dataset.nav));
  document.querySelectorAll("[data-start]").forEach(b => b.onclick = () => startSession(b.dataset.start, false));
  const sr = document.getElementById("start-routine");
  if (sr) sr.onclick = () => {
    App.chain = ["french", "eu", "reasoning"].filter(m => !(st.days[today] || {})[m]);
    startSession(App.chain.shift(), true);
  };
}

/* ============================ SESSION ============================ */

function startSession(module, chained) {
  if (!chained) App.chain = [];
  App.state.seq = (App.state.seq || 0) + 1;   // fresh shuffle every run
  const builders = { french: buildFrenchSession, eu: buildEuSession, reasoning: buildReasoningSession };
  const s = builders[module](App.state);
  if (s.items.length === 0) { alert("Question bank is empty for this module."); return; }
  App.session = {
    module, items: s.items, idx: 0,
    results: s.items.map(it => ({ item: it, answered: false, correct: false })),
    secondsLeft: (App.state.settings.minutesPerBlock || 10) * 60,
    answeredCurrent: false,
    startedAt: Date.now()
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
  const mod = MODULES[s.module];
  const kindColor = { vocab: "var(--c-french)", grammar: "var(--c-french)", conj: "var(--c-french)", eu: "var(--c-eu)", verbal: "var(--c-verbal)", numerical: "var(--c-numerical)", abstract: "var(--c-abstract)" }[it.kind];
  const kindLabel = {
    vocab: it.listen ? `Listening ${it.level} · FR audio` : `Vocabulary ${it.level} · ${it.direction}${it.isNew ? " · NEW WORD" : ""}`,
    grammar: `Grammar ${it.level}`,
    conj: `Conjugation ${it.level}`,
    eu: `EU · ${it.topic}`,
    verbal: "Verbal reasoning",
    numerical: "Numerical reasoning",
    abstract: "Abstract reasoning"
  }[it.kind];

  let body = "";
  if (it.kind === "verbal") body += `<div class="passage">${esc(it.passage)}</div>`;
  if (it.kind === "numerical") body += renderDataTable(it.table);
  if (it.kind === "abstract") {
    body += `<div class="ab-seq">${it.sequenceSvgs.join("")}<div class="ab-cell ab-unknown">?</div></div>`;
  }
  if (it.kind === "vocab" && it.listen) {
    body += `<p class="question" id="listen-prompt">
      <button class="listen-big" id="listen-play">🔊 Listen</button>
      <button class="ghost small" id="listen-reveal">show the word instead</button></p>`;
  } else {
    body += `<p class="question">${esc(it.prompt)}</p>`;
  }
  body += `<div class="options ${it.svgOptions ? "svg-grid" : ""}" id="options">${it.options.map((o, i) =>
    `<button data-opt="${i}"><span class="opt-ic">${"ABCD"[i]}</span>${it.svgOptions ? o : esc(o)}</button>`).join("")}</div>`;
  body += `<div id="feedback"></div>`;

  $app.innerHTML = `
    <div class="session-head">
      <div><b style="color:${mod.color}">${mod.icon} ${mod.name}</b>
        <span class="prog"> · question ${s.idx + 1}/${s.items.length}</span></div>
      <div style="display:flex;align-items:center;gap:14px">
        ${it.kind === "numerical" ? `<button class="ghost" id="calc-toggle">🧮 Calculator</button>` : ""}
        <span class="timer" id="timer">${fmtClock(s.secondsLeft)}</span>
        <button class="ghost" id="quit">✕ Quit</button>
      </div>
    </div>
    <div class="card">
      <span class="qbadge" style="--qc:${kindColor}">${esc(kindLabel)}</span>
      ${body}
      <div class="next-row">
        <span class="small muted" id="hintline"></span>
        <button class="primary" id="next" disabled>Next →</button>
      </div>
    </div>
  `;

  document.getElementById("quit").onclick = () => {
    if (confirm("Quit this session? Answered questions will be recorded.")) finishSession(false);
  };
  const ct = document.getElementById("calc-toggle");
  if (ct) ct.onclick = toggleCalculator;

  document.querySelectorAll("#options button").forEach(btn => {
    btn.onclick = () => answer(parseInt(btn.dataset.opt, 10));
  });
  document.getElementById("next").onclick = nextQuestion;

  if (it.kind === "vocab" && it.listen) {
    const play = () => speakFrench(it.fr);
    document.getElementById("listen-play").onclick = play;
    document.getElementById("listen-reveal").onclick = () => {
      document.getElementById("listen-prompt").innerHTML =
        `${esc(it.fr)} <button class="tts-btn" id="listen-play2" title="Listen">🔊</button>`;
      const p2 = document.getElementById("listen-play2");
      if (p2) p2.onclick = play;
    };
    setTimeout(play, 350); // speak automatically when the card appears
  }
}

function answer(choice) {
  const s = App.session;
  if (s.answeredCurrent) return;
  s.answeredCurrent = true;
  const it = s.items[s.idx];
  const correct = choice === it.answer;
  const r = s.results[s.idx];
  r.answered = true;
  r.correct = correct;

  // SRS + per-question mastery bookkeeping (abstract items are generated, not pooled)
  if (it.kind === "vocab") applySrsResult(App.state, it.id, correct);
  const bankOf = { grammar: "grammar", conj: "conj", eu: "eu", verbal: "verbal", numerical: "numerical" };
  if (bankOf[it.kind]) {
    recordQuestionResult(App.state, it.id, correct);
    if (!correct) markWrong(App.state, bankOf[it.kind], it.id);
  }
  saveState(App.state);

  // paint options
  document.querySelectorAll("#options button").forEach((btn, i) => {
    btn.disabled = true;
    if (i === choice) btn.classList.add(correct ? "sel-correct" : "sel-wrong");
    if (i === it.answer && i !== choice) btn.classList.add("reveal-correct");
  });

  // feedback / explanation
  const fb = document.getElementById("feedback");
  let ex = "";
  if (it.kind === "vocab") {
    ex = `<div class="expl"><b>${esc(it.fr)}</b> — ${esc(it.en)}
      <button class="tts-btn" id="tts" title="Listen (French)">🔊</button><br>
      <i>${esc(it.ex)}</i></div>`;
  } else if (it.expl) {
    ex = `<div class="expl">${correct ? "✓" : "✗"} ${esc(it.expl)}</div>`;
    if (it.learn) ex += `<div class="learn">📚 ${esc(it.learn)}</div>`;
  }
  fb.innerHTML = ex;
  const tts = document.getElementById("tts");
  if (tts) tts.onclick = () => speakFrench(it.fr + ". " + it.ex);

  const next = document.getElementById("next");
  next.disabled = false;
  next.textContent = s.idx === s.items.length - 1 ? "Finish ✓" : "Next →";
  next.focus();
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
  const seconds = Math.min((App.state.settings.minutesPerBlock || 10) * 60,
    Math.round((Date.now() - s.startedAt) / 1000));
  recordSession(App.state, s, s.results, seconds, completed);
  const answered = s.results.filter(r => r.answered);
  App.lastSummary = {
    module: s.module,
    correct: answered.filter(r => r.correct).length,
    total: answered.length,
    seconds, completed,
    review: answered.filter(r => !r.correct)
  };
  App.session = null;
  go("summary");
}

/* ============================ SUMMARY ============================ */

function renderSummary() {
  const sm = App.lastSummary;
  const mod = MODULES[sm.module];
  const p = pct(sm.correct, sm.total);
  const chainNext = App.chain.length > 0 ? App.chain[0] : null;

  $app.innerHTML = `
    <div class="topbar"><h1>${mod.icon} ${mod.name} — done</h1></div>
    <div class="card" style="text-align:center">
      <div class="score-hero" style="color:${mod.color}">${p}%<span class="of"> ${sm.correct}/${sm.total} in ${fmtClock(sm.seconds)}</span></div>
      <p class="muted">${p >= 90 ? "At goal level. Excellent." : p >= 70 ? "Solid — keep pushing toward 90%." : "Tough one — the questions you missed will come back first next time."}</p>
      <div style="display:flex;gap:10px;justify-content:center;margin-top:12px">
        ${chainNext
          ? `<button class="primary" id="chain-next">▶ Next block: ${MODULES[chainNext].name}</button>`
          : `<button class="primary" id="home">← Back to dashboard</button>`}
        ${chainNext ? `<button id="home">Stop here</button>` : ""}
      </div>
    </div>
    ${sm.review.length ? `
      <h2>Review your misses (${sm.review.length})</h2>
      ${sm.review.map(r => `
        <div class="card" style="margin-bottom:10px">
          <p class="question" style="font-size:0.98rem">${esc(r.item.prompt)}</p>
          ${r.item.svgOptions
            ? `<div class="small" style="color:var(--good-text)"><b>Answer:</b><div class="ab-review">${r.item.options[r.item.answer]}</div></div>`
            : `<p class="small" style="color:var(--good-text)"><b>Answer:</b> ${esc(r.item.options[r.item.answer])}</p>`}
          ${r.item.expl ? `<p class="small muted">${esc(r.item.expl)}</p>` : ""}
          ${r.item.learn ? `<div class="learn">📚 ${esc(r.item.learn)}</div>` : ""}
          ${r.item.kind === "vocab" ? `<p class="small muted"><i>${esc(r.item.ex)}</i></p>` : ""}
        </div>`).join("")}` : ""}
  `;
  const homeBtn = document.getElementById("home");
  if (homeBtn) homeBtn.onclick = () => { App.chain = []; go("home"); };
  const cn = document.getElementById("chain-next");
  if (cn) cn.onclick = () => startSession(App.chain.shift(), true);
}

/* ============================ STATS ============================ */

function renderStats() {
  const st = App.state;
  const fp = frenchProgress(st);
  const m = fp.mastery;
  const boxes = [0, 0, 0, 0, 0];
  for (const c of FRENCH_VOCAB) {
    const e = st.srs[c.id];
    if (e) boxes[Math.max(0, e.box - 1)]++;
  }
  const topics = euTopicStats(st);
  const recent = st.sessions.slice(-20).reverse();
  const modColor = { french: "var(--c-french)", eu: "var(--c-eu)", reasoning: "var(--c-verbal)" };

  $app.innerHTML = `
    <div class="topbar">
      <h1>📊 Statistics</h1>
      <div class="nav"><button class="ghost" data-nav="home">← Dashboard</button></div>
    </div>

    <h2>Consistency (last 12 weeks)</h2>
    <div class="card chart-card">${svgHeatmap(heatmapData(st, 12))}
      <div class="legendline">Blocks completed per day: 0 → 3, darker = more. Weekends shown faded.</div></div>

    <h2>Scores over time</h2>
    <div class="chart-grid">
      <div class="card chart-card"><h3 style="color:var(--c-eu)">🇪🇺 EU knowledge</h3>${svgLineChart(scoreSeries(st, "eu", 30), "var(--c-eu)", 90)}</div>
      <div class="card chart-card"><h3 style="color:var(--c-verbal)">🧠 Verbal</h3>${svgLineChart(scoreSeries(st, "verbal", 30), "var(--c-verbal)", 90)}</div>
      <div class="card chart-card"><h3 style="color:var(--c-numerical)">🔢 Numerical</h3>${svgLineChart(scoreSeries(st, "numerical", 30), "var(--c-numerical)", 90)}</div>
      <div class="card chart-card"><h3 style="color:var(--c-abstract)">🔷 Abstract</h3>${svgLineChart(scoreSeries(st, "abstract", 30), "var(--c-abstract)", 90)}</div>
      <div class="card chart-card"><h3 style="color:var(--c-french)">🇫🇷 French session accuracy</h3>${svgLineChart(scoreSeries(st, "french", 30), "var(--c-french)", 85)}</div>
    </div>

    <h2>French — road to B2 (${fp.pct}%)</h2>
    <div class="chart-grid">
      <div class="card chart-card"><h3>Vocabulary mastery by level</h3>
        ${svgBarsH(LEVELS.map(lv => ({
          label: `${lv} (${m[lv].mastered}/${m[lv].total})`,
          pct: m[lv].total ? Math.round(100 * m[lv].mastered / m[lv].total) : 0,
          n: m[lv].seen
        })), "var(--c-french)", 80)}
        <div class="legendline">A word is “mastered” at Leitner box 4+. Status: ${esc(fp.band)}.</div></div>
      <div class="card chart-card"><h3>Leitner box distribution</h3>${svgBoxes(boxes)}
        <div class="legendline">Cards move right with every correct review (1 → 5).</div></div>
    </div>

    <h2>EU knowledge by topic</h2>
    <div class="card chart-card">
      ${topics.length ? svgBarsH(topics, "var(--c-eu)", 90) : `<p class="muted">Complete an EU session to see topic breakdown.</p>`}
      <div class="legendline">Weakest topics first — the dashed line is your 90% goal.</div>
    </div>

    <h2>Questions mastered (retired from rotation)</h2>
    <div class="card goals">
      ${[
        { label: "EU knowledge", color: "var(--c-eu)", m: bankMastery(st, EU_QUESTIONS.map(q => q.id)) },
        { label: "Verbal", color: "var(--c-verbal)", m: bankMastery(st, VERBAL_QUESTIONS.map(q => q.id)) },
        { label: "Numerical", color: "var(--c-numerical)", m: bankMastery(st, NUMERICAL_QUESTIONS.map(q => q.id)) },
        { label: "Grammar", color: "var(--c-french)", m: bankMastery(st, FRENCH_GRAMMAR.map(q => q.id)) },
        { label: "Conjugation", color: "var(--c-french)", m: bankMastery(st, FRENCH_CONJ.map(q => q.id)) }
      ].map(b => meterRow(b.label, b.color, Math.round(100 * b.m.retired / Math.max(1, b.m.total)), 100, `${b.m.retired}/${b.m.total}`)).join("")}
    </div>
    <p class="small muted">A question retires after ${st.settings.retireStreak || 3} consecutive correct answers (change in ⚙️ Settings) and returns only as an occasional refresher.</p>

    <h2>Session log</h2>
    <div class="card">
      ${recent.length === 0 ? `<p class="muted">No sessions yet — start your first routine!</p>` : `
      <table class="logtable">
        <thead><tr><th>Date</th><th>Block</th><th>Score</th><th>Detail</th><th>Time</th></tr></thead>
        <tbody>
        ${recent.map(s => `
          <tr>
            <td>${s.date}</td>
            <td><span class="mdot" style="background:${modColor[s.module]}"></span>${MODULES[s.module].name}</td>
            <td>${s.pct}% (${s.correct}/${s.total})</td>
            <td class="muted small">${s.sub ? `V ${s.sub.verbal.c}/${s.sub.verbal.t} · N ${s.sub.numerical.c}/${s.sub.numerical.t}${s.sub.abstract ? ` · A ${s.sub.abstract.c}/${s.sub.abstract.t}` : ""}` : ""}</td>
            <td>${fmtClock(s.seconds || 0)}</td>
          </tr>`).join("")}
        </tbody>
      </table>`}
    </div>
  `;
  document.querySelectorAll("[data-nav]").forEach(b => b.onclick = () => go(b.dataset.nav));
  bindChartTooltips($app);
}

/* ============================ SETTINGS ============================ */

function renderSettings() {
  const st = App.state;
  $app.innerHTML = `
    <div class="topbar">
      <h1>⚙️ Settings & data</h1>
      <div class="nav"><button class="ghost" data-nav="home">← Dashboard</button></div>
    </div>
    <div class="card">
      <div class="set-row">
        <div><b>Minutes per block</b><div class="s-desc">Length of each timed session (default 10).</div></div>
        <input type="number" id="set-min" min="3" max="30" value="${st.settings.minutesPerBlock}" style="width:70px;font:inherit;padding:6px;border-radius:8px;border:1px solid var(--grid);background:var(--page);color:var(--text-primary)">
      </div>
      <div class="set-row">
        <div><b>New French words per day</b><div class="s-desc">How many unseen vocabulary cards to introduce daily.</div></div>
        <input type="number" id="set-new" min="0" max="30" value="${st.settings.newPerDay}" style="width:70px;font:inherit;padding:6px;border-radius:8px;border:1px solid var(--grid);background:var(--page);color:var(--text-primary)">
      </div>
      <div class="set-row">
        <div><b>Retire after N correct in a row</b><div class="s-desc">A question answered correctly this many times consecutively stops appearing (returns only as an occasional refresher). One wrong answer resets its counter.</div></div>
        <input type="number" id="set-retire" min="2" max="10" value="${st.settings.retireStreak || 3}" style="width:70px;font:inherit;padding:6px;border-radius:8px;border:1px solid var(--grid);background:var(--page);color:var(--text-primary)">
      </div>
      <div class="set-row">
        <div><b>Count weekends in streak</b><div class="s-desc">Off = weekends never break the streak (workday streak).</div></div>
        <input type="checkbox" id="set-weekend" ${st.settings.weekendCounts ? "checked" : ""}>
      </div>
      <div class="set-row">
        <div><b>Export backup</b><div class="s-desc">Download all progress as JSON. Use it to move progress between browsers.</div></div>
        <button id="btn-export">⬇ Export</button>
      </div>
      <div class="set-row">
        <div><b>Import backup</b><div class="s-desc">Restore progress from a JSON backup. Replaces current data.</div></div>
        <label><input type="file" id="btn-import" accept="application/json" hidden><button onclick="document.getElementById('btn-import').click()">⬆ Import</button></label>
      </div>
      <div class="set-row">
        <div><b>Reset all progress</b><div class="s-desc">Deletes every statistic and card state in this browser. No undo.</div></div>
        <button id="btn-reset" style="color:var(--status-critical)">Reset</button>
      </div>
    </div>
    <p class="small muted" style="margin-top:14px">Question banks: ${FRENCH_VOCAB.length} French words · ${FRENCH_GRAMMAR.length} grammar drills · ${FRENCH_CONJ.length} conjugation drills · ${EU_QUESTIONS.length} EU questions · ${VERBAL_QUESTIONS.length} verbal · ${NUMERICAL_QUESTIONS.length} numerical · abstract reasoning is generated fresh every day (unlimited). Banks live in <code>data/*.js</code> — append new entries any time (or ask Claude to generate more).</p>
  `;
  document.querySelectorAll("[data-nav]").forEach(b => b.onclick = () => go(b.dataset.nav));
  document.getElementById("set-min").onchange = e => { App.state.settings.minutesPerBlock = Math.max(3, Math.min(30, +e.target.value || 10)); saveState(App.state); };
  document.getElementById("set-retire").onchange = e => { App.state.settings.retireStreak = Math.max(2, Math.min(10, +e.target.value || 3)); saveState(App.state); };
  document.getElementById("set-new").onchange = e => { App.state.settings.newPerDay = Math.max(0, Math.min(30, +e.target.value || 10)); saveState(App.state); };
  document.getElementById("set-weekend").onchange = e => { App.state.settings.weekendCounts = e.target.checked; saveState(App.state); };
  document.getElementById("btn-export").onclick = () => exportState(App.state);
  document.getElementById("btn-import").onchange = e => {
    const f = e.target.files[0];
    if (!f) return;
    importStateFile(f, (err, st2) => {
      if (err) { alert("Import failed: " + err.message); return; }
      App.state = st2; saveState(App.state); alert("Backup imported."); go("home");
    });
  };
  document.getElementById("btn-reset").onclick = () => {
    if (confirm("Really delete ALL progress in this browser?") && confirm("Last chance — this cannot be undone.")) {
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

function speakFrench(text) {
  if (!("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = "fr-FR";
  u.rate = 0.9;
  const fr = window.speechSynthesis.getVoices().find(v => v.lang && v.lang.startsWith("fr"));
  if (fr) u.voice = fr;
  window.speechSynthesis.speak(u);
}

/* mini calculator (numerical questions — EPSO gives you an on-screen one too) */
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
    }
    else disp.value += k;
  });
}
function removeCalculator() {
  const c = document.getElementById("calc");
  if (c) c.remove();
}

/* boot */
render();
