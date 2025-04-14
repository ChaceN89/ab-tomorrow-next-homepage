/**
 * @file GlaciersAndWatershedsLessons.js
 * @module Data/LessonPlans/GlaciersAndWatersheds
 * @desc Lesson plans organized under the "Glaciers and Watersheds" theme for Alberta Tomorrow.
 *
 * @see {@link ../lessonPlanEnums.js | Lesson Plan Enums}
 *
 * @lessons
 * - Introduction to Glaciers
 * - Love it or Lose It: Alberta Glacier Edition
 * - Ice Core Basics
 * - Follow the Flow: Water Quality and the Columbia Icefield
 * - Water Test Procedures
 * 
 * @author Chace Nielson
 * @created Apr 14, 2025
 * @updated Apr 14, 2025
 */

import {Theme, Grade, Subject, AssociatedTool} from "../lessonPlanEnums";

export const GlaciersAndWatershedsLessons = [
  { // Lesson 1 - Introduction to Glaciers
    id: "glaciers-01b-intro-to-glaciers",
    title: "Introduction to Glaciers",
    provider: {name:"Alberta Tomorrow", link:"https://www.albertatomorrow.ca"},
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
      {title: "U of A Ice Core Lab", link: "https://www.ualberta.ca/science/research-and-teaching/research/ice-core-archive/index.html"},
    ],
  },
  { // Lesson 2 - Love it or Lose It: Alberta Glacier Edition
    id: "glaciers-02b-love-it-or-lose-it",
    title: "Love it or Lose It: Alberta Glacier Edition",
    provider: {name:"Alberta Tomorrow", link:"https://www.albertatomorrow.ca"},
    theme: Theme.GLACIERS_AND_WATERSHEDS,
    tools: [AssociatedTool.SIMULATOR],
    description: 
      "Students investigate the location of glaciers in Alberta and observe how they have changed over time. Students learn about how climate change is affecting our glaciers and come up with an action plan to help prevent the further loss of our glaciers.",
    approximateTime: "30 min plus project time",
    files: [
      {
        title: "Love it or Lose it: Alberta Glacier Edition",
        description: "",
        link: "/pdfs/lesson-plans/glaciersAndWatersheds/Love_it_or_Lose_it__Alberta_Glacier_Edition.pdf"
      }
    ],
    grades: [
      Grade.GRADE_4, Grade.GRADE_5, Grade.GRADE_7, Grade.GRADE_8, Grade.GRADE_10, Grade.GRADE_11
    ],
    subjects: [
      Subject.SOCIAL_STUDIES, Subject.SCIENCE, Subject.BIOLOGY
    ],
    tags: [
      "A Sense of the Land", "Physical Geography of Canada", "Wetland Ecosystems", "Interactions and Ecosystems", "Freshwater and Satlwater Systems", "Energy Flow in Global System", "Energy and Matter Exchange", "Grade 10 Science", "Biology 20", "glaciers", "climate change", "action plan", "personal actions", "glacier loss"
    ],
    learningOutcomes: [
      "identify glacier location in Alberta",
      "observe change in the glaciers over time",
      "Investigate how climate change is affecting the Alberta’s Glaciers",
      "be challenged to develop an action plan of how they can help prevent further loss of the glaciers"
    ],
    videos: [
      "goi-43g-every-year-its-further-to-get-to-work",    // Every year it's further to get to work
      "goi-14g-where-will-the-glacier-be-in-30-years",    // Where will the glacier be in 30 years?
      "goi-24g-growth-and-attrition",                     // Growth and Attrition/
      "goi-13g-where-was-the-glacier-in-1982",            // Where was the glacier in 1982 and what is a lateral moraine?
      "goi-12g-where-was-the-athabasca-glacier-in-2006",  // Where was the Athabasca glacier in 2006?
      "goi-19g-why-should-we-protect-glaciers",           // Why Should We Protect Glaciers?
      "goi-01g-are-people-affecting-the-glaciers",        // Are people affecting the glaciers?
      "goi-33g-what-can-we-do-to-protect-alberta"         // What can we do to protect Alberta glaciers?

    ],
    relatedUrls: [
      {title: "Mountain Legacy Project", link: "http://mountainlegacy.ca/"},
      {title: "Guardians of the Ice", link: "https://guardiansoftheice.com/the-columbia-icefield/"}
    ]
  },
  { // Lesson 3 - Ice Core Basics
    id: "glaciers-03b-ice-core-basics",
    title: "Ice Core Basics",
    provider: {name:"Alberta Tomorrow", link:"https://www.albertatomorrow.ca"},
    theme: Theme.GLACIERS_AND_WATERSHEDS,
    tools: [AssociatedTool.SIMULATOR],
    description: 
      "The students will watch videos of a glaciologist talking about how she analyzes the ice cores she collects from glaciers.",
    approximateTime: "30 min",
    files: [
      {
        title: "Ice Core Basics",
        description: "",
        link: "/pdfs/lesson-plans/glaciersAndWatersheds/IceCoreBasics.pdf"
      }
    ],
    grades: [
      Grade.GRADE_5, Grade.GRADE_7, Grade.GRADE_8, Grade.GRADE_9, Grade.GRADE_10, Grade.GRADE_11
    ],
    subjects: [
      Subject.SCIENCE, Subject.BIOLOGY
    ],
    tags: [
      "Wetlands", "Interactions and Ecosystems", "Freshwater and Saltwater Systems", "Environmental Chemistry", "Energy Flow in Global Systems", "Energy and Matter in Chemical Change", "Energy and Matter in the Biosphere", "Chemical Changes", "Matter and Energy", "Biology 20", "Science 14", "oxygen isotopes", "climate change", "glaciers", "water quality", "persistent chemicals", "cfc's"
    ],
    learningOutcomes: [
      "understand what we can learn from ice core analysis"
    ],
    videos: [
      "oth-01z-oxygen-isotopes",                    // Oxygen Isotopes and the Paleoclimate Record
      "soc-06d-water-consumption",                  // Water Consumption
      "env-05c-water-quality",                      // Water Quality - environmental indicators
      "goi-30g-what-is-the-picarro-machine",        // What is the Picarro machine?
      "goi-28g-measuring-isotopes",                 // Measuring isotopes
      "goi-27g-ion-chromatrography",                // Ion Chromatography
      "goi-26g-how-do-chemicals-that-were-trapped", // How do chemicals that were trapped in the ice get into our water?
      "goi-21g-endocrine-disruptors",               // Endocrine Disruptors
    ],
    relatedUrls: []
  },
  { // Lesson 4 - Follow the Flow: Water Quality and the Columbia Icefield
    id: "glaciers-04b-follow-the-flow",
    title: "Follow the Flow: Water Quality and the Columbia Icefield",
    provider: {name:"Alberta Tomorrow", link:"https://www.albertatomorrow.ca"},
    theme: Theme.GLACIERS_AND_WATERSHEDS,
    tools: [AssociatedTool.SIMULATOR],
    description: "Students will learn what a watershed is and identify what watershed they live within. Through watching some short video interviews students will understand how climate change is resulting in persistent chemicals, some banned in Canada, are being released into the rivers from which we get our drinking water from.",
    approximateTime: "60 min",
    files: [
      {
        title: "Follow the Flow",
        description: "",
        link: "/pdfs/lesson-plans/glaciersAndWatersheds/FollowtheFlow.pdf"
      }
    ],
    grades: [
      Grade.GRADE_5, Grade.GRADE_7, Grade.GRADE_8, Grade.GRADE_10, Grade.GRADE_11, Grade.GRADE_12
    ],
    subjects: [
      Subject.SOCIAL_STUDIES, Subject.SCIENCE, Subject.BIOLOGY
    ],
    tags: [
      "Science 14", "Biology 20", "Physical Geography of Canada", "Wetlands Ecosystems", "Interactions and Ecosystems", "Freshwater and Saltwater Systems", "Environmental Chemistry", "Energy Flow in Global Systems", "Climate Change", "Persistent Chemicals", "cfcs", "water", "watershed", "glaciers", "water source"
    ],
    learningOutcomes: [
      "identify their watershed and drainage basin",
      "find the Columbia Icefield on the map",
      "define persistent chemicals",
      "investigate factors that contribute to water quality",
      "develop an understanding of how climate change will affect the quality and of our drinking water"
    ],
    videos: [
      "goi-32g-watershed-great-divide",              // Watershed Great Divide - Where does water from the Columbia Icefield go?
      "goi-11g-where-does-water-from-the-snowdome",  // Where does water from the Snowdome go?
      "goi-26g-how-do-chemicals-that-were-trapped",  // How do chemicals that were trapped in the ice get into our water?
      "goi-29g-persistent-chemicals-in-alberta",     // Persistent Chemicals in Alberta
      "goi-05g-how-do-forest-fires-affect-glaciers", // How do forest fires affect glaciers?
    ],
    relatedUrls: []
  },
  { // Lesson 5 - Water Test Procedures
    id: "glaciers-05b-water-test-procedures",
    title: "Water Test Procedures",
    provider: {name:"Alberta Tomorrow", link:"https://www.albertatomorrow.ca"},
    theme: Theme.GLACIERS_AND_WATERSHEDS,
    tools: [AssociatedTool.SIMULATOR],
    description: "Water test procedures guide.",
    approximateTime: "",
    files: [
      {
        title: "Water Test Procedures",
        description: "",
        link: "/pdfs/lesson-plans/glaciersAndWatersheds/WaterTestProcedures.pdf"
      }
    ],
    grades: [
      Grade.GRADE_4, Grade.GRADE_5, Grade.GRADE_6, Grade.GRADE_7, Grade.GRADE_8, Grade.GRADE_9, Grade.GRADE_10, Grade.GRADE_11
    ],
    subjects: [
      Subject.SCIENCE, Subject.BIOLOGY
    ],
    tags: [
      "Science 14", "Biology 20", "Water", "Water Quality", "Water Consumption", "Glaciers", "Wetlands", "Watershed"
    ],
    learningOutcomes: [],
    videos: [],
    relatedUrls: []
  }
]