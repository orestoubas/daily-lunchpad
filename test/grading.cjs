/* Unit tests for written-answer grading.

   This decides whether a typed answer is right, and one distinction matters
   more than the rest: a right noun behind the wrong article is a GENDER gap,
   not a vocabulary gap, and it is invisible in multiple choice. If that verdict
   is wrong the word test cannot do the job it exists for. */

const fs = require("fs");
const path = require("path");
const vm = require("vm");

const root = path.join(__dirname, "..");
const s = { console, Math, Date, JSON, Object, Array, String, Number, Set, Map, RegExp };
s.globalThis = s;
vm.createContext(s);
// topics.js needs the date helpers from util.js
vm.runInContext(fs.readFileSync(path.join(root, "js/util.js"), "utf8"), s, { filename: "util.js" });
vm.runInContext(fs.readFileSync(path.join(root, "js/topics.js"), "utf8"), s, { filename: "topics.js" });
const { gradeWritten, leadArticle, stripArticle } = s;

const failures = [];
const eq = (a, b, msg) => { if (a !== b) failures.push(`${msg} — expected ${b}, got ${a}`); };
const v = (input, target) => gradeWritten(input, target).verdict;

/* articles are parsed, not guessed at */
eq(leadArticle("une facture"), "une", "leadArticle should read 'une', not 'un'");
eq(leadArticle("un bureau"), "un", "leadArticle should read 'un'");
eq(leadArticle("l'entreprise"), "l'", "leadArticle should read the elided article");
eq(leadArticle("bureau"), "", "a bare noun has no article");
eq(stripArticle("une facture"), "facture", "stripping 'une' must not leave an 'e'");
eq(stripArticle("l'entreprise"), "entreprise", "stripping the elided article");
eq(stripArticle("envoyer"), "envoyer", "a verb is left alone");

/* exact, and forgiving of the keyboard but not of the French */
eq(v("la réunion", "la réunion"), "correct", "an exact answer");
eq(v("LA REUNION", "la réunion"), "correct", "case and accents must not decide");
eq(v("la  réunion ", "la réunion"), "correct", "stray spacing must not decide");
eq(v("l’entreprise", "l'entreprise"), "correct", "a curly apostrophe must not decide");

/* the verdict the word test is built on */
eq(v("le réunion", "la réunion"), "gender", "le for la is a gender error");
eq(v("une bureau", "un bureau"), "gender", "une for un is a gender error");
eq(v("un facture", "une facture"), "gender", "un for une is a gender error");
eq(v("réunion", "la réunion"), "article", "a missing article is its own verdict");
eq(v("la entreprise", "l'entreprise"), "article", "l' hides the gender, so it is not a gender error");

/* everything else */
eq(v("la reunionn", "la réunion"), "typo", "one letter out is a typo");
eq(v("le dossier", "la réunion"), "wrong", "a different word is simply wrong");
eq(v("", "la réunion"), "empty", "an empty answer is not graded");
eq(v("   ", "la réunion"), "empty", "whitespace is not an answer");

/* a verb has no article to get wrong */
eq(v("envoyer", "envoyer"), "correct", "a verb answered correctly");
eq(v("envoyerr", "envoyer"), "typo", "a verb with a typo");

if (failures.length) {
  console.error("GRADING TESTS FAILED (" + failures.length + "):");
  failures.forEach(f => console.error(" ✗ " + f));
  process.exit(1);
}
console.log("grading tests passed — gender, article, typo and exact all distinguished");
