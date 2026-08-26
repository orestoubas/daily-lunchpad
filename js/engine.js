/* engine.js — spaced repetition, question drawing, session building, stats */
"use strict";

const SRS_INTERVALS = { 1: 0, 2: 1, 3: 3, 4: 7, 5: 14 }; // box -> days until next review
const MASTERED_BOX = 4;
const LEVELS = ["A2", "B1", "B2"];

const MODULES = {
  french:    { name: "French",       color: "var(--c-french)",    icon: "🇫🇷" },
  eu:        { name: "EU Knowledge", color: "var(--c-eu)",        icon: "🇪🇺" },
  reasoning: { name: "Reasoning",    color: "var(--c-verbal)",    icon: "🧠" },
  epso:      { name: "Digital & SJT", color: "var(--c-abstract)", icon: "💼" }
};

/* Optional 4th block — does not gate the daily routine. */
function epsoBankAvailable() {
  return (typeof DIGITAL_QUESTIONS !== "undefined" && DIGITAL_QUESTIONS.length > 0) ||
         (typeof SJT_QUESTIONS !== "undefined" && SJT_QUESTIONS.length > 0);
}

/* ---------- SRS (French vocabulary) ---------- */

function srsEntry(state, id) {
  return state.srs[id] || null;
}

function applySrsResult(state, id, correct) {
  const today = todayKey();
  let e = state.srs[id];
  if (!e) e = state.srs[id] = { box: 0, due: today, right: 0, wrong: 0 };
  if (correct) {
    e.box = Math.min(5, (e.box || 0) + 1);
    e.right++;
  } else {
    e.box = 1;
    e.wrong++;
  }
  e.due = addDays(today, SRS_INTERVALS[e.box]);
}

function vocabMastery(state) {
  const per = {};
  for (const lv of LEVELS) per[lv] = { total: 0, mastered: 0, seen: 0 };
  for (const c of FRENCH_VOCAB) {
    const p = per[c.level];
    p.total++;
    const e = state.srs[c.id];
    if (e) {
      p.seen++;
      if (e.box >= MASTERED_BOX) p.mastered++;
    }
  }
  return per;
}

/* Weighted progress towards B2 (vocabulary + grammar coverage proxy).
   A real B2 also needs listening/speaking practice outside this app. */
function frenchProgress(state) {
  const m = vocabMastery(state);
  const g = grammarAccuracyByLevel(state);
  const lvScore = lv => {
    const vm = m[lv].total ? m[lv].mastered / m[lv].total : 0;
    const gm = g[lv].t >= 10 ? g[lv].c / g[lv].t : vm; // until enough grammar data, follow vocab
    return 0.7 * vm + 0.3 * Math.min(1, gm);
  };
  const p = 0.25 * lvScore("A2") + 0.35 * lvScore("B1") + 0.40 * lvScore("B2");
  let band = "A2 (starting)";
  if (lvScore("A2") >= 0.8) band = "A2 solid — working on B1";
  if (lvScore("A2") >= 0.8 && lvScore("B1") >= 0.8) band = "B1 solid — working on B2";
  if (p >= 0.95) band = "B2 course complete";
  return { pct: Math.round(p * 100), band, mastery: m };
}

function grammarAccuracyByLevel(state) {
  const per = { A2: { c: 0, t: 0 }, B1: { c: 0, t: 0 }, B2: { c: 0, t: 0 } };
  for (const s of state.sessions) {
    if (s.module !== "french" || !s.grammar) continue;
    for (const lv of LEVELS) {
      if (s.grammar[lv]) { per[lv].c += s.grammar[lv].c; per[lv].t += s.grammar[lv].t; }
    }
  }
  return per;
}

/* The level currently being introduced: first level with unseen vocab */
function workingLevel(state) {
  for (const lv of LEVELS) {
    if (FRENCH_VOCAB.some(c => c.level === lv && !state.srs[c.id])) return lv;
  }
  return "B2";
}

/* ---------- Draw pools (EU / verbal / numerical / grammar / conj) ----------
   Cycle through the whole bank before repeating; questions answered wrong
   come back first in the next cycle. Questions answered correctly
   `retireStreak` times IN A ROW are retired from rotation and only return
   as occasional refreshers once the active pool runs thin. */

function questionStreak(state, id) {
  const q = state.qstats && state.qstats[id];
  return q ? (q.streak || 0) : 0;
}

function isRetired(state, id) {
  const threshold = state.settings.retireStreak || 3;
  return questionStreak(state, id) >= threshold;
}

