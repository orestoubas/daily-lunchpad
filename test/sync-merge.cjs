/* Unit tests for the sync merge.

   The merge is the one piece of sync that can silently destroy history, so it
   is tested directly rather than only through the browser. The properties that
   matter: merging must never lose a session, never inflate a counter no matter
   how many times it runs, and must survive being run in either direction. */

const fs = require("fs");
const path = require("path");
const vm = require("vm");

const root = path.join(__dirname, "..");
const sandbox = {
  console,
  localStorage: { getItem: () => null, setItem: () => {}, removeItem: () => {} },
  TextEncoder, TextDecoder, btoa, atob,
  Math, Date, JSON, Object, Array, String, Number, Set, Map, Error, RegExp, Promise,
  fetch: () => Promise.reject(new Error("no network in tests")),
  setTimeout, clearTimeout
};
sandbox.globalThis = sandbox;
vm.createContext(sandbox);
for (const f of ["js/util.js", "js/sync.js"]) {
  vm.runInContext(fs.readFileSync(path.join(root, f), "utf8"), sandbox, { filename: f });
}
const { mergeStates, defaultState, migrateState } = sandbox;

const failures = [];
const ok = (cond, msg) => { if (!cond) failures.push(msg); };
const eq = (a, b, msg) => ok(a === b, `${msg} — expected ${b}, got ${a}`);

function stateWith(device, sessions, dailyXp, extra) {
  const st = migrateState(Object.assign(defaultState(), { deviceId: device }, extra || {}));
  st.sessions = sessions;
  st.game = Object.assign(sandbox.defaultState().game || {}, {
    xp: { french: 0, eu: 0, reasoning: 0 }, totalXp: 0, dailyXp: dailyXp || {},
    badges: {}, freezes: 2, freezeUsed: {}, dailyGoal: 150, bests: {}, mocks: []
  });
  return st;
}

const laptop = stateWith("dLAP", [
  { id: "dLAP:1", date: "2026-08-24", module: "french", correct: 18, total: 20, pct: 90, seconds: 600 },
  { id: "dLAP:2", date: "2026-08-25", module: "eu", correct: 12, total: 14, pct: 86, seconds: 600 }
], { "2026-08-24": 300, "2026-08-25": 150 });
laptop.updatedAt = "2026-08-25T08:00:00.000Z";
laptop.game.totalXp = 450;
laptop.game.xp.french = 300;
laptop.srs = { fv001: { box: 3, due: "2026-08-27", right: 4, wrong: 1 } };
laptop.qstats = { eu001: { right: 3, wrong: 0, streak: 3 } };
laptop.days = { "2026-08-24": { french: true }, "2026-08-25": { eu: true } };

const phone = stateWith("dPHN", [
  { id: "dPHN:1", date: "2026-08-25", module: "reasoning", correct: 10, total: 12, pct: 83, seconds: 600 }
], { "2026-08-25": 200 });
phone.updatedAt = "2026-08-25T19:00:00.000Z";
phone.game.totalXp = 200;
phone.game.xp.reasoning = 200;
phone.srs = { fv001: { box: 1, due: "2026-08-25", right: 2, wrong: 3 } };
phone.qstats = { eu001: { right: 1, wrong: 2, streak: 0 } };
phone.days = { "2026-08-25": { reasoning: true } };

/* 1. nothing is lost in either direction */
const m1 = mergeStates(laptop, phone);
const m2 = mergeStates(phone, laptop);
eq(m1.sessions.length, 3, "merge should keep every session");
eq(m2.sessions.length, 3, "merge should keep every session in the other direction");
ok(m1.sessions.map(s => s.id).join() === m2.sessions.map(s => s.id).join(),
   "session set should not depend on merge order");

/* 2. the same day practised on two devices takes the higher XP, never the sum */
eq(m1.game.dailyXp["2026-08-25"], 200, "same-day XP should take the max");
eq(m1.game.dailyXp["2026-08-24"], 300, "a day only one device knows about must survive");

