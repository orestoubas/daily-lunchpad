# French expansion — build spec

Decided with Orestis, 26 August 2026. Every agent working on this must follow it
exactly; the banks are merged mechanically and validated in CI, so a schema
deviation fails the build.

Learner: Orestis Vasileiadis, lives in **Brussels**, working level A2 heading to
B2 for EPSO AD5. Shops at Delhaize, uses STIB/MIVB.

---

## 1. Non-negotiable rules for every question

**Distractor rule.** All four options must be the **same part of speech**, and at
least one must be a **near-miss trap** — a false friend, a lookalike, or a word
learners genuinely confuse with the answer.

Wrong (the answer is the only noun):

```
"le pantalon" → ["trousers", "to run", "to sell", "under"]
```

Right (all nouns, `la monnaie`/`l'argent` is the trap):

```
"la monnaie" → ["change (coins)", "money in general", "the currency market", "the wallet"]
```

For a French-side question, all four French options must be the same part of
speech **and the same gender** where that is visible, so `le`/`la` in the stem
never gives the answer away.

**Never** mix nouns with verbs or prepositions in one option set.

## 2. Question formats

Every bank item declares its `format`. Use all four across the deck:

| `format` | Stem | Options |
|---|---|---|
| `fr2en` | the French word | four English meanings |
| `en2fr` | the English meaning | four French words |
| `cloze` | a sentence with `___` | four words that could grammatically fit |
| `collocation` | "which does NOT go with X" / which pairing is right | four combinations |

A `cloze` stem must be a sentence where **more than one option is grammatically
possible** — the meaning decides. If three options are grammatically impossible
the item is too easy; rewrite it.

## 3. Levels

`level` is one of `A1 A2 B1 B2 C1 C2`. Core banks cover **A2–B2 with a slice of
C1**. Do not write C2 into the core banks.

## 4. Schemas

All banks are plain `.js` files assigning a global array. Ids are unique across
the whole app.

### Vocabulary — `data/french-vocab.js`, ids `fvNNN`

```js
{ id: "fv501", level: "B1", pos: "noun", gender: "f",
  fr: "la monnaie", en: "change (coins)",
  format: "fr2en",
  options: ["change (coins)", "money in general", "the currency market", "the wallet"],
  a: 0,
  trap: "l'argent — money in general, not the coins you get back",
  expl: "« Vous avez la monnaie ? » asks for coins. Money in general is « l'argent »." }
```

`pos` ∈ `noun verb adj adv prep conj expr`. `gender` ∈ `m f` (nouns only).

### Grammar / conjugation — `data/french-grammar.js` `gNNN`, `data/french-conj.js` `cNNN`

```js
{ id: "g091", level: "B1", topic: "tense-choice",
  q: "Quand je ___ petit, j'habitais à Athènes.",
  options: ["étais", "ai été", "serais", "fus"],
  a: 0,
  expl: "Imparfait for a state that lasted. « J'ai été » would mark a finished, bounded episode." }
```

`topic` ∈ `tense-choice pronominal agreement subjunctive negation pronouns
articles comparison relative`.

### Verb + preposition — `data/verb-prep.js`, ids `vpNNN` (NEW BANK)

```js
{ id: "vp001", level: "A2", verb: "penser",
  q: "Je pense ___ toi tous les jours.",
  options: ["à", "de", "en", "pour"],
  a: 0,
  expl: "« penser à » = to have in mind. « penser de » asks an opinion: « Qu'est-ce que tu penses de ce film ? »",
  pair: "penser à / penser de" }
```

### Prepositions — `data/prepositions.js`, ids `ppNNN` (NEW BANK)

```js
{ id: "pp001", level: "A2", group: "place",
  q: "Je vais ___ Belgique cet été.",
  options: ["en", "au", "à", "dans"],
  a: 0,
  expl: "Feminine countries take « en ». Masculine take « au » (au Portugal), plurals « aux » (aux Pays-Bas)." }
```

`group` ∈ `place time movement cause manner country transport verb-bound`.

