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

function render() {
  stopTick();
  if (App.view === "home") renderHome();
  else if (App.view === "session") renderSession();
  else if (App.view === "summary") renderSummary();
  else if (App.view === "stats") renderStats();
  else if (App.view === "badges") renderBadges();
  else if (App.view === "settings") renderSettings();
  window.scrollTo(0, 0);
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

  const missions = [
    { key: "french", color: "var(--c-french)", icon: "🇫🇷", title: "French",
      desc: `Vocabulary, grammar, conjugation & listening. Working level <b>${workingLevel(st)}</b>.` },
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
    <div class="topbar">
      <div><h1>${greeting()}, Orestis 👋</h1><p class="sub">${dateStr}</p></div>
      <div class="nav">
        <button class="ghost" data-nav="badges">🏅 Badges</button>
        <button class="ghost" data-nav="stats">📊 Stats</button>
        <button class="ghost" data-nav="settings">⚙️</button>
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
  const modName = s.challenge ? "🛡️ Weekly challenge" :
    { french: "🇫🇷 French", eu: "🇪🇺 EU Knowledge", reasoning: "🧠 Reasoning", epso: "💼 Digital & SJT" }[s.module];
  const kindColor = { vocab: "var(--c-french)", grammar: "var(--c-french)", conj: "var(--c-french)",
    eu: "var(--c-eu)", verbal: "var(--c-verbal)", numerical: "var(--c-numerical)", abstract: "var(--c-abstract)",
    digital: "var(--c-abstract)", sjt: "var(--c-abstract)" }[it.kind];
  const kindLabel = {
    vocab: it.listen ? `Listening ${it.level} · FR audio` : `Vocabulary ${it.level} · ${it.direction}${it.isNew ? " · NEW WORD" : ""}`,
    grammar: `Grammar ${it.level}`, conj: `Conjugation ${it.level}`,
    eu: `EU · ${it.topic}`, verbal: "Verbal reasoning",
    numerical: "Numerical reasoning", abstract: "Abstract reasoning",
    digital: `Digital skills · ${it.area}`, sjt: `Situational judgement · ${it.competency}`
  }[it.kind];

  let body = "";
  if (it.kind === "verbal") body += `<div class="passage">${esc(it.passage)}</div>`;
  if (it.kind === "numerical") body += renderDataTable(it.table);
  if (it.kind === "abstract") body += `<div class="ab-seq">${it.sequenceSvgs.join("")}<div class="ab-cell ab-unknown">?</div></div>`;
  if (it.kind === "vocab" && it.listen) {
    body += `<p class="question" id="listen-prompt">
      <button class="listen-big" id="listen-play">🔊 Listen</button>
      <button class="ghost small" id="listen-reveal">show the word</button></p>`;
  } else {
    body += `<p class="question">${esc(it.prompt)}</p>`;
  }
  body += `<div class="options ${it.svgOptions ? "svg-grid" : ""}" id="options">${it.options.map((o, i) =>
    `<button data-opt="${i}"><span class="opt-ic">${"ABCD"[i]}</span>${it.svgOptions ? o : esc(o)}</button>`).join("")}</div>`;
  body += `<div id="feedback"></div>`;

  const dots = s.results.map((r, i) =>
    `<i class="${i === s.idx ? "cur" : r.answered ? (r.correct ? "ok" : "no") : ""}"></i>`).join("");

  $app.innerHTML = `
    <div class="session-head">
      <div>
        <b style="color:${kindColor}">${modName}</b>
        <div class="progdots" style="margin-top:6px">${dots}</div>
      </div>
      <div style="display:flex;align-items:center;gap:12px">
        ${s.combo >= 3 ? `<span class="combo ${s.combo >= 6 ? "hot" : ""}">⚡ ${s.combo} combo</span>` : ""}
        ${it.kind === "numerical" ? `<button class="ghost" id="calc-toggle">🧮</button>` : ""}
        <span class="timer" id="timer">${fmtClock(s.secondsLeft)}</span>
        <button class="ghost" id="quit">✕</button>
      </div>
    </div>
    <div class="card">
      <span class="qbadge" style="--qc:${kindColor}">${esc(kindLabel)}</span>
      ${body}
      <div class="next-row"><button class="primary" id="next" disabled>${s.idx === s.items.length - 1 ? "Finish" : "Next"} →</button></div>
    </div>
  `;

  document.getElementById("quit").onclick = () => {
    if (confirm("Quit this session? Answered questions are still recorded.")) finishSession(false);
  };
  const ct = document.getElementById("calc-toggle");
  if (ct) ct.onclick = toggleCalculator;
  document.querySelectorAll("#options button").forEach(btn =>
    btn.onclick = () => answer(parseInt(btn.dataset.opt, 10)));
  document.getElementById("next").onclick = nextQuestion;

  if (it.kind === "vocab" && it.listen) {
    const play = () => speakFrench(it.fr);
    document.getElementById("listen-play").onclick = play;
    document.getElementById("listen-reveal").onclick = () => {
      document.getElementById("listen-prompt").innerHTML =
        `${esc(it.fr)} <button class="tts-btn" id="listen-play2">🔊</button>`;
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
    digital: "digital", sjt: "sjt" };
  if (bankOf[it.kind]) {
    recordQuestionResult(App.state, it.id, correct);
    if (!correct) markWrong(App.state, bankOf[it.kind], it.id);
  }
  saveState(App.state);

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
      <button class="tts-btn" id="tts">🔊</button><br><i>${esc(it.ex)}</i></div>`;
  } else if (it.expl) {
    fb += `<div class="expl">${esc(it.expl)}</div>`;
    if (it.learn) fb += `<div class="learn">📚 ${esc(it.learn)}</div>`;
  }
  document.getElementById("feedback").innerHTML = fb;
  const tts = document.getElementById("tts");
  if (tts) tts.onclick = () => speakFrench(it.fr + ". " + it.ex);

  // refresh combo chip + dots without a full re-render
  const head = document.querySelector(".session-head .progdots");
  if (head) head.innerHTML = s.results.map((rr, i) =>
    `<i class="${i === s.idx ? "cur" : rr.answered ? (rr.correct ? "ok" : "no") : ""}"></i>`).join("");

  const next = document.getElementById("next");
  next.disabled = false;
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
  const st = App.state;
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
    <div class="topbar"><h1>${title}</h1></div>
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
    <div class="topbar">
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
    <div class="topbar">
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
        { label: "Conjugation", color: "var(--c-french)", m: bankMastery(st, FRENCH_CONJ.map(q => q.id)) }
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

function renderSettings() {
  const st = App.state;
  const g = ensureGame(st);
  const inputStyle = "";

  $app.innerHTML = `
    <div class="topbar">
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
    <div class="card">
      <div class="set-row">
        <div><b>Export backup</b><div class="s-desc">Download all progress as JSON — use it to move between browsers.</div></div>
        <button id="btn-export">⬇ Export</button>
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
    <p class="small muted" style="margin-top:14px">Banks: ${FRENCH_VOCAB.length} words · ${FRENCH_GRAMMAR.length} grammar · ${FRENCH_CONJ.length} conjugation · ${EU_QUESTIONS.length} EU (each with a mini-lesson) · ${VERBAL_QUESTIONS.length} verbal · ${NUMERICAL_QUESTIONS.length} numerical · ${typeof DIGITAL_QUESTIONS !== "undefined" ? DIGITAL_QUESTIONS.length : 0} digital skills · ${typeof SJT_QUESTIONS !== "undefined" ? SJT_QUESTIONS.length : 0} situational judgement · unlimited generated abstract.</p>
  `;

  document.querySelectorAll("[data-nav]").forEach(b => b.onclick = () => go(b.dataset.nav));
  const save = () => saveState(App.state);
  document.getElementById("set-goal").onchange = e => { g.dailyGoal = Math.max(50, Math.min(1000, +e.target.value || 150)); save(); };
  document.getElementById("set-min").onchange = e => { st.settings.minutesPerBlock = Math.max(3, Math.min(30, +e.target.value || 10)); save(); };
  document.getElementById("set-new").onchange = e => { st.settings.newPerDay = Math.max(0, Math.min(30, +e.target.value || 10)); save(); };
  document.getElementById("set-retire").onchange = e => { st.settings.retireStreak = Math.max(2, Math.min(10, +e.target.value || 3)); save(); };

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

function speakFrench(text) {
  if (!("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = "fr-FR"; u.rate = 0.9;
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

/* boot */
ensureGame(App.state);
applyStreakFreeze(App.state);
ensureQuests(App.state);
saveState(App.state);
render();