function recordQuestionResult(state, id, correct) {
  const q = state.qstats[id] = state.qstats[id] || { right: 0, wrong: 0, streak: 0 };
  if (correct) { q.right++; q.streak = (q.streak || 0) + 1; }
  else { q.wrong++; q.streak = 0; }
}

function drawFromBank(state, bankName, allIds, n, rng) {
  const active = allIds.filter(id => !isRetired(state, id));
  let p = state.pool[bankName];
  if (!p || !Array.isArray(p.remaining)) {
    p = state.pool[bankName] = { remaining: seededShuffle(active, rng), wrong: [] };
  }
  // drop ids that no longer exist or have been retired since queuing
  const validActive = new Set(active);
  const valid = new Set(allIds);
  p.remaining = p.remaining.filter(id => validActive.has(id));
  p.wrong = (p.wrong || []).filter(id => valid.has(id));

  const picks = [];
  while (picks.length < n && active.length > 0) {
    if (p.remaining.length === 0) {
      // new cycle: previously-wrong first, then the rest reshuffled —
      // never re-queue a question already picked for THIS session
      const wrongSet = new Set(p.wrong);
      const picked = new Set(picks);
      const rest = seededShuffle(active.filter(id => !wrongSet.has(id) && !picked.has(id)), rng);
      p.remaining = p.wrong.filter(id => validActive.has(id) && !picked.has(id)).concat(rest);
      p.wrong = [];
      if (p.remaining.length === 0) break;
    }
    picks.push(p.remaining.shift());
  }
  // active pool too small → top up with retired questions as refreshers
  if (picks.length < n) {
    const refreshers = seededShuffle(
      allIds.filter(id => isRetired(state, id) && !picks.includes(id)), rng);
    while (picks.length < n && refreshers.length > 0) picks.push(refreshers.shift());
  }
  return picks;
}

function markWrong(state, bankName, id) {
  const p = state.pool[bankName];
  if (p && !p.wrong.includes(id)) p.wrong.push(id);
}

function bankMastery(state, allIds) {
  const retired = allIds.filter(id => isRetired(state, id)).length;
  return { retired, total: allIds.length };
}


/* ---------- Adaptive difficulty ----------
   Bias selection toward the topics/kinds you are weakest at, without ever
   starving the strong ones (every topic keeps a floor share). */

function topicAccuracy(state, bankName) {
  const acc = {};
  const src = { eu: typeof EU_QUESTIONS !== "undefined" ? EU_QUESTIONS : [],
                digital: typeof DIGITAL_QUESTIONS !== "undefined" ? DIGITAL_QUESTIONS : [],
                sjt: typeof SJT_QUESTIONS !== "undefined" ? SJT_QUESTIONS : [] }[bankName] || [];
  const keyOf = q => q.topic || q.area || q.competency || "general";
  for (const q of src) {
    const st = state.qstats[q.id];
    if (!st || (st.right + st.wrong) === 0) continue;
    const k = keyOf(q);
    acc[k] = acc[k] || { c: 0, t: 0 };
    acc[k].c += st.right; acc[k].t += st.right + st.wrong;
  }
  return acc;
}

/* Returns a weight per id: weak topics ~2x, unseen 1.3x, strong ~0.6x. */
function adaptiveWeights(state, bankName, items) {
  if (!state.settings.adaptive) return null;
  const acc = topicAccuracy(state, bankName);
  const keyOf = q => q.topic || q.area || q.competency || "general";
  const w = {};
  for (const q of items) {
    const k = keyOf(q);
    const a = acc[k];
    let weight = 1.3;                                  // unseen topic: mild boost
    if (a && a.t >= 5) {
      const pct = a.c / a.t;
      weight = pct >= 0.9 ? 0.6 : pct >= 0.75 ? 0.9 : pct >= 0.6 ? 1.5 : 2.0;
    }
    const qs = state.qstats[q.id];
    if (qs && qs.wrong > qs.right) weight *= 1.4;      // personally troublesome item
    w[q.id] = weight;
  }
  return w;
}

/* Weighted sample without replacement. */
function weightedPick(ids, weights, n, rng) {
  const pool = ids.slice();
  const out = [];
  while (out.length < n && pool.length) {
    let total = 0;
    for (const id of pool) total += (weights[id] || 1);
    let r = rng() * total;
    let idx = 0;
    for (; idx < pool.length; idx++) {
      r -= (weights[pool[idx]] || 1);
      if (r <= 0) break;
    }
    if (idx >= pool.length) idx = pool.length - 1;
    out.push(pool.splice(idx, 1)[0]);
  }
  return out;
}