### Dictation — `data/dictation.js` `dNNN`; Reading — `data/reading.js` `rdNNN`

Keep the existing shapes. Dictation: `options[a]` must equal `fr` exactly.

## 5. Conversation topics — `data/topics/<slug>-<level>.js`

Ten topics, each eventually at six levels. **Phase 1 builds A2 and B1 only.**

Slugs, in unlock order:

1. `clothes` — buying clothes (buyer/seller)
2. `restaurant` — ordering at a restaurant
3. `bar` — ordering at a bar
4. `festival` — festival tickets and tokens
5. `breakfast` — buying breakfast
6. `hotel` — walk-in hotel booking
7. `restaurant-pro` — restaurant, in depth (courses, complaints, splitting the bill)
8. `trip` — booking a trip abroad
9. `rent` — paying rent / calling the property owner
10. `interview` — business interview

**Same scene, harder French.** `clothes` is the same shop at every level: A2 buys
a jumper in a size; C2 argues a refund for a faulty zip. The scene is recognisable,
the French is not.

Each topic-level file:

```js
TOPICS["clothes-A2"] = {
  slug: "clothes", level: "A2", title: "Acheter des vêtements",
  place: "C&A, rue Neuve, Bruxelles",
  register: "vous",
  registerNote: "Vous with shop staff, always. Tu only with friends your age.",

  vocab: [ /* 40–50 items, same schema as french-vocab, ids fvc-clothes-A2-01… */ ],
  phrases: [                                    // 20 per topic-level
    { id: "ph-clothes-A2-01", fr: "Je peux payer par Bancontact ?",
      en: "Can I pay by Bancontact?",
      note: "In Belgium the card terminal is 'Bancontact', not 'la carte bleue' (that is French)." }
  ],

  dialogue: [                                   // 12–20 turns
    { who: "seller", fr: "Bonjour, je peux vous aider ?", en: "Hello, can I help you?",
      gloss: { "aider": "to help" } },          // hover translations, per word
    { who: "you", fr: "Bonjour, je cherche un pull en laine.",
      en: "Hello, I'm looking for a wool jumper.",
      gloss: { "cherche": "am looking for", "laine": "wool" },
      accept: ["je cherche un pull en laine",   // role-play: every acceptable answer
               "je voudrais un pull en laine",
               "j'aimerais un pull en laine"] }
  ],

  exercises: [ /* 10–15, any of the four formats, drawn from this topic's words */ ]
};
```

**`gloss`** carries the hover translations — only the words worth glossing at that
level, not every word.

**`accept`** is required on every `who: "you"` turn. Role-play is **typing only**
and marking **accepts any correct variant**: list every reasonable phrasing,
lower-case, no final punctuation. Marking is accent- and case-insensitive, and
after a correct answer the other accepted variants are shown.

## 6. Belgian realism

Use real Brussels detail: Delhaize, Carrefour Express, STIB/MIVB, Bruxelles-Midi,
Bancontact, Actiris, Couleur Café, Proximus, communes (Ixelles, Schaerbeek).
Real prices in euros and real formats — a coffee is €2.80, not €10.

Use and flag **Belgian French**: `septante` (70), `nonante` (90), `s'il vous plaît`
meaning "here you go", `une drache` (downpour), `GSM` (mobile), `savoir` used for
"to be able to". Every such item needs a note saying how France differs.

Register: **vous by default**; `tu` in `bar` and `festival` where natural. Each
topic states which and why in `registerNote`.

## 7. What is out of scope for phase 1

C2 and C1 topic levels, A1 topic levels, and any change to EU/reasoning banks.

## 8. Definition of done for a content agent

- Every id unique and matching its bank's prefix
- Exactly 4 options, `a` a valid index, options all one part of speech
- At least one near-miss distractor per item, named in `trap` where the schema has it
- Every item has a non-empty `expl` that teaches something, not just "correct"
- No item repeats a stem already in the bank
- Output as **JSON** to the path you are given — not as a `.js` file; the
  integrator converts and merges.
