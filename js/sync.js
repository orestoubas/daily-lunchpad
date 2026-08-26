/* sync.js — keep progress in a GitHub repo so it survives a cleared browser
   and follows you between laptop and phone.

   The whole state is one JSON file in a repo you own. On every sync we pull
   that file, merge it with what is in this browser, and push the result back.
   Merging (rather than newest-wins) matters because the same day can be
   practised on two devices, and a laptop that has been offline for a week must
   not erase the phone's history when it comes back.

   The token lives in its own localStorage key, never inside the state blob, so
   exporting a backup can never leak it. */

"use strict";

const SYNC_TOKEN_KEY = "launchpad.sync.token";
const SYNC_API = "https://api.github.com";

function syncCfg(state) {
  const s = state.settings;
  if (!s.sync) s.sync = { enabled: false, repo: "", path: "launchpad-state.json", branch: "main" };
  if (!s.sync.path) s.sync.path = "launchpad-state.json";
  if (!s.sync.branch) s.sync.branch = "main";
  return s.sync;
}

function syncToken() {
  try { return localStorage.getItem(SYNC_TOKEN_KEY) || ""; } catch (e) { return ""; }
}
function setSyncToken(t) {
  try { t ? localStorage.setItem(SYNC_TOKEN_KEY, t) : localStorage.removeItem(SYNC_TOKEN_KEY); }
  catch (e) { /* private mode — sync simply stays off */ }
}
function syncReady(state) {
  const c = syncCfg(state);
  return !!(c.enabled && c.repo && /^[^/]+\/[^/]+$/.test(c.repo) && syncToken());
}

/* ---------- base64 that survives accents and emoji ---------- */
function b64encode(str) {
  const bytes = new TextEncoder().encode(str);
  let bin = "";
  for (let i = 0; i < bytes.length; i += 0x8000) {
    bin += String.fromCharCode.apply(null, bytes.subarray(i, i + 0x8000));
  }
  return btoa(bin);
}
function b64decode(b64) {
  const bin = atob(b64.replace(/\s/g, ""));
  const bytes = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
  return new TextDecoder().decode(bytes);
}

/* ---------- GitHub contents API ---------- */
async function ghFetch(url, opts) {
  const res = await fetch(url, Object.assign({}, opts, {
    headers: Object.assign({
      "Accept": "application/vnd.github+json",
      "Authorization": "Bearer " + syncToken(),
      "X-GitHub-Api-Version": "2022-11-28"
    }, (opts && opts.headers) || {})
  }));
  return res;
}

function contentsUrl(cfg) {
  return `${SYNC_API}/repos/${cfg.repo}/contents/${encodeURIComponent(cfg.path).replace(/%2F/g, "/")}`;
}

/* Returns {state, sha} — or {state:null, sha:null} when the file is not there
   yet, which is the normal first-run case. Throws with a readable message on
   anything the user can act on (bad token, wrong repo, no write access). */
async function syncPull(cfg) {
  const res = await ghFetch(`${contentsUrl(cfg)}?ref=${encodeURIComponent(cfg.branch)}`);
  if (res.status === 404) return { state: null, sha: null };
  if (res.status === 401) throw new Error("GitHub rejected the token (401). Check it has not expired.");
  if (res.status === 403) throw new Error("GitHub denied access (403). The token needs Contents read and write on this repo.");
  if (!res.ok) throw new Error(`GitHub returned ${res.status} reading the file.`);
  const j = await res.json();
  let parsed = null;
  try { parsed = JSON.parse(b64decode(j.content || "")); }
  catch (e) { throw new Error("The file in the repo is not valid JSON — fix or delete it."); }
  return { state: parsed, sha: j.sha };
}

async function syncPush(cfg, state, sha) {
  const body = {
    message: `progress ${todayKey()} · ${state.sessions.length} sessions · ${(state.game && state.game.totalXp) || 0} XP`,
    content: b64encode(JSON.stringify(state)),
    branch: cfg.branch
  };
  if (sha) body.sha = sha;
  const res = await ghFetch(contentsUrl(cfg), { method: "PUT", body: JSON.stringify(body) });
  if (res.status === 409 || res.status === 422) throw new Error("The file changed on GitHub while syncing — try again.");
  if (res.status === 401) throw new Error("GitHub rejected the token (401). Check it has not expired.");
  if (res.status === 403) throw new Error("GitHub denied the write (403). The token needs Contents write on this repo.");
  if (!res.ok) throw new Error(`GitHub returned ${res.status} saving the file.`);
  const j = await res.json();
  return j.content && j.content.sha;
}

/* ---------- merge ----------
   Every rule below is idempotent: merging the same two states twice gives the
   same answer, so a sync loop can never inflate a number. That is why daily XP
   takes the maximum rather than the sum. */

const maxNum = (a, b) => Math.max(a || 0, b || 0);

function mergeMapMax(a, b) {
  const out = Object.assign({}, a || {});
  for (const [k, v] of Object.entries(b || {})) out[k] = maxNum(out[k], v);
  return out;
}

function mergeDays(a, b) {
  const out = {};
  for (const k of new Set([...Object.keys(a || {}), ...Object.keys(b || {})])) {
    out[k] = Object.assign({}, (a || {})[k], (b || {})[k]);
    for (const mod of Object.keys(out[k])) {
      out[k][mod] = !!(((a || {})[k] || {})[mod] || ((b || {})[k] || {})[mod]);
    }
  }
  return out;
}