/* Draw with adaptive weighting when enabled, otherwise the plain cycle. */
function drawAdaptive(state, bankName, allItems, n, rng) {
  const ids = allItems.map(q => q.id);
  const weights = adaptiveWeights(state, bankName, allItems);
  if (!weights) return drawFromBank(state, bankName, ids, n, rng);

  // Keep the cycle guarantee: draw a larger unbiased candidate set from the
  // pool, then let the weights choose within it. Nothing is ever starved.
  const candidates = drawFromBank(state, bankName, ids, Math.min(ids.length, n * 3), rng);
  const chosen = weightedPick(candidates, weights, n, rng);
  // return unused candidates to the front of the queue so they are not skipped
  const p = state.pool[bankName];
  if (p) {
    const unused = candidates.filter(id => !chosen.includes(id));
    p.remaining = unused.concat(p.remaining);
  }
  return chosen;
}

/* Session length auto-tunes to your measured pace so 10 minutes stays 10 minutes. */
function targetQuestionCount(state, module, fallback) {
  if (!state.settings.adaptive) return fallback;
  const recent = state.sessions.filter(s => s.module === module).slice(-5);
  if (recent.length < 3) return fallback;
  const secs = recent.reduce((a, s) => a + (s.seconds || 0), 0);
  const qs = recent.reduce((a, s) => a + (s.total || 0), 0);
  if (!qs || !secs) return fallback;
  const perQ = secs / qs;
  const budget = (state.settings.minutesPerBlock || 10) * 60 * 0.92;  // leave a margin
  const n = Math.round(budget / perQ);
  return Math.max(Math.ceil(fallback * 0.6), Math.min(Math.ceil(fallback * 1.8), n));
}

/* ---------- Question item builders ---------- */

function buildVocabItem(card, state, rng) {
  const toEn = rng() < 0.5;
  const sameLevel = FRENCH_VOCAB.filter(c => c.id !== card.id && c.level === card.level);
  const pool = sameLevel.length >= 3 ? sameLevel : FRENCH_VOCAB.filter(c => c.id !== card.id);
  const distractors = seededShuffle(pool, rng).slice(0, 3);
  const correctText = toEn ? card.en : card.fr;
  const options = seededShuffle([correctText, ...distractors.map(c => (toEn ? c.en : c.fr))], rng);
  // ~1 in 3 FR→EN reviews of already-seen cards become listening items
  const listen = toEn && !!state.srs[card.id] && rng() < 0.35 &&
    typeof window !== "undefined" && "speechSynthesis" in window;
  return {
    kind: "vocab", id: card.id, level: card.level,
    prompt: toEn ? card.fr : card.en,
    direction: toEn ? "FR → EN" : "EN → FR",
    listen,
    options, answer: options.indexOf(correctText),
    ex: card.ex, fr: card.fr, en: card.en,
    isNew: !state.srs[card.id]
  };
}

function buildGrammarItem(q) {
  return {
    kind: "grammar", id: q.id, level: q.level,
    prompt: q.q, options: q.options, answer: q.a, expl: q.expl
  };
}

function buildEuItem(q, rng) {
  const idx = q.options.map((_, i) => i);
  const shuffled = seededShuffle(idx, rng);
  return {
    kind: "eu", id: q.id, topic: q.topic,
    prompt: q.q,
    options: shuffled.map(i => q.options[i]),
    answer: shuffled.indexOf(q.a),
    expl: q.expl,
    learn: (typeof EU_LEARN !== "undefined" && EU_LEARN[q.id]) || null
  };
}

function buildVerbalItem(q, rng) {
  const idx = q.options.map((_, i) => i);
  const shuffled = seededShuffle(idx, rng);
  return {
    kind: "verbal", id: q.id,
    passage: q.passage, prompt: q.q,
    options: shuffled.map(i => q.options[i]),
    answer: shuffled.indexOf(q.a),
    expl: q.expl
  };
}

function buildDictationItem(q, rng) {
  const shuffled = seededShuffle(q.options.map((_, i) => i), rng);
  return {
    kind: "dictation", id: q.id, level: q.level,
    prompt: "Which sentence did you hear?",
    fr: q.fr, en: q.en,
    options: shuffled.map(i => q.options[i]),
    answer: shuffled.indexOf(q.a),
    expl: q.expl
  };
}

