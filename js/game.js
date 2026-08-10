/* game.js — XP, skill trees, badges, quests, streak freezes, exam countdowns.
   Pure logic: no DOM. All state lives under state.game. */
"use strict";

/* ---------- XP rules ---------- */
const XP = {
  correct: 10,          // per correct answer
  accuracyBonus: 50,    // session scored >= 90%
  perfectBonus: 25,     // extra when 100%
  routineBonus: 100,    // all three blocks done today
  comboStep: 3,         // combo multiplier rises every N consecutive correct
  comboMax: 3           // capped at 3x
};

/* Level curve per skill tree: level n needs n*100 cumulative-ish XP.
   Uses a gentle quadratic so early levels come fast, later ones slow. */
function levelFromXp(xp) {
  let lvl = 1, need = 100, rem = xp || 0;
  while (rem >= need) { rem -= need; lvl++; need = Math.round(need * 1.25); }
  return { level: lvl, into: rem, need, pct: Math.round((rem / need) * 100) };
}

const TREES = {
  french:    { key: "french",    name: "French",    icon: "🇫🇷", color: "var(--c-french)" },
  eu:        { key: "eu",        name: "EU",        icon: "🇪🇺", color: "var(--c-eu)" },
  reasoning: { key: "reasoning", name: "Reasoning", icon: "🧠", color: "var(--c-verbal)" }
};

function defaultGame() {
  return {
    xp: { french: 0, eu: 0, reasoning: 0 },
    totalXp: 0,
    badges: {},            // badgeId -> dateKey earned
    freezes: 2,            // streak freezes in stock
    freezeUsed: {},        // dateKey -> true when a freeze saved that day
    dailyGoal: 150,        // XP per day
    dailyXp: {},           // dateKey -> xp earned
    quests: { week: null, items: [] },
    bests: {},             // module -> best session pct
    exams: null,           // set on first load from EXAM_PRESETS
    weeklyChallenge: {}    // weekKey -> {done:true, pct}
  };
}

function ensureGame(state) {
  if (!state.game) state.game = defaultGame();
  const g = state.game;
  const d = defaultGame();
  for (const k of Object.keys(d)) if (g[k] === undefined) g[k] = d[k];
  if (!g.exams) g.exams = EXAM_PRESETS.map(e => Object.assign({}, e));
  return g;
}

/* ---------- Exam countdowns (dates researched Aug 2026) ---------- */
const EXAM_PRESETS = [
  { id: "ad5-reasoning", name: "EPSO AD5 — reasoning tests", date: "2026-10-01",
    note: "Phase 1 (verbal · numerical · abstract), scheduled Oct–Nov 2026", approx: true },
  { id: "ad5-docs", name: "EPSO AD5 — supporting documents due", date: "2026-10-07",
    note: "Deadline to upload supporting documents", approx: false },
  { id: "ad5-knowledge", name: "EPSO AD5 — EU knowledge + digital + EUFTE", date: "2027-01-15",
    note: "Phase 2, scheduled early 2027", approx: true },
  { id: "cast", name: "CAST Permanent — next testing wave", date: "2027-03-13",
    note: "CAST runs in waves; booking window opens ~1 week before", approx: true }
];

function examCountdowns(state) {
  const g = ensureGame(state);
  const today = todayKey();
  return (g.exams || [])
    .map(e => Object.assign({}, e, { days: daysBetween(today, e.date) }))
    .filter(e => e.days >= 0)
    .sort((a, b) => a.days - b.days);
}

function daysBetween(fromKey, toKey) {
  const a = keyToDate(fromKey), b = keyToDate(toKey);
  return Math.round((b - a) / 86400000);
}

/* ---------- Session XP ---------- */