function mergeSrs(a, b) {
  const out = Object.assign({}, a || {});
  for (const [id, rb] of Object.entries(b || {})) {
    const ra = out[id];
    if (!ra) { out[id] = rb; continue; }
    // the further-along card wins the schedule; counters take the higher total
    const winner = (rb.box || 0) > (ra.box || 0) ? rb : ra;
    out[id] = Object.assign({}, winner, {
      right: maxNum(ra.right, rb.right),
      wrong: maxNum(ra.wrong, rb.wrong)
    });
  }
  return out;
}

function mergeQstats(a, b) {
  const out = Object.assign({}, a || {});
  for (const [id, qb] of Object.entries(b || {})) {
    const qa = out[id];
    out[id] = qa ? {
      right: maxNum(qa.right, qb.right),
      wrong: maxNum(qa.wrong, qb.wrong),
      streak: maxNum(qa.streak, qb.streak)
    } : qb;
  }
  return out;
}

/* Sessions and mocks carry an id from the device that recorded them; anything
   written before ids existed falls back to a content key. */
function sessionKey(s) {
  return s.id || `${s.date}|${s.module}|${s.correct}|${s.total}|${s.seconds}`;
}
function mockKey(m) {
  return m.id || `${m.date}|${m.examId}|${m.correct}|${m.total}|${m.seconds}`;
}
function mergeList(a, b, keyOf, cap) {
  const seen = new Map();
  for (const x of (a || []).concat(b || [])) if (x) seen.set(keyOf(x), x);
  // sort by date then key so the result does not depend on which side merged
  // first — otherwise two devices would keep rewriting the file to reorder it
  const out = [...seen.values()].sort((x, y) =>
    String(x.date).localeCompare(String(y.date)) || keyOf(x).localeCompare(keyOf(y)));
  return cap && out.length > cap ? out.slice(-cap) : out;
}

function mergeGame(a, b, bNewer) {
  const ga = a || {}, gb = b || {};
  const newer = bNewer ? gb : ga;
  return Object.assign({}, ga, gb, {
    xp: mergeMapMax(ga.xp, gb.xp),
    totalXp: maxNum(ga.totalXp, gb.totalXp),
    dailyXp: mergeMapMax(ga.dailyXp, gb.dailyXp),
    bests: mergeMapMax(ga.bests, gb.bests),
    freezes: maxNum(ga.freezes, gb.freezes),
    freezeUsed: Object.assign({}, ga.freezeUsed, gb.freezeUsed),
    badges: Object.assign({}, gb.badges, ga.badges),   // keep the earliest award
    weeklyChallenge: Object.assign({}, ga.weeklyChallenge, gb.weeklyChallenge),
    mocks: mergeList(ga.mocks, gb.mocks, mockKey, 60),
    writing: {
      drafts: Object.assign({}, (ga.writing || {}).drafts, (gb.writing || {}).drafts)
    },
    quests: newer.quests || ga.quests || gb.quests,
    exams: newer.exams || ga.exams || gb.exams,
    dailyGoal: newer.dailyGoal || ga.dailyGoal || gb.dailyGoal
  });
}

/* `local` always keeps this device's identity and token-free settings. */
function mergeStates(local, remote) {
  if (!remote) return local;
  const bNewer = String(remote.updatedAt || "") > String(local.updatedAt || "");
  return Object.assign({}, local, {
    version: maxNum(local.version, remote.version),
    seq: maxNum(local.seq, remote.seq),
    sessionCounter: maxNum(local.sessionCounter, remote.sessionCounter),
    srs: mergeSrs(local.srs, remote.srs),
    qstats: mergeQstats(local.qstats, remote.qstats),
    sessions: mergeList(local.sessions, remote.sessions, sessionKey, 800),
    days: mergeDays(local.days, remote.days),
    newCards: mergeMapMax(local.newCards, remote.newCards),
    pool: bNewer ? (remote.pool || local.pool) : local.pool,
    settings: Object.assign({}, bNewer ? remote.settings : local.settings, {
      sync: local.settings.sync            // sync config stays per-device
    }),
    game: mergeGame(local.game, remote.game, bNewer),
    deviceId: local.deviceId
  });
}

/* ---------- the one call the app makes ---------- */
let syncInFlight = null;

async function syncNow(state) {
  if (!syncReady(state)) return { ok: false, msg: "Sync is not configured." };
  if (syncInFlight) return syncInFlight;

  const cfg = syncCfg(state);
  syncInFlight = (async () => {
    try {
      const { state: remote, sha } = await syncPull(cfg);
      const merged = mergeStates(state, remote);
      merged.updatedAt = new Date().toISOString();
      const newSha = await syncPush(cfg, merged, sha);
      cfg.lastSync = merged.updatedAt;
      cfg.lastError = "";
      cfg.sha = newSha || sha || "";
      return { ok: true, msg: "Synced", state: merged };
    } catch (e) {
      cfg.lastError = e.message || String(e);
      return { ok: false, msg: cfg.lastError };
    } finally {
      syncInFlight = null;
    }
  })();
  return syncInFlight;
}

/* Pull only — used when adopting an existing repo on a fresh browser, where
   pushing first would write an empty state over real history. */
async function syncRestore(state) {
  if (!syncReady(state)) return { ok: false, msg: "Sync is not configured." };
  const cfg = syncCfg(state);
  try {
    const { state: remote } = await syncPull(cfg);
    if (!remote) return { ok: false, msg: "No progress file in that repo yet." };
    const merged = mergeStates(state, remote);
    merged.updatedAt = new Date().toISOString();
    return { ok: true, msg: `Restored ${merged.sessions.length} sessions`, state: merged };
  } catch (e) {
    return { ok: false, msg: e.message || String(e) };
  }
}
