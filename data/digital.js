/* EPSO digital skills bank (DigComp-aligned). {id, area, q, options[4], a, expl} */
"use strict";

const DIGITAL_QUESTIONS = [
  {
    "id": "dg001",
    "area": "Information & data",
    "q": "You are researching EU policy and need only pages containing the exact wording \"better regulation agenda\", in that order. What should you type into the search engine?",
    "options": [
      "better regulation agenda",
      "\"better regulation agenda\"",
      "better OR regulation OR agenda",
      "better-regulation-agenda"
    ],
    "a": 1,
    "expl": "Quotation marks force an exact-phrase match, so results must contain the words together in that order. Typing the words without quotes lets the engine return pages containing them separately or in any order."
  },
  {
    "id": "dg002",
    "area": "Information & data",
    "q": "A colleague wants search results only from pages hosted on the European Commission's website. Which search operator does this?",
    "options": [
      "url=ec.europa.eu",
      "inpage:ec.europa.eu",
      "site:ec.europa.eu",
      "domain(ec.europa.eu)"
    ],
    "a": 2,
    "expl": "The site: operator restricts results to a given domain or subdomain, e.g. \"impact assessment site:ec.europa.eu\". The other strings are not recognised operators in mainstream search engines."
  },
  {
    "id": "dg003",
    "area": "Information & data",
    "q": "Searching for \"mobility package\" returns mostly articles about electric cars, which you do not want. What is the quickest way to remove them?",
    "options": [
      "Add -cars to the query",
      "Put the whole query in capital letters",
      "Search the same words again on the next results page",
      "Add the word cars a second time"
    ],
    "a": 0,
    "expl": "A minus sign immediately before a term excludes results containing it. Capitalisation is ignored by search engines and repeating a term does not filter it out."
  },
  {
    "id": "dg004",
    "area": "Information & data",
    "q": "You must judge whether a web page summarising a new EU regulation is reliable. Which feature is the strongest indicator of reliability?",
    "options": [
      "It appears first in the list of search results",
      "It has a modern design and no advertising",
      "It has been shared thousands of times on social media",
      "It names its author and publication date and links to the official legal text"
    ],
    "a": 3,
    "expl": "Identifiable authorship, a date and traceable links to primary sources let you verify the claims yourself. Ranking, design and popularity say nothing about accuracy, since ranking reflects relevance and link signals rather than truthfulness."
  },
  {
    "id": "dg005",
    "area": "Information & data",
    "q": "A country's unemployment rate rises from 8.0% to 9.0%. Which statement is correct?",
    "options": [
      "Unemployment rose by 9%",
      "Unemployment rose by 1%, which is negligible",
      "Unemployment rose by 1 percentage point, a relative increase of 12.5%",
      "Unemployment rose by 12.5 percentage points"
    ],
    "a": 2,
    "expl": "The difference between two percentages is expressed in percentage points (9.0 - 8.0 = 1 pp), while the relative change is 1/8 = 12.5%. Saying \"rose by 1%\" confuses the two and understates the change."
  },
  {
    "id": "dg006",
    "area": "Information & data",
    "q": "A dataset of salaries contains a handful of extremely high values. Which measure best represents the typical salary?",
    "options": [
      "The mean, because it uses every value",
      "The median, because it is not distorted by extreme values",
      "The maximum, because it shows the full range",
      "The sum divided by the number of categories"
    ],
    "a": 1,
    "expl": "The median is the middle value and is robust to outliers, whereas a few very high salaries pull the mean upwards and make it unrepresentative of a typical earner."
  },
  {
    "id": "dg007",
    "area": "Information & data",
    "q": "A chart shows that regions with higher broadband coverage also have higher GDP per head. What can you legitimately conclude?",
    "options": [
      "The two variables are associated, but the chart alone does not show that one causes the other",
      "Broadband investment causes economic growth",
      "Wealth is the only possible cause of broadband coverage",
      "Nothing at all, because charts cannot show relationships"
    ],
    "a": 0,
    "expl": "Correlation shows association; causation requires ruling out reverse causality and confounding factors such as urbanisation. Claiming either causal direction from a scatter of two variables is unjustified."
  },
  {
    "id": "dg008",
    "area": "Information & data",
    "q": "You have a spreadsheet of 12 000 grant payments with columns for country, year and amount. What is a pivot table for?",
    "options": [
      "Permanently reorganising the rows of the source data",
      "Converting the file to PDF",
      "Checking the spelling of country names",
      "Summarising the data, e.g. total amount per country and year, without altering the source table"
    ],
    "a": 3,
    "expl": "A pivot table aggregates and cross-tabulates data (sums, counts, averages) by chosen fields and leaves the underlying table untouched. It does not modify, convert or proof-read the source data."
  },
  {
    "id": "dg009",
    "area": "Information & data",
    "q": "You apply a filter on a spreadsheet column to show only rows where Country = \"Portugal\". What happens to the other rows?",
    "options": [
      "They are deleted and must be re-entered later",
      "They are hidden temporarily and reappear when the filter is cleared",
      "They are moved to a new sheet",
      "They are converted to comments"
    ],
    "a": 1,
    "expl": "Filtering only hides non-matching rows; clearing the filter restores the full view. This is why filtering is safe for exploring data, whereas deleting rows loses information permanently."
  },
  {
    "id": "dg010",
    "area": "Information & data",
    "q": "You need the current text of an EU regulation including all its amendments. What is the most efficient reliable approach?",
    "options": [
      "Use the first PDF found through a general web search",
      "Rely on a news article describing the amendments",
      "Consult the consolidated version on EUR-Lex, bearing in mind that only the Official Journal text is authentic",
      "Ask a colleague to recall the changes from memory"
    ],
    "a": 2,
    "expl": "EUR-Lex publishes consolidated texts that integrate amendments into a single readable document, while the legally authentic text remains the one published in the Official Journal. Random PDFs and news summaries may be outdated or inaccurate."
  },
  {
    "id": "dg011",
    "area": "Information & data",
    "q": "You want files in a shared folder to sort in chronological order automatically. Which naming convention achieves this?",
    "options": [
      "2026-03-14_report_v03.docx",
      "14-03-2026 report final.docx",
      "Report FINAL (new) 14 March.docx",
      "report_v3_last_version.docx"
    ],
    "a": 0,
    "expl": "Dates written as YYYY-MM-DD sort correctly alphabetically because the most significant digits come first. Day-first formats sort by day across different months and years, and vague labels such as \"final (new)\" give no reliable order."
  },
  {
    "id": "dg012",
    "area": "Information & data",
    "q": "A dramatic photo circulating on social media is presented as showing an event that happened yesterday. What is the best first verification step?",
    "options": [
      "Check how many people shared it",
      "Look at whether the account has many followers",
      "Run a reverse image search to see where and when the picture appeared before",
      "Ask in the comments whether it is genuine"
    ],
    "a": 2,
    "expl": "A reverse image search shows earlier appearances of the same picture and often reveals it is recycled from another event or place. Share counts and follower numbers measure reach, not authenticity."
  },
  {
    "id": "dg013",
    "area": "Communication",
    "q": "You must email the same invitation to 300 external stakeholders who do not know each other. How should you address it?",
    "options": [
      "Put all 300 addresses in the To field so everyone can reply",
      "Put the addresses in BCC (or use a mailing list) and your own address in To",
      "Put half in To and half in CC",
      "Send it once with all addresses in CC and ask people not to reply to all"
    ],
    "a": 1,
    "expl": "BCC or a mailing tool prevents recipients from seeing each other's email addresses, which are personal data, and avoids reply-all storms. Putting them in To or CC discloses everyone's address to everyone."
  },
  {
    "id": "dg014",
    "area": "Communication",
    "q": "A colleague emails 60 people asking who plans to attend a briefing. You will attend. What is normally the best response?",
    "options": [
      "Reply to the sender only",
      "Reply to all so everyone knows you are coming",
      "Forward the message to your whole unit",
      "Do not reply and simply turn up"
    ],
    "a": 0,
    "expl": "Only the sender needs your answer, so replying to all generates 60 unnecessary messages. Reply-all is appropriate only when the whole group genuinely needs the information."
  },
  {
    "id": "dg015",
    "area": "Communication",
    "q": "You need to send a 400 MB video file to three colleagues in another directorate. What is the most appropriate method?",
    "options": [
      "Split it into 40 email attachments",
      "Copy it onto a USB stick and post it",
      "Upload it to the organisation's shared drive and email a link with the right access rights",
      "Paste it into the body of an email"
    ],
    "a": 2,
    "expl": "Cloud or network storage handles large files and lets you control who may open them, while the email carries only a small link. Mailboxes enforce attachment size limits, so splitting the file is impractical and creates version confusion."
  },
  {
    "id": "dg016",
    "area": "Communication",
    "q": "You are sharing a draft containing staff assessment data from a cloud drive. Which sharing setting is most appropriate?",
    "options": [
      "Anyone with the link can edit",
      "Anyone with the link can view",
      "Public on the web, so nobody is blocked",
      "Named colleagues only, with the minimum rights they need"
    ],
    "a": 3,
    "expl": "Restricting access to identified people with the least necessary permission limits exposure of sensitive data and keeps an access trail. \"Anyone with the link\" means anyone who receives or guesses the link, including outside the organisation, can open the file."
  },
  {
    "id": "dg017",
    "area": "Communication",
    "q": "You organise a meeting at 14:00 Brussels time with participants in Helsinki and Lisbon. What is the safest way to avoid confusion?",
    "options": [
      "Write \"14:00 (your time)\" in the message body",
      "Create the calendar invitation with the correct time zone so each attendee's calendar shows their local time",
      "Ask each participant to calculate the offset themselves",
      "Schedule three separate meetings"
    ],
    "a": 1,
    "expl": "Calendar systems store the event with its time zone and convert it automatically for each attendee, which also survives daylight-saving changes. Free text such as \"your time\" is ambiguous and invites manual conversion errors."
  },
  {
    "id": "dg018",
    "area": "Communication",
    "q": "You intend to record an online meeting so absent colleagues can watch it later. What should you do?",
    "options": [
      "Inform participants before recording starts, explain the purpose and how long the recording will be kept",
      "Record silently to keep the discussion natural",
      "Record and only mention it if somebody asks",
      "Record and publish it on a public platform for transparency"
    ],
    "a": 0,
    "expl": "Participants must know they are being recorded, why, and for how long the recording is stored; that is basic transparency and a data-protection requirement. Silent or undisclosed recording removes their ability to object or to speak accordingly."
  },
  {
    "id": "dg019",
    "area": "Communication",
    "q": "Six people must contribute to one report within a week. Which working method best avoids version conflicts?",
    "options": [
      "Each person edits their own copy and one person merges them at the end",
      "The coordinator emails a new attachment after every change",
      "All work in one shared online document with version history and comments",
      "Contributions are pasted into the body of successive emails"
    ],
    "a": 2,
    "expl": "A single shared master document means everyone always sees the current text, and version history allows earlier states to be recovered. Circulating separate copies by email produces parallel versions that must be reconciled manually."
  },
  {
    "id": "dg020",
    "area": "Communication",
    "q": "In a shared document you write a comment beginning with @Maria. What is the practical effect?",
    "options": [
      "Maria's editing rights are removed",
      "Maria receives a notification that her input is requested on that specific passage",
      "The comment becomes visible only to Maria",
      "The document is locked until Maria replies"
    ],
    "a": 1,
    "expl": "An @mention notifies the named person and links them to the exact place in the text, which makes it clear who is expected to act. It does not change permissions, hide the comment or lock the file."
  },
  {
    "id": "dg021",
    "area": "Communication",
    "q": "You have applied for a post and want to manage your digital identity sensibly. What is the most useful action?",
    "options": [
      "Delete all your social media accounts",
      "Use the same password everywhere so you can react quickly",
      "Ask friends to remove any mention of you online",
      "Search for your own name and adjust the privacy settings of what is publicly visible"
    ],
    "a": 3,
    "expl": "Checking what is publicly visible under your name and tightening privacy settings gives you control over your professional image. Reusing one password is a security risk and unrelated to reputation management."
  },
  {
    "id": "dg022",
    "area": "Communication",
    "q": "A colleague writes a message entirely in capital letters. Under normal netiquette this is read as:",
    "options": [
      "Shouting or aggression",
      "A formal register appropriate for hierarchy",
      "A way of helping readers with visual impairments",
      "An indication that the message is confidential"
    ],
    "a": 0,
    "expl": "Long stretches of upper case are conventionally interpreted as shouting and are also harder to read. Accessibility is served by proper heading styles and contrast, not by capitals."
  },
  {
    "id": "dg023",
    "area": "Communication",
    "q": "A decision taken with an external partner must remain traceable and be referred to months later. Which channel is most appropriate?",
    "options": [
      "An instant message in a chat tool",
      "A telephone call",
      "An email that records the agreement, filed in the case folder",
      "A verbal confirmation in the corridor"
    ],
    "a": 2,
    "expl": "Email creates a dated written record that can be archived and retrieved with the file. Chat histories are often retained for a limited period and calls leave no record unless separately minuted."
  },
  {
    "id": "dg024",
    "area": "Communication",
    "q": "You go on leave and an assistant must handle your mailbox. What is the correct approach?",
    "options": [
      "Give the assistant your password for the duration of the leave",
      "Grant delegated access to the mailbox through the email system and set an out-of-office message",
      "Forward all your mail to the assistant's private address",
      "Leave the mailbox unattended and reply on return"
    ],
    "a": 1,
    "expl": "Delegation grants controlled, revocable and auditable access under the assistant's own identity. Sharing a password breaks accountability and normally breaches IT security rules, and forwarding to a private address moves work data outside the organisation."
  },
  {
    "id": "dg025",
    "area": "Content creation",
    "q": "Why should headings in a long report be formatted with the built-in heading styles rather than by manually setting bold and font size?",
    "options": [
      "Styles allow a table of contents, navigation pane and screen readers to recognise the structure, and let you restyle the whole document at once",
      "Styles make the file smaller",
      "Styles prevent anyone else from editing the document",
      "Manual formatting is not possible in modern word processors"
    ],
    "a": 0,
    "expl": "Heading styles carry semantic structure that drives automatic tables of contents, navigation and accessibility, and can be updated globally. Manually bolded text looks similar but is invisible to those functions."
  },
  {
    "id": "dg026",
    "area": "Content creation",
    "q": "You added two new sections to a document, but the automatic table of contents still shows the old headings. What should you do?",
    "options": [
      "Retype the missing entries into the table of contents",
      "Delete the table of contents and write it by hand",
      "Convert the file to PDF, which refreshes it",
      "Update the table of contents field so it rebuilds from the headings"
    ],
    "a": 3,
    "expl": "An automatic table of contents is a field that must be refreshed (update field / update table) to pick up new headings and page numbers. Typing entries manually breaks the link and the numbering will drift again at the next edit."
  },
  {
    "id": "dg027",
    "area": "Content creation",
    "q": "You want your manager to see each of your proposed edits and accept or reject them individually. Which feature should you use?",
    "options": [
      "Comments in the margin",
      "Track changes",
      "Highlighting the text in yellow",
      "A separate list of corrections in an email"
    ],
    "a": 1,
    "expl": "Track changes records insertions and deletions so each one can be accepted or rejected individually. Comments and highlighting only draw attention to text; they do not carry the edits themselves."
  },
  {
    "id": "dg028",
    "area": "Content creation",
    "q": "You must send 200 letters that are identical except for the name, address and reference number, which are held in a spreadsheet. Which function is designed for this?",
    "options": [
      "Find and replace, run 200 times",
      "A macro that prints the document 200 times",
      "Mail merge, using the spreadsheet as the data source",
      "Copying the letter into 200 separate files"
    ],
    "a": 2,
    "expl": "Mail merge combines one template with a data source and generates a personalised document or email per record. Repeated find-and-replace is slow and error-prone, and printing copies does not personalise anything."
  },
  {
    "id": "dg029",
    "area": "Content creation",
    "q": "Cell B1 holds a VAT rate. In C2 you write a formula that must always refer to B1, even when copied down to C3, C4 and so on. What should you write?",
    "options": [
      "=A2*$B$1",
      "=A2*B1",
      "=A2*B$2",
      "=A2*#B1"
    ],
    "a": 0,
    "expl": "The dollar signs make the reference absolute, so it stays on B1 when the formula is copied. A plain B1 is relative and would shift to B2, B3 and so on, producing wrong or empty results."
  },
  {
    "id": "dg030",
    "area": "Content creation",
    "q": "Column A contains country names and column B contains amounts. Which function totals only the amounts for Belgium?",
    "options": [
      "=COUNTIF(A:A;\"Belgium\")",
      "=SUM(B:B)",
      "=SUMIF(A:A;\"Belgium\";B:B)",
      "=VLOOKUP(\"Belgium\";A:B;2;FALSE)"
    ],
    "a": 2,
    "expl": "SUMIF adds the values in the sum range only for rows where the criterion is met. COUNTIF returns how many rows match rather than their total, and VLOOKUP returns just the first matching row."
  },
  {
    "id": "dg031",
    "area": "Content creation",
    "q": "You have a list of staff numbers and a second table linking staff numbers to unit names. What does a lookup function such as VLOOKUP or XLOOKUP do here?",
    "options": [
      "It sorts both tables alphabetically",
      "It retrieves the unit name matching each staff number from the second table",
      "It deletes duplicate staff numbers",
      "It converts the staff numbers into text"
    ],
    "a": 1,
    "expl": "Lookup functions search a key in another range and return the corresponding value from a specified column, which is how two tables are joined. Sorting, deduplication and format conversion are separate operations."
  },
  {
    "id": "dg032",
    "area": "Content creation",
    "q": "You want to show how a single indicator evolved month by month over three years. Which chart type is most suitable?",
    "options": [
      "A line chart",
      "A pie chart",
      "A doughnut chart",
      "A single stacked bar"
    ],
    "a": 0,
    "expl": "A line chart displays a continuous time series and makes trends and turning points visible. Pie and doughnut charts show composition at one moment and cannot represent evolution over 36 periods."
  },
  {
    "id": "dg033",
    "area": "Content creation",
    "q": "A final report must reach external readers with its layout, fonts and pagination intact and should not be casually edited. Which format should you send?",
    "options": [
      "The editable word-processing file",
      "A plain text file",
      ".PDF",
      "A ZIP archive of the working folder"
    ],
    "a": 2,
    "expl": "PDF embeds fonts and fixes the layout so the document looks the same on any device, and it is not intended for casual editing. The editable source file may reflow if the recipient lacks the fonts, and plain text loses all formatting."
  },
  {
    "id": "dg034",
    "area": "Content creation",
    "q": "You need to email 40 separate documents as one item and reduce the total size. What does creating a ZIP archive do?",
    "options": [
      "It converts all the files into a single PDF",
      "It bundles them into one file and compresses them without any loss of content",
      "It permanently deletes the originals",
      "It reduces image quality to save space"
    ],
    "a": 1,
    "expl": "ZIP is lossless: the extracted files are byte-for-byte identical to the originals, and it packages many files as one. Quality-reducing compression is what lossy formats such as JPEG do, and zipping never deletes the source files by itself."
  },
  {
    "id": "dg035",
    "area": "Content creation",
    "q": "What is the purpose of alternative text (alt text) on an image in a document or web page?",
    "options": [
      "To display a caption under the image",
      "To make the image load faster",
      "To protect the image with copyright",
      "To describe the image content for people using screen readers and when the image cannot be displayed"
    ],
    "a": 3,
    "expl": "Alt text conveys the information the image carries to users of assistive technology and appears when the image fails to load; purely decorative images should be marked as such. A caption is visible body text and serves a different purpose."
  },
  {
    "id": "dg036",
    "area": "Content creation",
    "q": "You find a photograph published under a CC BY 4.0 licence and want to use it in an official presentation. What are you required to do?",
    "options": [
      "Credit the author as specified; the licence otherwise allows reuse, including in a professional context",
      "Obtain written permission from the author first",
      "Use it only if the presentation is not shown outside your institution",
      "Pay a royalty to the licensor"
    ],
    "a": 0,
    "expl": "CC BY permits reuse and adaptation for any purpose provided the creator is properly attributed. A restriction on professional or commercial use would come from a CC licence carrying the NC element, which BY does not."
  },
  {
    "id": "dg037",
    "area": "Safety",
    "q": "An email says your account will be closed within 24 hours and asks you to \"confirm your credentials\" via a link. Which element is the clearest sign of phishing?",
    "options": [
      "The message is in your working language",
      "It contains the organisation's logo",
      "The link's real target, shown when hovering, points to an unrelated external domain",
      "It arrived outside office hours"
    ],
    "a": 2,
    "expl": "A displayed link that resolves to an unrelated domain is a hallmark of phishing, since attackers cannot use the genuine organisation's domain. Logos are trivially copied and delivery time proves nothing."
  },
  {
    "id": "dg038",
    "area": "Safety",
    "q": "You receive an email apparently from your Director, marked urgent, asking you to arrange a payment to a new bank account and to keep it confidential. What should you do?",
    "options": [
      "Verify the request by contacting the Director through a known telephone number or in person before doing anything",
      "Reply to the email asking for confirmation",
      "Make the payment because it is marked urgent and confidential",
      "Forward the request straight to the finance team for execution"
    ],
    "a": 0,
    "expl": "This is classic CEO fraud, so verification must use a channel independent of the suspicious message. Replying to the email only reaches the attacker, who controls the address or the reply-to field."
  },
  {
    "id": "dg039",
    "area": "Safety",
    "q": "What makes multi-factor authentication stronger than a password alone?",
    "options": [
      "The password must be longer",
      "It changes your password automatically every month",
      "It encrypts the whole hard disk",
      "It requires two different types of proof, e.g. something you know plus something you have"
    ],
    "a": 3,
    "expl": "Combining factors of different kinds means a stolen password alone is not enough to log in. Password length, rotation and disk encryption are separate measures that do not add a second factor."
  },
  {
    "id": "dg040",
    "area": "Safety",
    "q": "Why is a password manager recommended for professional use?",
    "options": [
      "It makes passwords shorter and easier to remember",
      "It lets you use a long, unique password for every service without memorising them",
      "It removes the need for multi-factor authentication",
      "It shares your passwords with colleagues automatically"
    ],
    "a": 1,
    "expl": "Unique per-service passwords stop one leaked password from unlocking your other accounts through credential stuffing, and the manager remembers them for you. A password manager complements rather than replaces multi-factor authentication."
  },
  {
    "id": "dg041",
    "area": "Safety",
    "q": "A website's address begins with https:// and shows a padlock. What does this guarantee?",
    "options": [
      "The site is operated by a legitimate organisation",
      "The content of the site has been fact-checked",
      "The traffic between your browser and the site is encrypted; it says nothing about who runs the site",
      "Your device is protected against malware"
    ],
    "a": 2,
    "expl": "HTTPS protects data in transit against interception and tampering, but certificates are easy to obtain, so phishing sites also display a padlock. Encryption is not a statement about the honesty or accuracy of the site."
  },
  {
    "id": "dg042",
    "area": "Safety",
    "q": "You must work on an official file from an airport's open Wi-Fi network. What is the most appropriate precaution?",
    "options": [
      "Connect through the organisation's VPN, or use your phone's tethered connection instead",
      "Choose the network with the strongest signal",
      "Turn off the firewall so the connection is faster",
      "Use the browser's private browsing window"
    ],
    "a": 0,
    "expl": "A VPN encrypts your traffic end to end over an untrusted network, and mobile tethering avoids the open network altogether. Private browsing only stops local history being stored and gives no protection against network eavesdropping."
  },
  {
    "id": "dg043",
    "area": "Safety",
    "q": "Which statement about personal data under the GDPR is correct?",
    "options": [
      "Only names and identity-card numbers are personal data",
      "Work email addresses are never personal data",
      "Data becomes non-personal as soon as the name column is hidden",
      "Pseudonymised data that can be re-linked to a person using a key is still personal data"
    ],
    "a": 3,
    "expl": "If re-identification remains possible, the data is still personal and remains within the scope of the GDPR; only truly anonymised data falls outside it. Work email addresses of the form firstname.lastname@ identify an individual and are personal data too."
  },
  {
    "id": "dg044",
    "area": "Safety",
    "q": "You are designing an online registration form for a one-day conference. Which approach reflects the principle of data minimisation?",
    "options": [
      "Collect as much data as possible in case it becomes useful later",
      "Ask only for the data needed for the event, such as name, contact address and dietary requirements",
      "Ask for the date of birth and nationality of every participant as a default",
      "Make every field on the form compulsory"
    ],
    "a": 1,
    "expl": "Data minimisation requires that data be adequate, relevant and limited to what is necessary for the stated purpose. Collecting extra data \"just in case\" has no legal basis and increases the impact of any breach."
  },
  {
    "id": "dg045",
    "area": "Safety",
    "q": "A laptop containing an unencrypted list of applicants' personal data is stolen. Within what period must a notifiable personal data breach be reported to the supervisory authority?",
    "options": [
      "Within 24 hours",
      "Within 7 days",
      "Without undue delay and, where feasible, not later than 72 hours after becoming aware of it",
      "Only at the annual data-protection review"
    ],
    "a": 2,
    "expl": "The GDPR sets a 72-hour deadline from awareness for notifying the supervisory authority, with reasons given if it is exceeded. Individuals must also be informed separately when the risk to their rights is high."
  },
  {
    "id": "dg046",
    "area": "Safety",
    "q": "A member of the public writes asking for a copy of all personal data your service holds about them. What should you do?",
    "options": [
      "Register the request and involve the data protection officer or controller, so that a reply is given within the legal deadline of one month",
      "Ignore it, as such requests must be made in person",
      "Send them the whole case file immediately, including data about other people",
      "Reply that the data has been archived and is no longer accessible"
    ],
    "a": 0,
    "expl": "This is a data subject access request and must be handled through the proper channel and answered within one month, extendable in complex cases. Third-party personal data in the file must be protected, so the file cannot simply be sent as it stands."
  },
  {
    "id": "dg047",
    "area": "Safety",
    "q": "You must email a spreadsheet containing sensitive personal data to a partner authority. What is the best practice?",
    "options": [
      "Send it as a normal attachment and mark the email confidential",
      "Paste the data into the body of the email instead",
      "Rename the file so its content is not obvious",
      "Encrypt or password-protect the file and transmit the password through a different channel, such as a phone call"
    ],
    "a": 3,
    "expl": "Encryption protects the content if the message is misdirected or intercepted, and sending the password separately means one intercepted channel is not enough. A confidentiality label and an obscure filename provide no technical protection at all."
  },
  {
    "id": "dg048",
    "area": "Safety",
    "q": "Before publishing a document that went through several rounds of internal drafting, what should you check?",
    "options": [
      "That the file name contains the word final",
      "That hidden data has been removed: tracked changes, comments, author details and other document properties",
      "That the font is the corporate one",
      "That the file is larger than 1 MB"
    ],
    "a": 1,
    "expl": "Accepted-but-not-cleared tracked changes, comments and metadata can reveal internal deliberations and author identities; a document inspector removes them. File name, font and size have no bearing on what information leaks."
  },
  {
    "id": "dg049",
    "area": "Problem solving",
    "q": "After deleting a column, several cells in your spreadsheet display #REF!. What does this mean?",
    "options": [
      "The cells contain text instead of numbers",
      "The file is corrupted and must be recreated",
      "The formulas point to cells that no longer exist",
      "The column is too narrow"
    ],
    "a": 2,
    "expl": "#REF! signals an invalid reference, typically because the referenced cells were deleted or moved. Undoing the deletion, or rewriting the formulas to point at the right cells, resolves it."
  },
  {
    "id": "dg050",
    "area": "Problem solving",
    "q": "A calculated column shows #DIV/0! wherever the denominator is empty. What is the cleanest way to present a blank instead?",
    "options": [
      "Wrap the formula in IFERROR, e.g. =IFERROR(A2/B2;\"\")",
      "Change the cell colour to white",
      "Delete the rows with missing denominators",
      "Format the cells as text"
    ],
    "a": 0,
    "expl": "IFERROR keeps the calculation and substitutes a chosen value when it fails, so the table stays complete and readable. Hiding the error with white text or deleting rows loses data or merely disguises the problem."
  },
  {
    "id": "dg051",
    "area": "Problem solving",
    "q": "You type =SUM(B2:B10) into cell B10 and the spreadsheet warns you about a circular reference. Why?",
    "options": [
      "The range is too large",
      "SUM cannot be used on a column",
      "The file needs to be saved first",
      "The formula's result is part of the range it is trying to add up"
    ],
    "a": 3,
    "expl": "A circular reference occurs when a formula depends, directly or indirectly, on its own cell, so the value can never settle. Changing the formula to =SUM(B2:B9) removes the self-reference."
  },
  {
    "id": "dg052",
    "area": "Problem solving",
    "q": "A spreadsheet cell shows ##### instead of a date. What is the cause?",
    "options": [
      "The date is invalid",
      "The column is too narrow to display the value",
      "The cell is protected",
      "The file was created in another application"
    ],
    "a": 1,
    "expl": "##### simply means the formatted value does not fit the current column width; widening the column or reducing the font restores it. The stored value itself is unaffected."
  },
  {
    "id": "dg053",
    "area": "Problem solving",
    "q": "You open a CSV export and every record appears squeezed into a single column. What is the most likely explanation?",
    "options": [
      "The file is encrypted",
      "The export failed and must be repeated",
      "The spreadsheet is using a different delimiter from the one in the file, e.g. comma versus semicolon",
      "CSV files cannot be opened in a spreadsheet"
    ],
    "a": 2,
    "expl": "CSV is plain text and the application must be told which character separates fields; a mismatch puts the whole line in one cell. Using the text import wizard and selecting the right delimiter (and encoding) fixes it."
  },
  {
    "id": "dg054",
    "area": "Problem solving",
    "q": "Your presentation is 60 MB, mostly because of high-resolution photographs, and the mail server rejects it. What is the most targeted first step?",
    "options": [
      "Delete half of the slides",
      "Use the built-in compress-pictures function to reduce image resolution to screen quality",
      "Save it as a plain text file",
      "Split it into six separate presentations"
    ],
    "a": 1,
    "expl": "Compressing the embedded images addresses the actual cause and usually cuts the file size dramatically while keeping the content intact. Deleting slides or splitting the file changes the deliverable rather than solving the size problem."
  },
  {
    "id": "dg055",
    "area": "Problem solving",
    "q": "An internal web application will not load for you. Which step best isolates the cause?",
    "options": [
      "Restart the computer repeatedly until it works",
      "Reinstall the operating system",
      "Send a screenshot to the whole unit",
      "Try it in another browser or on another device to see whether the problem is local or with the service"
    ],
    "a": 3,
    "expl": "Testing on a second browser or device distinguishes a local issue, such as cache or an extension, from a service outage, which determines who has to act. Reinstalling the system is disproportionate before the cause is known."
  },
  {
    "id": "dg056",
    "area": "Problem solving",
    "q": "A colleague overwrote three paragraphs in a shared online document this morning. What is the quickest way to recover the text?",
    "options": [
      "Open the version history and restore or copy from an earlier version",
      "Ask the colleague to retype the text from memory",
      "Recreate the document from the last email attachment",
      "Contact the software vendor's support desk"
    ],
    "a": 0,
    "expl": "Collaborative platforms keep a version history precisely so earlier states can be inspected and restored. Retyping from memory or from an outdated attachment risks losing the most recent wording."
  },
  {
    "id": "dg057",
    "area": "Problem solving",
    "q": "Your working files are synchronised to a cloud drive. Is that on its own a sufficient backup strategy?",
    "options": [
      "Yes, because the files are stored on a remote server",
      "Yes, because cloud providers never lose data",
      "No, because deletions, corruption and ransomware are replicated to the cloud copy; a separate, versioned backup is also needed",
      "No, because cloud drives cannot store large files"
    ],
    "a": 2,
    "expl": "Synchronisation mirrors whatever happens locally, including accidental deletion and encryption by ransomware, so it is not by itself a backup. A sound approach keeps several copies, on at least two kinds of media, with one off-site or offline."
  },
  {
    "id": "dg058",
    "area": "Problem solving",
    "q": "A document you sent looks completely different on a colleague's computer: line breaks and pagination have shifted. What is the most likely cause and remedy?",
    "options": [
      "The file is corrupted; send it again",
      "The fonts you used are not installed on their machine; send a PDF or use standard fonts",
      "Their screen resolution is too low; ask them to change it",
      "The document has too many pages; split it in two"
    ],
    "a": 1,
    "expl": "When a font is missing, the application substitutes another with different metrics, which reflows the text. PDF embeds the fonts and fixes the layout, and sticking to standard fonts avoids the problem in editable files."
  },
  {
    "id": "dg059",
    "area": "Problem solving",
    "q": "Every month you spend two hours copying the same figures from ten files into one summary table by hand. What is the most sensible response?",
    "options": [
      "Ask for the deadline to be moved",
      "Continue, since a manual check is the only reliable method",
      "Ask a colleague to do half of it",
      "Set up a reusable template with linked formulas or an automated import so the summary updates itself"
    ],
    "a": 3,
    "expl": "Recognising a repetitive task and replacing it with a template, links or a simple automation removes recurring effort and the copy-paste errors that come with it. Redistributing or postponing the same manual work leaves the underlying inefficiency in place."
  },
  {
    "id": "dg060",
    "area": "Problem solving",
    "q": "You want to use a public AI chatbot to help draft a note. What is the correct approach in a professional context?",
    "options": [
      "Follow your organisation's rules, keep confidential and personal data out of the prompt, and verify every fact and citation before use",
      "Paste the confidential draft in full so the answer is better tailored",
      "Trust the references it produces, since they are generated from real sources",
      "Use it only if you cite the tool as the author of the note"
    ],
    "a": 0,
    "expl": "Prompts sent to a public service leave your organisation's control, and generative tools can produce plausible but false statements and invented references, so verification is essential. Responsibility for the final text remains with the official who signs it."
  }
];
