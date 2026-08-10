# 🚀 Morning Launchpad

A zero-dependency start page that turns the first 30 minutes of your workday into a
habit: **10 min French → 10 min EU knowledge → 10 min verbal/numerical reasoning**,
with statistics, streaks and progress toward three goals:

| Goal | How it's measured |
|---|---|
| French **B2** | Spaced-repetition mastery of a CEFR-graded A2→B2 course (vocabulary + grammar) |
| EU knowledge **90%** | Rolling average of your last 10 EPSO-style MCQ sessions |
| Verbal & numerical **90%** | Rolling average of your last 10 reasoning sessions (tracked separately) |

Question formats mirror the **EPSO AD5** computer-based tests: EU knowledge MCQs
(institutions, treaties, law, policies, budget, external relations), verbal
reasoning ("which statement is correct based only on the passage") and numerical
reasoning (data tables, ~2 min/question pace, on-screen calculator included).

Everything runs offline in the browser — no server, no account, no tracking.
Progress is stored in `localStorage`.

## Set it as your start page

**Option A — single file (simplest).** Run `node build.mjs` in this folder to
produce `dist/start.html` (or grab the committed one). Put that file somewhere
stable (Desktop, Dropbox, OneDrive…), then:

- **Chrome / Edge**: Settings → *On startup* → *Open a specific page* → `file:///C:/path/to/start.html`
  (also Settings → *Appearance* → *Show home button* → same URL)
- **Firefox**: Settings → *Home* → *Homepage and new windows* → paste the `file://` URL
- **Safari**: Settings → *General* → *Homepage*

**Option B — the folder.** Point the browser at `file:///…/launchpad/index.html`.
Same app, easier to edit the question banks.

**Option C — host it.** Enable GitHub Pages for this repo (or drop the folder on
any static host) and use the URL as your start page on every machine.

> **Multiple browsers/machines:** `localStorage` is per-browser, so pick one
> browser as "the" trainer, or move progress with **⚙️ Settings → Export/Import
> backup** (a small JSON file).

## Daily flow

1. Open the page → hit **▶ Start today's routine**.
2. Each block runs on a 10-minute countdown. Answer, read the explanation, next.
3. A day is complete when all three blocks are done → your workday streak grows
   (weekends don't break it).
4. **📊 Statistics** shows score trends vs the 90% goal lines, a consistency
   heatmap, French mastery by CEFR level, Leitner box distribution, EU accuracy
   by topic, and a session log.

## How the engine works

- **French** — Leitner spaced repetition (5 boxes; intervals 0/1/3/7/14 days).
  ~10 new words/day (configurable), misses reset to box 1 and return sooner.
  Grammar MCQs are mixed in at your current working level. A word counts as
  *mastered* at box 4+.
- **EU / verbal / numerical / grammar / conjugation** — the whole bank is
  cycled before any repeat; questions you missed come back first in the next
  cycle. Answer options are reshuffled every time, and every session run gets
  a fresh shuffle.
- **Mastery retirement** — every bank question tracks your consecutive-correct
  streak. After 3 correct in a row (configurable in ⚙️ Settings) it retires
  from rotation and only returns as an occasional refresher when the active
  pool runs thin. One wrong answer un-retires it.
- **EU learn notes** — every EU question shows a short educational paragraph
  after you answer (`data/eu-learn.js`), so each item teaches rather than just
  tests.

## Question banks (edit me!)

| File | Contents |
|---|---|
| `data/french-vocab.js` | 500 CEFR-tagged words (100 A2 / 160 B1 / 240 B2) with example sentences |
| `data/french-grammar.js` | 90 grammar drills |
| `data/french-conj.js` | 60 conjugation drills (présent → subjonctif passé) |
| `data/dictation.js` | 90 listening/dictation sentences with near-homophone distractors |
| `data/reading.js` | 35 French reading-comprehension passages (B1/B2), all in French |
| `data/eu.js` + `data/eu-learn.js` | 300 EPSO-style EU MCQs, each with a mini-lesson paragraph |
| `data/verbal.js` | 110 verbal reasoning passages |
| `data/numerical.js` | 120 numerical reasoning questions |
| `data/digital.js` | 60 digital-skills questions (DigComp areas) |
| `data/sjt.js` | 45 situational-judgement scenarios (8 EPSO competencies) |
| `data/writing.js` | 40 EUFTE-style writing prompts with key points and pitfalls |
| `js/abstract.js` | **Abstract reasoning generator** — unlimited procedurally generated figure sequences |
| `js/mock.js` | Four full-length mock exams run under exam conditions |

**~1,450 items** plus unlimited generated abstract questions.

Each file is a plain JS array — append new objects with a unique `id` and reload.
The engine picks them up automatically (banks can grow without breaking saved
progress). The fastest way to grow a bank: ask Claude to *"add 50 more EU
questions to data/eu.js in the same format, topic X"*.

## A honest note on the B2 goal

This app builds the *vocabulary, grammar and daily discipline* for B2. Real B2
certification also tests listening, speaking and writing — pair the morning
routine with podcasts/series in French and a weekly conversation session.

## Sources used for the EPSO design

- EPSO AD5 test structure (2026 reform): verbal 20 Q/35 min, numerical+abstract
  20 Q/30 min, EU knowledge 30 Q/40 min — see [orseu-concours.com](https://www.orseu-concours.com/gb/69-ad5-competition),
  [prepari.eu](https://prepari.eu/epso-ad5-generalist-competition-2025/),
  [eu-training](https://eutraining.eu/content/what-are-epso-reasoning-tests-verbal-numerical-and-abstract-reasoning)
- EU knowledge topic map: [epsogenius.com study guide](https://www.epsogenius.com/en/blog/epso-eu-knowledge-study-guide),
  [passepso.com](https://passepso.com/blog/eu-knowledge-test-2026-what-you-need-to-know/)
