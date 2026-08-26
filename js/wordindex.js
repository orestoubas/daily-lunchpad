/* wordindex.js — the vocabulary index: every word in the deck with its real
   Leitner status, and the running "words I know" count over time.

   One entry point: renderWordIndex(). Everything else here is a helper.
   Reads FRENCH_VOCAB, the optional TOPICS banks, and state.srs; writes only
   state.wordHistory (see wiRecordToday for why that map has to exist). */
"use strict";

const WI_CHUNK = 100;                                   // rows revealed per "show more"
const WI_LEVEL_ORDER = ["A1", "A2", "B1", "B2", "C1", "C2"];

/* Ordinal scale — same light→dark ramp as svgBoxes, so the pills in the table
   and the box chart above it read as one system. */
const WI_STATUS = [
  { key: "new",      label: "new",      box: "no box yet", hint: "never reviewed" },
  { key: "learning", label: "learning", box: "box 1–2",    hint: "Leitner box 1–2" },
  { key: "familiar", label: "familiar", box: "box 3",      hint: "box 3" },
  { key: "known",    label: "known",    box: "box " + MASTERED_BOX, hint: "box " + MASTERED_BOX + " — counts as known" },
  { key: "mastered", label: "mastered", box: "box 5",      hint: "box 5" }
];
const WI_STATUS_MAP = Object.fromEntries(WI_STATUS.map(s => [s.key, s]));

/* Live view model, rebuilt by renderWordIndex and read by the filter handlers.
   Kept out of App so a stale deck can never outlive the view that built it. */
let WI = { deck: [], filtered: [], levels: [], poss: [], total: 0 };

/* ---------- deck ---------- */

/* Accent- and case-insensitive haystack: "reunion" should find « la réunion ». */
function wiNorm(s) {
  const t = String(s == null ? "" : s).toLowerCase();
  return t.normalize ? t.normalize("NFD").replace(/[\u0300-\u036f]/g, "") : t;
}

const WI_ADVERBS = new Set([
  "tôt", "tard", "demain", "hier", "aujourd'hui", "souvent", "toujours", "jamais",
  "ensemble", "bientôt", "déjà", "encore", "vite", "beaucoup", "peu", "très",
  "ainsi", "pourtant", "cependant", "néanmoins", "désormais", "notamment",
  "surtout", "davantage", "actuellement", "d'ailleurs", "auparavant", "aussitôt"
]);
const WI_CONJ = new Set(["alors que", "tandis que", "dès lors que", "étant donné que",
  "dans la mesure où", "quant à", "bien que", "afin que", "parce que"]);
const WI_PREP = new Set(["malgré", "parmi", "selon", "depuis", "pendant", "chez",
  "envers", "sauf", "dès", "vers", "contre", "sans", "sous", "entre"]);
const WI_VERB_END = /(er|ir|re|oir|aître|indre)$/;
const WI_ADJ_END = /(eux|euse|ive|if|able|ible|ile|elle|el|ale|al|ique|ant|ante|ent|ente)$/;

/* The newer banks declare `pos` (french-expansion-spec §4). The original
   500-card deck does not, so it is inferred from the shape of the French:
   an article means a noun, an infinitive ending a verb, several words an
   expression. Good enough to filter by, not good enough to teach from —
   the legend under the table says so. */
