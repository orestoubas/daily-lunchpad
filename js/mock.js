/* mock.js — full-length EPSO-style mock exams.
   Unlike daily blocks these hide all feedback until the end, allow no pausing,
   and are scored against the real pass marks. */
"use strict";

/* Structures follow the published AD5 2026 format. Where EPSO has not published
   an exact figure the value is marked approx and is easy to edit here. */
const MOCK_EXAMS = [
  {
    id: "mock-reasoning",
    name: "Reasoning battery",
    blurb: "Verbal, numerical and abstract under one clock — EPSO phase 1.",
    icon: "🧠",
    parts: [
      { kind: "verbal", n: 20, label: "Verbal" },
      { kind: "numerical", n: 10, label: "Numerical" },
      { kind: "abstract", n: 10, label: "Abstract" }
    ],
    minutes: 65,
    pass: { verbal: 50, numerical: 50, abstract: 50 },
    note: "Pass marks are indicative; EPSO sets them per competition."
  },
  {
    id: "mock-eu",
    name: "EU knowledge",
    blurb: "30 questions in 40 minutes, exactly the published format.",
    icon: "🇪🇺",
    parts: [{ kind: "eu", n: 30, label: "EU knowledge" }],
    minutes: 40,
    pass: { eu: 50 },
    note: "Scored out of 30; EPSO uses this as a ranking test."
  },
  {
    id: "mock-digital",
    name: "Digital skills",
    blurb: "40 questions in 30 minutes, pass mark 20/40.",
    icon: "💻",
    parts: [{ kind: "digital", n: 40, label: "Digital skills" }],
    minutes: 30,
    pass: { digital: 50 },
    note: "DigComp-based; pass mark 20 out of 40."
  },
  {
    id: "mock-full",
    name: "Full simulation",
    blurb: "Everything back to back. Long, brutal, realistic.",
    icon: "🏁",
    parts: [
      { kind: "verbal", n: 20, label: "Verbal" },
      { kind: "numerical", n: 10, label: "Numerical" },
      { kind: "abstract", n: 10, label: "Abstract" },
      { kind: "eu", n: 30, label: "EU knowledge" },
      { kind: "digital", n: 20, label: "Digital skills" },
      { kind: "sjt", n: 10, label: "Situational judgement" }
    ],
    minutes: 135,
    pass: { verbal: 50, numerical: 50, abstract: 50, eu: 50, digital: 50, sjt: 50 },
    note: "Approximates a full testing day. Block out the time before starting."
  }
];

/* Mock exams ignore retirement and the daily pools: they sample the WHOLE bank
   at random so the test is representative, not tuned to your weak spots. */
function buildMockSession(state, examId) {
  const exam = MOCK_EXAMS.find(e => e.id === examId);
  if (!exam) return null;
  const rng = mulberry32(hashStr("mock|" + examId + "|" + Date.now()));
  const items = [];

  for (const part of exam.parts) {
    if (part.kind === "abstract") {
      for (let i = 0; i < part.n; i++) items.push(genAbstractItem(rng, "mock-" + examId + "-" + i));
      continue;
    }
    const src = {
      verbal: typeof VERBAL_QUESTIONS !== "undefined" ? VERBAL_QUESTIONS : [],
      numerical: typeof NUMERICAL_QUESTIONS !== "undefined" ? NUMERICAL_QUESTIONS : [],
      eu: typeof EU_QUESTIONS !== "undefined" ? EU_QUESTIONS : [],
      digital: typeof DIGITAL_QUESTIONS !== "undefined" ? DIGITAL_QUESTIONS : [],
      sjt: typeof SJT_QUESTIONS !== "undefined" ? SJT_QUESTIONS : []
    }[part.kind] || [];
    if (!src.length) continue;
    const build = {
      verbal: buildVerbalItem, numerical: buildNumericalItem, eu: buildEuItem,
      digital: buildDigitalItem, sjt: buildSjtItem
    }[part.kind];
    const picked = seededShuffle(src, rng).slice(0, Math.min(part.n, src.length));
    items.push(...picked.map(q => build(q, rng)));
  }

  return { module: "mock", examId, exam, items, mock: true };
}

/* Score a finished mock per part and against the pass marks. */
function scoreMock(exam, results) {
  const per = {};
  for (const r of results) {
    const k = r.item.kind;
    per[k] = per[k] || { c: 0, t: 0, answered: 0 };
    per[k].t++;
    if (r.answered) { per[k].answered++; if (r.correct) per[k].c++; }
  }
  const parts = Object.entries(per).map(([kind, v]) => {
    const pctScore = v.t ? Math.round((100 * v.c) / v.t) : 0;
    const need = (exam.pass && exam.pass[kind]) || 50;
    return { kind, correct: v.c, total: v.t, answered: v.answered, pct: pctScore, need, passed: pctScore >= need };
  });
  const totalC = parts.reduce((a, p) => a + p.correct, 0);
  const totalT = parts.reduce((a, p) => a + p.total, 0);
  return {
    parts,
    correct: totalC, total: totalT,
    pct: totalT ? Math.round((100 * totalC) / totalT) : 0,
    passedAll: parts.every(p => p.passed)
  };
}

function mockLabel(kind) {
  return { verbal: "Verbal", numerical: "Numerical", abstract: "Abstract",
    eu: "EU knowledge", digital: "Digital skills", sjt: "Situational judgement" }[kind] || kind;
}

/* Mock history lives separately so it never distorts the daily rolling averages. */
function recordMock(state, examId, score, seconds) {
  const g = ensureGame(state);
  g.mocks = g.mocks || [];
  g.mocks.push({
    date: todayKey(), examId, pct: score.pct,
    correct: score.correct, total: score.total,
    parts: score.parts.map(p => ({ kind: p.kind, pct: p.pct, passed: p.passed })),
    passedAll: score.passedAll, seconds
  });
  if (g.mocks.length > 60) g.mocks = g.mocks.slice(-60);
}

function mockHistory(state, examId) {
  const g = ensureGame(state);
  return (g.mocks || []).filter(m => !examId || m.examId === examId);
}
