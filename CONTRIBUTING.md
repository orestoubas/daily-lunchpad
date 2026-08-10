# Working on Morning Launchpad

Plain HTML/CSS/JS. No framework, no build step for development — open
`index.html` and it runs. `build.mjs` only produces the optional single-file
version in `dist/`.

## Before pushing anything

```bash
node test/validate-banks.cjs   # structure of all 11 question banks
node test/smoke.mjs            # end-to-end run in a real browser
node build.mjs                 # single-file bundle
```

CI runs the same three on every push and pull request. **Never weaken a test to
make it pass** — if a test fails, the app is broken, not the test.

## Adding questions

Every bank is a plain array in `data/`. Append objects, keep the id sequence
gapless, and reload. The validator enforces:

- unique ids across every bank, matching that bank's id pattern
- exactly four options, all textually distinct
- a valid 0-based answer index, and not always the same one
- a non-empty explanation on every item
- every EU question has a matching paragraph in `data/eu-learn.js`
- dictation items where `options[a] === fr`
- numerical tables where every row matches the header width

Shapes, by file:

| File | Shape |
|---|---|
| `french-vocab.js` | `{id, level, fr, en, ex}` |
| `french-grammar.js`, `french-conj.js` | `{id, level, q, options, a, expl}` |
| `dictation.js` | `{id, level, fr, en, options, a, expl}` — `fr` is spoken aloud |
| `reading.js` | `{id, level, passage, q, options, a, expl}` — all in French |
| `eu.js` | `{id, topic, q, options, a, expl}` + a note in `eu-learn.js` |
| `verbal.js` | `{id, passage, q, options, a, expl}` |
| `numerical.js` | `{id, table, q, options, a, expl}` — `table` may be `null` |
| `digital.js` | `{id, area, q, options, a, expl}` |
| `sjt.js` | `{id, competency, q, options, a, expl}` |
| `writing.js` | `{id, type, topic, minutes, words, prompt, points[], pitfalls[]}` |

Abstract reasoning has no bank — `js/abstract.js` generates it procedurally.

## Quality bar for content

- The keyed answer must be unambiguously correct, and no other option
  defensibly correct.
- Distractors model a specific mistake a candidate would actually make, never
  filler. For numerical items, name that mistake in the explanation.
- Explanations teach. EU questions additionally carry a mini-lesson paragraph
  with context, dates and common confusions.
- Verify time-sensitive facts before adding them; they are what goes stale.

## If you change a cached file

Bump `CACHE` in `sw.js` (`launchpad-v5` → `v6`). Otherwise installed phones
keep serving the old version from the offline cache.

## Deployment

Push to `main` on `orestoubas/daily-lunchpad` → GitHub Actions publishes to
https://orestoubas.github.io/daily-lunchpad/. No other step.

## Automation already in place

- `.github/workflows/ci.yml` — validate + smoke + build on every push
- `.github/workflows/pages.yml` — deploy
- `.github/workflows/epso-watch.yml` — weekly fingerprint of the official EPSO
  pages; opens an issue when they change so the countdown dates get corrected
- A weekly Claude routine tops up the banks, sweeps stale facts and pushes

## User data

Progress lives in the user's browser (`localStorage`), never in this repo and
never on a server. Anything that could destroy it is a serious bug: quota
failures shed low-value data and warn loudly, uncaught errors offer an export,
and old backups stay loadable through `migrateState`.
