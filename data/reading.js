/* French reading comprehension bank. */
"use strict";

const READING_QUESTIONS = [
  {
    "id": "rd001",
    "level": "B1",
    "passage": "Depuis le mois de mars, la ville de Nantes propose un nouveau service de vélos en libre-service. Deux cents stations ont été installées dans les quartiers du centre, mais aussi en périphérie, là où les transports en commun sont moins fréquents. Pour trente euros par an, les habitants peuvent emprunter un vélo pendant quarante-cinq minutes sans payer de supplément. Les premiers résultats sont encourageants : près de huit mille personnes se sont inscrites en trois mois, et la moitié d'entre elles déclarent utiliser le vélo pour aller au travail. La municipalité reconnaît toutefois que certains quartiers restent mal desservis et promet d'ajouter cinquante stations avant la fin de l'année. Les associations de cyclistes, elles, demandent surtout davantage de pistes protégées.",
    "q": "Que reproche-t-on encore au service, d'après le texte ?",
    "options": [
      "Son tarif annuel, jugé trop élevé par les habitants.",
      "La couverture insuffisante de certains quartiers.",
      "Une durée d'emprunt limitée à dix minutes.",
      "Le très faible nombre d'inscriptions depuis mars."
    ],
    "a": 1,
    "expl": "Le texte indique que la municipalité reconnaît que certains quartiers restent mal desservis. (The other options contradict the figures given.)"
  },
  {
    "id": "rd002",
    "level": "B1",
    "passage": "Dans une entreprise de logiciels installée à Lyon, les salariés travaillent désormais trois jours par semaine depuis chez eux. La direction a pris cette décision après une enquête interne : plus de deux tiers des employés souhaitaient conserver la souplesse découverte pendant la pandémie. Les bureaux ont été réaménagés en espaces partagés, ce qui a permis de réduire la surface louée et donc les charges. Tout le monde n'y trouve pourtant pas son compte. Les jeunes recrues expliquent qu'elles apprennent moins vite lorsqu'elles ne peuvent pas poser une question à un collègue assis à côté d'elles. L'entreprise a donc rendu obligatoire la présence du mardi, journée consacrée aux réunions d'équipe et à l'accompagnement des nouveaux arrivants.",
    "q": "Pourquoi la présence du mardi est-elle devenue obligatoire ?",
    "options": [
      "Parce que les charges de l'entreprise ont fortement augmenté.",
      "Parce que la direction souhaite supprimer le télétravail.",
      "Parce que les nouveaux salariés ont besoin d'être accompagnés.",
      "Parce que les bureaux sont trop petits les autres jours."
    ],
    "a": 2,
    "expl": "Le mardi est consacré aux réunions d'équipe et à l'accompagnement des nouveaux arrivants, qui apprennent moins vite à distance."
  },
  {
    "id": "rd003",
    "level": "B1",
    "passage": "Chaque samedi matin, la place du village accueille une vingtaine de producteurs venus des communes voisines. On y trouve des légumes, des fromages, du pain et, depuis l'an dernier, des plats préparés. Le marché a été créé il y a six ans par un groupe d'habitants qui regrettaient la fermeture de la dernière épicerie. Aujourd'hui, il attire aussi des clients des villes proches, séduits par des prix souvent comparables à ceux des supermarchés. Les producteurs, eux, apprécient de vendre directement, sans intermédiaire. La mairie envisage maintenant d'ouvrir un second marché le mercredi soir, afin de permettre aux personnes qui travaillent en semaine de faire leurs achats sans se déplacer le week-end.",
    "q": "Pour quelle raison ce marché a-t-il été créé ?",
    "options": [
      "Pour compenser la fermeture de la dernière épicerie du village.",
      "Pour attirer des touristes étrangers dans la région.",
      "Pour concurrencer les restaurants installés au village.",
      "Pour vendre uniquement des plats préparés."
    ],
    "a": 0,
    "expl": "Des habitants ont lancé le marché parce qu'ils regrettaient la fermeture de la dernière épicerie."
  },
  {
    "id": "rd004",
    "level": "B1",
    "passage": "Les usagers de la ligne régionale qui relie Clermont-Ferrand à Saint-Étienne se plaignent depuis des mois de retards répétés. Selon les chiffres publiés par la compagnie, un train sur cinq est arrivé avec plus de dix minutes de retard l'hiver dernier. La cause principale n'est pas le manque de conducteurs, comme on l'a souvent écrit, mais l'état des voies : certaines portions datent des années soixante et imposent de rouler à vitesse réduite. Des travaux sont prévus, mais ils obligeront à fermer la ligne pendant huit semaines l'été prochain. Des autocars de remplacement seront mis en place. Les associations d'usagers demandent que ces autocars desservent aussi les petites gares, souvent oubliées dans ce type de dispositif.",
    "q": "Quelle est la cause principale des retards sur cette ligne ?",
    "options": [
      "Le manque de conducteurs dans la compagnie.",
      "La fermeture progressive des petites gares.",
      "Le mauvais état d'une partie des voies.",
      "Un nombre trop élevé de voyageurs en hiver."
    ],
    "a": 2,
    "expl": "Le texte écarte explicitement le manque de conducteurs et désigne l'état ancien des voies, qui impose une vitesse réduite."
  },
  {
    "id": "rd005",
    "level": "B1",
    "passage": "La bibliothèque municipale ouvrira désormais le dimanche après-midi, de quatorze heures à dix-huit heures. Cette décision répond à une demande ancienne des étudiants, qui manquaient de lieux calmes pour réviser le week-end. Pour financer ces heures supplémentaires, la ville a renoncé à ouvrir le lundi matin, une matinée pendant laquelle la fréquentation était très faible. Le personnel, consulté avant la réforme, a obtenu en échange une organisation par roulement : chaque agent travaillera au maximum un dimanche par mois. La bibliothèque en profite pour élargir son offre numérique et proposer, à partir de septembre, le prêt d'ordinateurs portables aux personnes qui n'en possèdent pas chez elles.",
    "q": "Comment la ville finance-t-elle l'ouverture du dimanche ?",
    "options": [
      "En augmentant le prix de l'abonnement annuel.",
      "En faisant appel à des bénévoles extérieurs.",
      "En fermant la bibliothèque pendant tout le mois de septembre.",
      "En renonçant à l'ouverture du lundi matin."
    ],
    "a": 3,
    "expl": "Les heures du dimanche sont financées par la suppression de l'ouverture du lundi matin, peu fréquentée."
  },
  {
    "id": "rd006",
    "level": "B1",
    "passage": "Dans plusieurs collèges de la région, les élèves commencent une deuxième langue vivante dès la sixième, au lieu de la cinquième. L'expérimentation, lancée il y a trois ans, concerne aujourd'hui quatre mille élèves. Les enseignants observent que les débutants progressent surtout à l'oral, parce que les séances sont courtes mais fréquentes : trois fois quarante-cinq minutes par semaine. Les résultats à l'écrit, en revanche, ne diffèrent guère de ceux des classes traditionnelles. Certains parents craignent une surcharge de travail, mais les emplois du temps ont été allégés ailleurs, notamment en réduisant les heures d'étude surveillée. Le rectorat doit décider au printemps s'il étend le dispositif à l'ensemble du département.",
    "q": "Quel effet les enseignants constatent-ils ?",
    "options": [
      "Une nette amélioration des résultats à l'écrit.",
      "Une baisse générale du niveau des élèves.",
      "Des progrès qui portent surtout sur l'oral.",
      "Un allongement de la journée scolaire des élèves."
    ],
    "a": 2,
    "expl": "Les enseignants notent des progrès à l'oral, tandis que l'écrit ne diffère guère des classes traditionnelles."
  },
  {
    "id": "rd007",
    "level": "B1",
    "passage": "Loger chez une personne âgée en échange d'un peu de présence : la formule séduit de plus en plus d'étudiants. À Bordeaux, une association met en relation des retraités disposant d'une chambre libre et des jeunes qui cherchent un logement abordable. L'étudiant paie un loyer modeste, parfois rien du tout, et s'engage à être présent plusieurs soirs par semaine. Il ne s'agit pas d'un emploi : l'association insiste, le jeune n'a ni à faire le ménage ni à donner des soins. Une convention précise les horaires et la durée du séjour, généralement une année universitaire. Le dispositif reste limité, faute de candidats âgés suffisamment nombreux, mais les retours sont positifs des deux côtés.",
    "q": "Que précise l'association au sujet du rôle de l'étudiant ?",
    "options": [
      "Il doit assurer des soins quotidiens à son hôte.",
      "Il n'a à effectuer ni tâches ménagères ni soins.",
      "Il doit verser un loyer élevé chaque mois.",
      "Il doit être présent tous les soirs de la semaine."
    ],
    "a": 1,
    "expl": "L'association souligne qu'il ne s'agit pas d'un emploi et que le jeune n'a ni à faire le ménage ni à donner des soins."
  },
  {
    "id": "rd008",
    "level": "B1",
    "passage": "Depuis janvier, les habitants du quartier des Peupliers disposent de bacs jaunes pour l'ensemble des emballages, y compris les pots de yaourt et les films plastiques, qu'il fallait auparavant jeter avec les ordures ménagères. La collectivité a accompagné ce changement d'une campagne d'information : des ambassadeurs du tri sont passés dans les immeubles pour expliquer les nouvelles consignes. Résultat, la quantité d'emballages collectés a augmenté de dix-huit pour cent en six mois. Le problème vient surtout des erreurs : trop de sacs contiennent encore des déchets alimentaires, qui salissent le papier et compliquent le recyclage. La collectivité prévoit donc de distribuer, dès l'automne, des composteurs collectifs au pied des immeubles.",
    "q": "Quel problème subsiste malgré la campagne d'information ?",
    "options": [
      "Les habitants refusent d'utiliser les bacs jaunes.",
      "La quantité d'emballages collectés diminue nettement.",
      "Des déchets alimentaires se retrouvent dans les bacs de tri.",
      "Les composteurs collectifs sont déjà trop nombreux."
    ],
    "a": 2,
    "expl": "Le texte signale que trop de sacs contiennent encore des déchets alimentaires, ce qui gêne le recyclage."
  },
  {
    "id": "rd009",
    "level": "B1",
    "passage": "Dans cette petite entreprise de trente salariés, deux pères ont pris cette année un congé parental de plusieurs mois. C'était une première. Le dirigeant reconnaît qu'il a d'abord craint la désorganisation, puis il a réparti les tâches autrement et embauché un remplaçant en contrat court. Il en tire aujourd'hui un bilan positif : l'entreprise a gagné en souplesse, car plusieurs personnes savent désormais accomplir le même travail. Les salariés interrogés soulignent surtout l'importance de l'exemple donné par la direction. Tant que le congé restait théorique, personne n'osait le demander. Depuis, trois autres collaborateurs ont annoncé leur intention d'en bénéficier l'an prochain, dont un cadre.",
    "q": "Selon le dirigeant, qu'a apporté cette expérience à l'entreprise ?",
    "options": [
      "Une forte baisse des coûts salariaux.",
      "Une réduction du temps de travail pour tous.",
      "La suppression définitive des contrats courts.",
      "Une plus grande polyvalence des équipes."
    ],
    "a": 3,
    "expl": "Le dirigeant explique que l'entreprise a gagné en souplesse parce que plusieurs personnes savent désormais faire le même travail."
  },
  {
    "id": "rd010",
    "level": "B1",
    "passage": "Les sentiers de randonnée du massif attirent chaque été des milliers de marcheurs, et cette fréquentation n'est pas sans conséquence. Sur les itinéraires les plus connus, la végétation disparaît de part et d'autre du chemin, élargi par les passages répétés. L'office de tourisme a donc choisi une stratégie simple : mieux faire connaître les vallées voisines, tout aussi belles mais désertées. Des cartes gratuites présentent une dizaine de parcours peu fréquentés, avec les horaires des navettes qui permettent d'y accéder sans voiture. Les refuges de ces vallées, longtemps menacés de fermeture, ont vu leur fréquentation doubler. Les gardiens demandent maintenant que les réservations deviennent obligatoires, afin d'éviter les arrivées imprévues en fin de journée.",
    "q": "Quelle stratégie l'office de tourisme a-t-il retenue ?",
    "options": [
      "Interdire l'accès aux sentiers les plus connus.",
      "Rendre payante l'entrée du massif.",
      "Fermer les refuges les plus menacés.",
      "Orienter les marcheurs vers des vallées moins fréquentées."
    ],
    "a": 3,
    "expl": "L'office fait connaître les vallées voisines désertées grâce à des cartes gratuites de parcours peu fréquentés."
  },
  {
    "id": "rd011",
    "level": "B1",
    "passage": "La commune sert depuis la rentrée des repas composés à soixante pour cent de produits biologiques dans ses quatre écoles. Contrairement à ce que l'on pouvait craindre, le prix payé par les familles n'a pas augmenté. Les cuisiniers expliquent comment : ils ont réduit la part de viande, plus coûteuse, et proposent désormais un menu végétarien deux fois par semaine. Ils ont aussi travaillé sur le gaspillage, en pesant chaque jour les restes et en ajustant les quantités. Un tiers de la nourriture partait à la poubelle il y a deux ans ; ce chiffre est tombé à douze pour cent. La commune souhaite maintenant acheter directement auprès des agriculteurs du département.",
    "q": "Pourquoi le prix des repas n'a-t-il pas augmenté ?",
    "options": [
      "Parce que la part de viande et le gaspillage ont diminué.",
      "Parce que la commune a reçu une aide exceptionnelle de l'État.",
      "Parce que les cuisiniers sont désormais moins nombreux.",
      "Parce que les familles paient un abonnement annuel unique."
    ],
    "a": 0,
    "expl": "Les économies proviennent de la réduction de la viande, plus coûteuse, et de la baisse du gaspillage."
  },
  {
    "id": "rd012",
    "level": "B1",
    "passage": "Reprendre des études après quarante ans n'a plus rien d'exceptionnel. Dans ce centre de formation, la moyenne d'âge des inscrits dépasse trente-cinq ans, et beaucoup suivent les cours le soir, après leur journée de travail. Les motivations varient : certains visent une promotion, d'autres préparent une reconversion complète, souvent vers les métiers du soin ou du numérique. La difficulté principale n'est pas le niveau des cours, disent les formateurs, mais l'organisation de la vie quotidienne, en particulier pour les parents de jeunes enfants. Le centre a donc mis en place un service de garde le mardi et le jeudi soir. Depuis, le taux d'abandon en cours d'année a nettement reculé.",
    "q": "D'après les formateurs, quel est le principal obstacle rencontré par ces adultes ?",
    "options": [
      "Le coût trop élevé des inscriptions.",
      "L'organisation de leur vie quotidienne.",
      "Le niveau des cours, jugé trop difficile.",
      "L'absence de débouchés professionnels."
    ],
    "a": 1,
    "expl": "Les formateurs désignent l'organisation de la vie quotidienne, surtout pour les parents de jeunes enfants, et non le niveau des cours."
  },
  {
    "id": "rd013",
    "level": "B2",
    "passage": "La procédure législative ordinaire confère au Parlement européen et au Conseil un pouvoir de décision équivalent. Un texte proposé par la Commission fait l'objet d'une première lecture dans chacune des deux institutions ; si leurs positions divergent, une seconde lecture s'engage, puis, le cas échéant, une procédure de conciliation. Dans la pratique, la majorité des dossiers se conclut dès la première lecture, à l'issue de négociations informelles réunissant des représentants des trois institutions. Ces réunions, appelées trilogues, ont été critiquées pour leur opacité, et des règles de publicité des documents ont été progressivement adoptées. Elles présentent néanmoins l'avantage de réduire sensiblement la durée d'adoption des actes, laquelle dépasserait sans cela plusieurs années pour les dossiers les plus techniques.",
    "q": "Quel reproche a été adressé aux trilogues ?",
    "options": [
      "Leur lenteur excessive par rapport aux lectures formelles.",
      "L'absence du Conseil autour de la table.",
      "Leur caractère purement facultatif.",
      "Leur manque de transparence."
    ],
    "a": 3,
    "expl": "Le texte indique que les trilogues ont été critiqués pour leur opacité, ce qui a conduit à des règles de publicité des documents."
  },
  {
    "id": "rd014",
    "level": "B2",
    "passage": "La Commission européenne détient, en règle générale, le monopole de l'initiative législative : sans proposition de sa part, ni le Parlement ni le Conseil ne peuvent adopter un acte. Ce monopole se justifie par la volonté d'assurer la cohérence de l'action de l'Union et de préserver l'intérêt général européen face aux préférences nationales. Il n'est cependant pas absolu. Le Parlement et le Conseil peuvent demander à la Commission de soumettre une proposition, et celle-ci doit motiver son refus le cas échéant. À cela s'ajoute l'initiative citoyenne européenne, qui permet à un million de ressortissants issus d'un nombre significatif d'États membres d'inviter l'institution à agir. Ces mécanismes créent une obligation de réponse, non une obligation de légiférer.",
    "q": "Quelle est la portée exacte de ces mécanismes ?",
    "options": [
      "Ils obligent la Commission à présenter un texte législatif.",
      "Ils transfèrent le droit d'initiative au Parlement européen.",
      "Ils imposent une réponse motivée, sans contraindre à légiférer.",
      "Ils suppriment le monopole de la Commission dans tous les domaines."
    ],
    "a": 2,
    "expl": "La dernière phrase précise qu'il existe une obligation de réponse et non une obligation de légiférer."
  },
  {
    "id": "rd015",
    "level": "B2",
    "passage": "Le renvoi préjudiciel constitue le principal instrument de dialogue entre les juridictions nationales et la Cour de justice de l'Union européenne. Lorsqu'une question d'interprétation du droit de l'Union se pose devant un juge national, celui-ci peut interroger la Cour ; il y est même tenu lorsqu'il statue en dernier ressort, sauf si la réponse s'impose avec évidence. La Cour ne tranche pas le litige : elle dit le droit, et la juridiction de renvoi en tire les conséquences pour l'affaire dont elle est saisie. Ce mécanisme a permis de dégager des principes structurants, tels que la primauté et l'effet direct. Il assure surtout une application uniforme des règles communes sur l'ensemble du territoire de l'Union.",
    "q": "Quel est le rôle de la Cour dans un renvoi préjudiciel ?",
    "options": [
      "Elle juge l'affaire à la place de la juridiction nationale.",
      "Elle interprète le droit sans trancher le litige lui-même.",
      "Elle annule la décision rendue par le juge national.",
      "Elle condamne l'État membre dont relève la juridiction."
    ],
    "a": 1,
    "expl": "Le texte précise que la Cour dit le droit et que la juridiction de renvoi en tire les conséquences pour l'affaire."
  },
  {
    "id": "rd016",
    "level": "B2",
    "passage": "Instauré à la suite de la crise des dettes souveraines, le Semestre européen organise chaque année la coordination des politiques économiques et budgétaires des États membres. Le cycle s'ouvre à l'automne par une analyse d'ensemble de la situation de l'Union ; il se poursuit au printemps par des recommandations adressées à chaque pays, adoptées par le Conseil sur proposition de la Commission. Ces recommandations ne sont pas juridiquement contraignantes, ce qui explique qu'une part importante d'entre elles ne soit que partiellement suivie d'effet. Leur portée réelle tient davantage à la pression exercée par les pairs et par les marchés qu'à une sanction formelle. L'articulation du Semestre avec les plans nationaux de relance a toutefois renforcé son influence, en conditionnant certains versements.",
    "q": "Pourquoi les recommandations par pays sont-elles souvent peu appliquées ?",
    "options": [
      "Parce qu'elles sont publiées trop tardivement dans l'année.",
      "Parce qu'elles émanent du seul Parlement européen.",
      "Parce qu'elles ne concernent que les États de la zone euro.",
      "Parce qu'elles ne possèdent pas de valeur juridiquement contraignante."
    ],
    "a": 3,
    "expl": "Le texte relie explicitement le suivi partiel des recommandations à leur absence de caractère contraignant. (non-binding = no formal sanction)"
  },
  {
    "id": "rd017",
    "level": "B2",
    "passage": "Le mandat de la Banque centrale européenne est hiérarchisé : la stabilité des prix constitue son objectif principal, les autres objectifs de l'Union n'étant soutenus que pour autant que cette priorité ne soit pas compromise. Pour l'atteindre, l'institution agit principalement sur les taux directeurs, dont les variations se transmettent au coût du crédit, puis à la demande et, avec un décalage de plusieurs trimestres, aux prix. Ce délai explique la difficulté de l'exercice : une politique calibrée sur la seule inflation observée risque toujours d'arriver trop tard. Les décisions reposent donc sur des projections, exercice incertain lorsque les chocs proviennent de l'offre, comme les prix de l'énergie, sur lesquels la politique monétaire n'exerce qu'une influence limitée.",
    "q": "Quelle difficulté centrale le texte met-il en évidence ?",
    "options": [
      "Le décalage entre les décisions monétaires et leurs effets sur les prix.",
      "L'absence d'objectif clairement assigné à la Banque centrale.",
      "L'impossibilité juridique de modifier les taux directeurs.",
      "Le refus des États membres d'appliquer les décisions de la Banque."
    ],
    "a": 0,
    "expl": "Le passage insiste sur le décalage de plusieurs trimestres, qui oblige à agir sur la base de projections."
  },
  {
    "id": "rd018",
    "level": "B2",
    "passage": "La libre circulation des professionnels suppose que les qualifications acquises dans un État membre soient reconnues dans les autres. Le droit de l'Union organise cette reconnaissance selon deux voies : une reconnaissance automatique pour un nombre restreint de professions dont la formation a été harmonisée, comme celles de médecin ou d'architecte, et un régime général reposant sur une comparaison au cas par cas. Dans ce second cas, l'autorité d'accueil peut imposer des mesures de compensation, épreuve d'aptitude ou stage d'adaptation, lorsqu'elle constate des différences substantielles. Les obstacles qui subsistent sont moins juridiques qu'administratifs : longueur des procédures, exigences linguistiques appliquées de manière disproportionnée, difficulté à obtenir certaines pièces auprès de l'État d'origine.",
    "q": "De quelle nature sont les obstacles qui subsistent, selon le texte ?",
    "options": [
      "Ils sont essentiellement administratifs et pratiques.",
      "Ils sont exclusivement de nature juridique.",
      "Ils tiennent à l'absence de reconnaissance automatique pour les médecins.",
      "Ils résultent de l'interdiction des stages d'adaptation."
    ],
    "a": 0,
    "expl": "La dernière phrase qualifie les obstacles de moins juridiques qu'administratifs et en donne trois exemples concrets."
  },
  {
    "id": "rd019",
    "level": "B2",
    "passage": "La politique de cohésion mobilise environ un tiers du budget de l'Union afin de réduire les écarts de développement entre les régions. Les fonds sont programmés pour sept ans et mis en œuvre en gestion partagée : la Commission approuve les programmes, mais ce sont les autorités nationales et régionales qui sélectionnent les projets et effectuent les paiements. Ce partage explique à la fois la proximité du dispositif avec les territoires et sa complexité administrative, souvent dénoncée par les petits porteurs de projets. Les évaluations font apparaître des effets réels sur les infrastructures et l'accès à l'emploi, mais aussi une capacité d'absorption inégale : certaines régions peinent à mobiliser les crédits qui leur sont attribués, faute d'ingénierie suffisante.",
    "q": "Que désigne l'expression « capacité d'absorption » dans ce passage ?",
    "options": [
      "L'aptitude à attirer des investisseurs privés supplémentaires.",
      "L'aptitude à utiliser effectivement les crédits alloués.",
      "La possibilité de reporter les fonds sur sept années.",
      "Le pouvoir de la Commission de récupérer les sommes versées."
    ],
    "a": 1,
    "expl": "La suite de la phrase explicite le terme : certaines régions peinent à mobiliser les crédits qui leur sont attribués."
  },
  {
    "id": "rd020",
    "level": "B2",
    "passage": "Le système d'échange de quotas d'émission repose sur un principe simple : un plafond d'émissions est fixé, puis abaissé chaque année, et les installations couvertes doivent restituer un quota pour chaque tonne de dioxyde de carbone rejetée. Le prix se forme sur un marché, ce qui oriente les réductions vers les sites où elles coûtent le moins cher. Longtemps, l'allocation gratuite de quotas aux industries exposées à la concurrence internationale a affaibli ce signal-prix. Son extinction progressive s'accompagne de l'introduction d'un mécanisme d'ajustement carbone aux frontières, destiné à tenir compte du contenu carbone des importations. L'enjeu est d'éviter que la production, et donc les émissions, ne se déplace simplement hors de l'Union.",
    "q": "À quoi sert le mécanisme d'ajustement carbone aux frontières ?",
    "options": [
      "À financer directement la recherche sur les énergies renouvelables.",
      "À supprimer le plafond annuel d'émissions.",
      "À éviter un simple déplacement des émissions hors de l'Union.",
      "À réserver les quotas gratuits aux entreprises importatrices."
    ],
    "a": 2,
    "expl": "La dernière phrase énonce l'objectif : empêcher que la production et les émissions ne se déplacent hors de l'Union. (carbon leakage)"
  },
  {
    "id": "rd021",
    "level": "B2",
    "passage": "La directive-cadre sur l'eau a introduit une logique inédite : la gestion par bassin hydrographique, sans considération des frontières administratives, et une obligation de résultat, le bon état des masses d'eau. Trois décennies plus tard, le bilan est contrasté. La qualité chimique s'est améliorée là où les rejets industriels et urbains étaient les principaux responsables, grâce aux stations d'épuration. En revanche, les pollutions diffuses d'origine agricole, nitrates et produits phytosanitaires, restent difficiles à maîtriser, car elles procèdent d'une multitude de sources dispersées. À cela s'ajoute la question quantitative, longtemps secondaire, que les épisodes de sécheresse ont replacée au premier plan. Les dérogations accordées aux États membres se sont multipliées, au point d'affaiblir la crédibilité de l'échéance initiale.",
    "q": "Pourquoi les pollutions d'origine agricole sont-elles plus difficiles à maîtriser ?",
    "options": [
      "Parce qu'elles proviennent d'une multitude de sources dispersées.",
      "Parce que la directive ne les vise pas du tout.",
      "Parce que les stations d'épuration ont été progressivement fermées.",
      "Parce qu'elles ne touchent que les eaux souterraines profondes."
    ],
    "a": 0,
    "expl": "Le texte oppose les rejets ponctuels, traitables en station, aux pollutions diffuses issues de sources multiples."
  },
  {
    "id": "rd022",
    "level": "B2",
    "passage": "Le règlement général sur la protection des données a substitué à la logique de déclaration préalable une logique de responsabilité : il appartient au responsable de traitement de démontrer, à tout moment, qu'il respecte les principes du texte. Cette obligation se traduit par une documentation interne, des analyses d'impact pour les traitements les plus sensibles et, dans certains cas, la désignation d'un délégué à la protection des données. Les sanctions, dont le plafond est exprimé en pourcentage du chiffre d'affaires mondial, ont indéniablement retenu l'attention des directions. L'application demeure toutefois inégale d'un État à l'autre, en raison des moyens très variables des autorités de contrôle et de la lenteur des procédures transfrontalières confiées à l'autorité du pays d'établissement principal.",
    "q": "Quel changement de logique le règlement a-t-il opéré ?",
    "options": [
      "La suppression de toute sanction de nature financière.",
      "L'obligation pour chaque État de créer une autorité unique.",
      "L'interdiction pure et simple des traitements transfrontaliers.",
      "Le passage de la déclaration préalable à une responsabilité démontrable."
    ],
    "a": 3,
    "expl": "La première phrase oppose l'ancienne déclaration préalable à l'obligation de démontrer la conformité à tout moment. (accountability)"
  },
  {
    "id": "rd023",
    "level": "B2",
    "passage": "La commande publique représente une part considérable du produit intérieur brut européen, ce qui explique l'attention portée à ses règles. Les directives imposent, au-delà de certains seuils, une publicité préalable et des procédures objectives de sélection, afin d'ouvrir les marchés à l'ensemble des opérateurs de l'Union. La logique du moins-disant a longtemps prévalu dans la pratique des acheteurs, alors même que les textes autorisent la prise en compte de critères qualitatifs, sociaux ou environnementaux. Les administrations invoquent la sécurité juridique : un critère chiffré se conteste plus difficilement devant le juge. Les acheteurs les plus aguerris démontrent cependant qu'une pondération soigneusement motivée résiste au contentieux et améliore la qualité des prestations obtenues.",
    "q": "Pourquoi les acheteurs publics privilégient-ils souvent le prix le plus bas ?",
    "options": [
      "Parce que les directives leur interdisent tout autre critère.",
      "Parce que les critères qualitatifs coûtent plus cher à évaluer.",
      "Parce qu'un critère chiffré se défend plus aisément en cas de recours.",
      "Parce que les seuils de publicité sont jugés trop élevés."
    ],
    "a": 2,
    "expl": "Les administrations invoquent la sécurité juridique, un critère chiffré étant plus difficile à contester devant le juge."
  },
  {
    "id": "rd024",
    "level": "B2",
    "passage": "Chaque année, la Cour des comptes européenne examine la fiabilité des comptes de l'Union et la régularité des opérations sous-jacentes. Il convient de ne pas confondre son constat avec une accusation de fraude : un taux d'erreur mesure des dépenses effectuées en méconnaissance des règles d'éligibilité, ce qui recouvre le plus souvent des irrégularités administratives et non des détournements. Les erreurs se concentrent dans les domaines où les règles sont complexes et la gestion partagée avec les États membres. Sur la base de ce rapport, le Parlement européen décide d'accorder ou non la décharge à la Commission. Un refus, rare, revêt une portée essentiellement politique, mais il engage l'institution à présenter un plan de correction.",
    "q": "Que mesure principalement le taux d'erreur relevé par la Cour ?",
    "options": [
      "Des dépenses non conformes aux règles d'éligibilité.",
      "Le nombre de fraudes avérées et sanctionnées.",
      "Le retard des paiements versés aux bénéficiaires.",
      "Le coût administratif des contrôles effectués."
    ],
    "a": 0,
    "expl": "Le texte précise qu'il s'agit d'irrégularités administratives au regard des règles d'éligibilité, et non de détournements."
  },
  {
    "id": "rd025",
    "level": "B2",
    "passage": "Le Médiateur européen instruit les plaintes relatives à des cas de mauvaise administration dans les institutions et organes de l'Union. La notion est entendue largement : refus injustifié d'accès à un document, retard excessif, absence de motivation d'une décision, conflit d'intérêts non traité. Le Médiateur ne dispose d'aucun pouvoir de contrainte ; il formule des recommandations et, si l'institution ne les suit pas, peut adresser un rapport spécial au Parlement européen. Cette faiblesse apparente est en partie compensée par le coût de réputation attaché à la publicité des enquêtes. Le Médiateur ne peut en revanche connaître des agissements des administrations nationales, même lorsque celles-ci mettent en œuvre le droit de l'Union, ce qui déconcerte souvent les plaignants.",
    "q": "Quelle limite de compétence le texte souligne-t-il ?",
    "options": [
      "Le Médiateur ne peut rendre publiques ses enquêtes.",
      "Le Médiateur ne peut jamais saisir le Parlement européen.",
      "Le Médiateur ne peut contrôler les administrations nationales.",
      "Le Médiateur ne peut examiner les refus d'accès aux documents."
    ],
    "a": 2,
    "expl": "La dernière phrase indique que le Médiateur ne peut connaître des agissements des administrations nationales."
  },
  {
    "id": "rd026",
    "level": "B2",
    "passage": "L'adhésion à l'Union européenne suppose que l'État candidat satisfasse aux critères définis à Copenhague en 1993 : des institutions stables garantissant la démocratie et l'État de droit, une économie de marché viable capable de résister à la pression concurrentielle, et l'aptitude à assumer les obligations découlant de l'appartenance, c'est-à-dire à transposer et à appliquer l'acquis. S'y ajoute une condition rarement mentionnée dans le débat public, relative à la capacité de l'Union elle-même à intégrer de nouveaux membres sans que son fonctionnement en soit compromis. La méthode de négociation a évolué : les chapitres consacrés à la justice et aux droits fondamentaux sont désormais ouverts en premier et fermés en dernier, afin que les réformes soient éprouvées dans la durée.",
    "q": "Pourquoi les chapitres relatifs à la justice sont-ils ouverts en premier ?",
    "options": [
      "Parce qu'ils sont les plus simples à négocier.",
      "Parce qu'ils ne relèvent pas de l'acquis de l'Union.",
      "Pour accélérer la conclusion générale des négociations.",
      "Pour que les réformes puissent être éprouvées sur une longue période."
    ],
    "a": 3,
    "expl": "Le texte relie l'ouverture précoce et la fermeture tardive de ces chapitres à la nécessité d'éprouver les réformes dans la durée."
  },
  {
    "id": "rd027",
    "level": "B2",
    "passage": "En vertu du principe de subsidiarité, l'Union n'intervient, dans les domaines qui ne relèvent pas de sa compétence exclusive, que si les objectifs poursuivis peuvent être mieux atteints à son niveau. Le contrôle de ce principe a été confié pour partie aux parlements nationaux, qui disposent de huit semaines pour adresser un avis motivé lorsqu'ils estiment qu'une proposition l'enfreint. Si un seuil de voix est atteint, la Commission doit réexaminer son texte, sans être tenue de le retirer. Le mécanisme a rarement été déclenché, ce que certains interprètent comme le signe d'un respect satisfaisant du principe, d'autres comme l'effet de délais trop courts pour des assemblées dont l'ordre du jour est déjà chargé.",
    "q": "Que doit faire la Commission lorsque le seuil d'avis motivés est atteint ?",
    "options": [
      "Retirer obligatoirement sa proposition.",
      "Réexaminer son texte sans obligation de le retirer.",
      "Saisir immédiatement la Cour de justice.",
      "Prolonger le délai de huit semaines accordé aux parlements."
    ],
    "a": 1,
    "expl": "Le texte précise que la Commission doit réexaminer son texte, sans être tenue de le retirer."
  },
  {
    "id": "rd028",
    "level": "B2",
    "passage": "On répète que l'inflation reflue, et les chiffres le confirment. Encore faut-il s'entendre sur ce que cette phrase signifie pour les ménages. Un ralentissement de la hausse des prix n'est pas une baisse : les niveaux atteints demeurent, et le pouvoir d'achat ne se reconstitue que si les revenus rattrapent l'écart accumulé. Or ce rattrapage est inégal. Il est plus rapide là où les salaires sont indexés ou renégociés fréquemment, plus lent pour les retraités et les indépendants. Se satisfaire de la moyenne, comme le font trop de commentaires, revient à ignorer que la même inflation ne pèse pas du même poids selon la structure de la consommation, l'énergie et l'alimentation occupant une place bien plus grande dans les budgets modestes.",
    "q": "Quelle est la thèse principale de cet éditorial ?",
    "options": [
      "L'inflation a désormais totalement disparu de la zone euro.",
      "Les prix ont effectivement baissé pour l'ensemble des ménages.",
      "Le reflux de l'inflation ne rétablit pas automatiquement le pouvoir d'achat de chacun.",
      "Les salaires progressent partout plus vite que les prix."
    ],
    "a": 2,
    "expl": "L'auteur distingue ralentissement et baisse, et insiste sur le caractère inégal du rattrapage des revenus."
  },
  {
    "id": "rd029",
    "level": "B2",
    "passage": "Réguler l'intelligence artificielle suppose de choisir un point d'application. Le législateur européen a retenu une approche fondée sur le risque : les obligations pèsent d'autant plus lourdement que l'usage envisagé est susceptible d'affecter la sécurité ou les droits fondamentaux. Un système de recrutement automatisé se voit ainsi soumis à des exigences de documentation, de qualité des données et de surveillance humaine, quand une application de recommandation musicale échappe à l'essentiel du dispositif. La difficulté tient à la vitesse d'évolution des technologies : une classification établie à un instant donné vieillit rapidement. D'où le recours à des actes d'exécution et à des normes techniques, plus faciles à réviser qu'un règlement, mais élaborés dans des enceintes moins visibles pour le citoyen.",
    "q": "Quel inconvénient le texte associe au recours aux normes techniques ?",
    "options": [
      "Elles sont impossibles à modifier une fois adoptées.",
      "Elles sont élaborées dans des enceintes peu visibles du public.",
      "Elles ne s'appliquent qu'aux applications de recommandation musicale.",
      "Elles remplacent purement et simplement le règlement européen."
    ],
    "a": 1,
    "expl": "Le texte reconnaît leur souplesse tout en soulignant qu'elles sont adoptées dans des enceintes moins visibles pour le citoyen."
  },
  {
    "id": "rd030",
    "level": "B2",
    "passage": "Les difficultés de recrutement signalées par les entreprises européennes ne se réduisent pas à une question de rémunération. Elles traduisent d'abord un mouvement démographique de fond : le nombre de personnes en âge de travailler diminue dans la plupart des États membres, tandis que les départs à la retraite s'accélèrent dans les métiers techniques. Les leviers habituels ont chacun leurs limites. L'allongement des carrières se heurte à l'usure professionnelle dans les secteurs pénibles ; la hausse du taux d'emploi féminin dépend de l'offre de garde d'enfants ; l'immigration de travail suppose des procédures rapides et une reconnaissance effective des diplômes, deux conditions rarement réunies. Aucune de ces réponses ne suffit isolément, ce qui plaide pour des politiques combinées et inscrites dans la durée.",
    "q": "Quelle conclusion le texte tire-t-il de son analyse ?",
    "options": [
      "L'immigration de travail réglera à elle seule le problème.",
      "Il faut combiner plusieurs politiques et les inscrire dans la durée.",
      "Les difficultés de recrutement s'expliquent uniquement par les salaires.",
      "Le nombre d'actifs augmente dans la plupart des États membres."
    ],
    "a": 1,
    "expl": "La dernière phrase indique qu'aucun levier ne suffit isolément et plaide pour des politiques combinées et durables."
  },
  {
    "id": "rd031",
    "level": "B2",
    "passage": "L'artificialisation des sols progresse plus vite que la population dans la plupart des régions européennes, ce qui traduit un étalement urbain davantage qu'une croissance démographique. Les conséquences sont cumulatives : imperméabilisation qui aggrave les inondations, perte de terres agricoles, fragmentation des habitats naturels et allongement des déplacements quotidiens. Les instruments de planification existent, mais ils sont appliqués à l'échelle communale, alors que les décisions d'implantation produisent leurs effets sur un bassin de vie entier. Une commune qui refuse un projet le voit fréquemment se réaliser quelques kilomètres plus loin, avec les mêmes nuisances et sans les recettes fiscales correspondantes. La coordination intercommunale apparaît dès lors moins comme une contrainte administrative que comme la condition d'efficacité de toute politique de sobriété foncière.",
    "q": "Pourquoi la planification à l'échelle communale est-elle jugée insuffisante ?",
    "options": [
      "Parce que les effets des projets dépassent les limites de la commune.",
      "Parce que les communes manquent toutes de recettes fiscales.",
      "Parce que la population croît plus vite que l'artificialisation.",
      "Parce que les documents d'urbanisme y sont désormais interdits."
    ],
    "a": 0,
    "expl": "Le texte oppose l'échelle communale de la décision à l'échelle du bassin de vie où se produisent les effets."
  },
  {
    "id": "rd032",
    "level": "B2",
    "passage": "La présomption d'innocence ne se réduit pas à une règle de preuve applicable devant le tribunal ; elle impose également une manière de s'exprimer publiquement sur les affaires en cours. Une directive européenne interdit ainsi aux autorités publiques de présenter une personne comme coupable avant qu'une décision définitive n'ait été rendue, et encadre la présentation matérielle des prévenus, notamment le recours aux entraves devant les caméras. La difficulté réside dans l'articulation avec la liberté d'informer, qui ne saurait être suspendue pendant la durée d'une procédure. Les juridictions apprécient au cas par cas, en distinguant le compte rendu des accusations, légitime, de l'affirmation de la culpabilité, qui ne l'est pas. Le respect de cette distinction demeure inégal dans les pratiques médiatiques.",
    "q": "Quelle distinction les juridictions opèrent-elles selon le texte ?",
    "options": [
      "Entre les procédures civiles et les procédures pénales.",
      "Entre le travail des journalistes et celui des autorités publiques.",
      "Entre rendre compte des accusations et affirmer la culpabilité.",
      "Entre les décisions définitives et les décisions étrangères."
    ],
    "a": 2,
    "expl": "Le texte précise que le compte rendu des accusations est légitime, alors que l'affirmation de la culpabilité ne l'est pas."
  },
  {
    "id": "rd033",
    "level": "B2",
    "passage": "La dématérialisation des démarches administratives a produit des gains réels : disponibilité permanente des services, réduction des délais, économies sur le traitement des dossiers. Elle a également déplacé une partie de la charge vers l'usager, désormais chargé de saisir lui-même les informations, de numériser les pièces et de comprendre un vocabulaire administratif rarement simplifié. Les personnes qui rencontrent le plus de difficultés sont aussi celles qui ont le plus besoin des prestations concernées, ce qui transforme un obstacle technique en question d'égalité d'accès aux droits. Les administrations qui obtiennent les meilleurs résultats sont celles qui ont maintenu un accueil physique et un accompagnement téléphonique, non comme un vestige du passé, mais comme une voie de recours assumée en cas d'échec du parcours en ligne.",
    "q": "Qu'est-ce qui caractérise les administrations les plus performantes ?",
    "options": [
      "Elles ont supprimé tout accueil physique du public.",
      "Elles ont conservé un accompagnement humain comme voie de recours.",
      "Elles ont renoncé à la dématérialisation de leurs démarches.",
      "Elles simplifient systématiquement le vocabulaire administratif."
    ],
    "a": 1,
    "expl": "Le texte attribue les meilleurs résultats au maintien d'un accueil physique et d'un accompagnement téléphonique."
  },
  {
    "id": "rd034",
    "level": "B2",
    "passage": "La politique commerciale relève de la compétence exclusive de l'Union : les États membres ne peuvent plus conclure seuls d'accords en la matière. La Commission négocie sur la base d'un mandat adopté par le Conseil, puis le Parlement européen approuve ou rejette le texte final, sans pouvoir l'amender. Lorsqu'un accord comporte des dispositions excédant cette compétence exclusive, notamment en matière d'investissement, il devient mixte et doit être ratifié par l'ensemble des parlements nationaux, voire régionaux. Cette exigence allonge considérablement les délais et confère à des assemblées de taille modeste un pouvoir de blocage. Pour l'éviter, les institutions scindent désormais fréquemment les accords en deux instruments distincts, l'un commercial, l'autre relatif à la protection des investissements.",
    "q": "Pourquoi les accords sont-ils désormais souvent scindés en deux instruments ?",
    "options": [
      "Pour permettre au Parlement européen de les amender.",
      "Pour transférer la compétence commerciale aux États membres.",
      "Pour réduire le nombre de négociateurs mobilisés.",
      "Pour échapper à la ratification par tous les parlements nationaux."
    ],
    "a": 3,
    "expl": "La scission vise à éviter le caractère mixte de l'accord, qui impose une ratification par l'ensemble des parlements."
  },
  {
    "id": "rd035",
    "level": "B2",
    "passage": "On présente volontiers la mobilité étudiante comme un acquis évident de la construction européenne. Les chiffres invitent à plus de prudence. La participation demeure très inégale selon l'origine sociale : les étudiants dont les parents sont diplômés partent bien plus souvent que les autres, car la bourse ne couvre qu'une partie du surcoût d'un séjour à l'étranger, en particulier dans les capitales où le logement est cher. S'y ajoutent des obstacles moins visibles, comme la crainte de perdre un emploi étudiant ou la difficulté à faire reconnaître les crédits obtenus. Élargir réellement l'accès suppose donc moins de multiplier les déclarations d'intention que d'ajuster les aides au coût réel et de sécuriser la reconnaissance des acquis.",
    "q": "Quelle est la position défendue par cet éditorial ?",
    "options": [
      "La mobilité étudiante est déjà accessible à tous les profils.",
      "Les bourses couvrent l'intégralité des frais de séjour.",
      "L'accès à la mobilité reste socialement inégal et appelle des mesures concrètes.",
      "La reconnaissance des crédits obtenus est automatique partout."
    ],
    "a": 2,
    "expl": "L'auteur souligne l'inégalité sociale de la participation et réclame des aides ajustées au coût réel et une reconnaissance sécurisée."
  }
];