function buildReadingItem(q, rng) {
  const shuffled = seededShuffle(q.options.map((_, i) => i), rng);
  return {
    kind: "reading", id: q.id, level: q.level,
    passage: q.passage, prompt: q.q,
    options: shuffled.map(i => q.options[i]),
    answer: shuffled.indexOf(q.a),
    expl: q.expl
  };
}

function buildDigitalItem(q, rng) {
  const shuffled = seededShuffle(q.options.map((_, i) => i), rng);
  return {
    kind: "digital", id: q.id, area: q.area,
    prompt: q.q,
    options: shuffled.map(i => q.options[i]),
    answer: shuffled.indexOf(q.a),
    expl: q.expl
  };
}

function buildSjtItem(q, rng) {
  const shuffled = seededShuffle(q.options.map((_, i) => i), rng);
  return {
    kind: "sjt", id: q.id, competency: q.competency,
    prompt: q.q,
    options: shuffled.map(i => q.options[i]),
    answer: shuffled.indexOf(q.a),
    expl: q.expl
  };
}

function buildNumericalItem(q, rng) {
  const idx = q.options.map((_, i) => i);
  const shuffled = seededShuffle(idx, rng);
  return {
    kind: "numerical", id: q.id,
    table: q.table, prompt: q.q,
    options: shuffled.map(i => q.options[i]),
    answer: shuffled.indexOf(q.a),
    expl: q.expl
  };
}

/* ---------- Session builders (one 10-minute block each) ---------- */

function buildFrenchSession(state) {
  const rng = dailyRng("french", state.seq);
  const today = todayKey();

  const due = FRENCH_VOCAB
    .filter(c => state.srs[c.id] && state.srs[c.id].due <= today && state.srs[c.id].box < 5)
    .sort((a, b) => state.srs[a.id].due.localeCompare(state.srs[b.id].due));

  const introducedToday = state.newCards[today] || 0;
  const newCap = Math.max(0, (state.settings.newPerDay || 10) - introducedToday);
  const fresh = FRENCH_VOCAB.filter(c => !state.srs[c.id]).slice(0, newCap);

  let vocabCards = due.slice(0, 18 - Math.min(fresh.length, 8)).concat(fresh);
  if (vocabCards.length < 14) {
    // top up with non-due review of weakest boxes
    const extras = FRENCH_VOCAB
      .filter(c => state.srs[c.id] && !vocabCards.includes(c))
      .sort((a, b) => state.srs[a.id].box - state.srs[b.id].box)
      .slice(0, 14 - vocabCards.length);
    vocabCards = vocabCards.concat(extras);
  }
  vocabCards = seededShuffle(vocabCards, rng);

  const lv = workingLevel(state);
  const gLevels = LEVELS.slice(0, LEVELS.indexOf(lv) + 1);
  const gIds = FRENCH_GRAMMAR.filter(q => gLevels.includes(q.level)).map(q => q.id);
  const gPicks = drawFromBank(state, "grammar", gIds, 4, rng);
  const gMap = Object.fromEntries(FRENCH_GRAMMAR.map(q => [q.id, q]));

  const cIds = FRENCH_CONJ.filter(q => gLevels.includes(q.level)).map(q => q.id);
  const cPicks = drawFromBank(state, "conj", cIds, 3, rng);
  const cMap = Object.fromEntries(FRENCH_CONJ.map(q => [q.id, q]));

  // interleave: a grammar or conjugation drill after every third vocab card
  const drills = [];
  gPicks.forEach(id => drills.push(Object.assign(buildGrammarItem(gMap[id]), { kind: "grammar" })));
  cPicks.forEach(id => drills.push(Object.assign(buildGrammarItem(cMap[id]), { kind: "conj" })));
  const drillQueue = seededShuffle(drills, rng);

  const items = [];
  let di = 0;
  vocabCards.forEach((c, i) => {
    items.push(buildVocabItem(c, state, rng));
    if ((i + 1) % 3 === 0 && di < drillQueue.length) items.push(drillQueue[di++]);
  });
  while (di < drillQueue.length) items.push(drillQueue[di++]);

  // listening + reading at or below the current working level
  const canSpeak = typeof window !== "undefined" && "speechSynthesis" in window;
  if (canSpeak && typeof DICTATION_QUESTIONS !== "undefined" && DICTATION_QUESTIONS.length) {
    const ids = DICTATION_QUESTIONS.filter(q => gLevels.includes(q.level)).map(q => q.id);
    if (ids.length) {
      const picks = drawFromBank(state, "dictation", ids, 2, rng);
      const map = Object.fromEntries(DICTATION_QUESTIONS.map(q => [q.id, q]));
      picks.forEach(id => items.splice(Math.floor(rng() * (items.length + 1)), 0, buildDictationItem(map[id], rng)));
    }
  }
  if (typeof READING_QUESTIONS !== "undefined" && READING_QUESTIONS.length) {
    // reading starts at B1, so an A2 learner still gets gentle exposure
    let ids = READING_QUESTIONS.filter(q => gLevels.includes(q.level)).map(q => q.id);
    if (!ids.length) ids = READING_QUESTIONS.filter(q => q.level === "B1").map(q => q.id);
    if (ids.length) {
      const picks = drawFromBank(state, "reading", ids, 1, rng);
      const map = Object.fromEntries(READING_QUESTIONS.map(q => [q.id, q]));
      picks.forEach(id => items.push(buildReadingItem(map[id], rng)));
    }
  }
  return { module: "french", items };
}

