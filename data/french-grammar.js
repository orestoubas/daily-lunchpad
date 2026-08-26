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
  },
  {"id": "g091", "level": "A2", "topic": "tense-choice", "q": "Samedi dernier, nous ___ au marché de la place Flagey.", "options": ["allions", "irons", "sommes allés", "serions allés"], "a": 2, "expl": "Passé composé for one finished event on a named day. « Allions » (imparfait) would mean we used to go there regularly, with no single occasion in view."},
  {"id": "g092", "level": "A2", "topic": "tense-choice", "q": "Quand j'habitais à Athènes, il ___ très chaud en juillet.", "options": ["a fait", "fera", "faisait", "aurait fait"], "a": 2, "expl": "Imparfait describes a repeated or background state in the past. « Il a fait chaud » would frame the heat as one closed episode with a beginning and an end."},
  {"id": "g093", "level": "A2", "topic": "tense-choice", "q": "Hier soir, j'___ un film, puis je me suis couché.", "options": ["aurais regardé", "regardais", "regarderai", "ai regardé"], "a": 3, "expl": "Passé composé for actions that move the story forward one after the other. Imparfait would only set the scene, not advance it."},
  {"id": "g094", "level": "A2", "topic": "tense-choice", "q": "Tous les dimanches, mes parents ___ le journal au café.", "options": ["ont lu", "liront", "lisaient", "auraient lu"], "a": 2, "expl": "« Tous les dimanches » signals a habit, so imparfait. Passé composé would turn the habit into a single reading session."},
  {"id": "g095", "level": "A2", "topic": "tense-choice", "q": "L'année prochaine, je ___ le concours EPSO.", "options": ["passerais", "passerai", "passais", "ai passé"], "a": 1, "expl": "Futur simple for a plan presented as real: passerai (-ai). The conditional passerais (-ais) would mean « I would sit it », under some condition."},
  {"id": "g096", "level": "A2", "topic": "tense-choice", "q": "Ce matin, il ___ quand je suis sorti de chez moi.", "options": ["aurait plu", "a plu", "pleuvra", "pleuvait"], "a": 3, "expl": "The rain is the background; the exit is the event. Background = imparfait, event = passé composé."},
  {"id": "g097", "level": "A2", "topic": "tense-choice", "q": "Demain, s'il fait beau, on ___ à Tervuren.", "options": ["ira", "allait", "est allé", "irait"], "a": 0, "expl": "Si + présent is followed by futur simple in the main clause. Never « si + futur » in French."},
  {"id": "g098", "level": "B1", "topic": "tense-choice", "q": "J'___ mon tram quand mon téléphone a sonné.", "options": ["attendais", "attendrai", "ai attendu", "attendrais"], "a": 0, "expl": "Imparfait for the action already under way, passé composé for the one that cuts into it. The interrupted action is almost always the imparfait."},
  {"id": "g099", "level": "B1", "topic": "tense-choice", "q": "Pendant trois ans, elle ___ à Schaerbeek, puis elle a déménagé.", "options": ["aurait habité", "habitait", "habitera", "a habité"], "a": 3, "expl": "A duration with a stated end (« pendant trois ans, puis… ») is a closed block: passé composé. Imparfait would leave the period open-ended."},
  {"id": "g100", "level": "B1", "topic": "tense-choice", "q": "Je ___ bien un café, si vous avez le temps.", "options": ["prendrai", "prenais", "prendrais", "ai pris"], "a": 2, "expl": "Conditionnel présent softens a request or a wish. « Je prendrai » states a decision; « je prendrais » offers it politely."},
  {"id": "g101", "level": "B1", "topic": "tense-choice", "q": "Il a dit qu'il ___ à la réunion de lundi.", "options": ["viendra", "viendrait", "venait", "est venu"], "a": 1, "expl": "After a past reporting verb, the future becomes conditionnel présent — the « future in the past ». Direct speech: « Je viendrai. »"},
  {"id": "g102", "level": "B1", "topic": "tense-choice", "q": "Quand je suis arrivé à Bruxelles-Midi, le train ___.", "options": ["est déjà parti", "était déjà parti", "partait déjà", "serait déjà parti"], "a": 1, "expl": "Plus-que-parfait marks an event earlier than another past event. Arrival = passé composé; departure, before it = plus-que-parfait."},
  {"id": "g103", "level": "B1", "topic": "tense-choice", "q": "Elle m'a rendu le livre que je lui ___ le mois d'avant.", "options": ["ai prêté", "avais prêté", "prêtais", "aurais prêté"], "a": 1, "expl": "The lending happened before the returning, so plus-que-parfait. « Le mois d'avant » points backwards from a past moment, not from now."},
  {"id": "g104", "level": "B1", "topic": "tense-choice", "q": "Si j'avais le temps, je ___ un cours de néerlandais.", "options": ["suivais", "suivrai", "suivrais", "ai suivi"], "a": 2, "expl": "Si + imparfait → conditionnel présent. The pairing is fixed: imparfait in the si-clause, never a conditional there."},
  {"id": "g105", "level": "B1", "topic": "tense-choice", "q": "Nous ___ trois fois à Actiris avant d'obtenir un rendez-vous.", "options": ["téléphonions", "avons téléphoné", "téléphonerons", "aurions téléphoné"], "a": 1, "expl": "A counted number of repetitions (« trois fois ») is a closed set of events: passé composé. Imparfait needs an uncounted habit."},
  {"id": "g106", "level": "B1", "topic": "tense-choice", "q": "Avant, on ___ payer en liquide partout ; aujourd'hui, tout passe par Bancontact.", "options": ["a pu", "pourra", "aurait pu", "pouvait"], "a": 3, "expl": "Imparfait for how things used to be, contrasted with the present. « On a pu » would report one specific successful payment."},
  {"id": "g107", "level": "B1", "topic": "tense-choice", "q": "Dès que j'___ mon diplôme, je poserai ma candidature.", "options": ["ai obtenu", "aurai obtenu", "aurais obtenu", "obtenais"], "a": 1, "expl": "Futur antérieur after dès que / quand / une fois que when one future action precedes another. French uses a real future here where English uses a present."},
  {"id": "g108", "level": "B1", "topic": "tense-choice", "q": "Il faisait nuit et la pluie ___ depuis des heures.", "options": ["est tombée", "tombera", "tombait", "serait tombée"], "a": 2, "expl": "Depuis + imparfait describes a situation still going on at that past moment. Passé composé would close it off."},
  {"id": "g109", "level": "B2", "topic": "tense-choice", "q": "Elle nous a expliqué qu'elle ___ le dossier dès la veille.", "options": ["a transmis", "aurait transmis", "transmettait", "avait transmis"], "a": 3, "expl": "Reported speech in the past: an earlier action shifts to plus-que-parfait. « Aurait transmis » would mean she allegedly sent it — unverified."},
  {"id": "g110", "level": "B2", "topic": "tense-choice", "q": "Selon la presse, le ministre ___ au courant depuis des mois.", "options": ["est", "était", "serait", "fut"], "a": 2, "expl": "Conditionnel présent of unverified report — the « conditionnel journalistique ». « Selon la presse… serait » = reportedly is, the paper takes no responsibility."},
  {"id": "g111", "level": "B2", "topic": "tense-choice", "q": "S'ils avaient réservé plus tôt, ils ___ moins cher.", "options": ["paieraient", "avaient payé", "auraient payé", "auront payé"], "a": 2, "expl": "Si + plus-que-parfait → conditionnel passé, for an unreal past. Conditionnel présent would put the result in the present, which the past si-clause rules out."},
  {"id": "g112", "level": "B2", "topic": "tense-choice", "q": "Il travaillait à la Commission depuis dix ans quand il ___ de service.", "options": ["changeait", "a changé", "avait changé", "changerait"], "a": 1, "expl": "Imparfait for the long-running situation, passé composé for the single event that ends it. « Depuis dix ans » forces the imparfait in the first clause, not the second."},
  {"id": "g113", "level": "B2", "topic": "tense-choice", "q": "Nous pensions que le vote ___ le lendemain.", "options": ["aura lieu", "avait lieu", "aurait lieu", "ait lieu"], "a": 2, "expl": "« Nous pensions » is past, so the following future becomes conditionnel présent. « Le lendemain » (not « demain ») confirms the anchor is a past moment."},
  {"id": "g114", "level": "B2", "topic": "tense-choice", "q": "Chaque fois qu'il venait à Bruxelles, il ___ dans le même hôtel.", "options": ["descendra", "est descendu", "descendait", "serait descendu"], "a": 2, "expl": "Both clauses of a past habit stay in the imparfait. Mixing in a passé composé would single out one particular stay."},
  {"id": "g115", "level": "B2", "topic": "tense-choice", "q": "Elle a précisé que la procédure ___ encore en cours au moment du contrôle.", "options": ["est", "aura été", "serait", "était"], "a": 3, "expl": "Concordance des temps: a state simultaneous with a past main verb goes into the imparfait. « Au moment du contrôle » anchors it firmly in the past."},
  {"id": "g116", "level": "B2", "topic": "tense-choice", "q": "Il ___ mieux valu prévenir le service avant la date limite.", "options": ["avait", "aurait", "aura", "aurais"], "a": 1, "expl": "« Il aurait mieux valu + infinitif » is the fixed way to express regret about the past: it would have been better to… The impersonal il never takes -ais."},
  {"id": "g117", "level": "B2", "topic": "tense-choice", "q": "En ouvrant le dossier, je me suis rendu compte qu'on ___ deux annexes.", "options": ["a oublié", "oubliait", "aurait oublié", "avait oublié"], "a": 3, "expl": "The forgetting predates the discovery, so plus-que-parfait. Anteriority inside a past narrative is what the plus-que-parfait is for."},
  {"id": "g118", "level": "B2", "topic": "tense-choice", "q": "À peine sorti du métro, il a compris qu'il ___ de station.", "options": ["s'était trompé", "se trompait", "se serait trompé", "s'est trompé"], "a": 0, "expl": "The mistake was already made when he realised it: plus-que-parfait. Pronominal verbs form it with être — il s'était trompé, not il avait se trompé."},
  {"id": "g119", "level": "C1", "topic": "tense-choice", "q": "Le texte ___ adopté en première lecture si les groupes n'avaient pas retiré leur soutien.", "options": ["aura été", "serait", "avait été", "aurait été"], "a": 3, "expl": "Unreal past in the passive: conditionnel passé of être + participle = aurait été adopté. « Serait adopté » is conditionnel présent and points to a still-open present."},
  {"id": "g120", "level": "C1", "topic": "tense-choice", "q": "Dans un récit littéraire, « il partit » correspond, à l'oral, à ___.", "options": ["il était parti", "il partait", "il serait parti", "il est parti"], "a": 3, "expl": "Passé simple is the written narrative tense; spoken and ordinary written French replace it with the passé composé. It is not an imperfect and not a pluperfect."},
  {"id": "g121", "level": "A2", "topic": "pronominal", "q": "Le matin, elle ___ les dents avant de partir.", "options": ["se brossent", "te brosses", "me brosse", "se brosse"], "a": 3, "expl": "In a pronominal verb the reflexive pronoun changes with the subject: je me, tu te, il/elle se, nous nous, vous vous, ils/elles se. Elle → se brosse."},
  {"id": "g122", "level": "A2", "topic": "pronominal", "q": "Nous ___ devant la station Arts-Loi à midi.", "options": ["nous retrouvons", "se retrouvent", "vous retrouvez", "me retrouve"], "a": 0, "expl": "With nous the pronoun is also nous, so it appears twice: nous nous retrouvons. Dropping one of them is the commonest learner error."},
  {"id": "g123", "level": "A2", "topic": "pronominal", "q": "Comment est-ce que tu ___ ?", "options": ["s'appelle", "m'appelle", "vous appelez", "t'appelles"], "a": 3, "expl": "Tu takes te, elided to t' before a vowel: tu t'appelles. The -s of the tu form stays even after elision."},
  {"id": "g124", "level": "A2", "topic": "pronominal", "q": "Ils ___ toujours quand ils parlent politique.", "options": ["se disputent", "se dispute", "nous disputons", "te disputes"], "a": 0, "expl": "Ils → se + the ils form of the verb. Here se is reciprocal: they argue with each other."},
  {"id": "g125", "level": "A2", "topic": "pronominal", "q": "Je ___ bien en néerlandais pour faire mes courses.", "options": ["me débrouille", "se débrouille", "te débrouilles", "nous débrouillons"], "a": 0, "expl": "Se débrouiller = to manage, to get by. It exists only as a pronominal verb, so the pronoun is obligatory: je me débrouille."},
  {"id": "g126", "level": "A2", "topic": "pronominal", "q": "Il est tard, je ___ !", "options": ["s'en va", "t'en vas", "m'en vais", "nous en allons"], "a": 2, "expl": "S'en aller = to leave, to be off. Both pieces move with the subject: je m'en vais, tu t'en vas, il s'en va, nous nous en allons."},
  {"id": "g127", "level": "B1", "topic": "pronominal", "q": "Ce ne sont pas des retards ponctuels : ___ d'un problème structurel.", "options": ["ils s'agissent", "elle s'agit", "il s'agit", "on s'agit"], "a": 2, "expl": "S'agir is impersonal: only « il s'agit de », never a plural or a real subject. To say what a text is about, French turns it round: « il s'agit de… »"},
  {"id": "g128", "level": "B1", "topic": "pronominal", "q": "De quoi ___ dans cette note de service ?", "options": ["s'agit-il", "s'agissent-ils", "agit-il", "s'agit-elle"], "a": 0, "expl": "The question form keeps the impersonal il: « de quoi s'agit-il ? » = what is it about? The verb never agrees with the thing being discussed."},
  {"id": "g129", "level": "B1", "topic": "pronominal", "q": "Elle ne ___ plus de son mot de passe.", "options": ["se souvient", "se rappelle", "se demande", "se doute"], "a": 0, "expl": "Se souvenir DE quelque chose, but se rappeler quelque chose with no preposition. The « de » in the sentence rules out se rappeler."},
  {"id": "g130", "level": "B1", "topic": "pronominal", "q": "Nous ___ à la newsletter de la commune l'an dernier.", "options": ["avons inscrit", "sommes inscrits", "nous avons inscrits", "nous sommes inscrits"], "a": 3, "expl": "Every pronominal verb builds its compound tenses with être, never avoir, and the reflexive pronoun stays in front of the auxiliary."},
  {"id": "g131", "level": "B1", "topic": "pronominal", "q": "Elle ___ à six heures et elle est partie sans déjeuner.", "options": ["s'est levé", "est levée", "s'est levée", "a levé"], "a": 2, "expl": "Se lever: the pronoun is a direct object, so the participle agrees with the subject — elle s'est levée, with -e."},
  {"id": "g132", "level": "B1", "topic": "pronominal", "q": "Ils ___ la main devant la gare du Midi.", "options": ["se sont serrés", "se sont serré", "sont serrés", "ont serré"], "a": 1, "expl": "The direct object is « la main » and it follows the verb, so se is indirect (serrer la main À quelqu'un) and there is no agreement: se sont serré."},
  {"id": "g133", "level": "B1", "topic": "pronominal", "q": "Après la réunion, tout le monde ___ vers la sortie.", "options": ["se sont dirigés", "s'est dirigé", "s'est dirigés", "est dirigé"], "a": 1, "expl": "« Tout le monde » is grammatically third person singular, however many people it covers: tout le monde s'est dirigé."},
  {"id": "g134", "level": "B2", "topic": "pronominal", "q": "Les deux délégations ___ au téléphone hier soir.", "options": ["se sont parlées", "se sont parlé", "sont parlées", "ont parlé"], "a": 1, "expl": "Parler À quelqu'un, so the reciprocal se is indirect and the participle stays invariable: elles se sont parlé. Compare se sont vues (voir quelqu'un, direct)."},
  {"id": "g135", "level": "B2", "topic": "pronominal", "q": "Les lettres qu'ils se sont ___ pendant la guerre ont été publiées.", "options": ["écrites", "écrit", "écrits", "écrite"], "a": 0, "expl": "Écrire À quelqu'un makes se indirect, but the direct object « que » = les lettres comes before the verb, so the participle agrees with it: écrites."},
  {"id": "g136", "level": "B2", "topic": "pronominal", "q": "Elle ___ compte de son erreur trop tard.", "options": ["s'est rendue", "se sont rendus", "s'est rendu", "est rendue"], "a": 2, "expl": "In se rendre compte, « compte » is the direct object and it follows the verb, so the participle never agrees: elle s'est rendu compte."},
  {"id": "g137", "level": "B2", "topic": "pronominal", "q": "Qui ___ des inscriptions cette année ?", "options": ["s'occupe", "s'agit", "se passe", "se trouve"], "a": 0, "expl": "S'occuper de = to handle, to be in charge of. Il s'agit de is impersonal and cannot take « qui »; se passer means to happen; se trouver means to be located."},
  {"id": "g138", "level": "B2", "topic": "pronominal", "q": "Les riverains ___ du bruit des travaux depuis mars.", "options": ["se sont plaint", "sont plaints", "ont plaint", "se sont plaints"], "a": 3, "expl": "Se plaindre de exists only in the pronominal form, so the participle always agrees with the subject: ils se sont plaints."},
  {"id": "g139", "level": "B2", "topic": "pronominal", "q": "Ne ___ pas, monsieur : votre dossier est complet.", "options": ["nous inquiétons", "t'inquiète", "vous inquiétez", "s'inquiètent"], "a": 2, "expl": "In a negative imperative the reflexive pronoun goes back in front of the verb: ne vous inquiétez pas. Vous, not tu, with someone you address as monsieur."},
  {"id": "g140", "level": "C1", "topic": "pronominal", "q": "Les contraintes qu'elle s'est ___ n'ont pas suffi.", "options": ["imposées", "imposé", "imposés", "imposée"], "a": 0, "expl": "S'imposer quelque chose: se is indirect (to oneself), so agreement is with the preceding direct object « que » = les contraintes, feminine plural."},
  {"id": "g141", "level": "A2", "topic": "subjunctive", "q": "Il faut qu'elle ___ à la commune avant midi.", "options": ["vais", "irai", "aille", "allais"], "a": 2, "expl": "Il faut que always takes the subjunctive. Aller is irregular there: que j'aille, que tu ailles, qu'elle aille — but que nous allions."},
  {"id": "g142", "level": "B1", "topic": "subjunctive", "q": "Bien qu'elle ___ belge, elle parle grec à la maison.", "options": ["est", "soit", "sera", "était"], "a": 1, "expl": "Bien que and quoique always take the subjunctive, even when the fact is certain. Concession triggers the mood, not doubt."},
  {"id": "g143", "level": "B1", "topic": "subjunctive", "q": "Je reste jusqu'à dix-huit heures pour que tu ___ passer prendre les clés.", "options": ["peux", "puisses", "pourras", "pouvais"], "a": 1, "expl": "Pour que + subjunctive, because the purpose is not yet a fact. With the same subject you would drop que and use pour + infinitive."},
  {"id": "g144", "level": "B1", "topic": "subjunctive", "q": "Téléphone-lui avant qu'il ___ du bureau.", "options": ["part", "parte", "partait", "partira"], "a": 1, "expl": "Avant que takes the subjunctive; après que officially takes the indicative, because what follows it has actually happened."},
  {"id": "g145", "level": "B1", "topic": "subjunctive", "q": "Il faut que nous ___ le formulaire avant le 30 juin.", "options": ["remplissons", "remplissions", "remplirons", "remplissiez"], "a": 1, "expl": "The nous subjunctive of -ir verbs looks like the imparfait: que nous remplissions. « Remplissons » is the indicative present."},
  {"id": "g146", "level": "B1", "topic": "subjunctive", "q": "Je suis content que vous ___ venir.", "options": ["puissiez", "pouvez", "pourrez", "pouviez"], "a": 0, "expl": "Verbs of emotion (être content / heureux / désolé que) take the subjunctive. Pouvoir is irregular: que je puisse, que vous puissiez."},
  {"id": "g147", "level": "B2", "topic": "subjunctive", "q": "Bien que le budget ___ voté, les recrutements n'ont pas commencé.", "options": ["ait été", "a été", "avait été", "aura été"], "a": 0, "expl": "Bien que + subjunctive; because the vote is already over, the past subjunctive is used: ait été voté."},
  {"id": "g148", "level": "B2", "topic": "subjunctive", "q": "Nous attendrons qu'ils ___ leur position par écrit.", "options": ["confirmeront", "confirment", "confirmaient", "ont confirmé"], "a": 1, "expl": "Attendre que takes the subjunctive — French never puts a future after it, even though English says « until they confirm »."},
  {"id": "g149", "level": "B2", "topic": "subjunctive", "q": "Il est peu probable que la commune ___ une dérogation.", "options": ["accordera", "accorde", "accorderait", "accordait"], "a": 1, "expl": "Il est peu probable que expresses doubt → subjunctive. Note the asymmetry: il est probable que takes the indicative."},
  {"id": "g150", "level": "B2", "topic": "subjunctive", "q": "Pour que le dossier ___ recevable, il manque une attestation de domicile.", "options": ["est", "serait", "était", "soit"], "a": 3, "expl": "Pour que + subjunctive marks an aim not yet reached. « Pour être recevable » (infinitive) would be used if the subject were the same in both halves."},
  {"id": "g151", "level": "B2", "topic": "subjunctive", "q": "Avant que le règlement n'___ en vigueur, chaque commune appliquait ses propres règles.", "options": ["entre", "entrait", "est entré", "entrera"], "a": 0, "expl": "Avant que + subjunctive. The « ne » here is explétif — a stylistic ne with no negative meaning; « n'entre » does not mean does not enter."},
  {"id": "g152", "level": "B2", "topic": "subjunctive", "q": "Il faudrait que vous ___ vous-même la demande.", "options": ["feriez", "faites", "ferez", "fassiez"], "a": 3, "expl": "Il faudrait que still takes the subjunctive — the conditional softens the obligation but does not change the mood. Faire: que je fasse, que vous fassiez."},
  {"id": "g153", "level": "B2", "topic": "subjunctive", "q": "Bien qu'il ___ tout le dossier, il n'a rien trouvé.", "options": ["ait relu", "avait relu", "a relu", "aurait relu"], "a": 0, "expl": "Subjunctive after bien que, and past subjunctive because the rereading came before the result: qu'il ait relu."},
  {"id": "g154", "level": "C1", "topic": "subjunctive", "q": "Où que vous ___ affecté, la prime d'expatriation reste la même.", "options": ["seriez", "êtes", "serez", "soyez"], "a": 3, "expl": "The concessive series où que, quoi que, qui que, quel que all take the subjunctive: wherever, whatever, whoever."},
  {"id": "g155", "level": "C1", "topic": "subjunctive", "q": "Il n'est pas certain que cette clause ___ invoquée devant la Cour.", "options": ["ait été", "a été", "avait été", "aurait été"], "a": 0, "expl": "Être certain que takes the indicative, but the negative n'être pas certain que introduces doubt and switches to the subjunctive — here past subjunctive."},
  {"id": "g156", "level": "A2", "topic": "pronouns", "q": "Tu as des tickets de tram ? — Oui, j'___ ai dix.", "options": ["le", "les", "y", "en"], "a": 3, "expl": "En replaces a quantity or de + noun. With a number the noun disappears but en stays: j'en ai dix."},
  {"id": "g157", "level": "A2", "topic": "pronouns", "q": "Tu connais Madame Dupont ? — Oui, je ___ connais bien.", "options": ["la", "lui", "y", "en"], "a": 0, "expl": "Connaître takes a direct object, so the pronoun is le/la/les. Lui is only for verbs built with à."},
  {"id": "g158", "level": "A2", "topic": "pronouns", "q": "Tu as téléphoné au propriétaire ? — Oui, je ___ ai téléphoné hier.", "options": ["l'", "lui", "y", "en"], "a": 1, "expl": "Téléphoner À quelqu'un, so the object is indirect: lui (singular), leur (plural). English « phone him » hides the preposition French keeps."},
  {"id": "g159", "level": "B1", "topic": "pronouns", "q": "Le contrat ? Je ___ ai envoyé hier.", "options": ["le leur", "leur le", "les leur", "le les"], "a": 0, "expl": "With two third-person pronouns the direct object comes first: le/la/les then lui/leur. Order: je le leur ai envoyé."},
  {"id": "g160", "level": "B1", "topic": "pronouns", "q": "Tu me prêtes ton stylo ? — Oui, je ___ prête.", "options": ["te le", "le te", "t'en", "le toi"], "a": 0, "expl": "When one pronoun is me/te/nous/vous, that one comes first: je te le prête. The order flips only with lui/leur."},
  {"id": "g161", "level": "B1", "topic": "pronouns", "q": "Des places pour le concert, il ___ reste encore quelques-unes.", "options": ["les", "y", "en", "leur"], "a": 2, "expl": "Il reste DES places → en. « Il y en reste » keeps both: y for the location idea in il y a, en for the partitive."},
  {"id": "g162", "level": "B2", "topic": "pronouns", "q": "Ces documents, envoie-___ dès que possible.", "options": ["moi-les", "les-moi", "me-les", "les-me"], "a": 1, "expl": "In the affirmative imperative the pronouns go after the verb, direct object first, and me becomes the stressed moi: envoie-les-moi."},
  {"id": "g163", "level": "B2", "topic": "pronouns", "q": "Le chef d'unité ignore ce problème : il faut que tu ___ parles.", "options": ["lui en", "en lui", "l'en", "y en"], "a": 0, "expl": "Parler DE quelque chose À quelqu'un → en + lui. Y and en always come last, and lui precedes en: tu lui en parles."},
  {"id": "g164", "level": "B2", "topic": "pronouns", "q": "Cette décision, elle ___ attendait depuis longtemps.", "options": ["s'en", "se l'", "l'y", "s'y"], "a": 3, "expl": "S'attendre À quelque chose, so the pronoun is y, not en: elle s'y attendait. S'en occuper would take en, because it is s'occuper de."},
  {"id": "g165", "level": "C1", "topic": "pronouns", "q": "Il ___ est fallu de peu que le texte soit rejeté.", "options": ["en", "s'y", "s'en", "se"], "a": 2, "expl": "« Il s'en est fallu de peu que + subjonctif » = it was a close thing. The impersonal expression is frozen: both se and en are obligatory."},
  {"id": "g166", "level": "A2", "topic": "relative", "q": "C'est le tram ___ va à Schaerbeek.", "options": ["dont", "que", "qui", "où"], "a": 2, "expl": "Qui is the subject of the relative clause and is followed directly by a verb. Que is the object and is followed by a subject."},
  {"id": "g167", "level": "B1", "topic": "relative", "q": "Voici la commune ___ j'ai fait ma déclaration de domicile.", "options": ["que", "dont", "où", "qui"], "a": 2, "expl": "Où covers place and also time (le jour où). Que would need the commune to be the direct object of « faire », which it is not."},
  {"id": "g168", "level": "B1", "topic": "relative", "q": "Le collègue ___ tu as rencontré hier travaille à la DG EMPL.", "options": ["que", "qui", "dont", "où"], "a": 0, "expl": "Rencontrer takes a direct object and « tu » is already the subject, so the relative is que. Test: qui + verb, que + subject + verb."},
  {"id": "g169", "level": "B2", "topic": "relative", "q": "C'est un dossier ___ personne ne veut s'occuper.", "options": ["que", "qui", "dont", "auquel"], "a": 2, "expl": "Dont replaces de + noun, and s'occuper DE quelque chose needs de. Auquel would fit a verb built with à, such as s'intéresser."},
  {"id": "g170", "level": "B2", "topic": "relative", "q": "La réunion à ___ tu penses a été reportée.", "options": ["lequel", "qui", "laquelle", "quoi"], "a": 2, "expl": "After a preposition, things take lequel/laquelle/lesquels/lesquelles, agreeing with the noun — la réunion is feminine. Qui after a preposition is for people only."},
  {"id": "g171", "level": "B2", "topic": "relative", "q": "Le service ___ dépend cette autorisation est fermé le vendredi.", "options": ["dont", "où", "que", "qui"], "a": 0, "expl": "Dépendre DE quelque chose → dont. Note the inversion that follows: dont dépend cette autorisation, normal in a written relative clause."},
  {"id": "g172", "level": "B2", "topic": "relative", "q": "Les collègues avec ___ je travaille sont très disponibles.", "options": ["que", "qui", "dont", "quoi"], "a": 1, "expl": "After a preposition, people take qui: avec qui, pour qui, chez qui. Quoi is only used with things and no antecedent (ce à quoi)."},
  {"id": "g173", "level": "C1", "topic": "relative", "q": "Il a démissionné, ___ personne ne s'attendait.", "options": ["ce qui", "ce que", "ce dont", "ce à quoi"], "a": 3, "expl": "The antecedent is the whole preceding clause, hence ce; s'attendre À gives à quoi. Ce dont would suit s'apercevoir de, ce que a verb with a direct object."},
  {"id": "g174", "level": "A2", "topic": "articles", "q": "Le matin, je prends ___ café et une tartine.", "options": ["du", "de la", "des", "de"], "a": 0, "expl": "Partitive article for an unmeasured quantity: du (masculine), de la (feminine), de l' before a vowel. Café is masculine, so du café."},
  {"id": "g175", "level": "A2", "topic": "articles", "q": "Il n'y a plus ___ lait dans le frigo.", "options": ["du", "le", "des", "de"], "a": 3, "expl": "After a negation the partitive and the indefinite article both collapse to de: je bois du lait → je ne bois pas de lait."},
  {"id": "g176", "level": "B1", "topic": "articles", "q": "J'ai acheté un kilo ___ tomates au marché de Flagey.", "options": ["des", "de", "du", "les"], "a": 1, "expl": "After an expression of quantity (un kilo, beaucoup, peu, assez), French uses bare de with no article: un kilo de tomates."},
  {"id": "g177", "level": "B1", "topic": "articles", "q": "Elle joue ___ piano depuis dix ans.", "options": ["au", "du", "de", "le"], "a": 1, "expl": "Jouer DE + instrument (jouer du piano, de la guitare); jouer À + game or sport (jouer au foot). The contracted article is required."},
  {"id": "g178", "level": "B2", "topic": "articles", "q": "Ce sont ___ solides arguments.", "options": ["des", "du", "les", "de"], "a": 3, "expl": "When a plural adjective comes before the noun, des reduces to de in careful French: de bons résultats, de solides arguments."},
  {"id": "g179", "level": "B2", "topic": "articles", "q": "Il a fait preuve ___ patience remarquable.", "options": ["d'", "de la", "de", "d'une"], "a": 3, "expl": "Faire preuve de + bare noun, but once the noun carries an adjective it needs the indefinite article: faire preuve d'une patience remarquable."},
  {"id": "g180", "level": "C1", "topic": "articles", "q": "La commune manque ___ personnel qualifié.", "options": ["du", "de", "des", "de la"], "a": 1, "expl": "Manquer de + noun takes no article when the noun is general: manquer de temps, de moyens, de personnel. « Manquer du personnel » would point to one specific set of staff."}
];
