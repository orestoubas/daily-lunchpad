const fs = require("fs");
const path = require("path").join(__dirname, "..", "data") + "/";
const load = (f, name) =>
  new Function(fs.readFileSync(path + f, "utf8") + `;return ${name};`)();
const v = load("french-vocab.js", "FRENCH_VOCAB");
const g = load("french-grammar.js", "FRENCH_GRAMMAR");
const e = load("eu.js", "EU_QUESTIONS");
const r = load("verbal.js", "VERBAL_QUESTIONS");
const n = load("numerical.js", "NUMERICAL_QUESTIONS");
const c = load("french-conj.js", "FRENCH_CONJ");
const dg = load("digital.js", "DIGITAL_QUESTIONS");
const sj = load("sjt.js", "SJT_QUESTIONS");
const dc = load("dictation.js", "DICTATION_QUESTIONS");
const rd = load("reading.js", "READING_QUESTIONS");
const wr = load("writing.js", "WRITING_PROMPTS");
const learn = load("eu-learn.js", "EU_LEARN");
const vp = load("verb-prep.js", "VERB_PREP");
const topics = load("topics.js", "TOPICS");
const pp = load("prepositions.js", "PREPOSITIONS");

let errs = [];
const ids = new Set();
const chk = (arr, name) => arr.forEach(x => {
  if (ids.has(x.id)) errs.push(`${name} dup id ${x.id}`);
  ids.add(x.id);
});
chk(v, "vocab"); chk(g, "gram"); chk(e, "eu"); chk(r, "verb"); chk(n, "num"); chk(c, "conj");
chk(dg, "digital"); chk(sj, "sjt"); chk(dc, "dictation"); chk(rd, "reading"); chk(wr, "writing");
chk(vp, "verbprep"); chk(pp, "prep");

const mcq = (arr, name) => arr.forEach(x => {
  if (!Array.isArray(x.options) || x.options.length !== 4) errs.push(`${name} ${x.id} options!=4`);
  if (!(Number.isInteger(x.a) && x.a >= 0 && x.a < 4)) errs.push(`${name} ${x.id} bad a`);
  if (!x.expl) errs.push(`${name} ${x.id} no expl`);
  if (new Set(x.options).size !== 4) errs.push(`${name} ${x.id} duplicate options`);
});
mcq(g, "gram"); mcq(e, "eu"); mcq(r, "verb"); mcq(n, "num"); mcq(c, "conj");
mcq(dg, "digital"); mcq(sj, "sjt"); mcq(rd, "reading");
// dictation has no q field but must satisfy options[a] === fr
dc.forEach(x => {
  if (!Array.isArray(x.options) || x.options.length !== 4) errs.push(`dictation ${x.id} options!=4`);
  if (!(Number.isInteger(x.a) && x.a >= 0 && x.a < 4)) errs.push(`dictation ${x.id} bad a`);
  else if (x.options[x.a] !== x.fr) errs.push(`dictation ${x.id} options[a] !== fr`);
});
// every EU question must have a learn note
e.forEach(x => { if (!learn[x.id]) errs.push(`eu ${x.id} missing learn note`); });
// writing prompts
wr.forEach(x => {
  if (!Array.isArray(x.points) || x.points.length < 4) errs.push(`writing ${x.id} too few points`);
  if (!Array.isArray(x.pitfalls) || x.pitfalls.length !== 3) errs.push(`writing ${x.id} pitfalls != 3`);
});

// Two card shapes coexist: the original flashcards (fr/en/ex, options generated
// at runtime) and authored MCQ cards that ship their own four options and a
// named near-miss trap. Both must declare a part of speech, because that is what
// keeps a noun question from being answerable by elimination alone.
v.forEach(x => {
  if (!x.fr || !x.en || !["A1", "A2", "B1", "B2", "C1", "C2"].includes(x.level)) errs.push(`vocab ${x.id} incomplete`);
  if (!x.pos) errs.push(`vocab ${x.id} has no pos`);
  if (x.pos === "noun" && !x.gender && !/\(m\/f\)/.test(x.fr) && !/^(les|des)\b/.test(x.fr)) {
    // a handful of nouns are genuinely genderless in the entry (l'État de droit)
  }
  if (Array.isArray(x.options)) {
    if (x.options.length !== 4 || new Set(x.options).size !== 4) errs.push(`vocab ${x.id} options not 4 distinct`);
    if (!(x.a >= 0 && x.a < 4)) errs.push(`vocab ${x.id} bad answer index`);
    if (!x.expl) errs.push(`vocab ${x.id} no explanation`);
    if (!x.trap) errs.push(`vocab ${x.id} no near-miss trap`);
    if (!["fr2en", "en2fr", "cloze", "collocation"].includes(x.format)) errs.push(`vocab ${x.id} bad format`);
    if (x.format === "fr2en" && x.options[x.a] !== x.en) errs.push(`vocab ${x.id} keyed answer is not the meaning`);
    if (x.format === "en2fr" && x.options[x.a] !== x.fr) errs.push(`vocab ${x.id} keyed answer is not the word`);
    if ((x.format === "cloze" || x.format === "collocation") && !x.q) errs.push(`vocab ${x.id} has no stem`);
    if (x.format === "cloze" && x.q && !x.q.includes("___")) errs.push(`vocab ${x.id} cloze has no gap`);
  } else if (!x.ex) {
    errs.push(`vocab ${x.id} flashcard without an example`);
  }
});
const frs = {};
v.forEach(x => {
  const k = x.fr.toLowerCase().replace(/\s*\(.*\)/, "");
  if (frs[k]) errs.push(`vocab dup word ${x.fr} (${frs[k]},${x.id})`);
  frs[k] = x.id;
});
const perLv = {}; v.forEach(x => perLv[x.level] = (perLv[x.level] || 0) + 1);
const perTopic = {}; e.forEach(x => perTopic[x.topic] = (perTopic[x.topic] || 0) + 1);
// The two preposition banks: same MCQ shape, plus a gap in every stem and an
// options set that must not mix parts of speech.
[[vp, "verbprep", "verb"], [pp, "prep", "group"]].forEach(([bank, name, extra]) => {
  bank.forEach(x => {
    if (!x.q || !x.q.includes("___")) errs.push(`${name} ${x.id} has no ___ gap`);
    if (!x[extra]) errs.push(`${name} ${x.id} missing ${extra}`);
    if (!x.expl || x.expl.length < 40) errs.push(`${name} ${x.id} explanation too thin`);
    if (!["A1","A2","B1","B2","C1","C2"].includes(x.level)) errs.push(`${name} ${x.id} bad level`);
  });
  const stems = {};
  bank.forEach(x => {
    if (stems[x.q]) errs.push(`${name} dup stem ${x.id} / ${stems[x.q]}`);
    stems[x.q] = x.id;
  });
});
pp.forEach(x => {
  const ok = ["place","time","movement","cause","manner","country","transport","verb-bound"];
  if (!ok.includes(x.group)) errs.push(`prep ${x.id} bad group ${x.group}`);
});


