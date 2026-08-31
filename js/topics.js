/* topics.js — Conversations: ten real Brussels scenes, each at several CEFR
   levels, worked through in four stages until you can actually hold the
   conversation.

   Vocabulary → Dialogue → Exercises → Role-play. Topics unlock in order, and a
   level opens once the level below it is finished, so the same ten scenes can
   be replayed harder rather than being finished once and forgotten.

   Role-play is typing only and accepts any correct variant: there is never one
   right sentence at a counter, so every reasonable phrasing is listed in the
   data and the others are shown after a correct answer. When an answer is
   wrong, the mistake autopsy puts what you wrote next to what a native would
   say and marks the words that differ. */

"use strict";

const TOPIC_STAGES = ["vocab", "dialogue", "exercises", "write", "roleplay"];
/* Five stages, still 500 XP for a whole topic. */
const TOPIC_STAGE_XP = { vocab: 100, dialogue: 70, exercises: 120, write: 110, roleplay: 100 };
const TOPIC_STAGE_LABEL = {
  vocab: "Vocabulary", dialogue: "Dialogue", exercises: "Exercises",
  write: "Write it", roleplay: "Role-play"
};

function topicsAvailable() {
  return typeof TOPICS !== "undefined" && Object.keys(TOPICS).length > 0;
}

function topicKey(slug, level) { return slug + "-" + level; }

/* Levels that actually have content, in CEFR order. */
function topicLevels() {
  if (!topicsAvailable()) return [];
  const have = new Set(Object.values(TOPICS).map(t => t.level));
  return TOPIC_LEVELS.filter(l => have.has(l));
}

function topicsAtLevel(level) {
  if (!topicsAvailable()) return [];
  return TOPIC_ORDER.map(slug => TOPICS[topicKey(slug, level)]).filter(Boolean);
}

function ensureTopicState(state) {
  const g = ensureGame(state);
  if (!g.topics) g.topics = {};
  // "Write it" was added after the first topics shipped. A topic finished under
  // the old four-stage shape stays finished rather than silently re-opening.
  for (const t of Object.values(g.topics)) {
    if (t && t.stages && t.done && !t.stages.write) t.stages.write = true;
  }
  return g.topics;
}

function topicProgress(state, key) {
  const t = ensureTopicState(state)[key];
  return t || { stages: {}, done: false, xp: 0, best: 0 };
}

function topicStageDone(state, key, stage) {
  return !!topicProgress(state, key).stages[stage];
}

function topicDone(state, key) {
  return TOPIC_STAGES.every(s => topicStageDone(state, key, s));
}

/* Sequential unlock: the first topic of a level is always open, each later one
   opens when the one before it is finished. A level opens when every topic of
   the level below is finished — that is what makes replaying at B1 a reward
   rather than a parallel track. */
function topicUnlocked(state, slug, level) {
  const levels = topicLevels();
  const li = levels.indexOf(level);
  if (li > 0) {
    const below = levels[li - 1];
    const allBelowDone = topicsAtLevel(below).every(t => topicDone(state, topicKey(t.slug, below)));
    if (!allBelowDone) return false;
  }
  const order = topicsAtLevel(level).map(t => t.slug);
  const i = order.indexOf(slug);
  if (i <= 0) return true;
  return topicDone(state, topicKey(order[i - 1], level));
}

function levelUnlocked(state, level) {
  const levels = topicLevels();
  const li = levels.indexOf(level);
  if (li <= 0) return true;
  const below = levels[li - 1];
  return topicsAtLevel(below).every(t => topicDone(state, topicKey(t.slug, below)));
}

function topicsOverall(state) {
  if (!topicsAvailable()) return { done: 0, total: 0, xp: 0 };
  const keys = Object.keys(TOPICS);
  const done = keys.filter(k => topicDone(state, k)).length;
  const xp = keys.reduce((n, k) => n + (topicProgress(state, k).xp || 0), 0);
  return { done, total: keys.length, xp };
}

/* ---------- answer matching ----------
   Accent- and case-insensitive, punctuation and elision-spacing normalised, so
   a phone keyboard is never the thing that marks you wrong. Word order and word
   choice still are. */