function wiPos(card) {
  if (card.pos) return card.pos;
  const fr = String(card.fr || "").trim().toLowerCase();
  if (!fr) return "other";
  if (/^(le |la |l'|les |un |une |des |du |de la )/.test(fr)) return "noun";
  if (/^(se |s')/.test(fr)) return "verb";
  if (/\(e\)|\s\/\s/.test(fr)) return "adj";
  if (WI_ADVERBS.has(fr)) return "adv";
  if (WI_PREP.has(fr)) return "prep";
  if (WI_CONJ.has(fr)) return "conj";
  const head = fr.split(/\s+/)[0];
  if (WI_VERB_END.test(head) && !WI_ADJ_END.test(head)) return "verb";
  if (fr.includes(" ")) return "expr";
  if (WI_ADJ_END.test(fr)) return "adj";
  return "other";
}

/* Every word the learner could meet: the core deck plus, when the topic banks
   are loaded, their per-topic vocabulary. Ids are unique app-wide, so the
   first occurrence wins and a word shared by two topics is counted once. */
function wiBuildDeck() {
  const seen = new Set();
  const out = [];
  const push = (c, source) => {
    if (!c || !c.id || seen.has(c.id)) return;
    seen.add(c.id);
    out.push({
      id: c.id,
      fr: c.fr || "",
      en: c.en || "",
      level: c.level || "—",
      pos: wiPos(c),
      source: source,
      hay: wiNorm((c.fr || "") + " " + (c.en || ""))
    });
  };
  if (typeof FRENCH_VOCAB !== "undefined") FRENCH_VOCAB.forEach(c => push(c, ""));
  if (typeof TOPICS !== "undefined" && TOPICS) {
    Object.keys(TOPICS).forEach(k => {
      const t = TOPICS[k];
      if (!t || !Array.isArray(t.vocab)) return;
      t.vocab.forEach(c => push(Object.assign({ level: t.level }, c), t.title || t.slug || k));
    });
  }
  return out;
}

/* ---------- status ---------- */

/* box 0 only ever exists for the instant between creating an srs entry and
   grading it, so it is treated as untouched rather than as a sixth state. */
function wiStatusOf(state, id) {
  const e = state.srs[id];
  if (!e || !e.box || e.box <= 0) return "new";
  if (e.box >= 5) return "mastered";
  if (e.box >= MASTERED_BOX) return "known";
  if (e.box === 3) return "familiar";
  return "learning";
}

function wiIsKnown(status) { return status === "known" || status === "mastered"; }

/* ---------- the running count ---------- */

/* state.srs keeps only each card's CURRENT box — nothing anywhere records what
   the box was on a past day, so a truthful "words known over time" series
   cannot be reconstructed from existing state. It is therefore recorded going
   forward: the first render of the index each day snapshots the count into
   state.wordHistory (dateKey -> count). The chart is honest from the first day
   the index is opened onwards, and empty before it. */
function wiRecordToday(state, known) {
  state.wordHistory = state.wordHistory || {};
  const k = todayKey();
  if (state.wordHistory[k] === known) return;
  state.wordHistory[k] = known;
  saveState(state);
}

function wiHistorySeries(state, total, days) {
  const h = state.wordHistory || {};
  return Object.keys(h).sort().slice(-days).map(k => ({
    label: `${k} · ${h[k]} words`,
    y: pct(h[k], total)
  }));
}

/* ---------- rendering ---------- */

function wiAnnounce(msg) {
  const el = document.getElementById("sr-live");
  if (el) el.textContent = msg;
}

function wiSelect(id, label, options, value) {
  return `<div class="wi-field">
    <label for="${id}">${esc(label)}</label>
    <select id="${id}">${options.map(o =>
      `<option value="${esc(o.value)}"${o.value === value ? " selected" : ""}>${esc(o.text)}</option>`
    ).join("")}</select>
  </div>`;
}

function wiCanSpeak() {
  return typeof speakFrench === "function" && typeof window !== "undefined" && "speechSynthesis" in window;
}

function wiRowHtml(d, speak) {
  const s = WI_STATUS_MAP[d.st];
  return `<tr>
    <td class="wi-fr"><span class="wi-word">${esc(d.fr)}</span>${
      d.source ? `<span class="wi-src">${esc(d.source)}</span>` : ""}${
      speak ? `<button class="wi-say" data-say="${esc(d.fr)}" aria-label="Say ${esc(d.fr)} aloud">🔊</button>` : ""}</td>
    <td class="wi-en">${esc(d.en)}</td>
    <td class="wi-lv">${esc(d.level)}</td>
    <td class="wi-pos">${esc(d.pos)}</td>
    <td class="wi-stcell"><span class="wi-pill wi-${esc(d.st)}">${esc(s.label)}</span></td>
  </tr>`;
}

function wiFilter() {
  const ui = App.wi;
  const q = wiNorm(ui.q).trim();
  return WI.deck.filter(d =>
    (ui.level === "all" || d.level === ui.level) &&
    (ui.pos === "all" || d.pos === ui.pos) &&
    (ui.status === "all" ||
      (ui.status === "known+" ? wiIsKnown(d.st) : d.st === ui.status)) &&
    (!q || d.hay.includes(q)));
}

/* Filters never re-render the page: only the tbody, the count line and the
   "show more" button change, so the search box keeps focus and its caret. */
function wiUpdate(announce) {
  const ui = App.wi;
  WI.filtered = wiFilter();
  const n = WI.filtered.length;
  const known = WI.filtered.filter(d => wiIsKnown(d.st)).length;

  const count = document.getElementById("wi-count");
  if (count) {
    count.innerHTML = n === 0
      ? `No words match this filter.`
      : `<b>${n}</b> word${n === 1 ? "" : "s"} ${n === 1 ? "matches" : "match"} · <b>${known}</b> of them known
         <span class="muted">(${pct(known, n)}%)</span>`;
  }
  wiPaint();
  if (announce !== false) {
    wiAnnounce(n === 0
      ? "No words match the current filter."
      : `${n} words match, ${known} of them known.`);
  }
}

/* Draws at most ui.limit rows; the rest wait behind "show more" so a
   thousand-row deck never blocks the main thread. */
function wiPaint() {
  const ui = App.wi;
  const body = document.getElementById("wi-body");
  const more = document.getElementById("wi-more");
  if (!body) return;
  const speak = wiCanSpeak();
  const shown = Math.min(ui.limit, WI.filtered.length);
  let html = "";
  for (let i = 0; i < shown; i++) html += wiRowHtml(WI.filtered[i], speak);
  body.innerHTML = html || `<tr><td colspan="5" class="wi-empty muted">Nothing matches — try a shorter search, or reset the filters.</td></tr>`;
  if (more) {
    const rest = WI.filtered.length - shown;
    more.hidden = rest <= 0;
    more.textContent = rest > 0 ? `Show ${Math.min(WI_CHUNK, rest)} more (${rest} left)` : "";
  }
  const showing = document.getElementById("wi-showing");
  if (showing) showing.textContent = WI.filtered.length
    ? `Showing ${shown} of ${WI.filtered.length}.` : "";
}

function wiShowMore() {
  const ui = App.wi;
  const body = document.getElementById("wi-body");
  if (!body) return;
  const from = Math.min(ui.limit, WI.filtered.length);
  ui.limit += WI_CHUNK;
  const to = Math.min(ui.limit, WI.filtered.length);
  const speak = wiCanSpeak();
  let html = "";
  for (let i = from; i < to; i++) html += wiRowHtml(WI.filtered[i], speak);
  body.insertAdjacentHTML("beforeend", html);   // append, never re-draw what is already there
  const more = document.getElementById("wi-more");
  const rest = WI.filtered.length - to;
  if (more) {
    more.hidden = rest <= 0;
    more.textContent = rest > 0 ? `Show ${Math.min(WI_CHUNK, rest)} more (${rest} left)` : "";
    if (rest <= 0) { const t = document.getElementById("wi-table"); if (t) t.focus(); }
  }
  const showing = document.getElementById("wi-showing");
  if (showing) showing.textContent = `Showing ${to} of ${WI.filtered.length}.`;
  wiAnnounce(`Showing ${to} of ${WI.filtered.length} words.`);
}

function renderWordIndex() {
  const st = App.state;
  const ui = App.wi = Object.assign(
    { q: "", level: "all", pos: "all", status: "all", limit: WI_CHUNK }, App.wi);
  ui.limit = WI_CHUNK;                                  // every visit starts light

  const deck = wiBuildDeck();
  deck.forEach(d => { d.st = wiStatusOf(st, d.id); });
  WI.deck = deck;
  WI.total = deck.length;

  const known = deck.filter(d => wiIsKnown(d.st)).length;
  const started = deck.filter(d => d.st !== "new").length;
  const learning = deck.filter(d => d.st === "learning" || d.st === "familiar").length;
  wiRecordToday(st, known);

  const byStatus = {};
  WI_STATUS.forEach(s => { byStatus[s.key] = 0; });
  deck.forEach(d => { byStatus[d.st]++; });

  WI.levels = WI_LEVEL_ORDER.filter(lv => deck.some(d => d.level === lv))
    .concat(Array.from(new Set(deck.map(d => d.level))).filter(lv => !WI_LEVEL_ORDER.includes(lv)).sort());
  WI.poss = Array.from(new Set(deck.map(d => d.pos))).sort();

  /* per-level breakdown — the same helper the stats page uses */
  const levelBars = WI.levels.map(lv => {
    const inLv = deck.filter(d => d.level === lv);
    const k = inLv.filter(d => wiIsKnown(d.st)).length;
    return { label: `${lv} (${k}/${inLv.length})`, pct: pct(k, inLv.length), n: inLv.filter(d => d.st !== "new").length };
  });

  const boxes = [0, 0, 0, 0, 0];
  deck.forEach(d => { const e = st.srs[d.id]; if (e && e.box > 0) boxes[Math.min(4, e.box - 1)]++; });

  const series = wiHistorySeries(st, deck.length, 60);
  const first = series.length ? series[0] : null;

  const levelOpts = [{ value: "all", text: "All levels" }]
    .concat(WI.levels.map(lv => ({ value: lv, text: lv })));
  const posOpts = [{ value: "all", text: "All parts of speech" }]
    .concat(WI.poss.map(p => ({ value: p, text: p })));
  const statusOpts = [{ value: "all", text: "Any status" }, { value: "known+", text: "known or mastered" }]
    .concat(WI_STATUS.map(s => ({ value: s.key, text: s.label + " — " + s.hint })));

  $app.innerHTML = `
    <div class="pagehead">
      <h1>🗂️ Word index</h1>
      <div class="nav">
        <button class="ghost" data-nav="library">📖 Library</button>
        <button class="ghost" data-nav="home">← Dashboard</button>
      </div>
    </div>
    <p class="sub">Every word in the deck, what the spaced-repetition engine currently thinks of it,
      and how many of them you actually know.</p>

    <div class="herorow">
      <div class="herotile"><div class="ht-ic">🧠</div><div>
        <div class="ht-v" style="color:var(--c-french-text)">${known}</div>
        <div class="ht-l">words known (box ${MASTERED_BOX}+)</div></div></div>
      <div class="herotile"><div class="ht-ic">📚</div><div>
        <div class="ht-v">${deck.length}</div><div class="ht-l">words in the deck</div></div></div>
      <div class="herotile"><div class="ht-ic">📈</div><div>
        <div class="ht-v">${pct(known, deck.length)}%</div><div class="ht-l">of the deck known</div></div></div>
      <div class="herotile"><div class="ht-ic">🔁</div><div>
        <div class="ht-v">${learning}</div><div class="ht-l">in progress</div></div></div>
    </div>

    <h2>Words I know, over time</h2>
    <div class="chart-grid">
      <div class="card chart-card"><h3 style="color:var(--c-french-text)">Growth</h3>
        ${svgLineChart(series, "var(--c-french)", null)}
        <div class="legendline">${series.length > 1
          ? `From ${esc(first.label)} to ${esc(series[series.length - 1].label)}. The line is the share of the whole ${deck.length}-word deck at box ${MASTERED_BOX} or better.`
          : `Recorded from today onwards — the engine stores each card's current box, not its history, so there is no earlier series to draw. Come back tomorrow for a second point.`}</div>
      </div>
      <div class="card chart-card"><h3>Known by level</h3>
        ${levelBars.length ? svgBarsH(levelBars, "var(--c-french)", 80) : `<p class="muted">No words loaded.</p>`}
        <div class="legendline">Bar = share of that level known; the tooltip count is how many of its words you have started.</div>
      </div>
      <div class="card chart-card"><h3>Leitner boxes</h3>
        ${svgBoxes(boxes)}
        <div class="legendline">Reviewed words only — the ${deck.length - started} never-reviewed words are not in any box. Box ${MASTERED_BOX}+ counts as known.</div>
      </div>
      <div class="card chart-card"><h3>Where the deck sits</h3>
        <div class="goals">${WI_STATUS.map((s, i) => meterRow(
          s.label,
          ["var(--baseline)", "var(--seq-100)", "var(--seq-250)", "var(--seq-400)", "var(--seq-550)"][i],
          pct(byStatus[s.key], deck.length), 100,
          `${byStatus[s.key]}`)).join("")}</div>
        <div class="legendline">Every word is in exactly one of these five states:
          ${WI_STATUS.map(s => `${esc(s.label)} = ${esc(s.box)}`).join(", ")}.</div>
      </div>
    </div>

    <h2>Every word</h2>
    <div class="card wi-panel">
      <div class="wi-controls">
        <div class="wi-field wi-search">
          <label for="wi-search">Search French or English</label>
          <input type="search" id="wi-search" value="${esc(ui.q)}" placeholder="e.g. réunion, meeting, en retard…"
            autocomplete="off" spellcheck="false">
        </div>
        ${wiSelect("wi-level", "Level", levelOpts, ui.level)}
        ${wiSelect("wi-pos", "Part of speech", posOpts, ui.pos)}
        ${wiSelect("wi-status", "Status", statusOpts, ui.status)}
        <div class="wi-field wi-reset"><button id="wi-clear" type="button">Reset filters</button></div>
      </div>
      <p class="wi-count" id="wi-count"></p>
      <p class="wi-swipe small muted">Swipe the table sideways for level, part of speech and status.</p>
      <div class="wi-tablewrap" id="wi-table" tabindex="0" role="region" aria-label="Vocabulary table, scrolls sideways on a narrow screen">
        <table class="wi-table">
          <caption class="visually-hidden">Every word in the deck with its level, part of speech and learning status</caption>
          <thead><tr>
            <th scope="col">French</th><th scope="col">English</th>
            <th scope="col">Level</th><th scope="col">Part of speech</th><th scope="col">Status</th>
          </tr></thead>
          <tbody id="wi-body"></tbody>
        </table>
      </div>
      <div class="wi-foot">
        <span class="small muted" id="wi-showing"></span>
        <button id="wi-more" type="button" hidden></button>
      </div>
      <p class="small muted wi-legend">Status comes straight from the Leitner box in your own progress:
        ${WI_STATUS.map(s => `<b>${esc(s.label)}</b> ${esc(s.hint)}`).join(" · ")}.
        Part of speech is taken from the bank where it declares one and inferred from the shape of the
        French word where it does not, so treat that filter as a rough cut.</p>
    </div>
  `;

  document.querySelectorAll("[data-nav]").forEach(b => b.onclick = () => go(b.dataset.nav));

  const si = document.getElementById("wi-search");
  si.oninput = e => {
    App.wi.q = e.target.value;
    clearTimeout(App.wiTimer);
    App.wiTimer = setTimeout(() => { App.wi.limit = WI_CHUNK; wiUpdate(); }, 200);
  };
  [["wi-level", "level"], ["wi-pos", "pos"], ["wi-status", "status"]].forEach(([id, key]) => {
    document.getElementById(id).onchange = e => {
      App.wi[key] = e.target.value;
      App.wi.limit = WI_CHUNK;
      wiUpdate();
    };
  });
  document.getElementById("wi-clear").onclick = () => {
    Object.assign(App.wi, { q: "", level: "all", pos: "all", status: "all", limit: WI_CHUNK });
    ["wi-level", "wi-pos", "wi-status"].forEach(id => { document.getElementById(id).value = "all"; });
    si.value = "";
    wiUpdate();
    si.focus();
  };
  document.getElementById("wi-more").onclick = wiShowMore;

  // delegated so rows appended by "show more" work without rebinding
  document.getElementById("wi-body").addEventListener("click", e => {
    const b = e.target.closest("[data-say]");
    if (b && typeof speakFrench === "function") speakFrench(b.getAttribute("data-say"));
  });

  wiUpdate(false);
  bindChartTooltips($app);
}