/* results: [{item, answered, correct}] — returns a breakdown for the summary */
function computeSessionXp(state, module, results, allBlocksDone) {
  const answered = results.filter(r => r.answered);
  const correct = answered.filter(r => r.correct).length;
  const pct = answered.length ? Math.round((100 * correct) / answered.length) : 0;

  let base = 0, comboBonus = 0, run = 0;
  for (const r of answered) {
    if (r.correct) {
      run++;
      const mult = Math.min(XP.comboMax, 1 + Math.floor(run / XP.comboStep));
      base += XP.correct;
      comboBonus += XP.correct * (mult - 1);
    } else run = 0;
  }
  const accuracy = (answered.length >= 4 && pct >= 90) ? XP.accuracyBonus : 0;
  const perfect = (answered.length >= 4 && pct === 100) ? XP.perfectBonus : 0;
  const routine = allBlocksDone ? XP.routineBonus : 0;

  return {
    base, comboBonus, accuracy, perfect, routine,
    total: base + comboBonus + accuracy + perfect + routine,
    pct, correct, answered: answered.length,
    maxCombo: maxComboOf(answered)
  };
}

function maxComboOf(answered) {
  let best = 0, run = 0;
  for (const r of answered) { if (r.correct) { run++; best = Math.max(best, run); } else run = 0; }
  return best;
}

function awardXp(state, module, amount) {
  const g = ensureGame(state);
  const before = levelFromXp(g.xp[module] || 0).level;
  g.xp[module] = (g.xp[module] || 0) + amount;
  g.totalXp += amount;
  const today = todayKey();
  g.dailyXp[today] = (g.dailyXp[today] || 0) + amount;
  const after = levelFromXp(g.xp[module]).level;
  return { leveledUp: after > before, from: before, to: after };
}

function dailyProgress(state) {
  const g = ensureGame(state);
  const xp = g.dailyXp[todayKey()] || 0;
  return { xp, goal: g.dailyGoal, pct: Math.min(100, Math.round((100 * xp) / g.dailyGoal)), met: xp >= g.dailyGoal };
}

/* ---------- Personal bests ---------- */
function updateBest(state, key, pct) {
  const g = ensureGame(state);
  const prev = g.bests[key];
  if (prev === undefined || pct > prev) { g.bests[key] = pct; return { isNew: true, prev: prev === undefined ? null : prev }; }
  return { isNew: false, prev };
}

/* ---------- Streak freezes ---------- */
/* Called on load: if yesterday was a workday, incomplete, and a freeze is in
   stock, spend one to protect the streak. */
function applyStreakFreeze(state) {
  const g = ensureGame(state);
  // Nothing to protect until there is history before the gap day.
  const trained = Object.keys(g.dailyXp).filter(k => (g.dailyXp[k] || 0) > 0).sort();
  if (trained.length === 0) return null;

  let key = addDays(todayKey(), -1);
  for (let i = 0; i < 5; i++) {
    if (isWeekend(key)) { key = addDays(key, -1); continue; }
    if (key < trained[0]) return null;                 // gap predates any training
    const goalMet = (g.dailyXp[key] || 0) >= g.dailyGoal;
    if (goalMet || g.freezeUsed[key]) return null;
    if (g.freezes > 0) { g.freezes--; g.freezeUsed[key] = true; return key; }
    return null;
  }
  return null;
}

/* Earn a freeze every 5 completed days, capped at 3 in stock. */
function maybeEarnFreeze(state) {
  const g = ensureGame(state);
  const completed = Object.keys(g.dailyXp).filter(k => (g.dailyXp[k] || 0) >= g.dailyGoal).length;
  const earned = Math.floor(completed / 5);
  const already = g.freezesEarned || 0;
  if (earned > already) {
    g.freezes = Math.min(3, g.freezes + (earned - already));
    g.freezesEarned = earned;
    return true;
  }
  return false;
}

/* XP-goal streak (weekdays only, freezes protect) */
function gameStreak(state) {
  const g = ensureGame(state);
  let streak = 0;
  let key = todayKey();
  if ((g.dailyXp[key] || 0) < g.dailyGoal) key = addDays(key, -1);
  for (let i = 0; i < 3660; i++) {
    if (isWeekend(key)) { key = addDays(key, -1); continue; }
    if ((g.dailyXp[key] || 0) >= g.dailyGoal || g.freezeUsed[key]) { streak++; key = addDays(key, -1); }
    else break;
  }
  return streak;
}

