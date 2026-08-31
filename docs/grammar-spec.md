# Grammar section — build spec

Companion to `docs/french-expansion-spec.md`, which still governs question
quality. Read that first: the distractor rule (same part of speech, at least one
named near-miss trap) applies here unchanged.

Learner: Orestis, A2 working level, target B2, EPSO AD5, lives in Brussels.

The point of this section is that it **teaches**, where the existing banks only
drill. A grammar topic is a chapter, not a quiz.

---

## 1. The five topics

| slug | title | levels |
|---|---|---|
| `gender` | Le genre et le pluriel des noms | A2, B1 |
| `articles` | Les articles et les partitifs | A2, B1 |
| `pronouns` | Les pronoms compléments — COD, COI, y, en | B1, B2 |
| `relative` | Les pronoms relatifs — qui, que, dont, où, lequel | B1, B2 |
| `connectors` | Les connecteurs logiques | B1, B2 |

Unlock order is the order above.

## 2. Stages

Five stages, 500 XP per topic-level, split 90 / 100 / 110 / 100 / 100.

1. **Lesson** — read it. The actual teaching.
2. **Recognise** — spot the rule working. Multiple choice, low difficulty.
3. **Drills** — apply the rule. Multiple choice, full difficulty.
4. **Write it** — produce the form, typed, no options.
5. **Apply** — write a whole sentence in a real Brussels or EPSO situation.

## 3. File shape — `data/grammar-topics.js`

```js
GRAMMAR_TOPICS["gender-A2"] = {
  slug: "gender", level: "A2",
  title: "Le genre et le pluriel des noms",
  summary: "One line on what this topic gives you.",
  why: "One or two sentences on why it matters for Orestis specifically.",

  lesson: [                                  // 4–7 sections
    { heading: "Endings that tell you the gender",
      body: "Plain English explanation. Two or three sentences, no jargon " +
            "without glossing it. This is the teaching, so it must actually teach.",
      table: {                               // optional
        cols: ["Ending", "Gender", "Example", "Watch out"],
        rows: [["-tion", "feminine", "la réunion", "always"],
               ["-ment", "masculine", "le paiement", "la jument is the exception"]]
      },
      examples: [                            // 2–4 per section
        { fr: "la réunion commence à neuf heures",
          en: "the meeting starts at nine",
          gloss: { "réunion": "meeting" },   // hover translations
          note: "-tion is reliably feminine." }
      ]
    }
  ],

  recognise: [ /* 8–10 questions, same schema as the topic vocab items */ ],
  drills:    [ /* 14–18 questions */ ],

  write: [                                   // 10–12 items
    { id: "gw-gender-A2-01",
      prompt: "the meeting (use the definite article)",
      answer: "la réunion",
      accept: ["la réunion"],                // every acceptable spelling
      hint: "-tion",
      expl: "Feminine: nouns in -tion take la." }
  ],

  apply: [                                   // 5–6 items
    { id: "ga-gender-A2-01",
      situation: "You are at the Delhaize checkout and want to ask for a bag.",
      task: "Ask for a bag, using the right article.",
      accept: ["je voudrais un sac s'il vous plaît", "un sac s'il vous plaît",
               "je peux avoir un sac s'il vous plaît"],
      model: "Je voudrais un sac, s'il vous plaît.",
      expl: "« un sac » — sac is masculine." }
  ]
};
```

### Question items (`recognise`, `drills`)

Exactly the schema the topic banks already use, and the same rules:

```js
{ id: "gd-gender-A2-01", level: "A2", format: "cloze",
  q: "___ réunion commence à neuf heures.",
  options: ["La", "Le", "Les", "L'"],
  a: 0,
  trap: "Le — most learners default to masculine",
  expl: "Nouns ending in -tion are feminine, so « la réunion »." }
```

- `format` ∈ `fr2en en2fr cloze collocation`. Grammar topics will mostly use
  `cloze` and `collocation`.
- **An item carrying `q` is prompted with `q`.** Only `fr2en` / `en2fr` items
  without a `q` take their stem from `fr` / `en`. Getting this wrong once made a
  fifth of the Conversations bank ask its own answer.
- All four options the same part of speech and the same grammatical shape — four
  articles, four pronouns, four connectors. Never mixed.
- At least one option must be a genuine near-miss, named in `trap`.
- Every `expl` states the rule, so the item teaches beyond itself.

### `write` items

`accept` lists every correct spelling. Marking is accent- and case-insensitive
and a missing article is flagged as its own verdict, so include the article in
`answer` wherever the article is the point.

### `apply` items

`accept` must list **every reasonable phrasing**, lower-case, no final
punctuation — the same contract as the Conversations role-play. `model` is the
one shown as a native's version. Aim for 4–8 accepted variants each.

## 4. Ids

`gl-<slug>-<level>-NN` lesson, `gr-` recognise, `gd-` drills, `gw-` write,
`ga-` apply. Unique across the whole app.

## 5. Content rules

- **Explain in English, illustrate in French.** He is A2; a lesson written in
  French teaches nothing at that level.
- **Brussels and EPSO throughout.** Delhaize, STIB, the commune, a note to a
  head of unit, a Council working party — not Paris cafés.
- **Belgian French flagged** wherever it differs: `septante`, `nonante`, `GSM`,
  `s'il vous plaît` as "here you go", `savoir` for `pouvoir`.
- **Name the English-speaker error.** Every lesson section should say what
  learners from English actually get wrong, not just state the rule.
- **No rule without an exception check.** If a rule has common exceptions, give
  them; a rule taught as absolute and then contradicted is worse than no rule.

## 6. Definition of done

- ids unique and correctly prefixed
- every question: 4 distinct options, valid `a`, all one part of speech, a named
  trap, a teaching `expl`
- no question whose stem equals its keyed answer
- every gloss key appears verbatim in its example's `fr`
- every `apply` and `write` item has a non-empty, normalised `accept`
- output as JSON to the given path, not as `.js`; the integrator merges
