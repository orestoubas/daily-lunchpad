/* French grammar bank — MCQ drills, CEFR-tagged. */
"use strict";

const FRENCH_GRAMMAR = [
  {
    "id": "g001",
    "level": "A2",
    "q": "Hier, j'___ travaillé toute la journée.",
    "options": [
      "ai",
      "suis",
      "as",
      "es"
    ],
    "a": 0,
    "expl": "Passé composé of 'travailler' uses avoir: j'ai travaillé."
  },
  {
    "id": "g002",
    "level": "A2",
    "q": "Elle ___ allée au bureau à pied.",
    "options": [
      "a",
      "est",
      "ai",
      "es"
    ],
    "a": 1,
    "expl": "'Aller' takes être in the passé composé, and the participle agrees: elle est allée."
  },
  {
    "id": "g003",
    "level": "A2",
    "q": "Nous ___ un café tous les matins.",
    "options": [
      "prenons",
      "prennent",
      "prends",
      "prenez"
    ],
    "a": 0,
    "expl": "'Nous' form of prendre is 'prenons'."
  },
  {
    "id": "g004",
    "level": "A2",
    "q": "Tu as ___ chance d'habiter à Bruxelles !",
    "options": [
      "de la",
      "du",
      "des",
      "de le"
    ],
    "a": 0,
    "expl": "'Chance' is feminine uncountable here: de la chance."
  },
  {
    "id": "g005",
    "level": "A2",
    "q": "Je ne mange pas ___ viande.",
    "options": [
      "de la",
      "de",
      "du",
      "des"
    ],
    "a": 1,
    "expl": "After a negation, partitive articles become 'de': pas de viande."
  },
  {
    "id": "g006",
    "level": "A2",
    "q": "Il va ___ bureau à vélo.",
    "options": [
      "au",
      "à le",
      "à la",
      "aux"
    ],
    "a": 0,
    "expl": "à + le contracts to 'au': au bureau."
  },
  {
    "id": "g007",
    "level": "A2",
    "q": "C'est le livre ___ Marie.",
    "options": [
      "de",
      "à",
      "chez",
      "pour"
    ],
    "a": 0,
    "expl": "Possession uses 'de': le livre de Marie."
  },
  {
    "id": "g008",
    "level": "A2",
    "q": "Demain, je ___ mes parents.",
    "options": [
      "vais voir",
      "vois voir",
      "va voir",
      "voir"
    ],
    "a": 0,
    "expl": "Futur proche = aller (conjugated) + infinitive: je vais voir."
  },
  {
    "id": "g009",
    "level": "A2",
    "q": "Elle est ___ intelligente que son frère.",
    "options": [
      "plus",
      "mieux",
      "meilleure",
      "très"
    ],
    "a": 0,
    "expl": "Comparative of adjectives: plus + adjective + que."
  },
  {
    "id": "g010",
    "level": "A2",
    "q": "___ heure est-il ?",
    "options": [
      "Quelle",
      "Quel",
      "Quels",
      "Quelles"
    ],
    "a": 0,
    "expl": "'Heure' is feminine singular → quelle heure."
  },
  {
    "id": "g011",
    "level": "A2",
    "q": "Je me ___ à sept heures tous les jours.",
    "options": [
      "lève",
      "lèves",
      "levez",
      "lever"
    ],
    "a": 0,
    "expl": "Reflexive verb, first person: je me lève."
  },
  {
    "id": "g012",
    "level": "A2",
    "q": "Il y a beaucoup ___ monde dans le train.",
    "options": [
      "de",
      "du",
      "des",
      "le"
    ],
    "a": 0,
    "expl": "After expressions of quantity (beaucoup, peu, trop): de + noun."
  },
  {
    "id": "g013",
    "level": "A2",
    "q": "Vous ___ finir ce rapport avant vendredi.",
    "options": [
      "devez",
      "devons",
      "doivent",
      "dois"
    ],
    "a": 0,
    "expl": "'Vous' form of devoir is 'devez'."
  },
  {
    "id": "g014",
    "level": "A2",
    "q": "Nous sommes ___ Belgique depuis deux ans.",
    "options": [
      "en",
      "au",
      "à la",
      "dans"
    ],
    "a": 0,
    "expl": "Feminine country names take 'en': en Belgique, en France."
  },
  {
    "id": "g015",
    "level": "A2",
    "q": "J'ai acheté ___ pommes au marché.",
    "options": [
      "des",
      "de la",
      "du",
      "de l'"
    ],
    "a": 0,
    "expl": "Plural indefinite article: des pommes."
  },
  {
    "id": "g016",
    "level": "B1",
    "q": "Quand j'étais petit, je ___ au football chaque week-end.",
    "options": [
      "jouais",
      "ai joué",
      "jouerai",
      "joue"
    ],
    "a": 0,
    "expl": "Habitual action in the past → imparfait: je jouais."
  },
  {
    "id": "g017",
    "level": "B1",
    "q": "Il faut que tu ___ à l'heure demain.",
    "options": [
      "viennes",
      "viens",
      "venais",
      "viendras"
    ],
    "a": 0,
    "expl": "'Il faut que' triggers the subjunctive: que tu viennes."
  },
  {
    "id": "g018",
    "level": "B1",
    "q": "Si j'avais plus de temps, je ___ le chinois.",
    "options": [
      "apprendrais",
      "apprendrai",
      "apprends",
      "ai appris"
    ],
    "a": 0,
    "expl": "Si + imparfait → conditionnel présent: j'apprendrais."
  },
  {
    "id": "g019",
    "level": "B1",
    "q": "Tu as vu mes clés ? — Oui, je ___ ai vues sur la table.",
    "options": [
      "les",
      "leur",
      "en",
      "y"
    ],
    "a": 0,
    "expl": "Direct object pronoun for 'mes clés' (fem. pl.): je les ai vues (participle agrees)."
  },
  {
    "id": "g020",
    "level": "B1",
    "q": "Tu veux du café ? — Non merci, je n'___ veux pas.",
    "options": [
      "en",
      "y",
      "le",
      "lui"
    ],
    "a": 0,
    "expl": "'En' replaces du/de la/des + noun: je n'en veux pas."
  },
  {
    "id": "g021",
    "level": "B1",
    "q": "Tu vas souvent à Paris ? — Oui, j'___ vais chaque mois.",
    "options": [
      "y",
      "en",
      "le",
      "lui"
    ],
    "a": 0,
    "expl": "'Y' replaces à + place: j'y vais."
  },
  {
    "id": "g022",
    "level": "B1",
    "q": "C'est la collègue ___ m'a aidé hier.",
    "options": [
      "qui",
      "que",
      "dont",
      "où"
    ],
    "a": 0,
    "expl": "'Qui' is the subject of the relative clause (elle m'a aidé)."
  },
  {
    "id": "g023",
    "level": "B1",
    "q": "Voici le rapport ___ je t'ai parlé.",
    "options": [
      "dont",
      "que",
      "qui",
      "où"
    ],
    "a": 0,
    "expl": "Parler DE quelque chose → relative pronoun 'dont'."
  },
  {
    "id": "g024",
    "level": "B1",
    "q": "Le projet ___ nous travaillons est ambitieux.",
    "options": [
      "sur lequel",
      "que",
      "dont",
      "qui"
    ],
    "a": 0,
    "expl": "Travailler SUR un projet → sur lequel."
  },
  {
    "id": "g025",
    "level": "B1",
    "q": "Elle a téléphoné à ses parents et elle ___ a raconté sa journée.",
    "options": [
      "leur",
      "les",
      "en",
      "y"
    ],
    "a": 0,
    "expl": "Raconter À quelqu'un → indirect object pronoun 'leur'."
  },
  {
    "id": "g026",
    "level": "B1",
    "q": "Pendant que je ___ le rapport, le téléphone a sonné.",
    "options": [
      "lisais",
      "ai lu",
      "lirai",
      "lis"
    ],
    "a": 0,
    "expl": "Background action interrupted by an event → imparfait: je lisais."
  },
  {
    "id": "g027",
    "level": "B1",
    "q": "Je pense qu'il ___ raison.",
    "options": [
      "a",
      "ait",
      "aura eu",
      "avait eu"
    ],
    "a": 0,
    "expl": "'Penser que' in the affirmative takes the indicative: qu'il a raison."
  },
  {
    "id": "g028",
    "level": "B1",
    "q": "Bien qu'il ___ fatigué, il a fini le dossier.",
    "options": [
      "soit",
      "est",
      "était",
      "sera"
    ],
    "a": 0,
    "expl": "'Bien que' always takes the subjunctive: bien qu'il soit."
  },
  {
    "id": "g029",
    "level": "B1",
    "q": "Ce rapport a été ___ par la Commission.",
    "options": [
      "publié",
      "publier",
      "publiant",
      "publie"
    ],
    "a": 0,
    "expl": "Passive voice: être + past participle → a été publié."
  },
  {
    "id": "g030",
    "level": "B1",
    "q": "Elle m'a dit qu'elle ___ le lendemain.",
    "options": [
      "viendrait",
      "viendra",
      "vient",
      "venait de"
    ],
    "a": 0,
    "expl": "Reported speech: future becomes conditional → elle viendrait."
  },
  {
    "id": "g031",
    "level": "B2",
    "q": "Je doute que cette mesure ___ efficace.",
    "options": [
      "soit",
      "est",
      "sera",
      "serait"
    ],
    "a": 0,
    "expl": "'Douter que' expresses doubt → subjunctive: qu'elle soit efficace."
  },
  {
    "id": "g032",
    "level": "B2",
    "q": "Si tu m'avais prévenu, je ___ plus tôt.",
    "options": [
      "serais venu",
      "viendrais",
      "suis venu",
      "venais"
    ],
    "a": 0,
    "expl": "Si + plus-que-parfait → conditionnel passé: je serais venu."
  },
  {
    "id": "g033",
    "level": "B2",
    "q": "C'est la meilleure décision qu'il ___ jamais prise.",
    "options": [
      "ait",
      "a",
      "avait",
      "aurait"
    ],
    "a": 0,
    "expl": "Superlative + relative clause → subjunctive: qu'il ait jamais prise."
  },
  {
    "id": "g034",
    "level": "B2",
    "q": "___ les difficultés, le projet a été livré à temps.",
    "options": [
      "Malgré",
      "Malgré que",
      "Bien que",
      "Quoique"
    ],
    "a": 0,
    "expl": "'Malgré' takes a noun phrase directly: malgré les difficultés. 'Malgré que' is considered incorrect; 'bien que' and 'quoique' need a clause with a subjunctive verb, not a noun."
  },
  {
    "id": "g035",
    "level": "B2",
    "q": "Il a fermé la porte ___ ne pas être dérangé.",
    "options": [
      "afin de",
      "afin que",
      "pour que",
      "de sorte que"
    ],
    "a": 0,
    "expl": "Same subject → afin de + infinitive. 'Afin que' would need a second subject + subjunctive."
  },
  {
    "id": "g036",
    "level": "B2",
    "q": "Les documents ___ j'ai besoin sont sur le serveur.",
    "options": [
      "dont",
      "que",
      "desquels",
      "auxquels"
    ],
    "a": 0,
    "expl": "Avoir besoin DE → dont: les documents dont j'ai besoin."
  },
  {
    "id": "g037",
    "level": "B2",
    "q": "___ pleuve ou qu'il vente, la réunion aura lieu.",
    "options": [
      "Qu'il s'agisse",
      "Soit",
      "Qu'il",
      "Quoi"
    ],
    "a": 2,
    "expl": "Concessive structure 'Que... ou que...' + subjunctive: Qu'il pleuve ou qu'il vente."
  },
  {
    "id": "g038",
    "level": "B2",
    "q": "Après ___ le rapport, elle a envoyé ses commentaires.",
    "options": [
      "avoir lu",
      "lire",
      "lisant",
      "avoir lit"
    ],
    "a": 0,
    "expl": "'Après' + past infinitive: après avoir lu."
  },
  {
    "id": "g039",
    "level": "B2",
    "q": "Il travaille dur ___ réussir le concours.",
    "options": [
      "en vue de",
      "en raison de",
      "à force de",
      "faute de"
    ],
    "a": 0,
    "expl": "'En vue de' = with a view to (goal). 'En raison de' = because of; 'faute de' = for lack of."
  },
  {
    "id": "g040",
    "level": "B2",
    "q": "___ terminé son intervention, la commissaire a répondu aux questions.",
    "options": [
      "Ayant",
      "Étant",
      "Avoir",
      "En ayant"
    ],
    "a": 0,
    "expl": "Past participle clause: Ayant terminé... = having finished..."
  },
  {
    "id": "g041",
    "level": "B2",
    "q": "Je ne pense pas qu'il ___ venir demain.",
    "options": [
      "puisse",
      "peut",
      "pourra",
      "pouvait"
    ],
    "a": 0,
    "expl": "'Ne pas penser que' (negative opinion) → subjunctive: qu'il puisse."
  },
  {
    "id": "g042",
    "level": "B2",
    "q": "La loi, ___ l'article 3 a été modifié, entre en vigueur lundi.",
    "options": [
      "dont",
      "que",
      "à laquelle",
      "de qui"
    ],
    "a": 0,
    "expl": "'Dont' expresses de + noun within the clause: l'article 3 DE cette loi → dont l'article 3."
  },
  {
    "id": "g043",
    "level": "B2",
    "q": "___ nous ayons peu de temps, nous devons être rigoureux.",
    "options": [
      "Quoique",
      "Puisque",
      "Comme",
      "Parce que"
    ],
    "a": 0,
    "expl": "'Quoique' (although) + subjunctive: quoique nous ayons. The others take the indicative and mean 'since/because'."
  },
  {
    "id": "g044",
    "level": "B2",
    "q": "Il s'attend à ce que la proposition ___ rejetée.",
    "options": [
      "soit",
      "est",
      "sera",
      "était"
    ],
    "a": 0,
    "expl": "'S'attendre à ce que' + subjunctive: à ce que la proposition soit rejetée."
  },
  {
    "id": "g045",
    "level": "B2",
    "q": "___ des économies, le service a réduit ses déplacements.",
    "options": [
      "Afin de faire",
      "Afin qu'il fasse",
      "Pour qu'il fasse",
      "De peur de"
    ],
    "a": 0,
    "expl": "Goal with the same subject → afin de + infinitive: afin de faire des économies."
  },
  {
    "id": "g046",
    "level": "A2",
    "q": "Elles sont ___ à la réunion en avance.",
    "options": [
      "arrivées",
      "arrivé",
      "arrivés",
      "arrivée"
    ],
    "a": 0,
    "expl": "'Arriver' takes être; the participle agrees with 'elles' (fem. pl.): arrivées."
  },
  {
    "id": "g047",
    "level": "A2",
    "q": "C'est une ___ idée !",
    "options": [
      "bonne",
      "bon",
      "bien",
      "bons"
    ],
    "a": 0,
    "expl": "'Idée' is feminine singular → bonne. 'Bien' is an adverb, not an adjective."
  },
  {
    "id": "g048",
    "level": "A2",
    "q": "___ voiture est garée devant le bureau ?",
    "options": [
      "Ta",
      "Ton",
      "Tes",
      "Toi"
    ],
    "a": 0,
    "expl": "'Voiture' is feminine singular → ta voiture. ('Ton' before feminine only if the noun starts with a vowel: ton adresse.)"
  },
  {
    "id": "g049",
    "level": "A2",
    "q": "Je voudrais ___ croissant, s'il vous plaît.",
    "options": [
      "ce",
      "cette",
      "ces",
      "cet"
    ],
    "a": 0,
    "expl": "'Croissant' is masculine singular starting with a consonant → ce. ('Cet' before vowel: cet homme.)"
  },
  {
    "id": "g050",
    "level": "A2",
    "q": "___ vous parlez anglais ?",
    "options": [
      "Est-ce que",
      "Qu'est-ce que",
      "Est-ce qui",
      "Que"
    ],
    "a": 0,
    "expl": "Yes/no question → Est-ce que vous parlez anglais ? ('Qu'est-ce que' asks 'what'.)"
  },
  {
    "id": "g051",
    "level": "A2",
    "q": "___ ton rapport avant midi !",
    "options": [
      "Finis",
      "Finit",
      "Finir",
      "Finissez-tu"
    ],
    "a": 0,
    "expl": "Imperative, 2nd person singular of finir: Finis ! (No subject pronoun in the imperative.)"
  },
  {
    "id": "g052",
    "level": "A2",
    "q": "Le train ___ partir : dépêche-toi !",
    "options": [
      "vient de",
      "va",
      "est sur le point",
      "doit de"
    ],
    "a": 1,
    "expl": "Futur proche: le train va partir (is about to leave) — that's why you must hurry. 'Vient de partir' would mean it has already left."
  },
  {
    "id": "g053",
    "level": "A2",
    "q": "Ce café est ___ que l'autre.",
    "options": [
      "meilleur",
      "plus bon",
      "mieux",
      "le meilleur"
    ],
    "a": 0,
    "expl": "The comparative of 'bon' is irregular: meilleur (never 'plus bon'). 'Mieux' is the comparative of 'bien'."
  },
  {
    "id": "g054",
    "level": "A2",
    "q": "La réunion est ___ 15 heures.",
    "options": [
      "à",
      "en",
      "dans",
      "sur"
    ],
    "a": 0,
    "expl": "Clock times take 'à': à 15 heures. ('En' for months/years, 'dans' for 'in X time from now'.)"
  },
  {
    "id": "g055",
    "level": "A2",
    "q": "Le rapport sera prêt ___ deux jours.",
    "options": [
      "dans",
      "en",
      "depuis",
      "pendant"
    ],
    "a": 0,
    "expl": "'Dans' + duration = time from now: dans deux jours. ('En deux jours' = it takes two days to do.)"
  },
  {
    "id": "g056",
    "level": "A2",
    "q": "J'habite à Bruxelles ___ 2024.",
    "options": [
      "depuis",
      "il y a",
      "pendant",
      "dans"
    ],
    "a": 0,
    "expl": "Ongoing situation starting in the past → depuis 2024."
  },
  {
    "id": "g057",
    "level": "A2",
    "q": "Il ne travaille ___ le week-end.",
    "options": [
      "jamais",
      "rien",
      "personne",
      "plus de"
    ],
    "a": 0,
    "expl": "Ne... jamais = never. ('Ne... rien' = nothing; 'ne... personne' = nobody.)"
  },
  {
    "id": "g058",
    "level": "A2",
    "q": "Tu as vu le nouveau bâtiment ? — Oui, je ___ vois de ma fenêtre.",
    "options": [
      "le",
      "lui",
      "y",
      "en"
    ],
    "a": 0,
    "expl": "Direct object (voir quelque chose) → le: je le vois."
  },
  {
    "id": "g059",
    "level": "A2",
    "q": "___ est votre numéro de téléphone ?",
    "options": [
      "Quel",
      "Quelle",
      "Qu'est-ce que",
      "Qui"
    ],
    "a": 0,
    "expl": "'Numéro' is masculine singular → Quel est votre numéro..."
  },
  {
    "id": "g060",
    "level": "A2",
    "q": "Nous allons ___ le dentiste jeudi.",
    "options": [
      "chez",
      "à",
      "au",
      "dans"
    ],
    "a": 0,
    "expl": "With a person/profession → chez: chez le dentiste, chez le médecin. ('À' + place: à la clinique.)"
  },
  {
    "id": "g061",
    "level": "B1",
    "q": "Quand je suis arrivé, la réunion ___ depuis dix minutes.",
    "options": [
      "avait commencé",
      "a commencé",
      "commencera",
      "commence"
    ],
    "a": 0,
    "expl": "Action completed before another past action → plus-que-parfait: avait commencé."
  },
  {
    "id": "g062",
    "level": "B1",
    "q": "Elle a trouvé ce poste ___ une annonce en ligne.",
    "options": [
      "en lisant",
      "en lire",
      "lisant de",
      "à lire"
    ],
    "a": 0,
    "expl": "Gérondif (en + participe présent) expresses means: en lisant une annonce."
  },
  {
    "id": "g063",
    "level": "B1",
    "q": "Si tu ___ maintenant, tu arriveras à l'heure.",
    "options": [
      "pars",
      "partais",
      "partiras",
      "es parti"
    ],
    "a": 0,
    "expl": "Si + présent → futur in the main clause: Si tu pars maintenant, tu arriveras..."
  },
  {
    "id": "g064",
    "level": "B1",
    "q": "J'ai écrit à la DRH mais elle ne ___ a pas encore répondu.",
    "options": [
      "m'",
      "me l'",
      "moi",
      "m'en"
    ],
    "a": 0,
    "expl": "Répondre À quelqu'un → indirect pronoun me (m'): elle ne m'a pas répondu."
  },
  {
    "id": "g065",
    "level": "B1",
    "q": "Voici les chiffres ___ tu as besoin pour la présentation.",
    "options": [
      "dont",
      "que",
      "qui",
      "auxquels"
    ],
    "a": 0,
    "expl": "Avoir besoin DE → dont: les chiffres dont tu as besoin."
  },
  {
    "id": "g066",
    "level": "B1",
    "q": "Quel dossier veux-tu ? — ___ qui est sur ton bureau.",
    "options": [
      "Celui",
      "Celle",
      "Ceux",
      "Ça"
    ],
    "a": 0,
    "expl": "'Dossier' is masculine singular → celui qui est sur ton bureau."
  },
  {
    "id": "g067",
    "level": "B1",
    "q": "Elle a répondu très ___ à la question du jury.",
    "options": [
      "prudemment",
      "prudent",
      "prudente",
      "prudament"
    ],
    "a": 0,
    "expl": "Adverb from 'prudent' → prudemment (-emment for adjectives in -ent)."
  },
  {
    "id": "g068",
    "level": "B1",
    "q": "Je me demande ___ le rapport sera publié.",
    "options": [
      "quand",
      "qu'est-ce que",
      "est-ce que",
      "que"
    ],
    "a": 0,
    "expl": "Indirect question: no 'est-ce que' → Je me demande quand le rapport sera publié."
  },
  {
    "id": "g069",
    "level": "B1",
    "q": "___ partir en vacances, il a terminé tous ses dossiers.",
    "options": [
      "Avant de",
      "Avant que",
      "Après",
      "Avant à"
    ],
    "a": 0,
    "expl": "Same subject → avant de + infinitive. ('Avant que' + subjunctive needs a different subject.)"
  },
  {
    "id": "g070",
    "level": "B1",
    "q": "Elle s'intéresse beaucoup ___ politique européenne.",
    "options": [
      "à la",
      "de la",
      "pour la",
      "en"
    ],
    "a": 0,
    "expl": "S'intéresser À quelque chose: à la politique."
  },
  {
    "id": "g071",
    "level": "B1",
    "q": "___ les candidats ont reçu une convocation.",
    "options": [
      "Tous",
      "Tout",
      "Toute",
      "Toutes"
    ],
    "a": 0,
    "expl": "'Candidats' masculine plural → tous les candidats. ('Tout le dossier', 'toute la journée', 'toutes les questions'.)"
  },
  {
    "id": "g072",
    "level": "B1",
    "q": "Ce test est ___ difficile que le précédent.",
    "options": [
      "aussi",
      "autant",
      "si",
      "tant"
    ],
    "a": 0,
    "expl": "Equality with an adjective → aussi + adj + que. ('Autant' works with verbs/nouns: autant de questions.)"
  },
  {
    "id": "g073",
    "level": "B1",
    "q": "Il faut ___ avant vendredi.",
    "options": [
      "répondre",
      "que tu réponds",
      "répondes",
      "répondu"
    ],
    "a": 0,
    "expl": "'Il faut' + infinitive when no specific subject is stressed: il faut répondre. (With a subject: il faut que tu répondes.)"
  },
  {
    "id": "g074",
    "level": "B1",
    "q": "Les résultats ? Je ___ enverrai dès que possible.",
    "options": [
      "vous les",
      "les vous",
      "vous en",
      "leur"
    ],
    "a": 0,
    "expl": "Order of double pronouns: indirect (vous) before direct (les) → je vous les enverrai."
  },
  {
    "id": "g075",
    "level": "B1",
    "q": "C'est l'année ___ j'ai déménagé à Bruxelles.",
    "options": [
      "où",
      "que",
      "quand",
      "dont"
    ],
    "a": 0,
    "expl": "Relative pronoun for time → où: l'année où j'ai déménagé."
  },
  {
    "id": "g076",
    "level": "B2",
    "q": "Je crains qu'il ne ___ trop tard pour modifier le texte.",
    "options": [
      "soit",
      "est",
      "sera",
      "serait"
    ],
    "a": 0,
    "expl": "'Craindre que' → subjunctive (with optional expletive 'ne'): je crains qu'il ne soit trop tard."
  },
  {
    "id": "g077",
    "level": "B2",
    "q": "Nous partirons à 8 heures, ___ le train soit annulé.",
    "options": [
      "à moins que",
      "sauf si",
      "à condition que",
      "pourvu que"
    ],
    "a": 0,
    "expl": "'À moins que' (unless) + subjunctive: à moins que le train (ne) soit annulé. 'Sauf si' would take the indicative."
  },
  {
    "id": "g078",
    "level": "B2",
    "q": "Il a modifié le planning ___ personne ne s'en aperçoive.",
    "options": [
      "sans que",
      "sans",
      "bien que",
      "pour"
    ],
    "a": 0,
    "expl": "'Sans que' + subjunctive (different subject): sans que personne ne s'en aperçoive."
  },
  {
    "id": "g079",
    "level": "B2",
    "q": "___ vous décidiez, informez-nous rapidement.",
    "options": [
      "Quoi que",
      "Quoique",
      "Quel que",
      "Bien que"
    ],
    "a": 0,
    "expl": "'Quoi que' (two words) = whatever: Quoi que vous décidiez. 'Quoique' (one word) = although."
  },
  {
    "id": "g080",
    "level": "B2",
    "q": "Le comité ___ nous avons soumis la proposition rendra son avis lundi.",
    "options": [
      "auquel",
      "dont",
      "que",
      "à qui de"
    ],
    "a": 0,
    "expl": "Soumettre À + comité (masc. sing.) → auquel."
  },
  {
    "id": "g081",
    "level": "B2",
    "q": "C'est en 2009 ___ le traité de Lisbonne est entré en vigueur.",
    "options": [
      "que",
      "où",
      "quand",
      "dont"
    ],
    "a": 0,
    "expl": "Mise en relief 'c'est... que': C'est en 2009 que le traité est entré en vigueur."
  },
  {
    "id": "g082",
    "level": "B2",
    "q": "Il affirmait que la réforme ___ des effets positifs dès l'année suivante.",
    "options": [
      "aurait",
      "aura",
      "ait",
      "a"
    ],
    "a": 0,
    "expl": "Sequence of tenses in reported speech: future → conditional (future in the past): aurait."
  },
  {
    "id": "g083",
    "level": "B2",
    "q": "Les délégations, ___ la position restait floue, ont demandé une pause.",
    "options": [
      "dont",
      "que",
      "auxquelles",
      "desquels"
    ],
    "a": 0,
    "expl": "'Dont' = de + noun inside the clause: la position DE ces délégations → dont la position."
  },
  {
    "id": "g084",
    "level": "B2",
    "q": "___ le rapport ait été publié tard, il a été très lu.",
    "options": [
      "Bien que",
      "Parce que",
      "Dès que",
      "Puisque"
    ],
    "a": 0,
    "expl": "Concession + subjunctive ('ait été') → Bien que. The other conjunctions take the indicative."
  },
  {
    "id": "g085",
    "level": "B2",
    "q": "Elle a accepté le poste, ___ devoir déménager.",
    "options": [
      "quitte à",
      "faute de",
      "à force de",
      "sous prétexte de"
    ],
    "a": 0,
    "expl": "'Quitte à' + infinitive = even if it means: quitte à devoir déménager."
  },
  {
    "id": "g086",
    "level": "B2",
    "q": "___ temps, nous n'avons pas pu approfondir ce point.",
    "options": [
      "Faute de",
      "Grâce au",
      "À force de",
      "Quitte à"
    ],
    "a": 0,
    "expl": "'Faute de' + noun = for lack of: faute de temps."
  },
  {
    "id": "g087",
    "level": "B2",
    "q": "Tout ___ les risques, il a soutenu le projet.",
    "options": [
      "en connaissant",
      "connaissant",
      "à connaître",
      "en connaître"
    ],
    "a": 0,
    "expl": "'Tout en + participe présent' expresses concession/simultaneity: tout en connaissant les risques."
  },
  {
    "id": "g088",
    "level": "B2",
    "q": "Le document ? Je ___ ai transmis hier.",
    "options": [
      "le lui",
      "lui le",
      "le leur à",
      "l'y"
    ],
    "a": 0,
    "expl": "Double pronoun order (3rd person): direct before indirect → je le lui ai transmis."
  },
  {
    "id": "g089",
    "level": "B2",
    "q": "Les mesures ___ par le Conseil entreront en vigueur en mars.",
    "options": [
      "adoptées",
      "adoptés",
      "adoptée",
      "en adoptant"
    ],
    "a": 0,
    "expl": "Past participle used as adjective agrees with 'mesures' (fem. pl.): adoptées."
  },
  {
    "id": "g090",
    "level": "B2",
    "q": "Il travaille ___ à réussir ce concours depuis un an.",
    "options": [
      "de manière",
      "en manière",
      "par manière",
      "à manière"
    ],
    "a": 0,
    "expl": "'De manière à' + infinitive = so as to: de manière à réussir."
  }
];
