/* EUFTE / written-communication practice prompts. */
"use strict";

const WRITING_PROMPTS = [
  {
    "id": "wr001",
    "type": "Policy note",
    "topic": "Enlargement",
    "minutes": 45,
    "words": "400-500",
    "prompt": "You are an assistant in the Commission department responsible for enlargement. Candidate countries in the Western Balkans complain that accession negotiations have stalled for years, while several member states insist the EU cannot absorb new members without first reforming its own decision-making. Write a policy note to your Head of Unit setting out the problem, presenting two or three realistic options for keeping the accession process credible (for example gradual integration into single-market areas before full membership, stricter but faster benchmarking, or an internal reform package first), and recommending one option with reasons.",
    "points": [
      "States the problem crisply: credibility gap between promises made to candidates and the slow pace of actual accession",
      "Sets out at least two distinct, genuinely different options rather than variations of the same idea",
      "Weighs each option against clear criteria such as feasibility, member state acceptability, incentive effect on candidates and institutional cost",
      "Makes one explicit recommendation and justifies it, rather than leaving the choice open",
      "Notes the link between enlargement and internal reform (unanimity, budget, institutional capacity)",
      "Uses a note structure with headings, short paragraphs and an action point for the reader"
    ],
    "pitfalls": [
      "Writing a history of enlargement instead of a decision-oriented note",
      "Listing options without comparing them or without recommending one",
      "Assuming detailed knowledge of individual country chapters the reader may not share"
    ]
  },
  {
    "id": "wr002",
    "type": "Essay",
    "topic": "Enlargement",
    "minutes": 40,
    "words": "400-500",
    "prompt": "Some argue that the European Union should admit new members only after it has reformed its own decision-making rules, because a Union of more than thirty states cannot function with unanimity in key areas. Others argue that delaying enlargement for internal reform damages EU credibility and pushes candidate countries towards other partners. Write a structured argumentative essay taking a clear position on whether enlargement should be conditional on prior internal reform of the EU.",
    "points": [
      "Opens with a clear thesis stating the position taken",
      "Presents the strongest argument for prior internal reform: decision-making paralysis, budget strain, absorption capacity",
      "Presents the strongest counter-argument fairly: geopolitical cost of delay, loss of leverage over reforms in candidate countries",
      "Rebuts the counter-argument rather than ignoring it, or proposes a synthesis such as parallel tracks",
      "Uses concrete EU reference points (unanimity in foreign policy, cohesion and agricultural spending, staged accession ideas)",
      "Closes with a conclusion that follows from the argument, not a new idea"
    ],
    "pitfalls": [
      "Sitting on the fence and never committing to a position",
      "Presenting only one side and treating the opposing view as obviously wrong",
      "Padding with generic praise of European values instead of argument"
    ]
  },
  {
    "id": "wr003",
    "type": "Summary",
    "topic": "Enlargement",
    "minutes": 35,
    "words": "300-350",
    "prompt": "At a recent policy conference on enlargement four positions were expressed. A candidate-country government said accession must remain merit-based but that the EU should offer earlier access to the single market and EU programmes. A large member state said no new members should join before qualified majority voting replaces unanimity in foreign policy. A small member state warned that gradual integration would create second-class members and weaken the incentive to reform. A think tank proposed reversible integration in stages, with benefits withdrawn if reforms backslide. Write a neutral summary of these four positions for a colleague who could not attend.",
    "points": [
      "Covers all four positions with roughly balanced space",
      "Keeps a neutral register: reports what was said rather than endorsing any speaker",
      "Identifies the main line of disagreement (speed and sequencing of integration versus institutional readiness)",
      "Notes where positions overlap, for example shared insistence on conditionality and reform",
      "Organises by theme or by speaker consistently, with clear signposting",
      "Stays within the word limit by cutting detail rather than compressing every sentence"
    ],
    "pitfalls": [
      "Slipping into evaluation or recommending one position",
      "Reproducing the material almost verbatim instead of condensing it",
      "Omitting one position or giving it a single dismissive line"
    ]
  },
  {
    "id": "wr004",
    "type": "Letter reply",
    "topic": "Enlargement",
    "minutes": 35,
    "words": "300-400",
    "prompt": "A citizen has written to the Commission arguing that enlargement will lower wages in her country, overload public services and dilute the EU budget available to existing members, and asking why the EU is pursuing it at all. Write a reply on behalf of your unit that is polite and non-defensive, explains the rationale for enlargement and the safeguards in the process, and addresses her specific concerns honestly without promising outcomes the Commission cannot guarantee.",
    "points": [
      "Acknowledges the concerns explicitly and without condescension before explaining",
      "Explains the merit-based, conditional nature of accession and the long transition periods that can apply",
      "Addresses each of the three concerns raised: labour market effects, public services, budget",
      "Is honest about trade-offs and uncertainty rather than claiming there are no costs",
      "Uses plain language accessible to a non-specialist, avoiding institutional jargon and acronyms",
      "Closes with a courteous ending and, where appropriate, a pointer to further information"
    ],
    "pitfalls": [
      "Answering with institutional boilerplate that never touches her actual questions",
      "Overpromising, for example guaranteeing that wages or services will not be affected",
      "Adopting a lecturing tone that implies the citizen is misinformed"
    ]
  },
  {
    "id": "wr005",
    "type": "Policy note",
    "topic": "EU budget",
    "minutes": 45,
    "words": "400-500",
    "prompt": "Preparations for the next multiannual financial framework have exposed a gap: member states want spending on defence, competitiveness and enlargement, but refuse to increase national contributions, while traditional cohesion and agricultural spending is politically protected. Write a policy note to a Director setting out the funding gap, presenting options for closing it (reallocating within existing headings, introducing new own resources, or greater use of loan-based instruments), and recommending an approach with a short justification of the political feasibility of each.",
    "points": [
      "Frames the arithmetic problem clearly: new priorities plus protected spending equals a gap",
      "Presents distinct options rather than one option with variants",
      "Assesses each against feasibility, speed, and legal or treaty constraints (unanimity for own resources, debt limits)",
      "Recommends one option and states what the reader is being asked to decide or do next",
      "Recognises the political economy: net contributors, net beneficiaries, farm and regional lobbies",
      "Uses a compact structure with headings and no more than a page of prose"
    ],
    "pitfalls": [
      "Producing a wish list of desirable spending with no funding source",
      "Ignoring the unanimity requirement and ratification hurdle for new own resources",
      "Burying the recommendation in the final line instead of signalling it early"
    ]
  },
  {
    "id": "wr006",
    "type": "Essay",
    "topic": "EU budget",
    "minutes": 40,
    "words": "400-500",
    "prompt": "The EU budget is small relative to national budgets but is repeatedly asked to fund new priorities such as defence, industrial policy and joint borrowing repayment. Some argue the EU should acquire genuine own resources so that it stops depending on national contributions and annual haggling. Others argue that taxing power belongs to member states and that new own resources would weaken democratic accountability. Write an argumentative essay taking a position on whether the EU should be given significantly stronger own resources.",
    "points": [
      "States a clear thesis in the opening paragraph",
      "Argues the case for own resources: predictability, reduced juste retour bargaining, capacity to repay joint borrowing",
      "Argues the case against fairly: national tax sovereignty, accountability, distributive effects across member states",
      "Engages with the accountability question rather than treating it as a technicality",
      "Refers to concrete mechanisms (contributions based on gross national income, customs duties, proposals for emissions or corporate-base resources)",
      "Concludes with a position that follows logically from the arguments made"
    ],
    "pitfalls": [
      "Confusing the EU budget with national budgets or asserting the EU can simply run deficits",
      "Listing arguments in a shapeless sequence with no ranking of importance",
      "Ending with a vague call for more Europe instead of a reasoned conclusion"
    ]
  },
  {
    "id": "wr007",
    "type": "Summary",
    "topic": "EU budget",
    "minutes": 30,
    "words": "250-350",
    "prompt": "During a budget negotiation four delegations set out their positions. Delegation A, a net contributor, refused any increase in the overall ceiling and demanded stricter performance conditions on spending. Delegation B, a cohesion beneficiary, insisted that regional funding envelopes be protected in real terms. Delegation C proposed a new own resource so that new priorities are not funded by cuts elsewhere. Delegation D argued for a flexible crisis reserve that could be mobilised without reopening the whole framework. Write a neutral summary of the four positions for the chair of the negotiation.",
    "points": [
      "Reports each of the four positions accurately and with similar weight",
      "Maintains strict neutrality suitable for a chair who must broker a compromise",
      "Identifies the underlying axes of disagreement: size of the budget, rigidity versus flexibility, source of funds",
      "Highlights any potential landing zones or overlaps without recommending them as the writer's own view",
      "Uses a clear structure, for example one short paragraph per delegation plus a common-ground line",
      "Keeps sentences short and factual"
    ],
    "pitfalls": [
      "Editorialising about which delegation is being unreasonable",
      "Merging positions together so the chair cannot see who wants what",
      "Exceeding the word limit by restating each argument twice"
    ]
  },
  {
    "id": "wr008",
    "type": "Letter reply",
    "topic": "Cohesion policy",
    "minutes": 35,
    "words": "300-400",
    "prompt": "The mayor of a small region has written complaining that EU cohesion funding rules are so complex that his administration cannot absorb the money allocated to it, and that consultants capture much of the value. He asks for a simplified regime and for direct payment to municipalities. Write a reply that takes his complaint seriously, explains why controls exist, describes what simplification is realistically possible, and manages expectations about direct payment to municipalities.",
    "points": [
      "Opens by acknowledging the specific problem of absorption capacity in small administrations",
      "Explains the purpose of the control framework in plain terms: shared management, audit, protection of taxpayers' money",
      "Sets out realistic simplification avenues such as simplified cost options, lump sums and technical assistance",
      "Explains clearly why funds are channelled through national or regional managing authorities",
      "Offers a concrete next step, such as contacting the managing authority or existing capacity-building support",
      "Keeps a respectful tone appropriate for correspondence with an elected official"
    ],
    "pitfalls": [
      "Defending the rules without conceding any of the mayor's valid points",
      "Using unexplained jargon such as managing authority, n+2 or ex-ante conditionality",
      "Implying a change to the legal framework that the writer has no authority to promise"
    ]
  },
  {
    "id": "wr009",
    "type": "Policy note",
    "topic": "Competitiveness and green transition",
    "minutes": 45,
    "words": "400-500",
    "prompt": "European energy-intensive industry argues that high energy prices and climate compliance costs are pushing production abroad, while climate targets for the next decade remain legally binding. Write a policy note to a Commissioner setting out the tension between industrial competitiveness and the decarbonisation timetable, presenting options such as targeted energy price relief, faster permitting for clean industrial projects, or tighter carbon border measures, and recommending one with an assessment of the risks.",
    "points": [
      "Defines the tension precisely rather than restating that both goals matter",
      "Presents at least two credible and distinct options with their costs and beneficiaries",
      "Assesses risks such as state aid distortion, single-market fragmentation, trade retaliation and target slippage",
      "Makes a clear recommendation addressed to the Commissioner's decision",
      "Distinguishes short-term relief from structural fixes such as grids, permitting and skills",
      "Uses a note format with an opening summary line stating the ask"
    ],
    "pitfalls": [
      "Treating competitiveness and climate goals as simply compatible with no trade-off",
      "Recommending subsidies without addressing budget or state aid constraints",
      "Writing a general essay on the green transition rather than an actionable note"
    ]
  },
  {
    "id": "wr010",
    "type": "Essay",
    "topic": "Competitiveness and green transition",
    "minutes": 40,
    "words": "400-500",
    "prompt": "It is often claimed that Europe must choose between ambitious climate policy and industrial competitiveness, since other major economies subsidise heavily and regulate less. Others argue that early decarbonisation creates lead markets and long-term advantage, and that retreating from climate targets would strand investment already made. Write an argumentative essay taking a clear position on whether the EU should soften its climate timetable to protect industrial competitiveness.",
    "points": [
      "Takes an explicit position early and sustains it",
      "Presents the competitiveness case seriously: energy costs, carbon leakage, foreign subsidy competition",
      "Presents the case for maintaining the timetable: investment certainty, lead markets, avoided adaptation costs",
      "Distinguishes softening targets from changing instruments, which is often the more defensible middle ground",
      "Uses concrete EU policy anchors such as emissions trading, the carbon border adjustment mechanism, state aid rules and permitting reform",
      "Concludes with a defensible position rather than a restatement of both sides"
    ],
    "pitfalls": [
      "Reducing the question to a slogan about growth versus the planet",
      "Ignoring the distributional effects on regions and workers",
      "Making empirical claims about costs with invented precision"
    ]
  },
  {
    "id": "wr011",
    "type": "Summary",
    "topic": "Industrial policy",
    "minutes": 35,
    "words": "300-350",
    "prompt": "At a stakeholder hearing on clean industrial policy, four views were put forward. An industry federation asked for lower energy taxes and faster permits. An environmental organisation warned that relief for heavy industry without binding decarbonisation milestones would reward delay. A small member state warned that relaxed state aid rules favour countries with deep pockets and fragment the single market. A trade union asked for conditionality linking public support to job retention and training. Write a neutral summary of these positions for an internal briefing.",
    "points": [
      "Represents all four views accurately and proportionately",
      "Preserves the distinct logic of each actor rather than flattening them into pro and anti positions",
      "Identifies the shared premise: public support of some kind is expected",
      "Highlights the main conflicts, notably conditionality and the single-market fiscal capacity gap",
      "Uses neutral reporting verbs and avoids loaded adjectives",
      "Provides a short opening line explaining what the hearing was about"
    ],
    "pitfalls": [
      "Adding the writer's own assessment of which argument is strongest",
      "Copying phrasing from the material instead of condensing it in the writer's own words",
      "Losing the union and small-member-state views by focusing on the industry versus environment clash"
    ]
  },
  {
    "id": "wr012",
    "type": "Letter reply",
    "topic": "Trade and carbon border measures",
    "minutes": 35,
    "words": "300-400",
    "prompt": "A small manufacturer that imports steel components has written saying the carbon border adjustment mechanism creates paperwork it cannot handle, that its non-EU suppliers refuse to provide emissions data, and that the rules will make it uncompetitive against imports of finished goods. Write a reply explaining the purpose of the mechanism, addressing the reporting difficulty and the finished-goods concern honestly, and pointing to practical support available.",
    "points": [
      "Explains in plain language why the mechanism exists: preventing carbon leakage and equalising the carbon cost of imports",
      "Addresses the supplier-data problem directly, including default values and simplified reporting where relevant",
      "Acknowledges the finished-goods issue as a genuine and recognised design question rather than denying it",
      "Points to concrete practical help such as guidance, helpdesks and the national competent authority",
      "Keeps the tone supportive towards a small business without promising exemptions",
      "Uses short sentences and avoids acronyms without first explaining them"
    ],
    "pitfalls": [
      "Dismissing the competitiveness concern as unfounded",
      "Drowning the reader in regulatory references instead of practical steps",
      "Promising an exemption or a legislative change the writer cannot commit to"
    ]
  },
  {
    "id": "wr013",
    "type": "Policy note",
    "topic": "Subsidiarity",
    "minutes": 40,
    "words": "350-450",
    "prompt": "Several national parliaments have objected that a proposed EU initiative on housing affordability goes beyond what the Union should regulate, since housing is a national and local competence. Your unit still believes there is an EU dimension through investment, state aid and construction rules. Write a policy note to your Head of Unit analysing the subsidiarity objection, presenting options for how to proceed, and recommending one.",
    "points": [
      "States the subsidiarity objection fairly before answering it",
      "Identifies where a genuine EU dimension exists: cross-border investment, state aid, funding, single-market rules for construction",
      "Presents options such as withdrawing, narrowing the scope to funding and enabling measures, or proceeding with a stronger justification",
      "Assesses the institutional and political costs of each option, including relations with national parliaments",
      "Recommends one course of action clearly and states the next step",
      "Distinguishes subsidiarity from proportionality and applies both correctly"
    ],
    "pitfalls": [
      "Treating subsidiarity as a purely procedural box-ticking exercise",
      "Confusing questions of competence with questions of political desirability",
      "Failing to say what the Head of Unit should actually decide"
    ]
  },
  {
    "id": "wr014",
    "type": "Essay",
    "topic": "Subsidiarity",
    "minutes": 40,
    "words": "400-500",
    "prompt": "Critics argue that the EU legislates in too many areas of daily life and that subsidiarity has become a formality rather than a genuine constraint. Defenders reply that most EU action responds to cross-border problems that member states cannot solve alone, and that national governments themselves agree to these rules in the Council. Write an argumentative essay taking a position on whether subsidiarity works as an effective limit on EU action.",
    "points": [
      "Defines subsidiarity accurately and distinguishes it from proportionality",
      "Takes a clear position and supports it with reasoning rather than assertion",
      "Discusses the mechanisms that operate in practice, such as national parliament scrutiny and impact assessment",
      "Acknowledges the strongest opposing argument and answers it",
      "Uses concrete examples of cross-border problems where EU action is easier to justify, such as pollution, single market or data flows",
      "Concludes with a proportionate judgement, potentially including how the constraint could be strengthened"
    ],
    "pitfalls": [
      "Confusing subsidiarity with a general complaint about too much regulation",
      "Describing the treaty mechanics at length with no argument",
      "Asserting that member states always agree, which ignores qualified majority outcomes"
    ]
  },
  {
    "id": "wr015",
    "type": "Summary",
    "topic": "Subsidiarity",
    "minutes": 30,
    "words": "250-350",
    "prompt": "In a debate on the role of national parliaments in EU law-making, four positions emerged. One speaker wanted the reasoned opinion procedure strengthened so a sufficient number of objections could block a proposal outright. A second argued that national parliaments should focus on holding their own ministers to account in the Council instead. A third proposed earlier and more structured consultation before proposals are drafted. A fourth warned that any stronger blocking power would paralyse EU legislation. Write a neutral summary of the four positions.",
    "points": [
      "Captures all four positions with balanced coverage",
      "Explains each position's underlying logic in one or two sentences",
      "Identifies the central disagreement between ex-ante involvement and ex-post blocking power",
      "Keeps a neutral tone throughout, with no implied preference",
      "Provides a one-line framing sentence at the start so the reader knows the context",
      "Respects the word limit through selection rather than truncation"
    ],
    "pitfalls": [
      "Assessing which proposal would work best",
      "Presenting the debate as two sides when there are four distinct positions",
      "Using vague summarising phrases such as various views were expressed instead of reporting content"
    ]
  },
  {
    "id": "wr016",
    "type": "Letter reply",
    "topic": "Democratic participation",
    "minutes": 35,
    "words": "300-400",
    "prompt": "A citizen has written asking why an initiative he supported, which collected signatures across several member states, did not lead to new legislation, and complaining that citizens have no real influence over EU decisions. Write a reply explaining how the European citizens' initiative works, what the Commission is and is not obliged to do in response, and what other channels exist for influencing EU policy, without dismissing his frustration.",
    "points": [
      "Acknowledges the effort behind the initiative and the disappointment expressed",
      "Explains accurately what a successful initiative obliges the Commission to do: examine, meet organisers, respond with reasons",
      "Explains why a response may be a package of non-legislative measures rather than a new law",
      "Sets out other participation channels such as public consultations, petitions to the Parliament and the Ombudsman",
      "Keeps a respectful and non-bureaucratic tone in plain language",
      "Ends with a constructive next step the citizen can take"
    ],
    "pitfalls": [
      "Reciting the legal procedure without answering the underlying grievance",
      "Sounding defensive or implying the citizen misunderstood the rules",
      "Overstating citizen influence in a way that invites a further complaint"
    ]
  },
  {
    "id": "wr017",
    "type": "Policy note",
    "topic": "Rule of law",
    "minutes": 45,
    "words": "400-500",
    "prompt": "A member state faces credible findings that its public procurement system lacks effective judicial oversight, putting EU funds at risk. Suspending payments would harm final beneficiaries such as universities and municipalities, but continued disbursement risks losing the money and undermining the credibility of the conditionality regime. Write a policy note to a Director analysing the dilemma, presenting options, and recommending a course of action.",
    "points": [
      "Sets out the dilemma precisely, including the harm to innocent beneficiaries",
      "Presents distinct options such as full suspension, targeted suspension of affected programmes, payment through alternative channels, or milestone-based release",
      "Assesses each against protection of the budget, effect on beneficiaries, legal robustness and deterrent effect",
      "Recommends one option and specifies the conditions under which payments would resume",
      "Notes procedural requirements such as evidence, proportionality and the member state's right to respond",
      "Written as a decision note with a clear ask at the top"
    ],
    "pitfalls": [
      "Framing the issue as a moral judgement on the member state rather than a budget protection question",
      "Ignoring proportionality and the legal need for a link to sound financial management",
      "Recommending action without saying how it would be reversed or unwound"
    ]
  },
  {
    "id": "wr018",
    "type": "Essay",
    "topic": "Rule of law",
    "minutes": 40,
    "words": "400-500",
    "prompt": "Linking EU funding to respect for the rule of law is defended as the only effective tool to protect the Union's budget and values. Critics argue that it politicises money, punishes citizens for their government's conduct, and gives the Commission excessive discretion. Write an argumentative essay taking a clear position on whether financial conditionality is the right instrument for defending the rule of law in the EU.",
    "points": [
      "States a clear position and defines what rule-of-law conditionality actually covers",
      "Argues the case for conditionality: budget protection, weakness of other tools, deterrence",
      "Argues the case against fairly: collective punishment of citizens, discretion, risk of politicisation",
      "Compares conditionality with alternatives such as infringement proceedings and Article 7 procedures",
      "Addresses safeguards that could make conditionality more legitimate, for example evidence standards and payments to final beneficiaries",
      "Reaches a conclusion consistent with the argument developed"
    ],
    "pitfalls": [
      "Reducing the issue to criticism of one specific government",
      "Confusing the budget conditionality mechanism with the Article 7 political procedure",
      "Ignoring the counter-argument that citizens lose funding for choices they did not make"
    ]
  },
  {
    "id": "wr019",
    "type": "Summary",
    "topic": "Rule of law",
    "minutes": 30,
    "words": "250-350",
    "prompt": "At an expert roundtable on rule-of-law enforcement four positions were expressed. A legal scholar argued that court-based infringement action is the only legitimate route because it is judicially controlled. A budget expert argued that only financial measures change behaviour quickly enough. A member state representative warned that conditionality applied unevenly would damage trust between governments. A civil society representative argued that funds should be redirected to independent bodies and municipalities rather than withheld. Write a neutral summary of the four positions.",
    "points": [
      "Reports all four positions accurately and in comparable depth",
      "Distinguishes legal legitimacy arguments from effectiveness arguments",
      "Notes the shared assumption that enforcement is currently insufficient",
      "Avoids any implied endorsement, including through adjectives or sequencing",
      "Uses a clear structure with an opening framing sentence",
      "Keeps within the word limit by summarising rather than quoting"
    ],
    "pitfalls": [
      "Taking sides, for instance by presenting one view as the expert consensus",
      "Blurring the distinct legal and financial arguments into one",
      "Dropping the civil society proposal because it is the least conventional"
    ]
  },
  {
    "id": "wr020",
    "type": "Letter reply",
    "topic": "Rule of law",
    "minutes": 35,
    "words": "300-400",
    "prompt": "A non-governmental organisation has written arguing that the Commission acts too slowly on rule-of-law problems, that its annual reporting produces no consequences, and asking what concrete action will follow this year's findings. Write a reply that is factual and non-defensive, explains the range of instruments available and their different timelines, and avoids either promising specific enforcement decisions or dismissing the criticism.",
    "points": [
      "Acknowledges the concern and the organisation's role without being patronising",
      "Explains the different instruments: annual reporting, infringement proceedings, budget conditionality, funding rules",
      "Explains honestly why enforcement takes time, including evidence gathering and legal robustness",
      "Avoids prejudging or announcing decisions that are not the writer's to announce",
      "Offers a concrete channel for the organisation's evidence to be taken into account",
      "Keeps a professional, plain-language tone throughout"
    ],
    "pitfalls": [
      "Defensive institutional language that avoids the substance of the criticism",
      "Committing the Commission to a specific enforcement step or timetable",
      "Listing instruments without explaining what each can and cannot achieve"
    ]
  },
  {
    "id": "wr021",
    "type": "Policy note",
    "topic": "Defence",
    "minutes": 45,
    "words": "400-500",
    "prompt": "European defence spending has risen sharply but remains fragmented: member states buy different equipment in small quantities, often from outside the EU, and joint procurement remains the exception. Write a policy note to your Head of Unit setting out the fragmentation problem, presenting options for increasing joint procurement (financial incentives, common demand aggregation, or common funding for strategic capabilities), and recommending one, taking account of national sovereignty over defence.",
    "points": [
      "Quantifies or characterises the problem clearly: duplication, small production runs, interoperability gaps",
      "Presents distinct options with their financial and legal implications",
      "Respects the treaty reality that defence procurement remains a national competence",
      "Assesses the effect of each option on industrial capacity and on non-EU partners",
      "Recommends one option and identifies the immediate next step or decision required",
      "Uses a concise note structure with a summary line at the top"
    ],
    "pitfalls": [
      "Assuming the EU can simply mandate joint procurement",
      "Confusing NATO responsibilities with EU industrial and market competences",
      "Recommending new money without addressing where it comes from"
    ]
  },
  {
    "id": "wr022",
    "type": "Essay",
    "topic": "Defence",
    "minutes": 40,
    "words": "400-500",
    "prompt": "Some argue that Europe's security environment requires deep defence integration, including joint funding, joint procurement and eventually common capabilities under EU decision-making. Others argue that defence is the core of national sovereignty, that NATO already provides collective defence, and that EU-level ambition risks duplication. Write an argumentative essay taking a clear position on how far EU defence integration should go.",
    "points": [
      "Sets out a clear thesis with a defined scope of what integration means",
      "Argues the case for integration: economies of scale, capability gaps, strategic autonomy in supply chains",
      "Argues the case against: sovereignty, NATO duplication, divergent threat perceptions across member states",
      "Distinguishes industrial and market integration from operational and command integration",
      "Uses concrete anchors such as joint procurement instruments, capability targets and the unanimity rule in common foreign and security policy",
      "Concludes with a defensible and specific position rather than a general appeal"
    ],
    "pitfalls": [
      "Treating an EU army as the only meaning of defence integration",
      "Ignoring NATO or presenting it as simply a rival to the EU",
      "Making sweeping geopolitical claims without connecting them to EU competences"
    ]
  },
  {
    "id": "wr023",
    "type": "Summary",
    "topic": "Defence",
    "minutes": 30,
    "words": "250-350",
    "prompt": "At a seminar on financing European defence, four proposals were discussed. The first was joint borrowing at EU level to fund strategic capabilities. The second was relaxing fiscal rules so member states can spend more nationally without triggering deficit procedures. The third was expanding lending by the European Investment Bank to defence-related industry. The fourth was reallocating existing EU budget headings towards defence industrial programmes. Write a neutral summary of the four proposals for a colleague preparing a briefing.",
    "points": [
      "Describes each of the four proposals accurately and distinctly",
      "Notes the key constraint or objection associated with each, as raised in the discussion, without adding personal judgement",
      "Keeps the register neutral and factual",
      "Organises the summary so the reader can quickly compare the options",
      "Includes a short framing sentence stating what the seminar addressed",
      "Uses precise language, avoiding vague terms such as more money for defence"
    ],
    "pitfalls": [
      "Recommending one financing route",
      "Confusing EU-level borrowing with national borrowing under fiscal rules",
      "Expanding one proposal at the expense of the others"
    ]
  },
  {
    "id": "wr024",
    "type": "Letter reply",
    "topic": "Defence",
    "minutes": 35,
    "words": "300-400",
    "prompt": "A citizen has written objecting that money spent on defence is money taken from health, education and climate action, and asking whether the EU is building an army without asking Europeans. Write a reply that explains the EU's actual role in defence, distinguishes it from national decisions and from NATO, addresses the spending trade-off honestly, and treats the citizen's concern with respect.",
    "points": [
      "Acknowledges the trade-off concern as legitimate rather than brushing it aside",
      "Explains clearly what the EU does and does not do: industrial and procurement support, coordination, no standing EU army",
      "Clarifies that defence budgets and deployment decisions remain national and require national democratic approval",
      "Explains where EU-level funding for defence industry comes from and its scale relative to other spending",
      "Uses plain language without acronyms or institutional shorthand",
      "Ends politely with an offer of further information"
    ],
    "pitfalls": [
      "Denying that any trade-off exists between defence and other spending",
      "Blurring the roles of the EU, NATO and national governments",
      "Using a defensive or dismissive tone about the army question"
    ]
  },
  {
    "id": "wr025",
    "type": "Policy note",
    "topic": "Artificial intelligence",
    "minutes": 45,
    "words": "400-500",
    "prompt": "Start-ups and smaller firms report that complying with EU rules on artificial intelligence is disproportionately costly for them, while civil society insists that oversight of high-risk systems must not be weakened. Your unit must advise on how to respond. Write a policy note to a Commissioner setting out the tension, presenting options such as simplified obligations for smaller firms, extended transition periods, or stronger regulatory sandboxes and guidance, and recommending one.",
    "points": [
      "Frames the issue as a proportionality and implementation question, not a choice between regulation and innovation",
      "Presents distinct options with their costs, beneficiaries and risks",
      "Distinguishes lowering standards from lowering compliance costs, and favours the latter where possible",
      "Assesses effects on legal certainty, on trust, and on the EU's international position",
      "Makes a clear recommendation and states the decision requested",
      "Uses a compact note structure with headings"
    ],
    "pitfalls": [
      "Assuming that any relaxation for smaller firms automatically undermines protection",
      "Ignoring implementation capacity of national authorities and standardisation timelines",
      "Producing a general commentary on artificial intelligence rather than an actionable note"
    ]
  },
  {
    "id": "wr026",
    "type": "Essay",
    "topic": "Artificial intelligence",
    "minutes": 40,
    "words": "400-500",
    "prompt": "The EU has chosen to regulate artificial intelligence early and comprehensively, on the grounds that trustworthy technology is a competitive advantage and that fundamental rights require protection. Critics argue that regulating before the technology matures entrenches large incumbents, drives start-ups elsewhere, and leaves Europe dependent on foreign models. Write an argumentative essay taking a clear position on whether the EU's early regulation of artificial intelligence is the right approach.",
    "points": [
      "States a clear position and defines what is being judged: the timing and design of regulation, not regulation as such",
      "Argues the case for early regulation: rights protection, legal certainty, standard-setting influence",
      "Argues the case against: compliance costs, incumbent advantage, pace of technological change",
      "Distinguishes risk-based obligations from blanket restrictions, showing understanding of the EU approach",
      "Considers complementary conditions such as compute capacity, data access, skills and capital markets",
      "Concludes with a reasoned judgement, possibly conditional on implementation quality"
    ],
    "pitfalls": [
      "Treating innovation and regulation as a simple binary",
      "Making confident claims about future technological capability",
      "Ignoring that the EU approach is risk-tiered rather than uniform"
    ]
  },
  {
    "id": "wr027",
    "type": "Summary",
    "topic": "Artificial intelligence",
    "minutes": 35,
    "words": "300-350",
    "prompt": "At a consultation on implementing the EU's rules for artificial intelligence, four positions were expressed. A large technology firm asked for harmonised guidance and a single point of contact instead of twenty-seven national interpretations. A consumer organisation warned against delaying obligations for high-risk uses in employment and credit. A national regulator said it lacks technical staff to supervise complex systems. A research association argued that obligations should not apply to publicly funded research prototypes. Write a neutral summary of these positions.",
    "points": [
      "Represents all four positions accurately and with balanced weight",
      "Preserves the distinct concern of each stakeholder rather than grouping them as pro or anti regulation",
      "Identifies the cross-cutting issue of implementation capacity and consistency",
      "Uses neutral reporting language and avoids adjectives that signal approval",
      "Includes a short framing sentence establishing the context",
      "Stays within the word limit by selecting the essential point from each intervention"
    ],
    "pitfalls": [
      "Adding recommendations or assessing which concern is most valid",
      "Reducing the summary to a technology industry versus consumers narrative",
      "Using technical terminology that a non-specialist reader could not follow"
    ]
  },
  {
    "id": "wr028",
    "type": "Letter reply",
    "topic": "Artificial intelligence",
    "minutes": 35,
    "words": "300-400",
    "prompt": "The founder of a ten-person software company has written saying she cannot tell whether her product falls under the EU rules on artificial intelligence, that legal advice is unaffordable, and that she is considering launching outside the EU instead. Write a reply that is practical and encouraging, explains how the risk-based approach works in plain language, points to concrete support, and does not give legal advice on her specific product.",
    "points": [
      "Responds to the practical difficulty first rather than starting with legal citations",
      "Explains the risk-based logic simply: obligations depend on the use and its risk level, not on the technology alone",
      "Points to concrete support such as guidance, sandboxes, national contact points and support networks for small firms",
      "States clearly and courteously that the reply cannot constitute a legal classification of her product",
      "Keeps an encouraging tone that addresses her thought of leaving the EU market",
      "Uses short paragraphs and no unexplained acronyms"
    ],
    "pitfalls": [
      "Giving a definitive classification of her product",
      "Answering with legal references instead of practical steps",
      "Ignoring the stated intention to launch outside the EU"
    ]
  },
  {
    "id": "wr029",
    "type": "Policy note",
    "topic": "Migration",
    "minutes": 45,
    "words": "400-500",
    "prompt": "Frontline member states argue that they carry a disproportionate share of arrivals, while others refuse relocation and prefer financial or operational contributions. The solidarity mechanism agreed in EU asylum rules is criticised as too flexible by some and too intrusive by others. Write a policy note to a Director analysing why solidarity remains contested, presenting options for making it work in practice, and recommending one.",
    "points": [
      "Explains why solidarity is contested: unequal exposure, divergent domestic politics, trust in registration and returns",
      "Presents distinct options such as clearer triggers for the mechanism, stronger operational support, or improved return cooperation",
      "Assesses feasibility, legal basis and likely member state reactions for each",
      "Recommends one option and states what decision or next step is requested",
      "Links solidarity to responsibility, including registration and secondary movement",
      "Uses a concise note format with headings and a summary line"
    ],
    "pitfalls": [
      "Moralising about solidarity instead of analysing incentives",
      "Proposing mandatory relocation without addressing why it repeatedly failed",
      "Confusing asylum procedures with legal labour migration channels"
    ]
  },
  {
    "id": "wr030",
    "type": "Essay",
    "topic": "Migration",
    "minutes": 40,
    "words": "400-500",
    "prompt": "The EU's asylum framework rests on a balance between responsibility, which falls mainly on countries of first entry, and solidarity, which other member states provide through relocation, money or operational support. Some argue that flexible solidarity is a fiction that leaves frontline states alone. Others argue that compulsory relocation is politically impossible and undermines support for the system. Write an argumentative essay taking a clear position on how solidarity in EU asylum policy should be organised.",
    "points": [
      "States a clear position on the form solidarity should take",
      "Explains the responsibility and solidarity trade-off accurately",
      "Argues the case for mandatory elements: predictability, fairness, deterrence of free-riding",
      "Argues the case for flexibility: political feasibility, differing national capacities, risk of non-compliance",
      "Considers the external dimension, including returns and cooperation with countries of origin and transit",
      "Concludes with a position that is workable rather than merely principled"
    ],
    "pitfalls": [
      "Ignoring the political constraints that have blocked relocation in practice",
      "Confusing refugees, asylum seekers and irregular migrants",
      "Writing an emotional appeal instead of a structured argument"
    ]
  },
  {
    "id": "wr031",
    "type": "Summary",
    "topic": "Migration",
    "minutes": 30,
    "words": "250-350",
    "prompt": "During a ministerial discussion on asylum, four positions were expressed. A frontline state demanded automatic relocation once arrivals exceed a defined threshold. A central European state refused relocation but offered funding and border personnel. A northern state focused on preventing secondary movements and enforcing registration. A southern state stressed that returns to countries of origin must improve before any internal distribution debate can be settled. Write a neutral summary for a colleague preparing the follow-up meeting.",
    "points": [
      "Captures all four positions accurately and proportionately",
      "Keeps a neutral tone appropriate for a preparatory briefing",
      "Identifies the main fault lines: automaticity, form of contribution, sequencing with returns",
      "Notes any potential common ground, such as agreement on registration or returns",
      "Uses a clear structure that lets the reader see each delegation's ask at a glance",
      "Respects the word limit through selection rather than compression of every sentence"
    ],
    "pitfalls": [
      "Characterising a position as unreasonable or unrealistic",
      "Merging the northern and southern positions because both mention enforcement",
      "Adding recommendations for the follow-up meeting"
    ]
  },
  {
    "id": "wr032",
    "type": "Letter reply",
    "topic": "Migration",
    "minutes": 35,
    "words": "300-400",
    "prompt": "The mayor of a coastal town has written saying reception facilities in her municipality are permanently overcrowded, that national authorities are slow to transfer people onwards, and asking what the EU will do for local authorities that carry the daily burden. Write a reply that recognises the local reality, explains what EU-level support exists and how it reaches municipalities, and is honest about the limits of EU competence.",
    "points": [
      "Opens by recognising the concrete pressure on the municipality",
      "Explains what EU support exists: funding instruments, agency operational support, capacity building",
      "Explains honestly that reception capacity and transfers are managed by national authorities",
      "Gives a practical route forward, such as engagement with the national managing authority or relevant agency",
      "Avoids blaming national authorities while still being accurate about responsibilities",
      "Uses respectful, plain language suitable for an elected local official"
    ],
    "pitfalls": [
      "Promising direct EU intervention that the Commission cannot deliver",
      "Replying with a general description of EU asylum policy rather than her situation",
      "Using acronyms for funds and agencies without explaining them"
    ]
  },
  {
    "id": "wr033",
    "type": "Policy note",
    "topic": "Economic and monetary union",
    "minutes": 45,
    "words": "400-500",
    "prompt": "European households hold a large share of their savings in bank deposits while European companies struggle to raise equity, and much European capital is invested outside the Union. Write a policy note to a Head of Unit explaining why capital markets remain fragmented, presenting options for progress (harmonising insolvency and taxation of investment products, centralising supervision of market infrastructure, or creating pan-European savings products), and recommending one.",
    "points": [
      "Diagnoses fragmentation accurately: national insolvency law, tax treatment, supervision, pension structures",
      "Presents distinct options with realistic assessment of legal basis and unanimity constraints where tax is involved",
      "Weighs the political feasibility of centralising supervision against its likely effect",
      "Recommends one option with sequencing and a first concrete step",
      "Links the issue to wider goals such as financing the green and digital transitions and defence investment",
      "Uses a note structure with an opening summary of the ask"
    ],
    "pitfalls": [
      "Repeating slogans about a savings and investments union without concrete mechanisms",
      "Ignoring that tax measures require unanimity",
      "Proposing everything at once with no prioritisation"
    ]
  },
  {
    "id": "wr034",
    "type": "Essay",
    "topic": "Economic and monetary union",
    "minutes": 40,
    "words": "400-500",
    "prompt": "Some argue that the euro area needs a permanent central fiscal capacity to stabilise economies in downturns and to fund common goods, since monetary policy alone cannot do the job. Others argue that this would create permanent transfers, weaken national incentives for sound budgets, and lacks democratic legitimacy. Write an argumentative essay taking a clear position on whether the euro area should have a permanent fiscal capacity.",
    "points": [
      "States a clear position early and defines what a fiscal capacity would do",
      "Argues the case for: asymmetric shocks, limits of monetary policy, provision of common goods",
      "Argues the case against: moral hazard, permanent transfers, legitimacy and accountability",
      "Refers to relevant experience such as temporary joint borrowing instruments and reformed fiscal rules",
      "Addresses design safeguards, for example conditionality, contribution rules and a clear exit from temporary schemes",
      "Concludes with a judgement consistent with the arguments presented"
    ],
    "pitfalls": [
      "Confusing a stabilisation capacity with routine transfers between member states",
      "Ignoring the legitimacy question, which is central to opponents",
      "Assuming that temporary crisis instruments prove the case for permanent ones without argument"
    ]
  },
  {
    "id": "wr035",
    "type": "Summary",
    "topic": "Economic and monetary union",
    "minutes": 30,
    "words": "250-350",
    "prompt": "At a discussion on deepening capital markets in the EU, four positions were put forward. A financial industry association called for centralised EU-level supervision of major market infrastructure. A small member state warned that centralisation would move activity and jobs to existing financial hubs. A consumer group argued that a simple, low-cost pan-European savings product would matter more than supervisory reform. An academic argued that without harmonised insolvency law no other measure will make a material difference. Write a neutral summary of the four positions.",
    "points": [
      "Reports all four positions accurately and with comparable weight",
      "Distinguishes supervisory, product and legal-harmonisation arguments clearly",
      "Notes the shared diagnosis that markets are currently too fragmented",
      "Maintains neutrality, including in ordering and word choice",
      "Opens with a short framing sentence about the discussion",
      "Uses precise financial vocabulary correctly but accessibly"
    ],
    "pitfalls": [
      "Implying that the academic position is the technically correct one",
      "Compressing the four positions into a for-and-against structure",
      "Using jargon such as post-trade infrastructure without brief explanation"
    ]
  },
  {
    "id": "wr036",
    "type": "Letter reply",
    "topic": "Economic and monetary union",
    "minutes": 35,
    "words": "300-400",
    "prompt": "A citizen has written asking why his savings earn so little, whether EU plans for a savings and investments union mean his money will be pushed into risky products, and who would compensate him if an investment loses value. Write a reply that explains the aim of the initiative in plain language, is clear about the difference between deposits and investments, and does not promise returns or give investment advice.",
    "points": [
      "Answers the actual questions in the order asked",
      "Explains the aim of the initiative simply: better access to investment options and more financing for European companies",
      "Distinguishes clearly between protected bank deposits and investments that carry risk",
      "States plainly that no EU initiative obliges anyone to move savings or guarantees returns",
      "Points to relevant safeguards such as investor information rules and deposit guarantee schemes",
      "Avoids anything that reads as investment advice and says so courteously"
    ],
    "pitfalls": [
      "Implying that investments carry no risk or that losses would be compensated",
      "Answering with macroeconomic explanation instead of his personal questions",
      "Using financial jargon without explanation"
    ]
  },
  {
    "id": "wr037",
    "type": "Policy note",
    "topic": "Single market",
    "minutes": 45,
    "words": "400-500",
    "prompt": "Companies report that providing services across borders in the EU remains far harder than trading goods, because of divergent national authorisation requirements, professional rules and reporting obligations. Write a policy note to a Commissioner setting out the persistence of services barriers, presenting options for reducing them (targeted enforcement action, a horizontal simplification initiative, or mutual recognition arrangements in selected sectors), and recommending one with an assessment of the resistance to expect.",
    "points": [
      "Explains why services barriers persist: national regulatory autonomy, professional bodies, enforcement gaps",
      "Presents distinct options rather than variants of enforcement",
      "Assesses each for speed of effect, resource needs and likely member state resistance",
      "Recommends one option and identifies a concrete first step, such as a sector to start with",
      "Uses evidence-style reasoning about the economic cost of fragmentation without inventing precise figures",
      "Uses a compact note structure with a clear ask at the top"
    ],
    "pitfalls": [
      "Blaming member states rather than analysing why the barriers exist",
      "Recommending new legislation without considering enforcement of existing rules",
      "Producing a description of the single market rather than a decision note"
    ]
  },
  {
    "id": "wr038",
    "type": "Essay",
    "topic": "Single market",
    "minutes": 40,
    "words": "400-500",
    "prompt": "The single market is described as the EU's greatest achievement, yet barriers remain substantial in services, which make up most of the European economy. Some argue the priority is vigorous enforcement of existing rules against member states. Others argue that enforcement alone cannot overcome deeply rooted national regulation and that new harmonisation is needed. Write an argumentative essay taking a clear position on how the EU should deepen the single market in services.",
    "points": [
      "States a clear position on enforcement versus harmonisation, or a justified combination",
      "Explains why services barriers are structurally different from barriers to trade in goods",
      "Argues the enforcement case: existing rules, infringement procedures, speed and legitimacy",
      "Argues the harmonisation case: mutual recognition limits, professional qualification rules, digital and platform services",
      "Considers political constraints, including the sensitivity of national professional regulation",
      "Concludes with a position that specifies where to start rather than a general call for deepening"
    ],
    "pitfalls": [
      "Treating the single market as complete for goods and simply unfinished for services with no explanation",
      "Calling for harmonisation without acknowledging subsidiarity and national regulatory traditions",
      "Listing barriers without arguing for a course of action"
    ]
  },
  {
    "id": "wr039",
    "type": "Summary",
    "topic": "Single market",
    "minutes": 30,
    "words": "250-350",
    "prompt": "At a hearing on single-market enforcement four contributions were made. A business federation asked for faster infringement procedures and public scoreboards of national compliance. A member state argued that enforcement pressure ignores legitimate public interest regulation. A consumer organisation focused on cross-border online purchases and the difficulty of obtaining redress. A trade union warned that removing service barriers must not undercut national labour standards. Write a neutral summary of the four contributions for an internal note.",
    "points": [
      "Represents all four contributions accurately and proportionately",
      "Distinguishes the different objects of concern: procedures, regulatory autonomy, consumer redress, labour standards",
      "Notes the shared acceptance that enforcement matters, alongside disagreement about its limits",
      "Maintains neutrality in vocabulary and structure",
      "Includes a short framing sentence and a clear layout",
      "Keeps within the word limit by selecting one core point per contribution"
    ],
    "pitfalls": [
      "Framing the summary as business against everyone else",
      "Adding the writer's own view on legitimate public interest regulation",
      "Leaving out the labour standards contribution because it is the least technical"
    ]
  },
  {
    "id": "wr040",
    "type": "Letter reply",
    "topic": "Single market",
    "minutes": 35,
    "words": "300-400",
    "prompt": "A qualified nurse trained in one member state has written saying that another member state has refused to recognise her qualification, that the procedure took more than a year, and asking what the EU will do about it. Write a reply that explains how recognition of professional qualifications works in the EU, what rights and remedies she has, what deadlines apply, and where she can get individual help, without prejudging the outcome of her case.",
    "points": [
      "Acknowledges the delay and frustration and responds to her situation specifically",
      "Explains the recognition framework in plain terms, including automatic recognition for certain health professions",
      "Sets out her practical remedies: national appeal routes, problem-solving networks and complaint mechanisms",
      "Mentions that procedural deadlines apply to national authorities and that decisions must be reasoned",
      "Avoids prejudging whether the refusal was lawful while still being helpful",
      "Ends with a clear next step and a courteous closing"
    ],
    "pitfalls": [
      "Explaining the legal framework without telling her what to do next",
      "Stating that the refusal was unlawful on the basis of her account alone",
      "Referring her to institutions by acronym without saying what they do"
    ]
  }
];