/* Conversation topics. The rule that matters most: a question must never show
   its own answer. Reading `fr` for an en2fr item did exactly that on 242 of
   1196 items — every en2fr question in the bank — and nothing caught it,
   because the data was correct and only the stem chosen at render time was
   wrong. So the check runs the real prompt logic over the real bank. */
const topicStem = q => {
  if (q.q) return q.q;                      // exercises carry only a stem
  if (q.format === "fr2en") return q.fr;
  if (q.format === "en2fr") return q.en;
  return q.fr || q.en || "";
};
const tnorm = s => String(s || "").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim();

Object.entries(topics).forEach(([key, t]) => {
  if (!t.slug || !t.level) errs.push(`topic ${key} missing slug or level`);
  if (key !== `${t.slug}-${t.level}`) errs.push(`topic ${key} key does not match its slug and level`);
  [["vocab", t.vocab], ["exercise", t.exercises]].forEach(([what, arr]) => {
    (arr || []).forEach(q => {
      if (ids.has(q.id)) errs.push(`topic ${what} dup id ${q.id}`);
      ids.add(q.id);
      const stem = topicStem(q);
      if (!stem) errs.push(`topic ${what} ${q.id} has no question stem`);
      if (!Array.isArray(q.options) || q.options.length !== 4) errs.push(`topic ${what} ${q.id} options != 4`);
      else {
        if (new Set(q.options).size !== 4) errs.push(`topic ${what} ${q.id} has duplicate options`);
        if (!(q.a >= 0 && q.a < 4)) errs.push(`topic ${what} ${q.id} bad answer index`);
        else if (tnorm(stem) === tnorm(q.options[q.a])) {
          errs.push(`topic ${what} ${q.id} asks its own answer ("${stem}")`);
        }
      }
      if (!q.expl) errs.push(`topic ${what} ${q.id} has no explanation`);
    });
  });
  (t.dialogue || []).forEach((turn, i) => {
    if (!turn.fr) errs.push(`topic ${key} turn ${i} has no French`);
    Object.keys(turn.gloss || {}).forEach(g => {
      if (!turn.fr.includes(g)) errs.push(`topic ${key} turn ${i} glosses "${g}", which is not in the line`);
    });
    if (turn.who === "you") {
      if (!Array.isArray(turn.accept) || !turn.accept.length) errs.push(`topic ${key} turn ${i} has no accepted answers`);
      else turn.accept.forEach(a => {
        if (a !== a.toLowerCase().trim() || /[.!?]$/.test(a)) errs.push(`topic ${key} turn ${i} accept not normalised: "${a}"`);
      });
    }
  });
  (t.phrases || []).forEach(p => {
    if (ids.has(p.id)) errs.push(`topic phrase dup id ${p.id}`);
    ids.add(p.id);
    if (!p.fr || !p.en) errs.push(`topic phrase ${p.id} incomplete`);
  });
});

const total = v.length+g.length+c.length+e.length+r.length+n.length+dg.length+sj.length+dc.length+rd.length+wr.length+vp.length+pp.length;
console.log("vocab", v.length, JSON.stringify(perLv), "| grammar", g.length, "| conj", c.length,
  "\n eu", e.length, JSON.stringify(perTopic),
  "\n verbal", r.length, "| numerical", n.length, "| digital", dg.length, "| sjt", sj.length,
  "| dictation", dc.length, "| reading", rd.length, "| writing", wr.length,
  "\n verb+prep", vp.length, "| prepositions", pp.length,
  "| topic-levels", Object.keys(topics).length,
  "| topic questions", Object.values(topics).reduce((n, t) => n + t.vocab.length + t.exercises.length, 0),
  "\n TOTAL", total, "items");
console.log(errs.length ? "ERRORS:\n" + errs.join("\n") : "all banks valid");
process.exit(errs.length ? 1 : 0);