/* ---------- Weekly quests ---------- */
function weekKey(d) {
  const dt = d ? keyToDate(d) : new Date();
  const day = (dt.getDay() + 6) % 7;             // Monday = 0
  dt.setDate(dt.getDate() - day);
  return todayKey(dt);
}

const QUEST_POOL = [
  { id: "q-xp", label: "Earn 600 XP this week", target: 600, kind: "xp" },
  { id: "q-days", label: "Hit your daily goal on 4 days", target: 4, kind: "days" },
  { id: "q-eu90", label: "Score 90%+ in 2 EU sessions", target: 2, kind: "eu90" },
  { id: "q-words", label: "Master 15 new French words", target: 15, kind: "words" },
  { id: "q-combo", label: "Reach a 10-answer combo", target: 10, kind: "combo" },
  { id: "q-reason", label: "Complete 3 reasoning blocks", target: 3, kind: "reasoning" },
  { id: "q-challenge", label: "Finish the weekly challenge", target: 1, kind: "challenge" }
];

function ensureQuests(state) {
  const g = ensureGame(state);
  const wk = weekKey();
  if (g.quests.week !== wk) {
    const rng = mulberry32(hashStr("quests|" + wk));
    const picked = seededShuffle(QUEST_POOL, rng).slice(0, 3);
    g.quests = { week: wk, items: picked.map(q => ({ id: q.id, label: q.label, target: q.target, kind: q.kind, progress: 0, done: false })) };
  }
  return g.quests;
}

function questProgress(state, kind, amount) {
  const q = ensureQuests(state);
  let completed = [];
  for (const item of q.items) {
    if (item.kind !== kind || item.done) continue;
    item.progress = kind === "combo" ? Math.max(item.progress, amount) : item.progress + amount;
    if (item.progress >= item.target) { item.done = true; completed.push(item); }
  }
  return completed;
}

/* ---------- Weekly challenge ---------- */
function challengeDone(state) {
  const g = ensureGame(state);
  return !!g.weeklyChallenge[weekKey()];
}

function recordChallenge(state, pct) {
  const g = ensureGame(state);
  g.weeklyChallenge[weekKey()] = { done: true, pct };
}

/* Build a 10-question challenge from the user's weakest EU topics + missed items */
function buildChallengeSession(state) {
  const rng = dailyRng("challenge", weekKey());
  const weak = euTopicStats(state).slice(0, 3).map(t => t.label);
  const pool = EU_QUESTIONS.filter(q => weak.length === 0 || weak.includes(q.topic));
  const euIds = (pool.length >= 6 ? pool : EU_QUESTIONS).map(q => q.id);
  const euPicks = seededShuffle(euIds, rng).slice(0, 6);
  const map = Object.fromEntries(EU_QUESTIONS.map(q => [q.id, q]));
  const items = euPicks.map(id => buildEuItem(map[id], rng));

  const vIds = seededShuffle(VERBAL_QUESTIONS.map(q => q.id), rng).slice(0, 2);
  const vMap = Object.fromEntries(VERBAL_QUESTIONS.map(q => [q.id, q]));
  items.push(...vIds.map(id => buildVerbalItem(vMap[id], rng)));

  const nIds = seededShuffle(NUMERICAL_QUESTIONS.map(q => q.id), rng).slice(0, 2);
  const nMap = Object.fromEntries(NUMERICAL_QUESTIONS.map(q => [q.id, q]));
  items.push(...nIds.map(id => buildNumericalItem(nMap[id], rng)));

  // once available, swap two EU slots for a digital-skills and an SJT item
  if (typeof DIGITAL_QUESTIONS !== "undefined" && DIGITAL_QUESTIONS.length) {
    const dId = seededShuffle(DIGITAL_QUESTIONS.map(q => q.id), rng)[0];
    const dMap = Object.fromEntries(DIGITAL_QUESTIONS.map(q => [q.id, q]));
    items.splice(0, 1, buildDigitalItem(dMap[dId], rng));
  }
  if (typeof SJT_QUESTIONS !== "undefined" && SJT_QUESTIONS.length) {
    const sId = seededShuffle(SJT_QUESTIONS.map(q => q.id), rng)[0];
    const sMap = Object.fromEntries(SJT_QUESTIONS.map(q => [q.id, q]));
    items.splice(1, 1, buildSjtItem(sMap[sId], rng));
  }

  return { module: "challenge", items: seededShuffle(items, rng), challenge: true };
}

