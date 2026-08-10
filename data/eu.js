/* EU knowledge bank — EPSO AD5-style MCQs.
   {id, topic, q, options[4], a (index of correct option), expl}
   Options are re-shuffled at display time, so order here does not matter. */
"use strict";

const EU_QUESTIONS = [
  {
    "id": "eu001",
    "topic": "Institutions",
    "q": "Which institution has the exclusive right of legislative initiative in most EU policy areas?",
    "options": [
      "The European Commission",
      "The European Parliament",
      "The Council of the EU",
      "The European Council"
    ],
    "a": 0,
    "expl": "The Commission proposes legislation; Parliament and Council amend and adopt it. Parliament and Council can only invite the Commission to propose."
  },
  {
    "id": "eu002",
    "topic": "Institutions",
    "q": "How many Members of the European Parliament (MEPs) were elected for the 2024–2029 term?",
    "options": [
      "720",
      "705",
      "751",
      "680"
    ],
    "a": 0,
    "expl": "The 2024 elections returned 720 MEPs (up from 705 after a 2023 redistribution)."
  },
  {
    "id": "eu003",
    "topic": "Institutions",
    "q": "Where is the official seat of the European Parliament?",
    "options": [
      "Strasbourg",
      "Brussels",
      "Luxembourg",
      "Frankfurt"
    ],
    "a": 0,
    "expl": "The official seat (12 plenary sessions/year) is Strasbourg; committees meet in Brussels; the secretariat is in Luxembourg."
  },
  {
    "id": "eu004",
    "topic": "Institutions",
    "q": "What is the difference between the European Council and the Council of the EU?",
    "options": [
      "The European Council sets political direction (heads of state/government); the Council of the EU adopts legislation (national ministers)",
      "They are two names for the same institution",
      "The European Council adopts laws; the Council of the EU sets strategy",
      "The European Council is a Council of Europe body, not an EU institution"
    ],
    "a": 0,
    "expl": "European Council = summits of leaders defining priorities (no legislative function). Council of the EU = ministers legislating with Parliament."
  },
  {
    "id": "eu005",
    "topic": "Institutions",
    "q": "How is qualified majority voting (QMV) in the Council of the EU defined since Lisbon?",
    "options": [
      "55% of member states representing at least 65% of the EU population",
      "Two thirds of member states representing 50% of the population",
      "A simple majority of member states",
      "75% of weighted votes"
    ],
    "a": 0,
    "expl": "The 'double majority': at least 15 of 27 states and 65% of the population; a blocking minority needs at least 4 states."
  },
  {
    "id": "eu006",
    "topic": "Institutions",
    "q": "Who is President of the European Commission for the 2024–2029 term?",
    "options": [
      "Ursula von der Leyen",
      "Roberta Metsola",
      "António Costa",
      "Christine Lagarde"
    ],
    "a": 0,
    "expl": "Von der Leyen was re-elected by Parliament in July 2024 for a second term."
  },
  {
    "id": "eu007",
    "topic": "Institutions",
    "q": "Who became President of the European Council in December 2024?",
    "options": [
      "António Costa",
      "Charles Michel",
      "Donald Tusk",
      "Kaja Kallas"
    ],
    "a": 0,
    "expl": "Former Portuguese PM António Costa succeeded Charles Michel; the President is elected for 2.5 years, renewable once."
  },
  {
    "id": "eu008",
    "topic": "Institutions",
    "q": "Who is the High Representative for Foreign Affairs and Security Policy (2024–2029)?",
    "options": [
      "Kaja Kallas",
      "Josep Borrell",
      "Federica Mogherini",
      "Mark Rutte"
    ],
    "a": 0,
    "expl": "Former Estonian PM Kaja Kallas is HR/VP; she chairs the Foreign Affairs Council and heads the EEAS."
  },
  {
    "id": "eu009",
    "topic": "Institutions",
    "q": "How many Commissioners are there in the College of Commissioners?",
    "options": [
      "One per member state (27)",
      "20, rotating between states",
      "One per political group",
      "15, chosen by Parliament"
    ],
    "a": 0,
    "expl": "Despite Lisbon foreseeing a reduction, the European Council decided to keep one Commissioner per member state — 27 in total."
  },
  {
    "id": "eu010",
    "topic": "Institutions",
    "q": "Which country holds the rotating presidency of the Council of the EU in the second half of 2026?",
    "options": [
      "Ireland",
      "Cyprus",
      "Poland",
      "Denmark"
    ],
    "a": 0,
    "expl": "2025: Poland then Denmark; 2026: Cyprus (Jan–Jun) then Ireland (Jul–Dec). The presidency rotates every six months."
  },
  {
    "id": "eu011",
    "topic": "Institutions",
    "q": "Which body does NOT take part in the rotating Council presidency system?",
    "options": [
      "The Foreign Affairs Council",
      "The Agriculture and Fisheries Council",
      "ECOFIN",
      "The Environment Council"
    ],
    "a": 0,
    "expl": "The Foreign Affairs Council is permanently chaired by the High Representative, not by the rotating presidency."
  },
  {
    "id": "eu012",
    "topic": "Institutions",
    "q": "Where does the Court of Justice of the European Union sit?",
    "options": [
      "Luxembourg",
      "Strasbourg",
      "The Hague",
      "Brussels"
    ],
    "a": 0,
    "expl": "The CJEU (Court of Justice + General Court) sits in Luxembourg. The European Court of Human Rights in Strasbourg is a Council of Europe body."
  },
  {
    "id": "eu013",
    "topic": "Institutions",
    "q": "What is the role of the European Court of Auditors?",
    "options": [
      "To audit EU revenue and spending and report on sound financial management",
      "To rule on disputes between member states",
      "To set the EU budget",
      "To supervise national central banks"
    ],
    "a": 0,
    "expl": "The ECA (Luxembourg, one member per state) is the EU's external auditor; it has no judicial powers."
  },
  {
    "id": "eu014",
    "topic": "Institutions",
    "q": "Which institution sets monetary policy for the euro area?",
    "options": [
      "The European Central Bank",
      "The European Commission",
      "ECOFIN",
      "The European Investment Bank"
    ],
    "a": 0,
    "expl": "The ECB (Frankfurt), led by Christine Lagarde, has exclusive competence over euro-area monetary policy, with price stability as primary objective."
  },
  {
    "id": "eu015",
    "topic": "Institutions",
    "q": "Who elects the President of the European Commission?",
    "options": [
      "The European Parliament, on a proposal from the European Council",
      "EU citizens directly",
      "The Council of the EU by unanimity",
      "The outgoing Commission"
    ],
    "a": 0,
    "expl": "The European Council proposes a candidate (taking EP election results into account); Parliament elects by majority of its members."
  },
  {
    "id": "eu016",
    "topic": "Institutions",
    "q": "What is COREPER?",
    "options": [
      "The committee of member states' permanent representatives preparing Council work",
      "The Commission's internal audit service",
      "The Parliament's conference of committee chairs",
      "The EU's civil-service tribunal"
    ],
    "a": 0,
    "expl": "COREPER (I and II) gathers national ambassadors to the EU and prepares virtually all Council decisions."
  },
  {
    "id": "eu017",
    "topic": "Institutions",
    "q": "What does the European Ombudsman investigate?",
    "options": [
      "Maladministration by EU institutions and bodies",
      "Crimes against the EU budget",
      "Human-rights violations in member states",
      "Competition-law breaches by companies"
    ],
    "a": 0,
    "expl": "The Ombudsman, elected by Parliament, handles complaints about maladministration by EU institutions — not national administrations."
  },
  {
    "id": "eu018",
    "topic": "Institutions",
    "q": "Which two consultative bodies assist the Parliament, Council and Commission?",
    "options": [
      "The European Economic and Social Committee and the Committee of the Regions",
      "The EEAS and the ECB",
      "Europol and Eurojust",
      "The EIB and the ECA"
    ],
    "a": 0,
    "expl": "The EESC (organised civil society) and the CoR (regional/local authorities) issue opinions; both sit in Brussels."
  },
  {
    "id": "eu019",
    "topic": "Institutions",
    "q": "How long is the term of a European Commissioner?",
    "options": [
      "5 years",
      "4 years",
      "6 years",
      "2.5 years"
    ],
    "a": 0,
    "expl": "The Commission's mandate matches Parliament's 5-year legislature. (European Council president: 2.5 years; ECB board: 8 years.)"
  },
  {
    "id": "eu020",
    "topic": "Institutions",
    "q": "The European Parliament can dismiss the Commission by…",
    "options": [
      "adopting a motion of censure by a two-thirds majority of votes cast, representing a majority of all MEPs",
      "a simple majority vote of the plenary",
      "asking the European Council to dismiss it",
      "it cannot dismiss the Commission"
    ],
    "a": 0,
    "expl": "A successful censure motion forces the whole College to resign — a key element of the Commission's accountability to Parliament."
  },
  {
    "id": "eu021",
    "topic": "Treaties & History",
    "q": "The Schuman Declaration, considered the founding act of European integration, was made on…",
    "options": [
      "9 May 1950",
      "25 March 1957",
      "1 January 1958",
      "7 February 1992"
    ],
    "a": 0,
    "expl": "Robert Schuman proposed pooling coal and steel production on 9 May 1950 — now celebrated as Europe Day."
  },
  {
    "id": "eu022",
    "topic": "Treaties & History",
    "q": "Which treaty created the European Economic Community (EEC)?",
    "options": [
      "The Treaty of Rome (1957)",
      "The Treaty of Paris (1951)",
      "The Maastricht Treaty (1992)",
      "The Single European Act (1986)"
    ],
    "a": 0,
    "expl": "The Treaties of Rome (EEC + Euratom) were signed 25 March 1957 and entered into force 1 January 1958."
  },
  {
    "id": "eu023",
    "topic": "Treaties & History",
    "q": "Which were the six founding member states?",
    "options": [
      "Belgium, France, Germany, Italy, Luxembourg, Netherlands",
      "France, Germany, UK, Italy, Spain, Belgium",
      "Belgium, Netherlands, Luxembourg, France, Denmark, Germany",
      "France, Italy, Spain, Portugal, Germany, Belgium"
    ],
    "a": 0,
    "expl": "The Inner Six founded the ECSC in 1951 and the EEC in 1957. The UK joined only in 1973."
  },
  {
    "id": "eu024",
    "topic": "Treaties & History",
    "q": "The Treaty of Paris (1951) established which organisation?",
    "options": [
      "The European Coal and Steel Community",
      "The European Economic Community",
      "The Council of Europe",
      "Euratom"
    ],
    "a": 0,
    "expl": "The ECSC pooled coal and steel under a High Authority; the treaty expired in 2002 after its 50-year term."
  },
  {
    "id": "eu025",
    "topic": "Treaties & History",
    "q": "Which countries joined in the first enlargement of 1973?",
    "options": [
      "Denmark, Ireland and the United Kingdom",
      "Greece, Spain and Portugal",
      "Austria, Finland and Sweden",
      "Norway, Denmark and Ireland"
    ],
    "a": 0,
    "expl": "Norway negotiated too but stayed out after a referendum. Greece joined 1981; Spain and Portugal 1986."
  },
  {
    "id": "eu026",
    "topic": "Treaties & History",
    "q": "What did the Single European Act (1986) primarily aim to achieve?",
    "options": [
      "Completing the single market by the end of 1992",
      "Creating the single currency",
      "Establishing EU citizenship",
      "Creating the European Council"
    ],
    "a": 0,
    "expl": "The SEA set the 1992 deadline for the internal market and extended qualified majority voting to speed up harmonisation."
  },
  {
    "id": "eu027",
    "topic": "Treaties & History",
    "q": "The Maastricht Treaty (signed 1992) did all of the following EXCEPT…",
    "options": [
      "make the Charter of Fundamental Rights legally binding",
      "create the European Union",
      "establish EU citizenship",
      "lay the foundations for the euro (EMU)"
    ],
    "a": 0,
    "expl": "The Charter became binding only with Lisbon (2009). Maastricht created the EU, its three-pillar structure, citizenship and EMU."
  },
  {
    "id": "eu028",
    "topic": "Treaties & History",
    "q": "Which treaty incorporated the Schengen acquis into EU law?",
    "options": [
      "The Treaty of Amsterdam (1997)",
      "The Maastricht Treaty (1992)",
      "The Treaty of Nice (2001)",
      "The Treaty of Lisbon (2007)"
    ],
    "a": 0,
    "expl": "Amsterdam brought the originally intergovernmental Schengen rules into the EU framework, with opt-outs for the UK and Ireland."
  },
  {
    "id": "eu029",
    "topic": "Treaties & History",
    "q": "The main purpose of the Treaty of Nice (2001) was to…",
    "options": [
      "reform the institutions to prepare for the 2004 'big bang' enlargement",
      "create the position of High Representative",
      "introduce the euro banknotes",
      "abolish the pillar structure"
    ],
    "a": 0,
    "expl": "Nice adjusted voting weights, Commission composition and Parliament seats so the EU could absorb ten new members in 2004."
  },
  {
    "id": "eu030",
    "topic": "Treaties & History",
    "q": "Which innovation was introduced by the Treaty of Lisbon (in force 2009)?",
    "options": [
      "A permanent President of the European Council",
      "The single currency",
      "Direct elections to the Parliament",
      "The Schengen area"
    ],
    "a": 0,
    "expl": "Lisbon also gave the EU legal personality, made the Charter binding, created the citizens' initiative and Article 50, and made co-decision the 'ordinary legislative procedure'."
  },
  {
    "id": "eu031",
    "topic": "Treaties & History",
    "q": "How many countries joined the EU in the 2004 enlargement?",
    "options": [
      "10",
      "8",
      "12",
      "6"
    ],
    "a": 0,
    "expl": "Cyprus, Czechia, Estonia, Hungary, Latvia, Lithuania, Malta, Poland, Slovakia and Slovenia. Bulgaria and Romania followed in 2007."
  },
  {
    "id": "eu032",
    "topic": "Treaties & History",
    "q": "Which was the most recent country to join the EU, and when?",
    "options": [
      "Croatia, 2013",
      "Romania, 2007",
      "Slovenia, 2004",
      "North Macedonia, 2020"
    ],
    "a": 0,
    "expl": "Croatia became the 28th member on 1 July 2013 (27 after the UK left in 2020). It also joined the euro and Schengen in 2023."
  },
  {
    "id": "eu033",
    "topic": "Treaties & History",
    "q": "Under which treaty article did the United Kingdom withdraw from the EU?",
    "options": [
      "Article 50 TEU",
      "Article 7 TEU",
      "Article 258 TFEU",
      "Article 2 TEU"
    ],
    "a": 0,
    "expl": "Article 50 TEU, introduced by Lisbon, sets the withdrawal procedure. The UK left on 31 January 2020."
  },
  {
    "id": "eu034",
    "topic": "Treaties & History",
    "q": "The two treaties on which the EU is currently founded are…",
    "options": [
      "The Treaty on European Union (TEU) and the Treaty on the Functioning of the EU (TFEU)",
      "The Treaty of Rome and the Treaty of Paris",
      "The Constitutional Treaty and the TEU",
      "The TFEU and the Charter of Fundamental Rights"
    ],
    "a": 0,
    "expl": "Lisbon renamed the EC Treaty as the TFEU; together with the TEU (and Euratom separately) they form primary law."
  },
  {
    "id": "eu035",
    "topic": "Treaties & History",
    "q": "What happened to the 2004 'Treaty establishing a Constitution for Europe'?",
    "options": [
      "It was abandoned after French and Dutch voters rejected it in 2005 referendums",
      "It entered into force in 2006",
      "It was replaced by the Treaty of Nice",
      "Only the UK refused to ratify it"
    ],
    "a": 0,
    "expl": "After the French and Dutch 'no' votes, its substance was largely repackaged into the Treaty of Lisbon."
  },
  {
    "id": "eu036",
    "topic": "Treaties & History",
    "q": "Jacques Delors is best remembered as…",
    "options": [
      "the Commission President who drove the single market and laid the groundwork for the euro",
      "the first President of the European Council",
      "the author of the Schuman Declaration",
      "the first President of the European Parliament"
    ],
    "a": 0,
    "expl": "Delors led the Commission 1985–1995, championing the 1992 single-market programme and the Delors Report on EMU."
  },
  {
    "id": "eu037",
    "topic": "Treaties & History",
    "q": "When were the first direct elections to the European Parliament held?",
    "options": [
      "1979",
      "1958",
      "1992",
      "2004"
    ],
    "a": 0,
    "expl": "Since 1979, MEPs are directly elected every five years; before that they were delegated by national parliaments."
  },
  {
    "id": "eu038",
    "topic": "Treaties & History",
    "q": "Which country left the euro area's predecessor debate entirely by negotiating a permanent opt-out at Maastricht?",
    "options": [
      "Denmark",
      "Sweden",
      "Poland",
      "Austria"
    ],
    "a": 0,
    "expl": "Denmark holds a formal euro opt-out (as the UK did). Sweden has no formal opt-out but stays out in practice."
  },
  {
    "id": "eu039",
    "topic": "Treaties & History",
    "q": "Ukraine and Moldova were granted EU candidate status in…",
    "options": [
      "June 2022",
      "March 2020",
      "January 2024",
      "They are not candidates"
    ],
    "a": 0,
    "expl": "The European Council granted both candidate status in June 2022, shortly after Russia's full-scale invasion of Ukraine; accession talks opened in June 2024."
  },
  {
    "id": "eu040",
    "topic": "Treaties & History",
    "q": "The 'empty chair crisis' of 1965–66, resolved by the Luxembourg Compromise, was provoked by…",
    "options": [
      "France boycotting Council meetings over moves toward majority voting",
      "The UK's budget rebate demands",
      "Germany rejecting the CAP",
      "Italy blocking enlargement"
    ],
    "a": 0,
    "expl": "De Gaulle's France withdrew its representatives; the compromise let states invoke 'very important interests' to avoid being outvoted."
  },
  {
    "id": "eu041",
    "topic": "Law & Decision-making",
    "q": "Which EU legal act is binding in its entirety and directly applicable in all member states?",
    "options": [
      "A regulation",
      "A directive",
      "A recommendation",
      "An opinion"
    ],
    "a": 0,
    "expl": "Regulations apply directly without national transposition. Directives bind as to the result but leave form and methods to member states."
  },
  {
    "id": "eu042",
    "topic": "Law & Decision-making",
    "q": "What must member states do with a directive?",
    "options": [
      "Transpose it into national law within the deadline, choosing form and methods",
      "Apply it directly with no national measures",
      "Ratify it in national parliaments before it is valid",
      "Nothing — directives are non-binding"
    ],
    "a": 0,
    "expl": "Directives set a result to achieve; failure to transpose on time can trigger infringement proceedings and fines."
  },
  {
    "id": "eu043",
    "topic": "Law & Decision-making",
    "q": "In the ordinary legislative procedure, who are the co-legislators?",
    "options": [
      "The European Parliament and the Council of the EU",
      "The Commission and the Parliament",
      "The Commission and the European Council",
      "The Parliament and national parliaments"
    ],
    "a": 0,
    "expl": "The Commission proposes; Parliament and Council adopt jointly, over up to three readings with possible conciliation."
  },
  {
    "id": "eu044",
    "topic": "Law & Decision-making",
    "q": "What is the principle of subsidiarity?",
    "options": [
      "The EU acts only if objectives can be better achieved at EU level than by member states",
      "EU law prevails over national law",
      "The EU may act only within powers conferred by the treaties",
      "EU action must not exceed what is necessary"
    ],
    "a": 0,
    "expl": "Conferral = act only within given powers; subsidiarity = act only where EU level adds value (non-exclusive areas); proportionality = no more than necessary."
  },
  {
    "id": "eu045",
    "topic": "Law & Decision-making",
    "q": "The primacy of EU law over conflicting national law was established by which judgment?",
    "options": [
      "Costa v ENEL (1964)",
      "Van Gend en Loos (1963)",
      "Cassis de Dijon (1979)",
      "Francovich (1991)"
    ],
    "a": 0,
    "expl": "Costa v ENEL established primacy; Van Gend en Loos established direct effect; Cassis de Dijon mutual recognition; Francovich state liability."
  },
  {
    "id": "eu046",
    "topic": "Law & Decision-making",
    "q": "Which case established that EU law can confer rights on individuals enforceable before national courts (direct effect)?",
    "options": [
      "Van Gend en Loos (1963)",
      "Costa v ENEL (1964)",
      "Bosman (1995)",
      "Keck (1993)"
    ],
    "a": 0,
    "expl": "Van Gend en Loos made individuals direct subjects of Community law — a cornerstone of the EU legal order."
  },
  {
    "id": "eu047",
    "topic": "Law & Decision-making",
    "q": "What can the Commission do if a member state fails to fulfil a treaty obligation?",
    "options": [
      "Launch infringement proceedings and ultimately refer the state to the Court of Justice",
      "Suspend the state's EU membership",
      "Dissolve its national parliament",
      "Impose fines directly with no court involvement"
    ],
    "a": 0,
    "expl": "Art. 258 TFEU: reasoned opinion, then referral to the CJEU; financial penalties are possible on a second referral (Art. 260)."
  },
  {
    "id": "eu048",
    "topic": "Law & Decision-making",
    "q": "What is a preliminary ruling (Article 267 TFEU)?",
    "options": [
      "The CJEU answers national courts' questions on the interpretation or validity of EU law",
      "The Court's first-instance judgment before appeal",
      "A Commission opinion before proposing legislation",
      "A Parliament resolution before first reading"
    ],
    "a": 0,
    "expl": "National courts refer questions to the CJEU; the answer binds the referring court and ensures uniform interpretation across the EU."
  },
  {
    "id": "eu049",
    "topic": "Law & Decision-making",
    "q": "How many signatures does a European Citizens' Initiative need to invite a Commission proposal?",
    "options": [
      "One million, from at least seven member states",
      "500,000 from any member states",
      "Ten million, from a majority of member states",
      "One million from a single member state suffices"
    ],
    "a": 0,
    "expl": "1 million statements of support with minimum thresholds in at least a quarter of member states (7 of 27)."
  },
  {
    "id": "eu050",
    "topic": "Law & Decision-making",
    "q": "Which values are listed in Article 2 TEU?",
    "options": [
      "Human dignity, freedom, democracy, equality, the rule of law and respect for human rights",
      "Free trade, price stability and full employment",
      "Federalism, neutrality and solidarity",
      "Peace, secularism and prosperity"
    ],
    "a": 0,
    "expl": "Article 2 TEU values bind members and candidates alike; serious breaches can trigger the Article 7 procedure."
  },
  {
    "id": "eu051",
    "topic": "Law & Decision-making",
    "q": "What can Article 7 TEU lead to, in case of a serious and persistent breach of EU values?",
    "options": [
      "Suspension of certain membership rights, including Council voting rights",
      "Expulsion from the EU",
      "Automatic exit under Article 50",
      "Dissolution of the national government"
    ],
    "a": 0,
    "expl": "Article 7 can suspend rights (voting in Council) but there is no legal mechanism to expel a member state."
  },
  {
    "id": "eu052",
    "topic": "Law & Decision-making",
    "q": "In which area does the Council generally decide by unanimity?",
    "options": [
      "Common foreign and security policy and taxation",
      "Internal market harmonisation",
      "Agriculture",
      "Consumer protection"
    ],
    "a": 0,
    "expl": "CFSP, taxation, EU finances (own resources), and enlargement require unanimity; most other areas use QMV."
  },
  {
    "id": "eu053",
    "topic": "Law & Decision-making",
    "q": "Which of these is an EXCLUSIVE competence of the EU?",
    "options": [
      "The customs union and common commercial policy",
      "Public health",
      "Education",
      "Tourism"
    ],
    "a": 0,
    "expl": "Exclusive: customs union, competition rules for the internal market, euro-area monetary policy, common commercial policy, marine biological resources conservation."
  },
  {
    "id": "eu054",
    "topic": "Law & Decision-making",
    "q": "Environment and the internal market are examples of which type of competence?",
    "options": [
      "Shared between the EU and member states",
      "Exclusive to the EU",
      "Supporting only",
      "National only"
    ],
    "a": 0,
    "expl": "In shared competences, states may act only where the EU has not; education, culture and health are merely supporting competences."
  },
  {
    "id": "eu055",
    "topic": "Law & Decision-making",
    "q": "What is a 'trilogue'?",
    "options": [
      "Informal negotiations between Parliament, Council and Commission to agree legislative texts",
      "The three-reading procedure in Parliament",
      "The CJEU's three-judge chamber",
      "The annual summit of the three largest member states"
    ],
    "a": 0,
    "expl": "Most EU laws are now agreed in trilogues at first or early second reading, before formal adoption."
  },
  {
    "id": "eu056",
    "topic": "Law & Decision-making",
    "q": "The Charter of Fundamental Rights applies to member states…",
    "options": [
      "only when they are implementing EU law",
      "in all their activities",
      "only in criminal matters",
      "it applies only to EU institutions, never to states"
    ],
    "a": 0,
    "expl": "Art. 51: the Charter binds EU institutions always, and member states only when acting within the scope of EU law."
  },
  {
    "id": "eu057",
    "topic": "Law & Decision-making",
    "q": "Which court hears actions brought by individuals and companies against EU institutions at first instance?",
    "options": [
      "The General Court",
      "The Court of Justice",
      "The European Court of Human Rights",
      "The Court of Auditors"
    ],
    "a": 0,
    "expl": "The General Court (two judges per member state) handles direct actions by natural/legal persons; appeals on points of law go to the Court of Justice."
  },
  {
    "id": "eu058",
    "topic": "Law & Decision-making",
    "q": "A 'decision' as an EU legal act is…",
    "options": [
      "binding in its entirety, and where it specifies addressees, binding only on them",
      "never binding",
      "binding only after national transposition",
      "a political declaration of the European Council"
    ],
    "a": 0,
    "expl": "Decisions bind those they address (e.g. a company in a competition case) or bind generally if no addressee is specified."
  },
  {
    "id": "eu059",
    "topic": "Law & Decision-making",
    "q": "What role do national parliaments play in EU law-making?",
    "options": [
      "They monitor subsidiarity and can trigger a 'yellow card' review of Commission proposals",
      "They vote on every EU regulation",
      "They appoint the Commissioners",
      "They have no role at all"
    ],
    "a": 0,
    "expl": "If a third of national parliaments object on subsidiarity grounds, the Commission must review the proposal ('yellow card')."
  },
  {
    "id": "eu060",
    "topic": "Law & Decision-making",
    "q": "The EU's 'rule of law conditionality' regulation allows the EU to…",
    "options": [
      "suspend EU budget payments to a state whose rule-of-law breaches affect the EU's financial interests",
      "expel a member state",
      "dissolve national courts",
      "override national constitutions"
    ],
    "a": 0,
    "expl": "In force since 2021 and upheld by the CJEU in 2022, it links EU funds to rule-of-law compliance; first applied to Hungary."
  },
  {
    "id": "eu061",
    "topic": "Policies",
    "q": "What are the 'four freedoms' of the single market?",
    "options": [
      "Free movement of goods, services, capital and persons",
      "Speech, religion, press and assembly",
      "Trade, travel, currency and labour",
      "Goods, data, energy and transport"
    ],
    "a": 0,
    "expl": "The four freedoms date from the Treaty of Rome and underpin the internal market completed in 1993."
  },
  {
    "id": "eu062",
    "topic": "Policies",
    "q": "Which policy has traditionally taken the largest share of the EU budget?",
    "options": [
      "The Common Agricultural Policy",
      "Defence",
      "Research",
      "Administration"
    ],
    "a": 0,
    "expl": "CAP still takes roughly a third of the budget (about 70% in the 1980s), now roughly on par with cohesion policy."
  },
  {
    "id": "eu063",
    "topic": "Policies",
    "q": "What is the aim of EU cohesion policy?",
    "options": [
      "Reducing economic and social disparities between EU regions",
      "Harmonising national tax systems",
      "Setting common defence standards",
      "Controlling inflation"
    ],
    "a": 0,
    "expl": "Through funds like the ERDF, Cohesion Fund and ESF+, it channels investment to less-developed regions."
  },
  {
    "id": "eu064",
    "topic": "Policies",
    "q": "In competition policy, the Commission can…",
    "options": [
      "fine companies for cartels and abuse of dominance, and block mergers",
      "set maximum consumer prices",
      "nationalise failing companies",
      "only advise national competition authorities"
    ],
    "a": 0,
    "expl": "The Commission enforces Articles 101–102 TFEU and the Merger Regulation, with fines up to 10% of worldwide turnover."
  },
  {
    "id": "eu065",
    "topic": "Policies",
    "q": "What does the European Green Deal commit the EU to?",
    "options": [
      "Climate neutrality by 2050",
      "Leaving fossil fuels by 2030",
      "Banning all cars by 2040",
      "Zero waste by 2025"
    ],
    "a": 0,
    "expl": "The European Climate Law makes the 2050 climate-neutrality target legally binding, with at least −55% emissions by 2030 ('Fit for 55')."
  },
  {
    "id": "eu066",
    "topic": "Policies",
    "q": "The 'Fit for 55' package refers to…",
    "options": [
      "cutting net greenhouse-gas emissions by at least 55% by 2030 (vs 1990)",
      "raising employment to 55 million",
      "55 infrastructure projects",
      "reducing energy prices by 55%"
    ],
    "a": 0,
    "expl": "It is the legislative package (ETS reform, CBAM, renewables targets…) implementing the 2030 climate target."
  },
  {
    "id": "eu067",
    "topic": "Policies",
    "q": "What is the Schengen area?",
    "options": [
      "A zone of countries that abolished internal border controls",
      "The euro currency zone",
      "The EU's customs union",
      "A free-trade area with neighbouring countries"
    ],
    "a": 0,
    "expl": "It includes most EU states plus Iceland, Liechtenstein, Norway and Switzerland; Bulgaria and Romania joined fully in January 2025."
  },
  {
    "id": "eu068",
    "topic": "Policies",
    "q": "Which EU member state has a permanent opt-out from Schengen?",
    "options": [
      "Ireland",
      "Sweden",
      "Croatia",
      "Portugal"
    ],
    "a": 0,
    "expl": "Ireland maintains the Common Travel Area with the UK and stays outside Schengen; Cyprus is not yet fully applying the acquis."
  },
  {
    "id": "eu069",
    "topic": "Policies",
    "q": "Erasmus+ is the EU programme for…",
    "options": [
      "education, training, youth and sport mobility",
      "farm subsidies",
      "border management",
      "space research"
    ],
    "a": 0,
    "expl": "Started in 1987, Erasmus has supported mobility for over 13 million people; the current programme also funds school and sport cooperation."
  },
  {
    "id": "eu070",
    "topic": "Policies",
    "q": "Horizon Europe is…",
    "options": [
      "the EU's research and innovation funding programme",
      "the EU's satellite navigation system",
      "a border surveillance agency",
      "the EU's climate satellite"
    ],
    "a": 0,
    "expl": "With ~€95 billion for 2021–27, it is one of the world's largest research programmes. (Galileo is the satellite system.)"
  },
  {
    "id": "eu071",
    "topic": "Policies",
    "q": "Which agency manages the EU's external border cooperation?",
    "options": [
      "Frontex",
      "Europol",
      "EASA",
      "ENISA"
    ],
    "a": 0,
    "expl": "Frontex (Warsaw) is the European Border and Coast Guard Agency. Europol handles police cooperation; ENISA cybersecurity; EASA aviation."
  },
  {
    "id": "eu072",
    "topic": "Policies",
    "q": "The Digital Services Act (DSA) primarily regulates…",
    "options": [
      "online platforms' responsibilities for illegal content and transparency",
      "the price of mobile roaming",
      "semiconductor manufacturing",
      "cryptocurrency issuance"
    ],
    "a": 0,
    "expl": "The DSA imposes duties on platforms (strictest for 'very large' ones); its twin, the DMA, targets gatekeepers' market power."
  },
  {
    "id": "eu073",
    "topic": "Policies",
    "q": "The EU AI Act, adopted in 2024, takes which approach to regulating artificial intelligence?",
    "options": [
      "A risk-based approach, banning some uses and imposing duties on high-risk systems",
      "A total ban on generative AI",
      "Voluntary self-regulation only",
      "It regulates only government use of AI"
    ],
    "a": 0,
    "expl": "The world's first comprehensive AI law classifies systems by risk: unacceptable (banned), high, limited and minimal risk."
  },
  {
    "id": "eu074",
    "topic": "Policies",
    "q": "The GDPR is the EU's flagship legislation on…",
    "options": [
      "personal data protection",
      "food safety",
      "banking supervision",
      "road transport"
    ],
    "a": 0,
    "expl": "The General Data Protection Regulation (applied since May 2018) sets data-protection rules with fines up to 4% of global turnover."
  },
  {
    "id": "eu075",
    "topic": "Policies",
    "q": "In which policy area does the EU have exclusive competence to negotiate international agreements?",
    "options": [
      "Trade (common commercial policy)",
      "Education",
      "Health",
      "Housing"
    ],
    "a": 0,
    "expl": "Trade agreements are negotiated by the Commission on a Council mandate and concluded with Parliament's consent."
  },
  {
    "id": "eu076",
    "topic": "Policies",
    "q": "What is the Common Fisheries Policy's core instrument for conservation?",
    "options": [
      "Total allowable catches (quotas) set for fish stocks",
      "A ban on all industrial fishing",
      "Privatisation of the seas",
      "National fishing licences only"
    ],
    "a": 0,
    "expl": "TACs are agreed annually by the Council; conservation of marine biological resources is an exclusive EU competence."
  },
  {
    "id": "eu077",
    "topic": "Policies",
    "q": "The European Health Union initiative grew mainly out of…",
    "options": [
      "the COVID-19 pandemic",
      "the 2008 financial crisis",
      "Brexit",
      "the euro crisis"
    ],
    "a": 0,
    "expl": "COVID-19 led to joint vaccine procurement, a stronger ECDC/EMA and the new HERA emergency authority — though health remains mainly national."
  },
  {
    "id": "eu078",
    "topic": "Policies",
    "q": "The EU emissions trading system (ETS) works by…",
    "options": [
      "capping total emissions and letting companies trade allowances",
      "taxing petrol at a single EU rate",
      "banning coal power directly",
      "subsidising airlines"
    ],
    "a": 0,
    "expl": "The world's first major carbon market (2005) covers power, industry and aviation; a second ETS will cover buildings and road transport."
  },
  {
    "id": "eu079",
    "topic": "Policies",
    "q": "CBAM, in force in transitional form since 2023, stands for…",
    "options": [
      "Carbon Border Adjustment Mechanism",
      "Common Banking Asset Measure",
      "Central Budget Allocation Method",
      "Cross-Border Agriculture Market"
    ],
    "a": 0,
    "expl": "CBAM prices the carbon embedded in imports (steel, cement, fertilisers…) to prevent 'carbon leakage'."
  },
  {
    "id": "eu080",
    "topic": "Policies",
    "q": "Which programme funds EU space activities such as Galileo and Copernicus?",
    "options": [
      "The EU Space Programme",
      "Horizon 2020",
      "Erasmus+",
      "LIFE"
    ],
    "a": 0,
    "expl": "Galileo provides satellite navigation, Copernicus Earth observation; LIFE funds environment projects."
  },
  {
    "id": "eu081",
    "topic": "Economy & Budget",
    "q": "How many member states use the euro as of 2026?",
    "options": [
      "21",
      "19",
      "27",
      "17"
    ],
    "a": 0,
    "expl": "Bulgaria became the 21st euro-area member on 1 January 2026, following Croatia (20th) in 2023."
  },
  {
    "id": "eu082",
    "topic": "Economy & Budget",
    "q": "When were euro banknotes and coins introduced?",
    "options": [
      "1 January 2002",
      "1 January 1999",
      "1 January 1993",
      "1 January 2004"
    ],
    "a": 0,
    "expl": "The euro launched as book money in 1999; physical cash arrived in 2002 in 12 countries."
  },
  {
    "id": "eu083",
    "topic": "Economy & Budget",
    "q": "The Maastricht convergence criteria for euro adoption include…",
    "options": [
      "a government deficit below 3% of GDP and debt below 60% of GDP",
      "unemployment below 5%",
      "a trade surplus for three years",
      "a minimum wage above €1,000"
    ],
    "a": 0,
    "expl": "Plus price stability, exchange-rate stability (ERM II) and convergent long-term interest rates."
  },
  {
    "id": "eu084",
    "topic": "Economy & Budget",
    "q": "What is the primary objective of the European Central Bank?",
    "options": [
      "Price stability",
      "Full employment",
      "Maximising growth",
      "A strong euro exchange rate"
    ],
    "a": 0,
    "expl": "The ECB targets 2% inflation over the medium term; other goals are secondary to price stability."
  },
  {
    "id": "eu085",
    "topic": "Economy & Budget",
    "q": "What is the Multiannual Financial Framework (MFF)?",
    "options": [
      "The EU's seven-year budget framework setting spending ceilings",
      "The annual budget of the Commission",
      "The eurozone bailout fund",
      "The ECB's monetary strategy"
    ],
    "a": 0,
    "expl": "The current MFF runs 2021–2027 (~€1.2 trillion in current prices); it is adopted unanimously by the Council with Parliament's consent."
  },
  {
    "id": "eu086",
    "topic": "Economy & Budget",
    "q": "Roughly how large is the EU's annual budget relative to EU gross national income?",
    "options": [
      "About 1%",
      "About 10%",
      "About 25%",
      "About 50%"
    ],
    "a": 0,
    "expl": "Unlike national budgets (40–50% of GDP), the EU budget is ~1% of EU GNI — a fact EPSO loves."
  },
  {
    "id": "eu087",
    "topic": "Economy & Budget",
    "q": "Which of these is an EU budget 'own resource'?",
    "options": [
      "Customs duties on imports from outside the EU",
      "EU-wide income tax",
      "Profits of the European Central Bank",
      "Fines paid by member states only"
    ],
    "a": 0,
    "expl": "Own resources: customs duties, a VAT-based resource, the plastics-based contribution and GNI-based contributions (the largest share)."
  },
  {
    "id": "eu088",
    "topic": "Economy & Budget",
    "q": "NextGenerationEU is…",
    "options": [
      "the ~€800 billion recovery instrument financed by joint EU borrowing after COVID-19",
      "an Erasmus successor programme",
      "the EU's youth employment scheme",
      "a demographic strategy"
    ],
    "a": 0,
    "expl": "Its core, the Recovery and Resilience Facility, disburses grants and loans against national reform and investment plans until 2026."
  },
  {
    "id": "eu089",
    "topic": "Economy & Budget",
    "q": "Which institutions form the 'budgetary authority' adopting the annual EU budget?",
    "options": [
      "The European Parliament and the Council",
      "The Commission and the Court of Auditors",
      "The European Council alone",
      "The ECB and ECOFIN"
    ],
    "a": 0,
    "expl": "The Commission drafts; Parliament and Council adopt; the ECA audits; Parliament grants the 'discharge' for implementation."
  },
  {
    "id": "eu090",
    "topic": "Economy & Budget",
    "q": "The Stability and Growth Pact is designed to…",
    "options": [
      "keep member states' deficits and debt under control",
      "set the EU minimum wage",
      "fund infrastructure projects",
      "stabilise the euro exchange rate"
    ],
    "a": 0,
    "expl": "Reformed in 2024, it enforces the 3%/60% reference values through country-specific fiscal plans and an excessive deficit procedure."
  },
  {
    "id": "eu091",
    "topic": "Economy & Budget",
    "q": "What is the European Semester?",
    "options": [
      "The annual cycle of EU economic and fiscal policy coordination",
      "The Parliament's six-month session calendar",
      "The rotating Council presidency period",
      "The ECB's rate-setting cycle"
    ],
    "a": 0,
    "expl": "Each year the Commission analyses national budgets/reforms and issues country-specific recommendations endorsed by the Council."
  },
  {
    "id": "eu092",
    "topic": "Economy & Budget",
    "q": "The European Stability Mechanism (ESM) is…",
    "options": [
      "the euro area's permanent crisis fund providing loans to members in difficulty",
      "the EU's unemployment insurance",
      "an ECB bond-buying programme",
      "the EU's development bank"
    ],
    "a": 0,
    "expl": "Created in 2012 during the sovereign debt crisis, the ESM (Luxembourg) can lend up to ~€500 billion under conditionality."
  },
  {
    "id": "eu093",
    "topic": "Economy & Budget",
    "q": "Which body groups the finance ministers of euro-area countries?",
    "options": [
      "The Eurogroup",
      "ECOFIN",
      "The ESRB",
      "The EIB Board"
    ],
    "a": 0,
    "expl": "The informal Eurogroup meets before ECOFIN (all 27 finance ministers); its president is elected for 2.5 years."
  },
  {
    "id": "eu094",
    "topic": "Economy & Budget",
    "q": "The European Investment Bank (EIB) is…",
    "options": [
      "the EU's long-term lending institution owned by the member states",
      "a private commercial bank",
      "the supervisor of euro-area banks",
      "the manager of the EU budget"
    ],
    "a": 0,
    "expl": "The EIB (Luxembourg) finances investment supporting EU objectives — it is the world's largest multilateral lender."
  },
  {
    "id": "eu095",
    "topic": "Economy & Budget",
    "q": "The Single Supervisory Mechanism (SSM) gives which institution direct supervision of the euro area's biggest banks?",
    "options": [
      "The European Central Bank",
      "The Commission",
      "The EIB",
      "The Court of Auditors"
    ],
    "a": 0,
    "expl": "Since 2014, the ECB directly supervises 'significant' banks — the first pillar of the Banking Union."
  },
  {
    "id": "eu096",
    "topic": "Economy & Budget",
    "q": "Which member state pays the largest gross contribution to the EU budget?",
    "options": [
      "Germany",
      "France",
      "Poland",
      "Netherlands"
    ],
    "a": 0,
    "expl": "Contributions are mainly GNI-based, so the largest economy (Germany) is the largest gross contributor."
  },
  {
    "id": "eu097",
    "topic": "Economy & Budget",
    "q": "VAT in the EU is…",
    "options": [
      "harmonised by common rules with a minimum standard rate of 15%, but rates are set nationally",
      "a single EU-wide rate of 20%",
      "abolished for cross-border trade",
      "collected directly by Brussels"
    ],
    "a": 0,
    "expl": "The VAT Directive sets common rules and floors; actual rates (and most tax policy) remain national and require unanimity to change at EU level."
  },
  {
    "id": "eu098",
    "topic": "Economy & Budget",
    "q": "ERM II is…",
    "options": [
      "the exchange-rate mechanism a country joins for at least two years before adopting the euro",
      "the EU's export refund scheme",
      "a bank resolution fund",
      "the ECB's inflation model"
    ],
    "a": 0,
    "expl": "Candidates must keep their currency within ±15% of a euro central rate; Denmark participates without intending to join."
  },
  {
    "id": "eu099",
    "topic": "Economy & Budget",
    "q": "Who audits the EU's accounts and issues an annual 'statement of assurance'?",
    "options": [
      "The European Court of Auditors",
      "The European Parliament",
      "The IMF",
      "National audit offices jointly"
    ],
    "a": 0,
    "expl": "The ECA's annual report feeds Parliament's discharge decision on the Commission's budget implementation."
  },
  {
    "id": "eu100",
    "topic": "Economy & Budget",
    "q": "OLAF is the EU body responsible for…",
    "options": [
      "investigating fraud against the EU budget",
      "regulating financial markets",
      "printing euro banknotes",
      "collecting customs duties"
    ],
    "a": 0,
    "expl": "The European Anti-Fraud Office investigates fraud and corruption affecting EU funds; the EPPO can now prosecute such crimes."
  },
  {
    "id": "eu101",
    "topic": "External & Enlargement",
    "q": "The 'Copenhagen criteria' for EU accession require…",
    "options": [
      "stable democratic institutions, a functioning market economy, and the ability to take on the acquis",
      "adoption of the euro before joining",
      "NATO membership",
      "a population above one million"
    ],
    "a": 0,
    "expl": "Defined by the 1993 Copenhagen European Council: political criteria, economic criteria, and administrative capacity to apply EU law."
  },
  {
    "id": "eu102",
    "topic": "External & Enlargement",
    "q": "Decisions on admitting a new member state require…",
    "options": [
      "unanimity in the Council, Parliament's consent, and ratification by all member states",
      "a qualified majority in the Council",
      "a Commission decision alone",
      "a referendum in every member state"
    ],
    "a": 0,
    "expl": "Enlargement is one of the strongest unanimity locks — any single member state can block accession."
  },
  {
    "id": "eu103",
    "topic": "External & Enlargement",
    "q": "Which of the following is a candidate country for EU membership (2026)?",
    "options": [
      "Montenegro",
      "Norway",
      "Switzerland",
      "Iceland"
    ],
    "a": 0,
    "expl": "Candidates include Montenegro, Serbia, Albania, North Macedonia, Ukraine, Moldova, Bosnia and Herzegovina, Georgia and Türkiye. Norway and Switzerland chose to stay out; Iceland withdrew its application."
  },
  {
    "id": "eu104",
    "topic": "External & Enlargement",
    "q": "EU sanctions (restrictive measures) under the CFSP are adopted…",
    "options": [
      "by the Council acting unanimously",
      "by the Commission by simple decision",
      "by the European Parliament",
      "by the Court of Justice"
    ],
    "a": 0,
    "expl": "CFSP decisions, including sanctions regimes, require unanimity in the Council — a recurring reform debate."
  },
  {
    "id": "eu105",
    "topic": "External & Enlargement",
    "q": "Collectively, the EU and its member states are…",
    "options": [
      "the world's largest provider of development aid",
      "the world's largest oil producer",
      "the world's largest arms exporter",
      "the smallest trading bloc in the G7"
    ],
    "a": 0,
    "expl": "'Team Europe' provides over 40% of global official development assistance."
  },
  {
    "id": "eu106",
    "topic": "External & Enlargement",
    "q": "The European External Action Service (EEAS) is…",
    "options": [
      "the EU's diplomatic service, supporting the High Representative",
      "the EU's border police",
      "an intelligence agency",
      "the Council's legal service"
    ],
    "a": 0,
    "expl": "Created by the Lisbon Treaty, the EEAS runs about 145 EU delegations worldwide."
  },
  {
    "id": "eu107",
    "topic": "External & Enlargement",
    "q": "Article 42(7) TEU provides that…",
    "options": [
      "member states must aid a member that is the victim of armed aggression on its territory",
      "the EU can draft citizens into a European army",
      "NATO commands EU forces",
      "neutral states must leave the EU in wartime"
    ],
    "a": 0,
    "expl": "The mutual assistance clause (invoked once, by France in 2015) respects the neutrality traditions of certain states and NATO commitments of others."
  },
  {
    "id": "eu108",
    "topic": "External & Enlargement",
    "q": "Which agreement governs EU–UK trade relations since 2021?",
    "options": [
      "The Trade and Cooperation Agreement",
      "The Withdrawal Agreement alone",
      "EEA membership",
      "A customs union treaty"
    ],
    "a": 0,
    "expl": "The TCA provides tariff-free, quota-free goods trade subject to rules of origin; the Withdrawal Agreement settled exit terms (citizens, money, Ireland/NI Protocol → Windsor Framework)."
  },
  {
    "id": "eu109",
    "topic": "External & Enlargement",
    "q": "Norway, Iceland and Liechtenstein participate in the single market through…",
    "options": [
      "the European Economic Area (EEA) Agreement",
      "full EU membership",
      "the euro",
      "the customs union"
    ],
    "a": 0,
    "expl": "The EEA extends the four freedoms to these EFTA states; Switzerland instead relies on bilateral agreements."
  },
  {
    "id": "eu110",
    "topic": "External & Enlargement",
    "q": "The Eastern Partnership and the Union for the Mediterranean are instruments of…",
    "options": [
      "the European Neighbourhood Policy",
      "the Common Agricultural Policy",
      "the EU's internal cohesion policy",
      "the Schengen acquis"
    ],
    "a": 0,
    "expl": "The ENP manages relations with the EU's eastern and southern neighbours, short of accession."
  },
  {
    "id": "eu111",
    "topic": "External & Enlargement",
    "q": "Since 2022, the EU has financed military support to Ukraine mainly through…",
    "options": [
      "the European Peace Facility",
      "the Common Agricultural Policy",
      "Horizon Europe",
      "the Cohesion Fund"
    ],
    "a": 0,
    "expl": "The off-budget European Peace Facility reimburses member states' military aid; the EU also trains Ukrainian soldiers (EUMAM)."
  },
  {
    "id": "eu112",
    "topic": "External & Enlargement",
    "q": "How many official languages does the EU have?",
    "options": [
      "24",
      "27",
      "12",
      "3"
    ],
    "a": 0,
    "expl": "24 official languages; every citizen may write to the institutions and receive an answer in any of them. Irish became a full working language in 2022."
  },
  {
    "id": "eu113",
    "topic": "External & Enlargement",
    "q": "'Global Gateway' is the EU's strategy for…",
    "options": [
      "investing in infrastructure worldwide as an alternative to China's Belt and Road",
      "screening foreign investment in the EU",
      "a common visa policy",
      "deep-sea mining"
    ],
    "a": 0,
    "expl": "Launched in 2021, it aims to mobilise up to €300 billion in global infrastructure investment by 2027."
  },
  {
    "id": "eu114",
    "topic": "External & Enlargement",
    "q": "Trade negotiations with third countries are conducted by…",
    "options": [
      "the Commission, on a mandate from the Council",
      "each member state separately",
      "the European Parliament",
      "the rotating presidency"
    ],
    "a": 0,
    "expl": "The common commercial policy is exclusive: the Commission negotiates, the Council authorises and concludes, Parliament consents."
  },
  {
    "id": "eu115",
    "topic": "External & Enlargement",
    "q": "Which country applied for EU membership in 2022 alongside Ukraine and Moldova?",
    "options": [
      "Georgia",
      "Armenia",
      "Kazakhstan",
      "Serbia"
    ],
    "a": 0,
    "expl": "Georgia applied in March 2022 and was granted candidate status in December 2023 (though its accession process was later effectively frozen)."
  },
  {
    "id": "eu116",
    "topic": "External & Enlargement",
    "q": "The EU's climate diplomacy rests on which international agreement?",
    "options": [
      "The Paris Agreement (2015)",
      "The Kyoto Protocol alone",
      "The Warsaw Pact",
      "The Bretton Woods Agreement"
    ],
    "a": 0,
    "expl": "The EU and all member states are parties to the Paris Agreement, committing to keep warming well below 2°C."
  },
  {
    "id": "eu117",
    "topic": "External & Enlargement",
    "q": "PESCO, launched in 2017, refers to…",
    "options": [
      "Permanent Structured Cooperation among member states on defence projects",
      "a fisheries agreement",
      "the EU's pension scheme",
      "a customs IT system"
    ],
    "a": 0,
    "expl": "26 member states cooperate on joint defence capability projects under PESCO; Malta stays out."
  },
  {
    "id": "eu118",
    "topic": "External & Enlargement",
    "q": "Humanitarian aid operations of the Commission are managed by…",
    "options": [
      "DG ECHO",
      "Frontex",
      "the EEAS delegations only",
      "the European Central Bank"
    ],
    "a": 0,
    "expl": "DG European Civil Protection and Humanitarian Aid Operations funds relief worldwide and runs the EU Civil Protection Mechanism."
  },
  {
    "id": "eu119",
    "topic": "External & Enlargement",
    "q": "The Cotonou Agreement and its successor (the Samoa Agreement, 2023) frame EU relations with…",
    "options": [
      "African, Caribbean and Pacific (ACP) states",
      "ASEAN",
      "Mercosur",
      "the Gulf states"
    ],
    "a": 0,
    "expl": "The EU–OACPS partnership covers development, trade and political dialogue with 79 countries."
  },
  {
    "id": "eu120",
    "topic": "External & Enlargement",
    "q": "Foreign direct investment into the EU in strategic sectors is subject to…",
    "options": [
      "an EU screening cooperation framework, with decisions remaining national",
      "an outright EU-wide ban",
      "mandatory approval by the European Parliament",
      "no rules at all"
    ],
    "a": 0,
    "expl": "The FDI Screening Regulation (2020) coordinates national screening on security grounds; the final decision stays with member states."
  },
  {
    "id": "eu121",
    "topic": "Institutions",
    "q": "How is the Court of Justice (the CJEU's upper court) composed?",
    "options": [
      "One judge per member state, assisted by advocates general",
      "Three judges per member state",
      "Fifteen judges elected by Parliament",
      "One judge per official language"
    ],
    "a": 0,
    "expl": "27 judges (one per state) plus advocates general who deliver impartial opinions; judges are appointed by common accord of governments for renewable 6-year terms."
  },
  {
    "id": "eu122",
    "topic": "Institutions",
    "q": "What is the minimum size of a political group in the European Parliament?",
    "options": [
      "23 MEPs elected in at least a quarter of the member states",
      "50 MEPs from any member states",
      "10 MEPs from at least three member states",
      "There is no minimum"
    ],
    "a": 0,
    "expl": "A group needs 23 MEPs from at least 7 member states — groups get speaking time, funding and committee posts."
  },
  {
    "id": "eu123",
    "topic": "Institutions",
    "q": "Who has been President of the European Parliament since 2022?",
    "options": [
      "Roberta Metsola",
      "Ursula von der Leyen",
      "David Sassoli",
      "Kaja Kallas"
    ],
    "a": 0,
    "expl": "Malta's Roberta Metsola was elected in January 2022 and re-elected in July 2024."
  },
  {
    "id": "eu124",
    "topic": "Institutions",
    "q": "How many configurations does the Council of the EU have?",
    "options": [
      "10",
      "27",
      "3",
      "20"
    ],
    "a": 0,
    "expl": "Ten configurations (General Affairs, Foreign Affairs, ECOFIN, Agriculture and Fisheries, Environment, etc.) — same institution, different ministers."
  },
  {
    "id": "eu125",
    "topic": "Institutions",
    "q": "Where does the European Parliament's committee work mostly take place?",
    "options": [
      "Brussels",
      "Strasbourg",
      "Luxembourg",
      "Frankfurt"
    ],
    "a": 0,
    "expl": "Committees and most political work happen in Brussels; the 12 plenary part-sessions are held in Strasbourg, the official seat."
  },
  {
    "id": "eu126",
    "topic": "Institutions",
    "q": "European Commissioners are required to…",
    "options": [
      "act independently in the general interest of the Union, not for their home government",
      "defend their member state's position in the College",
      "follow instructions from their national parliament",
      "represent their European political party"
    ],
    "a": 0,
    "expl": "Commissioners swear independence; a Commissioner acting as a national delegate would breach the treaties."
  },
  {
    "id": "eu127",
    "topic": "Institutions",
    "q": "How does the European Council normally take its decisions?",
    "options": [
      "By consensus, unless the treaties provide otherwise",
      "Always by qualified majority",
      "By simple majority of leaders",
      "By unanimity in a formal vote on every point"
    ],
    "a": 0,
    "expl": "Summit conclusions are agreed by consensus; specific decisions (e.g. proposing the Commission President) use QMV where the treaties say so."
  },
  {
    "id": "eu128",
    "topic": "Institutions",
    "q": "The ECB's Governing Council is made up of…",
    "options": [
      "the six Executive Board members plus the governors of euro-area national central banks",
      "the finance ministers of the euro area",
      "one representative per EU member state",
      "the heads of all EU supervisory agencies"
    ],
    "a": 0,
    "expl": "It is the ECB's main decision-making body for monetary policy; non-euro countries' governors sit only in the General Council."
  },
  {
    "id": "eu129",
    "topic": "Institutions",
    "q": "Which EU agency is responsible for the authorisation and supervision of medicines?",
    "options": [
      "EMA — the European Medicines Agency",
      "EFSA",
      "ECHA",
      "ECDC"
    ],
    "a": 0,
    "expl": "The EMA moved from London to Amsterdam after Brexit. EFSA covers food safety (Parma), ECHA chemicals (Helsinki), ECDC disease control (Stockholm)."
  },
  {
    "id": "eu130",
    "topic": "Institutions",
    "q": "Where is Europol, the EU's police cooperation agency, based?",
    "options": [
      "The Hague",
      "Warsaw",
      "Lisbon",
      "Vienna"
    ],
    "a": 0,
    "expl": "Europol sits in The Hague alongside Eurojust. Frontex is in Warsaw, the EMSA in Lisbon, the FRA in Vienna."
  },
  {
    "id": "eu131",
    "topic": "Institutions",
    "q": "What does the European Public Prosecutor's Office (EPPO) do?",
    "options": [
      "Investigates and prosecutes crimes against the EU budget, such as fraud and cross-border VAT fraud",
      "Handles all serious crime in the EU",
      "Supervises national prosecutors generally",
      "Rules on human rights complaints"
    ],
    "a": 0,
    "expl": "Operational since 2021 in Luxembourg under enhanced cooperation (not all member states participate); OLAF remains the administrative investigator."
  },
  {
    "id": "eu132",
    "topic": "Institutions",
    "q": "Eurojust supports cooperation between…",
    "options": [
      "national judicial authorities in cross-border criminal cases",
      "national parliaments",
      "central banks",
      "customs laboratories"
    ],
    "a": 0,
    "expl": "Eurojust (The Hague) coordinates investigations and prosecutions across borders — the judicial counterpart of Europol."
  },
  {
    "id": "eu133",
    "topic": "Institutions",
    "q": "Who convenes and chairs the meetings of the European Council?",
    "options": [
      "Its permanent President",
      "The rotating presidency's head of government",
      "The President of the Commission",
      "The oldest head of state"
    ],
    "a": 0,
    "expl": "Since Lisbon, a full-time President (currently António Costa) chairs summits; before 2009 the rotating presidency did."
  },
  {
    "id": "eu134",
    "topic": "Institutions",
    "q": "The Commission's administration is organised into…",
    "options": [
      "Directorates-General (DGs), each responsible for a policy area",
      "ministries",
      "one single secretariat",
      "regional offices only"
    ],
    "a": 0,
    "expl": "DGs (e.g. DG COMP for competition, DG TRADE, DG AGRI) are the Commission's 'ministries', staffed by permanent EU civil servants recruited via EPSO."
  },
  {
    "id": "eu135",
    "topic": "Institutions",
    "q": "In the Council, procedural questions are decided by…",
    "options": [
      "simple majority",
      "unanimity",
      "qualified majority always",
      "the presidency alone"
    ],
    "a": 0,
    "expl": "Simple majority (14 of 27) applies to procedural matters; legislation typically needs QMV; sensitive areas need unanimity."
  },
  {
    "id": "eu136",
    "topic": "Institutions",
    "q": "What was the 'Spitzenkandidat' (lead candidate) process?",
    "options": [
      "The idea that the European party winning the EP elections provides the Commission President",
      "The selection procedure for CJEU judges",
      "The Council's method for choosing its Secretary-General",
      "A German budget rule"
    ],
    "a": 0,
    "expl": "Applied in 2014 (Juncker), it was set aside in 2019 and 2024 — the European Council keeps its treaty right to propose the candidate."
  },
  {
    "id": "eu137",
    "topic": "Institutions",
    "q": "The Committee of the Regions must be consulted on proposals concerning…",
    "options": [
      "areas with territorial impact such as cohesion, transport, environment and education",
      "monetary policy",
      "competition fines",
      "CFSP decisions"
    ],
    "a": 0,
    "expl": "The CoR gives local and regional authorities a voice; its opinions are mandatory to request but not binding."
  },
  {
    "id": "eu138",
    "topic": "Institutions",
    "q": "Members of the European Court of Auditors are appointed…",
    "options": [
      "one per member state, by the Council after consulting Parliament",
      "by direct election",
      "by the Commission President",
      "by national supreme courts"
    ],
    "a": 0,
    "expl": "Six-year renewable terms; complete independence is required, like judges and Commissioners."
  },
  {
    "id": "eu139",
    "topic": "Institutions",
    "q": "The President of the Eurogroup is…",
    "options": [
      "elected by euro-area finance ministers for a 2.5-year term",
      "always the ECB President",
      "the Commissioner for the economy",
      "the rotating presidency's finance minister"
    ],
    "a": 0,
    "expl": "The Eurogroup is informal but influential; Greece's Kyriakos Pierrakakis has chaired it since December 2025, succeeding Ireland's Paschal Donohoe (2020–2025)."
  },
  {
    "id": "eu140",
    "topic": "Institutions",
    "q": "Which body employs the EU's official interpreters and translates legislation into all official languages?",
    "options": [
      "Each institution has its own language services",
      "A single EU Language Agency",
      "The Council of Europe",
      "National governments"
    ],
    "a": 0,
    "expl": "The Commission, Parliament, Council and Court each run large translation/interpretation services — the EU is the world's biggest employer of translators."
  },
  {
    "id": "eu141",
    "topic": "Treaties & History",
    "q": "The 1955 Messina Conference led to…",
    "options": [
      "the Spaak Report and the negotiation of the Treaties of Rome",
      "the creation of the ECSC",
      "the Schuman Declaration",
      "the collapse of European integration"
    ],
    "a": 0,
    "expl": "After the EDC failure, the Six relaunched integration at Messina; Paul-Henri Spaak's committee prepared what became the EEC and Euratom."
  },
  {
    "id": "eu142",
    "topic": "Treaties & History",
    "q": "The European Defence Community (EDC) project failed in 1954 because…",
    "options": [
      "the French National Assembly refused to ratify it",
      "the UK vetoed it",
      "Germany rejected rearmament",
      "NATO forbade it"
    ],
    "a": 0,
    "expl": "The French parliament's rejection buried the EDC (and the linked political community) — defence integration then stalled for decades."
  },
  {
    "id": "eu143",
    "topic": "Treaties & History",
    "q": "Which territory withdrew from the European Communities in 1985?",
    "options": [
      "Greenland",
      "Algeria",
      "Norway",
      "The Faroe Islands"
    ],
    "a": 0,
    "expl": "After gaining home rule from Denmark, Greenland left following a referendum — the only withdrawal before Brexit. (Algeria exited automatically on independence in 1962.)"
  },
  {
    "id": "eu144",
    "topic": "Treaties & History",
    "q": "The 1965 Merger Treaty…",
    "options": [
      "created a single Commission and a single Council for the three Communities",
      "merged the EEC into the ECSC",
      "created the European Council",
      "unified the currencies"
    ],
    "a": 0,
    "expl": "From 1967, one Commission and one Council served the ECSC, EEC and Euratom — until then each Community had its own executive."
  },
  {
    "id": "eu145",
    "topic": "Treaties & History",
    "q": "Who vetoed the United Kingdom's accession to the EEC in 1963 and 1967?",
    "options": [
      "French President Charles de Gaulle",
      "German Chancellor Adenauer",
      "The European Parliament",
      "The Benelux countries"
    ],
    "a": 0,
    "expl": "De Gaulle blocked UK entry twice; the UK joined only in 1973, after his departure."
  },
  {
    "id": "eu146",
    "topic": "Treaties & History",
    "q": "EFTA, founded in 1960, was…",
    "options": [
      "a looser free-trade alternative to the EEC, initiated by the United Kingdom",
      "the EEC's agricultural fund",
      "a defence alliance",
      "the forerunner of the euro"
    ],
    "a": 0,
    "expl": "Most EFTA founders later joined the EC/EU; today only Iceland, Liechtenstein, Norway and Switzerland remain in EFTA."
  },
  {
    "id": "eu147",
    "topic": "Treaties & History",
    "q": "Which countries joined the EU in 1995?",
    "options": [
      "Austria, Finland and Sweden",
      "Spain and Portugal",
      "Denmark, Ireland and the UK",
      "Czechia, Hungary and Poland"
    ],
    "a": 0,
    "expl": "The 'EFTA enlargement'. Norway signed an accession treaty but its voters said no — for the second time."
  },
  {
    "id": "eu148",
    "topic": "Treaties & History",
    "q": "In his 1946 Zurich speech, Winston Churchill famously called for…",
    "options": [
      "'a kind of United States of Europe'",
      "British membership of the EEC",
      "a European army under UK command",
      "the creation of the United Nations"
    ],
    "a": 0,
    "expl": "Churchill urged Franco-German partnership in a united Europe — though he saw Britain as a friend of, not a member of, that union."
  },
  {
    "id": "eu149",
    "topic": "Treaties & History",
    "q": "Jean Monnet is associated with…",
    "options": [
      "inspiring the Schuman Plan and becoming first President of the ECSC High Authority",
      "writing the Treaty of Lisbon",
      "founding NATO",
      "the first EP presidency"
    ],
    "a": 0,
    "expl": "Monnet's method — concrete achievements creating de facto solidarity — shaped the Community approach to integration."
  },
  {
    "id": "eu150",
    "topic": "Treaties & History",
    "q": "Altiero Spinelli is remembered for…",
    "options": [
      "the federalist Ventotene Manifesto and the 1984 draft Treaty on European Union",
      "creating the CAP",
      "the Werner Report",
      "negotiating Brexit"
    ],
    "a": 0,
    "expl": "Written in fascist confinement in 1941, the Ventotene Manifesto inspired European federalism; the EP's main Brussels building bears Spinelli's name."
  },
  {
    "id": "eu151",
    "topic": "Treaties & History",
    "q": "The 2001 Laeken Declaration launched…",
    "options": [
      "the Convention on the Future of Europe, chaired by Valéry Giscard d'Estaing",
      "the euro changeover",
      "the Eastern Partnership",
      "the Green Deal"
    ],
    "a": 0,
    "expl": "The Convention drafted the Constitutional Treaty; after its rejection in 2005, its substance resurfaced in the Lisbon Treaty."
  },
  {
    "id": "eu152",
    "topic": "Treaties & History",
    "q": "Which member state needed two referendums each to ratify the Treaties of Nice and Lisbon?",
    "options": [
      "Ireland",
      "Denmark",
      "France",
      "Poland"
    ],
    "a": 0,
    "expl": "Irish voters rejected Nice (2001) and Lisbon (2008) before approving them in second votes (2002, 2009) after obtaining guarantees."
  },
  {
    "id": "eu153",
    "topic": "Treaties & History",
    "q": "The European flag shows…",
    "options": [
      "twelve gold stars in a circle on a blue field — the number never changes with membership",
      "one star per member state",
      "fifteen stars for the founding treaty signatories",
      "a star for each official language"
    ],
    "a": 0,
    "expl": "Adopted by the Council of Europe in 1955 and by the Communities in 1985, twelve symbolises completeness — not the number of members."
  },
  {
    "id": "eu154",
    "topic": "Treaties & History",
    "q": "The European anthem is taken from…",
    "options": [
      "the 'Ode to Joy' from Beethoven's Ninth Symphony",
      "Mozart's Requiem",
      "the Marseillaise",
      "Verdi's Nabucco"
    ],
    "a": 0,
    "expl": "An instrumental arrangement — deliberately without words, in the language-neutral spirit of the EU."
  },
  {
    "id": "eu155",
    "topic": "Treaties & History",
    "q": "What is the EU's official motto?",
    "options": [
      "'United in diversity'",
      "'Ever closer union'",
      "'Peace and prosperity'",
      "'In varietate libertas'"
    ],
    "a": 0,
    "expl": "'United in diversity' (In varietate concordia) has been used since 2000. 'Ever closer union' is treaty language, not the motto."
  },
  {
    "id": "eu156",
    "topic": "Treaties & History",
    "q": "In 2012, the European Union was awarded…",
    "options": [
      "the Nobel Peace Prize",
      "the UN Human Rights Prize",
      "the Charlemagne Prize",
      "the Sakharov Prize"
    ],
    "a": 0,
    "expl": "For six decades of advancing peace, reconciliation, democracy and human rights in Europe. (The EU awards the Sakharov Prize itself.)"
  },
  {
    "id": "eu157",
    "topic": "Treaties & History",
    "q": "The European Monetary System, launched in 1979, introduced…",
    "options": [
      "the ECU and an exchange-rate mechanism linking European currencies",
      "euro banknotes",
      "the Maastricht criteria",
      "capital controls across the EEC"
    ],
    "a": 0,
    "expl": "The EMS stabilised exchange rates after the currency turbulence of the 1970s and paved the way for EMU."
  },
  {
    "id": "eu158",
    "topic": "Treaties & History",
    "q": "The 1970 Werner Report was the first blueprint for…",
    "options": [
      "economic and monetary union",
      "the single market",
      "enlargement to the East",
      "a European army"
    ],
    "a": 0,
    "expl": "Luxembourg PM Pierre Werner proposed EMU in stages by 1980; the plan was derailed by the 1970s crises and revived by the 1989 Delors Report."
  },
  {
    "id": "eu159",
    "topic": "Treaties & History",
    "q": "The 2012 Fiscal Compact (TSCG) is notable because it was…",
    "options": [
      "signed as an intergovernmental treaty outside the EU framework, after two states refused an EU treaty change",
      "the first treaty ratified by referendum everywhere",
      "an amendment to the Charter",
      "a NATO-EU agreement"
    ],
    "a": 0,
    "expl": "The UK and Czechia blocked a treaty amendment, so the balanced-budget rules were adopted intergovernmentally by the others."
  },
  {
    "id": "eu160",
    "topic": "Treaties & History",
    "q": "In a 2022 referendum, Denmark decided to…",
    "options": [
      "abolish its opt-out from EU defence cooperation",
      "adopt the euro",
      "leave the European Union",
      "join Schengen"
    ],
    "a": 0,
    "expl": "After Russia's invasion of Ukraine, 67% voted to scrap the 30-year-old defence opt-out; Denmark's euro opt-out remains."
  },
  {
    "id": "eu161",
    "topic": "Law & Decision-making",
    "q": "An action for annulment (Article 263 TFEU) allows the Court to…",
    "options": [
      "review the legality of EU acts and strike them down",
      "annul national laws",
      "dismiss Commissioners",
      "reverse national court judgments"
    ],
    "a": 0,
    "expl": "Member states and institutions are 'privileged applicants'; individuals must show direct and individual concern (the strict Plaumann test)."
  },
  {
    "id": "eu162",
    "topic": "Law & Decision-making",
    "q": "Enhanced cooperation allows a group of member states to integrate further; the minimum number required is…",
    "options": [
      "nine",
      "fifteen",
      "all but one",
      "five"
    ],
    "a": 0,
    "expl": "At least 9 states, as a last resort, open to others later — used for the EPPO, divorce law, patents and the financial transaction tax project."
  },
  {
    "id": "eu163",
    "topic": "Law & Decision-making",
    "q": "'Passerelle' clauses in the treaties allow…",
    "options": [
      "moving a policy area from unanimity to qualified majority voting without a full treaty revision",
      "fast-track enlargement",
      "citizens to bypass national courts",
      "the Commission to amend treaties"
    ],
    "a": 0,
    "expl": "The European Council must agree unanimously and no national parliament may object — which is why passerelles have hardly ever been used."
  },
  {
    "id": "eu164",
    "topic": "Law & Decision-making",
    "q": "What is the difference between delegated and implementing acts?",
    "options": [
      "Delegated acts (Art. 290) supplement or amend non-essential elements of a law; implementing acts (Art. 291) ensure uniform application",
      "Delegated acts are adopted by the Council, implementing acts by Parliament",
      "There is no difference",
      "Implementing acts can amend treaties"
    ],
    "a": 0,
    "expl": "Parliament and Council can revoke delegations or object to delegated acts; implementing acts are overseen by comitology committees of member-state experts."
  },
  {
    "id": "eu165",
    "topic": "Law & Decision-making",
    "q": "'Comitology' refers to…",
    "options": [
      "committees of member-state representatives that control the Commission's implementing acts",
      "the EP's committee system",
      "the study of EU committees in academia",
      "COREPER's working parties"
    ],
    "a": 0,
    "expl": "Through examination and advisory procedures, national experts vote on draft implementing measures before the Commission adopts them."
  },
  {
    "id": "eu166",
    "topic": "Law & Decision-making",
    "q": "How many titles does the Charter of Fundamental Rights contain, and what are they?",
    "options": [
      "Six: Dignity, Freedoms, Equality, Solidarity, Citizens' Rights and Justice",
      "Ten, one per policy area",
      "Three: civil, political and social rights",
      "Twelve, one per star on the flag"
    ],
    "a": 0,
    "expl": "Proclaimed in Nice in 2000, legally binding since Lisbon (2009), with the same legal value as the treaties."
  },
  {
    "id": "eu167",
    "topic": "Law & Decision-making",
    "q": "What happened to the EU's planned accession to the European Convention on Human Rights?",
    "options": [
      "It is required by Article 6 TEU but was blocked when the CJEU found the draft agreement incompatible with EU law (Opinion 2/13)",
      "It was completed in 2014",
      "Parliament rejected it",
      "The Council of Europe refused the EU"
    ],
    "a": 0,
    "expl": "Negotiations resumed later, but the EU is still not a party to the ECHR — although all 27 member states are individually."
  },
  {
    "id": "eu168",
    "topic": "Law & Decision-making",
    "q": "The 'acquis communautaire' (or 'Union acquis') means…",
    "options": [
      "the entire accumulated body of EU law and obligations that new members must accept",
      "the EU's real-estate holdings",
      "the case law of the CJEU only",
      "the founding treaties only"
    ],
    "a": 0,
    "expl": "Treaties, legislation, case law, international agreements — accession negotiations are organised around adopting the acquis, chapter by chapter."
  },
  {
    "id": "eu169",
    "topic": "Law & Decision-making",
    "q": "Parliament's consent (not amendment) is required for…",
    "options": [
      "accession treaties, most international agreements and the MFF",
      "all annual budgets",
      "delegated acts",
      "Council conclusions"
    ],
    "a": 0,
    "expl": "Under the consent procedure Parliament can only say yes or no — no amendments — but that veto is powerful (e.g. it rejected ACTA in 2012)."
  },
  {
    "id": "eu170",
    "topic": "Law & Decision-making",
    "q": "Under the consultation procedure, the Parliament's opinion is…",
    "options": [
      "mandatory to request but not binding on the Council",
      "binding on the Council",
      "not required at all",
      "replaced by national parliaments' opinions"
    ],
    "a": 0,
    "expl": "Consultation survives in areas like competition law and family law; ignoring the obligation to consult invalidates the act."
  },
  {
    "id": "eu171",
    "topic": "Law & Decision-making",
    "q": "Which acts are explicitly non-binding under Article 288 TFEU?",
    "options": [
      "Recommendations and opinions",
      "Directives",
      "Decisions",
      "Regulations"
    ],
    "a": 0,
    "expl": "Soft law can still have interpretive weight, but only regulations, directives and decisions bind."
  },
  {
    "id": "eu172",
    "topic": "Law & Decision-making",
    "q": "Since Lisbon gave the EU legal personality, the Union can…",
    "options": [
      "conclude international agreements and join international organisations in its own name",
      "tax citizens directly",
      "override the UN Charter",
      "abolish national constitutions"
    ],
    "a": 0,
    "expl": "Before 2009 only the European Community had personality; now the EU as such signs treaties (e.g. the Paris Agreement)."
  },
  {
    "id": "eu173",
    "topic": "Law & Decision-making",
    "q": "The Cassis de Dijon judgment (1979) established…",
    "options": [
      "mutual recognition: products lawfully sold in one member state may in principle be sold in all",
      "the primacy of EU law",
      "state liability",
      "the direct effect of directives"
    ],
    "a": 0,
    "expl": "A cornerstone of the single market: no need to harmonise everything if states recognise each other's standards (with limited public-interest exceptions)."
  },
  {
    "id": "eu174",
    "topic": "Law & Decision-making",
    "q": "The Francovich judgment (1991) established that…",
    "options": [
      "member states must compensate individuals for damage caused by failure to implement EU law",
      "footballers can move freely",
      "the EU budget must balance",
      "directives never have effects"
    ],
    "a": 0,
    "expl": "State liability gives directives teeth even when they lack direct effect — Italy had failed to implement a worker-protection directive."
  },
  {
    "id": "eu175",
    "topic": "Law & Decision-making",
    "q": "The Bosman ruling (1995) applied free movement of workers to…",
    "options": [
      "professional football, ending transfer fees for out-of-contract players and nationality quotas for EU players",
      "airline pilots only",
      "civil servants",
      "doctors' qualifications"
    ],
    "a": 0,
    "expl": "A landmark showing EU law's reach into sport and everyday life — clubs could no longer limit the number of EU-national players."
  },
  {
    "id": "eu176",
    "topic": "Law & Decision-making",
    "q": "For a treaty provision to have direct effect, it must be…",
    "options": [
      "clear, precise and unconditional",
      "approved by national parliaments",
      "confirmed by a regulation",
      "published in all languages first"
    ],
    "a": 0,
    "expl": "The Van Gend en Loos test. Directives can have only 'vertical' direct effect (against the state), never 'horizontal' (between private parties)."
  },
  {
    "id": "eu177",
    "topic": "Law & Decision-making",
    "q": "An unimplemented directive can be invoked by an individual…",
    "options": [
      "against the state (vertical direct effect) but not against another private party",
      "against anyone",
      "never",
      "only in criminal cases"
    ],
    "a": 0,
    "expl": "No horizontal direct effect of directives — though national law must be interpreted in conformity, and Francovich damages may be available."
  },
  {
    "id": "eu178",
    "topic": "Law & Decision-making",
    "q": "The subsidiarity 'orange card' means that…",
    "options": [
      "if a majority of national parliaments object, the Commission must review, and the co-legislators can kill the proposal at first reading",
      "the proposal is automatically withdrawn",
      "the CJEU suspends the act",
      "Parliament loses its right to amend"
    ],
    "a": 0,
    "expl": "Yellow card = one third of parliaments' votes forces a review; orange card = a majority triggers a special check by Parliament and Council. Neither has ever killed a proposal outright."
  },
  {
    "id": "eu179",
    "topic": "Law & Decision-making",
    "q": "All language versions of an EU regulation are…",
    "options": [
      "equally authentic — no single language version prevails",
      "subordinate to the English text",
      "subordinate to the French text",
      "merely informal translations"
    ],
    "a": 0,
    "expl": "With 24 equally authentic versions, the CJEU interprets provisions by comparing languages and looking at purpose and context."
  },
  {
    "id": "eu180",
    "topic": "Law & Decision-making",
    "q": "Which principle requires that EU action not go beyond what is necessary to achieve treaty objectives?",
    "options": [
      "Proportionality",
      "Subsidiarity",
      "Conferral",
      "Primacy"
    ],
    "a": 0,
    "expl": "Article 5 TEU bundles the three: conferral (may the EU act?), subsidiarity (should it act at EU level?), proportionality (how far may it go?)."
  },
  {
    "id": "eu181",
    "topic": "Policies",
    "q": "The Common Agricultural Policy is structured around two pillars:",
    "options": [
      "direct payments/market measures (EAGF) and rural development (EAFRD)",
      "crops and livestock",
      "northern and southern funds",
      "production quotas and export subsidies"
    ],
    "a": 0,
    "expl": "Pillar 1 (EAGF) funds income support and market measures; Pillar 2 (EAFRD) co-finances rural development programmes with member states."
  },
  {
    "id": "eu182",
    "topic": "Policies",
    "q": "REACH is the EU's flagship regulation on…",
    "options": [
      "the registration, evaluation and authorisation of chemicals",
      "renewable energy",
      "railway safety",
      "regional airports"
    ],
    "a": 0,
    "expl": "Administered by ECHA in Helsinki: no data, no market — companies must register substances and prove safe use."
  },
  {
    "id": "eu183",
    "topic": "Policies",
    "q": "The EU's binding renewable energy target for 2030 is…",
    "options": [
      "at least 42.5% of final energy consumption",
      "20%",
      "100%",
      "at least 75%"
    ],
    "a": 0,
    "expl": "RED III (2023) raised the target from 32% to 42.5%, with an aspiration of 45%, as part of Fit for 55 and REPowerEU."
  },
  {
    "id": "eu184",
    "topic": "Policies",
    "q": "The Farm to Fork strategy aims to…",
    "options": [
      "make the EU food system more sustainable, cutting pesticide use and promoting organic farming",
      "abolish the CAP",
      "ban meat consumption",
      "nationalise food distribution"
    ],
    "a": 0,
    "expl": "Part of the Green Deal: targets include reducing pesticide risk and expanding organic farmland."
  },
  {
    "id": "eu185",
    "topic": "Policies",
    "q": "The New Pact on Migration and Asylum, adopted in 2024, introduces…",
    "options": [
      "mandatory but flexible solidarity between member states and faster border procedures",
      "a total ban on asylum applications",
      "open borders with all neighbours",
      "abolition of Frontex"
    ],
    "a": 0,
    "expl": "States must contribute via relocations, financial support or capacity — the package applies from mid-2026."
  },
  {
    "id": "eu186",
    "topic": "Policies",
    "q": "The Schengen Information System (SIS) is…",
    "options": [
      "the largest EU database for security and border management alerts",
      "a weather satellite system",
      "an Erasmus placement portal",
      "a tax database"
    ],
    "a": 0,
    "expl": "SIS holds alerts on wanted or missing persons and objects; complemented by the biometric Entry/Exit System for non-EU travellers, which started in October 2025."
  },
  {
    "id": "eu187",
    "topic": "Policies",
    "q": "Since June 2017, EU rules on mobile roaming mean that…",
    "options": [
      "consumers pay domestic prices when using their phones in other EU/EEA countries ('roam like at home')",
      "roaming is capped at €1 per minute",
      "roaming is free worldwide",
      "only data is included, not calls"
    ],
    "a": 0,
    "expl": "One of the most tangible single-market benefits; the regime has been extended to 2032."
  },
  {
    "id": "eu188",
    "topic": "Policies",
    "q": "The European Health Insurance Card (EHIC) entitles you to…",
    "options": [
      "necessary state healthcare during a temporary stay in another EU/EEA country under that country's conditions",
      "free private healthcare anywhere in Europe",
      "reimbursement of any medical bill worldwide",
      "priority in national waiting lists"
    ],
    "a": 0,
    "expl": "The EHIC covers medically necessary treatment on the same terms as local residents — it is not travel insurance."
  },
  {
    "id": "eu189",
    "topic": "Policies",
    "q": "The European Pillar of Social Rights, proclaimed at Gothenburg in 2017, sets out…",
    "options": [
      "20 principles on equal opportunities, fair working conditions and social protection",
      "a binding EU social security system",
      "a single EU labour contract",
      "an EU-wide retirement age"
    ],
    "a": 0,
    "expl": "It guides social policy (targets: 78% employment, 60% of adults in annual training, 15 million fewer at risk of poverty by 2030)."
  },
  {
    "id": "eu190",
    "topic": "Policies",
    "q": "The 2022 directive on adequate minimum wages…",
    "options": [
      "sets a framework to promote adequate minimum wages but does NOT create a single EU minimum wage",
      "fixes an EU-wide minimum wage of €12/hour",
      "abolishes national minimum wages",
      "applies only to the euro area"
    ],
    "a": 0,
    "expl": "Wage-setting stays national (some states rely on collective bargaining); the directive promotes adequacy and bargaining coverage."
  },
  {
    "id": "eu191",
    "topic": "Policies",
    "q": "The Digital Markets Act (DMA) imposes obligations on…",
    "options": [
      "'gatekeepers' — the largest online platforms controlling access to digital markets",
      "all websites in the EU",
      "national telecom regulators",
      "only social media"
    ],
    "a": 0,
    "expl": "Designated gatekeepers (Alphabet, Amazon, Apple, Booking, ByteDance, Meta, Microsoft…) face do's and don'ts, with fines up to 10% of global turnover."
  },
  {
    "id": "eu192",
    "topic": "Policies",
    "q": "NIS2 is the EU's directive on…",
    "options": [
      "cybersecurity of network and information systems across critical sectors",
      "nitrogen emissions",
      "night-flight bans",
      "nuclear safety"
    ],
    "a": 0,
    "expl": "It widens the sectors covered (energy, transport, health, digital infrastructure…) and toughens incident-reporting duties."
  },
  {
    "id": "eu193",
    "topic": "Policies",
    "q": "The European Chips Act aims to…",
    "options": [
      "double the EU's share of global semiconductor production to 20% by 2030",
      "ban chip exports",
      "tax imported electronics",
      "nationalise chip factories"
    ],
    "a": 0,
    "expl": "A response to supply-chain vulnerabilities exposed by the pandemic and geopolitical tensions."
  },
  {
    "id": "eu194",
    "topic": "Policies",
    "q": "The Critical Raw Materials Act sets 2030 benchmarks so that the EU…",
    "options": [
      "extracts, processes and recycles more strategic raw materials and depends less on single suppliers",
      "stops all mining in Europe",
      "buys only from one trusted country",
      "bans battery production"
    ],
    "a": 0,
    "expl": "Benchmarks: 10% extraction, 40% processing, 25% recycling of annual consumption, and no more than 65% dependence on a single third country."
  },
  {
    "id": "eu195",
    "topic": "Policies",
    "q": "The Just Transition Fund supports…",
    "options": [
      "regions most affected by the move away from fossil fuels, such as coal-mining areas",
      "airline modernisation",
      "judicial reform",
      "tourism marketing"
    ],
    "a": 0,
    "expl": "Part of the Green Deal's promise to 'leave no one behind' — retraining workers and diversifying local economies."
  },
  {
    "id": "eu196",
    "topic": "Policies",
    "q": "Natura 2000 is…",
    "options": [
      "the EU-wide network of protected natural areas under the Birds and Habitats Directives",
      "a satellite programme",
      "an organic food label",
      "a car emissions standard"
    ],
    "a": 0,
    "expl": "Covering ~18% of EU land, it is the largest coordinated network of protected areas in the world."
  },
  {
    "id": "eu197",
    "topic": "Policies",
    "q": "The Nature Restoration Law (2024) requires member states to…",
    "options": [
      "put restoration measures in place on at least 20% of the EU's land and sea areas by 2030",
      "rewild all farmland",
      "ban forestry",
      "double urban areas"
    ],
    "a": 0,
    "expl": "The first EU-wide law on restoring degraded ecosystems — narrowly adopted after intense political debate."
  },
  {
    "id": "eu198",
    "topic": "Policies",
    "q": "EU rules on professional qualifications mean that…",
    "options": [
      "many qualifications must be recognised across borders, with automatic recognition for professions like doctors and architects",
      "every diploma is automatically valid everywhere for every job",
      "only EU-level diplomas count",
      "recognition is impossible without a new exam"
    ],
    "a": 0,
    "expl": "The Professional Qualifications Directive enables mobility; sectoral professions (doctors, nurses, midwives, vets, dentists, pharmacists, architects) enjoy automatic recognition."
  },
  {
    "id": "eu199",
    "topic": "Policies",
    "q": "The European Research Council (ERC) funds…",
    "options": [
      "frontier research chosen on scientific excellence alone, via individual grants",
      "only applied industrial research",
      "military research",
      "national universities' running costs"
    ],
    "a": 0,
    "expl": "Part of Horizon Europe; ERC grants are among the world's most prestigious for investigator-driven science."
  },
  {
    "id": "eu200",
    "topic": "Policies",
    "q": "The EU Civil Protection Mechanism (with rescEU) allows the Union to…",
    "options": [
      "coordinate and co-finance disaster response, including a shared reserve of firefighting planes and medical stockpiles",
      "command national armies",
      "replace national fire brigades",
      "act only outside Europe"
    ],
    "a": 0,
    "expl": "Any country in the world can request assistance; rescEU added an EU-level reserve after the 2017–2018 fire seasons."
  },
  {
    "id": "eu201",
    "topic": "Economy & Budget",
    "q": "Which of these member states does NOT use the euro?",
    "options": [
      "Poland",
      "Slovakia",
      "Slovenia",
      "Lithuania"
    ],
    "a": 0,
    "expl": "Non-euro members in 2026: Czechia, Denmark, Hungary, Poland, Romania and Sweden. Slovakia (2009), Slovenia (2007) and Lithuania (2015) all use the euro."
  },
  {
    "id": "eu202",
    "topic": "Economy & Budget",
    "q": "The ECB's main policy rates include…",
    "options": [
      "the deposit facility rate, the main refinancing rate and the marginal lending rate",
      "national mortgage rates",
      "the EURIBOR, set by the ECB directly",
      "corporate tax rates"
    ],
    "a": 0,
    "expl": "The deposit facility rate is currently the key rate steering money-market conditions."
  },
  {
    "id": "eu203",
    "topic": "Economy & Budget",
    "q": "The digital euro project is…",
    "options": [
      "an ECB project for a central bank digital currency that would complement, not replace, cash",
      "a cryptocurrency issued by the Commission",
      "a plan to abolish banknotes",
      "a private stablecoin"
    ],
    "a": 0,
    "expl": "The ECB moved to a preparation phase in 2023; any launch requires EU legislation. Cash would remain legal tender."
  },
  {
    "id": "eu204",
    "topic": "Economy & Budget",
    "q": "The Single Resolution Board (SRB) deals with…",
    "options": [
      "the orderly resolution of failing banks in the Banking Union",
      "consumer credit disputes",
      "insurance supervision",
      "stock exchange listings"
    ],
    "a": 0,
    "expl": "Second pillar of the Banking Union, backed by a bank-financed Single Resolution Fund — so taxpayers aren't first in line."
  },
  {
    "id": "eu205",
    "topic": "Economy & Budget",
    "q": "The still-missing third pillar of the Banking Union is…",
    "options": [
      "a common European deposit insurance scheme (EDIS)",
      "a single supervisor",
      "a resolution mechanism",
      "a banking code of conduct"
    ],
    "a": 0,
    "expl": "Supervision (SSM) and resolution (SRM) exist; common deposit insurance remains politically blocked."
  },
  {
    "id": "eu206",
    "topic": "Economy & Budget",
    "q": "The Capital Markets Union (Savings and Investments Union) agenda aims to…",
    "options": [
      "deepen and integrate EU capital markets so savings finance investment across borders",
      "merge all stock exchanges into one",
      "abolish bank lending",
      "introduce an EU wealth tax"
    ],
    "a": 0,
    "expl": "Europe's firms rely heavily on bank credit; CMU seeks more equity and cross-border investment — a top competitiveness priority."
  },
  {
    "id": "eu207",
    "topic": "Economy & Budget",
    "q": "Eurostat is…",
    "options": [
      "the statistical office of the European Union, based in Luxembourg",
      "the EU's space agency",
      "a stock market index",
      "the ECB's research arm"
    ],
    "a": 0,
    "expl": "Eurostat harmonises and publishes EU statistics — including the deficit and debt figures that feed fiscal surveillance."
  },
  {
    "id": "eu208",
    "topic": "Economy & Budget",
    "q": "An excessive deficit procedure can be opened when a member state's deficit exceeds…",
    "options": [
      "3% of GDP",
      "10% of GDP",
      "1% of GDP",
      "60% of GDP"
    ],
    "a": 0,
    "expl": "3% deficit and 60% debt are the reference values; the 2024 reform focuses enforcement on multi-year net expenditure paths."
  },
  {
    "id": "eu209",
    "topic": "Economy & Budget",
    "q": "The Macroeconomic Imbalance Procedure monitors…",
    "options": [
      "risks like housing bubbles, current-account imbalances and competitiveness losses via a scoreboard",
      "only inflation",
      "exchange rates of non-euro states",
      "bank profits"
    ],
    "a": 0,
    "expl": "Introduced after the euro crisis, it lets the Commission flag and correct imbalances before they become crises."
  },
  {
    "id": "eu210",
    "topic": "Economy & Budget",
    "q": "The 'plastics own resource' makes member states contribute…",
    "options": [
      "€0.80 per kilogram of non-recycled plastic packaging waste",
      "a tax paid by plastic producers to Brussels",
      "€8 per citizen",
      "1% of VAT receipts"
    ],
    "a": 0,
    "expl": "Introduced in 2021 — a national contribution calculated on non-recycled plastic packaging, nudging recycling efforts."
  },
  {
    "id": "eu211",
    "topic": "Economy & Budget",
    "q": "As a rule, the EU's annual budget…",
    "options": [
      "must balance — the Union cannot borrow to fund it (NextGenerationEU was a time-limited exception)",
      "runs structural deficits like national budgets",
      "is financed by an EU income tax",
      "is set by the ECB"
    ],
    "a": 0,
    "expl": "Revenue must cover expenditure; NGEU borrowing was authorised exceptionally, to be repaid by 2058."
  },
  {
    "id": "eu212",
    "topic": "Economy & Budget",
    "q": "Money borrowed for NextGenerationEU is due to be repaid by…",
    "options": [
      "2058",
      "2030",
      "2100",
      "it never has to be repaid"
    ],
    "a": 0,
    "expl": "Repayment starts within the current decade — a key driver of the debate on new own resources (ETS share, CBAM, corporate contributions)."
  },
  {
    "id": "eu213",
    "topic": "Economy & Budget",
    "q": "Recovery and Resilience Facility money is disbursed to member states…",
    "options": [
      "only when they meet agreed milestones and targets for reforms and investments",
      "automatically each quarter",
      "in proportion to population alone",
      "with no conditions"
    ],
    "a": 0,
    "expl": "Performance-based financing: payments follow verified delivery of national plan commitments — several states have had payments delayed."
  },
  {
    "id": "eu214",
    "topic": "Economy & Budget",
    "q": "In cohesion policy, 'less developed regions' are those with GDP per head below…",
    "options": [
      "75% of the EU average",
      "90% of the EU average",
      "50% of the national average",
      "the euro-area median"
    ],
    "a": 0,
    "expl": "They receive the highest co-financing rates; 'transition' regions sit between 75% and 100% of the EU average."
  },
  {
    "id": "eu215",
    "topic": "Economy & Budget",
    "q": "InvestEU is…",
    "options": [
      "an EU budget guarantee that crowds in private investment via the EIB and partners",
      "a sovereign wealth fund",
      "a stock-picking programme",
      "a savings account for citizens"
    ],
    "a": 0,
    "expl": "Successor to the 'Juncker Plan' (EFSI): a public guarantee absorbs part of the risk so private capital funds infrastructure, innovation and SMEs."
  },
  {
    "id": "eu216",
    "topic": "Economy & Budget",
    "q": "SURE, created during the pandemic, provided…",
    "options": [
      "up to €100 billion in EU loans to fund national short-time work schemes",
      "grants to airlines",
      "vaccine funding",
      "unemployment benefits paid directly by Brussels"
    ],
    "a": 0,
    "expl": "Back-to-back loans financed by EU 'social bonds' helped keep workers in jobs during lockdowns."
  },
  {
    "id": "eu217",
    "topic": "Economy & Budget",
    "q": "Convergence reports assessing non-euro members' readiness for the euro are prepared…",
    "options": [
      "at least every two years by the Commission and the ECB",
      "annually by the Eurogroup",
      "by the IMF",
      "by national central banks alone"
    ],
    "a": 0,
    "expl": "They assess the Maastricht criteria plus legal convergence (central bank independence)."
  },
  {
    "id": "eu218",
    "topic": "Economy & Budget",
    "q": "Denmark's currency arrangement with the euro is…",
    "options": [
      "membership of ERM II with a tight peg, alongside its formal euro opt-out",
      "free floating",
      "use of the euro without membership",
      "a peg to the dollar"
    ],
    "a": 0,
    "expl": "The krone has shadowed the euro within a narrow band since 1999 — ERM II membership without an obligation to join."
  },
  {
    "id": "eu219",
    "topic": "Economy & Budget",
    "q": "The designs on euro banknotes show…",
    "options": [
      "imaginary bridges, windows and gateways in European architectural styles — no real monuments or persons",
      "the founders of the EU",
      "real famous bridges of Europe",
      "each country's national heroes"
    ],
    "a": 0,
    "expl": "Deliberately fictional to favour no member state; a redesign process with new themes ('European culture'; 'Rivers and birds') is under way."
  },
  {
    "id": "eu220",
    "topic": "Economy & Budget",
    "q": "The EIB has been described as the 'EU climate bank' because…",
    "options": [
      "it ended financing of unabated fossil-fuel energy projects and directs over half of its lending to climate action and sustainability",
      "it only lends to solar companies",
      "it sets EU climate law",
      "it manages the ETS"
    ],
    "a": 0,
    "expl": "Its Climate Bank Roadmap ended fossil-fuel energy lending from 2021 and targets >50% of financing for green projects."
  },
  {
    "id": "eu221",
    "topic": "External & Enlargement",
    "q": "Accession negotiations are organised into…",
    "options": [
      "around 35 chapters of the acquis, grouped into six thematic clusters, with 'fundamentals' opened first and closed last",
      "a single package vote",
      "ten annual summits",
      "bilateral trade rounds"
    ],
    "a": 0,
    "expl": "The 'fundamentals first' methodology keeps rule of law, judiciary and public administration at the centre throughout the talks."
  },
  {
    "id": "eu222",
    "topic": "External & Enlargement",
    "q": "The EU–Ukraine Association Agreement includes…",
    "options": [
      "a Deep and Comprehensive Free Trade Area (DCFTA)",
      "a mutual defence treaty",
      "euro adoption for Ukraine",
      "Schengen membership"
    ],
    "a": 0,
    "expl": "Signed in 2014 after the Maidan events; DCFTAs also exist with Georgia and Moldova."
  },
  {
    "id": "eu223",
    "topic": "External & Enlargement",
    "q": "The Stabilisation and Association Process is the EU's framework for relations with…",
    "options": [
      "the Western Balkans",
      "North Africa",
      "Latin America",
      "Central Asia"
    ],
    "a": 0,
    "expl": "SAAs with Albania, Bosnia and Herzegovina, Kosovo, Montenegro, North Macedonia and Serbia prepare them for membership obligations."
  },
  {
    "id": "eu224",
    "topic": "External & Enlargement",
    "q": "The EU–South Korea agreement (2011) is often cited as…",
    "options": [
      "the EU's first 'new generation' free trade agreement, covering services and regulation, not just tariffs",
      "the EU's first agreement ever",
      "a defence pact",
      "a currency union"
    ],
    "a": 0,
    "expl": "It became the template for later deals with Canada (CETA), Japan, Singapore and Vietnam."
  },
  {
    "id": "eu225",
    "topic": "External & Enlargement",
    "q": "CETA, the agreement with Canada, has been…",
    "options": [
      "provisionally applied since 2017, pending ratification by all member states",
      "fully in force since 2015",
      "rejected by the European Parliament",
      "replaced by WTO rules"
    ],
    "a": 0,
    "expl": "Trade parts apply provisionally; investment-court provisions await national ratifications — a good example of a 'mixed' agreement."
  },
  {
    "id": "eu226",
    "topic": "External & Enlargement",
    "q": "In December 2024, the EU and Mercosur…",
    "options": [
      "concluded negotiations on a partnership agreement, which still requires approval and ratification",
      "launched a common currency",
      "created a customs union",
      "broke off relations"
    ],
    "a": 0,
    "expl": "After 25 years of talks, the political conclusion was announced in Montevideo; ratification remains politically contested in several member states."
  },
  {
    "id": "eu227",
    "topic": "External & Enlargement",
    "q": "The Generalised Scheme of Preferences (GSP) grants…",
    "options": [
      "reduced or zero tariffs to developing countries, with extra incentives tied to human-rights and governance conventions",
      "visa-free travel",
      "EU subsidies to foreign farmers",
      "automatic EU candidacy"
    ],
    "a": 0,
    "expl": "GSP+ conditions preferences on implementing 27 international conventions; 'Everything But Arms' covers least-developed countries."
  },
  {
    "id": "eu228",
    "topic": "External & Enlargement",
    "q": "At the World Trade Organization, the EU…",
    "options": [
      "is a member in its own right, alongside its member states, and speaks with one voice through the Commission",
      "has observer status only",
      "is represented by the largest member state",
      "does not participate"
    ],
    "a": 0,
    "expl": "Trade being an exclusive competence, the Commission negotiates for all 27 in Geneva."
  },
  {
    "id": "eu229",
    "topic": "External & Enlargement",
    "q": "The Strategic Compass, adopted in 2022, includes the goal of…",
    "options": [
      "an EU Rapid Deployment Capacity of up to 5,000 troops",
      "a single European army replacing national forces",
      "EU nuclear weapons",
      "leaving NATO"
    ],
    "a": 0,
    "expl": "The EU's first common threat assessment and defence action plan, agreed weeks after Russia's full-scale invasion of Ukraine."
  },
  {
    "id": "eu230",
    "topic": "External & Enlargement",
    "q": "The European Defence Fund is used to…",
    "options": [
      "co-finance collaborative defence research and capability development from the EU budget",
      "pay soldiers' salaries",
      "buy weapons for the Commission",
      "fund NATO's budget"
    ],
    "a": 0,
    "expl": "A first: defence industrial cooperation funded from the EU budget — complemented since 2025 by the SAFE loans instrument for joint procurement."
  },
  {
    "id": "eu231",
    "topic": "External & Enlargement",
    "q": "EU battlegroups are notable because they…",
    "options": [
      "have existed since 2007 but have never been deployed",
      "fought in several wars",
      "form a standing EU army",
      "are commanded by the Parliament"
    ],
    "a": 0,
    "expl": "Political, financial and consensus hurdles kept them in the barracks — a key argument for the new Rapid Deployment Capacity."
  },
  {
    "id": "eu232",
    "topic": "External & Enlargement",
    "q": "In March 2022, the EU activated for the first time…",
    "options": [
      "the Temporary Protection Directive, giving Ukrainians immediate residence and work rights",
      "Article 42(7)",
      "the Schengen emergency brake",
      "Article 7 TEU"
    ],
    "a": 0,
    "expl": "Adopted in 2001 after the Balkan wars but never used until Russia's invasion displaced millions."
  },
  {
    "id": "eu233",
    "topic": "External & Enlargement",
    "q": "Bosnia and Herzegovina was granted EU candidate status in…",
    "options": [
      "December 2022",
      "2003",
      "June 2024",
      "It is not a candidate"
    ],
    "a": 0,
    "expl": "Part of the enlargement momentum after Russia's invasion of Ukraine; opening of negotiations was endorsed in 2024, conditions permitting."
  },
  {
    "id": "eu234",
    "topic": "External & Enlargement",
    "q": "Kosovo's EU application is complicated by the fact that…",
    "options": [
      "five EU member states do not recognise its independence",
      "it has not applied",
      "it is already a member of the EEA",
      "the UN forbids its accession"
    ],
    "a": 0,
    "expl": "Spain, Slovakia, Cyprus, Romania and Greece do not recognise Kosovo; it applied for membership in December 2022 and remains a potential candidate."
  },
  {
    "id": "eu235",
    "topic": "External & Enlargement",
    "q": "Türkiye's accession process is best described as…",
    "options": [
      "a candidate since 1999 whose negotiations, opened in 2005, have been at a standstill since 2018",
      "close to completion",
      "never started",
      "vetoed by the European Parliament in 1990"
    ],
    "a": 0,
    "expl": "The Council concluded in 2018 that talks had 'effectively come to a standstill' over rule-of-law and rights concerns; cooperation continues on trade and migration."
  },
  {
    "id": "eu236",
    "topic": "External & Enlargement",
    "q": "The Growth Plan for the Western Balkans (2024) offers the region…",
    "options": [
      "gradual access to parts of the single market and funding, tied to reforms, before full membership",
      "immediate EU membership",
      "euro adoption",
      "visa-free work in the EU"
    ],
    "a": 0,
    "expl": "€6 billion in support conditioned on reform agendas — 'gradual integration' to make enlargement momentum tangible."
  },
  {
    "id": "eu237",
    "topic": "External & Enlargement",
    "q": "Who enforces EU sanctions on the ground (freezing assets, blocking exports)?",
    "options": [
      "National authorities of the member states, applying EU regulations",
      "The EEAS directly",
      "Europol",
      "The European Central Bank"
    ],
    "a": 0,
    "expl": "Sanctions are adopted at EU level but implemented and penalised nationally — which is why circumvention enforcement varies."
  },
  {
    "id": "eu238",
    "topic": "External & Enlargement",
    "q": "The EU's main instrument financing external action for 2021–2027 is…",
    "options": [
      "NDICI–Global Europe (about €79 billion)",
      "the Cohesion Fund",
      "Erasmus+",
      "the CAP"
    ],
    "a": 0,
    "expl": "It merged most external instruments — development, neighbourhood, human rights — into one; the EPF funds military support off-budget."
  },
  {
    "id": "eu239",
    "topic": "External & Enlargement",
    "q": "EU humanitarian aid follows the principles of…",
    "options": [
      "humanity, neutrality, impartiality and independence",
      "conditionality and reciprocity",
      "solidarity and subsidiarity",
      "profitability and visibility"
    ],
    "a": 0,
    "expl": "Enshrined in the humanitarian consensus: aid follows needs alone, separate from political objectives."
  },
  {
    "id": "eu240",
    "topic": "External & Enlargement",
    "q": "The Sakharov Prize, awarded annually by the European Parliament, honours…",
    "options": [
      "individuals or organisations defending human rights and freedom of thought",
      "the best European film",
      "scientific excellence",
      "young translators"
    ],
    "a": 0,
    "expl": "Named after Soviet dissident Andrei Sakharov; laureates include Nelson Mandela, Malala Yousafzai and the people of Ukraine (2022)."
  },
  {
    "id": "eu241",
    "topic": "Institutions",
    "q": "Members of the ECB's Executive Board are appointed for…",
    "options": [
      "a single eight-year, non-renewable term",
      "five years, renewable once",
      "life",
      "two-year terms"
    ],
    "a": 0,
    "expl": "The long non-renewable term protects independence — board members never need to please governments for reappointment."
  },
  {
    "id": "eu242",
    "topic": "Institutions",
    "q": "Which EU agency is located in Thessaloniki, Greece?",
    "options": [
      "Cedefop — the centre for the development of vocational training",
      "Europol",
      "EMA",
      "Frontex"
    ],
    "a": 0,
    "expl": "Cedefop has been in Thessaloniki since 1995; ENISA (cybersecurity) is also in Greece, in Athens/Heraklion."
  },
  {
    "id": "eu243",
    "topic": "Institutions",
    "q": "After Brexit, the European Banking Authority moved from London to…",
    "options": [
      "Paris",
      "Frankfurt",
      "Dublin",
      "Amsterdam"
    ],
    "a": 0,
    "expl": "The EBA joined ESMA in Paris (EIOPA is in Frankfurt); the EMA went to Amsterdam."
  },
  {
    "id": "eu244",
    "topic": "Institutions",
    "q": "The European Ombudsman is elected for…",
    "options": [
      "five years, at the start of each parliamentary term, renewable",
      "life",
      "one year",
      "ten years"
    ],
    "a": 0,
    "expl": "Elected by the Parliament; Teresa Anjinho was elected in December 2024, succeeding Emily O'Reilly."
  },
  {
    "id": "eu245",
    "topic": "Institutions",
    "q": "Decisions inside the College of Commissioners are formally taken…",
    "options": [
      "collegially — by consensus or, if needed, simple majority, with collective responsibility",
      "by the President alone",
      "by weighted votes based on population",
      "by unanimity only"
    ],
    "a": 0,
    "expl": "Collegiality means the whole Commission stands behind every decision, whichever Commissioner leads on it."
  },
  {
    "id": "eu246",
    "topic": "Institutions",
    "q": "Who is the current President of the European Investment Bank (since 2024)?",
    "options": [
      "Nadia Calviño",
      "Werner Hoyer",
      "Christine Lagarde",
      "Paschal Donohoe"
    ],
    "a": 0,
    "expl": "Former Spanish economy minister Nadia Calviño heads the EIB — the first woman in the role."
  },
  {
    "id": "eu247",
    "topic": "Institutions",
    "q": "The General Secretariat of the Council and the EP's translation service are examples of…",
    "options": [
      "permanent administrations serving the institutions regardless of presidency or term",
      "political bodies elected every five years",
      "agencies with legal personality",
      "national civil services on loan"
    ],
    "a": 0,
    "expl": "The institutions' permanent staff (recruited via EPSO) provide continuity while political leadership rotates."
  },
  {
    "id": "eu248",
    "topic": "Institutions",
    "q": "In which city does the European Parliament's Secretariat sit?",
    "options": [
      "Luxembourg",
      "Brussels",
      "Strasbourg",
      "Frankfurt"
    ],
    "a": 0,
    "expl": "The three-city arrangement: plenary seat Strasbourg, committees Brussels, Secretariat Luxembourg — fixed by treaty protocol, so changing it needs unanimity."
  },
  {
    "id": "eu249",
    "topic": "Institutions",
    "q": "The EU's intellectual property office (EUIPO), which registers EU trade marks, is based in…",
    "options": [
      "Alicante",
      "Munich",
      "Geneva",
      "The Hague"
    ],
    "a": 0,
    "expl": "EUIPO is in Alicante, Spain. (The European Patent Office in Munich is NOT an EU body.)"
  },
  {
    "id": "eu250",
    "topic": "Institutions",
    "q": "Advocates General at the Court of Justice…",
    "options": [
      "deliver independent, non-binding opinions to assist the Court before it rules",
      "represent the member states' governments",
      "prosecute EU-budget fraud",
      "cast the deciding vote in split cases"
    ],
    "a": 0,
    "expl": "The Court follows AG opinions in a majority of cases, but is never bound by them."
  },
  {
    "id": "eu251",
    "topic": "Treaties & History",
    "q": "The original Schengen Agreement of 1985 was signed…",
    "options": [
      "by five states, on a boat on the Moselle river at Schengen, Luxembourg",
      "by all ten EEC members in Brussels",
      "in Rome by the founding six",
      "at Maastricht"
    ],
    "a": 0,
    "expl": "France, Germany and the Benelux countries started it outside the Community framework; the acquis was folded into EU law at Amsterdam."
  },
  {
    "id": "eu252",
    "topic": "Treaties & History",
    "q": "The name 'euro' for the single currency was decided at which European Council?",
    "options": [
      "Madrid, 1995",
      "Maastricht, 1991",
      "Rome, 1990",
      "Copenhagen, 1993"
    ],
    "a": 0,
    "expl": "'Euro' replaced the basket-currency name 'ECU'; the Madrid summit also fixed the changeover scenario."
  },
  {
    "id": "eu253",
    "topic": "Treaties & History",
    "q": "The first High Representative for the CFSP, appointed under the Amsterdam Treaty, was…",
    "options": [
      "Javier Solana",
      "Catherine Ashton",
      "Chris Patten",
      "Josep Borrell"
    ],
    "a": 0,
    "expl": "Former NATO Secretary-General Solana held the post 1999–2009; Lisbon merged it with the Commission's external-relations role (Ashton first)."
  },
  {
    "id": "eu254",
    "topic": "Treaties & History",
    "q": "Turkey's formal relationship with the EEC began with…",
    "options": [
      "the Ankara Association Agreement of 1963",
      "candidate status in 1999",
      "the customs union of 1995",
      "NATO accession"
    ],
    "a": 0,
    "expl": "Ankara Agreement (1963) → customs union (1995) → candidate status (Helsinki, 1999) → negotiations (2005), now frozen."
  },
  {
    "id": "eu255",
    "topic": "Treaties & History",
    "q": "In a 1992 referendum, Switzerland rejected…",
    "options": [
      "membership of the European Economic Area",
      "the euro",
      "Schengen membership",
      "the UN"
    ],
    "a": 0,
    "expl": "The EEA 'no' froze Switzerland's EU application; relations run instead through bilateral agreements (Switzerland later JOINED Schengen by referendum)."
  },
  {
    "id": "eu256",
    "topic": "Treaties & History",
    "q": "The Charter of Fundamental Rights was first solemnly proclaimed at which European Council?",
    "options": [
      "Nice, December 2000",
      "Lisbon, 2007",
      "Cologne, 1999",
      "Laeken, 2001"
    ],
    "a": 0,
    "expl": "Drafted by the first 'Convention' method under Roman Herzog; it gained binding force only with Lisbon in 2009."
  },
  {
    "id": "eu257",
    "topic": "Treaties & History",
    "q": "Which two candidate countries were NOT ready to join in 2004 and acceded in 2007 instead?",
    "options": [
      "Bulgaria and Romania",
      "Croatia and Serbia",
      "Malta and Cyprus",
      "Slovakia and Slovenia"
    ],
    "a": 0,
    "expl": "They joined on 1 January 2007 with a Cooperation and Verification Mechanism monitoring judicial reform — only lifted years later."
  },
  {
    "id": "eu258",
    "topic": "Treaties & History",
    "q": "German reunification in 1990 affected the Community because…",
    "options": [
      "East Germany entered the Community automatically as part of the Federal Republic, without an accession treaty",
      "the GDR had to negotiate accession for five years",
      "it triggered the first use of Article 50",
      "it delayed the single market"
    ],
    "a": 0,
    "expl": "The former GDR territory simply became part of an existing member state — 'enlargement without accession'."
  },
  {
    "id": "eu259",
    "topic": "Treaties & History",
    "q": "Which treaty first gave the European Parliament real budgetary powers?",
    "options": [
      "The budgetary treaties of 1970 and 1975",
      "The Treaty of Rome",
      "The Single European Act",
      "Maastricht"
    ],
    "a": 0,
    "expl": "The 1970/1975 Luxembourg and Brussels treaties created own resources and gave Parliament the final word on parts of spending — its first serious power."
  },
  {
    "id": "eu260",
    "topic": "Treaties & History",
    "q": "The 'Luxembourg Compromise' of 1966 in practice meant that…",
    "options": [
      "any state could block a majority vote by invoking 'very important national interests'",
      "the Parliament gained co-decision",
      "the Commission was abolished",
      "French replaced all other languages"
    ],
    "a": 0,
    "expl": "It ended the empty-chair crisis but paralysed majority voting for two decades, until the Single European Act revived QMV."
  },
  {
    "id": "eu261",
    "topic": "Law & Decision-making",
    "q": "The European Arrest Warrant replaced extradition between member states with…",
    "options": [
      "a system of direct surrender between judicial authorities, based on mutual recognition",
      "a political decision by interior ministers",
      "trials at the CJEU",
      "Interpol red notices"
    ],
    "a": 0,
    "expl": "In force since 2004: strict deadlines and limited refusal grounds — mutual recognition applied to criminal justice."
  },
  {
    "id": "eu262",
    "topic": "Law & Decision-making",
    "q": "Which of these is a right attached to EU citizenship?",
    "options": [
      "Consular protection by any member state's embassy in a third country where yours is not represented",
      "A guaranteed EU pension",
      "Free housing anywhere in the EU",
      "Exemption from national taxes"
    ],
    "a": 0,
    "expl": "Citizenship rights: free movement, voting in EP/municipal elections where you reside, petitions, the ECI, the Ombudsman, and consular protection."
  },
  {
    "id": "eu263",
    "topic": "Law & Decision-making",
    "q": "Anyone residing in the EU may petition the European Parliament on…",
    "options": [
      "a matter within the EU's fields of activity that affects them directly",
      "any topic whatsoever, including private disputes",
      "only agricultural issues",
      "constitutional reform of their member state"
    ],
    "a": 0,
    "expl": "The Petitions Committee (PETI) examines them — a Treaty right distinct from the Citizens' Initiative."
  },
  {
    "id": "eu264",
    "topic": "Law & Decision-making",
    "q": "The internal working language of the Court of Justice is traditionally…",
    "options": [
      "French",
      "English",
      "German",
      "Latin"
    ],
    "a": 0,
    "expl": "Deliberations are in French; a case's 'language of procedure' can be any official language, and rulings are authentic in that language."
  },
  {
    "id": "eu265",
    "topic": "Law & Decision-making",
    "q": "Ordinary revision of the EU treaties requires…",
    "options": [
      "a Convention or IGC, agreement of all governments, and ratification by every member state",
      "a qualified majority of member states",
      "a European Parliament decision",
      "a pan-EU referendum"
    ],
    "a": 0,
    "expl": "Every member state must ratify treaty changes according to its own constitutional requirements — the highest unanimity hurdle in the system."
  },
  {
    "id": "eu266",
    "topic": "Law & Decision-making",
    "q": "If a member state ignores a CJEU judgment finding an infringement, the Court can…",
    "options": [
      "impose a lump sum and/or daily penalty payments on a second referral by the Commission",
      "imprison ministers",
      "suspend the state's EU membership",
      "nothing further"
    ],
    "a": 0,
    "expl": "Article 260 TFEU: France, Greece, Italy, Poland and others have paid multi-million-euro penalties this way."
  },
  {
    "id": "eu267",
    "topic": "Law & Decision-making",
    "q": "State aid granted by a member state to companies is…",
    "options": [
      "in principle prohibited if it distorts competition, unless approved by the Commission under exemptions",
      "always allowed",
      "a matter for national courts only",
      "banned without any exceptions"
    ],
    "a": 0,
    "expl": "Art. 107–108 TFEU: the Commission vets aid (rescue, regional, green, R&D…) and can order illegal aid to be repaid."
  },
  {
    "id": "eu268",
    "topic": "Law & Decision-making",
    "q": "Member states may restrict the four freedoms…",
    "options": [
      "only for legitimate public-interest reasons (public policy, security, health) and proportionately",
      "whenever their parliament votes to do so",
      "never, under any circumstances",
      "only with Commission permission in advance"
    ],
    "a": 0,
    "expl": "Treaty derogations plus court-made 'overriding reasons' — always subject to necessity and proportionality review."
  },
  {
    "id": "eu269",
    "topic": "Law & Decision-making",
    "q": "'Direct applicability' of a regulation means…",
    "options": [
      "it becomes part of national law automatically, with no transposition act needed",
      "it applies only to governments",
      "it must be confirmed by each parliament",
      "it binds only the institutions"
    ],
    "a": 0,
    "expl": "Distinct from 'direct effect' (invocability by individuals) — a regulation is both directly applicable and typically directly effective."
  },
  {
    "id": "eu270",
    "topic": "Law & Decision-making",
    "q": "The EU Ombudsman, the ECI and Parliament petitions have in common that they…",
    "options": [
      "are participation channels that do not require going to court",
      "produce binding judgments",
      "exist only for businesses",
      "were created by the Treaty of Rome"
    ],
    "a": 0,
    "expl": "They are complementary non-judicial avenues for citizens — none of them can annul an act; only the CJEU can."
  },
  {
    "id": "eu271",
    "topic": "Policies",
    "q": "The EU Digital Identity Wallet (under the revised eIDAS regulation) will allow citizens to…",
    "options": [
      "identify themselves and store documents like diplomas or driving licences across the EU, on a voluntary basis",
      "be tracked by the Commission",
      "replace national passports",
      "vote online in EP elections"
    ],
    "a": 0,
    "expl": "Member states must offer at least one wallet; using it remains voluntary for citizens."
  },
  {
    "id": "eu272",
    "topic": "Policies",
    "q": "The European Media Freedom Act aims to…",
    "options": [
      "protect media pluralism and editorial independence, including limits on spyware against journalists",
      "license all journalists at EU level",
      "create an EU public broadcaster",
      "abolish national media rules"
    ],
    "a": 0,
    "expl": "Adopted in 2024, it also brings transparency of media ownership and of state advertising."
  },
  {
    "id": "eu273",
    "topic": "Policies",
    "q": "The EU's binding 2040 climate target, adopted in March 2026, is…",
    "options": [
      "a 90% net reduction in greenhouse-gas emissions compared with 1990",
      "55%",
      "70%",
      "carbon neutrality by 2040"
    ],
    "a": 0,
    "expl": "The 90% milestone bridges Fit for 55 (2030) and climate neutrality (2050); the adopted text allows up to 5 percentage points to be met with international credits, i.e. an 85% domestic cut."
  },
  {
    "id": "eu274",
    "topic": "Policies",
    "q": "ETS2, starting in 2028, extends carbon pricing to…",
    "options": [
      "buildings and road transport fuels",
      "aviation",
      "power stations",
      "agriculture"
    ],
    "a": 0,
    "expl": "A separate allowance market for heating and transport fuels, paired with the Social Climate Fund to cushion vulnerable households; the start was postponed from 2027 to 1 January 2028."
  },
  {
    "id": "eu275",
    "topic": "Policies",
    "q": "TEN-T is the EU's policy for…",
    "options": [
      "a trans-European transport network of core corridors, with binding completion deadlines",
      "telecoms towers",
      "teacher exchanges",
      "tourism marketing"
    ],
    "a": 0,
    "expl": "Core network by 2030, extended core 2040, comprehensive 2050 — including rail links like Rail Baltica and the Brenner tunnel."
  },
  {
    "id": "eu276",
    "topic": "Policies",
    "q": "What does the CE marking on a product indicate?",
    "options": [
      "The manufacturer declares conformity with EU health, safety and environmental requirements",
      "The product was made in the EU",
      "The EU tested and certified the product itself",
      "The product is duty-free"
    ],
    "a": 0,
    "expl": "CE = 'conformité européenne', a self-declaration (sometimes with notified-body checks) — not a mark of EU origin."
  },
  {
    "id": "eu277",
    "topic": "Policies",
    "q": "PDO and PGI labels protect…",
    "options": [
      "geographical indications for foods like feta or Parma ham",
      "product safety",
      "organic production",
      "fair-trade imports"
    ],
    "a": 0,
    "expl": "Feta, champagne, Parmigiano Reggiano: names reserved for products from the region concerned — fiercely defended in trade agreements."
  },
  {
    "id": "eu278",
    "topic": "Policies",
    "q": "EU4Health, the health programme created after COVID-19, funds…",
    "options": [
      "crisis preparedness, cancer work and health-system strengthening — but healthcare delivery stays national",
      "hospital salaries across the EU",
      "a single EU health insurance",
      "free medicines for all"
    ],
    "a": 0,
    "expl": "The biggest EU health programme ever (~€5.3 bn), yet health care organisation remains a member-state competence."
  },
  {
    "id": "eu279",
    "topic": "Policies",
    "q": "The Single European Sky initiative targets…",
    "options": [
      "more efficient, less fragmented air traffic management across Europe",
      "one EU airline",
      "abolition of short-haul flights",
      "military airspace expansion"
    ],
    "a": 0,
    "expl": "Fragmented national air-traffic control causes detours and delays; reform has moved slowly for two decades."
  },
  {
    "id": "eu280",
    "topic": "Policies",
    "q": "The Cyber Resilience Act imposes security requirements on…",
    "options": [
      "products with digital elements — from smart devices to software — throughout their lifecycle",
      "only banks",
      "social networks' content",
      "government networks only"
    ],
    "a": 0,
    "expl": "Manufacturers must ship secure-by-design products and provide security updates — complementing NIS2's rules for operators."
  },
  {
    "id": "eu281",
    "topic": "Economy & Budget",
    "q": "MiCA is the EU regulation covering…",
    "options": [
      "markets in crypto-assets, including licensing of providers and rules for stablecoins",
      "microfinance",
      "mining machinery",
      "milk quotas"
    ],
    "a": 0,
    "expl": "The first comprehensive crypto framework in a major jurisdiction, applying fully since the end of 2024."
  },
  {
    "id": "eu282",
    "topic": "Economy & Budget",
    "q": "AMLA, the EU's new anti-money-laundering authority, is based in…",
    "options": [
      "Frankfurt",
      "Paris",
      "Vilnius",
      "Dublin"
    ],
    "a": 0,
    "expl": "AMLA will directly supervise the riskiest cross-border financial entities from 2028 — Frankfurt won the seat in 2024."
  },
  {
    "id": "eu283",
    "topic": "Economy & Budget",
    "q": "The Instant Payments Regulation requires euro-area banks to…",
    "options": [
      "offer euro credit transfers that arrive within ten seconds, at no extra cost compared with ordinary transfers",
      "abolish card fees",
      "process cheques faster",
      "cap mortgage rates"
    ],
    "a": 0,
    "expl": "Rolled out during 2025 — instant payments become the norm rather than a premium service."
  },
  {
    "id": "eu284",
    "topic": "Economy & Budget",
    "q": "The EU's 'Pillar Two' directive implements…",
    "options": [
      "a 15% global minimum effective corporate tax rate for large multinationals",
      "a common EU income tax",
      "a digital services tax",
      "a financial transaction tax"
    ],
    "a": 0,
    "expl": "Translating the OECD global deal into binding EU law from 2024 — adopted, like all tax files, by unanimity."
  },
  {
    "id": "eu285",
    "topic": "Economy & Budget",
    "q": "Which two policy areas together consume roughly two thirds of the EU budget?",
    "options": [
      "Agriculture and cohesion",
      "Defence and research",
      "Administration and diplomacy",
      "Health and education"
    ],
    "a": 0,
    "expl": "CAP and cohesion have long dominated spending, though their combined share is slowly declining in favour of research, digital and defence."
  },
  {
    "id": "eu286",
    "topic": "Economy & Budget",
    "q": "The own-resources ceiling limits total EU revenue to about…",
    "options": [
      "1.4% of EU GNI (temporarily raised by 0.6 points to cover NGEU borrowing)",
      "10% of GNI",
      "5% of GNI",
      "0.1% of GNI"
    ],
    "a": 0,
    "expl": "A hard ceiling set in the Own Resources Decision, ratified by every member state — the EU cannot simply raise its own revenue."
  },
  {
    "id": "eu287",
    "topic": "Economy & Budget",
    "q": "Parliament's 'discharge' decision is…",
    "options": [
      "its annual verdict approving (or not) how the Commission implemented the budget",
      "the dismissal of a Commissioner",
      "the closing of the annual session",
      "a type of EU loan"
    ],
    "a": 0,
    "expl": "Based on the Court of Auditors' report; Parliament has delayed or refused discharge to exert pressure (it refused the 1996 discharge, contributing to the Santer Commission's fall)."
  },
  {
    "id": "eu288",
    "topic": "Economy & Budget",
    "q": "The euro sign (€) was inspired by…",
    "options": [
      "the Greek letter epsilon, referring to the cradle of European civilisation, with two parallel lines for stability",
      "the dollar sign",
      "the letter C for 'currency'",
      "a Roman coin"
    ],
    "a": 0,
    "expl": "Official Commission symbolism — a classic EPSO trivia item."
  },
  {
    "id": "eu289",
    "topic": "Economy & Budget",
    "q": "Under the reformed Stability and Growth Pact (2024), fiscal surveillance centres on…",
    "options": [
      "multi-year net expenditure paths agreed per country, with 4-year plans extendable to 7 for reformers",
      "a single deficit rule with automatic fines",
      "monthly budget approvals by Brussels",
      "abolition of the 3% reference value"
    ],
    "a": 0,
    "expl": "The 3%/60% values survive, but enforcement now runs through country-specific expenditure trajectories."
  },
  {
    "id": "eu290",
    "topic": "Economy & Budget",
    "q": "Which country experienced the euro area's largest sovereign bailout programmes (2010–2018)?",
    "options": [
      "Greece",
      "Ireland",
      "Portugal",
      "Cyprus"
    ],
    "a": 0,
    "expl": "Three programmes totalling ~€289 billion from euro-area partners and the IMF; Greece exited the final programme in August 2018."
  },
  {
    "id": "eu291",
    "topic": "External & Enlargement",
    "q": "The EU Global Human Rights Sanctions Regime (2020) allows the EU to…",
    "options": [
      "sanction individuals responsible for serious human-rights violations anywhere in the world",
      "impose trade tariffs on any country",
      "expel diplomats automatically",
      "fund opposition parties abroad"
    ],
    "a": 0,
    "expl": "The EU's 'Magnitsky-style' regime: asset freezes and travel bans on listed individuals and entities."
  },
  {
    "id": "eu292",
    "topic": "External & Enlargement",
    "q": "The Anti-Coercion Instrument (2023) lets the EU respond when…",
    "options": [
      "a third country uses trade or investment restrictions to pressure the EU or a member state politically",
      "a member state breaks fiscal rules",
      "companies dodge taxes",
      "tourists overstay visas"
    ],
    "a": 0,
    "expl": "Designed after episodes like China's restrictions on Lithuania; countermeasures can include tariffs and procurement exclusions."
  },
  {
    "id": "eu293",
    "topic": "External & Enlargement",
    "q": "Anti-dumping and anti-subsidy duties on unfair imports are imposed by…",
    "options": [
      "the Commission, after an investigation, under EU trade defence rules",
      "each member state's customs",
      "the WTO directly",
      "the European Parliament"
    ],
    "a": 0,
    "expl": "Trade defence is part of the common commercial policy — e.g. duties on Chinese electric vehicles imposed in 2024."
  },
  {
    "id": "eu294",
    "topic": "External & Enlargement",
    "q": "In the G20, the European Union is…",
    "options": [
      "a full member in its own right, alongside three individual EU member states (Spain attends as a permanent guest)",
      "an observer only",
      "not represented",
      "represented by the largest member state"
    ],
    "a": 0,
    "expl": "The EU (represented by the Commission and European Council presidents) is a full G20 member; Germany, France, Italy and Spain (permanent guest) also attend."
  },
  {
    "id": "eu295",
    "topic": "External & Enlargement",
    "q": "EU Election Observation Missions are deployed…",
    "options": [
      "at the invitation of the host country, to assess elections against international standards",
      "to organise elections abroad",
      "only in candidate countries",
      "secretly"
    ],
    "a": 0,
    "expl": "Led by an MEP as chief observer, EOMs issue public reports and recommendations — a visible arm of EU democracy support."
  },
  {
    "id": "eu296",
    "topic": "External & Enlargement",
    "q": "Citizens of which group of countries enjoy visa-free travel to the Schengen area?",
    "options": [
      "Western Balkan countries (among ~60 states on the EU's visa-free list)",
      "all African Union states",
      "only EEA countries",
      "no third countries at all"
    ],
    "a": 0,
    "expl": "Visa liberalisation has been one of the EU's strongest incentives in the neighbourhood — granted to the Western Balkans between 2009 and 2010, Ukraine and Georgia in 2017."
  },
  {
    "id": "eu297",
    "topic": "External & Enlargement",
    "q": "EU–NATO cooperation is framed by…",
    "options": [
      "joint declarations (2016, 2018, 2023) covering hybrid threats, cyber and military mobility",
      "a merger treaty",
      "NATO membership of the EU itself",
      "a mutual veto arrangement"
    ],
    "a": 0,
    "expl": "23 of 27 EU states are NATO members (Finland and Sweden joined in 2023/24); the organisations coordinate but remain distinct."
  },
  {
    "id": "eu298",
    "topic": "External & Enlargement",
    "q": "'Team Europe' refers to…",
    "options": [
      "the combined external action of the EU institutions, member states and development banks",
      "the EU Olympic team",
      "the Commission's football club",
      "EU battlegroups"
    ],
    "a": 0,
    "expl": "Coined during COVID-19 to present EU + member state aid as one package — now standard branding for Global Gateway projects."
  },
  {
    "id": "eu299",
    "topic": "External & Enlargement",
    "q": "EU delegations in third countries have, since Lisbon,…",
    "options": [
      "full diplomatic status, representing the whole Union and coordinating member state embassies",
      "no legal status",
      "only trade functions",
      "replaced national embassies"
    ],
    "a": 0,
    "expl": "They upgraded from 'Commission delegations' to EU embassies in all but name, under EEAS authority."
  },
  {
    "id": "eu300",
    "topic": "External & Enlargement",
    "q": "The EU's humanitarian and civil protection response is coordinated 24/7 by…",
    "options": [
      "the Emergency Response Coordination Centre (ERCC) in Brussels",
      "NATO headquarters",
      "the UN Security Council",
      "Europol"
    ],
    "a": 0,
    "expl": "The ERCC matches requests for help (fires, floods, earthquakes — inside or outside the EU) with offers from participating states and rescEU assets."
  }
];