function normFr(s) {
  return String(s || "")
    .toLowerCase()
    .normalize("NFD").replace(/[̀-ͯ]/g, "")
    .replace(/[’`]/g, "'")
    .replace(/[.,!?;:…]/g, " ")
    .replace(/\s*'\s*/g, "'")
    .replace(/\s+/g, " ")
    .trim();
}

function matchesAccepted(input, accepted) {
  const n = normFr(input);
  if (!n) return false;
  return (accepted || []).some(a => normFr(a) === n);
}

/* Word-level diff for the mistake autopsy: which words you wrote that the model
   answer does not have, and which of its words you missed. Deliberately simple —
   it points at the difference, it does not try to be a grammar checker. */
function autopsy(input, model) {
  const you = normFr(input).split(" ").filter(Boolean);
  const them = normFr(model).split(" ").filter(Boolean);
  const pool = them.slice();
  const yourMarks = you.map(w => {
    const i = pool.indexOf(w);
    if (i >= 0) { pool.splice(i, 1); return { w, ok: true }; }
    return { w, ok: false };
  });
  const pool2 = normFr(input).split(" ").filter(Boolean);
  const modelMarks = them.map(w => {
    const i = pool2.indexOf(w);
    if (i >= 0) { pool2.splice(i, 1); return { w, ok: true }; }
    return { w, ok: false };
  });
  return { yourMarks, modelMarks };
}

/* ---------- phrase-level spaced repetition ----------
   Whole usable sentences go into the same Leitner boxes as vocabulary, so
   "Je peux payer par Bancontact ?" comes back on schedule as one unit rather
   than as four separate words. */
function topicPhraseCards(state, level) {
  const out = [];
  for (const t of topicsAtLevel(level || null) .concat(level ? [] : [])) {
    for (const p of t.phrases || []) out.push(p);
  }
  return out;
}

function allTopicPhrases() {
  if (!topicsAvailable()) return [];
  return Object.values(TOPICS).flatMap(t => (t.phrases || []).map(p =>
    Object.assign({}, p, { topic: t.slug, level: t.level })));
}

function duePhrases(state, n) {
  const today = todayKey();
  const all = allTopicPhrases().filter(p => {
    const e = state.srs[p.id];
    return e && e.due <= today && e.box < 5;
  });
  return all.slice(0, n || 4);
}

/* A phrase is only put into rotation once its topic-level's vocabulary stage is
   done — no point scheduling a sentence made of words never introduced. */
function seedPhraseCards(state, key) {
  const t = TOPICS[key];
  if (!t) return;
  for (const p of t.phrases || []) {
    if (!state.srs[p.id]) state.srs[p.id] = { box: 1, due: todayKey(), right: 0, wrong: 0 };
  }
}

function buildPhraseItem(p) {
  const others = allTopicPhrases().filter(x => x.id !== p.id);
  const picks = [];
  const seen = new Set([p.en]);
  for (const o of others) {
    if (picks.length >= 3) break;
    if (seen.has(o.en)) continue;
    seen.add(o.en); picks.push(o.en);
  }
  const options = [p.en].concat(picks);
  return {
    kind: "phrase", id: p.id, level: p.level || "",
    prompt: p.fr, options, answer: 0,
    expl: p.note || p.en
  };
}

/* ---------- sessions ---------- */

const TOPIC_DIRECTION = {
  fr2en: "FR → EN", en2fr: "EN → FR",
  cloze: "in a sentence", collocation: "which goes together"
};

/* The stem depends entirely on the format. Reading `fr` for an en2fr item shows
   the French word — which is the answer — so the question answers itself. That
   is a silent, total failure of the exercise, which is why topicSelfAnswering
   below is asserted over the whole bank in CI. */
function topicPrompt(q) {
  // An explicit stem always wins. Exercise items carry only `q` — no fr/en pair —
  // whatever their format, so reading the format first leaves them with no
  // question at all.
  if (q.q) return q.q;
  if (q.format === "fr2en") return q.fr;
  if (q.format === "en2fr") return q.en;
  return q.fr || q.en || q.prompt || "";
}

/* True when the stem gives the answer away outright. */
function topicSelfAnswering(q) {
  const stem = normFr(topicPrompt(q));
  const answer = normFr((q.options || [])[q.a]);
  return !!stem && !!answer && stem === answer;
}

/* Vocabulary and Exercises stages reuse the ordinary question runner, so they
   get the same shuffling, keyboard shortcuts, XP and combo behaviour as the
   daily blocks. */
function buildTopicSession(state, key, stage) {
  const t = TOPICS[key];
  if (!t) return null;
  const rng = dailyRng("topic-" + key + "-" + stage, state.seq);
  let pool = [];
  if (stage === "vocab") pool = (t.vocab || []).slice();
  if (stage === "exercises") pool = (t.exercises || []).slice();
  const items = seededShuffle(pool, rng).map(q => {
    const opts = q.options.slice();
    const idx = opts.map((_, i) => i);
    const order = seededShuffle(idx, rng);
    return {
      kind: "topic", id: q.id, level: q.level || t.level,
      topicKey: key, topicTitle: t.title,
      prompt: topicPrompt(q),
      direction: TOPIC_DIRECTION[q.format] || "",
      options: order.map(i => opts[i]),
      answer: order.indexOf(q.a),
      expl: q.expl || "",
      trap: q.trap || ""
    };
  });
  return { module: "topic", topicKey: key, stage, items };
}

/* ---------- views ---------- */

function topicHead(title, back) {
  return `<div class="pagehead">
    <h1>${title}</h1>
    <div class="nav"><button class="ghost" data-nav="${back || "topics"}">← ${back === "home" ? "Dashboard" : "Conversations"}</button></div>
  </div>`;
}

function renderTopicsView() {
  const st = App.state;
  const levels = topicLevels();
  const level = levels.includes(App.topicLevel) ? App.topicLevel : (levels[0] || "A2");
  App.topicLevel = level;
  const all = topicsOverall(st);

  const tabs = levels.map(l => {
    const open = levelUnlocked(st, l);
    const doneN = topicsAtLevel(l).filter(t => topicDone(st, topicKey(t.slug, l))).length;
    return `<button class="${l === level ? "primary" : ""}" data-tlevel="${l}" ${open ? "" : "disabled"}
      title="${open ? "" : "Finish every topic at the level below first"}">
      ${open ? "" : "🔒 "}${l} <span class="muted">${doneN}/${topicsAtLevel(l).length}</span></button>`;
  }).join("");

  const cards = topicsAtLevel(level).map((t, i) => {
    const key = topicKey(t.slug, level);
    const open = topicUnlocked(st, t.slug, level);
    const p = topicProgress(st, key);
    const stages = TOPIC_STAGES.map(s =>
      `<span class="tp-dot ${p.stages[s] ? "on" : ""}" title="${TOPIC_STAGE_LABEL[s]}"></span>`).join("");
    const doneAll = topicDone(st, key);
    return `<div class="card topiccard ${doneAll ? "done" : ""} ${open ? "" : "locked"}">
      <div class="tp-head">
        <span class="tp-n">${i + 1}</span>
        <div>
          <div class="tp-title">${esc(t.title)}</div>
          <div class="tp-place">${esc(t.place || "")}</div>
        </div>
        <span class="tp-reg">${esc(t.register || "")}</span>
      </div>
      <div class="tp-meta">${(t.vocab || []).length} words · ${(t.phrases || []).length} phrases · ${(t.dialogue || []).length} turns</div>
      <div class="tp-dots">${stages}</div>
      ${open
        ? `<button data-topic="${key}">${doneAll ? "Replay" : p.xp ? "Continue" : "Start"}</button>`
        : `<button disabled>🔒 Finish the topic above first</button>`}
    </div>`;
  }).join("");

  $app.innerHTML = `
    ${topicHead("🗣️ Conversations", "home")}
    <p class="sub">Ten real Brussels scenes. Work through the four stages until you can hold the conversation —
    then replay the whole set one level higher.</p>
    <div class="tp-summary card">
      <div><b>${all.done}</b><span>topics finished</span></div>
      <div><b>${all.total}</b><span>topic-levels available</span></div>
      <div><b>${all.xp}</b><span>XP earned here</span></div>
    </div>
    <div class="tp-levels">${tabs}</div>
    <div class="missions">${cards}</div>`;

  document.querySelectorAll("[data-nav]").forEach(b => b.onclick = () => go(b.dataset.nav));
  document.querySelectorAll("[data-tlevel]").forEach(b => b.onclick = () => { App.topicLevel = b.dataset.tlevel; render(); });
  document.querySelectorAll("[data-topic]").forEach(b => b.onclick = () => { App.topicKey = b.dataset.topic; go("topic"); });
}

function renderTopicView() {
  const st = App.state;
  const key = App.topicKey;
  const t = TOPICS[key];
  if (!t) return go("topics");
  const p = topicProgress(st, key);

  // Stages run in order: the dialogue is not much use before its words, and
  // the role-play is not much use before the dialogue.
  let firstOpen = true;
  const rows = TOPIC_STAGES.map((s, i) => {
    const done = !!p.stages[s];
    const prevDone = i === 0 || p.stages[TOPIC_STAGES[i - 1]];
    const open = prevDone;
    const html = `<div class="tp-stage ${done ? "done" : ""} ${open ? "" : "locked"}">
      <div class="tp-stage-i">${done ? "✓" : i + 1}</div>
      <div class="tp-stage-b">
        <div class="tp-stage-t">${TOPIC_STAGE_LABEL[s]}</div>
        <div class="tp-stage-d">${esc(topicStageDesc(t, s))}</div>
      </div>
      <div class="tp-stage-x">+${TOPIC_STAGE_XP[s]} XP</div>
      ${open ? `<button data-stage="${s}">${done ? "Again" : "Start"}</button>`
             : `<button disabled>🔒</button>`}
    </div>`;
    if (open && !done && firstOpen) firstOpen = false;
    return html;
  }).join("");

  $app.innerHTML = `
    ${topicHead("🗣️ " + esc(t.title))}
    <p class="sub">${esc(t.place || "")} · <b>${esc(t.level)}</b> · ${esc(t.register || "")}</p>
    ${t.registerNote ? `<div class="card tp-note"><b>Register</b> — ${esc(t.registerNote)}</div>` : ""}
    <div class="tp-stages">${rows}</div>
    <h2>Phrases you will be able to say</h2>
    <div class="card">
      ${(t.phrases || []).slice(0, 8).map(ph => `
        <div class="tp-phrase">
          <div><b lang="fr">${esc(ph.fr)}</b><div class="muted small">${esc(ph.en)}</div></div>
          ${ph.note ? `<div class="tp-phrase-n">${esc(ph.note)}</div>` : ""}
        </div>`).join("")}
      <p class="small muted" style="margin-top:8px">All ${(t.phrases || []).length} enter your review schedule once you finish the vocabulary stage.</p>
    </div>`;

  document.querySelectorAll("[data-nav]").forEach(b => b.onclick = () => go(b.dataset.nav));
  document.querySelectorAll("[data-stage]").forEach(b => b.onclick = () => startTopicStage(key, b.dataset.stage));
}

function topicStageDesc(t, s) {
  if (s === "vocab") return `${(t.vocab || []).length} words of this scene, tested four ways.`;
  if (s === "dialogue") return `Read the ${(t.dialogue || []).length}-turn conversation. Hover or tap any word for its meaning.`;
  if (s === "exercises") return `${(t.exercises || []).length} exercises on what you have just met.`;
  if (s === "write") return `Spell ${writeSet(t).length} of this topic's words from their meaning — no options to pick from.`;
  return "You are one of the speakers. Type your lines — any correct phrasing counts.";
}

function startTopicStage(key, stage) {
  App.topicKey = key;
  if (stage === "dialogue") return go("dialogue");
  if (stage === "write") {
    App.wr = { i: 0, wrong: 0, tries: 0, shown: false };
    return go("write");
  }
  if (stage === "roleplay") {
    App.rp = { i: 0, tries: 0, wrong: 0, done: false, last: null };
    return go("roleplay");
  }
  const s = buildTopicSession(App.state, key, stage);
  if (!s || !s.items.length) { alert("Nothing to practise in this stage yet."); return; }
  App.state.seq = (App.state.seq || 0) + 1;
  App.topicStage = stage;
  App.chain = [];
  beginSession(s, "topic");
}

/* ---------- dialogue with hover glosses ---------- */
function glossHtml(turn) {
  const gloss = turn.gloss || {};
  let html = esc(turn.fr);
  // longest keys first, so "à titre exceptionnel" wins over "à"
  const keys = Object.keys(gloss).sort((a, b) => b.length - a.length);
  for (const k of keys) {
    const safe = esc(k);
    if (!html.includes(safe)) continue;
    html = html.replace(safe,
      `<span class="gl" tabindex="0" role="button" aria-label="${esc(k)} — ${esc(gloss[k])}"
        data-gl="${esc(gloss[k])}">${safe}</span>`);
  }
  return html;
}

function renderDialogueView() {
  const key = App.topicKey;
  const t = TOPICS[key];
  if (!t) return go("topics");

  $app.innerHTML = `
    ${topicHead("💬 " + esc(t.title), "topic")}
    <p class="sub">${esc(t.place || "")} · hover or tap any underlined word for its meaning.</p>
    <div class="card dialogue">
      ${(t.dialogue || []).map(turn => `
        <div class="dl-turn ${turn.who === "you" ? "me" : ""}">
          <div class="dl-who">${turn.who === "you" ? "You" : esc(t.otherName || "Them")}</div>
          <div class="dl-bubble">
            <div class="dl-fr" lang="fr">${glossHtml(turn)}</div>
            <div class="dl-en">${esc(turn.en || "")}</div>
          </div>
        </div>`).join("")}
    </div>
    <div style="margin-top:14px;display:flex;gap:8px;flex-wrap:wrap">
      <button class="primary" id="dl-done">✓ I have read it — continue</button>
      ${modelAvailable() ? `<button class="ghost" id="dl-play">🔊 Read it aloud</button>` : ""}
    </div>`;

  document.querySelectorAll("[data-nav]").forEach(b => b.onclick = () => go(b.dataset.nav));
  bindGlosses();
  document.getElementById("dl-done").onclick = () => { completeTopicStage(key, "dialogue"); go("topic"); };
  const play = document.getElementById("dl-play");
  if (play) play.onclick = () => speakDialogue(t);
}

function bindGlosses() {
  const tip = document.getElementById("tooltip");
  if (!tip) return;
  const show = el => {
    tip.textContent = el.dataset.gl;
    tip.hidden = false;
    const r = el.getBoundingClientRect();
    tip.style.left = Math.max(8, Math.min(window.innerWidth - tip.offsetWidth - 8, r.left)) + "px";
    tip.style.top = (window.scrollY + r.top - tip.offsetHeight - 8) + "px";
  };
  const hide = () => { tip.hidden = true; };
  document.querySelectorAll(".gl").forEach(el => {
    el.onmouseenter = () => show(el);
    el.onmouseleave = hide;
    el.onfocus = () => show(el);
    el.onblur = hide;
    el.onclick = e => { e.preventDefault(); tip.hidden ? show(el) : hide(); };
  });
}

function speakDialogue(t) {
  if (!modelAvailable()) return;
  window.speechSynthesis.cancel();
  (t.dialogue || []).forEach(turn => speakFrench(turn.fr, 0.9));
}

/* ---------- role-play ---------- */
function renderRoleplayView() {
  const st = App.state;
  const key = App.topicKey;
  const t = TOPICS[key];
  if (!t) return go("topics");
  const rp = App.rp || (App.rp = { i: 0, tries: 0, wrong: 0, done: false, last: null });

  const turns = t.dialogue || [];
  // everything up to the current point, so the conversation reads as a whole
  const upto = turns.slice(0, rp.i);
  const current = turns[rp.i];

  if (!current) {
    const pct = turns.filter(x => x.who === "you").length
      ? Math.round(100 * (1 - rp.wrong / Math.max(1, turns.filter(x => x.who === "you").length))) : 100;
    $app.innerHTML = `
      ${topicHead("🎭 " + esc(t.title), "topic")}
      <div class="card" style="text-align:center">
        <div style="font-size:2.4rem">🎉</div>
        <h2 style="margin:6px 0">Conversation complete</h2>
        <p class="muted">${pct}% of your lines first time.</p>
        <button class="primary" id="rp-finish">Collect ${TOPIC_STAGE_XP.roleplay} XP</button>
      </div>`;
    document.querySelectorAll("[data-nav]").forEach(b => b.onclick = () => go(b.dataset.nav));
    document.getElementById("rp-finish").onclick = () => {
      completeTopicStage(key, "roleplay", pct);
      confetti();
      go("topic");
    };
    return;
  }

  const transcript = upto.map(turn => `
    <div class="dl-turn ${turn.who === "you" ? "me" : ""}">
      <div class="dl-who">${turn.who === "you" ? "You" : esc(t.otherName || "Them")}</div>
      <div class="dl-bubble"><div class="dl-fr" lang="fr">${esc(turn.fr)}</div></div>
    </div>`).join("");

  const prompt = current.who === "you"
    ? `<div class="rp-ask">
         <div class="rp-en">Say: <b>${esc(current.en || "")}</b></div>
         <label class="visually-hidden" for="rp-input">Type your line in French</label>
         <input type="text" id="rp-input" lang="fr" autocomplete="off" autocapitalize="off"
                spellcheck="false" placeholder="type it in French…">
         <div class="rp-row">
           <button class="primary" id="rp-check">Check</button>
           <button class="ghost" id="rp-reveal">Show me</button>
         </div>
         <div id="rp-verdict"></div>
       </div>`
    : `<div class="rp-them">
         <div class="dl-fr" lang="fr">${esc(current.fr)}</div>
         <div class="dl-en">${esc(current.en || "")}</div>
         <button class="primary" id="rp-next">Continue →</button>
       </div>`;

  $app.innerHTML = `
    ${topicHead("🎭 " + esc(t.title), "topic")}
    <p class="sub">${esc(t.place || "")} · type your lines. Any correct phrasing counts.</p>
    <div class="card dialogue rp-scroll">${transcript || `<p class="muted">The conversation starts here.</p>`}</div>
    <div class="card rp-now">${prompt}</div>`;

  document.querySelectorAll("[data-nav]").forEach(b => b.onclick = () => go(b.dataset.nav));

  const next = document.getElementById("rp-next");
  if (next) next.onclick = () => { rp.i++; render(); };

  const input = document.getElementById("rp-input");
  if (input) {
    input.focus();
    const check = () => {
      const val = input.value;
      const ok = matchesAccepted(val, current.accept);
      const v = document.getElementById("rp-verdict");
      if (ok) {
        const others = (current.accept || []).filter(a => normFr(a) !== normFr(val));
        v.innerHTML = `<div class="rp-ok">✓ Correct.
          ${others.length ? `<div class="rp-alts">Also fine: ${others.map(a => `<span lang="fr">${esc(a)}</span>`).join(" · ")}</div>` : ""}
          </div>`;
        input.disabled = true;
        document.getElementById("rp-check").textContent = "Continue →";
        document.getElementById("rp-check").onclick = () => { rp.i++; rp.tries = 0; render(); };
      } else {
        rp.tries++;
        if (rp.tries === 1) rp.wrong++;
        const model = (current.accept || [current.fr])[0];
        const a = autopsy(val, model);
        v.innerHTML = `<div class="rp-no">
            <div class="rp-line"><span class="rp-lbl">You wrote</span>
              <span lang="fr">${a.yourMarks.map(m => `<span class="${m.ok ? "w-ok" : "w-bad"}">${esc(m.w)}</span>`).join(" ") || "<i>nothing</i>"}</span></div>
            ${rp.tries >= 2 ? `<div class="rp-line"><span class="rp-lbl">A native would say</span>
              <span lang="fr">${a.modelMarks.map(m => `<span class="${m.ok ? "w-ok" : "w-bad"}">${esc(m.w)}</span>`).join(" ")}</span></div>
              <div class="rp-hint">Red on your line is a word that is not in the answer; red on theirs is one you missed.</div>` : `<div class="rp-hint">Not quite — try once more.</div>`}
          </div>`;
        announce("Not correct.");
      }
    };
    document.getElementById("rp-check").onclick = check;
    input.onkeydown = e => { if (e.key === "Enter") { e.preventDefault(); check(); } };
    document.getElementById("rp-reveal").onclick = () => {
      const model = (current.accept || [current.fr])[0];
      rp.tries = 2; rp.wrong += rp.tries === 0 ? 1 : 0;
      document.getElementById("rp-verdict").innerHTML =
        `<div class="rp-no"><div class="rp-line"><span class="rp-lbl">Model answer</span>
          <span lang="fr">${esc(current.fr)}</span></div></div>`;
      input.value = model;
    };
  }
}

/* ---------- completion ---------- */
function completeTopicStage(key, stage, pct) {
  const st = App.state;
  const topics = ensureTopicState(st);
  const t = topics[key] || (topics[key] = { stages: {}, done: false, xp: 0, best: 0 });
  const firstTime = !t.stages[stage];
  t.stages[stage] = true;
  if (typeof pct === "number") t.best = Math.max(t.best || 0, pct);

  if (firstTime) {
    const gain = TOPIC_STAGE_XP[stage] || 0;
    t.xp = (t.xp || 0) + gain;
    awardXp(st, "french", gain);
  }
  if (stage === "vocab") seedPhraseCards(st, key);

  if (topicDone(st, key) && !t.done) {
    t.done = true;
    const slug = TOPICS[key] && TOPICS[key].slug;
    const g = ensureGame(st);
    const badge = "topic-" + slug;
    if (slug && !g.badges[badge]) g.badges[badge] = todayKey();
  }
  saveState(st);
  if (typeof syncSoon === "function") syncSoon();
}

/* Dashboard card — the fourth block, sitting under the daily three. */
function topicsHomeCard(st) {
  const all = topicsOverall(st);
  const level = App.topicLevel && topicLevels().includes(App.topicLevel)
    ? App.topicLevel : (topicLevels()[0] || "A2");
  const list = topicsAtLevel(level);
  const nextT = list.find(t => topicUnlocked(st, t.slug, level) && !topicDone(st, topicKey(t.slug, level)));
  const pct = all.total ? Math.round(100 * all.done / all.total) : 0;
  return `
    <div class="card mission topics-card" style="--mc:var(--c-french)">
      <div class="m-head">
        <span class="m-title">🗣️ Conversations</span>
        <span class="m-lvl" style="color:var(--c-french-text)">${esc(level)}</span>
      </div>
      <div class="m-desc">
        Ten real Brussels scenes — a shop, a brasserie, a landlord, an interview — each worked
        through until you can hold the conversation. ${nextT ? `Next up: <b>${esc(nextT.title)}</b>.` : "Every topic at this level is finished."}
      </div>
      <div class="m-track"><div class="f" style="width:${pct}%"></div></div>
      <div class="m-foot">
        <span>${all.done} / ${all.total} finished · ${all.xp} XP</span>
        <span>${TOPIC_STAGE_XP.vocab + TOPIC_STAGE_XP.dialogue + TOPIC_STAGE_XP.exercises + TOPIC_STAGE_XP.roleplay} XP per topic</span>
      </div>
      <button data-nav="topics">${all.xp ? "Continue" : "Open Conversations"}</button>
    </div>`;
}

/* ---------- "Write it" — production, not recognition ----------
   Multiple choice proves you can rule three things out; spelling the word from
   its meaning proves you could actually say it. Nouns are asked with their
   article, because in French the gender is part of the word — but leaving the
   article off is treated as a near miss and corrected, not marked wrong twice. */

function writeSet(t) {
  // words worth producing: skip multi-clause expressions, keep it to 14
  return (t.vocab || [])
    .filter(v => v.fr && v.fr.split(" ").length <= 4)
    .slice(0, 14);
}

function stripArticle(s) {
  return normFr(s).replace(/^(le|la|les|l'|un|une|des)\s*/, "").trim();
}

function gradeWritten(input, target) {
  const a = normFr(input), b = normFr(target);
  if (!a) return { verdict: "empty" };
  if (a === b) return { verdict: "correct" };
  if (stripArticle(a) === stripArticle(b) && stripArticle(b)) {
    return { verdict: "article", need: target };
  }
  // one wrong letter is a typo worth flagging rather than failing outright
  if (Math.abs(a.length - b.length) <= 1 && levenshtein(a, b) <= 1) {
    return { verdict: "typo", need: target };
  }
  return { verdict: "wrong", need: target };
}

function levenshtein(a, b) {
  const m = a.length, n = b.length;
  let prev = Array.from({ length: n + 1 }, (_, j) => j);
  for (let i = 1; i <= m; i++) {
    const cur = [i];
    for (let j = 1; j <= n; j++) {
      cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
    }
    prev = cur;
  }
  return prev[n];
}

function renderWriteView() {
  const key = App.topicKey;
  const t = TOPICS[key];
  if (!t) return go("topics");
  const wr = App.wr || (App.wr = { i: 0, wrong: 0, tries: 0, shown: false });
  const set = writeSet(t);
  const card = set[wr.i];

  if (!card) {
    const pct = set.length ? Math.round(100 * (1 - wr.wrong / set.length)) : 100;
    $app.innerHTML = `
      ${topicHead("✍️ " + esc(t.title), "topic")}
      <div class="card" style="text-align:center">
        <div style="font-size:2.4rem">✍️</div>
        <h2 style="margin:6px 0">Written from memory</h2>
        <p class="muted">${pct}% spelled right first time.</p>
        <button class="primary" id="wr-finish">Collect ${TOPIC_STAGE_XP.write} XP</button>
      </div>`;
    document.querySelectorAll("[data-nav]").forEach(b => b.onclick = () => go(b.dataset.nav));
    document.getElementById("wr-finish").onclick = () => {
      completeTopicStage(key, "write", pct);
      if (pct >= 80) confetti();
      go("topic");
    };
    return;
  }

  $app.innerHTML = `
    ${topicHead("✍️ " + esc(t.title), "topic")}
    <p class="sub">${esc(t.place || "")} · write the French. Accents are optional; the word is not.</p>
    <div class="card wr-card">
      <div class="wr-count">${wr.i + 1} of ${set.length}</div>
      <div class="wr-en">${esc(card.en)}</div>
      ${card.pos ? `<div class="wr-pos">${esc(card.pos)}${card.gender ? " · " + esc(card.gender) : ""}</div>` : ""}
      <label class="visually-hidden" for="wr-input">Type the French word</label>
      <input type="text" id="wr-input" lang="fr" autocomplete="off" autocapitalize="off"
             spellcheck="false" placeholder="en français…">
      <div class="rp-row">
        <button class="primary" id="wr-check">Check</button>
        <button class="ghost" id="wr-skip">Show me</button>
      </div>
      <div id="wr-verdict"></div>
    </div>`;

  document.querySelectorAll("[data-nav]").forEach(b => b.onclick = () => go(b.dataset.nav));
  const input = document.getElementById("wr-input");
  input.focus();

  const advance = () => { wr.i++; wr.tries = 0; wr.shown = false; render(); };
  const v = () => document.getElementById("wr-verdict");

  const check = () => {
    const g = gradeWritten(input.value, card.fr);
    if (g.verdict === "empty") return;
    if (g.verdict === "correct") {
      v().innerHTML = `<div class="rp-ok">✓ ${esc(card.fr)}${card.expl ? `<div class="rp-alts">${esc(card.expl)}</div>` : ""}</div>`;
      input.disabled = true;
      const b = document.getElementById("wr-check");
      b.textContent = "Next →"; b.onclick = advance;
      announce("Correct.");
      return;
    }
    wr.tries++;
    if (wr.tries === 1) wr.wrong++;
    if (g.verdict === "article") {
      v().innerHTML = `<div class="rp-no"><b>Almost — the article is part of the word.</b>
        <div class="rp-line"><span class="rp-lbl">Write</span><span lang="fr">${esc(card.fr)}</span></div>
        <div class="rp-hint">In French the gender travels with the noun; learning it without the article means learning half of it.</div></div>`;
    } else if (g.verdict === "typo") {
      v().innerHTML = `<div class="rp-no"><b>One letter out.</b>
        <div class="rp-line"><span class="rp-lbl">You wrote</span><span lang="fr">${esc(input.value)}</span></div>
        <div class="rp-hint">Try again — you have it.</div></div>`;
      input.select();
      return;
    } else {
      const a = autopsy(input.value, card.fr);
      v().innerHTML = `<div class="rp-no">
        <div class="rp-line"><span class="rp-lbl">You wrote</span>
          <span lang="fr">${a.yourMarks.map(m => `<span class="${m.ok ? "w-ok" : "w-bad"}">${esc(m.w)}</span>`).join(" ")}</span></div>
        ${wr.tries >= 2 ? `<div class="rp-line"><span class="rp-lbl">The word is</span><span lang="fr">${esc(card.fr)}</span></div>` : `<div class="rp-hint">Not it — one more try.</div>`}
      </div>`;
      if (wr.tries < 2) { input.select(); return; }
    }
    const b = document.getElementById("wr-check");
    b.textContent = "Next →"; b.onclick = advance;
    input.disabled = true;
  };

  document.getElementById("wr-check").onclick = check;
  input.onkeydown = e => { if (e.key === "Enter") { e.preventDefault(); document.getElementById("wr-check").click(); } };
  document.getElementById("wr-skip").onclick = () => {
    if (wr.tries === 0) wr.wrong++;
    wr.tries = 2;
    v().innerHTML = `<div class="rp-no"><div class="rp-line"><span class="rp-lbl">The word is</span>
      <span lang="fr">${esc(card.fr)}</span></div>${card.expl ? `<div class="rp-hint">${esc(card.expl)}</div>` : ""}</div>`;
    input.value = card.fr; input.disabled = true;
    const b = document.getElementById("wr-check");
    b.textContent = "Next →"; b.onclick = advance;
  };
}