/* 3. merging repeatedly changes nothing — a sync loop cannot inflate anything */
const m3 = mergeStates(m1, phone);
const m4 = mergeStates(m3, phone);
eq(m4.sessions.length, 3, "repeat merges must not duplicate sessions");
eq(m4.game.dailyXp["2026-08-25"], 200, "repeat merges must not inflate daily XP");
eq(m4.game.totalXp, 450, "repeat merges must not inflate total XP");

/* 4. the further-along card wins the schedule, counters take the higher total */
eq(m1.srs.fv001.box, 3, "the higher Leitner box should win");
eq(m1.srs.fv001.right, 4, "right count should take the max");
eq(m1.srs.fv001.wrong, 3, "wrong count should take the max");
eq(m1.qstats.eu001.streak, 3, "the better retirement streak should win");

/* 5. day flags union rather than replace */
ok(m1.days["2026-08-25"].eu && m1.days["2026-08-25"].reasoning,
   "both devices' completed blocks should show on a shared day");
ok(m1.days["2026-08-24"].french, "an older day's flags must survive");

/* 6. a fresh browser adopting the repo gets the history, not an empty state */
const fresh = stateWith("dNEW", [], {});
fresh.updatedAt = "2026-08-26T06:00:00.000Z";
const adopted = mergeStates(fresh, m1);
eq(adopted.sessions.length, 3, "a fresh browser should adopt the repo's sessions");
eq(adopted.deviceId, "dNEW", "the local device keeps its own id");
eq(adopted.game.totalXp, 450, "a fresh browser should adopt the repo's XP");

/* 7. remote absent is a no-op, not a wipe */
eq(mergeStates(laptop, null).sessions.length, 2, "merging with no remote must keep local history");

/* 8. Sessions recorded before ids existed are keyed by content, so the same
   pre-id history present in two browsers collapses instead of doubling. That
   is the right trade: the realistic case is one backup imported onto two
   devices, and inventing sessions is worse than merging two that happened to
   look identical down to the second. */
const legacyA = stateWith("dOLD", [{ date: "2026-08-20", module: "eu", correct: 9, total: 10, pct: 90, seconds: 540 }], {});
const legacyB = stateWith("dOLD2", [{ date: "2026-08-20", module: "eu", correct: 9, total: 10, pct: 90, seconds: 540 }], {});
eq(mergeStates(migrateState(legacyA), migrateState(legacyB)).sessions.length, 1,
   "identical pre-id sessions should collapse, not double");

/* ...but two genuinely different sessions on the same day in the same browser
   keep their own identity. */
const twice = stateWith("dOLD3", [
  { date: "2026-08-20", module: "eu", correct: 9, total: 10, pct: 90, seconds: 540 },
  { date: "2026-08-20", module: "eu", correct: 7, total: 10, pct: 70, seconds: 500 }
], {});
eq(mergeStates(migrateState(twice), null).sessions.length, 2,
   "two real sessions on one day must both survive");


/* 9. Read without a token. The trainer's repo is public, so a device that has
   never been set up must still be able to pull — and must never be able to
   push, because a token cannot live in a public page. */
const shipped = migrateState(defaultState());
eq(sandbox.syncCanRead(shipped), true, "a fresh install should be able to read the public repo");
eq(sandbox.syncCanWrite(shipped), false, "a device with no token must not be able to push");
ok(sandbox.syncCfg(shipped).repo.includes("/"), "a repo should be configured out of the box");
ok(!/token/i.test(JSON.stringify(shipped)),
   "no token field should ever exist in the state blob, so exports cannot leak one");

/* A failed read must be a no-op, never a wipe: mergeStates is only ever reached
   with a successful pull, and with no remote it returns local untouched. */
const before = JSON.stringify(laptop.sessions);
eq(JSON.stringify(mergeStates(laptop, null).sessions), before,
   "a failed or empty pull must leave local history exactly as it was");

if (failures.length) {
  console.error("SYNC MERGE TESTS FAILED (" + failures.length + "):");
  failures.forEach(f => console.error(" ✗ " + f));
  process.exit(1);
}
console.log("sync merge tests passed — no loss, no inflation, order-independent, read-without-token");