function buildEuSession(state) {
  const rng = dailyRng("eu", state.seq);
  const n = targetQuestionCount(state, "eu", 14);
  const picks = drawAdaptive(state, "eu", EU_QUESTIONS, n, rng);
  const map = Object.fromEntries(EU_QUESTIONS.map(q => [q.id, q]));
  return { module: "eu", items: picks.map(id => buildEuItem(map[id], rng)) };
}

function buildReasoningSession(state) {
  const rng = dailyRng("reasoning", state.seq);
  const vIds = VERBAL_QUESTIONS.map(q => q.id);
  const nIds = NUMERICAL_QUESTIONS.map(q => q.id);
  const vPicks = drawFromBank(state, "verbal", vIds, 2, rng);
  const nPicks = drawFromBank(state, "numerical", nIds, 2, rng);
  const vMap = Object.fromEntries(VERBAL_QUESTIONS.map(q => [q.id, q]));
  const nMap = Object.fromEntries(NUMERICAL_QUESTIONS.map(q => [q.id, q]));
  const abstract = [0, 1].map(i => genAbstractItem(rng, todayKey() + "-" + (state.seq || 0) + "-" + i));
  const items = vPicks.map(id => buildVerbalItem(vMap[id], rng))
    .concat(nPicks.map(id => buildNumericalItem(nMap[id], rng)))
    .concat(abstract);
  return { module: "reasoning", items };
}

function buildEpsoSession(state) {
  const rng = dailyRng("epso", state.seq);
  const items = [];
  if (typeof DIGITAL_QUESTIONS !== "undefined" && DIGITAL_QUESTIONS.length) {
    const picks = drawAdaptive(state, "digital", DIGITAL_QUESTIONS, 6, rng);
    const map = Object.fromEntries(DIGITAL_QUESTIONS.map(q => [q.id, q]));
    items.push(...picks.map(id => buildDigitalItem(map[id], rng)));
  }
  if (typeof SJT_QUESTIONS !== "undefined" && SJT_QUESTIONS.length) {
    const picks = drawAdaptive(state, "sjt", SJT_QUESTIONS, 4, rng);
    const map = Object.fromEntries(SJT_QUESTIONS.map(q => [q.id, q]));
    items.push(...picks.map(id => buildSjtItem(map[id], rng)));
  }
  return { module: "epso", items: seededShuffle(items, rng) };
}

/* ---------- Recording results ---------- */

function recordSession(state, session, results, seconds, completed) {
  const today = todayKey();
  const answered = results.filter(r => r.answered);
  if (answered.length === 0) return;

  state.sessionCounter = (state.sessionCounter || 0) + 1;
  const rec = {
    id: `${state.deviceId || "d"}:${state.sessionCounter}`,
    date: today, module: session.module,
    correct: answered.filter(r => r.correct).length,
    total: answered.length,
    seconds
  };
  rec.pct = pct(rec.correct, rec.total);

  if (session.module === "eu") {
    rec.topics = {};
    for (const r of answered) {
      const t = r.item.topic;
      rec.topics[t] = rec.topics[t] || { c: 0, t: 0 };
      rec.topics[t].t++;
      if (r.correct) rec.topics[t].c++;
    }
  }
  if (session.module === "reasoning") {
    rec.sub = { verbal: { c: 0, t: 0 }, numerical: { c: 0, t: 0 }, abstract: { c: 0, t: 0 } };
    for (const r of answered) {
      const s = rec.sub[r.item.kind];
      if (s) { s.t++; if (r.correct) s.c++; }
    }
  }
  if (session.module === "epso") {
    rec.sub = { digital: { c: 0, t: 0 }, sjt: { c: 0, t: 0 } };
    for (const r of answered) {
      const s = rec.sub[r.item.kind];
      if (s) { s.t++; if (r.correct) s.c++; }
    }
  }
  if (session.module === "french") {
    rec.grammar = {};
    let newIntroduced = 0;
    for (const r of answered) {
      if (r.item.kind === "grammar" || r.item.kind === "conj") {
        const lv = r.item.level;
        rec.grammar[lv] = rec.grammar[lv] || { c: 0, t: 0 };
        rec.grammar[lv].t++;
        if (r.correct) rec.grammar[lv].c++;
      }
      if (r.item.kind === "vocab" && r.item.isNew) newIntroduced++;
    }
    state.newCards[today] = (state.newCards[today] || 0) + newIntroduced;
  }

  state.sessions.push(rec);
  if (completed) {
    state.days[today] = state.days[today] || {};
    state.days[today][session.module] = true;
  }
  saveState(state);
}

