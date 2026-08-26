/* French listening dictation bank. */
"use strict";

const DICTATION_QUESTIONS = [
  {
    "id": "dc001",
    "level": "A2",
    "fr": "Elle a acheté deux baguettes à la boulangerie.",
    "en": "She bought two baguettes at the bakery.",
    "options": [
      "Elle a acheté douze baguettes à la boulangerie.",
      "Elles ont acheté deux baguettes à la boulangerie.",
      "Elle a acheté deux baguettes à la boulangerie.",
      "Elle achetait deux baguettes à la boulangerie."
    ],
    "a": 2,
    "expl": "Tests deux versus douze and the singular 'elle a' against the plural liaison 'elles ont'."
  },
  {
    "id": "dc002",
    "level": "A2",
    "fr": "Ils ont attendu le bus pendant vingt minutes.",
    "en": "They waited for the bus for twenty minutes.",
    "options": [
      "Ils ont attendu le bus pendant vingt minutes.",
      "Il a attendu le bus pendant vingt minutes.",
      "Elles ont attendu le bus pendant vingt minutes.",
      "Ils ont attendu le bus pendant vingt-deux minutes."
    ],
    "a": 0,
    "expl": "The liaison in 'ils ont' sounds like 'il a', plus vingt versus vingt-deux."
  },
  {
    "id": "dc003",
    "level": "A2",
    "fr": "On a mangé au restaurant avec mes parents.",
    "en": "We ate at the restaurant with my parents.",
    "options": [
      "On mangeait au restaurant avec mes parents.",
      "On mangera au restaurant avec mes parents.",
      "Ils ont mangé au restaurant avec mes parents.",
      "On a mangé au restaurant avec mes parents."
    ],
    "a": 3,
    "expl": "Tense homophones: passé composé 'on a mangé', imparfait 'mangeait' and futur 'mangera'."
  },
  {
    "id": "dc004",
    "level": "A2",
    "fr": "Il y a une pharmacie en face de la gare.",
    "en": "There is a pharmacy opposite the station.",
    "options": [
      "Il a une pharmacie en face de la gare.",
      "Il y avait une pharmacie en face de la gare.",
      "Il y a une pharmacie en face de la gare.",
      "Il y aura une pharmacie en face de la gare."
    ],
    "a": 2,
    "expl": "'Il y a' versus 'il a', and the present against the imparfait and futur of 'il y a'."
  },
  {
    "id": "dc005",
    "level": "A2",
    "fr": "Ils parlent espagnol avec leurs cousins.",
    "en": "They speak Spanish with their cousins.",
    "options": [
      "Il parle espagnol avec ses cousins.",
      "Il parle espagnol avec leurs cousins.",
      "Ils parlent espagnol avec leurs cousins.",
      "Ils parlent espagnol avec leur cousin."
    ],
    "a": 2,
    "expl": "'Il parle' and 'ils parlent' are identical in sound; only the possessives reveal the number."
  },
  {
    "id": "dc006",
    "level": "A2",
    "fr": "Elle a oublié ses clés dans la voiture.",
    "en": "She forgot her keys in the car.",
    "options": [
      "Elle a oublié ces clés dans la voiture.",
      "Elle a oublié ses clés dans la voiture.",
      "Elle avait oublié ses clés dans la voiture.",
      "Elles ont oublié ses clés dans la voiture."
    ],
    "a": 1,
    "expl": "Possessive 'ses' against demonstrative 'ces', plus 'elle a' versus 'elles ont'."
  },
  {
    "id": "dc007",
    "level": "A2",
    "fr": "Je ne sais pas où il habite maintenant.",
    "en": "I don't know where he lives now.",
    "options": [
      "Je sais pas où il habite maintenant.",
      "Je ne savais pas où il habitait maintenant.",
      "Je ne sais pas où il habite maintenant.",
      "Je ne sais plus où il habite maintenant."
    ],
    "a": 2,
    "expl": "The dropped 'ne' of spoken French, and 'pas' versus 'plus'."
  },
  {
    "id": "dc008",
    "level": "A2",
    "fr": "Ses parents sont partis en vacances en Espagne.",
    "en": "Her parents have gone on holiday to Spain.",
    "options": [
      "Son parent est parti en vacances en Espagne.",
      "Ces parents sont partis en vacances en Espagne.",
      "Ses parents sont partis en vacances en Italie.",
      "Ses parents sont partis en vacances en Espagne."
    ],
    "a": 3,
    "expl": "'Ses' versus 'ces', and the singular 'son parent est' against the plural 'ses parents sont'."
  },
  {
    "id": "dc009",
    "level": "A2",
    "fr": "Il peut venir un peu plus tard ce soir.",
    "en": "He can come a little later this evening.",
    "options": [
      "Ils peuvent venir un peu plus tard ce soir.",
      "Il pouvait venir un peu plus tard ce soir.",
      "Il peut venir un peu plus tard ce soir.",
      "Il peut venir un peu plus tôt ce soir."
    ],
    "a": 2,
    "expl": "'Peut' versus 'peuvent' and 'plus tard' versus 'plus tôt'."
  },
  {
    "id": "dc010",
    "level": "A2",
    "fr": "Ma mère travaille près de la mer, à Marseille.",
    "en": "My mother works near the sea, in Marseille.",
    "options": [
      "Ma mère travaille près de la mer, à Marseille.",
      "Ma mère travaillait près de la mer, à Marseille.",
      "Ma mère travaillera près de la mer, à Marseille.",
      "Ma belle-mère travaille près de la mer, à Marseille."
    ],
    "a": 0,
    "expl": "Présent, imparfait and futur of 'travailler' sound almost identical here."
  },
  {
    "id": "dc011",
    "level": "A2",
    "fr": "Le film commence à seize heures dans la petite salle.",
    "en": "The film starts at four p.m. in the small screening room.",
    "options": [
      "Le film commence à treize heures dans la petite salle.",
      "Le film commençait à seize heures dans la petite salle.",
      "Le film commence à six heures dans la petite salle.",
      "Le film commence à seize heures dans la petite salle."
    ],
    "a": 3,
    "expl": "Number confusion between treize, seize and six heures."
  },
  {
    "id": "dc012",
    "level": "A2",
    "fr": "Le billet coûte soixante-dix euros par personne.",
    "en": "The ticket costs seventy euros per person.",
    "options": [
      "Le billet coûte soixante euros par personne.",
      "Le billet coûte soixante-dix euros par personne.",
      "Les billets coûtent soixante-dix euros par personne.",
      "Le billet coûte soixante-douze euros par personne."
    ],
    "a": 1,
    "expl": "soixante, soixante-dix and soixante-douze, plus the identical 'coûte' and 'coûtent'."
  },
  {
    "id": "dc013",
    "level": "A2",
    "fr": "Je prendrai le métro pour aller au travail.",
    "en": "I will take the metro to go to work.",
    "options": [
      "Je prends le métro pour aller au travail.",
      "Je prenais le métro pour aller au travail.",
      "Je prendrai le métro pour aller au travail.",
      "Je prendrais le métro pour aller au travail."
    ],
    "a": 2,
    "expl": "Futur 'prendrai' against conditionnel 'prendrais', présent and imparfait."
  },
  {
    "id": "dc014",
    "level": "A2",
    "fr": "Ils sont arrivés en retard à l'école ce matin.",
    "en": "They arrived late at school this morning.",
    "options": [
      "Il est arrivé en retard à l'école ce matin.",
      "Elles sont arrivées en retard à l'école ce matin.",
      "Ils sont arrivés en retard à l'école ce matin.",
      "Ils sont arrivés en retard à l'école cet après-midi."
    ],
    "a": 2,
    "expl": "'Il est' versus 'ils sont', and the inaudible feminine plural 'elles sont arrivées'."
  },
  {
    "id": "dc015",
    "level": "A2",
    "fr": "J'ai travaillé dans ce magasin pendant trois ans.",
    "en": "I worked in this shop for three years.",
    "options": [
      "Je travaillais dans ce magasin pendant trois ans.",
      "J'ai travaillé dans ce magasin pendant trois ans.",
      "J'ai travaillé dans ces magasins pendant trois ans.",
      "Je travaillerai dans ce magasin pendant trois ans."
    ],
    "a": 1,
    "expl": "Passé composé versus imparfait and futur, plus 'ce magasin' and 'ces magasins'."
  },
  {
    "id": "dc016",
    "level": "A2",
    "fr": "Nos enfants jouent dans le jardin des voisins.",
    "en": "Our children are playing in the neighbours' garden.",
    "options": [
      "Nos enfants jouent dans le jardin des voisins.",
      "Notre enfant joue dans le jardin des voisins.",
      "Nos enfants jouent dans le jardin du voisin.",
      "Nos enfants jouaient dans le jardin des voisins."
    ],
    "a": 0,
    "expl": "The determiner carries the number, since 'joue' and 'jouent' sound the same."
  },
  {
    "id": "dc017",
    "level": "A2",
    "fr": "Je bois mon café sans sucre le matin.",
    "en": "I drink my coffee without sugar in the morning.",
    "options": [
      "Je buvais mon café sans sucre le matin.",
      "Je bois son café sans sucre le matin.",
      "Je bois mon café sans sucre le matin.",
      "Je boirai mon café sans sucre le matin."
    ],
    "a": 2,
    "expl": "Présent, imparfait and futur of 'boire', plus 'mon' versus 'son'."
  },
  {
    "id": "dc018",
    "level": "A2",
    "fr": "Tous les matins, elle promène son chien au parc.",
    "en": "Every morning she walks her dog in the park.",
    "options": [
      "Tout le matin, elle promène son chien au parc.",
      "Tous les matins, elle promène son chien au parc.",
      "Tous les matins, elles promènent son chien au parc.",
      "Tous les matins, elle promenait son chien au parc."
    ],
    "a": 1,
    "expl": "'Elle promène' and 'elles promènent' sound the same, and 'tout le' versus 'tous les'."
  },
  {
    "id": "dc019",
    "level": "A2",
    "fr": "Tu préfères le thé ou le café le matin ?",
    "en": "Do you prefer tea or coffee in the morning?",
    "options": [
      "Tu préfères le thé où le café le matin ?",
      "Tu préférais le thé ou le café le matin ?",
      "Tu préfères les thés ou les cafés le matin ?",
      "Tu préfères le thé ou le café le matin ?"
    ],
    "a": 3,
    "expl": "The homophones 'ou' and 'où', plus présent versus imparfait of 'préférer'."
  },
  {
    "id": "dc020",
    "level": "B1",
    "fr": "Il faut que tu sois à la gare à midi.",
    "en": "You need to be at the station at noon.",
    "options": [
      "Il faut que tu sois à la gare à midi.",
      "Il faut que tu es à la gare à midi.",
      "Il fallait que tu sois à la gare à midi.",
      "Il faut que tu sois à la gare à minuit."
    ],
    "a": 0,
    "expl": "Subjunctive 'sois' versus indicative 'es', and midi versus minuit."
  },
  {
    "id": "dc021",
    "level": "A2",
    "fr": "Je dois acheter du pain et des œufs.",
    "en": "I have to buy some bread and eggs.",
    "options": [
      "J'ai acheté du pain et des œufs.",
      "Achetez du pain et des œufs, s'il vous plaît.",
      "Je dois acheter du pain et des œufs.",
      "Je dois acheter du pain et des yaourts."
    ],
    "a": 2,
    "expl": "The identical endings of acheter, acheté and achetez."
  },
  {
    "id": "dc022",
    "level": "A2",
    "fr": "Cette nouvelle voisine est très sympathique avec tout le monde.",
    "en": "This new neighbour is very friendly with everyone.",
    "options": [
      "Ce nouveau voisin est très sympathique avec tout le monde.",
      "Ces nouvelles voisines sont très sympathiques avec tout le monde.",
      "Cette nouvelle voisine était très sympathique avec tout le monde.",
      "Cette nouvelle voisine est très sympathique avec tout le monde."
    ],
    "a": 3,
    "expl": "Gender and number of the noun phrase, where only the determiner and 'est/sont' differ."
  },
  {
    "id": "dc023",
    "level": "A2",
    "fr": "Ça ne marche pas très bien depuis hier soir.",
    "en": "It hasn't been working very well since last night.",
    "options": [
      "Ça marche pas très bien depuis hier soir.",
      "Ça ne marchait pas très bien depuis hier soir.",
      "Ça ne marche plus très bien depuis hier soir.",
      "Ça ne marche pas très bien depuis hier soir."
    ],
    "a": 3,
    "expl": "The dropped 'ne' in speech, 'pas' versus 'plus', and présent versus imparfait."
  },
  {
    "id": "dc024",
    "level": "A2",
    "fr": "Le trajet dure quarante minutes en voiture.",
    "en": "The journey takes forty minutes by car.",
    "options": [
      "Le trajet dure quatre minutes en voiture.",
      "Le trajet dure quarante minutes en voiture.",
      "Les trajets durent quarante minutes en voiture.",
      "Le trajet durait quarante minutes en voiture."
    ],
    "a": 1,
    "expl": "quatre versus quarante, and the identical 'dure' and 'durent'."
  },
  {
    "id": "dc025",
    "level": "A2",
    "fr": "Elle va chez le médecin à trois heures.",
    "en": "She is going to the doctor at three o'clock.",
    "options": [
      "Elles vont chez le médecin à trois heures.",
      "Elle allait chez le médecin à trois heures.",
      "Elle va chez le médecin à trois heures.",
      "Elle va chez le médecin à treize heures."
    ],
    "a": 2,
    "expl": "'Elle va' versus 'elles vont', and trois versus treize heures."
  },
  {
    "id": "dc026",
    "level": "B1",
    "fr": "Je pense qu'il a raison sur ce point.",
    "en": "I think he is right on this point.",
    "options": [
      "Je pense qu'ils ont raison sur ce point.",
      "Je pensais qu'il avait raison sur ce point.",
      "Je pense qu'il a raison sur ce point.",
      "Je pense qu'il a raison sur ces points."
    ],
    "a": 2,
    "expl": "The liaison 'qu'ils ont' against 'qu'il a', and 'ce point' versus 'ces points'."
  },
  {
    "id": "dc027",
    "level": "B1",
    "fr": "Il faut que le rapport soit prêt avant vendredi.",
    "en": "The report has to be ready before Friday.",
    "options": [
      "Il faut que le rapport est prêt avant vendredi.",
      "Il faudra que le rapport soit prêt avant vendredi.",
      "Il faut que le rapport soit prêt avant vendredi.",
      "Il faut que les rapports soient prêts avant vendredi."
    ],
    "a": 2,
    "expl": "Subjunctive 'soit' versus indicative 'est', and the homophone plural 'soient prêts'."
  },
  {
    "id": "dc028",
    "level": "B1",
    "fr": "Je doute qu'il fasse le travail à temps.",
    "en": "I doubt he will do the work on time.",
    "options": [
      "Je doute qu'il fait le travail à temps.",
      "Je dis qu'il fait le travail à temps.",
      "Je doute qu'ils fassent le travail à temps.",
      "Je doute qu'il fasse le travail à temps."
    ],
    "a": 3,
    "expl": "'Qu'il fasse' versus 'qu'il fait', and the plural subjunctive 'qu'ils fassent'."
  },
  {
    "id": "dc029",
    "level": "B1",
    "fr": "Mes collègues travaillent sur le même dossier depuis mars.",
    "en": "My colleagues have been working on the same file since March.",
    "options": [
      "Mes collègues travaillent sur le même dossier depuis mars.",
      "Mon collègue travaille sur le même dossier depuis mars.",
      "Mes collègues travaillaient sur le même dossier depuis mars.",
      "Mes collègues travaillent sur les mêmes dossiers depuis mars."
    ],
    "a": 0,
    "expl": "The determiner carries the number, since 'travaille' and 'travaillent' sound alike."
  },
  {
    "id": "dc030",
    "level": "B1",
    "fr": "Nous aimerions organiser une réunion la semaine prochaine.",
    "en": "We would like to organise a meeting next week.",
    "options": [
      "Nous aimerons organiser une réunion la semaine prochaine.",
      "Nous aimerions organiser une réunion la semaine prochaine.",
      "Nous aimions organiser une réunion la semaine prochaine.",
      "Nous aimerions organiser des réunions la semaine prochaine."
    ],
    "a": 1,
    "expl": "Conditionnel 'aimerions' against futur 'aimerons' and imparfait 'aimions'."
  },
  {
    "id": "dc031",
    "level": "B1",
    "fr": "Le directeur leur a demandé de revoir leurs conclusions.",
    "en": "The director asked them to review their conclusions.",
    "options": [
      "Le directeur leur a demandé de revoir leur conclusion.",
      "Les directeurs leur ont demandé de revoir leurs conclusions.",
      "Le directeur leur a demandé de revoir leurs conclusions.",
      "Le directeur lui a demandé de revoir leurs conclusions."
    ],
    "a": 2,
    "expl": "'Leur' versus 'lui', and the silent plural of 'leurs conclusions'."
  },
  {
    "id": "dc032",
    "level": "B1",
    "fr": "Les employés ont accepté la nouvelle organisation du travail.",
    "en": "The employees accepted the new work organisation.",
    "options": [
      "Les employés acceptent la nouvelle organisation du travail.",
      "L'employé a accepté la nouvelle organisation du travail.",
      "Les employés ont accepté la nouvelle organisation du travail.",
      "Les employées ont accepté la nouvelle organisation du travail."
    ],
    "a": 2,
    "expl": "'Les employés ont' versus 'l'employé a', and the inaudible feminine 'employées'."
  },
  {
    "id": "dc033",
    "level": "B1",
    "fr": "Tout s'est très bien passé pendant l'entretien.",
    "en": "Everything went very well during the interview.",
    "options": [
      "Tout c'est très bien passé pendant l'entretien.",
      "Tout s'est très bien passé pendant l'entretien.",
      "Tout s'était très bien passé pendant l'entretien.",
      "Tous se sont très bien passés pendant l'entretien."
    ],
    "a": 1,
    "expl": "The homophones 's'est' and 'c'est', and 's'est' versus 's'était'."
  },
  {
    "id": "dc034",
    "level": "B1",
    "fr": "Quant au budget, nous en discuterons lundi prochain.",
    "en": "As for the budget, we will discuss it next Monday.",
    "options": [
      "Quand au budget, nous en discuterons lundi prochain.",
      "Quant aux budgets, nous en discuterons lundi prochain.",
      "Quant au budget, nous en discutions lundi prochain.",
      "Quant au budget, nous en discuterons lundi prochain."
    ],
    "a": 3,
    "expl": "'Quant au' versus 'quand au', and futur 'discuterons' versus imparfait 'discutions'."
  },
  {
    "id": "dc035",
    "level": "B1",
    "fr": "Je n'ai que deux jours pour finir ce projet.",
    "en": "I only have two days to finish this project.",
    "options": [
      "Je n'ai que deux jours pour finir ce projet.",
      "J'ai deux jours pour finir ce projet.",
      "Je n'ai que douze jours pour finir ce projet.",
      "Je n'avais que deux jours pour finir ce projet."
    ],
    "a": 0,
    "expl": "The restrictive 'ne que' can vanish in speech, and deux versus douze."
  },
  {
    "id": "dc036",
    "level": "B1",
    "fr": "La proposition que nous avons faite a été acceptée.",
    "en": "The proposal we made was accepted.",
    "options": [
      "La proposition que nous avons fait a été acceptée.",
      "La proposition que nous avons faite a été acceptée.",
      "Les propositions que nous avons faites ont été acceptées.",
      "La proposition que nous avions faite a été acceptée."
    ],
    "a": 1,
    "expl": "Past-participle agreement on 'faite', and 'avons' versus 'avions'."
  },
  {
    "id": "dc037",
    "level": "B1",
    "fr": "À mon avis, cette décision n'est pas justifiée.",
    "en": "In my opinion, this decision is not justified.",
    "options": [
      "À mon avis, ces décisions ne sont pas justifiées.",
      "À mon avis, cette décision est justifiée.",
      "À mon avis, cette décision n'était pas justifiée.",
      "À mon avis, cette décision n'est pas justifiée."
    ],
    "a": 3,
    "expl": "The elided negation 'n'' is easy to miss, as is singular versus plural here."
  },
  {
    "id": "dc038",
    "level": "B1",
    "fr": "Si vous êtes d'accord, nous signerons le contrat demain.",
    "en": "If you agree, we will sign the contract tomorrow.",
    "options": [
      "Si vous êtes d'accord, nous signerions le contrat demain.",
      "Si vous étiez d'accord, nous signerions le contrat demain.",
      "Si vous êtes d'accord, nous signerons le contrat demain.",
      "Si vous êtes d'accord, nous signons le contrat demain."
    ],
    "a": 2,
    "expl": "Futur 'signerons' versus conditionnel 'signerions', and 'êtes' versus 'étiez'."
  },
  {
    "id": "dc039",
    "level": "B1",
    "fr": "Il s'agit d'un problème de communication entre les équipes.",
    "en": "It is a communication problem between the teams.",
    "options": [
      "Il s'agissait d'un problème de communication entre les équipes.",
      "Il s'agit d'un problème de communication entre les équipes.",
      "Il s'agit de problèmes de communication entre les équipes.",
      "Il s'agit d'un problème de communication entre les deux équipes."
    ],
    "a": 1,
    "expl": "Présent versus imparfait of 's'agir', and singular versus plural of 'problème'."
  },
  {
    "id": "dc040",
    "level": "B1",
    "fr": "Ce dossier peut être traité par un autre service.",
    "en": "This file can be handled by another department.",
    "options": [
      "Ce dossier peut être traité par un autre service.",
      "Ce dossier peut-être traité par un autre service.",
      "Ces dossiers peuvent être traités par un autre service.",
      "Ce dossier peut être traité par d'autres services."
    ],
    "a": 0,
    "expl": "'Peut être' versus 'peut-être', and the silent agreement in 'traités'."
  },
  {
    "id": "dc041",
    "level": "B1",
    "fr": "La réunion a duré cinquante minutes de plus que prévu.",
    "en": "The meeting lasted fifty minutes longer than planned.",
    "options": [
      "La réunion a duré quinze minutes de plus que prévu.",
      "Les réunions ont duré cinquante minutes de plus que prévu.",
      "La réunion durera cinquante minutes de plus que prévu.",
      "La réunion a duré cinquante minutes de plus que prévu."
    ],
    "a": 3,
    "expl": "quinze versus cinquante, and 'a duré' versus 'ont duré' and 'durera'."
  },
  {
    "id": "dc042",
    "level": "B1",
    "fr": "On n'a pas encore reçu la réponse du client.",
    "en": "We haven't received the client's reply yet.",
    "options": [
      "On a pas encore reçu la réponse du client.",
      "On n'a pas encore reçu la réponse du client.",
      "On n'avait pas encore reçu la réponse du client.",
      "On n'a pas encore reçu les réponses du client."
    ],
    "a": 1,
    "expl": "The inaudible 'n'' of 'on n'a pas', and singular versus plural of 'réponse'."
  },
  {
    "id": "dc043",
    "level": "B1",
    "fr": "Ceux qui veulent participer doivent s'inscrire avant jeudi.",
    "en": "Those who want to take part must register before Thursday.",
    "options": [
      "Celles qui veulent participer doivent s'inscrire avant jeudi.",
      "Ceux qui veulent participer devront s'inscrire avant jeudi.",
      "Ceux qui veulent participer doivent s'inscrire avant jeudi.",
      "Ceux qui voulaient participer devaient s'inscrire avant jeudi."
    ],
    "a": 2,
    "expl": "'Ceux' versus 'celles', and présent 'doivent' versus futur 'devront'."
  },
  {
    "id": "dc044",
    "level": "B1",
    "fr": "Les syndicats se sont opposés à cette réforme interne.",
    "en": "The unions opposed this internal reform.",
    "options": [
      "Les syndicats se sont opposés à cette réforme interne.",
      "Les syndicats sont opposés à cette réforme interne.",
      "Le syndicat s'est opposé à cette réforme interne.",
      "Les syndicats se sont opposés à ces réformes internes."
    ],
    "a": 0,
    "expl": "'Se sont opposés' versus 'sont opposés', and the singular 's'est opposé'."
  },
  {
    "id": "dc045",
    "level": "B1",
    "fr": "J'aurai terminé la traduction avant la fin du mois.",
    "en": "I will have finished the translation before the end of the month.",
    "options": [
      "J'aurais terminé la traduction avant la fin du mois.",
      "J'aurai terminé la traduction avant la fin du mois.",
      "J'avais terminé la traduction avant la fin du mois.",
      "J'aurai terminé les traductions avant la fin du mois."
    ],
    "a": 1,
    "expl": "Futur antérieur 'j'aurai' versus conditionnel passé 'j'aurais'."
  },
  {
    "id": "dc046",
    "level": "B1",
    "fr": "Ce ne sont pas les seules solutions envisageables.",
    "en": "These are not the only conceivable solutions.",
    "options": [
      "Ce n'est pas la seule solution envisageable.",
      "Ce sont les seules solutions envisageables.",
      "Ce ne sont pas les seules solutions envisageables.",
      "Ce ne sont pas les seules solutions envisagées."
    ],
    "a": 2,
    "expl": "Singular 'ce n'est pas' versus plural 'ce ne sont pas', and the dropped negation."
  },
  {
    "id": "dc047",
    "level": "B1",
    "fr": "Dès que le budget sera voté, nous recruterons deux personnes.",
    "en": "As soon as the budget is approved, we will recruit two people.",
    "options": [
      "Dès que le budget sera voté, nous recruterons douze personnes.",
      "Dès que les budgets seront votés, nous recruterons deux personnes.",
      "Dès que le budget sera voté, nous recruterons deux personnes.",
      "Dès que le budget serait voté, nous recruterions deux personnes."
    ],
    "a": 2,
    "expl": "deux versus douze, and futur 'sera/recruterons' versus conditionnel 'serait/recruterions'."
  },
  {
    "id": "dc048",
    "level": "B1",
    "fr": "Il vaut mieux qu'on prenne une décision rapidement.",
    "en": "It is better for us to make a decision quickly.",
    "options": [
      "Il vaut mieux qu'on prend une décision rapidement.",
      "Il vaut mieux qu'on prenne une décision rapidement.",
      "Il valait mieux qu'on prenne une décision rapidement.",
      "Il vaut mieux qu'ils prennent une décision rapidement."
    ],
    "a": 1,
    "expl": "Subjunctive 'prenne' versus indicative 'prend', and 'qu'on' versus 'qu'ils'."
  },
  {
    "id": "dc049",
    "level": "B1",
    "fr": "Elle s'en est occupée sans rien dire à personne.",
    "en": "She dealt with it without saying anything to anyone.",
    "options": [
      "Elle s'en est occupée sans rien dire à personne.",
      "Elle en est occupée sans rien dire à personne.",
      "Elles s'en sont occupées sans rien dire à personne.",
      "Elle s'en était occupée sans rien dire à personne."
    ],
    "a": 0,
    "expl": "'Elle s'en est' versus 'elles s'en sont', and 's'en est' versus 's'en était'."
  },
  {
    "id": "dc050",
    "level": "B1",
    "fr": "Quelles que soient les difficultés, nous respecterons les délais.",
    "en": "Whatever the difficulties, we will meet the deadlines.",
    "options": [
      "Quelle que soit la difficulté, nous respecterons les délais.",
      "Quelles que soient les difficultés, nous respecterions les délais.",
      "Quelles que soient les difficultés, nous respectons les délais.",
      "Quelles que soient les difficultés, nous respecterons les délais."
    ],
    "a": 3,
    "expl": "'Quelle que soit' and 'quelles que soient' are homophones; futur versus conditionnel too."
  },
  {
    "id": "dc051",
    "level": "B1",
    "fr": "Y a-t-il des candidats qui parlent couramment allemand ?",
    "en": "Are there any candidates who speak fluent German?",
    "options": [
      "Y a-t-il un candidat qui parle couramment allemand ?",
      "Y a-t-il des candidats qui parlent couramment allemand ?",
      "Y avait-il des candidats qui parlaient couramment allemand ?",
      "Y a-t-il des candidates qui parlent couramment allemand ?"
    ],
    "a": 1,
    "expl": "'Parle' and 'parlent' are identical; only the article and the silent feminine differ."
  },
  {
    "id": "dc052",
    "level": "B1",
    "fr": "Je ne pense pas que ce soit une bonne idée.",
    "en": "I don't think that is a good idea.",
    "options": [
      "Je ne pense pas que c'est une bonne idée.",
      "Je pense pas que ce soit une bonne idée.",
      "Je ne pensais pas que ce soit une bonne idée.",
      "Je ne pense pas que ce soit une bonne idée."
    ],
    "a": 3,
    "expl": "Subjunctive 'ce soit' versus indicative 'c'est', plus the dropped 'ne'."
  },
  {
    "id": "dc053",
    "level": "B1",
    "fr": "L'entreprise emploie cent personnes sans compter les stagiaires.",
    "en": "The company employs a hundred people, not counting the interns.",
    "options": [
      "L'entreprise employait cent personnes sans compter les stagiaires.",
      "L'entreprise emploie cinq cents personnes sans compter les stagiaires.",
      "L'entreprise emploie cent personnes sans compter les stagiaires.",
      "Les entreprises emploient cent personnes sans compter les stagiaires."
    ],
    "a": 2,
    "expl": "cent versus cinq cents, and the identical 'emploie' and 'emploient'."
  },
  {
    "id": "dc054",
    "level": "B1",
    "fr": "Nous avons reçu une offre intéressante d'un partenaire italien.",
    "en": "We received an interesting offer from an Italian partner.",
    "options": [
      "Nous avons reçu des offres intéressantes d'un partenaire italien.",
      "Nous avions reçu une offre intéressante d'un partenaire italien.",
      "Nous avons reçu une offre intéressante d'un partenaire italien.",
      "Nous avons reçu une offre intéressante d'une partenaire italienne."
    ],
    "a": 2,
    "expl": "'Un partenaire italien' versus 'une partenaire italienne', and 'avons' versus 'avions'."
  },
  {
    "id": "dc055",
    "level": "B1",
    "fr": "C'est la meilleure solution que nous ayons trouvée.",
    "en": "It is the best solution we have found.",
    "options": [
      "C'est la meilleure solution que nous ayons trouvée.",
      "C'est la meilleure solution que nous avons trouvée.",
      "Ce sont les meilleures solutions que nous ayons trouvées.",
      "C'était la meilleure solution que nous ayons trouvée."
    ],
    "a": 0,
    "expl": "Subjunctive 'ayons' versus indicative 'avons', and 'c'est' versus 'c'était'."
  },
  {
    "id": "dc056",
    "level": "B2",
    "fr": "Le règlement entrera en vigueur le premier janvier prochain.",
    "en": "The regulation will enter into force on the first of January.",
    "options": [
      "Le règlement entrera en vigueur le premier janvier prochain.",
      "Le règlement entrerait en vigueur le premier janvier prochain.",
      "Les règlements entreront en vigueur le premier janvier prochain.",
      "Le règlement est entré en vigueur le premier janvier dernier."
    ],
    "a": 0,
    "expl": "Futur 'entrera' versus conditionnel 'entrerait' and plural 'entreront'."
  },
  {
    "id": "dc057",
    "level": "B2",
    "fr": "La nouvelle directive impose des obligations supplémentaires aux États membres.",
    "en": "The new directive imposes additional obligations on the Member States.",
    "options": [
      "Le nouveau directif impose des obligations supplémentaires aux États membres.",
      "La nouvelle directive impose des obligations supplémentaires aux États membres.",
      "Les nouvelles directives imposent des obligations supplémentaires aux États membres.",
      "La nouvelle directive imposait des obligations supplémentaires aux États membres."
    ],
    "a": 1,
    "expl": "Gender and number in the noun phrase, since 'impose' and 'imposent' are identical."
  },
  {
    "id": "dc058",
    "level": "B2",
    "fr": "Il est essentiel que la Commission fasse preuve de transparence.",
    "en": "It is essential that the Commission be transparent.",
    "options": [
      "Il est essentiel que la Commission fait preuve de transparence.",
      "Il était essentiel que la Commission fasse preuve de transparence.",
      "Il est essentiel que les institutions fassent preuve de transparence.",
      "Il est essentiel que la Commission fasse preuve de transparence."
    ],
    "a": 3,
    "expl": "Subjunctive 'fasse' versus indicative 'fait', and the homophone plural 'fassent'."
  },
  {
    "id": "dc059",
    "level": "B2",
    "fr": "Les amendements ont été adoptés à une large majorité.",
    "en": "The amendments were adopted by a large majority.",
    "options": [
      "L'amendement a été adopté à une large majorité.",
      "Les amendements avaient été adoptés à une large majorité.",
      "Les amendements ont été adoptés à une large majorité.",
      "Les amendements ont été adoptés à une faible majorité."
    ],
    "a": 2,
    "expl": "'A été adopté' versus 'ont été adoptés', and 'ont' versus 'avaient'."
  },
  {
    "id": "dc060",
    "level": "B2",
    "fr": "Le délai de transposition est fixé à dix-huit mois.",
    "en": "The transposition deadline is set at eighteen months.",
    "options": [
      "Le délai de transposition est fixé à huit mois.",
      "Le délai de transposition est fixé à dix mois.",
      "Les délais de transposition sont fixés à dix-huit mois.",
      "Le délai de transposition est fixé à dix-huit mois."
    ],
    "a": 3,
    "expl": "dix-huit against huit and dix, plus singular versus plural of 'délai'."
  },
  {
    "id": "dc061",
    "level": "B2",
    "fr": "Cette dérogation ne peut être accordée qu'à titre exceptionnel.",
    "en": "This derogation may be granted only on an exceptional basis.",
    "options": [
      "Cette dérogation ne peut être accordée qu'à titre exceptionnel.",
      "Ces dérogations ne peuvent être accordées qu'à titre exceptionnel.",
      "Cette dérogation ne peut être accordée à titre exceptionnel.",
      "Cette dérogation ne pouvait être accordée qu'à titre exceptionnel."
    ],
    "a": 0,
    "expl": "The restrictive 'que' and présent versus imparfait of 'pouvoir'."
  },
  {
    "id": "dc062",
    "level": "B2",
    "fr": "Les autorités nationales leur ont notifié leur décision par courrier.",
    "en": "The national authorities notified them of their decision by post.",
    "options": [
      "Les autorités nationales leur ont notifié leurs décisions par courrier.",
      "Les autorités nationales lui ont notifié leur décision par courrier.",
      "Les autorités nationales leur ont notifié leur décision par courrier.",
      "L'autorité nationale leur a notifié leur décision par courrier."
    ],
    "a": 2,
    "expl": "'Leur' versus 'lui', the silent plural 'leurs décisions', and 'ont' versus 'a'."
  },
  {
    "id": "dc063",
    "level": "B2",
    "fr": "Les critères auxquels doivent répondre les candidats sont très stricts.",
    "en": "The criteria the candidates must meet are very strict.",
    "options": [
      "Le critère auquel doivent répondre les candidats est très strict.",
      "Les critères auxquels doivent répondre les candidats sont très stricts.",
      "Les critères auxquels devaient répondre les candidats sont très stricts.",
      "Les critères auxquels doivent répondre les candidates sont très stricts."
    ],
    "a": 1,
    "expl": "'Auquel' and 'auxquels' are homophones; only 'est/sont' carries the number."
  },
  {
    "id": "dc064",
    "level": "B2",
    "fr": "Nous regrettons qu'il n'y ait pas eu de consultation publique.",
    "en": "We regret that there was no public consultation.",
    "options": [
      "Nous regrettons qu'il n'y ait pas eu de consultation publique.",
      "Nous regrettons qu'il n'y a pas eu de consultation publique.",
      "Nous regrettions qu'il n'y ait pas eu de consultation publique.",
      "Nous regrettons qu'il y ait eu une consultation publique."
    ],
    "a": 0,
    "expl": "Subjunctive 'ait' versus indicative 'a', and the negation that can disappear."
  },
  {
    "id": "dc065",
    "level": "B2",
    "fr": "La procédure s'est déroulée conformément aux règles en vigueur.",
    "en": "The procedure took place in accordance with the rules in force.",
    "options": [
      "La procédure c'est déroulée conformément aux règles en vigueur.",
      "Les procédures se sont déroulées conformément aux règles en vigueur.",
      "La procédure s'est déroulée conformément aux règles en vigueur.",
      "La procédure s'était déroulée conformément aux règles en vigueur."
    ],
    "a": 2,
    "expl": "'S'est' versus 'c'est', and singular versus plural of the reflexive passé composé."
  },
  {
    "id": "dc066",
    "level": "B2",
    "fr": "Le Parlement souhaite davantage de garanties pour les consommateurs.",
    "en": "Parliament wants more guarantees for consumers.",
    "options": [
      "Le Parlement souhaitait davantage de garanties pour les consommateurs.",
      "Les Parlements souhaitent davantage de garanties pour les consommateurs.",
      "Le Parlement souhaite davantage de garanties pour les consommateurs.",
      "Le Parlement souhaite davantage de garanties pour le consommateur."
    ],
    "a": 2,
    "expl": "'Souhaite' and 'souhaitent' are identical; only the determiner and the imparfait differ."
  },
  {
    "id": "dc067",
    "level": "B2",
    "fr": "Quant aux sanctions, elles relèvent de la compétence nationale.",
    "en": "As for the penalties, they fall within national competence.",
    "options": [
      "Quand aux sanctions, elles relèvent de la compétence nationale.",
      "Quant à la sanction, elle relève de la compétence nationale.",
      "Quant aux sanctions, elles relevaient de la compétence nationale.",
      "Quant aux sanctions, elles relèvent de la compétence nationale."
    ],
    "a": 3,
    "expl": "'Quant aux' versus 'quand aux', and the identical 'relève' and 'relèvent'."
  },
  {
    "id": "dc068",
    "level": "B2",
    "fr": "Il convient que les mesures soient proportionnées à l'objectif poursuivi.",
    "en": "The measures should be proportionate to the objective pursued.",
    "options": [
      "Il convient que les mesures soient proportionnées à l'objectif poursuivi.",
      "Il convient que les mesures sont proportionnées à l'objectif poursuivi.",
      "Il convient que la mesure soit proportionnée à l'objectif poursuivi.",
      "Il conviendrait que les mesures soient proportionnées à l'objectif poursuivi."
    ],
    "a": 0,
    "expl": "Subjunctive 'soient' versus indicative 'sont', and the homophones 'soit' and 'soient'."
  },
  {
    "id": "dc069",
    "level": "B2",
    "fr": "Les émissions devront diminuer de cinquante-cinq pour cent d'ici la fin de la décennie.",
    "en": "Emissions will have to fall by fifty-five percent by the end of the decade.",
    "options": [
      "Les émissions devront diminuer de quinze pour cent d'ici la fin de la décennie.",
      "Les émissions devront diminuer de cinquante-cinq pour cent d'ici la fin de la décennie.",
      "Les émissions devaient diminuer de cinquante-cinq pour cent d'ici la fin de la décennie.",
      "L'émission devra diminuer de cinquante-cinq pour cent d'ici la fin de la décennie."
    ],
    "a": 1,
    "expl": "quinze versus cinquante-cinq, and 'devront' versus 'devaient' and 'devra'."
  },
  {
    "id": "dc070",
    "level": "B2",
    "fr": "Cette disposition n'est plus applicable depuis la dernière réforme.",
    "en": "This provision is no longer applicable since the last reform.",
    "options": [
      "Cette disposition n'est pas applicable depuis la dernière réforme.",
      "Ces dispositions ne sont plus applicables depuis la dernière réforme.",
      "Cette disposition est applicable depuis la dernière réforme.",
      "Cette disposition n'est plus applicable depuis la dernière réforme."
    ],
    "a": 3,
    "expl": "'Ne plus' versus 'ne pas', and the negation that can be dropped altogether."
  },
  {
    "id": "dc071",
    "level": "B2",
    "fr": "Le rapporteur aurait souhaité un calendrier plus contraignant.",
    "en": "The rapporteur would have liked a more binding timetable.",
    "options": [
      "Le rapporteur avait souhaité un calendrier plus contraignant.",
      "Les rapporteurs auraient souhaité un calendrier plus contraignant.",
      "Le rapporteur aurait souhaité un calendrier plus contraignant.",
      "La rapporteure aurait souhaité un calendrier plus contraignant."
    ],
    "a": 2,
    "expl": "Conditionnel passé 'aurait' versus plus-que-parfait 'avait', and 'aurait' versus 'auraient'."
  },
  {
    "id": "dc072",
    "level": "B2",
    "fr": "Nous ne sommes pas sûrs que ce texte soit conforme aux traités.",
    "en": "We are not sure this text complies with the treaties.",
    "options": [
      "Nous ne sommes pas sûrs que ce texte est conforme aux traités.",
      "Nous ne sommes pas sûrs que ce texte soit conforme aux traités.",
      "Nous n'étions pas sûrs que ce texte soit conforme aux traités.",
      "Nous ne sommes pas sûrs que ces textes soient conformes aux traités."
    ],
    "a": 1,
    "expl": "Subjunctive 'soit' versus indicative 'est', and the homophones 'soit' and 'soient'."
  },
  {
    "id": "dc073",
    "level": "B2",
    "fr": "Les négociateurs ont convenu d'un compromis en fin de séance.",
    "en": "The negotiators agreed on a compromise at the end of the session.",
    "options": [
      "Les négociateurs ont convenu d'un compromis en fin de séance.",
      "Le négociateur a convenu d'un compromis en fin de séance.",
      "Les négociateurs avaient convenu d'un compromis en fin de séance.",
      "Les négociateurs ont convenu de compromis en fin de séance."
    ],
    "a": 0,
    "expl": "'Ont convenu' versus 'a convenu', and 'ont' versus 'avaient'."
  },
  {
    "id": "dc074",
    "level": "B2",
    "fr": "La Cour a jugé que la mesure portait atteinte à la vie privée.",
    "en": "The Court ruled that the measure infringed the right to privacy.",
    "options": [
      "La Cour a jugé que les mesures portaient atteinte à la vie privée.",
      "La Cour avait jugé que la mesure portait atteinte à la vie privée.",
      "La Cour a jugé que la mesure porte atteinte à la vie privée.",
      "La Cour a jugé que la mesure portait atteinte à la vie privée."
    ],
    "a": 3,
    "expl": "'Portait' and 'portaient' are homophones, and 'a jugé' versus 'avait jugé'."
  },
  {
    "id": "dc075",
    "level": "B2",
    "fr": "Ces exigences figurent déjà dans le droit national de plusieurs pays.",
    "en": "These requirements already appear in the national law of several countries.",
    "options": [
      "Ses exigences figurent déjà dans le droit national de plusieurs pays.",
      "Ces exigences figurent déjà dans le droit national de plusieurs pays.",
      "Cette exigence figure déjà dans le droit national de plusieurs pays.",
      "Ces exigences figuraient déjà dans le droit national de plusieurs pays."
    ],
    "a": 1,
    "expl": "'Ces' versus 'ses', and the identical 'figure' and 'figurent'."
  },
  {
    "id": "dc076",
    "level": "B2",
    "fr": "Le financement sera versé en trois tranches sur deux ans.",
    "en": "The funding will be paid in three instalments over two years.",
    "options": [
      "Le financement sera versé en trois tranches sur deux ans.",
      "Le financement sera versé en treize tranches sur deux ans.",
      "Le financement sera versé en trois tranches sur douze ans.",
      "Les financements seront versés en trois tranches sur deux ans."
    ],
    "a": 0,
    "expl": "trois versus treize and deux versus douze, plus the silent plural agreement."
  },
  {
    "id": "dc077",
    "level": "B2",
    "fr": "Il faudrait renforcer les contrôles aux frontières extérieures de l'Union.",
    "en": "Border controls at the Union's external borders should be strengthened.",
    "options": [
      "Il faudrait renforcer les contrôles aux frontières extérieures de l'Union.",
      "Il faudra renforcer les contrôles aux frontières extérieures de l'Union.",
      "Il fallait renforcer les contrôles aux frontières extérieures de l'Union.",
      "Il faudrait renforcer le contrôle aux frontières extérieures de l'Union."
    ],
    "a": 0,
    "expl": "Futur 'faudra' versus conditionnel 'faudrait' and imparfait 'fallait'."
  },
  {
    "id": "dc078",
    "level": "B2",
    "fr": "Le texte est prêt à être soumis au vote des députés.",
    "en": "The text is ready to be submitted to a vote by the members.",
    "options": [
      "Le texte est près d'être soumis au vote des députés.",
      "Le texte est prêt à être soumis au vote des députés.",
      "Les textes sont prêts à être soumis au vote des députés.",
      "Le texte était prêt à être soumis au vote des députés."
    ],
    "a": 1,
    "expl": "'Prêt à' versus 'près de', which are nearly indistinguishable in speech."
  },
  {
    "id": "dc079",
    "level": "B2",
    "fr": "Les données collectées doivent être conservées pendant cinq ans maximum.",
    "en": "The data collected must be kept for a maximum of five years.",
    "options": [
      "Les données collectées doivent être conservées pendant cinq ans maximum.",
      "Les données collectées doivent être conservées pendant quinze ans maximum.",
      "La donnée collectée doit être conservée pendant cinq ans maximum.",
      "Les données collectées devaient être conservées pendant cinq ans maximum."
    ],
    "a": 0,
    "expl": "cinq versus quinze, and 'doivent' versus 'devaient'."
  },
  {
    "id": "dc080",
    "level": "B2",
    "fr": "À moins que le Conseil ne s'y oppose, le texte sera publié.",
    "en": "Unless the Council objects, the text will be published.",
    "options": [
      "À moins que le Conseil ne s'y oppose, le texte serait publié.",
      "À moins que le Conseil ne s'y oppose, les textes seront publiés.",
      "À moins que le Conseil ne s'y oppose, le texte sera publié.",
      "À moins que le Conseil ne s'y oppose, le texte a été publié."
    ],
    "a": 2,
    "expl": "Futur 'sera' versus conditionnel 'serait', and singular versus plural of 'texte'."
  },
  {
    "id": "dc081",
    "level": "B2",
    "fr": "Toute demande incomplète sera rejetée sans examen supplémentaire.",
    "en": "Any incomplete application will be rejected without further examination.",
    "options": [
      "Toutes les demandes incomplètes seront rejetées sans examen supplémentaire.",
      "Toute demande incomplète sera rejetée sans examen supplémentaire.",
      "Toute demande incomplète serait rejetée sans examen supplémentaire.",
      "Toute demande incomplète a été rejetée sans examen supplémentaire."
    ],
    "a": 1,
    "expl": "Futur 'sera' versus conditionnel 'serait', and 'toute demande' versus 'toutes les demandes'."
  },
  {
    "id": "dc082",
    "level": "B2",
    "fr": "Le président a rappelé que ces mesures étaient temporaires.",
    "en": "The President recalled that these measures were temporary.",
    "options": [
      "Le président a rappelé que ces mesures étaient temporaires.",
      "Le président a rappelé que ses mesures étaient temporaires.",
      "Le président a rappelé que ces mesures sont temporaires.",
      "Les présidents ont rappelé que ces mesures étaient temporaires."
    ],
    "a": 0,
    "expl": "'Ces' versus 'ses', and 'a rappelé' versus the plural liaison 'ont rappelé'."
  },
  {
    "id": "dc083",
    "level": "B2",
    "fr": "Selon le rapport, il s'agirait d'une infraction au droit européen.",
    "en": "According to the report, this would be a breach of European law.",
    "options": [
      "Selon le rapport, il s'agirait d'une infraction au droit européen.",
      "Selon le rapport, il s'agissait d'une infraction au droit européen.",
      "Selon le rapport, il s'agit d'une infraction au droit européen.",
      "Selon les rapports, il s'agirait d'infractions au droit européen."
    ],
    "a": 0,
    "expl": "Conditionnel 's'agirait' versus imparfait 's'agissait' and présent 's'agit'."
  },
  {
    "id": "dc084",
    "level": "B2",
    "fr": "Le nouveau cadre financier s'appliquera aux régions les plus pauvres.",
    "en": "The new financial framework will apply to the poorest regions.",
    "options": [
      "Le nouveau cadre financier s'appliquera à la région la plus pauvre.",
      "Le nouveau cadre financier s'appliquera aux régions les plus pauvres.",
      "Le nouveau cadre financier s'appliquerait aux régions les plus pauvres.",
      "Les nouveaux cadres financiers s'appliqueront aux régions les plus pauvres."
    ],
    "a": 1,
    "expl": "'Au' and 'aux' are homophones, and futur versus conditionnel on 's'appliquer'."
  },
  {
    "id": "dc085",
    "level": "B2",
    "fr": "Cette clause n'a jamais été invoquée devant la juridiction compétente.",
    "en": "This clause has never been invoked before the competent court.",
    "options": [
      "Cette clause a été invoquée devant la juridiction compétente.",
      "Ces clauses n'ont jamais été invoquées devant la juridiction compétente.",
      "Cette clause n'avait jamais été invoquée devant la juridiction compétente.",
      "Cette clause n'a jamais été invoquée devant la juridiction compétente."
    ],
    "a": 3,
    "expl": "The negation 'n'a jamais' can be missed, and 'n'a' versus the plural 'n'ont'."
  },
  {
    "id": "dc086",
    "level": "B2",
    "fr": "Environ soixante-quinze pour cent des entreprises concernées sont des PME.",
    "en": "About seventy-five percent of the companies concerned are SMEs.",
    "options": [
      "Environ soixante-cinq pour cent des entreprises concernées sont des PME.",
      "Environ soixante-dix pour cent des entreprises concernées sont des PME.",
      "Environ soixante-quinze pour cent des entreprises concernées sont des PME.",
      "Environ soixante-quinze pour cent des entreprises concernées seront des PME."
    ],
    "a": 2,
    "expl": "soixante-cinq, soixante-dix and soixante-quinze, plus 'sont' versus 'seront'."
  },
  {
    "id": "dc087",
    "level": "B2",
    "fr": "Le règlement s'applique aux plateformes ainsi qu'à leurs sous-traitants.",
    "en": "The regulation applies to platforms as well as to their subcontractors.",
    "options": [
      "Le règlement s'applique aux plateformes ainsi qu'à leurs sous-traitants.",
      "Le règlement s'applique aux plateformes ainsi qu'à leur sous-traitant.",
      "Le règlement s'appliquait aux plateformes ainsi qu'à leurs sous-traitants.",
      "Les règlements s'appliquent aux plateformes ainsi qu'à leurs sous-traitants."
    ],
    "a": 0,
    "expl": "'S'applique' and 's'appliquent' are identical, as are 'leur' and 'leurs'."
  },
  {
    "id": "dc088",
    "level": "B2",
    "fr": "Bien que le projet soit ambitieux, son financement reste incertain.",
    "en": "Although the project is ambitious, its funding remains uncertain.",
    "options": [
      "Bien que le projet soit ambitieux, son financement reste incertain.",
      "Bien que le projet est ambitieux, son financement reste incertain.",
      "Bien que les projets soient ambitieux, leur financement reste incertain.",
      "Bien que le projet soit ambitieux, son financement restait incertain."
    ],
    "a": 0,
    "expl": "Subjunctive 'soit' after 'bien que' versus indicative 'est', and 'soit' versus 'soient'."
  },
  {
    "id": "dc089",
    "level": "B2",
    "fr": "On observe une hausse continue des dépenses publiques depuis deux ans.",
    "en": "A steady rise in public spending has been observed for two years.",
    "options": [
      "On observait une hausse continue des dépenses publiques depuis deux ans.",
      "On observe des hausses continues des dépenses publiques depuis deux ans.",
      "On observe une hausse continue des dépenses publiques depuis douze ans.",
      "On observe une hausse continue des dépenses publiques depuis deux ans."
    ],
    "a": 3,
    "expl": "deux versus douze, and présent 'observe' versus imparfait 'observait'."
  },
  {
    "id": "dc090",
    "level": "B2",
    "fr": "Veuillez transmettre ces documents au service compétent avant le trente juin.",
    "en": "Please send these documents to the competent department before the thirtieth of June.",
    "options": [
      "Veuillez transmettre ses documents au service compétent avant le trente juin.",
      "Veuillez transmettre ces documents au service compétent avant le treize juin.",
      "Veuillez transmettre ces documents au service compétent avant le trente juin.",
      "Veuillez transmettre ce document au service compétent avant le trente juin."
    ],
    "a": 2,
    "expl": "'Ces' versus 'ses', trente versus treize, and singular versus plural of 'document'."
  },
  {"id": "dc091", "level": "A2", "fr": "Ils ont deux enfants à l'école communale.", "en": "They have two children at the local school.", "options": ["Ils ont deux enfants à l'école communale.", "Il a deux enfants à l'école communale.", "Ils sont deux enfants à l'école communale.", "Ils ont douze enfants à l'école communale."], "a": 0, "expl": "« Ils ont » carries a /z/ liaison that makes it sound like « il a »; « ils sont » has no /z/ at all. Deux and douze differ only by that same /z/."},
  {"id": "dc092", "level": "A2", "fr": "Il s'est trompé de bus ce matin.", "en": "He took the wrong bus this morning.", "options": ["Il c'est trompé de bus ce matin.", "Il s'est trompé de bus ce matin.", "Il est trompé de bus ce matin.", "Il s'était trompé de bus ce matin."], "a": 1, "expl": "« S'est » belongs to a pronominal verb with a subject (il s'est trompé); « c'est » is ce + est and can never follow il. They sound identical."},
  {"id": "dc093", "level": "A2", "fr": "Ces tickets sont valables une heure.", "en": "These tickets are valid for one hour.", "options": ["Ces tickets sont valables une heure.", "Ses tickets sont valables une heure.", "Ces tickets sont valables un an.", "Ses tickets sont valables un an."], "a": 0, "expl": "Ces = these (demonstrative), ses = his/her (possessive). They are pronounced the same; only the sense of the sentence separates them."},
  {"id": "dc094", "level": "A2", "fr": "Où est-ce que tu vas ce week-end ?", "en": "Where are you going this weekend?", "options": ["Où est-ce que tu vas ce week-end ?", "Où est-ce qu'il va ce week-end ?", "Ou est-ce qu'il va ce week-end ?", "Ou est-ce que tu vas ce week-end ?"], "a": 0, "expl": "Où with an accent means where; ou without one means or. Nothing in the sound distinguishes them, only the grammar of the sentence."},
  {"id": "dc095", "level": "A2", "fr": "On peut y aller à pied, ce n'est pas loin.", "en": "We can walk there, it isn't far.", "options": ["On peu y aller à pied, ce n'est pas loin.", "On peu y aller à pied, ce n'est pas long.", "On peut y aller à pied, ce n'est pas long.", "On peut y aller à pied, ce n'est pas loin."], "a": 3, "expl": "« Peut » is the verb pouvoir, « peu » is the adverb meaning little. After on you always need the verb form peut."},
  {"id": "dc096", "level": "A2", "fr": "Elle va à Anvers en train le lundi.", "en": "She goes to Antwerp by train on Mondays.", "options": ["Elle va a Anvers en train le lundi.", "Elle va à Anvers en tram le lundi.", "Elle va a Anvers en tram le lundi.", "Elle va à Anvers en train le lundi."], "a": 3, "expl": "« À » with an accent is the preposition; « a » without one is the verb avoir. Train and tram are also easy to confuse at speed."},
  {"id": "dc097", "level": "A2", "fr": "Mon frère a acheté une nouvelle voiture.", "en": "My brother has bought a new car.", "options": ["Mon frère à acheté une nouvelle voiture.", "Mon frère a acheté une nouvelle voiture.", "Mon frère a racheté une nouvelle voiture.", "Mes frères ont acheté une nouvelle voiture."], "a": 1, "expl": "Here « a » is the auxiliary avoir, never « à ». The plural « mes frères ont » adds a liaison /z/ that the singular does not have."},
  {"id": "dc098", "level": "A2", "fr": "Les enfants sont allés au parc Josaphat.", "en": "The children went to Josaphat park.", "options": ["Les enfants ont allé au parc Josaphat.", "Les enfants sont allés au parc Josaphat.", "Les enfants sont allés au parc Léopold.", "L'enfant est allé au parc Josaphat."], "a": 1, "expl": "Aller always takes être in the passé composé, so « ont allé » is impossible however plausible it sounds. Josaphat is in Schaerbeek, Léopold near the EU quarter."},
  {"id": "dc099", "level": "A2", "fr": "Je n'ai pas de monnaie sur moi.", "en": "I have no change on me.", "options": ["Je n'ai plus de monnaie sur moi.", "J'ai pas de monnaie sur moi.", "Je n'ai pas de monnaie sur moi.", "Je n'ai pas de monnaie sur lui."], "a": 2, "expl": "Pas and plus are easy to mix up at speed: pas = not any, plus = not any more. « La monnaie » is coins, not money in general (l'argent)."},
  {"id": "dc100", "level": "A2", "fr": "Le magasin ouvre à neuf heures.", "en": "The shop opens at nine.", "options": ["Le magasin ouvre à dix heures.", "Les magasins ouvrent à neuf heures.", "Le magasin ouvre à neuf heures.", "Le magasin ouvrait à neuf heures."], "a": 2, "expl": "Singular and plural sound alike here: only the liaison in « les magasins ouvrent » separates them. Ouvre and ouvrait differ by one vowel."},
  {"id": "dc101", "level": "A2", "fr": "Tu as vu où j'ai mis mon GSM ?", "en": "Did you see where I put my mobile?", "options": ["Tu as vu ou j'ai mis ton GSM ?", "Tu as vu ou j'ai mis mon GSM ?", "Tu as vu où j'ai mis ton GSM ?", "Tu as vu où j'ai mis mon GSM ?"], "a": 3, "expl": "Où (where) and ou (or) are homophones; only where makes sense after « tu as vu ». In Belgium a mobile is « un GSM », in France « un portable »."},
  {"id": "dc102", "level": "A2", "fr": "Il fait froid, prends ton écharpe.", "en": "It's cold, take your scarf.", "options": ["Il fait froid, prends ton écharpe.", "Il fait froid, prend ton écharpe.", "Il faisait froid, prends ton écharpe.", "Il fait froid, prends ton parapluie."], "a": 0, "expl": "Prends (imperative, tu) and prend (il/elle) sound exactly the same; the imperative addressed to tu keeps the -s of the present."},
  {"id": "dc103", "level": "A2", "fr": "Ma sœur habite à Ixelles depuis un an.", "en": "My sister has lived in Ixelles for a year.", "options": ["Ma sœur habite à Ixelles depuis un an.", "Ma sœur habite à Ixelles depuis un mois.", "Mes sœurs habitent à Ixelles depuis un an.", "Ma sœur habitait à Ixelles depuis un an."], "a": 0, "expl": "Habite and habitait differ by one vowel but change the whole meaning: she still lives there, or she used to. Depuis + présent = still going on."},
  {"id": "dc104", "level": "A2", "fr": "Est-ce qu'il y a une pharmacie près d'ici ?", "en": "Is there a chemist's near here?", "options": ["Est-ce qu'il y a une pharmacie prêt d'ici ?", "Est-ce qu'il y a une pharmacie près d'ici ?", "Est-ce qu'il y a une papeterie près d'ici ?", "Est-ce qu'il y avait une pharmacie près d'ici ?"], "a": 1, "expl": "Près (near) and prêt (ready) are homophones with different spellings; only près takes de. Pharmacie and papeterie share a rhythm but not a meaning."},
  {"id": "dc105", "level": "A2", "fr": "Nous avons rendez-vous devant la gare centrale.", "en": "We have an appointment in front of Central Station.", "options": ["Nous avons rendez-vous devant la gare centrale.", "Nous avions rendez-vous devant la gare centrale.", "Nous avons rendez-vous derrière la gare centrale.", "Vous avez rendez-vous devant la gare centrale."], "a": 0, "expl": "Avons and avions differ by a single sound but shift the sentence into the past. Nous avons and vous avez both carry a liaison /z/."},
  {"id": "dc106", "level": "A2", "fr": "Ce sont mes voisins, ils sont très gentils.", "en": "They're my neighbours, they're very nice.", "options": ["Ce sont ses voisins, ils sont très gentils.", "Ce sont mes voisins, il est très gentil.", "Ce sont mes voisins, ils sont très gentils.", "Ce sont mes voisines, elles sont très gentilles."], "a": 2, "expl": "Mes and ses sound almost identical in fast speech. In the feminine, voisines / gentilles change the spelling but barely the sound of the article."},
  {"id": "dc107", "level": "A2", "fr": "Mon voisin est belge et sa femme est grecque.", "en": "My neighbour is Belgian and his wife is Greek.", "options": ["Mon voisin est belge est sa femme est grecque.", "Mon voisin est belge et ta femme est grecque.", "Mon voisin est belge et sa femme est grecque.", "Mon voisin est belge et sa femme est turque."], "a": 2, "expl": "Et (and) and est (is) are pronounced the same in many accents. Test: if you can replace it with « et puis », it is et."},
  {"id": "dc108", "level": "A2", "fr": "Il y a septante places dans la salle.", "en": "There are seventy seats in the room.", "options": ["Il y a septante places dans la salle.", "Il y a septante glaces dans la salle.", "Il y a soixante places dans la salle.", "Il y a cent places dans la salle."], "a": 0, "expl": "Septante is Belgian and Swiss French for 70; France says soixante-dix. Places and glaces differ only by the first consonant."},
  {"id": "dc109", "level": "A2", "fr": "On se voit à midi devant Delhaize ?", "en": "Shall we meet at midday outside Delhaize?", "options": ["On se voit à minuit devant Delhaize ?", "On se voit à midi devant Delhaize ?", "On s'est vu à midi devant Delhaize ?", "On se voyait à midi devant Delhaize ?"], "a": 1, "expl": "« On se voit » (present, a plan) and « on s'est vu » (past) sound very close. Midi and minuit are twelve hours apart on one vowel."},
  {"id": "dc110", "level": "A2", "fr": "Je dois passer à la banque avant six heures.", "en": "I have to go to the bank before six.", "options": ["Je doit passer à la banque avant six heures.", "Je dois passer à la banque avant dix heures.", "Je dois passer à la banque avant six heures.", "Je devais passer à la banque avant six heures."], "a": 2, "expl": "Dois and doit are homophones: the ending follows the subject, je dois / il doit. Six and dix rhyme and are often mistaken in numbers."},
  {"id": "dc111", "level": "A2", "fr": "Il y a beaucoup de monde dans le tram le matin.", "en": "There are a lot of people on the tram in the morning.", "options": ["Il y a beaucoup de monde dans le train le matin.", "Il y avait beaucoup de monde dans le tram le matin.", "Il y a beaucoup de mondes dans le tram le matin.", "Il y a beaucoup de monde dans le tram le matin."], "a": 3, "expl": "« Du monde » means people and is always singular. Tram and train are a classic Brussels mishearing — one vowel apart."},
  {"id": "dc112", "level": "A2", "fr": "Tu peux me prêter ton parapluie ?", "en": "Can you lend me your umbrella?", "options": ["Tu peux me prêter ton parapluie ?", "Tu peu me prêter ton parapluie ?", "Tu peux me prêter ton portefeuille ?", "Tu peux m'apporter ton parapluie ?"], "a": 0, "expl": "Peux (verb) and peu (a little) are homophones; after tu it must be the verb. Prêter is to lend, apporter is to bring."},
  {"id": "dc113", "level": "A2", "fr": "Leur appartement est au troisième étage.", "en": "Their flat is on the third floor.", "options": ["Leurs appartements sont au troisième étage.", "Leur appartement est au troisième étage.", "Leur appartement est au treizième étage.", "L'appartement est au troisième étage."], "a": 1, "expl": "Leur before a singular noun takes no -s; the plural leurs is only visible in writing. Troisième and treizième are a common floor-number trap."},
  {"id": "dc114", "level": "A2", "fr": "La facture arrive toujours à la fin du mois.", "en": "The bill always arrives at the end of the month.", "options": ["La facture arrive toujours à la fin du moi.", "La facture arrive toujours à la fin du mois.", "Les factures arrivent toujours à la fin du mois.", "La facture arrivait toujours à la fin du mois."], "a": 1, "expl": "Le mois (month) and moi (me) are homophones, kept apart only by the article. Singular and plural of -er verbs sound identical in the third person."},
  {"id": "dc115", "level": "A2", "fr": "Je vais chez le coiffeur samedi matin.", "en": "I'm going to the hairdresser's on Saturday morning.", "options": ["Je vais chez la coiffeuse samedi matin.", "J'irai chez le coiffeur samedi matin.", "Je vais chez le coiffeur samedi matin.", "Je vais chez le coiffeur samedi après-midi."], "a": 2, "expl": "Chez + person is the French for at someone's place of work or home. « Je vais » (near, planned) and « j'irai » (future) are both possible here, so listen for the difference."},
  {"id": "dc116", "level": "B1", "fr": "Je vous enverrai le document dès que possible.", "en": "I'll send you the document as soon as I can.", "options": ["Je vous enverrais le document dès que possible.", "Je vous ai envoyé le document dès que possible.", "Je vous enverrai le document dès que possible.", "Je vous enverrai les documents dès que possible."], "a": 2, "expl": "Futur enverrai (-ai) and conditionnel enverrais (-ais) are near-homophones; the future states a commitment, the conditional only a possibility."},
  {"id": "dc117", "level": "B1", "fr": "Il faudrait qu'on se voie avant la réunion.", "en": "We ought to meet before the meeting.", "options": ["Il faudrait qu'on se voit avant la réunion.", "Il faudrait qu'on se voie avant la réunion.", "Il faudrait qu'on se voie après la réunion.", "Il faudrait qu'on les voie avant la réunion."], "a": 1, "expl": "Il faudrait que takes the subjunctive: qu'on se voie, spelled with -e though it sounds like « voit »."},
  {"id": "dc118", "level": "B1", "fr": "Ces documents-là ne sont pas les siens.", "en": "Those documents aren't his.", "options": ["Ses documents-là ne sont pas les siens.", "Ces documents-là ne sont pas les miens.", "Ces documents-là ne sont pas les siens.", "Ces documents-là n'ont pas les siens."], "a": 2, "expl": "Ces (these) and ses (his/her) are homophones, and so are the possessive pronouns les siens / les miens in fast speech. « Ne sont pas » and « n'ont pas » differ only by the liaison."},
  {"id": "dc119", "level": "B1", "fr": "Elle s'est occupée du dossier toute la semaine.", "en": "She handled the file all week.", "options": ["Elle s'est occupé du dossier toute la semaine.", "Elle c'est occupée du dossier toute la semaine.", "Elle s'est occupée du dossier toute la semaine.", "Elles se sont occupées du dossier toute la semaine."], "a": 2, "expl": "S'occuper is pronominal with a direct reflexive pronoun, so the participle agrees: elle s'est occupée. Only the writing shows it; the sound is the same."},
  {"id": "dc120", "level": "B1", "fr": "Nous n'avons plus de place dans la salle.", "en": "We have no more room in the hall.", "options": ["Nous n'avions plus de place dans la salle.", "Nous n'avons pas de place dans la salle.", "Nous n'avons plus de place dans la salle.", "Vous n'avez plus de place dans la salle."], "a": 2, "expl": "Plus (no more) and pas (not any) sit in the same slot and change the meaning entirely. Listen for the /y/ vowel of plus."},
  {"id": "dc121", "level": "B1", "fr": "Le service auquel il faut s'adresser est fermé le vendredi.", "en": "The department you have to contact is closed on Fridays.", "options": ["Le service auquel il faut s'adresser est fermé le vendredi.", "Le service auquel il faut s'adresser est fermé le vendredi matin.", "Le service auxquels il faut s'adresser est fermé le vendredi.", "Le service auquel il faut se rendre est fermé le vendredi."], "a": 0, "expl": "S'adresser À quelqu'un gives auquel with a masculine singular antecedent. Auquel and auxquels are pronounced almost identically."},
  {"id": "dc122", "level": "B1", "fr": "Ils ont oublié de signer le formulaire.", "en": "They forgot to sign the form.", "options": ["Il a oublié de signer le formulaire.", "Ils sont oubliés de signer le formulaire.", "Ils ont oublié de signer le formulaire.", "Ils ont oublié de signer les formulaires."], "a": 2, "expl": "The liaison of « ils ont » (/il zɔ̃/) is the only thing separating it from « il a ». Oublier takes avoir, never être."},
  {"id": "dc123", "level": "B1", "fr": "C'est à vous de compléter la dernière page.", "en": "It's up to you to fill in the last page.", "options": ["S'est à vous de compléter la dernière page.", "C'est a vous de compléter la dernière page.", "C'est à vous de compléter la dernière page.", "C'est à nous de compléter la dernière page."], "a": 2, "expl": "« C'est à + personne de + infinitif » = it is up to someone to do something. C'est (ce + est) never becomes s'est, which needs a pronominal verb."},
  {"id": "dc124", "level": "B1", "fr": "Je ne sais pas où ils sont partis.", "en": "I don't know where they went.", "options": ["Je ne sais pas où ils ont pris.", "Je ne sais pas ou ils sont partis.", "Je ne sais pas où ils sont partis.", "Je ne sais pas où il est parti."], "a": 2, "expl": "Où (where) versus ou (or), and « ils sont » versus « ils ont » — two of the most frequent listening traps in one sentence."},
  {"id": "dc125", "level": "B1", "fr": "On m'a demandé de rappeler avant midi.", "en": "I was asked to call back before midday.", "options": ["On ma demandé de rappeler avant midi.", "On m'a demandé de rappeler avant midi.", "On m'a demandé d'appeler avant midi.", "On m'avait demandé de rappeler avant midi."], "a": 1, "expl": "« M'a » is the pronoun me + the verb a; « ma » is a possessive and cannot stand before a participle. Rappeler is to call back, appeler simply to call."},
  {"id": "dc126", "level": "B1", "fr": "La commune leur a envoyé un courrier recommandé.", "en": "The council sent them a registered letter.", "options": ["La commune leurs a envoyé un courrier recommandé.", "La commune l'a envoyé un courrier recommandé.", "La commune leur a envoyé un courrier recommandé hier.", "La commune leur a envoyé un courrier recommandé."], "a": 3, "expl": "As an indirect object pronoun, leur never takes an -s; only the possessive adjective does (leurs dossiers). « Leur a » and « l'a » differ only by that pronoun."},
  {"id": "dc127", "level": "B1", "fr": "Mieux vaut prendre rendez-vous en ligne.", "en": "It's better to book online.", "options": ["Mieux vaut prendre rendez-vous en ligne.", "Mieux vaut prendre rendez-vous en liaison.", "Mieux vaudrait prendre rendez-vous en ligne.", "Mieux vaux prendre rendez-vous en ligne."], "a": 0, "expl": "« Mieux vaut » is impersonal and always third person singular: vaut with -t, never vaux. Vaut and vaux are homophones."},
  {"id": "dc128", "level": "B1", "fr": "Le contrat prend fin à la fin du mois.", "en": "The contract ends at the end of the month.", "options": ["Le contrat prend fin à la fin du moi.", "Le contrat prend fin à la fin du mois.", "Les contrats prennent fin à la fin du mois.", "Le contrat prenait fin à la fin du mois."], "a": 1, "expl": "« Prendre fin » = to come to an end. Mois and moi are homophones; the article du tells you it is the month."},
  {"id": "dc129", "level": "B1", "fr": "Tout le monde s'est mis d'accord sur la date.", "en": "Everyone agreed on the date.", "options": ["Tout le monde se sont mis d'accord sur la date.", "Tout le monde s'est mis d'accord sur le date.", "Tout le monde s'est mis d'accord sur la date.", "Tous les mondes se sont mis d'accord sur la date."], "a": 2, "expl": "« Tout le monde » is third person singular however many people it covers, so s'est, not se sont. Date is feminine: la date."},
  {"id": "dc130", "level": "B1", "fr": "Je n'ai pas eu le temps de relire la note.", "en": "I didn't have time to reread the note.", "options": ["Je n'ai pas eu le temps de relire la notre.", "Je n'avais pas eu le temps de relire la note.", "Je n'ai pas eu le temps de relire la note de service.", "Je n'ai pas eu le temps de relire la note."], "a": 3, "expl": "« Pas eu » runs together as a single sound; do not lose the participle eu. Note and notre are close in rapid speech."},
  {"id": "dc131", "level": "B1", "fr": "Ce sont des chiffres qu'il faut vérifier.", "en": "These are figures that need checking.", "options": ["Ce sont des chiffres qui faut vérifier.", "Ce sont des chiffres qu'il faut vérifier.", "Ce sont ses chiffres qu'il faut vérifier.", "Ce sont des chiffres qu'il faut modifier."], "a": 1, "expl": "« Qu'il » and « qui » sound nearly the same before a consonant, but il faut needs a subject il, so only qu'il works. Vérifier and modifier share a rhythm."},
  {"id": "dc132", "level": "B1", "fr": "Elle a dit qu'elle serait en retard.", "en": "She said she would be late.", "options": ["Elle a dit qu'elle était en retard.", "Elle a dit qu'elle sera en retard.", "Elle a dit qu'elle serait en retard.", "Elles ont dit qu'elles seraient en retard."], "a": 2, "expl": "After a past reporting verb, the future becomes a conditional: qu'elle serait. « Sera » and « serait » differ only by a final vowel."},
  {"id": "dc133", "level": "B1", "fr": "Nous avons été informés hier après-midi.", "en": "We were informed yesterday afternoon.", "options": ["Nous avons été informés hier après-midi.", "Nous avons été informé hier après-midi.", "Nous avions été informés hier après-midi.", "Nous avons été informées hier après-midi."], "a": 0, "expl": "A passive with a personal subject agrees with that subject: nous avons été informés (m.pl.) or informées (f.pl.). Only spelling shows the difference."},
  {"id": "dc134", "level": "B1", "fr": "Il s'agit d'un simple malentendu entre les deux services.", "en": "It's a simple misunderstanding between the two departments.", "options": ["Il s'agit d'un simple malentendu entre les deux serveurs.", "Ils s'agissent d'un simple malentendu entre les deux services.", "Il s'agissait d'un simple malentendu entre les deux services.", "Il s'agit d'un simple malentendu entre les deux services."], "a": 3, "expl": "S'agir exists only in the impersonal form il s'agit, never in the plural. Services and serveurs are a frequent office mishearing."},
  {"id": "dc135", "level": "B1", "fr": "Les horaires ont changé depuis le mois passé.", "en": "The timetable has changed since last month.", "options": ["Les horaires ont changé depuis le mois passé aussi.", "Les horaires ont changé depuis le mois passé.", "Les horaires sont changés depuis le mois passé.", "L'horaire a changé depuis le mois passé."], "a": 1, "expl": "« Le mois passé » is the usual Belgian phrasing where France prefers « le mois dernier ». Changer takes avoir when it means to be different."},
  {"id": "dc136", "level": "B1", "fr": "Je préférerais qu'on en parle en réunion.", "en": "I'd rather we discussed it in the meeting.", "options": ["Je préférerais qu'on en parle en réunion.", "Je préférerais qu'on en parle en réunions.", "Je préférerais qu'on le parle en réunion.", "Je préférerai qu'on en parle en réunion."], "a": 0, "expl": "Conditionnel préférerais (-ais) softens the request; the future préférerai (-ai) states a decision. Parler DE quelque chose gives en, not le."},
  {"id": "dc137", "level": "B1", "fr": "Vous devez joindre une copie de votre carte d'identité.", "en": "You must enclose a copy of your ID card.", "options": ["Vous devez joindre une copie de votre carte de crédit.", "Vous deviez joindre une copie de votre carte d'identité.", "Vous devriez joindre une copie de votre carte d'identité.", "Vous devez joindre une copie de votre carte d'identité."], "a": 3, "expl": "Devez (obligation now), devriez (advice) and deviez (past) differ by one syllable and change the force of the instruction completely."},
  {"id": "dc138", "level": "B1", "fr": "Personne ne m'a prévenu du changement d'heure.", "en": "Nobody warned me about the change of time.", "options": ["Personne ne ma prévenu du changement d'heure.", "Personne ne m'a prévenu du changement d'heure.", "Personne ne m'a prévenu du changement d'adresse.", "Personne ne m'avait prévenu du changement d'heure."], "a": 1, "expl": "« Ne… personne » puts personne in the subject slot and keeps ne before the verb. M'a (me + a) can never be written ma here."},
  {"id": "dc139", "level": "B1", "fr": "Le bureau sera fermé pendant les congés de Noël.", "en": "The office will be closed over the Christmas holidays.", "options": ["Le bureau serait fermé pendant les congés de Noël.", "Le bureau sera fermé pendant les congés de Noël.", "Le bureau sera fermé pendant les congés de Pâques.", "Les bureaux seront fermés pendant les congés de Noël."], "a": 1, "expl": "Sera (future, certain) and serait (conditional, reported or uncertain) are one vowel apart. Plural seront adds a syllable you can hear if you listen for it."},
  {"id": "dc140", "level": "B1", "fr": "Ils se sont plaints du bruit des travaux.", "en": "They complained about the noise from the works.", "options": ["Ils se sont plaint du bruit des travaux.", "Ils sont plaints du bruit des travaux.", "Ils se sont plaints du bruit des travaux.", "Ils se sont plaints du bruit des travailleurs."], "a": 2, "expl": "Se plaindre exists only as a pronominal verb, so the participle always agrees with the subject: plaints. Travaux and travailleurs are near neighbours in sound."},
  {"id": "dc141", "level": "B1", "fr": "On leur en a déjà parlé la semaine dernière.", "en": "We already spoke to them about it last week.", "options": ["On l'en a déjà parlé la semaine dernière.", "On leur en a déjà parlé la semaine prochaine.", "On leur en avait déjà parlé la semaine dernière.", "On leur en a déjà parlé la semaine dernière."], "a": 3, "expl": "Parler DE quelque chose À quelqu'un gives the cluster leur en, in that order. The whole group is unstressed and easy to swallow."},
  {"id": "dc142", "level": "B1", "fr": "Ce dossier-ci est plus urgent que celui-là.", "en": "This file is more urgent than that one.", "options": ["Ce dossier-ci est plus urgent que celui-ci.", "Se dossier-ci est plus urgent que celui-là.", "Ces dossiers-ci sont plus urgents que ceux-là.", "Ce dossier-ci est plus urgent que celui-là."], "a": 3, "expl": "-ci points to what is near, -là to what is further away; they are the only audible difference between the two halves."},
  {"id": "dc143", "level": "B1", "fr": "Il n'y a que deux places dans le parking.", "en": "There are only two spaces in the car park.", "options": ["Il n'y a que deux places dans le parking.", "Il n'y a pas deux places dans le parking.", "Il n'y a que douze places dans le parking.", "Il y a que deux places dans le parking."], "a": 0, "expl": "« Ne… que » means only, not a negation; « ne… pas » would deny it. Deux and douze differ only by a /z/."},
  {"id": "dc144", "level": "B1", "fr": "J'aurais dû vérifier avant d'envoyer le courriel.", "en": "I should have checked before sending the email.", "options": ["J'aurai dû vérifier avant d'envoyer le courriel.", "J'aurais dû vérifier avant d'envoyer le courriel.", "J'aurais du vérifier avant d'envoyer le courriel.", "J'aurais dû vérifier avant d'envoyer le courrier."], "a": 1, "expl": "Aurais (conditional, regret) and aurai (future) are near-homophones. The participle of devoir carries a circumflex: dû, to separate it from the article du."},
  {"id": "dc145", "level": "B1", "fr": "Elle nous a demandé de patienter quelques minutes.", "en": "She asked us to wait a few minutes.", "options": ["Elle nous a demandé de patienter quelque minute.", "Elle vous a demandé de patienter quelques minutes.", "Elle nous a demandé de patienter quelques minutes.", "Elle nous avait demandé de patienter quelques minutes."], "a": 2, "expl": "Nous and vous as object pronouns are only one consonant apart. Quelques before a plural noun always takes -s, though you cannot hear it."},
  {"id": "dc146", "level": "B2", "fr": "Les conclusions du rapport n'ont pas été rendues publiques.", "en": "The report's conclusions were not made public.", "options": ["Les conclusions du rapport n'ont pas été rendues publiques.", "Les conclusions du rapport ne sont pas été rendues publiques.", "Les conclusions du rapport n'ont pas été rendues publique.", "Les conclusions du rapport n'ont pas encore été rendues publiques."], "a": 0, "expl": "In a passive the attribute agrees with the subject: rendues publiques, feminine plural. « N'ont pas » and « n'ont pas encore » are separated by one unstressed word."},
  {"id": "dc147", "level": "B2", "fr": "Il serait souhaitable que la procédure soit simplifiée.", "en": "It would be desirable for the procedure to be simplified.", "options": ["Il serait souhaitable que les procédures soient simplifiées.", "Il sera souhaitable que la procédure soit simplifiée.", "Il serait souhaitable que la procédure est simplifiée.", "Il serait souhaitable que la procédure soit simplifiée."], "a": 3, "expl": "Il est / serait souhaitable que triggers the subjunctive: soit, not est. Serait and sera are one vowel apart and change certainty into suggestion."},
  {"id": "dc148", "level": "B2", "fr": "Ce à quoi nous nous attendions ne s'est pas produit.", "en": "What we were expecting did not happen.", "options": ["Ce à quoi nous nous attendions ne c'est pas produit.", "Ce à quoi nous nous attendions ne s'est pas reproduit.", "Ce que nous nous attendions ne s'est pas produit.", "Ce à quoi nous nous attendions ne s'est pas produit."], "a": 3, "expl": "S'attendre À gives « ce à quoi ». « Ne s'est pas » belongs to a pronominal verb; « ne c'est pas » is impossible with a preceding subject."},
  {"id": "dc149", "level": "B2", "fr": "Les États membres se sont engagés à réduire leurs émissions.", "en": "The Member States undertook to reduce their emissions.", "options": ["Les États membres se sont engagé à réduire leurs émissions.", "Les États membres sont engagés à réduire leurs émissions.", "Les États membres se sont engagés à réduire leur émission.", "Les États membres se sont engagés à réduire leurs émissions."], "a": 3, "expl": "S'engager à: the reflexive pronoun is direct, so the participle agrees with the subject. Leurs before a plural noun takes -s that you cannot hear."},
  {"id": "dc150", "level": "B2", "fr": "La proposition a été rejetée faute de majorité.", "en": "The proposal was rejected for want of a majority.", "options": ["La proposition a été rejeté faute de majorité.", "La proposition avait été rejetée faute de majorité.", "La proposition a été rejetée faute de minorité.", "La proposition a été rejetée faute de majorité."], "a": 3, "expl": "« Faute de » = for lack of, and takes no article. The passive participle agrees with la proposition: rejetée."},
  {"id": "dc151", "level": "B2", "fr": "Encore faut-il que les moyens suivent.", "en": "That said, the resources still have to follow.", "options": ["Encore faut-il que les moyens suffisent.", "Encore faut-il que les moyens suivant.", "Encore faudrait-il que les moyens suivent.", "Encore faut-il que les moyens suivent."], "a": 3, "expl": "« Encore faut-il que » is a fixed formula with inversion and the subjunctive: qu'ils suivent. Suivent and suffisent are close but say different things."},
  {"id": "dc152", "level": "B2", "fr": "Les délais qui nous ont été imposés sont intenables.", "en": "The deadlines imposed on us are unworkable.", "options": ["Les délais qui nous ont été imposés sont intenables.", "Les délais qu'ils nous ont été imposés sont intenables.", "Les délais qui nous ont été imposés sont inévitables.", "Les délais qui nous ont été imposé sont intenables."], "a": 0, "expl": "Qui is the subject of the relative clause; qu'ils would need its own verb. Intenable (unworkable) and inévitable (unavoidable) share a shape, not a sense."},
  {"id": "dc153", "level": "B2", "fr": "Nous nous en tiendrons au calendrier initial.", "en": "We will stick to the original timetable.", "options": ["Nous nous en tiendrions au calendrier initial.", "Nous nous y tiendrons au calendrier initial.", "Nous nous en tiendrons au calendrier initial ou non.", "Nous nous en tiendrons au calendrier initial."], "a": 3, "expl": "« S'en tenir à quelque chose » = to stick to. Tiendrons (future) and tiendrions (conditional) differ by a single -i- you must listen for."},
  {"id": "dc154", "level": "B2", "fr": "Il n'en demeure pas moins que le texte reste flou.", "en": "The fact remains that the text is vague.", "options": ["Il n'en demeure pas moins que le texte reste flou.", "Il n'en demeurait pas moins que le texte reste flou.", "Il n'en demeure pas moins que le texte reste fou.", "Il n'en demeure pas moins que les textes restent flous."], "a": 0, "expl": "« Il n'en demeure pas moins que » is a fixed concessive formula followed by the indicative. Flou (vague) and fou (mad) differ by one consonant."},
  {"id": "dc155", "level": "B2", "fr": "Les agents concernés seront informés par voie électronique.", "en": "The staff concerned will be notified electronically.", "options": ["Les agents concernés seraient informés par voie électronique.", "Les agents concernés seront informés par voie électronique.", "Les agents concernés seront informé par voie électronique.", "L'agent concerné sera informé par voie électronique."], "a": 1, "expl": "Seront and seraient are a syllable apart: announcement versus hypothesis. « Par voie électronique » is standard administrative wording."},
  {"id": "dc156", "level": "B2", "fr": "Le comité s'est prononcé en faveur de l'amendement.", "en": "The committee came out in favour of the amendment.", "options": ["Le comité s'est prononcée en faveur de l'amendement.", "Le comité c'est prononcé en faveur de l'amendement.", "Le comité s'est prononcé en faveur de l'amendement.", "Le comité s'est prononcé en faveur de l'amendement oral."], "a": 2, "expl": "Se prononcer sur / en faveur de = to take a position. The subject comité is masculine singular, so no ending is added."},
  {"id": "dc157", "level": "B2", "fr": "Ces mesures s'appliqueront à compter du premier septembre.", "en": "These measures will apply from the first of September.", "options": ["Ses mesures s'appliqueront à compter du premier septembre.", "Ces mesures s'appliqueraient à compter du premier septembre.", "Ces mesures s'appliqueront à compter du premier septembre.", "Ces mesures s'appliqueront à compter du premier décembre."], "a": 2, "expl": "« À compter de » = with effect from, the administrative equivalent of à partir de. Ces and ses are homophones."},
  {"id": "dc158", "level": "B2", "fr": "On ne saurait exclure un report du vote.", "en": "A postponement of the vote cannot be ruled out.", "options": ["On ne sauraient exclure un report du vote.", "On ne saurait exclure un rapport du vote.", "On ne saurait exclure un report des votes.", "On ne saurait exclure un report du vote."], "a": 3, "expl": "« Ne saurait » is a formal way of saying cannot, with ne alone and no pas. Un report (postponement) and un rapport (report) are a costly confusion."},
  {"id": "dc159", "level": "B2", "fr": "Ils s'étaient déjà mis d'accord sur ce point.", "en": "They had already agreed on that point.", "options": ["Ils s'était déjà mis d'accord sur ce point.", "Ils s'étaient déjà mis d'accord sur ces points.", "Ils s'étaient déjà mis d'accord sur ce point.", "Ils se sont déjà mis d'accord sur ce point."], "a": 2, "expl": "Plus-que-parfait of a pronominal verb: s'étaient mis, with agreement. « Ce point » and « ces points » sound identical in isolation."},
  {"id": "dc160", "level": "B2", "fr": "La séance a été suspendue pendant une demi-heure.", "en": "The sitting was adjourned for half an hour.", "options": ["La séance a été suspendu pendant une demi-heure.", "La séance avait été suspendue pendant une demi-heure.", "La séance a été suspendue pendant une heure et demie.", "La séance a été suspendue pendant une demi-heure."], "a": 3, "expl": "Une demi-heure keeps demi invariable before the noun; une heure et demie agrees after it. The passive participle agrees with la séance."},
  {"id": "dc161", "level": "B2", "fr": "Les données auxquelles nous avons accès sont incomplètes.", "en": "The data we have access to are incomplete.", "options": ["Les données auxquelles nous avons accès sont incomplètes.", "Les données auxquels nous avons accès sont incomplètes.", "Les données auxquelles nous avons accès sont incomplets.", "Les données à laquelle nous avons accès sont incomplètes."], "a": 0, "expl": "Avoir accès À quelque chose, and données is feminine plural, so auxquelles. Auxquels and auxquelles are pronounced the same."},
  {"id": "dc162", "level": "B2", "fr": "Il aurait fallu prévenir le service juridique.", "en": "The legal service should have been told.", "options": ["Il aurait fallu prévenir le service judiciaire.", "Il a fallu prévenir le service juridique.", "Il aurait fallu prévenir le service juridique.", "Il aurait fallu prévoir le service juridique."], "a": 2, "expl": "« Il aurait fallu + infinitif » expresses a past obligation that was not met. Prévenir (to warn) and prévoir (to plan for) are a classic pair."},
  {"id": "dc163", "level": "B2", "fr": "Ce sont ces critères-là qui posent problème.", "en": "It's those criteria that are the problem.", "options": ["Ce sont ses critères-là qui posent problème.", "Ce sont ces critères-là qui posent problème.", "Ce sont ces critères-ci qui posent problème.", "C'est ces critères-là qui posent problème."], "a": 1, "expl": "« Poser problème » takes no article. Ces/ses are homophones and -là/-ci are the only audible marker of distance."},
  {"id": "dc164", "level": "B2", "fr": "Le rapporteur s'en est expliqué devant la commission.", "en": "The rapporteur explained himself on that before the committee.", "options": ["Le rapporteur s'en est expliqué devant la commission.", "Le rapporteur s'y est expliqué devant la commission.", "Le rapporteur s'en est expliqué devant la Commission européenne.", "Le rapporteur s'en est expliquée devant la commission."], "a": 0, "expl": "S'expliquer DE quelque chose gives en, not y. The commission here is a parliamentary committee, not the Commission."},
  {"id": "dc165", "level": "B2", "fr": "Nous aurions préféré une formulation plus précise.", "en": "We would have preferred a more precise wording.", "options": ["Nous aurions préféré une formulation plus précise.", "Nous aurons préféré une formulation plus précise.", "Nous aurions préféré une formulation plus précieuse.", "Nous aurions préféré une formule plus précise."], "a": 0, "expl": "Aurions (conditional past, regret) and aurons (future perfect) differ by one vowel. Précis (precise) and précieux (precious) are false neighbours."},
  {"id": "dc166", "level": "B2", "fr": "Quoi qu'il en soit, la décision sera publiée demain.", "en": "In any event, the decision will be published tomorrow.", "options": ["Quoi qu'il en soit, la décision sera publiée demain.", "Quoi qu'il en soit, la décision serait publiée demain.", "Quoiqu'il en soit, la décision sera publiée demain.", "Quoi qu'il en soit, les décisions seront publiées demain."], "a": 0, "expl": "« Quoi qu'il en soit » (whatever the case) is written in two words; « quoique » in one means although. Only the sense tells them apart."},
  {"id": "dc167", "level": "B2", "fr": "Les crédits n'ont pas encore été engagés.", "en": "The appropriations have not yet been committed.", "options": ["Les crédits n'ont pas encore été engagé.", "Les crédits n'ont pas encore été engagés.", "Les crédits ne sont pas encore été engagés.", "Le crédit n'a pas encore été engagé."], "a": 1, "expl": "« Engager des crédits » is the budgetary term for committing funds. The auxiliary of the passive is avoir + été, so « ne sont pas été » is impossible."},
  {"id": "dc168", "level": "B2", "fr": "Elle s'est vu confier la coordination du projet.", "en": "She was given the coordination of the project.", "options": ["Elle s'est vue confier la coordination du projet.", "Elle s'est vu confier la coordination du projet.", "Elle s'est vu confier la coordination du projet hier.", "Elle s'est vu confié la coordination du projet."], "a": 1, "expl": "« Se voir + infinitif » is a common administrative passive. The participle vu stays invariable when the subject does not perform the following action."},
  {"id": "dc169", "level": "B2", "fr": "Il est peu probable que le calendrier soit tenu.", "en": "The timetable is unlikely to be met.", "options": ["Il est peu probable que le calendrier soit tenu.", "Il est peu probable que le calendrier soit tendu.", "Il est probable que le calendrier soit tenu.", "Il est peu probable que le calendrier est tenu."], "a": 0, "expl": "Peu probable expresses doubt and takes the subjunctive soit; probable alone would take the indicative. Tenu (met) and tendu (tense) differ by one nasal."},
  {"id": "dc170", "level": "B2", "fr": "Les avis rendus par les experts se contredisent.", "en": "The opinions given by the experts contradict one another.", "options": ["Les avis rendus par les experts se contredisaient.", "Les avis rendu par les experts se contredisent.", "Les avis rendus par les experts se contredisent.", "Les avis rendus par les experts se contredisent parfois."], "a": 2, "expl": "« Rendre un avis » = to deliver an opinion; the participle agrees with les avis. Contredisent and contredisaient are one vowel apart."},
  {"id": "dc171", "level": "B2", "fr": "Ce que nous en pensons n'a pas été demandé.", "en": "What we think about it was not asked.", "options": ["Ce que nous y pensons n'a pas été demandé.", "Ce que nous en pensons n'a pas été demandée.", "Ce dont nous en pensons n'a pas été demandé.", "Ce que nous en pensons n'a pas été demandé."], "a": 3, "expl": "Penser DE quelque chose gives en; penser À would give y. « Ce que » introduces the direct object of pensons."},
  {"id": "dc172", "level": "B2", "fr": "Les négociations ont repris là où elles s'étaient arrêtées.", "en": "The negotiations resumed where they had stopped.", "options": ["Les négociations ont repris la où elles s'étaient arrêtées.", "Les négociations avaient repris là où elles s'étaient arrêtées.", "Les négociations ont repris là où elles s'étaient arrêté.", "Les négociations ont repris là où elles s'étaient arrêtées."], "a": 3, "expl": "« Là où » = where, with an accent on là; « la » without one is an article. The pronominal participle agrees with elles: arrêtées."},
  {"id": "dc173", "level": "B2", "fr": "On leur avait pourtant signalé le risque.", "en": "They had nevertheless been told about the risk.", "options": ["On leur avait pourtant signalé le risque.", "On l'avait pourtant signalé le risque.", "On leur avait pourtant signalé les risques.", "On leurs avait pourtant signalé le risque."], "a": 0, "expl": "Leur as an indirect object pronoun never takes -s. Signaler quelque chose À quelqu'un keeps the person indirect."},
  {"id": "dc174", "level": "B2", "fr": "Il convient de s'en tenir aux faits établis.", "en": "We should stick to the established facts.", "options": ["Il convient de s'y tenir aux faits établis.", "Il conviendrait de s'en tenir aux faits établis.", "Il convient de s'en tenir aux faits établis pour l'instant.", "Il convient de s'en tenir aux faits établis."], "a": 3, "expl": "« Il convient de + infinitif » is formal for one should. S'en tenir à is fixed: the en is part of the expression."},
  {"id": "dc175", "level": "B2", "fr": "Les modifications apportées au texte sont substantielles.", "en": "The changes made to the text are substantial.", "options": ["Les modifications apportés au texte sont substantielles.", "Les modifications apportées au texte sont substantielles.", "Les modifications apportées aux textes sont substantielles.", "Les modifications rapportées au texte sont substantielles."], "a": 1, "expl": "« Apporter des modifications à » is the standard collocation; the participle agrees with modifications. Apportées and rapportées differ by one syllable."},
  {"id": "dc176", "level": "C1", "fr": "Encore eût-il fallu que la question fût posée.", "en": "The question would still have had to be asked.", "options": ["Encore eut-il fallu que la question fut posée.", "Encore eût-il fallu que la question fut posée.", "Encore aurait-il fallu que la question soit posée.", "Encore eût-il fallu que la question fût posée."], "a": 3, "expl": "Eût and fût carry circumflexes marking the literary subjunctive; eut and fut without them are passé simple indicatives. The everyday equivalent is aurait fallu… soit posée."},
  {"id": "dc177", "level": "C1", "fr": "Il s'en est fallu de peu que le texte ne soit rejeté.", "en": "The text came very close to being rejected.", "options": ["Il s'en est fallu de peut que le texte ne soit rejeté.", "Il s'en est fallu de peu que le texte ne soit rejeté.", "Il s'en est fallu de peu que le texte ne soit rejetée.", "Il s'en était fallu de peu que le texte ne soit rejeté."], "a": 1, "expl": "« Il s'en est fallu de peu que + subjonctif » = it was a close thing; the ne is explétif, not a negation. Peu (adverb) and peut (verb) are homophones."},
  {"id": "dc178", "level": "C1", "fr": "Quelque légitimes que soient ces craintes, elles ne changent rien.", "en": "However legitimate these fears may be, they change nothing.", "options": ["Quelque légitimes que soient ces craintes, elles ne changent rien.", "Quelques légitimes que soient ces craintes, elles ne changent rien.", "Quelque légitimes que soient ses craintes, elles ne changent rien.", "Quelque légitime que soient ces craintes, elles ne changent rien."], "a": 0, "expl": "Before an adjective, quelque is an adverb and stays invariable; only before a noun does it agree. The construction takes the subjunctive."},
  {"id": "dc179", "level": "C1", "fr": "Ce dont il s'agit ici relève d'une tout autre logique.", "en": "What is at stake here belongs to an entirely different logic.", "options": ["Ce dont il s'agit ici relève d'une toute autre logique.", "Ce dont il s'agit ici relève d'une tout autre logique.", "Ce dont il s'agit ici relève d'une tout autre logique aussi.", "Ce à quoi il s'agit ici relève d'une tout autre logique."], "a": 1, "expl": "S'agir DE gives « ce dont ». Adverbial tout agrees only before a feminine adjective beginning with a consonant; before a vowel, as in « tout autre », it stays invariable."},
  {"id": "dc180", "level": "C1", "fr": "N'eût été l'intervention du président, la séance aurait tourné court.", "en": "Had it not been for the chair's intervention, the sitting would have been cut short.", "options": ["N'eut été l'intervention du président, la séance aurait tourné court.", "N'eût été l'intervention du président, la séance aurait tourné court.", "N'eût été l'intervention du président, la séance aurait tourné cours.", "N'eût été l'intervention de la présidente, la séance aurait tourné court."], "a": 1, "expl": "« N'eût été » is a literary conditional equivalent to « sans ». « Tourner court » = to be cut short; court here is an adverb, not the noun cours."}
];
