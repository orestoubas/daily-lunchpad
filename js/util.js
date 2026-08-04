/* util.js — dates, seeded RNG, storage */
"use strict";

const LS_KEY = "launchpad.v1";

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
    settings: { newPerDay: 10, minutesPerBlock: 10, weekendCounts: false, retireStreak: 3 }
  };
}

function loadState() {
  try {
    const raw = localStorage.getItem(LS_KEY);
    if (!raw) return defaultState();
    const st = JSON.parse(raw);
    return Object.assign(defaultState(), st, {
      settings: Object.assign(defaultState().settings, st.settings || {})
    });
  } catch (e) {
    console.warn("state load failed, starting fresh", e);
    return defaultState();
  }
}

function saveState(st) {
  localStorage.setItem(LS_KEY, JSON.stringify(st));
}

function exportState(st) {
  const blob = new Blob([JSON.stringify(st, null, 2)], { type: "application/json" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = `launchpad-backup-${todayKey()}.json`;
  a.click();
  URL.revokeObjectURL(a.href);
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
