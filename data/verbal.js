/* Verbal reasoning bank — EPSO-style passage + single supported statement. */
"use strict";

const VERBAL_QUESTIONS = [
  {
    "id": "vr01",
    "passage": "Remote work arrangements expanded rapidly during the past decade, but their effect on productivity remains contested. Several large firms report that fully remote teams complete routine tasks faster, while tasks requiring creative collaboration progress more slowly. Hybrid models, in which employees attend the office two or three days a week, are increasingly presented as a compromise. However, studies measuring hybrid work outcomes are still scarce, and most existing evidence comes from company self-reporting rather than independent research.",
    "q": "Which of the following statements is correct based only on the passage?",
    "options": [
      "Most evidence on hybrid work outcomes currently comes from company self-reporting.",
      "Independent research has proven that hybrid models are the most productive.",
      "Fully remote teams complete all types of tasks faster than office-based teams.",
      "Employees in hybrid models must attend the office at least three days a week."
    ],
    "a": 0,
    "expl": "The passage says studies are scarce and 'most existing evidence comes from company self-reporting'. Remote teams are faster only on routine tasks; hybrid means two OR three days; nothing is 'proven' by independent research."
  },
  {
    "id": "vr02",
    "passage": "The Mediterranean diet, rich in olive oil, vegetables, legumes and fish, has long been associated with lower rates of cardiovascular disease. Yet researchers caution that people who follow this diet often share other habits, such as regular physical activity and strong social ties, which may themselves protect the heart. Trials that isolate the effect of diet alone are difficult to design, because participants cannot easily be prevented from changing other aspects of their lifestyle at the same time.",
    "q": "Which of the following statements is correct based only on the passage?",
    "options": [
      "Confounding lifestyle habits make it hard to attribute health benefits to the Mediterranean diet alone.",
      "The Mediterranean diet has been shown to have no effect on cardiovascular disease.",
      "Regular physical activity is more important for heart health than diet.",
      "Trials on diet are impossible to conduct."
    ],
    "a": 0,
    "expl": "The passage says followers 'often share other habits' that may protect the heart, and isolating diet is 'difficult' — not impossible, and no ranking of factors is given."
  },
  {
    "id": "vr03",
    "passage": "Urban rooftop gardens are promoted for their ability to insulate buildings, absorb rainwater and lower local temperatures. A recent municipal survey found that buildings with rooftop gardens used 12% less energy for cooling in summer. Installation costs, however, remain high, and older buildings frequently require structural reinforcement before a garden can be added. For this reason, most new rooftop gardens in the surveyed city were installed on buildings constructed within the last twenty years.",
    "q": "Which of the following statements is correct based only on the passage?",
    "options": [
      "In the surveyed city, most new rooftop gardens were placed on relatively recent buildings.",
      "Rooftop gardens reduced total energy use by 12% in all cities.",
      "Older buildings cannot support rooftop gardens.",
      "Installation costs of rooftop gardens have fallen recently."
    ],
    "a": 0,
    "expl": "The 12% figure concerns cooling energy in one municipal survey, not total energy everywhere; older buildings 'frequently require reinforcement', not that they never can; costs are said to remain high."
  },
  {
    "id": "vr04",
    "passage": "Public libraries are reinventing themselves as community hubs. Beyond lending books, many now offer language courses, job-application workshops and access to 3D printers. Attendance figures in several European countries show that while physical book loans have declined steadily, total visits to library buildings have increased. Librarians attribute this shift to the demand for quiet workspaces and free digital services, particularly among students and jobseekers.",
    "q": "Which of the following statements is correct based only on the passage?",
    "options": [
      "In several European countries, library visits rose even as physical book loans fell.",
      "Book lending has increased thanks to new library services.",
      "Most library visitors are students.",
      "Libraries now charge for digital services."
    ],
    "a": 0,
    "expl": "The passage contrasts declining loans with increasing visits. It says demand is 'particularly' from students and jobseekers, not that they are the majority, and digital services are described as free."
  },
  {
    "id": "vr05",
    "passage": "Electric vehicle sales in Europe grew strongly last year, but the growth was unevenly distributed. In countries with dense public charging networks, electric cars accounted for over a quarter of new registrations, whereas in countries with sparse networks the share remained below ten percent. Analysts conclude that purchase subsidies alone are insufficient: consumers appear unwilling to buy electric cars where charging remains inconvenient, regardless of the price advantage subsidies create.",
    "q": "Which of the following statements is correct based only on the passage?",
    "options": [
      "According to analysts, purchase subsidies by themselves do not guarantee high electric vehicle uptake.",
      "Electric vehicles are cheaper than petrol cars in all European countries.",
      "Countries with sparse charging networks saw no electric vehicle sales.",
      "Over a quarter of all cars on European roads are now electric."
    ],
    "a": 0,
    "expl": "Analysts conclude subsidies 'alone are insufficient'. The 25%+ figure concerns NEW registrations in well-equipped countries; sparse-network countries were below 10%, not zero."
  },
  {
    "id": "vr06",
    "passage": "Antibiotic resistance is often described as a purely medical problem, but agriculture plays a substantial role. In some regions, more antibiotics are administered to healthy livestock for growth promotion than are prescribed to humans for treatment. Regulations banning this practice exist in the European Union, yet enforcement varies, and imported meat may originate from countries where growth promoters remain legal. Consequently, experts argue that trade policy and veterinary practice must be addressed together with hospital prescribing habits.",
    "q": "Which of the following statements is correct based only on the passage?",
    "options": [
      "Experts argue that tackling antibiotic resistance requires action beyond hospital prescribing.",
      "The European Union has no rules on antibiotics in livestock.",
      "Imported meat is banned in the European Union.",
      "Antibiotics are never given to healthy animals."
    ],
    "a": 0,
    "expl": "Experts want trade policy and veterinary practice addressed 'together with' prescribing. The EU has a ban (with varying enforcement); imports may come from countries where promoters are legal — they are not banned."
  },
  {
    "id": "vr07",
    "passage": "The four-day working week has been trialled by dozens of companies in several countries. In most trials, employees kept their full salary while working around 80% of their previous hours. Participating firms frequently reported stable or improved output and lower staff turnover. Critics note, however, that companies volunteering for such trials may already have flexible cultures, making the results difficult to generalise to sectors such as healthcare or manufacturing, where continuous staffing is essential.",
    "q": "Which of the following statements is correct based only on the passage?",
    "options": [
      "Critics question whether trial results can be generalised, because participating firms may be atypical.",
      "All companies that tried the four-day week increased their output.",
      "Employees in the trials accepted a 20% salary cut.",
      "Healthcare workers were the main participants in the trials."
    ],
    "a": 0,
    "expl": "Firms 'frequently' (not always) reported stable or improved output; employees kept full salary; healthcare is cited as a sector where results may NOT generalise."
  },
  {
    "id": "vr08",
    "passage": "Glacier retreat in the Alps has accelerated markedly since the 1980s. Beyond the loss of a striking landscape, the consequences are practical: summer river flows that depend on meltwater are becoming less reliable, affecting hydropower production and irrigation downstream. Some ski resorts have responded by covering parts of glaciers with reflective sheets during summer, a measure that slows melting locally but is far too expensive to apply at scale.",
    "q": "Which of the following statements is correct based only on the passage?",
    "options": [
      "Reflective sheets can slow glacier melting locally but are too costly for large-scale use.",
      "Hydropower production in the Alps has already ceased.",
      "Glacier retreat began in the 1980s.",
      "Reflective sheets have stopped glacier retreat in the Alps."
    ],
    "a": 0,
    "expl": "The sheets 'slow melting locally' but are 'far too expensive to apply at scale'. Retreat accelerated since the 1980s (it did not begin then), and river flows are less reliable, not gone."
  },
  {
    "id": "vr09",
    "passage": "A national statistics office reviewed how inflation affects households differently. Because lower-income households spend a larger share of their budget on food and energy, periods in which those prices rise fastest hit them hardest. The official inflation rate, based on the average consumption basket, can therefore understate the price increases actually experienced by poorer households. The office now publishes supplementary indices for different income groups alongside the headline figure.",
    "q": "Which of the following statements is correct based only on the passage?",
    "options": [
      "The headline inflation rate can understate the price rises experienced by lower-income households.",
      "The statistics office has replaced the official inflation rate with income-group indices.",
      "Higher-income households are unaffected by food price increases.",
      "Food and energy prices always rise faster than other prices."
    ],
    "a": 0,
    "expl": "Supplementary indices are published 'alongside' the headline figure, not instead of it. The passage describes what happens in 'periods' when food and energy rise fastest — not a permanent rule."
  },
  {
    "id": "vr10",
    "passage": "Language-learning applications have made basic vocabulary acquisition more accessible than ever, and their streak-based design encourages daily practice. Linguists point out, however, that conversational fluency depends on unpredictable, interactive exchanges that apps rarely reproduce. In their view, applications are most effective when combined with regular speaking practice, for example through tandem partnerships or conversation groups, rather than used as a sole method.",
    "q": "Which of the following statements is correct based only on the passage?",
    "options": [
      "Linguists consider apps most effective when combined with regular speaking practice.",
      "Streak-based design discourages daily practice.",
      "Apps fully reproduce unpredictable conversational exchanges.",
      "Tandem partnerships have replaced language apps."
    ],
    "a": 0,
    "expl": "Apps are best 'combined with regular speaking practice... rather than used as a sole method'. Streaks encourage practice; apps 'rarely reproduce' interactive exchanges."
  },
  {
    "id": "vr11",
    "passage": "High-speed rail competes most effectively with air travel on routes of two to four hours. On such connections, several European corridors have seen rail capture more than half of the combined air-rail market, helped by city-centre stations and simpler boarding. For journeys beyond roughly five hours, however, aviation retains a decisive advantage, and analysts expect night trains — despite renewed investment — to remain a niche product serving travellers who prioritise comfort or lower emissions over speed.",
    "q": "Which of the following statements is correct based only on the passage?",
    "options": [
      "On some European corridors of two to four hours, rail has won over half of the combined air-rail market.",
      "Night trains are expected to replace short-haul flights.",
      "Aviation has lost its advantage on journeys over five hours.",
      "High-speed rail is cheaper than flying on all routes."
    ],
    "a": 0,
    "expl": "Rail captured 'more than half' on several 2–4 hour corridors. Beyond ~5 hours aviation 'retains a decisive advantage', and night trains are expected to 'remain a niche product'. Price is never mentioned."
  },
  {
    "id": "vr12",
    "passage": "Citizen science projects invite volunteers to classify galaxies, count birds or transcribe historical records. Their scientific value was initially questioned, but studies comparing volunteer classifications with expert ones have found high agreement when tasks are well designed and each item is reviewed by several volunteers. The main constraint is no longer data quality but volunteer retention: most participants contribute intensively for a few weeks and then stop, forcing projects to recruit continuously.",
    "q": "Which of the following statements is correct based only on the passage?",
    "options": [
      "For well-designed tasks with multiple reviewers, volunteer classifications agree closely with expert ones.",
      "Data quality remains the main constraint of citizen science.",
      "Most volunteers contribute steadily for several years.",
      "Experts no longer take part in citizen science projects."
    ],
    "a": 0,
    "expl": "High agreement was found 'when tasks are well designed and each item is reviewed by several volunteers'. The main constraint is retention, and most participants stop after a few weeks."
  },
  {
    "id": "vr13",
    "passage": "Sea ports are investing heavily in shore-side electricity so that docked ships can switch off their engines and plug into the grid, cutting air pollution in port cities. Uptake by shipping lines has nonetheless been slow: retrofitting vessels is costly, electricity in some ports is more expensive than marine fuel, and connection standards differed between ports until recently. New EU rules requiring major ports to offer shore power by 2030 are expected to accelerate adoption, though they do not oblige every ship to use it.",
    "q": "Which of the following statements is correct based only on the passage?",
    "options": [
      "EU rules will require major ports to offer shore power by 2030, without obliging every ship to use it.",
      "Shore-side electricity is always cheaper than marine fuel.",
      "All ships must use shore power from 2030.",
      "Retrofitting vessels for shore power is inexpensive."
    ],
    "a": 0,
    "expl": "The rules oblige ports to OFFER shore power but 'do not oblige every ship to use it'. Electricity is sometimes MORE expensive than fuel, and retrofitting is described as costly."
  },
  {
    "id": "vr14",
    "passage": "Open-plan offices were adopted widely on the promise of spontaneous collaboration. Field studies using wearable sensors tell a more nuanced story: after firms removed walls, face-to-face interaction often decreased while electronic messaging rose, as employees sought to protect their concentration. Architects now increasingly recommend zoned layouts that combine open areas with bookable quiet rooms, arguing that the choice of environment should follow the task rather than a single fixed design.",
    "q": "Which of the following statements is correct based only on the passage?",
    "options": [
      "In sensor-based field studies, face-to-face interaction often fell after walls were removed.",
      "Open-plan offices increased face-to-face collaboration as promised.",
      "Architects recommend removing all quiet rooms.",
      "Electronic messaging declined in open-plan offices."
    ],
    "a": 0,
    "expl": "Face-to-face interaction 'often decreased while electronic messaging rose'. Architects recommend zoned layouts WITH quiet rooms."
  },
  {
    "id": "vr15",
    "passage": "The restoration of peatlands is gaining attention in climate policy. Drained peatlands, often converted to farmland, emit carbon dioxide continuously as the exposed peat decomposes; rewetting them halts most of these emissions. Restoration is relatively cheap per tonne of avoided emissions, but it takes productive land out of conventional agriculture, so farmer compensation schemes are considered essential. Several member states now fund such schemes, although uptake depends heavily on the level of payments offered.",
    "q": "Which of the following statements is correct based only on the passage?",
    "options": [
      "Rewetting drained peatlands stops most of their continuous carbon emissions.",
      "Peatland restoration is expensive per tonne of avoided emissions.",
      "Farmer compensation schemes have proved unnecessary.",
      "Restored peatlands can still be used for conventional agriculture."
    ],
    "a": 0,
    "expl": "Rewetting 'halts most of these emissions'. Restoration is 'relatively cheap' per tonne, compensation is 'considered essential', and restoration takes land OUT of conventional agriculture."
  },
  {
    "id": "vr16",
    "passage": "Several European cities have redesigned major streets to give cyclists protected lanes physically separated from car traffic. Counts taken before and after such redesigns typically show substantial increases in cycling, particularly among women and older riders, groups that surveys identify as the most sensitive to perceived danger. Retailers often oppose the schemes, fearing lost car-borne customers, yet studies of shopping streets after conversion generally find stable or higher turnover, partly because cyclists and pedestrians visit more frequently even if they spend less per trip.",
    "q": "Which of the following statements is correct based only on the passage?",
    "options": [
      "After conversions, studies of shopping streets generally find stable or higher retail turnover.",
      "Retailers usually support protected bike lanes from the start.",
      "Cyclists spend more per shopping trip than drivers.",
      "Protected lanes mainly increase cycling among young men."
    ],
    "a": 0,
    "expl": "The passage says studies 'generally find stable or higher turnover'. Retailers 'often oppose' the schemes; cyclists spend LESS per trip but visit more often; increases are strongest among women and older riders."
  },
  {
    "id": "vr17",
    "passage": "Offshore wind farms benefit from stronger and steadier winds than onshore sites, and their distance from residents reduces planning conflicts. Costs fell dramatically during the 2010s as turbines grew larger, but the trend reversed recently: higher interest rates and more expensive steel pushed several developers to renegotiate or abandon projects agreed at fixed prices. Governments have responded by adjusting auction rules, since analysts agree that offshore capacity remains essential to European climate targets even if individual projects have become harder to finance.",
    "q": "Which of the following statements is correct based only on the passage?",
    "options": [
      "Higher interest rates and steel prices led some developers to renegotiate or abandon projects.",
      "Offshore wind costs have fallen continuously since the 2010s.",
      "Analysts believe offshore wind is no longer needed for climate targets.",
      "Offshore wind farms face more planning conflicts than onshore sites."
    ],
    "a": 0,
    "expl": "The cost trend 'reversed recently' — so not continuous decline. Distance from residents REDUCES planning conflicts, and analysts still deem offshore capacity 'essential'."
  },
  {
    "id": "vr18",
    "passage": "Many European countries report growing teacher shortages, especially in mathematics, physics and vocational subjects. Salaries explain part of the problem, but exit surveys consistently rank workload and administrative burden above pay as reasons for leaving. Some ministries have recruited career changers from industry through shortened training routes; early evidence suggests these entrants stay at similar rates to traditionally trained teachers, provided they receive structured mentoring in their first two years. Without mentoring, their attrition is markedly higher.",
    "q": "Which of the following statements is correct based only on the passage?",
    "options": [
      "Career changers remain in teaching at similar rates to traditionally trained teachers when they receive structured mentoring.",
      "Exit surveys rank pay as the main reason teachers leave.",
      "Teacher shortages affect all subjects equally.",
      "Career changers always leave teaching faster than other teachers."
    ],
    "a": 0,
    "expl": "The mentoring condition is decisive: with it, retention is similar; without it, attrition is 'markedly higher'. Workload ranks ABOVE pay, and shortages are concentrated in specific subjects."
  },
  {
    "id": "vr19",
    "passage": "Roughly one fifth of food produced in the European Union is wasted, with households responsible for more than half of the total. Campaigns encouraging consumers to plan purchases have had modest effects, so attention is shifting to structural measures: clearer date labelling, since many consumers discard safe food once the 'best before' date passes, and redistribution rules that make it easier for retailers to donate unsold products. Legally binding reduction targets are under discussion, which would oblige member states to measure waste consistently.",
    "q": "Which of the following statements is correct based only on the passage?",
    "options": [
      "Households account for more than half of the EU's food waste.",
      "Consumer campaigns have proved highly effective.",
      "Food past its 'best before' date is unsafe to eat.",
      "Legally binding reduction targets are already in force."
    ],
    "a": 0,
    "expl": "Households cause 'more than half' of waste. Campaigns had 'modest effects'; the passage implies best-before food can be safe; binding targets are 'under discussion', not in force."
  },
  {
    "id": "vr20",
    "passage": "Telemedicine consultations surged during the pandemic and have remained common for follow-up appointments, prescription renewals and mental health support. Doctors report that video consultations work poorly for first visits, where physical examination often changes the diagnosis. Reimbursement rules now vary widely: some health systems pay video and in-person visits equally, while others reimburse remote care at lower rates, which practices cite as the main obstacle to offering it. Rural patients, who travel furthest, report the highest satisfaction with remote care.",
    "q": "Which of the following statements is correct based only on the passage?",
    "options": [
      "Practices cite lower reimbursement rates as the main obstacle to offering remote care.",
      "Doctors consider video consultations ideal for first visits.",
      "Telemedicine use returned to pre-pandemic levels.",
      "Urban patients report the highest satisfaction with remote care."
    ],
    "a": 0,
    "expl": "Where remote care is reimbursed at lower rates, practices call this 'the main obstacle'. Video works 'poorly' for first visits; use 'remained common'; RURAL patients are most satisfied."
  },
  {
    "id": "vr21",
    "passage": "Museums digitising their collections put millions of artworks online, yet digitisation is not primarily about public access. Curators note that high-resolution imaging reveals details invisible to visitors, supports conservation by documenting an object's state, and allows researchers worldwide to compare works without travel. The costs are substantial — photography, storage and cataloguing metadata — and smaller museums often lack the staff, so national platforms increasingly pool infrastructure. Public engagement online, meanwhile, tends to concentrate on a tiny fraction of famous works.",
    "q": "Which of the following statements is correct based only on the passage?",
    "options": [
      "Online public engagement concentrates on a small fraction of famous works.",
      "Digitisation's primary purpose is public access.",
      "Digitisation is inexpensive once photography is done.",
      "Smaller museums generally run their own digitisation platforms."
    ],
    "a": 0,
    "expl": "Engagement 'tends to concentrate on a tiny fraction of famous works'. The passage explicitly says digitisation is NOT primarily about access, costs are 'substantial', and smaller museums pool national infrastructure."
  },
  {
    "id": "vr22",
    "passage": "Southern Europe's reservoirs are increasingly stressed by longer droughts, and agriculture, which uses the majority of extracted water in the region, faces growing restrictions. Drip irrigation can cut water use per hectare sharply, but researchers observe a rebound effect: farmers who save water per hectare sometimes expand irrigated area or switch to thirstier, more profitable crops, leaving total extraction unchanged. For this reason, hydrologists argue that efficiency subsidies should be paired with enforceable caps on total water abstraction.",
    "q": "Which of the following statements is correct based only on the passage?",
    "options": [
      "Hydrologists argue that efficiency subsidies should be combined with caps on total water abstraction.",
      "Drip irrigation always reduces total water extraction.",
      "Agriculture uses a minority of extracted water in southern Europe.",
      "Farmers who adopt drip irrigation never change their crops."
    ],
    "a": 0,
    "expl": "Because of the rebound effect, efficiency gains per hectare don't guarantee lower totals — hence the call to pair subsidies with caps. Agriculture uses 'the majority' of water."
  },
  {
    "id": "vr23",
    "passage": "Employers increasingly use software to screen job applications before a human sees them. Vendors claim the tools reduce bias by applying identical criteria to every CV, but audits have found that systems trained on past hiring decisions can reproduce the very patterns they were meant to remove. European legislation now classifies recruitment algorithms as high-risk, requiring documentation, human oversight and bias testing. Several large employers responded by simplifying their tools, reasoning that transparent keyword rules are easier to audit than complex models.",
    "q": "Which of the following statements is correct based only on the passage?",
    "options": [
      "Audits found that systems trained on past hiring decisions can reproduce existing biases.",
      "European legislation bans recruitment algorithms outright.",
      "Vendors admit their tools increase bias.",
      "Complex models are easier to audit than keyword rules."
    ],
    "a": 0,
    "expl": "Training on past decisions can 'reproduce the very patterns they were meant to remove'. The law classifies such tools as high-risk (not banned); vendors CLAIM bias reduction; keyword rules are described as easier to audit."
  },
  {
    "id": "vr24",
    "passage": "The number of tracked objects orbiting Earth has multiplied with the launch of large satellite constellations. Collisions are rare, but each one creates thousands of fragments that stay in orbit for years, raising the risk of further impacts. Operators of large constellations now design satellites to deorbit within a few years of ending service, and space agencies are testing missions to capture derelict objects. Experts stress, however, that removing a handful of large defunct satellites would do more to stabilise the debris environment than capturing many small fragments.",
    "q": "Which of the following statements is correct based only on the passage?",
    "options": [
      "Experts say removing a few large defunct satellites would help more than capturing many small fragments.",
      "Collisions in orbit are frequent events.",
      "Debris fragments fall back to Earth within days.",
      "Capture missions for derelict objects are already routine."
    ],
    "a": 0,
    "expl": "Removing 'a handful of large defunct satellites would do more'. Collisions are 'rare', fragments stay up 'for years', and capture missions are being 'tested', not routine."
  },
  {
    "id": "vr25",
    "passage": "Chronic exposure to traffic noise is associated with elevated risks of hypertension and heart disease, and the World Health Organization ranks it among the most harmful environmental exposures in Europe after air pollution. Cities have experimented with quieter road surfaces, lower night-time speed limits and continuous noise monitoring. Quiet asphalt loses part of its acoustic benefit within several years as its pores clog, so engineers see it as a complement to, rather than a substitute for, measures that reduce traffic volume itself.",
    "q": "Which of the following statements is correct based only on the passage?",
    "options": [
      "Quiet asphalt loses part of its acoustic benefit over time as its pores clog.",
      "Traffic noise is ranked as more harmful than air pollution in Europe.",
      "Quiet road surfaces make traffic-reduction measures unnecessary.",
      "Noise exposure has no proven link to cardiovascular disease."
    ],
    "a": 0,
    "expl": "The clogging effect is stated directly. Noise ranks among the most harmful exposures AFTER air pollution, and quiet asphalt is 'a complement to, rather than a substitute for' traffic reduction."
  },
  {
    "id": "vr26",
    "passage": "Vertical farms grow vegetables in stacked indoor layers under artificial light, using a small fraction of the land and water of field agriculture and no pesticides. Their economics, however, are dominated by electricity: lighting and climate control account for the majority of operating costs, which is why most commercially viable operations focus on fast-growing, high-value crops such as herbs and salad greens. Staple crops like wheat remain far from profitable indoors, and several heavily funded start-ups collapsed when energy prices rose.",
    "q": "Which of the following statements is correct based only on the passage?",
    "options": [
      "Most viable vertical farms focus on fast-growing, high-value crops such as herbs and salads.",
      "Vertical farms use more water than field agriculture.",
      "Growing wheat indoors is close to profitability.",
      "Energy costs are a minor part of vertical farms' operating expenses."
    ],
    "a": 0,
    "expl": "High-value fast crops dominate because electricity is 'the majority of operating costs'. Water use is a 'small fraction' of field farming's; wheat is 'far from profitable' indoors."
  },
  {
    "id": "vr27",
    "passage": "Some historic city centres now receive more day visitors than they have residents. Local governments have introduced tourist taxes, caps on short-term rentals and timed entry for the most crowded sites. Evidence on these tools is mixed: taxes raise revenue but rarely reduce arrivals at typical rates, while rental caps appear to slow the conversion of housing into visitor accommodation in the neighbourhoods where they are enforced. Officials increasingly frame the goal as managing flows — spreading visitors over time and space — rather than reducing overall numbers.",
    "q": "Which of the following statements is correct based only on the passage?",
    "options": [
      "Tourist taxes raise revenue but rarely reduce visitor arrivals at typical rates.",
      "Rental caps have proved ineffective everywhere.",
      "Officials mainly aim to cut total visitor numbers.",
      "Timed entry systems have been abandoned."
    ],
    "a": 0,
    "expl": "Taxes 'raise revenue but rarely reduce arrivals'. Rental caps 'appear to slow' conversion where enforced; the framed goal is managing flows, 'rather than reducing overall numbers'."
  },
  {
    "id": "vr28",
    "passage": "Although most plastic packaging is technically recyclable, actual recycling rates remain far lower than collection rates suggest. Mixed and multi-layer materials are costly to separate, and recycled plastic often competes with cheap virgin plastic, undermining the business case. Regulators are therefore moving beyond collection targets: minimum recycled-content requirements create guaranteed demand, while design rules push producers toward single-material packaging that sorting plants can actually process. Industry groups broadly support recycled-content mandates but warn that food-grade recycled plastic remains in short supply.",
    "q": "Which of the following statements is correct based only on the passage?",
    "options": [
      "Minimum recycled-content requirements are intended to create guaranteed demand for recycled plastic.",
      "Collection rates equal actual recycling rates.",
      "Industry groups oppose recycled-content mandates outright.",
      "Multi-layer packaging is the easiest to recycle."
    ],
    "a": 0,
    "expl": "Recycled-content rules 'create guaranteed demand'. Recycling rates are 'far lower' than collection suggests; industry 'broadly supports' mandates while warning of supply; multi-layer materials are 'costly to separate'."
  },
  {
    "id": "vr29",
    "passage": "Platform work — delivering meals or driving passengers through an app — offers flexible hours but often without the protections of employment. Court rulings across Europe have repeatedly reclassified individual platform workers as employees, yet outcomes differ by country and platform, creating legal uncertainty. New EU rules introduce a presumption of employment when a platform exercises control, shifting the burden of proof: instead of workers having to demonstrate that they are employees, platforms must demonstrate that the workers are genuinely self-employed.",
    "q": "Which of the following statements is correct based only on the passage?",
    "options": [
      "Under the new rules, platforms must prove that workers are genuinely self-employed.",
      "All platform workers in Europe are now employees.",
      "Court rulings on platform work have been identical across countries.",
      "The new rules abolish flexible working hours."
    ],
    "a": 0,
    "expl": "The burden of proof shifts to platforms where control is exercised. Reclassification happened in individual cases with outcomes that 'differ by country'; nothing says all workers become employees."
  },
  {
    "id": "vr30",
    "passage": "Forest fires in Mediterranean Europe are becoming more intense, and researchers attribute this less to ignition — most fires are still started by people — than to fuel accumulation: as rural populations declined, grazing and firewood collection stopped clearing undergrowth. Massive investment in firefighting aircraft has not reduced burned areas over the long term, leading agencies to redirect funds toward prevention: prescribed burns, grazing corridors and discontinuities in vegetation that slow a fire's spread. Such measures are cheaper but politically harder, because their benefits are invisible until a fire arrives.",
    "q": "Which of the following statements is correct based only on the passage?",
    "options": [
      "Prevention measures are cheaper than aerial firefighting but politically harder to sustain.",
      "Most Mediterranean fires start naturally.",
      "Investment in aircraft has steadily reduced burned areas.",
      "Rural population growth has increased fuel accumulation."
    ],
    "a": 0,
    "expl": "Prevention is 'cheaper but politically harder' because benefits are invisible. Most fires are 'started by people'; aircraft investment 'has not reduced burned areas'; rural DECLINE drove fuel accumulation."
  },
  {
    "id": "vr31",
    "passage": "Wild pollinator populations are declining in much of Europe, with consequences beyond honey: a substantial share of crop production depends at least partly on insect pollination. Managed honeybee hives cannot fully substitute for wild species, which fly in colder weather and pollinate certain plants more effectively. Agri-environment schemes now pay farmers to plant flower strips along field edges; monitoring shows they increase pollinator abundance locally, though effects on population trends at national scale have not yet been demonstrated.",
    "q": "Which of the following statements is correct based only on the passage?",
    "options": [
      "Flower strips increase pollinator abundance locally, but national-scale effects are not yet demonstrated.",
      "Managed honeybees can fully replace wild pollinators.",
      "Wild pollinators cannot fly in cold weather.",
      "Crop production in Europe does not depend on insect pollination."
    ],
    "a": 0,
    "expl": "Local increases are shown; national trends 'have not yet been demonstrated'. Honeybees 'cannot fully substitute' for wild species, which fly in COLDER weather."
  },
  {
    "id": "vr32",
    "passage": "Engineered timber strong enough for high-rise construction has renewed interest in wooden buildings, which store carbon and are faster to assemble than concrete structures because elements arrive prefabricated. Insurers initially charged higher premiums, citing fire risk, although laboratory tests show that thick timber panels char on the surface while retaining structural integrity longer than unprotected steel. Building codes in several countries now permit timber buildings above ten storeys, and the constraint has shifted to supply: certified structural timber remains scarcer than demand.",
    "q": "Which of the following statements is correct based only on the passage?",
    "options": [
      "In tests, thick timber panels char at the surface while keeping structural integrity longer than unprotected steel.",
      "Timber high-rises remain illegal everywhere.",
      "Timber buildings are slower to assemble than concrete ones.",
      "Certified structural timber is abundant relative to demand."
    ],
    "a": 0,
    "expl": "The charring behaviour is stated directly. Codes in several countries now PERMIT tall timber buildings; assembly is FASTER; certified timber is 'scarcer than demand'."
  },
  {
    "id": "vr33",
    "passage": "Although cash payments are declining across Europe, central banks insist that cash must remain available and accepted. Their argument is partly about inclusion — some consumers cannot or prefer not to use digital payments — and partly about resilience: cash works during power cuts and network outages. Several countries have introduced rules requiring shops to accept cash or obliging banks to maintain minimum ATM coverage. Meanwhile, payment habits differ sharply between member states, with cash still used for most point-of-sale transactions in some and a small minority in others.",
    "q": "Which of the following statements is correct based only on the passage?",
    "options": [
      "Central banks defend cash partly because it works during power cuts and network outages.",
      "Cash use is uniform across European countries.",
      "All European countries oblige shops to accept cash.",
      "Central banks want to phase out cash."
    ],
    "a": 0,
    "expl": "Resilience during outages is one of the two stated arguments. Habits 'differ sharply' between states; only 'several countries' introduced acceptance rules; central banks INSIST cash remain available."
  },
  {
    "id": "vr34",
    "passage": "Europe's population is ageing, and public pension systems that pay current retirees from current workers' contributions face a shrinking ratio of contributors to beneficiaries. Governments have responded by linking retirement ages to life expectancy, encouraging private saving, and trying to raise employment among older workers. Economists point out that the third lever is often underestimated: raising the actual age at which people stop working matters more than the legal retirement age, since many leave the labour market early through unemployment or disability schemes.",
    "q": "Which of the following statements is correct based only on the passage?",
    "options": [
      "Economists argue that the actual exit age from work matters more than the legal retirement age.",
      "Pay-as-you-go pensions are financed from accumulated reserves.",
      "The ratio of contributors to beneficiaries is rising.",
      "Most workers stay employed until the legal retirement age."
    ],
    "a": 0,
    "expl": "The actual stopping age 'matters more than the legal retirement age' because many exit early. Pay-as-you-go systems pay retirees 'from current workers' contributions', and the contributor ratio is SHRINKING."
  },
  {
    "id": "vr35",
    "passage": "Microplastics have been detected in rivers, soils, drinking water and human tissue, but measuring their health effects is difficult: particles vary enormously in size, shape and chemical composition, and no standard method exists for counting them. Toxicologists caution that detecting particles is not the same as demonstrating harm, while also noting that absence of evidence partly reflects how recently the field emerged. Regulators have begun acting on the precautionary principle, banning intentionally added microplastics in products such as cosmetics.",
    "q": "Which of the following statements is correct based only on the passage?",
    "options": [
      "Regulators have banned intentionally added microplastics in products such as cosmetics.",
      "A standard method for counting microplastics has existed for decades.",
      "Detecting particles in tissue proves they cause harm.",
      "Toxicologists say the health question is fully settled."
    ],
    "a": 0,
    "expl": "The cosmetics ban is stated as a precautionary action. 'No standard method exists'; detection 'is not the same as demonstrating harm'; the field is described as young, not settled."
  },
  {
    "id": "vr36",
    "passage": "Car-sharing services promised to reduce urban car ownership, and studies in several cities find that each shared vehicle replaces several private cars — but the effect depends heavily on the service model. Station-based systems, where cars must be returned to fixed spots, show the strongest substitution of ownership. Free-floating services are used more spontaneously and can compete with public transport for short trips rather than with private cars. City governments have started differentiating parking privileges accordingly.",
    "q": "Which of the following statements is correct based only on the passage?",
    "options": [
      "Station-based car-sharing shows stronger substitution of car ownership than free-floating services.",
      "Free-floating services mainly replace privately owned cars.",
      "Car-sharing has identical effects regardless of service model.",
      "Cities grant the same parking privileges to all car-sharing models."
    ],
    "a": 0,
    "expl": "Station-based systems 'show the strongest substitution of ownership', while free-floating can compete with public transport; cities have 'started differentiating' privileges."
  },
  {
    "id": "vr37",
    "passage": "Healthy soils store carbon, retain water and sustain yields, yet a large share of European agricultural soils are considered degraded. Compaction from heavy machinery, loss of organic matter and erosion develop slowly, which makes the damage easy to ignore until yields fall. Practices such as cover crops and reduced tillage can rebuild organic matter, but their benefits take years to materialise while the costs are immediate — one reason adoption remains limited without financial incentives. A proposed EU soil monitoring law would first establish common indicators, since member states currently measure soil health differently.",
    "q": "Which of the following statements is correct based only on the passage?",
    "options": [
      "Adoption of soil-restoring practices is limited partly because costs are immediate while benefits take years.",
      "Soil degradation happens suddenly and is easy to notice.",
      "Member states already measure soil health identically.",
      "Cover crops deliver their full benefits within one season."
    ],
    "a": 0,
    "expl": "The cost-benefit timing mismatch is the stated reason adoption 'remains limited without financial incentives'. Degradation develops 'slowly'; states measure soil health 'differently'."
  },
  {
    "id": "vr38",
    "passage": "Artificial light at night has increased steadily, eroding the visibility of stars and disturbing nocturnal wildlife, from insects to migrating birds. Municipalities switching to LED street lighting cut energy costs but sometimes worsen light pollution, because cheap LEDs emit blue-rich light that scatters more in the atmosphere. Dark-sky advocates therefore push for warmer color temperatures, full shielding that directs light downward, and dimming schedules — measures that, unusually for environmental policy, tend to save money rather than cost it.",
    "q": "Which of the following statements is correct based only on the passage?",
    "options": [
      "Dark-sky measures such as shielding and dimming tend to save municipalities money.",
      "LED street lighting always reduces light pollution.",
      "Blue-rich light scatters less in the atmosphere.",
      "Light pollution affects only star visibility, not wildlife."
    ],
    "a": 0,
    "expl": "The measures 'tend to save money rather than cost it'. LEDs 'sometimes worsen' pollution because blue-rich light scatters MORE; wildlife from insects to birds is affected."
  },
  {
    "id": "vr39",
    "passage": "Apprenticeship systems that combine paid workplace training with classroom instruction are credited with low youth unemployment in several countries. Attempts to transplant the model elsewhere have had mixed results: it depends on employers willing to train beyond their immediate needs, on trusted qualifications recognised across firms, and on social acceptance of vocational routes as equal in status to universities. Where academic tracks carry much higher prestige, expanding apprenticeship places has often proved easier than filling them.",
    "q": "Which of the following statements is correct based only on the passage?",
    "options": [
      "Where academic routes have higher prestige, filling apprenticeship places can be harder than creating them.",
      "The apprenticeship model transfers easily to any country.",
      "Apprentices receive no payment during workplace training.",
      "Apprenticeships require no employer involvement."
    ],
    "a": 0,
    "expl": "'Expanding apprenticeship places has often proved easier than filling them.' Transplants had 'mixed results'; training is PAID; employers' willingness to train is a core condition."
  },
  {
    "id": "vr40",
    "passage": "Desalination provides a growing share of drinking water in water-scarce coastal regions. Modern reverse-osmosis plants use far less energy than older thermal technology, yet energy still dominates operating costs, tying the price of water to electricity markets. The concentrated brine returned to the sea can harm local ecosystems if poorly dispersed, which is why permits increasingly require diffuser systems and monitoring. Inland regions benefit little, since pumping desalinated water uphill over long distances often costs more than the desalination itself.",
    "q": "Which of the following statements is correct based only on the passage?",
    "options": [
      "Transporting desalinated water uphill to inland regions often costs more than desalinating it.",
      "Modern desalination uses more energy than older thermal plants.",
      "Brine discharge is harmless to marine ecosystems.",
      "The price of desalinated water is independent of electricity prices."
    ],
    "a": 0,
    "expl": "Pumping inland 'often costs more than the desalination itself'. Reverse osmosis uses 'far less' energy than thermal; brine 'can harm' ecosystems; water price is tied to electricity markets."
  },
  {
    "id": "vr41",
    "passage": "Handwriting instruction is shrinking in many school curricula as keyboards dominate daily life. Cognitive scientists urge caution: in experiments, children who learn letters by writing them by hand recognise those letters faster than children who learn by typing, and university students who take handwritten notes tend to paraphrase, which is associated with better retention of concepts than the verbatim transcription typing encourages. None of this settles how much handwriting practice is enough, a question the studies were not designed to answer.",
    "q": "Which of the following statements is correct based only on the passage?",
    "options": [
      "Handwritten note-taking encourages paraphrasing, which is associated with better retention of concepts.",
      "The studies establish exactly how much handwriting practice children need.",
      "Typing has been shown to improve letter recognition in children.",
      "Cognitive scientists recommend removing handwriting from curricula."
    ],
    "a": 0,
    "expl": "Handwriting notes → paraphrasing → better conceptual retention. The studies 'were not designed to answer' how much practice is enough; hand-writing children recognise letters faster."
  },
  {
    "id": "vr42",
    "passage": "Insurers are quietly redrawing flood-risk maps as extreme rainfall becomes more frequent. In some river basins, premiums for homes that have never flooded have risen sharply because new models rate their future risk highly. Consumer groups complain that homeowners cannot verify the models behind their premiums, while insurers respond that publishing full model details would allow competitors to copy years of proprietary work. Several regulators now require insurers to disclose at least the main factors driving individual risk scores.",
    "q": "Which of the following statements is correct based only on the passage?",
    "options": [
      "Premiums have risen for some homes that have never flooded, because models rate their future risk highly.",
      "Only homes with a history of flooding face higher premiums.",
      "Insurers have published their full flood models.",
      "Regulators forbid disclosing risk factors to homeowners."
    ],
    "a": 0,
    "expl": "Never-flooded homes can still be re-rated by forward-looking models. Insurers resist FULL disclosure; several regulators require disclosing the MAIN factors."
  },
  {
    "id": "vr43",
    "passage": "The revival of night trains in Europe faces a practical constraint that enthusiasm cannot remove: rolling stock. Sleeper carriages are a niche product, ordered in small series, and the few manufacturers that build them quote delivery times of several years. Operators that announced new routes have sometimes had to postpone launches or run daytime carriages with reclining seats instead of beds. Public funding has therefore started to target carriage procurement itself, on the reasoning that routes can be opened quickly once vehicles exist.",
    "q": "Which of the following statements is correct based only on the passage?",
    "options": [
      "Some operators postponed launches or substituted daytime carriages because sleeper carriages were unavailable.",
      "Sleeper carriages are mass-produced with short delivery times.",
      "Public funding for night trains avoids rolling stock on principle.",
      "Enthusiasm for night trains has eliminated practical constraints."
    ],
    "a": 0,
    "expl": "Postponements and seat-only substitutions are stated directly. Carriages are 'ordered in small series' with multi-year delivery; funding now targets procurement."
  },
  {
    "id": "vr44",
    "passage": "A growing number of employers offer 'workcations', letting staff work remotely from holiday destinations for limited periods. Tax advisers warn that the practice is legally more complicated than it looks: an employee working from another country for long enough can create tax obligations for the employer there, and social security coverage depends on bilateral rules that differ by country pair. Larger firms have responded with formal policies capping foreign remote work at a set number of days and restricting it to approved countries.",
    "q": "Which of the following statements is correct based only on the passage?",
    "options": [
      "Extended remote work from another country can create tax obligations for the employer there.",
      "Workcations have no legal implications for employers.",
      "Social security rules for cross-border remote work are identical everywhere.",
      "Larger firms ban all remote work from abroad."
    ],
    "a": 0,
    "expl": "The employer-side tax risk is stated. Social security 'depends on bilateral rules that differ'; large firms CAP and restrict foreign remote work rather than banning it."
  },
  {
    "id": "vr45",
    "passage": "Community energy cooperatives, in which residents jointly own solar panels or a wind turbine, are spreading unevenly across Europe. Where grid operators offer simple connection procedures and feed-in revenues are predictable, cooperatives multiply; where administrative steps take years, they remain rare regardless of public enthusiasm. Researchers studying the movement note a further pattern: cooperatives founded by experienced volunteers from earlier projects grow faster, suggesting that expertise, not only capital, constrains the model's expansion.",
    "q": "Which of the following statements is correct based only on the passage?",
    "options": [
      "Researchers suggest that expertise, not only capital, constrains the growth of energy cooperatives.",
      "Public enthusiasm guarantees cooperative growth even amid slow administration.",
      "Cooperatives spread evenly across all European countries.",
      "Grid connection procedures are irrelevant to cooperative formation."
    ],
    "a": 0,
    "expl": "Experienced founders → faster growth → 'expertise, not only capital, constrains'. Slow procedures keep cooperatives rare 'regardless of public enthusiasm'."
  },
  {
    "id": "vr46",
    "passage": "Large language models can draft legal documents in seconds, and several law firms now use them for first versions of routine contracts. Bar associations have issued guidance rather than bans: lawyers remain fully responsible for what they file, must verify citations — models have been known to invent plausible-looking case references — and must protect client confidentiality when using external tools. Insurance data will eventually show whether drafting errors rise or fall, but such evidence takes years to accumulate.",
    "q": "Which of the following statements is correct based only on the passage?",
    "options": [
      "Bar associations issued guidance making lawyers fully responsible for verifying model output.",
      "Bar associations have banned the use of language models in law firms.",
      "Insurance data has already proven that drafting errors fall with AI use.",
      "Language models never invent case references."
    ],
    "a": 0,
    "expl": "Guidance 'rather than bans', with responsibility and citation-checking on the lawyer. Models 'have been known to invent' references; insurance evidence 'takes years'."
  },
  {
    "id": "vr47",
    "passage": "Reintroducing beavers has become a popular river-restoration tool: their dams slow water flow, creating wetlands that store water in droughts and buffer floods downstream. Conflicts arise where dams flood farmland or block fish passage, and management now focuses on coexistence — flow devices that regulate pond height, compensation for damaged crops, and relocation as a last resort. Long-term studies indicate that catchments with beavers show more stable summer water levels than comparable catchments without them.",
    "q": "Which of the following statements is correct based only on the passage?",
    "options": [
      "Catchments with beavers show more stable summer water levels than comparable ones without them.",
      "Beaver dams accelerate water flow downstream.",
      "Relocation is the first management response to conflicts.",
      "Beaver reintroduction causes no conflicts with farming."
    ],
    "a": 0,
    "expl": "The long-term finding on stable summer levels is stated. Dams SLOW flow; relocation is 'a last resort'; flooding farmland is a named conflict."
  },
  {
    "id": "vr48",
    "passage": "Volunteer fire brigades form the backbone of rural emergency response in several member states, but their membership is ageing. Recruitment campaigns aimed at young adults have had limited success, which officers attribute to commuting: many residents now work far from where they live and simply cannot respond to daytime alarms. Some municipalities have begun recruiting employees of local businesses with their employers' agreement, compensating the firms for hours lost — an arrangement that has measurably improved daytime response in pilot areas.",
    "q": "Which of the following statements is correct based only on the passage?",
    "options": [
      "Compensating local employers for lost hours has measurably improved daytime response in pilot areas.",
      "Recruitment campaigns aimed at young adults solved the staffing problem.",
      "Commuting has no effect on volunteers' availability.",
      "Volunteer brigades are being replaced by professional ones."
    ],
    "a": 0,
    "expl": "The employer-compensation pilots 'measurably improved daytime response'. Youth campaigns had 'limited success' precisely because commuters can't attend daytime alarms."
  },
  {
    "id": "vr49",
    "passage": "Repair cafés, where volunteers fix broken household items for free, have grown from a handful to thousands of locations. Their direct effect on waste volumes is small — a few tonnes per café annually at best — but advocates argue their real value lies elsewhere: data collected on common failures feeds into campaigns for better product design, and visitors report greater willingness to attempt repairs themselves afterwards. New EU right-to-repair rules, requiring spare parts to remain available for years, address one of the barriers cafés most frequently document.",
    "q": "Which of the following statements is correct based only on the passage?",
    "options": [
      "Advocates locate the cafés' main value in design campaigns and changed visitor behaviour rather than waste volumes.",
      "Repair cafés divert large volumes of waste directly.",
      "Visitors become less willing to repair items themselves.",
      "EU rules ignore the availability of spare parts."
    ],
    "a": 0,
    "expl": "Direct waste impact is 'small'; the argued value is failure data for design campaigns plus visitors' increased willingness to repair. The EU rules require spare-part availability."
  },
  {
    "id": "vr50",
    "passage": "Sports federations are experimenting with biological passports, which track an athlete's blood values over time instead of testing for specific substances. The approach flags abnormal variations that indirect doping methods produce, and it has led to sanctions where no banned substance was ever detected. Defence lawyers counter that medical conditions and altitude training can also shift blood values, so passport cases rely on expert panels to exclude innocent explanations — a process athletes' unions criticise as slow and opaque.",
    "q": "Which of the following statements is correct based only on the passage?",
    "options": [
      "Biological passports have led to sanctions even where no banned substance was detected.",
      "Passports test directly for banned substances.",
      "Altitude training cannot affect blood values.",
      "Athletes' unions praise the speed of passport proceedings."
    ],
    "a": 0,
    "expl": "Sanctions followed 'where no banned substance was ever detected'. Passports track values over time (not substances); altitude training CAN shift values; unions criticise the process as 'slow and opaque'."
  },
  {
    "id": "vr101",
    "passage": "Exchange programmes allow students to spend part of their degree at a university in another country. Participation has grown, yet it remains socially uneven: surveys in several member states find that students whose parents hold university degrees are considerably more likely to take part, partly because grants rarely cover the full cost of living abroad. Shorter formats lasting a few weeks were introduced to widen access, and early data suggest that they attract a more varied intake. Recognition of credits earned abroad is automatic between most partner institutions, although delays persist at some universities.",
    "q": "Which of the following statements is correct based only on the passage?",
    "options": [
      "Grants cover the full cost of living abroad for participating students.",
      "Recognition of credits earned abroad is automatic at every institution.",
      "Shorter exchange formats appear to attract a more varied intake of students.",
      "Students whose parents hold university degrees are less likely to take part."
    ],
    "a": 2,
    "expl": "The passage states that early data suggest the short formats attract a more varied intake. Grants rarely cover the full cost, delays persist at some institutions, and graduates' children are more, not less, likely to participate."
  },
  {
    "id": "vr102",
    "passage": "National electronic identity schemes let citizens log into public services with a single credential. Adoption varies widely: in some member states most adults use an eID at least once a year, while in others uptake stays in the low single digits, often because few services accept the credential. Cross-border recognition is legally required for notified schemes, yet administrations sometimes ask foreign users for documents their own systems cannot issue. Studies indicate that usage tends to rise sharply once services such as tax declarations or health records can be reached with the same credential.",
    "q": "Which of the following statements is correct based only on the passage?",
    "options": [
      "Cross-border recognition of notified schemes is optional for member states.",
      "Most adults in every member state use an eID at least once a year.",
      "Low uptake is explained mainly by citizens distrusting digital services.",
      "Usage tends to rise sharply once major services can be accessed with the same credential."
    ],
    "a": 3,
    "expl": "The passage says studies indicate usage rises sharply once tax or health services accept the credential. Recognition is legally required for notified schemes, high use applies only to some states, and distrust is never mentioned as a cause."
  },
  {
    "id": "vr103",
    "passage": "Public authorities buy a large share of goods and services through formal tender procedures. Small firms win a smaller proportion of contracts than their weight in the economy would suggest, and studies point to documentation requirements and bundled lot sizes rather than uncompetitive pricing as the main obstacles. Several administrations have responded by splitting contracts into smaller lots and accepting self-declarations at application stage, with full evidence required only from the winning bidder. Where these measures were introduced, the number of bids per tender has often increased, although the effect on final prices is not yet clear.",
    "q": "Which of the following statements is correct based only on the passage?",
    "options": [
      "Where lots were split and self-declarations accepted, the number of bids per tender has often increased.",
      "Small firms lose contracts mainly because their prices are uncompetitive.",
      "Every applicant must supply full documentary evidence when applying.",
      "The measures have been shown to reduce final contract prices."
    ],
    "a": 0,
    "expl": "The passage reports that bids per tender have often increased where the measures were applied. Pricing is explicitly ruled out as the main obstacle, full evidence is required only from the winner, and the price effect is described as not yet clear."
  },
  {
    "id": "vr104",
    "passage": "Traditional censuses count the population through questionnaires distributed to every household. A growing number of countries now compile census statistics from administrative registers instead, combining population, tax and dwelling records. The approach is considerably cheaper and can be repeated annually, but it depends on registers whose definitions were designed for other purposes, and people who move without notifying the authorities may remain recorded at an old address. Statistical offices therefore run sample surveys alongside the registers to estimate and correct such errors, and results are usually published with explicit quality indicators.",
    "q": "Which of the following statements is correct based only on the passage?",
    "options": [
      "Register-based methods remove the need for any survey work.",
      "Register-based censuses rely on records originally designed for other purposes.",
      "Register-based censuses cost more than questionnaire censuses.",
      "Everyone recorded at an address in a register actually lives there."
    ],
    "a": 1,
    "expl": "The passage states that the approach depends on registers whose definitions were designed for other purposes. Sample surveys are still run alongside, the method is cheaper rather than dearer, and people who move may remain recorded at an old address."
  },
  {
    "id": "vr105",
    "passage": "Gross domestic product measures the value of goods and services produced, and it was never intended as a measure of welfare. Statistical offices increasingly publish complementary indicators covering health, education, income distribution and environmental pressure. Such dashboards avoid the loss of information that a single composite figure entails, but they make comparison harder, since countries rarely rank consistently across all dimensions. Most offices present the dashboards alongside GDP rather than as a replacement, and note that some elements, such as unpaid household work, remain outside both frameworks.",
    "q": "Which of the following statements is correct based only on the passage?",
    "options": [
      "Dashboards of wellbeing indicators have replaced GDP in most statistical offices.",
      "GDP was originally designed as a measure of welfare.",
      "Countries rarely rank consistently across all the dimensions covered by such dashboards.",
      "Unpaid household work is captured by the complementary indicators."
    ],
    "a": 2,
    "expl": "The passage says comparison is harder because countries rarely rank consistently across all dimensions. Dashboards are published alongside GDP, GDP was never intended as a welfare measure, and unpaid household work lies outside both frameworks."
  },
  {
    "id": "vr106",
    "passage": "Statutory minimum wages exist in most member states, while a few rely on collective agreements to set pay floors. Research on employment effects has shifted: moderate increases from low levels are generally found to have small effects on total employment, whereas evidence on large increases is thinner and more contested. An EU directive requires adequate minimum wages and promotes collective bargaining coverage, but it does not impose a common level or oblige countries without statutory minima to introduce one. Enforcement capacity varies, and undeclared work limits the reach of any legal floor.",
    "q": "Which of the following statements is correct based only on the passage?",
    "options": [
      "Every member state has a statutory minimum wage.",
      "Research shows that large minimum wage increases clearly reduce employment.",
      "Moderate increases from low levels typically cause large job losses.",
      "The directive neither fixes a common wage level nor forces countries without statutory minima to create one."
    ],
    "a": 3,
    "expl": "The passage states that the directive does not impose a common level or oblige countries without statutory minima to introduce one. A few states rely on collective agreements, evidence on large increases is thin and contested, and moderate increases are found to have small effects."
  },
  {
    "id": "vr107",
    "passage": "Long-term unemployment, usually defined as being out of work for more than a year, tends to fall more slowly than overall unemployment when an economy recovers. Employers often treat long gaps in a curriculum vitae as a signal of low productivity, and skills that are not used may erode. Programmes combining individual case management with subsidised work placements show better results in evaluations than either component used alone, though they are costly per participant. Where caseloads per counsellor are high, the individualised element is frequently reduced to short standardised interviews.",
    "q": "Which of the following statements is correct based only on the passage?",
    "options": [
      "Long-term unemployment falls faster than overall unemployment during a recovery.",
      "Programmes combining case management with subsidised placements perform better than either element alone.",
      "The combined programmes are inexpensive per participant.",
      "Employers read long gaps in a curriculum vitae as a sign of high productivity."
    ],
    "a": 1,
    "expl": "Evaluations show the combined approach outperforms either component alone. Long-term unemployment falls more slowly in a recovery, the programmes are described as costly per participant, and long gaps are read as a signal of low productivity."
  },
  {
    "id": "vr108",
    "passage": "European regional funds are allocated largely on the basis of income per head, so the poorest regions receive the largest amounts per inhabitant. Absorption, however, depends on administrative capacity: regions must design projects, run tenders and document spending, and several of the intended beneficiaries have the weakest administrations. Technical assistance is available, and simplified cost options reduce the paperwork attached to small projects. Evaluations find that the funds contribute most to growth where local institutions are already reasonably effective, which complicates the aim of helping the regions furthest behind.",
    "q": "Which of the following statements is correct based only on the passage?",
    "options": [
      "Allocation of regional funds is based mainly on administrative capacity.",
      "The poorest regions generally have the strongest administrations.",
      "No support is available to help regions cope with the paperwork.",
      "Funds contribute most to growth where local institutions are already reasonably effective."
    ],
    "a": 3,
    "expl": "Evaluations are said to find the strongest growth contribution where local institutions already work reasonably well. Allocation follows income per head, several intended beneficiaries have the weakest administrations, and technical assistance and simplified cost options exist."
  },
  {
    "id": "vr109",
    "passage": "Population projections are not forecasts but calculations of what would happen if stated assumptions about fertility, mortality and migration held. Over long horizons the migration assumption dominates the results for most European countries, because fertility changes slowly and mortality improvements are gradual. Statistical offices therefore publish several variants rather than a single number, and revise them every few years as observed flows depart from earlier assumptions. Users who quote only the central variant tend to present the projections as more certain than the offices themselves intend.",
    "q": "Which of the following statements is correct based only on the passage?",
    "options": [
      "Statistical offices publish several variants rather than one projected number.",
      "Population projections are forecasts of what will actually happen.",
      "Fertility assumptions dominate long-run results for most European countries.",
      "Projections are revised only when fertility patterns change."
    ],
    "a": 0,
    "expl": "The passage states that offices publish variants rather than a single number. Projections are explicitly not forecasts, migration rather than fertility dominates long horizons, and revisions occur every few years as observed flows diverge."
  },
  {
    "id": "vr110",
    "passage": "Childhood immunisation coverage is high in most European countries, but national averages conceal local pockets where uptake falls below the level needed to interrupt measles transmission. Registries that record vaccinations electronically make such pockets visible and allow reminders to be sent, and countries with complete registries generally detect gaps earlier than those relying on periodic surveys. Some states have made certain vaccines compulsory for school entry; coverage rose afterwards, though researchers caution that information campaigns and reminder systems were introduced at the same time, making the separate effect of the obligation hard to isolate.",
    "q": "Which of the following statements is correct based only on the passage?",
    "options": [
      "National averages accurately reflect coverage in every locality.",
      "Registries detect coverage gaps more slowly than periodic surveys.",
      "The separate effect of compulsory vaccination is hard to isolate because other measures came at the same time.",
      "Compulsory vaccination alone has been shown to raise coverage."
    ],
    "a": 2,
    "expl": "Researchers caution that simultaneous campaigns and reminders make the obligation's own effect hard to isolate. Averages conceal local pockets, registries detect gaps earlier than surveys, and the rise cannot be attributed to the obligation alone."
  },
  {
    "id": "vr111",
    "passage": "Countries differ in how consent to organ donation is expressed. Under opt-out systems everyone is presumed to consent unless registered otherwise, while opt-in systems require an explicit declaration. Donation rates are on average higher in opt-out countries, but the difference is smaller than the legal contrast suggests, because families are consulted in practice almost everywhere and their refusal usually stops the procedure. Comparative studies point to the number of trained transplant coordinators working in intensive care units as a stronger predictor of donation rates than the consent regime itself.",
    "q": "Which of the following statements is correct based only on the passage?",
    "options": [
      "Families are not consulted in opt-out countries.",
      "Opt-in countries record higher average donation rates than opt-out countries.",
      "The consent regime accounts for the whole difference in donation rates.",
      "Comparative studies find trained coordinators a stronger predictor of donation rates than the consent regime."
    ],
    "a": 3,
    "expl": "The passage names trained transplant coordinators as a stronger predictor than the consent regime. Families are consulted almost everywhere, opt-out countries have the higher average rates, and the legal difference explains less than it appears."
  },
  {
    "id": "vr112",
    "passage": "Blood services must match a perishable product to unpredictable demand: red cells keep for a few weeks and platelets for a matter of days. Donation follows seasonal patterns, falling during holiday periods and rising after publicised emergencies, when appeals sometimes bring in more donors than can be processed. Services therefore try to convert first-time donors into regular ones, since repeat donors can be scheduled in advance. Deferral criteria, which exclude donors on medical or travel grounds, are reviewed periodically, and several countries have narrowed criteria previously applied to broad groups.",
    "q": "Which of the following statements is correct based only on the passage?",
    "options": [
      "Platelets can be stored for several weeks.",
      "Blood services seek to turn first-time donors into regular ones because repeat donors can be scheduled.",
      "Emergency appeals always attract too few donors.",
      "Deferral criteria remain unchanged once they are set."
    ],
    "a": 1,
    "expl": "The passage gives schedulability of repeat donors as the reason for converting first-time donors. Platelets keep only days, appeals sometimes bring more donors than can be processed, and deferral criteria are reviewed periodically."
  },
  {
    "id": "vr113",
    "passage": "Waiting times for planned surgery vary widely between health systems and between hospitals within the same system. Adding operating capacity reduces lists only temporarily if referral rates rise in response, a pattern documented in several countries. Systems that centralise waiting lists across hospitals and offer patients an alternative provider with a shorter queue tend to cut average waits without extra capacity, although take-up depends on travel distance. Published waiting-time statistics are not always comparable, since some systems measure from referral and others from the decision to operate.",
    "q": "Which of the following statements is correct based only on the passage?",
    "options": [
      "Additional operating capacity permanently eliminates waiting lists.",
      "Centralised lists shorten waits regardless of how far patients must travel.",
      "Waiting times are broadly similar across hospitals within a system.",
      "Waiting-time statistics are not always comparable because systems begin counting at different points."
    ],
    "a": 3,
    "expl": "The passage says some systems measure from referral and others from the decision to operate, so figures are not always comparable. Extra capacity helps only temporarily, take-up of alternative providers depends on distance, and waits vary within systems as well as between them."
  },
  {
    "id": "vr114",
    "passage": "Health systems in several European countries recruit nurses trained abroad to fill vacancies. For destination countries the practice fills shifts quickly; for source countries, which financed the training, it can worsen shortages, particularly outside capital cities. A voluntary code of practice discourages active recruitment from countries with critical shortfalls, but it does not restrict individuals who move on their own initiative. Evidence suggests that retention measures in destination countries, such as manageable workloads and clear career progression, influence overall staffing more than the volume of international recruitment does.",
    "q": "Which of the following statements is correct based only on the passage?",
    "options": [
      "Retention measures appear to affect overall staffing more than the volume of international recruitment.",
      "The code of practice prevents nurses from moving on their own initiative.",
      "Source countries generally benefit from the departure of their nurses.",
      "The code of practice is legally binding on all countries."
    ],
    "a": 0,
    "expl": "The passage states that evidence points to retention measures mattering more than recruitment volumes. The code is voluntary and does not restrict individual moves, and departures can worsen shortages in source countries."
  },
  {
    "id": "vr115",
    "passage": "A disease is classified as rare in the European Union when it affects fewer than a set number of people relative to the population, yet the thousands of such conditions together concern millions of patients. Because trial populations are small, regulators may accept evidence from single-arm studies and require additional data collection after authorisation. Incentives such as extended market exclusivity have increased the number of authorised orphan medicines, though these remain concentrated in a few therapeutic areas, and diagnosis itself is often delayed by years.",
    "q": "Which of the following statements is correct based only on the passage?",
    "options": [
      "Rare diseases together affect only a small number of people.",
      "Regulators require randomised trials for every orphan medicine.",
      "Authorised orphan medicines remain concentrated in a few therapeutic areas.",
      "Diagnosis of a rare disease is usually immediate."
    ],
    "a": 2,
    "expl": "The passage states that authorised orphan medicines remain concentrated in a few therapeutic areas. Thousands of rare conditions together concern millions of patients, regulators may accept single-arm evidence, and diagnosis is often delayed by years."
  },
  {
    "id": "vr116",
    "passage": "Biosimilar medicines are versions of biological products approved after the reference product loses protection. They are not identical copies, since living cells produce them, so approval requires comparative studies rather than the simple bioequivalence testing used for chemical generics. Where several biosimilars compete, prices across the class typically fall, generating savings that some health systems reinvest in earlier treatment. Uptake differs markedly between countries and depends on prescriber confidence and on whether pharmacists may substitute at the counter, which is permitted in some systems and not in others.",
    "q": "Which of the following statements is correct based only on the passage?",
    "options": [
      "Biosimilars are identical copies of the reference product.",
      "Approval of a biosimilar requires comparative studies rather than simple bioequivalence testing.",
      "Pharmacist substitution of biosimilars is permitted throughout the European Union.",
      "Competition among biosimilars tends to push prices up."
    ],
    "a": 1,
    "expl": "The passage says approval requires comparative studies because biosimilars are not identical copies. Substitution is allowed in some systems only, and competition typically lowers prices across the class."
  },
  {
    "id": "vr117",
    "passage": "In several countries domestic wood burning contributes a larger share of fine particulate emissions than road traffic, a fact that surprises residents who associate air pollution mainly with vehicles. Modern stoves emit far less than open fireplaces or old appliances, but the improvement depends on dry fuel and correct operation, and damp wood can multiply the emissions of the same device. Some municipalities offer replacement subsidies and prohibit burning on days with poor dispersion. Because heating is also a question of cost, restrictions tend to meet resistance where wood is the cheapest available fuel.",
    "q": "Which of the following statements is correct based only on the passage?",
    "options": [
      "Road traffic is always the largest source of fine particulate emissions.",
      "Modern stoves emit more than open fireplaces.",
      "Restrictions are generally welcomed where wood is the cheapest fuel.",
      "The emissions of a modern stove depend on dry fuel and correct operation."
    ],
    "a": 3,
    "expl": "The passage states that the improvement from modern stoves depends on dry fuel and correct operation. In several countries wood burning exceeds traffic, modern stoves emit far less than open fireplaces, and restrictions meet resistance where wood is cheapest."
  },
  {
    "id": "vr118",
    "passage": "Spent nuclear fuel remains hazardous for very long periods, and deep geological disposal is the option favoured by most technical bodies. Construction of a repository has begun in only a small number of countries, and delays elsewhere have usually arisen from siting decisions rather than from unresolved engineering questions. Programmes that gave municipalities a right to withdraw during the selection process report smoother progress than those that designated a site centrally. Interim storage at reactor sites continues meanwhile, an arrangement regulators describe as safe but not intended to last indefinitely.",
    "q": "Which of the following statements is correct based only on the passage?",
    "options": [
      "Delays in repository projects have usually come from siting decisions rather than engineering problems.",
      "Repositories are under construction in most countries using nuclear power.",
      "Regulators regard interim storage at reactor sites as a permanent solution.",
      "Centrally designated sites have progressed more smoothly than voluntary processes."
    ],
    "a": 0,
    "expl": "The passage attributes delays mainly to siting rather than engineering. Construction has begun in only a small number of countries, interim storage is not intended to last indefinitely, and programmes with a municipal right to withdraw report smoother progress."
  },
  {
    "id": "vr119",
    "passage": "Small modular reactors are designed to be built in factories and assembled on site, which their promoters expect to shorten construction times and reduce financing risk compared with large plants. The expected savings depend on series production: a single unit is more expensive per megawatt than a large reactor, and the advantage would appear only after many identical units have been built. Licensing frameworks were written for large bespoke plants, and regulators are adapting their procedures. No commercial series has yet been delivered in Europe, so the cost estimates rest on projections.",
    "q": "Which of the following statements is correct based only on the passage?",
    "options": [
      "A single small modular reactor already costs less per megawatt than a large reactor.",
      "Commercial series of small modular reactors have been delivered in Europe.",
      "Cost advantages would appear only once many identical units have been built.",
      "Existing licensing frameworks were written specifically for modular reactors."
    ],
    "a": 2,
    "expl": "The passage states that the advantage would appear only after many identical units are built. A single unit costs more per megawatt, no commercial series has been delivered in Europe, and licensing frameworks were written for large bespoke plants."
  },
  {
    "id": "vr120",
    "passage": "Cross-border electricity lines allow surplus generation in one region to supply another, smoothing price differences and reducing the need for reserve capacity. Building them is slow: permits involve several jurisdictions and local opposition to overhead lines is common, while underground cables cost considerably more. Where interconnection is limited, wind or solar output is sometimes curtailed even though demand exists elsewhere. Market coupling rules matter as well, since capacity that exists physically may not be offered fully to the market if operators reserve margins for internal congestion.",
    "q": "Which of the following statements is correct based only on the passage?",
    "options": [
      "Underground cables are cheaper to build than overhead lines.",
      "Physically existing interconnection capacity is not always offered fully to the market.",
      "Curtailment of wind or solar never happens while demand exists elsewhere.",
      "Permits for cross-border lines involve only one jurisdiction."
    ],
    "a": 1,
    "expl": "The passage says capacity that exists physically may not be offered fully if operators reserve margins for internal congestion. Underground cables cost considerably more, curtailment does occur, and permits involve several jurisdictions."
  },
  {
    "id": "vr121",
    "passage": "Heat pumps move heat rather than generate it, delivering several units of heat per unit of electricity, with efficiency falling as outdoor temperatures drop. Whether they cut household bills depends on the ratio between electricity and gas prices, which differs widely between countries and has shifted with energy taxes and levies. Installation in older buildings often requires larger radiators or improved insulation so that lower flow temperatures suffice. Installer shortages have become a practical constraint, and several countries now fund training programmes alongside purchase subsidies.",
    "q": "Which of the following statements is correct based only on the passage?",
    "options": [
      "Heat pumps perform equally well at all outdoor temperatures.",
      "Older buildings need no adaptation before a heat pump is installed.",
      "Purchase subsidies have removed the shortage of installers.",
      "Whether heat pumps lower bills depends on the ratio between electricity and gas prices."
    ],
    "a": 3,
    "expl": "The passage makes the bill effect depend on the electricity-to-gas price ratio. Efficiency falls as temperatures drop, older buildings often need larger radiators or insulation, and installer shortages persist alongside subsidies."
  },
  {
    "id": "vr122",
    "passage": "District heating distributes hot water from a central source through insulated pipes to many buildings. Its economics improve with density, which is why networks are common in compact cities and rare in dispersed settlements. Older networks operate at high temperatures, which limits the sources that can feed them; lowering the temperature allows waste heat from data centres or industry to be used, but usually requires building-level upgrades first. Consumers connected to a network often cannot change supplier, so regulators in several countries monitor tariffs to protect them.",
    "q": "Which of the following statements is correct based only on the passage?",
    "options": [
      "Lowering network temperatures widens the range of usable heat sources but normally requires building upgrades first.",
      "District heating is most economical in dispersed settlements.",
      "Connected consumers can freely change their heat supplier.",
      "High-temperature networks can be fed by any heat source."
    ],
    "a": 0,
    "expl": "The passage states that lowering temperatures allows waste heat to be used but usually requires building-level upgrades first. Density improves the economics, connected consumers often cannot switch, and high temperatures limit the possible sources."
  },
  {
    "id": "vr123",
    "passage": "Hydrogen is presented as a way to decarbonise processes where direct electrification is difficult, such as steelmaking and fertiliser production. Producing it by electrolysis consumes large amounts of electricity, so its climate benefit depends on the power used, and most hydrogen consumed in Europe today is still made from natural gas. Transport is a further constraint, since existing pipelines require modification and shipping hydrogen involves conversion losses. Analysts increasingly distinguish uses where hydrogen has no obvious substitute from uses, such as domestic heating, where alternatives are more efficient.",
    "q": "Which of the following statements is correct based only on the passage?",
    "options": [
      "Electrolytic hydrogen is climate-neutral whatever electricity is used.",
      "Existing pipelines can carry hydrogen without modification.",
      "Most hydrogen consumed in Europe today is still produced from natural gas.",
      "Analysts regard hydrogen as the most efficient option for domestic heating."
    ],
    "a": 2,
    "expl": "The passage states directly that most hydrogen consumed in Europe is still made from natural gas. The climate benefit depends on the electricity used, pipelines require modification, and alternatives to hydrogen are described as more efficient for domestic heating."
  },
  {
    "id": "vr124",
    "passage": "A carbon border adjustment requires importers of certain goods to account for the emissions embedded in them, so that domestic producers paying a carbon price are not undercut. It applies initially to a limited set of products, such as cement, iron and steel, fertilisers and electricity, where emissions are relatively easy to measure. Exporters may deduct a carbon price already paid at home, which gives partner countries an incentive to introduce one. Administratively the mechanism depends on reliable emissions data from suppliers, and reporting obligations preceded any financial charge.",
    "q": "Which of the following statements is correct based only on the passage?",
    "options": [
      "The mechanism applies to all goods imported into the European Union.",
      "Reporting obligations came into effect before any financial charge.",
      "A carbon price already paid abroad cannot be deducted.",
      "Emissions data from suppliers play no part in the mechanism."
    ],
    "a": 1,
    "expl": "The passage says reporting obligations preceded any financial charge. Coverage is initially limited to a few products, foreign carbon prices may be deducted, and the mechanism depends on reliable supplier data."
  },
  {
    "id": "vr125",
    "passage": "Under an emissions trading system, a cap limits total emissions and participants trade allowances. Some allowances have been distributed free of charge to industries considered exposed to international competition, on the argument that a carbon cost borne by them alone could shift production abroad. Free allocation weakens the price signal for those installations, so it is being phased out for sectors covered by a border adjustment. Studies looking for evidence of production relocation during the period of free allocation found little, while noting that energy prices moved for other reasons at the same time.",
    "q": "Which of the following statements is correct based only on the passage?",
    "options": [
      "Free allocation strengthens the carbon price signal for the installations receiving it.",
      "Free allocation is being expanded for sectors covered by a border adjustment.",
      "Studies proved that production relocation could not occur.",
      "Studies found little evidence of production relocation during the period of free allocation."
    ],
    "a": 3,
    "expl": "The passage reports that studies found little evidence of relocation. Free allocation weakens the price signal, it is being phased out for border-adjustment sectors, and the studies note confounding energy price movements rather than proving anything impossible."
  },
  {
    "id": "vr126",
    "passage": "Recovering lithium, cobalt and nickel from used batteries reduces dependence on imported raw materials. The volume available for recycling remains small, because most electric vehicle batteries sold so far are still in use, and some are given a second life in stationary storage before dismantling. New rules set recovery rates per metal and require recycled content in new batteries from future dates. Processes recover cobalt and nickel efficiently, whereas lithium recovery is technically possible but has often been uneconomic when primary lithium prices are low.",
    "q": "Which of the following statements is correct based only on the passage?",
    "options": [
      "Lithium recovery is technically feasible but frequently uneconomic when primary prices are low.",
      "Large volumes of used vehicle batteries are already available for recycling.",
      "Giving batteries a second life in stationary storage is prohibited.",
      "Recycled content requirements already apply to all new batteries."
    ],
    "a": 0,
    "expl": "The passage states that lithium recovery is possible but often uneconomic at low primary prices. Available volumes are small, second-life use occurs, and recycled content rules apply from future dates."
  },
  {
    "id": "vr127",
    "passage": "Semiconductor manufacturing is concentrated in a few regions, and the most advanced production nodes are made in even fewer places. European strengths lie in equipment, materials and specialised chips for cars and industry rather than in leading-edge logic. Public funding programmes aim to raise the share of global capacity located in Europe, though analysts note that global capacity is itself growing, so the target implies a very large absolute expansion. Fabrication plants also require dependable water and power supplies and a workforce that takes years to train.",
    "q": "Which of the following statements is correct based only on the passage?",
    "options": [
      "Europe leads the world in leading-edge logic chips.",
      "Advanced production nodes are manufactured in many countries.",
      "Because global capacity is itself growing, raising Europe's share implies a very large absolute expansion.",
      "Fabrication plants can be staffed without specialised training."
    ],
    "a": 2,
    "expl": "The passage says analysts note global capacity is growing, so the share target implies a large absolute expansion. European strengths lie outside leading-edge logic, advanced nodes are made in very few places, and the workforce takes years to train."
  },
  {
    "id": "vr128",
    "passage": "Quantum computers exploit properties of quantum systems to perform certain calculations differently from classical machines. Current devices are noisy, and error correction is expected to require many physical qubits for each logical one, which is why useful applications are generally projected rather than demonstrated. The prospect nevertheless affects security policy today, since data intercepted now could be decrypted later if capable machines appear. Standards bodies have published post-quantum algorithms, and administrations are beginning to inventory the systems that rely on vulnerable encryption.",
    "q": "Which of the following statements is correct based only on the passage?",
    "options": [
      "Useful quantum applications have already been demonstrated in practice.",
      "Each logical qubit is expected to require only one physical qubit.",
      "No post-quantum algorithms have been published so far.",
      "Data intercepted today could be decrypted later if capable machines appear."
    ],
    "a": 3,
    "expl": "The passage gives future decryption of intercepted data as the reason security policy is affected now. Useful applications are projected rather than demonstrated, many physical qubits are expected per logical one, and standards bodies have already published algorithms."
  },
  {
    "id": "vr129",
    "passage": "Public administrations increasingly consider open-source software in order to reduce dependence on individual suppliers. Licence savings are often the stated motive, though studies point out that most costs lie in migration, training and support rather than in licences themselves. Some administrations that switched later returned to proprietary products, usually citing document compatibility with external partners. Others report stable operation for years, and several publish their own code so that other authorities can reuse it, an arrangement that spreads maintenance effort only if a community actually forms.",
    "q": "Which of the following statements is correct based only on the passage?",
    "options": [
      "Publishing code spreads maintenance effort only if a community actually forms.",
      "Licence fees make up most of the cost of providing software.",
      "No administration that switched to open source has returned to proprietary products.",
      "Document compatibility has never caused difficulties for administrations."
    ],
    "a": 0,
    "expl": "The passage attaches the condition that a community must actually form for shared maintenance to work. Most costs lie in migration, training and support, some administrations did return to proprietary products, and compatibility is the reason usually cited."
  },
  {
    "id": "vr130",
    "passage": "Hospitals have become frequent targets of ransomware, partly because interrupted care creates pressure to pay quickly and partly because medical devices often run software that cannot easily be updated. Incidents typically force staff to revert to paper records and to divert emergency admissions, and recovery has in several cases taken weeks. Regulators now require operators of essential services to report significant incidents within short deadlines and to test their contingency plans. Insurers, meanwhile, have tightened conditions, in some cases excluding cover for payments made to attackers.",
    "q": "Which of the following statements is correct based only on the passage?",
    "options": [
      "Medical devices are generally easy to keep updated.",
      "Reporting of significant incidents remains voluntary for essential services.",
      "Recovery from such incidents has in several cases taken weeks.",
      "Insurers always cover payments made to attackers."
    ],
    "a": 2,
    "expl": "The passage states that recovery has in several cases taken weeks. Medical device software often cannot easily be updated, reporting is required by regulators, and some insurers now exclude cover for ransom payments."
  },
  {
    "id": "vr131",
    "passage": "Fibre networks reach most urban households in the European Union, while coverage in sparsely populated areas lags, since the cost per connection rises steeply as density falls. Public subsidies target areas that operators would not serve commercially, and rules generally require subsidised infrastructure to be open to competitors on regulated terms. Coverage statistics measure availability rather than use: in several countries a considerable share of households with fibre passing their property remain on older connections, often because they see no reason to change.",
    "q": "Which of the following statements is correct based only on the passage?",
    "options": [
      "Every household with fibre available has subscribed to it.",
      "Subsidised networks are closed to competing operators.",
      "Connection costs per household fall as population density decreases.",
      "Coverage statistics measure availability rather than actual use."
    ],
    "a": 3,
    "expl": "The passage states explicitly that coverage statistics measure availability, not use. A considerable share of passed households stay on older connections, subsidised infrastructure must be open to competitors, and costs rise as density falls."
  },
  {
    "id": "vr132",
    "passage": "Most people who read news online arrive through search engines, social platforms or messaging applications rather than by visiting a publisher directly. Ranking systems therefore shape which stories are seen, and researchers studying them face a data access problem, since the systems are proprietary and change frequently. New EU rules oblige very large platforms to give vetted researchers access to certain data and to offer users at least one recommendation option not based on profiling. Whether such options are chosen in practice is a separate question, which early observations suggest is answered rarely.",
    "q": "Which of the following statements is correct based only on the passage?",
    "options": [
      "Most online news readers go directly to publishers' own websites.",
      "Early observations suggest that non-profiling recommendation options are rarely chosen.",
      "Platforms are under no obligation to give researchers any data access.",
      "Ranking systems remain stable over time, which helps researchers."
    ],
    "a": 1,
    "expl": "The passage says early observations suggest the non-profiling option is rarely chosen. Most readers arrive via intermediaries, platforms must give vetted researchers access, and ranking systems change frequently."
  },
  {
    "id": "vr133",
    "passage": "The closure of local newspapers has left some districts without any dedicated coverage of municipal affairs. Research in several countries associates such closures with lower turnout in local elections and fewer contested council seats, although the direction of causation is debated, since areas losing newspapers are often losing population as well. Non-profit and cooperative outlets have appeared in a number of towns; most remain small and depend on grants or memberships, and few have so far reached the staffing levels of the newspapers they replaced.",
    "q": "Which of the following statements is correct based only on the passage?",
    "options": [
      "Closures have been proven to cause lower turnout in local elections.",
      "New non-profit outlets typically match the staffing of the newspapers they replaced.",
      "The direction of causation between closures and lower turnout is debated.",
      "Districts that lose newspapers are usually gaining population."
    ],
    "a": 2,
    "expl": "The passage describes the causal direction as debated because such areas are often losing population too. Nothing is proven, few new outlets match former staffing levels, and the population trend is downward."
  },
  {
    "id": "vr134",
    "passage": "Public service broadcasters are financed in different ways: household fees, allocations from the general budget, or a mixture, sometimes with limited advertising. Where funding moved from a dedicated fee to the state budget, editors have expressed concern about annual negotiations, while governments point to the cost of collecting fees and to households without television sets. Audience patterns complicate the debate further, since younger viewers reach public content mainly through online platforms whose usage is not captured by traditional broadcast measurement.",
    "q": "Which of the following statements is correct based only on the passage?",
    "options": [
      "Younger viewers mainly reach public content through platforms not captured by broadcast measurement.",
      "All public service broadcasters are financed through a household fee.",
      "Public service broadcasters never carry advertising.",
      "Editors welcomed the shift from dedicated fees to budget financing."
    ],
    "a": 0,
    "expl": "The passage states that younger viewers use online platforms whose usage traditional measurement misses. Financing takes several forms, limited advertising sometimes exists, and editors expressed concern rather than approval about budget financing."
  },
  {
    "id": "vr135",
    "passage": "Independent fact-checking organisations verify claims circulating online and publish their assessments. Experiments find that corrections can reduce belief in a false claim, including among people sympathetic to it, though the effect tends to fade within weeks unless reinforced. Corrections reach fewer people than the original claims in most measured cases, since corrective content is shared less. Some researchers therefore emphasise measures applied before circulation, such as brief warnings about common manipulation techniques, which are cheaper to deliver at scale but show smaller effects per person.",
    "q": "Which of the following statements is correct based only on the passage?",
    "options": [
      "Corrections reach more people than the false claims they address.",
      "The belief-reducing effect of corrections is permanent.",
      "Corrections have no effect on people sympathetic to the claim.",
      "Pre-emptive warnings are cheaper to deliver at scale but have smaller effects per person."
    ],
    "a": 3,
    "expl": "The passage describes pre-circulation warnings as cheaper at scale with smaller per-person effects. Corrections reach fewer people than the original claims, their effect fades within weeks, and they work including among sympathetic audiences."
  },
  {
    "id": "vr136",
    "passage": "Inscription on the World Heritage List recognises sites of outstanding universal value and obliges the state concerned to protect them. Listing frequently increases visitor numbers, which can fund conservation but also strains the fabric of a site, so management plans have become a condition rather than a formality. Sites whose protection deteriorates may be placed on a list of heritage in danger, and delisting, though rare, has occurred. Nominations require extensive documentation, which favours countries with well-resourced heritage administrations, and the list remains geographically uneven.",
    "q": "Which of the following statements is correct based only on the passage?",
    "options": [
      "Delisting of a World Heritage site has never happened.",
      "Management plans are treated as a formality in the nomination process.",
      "The documentation burden favours countries with well-resourced heritage administrations.",
      "Listing consistently reduces the number of visitors to a site."
    ],
    "a": 2,
    "expl": "The passage links extensive documentation requirements to an advantage for well-resourced administrations and an uneven list. Delisting has occurred though rarely, management plans are a condition rather than a formality, and listing frequently increases visitor numbers."
  },
  {
    "id": "vr137",
    "passage": "Large construction projects in Europe are generally preceded by archaeological assessment, funded in most systems by the developer. Because excavation is scheduled against building timetables, most of the resulting material is documented rapidly and stored, and analysis of the finds often lags years behind the fieldwork. Some regions have introduced publication deadlines and dedicated funding for post-excavation work. Preventive archaeology has nonetheless produced much of what is known about rural settlement in several periods, since it examines areas that research excavations, which target known monuments, would never have chosen.",
    "q": "Which of the following statements is correct based only on the passage?",
    "options": [
      "Analysis of finds usually keeps pace with fieldwork.",
      "Preventive archaeology examines areas that research excavations would not have selected.",
      "In most systems the state rather than the developer pays for assessment.",
      "Research excavations select their sites at random."
    ],
    "a": 1,
    "expl": "The passage credits preventive archaeology with covering areas research excavations would never have chosen, since the latter target known monuments. Analysis lags years behind fieldwork and developers pay in most systems."
  },
  {
    "id": "vr138",
    "passage": "Regional and minority languages are spoken in most member states, and their situations differ widely: some enjoy official status in a region and a full school system, while others survive mainly among older speakers in private use. Where instruction is available from an early age and continues into secondary school, the number of young speakers has in several cases stabilised. Media provision matters too, though small audiences make commercial broadcasting unviable, so services usually depend on public funding. Adult learners can enlarge a speaker community but rarely transmit the language at home without a partner who also speaks it.",
    "q": "Which of the following statements is correct based only on the passage?",
    "options": [
      "Every regional or minority language holds official status in a region.",
      "Continuous schooling has never affected the number of young speakers.",
      "Adult learners typically pass the language on at home.",
      "Minority language media usually rely on public funding because audiences are too small for commercial viability."
    ],
    "a": 3,
    "expl": "The passage says small audiences make commercial broadcasting unviable, so services usually depend on public funding. Situations differ widely, continuous schooling has stabilised young speaker numbers in several cases, and adult learners rarely transmit at home without a speaking partner."
  },
  {
    "id": "vr139",
    "passage": "Film production in Europe relies heavily on public support, distributed through national funds, regional bodies and co-production arrangements. Regional schemes usually require part of the budget to be spent locally, which shapes where shooting takes place as much as the script does. Co-productions can pool money from several countries but add administrative complexity and sometimes editorial compromises. Audience results are concentrated: a small number of titles account for most admissions, while many supported films are seen mainly at festivals, which funders describe as an expected feature of a portfolio approach.",
    "q": "Which of the following statements is correct based only on the passage?",
    "options": [
      "A small number of titles account for most admissions.",
      "Regional funds impose no conditions on where budgets are spent.",
      "Co-production arrangements simplify the administration of a film.",
      "Funders regard festival-only films as an unexpected failure."
    ],
    "a": 0,
    "expl": "The passage states that a small number of titles account for most admissions. Regional schemes require local spending, co-productions add administrative complexity, and funders call festival-only outcomes an expected feature of a portfolio."
  },
  {
    "id": "vr140",
    "passage": "Free or subsidised school meals exist in various forms, from universal provision to means-tested schemes. Evaluations associate universal programmes with higher take-up, partly because no application is needed and no pupil is visibly identified as eligible, but they cost more per additional child reached. Where meals are prepared centrally and transported, unit costs fall while menu flexibility is reduced. Studies of learning outcomes report modest effects overall, with larger effects among pupils who previously arrived at school without breakfast.",
    "q": "Which of the following statements is correct based only on the passage?",
    "options": [
      "Universal schemes achieve lower take-up than means-tested ones.",
      "Central preparation of meals raises unit costs.",
      "Effects on learning are modest overall but larger among pupils who previously came without breakfast.",
      "Means-tested schemes are the ones that avoid identifying eligible pupils."
    ],
    "a": 2,
    "expl": "The passage reports modest overall learning effects that are larger for pupils who previously arrived without breakfast. Universal schemes have higher take-up and avoid identifying pupils, and central preparation lowers unit costs."
  },
  {
    "id": "vr141",
    "passage": "Attendance at early childhood education and care from the age of three is high in most member states, while provision for younger children varies far more in availability, opening hours and price. Studies generally find benefits for children's later school performance where staff qualifications and group sizes meet certain standards; where quality is low, measured effects are small or absent. Availability also shapes parents' employment, since in areas with long waiting lists second earners, most often mothers, return to work later than they intend.",
    "q": "Which of the following statements is correct based only on the passage?",
    "options": [
      "Benefits appear regardless of staff qualifications and group sizes.",
      "Where quality standards are not met, measured benefits are small or absent.",
      "Provision for children under three is as uniform as provision for older children.",
      "Waiting lists have no bearing on when parents return to work."
    ],
    "a": 1,
    "expl": "The passage states that where quality is low the measured effects are small or absent. Benefits are conditional on qualifications and group size, provision for under-threes varies far more, and long waiting lists delay parents' return to work."
  },
  {
    "id": "vr142",
    "passage": "Some school systems require pupils who fail to meet standards to repeat a year, while others move all pupils forward and provide additional support. Comparisons of results show no consistent advantage for repetition, and repeating is associated with a higher probability of leaving education early, although pupils who repeat differ from those who do not in ways that are hard to control for statistically. Countries that reduced repetition generally combined the change with targeted support during the school year rather than simply abolishing the practice.",
    "q": "Which of the following statements is correct based only on the passage?",
    "options": [
      "Repetition consistently improves pupils' later results.",
      "Pupils who repeat a year are statistically identical to those who do not.",
      "Every school system uses grade repetition.",
      "Countries that reduced repetition generally paired the change with targeted support during the year."
    ],
    "a": 3,
    "expl": "The passage says such countries combined the change with targeted in-year support rather than simply abolishing repetition. No consistent advantage is found, repeaters differ in ways hard to control for, and some systems move all pupils forward."
  },
  {
    "id": "vr143",
    "passage": "Publicly funded research is increasingly required to be published so that readers pay nothing. One route charges authors a fee per article, which shifts the cost from libraries to research budgets and can disadvantage researchers without grants; another deposits accepted manuscripts in repositories, sometimes after an embargo period. Transitional agreements between universities and publishers combine subscriptions and publishing fees in a single contract. Compliance monitoring shows that deposit routes are used unevenly, since the deposit step depends on individual authors remembering to act.",
    "q": "Which of the following statements is correct based only on the passage?",
    "options": [
      "Article fees shift costs from libraries to research budgets and can disadvantage researchers without grants.",
      "Repository deposit happens automatically and needs no action by authors.",
      "Open access means that readers pay a reduced fee.",
      "Transitional agreements cover subscriptions only."
    ],
    "a": 0,
    "expl": "The passage states that author fees move the cost from libraries to research budgets, disadvantaging the ungranted. Deposit depends on authors acting, readers pay nothing, and transitional agreements combine subscriptions with publishing fees."
  },
  {
    "id": "vr144",
    "passage": "Organic farming prohibits most synthetic pesticides and fertilisers and is verified by certification and inspection. Its share of agricultural area differs greatly across member states, from a few per cent to more than a quarter, reflecting consumer demand, support payments and the mix of crops grown. Yields per hectare are generally lower, so the environmental balance per unit of output is less favourable than the balance per hectare. Demand growth slowed when food prices rose, and some farms reverted to conventional production, indicating that certification decisions respond to price premiums as well as to policy targets.",
    "q": "Which of the following statements is correct based only on the passage?",
    "options": [
      "Organic yields per hectare are generally higher than conventional yields.",
      "The organic share of farmland is broadly similar across member states.",
      "The environmental balance of organic farming is less favourable per unit of output than per hectare.",
      "Certification decisions are unaffected by market prices."
    ],
    "a": 2,
    "expl": "Because yields per hectare are lower, the passage says the balance per unit of output is less favourable than per hectare. Shares differ greatly between states and reversions show that price premiums influence certification decisions."
  },
  {
    "id": "vr145",
    "passage": "Participation in adult learning is highest among workers who already hold higher qualifications, a pattern observed consistently across countries. Employers fund most job-related training and concentrate it on staff whose skills they expect to use for longer. Individual learning accounts, which give people a budget they control, aim to reach others, but take-up in early schemes depended strongly on guidance services: where advice was available, use was markedly higher. Time, rather than fees, is the obstacle most often reported by workers with caring responsibilities.",
    "q": "Which of the following statements is correct based only on the passage?",
    "options": [
      "Adult learning participation is highest among the least qualified workers.",
      "In early learning account schemes, take-up was markedly higher where guidance was available.",
      "Fees are the obstacle most frequently reported by workers with caring responsibilities.",
      "Employers spread training evenly across all their staff."
    ],
    "a": 1,
    "expl": "The passage reports markedly higher take-up where guidance services existed. Participation is highest among the already highly qualified, time rather than fees is the obstacle cited by carers, and employers concentrate training on selected staff."
  },
  {
    "id": "vr146",
    "passage": "Migrants often work below their qualification level because foreign diplomas are not automatically recognised. Regulated professions require formal recognition procedures, which compare training content and may impose adaptation periods or aptitude tests, whereas unregulated occupations depend on employers' judgement, where informal signals matter. Procedures are faster where the qualification comes from a system that has already been assessed, and slower where documents are missing, a common situation for people who left at short notice. Some countries allow competence to be assessed through practical tests when papers cannot be produced.",
    "q": "Which of the following statements is correct based only on the passage?",
    "options": [
      "Foreign diplomas are automatically recognised across all professions.",
      "Unregulated occupations also require formal recognition procedures.",
      "Missing documents speed up the recognition procedure.",
      "Some countries assess competence through practical tests when documents are unavailable."
    ],
    "a": 3,
    "expl": "The passage states that some countries use practical competence tests when papers cannot be produced. Diplomas are not automatically recognised, unregulated occupations rely on employers' judgement, and missing documents slow procedures down."
  },
  {
    "id": "vr147",
    "passage": "Fruit and vegetable harvesting depends on seasonal workers, many of whom travel from other countries for a few weeks or months. Because the work is short and mobile, labour inspection reaches only a fraction of holdings, and problems concerning accommodation and working time are documented more often through complaints than through routine checks. Mechanisation has advanced for crops that tolerate rough handling, while soft fruit still requires hands. Producers report that the reliability of returning workers matters more to them than the hourly cost, since untrained pickers damage produce.",
    "q": "Which of the following statements is correct based only on the passage?",
    "options": [
      "Producers say the reliability of returning workers matters more than the hourly cost.",
      "Labour inspection covers most agricultural holdings.",
      "Soft fruit harvesting has now been largely mechanised.",
      "Problems are identified mainly through routine inspection checks."
    ],
    "a": 0,
    "expl": "The passage reports producers valuing reliable returning workers above hourly cost because untrained pickers damage produce. Inspection reaches only a fraction of holdings, soft fruit still requires hands, and complaints rather than routine checks reveal most problems."
  },
  {
    "id": "vr148",
    "passage": "Rules on pay transparency require employers above a certain size to report differences in pay between women and men and, in some systems, to explain unjustified gaps. Reporting alone has produced small measured effects, while larger changes appear where employers must draw up an action plan and where employees may request individual pay information. Reported gaps depend heavily on the measure used: an unadjusted gap compares all women with all men, whereas an adjusted figure controls for job and hours and is therefore smaller, without indicating that the remaining difference is justified.",
    "q": "Which of the following statements is correct based only on the passage?",
    "options": [
      "Reporting obligations on their own have produced large measured changes.",
      "Adjusted and unadjusted pay gaps yield the same figure.",
      "The adjusted gap is smaller than the unadjusted one, which does not itself show the remainder is justified.",
      "Employees are never permitted to request individual pay information."
    ],
    "a": 2,
    "expl": "The passage explains that the adjusted figure is smaller because it controls for job and hours, without indicating the remainder is justified. Reporting alone has small effects and individual pay information can be requested in some systems."
  },
  {
    "id": "vr149",
    "passage": "Parental leave systems differ in length, payment level and how much of the entitlement is reserved for each parent. Take-up by fathers rises sharply where a period is non-transferable and paid at a high replacement rate, whereas under shared family entitlements paid at a flat rate mothers take most of the leave. Employer culture also matters, and surveys report that fathers in small firms more often cite workload as the reason for taking less. Longer leave for fathers is associated with a more even division of childcare later, though studies cannot fully separate leave from prior attitudes.",
    "q": "Which of the following statements is correct based only on the passage?",
    "options": [
      "Shared flat-rate entitlements are used equally by both parents.",
      "Fathers' take-up rises sharply where leave is non-transferable and well paid.",
      "Studies have fully isolated the effect of leave from parents' prior attitudes.",
      "Fathers in small firms most often cite low pay as the reason for taking less leave."
    ],
    "a": 1,
    "expl": "The passage attributes sharply higher paternal take-up to non-transferable, well-paid periods. Mothers take most shared flat-rate leave, the studies cannot fully separate leave from prior attitudes, and workload rather than pay is cited in small firms."
  },
  {
    "id": "vr150",
    "passage": "Female employment rates correlate with the availability of affordable childcare, but the relationship runs in both directions, since demand for places also grows where more mothers work. Reforms that expanded places have generally increased maternal employment, with larger effects for mothers with lower earnings potential, for whom childcare costs absorb a bigger share of any wage. Where places expanded but opening hours remained short, the effects were concentrated in part-time work. Fees capped as a share of income are used in some systems to keep costs predictable.",
    "q": "Which of the following statements is correct based only on the passage?",
    "options": [
      "The relationship between childcare and female employment runs in one direction only.",
      "Short opening hours make no difference to the kind of work taken up.",
      "All systems cap childcare fees as a share of household income.",
      "Expanding childcare has larger effects for mothers with lower earnings potential."
    ],
    "a": 3,
    "expl": "The passage states that effects are larger for mothers with lower earnings potential, since costs absorb more of their wage. Causality runs both ways, short hours concentrated the effect in part-time work, and income-based fee caps exist only in some systems."
  },
  {
    "id": "vr151",
    "passage": "Universal postal service obligations require delivery to every address at a uniform price, which is costly where addresses are dispersed. Letter volumes have fallen steeply while parcel volumes have grown, changing the economics: parcels are heavier and need different vehicles, and delivery to remote addresses remains expensive per item. Some countries have reduced delivery frequency for letters while maintaining it for parcels, and others combine postal counters with shops or municipal offices. Regulators assess whether quality targets are met, and reported figures often distinguish urban from rural performance.",
    "q": "Which of the following statements is correct based only on the passage?",
    "options": [
      "Some countries have cut letter delivery frequency while keeping it for parcels.",
      "Letter and parcel volumes have both fallen steeply.",
      "Delivery to remote addresses has become cheap per item.",
      "Quality figures never distinguish urban from rural performance."
    ],
    "a": 0,
    "expl": "The passage states that some countries reduced letter frequency while maintaining it for parcels. Parcel volumes have grown, remote delivery remains expensive per item, and reported figures often separate urban and rural performance."
  },
  {
    "id": "vr152",
    "passage": "The share of social housing in the total stock varies from a fifth or more in some countries to a very small fraction in others. Where the stock is small, allocation is usually restricted to the lowest incomes and waiting lists lengthen; where it is larger, a broader range of households is eligible and the sector is less stigmatised. Selling units to tenants raised ownership rates in several countries but reduced the stock available for allocation, since replacement building rarely matched sales. Construction costs and land prices remain the principal constraints on new provision.",
    "q": "Which of the following statements is correct based only on the passage?",
    "options": [
      "Social housing accounts for a fifth of the stock in every country.",
      "Countries with larger social sectors restrict eligibility to the poorest households.",
      "Sales to tenants reduced the allocatable stock because replacement building rarely matched sales.",
      "Land prices are not among the constraints on new provision."
    ],
    "a": 2,
    "expl": "The passage says sales raised ownership but shrank the allocatable stock because replacement rarely matched sales. Shares vary widely, larger sectors have broader eligibility, and land prices are named as a principal constraint."
  },
  {
    "id": "vr153",
    "passage": "Deep renovation of buildings reduces energy demand, yet annual renovation rates in most member states remain low. Split incentives are one reason: landlords pay for insulation while tenants save on bills, so investment is postponed unless rules or subsidies bridge the gap. Households in energy poverty often live in the worst-performing buildings but can least afford upfront costs, which is why grants covering a high share of the expense reach them more effectively than loans. Renovation also requires a skilled workforce, and shortages of installers slow programmes independently of funding.",
    "q": "Which of the following statements is correct based only on the passage?",
    "options": [
      "Tenants pay for insulation while landlords save on the bills.",
      "Annual renovation rates are high in most member states.",
      "Funding is the only constraint on renovation programmes.",
      "Grants covering a large share of costs reach energy-poor households more effectively than loans."
    ],
    "a": 3,
    "expl": "The passage says high-share grants work better than loans for households that cannot afford upfront costs. The split incentive runs the other way, renovation rates remain low, and installer shortages slow programmes independently of funding."
  },
  {
    "id": "vr154",
    "passage": "Street trees lower air temperature through shade and evaporation, and measurements in several cities show differences of a few degrees between shaded and unshaded streets on hot afternoons. Planting is only the first step: survival rates depend on soil volume, watering during the first years and protection from construction damage, and municipalities that count planted trees without recording losses tend to overstate canopy growth. Species choice has also changed, since monocultures proved vulnerable to disease, and mixed planting is now common practice.",
    "q": "Which of the following statements is correct based only on the passage?",
    "options": [
      "Counting planted trees without recording losses tends to overstate canopy growth.",
      "Tree survival depends mainly on the species chosen.",
      "Monoculture planting proved resistant to disease.",
      "Shade produces no measurable difference in street temperature."
    ],
    "a": 0,
    "expl": "The passage states that counting plantings without losses overstates canopy growth. Survival is attributed to soil volume, watering and protection, monocultures proved vulnerable, and measurements show differences of a few degrees."
  },
  {
    "id": "vr155",
    "passage": "A significant share of treated drinking water is lost from distribution networks before reaching customers, with reported loss rates ranging from under a tenth to more than a third depending on the utility. Losses are influenced by pipe age, pressure and soil conditions, and detecting small leaks requires acoustic surveys or pressure zoning rather than waiting for visible bursts. Because the water lost has already been treated and pumped, leakage wastes energy and chemicals as well as water. Full replacement of ageing mains is rarely affordable at once, so utilities prioritise sections by failure history.",
    "q": "Which of the following statements is correct based only on the passage?",
    "options": [
      "Reported loss rates are broadly similar across utilities.",
      "Small leaks are normally found only once they become visible bursts.",
      "Leakage wastes energy and chemicals as well as water, since the water was already treated and pumped.",
      "Utilities normally replace all ageing mains in a single programme."
    ],
    "a": 2,
    "expl": "The passage states that lost water has already been treated and pumped, so leakage wastes energy and chemicals too. Loss rates range widely, small leaks need acoustic surveys or pressure zoning, and full replacement is rarely affordable at once."
  },
  {
    "id": "vr156",
    "passage": "Deposit return schemes add a refundable charge to beverage containers, repaid when the container is returned. Collection rates in such schemes are typically far higher than under kerbside collection alone, and the material collected is cleaner because streams are separated at the point of return. Retailers bear handling costs and space requirements, which weigh more heavily on small shops, so some systems exempt the smallest outlets or provide shared collection points. Schemes are usually financed from unredeemed deposits and material sales, which means revenue falls as return rates rise.",
    "q": "Which of the following statements is correct based only on the passage?",
    "options": [
      "Kerbside collection alone achieves higher return rates than deposit schemes.",
      "Scheme revenue falls as return rates rise, since financing relies partly on unredeemed deposits.",
      "Handling costs fall most heavily on large retailers.",
      "Material collected through deposit schemes is more contaminated than kerbside material."
    ],
    "a": 1,
    "expl": "The passage links financing from unredeemed deposits to revenue falling as returns rise. Deposit schemes collect more than kerbside alone, burdens weigh more on small shops, and separated streams make the material cleaner."
  },
  {
    "id": "vr157",
    "passage": "Clothing consumption per person has risen while the average number of times a garment is worn has fallen. Most collected used textiles have historically been exported for reuse, but demand in receiving markets has weakened as quality declined, and a growing share arrives unusable. Separate collection of textiles is now required across the European Union, which will increase collected volumes before sorting and recycling capacity is in place. Fibre-to-fibre recycling remains limited, particularly for blended fabrics, which are difficult to separate into their components.",
    "q": "Which of the following statements is correct based only on the passage?",
    "options": [
      "Garments are worn more times on average than in the past.",
      "Blended fabrics are the easiest textiles to recycle fibre to fibre.",
      "Demand for used textile exports has strengthened in receiving markets.",
      "Separate collection will raise volumes before sorting and recycling capacity is available."
    ],
    "a": 3,
    "expl": "The passage says the collection requirement will increase volumes before capacity is in place. Garments are worn fewer times, blends are difficult to separate, and export demand has weakened."
  },
  {
    "id": "vr158",
    "passage": "Road deaths in the European Union fell substantially over two decades, but progress has slowed and the decline is uneven between countries and road types. Most fatalities occur on rural roads, while serious injuries to pedestrians and cyclists are concentrated in urban areas. Lowering urban speed limits to thirty kilometres per hour reduces both the frequency and the severity of collisions in the cities evaluated, with effects on average journey times that measurements generally find to be small. Enforcement intensity influences compliance, and signage alone changes speeds less than physical redesign.",
    "q": "Which of the following statements is correct based only on the passage?",
    "options": [
      "Most road deaths occur in urban areas.",
      "Measured effects of thirty-kilometre limits on average journey times are generally small.",
      "Signage changes actual speeds more than physical redesign does.",
      "Road deaths have continued to fall at an unchanged pace."
    ],
    "a": 1,
    "expl": "The passage states that measurements generally find small effects on average journey times. Most fatalities occur on rural roads, signage changes speeds less than redesign, and progress on road deaths has slowed."
  },
  {
    "id": "vr159",
    "passage": "Rail carries a modest share of inland freight in the European Union, and that share has been broadly stable despite policy targets to increase it. Long international trains must cope with differing signalling systems, voltages and permitted train lengths, and a single unavailable path can delay a shipment by hours. Punctuality matters more than speed for most freight customers, since a factory needs deliveries at predictable times. Terminals where goods transfer between road and rail are a further constraint, because a shipment that cannot be loaded quickly loses the advantage of the line haul.",
    "q": "Which of the following statements is correct based only on the passage?",
    "options": [
      "Rail's share of inland freight has been rising steadily.",
      "Differences in signalling and voltage between countries have been eliminated.",
      "For most freight customers punctuality matters more than speed.",
      "Terminals have no bearing on the competitiveness of rail freight."
    ],
    "a": 2,
    "expl": "The passage states that punctuality matters more than speed because factories need predictable deliveries. The modal share is broadly stable, signalling and voltage still differ, and terminals are named as a further constraint."
  },
  {
    "id": "vr160",
    "passage": "Barges carry bulk goods such as ore, coal, grain and chemicals along major rivers, using little energy per tonne-kilometre. Their capacity depends on water depth: in low-water periods vessels must load less, freight rates rise sharply and the same volume requires more journeys. Shippers able to hold stocks are less exposed than those operating with minimal inventories. Adaptation measures include shallow-draught vessel designs and improved forecasting of water levels several weeks ahead, which allows industrial users to plan deliveries rather than react to sudden restrictions.",
    "q": "Which of the following statements is correct based only on the passage?",
    "options": [
      "Barges consume a large amount of energy per tonne-kilometre.",
      "Shippers operating with minimal inventories are the least exposed to low water.",
      "Water level forecasting extends only a few hours ahead.",
      "In low-water periods vessels load less and freight rates rise sharply."
    ],
    "a": 3,
    "expl": "The passage states that vessels must load less and rates rise sharply when water is low. Barges use little energy per tonne-kilometre, shippers with stocks are less exposed, and improved forecasting reaches several weeks ahead."
  }
];
