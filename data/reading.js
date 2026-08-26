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
  },
  {"id": "rd036", "level": "A2", "passage": "AVIS AUX VOYAGEURS — STIB/MIVB. En raison de travaux, le tram 92 ne circule pas entre Louise et Legrand, du lundi 7 au vendredi 18 septembre. Un bus de remplacement, le T92, passe toutes les dix minutes. Comptez environ cinq minutes de trajet en plus. Les autres lignes circulent normalement. Merci de votre compréhension.", "q": "Que doivent faire les voyageurs entre Louise et Legrand ?", "options": ["Prendre le tram 92 comme d'habitude.", "Attendre la fin des travaux en octobre.", "Prendre le bus de remplacement T92.", "Marcher jusqu'à la station Legrand."], "a": 2, "expl": "L'avis annonce « un bus de remplacement, le T92 ». Les travaux se terminent le 18 septembre, pas en octobre, et le tram 92 ne circule justement pas sur ce tronçon."},
  {"id": "rd037", "level": "A2", "passage": "PROMOTION DE LA SEMAINE — Delhaize Flagey. Du mercredi 3 au mardi 9 juin. Deuxième paquet de café à moitié prix. Fruits et légumes belges : -20 % à partir de trois kilos. Le pain de la boulangerie est à 2,45 € au lieu de 2,95 €. Attention : la promotion sur le café n'est pas valable avec la carte de fidélité.", "q": "Que dit l'annonce au sujet du café ?", "options": ["Le café est gratuit à partir de trois paquets.", "La promotion sur le café dure tout le mois de juin.", "Le deuxième paquet coûte moitié moins cher.", "Le café coûte 2,45 € au lieu de 2,95 €."], "a": 2, "expl": "« À moitié prix » = at half price, et cela concerne le deuxième paquet seulement. Le prix de 2,45 € est celui du pain, et la promotion s'arrête le 9 juin."},
  {"id": "rd038", "level": "A2", "passage": "Commune d'Ixelles — Service Population. Madame, Monsieur, votre carte d'identité expire le 15 novembre. Vous devez prendre rendez-vous en ligne pour la renouveler. Apportez une photo récente et 25 euros. Le service est ouvert du lundi au vendredi de 8 h 30 à 12 h 30, et le jeudi également de 16 h à 19 h. Sans rendez-vous, vous ne serez pas reçu.", "q": "Quel jour peut-on se présenter l'après-midi ?", "options": ["Le lundi.", "Le jeudi.", "Tous les jours.", "Le vendredi."], "a": 1, "expl": "Le texte précise « et le jeudi également de 16 h à 19 h ». Les autres jours, le service ferme à 12 h 30 : « du lundi au vendredi de 8 h 30 à 12 h 30 »."},
  {"id": "rd039", "level": "A2", "passage": "À LOUER — Schaerbeek, place Colignon. Appartement une chambre, 55 m², deuxième étage sans ascenseur. Cuisine équipée, salle de bain avec douche. 780 € par mois + 60 € de charges (eau et communs). Garantie : deux mois. Libre le 1er octobre. Pas d'animaux. Visites le samedi matin uniquement.", "q": "Combien faut-il payer chaque mois au total ?", "options": ["60 euros.", "780 euros.", "840 euros.", "1 560 euros."], "a": 2, "expl": "Le loyer (780 €) s'ajoute aux charges (60 €), soit 840 € par mois. 1 560 € correspond à la garantie de deux mois de loyer, à payer une seule fois."},
  {"id": "rd040", "level": "A2", "passage": "NOTE INTERNE — À tous les collègues du 3e étage. La machine à café sera remplacée mardi prochain. Pendant toute la journée de mardi, la cuisine du 3e étage sera fermée. Vous pouvez utiliser celle du 2e étage. La nouvelle machine acceptera les pièces et le paiement par Bancontact. Merci de ne rien laisser dans le frigo lundi soir.", "q": "Où peut-on prendre un café le mardi ?", "options": ["À la cuisine du 2e étage.", "À la cuisine du 3e étage.", "Au café d'en face.", "Nulle part dans le bâtiment."], "a": 0, "expl": "« Vous pouvez utiliser celle du 2e étage » : « celle » remplace « la cuisine ». C'est la cuisine du 3e qui est fermée toute la journée."},
  {"id": "rd041", "level": "A2", "passage": "PISCINE COMMUNALE — Nouveaux horaires à partir du 1er septembre. Lundi, mercredi et vendredi : de 7 h à 21 h. Mardi et jeudi : de 12 h à 21 h. Samedi et dimanche : de 9 h à 17 h. Le bonnet de bain est obligatoire pour tout le monde. L'entrée coûte 4 euros, et 2,50 euros pour les habitants de la commune.", "q": "Quel jour la piscine ouvre-t-elle le plus tard le matin ?", "options": ["Le samedi.", "Le lundi.", "Le vendredi.", "Le mardi."], "a": 3, "expl": "Mardi et jeudi, l'ouverture est à 12 h, contre 7 h les lundi, mercredi et vendredi et 9 h le week-end. C'est donc l'ouverture la plus tardive."},
  {"id": "rd042", "level": "A2", "passage": "AVIS DE PASSAGE — bpost. Nous sommes passés aujourd'hui à 10 h 15, mais vous étiez absent. Votre colis vous attend au point poste du Carrefour Express, chaussée de Wavre 210, pendant quinze jours. Munissez-vous de cet avis et de votre carte d'identité. Après quinze jours, le colis repart chez l'expéditeur.", "q": "Que faut-il apporter pour retirer le colis ?", "options": ["Seulement cet avis de passage.", "Cet avis et une carte d'identité.", "Une carte d'identité et quinze euros.", "Une photo et un timbre."], "a": 1, "expl": "« Munissez-vous de » signifie « prenez avec vous ». Les quinze jours sont un délai, pas une somme à payer."},
  {"id": "rd043", "level": "A2", "passage": "CABINET MÉDICAL — Docteur Lambert. Le cabinet est fermé du 20 au 31 juillet. En cas d'urgence, appelez le médecin de garde au 02 201 22 22. Pour faire renouveler une ordonnance, envoyez un courriel avant le 18 juillet. Les rendez-vous du mois d'août peuvent déjà être pris par téléphone, le matin, entre 9 h et 11 h.", "q": "Que faut-il faire pour renouveler une ordonnance ?", "options": ["Appeler le médecin de garde.", "Passer au cabinet le 20 juillet.", "Téléphoner entre 9 h et 11 h.", "Envoyer un courriel avant le 18 juillet."], "a": 3, "expl": "Chaque démarche a son canal : courriel pour l'ordonnance, téléphone pour les rendez-vous d'août, numéro de garde pour les urgences seulement."},
  {"id": "rd044", "level": "B1", "passage": "À partir du 1er février, la STIB modifie sa tarification. Le ticket acheté à bord du véhicule disparaît : il faudra désormais charger son titre de transport à l'avance, sur une carte MOBIB ou via l'application. Un trajet d'une heure passe de 2,10 à 2,40 euros, mais l'abonnement annuel reste au même prix pour les moins de 25 ans. La STIB explique que la mesure vise surtout à réduire le temps d'arrêt aux stations, les achats à bord ralentissant fortement les lignes de bus les plus chargées.", "q": "Pour quelle raison principale la vente à bord est-elle supprimée ?", "options": ["Pour faire gagner du temps aux véhicules aux arrêts.", "Pour augmenter le prix des abonnements annuels.", "Pour obliger les jeunes à acheter une carte MOBIB.", "Pour réduire le nombre de lignes de bus chargées."], "a": 0, "expl": "Le texte donne la raison explicitement : « réduire le temps d'arrêt aux stations ». L'abonnement des moins de 25 ans, lui, ne change pas de prix."},
  {"id": "rd045", "level": "B1", "passage": "Depuis le mois d'avril, les sacs blancs ne sont plus ramassés qu'une fois par semaine dans notre commune, le mardi soir. Les sacs orange, destinés aux déchets alimentaires, sont en revanche collectés deux fois. La commune justifie ce changement par la progression du tri : le volume des déchets non triés a baissé d'un quart en deux ans. Les habitants qui sortent leur sac la veille au soir s'exposent désormais à une amende de cent euros, les sacs éventrés par les renards posant un vrai problème dans les quartiers arborés.", "q": "Pourquoi la commune a-t-elle réduit le ramassage des sacs blancs ?", "options": ["Parce que les renards éventrent les sacs blancs.", "Parce que les habitants sortent leurs sacs trop tôt.", "Parce que la quantité de déchets non triés a diminué.", "Parce que les sacs orange coûtent moins cher."], "a": 2, "expl": "« La commune justifie ce changement par la progression du tri » : le volume à ramasser a baissé d'un quart. Les renards expliquent l'amende, pas la réduction du ramassage."},
  {"id": "rd046", "level": "B1", "passage": "Actiris recherche, pour une association du quartier européen, un assistant administratif à mi-temps. Le poste consiste à accueillir le public, à traiter le courrier et à tenir l'agenda de deux coordinateurs. Le français et l'anglais sont exigés ; la connaissance du néerlandais est un atout, mais elle n'est pas obligatoire. Un diplôme de l'enseignement supérieur n'est pas demandé, à condition de justifier de deux années d'expérience dans une fonction comparable. Contrat d'un an, renouvelable. Les candidatures se font uniquement via le formulaire en ligne.", "q": "Que dit l'annonce à propos du néerlandais ?", "options": ["Il est exigé au même titre que l'anglais.", "Il remplace le diplôme demandé.", "Il est apprécié mais non exigé.", "Il n'est utile que pour le renouvellement du contrat."], "a": 2, "expl": "« Un atout » = a plus, un avantage, jamais une condition. Ce qui remplace le diplôme, ce sont les deux années d'expérience."},
  {"id": "rd047", "level": "B1", "passage": "À partir du mois prochain, la carte de fidélité de notre enseigne change de forme : elle quitte le portefeuille pour se loger dans l'application. Les points déjà accumulés seront transférés automatiquement, à condition de créer un compte avec la même adresse électronique que celle communiquée en magasin. Les clients qui ne souhaitent pas utiliser de smartphone pourront demander une carte papier à la caisse, mais celle-ci ne donnera pas accès aux offres personnalisées, qui constituent l'essentiel des réductions.", "q": "Que perdent les clients qui gardent une carte papier ?", "options": ["Les points accumulés jusqu'à présent.", "La possibilité de faire leurs courses en magasin.", "L'accès à la caisse rapide.", "Les offres personnalisées, donc la plupart des réductions."], "a": 3, "expl": "Les points sont transférés pour tout le monde, sous condition d'adresse électronique. Seules les offres personnalisées sont réservées à l'application."},
  {"id": "rd048", "level": "B1", "passage": "NOTE À L'ATTENTION DU PERSONNEL. À compter du 1er mars, le télétravail est porté à trois jours par semaine, mais le mercredi devient une journée de présence obligatoire pour l'ensemble de l'unité. Les demandes de télétravail depuis l'étranger restent soumises à une autorisation écrite du chef d'unité et ne peuvent excéder dix jours ouvrables par an. Le matériel informatique demeure la propriété du service : en cas de départ, il doit être restitué avant le dernier jour de contrat.", "q": "Quelle limite est fixée au télétravail depuis l'étranger ?", "options": ["Dix jours ouvrables par an, sur autorisation écrite.", "Trois jours par semaine, comme le télétravail ordinaire.", "Un jour par semaine, sauf le mercredi.", "Aucune limite, à condition de prévenir le chef d'unité."], "a": 0, "expl": "Les trois jours par semaine concernent le télétravail ordinaire ; l'étranger relève d'un régime distinct, limité et soumis à autorisation écrite."},
  {"id": "rd049", "level": "B1", "passage": "Appartement deux chambres, 85 m², à Saint-Gilles, à deux pas du parvis. Loyer : 1 150 euros, charges non comprises. Provision pour charges : 120 euros par mois, avec décompte annuel ; en cas de consommation supérieure, un supplément sera réclamé. Le bail est de trois ans, avec possibilité de résiliation anticipée moyennant trois mois de préavis et une indemnité dégressive. La garantie locative, équivalant à deux mois de loyer, doit être versée sur un compte bloqué au nom du locataire.", "q": "Que se passe-t-il si les charges réelles dépassent la provision ?", "options": ["La provision mensuelle est automatiquement remboursée.", "Le locataire devra payer un supplément après le décompte.", "Le bail est résilié sans indemnité.", "La garantie locative sert à couvrir la différence."], "a": 1, "expl": "« Une provision » est une avance ajustée en fin d'année par le décompte. La garantie locative sert à couvrir les dégâts en fin de bail, pas les charges courantes."},
  {"id": "rd050", "level": "B1", "passage": "Le festival Couleur Café se tient cette année sur trois jours, du vendredi au dimanche, sur le site du parc d'Osseghem. Les paiements se font uniquement au moyen de jetons, en vente aux caisses et à l'entrée ; les jetons non utilisés sont remboursables jusqu'à une semaine après le festival, sur présentation du ticket de caisse. Aucun accès n'est prévu en voiture : les organisateurs renvoient les festivaliers vers le métro, dont le service est prolongé jusqu'à deux heures du matin le samedi.", "q": "À quelle condition les jetons peuvent-ils être remboursés ?", "options": ["En les rapportant aux caisses avant la fin du festival.", "En présentant le ticket de caisse dans la semaine qui suit.", "En arrivant en métro plutôt qu'en voiture.", "En achetant un billet valable les trois jours."], "a": 1, "expl": "Deux éléments sont exigés : le ticket de caisse et le délai d'une semaine après le festival. Le remboursement n'a donc pas lieu sur place."},
  {"id": "rd051", "level": "B1", "passage": "L'accès au recyparc communal est gratuit pour les particuliers, dans la limite de trois passages par trimestre et d'un mètre cube par passage. La carte d'identité est systématiquement contrôlée à l'entrée : elle sert à vérifier le domicile et à comptabiliser les passages. Les indépendants et les entreprises, eux, doivent s'acquitter d'un tarif au poids. Les déchets doivent arriver déjà triés ; un véhicule dont le chargement est mélangé peut se voir refuser l'accès, le personnel n'étant pas autorisé à trier à la place des usagers.", "q": "À quoi sert le contrôle de la carte d'identité ?", "options": ["À distinguer les déchets triés des déchets mélangés.", "À calculer le tarif au poids.", "À autoriser le personnel à trier les déchets.", "À vérifier le domicile et à compter les passages."], "a": 3, "expl": "Le texte donne les deux fonctions l'une après l'autre. Le tarif au poids ne concerne que les indépendants et les entreprises, indépendamment de la carte."},
  {"id": "rd052", "level": "B1", "passage": "AVIS AUX RIVERAINS. Des travaux de rénovation des conduites d'eau débuteront le lundi 14 avril, rue Malibran, et dureront environ six semaines. Le stationnement sera interdit du numéro 2 au numéro 60 pendant toute la durée du chantier ; les véhicules qui s'y trouveraient encore le 14 au matin seront enlevés aux frais de leur propriétaire. Les riverains disposant d'une carte de stationnement peuvent se garer sans supplément dans les rues voisines, où la zone bleue leur sera provisoirement ouverte.", "q": "Que prévoit l'avis pour les riverains munis d'une carte de stationnement ?", "options": ["Ils resteront garés rue Malibran pendant les travaux.", "Ils seront dispensés des frais d'enlèvement du véhicule.", "Ils pourront se garer sans supplément dans les rues voisines.", "Ils recevront une place réservée pendant six semaines."], "a": 2, "expl": "La zone bleue voisine leur est « provisoirement ouverte », sans coût supplémentaire. L'interdiction rue Malibran vaut pour tout le monde, carte ou pas."},
  {"id": "rd053", "level": "B1", "passage": "Les inscriptions aux cours de français et de néerlandais organisés par la commune ouvrent le 20 août. Un test de niveau, obligatoire pour tous sauf pour les grands débutants, se déroule sur place la dernière semaine d'août ; il ne peut pas être passé à distance. Les cours du soir affichant complet très vite, la commune conseille de s'inscrire dès le premier jour. Le tarif de trente euros par trimestre couvre le matériel, mais pas le manuel, qui reste à charge de l'élève.", "q": "Qui n'a pas à passer le test de niveau ?", "options": ["Les personnes qui commencent la langue de zéro.", "Les personnes qui s'inscrivent dès le 20 août.", "Les personnes inscrites aux cours du soir.", "Les personnes qui achètent le manuel."], "a": 0, "expl": "« Les grands débutants » sont ceux qui n'ont aucune base : c'est la seule exception prévue. « Sauf » introduit ici l'unique dispense."},
  {"id": "rd054", "level": "B1", "passage": "Madame, votre examen est fixé au jeudi 12 mars à 8 h 15, au service d'imagerie, niveau -1. Présentez-vous à l'accueil trente minutes à l'avance, munie de votre carte d'identité et de la prescription de votre médecin. Vous devez être à jeun depuis minuit : ni nourriture, ni café, ni cigarette. Vous pouvez en revanche boire de l'eau et prendre vos médicaments habituels. Si vous ne pouvez pas venir, prévenez-nous au moins 48 heures à l'avance, faute de quoi l'examen vous sera facturé.", "q": "Qu'est-ce qui reste autorisé le matin de l'examen ?", "options": ["Un café léger, sans sucre.", "Une cigarette une heure avant.", "De l'eau et les médicaments habituels.", "Un repas léger avant 7 h."], "a": 2, "expl": "« Être à jeun » interdit toute nourriture, le café et le tabac. Le texte lève explicitement l'interdiction pour l'eau et les médicaments : « en revanche »."},
  {"id": "rd055", "level": "B1", "passage": "NOTE — Frais de mission. Les demandes de remboursement doivent être introduites dans les trente jours suivant le retour de mission. Passé ce délai, elles ne sont plus traitées automatiquement et nécessitent une justification écrite du chef d'unité. Les titres de transport doivent être joints sous forme de fichiers lisibles ; une photographie floue entraîne le renvoi du dossier. Les frais d'hôtel sont remboursés jusqu'à un plafond fixé par pays, le dépassement restant à charge de l'agent, sauf circonstances exceptionnelles dûment motivées.", "q": "Que se passe-t-il si la demande est introduite après trente jours ?", "options": ["Elle exige une justification écrite du chef d'unité.", "Elle est automatiquement refusée, sans recours possible.", "Elle est remboursée à un taux réduit.", "Elle est traitée normalement, mais plus lentement."], "a": 0, "expl": "« Ne sont plus traitées automatiquement » n'équivaut pas à un refus : le dossier reste possible, moyennant une justification écrite."},
  {"id": "rd056", "level": "B2", "passage": "La commune soumet à enquête publique son nouveau plan de circulation. Le principe retenu consiste à décourager le trafic de transit à l'intérieur des quartiers résidentiels sans en interdire l'accès aux riverains : les rues restent ouvertes, mais leur enchaînement est modifié de telle sorte qu'un automobiliste cherchant à traverser le quartier se retrouve inévitablement ramené vers les axes principaux. Les commerçants craignent une perte de clientèle ; les études menées ailleurs indiquent plutôt une stabilité du chiffre d'affaires, à condition que le stationnement de courte durée soit préservé.", "q": "En quoi consiste exactement le dispositif décrit ?", "options": ["Rendre la traversée du quartier impraticable sans fermer les rues aux riverains.", "Supprimer le stationnement de courte durée devant les commerces.", "Interdire l'accès des quartiers résidentiels à tout véhicule.", "Créer de nouveaux axes principaux autour du quartier."], "a": 0, "expl": "« Sans en interdire l'accès aux riverains » : rien n'est fermé, c'est l'enchaînement des rues qui décourage le transit. Le stationnement de courte durée est au contraire à préserver."},
  {"id": "rd057", "level": "B2", "passage": "Le rapport annuel de l'opérateur relativise la notion de ponctualité. Les chiffres publiés portent en effet sur la régularité — l'écart entre deux véhicules successifs — et non sur le respect d'un horaire affiché, distinction qui échappe à la plupart des voyageurs. Sur les lignes à haute fréquence, cette approche se défend : un usager qui n'attend jamais plus de cinq minutes ne consulte pas l'horaire. Elle devient en revanche trompeuse sur les lignes de soirée, où un bus toutes les vingt minutes peut être jugé parfaitement régulier tout en arrivant systématiquement avec dix minutes de décalage.", "q": "Pourquoi l'indicateur retenu est-il jugé trompeur en soirée ?", "options": ["Parce que les bus de soirée sont moins nombreux qu'annoncé.", "Parce qu'un intervalle constant peut masquer un décalage permanent avec l'horaire.", "Parce que les voyageurs ne consultent jamais l'horaire affiché.", "Parce que la régularité n'est pas mesurée sur ces lignes."], "a": 1, "expl": "Régularité et ponctualité ne mesurent pas la même chose : l'écart entre deux bus peut être parfait alors que chacun passe dix minutes après l'heure annoncée."},
  {"id": "rd058", "level": "B2", "passage": "La possibilité de télétravailler depuis un autre État membre suscite des demandes croissantes, auxquelles l'administration oppose une contrainte qui n'est pas de son ressort : au-delà d'un certain nombre de jours passés hors du pays d'affectation, c'est la législation sociale de l'État de résidence qui devient applicable, avec des conséquences en matière d'assujettissement. La règle des vingt-cinq pour cent ne relève donc pas d'une préférence managériale, mais d'une coordination européenne des régimes de sécurité sociale, que l'employeur ne peut écarter par une simple autorisation interne.", "q": "Pourquoi l'administration ne peut-elle pas assouplir cette règle ?", "options": ["Parce que le chef d'unité doit d'abord donner une autorisation écrite.", "Parce qu'elle découle d'une coordination européenne des régimes sociaux, non d'un choix interne.", "Parce que le télétravail à l'étranger est purement et simplement interdit.", "Parce que les agents concernés changeraient d'État d'affectation."], "a": 1, "expl": "« Qui n'est pas de son ressort » signifie que la question échappe à sa compétence : la contrainte vient de la sécurité sociale, pas de la hiérarchie."},
  {"id": "rd059", "level": "B2", "passage": "L'indexation du loyer n'est ni automatique ni rétroactive : le bailleur doit la demander, et il ne peut la réclamer que pour les douze mois précédant sa demande. Un propriétaire qui aurait omis d'indexer pendant cinq ans ne peut donc pas rattraper l'ensemble de l'arriéré. Le calcul s'appuie sur l'indice santé du mois qui précède l'anniversaire du bail, rapporté à l'indice de départ. Depuis la réforme, l'indexation est en outre subordonnée, pour les logements les moins performants sur le plan énergétique, à la réalisation de travaux.", "q": "Que peut réclamer un bailleur qui a oublié d'indexer pendant cinq ans ?", "options": ["La totalité de l'arriéré des cinq années.", "Une indemnité calculée sur l'indice de départ.", "Rien, l'indexation étant définitivement perdue.", "Au plus l'indexation des douze derniers mois."], "a": 3, "expl": "« Non rétroactive » ne veut pas dire « perdue » : le texte fixe une limite de douze mois en arrière à compter de la demande."},
  {"id": "rd060", "level": "B2", "passage": "La prime régionale accordée aux ménages qui renoncent à leur véhicule repose sur un raisonnement simple : indemniser non pas l'achat d'un bien, mais l'abandon d'un usage. Le bénéficiaire doit radier sa plaque d'immatriculation et s'engager à ne pas en réimmatriculer une pendant trois ans, condition vérifiée a posteriori. Le montant est versé sous forme de budget mobilité, utilisable en abonnement de transport public, en vélo ou en voiture partagée, mais jamais en espèces — l'objectif n'étant pas de compenser une perte financière, mais de financer un report modal.", "q": "Pourquoi la prime n'est-elle jamais versée en argent ?", "options": ["Parce que les ménages concernés doivent d'abord acheter un vélo.", "Parce que la radiation de la plaque doit d'abord être vérifiée.", "Parce qu'elle vise à financer un changement de mode de déplacement, non à compenser une perte.", "Parce que la Région ne dispose pas du budget nécessaire."], "a": 2, "expl": "Le « report modal » est le passage d'un mode de transport à un autre. La forme du versement suit l'objectif : un budget fléché, pas une indemnité."},
  {"id": "rd061", "level": "B2", "passage": "La direction présente la réorganisation comme une simple redistribution des tâches, sans suppression de postes. La formule mérite d'être lue de près : elle porte sur les postes, non sur les personnes. Un poste maintenu au budget mais laissé vacant après un départ produit exactement le même effet qu'une suppression, sans en porter le nom ni en déclencher les obligations d'information. Nous demandons donc que l'engagement soit reformulé en effectifs réellement occupés, seul indicateur qui ne se prête pas à cette ambiguïté.", "q": "Quelle est l'objection formulée par les auteurs du texte ?", "options": ["La direction supprime des postes sans en informer le personnel.", "Le budget ne prévoit plus le financement des postes existants.", "Les tâches redistribuées ne correspondent pas aux qualifications.", "Un poste laissé vacant équivaut à une suppression sans en porter le nom."], "a": 3, "expl": "L'argument porte sur un écart de vocabulaire : promettre de ne pas supprimer de postes n'engage à rien si les postes vacants ne sont jamais pourvus."},
  {"id": "rd062", "level": "B2", "passage": "Le service du personnel conserve des données dont la finalité n'est pas toujours explicitée, ce qui constitue en soi une irrégularité : la durée de conservation ne se déduit pas de l'habitude, mais de l'objectif poursuivi. Les candidatures non retenues en offrent l'illustration la plus nette. Les conserver deux ans « au cas où » un poste similaire s'ouvrirait suppose d'en avoir informé le candidat et d'avoir recueilli son accord ; à défaut, la seule durée admissible est celle de la procédure de recrutement elle-même, augmentée du délai de recours.", "q": "À quelle condition les candidatures non retenues peuvent-elles être gardées deux ans ?", "options": ["Si un poste similaire s'ouvre effectivement dans ce délai.", "Si le candidat en a été informé et y a consenti.", "Si le service du personnel en précise la finalité en interne.", "Si le délai de recours n'est pas encore expiré."], "a": 1, "expl": "Le texte pose deux exigences cumulatives : information et accord. Sans elles, la conservation s'arrête à la fin de la procédure et du délai de recours."},
  {"id": "rd063", "level": "B2", "passage": "La hausse des prix de l'immobilier bruxellois masque une réalité plus contrastée. Rapportée au mètre carré, elle est nettement plus forte dans les communes du croissant pauvre, longtemps délaissées, que dans les quartiers déjà chers du sud-est, où les prix stagnent en euros constants. Ce mouvement de rattrapage est souvent présenté comme une bonne nouvelle ; il signifie surtout que les ménages modestes sont progressivement repoussés vers la périphérie, la seule partie du marché qui leur restait accessible étant précisément celle qui augmente le plus vite.", "q": "Quelle conséquence le texte tire-t-il de ce rattrapage des prix ?", "options": ["Les ménages modestes perdent l'accès au segment le moins cher du marché.", "Les quartiers du sud-est deviennent inabordables pour tous.", "Les prix au mètre carré finissent par s'égaliser dans toute la Région.", "La périphérie devient plus chère que le centre de Bruxelles."], "a": 0, "expl": "Le raisonnement est en deux temps : c'est là où les prix étaient bas qu'ils montent le plus, donc là où les ménages modestes achetaient encore."},
  {"id": "rd064", "level": "B2", "passage": "La réforme du congé parental modifie moins les droits que leur articulation. La durée totale reste inchangée, mais le fractionnement devient possible par semaine, et non plus seulement par mois, ce qui change tout pour les familles dont l'organisation dépend d'un mode de garde irrégulier. En contrepartie, l'employeur dispose d'un délai de refus élargi lorsque les demandes se concentrent sur les mêmes périodes. Les organisations syndicales y voient un transfert de la contrainte : la souplesse offerte au salarié se paie d'une incertitude accrue sur la date effectivement obtenue.", "q": "Sur quoi porte principalement la critique syndicale ?", "options": ["Sur la réduction de la durée totale du congé parental.", "Sur l'incertitude créée par l'élargissement du droit de refus.", "Sur l'obligation de justifier le mode de garde choisi.", "Sur la suppression du fractionnement mensuel."], "a": 1, "expl": "« En contrepartie » annonce la concession faite à l'employeur. La durée ne change pas et le fractionnement est élargi, non supprimé."},
  {"id": "rd065", "level": "B2", "passage": "L'avis de concours décrit l'épreuve d'évaluation comme une mesure de compétences générales, non de connaissances. La nuance est capitale pour la préparation : réviser le droit de l'Union n'y sert pratiquement à rien, alors que la structuration d'une réponse orale sous contrainte de temps s'y révèle déterminante. Les candidats issus des administrations nationales sous-estiment régulièrement cet aspect, habitués qu'ils sont à des procédures où l'expertise technique prime. Le jury n'évalue pas ce que le candidat sait, mais la manière dont il l'organise et le restitue.", "q": "Quelle erreur de préparation le texte signale-t-il ?", "options": ["Miser sur les connaissances techniques plutôt que sur la structuration du propos.", "Négliger la révision du droit de l'Union européenne.", "Se présenter sans expérience d'une administration nationale.", "Répondre trop lentement aux questions du jury."], "a": 0, "expl": "Le texte inverse l'intuition : ce qui est noté n'est pas le contenu mais sa mise en forme. L'expertise technique est justement ce qui égare les candidats."},
  {"id": "rd066", "level": "B2", "passage": "Le taux de l'additionnel communal à l'impôt des personnes physiques est souvent présenté comme le principal levier fiscal des communes. Il n'en est rien : appliqué à une base imposable qui échappe entièrement au pouvoir local, il ne rapporte beaucoup que là où les revenus sont élevés, c'est-à-dire précisément là où les besoins sociaux sont les plus faibles. Les communes les plus pauvres se trouvent ainsi contraintes d'afficher les taux les plus lourds pour un rendement médiocre, mécanisme que la dotation régionale ne corrige que partiellement.", "q": "Quel paradoxe le texte met-il en évidence ?", "options": ["Les communes les plus pauvres taxent le plus lourdement pour un rendement faible.", "La base imposable est fixée librement par chaque commune.", "Les communes riches renoncent à percevoir l'additionnel communal.", "La dotation régionale supprime tout écart entre les communes."], "a": 0, "expl": "Le taux est local, la base ne l'est pas : un taux élevé sur des revenus bas rapporte peu. La dotation régionale ne compense l'écart que « partiellement »."},
  {"id": "rd067", "level": "B2", "passage": "À compter du mois prochain, l'accueil physique sans rendez-vous est supprimé au profit de plages horaires réservables en ligne. La mesure n'a pas pour objet de réduire l'accès au service, mais d'en rendre la charge prévisible : jusqu'ici, l'affluence se concentrait sur deux matinées, obligeant à mobiliser des agents dont les dossiers prenaient d'autant plus de retard. Une permanence téléphonique quotidienne est maintenue, et les personnes sans accès à internet peuvent obtenir un créneau par ce canal.", "q": "Quel problème la mesure entend-elle résoudre ?", "options": ["Le manque d'accès à internet d'une partie du public.", "Le nombre insuffisant d'agents au sein du service.", "L'absence de permanence téléphonique quotidienne.", "La concentration de l'affluence sur quelques matinées."], "a": 3, "expl": "« Rendre la charge prévisible » : le service n'est pas en sous-effectif, il est mal réparti dans le temps. Le téléphone et l'accès à internet sont traités comme des garanties, pas comme le problème."},
  {"id": "rd068", "level": "C1", "passage": "On impute volontiers à la fragmentation communale l'essentiel des dysfonctionnements bruxellois, comme si le nombre d'entités suffisait à expliquer l'inefficacité. L'argument séduit par sa simplicité et résiste mal à l'examen : d'autres métropoles, plus morcelées encore, coordonnent leurs politiques sans difficulté majeure. Ce qui distingue Bruxelles n'est pas le nombre des acteurs, mais l'absence d'une instance dont les arbitrages s'imposent à eux. Fusionner les communes sans créer cette autorité reviendrait à déplacer le problème d'un cran, en le rendant seulement moins visible.", "q": "Quelle est la thèse défendue par l'éditorial ?", "options": ["La fusion des communes constitue la seule réforme réaliste.", "Bruxelles est plus morcelée que les autres métropoles comparables.", "La coordination entre communes est déjà satisfaisante en pratique.", "Le défaut tient à l'absence d'une autorité d'arbitrage, non au nombre de communes."], "a": 3, "expl": "L'auteur ne rejette pas la fusion en soi, il la juge inopérante seule. La comparaison avec des métropoles « plus morcelées encore » sert précisément à écarter l'explication par le nombre."},
  {"id": "rd069", "level": "C1", "passage": "Le renvoi à des actes d'exécution est présenté comme une commodité technique ; il produit pourtant un déplacement du lieu où se décide l'essentiel. Un texte qui fixe un principe et confie les seuils à la Commission laisse au colégislateur la partie visible et lui retire la partie opérante, puisque c'est le seuil, et non le principe, qui détermine qui sera effectivement soumis à l'obligation. La critique n'est pas nouvelle ; ce qui l'est davantage, c'est la difficulté croissante à distinguer, à la seule lecture du texte de base, ce qui relève encore d'un choix politique.", "q": "Quelle évolution le texte présente-t-il comme relativement nouvelle ?", "options": ["Le recours de la Commission à des actes d'exécution.", "La difficulté à repérer, dans le texte de base, ce qui reste un choix politique.", "La contestation du rôle du colégislateur par la doctrine.", "La fixation des seuils par le législateur lui-même."], "a": 1, "expl": "« La critique n'est pas nouvelle ; ce qui l'est davantage… » oppose explicitement l'ancien au nouveau. Le recours aux actes d'exécution, lui, est ancien."},
  {"id": "rd070", "level": "C1", "passage": "Le débat sur les régimes linguistiques des concours se joue rarement sur le terrain où il devrait se tenir. On y oppose l'égalité des langues à l'efficacité du service, alors que la question pertinente est celle de l'effet de sélection : exiger une deuxième langue parmi trois n'écarte pas des candidats moins compétents, mais des candidats dont le système scolaire national n'enseignait pas ces langues-là. L'argument de l'efficacité conserve sa force ; il ne dispense pas de mesurer ce que la règle produit, indépendamment de ce qu'elle vise.", "q": "Que reproche l'auteur à la manière habituelle de poser le débat ?", "options": ["Elle surestime l'importance de l'efficacité administrative.", "Elle nie l'égalité de statut entre les langues officielles.", "Elle ignore l'effet de sélection produit par la règle, quel qu'en soit l'objectif.", "Elle repose sur une comparaison erronée des systèmes scolaires."], "a": 2, "expl": "L'auteur admet explicitement la force de l'argument d'efficacité (« conserve sa force ») : ce qu'il reproche, c'est de confondre l'intention d'une règle et ses effets."}
];
