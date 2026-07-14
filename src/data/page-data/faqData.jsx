/**
 * @file faqData.jsx
 * @module data/faqData
 * @description Contains the translation keys and display configuration used
 * by the Frequently Asked Questions page.
 *
 * @author Chace Nielson
 * @created Apr 1, 2025
 * @updated Jul 14, 2026
 *
 * @notes
 * - All visible text is stored in the localized page JSON files.
 * - Standard answers are rendered with next-intl rich text.
 * - The learning outcomes answer is rendered as a translated list.
 */

export const faqTitleData = {
  titleKey: "title",
  subtitleKey: "description"
};

export const faqData = [
  {
    id: "whoIsItFor",
    questionKey: "questions.whoIsItFor.question",
    answerKey: "questions.whoIsItFor.answer"
  },
  {
    id: "isItFun",
    questionKey: "questions.isItFun.question",
    answerKey: "questions.isItFun.answer"
  },
  {
    id: "cost",
    questionKey: "questions.cost.question",
    answerKey: "questions.cost.answer"
  },
  {
    id: "schoolOnly",
    questionKey: "questions.schoolOnly.question",
    answerKey: "questions.schoolOnly.answer"
  },
  {
    id: "whatCanILearn",
    questionKey: "questions.whatCanILearn.question",
    answerType: "list",
    answerKeys: [
      "questions.whatCanILearn.answers.landUseBalance",
      "questions.whatCanILearn.answers.landscapeChange",
      "questions.whatCanILearn.answers.sustainableFuture",
      "questions.whatCanILearn.answers.climateScenarios",
      "questions.whatCanILearn.answers.managementPractices",
      "questions.whatCanILearn.answers.glaciersAndWater",
      "questions.whatCanILearn.answers.more"
    ]
  },
  {
    id: "isItAPrediction",
    questionKey: "questions.isItAPrediction.question",
    answerKey: "questions.isItAPrediction.answer"
  },
  {
    id: "register",
    questionKey: "questions.register.question",
    answerKey: "questions.register.answer"
  },
  {
    id: "lessonPlans",
    questionKey: "questions.lessonPlans.question",
    answerKey: "questions.lessonPlans.answer"
  },
  {
    id: "computerSupport",
    questionKey: "questions.computerSupport.question",
    answerKey: "questions.computerSupport.answer"
  },
  {
    id: "runningSlowly",
    questionKey: "questions.runningSlowly.question",
    answerKey: "questions.runningSlowly.answer"
  },
  {
    id: "shareWork",
    questionKey: "questions.shareWork.question",
    answerKey: "questions.shareWork.answer"
  },
  {
    id: "studentReports",
    questionKey: "questions.studentReports.question",
    answerKey: "questions.studentReports.answer"
  },
  {
    id: "emailAddress",
    questionKey: "questions.emailAddress.question",
    answerKey: "questions.emailAddress.answer"
  },
  {
    id: "postalCode",
    questionKey: "questions.postalCode.question",
    answerKey: "questions.postalCode.answer"
  }
];