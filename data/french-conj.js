/* French conjugation bank — verb drills, CEFR-tagged. */
"use strict";

const FRENCH_CONJ = [
  {
    "id": "c001",
    "level": "A2",
    "q": "Nous ___ (être) en réunion jusqu'à midi.",
    "options": [
      "sommes",
      "êtes",
      "sont",
      "es"
    ],
    "a": 0,
    "expl": "Être au présent : je suis, tu es, il est, nous sommes, vous êtes, ils sont."
  },
  {
    "id": "c002",
    "level": "A2",
    "q": "Ils ___ (avoir) beaucoup de travail cette semaine.",
    "options": [
      "ont",
      "sont",
      "avons",
      "avez"
    ],
    "a": 0,
    "expl": "Avoir au présent : ils ont."
  },
  {
    "id": "c003",
    "level": "A2",
    "q": "Je ___ (aller) au bureau en tram.",
    "options": [
      "vais",
      "va",
      "vas",
      "aille"
    ],
    "a": 0,
    "expl": "Aller au présent : je vais, tu vas, il va, nous allons, vous allez, ils vont."
  },
  {
    "id": "c004",
    "level": "A2",
    "q": "Vous ___ (faire) une pause à quelle heure ?",
    "options": [
      "faites",
      "faisez",
      "font",
      "fait"
    ],
    "a": 0,
    "expl": "Faire au présent : vous faites (irregular — never 'faisez')."
  },
  {
    "id": "c005",
    "level": "A2",
    "q": "Elle ne ___ (pouvoir) pas venir aujourd'hui.",
    "options": [
      "peut",
      "peux",
      "pouvez",
      "puisse"
    ],
    "a": 0,
    "expl": "Pouvoir au présent : je peux, tu peux, il/elle peut."
  },
  {
    "id": "c006",
    "level": "A2",
    "q": "Nous ___ (vouloir) commencer plus tôt demain.",
    "options": [
      "voulons",
      "veulent",
      "voulez",
      "veut"
    ],
    "a": 0,
    "expl": "Vouloir au présent : nous voulons."
  },
  {
    "id": "c007",
    "level": "A2",
    "q": "Tu ___ (devoir) confirmer avant vendredi.",
    "options": [
      "dois",
      "doit",
      "devez",
      "doives"
    ],
    "a": 0,
    "expl": "Devoir au présent : je dois, tu dois, il doit."
  },
  {
    "id": "c008",
    "level": "A2",
    "q": "Ils ___ (prendre) le train de huit heures.",
    "options": [
      "prennent",
      "prendent",
      "prenons",
      "prend"
    ],
    "a": 0,
    "expl": "Prendre au présent : ils prennent (double n in the plural)."
  },
  {
    "id": "c009",
    "level": "A2",
    "q": "Elle ___ (venir) de Thessalonique.",
    "options": [
      "vient",
      "viens",
      "venez",
      "vienne"
    ],
    "a": 0,
    "expl": "Venir au présent : il/elle vient."
  },
  {
    "id": "c010",
    "level": "A2",
    "q": "Je ___ (voir) le problème dans le tableau.",
    "options": [
      "vois",
      "voit",
      "voie",
      "voyez"
    ],
    "a": 0,
    "expl": "Voir au présent : je vois, tu vois, il voit."
  },
  {
    "id": "c011",
    "level": "A2",
    "q": "Hier, nous ___ (finir) le rapport.",
    "options": [
      "avons fini",
      "avons finis",
      "sommes finis",
      "finissons"
    ],
    "a": 0,
    "expl": "Passé composé with avoir: nous avons fini — no agreement without a preceding direct object."
  },
  {
    "id": "c012",
    "level": "A2",
    "q": "Elle ___ (partir) avant la fin de la réunion.",
    "options": [
      "est partie",
      "a parti",
      "est parti",
      "a partie"
    ],
    "a": 0,
    "expl": "Partir takes être; the participle agrees: elle est partie."
  },
  {
    "id": "c013",
    "level": "A2",
    "q": "J'___ (recevoir) votre message ce matin.",
    "options": [
      "ai reçu",
      "ai recevé",
      "suis reçu",
      "ai reçois"
    ],
    "a": 0,
    "expl": "Recevoir → participe passé 'reçu' (with ç): j'ai reçu."
  },
  {
    "id": "c014",
    "level": "A2",
    "q": "Nous ___ (voir) ce dossier la semaine dernière.",
    "options": [
      "avons vu",
      "avons vus",
      "sommes vus",
      "voyons"
    ],
    "a": 0,
    "expl": "Voir → vu: nous avons vu."
  },
  {
    "id": "c015",
    "level": "A2",
    "q": "Tu ___ (répondre) au client hier ?",
    "options": [
      "as répondu",
      "es répondu",
      "as répondé",
      "réponds"
    ],
    "a": 0,
    "expl": "Répondre → répondu, with avoir: tu as répondu."
  },
  {
    "id": "c016",
    "level": "A2",
    "q": "Ils ___ (arriver) en retard ce matin.",
    "options": [
      "sont arrivés",
      "ont arrivé",
      "sont arrivé",
      "ont arrivés"
    ],
    "a": 0,
    "expl": "Arriver takes être; plural agreement: ils sont arrivés."
  },
  {
    "id": "c017",
    "level": "A2",
    "q": "Demain, elle ___ (présenter) le projet à l'équipe.",
    "options": [
      "va présenter",
      "va présente",
      "présente demain",
      "allez présenter"
    ],
    "a": 0,
    "expl": "Futur proche = aller + infinitive: elle va présenter."
  },
  {
    "id": "c018",
    "level": "A2",
    "q": "___ (écouter) bien les instructions !",
    "options": [
      "Écoutez",
      "Écoutes",
      "Écouter",
      "Écoutent"
    ],
    "a": 0,
    "expl": "Vous-imperative of -er verbs: Écoutez ! (Tu-form drops the s: écoute !)"
  },
  {
    "id": "c019",
    "level": "A2",
    "q": "Nous ___ (lire) les documents avant chaque réunion.",
    "options": [
      "lisons",
      "lissons",
      "lions",
      "lisez"
    ],
    "a": 0,
    "expl": "Lire au présent : nous lisons."
  },
  {
    "id": "c020",
    "level": "A2",
    "q": "Il ___ (mettre) toujours ses dossiers sur le bureau.",
    "options": [
      "met",
      "mets",
      "mette",
      "mettez"
    ],
    "a": 0,
    "expl": "Mettre au présent : il met (je mets, tu mets — with s)."
  },
  {
    "id": "c021",
    "level": "B1",
    "q": "Avant, je ___ (travailler) dans le secteur privé.",
    "options": [
      "travaillais",
      "ai travaillé",
      "travaillerai",
      "travaille"
    ],
    "a": 0,
    "expl": "Past habit/state → imparfait: je travaillais."
  },
  {
    "id": "c022",
    "level": "B1",
    "q": "Quand il est entré, nous ___ (discuter) du budget.",
    "options": [
      "discutions",
      "avons discuté",
      "discuterons",
      "discutons"
    ],
    "a": 0,
    "expl": "Ongoing background action → imparfait: nous discutions."
  },
  {
    "id": "c023",
    "level": "B1",
    "q": "L'année prochaine, je ___ (être) prêt pour le concours.",
    "options": [
      "serai",
      "serais",
      "suis",
      "étais"
    ],
    "a": 0,
    "expl": "Futur simple of être: je serai. (Je serais = conditional.)"
  },
  {
    "id": "c024",
    "level": "B1",
    "q": "Nous ___ (avoir) les résultats en septembre.",
    "options": [
      "aurons",
      "avons",
      "aurions",
      "ayons"
    ],
    "a": 0,
    "expl": "Futur simple of avoir: nous aurons."
  },
  {
    "id": "c025",
    "level": "B1",
    "q": "Elle ___ (aller) à Luxembourg le mois prochain.",
    "options": [
      "ira",
      "va",
      "irait",
      "aille"
    ],
    "a": 0,
    "expl": "Futur simple of aller: elle ira (stem ir-)."
  },
  {
    "id": "c026",
    "level": "B1",
    "q": "Vous ___ (pouvoir) poser vos questions à la fin.",
    "options": [
      "pourrez",
      "pouvez",
      "pourriez",
      "puissiez"
    ],
    "a": 0,
    "expl": "Futur simple of pouvoir: vous pourrez (double r)."
  },
  {
    "id": "c027",
    "level": "B1",
    "q": "Ils ___ (venir) nous voir la semaine prochaine.",
    "options": [
      "viendront",
      "viennent",
      "viendraient",
      "venaient"
    ],
    "a": 0,
    "expl": "Futur simple of venir: ils viendront (stem viendr-)."
  },
  {
    "id": "c028",
    "level": "B1",
    "q": "Je ___ (faire) ce travail demain sans faute.",
    "options": [
      "ferai",
      "ferais",
      "fais",
      "fasse"
    ],
    "a": 0,
    "expl": "Futur simple of faire: je ferai (stem fer-)."
  },
  {
    "id": "c029",
    "level": "B1",
    "q": "À ta place, je ___ (demander) une explication.",
    "options": [
      "demanderais",
      "demanderai",
      "demande",
      "demandais"
    ],
    "a": 0,
    "expl": "Hypothetical advice → conditionnel présent: je demanderais."
  },
  {
    "id": "c030",
    "level": "B1",
    "q": "___-vous m'envoyer le document, s'il vous plaît ?",
    "options": [
      "Pourriez",
      "Pourrez",
      "Pouviez",
      "Puissiez"
    ],
    "a": 0,
    "expl": "Polite request → conditionnel: Pourriez-vous… ?"
  },
  {
    "id": "c031",
    "level": "B1",
    "q": "Il faut que nous ___ (être) à l'heure.",
    "options": [
      "soyons",
      "sommes",
      "serons",
      "étions"
    ],
    "a": 0,
    "expl": "Il faut que + subjonctif: que nous soyons."
  },
  {
    "id": "c032",
    "level": "B1",
    "q": "Je voudrais que tu ___ (avoir) plus de temps.",
    "options": [
      "aies",
      "as",
      "auras",
      "avais"
    ],
    "a": 0,
    "expl": "Vouloir que + subjonctif: que tu aies."
  },
  {
    "id": "c033",
    "level": "B1",
    "q": "Il est important qu'elle ___ (faire) cet exercice chaque jour.",
    "options": [
      "fasse",
      "fait",
      "fera",
      "faisait"
    ],
    "a": 0,
    "expl": "Impersonal judgement + que → subjonctif: qu'elle fasse."
  },
  {
    "id": "c034",
    "level": "B1",
    "q": "Je ne pense pas qu'il ___ (pouvoir) tout finir aujourd'hui.",
    "options": [
      "puisse",
      "peut",
      "pourra",
      "pouvait"
    ],
    "a": 0,
    "expl": "Negative opinion → subjonctif: qu'il puisse."
  },
  {
    "id": "c035",
    "level": "B1",
    "q": "Il faut que vous ___ (aller) au guichet trois.",
    "options": [
      "alliez",
      "allez",
      "irez",
      "êtes allés"
    ],
    "a": 0,
    "expl": "Subjonctif of aller: que vous alliez."
  },
  {
    "id": "c036",
    "level": "B1",
    "q": "Elles se ___ (lever) tôt tous les jours quand elles étaient étudiantes.",
    "options": [
      "levaient",
      "sont levées",
      "lèvent",
      "lèveront"
    ],
    "a": 0,
    "expl": "Repeated past habit ('tous les jours') in a past frame → imparfait: elles se levaient."
  },
  {
    "id": "c037",
    "level": "B1",
    "q": "Nous ___ (savoir) la réponse dès demain.",
    "options": [
      "saurons",
      "savons",
      "saurions",
      "sachions"
    ],
    "a": 0,
    "expl": "Futur simple of savoir: nous saurons (stem saur-)."
  },
  {
    "id": "c038",
    "level": "B1",
    "q": "Si tu venais plus tôt, on ___ (avoir) le temps de tout revoir.",
    "options": [
      "aurait",
      "aura",
      "a",
      "avait"
    ],
    "a": 0,
    "expl": "Si + imparfait → conditionnel: on aurait le temps."
  },
  {
    "id": "c039",
    "level": "B1",
    "q": "Elle ___ (s'inscrire) au concours il y a deux semaines.",
    "options": [
      "s'est inscrite",
      "s'a inscrit",
      "s'est inscrit",
      "s'était inscrire"
    ],
    "a": 0,
    "expl": "Pronominal verbs take être; agreement with the subject: elle s'est inscrite."
  },
  {
    "id": "c040",
    "level": "B1",
    "q": "Quand j'étais étudiant, nous ___ (devoir) rendre un mémoire chaque année.",
    "options": [
      "devions",
      "avons dû",
      "devrons",
      "devrions"
    ],
    "a": 0,
    "expl": "Recurring past obligation → imparfait: nous devions."
  },
  {
    "id": "c041",
    "level": "B2",
    "q": "Quand je suis arrivé, ils ___ (déjà terminer) la présentation.",
    "options": [
      "avaient déjà terminé",
      "ont déjà terminé",
      "avaient déjà terminés",
      "terminaient déjà"
    ],
    "a": 0,
    "expl": "Action before another past action → plus-que-parfait: ils avaient déjà terminé."
  },
  {
    "id": "c042",
    "level": "B2",
    "q": "Sans ton aide, je n'___ (jamais réussir).",
    "options": [
      "aurais jamais réussi",
      "aurai jamais réussi",
      "ai jamais réussi",
      "avais jamais réussi"
    ],
    "a": 0,
    "expl": "Unreal past outcome → conditionnel passé: je n'aurais jamais réussi."
  },
  {
    "id": "c043",
    "level": "B2",
    "q": "Je suis content que tu ___ (obtenir) ce poste.",
    "options": [
      "aies obtenu",
      "as obtenu",
      "aurais obtenu",
      "obtiennes"
    ],
    "a": 0,
    "expl": "Emotion about a completed action → subjonctif passé: que tu aies obtenu."
  },
  {
    "id": "c044",
    "level": "B2",
    "q": "Nous vous contacterons dès que nous ___ (recevoir) les résultats.",
    "options": [
      "aurons reçu",
      "avons reçu",
      "recevions",
      "aurions reçu"
    ],
    "a": 0,
    "expl": "Future action completed before another → futur antérieur: dès que nous aurons reçu."
  },
  {
    "id": "c045",
    "level": "B2",
    "q": "Elle a amélioré son niveau ___ (pratiquer) tous les matins.",
    "options": [
      "en pratiquant",
      "en pratiquer",
      "pratiquant de",
      "à pratiquant"
    ],
    "a": 0,
    "expl": "Means → gérondif: en pratiquant."
  },
  {
    "id": "c046",
    "level": "B2",
    "q": "Les candidats ___ (convoquer) recevront un courriel demain.",
    "options": [
      "convoqués",
      "convoquant",
      "convoqué",
      "en convoquant"
    ],
    "a": 0,
    "expl": "Past participle as adjective, agreeing with 'candidats': les candidats convoqués."
  },
  {
    "id": "c047",
    "level": "B2",
    "q": "Le rapport ___ (examiner) par le comité en ce moment même.",
    "options": [
      "est examiné",
      "a examiné",
      "est examinant",
      "examine"
    ],
    "a": 0,
    "expl": "Passive présent: le rapport est examiné (par le comité)."
  },
  {
    "id": "c048",
    "level": "B2",
    "q": "La directive ___ (adopter) l'année prochaine si le vote réussit.",
    "options": [
      "sera adoptée",
      "sera adopté",
      "serait adoptée",
      "est adoptée"
    ],
    "a": 0,
    "expl": "Passive future + feminine agreement: la directive sera adoptée."
  },
  {
    "id": "c049",
    "level": "B2",
    "q": "Quel temps littéraire reconnaissez-vous dans « il fut » ?",
    "options": [
      "Le passé simple",
      "L'imparfait",
      "Le passé antérieur",
      "Le subjonctif imparfait"
    ],
    "a": 0,
    "expl": "'Il fut' is the passé simple of être — a written/literary tense you must recognise at B2, not produce."
  },
  {
    "id": "c050",
    "level": "B2",
    "q": "« Elle ___ (venir) me voir ce soir-là » — version passé simple :",
    "options": [
      "vint",
      "venait",
      "est venue",
      "viendra"
    ],
    "a": 0,
    "expl": "Venir au passé simple: elle vint (je vins, il vint, ils vinrent)."
  },
  {
    "id": "c051",
    "level": "B2",
    "q": "Il se peut que le projet ___ (être) retardé.",
    "options": [
      "soit",
      "est",
      "sera",
      "serait"
    ],
    "a": 0,
    "expl": "'Il se peut que' (possibility) → subjonctif: que le projet soit retardé."
  },
  {
    "id": "c052",
    "level": "B2",
    "q": "Après qu'il ___ (partir), la discussion a continué.",
    "options": [
      "est parti",
      "soit parti",
      "parte",
      "partait"
    ],
    "a": 0,
    "expl": "Prescriptively, 'après que' takes the INDICATIVE (the action is real): après qu'il est parti — a classic trap, unlike 'avant que' + subjonctif."
  },
  {
    "id": "c053",
    "level": "B2",
    "q": "Si nous avions su, nous ___ (venir) plus tôt.",
    "options": [
      "serions venus",
      "serons venus",
      "sommes venus",
      "viendrions"
    ],
    "a": 0,
    "expl": "Si + plus-que-parfait → conditionnel passé (être verb): nous serions venus."
  },
  {
    "id": "c054",
    "level": "B2",
    "q": "Je crains qu'elle n'___ (faire) une erreur dans le calcul.",
    "options": [
      "ait fait",
      "a fait",
      "aura fait",
      "avait fait"
    ],
    "a": 0,
    "expl": "Craindre que + subjonctif passé for a completed action: qu'elle n'ait fait (expletive 'ne')."
  },
  {
    "id": "c055",
    "level": "B2",
    "q": "___ (avoir) validé toutes les étapes, vous recevrez une attestation.",
    "options": [
      "Ayant",
      "Avoir",
      "En ayant",
      "Ayez"
    ],
    "a": 0,
    "expl": "Participle clause with past infinitive value: Ayant validé toutes les étapes…"
  },
  {
    "id": "c056",
    "level": "B2",
    "q": "Les erreurs que j'ai ___ (corriger) hier ne figurent plus dans le texte.",
    "options": [
      "corrigées",
      "corrigé",
      "corrigés",
      "corrigée"
    ],
    "a": 0,
    "expl": "Preceding direct object 'que' (= les erreurs, fem. pl.) → agreement: que j'ai corrigées."
  },
  {
    "id": "c057",
    "level": "B2",
    "q": "Il est peu probable que nous ___ (finir) avant l'échéance.",
    "options": [
      "ayons fini",
      "avons fini",
      "aurons fini",
      "finirons"
    ],
    "a": 0,
    "expl": "'Peu probable que' → subjonctif (passé here for completion): que nous ayons fini."
  },
  {
    "id": "c058",
    "level": "B2",
    "q": "Elle parlait comme si elle ___ (connaître) déjà la décision.",
    "options": [
      "connaissait",
      "connaisse",
      "connaîtrait",
      "a connu"
    ],
    "a": 0,
    "expl": "'Comme si' + imparfait (never subjunctive): comme si elle connaissait."
  },
  {
    "id": "c059",
    "level": "B2",
    "q": "Quoi qu'il ___ (advenir), le calendrier sera maintenu.",
    "options": [
      "advienne",
      "advient",
      "adviendra",
      "advenait"
    ],
    "a": 0,
    "expl": "'Quoi que' + subjonctif: quoi qu'il advienne — whatever happens."
  },
  {
    "id": "c060",
    "level": "B2",
    "q": "Une fois le budget ___ (approuver), les paiements commenceront.",
    "options": [
      "approuvé",
      "approuvée",
      "approuvant",
      "approuver"
    ],
    "a": 0,
    "expl": "'Une fois' + past participle agreeing with 'budget' (masc.): une fois le budget approuvé."
  }
];
