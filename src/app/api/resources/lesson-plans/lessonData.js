/**
 * @file lessonData.js
 * @module Data/lesson-plans/lessonData
 * @desc Contains lesson plan data for the Alberta Tomorrow application. 
 *
 * @author Chace Nielson
 * @created Apr 10, 2025
 * @updated Apr 10, 2025
 */


// 33 teacher resources
/**
 * 
 * sorting
 * - grade
 * - subject
 * 
 * - themes
 * - hastags = ["words1", "words2", "words3"]
 * 
 * Associated videos 
 * id list
 * 
 */

import { Theme, Grade, Subject, AssociatedTool } from "./lessonPlanEnums";

// ======= Aggregated Videos =======
export const allVideos = [
  { // Introduction to Glaciers - theme: Glaciers/Watersheds
    id: "glaciers-01-intro-to-glaciers",
    title: "Introduction to Glaciers",
    theme: Theme.GLACIERS_AND_WATERSHEDS,
    tools: [AssociatedTool.SIMULATOR],
    description:
      "In this lesson students will be introduced to the glaciers of Alberta, glacier terminology, meet a glaciologist from the University of Alberta and identify the effects of human activity on glaciers.",
    approximateTime: "40 min",
    files: [
      {
        title: "Glaciers in Alberta",
        description: "A slide show about glaciers in Alberta.",
        link: "https://docs.google.com/presentation/d/1rBX6NS-xWfHD3HxAV341q1ZC4wZV5FvNaUdsLi94ptg/view#slide=id.p",
      }
    ],
    grades: [
      Grade.GRADE_5, Grade.GRADE_7, Grade.GRADE_8, Grade.GRADE_9, Grade.GRADE_10, Grade.GRADE_11,
    ],
    subjects: [ 
      Subject.SCIENCE, Subject.BIOLOGY,
    ],
    tags: [
      "Wetland Ecosystems","Interactions and Ecosystems","Freshwater and Satlwater Systems","Environmental Chemistry","Energy Flow in Global System","Energy and Matter in the Biosphere","Investigating Matter and Energy","Biology 20","Science 14","water","wetland","glaciers","human activity","terminology"
    ],
    learningOutcomes: [
      "develop an understanding of what glaciologist do",
      "identify glacier location in Alberta",
      "be introduced to glacier vocabulary",
      "learn what Dr. Ali Criscitiello does at the Ice Core Lab",
      "identify the effects of human activity on glaciers",
    ],
    videos: [
      "goi-20g-this-is-the-athabasca-glacier",     // This is the Athabasca Glacier
      "goi-10g-where-do-glaciers-form",            // Where do glaciers form?
      "goi-16g-how-glaciers-move",                 // How Glaciers Move
      "goi-02g-colour-of-the-ice",                 // Colour of the ice
      "goi-07g-seasonal-change-on-the-glacier",    // Seasonal change on the glacier and cryconite
      "goi-09g-what-is-a-moraine",                 // What is a moraine
      "goi-42g-how-big-is-the-athabasca-glacier",  // How big is the Athabasca Glacier
      "goi-04g-how-crevasses-form",                // How crevasses form
      "goi-08g-striations-on-the-rocks",           // Striations on the Rocks
      "goi-01g-are-people-affecting-the-glaciers", // Are people affecting the glaciers?
      "goi-24g-growth-and-attrition",              // Growth and Attrition
      "goi-19g-why-should-we-protect-glaciers"     // Why should we protect glaciers?
    ],
    relatedUrls: [
      [
        "U of A Ice Core Lab",
        "https://www.ualberta.ca/science/research-and-teaching/research/ice-core-archive/index.html",
      ],
    ],
  },
];