/* ---------- Badges ---------- */
const BADGES = [
  // milestones
  { id: "b-first", tier: "milestone", icon: "🌱", name: "First Steps", desc: "Complete your first session" },
  { id: "b-streak5", tier: "milestone", icon: "🔥", name: "Five Alive", desc: "5-day streak" },
  { id: "b-streak20", tier: "milestone", icon: "🔥", name: "Unstoppable", desc: "20-day streak" },
  { id: "b-streak50", tier: "milestone", icon: "🏆", name: "Iron Habit", desc: "50-day streak" },
  { id: "b-xp1k", tier: "milestone", icon: "⭐", name: "1 000 XP", desc: "Earn 1 000 total XP" },
  { id: "b-xp10k", tier: "milestone", icon: "🌟", name: "10 000 XP", desc: "Earn 10 000 total XP" },
  { id: "b-words50", tier: "milestone", icon: "📗", name: "50 Words", desc: "Master 50 French words" },
  { id: "b-words150", tier: "milestone", icon: "📚", name: "150 Words", desc: "Master 150 French words" },
  { id: "b-eu100", tier: "milestone", icon: "🇪🇺", name: "Centurion", desc: "Answer 100 EU questions" },
  { id: "b-sessions50", tier: "milestone", icon: "📅", name: "Regular", desc: "Complete 50 sessions" },
  // skill
  { id: "b-perfect", tier: "skill", icon: "💯", name: "Flawless", desc: "Score 100% in a session" },
  { id: "b-eu90", tier: "skill", icon: "🎯", name: "On Target", desc: "EU rolling average reaches 90%" },
  { id: "b-verbal90", tier: "skill", icon: "📖", name: "Wordsmith", desc: "Verbal rolling average reaches 90%" },
  { id: "b-num90", tier: "skill", icon: "🔢", name: "Number Cruncher", desc: "Numerical rolling average reaches 90%" },
  { id: "b-abs90", tier: "skill", icon: "🔷", name: "Pattern Seer", desc: "Abstract rolling average reaches 90%" },
  { id: "b-b1", tier: "skill", icon: "🥈", name: "B1 Reached", desc: "Solid A2 and B1 vocabulary" },
  { id: "b-b2", tier: "skill", icon: "🥇", name: "B2 Reached", desc: "Complete the B2 course" },
  { id: "b-combo15", tier: "skill", icon: "⚡", name: "On Fire", desc: "15 correct answers in a row" },
  { id: "b-treaty", tier: "skill", icon: "📜", name: "Treaty Expert", desc: "90%+ on Treaties & History (20+ answered)" },
  { id: "b-challenge", tier: "skill", icon: "🛡️", name: "Challenger", desc: "Pass a weekly challenge with 80%+" },
  // comeback
  { id: "b-revenge", tier: "comeback", icon: "🔁", name: "Revenge", desc: "Master a question you had failed twice" },
  { id: "b-restart", tier: "comeback", icon: "💪", name: "Back On Track", desc: "Rebuild a 3-day streak after a break" },
  // secret
  { id: "b-early", tier: "secret", icon: "🌅", name: "Early Bird", desc: "Finish a session before 08:00", secret: true },
  { id: "b-night", tier: "secret", icon: "🦉", name: "Night Owl", desc: "Train after 22:00", secret: true },
  { id: "b-triple", tier: "secret", icon: "🎪", name: "Triple Crown", desc: "90%+ in all three blocks on one day", secret: true },
  { id: "b-week", tier: "secret", icon: "🗓️", name: "Perfect Week", desc: "Hit your goal all five workdays", secret: true }
];