/* ---------- Stats ---------- */

function dayComplete(state, key) {
  const d = state.days[key];
  return !!(d && d.french && d.eu && d.reasoning);
}

function computeStreak(state) {
  // Workday streak: weekends neither break nor extend it (unless done and weekendCounts on).
  let streak = 0;
  let key = todayKey();
  if (!dayComplete(state, key)) key = addDays(key, -1); // today may still be in progress
  for (let i = 0; i < 3660; i++) {
    if (isWeekend(key)) {
      if (dayComplete(state, key) && state.settings.weekendCounts) streak++;
      key = addDays(key, -1);
      continue;
    }
    if (dayComplete(state, key)) { streak++; key = addDays(key, -1); }
    else break;
  }
  return streak;
}

const REASONING_SUBS = ["verbal", "numerical", "abstract"];
const EPSO_SUBS = ["digital", "sjt"];

function rollingAvg(state, module, k) {
  const scores = [];
  for (const s of state.sessions) {
    if (REASONING_SUBS.includes(module) || EPSO_SUBS.includes(module)) {
      const parent = REASONING_SUBS.includes(module) ? "reasoning" : "epso";
      if (s.module === parent && s.sub && s.sub[module] && s.sub[module].t > 0) {
        scores.push(pct(s.sub[module].c, s.sub[module].t));
      }
    } else if (s.module === module) {
      scores.push(s.pct);
    }
  }
  const last = scores.slice(-k);
  if (last.length === 0) return null;
  return Math.round(last.reduce((a, b) => a + b, 0) / last.length);
}

function scoreSeries(state, module, k) {
  const out = [];
  for (const s of state.sessions) {
    if (REASONING_SUBS.includes(module) || EPSO_SUBS.includes(module)) {
      const parent = REASONING_SUBS.includes(module) ? "reasoning" : "epso";
      if (s.module === parent && s.sub && s.sub[module] && s.sub[module].t > 0) {
        out.push({ label: s.date, y: pct(s.sub[module].c, s.sub[module].t) });
      }
    } else if (s.module === module) {
      out.push({ label: s.date, y: s.pct });
    }
  }
  return out.slice(-k);
}

function euTopicStats(state) {
  const agg = {};
  for (const s of state.sessions) {
    if (s.module !== "eu" || !s.topics) continue;
    for (const [t, v] of Object.entries(s.topics)) {
      agg[t] = agg[t] || { c: 0, t: 0 };
      agg[t].c += v.c;
      agg[t].t += v.t;
    }
  }
  return Object.entries(agg)
    .map(([topic, v]) => ({ label: topic, pct: pct(v.c, v.t), n: v.t }))
    .sort((a, b) => a.pct - b.pct);
}

function heatmapData(state, weeks) {
  // returns array of {key, count(0..3), weekend}
  const out = [];
  const today = todayKey();
  const start = keyToDate(today);
  start.setDate(start.getDate() - (weeks * 7 - 1) - ((start.getDay() + 6) % 7)); // align to Monday
  const d = new Date(start);
  while (todayKey(d) <= today) {
    const key = todayKey(d);
    const rec = state.days[key] || {};
    const count = ["french", "eu", "reasoning"].filter(m => rec[m]).length;
    out.push({ key, count, weekend: isWeekend(key) });
    d.setDate(d.getDate() + 1);
  }
  return out;
}

function totalMinutes(state) {
  return Math.round(state.sessions.reduce((a, s) => a + (s.seconds || 0), 0) / 60);
}
