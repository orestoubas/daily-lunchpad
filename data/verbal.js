/* Verbal reasoning bank — EPSO-style: a short passage, then "which statement
   is correct based ONLY on the passage". One question per passage.
   {id, passage, q, options[4], a, expl} */
"use strict";

const VERBAL_QUESTIONS = [
  { id: "vr01",
    passage: "Remote work arrangements expanded rapidly during the past decade, but their effect on productivity remains contested. Several large firms report that fully remote teams complete routine tasks faster, while tasks requiring creative collaboration progress more slowly. Hybrid models, in which employees attend the office two or three days a week, are increasingly presented as a compromise. However, studies measuring hybrid work outcomes are still scarce, and most existing evidence comes from company self-reporting rather than independent research.",
    q: "Which of the following statements is correct based only on the passage?",
    options: [
      "Most evidence on hybrid work outcomes currently comes from company self-reporting.",
      "Independent research has proven that hybrid models are the most productive.",
      "Fully remote teams complete all types of tasks faster than office-based teams.",
      "Employees in hybrid models must attend the office at least three days a week."
    ], a: 0,
    expl: "The passage says studies are scarce and 'most existing evidence comes from company self-reporting'. Remote teams are faster only on routine tasks; hybrid means two OR three days; nothing is 'proven' by independent research." },

  { id: "vr02",
    passage: "The Mediterranean diet, rich in olive oil, vegetables, legumes and fish, has long been associated with lower rates of cardiovascular disease. Yet researchers caution that people who follow this diet often share other habits, such as regular physical activity and strong social ties, which may themselves protect the heart. Trials that isolate the effect of diet alone are difficult to design, because participants cannot easily be prevented from changing other aspects of their lifestyle at the same time.",
    q: "Which of the following statements is correct based only on the passage?",
    options: [
      "Confounding lifestyle habits make it hard to attribute health benefits to the Mediterranean diet alone.",
      "The Mediterranean diet has been shown to have no effect on cardiovascular disease.",
      "Regular physical activity is more important for heart health than diet.",
      "Trials on diet are impossible to conduct."
    ], a: 0,
    expl: "The passage says followers 'often share other habits' that may protect the heart, and isolating diet is 'difficult' — not impossible, and no ranking of factors is given." },

  { id: "vr03",
    passage: "Urban rooftop gardens are promoted for their ability to insulate buildings, absorb rainwater and lower local temperatures. A recent municipal survey found that buildings with rooftop gardens used 12% less energy for cooling in summer. Installation costs, however, remain high, and older buildings frequently require structural reinforcement before a garden can be added. For this reason, most new rooftop gardens in the surveyed city were installed on buildings constructed within the last twenty years.",
    q: "Which of the following statements is correct based only on the passage?",
    options: [
      "In the surveyed city, most new rooftop gardens were placed on relatively recent buildings.",
      "Rooftop gardens reduced total energy use by 12% in all cities.",
      "Older buildings cannot support rooftop gardens.",
      "Installation costs of rooftop gardens have fallen recently."
    ], a: 0,
    expl: "The 12% figure concerns cooling energy in one municipal survey, not total energy everywhere; older buildings 'frequently require reinforcement', not that they never can; costs are said to remain high." },

  { id: "vr04",
    passage: "Public libraries are reinventing themselves as community hubs. Beyond lending books, many now offer language courses, job-application workshops and access to 3D printers. Attendance figures in several European countries show that while physical book loans have declined steadily, total visits to library buildings have increased. Librarians attribute this shift to the demand for quiet workspaces and free digital services, particularly among students and jobseekers.",
    q: "Which of the following statements is correct based only on the passage?",
    options: [
      "In several European countries, library visits rose even as physical book loans fell.",
      "Book lending has increased thanks to new library services.",
      "Most library visitors are students.",
      "Libraries now charge for digital services."
    ], a: 0,
    expl: "The passage contrasts declining loans with increasing visits. It says demand is 'particularly' from students and jobseekers, not that they are the majority, and digital services are described as free." },

  { id: "vr05",
    passage: "Electric vehicle sales in Europe grew strongly last year, but the growth was unevenly distributed. In countries with dense public charging networks, electric cars accounted for over a quarter of new registrations, whereas in countries with sparse networks the share remained below ten percent. Analysts conclude that purchase subsidies alone are insufficient: consumers appear unwilling to buy electric cars where charging remains inconvenient, regardless of the price advantage subsidies create.",
    q: "Which of the following statements is correct based only on the passage?",
    options: [
      "According to analysts, purchase subsidies by themselves do not guarantee high electric vehicle uptake.",
      "Electric vehicles are cheaper than petrol cars in all European countries.",
      "Countries with sparse charging networks saw no electric vehicle sales.",
      "Over a quarter of all cars on European roads are now electric."
    ], a: 0,
    expl: "Analysts conclude subsidies 'alone are insufficient'. The 25%+ figure concerns NEW registrations in well-equipped countries; sparse-network countries were below 10%, not zero." },

  { id: "vr06",
    passage: "Antibiotic resistance is often described as a purely medical problem, but agriculture plays a substantial role. In some regions, more antibiotics are administered to healthy livestock for growth promotion than are prescribed to humans for treatment. Regulations banning this practice exist in the European Union, yet enforcement varies, and imported meat may originate from countries where growth promoters remain legal. Consequently, experts argue that trade policy and veterinary practice must be addressed together with hospital prescribing habits.",
    q: "Which of the following statements is correct based only on the passage?",
    options: [
      "Experts argue that tackling antibiotic resistance requires action beyond hospital prescribing.",
      "The European Union has no rules on antibiotics in livestock.",
      "Imported meat is banned in the European Union.",
      "Antibiotics are never given to healthy animals."
    ], a: 0,
    expl: "Experts want trade policy and veterinary practice addressed 'together with' prescribing. The EU has a ban (with varying enforcement); imports may come from countries where promoters are legal — they are not banned." },

  { id: "vr07",
    passage: "The four-day working week has been trialled by dozens of companies in several countries. In most trials, employees kept their full salary while working around 80% of their previous hours. Participating firms frequently reported stable or improved output and lower staff turnover. Critics note, however, that companies volunteering for such trials may already have flexible cultures, making the results difficult to generalise to sectors such as healthcare or manufacturing, where continuous staffing is essential.",
    q: "Which of the following statements is correct based only on the passage?",
    options: [
      "Critics question whether trial results can be generalised, because participating firms may be atypical.",
      "All companies that tried the four-day week increased their output.",
      "Employees in the trials accepted a 20% salary cut.",
      "Healthcare workers were the main participants in the trials."
    ], a: 0,
    expl: "Firms 'frequently' (not always) reported stable or improved output; employees kept full salary; healthcare is cited as a sector where results may NOT generalise." },

  { id: "vr08",
    passage: "Glacier retreat in the Alps has accelerated markedly since the 1980s. Beyond the loss of a striking landscape, the consequences are practical: summer river flows that depend on meltwater are becoming less reliable, affecting hydropower production and irrigation downstream. Some ski resorts have responded by covering parts of glaciers with reflective sheets during summer, a measure that slows melting locally but is far too expensive to apply at scale.",
    q: "Which of the following statements is correct based only on the passage?",
    options: [
      "Reflective sheets can slow glacier melting locally but are too costly for large-scale use.",
      "Hydropower production in the Alps has already ceased.",
      "Glacier retreat began in the 1980s.",
      "Reflective sheets have stopped glacier retreat in the Alps."
    ], a: 0,
    expl: "The sheets 'slow melting locally' but are 'far too expensive to apply at scale'. Retreat accelerated since the 1980s (it did not begin then), and river flows are less reliable, not gone." },

  { id: "vr09",
    passage: "A national statistics office reviewed how inflation affects households differently. Because lower-income households spend a larger share of their budget on food and energy, periods in which those prices rise fastest hit them hardest. The official inflation rate, based on the average consumption basket, can therefore understate the price increases actually experienced by poorer households. The office now publishes supplementary indices for different income groups alongside the headline figure.",
    q: "Which of the following statements is correct based only on the passage?",
    options: [
      "The headline inflation rate can understate the price rises experienced by lower-income households.",
      "The statistics office has replaced the official inflation rate with income-group indices.",
      "Higher-income households are unaffected by food price increases.",
      "Food and energy prices always rise faster than other prices."
    ], a: 0,
    expl: "Supplementary indices are published 'alongside' the headline figure, not instead of it. The passage describes what happens in 'periods' when food and energy rise fastest — not a permanent rule." },

  { id: "vr10",
    passage: "Language-learning applications have made basic vocabulary acquisition more accessible than ever, and their streak-based design encourages daily practice. Linguists point out, however, that conversational fluency depends on unpredictable, interactive exchanges that apps rarely reproduce. In their view, applications are most effective when combined with regular speaking practice, for example through tandem partnerships or conversation groups, rather than used as a sole method.",
    q: "Which of the following statements is correct based only on the passage?",
    options: [
      "Linguists consider apps most effective when combined with regular speaking practice.",
      "Streak-based design discourages daily practice.",
      "Apps fully reproduce unpredictable conversational exchanges.",
      "Tandem partnerships have replaced language apps."
    ], a: 0,
    expl: "Apps are best 'combined with regular speaking practice... rather than used as a sole method'. Streaks encourage practice; apps 'rarely reproduce' interactive exchanges." },

  { id: "vr11",
    passage: "High-speed rail competes most effectively with air travel on routes of two to four hours. On such connections, several European corridors have seen rail capture more than half of the combined air-rail market, helped by city-centre stations and simpler boarding. For journeys beyond roughly five hours, however, aviation retains a decisive advantage, and analysts expect night trains — despite renewed investment — to remain a niche product serving travellers who prioritise comfort or lower emissions over speed.",
    q: "Which of the following statements is correct based only on the passage?",
    options: [
      "On some European corridors of two to four hours, rail has won over half of the combined air-rail market.",
      "Night trains are expected to replace short-haul flights.",
      "Aviation has lost its advantage on journeys over five hours.",
      "High-speed rail is cheaper than flying on all routes."
    ], a: 0,
    expl: "Rail captured 'more than half' on several 2–4 hour corridors. Beyond ~5 hours aviation 'retains a decisive advantage', and night trains are expected to 'remain a niche product'. Price is never mentioned." },

  { id: "vr12",
    passage: "Citizen science projects invite volunteers to classify galaxies, count birds or transcribe historical records. Their scientific value was initially questioned, but studies comparing volunteer classifications with expert ones have found high agreement when tasks are well designed and each item is reviewed by several volunteers. The main constraint is no longer data quality but volunteer retention: most participants contribute intensively for a few weeks and then stop, forcing projects to recruit continuously.",
    q: "Which of the following statements is correct based only on the passage?",
    options: [
      "For well-designed tasks with multiple reviewers, volunteer classifications agree closely with expert ones.",
      "Data quality remains the main constraint of citizen science.",
      "Most volunteers contribute steadily for several years.",
      "Experts no longer take part in citizen science projects."
    ], a: 0,
    expl: "High agreement was found 'when tasks are well designed and each item is reviewed by several volunteers'. The main constraint is retention, and most participants stop after a few weeks." },

  { id: "vr13",
    passage: "Sea ports are investing heavily in shore-side electricity so that docked ships can switch off their engines and plug into the grid, cutting air pollution in port cities. Uptake by shipping lines has nonetheless been slow: retrofitting vessels is costly, electricity in some ports is more expensive than marine fuel, and connection standards differed between ports until recently. New EU rules requiring major ports to offer shore power by 2030 are expected to accelerate adoption, though they do not oblige every ship to use it.",
    q: "Which of the following statements is correct based only on the passage?",
    options: [
      "EU rules will require major ports to offer shore power by 2030, without obliging every ship to use it.",
      "Shore-side electricity is always cheaper than marine fuel.",
      "All ships must use shore power from 2030.",
      "Retrofitting vessels for shore power is inexpensive."
    ], a: 0,
    expl: "The rules oblige ports to OFFER shore power but 'do not oblige every ship to use it'. Electricity is sometimes MORE expensive than fuel, and retrofitting is described as costly." },

  { id: "vr14",
    passage: "Open-plan offices were adopted widely on the promise of spontaneous collaboration. Field studies using wearable sensors tell a more nuanced story: after firms removed walls, face-to-face interaction often decreased while electronic messaging rose, as employees sought to protect their concentration. Architects now increasingly recommend zoned layouts that combine open areas with bookable quiet rooms, arguing that the choice of environment should follow the task rather than a single fixed design.",
    q: "Which of the following statements is correct based only on the passage?",
    options: [
      "In sensor-based field studies, face-to-face interaction often fell after walls were removed.",
      "Open-plan offices increased face-to-face collaboration as promised.",
      "Architects recommend removing all quiet rooms.",
      "Electronic messaging declined in open-plan offices."
    ], a: 0,
    expl: "Face-to-face interaction 'often decreased while electronic messaging rose'. Architects recommend zoned layouts WITH quiet rooms." },

  { id: "vr15",
    passage: "The restoration of peatlands is gaining attention in climate policy. Drained peatlands, often converted to farmland, emit carbon dioxide continuously as the exposed peat decomposes; rewetting them halts most of these emissions. Restoration is relatively cheap per tonne of avoided emissions, but it takes productive land out of conventional agriculture, so farmer compensation schemes are considered essential. Several member states now fund such schemes, although uptake depends heavily on the level of payments offered.",
    q: "Which of the following statements is correct based only on the passage?",
    options: [
      "Rewetting drained peatlands stops most of their continuous carbon emissions.",
      "Peatland restoration is expensive per tonne of avoided emissions.",
      "Farmer compensation schemes have proved unnecessary.",
      "Restored peatlands can still be used for conventional agriculture."
    ], a: 0,
    expl: "Rewetting 'halts most of these emissions'. Restoration is 'relatively cheap' per tonne, compensation is 'considered essential', and restoration takes land OUT of conventional agriculture." },

  { id: "vr16",
    passage: "Several European cities have redesigned major streets to give cyclists protected lanes physically separated from car traffic. Counts taken before and after such redesigns typically show substantial increases in cycling, particularly among women and older riders, groups that surveys identify as the most sensitive to perceived danger. Retailers often oppose the schemes, fearing lost car-borne customers, yet studies of shopping streets after conversion generally find stable or higher turnover, partly because cyclists and pedestrians visit more frequently even if they spend less per trip.",
    q: "Which of the following statements is correct based only on the passage?",
    options: [
      "After conversions, studies of shopping streets generally find stable or higher retail turnover.",
      "Retailers usually support protected bike lanes from the start.",
      "Cyclists spend more per shopping trip than drivers.",
      "Protected lanes mainly increase cycling among young men."
    ], a: 0,
    expl: "The passage says studies 'generally find stable or higher turnover'. Retailers 'often oppose' the schemes; cyclists spend LESS per trip but visit more often; increases are strongest among women and older riders." },

  { id: "vr17",
    passage: "Offshore wind farms benefit from stronger and steadier winds than onshore sites, and their distance from residents reduces planning conflicts. Costs fell dramatically during the 2010s as turbines grew larger, but the trend reversed recently: higher interest rates and more expensive steel pushed several developers to renegotiate or abandon projects agreed at fixed prices. Governments have responded by adjusting auction rules, since analysts agree that offshore capacity remains essential to European climate targets even if individual projects have become harder to finance.",
    q: "Which of the following statements is correct based only on the passage?",
    options: [
      "Higher interest rates and steel prices led some developers to renegotiate or abandon projects.",
      "Offshore wind costs have fallen continuously since the 2010s.",
      "Analysts believe offshore wind is no longer needed for climate targets.",
      "Offshore wind farms face more planning conflicts than onshore sites."
    ], a: 0,
    expl: "The cost trend 'reversed recently' — so not continuous decline. Distance from residents REDUCES planning conflicts, and analysts still deem offshore capacity 'essential'." },

  { id: "vr18",
    passage: "Many European countries report growing teacher shortages, especially in mathematics, physics and vocational subjects. Salaries explain part of the problem, but exit surveys consistently rank workload and administrative burden above pay as reasons for leaving. Some ministries have recruited career changers from industry through shortened training routes; early evidence suggests these entrants stay at similar rates to traditionally trained teachers, provided they receive structured mentoring in their first two years. Without mentoring, their attrition is markedly higher.",
    q: "Which of the following statements is correct based only on the passage?",
    options: [
      "Career changers remain in teaching at similar rates to traditionally trained teachers when they receive structured mentoring.",
      "Exit surveys rank pay as the main reason teachers leave.",
      "Teacher shortages affect all subjects equally.",
      "Career changers always leave teaching faster than other teachers."
    ], a: 0,
    expl: "The mentoring condition is decisive: with it, retention is similar; without it, attrition is 'markedly higher'. Workload ranks ABOVE pay, and shortages are concentrated in specific subjects." },

  { id: "vr19",
    passage: "Roughly one fifth of food produced in the European Union is wasted, with households responsible for more than half of the total. Campaigns encouraging consumers to plan purchases have had modest effects, so attention is shifting to structural measures: clearer date labelling, since many consumers discard safe food once the 'best before' date passes, and redistribution rules that make it easier for retailers to donate unsold products. Legally binding reduction targets are under discussion, which would oblige member states to measure waste consistently.",
    q: "Which of the following statements is correct based only on the passage?",
    options: [
      "Households account for more than half of the EU's food waste.",
      "Consumer campaigns have proved highly effective.",
      "Food past its 'best before' date is unsafe to eat.",
      "Legally binding reduction targets are already in force."
    ], a: 0,
    expl: "Households cause 'more than half' of waste. Campaigns had 'modest effects'; the passage implies best-before food can be safe; binding targets are 'under discussion', not in force." },

  { id: "vr20",
    passage: "Telemedicine consultations surged during the pandemic and have remained common for follow-up appointments, prescription renewals and mental health support. Doctors report that video consultations work poorly for first visits, where physical examination often changes the diagnosis. Reimbursement rules now vary widely: some health systems pay video and in-person visits equally, while others reimburse remote care at lower rates, which practices cite as the main obstacle to offering it. Rural patients, who travel furthest, report the highest satisfaction with remote care.",
    q: "Which of the following statements is correct based only on the passage?",
    options: [
      "Practices cite lower reimbursement rates as the main obstacle to offering remote care.",
      "Doctors consider video consultations ideal for first visits.",
      "Telemedicine use returned to pre-pandemic levels.",
      "Urban patients report the highest satisfaction with remote care."
    ], a: 0,
    expl: "Where remote care is reimbursed at lower rates, practices call this 'the main obstacle'. Video works 'poorly' for first visits; use 'remained common'; RURAL patients are most satisfied." },

  { id: "vr21",
    passage: "Museums digitising their collections put millions of artworks online, yet digitisation is not primarily about public access. Curators note that high-resolution imaging reveals details invisible to visitors, supports conservation by documenting an object's state, and allows researchers worldwide to compare works without travel. The costs are substantial — photography, storage and cataloguing metadata — and smaller museums often lack the staff, so national platforms increasingly pool infrastructure. Public engagement online, meanwhile, tends to concentrate on a tiny fraction of famous works.",
    q: "Which of the following statements is correct based only on the passage?",
    options: [
      "Online public engagement concentrates on a small fraction of famous works.",
      "Digitisation's primary purpose is public access.",
      "Digitisation is inexpensive once photography is done.",
      "Smaller museums generally run their own digitisation platforms."
    ], a: 0,
    expl: "Engagement 'tends to concentrate on a tiny fraction of famous works'. The passage explicitly says digitisation is NOT primarily about access, costs are 'substantial', and smaller museums pool national infrastructure." },

  { id: "vr22",
    passage: "Southern Europe's reservoirs are increasingly stressed by longer droughts, and agriculture, which uses the majority of extracted water in the region, faces growing restrictions. Drip irrigation can cut water use per hectare sharply, but researchers observe a rebound effect: farmers who save water per hectare sometimes expand irrigated area or switch to thirstier, more profitable crops, leaving total extraction unchanged. For this reason, hydrologists argue that efficiency subsidies should be paired with enforceable caps on total water abstraction.",
    q: "Which of the following statements is correct based only on the passage?",
    options: [
      "Hydrologists argue that efficiency subsidies should be combined with caps on total water abstraction.",
      "Drip irrigation always reduces total water extraction.",
      "Agriculture uses a minority of extracted water in southern Europe.",
      "Farmers who adopt drip irrigation never change their crops."
    ], a: 0,
    expl: "Because of the rebound effect, efficiency gains per hectare don't guarantee lower totals — hence the call to pair subsidies with caps. Agriculture uses 'the majority' of water." },

  { id: "vr23",
    passage: "Employers increasingly use software to screen job applications before a human sees them. Vendors claim the tools reduce bias by applying identical criteria to every CV, but audits have found that systems trained on past hiring decisions can reproduce the very patterns they were meant to remove. European legislation now classifies recruitment algorithms as high-risk, requiring documentation, human oversight and bias testing. Several large employers responded by simplifying their tools, reasoning that transparent keyword rules are easier to audit than complex models.",
    q: "Which of the following statements is correct based only on the passage?",
    options: [
      "Audits found that systems trained on past hiring decisions can reproduce existing biases.",
      "European legislation bans recruitment algorithms outright.",
      "Vendors admit their tools increase bias.",
      "Complex models are easier to audit than keyword rules."
    ], a: 0,
    expl: "Training on past decisions can 'reproduce the very patterns they were meant to remove'. The law classifies such tools as high-risk (not banned); vendors CLAIM bias reduction; keyword rules are described as easier to audit." },

  { id: "vr24",
    passage: "The number of tracked objects orbiting Earth has multiplied with the launch of large satellite constellations. Collisions are rare, but each one creates thousands of fragments that stay in orbit for years, raising the risk of further impacts. Operators of large constellations now design satellites to deorbit within a few years of ending service, and space agencies are testing missions to capture derelict objects. Experts stress, however, that removing a handful of large defunct satellites would do more to stabilise the debris environment than capturing many small fragments.",
    q: "Which of the following statements is correct based only on the passage?",
    options: [
      "Experts say removing a few large defunct satellites would help more than capturing many small fragments.",
      "Collisions in orbit are frequent events.",
      "Debris fragments fall back to Earth within days.",
      "Capture missions for derelict objects are already routine."
    ], a: 0,
    expl: "Removing 'a handful of large defunct satellites would do more'. Collisions are 'rare', fragments stay up 'for years', and capture missions are being 'tested', not routine." },

  { id: "vr25",
    passage: "Chronic exposure to traffic noise is associated with elevated risks of hypertension and heart disease, and the World Health Organization ranks it among the most harmful environmental exposures in Europe after air pollution. Cities have experimented with quieter road surfaces, lower night-time speed limits and continuous noise monitoring. Quiet asphalt loses part of its acoustic benefit within several years as its pores clog, so engineers see it as a complement to, rather than a substitute for, measures that reduce traffic volume itself.",
    q: "Which of the following statements is correct based only on the passage?",
    options: [
      "Quiet asphalt loses part of its acoustic benefit over time as its pores clog.",
      "Traffic noise is ranked as more harmful than air pollution in Europe.",
      "Quiet road surfaces make traffic-reduction measures unnecessary.",
      "Noise exposure has no proven link to cardiovascular disease."
    ], a: 0,
    expl: "The clogging effect is stated directly. Noise ranks among the most harmful exposures AFTER air pollution, and quiet asphalt is 'a complement to, rather than a substitute for' traffic reduction." },

  { id: "vr26",
    passage: "Vertical farms grow vegetables in stacked indoor layers under artificial light, using a small fraction of the land and water of field agriculture and no pesticides. Their economics, however, are dominated by electricity: lighting and climate control account for the majority of operating costs, which is why most commercially viable operations focus on fast-growing, high-value crops such as herbs and salad greens. Staple crops like wheat remain far from profitable indoors, and several heavily funded start-ups collapsed when energy prices rose.",
    q: "Which of the following statements is correct based only on the passage?",
    options: [
      "Most viable vertical farms focus on fast-growing, high-value crops such as herbs and salads.",
      "Vertical farms use more water than field agriculture.",
      "Growing wheat indoors is close to profitability.",
      "Energy costs are a minor part of vertical farms' operating expenses."
    ], a: 0,
    expl: "High-value fast crops dominate because electricity is 'the majority of operating costs'. Water use is a 'small fraction' of field farming's; wheat is 'far from profitable' indoors." },

  { id: "vr27",
    passage: "Some historic city centres now receive more day visitors than they have residents. Local governments have introduced tourist taxes, caps on short-term rentals and timed entry for the most crowded sites. Evidence on these tools is mixed: taxes raise revenue but rarely reduce arrivals at typical rates, while rental caps appear to slow the conversion of housing into visitor accommodation in the neighbourhoods where they are enforced. Officials increasingly frame the goal as managing flows — spreading visitors over time and space — rather than reducing overall numbers.",
    q: "Which of the following statements is correct based only on the passage?",
    options: [
      "Tourist taxes raise revenue but rarely reduce visitor arrivals at typical rates.",
      "Rental caps have proved ineffective everywhere.",
      "Officials mainly aim to cut total visitor numbers.",
      "Timed entry systems have been abandoned."
    ], a: 0,
    expl: "Taxes 'raise revenue but rarely reduce arrivals'. Rental caps 'appear to slow' conversion where enforced; the framed goal is managing flows, 'rather than reducing overall numbers'." },

  { id: "vr28",
    passage: "Although most plastic packaging is technically recyclable, actual recycling rates remain far lower than collection rates suggest. Mixed and multi-layer materials are costly to separate, and recycled plastic often competes with cheap virgin plastic, undermining the business case. Regulators are therefore moving beyond collection targets: minimum recycled-content requirements create guaranteed demand, while design rules push producers toward single-material packaging that sorting plants can actually process. Industry groups broadly support recycled-content mandates but warn that food-grade recycled plastic remains in short supply.",
    q: "Which of the following statements is correct based only on the passage?",
    options: [
      "Minimum recycled-content requirements are intended to create guaranteed demand for recycled plastic.",
      "Collection rates equal actual recycling rates.",
      "Industry groups oppose recycled-content mandates outright.",
      "Multi-layer packaging is the easiest to recycle."
    ], a: 0,
    expl: "Recycled-content rules 'create guaranteed demand'. Recycling rates are 'far lower' than collection suggests; industry 'broadly supports' mandates while warning of supply; multi-layer materials are 'costly to separate'." },

  { id: "vr29",
    passage: "Platform work — delivering meals or driving passengers through an app — offers flexible hours but often without the protections of employment. Court rulings across Europe have repeatedly reclassified individual platform workers as employees, yet outcomes differ by country and platform, creating legal uncertainty. New EU rules introduce a presumption of employment when a platform exercises control, shifting the burden of proof: instead of workers having to demonstrate that they are employees, platforms must demonstrate that the workers are genuinely self-employed.",
    q: "Which of the following statements is correct based only on the passage?",
    options: [
      "Under the new rules, platforms must prove that workers are genuinely self-employed.",
      "All platform workers in Europe are now employees.",
      "Court rulings on platform work have been identical across countries.",
      "The new rules abolish flexible working hours."
    ], a: 0,
    expl: "The burden of proof shifts to platforms where control is exercised. Reclassification happened in individual cases with outcomes that 'differ by country'; nothing says all workers become employees." },

  { id: "vr30",
    passage: "Forest fires in Mediterranean Europe are becoming more intense, and researchers attribute this less to ignition — most fires are still started by people — than to fuel accumulation: as rural populations declined, grazing and firewood collection stopped clearing undergrowth. Massive investment in firefighting aircraft has not reduced burned areas over the long term, leading agencies to redirect funds toward prevention: prescribed burns, grazing corridors and discontinuities in vegetation that slow a fire's spread. Such measures are cheaper but politically harder, because their benefits are invisible until a fire arrives.",
    q: "Which of the following statements is correct based only on the passage?",
    options: [
      "Prevention measures are cheaper than aerial firefighting but politically harder to sustain.",
      "Most Mediterranean fires start naturally.",
      "Investment in aircraft has steadily reduced burned areas.",
      "Rural population growth has increased fuel accumulation."
    ], a: 0,
    expl: "Prevention is 'cheaper but politically harder' because benefits are invisible. Most fires are 'started by people'; aircraft investment 'has not reduced burned areas'; rural DECLINE drove fuel accumulation." },

  { id: "vr31",
    passage: "Wild pollinator populations are declining in much of Europe, with consequences beyond honey: a substantial share of crop production depends at least partly on insect pollination. Managed honeybee hives cannot fully substitute for wild species, which fly in colder weather and pollinate certain plants more effectively. Agri-environment schemes now pay farmers to plant flower strips along field edges; monitoring shows they increase pollinator abundance locally, though effects on population trends at national scale have not yet been demonstrated.",
    q: "Which of the following statements is correct based only on the passage?",
    options: [
      "Flower strips increase pollinator abundance locally, but national-scale effects are not yet demonstrated.",
      "Managed honeybees can fully replace wild pollinators.",
      "Wild pollinators cannot fly in cold weather.",
      "Crop production in Europe does not depend on insect pollination."
    ], a: 0,
    expl: "Local increases are shown; national trends 'have not yet been demonstrated'. Honeybees 'cannot fully substitute' for wild species, which fly in COLDER weather." },

  { id: "vr32",
    passage: "Engineered timber strong enough for high-rise construction has renewed interest in wooden buildings, which store carbon and are faster to assemble than concrete structures because elements arrive prefabricated. Insurers initially charged higher premiums, citing fire risk, although laboratory tests show that thick timber panels char on the surface while retaining structural integrity longer than unprotected steel. Building codes in several countries now permit timber buildings above ten storeys, and the constraint has shifted to supply: certified structural timber remains scarcer than demand.",
    q: "Which of the following statements is correct based only on the passage?",
    options: [
      "In tests, thick timber panels char at the surface while keeping structural integrity longer than unprotected steel.",
      "Timber high-rises remain illegal everywhere.",
      "Timber buildings are slower to assemble than concrete ones.",
      "Certified structural timber is abundant relative to demand."
    ], a: 0,
    expl: "The charring behaviour is stated directly. Codes in several countries now PERMIT tall timber buildings; assembly is FASTER; certified timber is 'scarcer than demand'." },

  { id: "vr33",
    passage: "Although cash payments are declining across Europe, central banks insist that cash must remain available and accepted. Their argument is partly about inclusion — some consumers cannot or prefer not to use digital payments — and partly about resilience: cash works during power cuts and network outages. Several countries have introduced rules requiring shops to accept cash or obliging banks to maintain minimum ATM coverage. Meanwhile, payment habits differ sharply between member states, with cash still used for most point-of-sale transactions in some and a small minority in others.",
    q: "Which of the following statements is correct based only on the passage?",
    options: [
      "Central banks defend cash partly because it works during power cuts and network outages.",
      "Cash use is uniform across European countries.",
      "All European countries oblige shops to accept cash.",
      "Central banks want to phase out cash."
    ], a: 0,
    expl: "Resilience during outages is one of the two stated arguments. Habits 'differ sharply' between states; only 'several countries' introduced acceptance rules; central banks INSIST cash remain available." },

  { id: "vr34",
    passage: "Europe's population is ageing, and public pension systems that pay current retirees from current workers' contributions face a shrinking ratio of contributors to beneficiaries. Governments have responded by linking retirement ages to life expectancy, encouraging private saving, and trying to raise employment among older workers. Economists point out that the third lever is often underestimated: raising the actual age at which people stop working matters more than the legal retirement age, since many leave the labour market early through unemployment or disability schemes.",
    q: "Which of the following statements is correct based only on the passage?",
    options: [
      "Economists argue that the actual exit age from work matters more than the legal retirement age.",
      "Pay-as-you-go pensions are financed from accumulated reserves.",
      "The ratio of contributors to beneficiaries is rising.",
      "Most workers stay employed until the legal retirement age."
    ], a: 0,
    expl: "The actual stopping age 'matters more than the legal retirement age' because many exit early. Pay-as-you-go systems pay retirees 'from current workers' contributions', and the contributor ratio is SHRINKING." },

  { id: "vr35",
    passage: "Microplastics have been detected in rivers, soils, drinking water and human tissue, but measuring their health effects is difficult: particles vary enormously in size, shape and chemical composition, and no standard method exists for counting them. Toxicologists caution that detecting particles is not the same as demonstrating harm, while also noting that absence of evidence partly reflects how recently the field emerged. Regulators have begun acting on the precautionary principle, banning intentionally added microplastics in products such as cosmetics.",
    q: "Which of the following statements is correct based only on the passage?",
    options: [
      "Regulators have banned intentionally added microplastics in products such as cosmetics.",
      "A standard method for counting microplastics has existed for decades.",
      "Detecting particles in tissue proves they cause harm.",
      "Toxicologists say the health question is fully settled."
    ], a: 0,
    expl: "The cosmetics ban is stated as a precautionary action. 'No standard method exists'; detection 'is not the same as demonstrating harm'; the field is described as young, not settled." },

  { id: "vr36",
    passage: "Car-sharing services promised to reduce urban car ownership, and studies in several cities find that each shared vehicle replaces several private cars — but the effect depends heavily on the service model. Station-based systems, where cars must be returned to fixed spots, show the strongest substitution of ownership. Free-floating services are used more spontaneously and can compete with public transport for short trips rather than with private cars. City governments have started differentiating parking privileges accordingly.",
    q: "Which of the following statements is correct based only on the passage?",
    options: [
      "Station-based car-sharing shows stronger substitution of car ownership than free-floating services.",
      "Free-floating services mainly replace privately owned cars.",
      "Car-sharing has identical effects regardless of service model.",
      "Cities grant the same parking privileges to all car-sharing models."
    ], a: 0,
    expl: "Station-based systems 'show the strongest substitution of ownership', while free-floating can compete with public transport; cities have 'started differentiating' privileges." },

  { id: "vr37",
    passage: "Healthy soils store carbon, retain water and sustain yields, yet a large share of European agricultural soils are considered degraded. Compaction from heavy machinery, loss of organic matter and erosion develop slowly, which makes the damage easy to ignore until yields fall. Practices such as cover crops and reduced tillage can rebuild organic matter, but their benefits take years to materialise while the costs are immediate — one reason adoption remains limited without financial incentives. A proposed EU soil monitoring law would first establish common indicators, since member states currently measure soil health differently.",
    q: "Which of the following statements is correct based only on the passage?",
    options: [
      "Adoption of soil-restoring practices is limited partly because costs are immediate while benefits take years.",
      "Soil degradation happens suddenly and is easy to notice.",
      "Member states already measure soil health identically.",
      "Cover crops deliver their full benefits within one season."
    ], a: 0,
    expl: "The cost-benefit timing mismatch is the stated reason adoption 'remains limited without financial incentives'. Degradation develops 'slowly'; states measure soil health 'differently'." },

  { id: "vr38",
    passage: "Artificial light at night has increased steadily, eroding the visibility of stars and disturbing nocturnal wildlife, from insects to migrating birds. Municipalities switching to LED street lighting cut energy costs but sometimes worsen light pollution, because cheap LEDs emit blue-rich light that scatters more in the atmosphere. Dark-sky advocates therefore push for warmer color temperatures, full shielding that directs light downward, and dimming schedules — measures that, unusually for environmental policy, tend to save money rather than cost it.",
    q: "Which of the following statements is correct based only on the passage?",
    options: [
      "Dark-sky measures such as shielding and dimming tend to save municipalities money.",
      "LED street lighting always reduces light pollution.",
      "Blue-rich light scatters less in the atmosphere.",
      "Light pollution affects only star visibility, not wildlife."
    ], a: 0,
    expl: "The measures 'tend to save money rather than cost it'. LEDs 'sometimes worsen' pollution because blue-rich light scatters MORE; wildlife from insects to birds is affected." },

  { id: "vr39",
    passage: "Apprenticeship systems that combine paid workplace training with classroom instruction are credited with low youth unemployment in several countries. Attempts to transplant the model elsewhere have had mixed results: it depends on employers willing to train beyond their immediate needs, on trusted qualifications recognised across firms, and on social acceptance of vocational routes as equal in status to universities. Where academic tracks carry much higher prestige, expanding apprenticeship places has often proved easier than filling them.",
    q: "Which of the following statements is correct based only on the passage?",
    options: [
      "Where academic routes have higher prestige, filling apprenticeship places can be harder than creating them.",
      "The apprenticeship model transfers easily to any country.",
      "Apprentices receive no payment during workplace training.",
      "Apprenticeships require no employer involvement."
    ], a: 0,
    expl: "'Expanding apprenticeship places has often proved easier than filling them.' Transplants had 'mixed results'; training is PAID; employers' willingness to train is a core condition." },

  { id: "vr40",
    passage: "Desalination provides a growing share of drinking water in water-scarce coastal regions. Modern reverse-osmosis plants use far less energy than older thermal technology, yet energy still dominates operating costs, tying the price of water to electricity markets. The concentrated brine returned to the sea can harm local ecosystems if poorly dispersed, which is why permits increasingly require diffuser systems and monitoring. Inland regions benefit little, since pumping desalinated water uphill over long distances often costs more than the desalination itself.",
    q: "Which of the following statements is correct based only on the passage?",
    options: [
      "Transporting desalinated water uphill to inland regions often costs more than desalinating it.",
      "Modern desalination uses more energy than older thermal plants.",
      "Brine discharge is harmless to marine ecosystems.",
      "The price of desalinated water is independent of electricity prices."
    ], a: 0,
    expl: "Pumping inland 'often costs more than the desalination itself'. Reverse osmosis uses 'far less' energy than thermal; brine 'can harm' ecosystems; water price is tied to electricity markets." },

  { id: "vr41",
    passage: "Handwriting instruction is shrinking in many school curricula as keyboards dominate daily life. Cognitive scientists urge caution: in experiments, children who learn letters by writing them by hand recognise those letters faster than children who learn by typing, and university students who take handwritten notes tend to paraphrase, which is associated with better retention of concepts than the verbatim transcription typing encourages. None of this settles how much handwriting practice is enough, a question the studies were not designed to answer.",
    q: "Which of the following statements is correct based only on the passage?",
    options: [
      "Handwritten note-taking encourages paraphrasing, which is associated with better retention of concepts.",
      "The studies establish exactly how much handwriting practice children need.",
      "Typing has been shown to improve letter recognition in children.",
      "Cognitive scientists recommend removing handwriting from curricula."
    ], a: 0,
    expl: "Handwriting notes → paraphrasing → better conceptual retention. The studies 'were not designed to answer' how much practice is enough; hand-writing children recognise letters faster." },

  { id: "vr42",
    passage: "Insurers are quietly redrawing flood-risk maps as extreme rainfall becomes more frequent. In some river basins, premiums for homes that have never flooded have risen sharply because new models rate their future risk highly. Consumer groups complain that homeowners cannot verify the models behind their premiums, while insurers respond that publishing full model details would allow competitors to copy years of proprietary work. Several regulators now require insurers to disclose at least the main factors driving individual risk scores.",
    q: "Which of the following statements is correct based only on the passage?",
    options: [
      "Premiums have risen for some homes that have never flooded, because models rate their future risk highly.",
      "Only homes with a history of flooding face higher premiums.",
      "Insurers have published their full flood models.",
      "Regulators forbid disclosing risk factors to homeowners."
    ], a: 0,
    expl: "Never-flooded homes can still be re-rated by forward-looking models. Insurers resist FULL disclosure; several regulators require disclosing the MAIN factors." },

  { id: "vr43",
    passage: "The revival of night trains in Europe faces a practical constraint that enthusiasm cannot remove: rolling stock. Sleeper carriages are a niche product, ordered in small series, and the few manufacturers that build them quote delivery times of several years. Operators that announced new routes have sometimes had to postpone launches or run daytime carriages with reclining seats instead of beds. Public funding has therefore started to target carriage procurement itself, on the reasoning that routes can be opened quickly once vehicles exist.",
    q: "Which of the following statements is correct based only on the passage?",
    options: [
      "Some operators postponed launches or substituted daytime carriages because sleeper carriages were unavailable.",
      "Sleeper carriages are mass-produced with short delivery times.",
      "Public funding for night trains avoids rolling stock on principle.",
      "Enthusiasm for night trains has eliminated practical constraints."
    ], a: 0,
    expl: "Postponements and seat-only substitutions are stated directly. Carriages are 'ordered in small series' with multi-year delivery; funding now targets procurement." },

  { id: "vr44",
    passage: "A growing number of employers offer 'workcations', letting staff work remotely from holiday destinations for limited periods. Tax advisers warn that the practice is legally more complicated than it looks: an employee working from another country for long enough can create tax obligations for the employer there, and social security coverage depends on bilateral rules that differ by country pair. Larger firms have responded with formal policies capping foreign remote work at a set number of days and restricting it to approved countries.",
    q: "Which of the following statements is correct based only on the passage?",
    options: [
      "Extended remote work from another country can create tax obligations for the employer there.",
      "Workcations have no legal implications for employers.",
      "Social security rules for cross-border remote work are identical everywhere.",
      "Larger firms ban all remote work from abroad."
    ], a: 0,
    expl: "The employer-side tax risk is stated. Social security 'depends on bilateral rules that differ'; large firms CAP and restrict foreign remote work rather than banning it." },

  { id: "vr45",
    passage: "Community energy cooperatives, in which residents jointly own solar panels or a wind turbine, are spreading unevenly across Europe. Where grid operators offer simple connection procedures and feed-in revenues are predictable, cooperatives multiply; where administrative steps take years, they remain rare regardless of public enthusiasm. Researchers studying the movement note a further pattern: cooperatives founded by experienced volunteers from earlier projects grow faster, suggesting that expertise, not only capital, constrains the model's expansion.",
    q: "Which of the following statements is correct based only on the passage?",
    options: [
      "Researchers suggest that expertise, not only capital, constrains the growth of energy cooperatives.",
      "Public enthusiasm guarantees cooperative growth even amid slow administration.",
      "Cooperatives spread evenly across all European countries.",
      "Grid connection procedures are irrelevant to cooperative formation."
    ], a: 0,
    expl: "Experienced founders → faster growth → 'expertise, not only capital, constrains'. Slow procedures keep cooperatives rare 'regardless of public enthusiasm'." },

  { id: "vr46",
    passage: "Large language models can draft legal documents in seconds, and several law firms now use them for first versions of routine contracts. Bar associations have issued guidance rather than bans: lawyers remain fully responsible for what they file, must verify citations — models have been known to invent plausible-looking case references — and must protect client confidentiality when using external tools. Insurance data will eventually show whether drafting errors rise or fall, but such evidence takes years to accumulate.",
    q: "Which of the following statements is correct based only on the passage?",
    options: [
      "Bar associations issued guidance making lawyers fully responsible for verifying model output.",
      "Bar associations have banned the use of language models in law firms.",
      "Insurance data has already proven that drafting errors fall with AI use.",
      "Language models never invent case references."
    ], a: 0,
    expl: "Guidance 'rather than bans', with responsibility and citation-checking on the lawyer. Models 'have been known to invent' references; insurance evidence 'takes years'." },

  { id: "vr47",
    passage: "Reintroducing beavers has become a popular river-restoration tool: their dams slow water flow, creating wetlands that store water in droughts and buffer floods downstream. Conflicts arise where dams flood farmland or block fish passage, and management now focuses on coexistence — flow devices that regulate pond height, compensation for damaged crops, and relocation as a last resort. Long-term studies indicate that catchments with beavers show more stable summer water levels than comparable catchments without them.",
    q: "Which of the following statements is correct based only on the passage?",
    options: [
      "Catchments with beavers show more stable summer water levels than comparable ones without them.",
      "Beaver dams accelerate water flow downstream.",
      "Relocation is the first management response to conflicts.",
      "Beaver reintroduction causes no conflicts with farming."
    ], a: 0,
    expl: "The long-term finding on stable summer levels is stated. Dams SLOW flow; relocation is 'a last resort'; flooding farmland is a named conflict." },

  { id: "vr48",
    passage: "Volunteer fire brigades form the backbone of rural emergency response in several member states, but their membership is ageing. Recruitment campaigns aimed at young adults have had limited success, which officers attribute to commuting: many residents now work far from where they live and simply cannot respond to daytime alarms. Some municipalities have begun recruiting employees of local businesses with their employers' agreement, compensating the firms for hours lost — an arrangement that has measurably improved daytime response in pilot areas.",
    q: "Which of the following statements is correct based only on the passage?",
    options: [
      "Compensating local employers for lost hours has measurably improved daytime response in pilot areas.",
      "Recruitment campaigns aimed at young adults solved the staffing problem.",
      "Commuting has no effect on volunteers' availability.",
      "Volunteer brigades are being replaced by professional ones."
    ], a: 0,
    expl: "The employer-compensation pilots 'measurably improved daytime response'. Youth campaigns had 'limited success' precisely because commuters can't attend daytime alarms." },

  { id: "vr49",
    passage: "Repair cafés, where volunteers fix broken household items for free, have grown from a handful to thousands of locations. Their direct effect on waste volumes is small — a few tonnes per café annually at best — but advocates argue their real value lies elsewhere: data collected on common failures feeds into campaigns for better product design, and visitors report greater willingness to attempt repairs themselves afterwards. New EU right-to-repair rules, requiring spare parts to remain available for years, address one of the barriers cafés most frequently document.",
    q: "Which of the following statements is correct based only on the passage?",
    options: [
      "Advocates locate the cafés' main value in design campaigns and changed visitor behaviour rather than waste volumes.",
      "Repair cafés divert large volumes of waste directly.",
      "Visitors become less willing to repair items themselves.",
      "EU rules ignore the availability of spare parts."
    ], a: 0,
    expl: "Direct waste impact is 'small'; the argued value is failure data for design campaigns plus visitors' increased willingness to repair. The EU rules require spare-part availability." },

  { id: "vr50",
    passage: "Sports federations are experimenting with biological passports, which track an athlete's blood values over time instead of testing for specific substances. The approach flags abnormal variations that indirect doping methods produce, and it has led to sanctions where no banned substance was ever detected. Defence lawyers counter that medical conditions and altitude training can also shift blood values, so passport cases rely on expert panels to exclude innocent explanations — a process athletes' unions criticise as slow and opaque.",
    q: "Which of the following statements is correct based only on the passage?",
    options: [
      "Biological passports have led to sanctions even where no banned substance was detected.",
      "Passports test directly for banned substances.",
      "Altitude training cannot affect blood values.",
      "Athletes' unions praise the speed of passport proceedings."
    ], a: 0,
    expl: "Sanctions followed 'where no banned substance was ever detected'. Passports track values over time (not substances); altitude training CAN shift values; unions criticise the process as 'slow and opaque'." }
];
