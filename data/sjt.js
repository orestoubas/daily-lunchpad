/* EPSO situational judgement bank. {id, competency, q, options[4], a, expl} */
"use strict";

const SJT_QUESTIONS = [
  {
    "id": "sj001",
    "competency": "Prioritising & organising",
    "q": "Your head of unit asks you on Monday to prepare a briefing for the Commissioner by Thursday. The same morning a colleague reminds you that your contribution to an interservice consultation is due Wednesday and that this deadline is fixed by the procedure. Which action would be MOST effective?",
    "options": [
      "Work late on both files so that neither deadline is missed and nobody needs to be told about the clash.",
      "Ask the coordinating unit to request an extension of the interservice consultation on your behalf.",
      "Map the real deadlines and the effort each task needs, then propose a sequence to your head of unit and have her confirm which file comes first.",
      "Start with the Commissioner briefing, because requests coming from your own hierarchy always take precedence."
    ],
    "a": 2,
    "expl": "Prioritising and organising means assessing urgency and impact and then confirming the order of work with the person who owns the priorities, rather than assuming it. Option D is plausible but applies a blanket rule and ignores that the interservice deadline is procedurally fixed; option A hides a genuine conflict and puts quality at risk on both files."
  },
  {
    "id": "sj002",
    "competency": "Working with others",
    "q": "You are drafting a joint report with a colleague from another unit who has twice failed to send his section, without explaining why. The coordinator expects the complete draft in three days. Which action would be MOST effective?",
    "options": [
      "Draft his section yourself from the available material so the report is complete on time.",
      "Contact him directly to find out what is blocking him, agree a firm delivery date, and tell the coordinator at once if that date puts the report at risk.",
      "Send the draft to the coordinator with his section marked as missing so the delay is visible.",
      "Send a reminder setting a new deadline and copy the coordinator and both heads of unit."
    ],
    "a": 1,
    "expl": "Working with others starts with a direct, non-accusatory approach to the colleague to understand the cause, combined with transparency towards the coordinator on any real risk to the deadline. Option D is tempting because it creates pressure, but escalating by copying hierarchy before speaking to the person damages the working relationship and skips the step that could actually unblock the file."
  },
  {
    "id": "sj003",
    "competency": "Communicating",
    "q": "Your head of unit asks you to send a note to a Member State in terms that you believe misstate the current legal position, and you have the relevant case law to hand. The note is due tomorrow. Which action would be MOST effective?",
    "options": [
      "Send the note as instructed and record your reservations in the file.",
      "Redraft the note in the wording you consider correct, send it, and explain your reasoning to her afterwards.",
      "Ask the Legal Service for an opinion on the disputed passages before replying to your head of unit.",
      "Request a short meeting, set out the specific passages and the case law that concern you, and propose alternative wording for her decision."
    ],
    "a": 3,
    "expl": "Communicating means raising a disagreement clearly, factually and through the right channel, while leaving the final decision with the responsible manager. Option C is a reasonable instinct but goes outside the unit before the manager has even seen the problem; option B substitutes your own judgement for hers without warning."
  },
  {
    "id": "sj004",
    "competency": "Delivering quality",
    "q": "Reviewing your files, you discover that a figure you supplied last week to another DG is wrong, and it is due to appear in a published question-and-answer document. Which action would be MOST effective?",
    "options": [
      "Establish at once how far the error extends, then inform your head of unit with the corrected figure and a proposal for notifying the other DG.",
      "Send the corrected figure directly to your contact in the other DG and mention it to your head of unit when you next speak.",
      "Check first whether the error is material enough to change any conclusion before deciding whether to raise it.",
      "Include the correction in the next scheduled update of the document so that the published record eventually becomes accurate."
    ],
    "a": 0,
    "expl": "Delivering quality means taking personal responsibility for your output, correcting errors immediately and making sure the people relying on the figure are informed through the proper channel. Option B is close but bypasses your hierarchy on something with external publication consequences; option C delays a correction that is needed regardless of materiality."
  },
  {
    "id": "sj005",
    "competency": "Resilience",
    "q": "Two colleagues in your sector leave within a month and their files are redistributed to you just as the Council working party season begins. After three weeks you are finding the volume genuinely difficult to sustain. Which action would be MOST effective?",
    "options": [
      "Keep going at the current pace and reassess once the working party season is over.",
      "Handle the politically visible files properly and give the remaining files only the minimum attention needed.",
      "Prepare a realistic picture of your files, deadlines and capacity and discuss with your head of unit which tasks can be resequenced, reassigned or postponed.",
      "Ask your staff representative to press management for the two vacant posts to be filled urgently."
    ],
    "a": 2,
    "expl": "Resilience is about remaining effective under heavy workload, which includes recognising a limit early and dealing with it constructively and factually rather than absorbing it silently. Option A looks robust but risks a collapse in quality across all files; option C turns the pressure into an evidenced discussion with the person who can actually reallocate work."
  },
  {
    "id": "sj006",
    "competency": "Leadership",
    "q": "You coordinate a team of four on an evaluation study. One member repeatedly submits drafts needing heavy rework, and the others are starting to absorb his corrections. Which action would be MOST effective?",
    "options": [
      "Reassign his tasks to the stronger members so that the study stays on schedule.",
      "Meet him privately, give specific examples of what falls short, agree what an acceptable draft looks like and set an early review point.",
      "Explain the expected quality standard at the next team meeting so that the whole team hears the same message.",
      "Report the problem to the head of unit so that it can be taken into account in his appraisal."
    ],
    "a": 1,
    "expl": "Leadership means addressing performance directly with the person concerned, being concrete about the gap and giving them a fair chance to close it before anything is escalated. Option C is plausible but addresses one person's problem through a group message, which is neither clear nor fair; option A removes the issue instead of resolving it and overloads the rest of the team."
  },
  {
    "id": "sj007",
    "competency": "Learning & development",
    "q": "A newly recruited colleague has joined your unit and you have been asked to help him settle in. He asks you frequent questions while you are yourself under deadline pressure. Which action would be MOST effective?",
    "options": [
      "Send him the unit procedure manuals and ask him to come back only with the questions they do not answer.",
      "Ask him to save his questions for a single weekly slot so that your own work is not constantly interrupted.",
      "Answer every question as it arises, since a newcomer needs support immediately.",
      "Agree a short daily check-in for the first weeks, point him to the key reference documents, and give him a small file to run himself with your review."
    ],
    "a": 3,
    "expl": "Learning and development includes helping others build knowledge, and the fastest route to autonomy is structured contact plus real work with a safety net. Option C is well intentioned but keeps him dependent on you and destroys your own concentration; option D protects both his learning curve and your deadlines."
  },
  {
    "id": "sj008",
    "competency": "Analysis & problem solving",
    "q": "Two Member States have submitted figures for the same indicator that differ by a factor of three, and your comparative report is due next week. Both national correspondents are reachable. Which action would be MOST effective?",
    "options": [
      "Trace both figures back to the definitions and reference periods used, then contact the two correspondents to establish on what basis each was calculated.",
      "Use the figure from the Member State whose statistical office is generally regarded as more reliable.",
      "Publish both figures side by side with a footnote pointing out the discrepancy.",
      "Leave both Member States out of the aggregate so that the overall result is not distorted."
    ],
    "a": 0,
    "expl": "Analysis and problem solving means identifying the critical facts and the root cause before choosing a solution, and a threefold gap almost always signals a definitional or methodological difference that can be resolved. Option C is defensible in a pinch but reports a problem instead of solving it, leaving readers to draw their own conclusions from unexplained data."
  },
  {
    "id": "sj009",
    "competency": "Communicating",
    "q": "A colleague from another DG whom you know well asks you to send him a draft proposal that has not yet been adopted by the College and is marked for restricted circulation. He says it would help him plan his own work. Which action would be MOST effective?",
    "options": [
      "Send him the draft, since interservice cooperation depends on colleagues being open with each other.",
      "Refuse and explain that the document is confidential and cannot leave the unit.",
      "Explain that the draft cannot be circulated at this stage, ask what he actually needs it for, and check with your head of unit whether some element can be provided officially.",
      "Forward his request to your head of unit and let her decide how to answer him."
    ],
    "a": 2,
    "expl": "Communicating well here means protecting confidentiality while still addressing the legitimate need behind the request and routing it through the proper channel. Option B respects the rule but ends the conversation unhelpfully; option D avoids any personal judgement and simply passes the problem upwards without adding value."
  },
  {
    "id": "sj010",
    "competency": "Prioritising & organising",
    "q": "An official from another DG asks you for a full extraction and analysis of your programme database within 24 hours for a meeting he is preparing. The work would realistically take three days and you have other commitments. Which action would be MOST effective?",
    "options": [
      "Decline, explaining that the deadline is not compatible with the workload you already have.",
      "Clarify exactly which data he needs and for what decision, offer a usable partial extraction within 24 hours with the rest later, and inform your head of unit.",
      "Accept and set your other tasks aside for the day in order to deliver the full analysis.",
      "Ask your head of unit to speak to the requesting DG about the pattern of unrealistic deadlines."
    ],
    "a": 1,
    "expl": "Prioritising and organising means testing what is genuinely required, then offering a deliverable that meets the real need within the time available while keeping your hierarchy informed. Option A protects your plan but abandons a colleague with a real deadline; option C sacrifices your own commitments to a request that was never scoped."
  },
  {
    "id": "sj011",
    "competency": "Resilience",
    "q": "During a meeting with senior officials from several DGs, a director criticises your background note as superficial in front of the whole room. You believe the note was proportionate to the mandate you were given. Which action would be MOST effective?",
    "options": [
      "Defend your analysis on the spot so that the participants do not leave with a false impression.",
      "Say nothing and revise the note along the lines the director suggested.",
      "Explain to your head of unit afterwards that the criticism was unfair given the mandate.",
      "Listen and note the specific points, ask questions to pin down what is missing, and follow up afterwards with a revised note addressing them."
    ],
    "a": 3,
    "expl": "Resilience means handling criticism without becoming defensive and converting it into concrete improvement, which requires understanding precisely what was found wanting. Option A is understandable but turns a meeting into a personal argument; option D keeps the focus on the work and lets the corrected note speak for itself."
  },
  {
    "id": "sj012",
    "competency": "Working with others",
    "q": "In your multicultural team, one colleague gives very direct written feedback that two others experience as dismissive, and exchanges between them have become terse. The atmosphere is starting to affect a shared deliverable. Which action would be MOST effective?",
    "options": [
      "Speak to each of them separately to understand how the exchanges were meant and how they were received, then bring them together to agree simple working conventions for feedback.",
      "Ask the more direct colleague to soften his tone so that the others are not upset.",
      "Raise it with the head of unit as an interpersonal problem requiring management attention.",
      "Leave it, since teams of different nationalities usually adjust to each other over time."
    ],
    "a": 0,
    "expl": "Working with others requires respecting differences in working and communication style and addressing misunderstandings directly rather than assigning blame. Option B is plausible but treats one person as being at fault when the issue is a mismatch of expectations; option A surfaces both perspectives and produces an agreed way of working."
  },
  {
    "id": "sj013",
    "competency": "Delivering quality",
    "q": "A contractor delivers an interim study report that is late and clearly below the standard set in the tender specifications, with two chapters largely descriptive. Payment of the interim instalment depends on acceptance. Which action would be MOST effective?",
    "options": [
      "Rewrite the two weak chapters yourself so that the deliverable can be accepted without further delay.",
      "Reject the report and start the procedure for terminating the contract.",
      "Assess the report against the tender specifications, send documented comments with a firm deadline for revision, and inform your head of unit and the contract manager.",
      "Accept the report as it stands and record the quality problems for the next call for tenders."
    ],
    "a": 2,
    "expl": "Delivering quality means enforcing the agreed standard within the applicable procedure, with an evidenced assessment that can support any later contractual step. Option B may eventually be justified but jumps to the most severe measure before giving documented feedback; option A rewards underperformance and blurs responsibility for the deliverable."
  },
  {
    "id": "sj014",
    "competency": "Analysis & problem solving",
    "q": "Your head of unit asks you in passing for a short paper on the state of play of a dossier, without saying for whom or by when. She is travelling for the next two days. Which action would be MOST effective?",
    "options": [
      "Draft what you believe is needed and adjust it once she has given feedback.",
      "Send her a brief message asking about the audience, purpose, length and deadline, then propose an outline for confirmation before drafting.",
      "Look at similar papers in the unit archive and follow the same structure and length.",
      "Ask a more experienced colleague what your head of unit normally expects in such papers."
    ],
    "a": 1,
    "expl": "Analysis and problem solving begins with establishing the actual parameters of the problem, and a short clarification costs far less than a paper aimed at the wrong audience. Option C is a sensible fallback and useful in support, but past papers do not tell you the purpose or deadline of this one."
  },
  {
    "id": "sj015",
    "competency": "Leadership",
    "q": "You are chairing a working group meeting with a full agenda. Two participants keep reopening a point that was settled at the previous meeting, and half the time has gone with three items still to cover. Which action would be MOST effective?",
    "options": [
      "Close the discussion firmly and move straight to the next agenda item.",
      "Let the discussion continue, since participants need to feel that their concerns have been heard.",
      "Recall the conclusion already agreed, record the remaining concern for separate follow-up, and steer the group back to the agenda with a clear time check.",
      "Suspend the meeting and reconvene once the two participants have settled the matter bilaterally."
    ],
    "a": 2,
    "expl": "Leadership in a chairing role means keeping the group to its objective while acknowledging concerns rather than dismissing them. Option A restores the timetable but leaves the two participants feeling overruled and likely to reopen the point again; option C gives their concern a place to go and protects the remaining agenda."
  },
  {
    "id": "sj016",
    "competency": "Communicating",
    "q": "You must present the methodology behind a new indicator to a committee of national representatives, most of whom are policy officials rather than statisticians. The methodology involves several technical adjustments. Which action would be MOST effective?",
    "options": [
      "Circulate the full technical annex in advance so that everyone has the same information before the meeting.",
      "Prepare a short non-technical explanation of the method and what it changes in practice, with the technical annex available for those who want the detail.",
      "Present the methodology in full technical detail so that nobody can accuse you of oversimplifying.",
      "Ask a statistician from your unit to give the presentation instead of you."
    ],
    "a": 1,
    "expl": "Communicating means tailoring the message to the audience without sacrificing accuracy, which is exactly what a plain-language explanation backed by an available annex achieves. Option A is a reasonable supporting step but assumes a policy audience will extract the essentials from a technical document themselves."
  },
  {
    "id": "sj017",
    "competency": "Prioritising & organising",
    "q": "Three meetings you are expected to attend have been scheduled for the same two hours: an interservice group where your file is on the agenda for decision, a unit meeting, and a technical exchange with a Member State. Which action would be MOST effective?",
    "options": [
      "Attend the most senior of the three and ask for the minutes of the other two.",
      "Join each of the three remotely for part of the time so that you are present at all of them.",
      "Ask your assistant to try to reschedule all three meetings.",
      "Identify which meeting genuinely needs your input for a decision, arrange coverage or a written contribution for the others, and tell the organisers what you have done."
    ],
    "a": 3,
    "expl": "Prioritising and organising means judging where your presence changes the outcome and then organising substitutes or written input for the rest, transparently. Option A gets the ranking partly right but treats seniority as the criterion rather than the decision at stake, and leaves the other organisers uninformed."
  },
  {
    "id": "sj018",
    "competency": "Delivering quality",
    "q": "Preparing a file for signature, you notice that a required interservice consultation was never launched, although the substance has been informally agreed with the services concerned. The file is expected upstairs this week. Which action would be MOST effective?",
    "options": [
      "Check the exact procedural requirement, then flag the omission to the file owner and your head of unit together with the time needed to put it right.",
      "Continue, since the services involved have already agreed and the omission is purely formal.",
      "Launch the missing consultation yourself immediately to save time.",
      "Record the omission in the file so that it can be explained if it is ever questioned."
    ],
    "a": 0,
    "expl": "Delivering quality means working within the applicable procedures and making a procedural defect visible to those responsible, together with its practical consequences. Option C shows initiative but takes a procedural step that is not yours to launch and hides the problem from the people accountable for the file."
  },
  {
    "id": "sj019",
    "competency": "Resilience",
    "q": "After eight months of preparation, the initiative you have been working on is dropped following a change of political priorities. Your head of unit tells you briefly and asks you to move to a new file. Which action would be MOST effective?",
    "options": [
      "Ask her to reconsider, setting out again the evidence supporting the initiative.",
      "Ask what changed so that you understand the decision, secure the analysis and data that remain usable for the future, and turn to the new file.",
      "Accept the decision without comment and wait to be assigned your next tasks.",
      "Tell the team about your disappointment so that everyone understands the effort was not wasted."
    ],
    "a": 1,
    "expl": "Resilience means adapting to changing priorities without losing effectiveness, and preserving reusable work is what stops eight months from being wasted. Option A is understandable but reopens a decision taken at political level on grounds that were never technical; option B accepts the change and extracts value from it."
  },
  {
    "id": "sj020",
    "competency": "Working with others",
    "q": "A seconded national expert in your team notices that several decisions affecting his files were taken in informal corridor discussions to which he was not invited. He mentions to you that he often learns things too late. Which action would be MOST effective?",
    "options": [
      "Tell him informally what he has missed after each such discussion.",
      "Raise the matter with the head of unit as a management problem to be corrected.",
      "Propose that decisions taken informally are briefly recorded and circulated, and make sure he is included in the discussions that concern his files.",
      "Encourage him to be more assertive about asking to be included in discussions."
    ],
    "a": 2,
    "expl": "Working with others means making cooperation work structurally, not just personally, and a light record plus proper invitations fixes the cause rather than the symptom. Option A helps him individually but leaves the exclusion mechanism untouched; option D puts the burden entirely on the person being left out."
  },
  {
    "id": "sj021",
    "competency": "Learning & development",
    "q": "In your appraisal interview your head of unit says your notes are well researched but far too long for the readers they are aimed at. You had not previously received this feedback. Which action would be MOST effective?",
    "options": [
      "Ask for concrete examples of notes that were too long, agree with her a way of practising more concise drafting, and ask for feedback on your next few notes.",
      "Enrol in the first available drafting course offered by the training service.",
      "Ask a colleague known for concise drafting to review your notes before you send them.",
      "Cut the length of your future notes by half as a rule."
    ],
    "a": 0,
    "expl": "Learning and development means accepting feedback, converting it into a concrete plan and checking whether the change actually works, which requires examples and a feedback loop with the person who gave the criticism. Option C is genuinely useful support but relies on someone else filtering your drafts rather than developing your own drafting judgement."
  },
  {
    "id": "sj022",
    "competency": "Analysis & problem solving",
    "q": "Over three months your unit has received a stream of complaints from different services about a reporting tool producing inconsistent outputs. You have been fixing each case individually as it arrives. Which action would be MOST effective?",
    "options": [
      "Continue resolving each complaint as it comes in so that users are not left waiting.",
      "Forward the complaints to the IT helpdesk with a request for priority handling.",
      "Ask users to document the problem more precisely each time so that each case can be diagnosed faster.",
      "Collect the reported cases, look for the pattern and underlying cause, and propose a structural fix with the IT unit."
    ],
    "a": 3,
    "expl": "Analysis and problem solving means moving from symptoms to root cause once a pattern is visible, and a recurring fault across services is a design problem, not a series of incidents. Option A keeps users satisfied in the short term but guarantees the same effort every month; option D removes the cause."
  },
  {
    "id": "sj023",
    "competency": "Communicating",
    "q": "A national ministry official telephones you directly asking what position the Commission will take in a decision that is still under internal discussion. You have worked with him before and he presses for an indication. Which action would be MOST effective?",
    "options": [
      "Explain that you cannot comment on a decision that is still under discussion, note his question, and refer him to the official contact point after informing your head of unit.",
      "Give him only the general line that has already been published, since that information is public.",
      "Ask him to put his question in writing so that it can be handled properly.",
      "Decline to answer and end the conversation."
    ],
    "a": 0,
    "expl": "Communicating means being clear about what you can and cannot say, routing the request to the proper channel and keeping your hierarchy informed of external interest. Option C is procedurally tidy but leaves him with no answer and your management unaware; option A is both transparent and correct on confidentiality."
  },
  {
    "id": "sj024",
    "competency": "Prioritising & organising",
    "q": "Your inbox fills every morning with routine requests for figures and clarifications, and you find you are reaching your substantive drafting work only late in the day, when you are least effective. Which action would be MOST effective?",
    "options": [
      "Deal with all emails first thing each morning so that your inbox stays under control.",
      "Ask colleagues to send you fewer requests and to bundle them.",
      "Group routine requests into fixed slots in the day, protect blocks of time for substantive files, and agree the approach with your head of unit.",
      "Reply to requests only once someone follows them up, so that the genuinely urgent ones stand out."
    ],
    "a": 2,
    "expl": "Prioritising and organising means shaping your working pattern around the value of the work rather than the order it arrives in, and agreeing that pattern so colleagues know when to expect answers. Option A feels disciplined but spends your best hours on the lowest-value tasks; option D silently degrades the service you owe colleagues."
  },
  {
    "id": "sj025",
    "competency": "Leadership",
    "q": "After a reorganisation, your small team has been split between two sectors and morale has visibly dropped, with people unclear about what they are now responsible for. You coordinate the team. Which action would be MOST effective?",
    "options": [
      "Concentrate on delivering the current files and let the mood settle by itself once people get used to the new structure.",
      "Explain to the team that the reorganisation is a management decision that cannot be changed.",
      "Report the low morale to the head of unit and suggest organising a team-building event.",
      "Hold a team discussion on what the change means concretely for each role, make clear what is settled and what is still open, and take the open questions to the head of unit."
    ],
    "a": 3,
    "expl": "Leadership means giving people clarity and carrying their unresolved questions upwards rather than either ignoring the disruption or simply asserting that it is final. Option B is accurate but addresses only the least important part of the problem, since the real damage comes from unclear responsibilities, not from the decision itself."
  },
  {
    "id": "sj026",
    "competency": "Delivering quality",
    "q": "You are asked to sign off today on a deliverable prepared largely by an experienced colleague. You have read the summary but not verified the annexes, for which you would formally be answerable. Which action would be MOST effective?",
    "options": [
      "Sign off, since the colleague who prepared it is experienced and reliable.",
      "State clearly what you can and cannot confirm, verify the parts falling under your responsibility, and agree a realistic moment for completing the remaining checks.",
      "Refuse to sign until you have personally verified every element of the deliverable.",
      "Sign and attach a written reservation covering the parts you have not checked."
    ],
    "a": 1,
    "expl": "Delivering quality means taking personal responsibility for what you certify, which requires checking your own share and being explicit about the rest. Option D looks prudent but a reservation attached to a signature does not remove the accountability you have just assumed; option C is disproportionate and blocks the file."
  },
  {
    "id": "sj027",
    "competency": "Resilience",
    "q": "For the third week running, the cabinet has sent substantial last-minute changes to a document a few hours before it is due, forcing late reworking by you and two colleagues. Another round of changes is expected tomorrow. Which action would be MOST effective?",
    "options": [
      "Push back and ask the cabinet to respect the internal drafting deadlines in future.",
      "Accept each round of changes and work whatever extra hours are needed to absorb them.",
      "Build a buffer for late changes into the schedule, keep a clean version history so changes can be inserted quickly, and alert your head of unit when a change genuinely threatens the deadline.",
      "Freeze the document at an agreed point and decline any changes received after it."
    ],
    "a": 2,
    "expl": "Resilience means adapting your working method to a frustrating but real constraint while flagging the point at which it becomes unmanageable. Option A addresses a genuine problem but through a channel and in a form that is unlikely to change cabinet behaviour, and does nothing about tomorrow's round."
  },
  {
    "id": "sj028",
    "competency": "Working with others",
    "q": "In a meeting with your director, a colleague presents the analysis you developed jointly as his own work and does not mention your contribution. Other participants congratulate him. Which action would be MOST effective?",
    "options": [
      "Speak to him privately, explain how the presentation looked from your side, and agree how joint work will be attributed in future.",
      "Set the record straight by email to all the meeting participants.",
      "Mention the matter to your head of unit so that she is aware of what you contributed.",
      "Let it pass, since what counts is that the unit produced a good analysis."
    ],
    "a": 0,
    "expl": "Working with others means dealing with a difficulty directly with the person concerned and turning it into a clear rule for the future rather than a grievance. Option B may restore the facts but escalates a bilateral issue into a public correction and damages the relationship you still need for the file."
  },
  {
    "id": "sj029",
    "competency": "Analysis & problem solving",
    "q": "Halfway through the year you discover that commitments under a programme you manage exceed the available appropriations by around eight per cent. Several grant decisions are pending. Which action would be MOST effective?",
    "options": [
      "Reduce the number of projects to be funded this year so that the total fits the available appropriations.",
      "Quantify the gap and establish what caused it, set out the possible options with their consequences, and put them to your head of unit with a recommendation.",
      "Request a transfer of appropriations to cover the shortfall.",
      "Ask the financial team to re-verify all the figures before telling anyone about the problem."
    ],
    "a": 1,
    "expl": "Analysis and problem solving means establishing the size and cause of the problem and framing decision-ready options rather than jumping to one remedy. Option C may well be part of the answer but selects a solution before the cause is understood; option D delays informing the hierarchy of a problem that already affects pending decisions."
  },
  {
    "id": "sj030",
    "competency": "Learning & development",
    "q": "Your head of unit offers you a file in a policy area you have never worked on, involving technical legislation you do not know. She needs an initial note within a month. Which action would be MOST effective?",
    "options": [
      "Explain that the file would be better placed with someone who already has the relevant background.",
      "Accept and learn as you go, asking questions whenever a difficulty arises.",
      "Accept, map what you need to learn, and agree with her a knowledgeable contact point in the house and a check-in after your first draft.",
      "Accept and enrol in the next available training course in that policy area."
    ],
    "a": 2,
    "expl": "Learning and development means taking on the stretch deliberately, with a plan for acquiring the knowledge and a review point that protects the deliverable. Option B accepts the challenge but leaves both the learning and the quality of the note to chance; option D is useful in the longer term but rarely arrives in time for a one-month deadline."
  },
  {
    "id": "sj031",
    "competency": "Communicating",
    "q": "You are responsible for the reply to a written question from a Member of the European Parliament, due in ten days, and it needs input from three other units. Previous experience is that contributions arrive late and in inconsistent formats. Which action would be MOST effective?",
    "options": [
      "Draft the reply yourself from the documents available and let the units comment on it afterwards.",
      "Ask the three units for their contributions and send reminders if nothing has arrived.",
      "Ask for the reply deadline to be extended given the number of services that have to contribute.",
      "Send each unit a precise request stating exactly what is needed, in what form and by when, and propose a short call to settle any open points."
    ],
    "a": 3,
    "expl": "Communicating means making requests so clear that the other side can act on them without further exchanges, which is what prevents late and unusable contributions. Option A saves time initially but produces a text drafted without the expertise it needs, and comments arriving on a finished draft are the slowest way to correct it."
  },
  {
    "id": "sj032",
    "competency": "Prioritising & organising",
    "q": "On Wednesday morning an urgent file lands on your desk that will take the rest of the week, while you already owe deliverables to two colleagues and a committee secretariat. Which action would be MOST effective?",
    "options": [
      "List your existing commitments, tell the people affected which of them will slip and by how much, and confirm the new order of work with your head of unit.",
      "Concentrate on the urgent file and deal with the consequences for the other commitments once it is finished.",
      "Ask a colleague to take over all of your other files for the week.",
      "Keep working on your planned tasks in the mornings and on the urgent file in the afternoons."
    ],
    "a": 0,
    "expl": "Prioritising and organising means reordering work when priorities change and immediately managing the expectations of everyone who was counting on you. Option B gets the priority right but leaves three parties discovering the delay for themselves; option D splits attention on a file that has been designated urgent."
  },
  {
    "id": "sj033",
    "competency": "Resilience",
    "q": "You receive a strongly worded email from a stakeholder association accusing your unit of ignoring their input, in terms you consider exaggerated and partly inaccurate. It is copied to your head of unit. Which action would be MOST effective?",
    "options": [
      "Reply immediately correcting the factual errors in their message.",
      "Take time to separate the substance from the tone, check what part of the criticism is justified, and reply factually setting out what has been done and what will be done.",
      "Forward the email to your head of unit and ask her how she wants it answered.",
      "Acknowledge receipt briefly and take no further action for the moment."
    ],
    "a": 1,
    "expl": "Resilience means not reacting to the tone and dealing with the substance calmly and factually, which usually defuses the conflict better than a correction. Option A answers only the inaccuracies and reinforces the impression that the association is not being listened to; option C passes a manageable problem upwards unnecessarily."
  },
  {
    "id": "sj034",
    "competency": "Leadership",
    "q": "A new task with a two-week deadline has to be assigned within your team of three, all of whom already have full workloads. You coordinate the team. Which action would be MOST effective?",
    "options": [
      "Discuss current workloads openly with the team, allocate the task on the basis of real capacity and development value, and agree together what can wait.",
      "Take the task on yourself, since the team is already at capacity.",
      "Give it to the fastest performer in the team to be sure that it is delivered on time.",
      "Ask for a volunteer and, if nobody comes forward, allocate it at random."
    ],
    "a": 0,
    "expl": "Leadership means making allocation decisions transparently on the basis of capacity, and being willing to say what will be deprioritised as a result. Option C reliably delivers this task but systematically penalises your best performer and ignores what else that person is carrying."
  },
  {
    "id": "sj035",
    "competency": "Delivering quality",
    "q": "You discover that a formula in the template for a monthly monitoring report has been wrong for at least five months, understating one category of expenditure. The reports go to several services. Which action would be MOST effective?",
    "options": [
      "Correct the formula in the current report and continue.",
      "Correct the formula and mention the problem at the next unit meeting.",
      "Establish first whether anyone actually used the earlier figures before deciding what to do.",
      "Correct the formula, quantify the effect on the past reports, inform your head of unit and the recipients, and propose a verification step to prevent recurrence."
    ],
    "a": 3,
    "expl": "Delivering quality means correcting the error, dealing with its consequences for those who relied on the figures, and preventing recurrence. Option B is partly right but treats the historical distortion and the recipients as a minor internal matter rather than something the users of the reports need to know about."
  },
  {
    "id": "sj036",
    "competency": "Working with others",
    "q": "Your unit and another unit each believe the other is responsible for preparing a contribution to a Council document due in five days. Neither head of unit has yet settled the question. Which action would be MOST effective?",
    "options": [
      "Proceed on the assumption that your unit owns the task, to be on the safe side.",
      "Wait until the two heads of unit have clarified who is responsible.",
      "Propose to the other unit a provisional split of the work so that the deadline is met, while asking both heads of unit to confirm ownership in parallel.",
      "Ask the Secretariat-General to arbitrate the question of responsibility."
    ],
    "a": 2,
    "expl": "Working with others means protecting the deliverable across organisational boundaries while the formal question is resolved through the proper channel. Option A guarantees the deadline but risks duplicated work and entrenches a disputed allocation; option C secures both the deadline and a clean decision on ownership."
  },
  {
    "id": "sj037",
    "competency": "Analysis & problem solving",
    "q": "The responses to a public consultation you are analysing point consistently in a direction that contradicts the preliminary conclusions of your impact assessment. The conclusions have already been shown informally to your director. Which action would be MOST effective?",
    "options": [
      "Examine whether the responses reveal a factor your analysis missed, test it against the available evidence, and adjust or explicitly justify your conclusions.",
      "Keep the conclusions and record the divergent views in an annex to the report.",
      "Weight the responses according to the size and representativeness of the organisations that submitted them.",
      "Reopen the consultation with more precisely formulated questions."
    ],
    "a": 0,
    "expl": "Analysis and problem solving means letting the evidence test the conclusion rather than the reverse, particularly when a large body of input points the other way. Option C is a legitimate analytical technique but here it risks being used to reduce the weight of inconvenient evidence before it has been examined on the merits."
  },
  {
    "id": "sj038",
    "competency": "Communicating",
    "q": "You have to inform an applicant, a small organisation that invested considerable effort in its proposal, that its project has not been selected for funding. The evaluation identified specific weaknesses. Which action would be MOST effective?",
    "options": [
      "Send the standard rejection letter without additional comment.",
      "Telephone the applicant informally to warn them before the letter arrives.",
      "Send the formal decision with a clear explanation of the reasons and of the available remedies, and offer to answer questions.",
      "Hold the letter back until you have checked whether another funding instrument might suit the project."
    ],
    "a": 2,
    "expl": "Communicating means delivering unwelcome news clearly, with the reasons and the procedural rights of the recipient, which is also what the duty to state reasons requires. Option D is well meant but delays a decision the applicant needs in order to plan, and mixes an informal suggestion into a formal procedure."
  },
  {
    "id": "sj039",
    "competency": "Prioritising & organising",
    "q": "You are invited on a two-day mission to represent the unit at a technical meeting abroad, in the same week that a substantial deliverable of yours is due to the hierarchy. Both matter to your head of unit. Which action would be MOST effective?",
    "options": [
      "Go on the mission and ask for the internal deadline to be moved by a few days.",
      "Compare what each commitment actually delivers, propose to your head of unit that a colleague represents the unit at the meeting, and keep the deadline.",
      "Cancel the mission and say nothing further about it.",
      "Go on the mission and finish the deliverable in the evenings during the trip."
    ],
    "a": 1,
    "expl": "Prioritising and organising means weighing the value of each commitment and proposing a solution that preserves both, rather than sacrificing one by default. Option A is a legitimate option but moves a deadline set by the hierarchy when a substitute at the meeting would have cost nothing."
  },
  {
    "id": "sj040",
    "competency": "Learning & development",
    "q": "Your DG introduces a new document management tool that will be mandatory in two months. Several colleagues in your unit say openly that it is slower than the current system and continue with the old one. Which action would be MOST effective?",
    "options": [
      "Continue with the previous method in parallel until the tool has proved itself.",
      "Learn the tool properly, work out what it changes concretely for the team's files, and share practical guidance with colleagues.",
      "Pass on the team's objections to the head of unit so that they reach the project owners.",
      "Wait for the official training sessions before starting to use the tool."
    ],
    "a": 1,
    "expl": "Learning and development means acquiring new skills promptly and sharing the knowledge so that the team benefits, which is what turns an imposed change into a workable one. Option C is useful feedback but does nothing to prepare the unit for a deadline that will arrive regardless of the objections."
  },
  {
    "id": "sj041",
    "competency": "Resilience",
    "q": "During a meeting with Member State delegations you present a figure that you realise, an hour after the meeting, was taken from an outdated table. The correct figure changes the picture noticeably. Which action would be MOST effective?",
    "options": [
      "Verify the correct figure, then inform the participants and your head of unit of the correction and establish how the error occurred.",
      "Correct the figure in the minutes without drawing attention to the change.",
      "Wait to see whether any delegation raises the point before deciding what to do.",
      "Write to the participants apologising at length and explaining the time pressure you were working under."
    ],
    "a": 0,
    "expl": "Resilience means dealing with your own mistakes openly and without disproportionate distress, and correcting the record quickly is what limits the damage. Option B repairs the document but leaves delegations acting on a figure they heard and were never told was wrong; option D dwells on the excuse rather than the correction."
  },
  {
    "id": "sj042",
    "competency": "Leadership",
    "q": "You must recommend an approach for a proposal by Friday, but a key study that would settle one parameter will only be available the following month. Your head of unit is away and has asked you to take it forward. Which action would be MOST effective?",
    "options": [
      "Wait for the study, even if that means the Friday deadline is missed.",
      "Take the decision on the best available evidence, state the assumptions and the risks explicitly, and set a review point for when the study arrives.",
      "Ask the head of unit to take the decision herself on her return.",
      "Choose the option that is easiest to reverse later and leave the uncertainty out of the recommendation."
    ],
    "a": 1,
    "expl": "Leadership means taking decisions under uncertainty while being transparent about the assumptions and building in a point to revisit them. Option D reaches a decision but conceals the uncertainty from those who will rely on the recommendation, which is precisely what makes a reversible choice unsafe."
  },
  {
    "id": "sj043",
    "competency": "Working with others",
    "q": "A colleague tells you in confidence that personal difficulties are affecting his concentration, and you can see that a file he shares with you is now well behind schedule. Others are starting to notice the delay. Which action would be MOST effective?",
    "options": [
      "Inform the head of unit about his situation so that support can be organised for him.",
      "Quietly take over his part of the file so that the delay is not noticed.",
      "Suggest he contacts the medical or social service and continue with your own work.",
      "Offer concrete short-term help on the file, encourage him to speak to the head of unit or the support services himself, and agree with him what has to be said about the deadline."
    ],
    "a": 3,
    "expl": "Working with others means supporting a colleague while respecting the confidence he gave you and still being honest about the impact on the work. Option A is well intentioned but discloses personal information he shared with you privately, before he has had the chance to do so himself."
  },
  {
    "id": "sj044",
    "competency": "Learning & development",
    "q": "You take over a complex file from a colleague who has already left, and find no handover note and scattered documentation across shared folders. Several deadlines under the file fall in the coming months. Which action would be MOST effective?",
    "options": [
      "Rebuild the file from the beginning using your own working method.",
      "Ask your head of unit to obtain the missing background from your predecessor in his new post.",
      "Reconstruct the essential elements from the available records, list what is still missing, and agree with your head of unit how to close the gaps and set down a short handover note for the future.",
      "Concentrate on the upcoming deadlines and document the file once there is more time."
    ],
    "a": 2,
    "expl": "Learning and development includes building and sharing knowledge of the organisation so that it survives individual moves, which is why documenting as you reconstruct is part of the task. Option A eventually produces a usable file but discards existing work and captures nothing for the next holder; option D leaves the same gap for your successor."
  },
  {
    "id": "sj045",
    "competency": "Analysis & problem solving",
    "q": "An operational unit asks you urgently whether a planned measure is compatible with a regulation you have never worked with. A wrong answer would have real consequences for their timetable. Which action would be MOST effective?",
    "options": [
      "Answer on the basis of the general principles you know, adding a caveat that the analysis is preliminary.",
      "Send the question straight to the Legal Service and tell the requesting unit that it will take time.",
      "Read the relevant provisions, check the positions the unit has taken on similar questions, and reply distinguishing clearly between what is established and what needs confirmation by the Legal Service.",
      "Ask the requesting unit to reformulate its question in more precise terms before you look at it."
    ],
    "a": 2,
    "expl": "Analysis and problem solving means doing the groundwork yourself, being explicit about the limits of your answer, and involving specialists for the part that genuinely requires them. Option B is safe but abandons a colleague with an urgent timetable and adds no value of your own; option A risks giving confident advice on provisions you have not read."
  }
];
