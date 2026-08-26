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
  },
  {"id": "c061", "level": "A2", "q": "Je ne ___ (savoir) pas où se trouve le guichet.", "options": ["sait", "savons", "sais", "savez"], "a": 2, "expl": "Savoir au présent : je sais, tu sais, il/elle sait, nous savons, vous savez, ils savent. Je and il sound identical but are spelled -s and -t."},
  {"id": "c062", "level": "A2", "q": "Vous ___ (dire) toujours la même chose.", "options": ["dis", "disez", "disent", "dites"], "a": 3, "expl": "Dire is one of only three verbs with an irregular vous form: vous dites, vous faites, vous êtes. « Disez » does not exist."},
  {"id": "c063", "level": "A2", "q": "Nous ___ (écrire) un courriel au service du personnel.", "options": ["écrions", "écrivons", "écrivez", "écrit"], "a": 1, "expl": "Écrire adds -v- in the plural: nous écrivons, vous écrivez, ils écrivent. The singular has no -v-: j'écris."},
  {"id": "c064", "level": "A2", "q": "Ils ___ (boire) un café à la machine avant la réunion.", "options": ["buvent", "boivent", "boient", "boivons"], "a": 1, "expl": "Boire has two stems: boi- in the singular and ils (je bois, ils boivent) and buv- for nous/vous (nous buvons). Ils boivent, never « ils buvent »."},
  {"id": "c065", "level": "A2", "q": "Tu ___ (sortir) à quelle heure ce soir ?", "options": ["sort", "sortes", "sortis", "sors"], "a": 3, "expl": "Sortir drops the -t- of the stem in the singular: je sors, tu sors, il sort. The -t- comes back in the plural: nous sortons."},
  {"id": "c066", "level": "A2", "q": "Ils ___ (connaître) bien le quartier européen.", "options": ["connaissent", "connaîtent", "connaît", "connaissons"], "a": 0, "expl": "Verbs in -aître take the long stem -aiss- in the plural: nous connaissons, ils connaissent. Only the singular il connaît keeps the circumflex."},
  {"id": "c067", "level": "A2", "q": "Je ___ (mettre) mon manteau, il drache dehors.", "options": ["met", "mets", "mettes", "mettais"], "a": 1, "expl": "Mettre : je mets, tu mets, il met. « Une drache » is Belgian French for a downpour; in France you would say « une averse »."},
  {"id": "c068", "level": "A2", "q": "Vous ___ (offrir) toujours des fleurs à vos hôtes ?", "options": ["offrissez", "offrez", "offrent", "offre"], "a": 1, "expl": "Offrir, ouvrir and couvrir are -ir verbs conjugated like -er verbs in the present: j'offre, vous offrez, ils offrent."},
  {"id": "c069", "level": "A2", "q": "Nous ___ (se lever) à six heures pour prendre le train.", "options": ["se lèvent", "nous levons", "vous levez", "nous levions"], "a": 1, "expl": "With nous the reflexive pronoun is also nous: nous nous levons. Note the accent pattern: je me lève but nous nous levons."},
  {"id": "c070", "level": "A2", "q": "Elle ___ (s'appeler) Sofia et elle vient de Thessalonique.", "options": ["s'appelle", "s'appèle", "se appelle", "s'appellent"], "a": 0, "expl": "Appeler doubles the -l- when the ending is silent: je m'appelle, ils s'appellent, but nous nous appelons. Se elides to s' before a vowel."},
  {"id": "c071", "level": "A2", "q": "Elles ___ (rentrer) tard hier soir.", "options": ["ont rentré", "sont rentrés", "sont rentrées", "est rentrée"], "a": 2, "expl": "Rentrer is one of the movement verbs that take être, and the participle then agrees with the subject: elles sont rentrées."},
  {"id": "c072", "level": "A2", "q": "J'___ (prendre) le métro à Arts-Loi ce matin.", "options": ["ai prendu", "ai pris", "suis pris", "ai prise"], "a": 1, "expl": "Prendre has an irregular participle: pris. With avoir there is no agreement when no direct object comes before the verb."},
  {"id": "c073", "level": "A2", "q": "Nous ___ (partir) dans cinq minutes.", "options": ["allions partir", "allons partis", "irons partir", "allons partir"], "a": 3, "expl": "Futur proche = aller au présent + infinitif. The second verb never changes: nous allons partir."},
  {"id": "c074", "level": "A2", "q": "Vous ___ (devoir) présenter votre carte d'identité au guichet.", "options": ["doivez", "doivent", "devez", "dois"], "a": 2, "expl": "Devoir : je dois, tu dois, il doit, nous devons, vous devez, ils doivent. The doi- stem never reaches nous or vous."},
  {"id": "c075", "level": "A2", "q": "Ils ___ (venir) de Grèce mais ils habitent à Ixelles.", "options": ["venent", "vient", "viennent", "venons"], "a": 2, "expl": "Venir doubles the -n- in the third person plural: ils viennent, like tenir → ils tiennent. Nous venons keeps the short stem."},
  {"id": "c076", "level": "B1", "q": "Avant, nous ___ (faire) les courses le samedi matin.", "options": ["faisons", "faisions", "fesions", "ferions"], "a": 1, "expl": "Imparfait is built on the nous form of the present: nous faisons → fais- + -ions = nous faisions. It is spelled fais-, though it sounds like fe-."},
  {"id": "c077", "level": "B1", "q": "Il ___ (être) huit heures quand le tram est enfin arrivé.", "options": ["était", "fut", "est", "serait"], "a": 0, "expl": "Time and weather in the past go in the imparfait: il était huit heures, il faisait froid. « Fut » is passé simple, a written narrative tense."},
  {"id": "c078", "level": "B1", "q": "Nous ___ (croire) d'abord à une erreur du service.", "options": ["avons croyé", "sommes crus", "avons cru", "avons crut"], "a": 2, "expl": "Croire has the participle cru, with no -t and no -y-. The same short pattern gives boire → bu, lire → lu, voir → vu."},
  {"id": "c079", "level": "B1", "q": "Ils ___ (vivre) dix ans à Ixelles avant de partir.", "options": ["ont vivu", "ont vécus", "sont vécus", "ont vécu"], "a": 3, "expl": "Vivre → vécu, an irregular participle. Vivre takes avoir, and with avoir there is no agreement with the subject."},
  {"id": "c080", "level": "B1", "q": "J'___ (devoir) rentrer à pied : il n'y avait plus de tram.", "options": ["ai du", "ai dû", "ai devu", "suis dû"], "a": 1, "expl": "The participle of devoir is dû, with a circumflex to distinguish it from the article du. The accent disappears in the feminine and plural: due, dus."},
  {"id": "c081", "level": "B1", "q": "Elle ___ (venir) te chercher à la gare vers dix heures.", "options": ["venira", "viendrait", "viendra", "vient"], "a": 2, "expl": "Venir has an irregular future stem viendr- : je viendrai, elle viendra. Compare tenir → tiendra."},
  {"id": "c082", "level": "B1", "q": "Nous ___ (faire) le point lundi prochain.", "options": ["ferions", "faisons", "ferons", "ferrons"], "a": 2, "expl": "Future stem of faire is fer- : nous ferons. Ferions with -i- is the conditional, and ferrons with two -r- belongs to ferrer, to shoe a horse."},
  {"id": "c083", "level": "B1", "q": "Vous ___ (voir) la différence tout de suite.", "options": ["verrez", "verriez", "voyez", "voirez"], "a": 0, "expl": "Voir takes the double-r future stem verr- : je verrai, vous verrez. Envoyer behaves the same way: j'enverrai."},
  {"id": "c084", "level": "B1", "q": "Tu ___ (devoir) prendre rendez-vous en ligne.", "options": ["devrais", "devras", "doiveras", "dois"], "a": 1, "expl": "Future of devoir: devr- + -as = tu devras. The conditional devrais (-ais) would soften it to « you should »."},
  {"id": "c085", "level": "B1", "q": "Je ___ (pouvoir) passer demain matin, si cela vous convient.", "options": ["pourrai", "pouvais", "pourrais", "puisse"], "a": 2, "expl": "Conditionnel présent for a polite offer: je pourrais. Same stem as the future (pourr-) but with imparfait endings: -ais, -ais, -ait."},
  {"id": "c086", "level": "B1", "q": "Nous ___ (vouloir) réserver une salle pour jeudi.", "options": ["voudrions", "voudrons", "voulions", "veuillons"], "a": 0, "expl": "Conditional of vouloir for a polite request: nous voudrions. Voudrons is a plain future and sounds like a demand."},
  {"id": "c087", "level": "B1", "q": "Il faut qu'elle ___ (prendre) une décision avant vendredi.", "options": ["prend", "prennent", "prendra", "prenne"], "a": 3, "expl": "Subjunctive of prendre is built on the ils form: ils prennent → que je prenne, qu'elle prenne. Nous and vous use the short stem: que nous prenions."},
  {"id": "c088", "level": "B1", "q": "Je souhaite que vous ___ (venir) avec nous à la réception.", "options": ["veniez", "viendrez", "venez", "viendriez"], "a": 0, "expl": "The nous/vous subjunctive of venir uses the short stem and looks like the imparfait: que nous venions, que vous veniez."},
  {"id": "c089", "level": "B1", "q": "Ils ___ (se rencontrer) à la gare de Bruxelles-Midi.", "options": ["se sont rencontré", "ont rencontré", "se sont rencontrés", "sont rencontrés"], "a": 2, "expl": "Pronominal verbs take être. Rencontrer someone is direct, so the participle agrees with the subject: ils se sont rencontrés."},
  {"id": "c090", "level": "B1", "q": "Elles ___ (se téléphoner) tous les soirs pendant un an.", "options": ["ont téléphoné", "se sont téléphonées", "se sont téléphoné", "sont téléphonées"], "a": 2, "expl": "Téléphoner À quelqu'un, so the reciprocal se is indirect and the participle stays invariable: elles se sont téléphoné."},
  {"id": "c091", "level": "B1", "q": "Quand nous étions étudiants, nous ___ (s'inscrire) en ligne chaque année.", "options": ["nous inscrivons", "nous sommes inscrits", "nous inscririons", "nous inscrivions"], "a": 3, "expl": "A repeated past habit goes in the imparfait, and the reflexive pronoun stays: nous nous inscrivions."},
  {"id": "c092", "level": "B1", "q": "___ (se dépêcher), le tram arrive dans deux minutes !", "options": ["Dépêches-toi", "Dépêche-toi", "Te dépêche", "Dépêche-te"], "a": 1, "expl": "In the affirmative imperative the pronoun follows the verb and te becomes toi. The tu form of an -er verb loses its -s: dépêche-toi."},
  {"id": "c093", "level": "B1", "q": "Il m'a dit qu'il ___ (oublier) son badge à la maison.", "options": ["avait oublié", "avais oublié", "aurait oublié", "a oublié"], "a": 0, "expl": "Plus-que-parfait = imparfait of avoir/être + participle. It places an event before another past event: il avait oublié, puis il m'a dit."},
  {"id": "c094", "level": "B1", "q": "À l'époque, nous ___ (avoir) un bureau près du rond-point Schuman.", "options": ["avons", "aurions", "avions", "eûmes"], "a": 2, "expl": "Imparfait of avoir: j'avais, nous avions. Avions is also a noun (planes) — context and the auxiliary decide."},
  {"id": "c095", "level": "B1", "q": "Vous ___ (pouvoir) consulter votre dossier en ligne dès lundi.", "options": ["pouvez", "pourriez", "pouviez", "pourrez"], "a": 3, "expl": "Futur simple for something announced as certain: vous pourrez. Pourriez would turn the announcement into a polite hypothesis."},
  {"id": "c096", "level": "B2", "q": "Je suis désolé que vous ___ (attendre) si longtemps au guichet.", "options": ["ayez attendu", "avez attendu", "aviez attendu", "auriez attendu"], "a": 0, "expl": "Subjonctif passé = subjunctive of avoir/être + participle. It is used after a trigger verb when the action is already over: que vous ayez attendu."},
  {"id": "c097", "level": "B2", "q": "Il est indispensable qu'il ___ (savoir) la vérité avant la réunion.", "options": ["sache", "saura", "sait", "saurait"], "a": 0, "expl": "Savoir has an irregular subjunctive stem sach- : que je sache, que nous sachions. Il est indispensable que always triggers the subjunctive."},
  {"id": "c098", "level": "B2", "q": "Il vaut mieux que nous ___ (partir) avant l'heure de pointe.", "options": ["partions", "partons", "partirons", "partirions"], "a": 0, "expl": "The nous subjunctive is built on the nous present (nous partons → que nous partions) and is identical in form to the imparfait."},
  {"id": "c099", "level": "B2", "q": "Sans le retard du train, nous ___ (arriver) à l'heure.", "options": ["serions arrivés", "aurions arrivé", "serons arrivés", "étions arrivés"], "a": 0, "expl": "Conditionnel passé for an unreal past result. Arriver takes être, so it is serions arrivés, and the participle agrees with the subject."},
  {"id": "c100", "level": "B2", "q": "Quand vous ___ (terminer) la lecture, signez la dernière page.", "options": ["aviez terminé", "terminerez", "auriez terminé", "aurez terminé"], "a": 3, "expl": "Futur antérieur after quand / dès que when one future action precedes another: vous aurez terminé, puis vous signez."},
  {"id": "c101", "level": "B2", "q": "Elle a reconnu qu'elle ___ (se rendre compte) de l'erreur trop tard.", "options": ["s'était rendue compte", "s'étaient rendu compte", "s'était rendus compte", "s'était rendu compte"], "a": 3, "expl": "In se rendre compte, « compte » is the direct object and follows the verb, so the participle never agrees: s'était rendu compte, whatever the subject."},
  {"id": "c102", "level": "B2", "q": "Les documents que j'ai ___ (recevoir) ce matin sont incomplets.", "options": ["reçu", "reçus", "reçue", "reçues"], "a": 1, "expl": "With avoir, the participle agrees with a direct object placed before the verb. Here « que » stands for les documents, masculine plural: reçus."},
  {"id": "c103", "level": "B2", "q": "La décision ___ (prendre) hier par le conseil communal.", "options": ["est prise", "a été pris", "a été prise", "avait été prise"], "a": 2, "expl": "Passive = être conjugated + participle agreeing with the subject. « Hier » calls for the passé composé of être: la décision a été prise."},
  {"id": "c104", "level": "B2", "q": "Il a appris le français ___ (regarder) la RTBF tous les soirs.", "options": ["en regardant", "regardant", "en regardé", "à regarder"], "a": 0, "expl": "The gérondif (en + participe présent) says how or by what means, and its subject must be the same as the main verb's: il a appris… en regardant."},
  {"id": "c105", "level": "B2", "q": "Les candidats ___ (remplir) les conditions recevront une convocation.", "options": ["remplissent", "remplis", "en remplissant", "remplissant"], "a": 3, "expl": "The bare participe présent replaces a relative clause: les candidats qui remplissent → remplissant. With « en » it would become a gérondif and mean « by filling in »."},
  {"id": "c106", "level": "B2", "q": "C'est le seul train qui ___ (aller) directement à Amsterdam.", "options": ["va", "aille", "ira", "allait"], "a": 1, "expl": "After le seul / le premier / le meilleur qui, French uses the subjunctive: c'est le seul train qui aille. Aller is irregular: que j'aille."},
  {"id": "c107", "level": "B2", "q": "Nous ___ (devoir) vérifier les chiffres avant d'envoyer le rapport.", "options": ["avions dû", "devrions", "aurions dû", "devions"], "a": 2, "expl": "« Nous aurions dû + infinitif » is the standard way of saying we should have. The conditionnel présent devrions would mean we should, now."},
  {"id": "c108", "level": "B2", "q": "Si vous ___ (avoir) besoin d'aide, je pourrais vous accompagner.", "options": ["auriez", "aviez", "avez", "ayez"], "a": 1, "expl": "Si + imparfait in the condition, conditionnel présent in the result. A conditional never appears directly after si."},
  {"id": "c109", "level": "B2", "q": "Vous serez remboursé à condition que vous ___ (fournir) une facture.", "options": ["fournirez", "fournissez", "fournissiez", "fourniriez"], "a": 2, "expl": "À condition que takes the subjunctive; the near-identical à condition de takes an infinitive when the subject is the same."},
  {"id": "c110", "level": "B2", "q": "Ils ___ (s'en aller) avant la fin du discours.", "options": ["se sont en allés", "s'en sont allés", "s'en ont allés", "s'en sont allé"], "a": 1, "expl": "S'en aller splits around the auxiliary: se + en + être + participle → ils s'en sont allés. The participle agrees with the subject."},
  {"id": "c111", "level": "B2", "q": "Elle ___ (acquérir) une réelle expérience du terrain.", "options": ["est acquise", "a acquéri", "a acquise", "a acquis"], "a": 3, "expl": "Acquérir → acquis, like conquérir → conquis. There is no agreement here because the direct object follows the verb."},
  {"id": "c112", "level": "B2", "q": "Ils ont ___ (résoudre) le problème en moins de deux jours.", "options": ["résous", "résolue", "résolus", "résolu"], "a": 3, "expl": "Résoudre → résolu. No agreement: the direct object « le problème » comes after the verb, so the participle stays in its base form."},
  {"id": "c113", "level": "B2", "q": "Ses arguments nous ont ___ (convaincre) sans difficulté.", "options": ["convaincus", "convaincu", "convainquis", "convaincues"], "a": 0, "expl": "Convaincre → convaincu, and here the direct object « nous » comes before the verb, so the participle agrees: convaincus."},
  {"id": "c114", "level": "B2", "q": "Je vous ___ (envoyer) le lien dès que possible.", "options": ["envoierai", "enverrais", "envoyerai", "enverrai"], "a": 3, "expl": "Envoyer has the irregular future stem enverr- : j'enverrai, nous enverrons. Renvoyer follows it; all other -oyer verbs use -oier- (j'emploierai)."},
  {"id": "c115", "level": "B2", "q": "Nous ___ (courir) les vingt kilomètres de Bruxelles au mois de mai.", "options": ["courrons", "courons", "courrions", "courrez"], "a": 0, "expl": "Courir doubles the -r- in the future: nous courrons, against the present nous courons. One -r- means now, two mean later."},
  {"id": "c116", "level": "C1", "q": "Imparfait du subjonctif, registre littéraire : « Il fallait qu'il ___ (venir) sans tarder. »", "options": ["viendrait", "vint", "vienne", "vînt"], "a": 3, "expl": "The imparfait du subjonctif of venir is qu'il vînt, with a circumflex. Without it, « il vint » is the passé simple of the indicative."},
  {"id": "c117", "level": "C1", "q": "« Il eût accepté sans difficulté » se réécrit en français courant :", "options": ["il avait accepté", "il aurait accepté", "il a accepté", "il accepterait"], "a": 1, "expl": "« Eût accepté » is the conditionnel passé deuxième forme, identical in meaning to il aurait accepté. It survives only in formal and literary writing."},
  {"id": "c118", "level": "C1", "q": "Dès qu'il ___ (terminer) son discours, la salle se leva.", "options": ["eût terminé", "avait terminé", "a eu terminé", "eut terminé"], "a": 3, "expl": "Passé antérieur (eut + participle) is the anterior partner of the passé simple in literary narration. « Eût terminé » with a circumflex would be subjunctive."},
  {"id": "c119", "level": "C1", "q": "Bien qu'elle ___ (se souvenir) du code, elle n'a pas pu entrer.", "options": ["se soit souvenue", "se soit souvenu", "s'est souvenue", "se serait souvenue"], "a": 0, "expl": "Bien que takes the subjunctive, here the subjonctif passé. Se souvenir is essentially pronominal, so the participle agrees with the subject: souvenue."},
  {"id": "c120", "level": "C1", "q": "Il est à craindre qu'il ne ___ (falloir) tout recommencer.", "options": ["faut", "faudra", "faille", "faudrait"], "a": 2, "expl": "Falloir has the subjunctive qu'il faille. The « ne » after craindre is explétif — it carries no negative meaning at all."}
];
