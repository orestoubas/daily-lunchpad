/* util.js — dates, seeded RNG, storage */
"use strict";

const LS_KEY = "launchpad.v1";
const APP_VERSION = "1.0.0";

function todayKey(d) {
  const dt = d || new Date();
  const y = dt.getFullYear();
  const m = String(dt.getMonth() + 1).padStart(2, "0");
  const day = String(dt.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

function keyToDate(key) {
  const [y, m, d] = key.split("-").map(Number);
  return new Date(y, m - 1, d);
}

function addDays(key, n) {
  const d = keyToDate(key);
  d.setDate(d.getDate() + n);
  return todayKey(d);
}

function isWeekend(key) {
  const wd = keyToDate(key).getDay();
  return wd === 0 || wd === 6;
}

/* Deterministic RNG so the same day yields the same question order in any browser */
function hashStr(s) {
  let h = 2166136261 >>> 0;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function mulberry32(seed) {
  let a = seed >>> 0;
  return function () {
    a |= 0; a = (a + 0x6D2B79F5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function seededShuffle(arr, rng) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function dailyRng(salt, seq) {
  return mulberry32(hashStr(todayKey() + "|" + salt + "|" + (seq || 0)));
}

function fmtClock(totalSec) {
  const m = Math.floor(totalSec / 60);
  const s = totalSec % 60;
  return `${m}:${String(s).padStart(2, "0")}`;
}

function pct(n, d) { return d > 0 ? Math.round((100 * n) / d) : 0; }

function esc(s) {
  return String(s).replace(/[&<>"']/g, c => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  }[c]));
}

/* ---------- persistent state ---------- */

function defaultState() {
  return {
    version: 1,
    srs: {},          // cardId -> {box, due, seen, right, wrong}
    pool: {},         // bankName -> {remaining:[ids], wrong:[ids]}
    qstats: {},       // questionId -> {right, wrong, streak} (consecutive-correct streak)
    seq: 0,           // session counter — reshuffles every practice run
    sessions: [],     // {date, module, correct, total, pct, seconds, sub:{...}, topics:{}}
    days: {},         // dateKey -> {french:bool, eu:bool, reasoning:bool}
    newCards: {},     // dateKey -> count of new vocab introduced that day
    settings: { newPerDay: 10, minutesPerBlock: 10, weekendCounts: false, retireStreak: 3, adaptive: true }
  };
}

function loadState() {
  try {
    const raw = localStorage.getItem(LS_KEY);
    if (!raw) return defaultState();
    const st = JSON.parse(raw);
    return migrateState(Object.assign(defaultState(), st, {
      settings: Object.assign(defaultState().settings, st.settings || {})
    }));
  } catch (e) {
    console.warn("state load failed, starting fresh", e);
    return defaultState();
  }
}

let saveFailed = false;

function saveState(st) {
  try {
    localStorage.setItem(LS_KEY, JSON.stringify(st));
    if (saveFailed) { saveFailed = false; hideSaveWarning(); }
  } catch (e) {
    // Almost always QuotaExceededError. Shed the least valuable data and retry
    // rather than silently losing the user's progress.
    console.warn("save failed, trimming state", e);
    try {
      if (st.sessions && st.sessions.length > 400) st.sessions = st.sessions.slice(-400);
      if (st.game && st.game.writing && st.game.writing.drafts) {
        const keys = Object.keys(st.game.writing.drafts);
        if (keys.length > 15) keys.slice(0, keys.length - 15).forEach(k => delete st.game.writing.drafts[k]);
      }
      localStorage.setItem(LS_KEY, JSON.stringify(st));
      if (saveFailed) { saveFailed = false; hideSaveWarning(); }
    } catch (e2) {
      saveFailed = true;
      showSaveWarning();
    }
  }
}

/* Visible, non-dismissable warning: silent data loss is the worst outcome. */
function showSaveWarning() {
  if (document.getElementById("save-warning")) return;
  const d = document.createElement("div");
  d.id = "save-warning";
  d.className = "save-warning";
  d.innerHTML = `<b>⚠️ Progress cannot be saved</b>
    <span>This browser's storage is full or blocked. Export a backup now, then free up space.</span>
    <button id="save-warning-export">⬇ Export backup</button>`;
  document.body.appendChild(d);
  const b = document.getElementById("save-warning-export");
  if (b) b.onclick = () => { try { exportState(App.state); } catch (e) { alert("Export failed: " + e.message); } };
}
function hideSaveWarning() {
  const d = document.getElementById("save-warning");
  if (d) d.remove();
}

/* Forward-compatible migrations: old backups keep working. */
function migrateState(st) {
  st.version = st.version || 1;
  st.qstats = st.qstats || {};
  st.pool = st.pool || {};
  st.srs = st.srs || {};
  st.days = st.days || {};
  st.newCards = st.newCards || {};
  st.sessions = Array.isArray(st.sessions) ? st.sessions : [];
  if (st.settings && st.settings.adaptive === undefined) st.settings.adaptive = true;
  if (st.version < 2) st.version = 2;
  return st;
}

function exportState(st) {
  const name = `launchpad-backup-${todayKey()}.json`;
  const json = JSON.stringify(st, null, 2);
  const blob = new Blob([json], { type: "application/json" });

  // On a phone the share sheet lets you drop the file straight into Drive,
  // Files or a chat. Fall back to a plain download everywhere else.
  if (navigator.canShare && typeof File !== "undefined") {
    try {
      const file = new File([blob], name, { type: "application/json" });
      if (navigator.canShare({ files: [file] })) {
        navigator.share({ files: [file], title: "Morning Launchpad backup" })
          .catch(() => downloadBlob(blob, name));
        return;
      }
    } catch (e) { /* fall through to download */ }
  }
  downloadBlob(blob, name);
}

function downloadBlob(blob, name) {
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = name;
  a.click();
  setTimeout(() => URL.revokeObjectURL(a.href), 1000);
}

function importStateFile(file, cb) {
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const st = JSON.parse(reader.result);
      if (!st || typeof st !== "object" || !("sessions" in st)) throw new Error("not a launchpad backup");
      cb(null, Object.assign(defaultState(), st));
    } catch (e) { cb(e); }
  };
  reader.readAsText(file);
}