function hasBadge(state, id) { return !!ensureGame(state).badges[id]; }
function grantBadge(state, id) {
  const g = ensureGame(state);
  if (g.badges[id]) return null;
  g.badges[id] = todayKey();
  return BADGES.find(b => b.id === id) || null;
}

/* Evaluate every badge condition; returns newly granted badge objects. */
function evaluateBadges(state, ctx) {
  const g = ensureGame(state);
  const out = [];
  const grant = id => { const b = grantBadge(state, id); if (b) out.push(b); };

  if (state.sessions.length >= 1) grant("b-first");
  if (state.sessions.length >= 50) grant("b-sessions50");
  const streak = gameStreak(state);
  if (streak >= 5) grant("b-streak5");
  if (streak >= 20) grant("b-streak20");
  if (streak >= 50) grant("b-streak50");
  if (g.totalXp >= 1000) grant("b-xp1k");
  if (g.totalXp >= 10000) grant("b-xp10k");

  const m = vocabMastery(state);
  const mastered = LEVELS.reduce((a, lv) => a + m[lv].mastered, 0);
  if (mastered >= 50) grant("b-words50");
  if (mastered >= 150) grant("b-words150");

  const euAnswered = state.sessions.filter(s => s.module === "eu").reduce((a, s) => a + s.total, 0);
  if (euAnswered >= 100) grant("b-eu100");

  if (ctx && ctx.pct === 100 && ctx.answered >= 4) grant("b-perfect");
  if (ctx && ctx.maxCombo >= 15) grant("b-combo15");

  if ((rollingAvg(state, "eu", 10) || 0) >= 90) grant("b-eu90");
  if ((rollingAvg(state, "verbal", 10) || 0) >= 90) grant("b-verbal90");
  if ((rollingAvg(state, "numerical", 10) || 0) >= 90) grant("b-num90");
  if ((rollingAvg(state, "abstract", 10) || 0) >= 90) grant("b-abs90");

  const fp = frenchProgress(state);
  if (m.A2.total && m.A2.mastered / m.A2.total >= 0.8 && m.B1.total && m.B1.mastered / m.B1.total >= 0.8) grant("b-b1");
  if (fp.pct >= 95) grant("b-b2");

  const treaty = euTopicStats(state).find(t => t.label === "Treaties & History");
  if (treaty && treaty.n >= 20 && treaty.pct >= 90) grant("b-treaty");

  if (ctx && ctx.challengePct !== undefined && ctx.challengePct >= 80) grant("b-challenge");

  // comeback: a question with 2+ wrongs now retired
  for (const [id, q] of Object.entries(state.qstats || {})) {
    if ((q.wrong || 0) >= 2 && (q.streak || 0) >= (state.settings.retireStreak || 3)) { grant("b-revenge"); break; }
  }

  // secrets
  const h = new Date().getHours();
  if (ctx && ctx.finished && h < 8) grant("b-early");
  if (ctx && ctx.finished && h >= 22) grant("b-night");
  if (ctx && ctx.tripleCrown) grant("b-triple");
  if (perfectWeek(state)) grant("b-week");

  // back on track: 3-day streak that follows a gap
  if (streak >= 3) {
    const before = addDays(todayKey(), -(streak + 1));
    if (Object.keys(g.dailyXp).length > streak + 2 && !(g.dailyXp[before] >= g.dailyGoal)) grant("b-restart");
  }
  return out;
}

function perfectWeek(state) {
  const g = ensureGame(state);
  const start = weekKey();
  for (let i = 0; i < 5; i++) {
    const k = addDays(start, i);
    if (k > todayKey()) return false;                 // week not finished yet
    if ((g.dailyXp[k] || 0) < g.dailyGoal && !g.freezeUsed[k]) return false;
  }
  return true;
}

function badgeCount(state) {
  const g = ensureGame(state);
  return { earned: Object.keys(g.badges).length, total: BADGES.length };
}
