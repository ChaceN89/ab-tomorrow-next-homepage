/**
 * @file ClimateLessons.js
 * @module Data/LessonPlans/ClimateLessons
 * @desc Lesson plans organized under the "Climate Change" theme for Alberta Tomorrow.
 *
 * @see {@link ../lessonPlanEnums.js | Lesson Plan Enums}
 *
 * @lessons
 * - Going Going Gone: Climate Change and the Columbia Icefield
 * - Climate Change in Alberta: Investigating Mild, Medium and Hot Scenarios
 * - Water Quality, Climate Change and Alberta's Glaciers
 * 
 * @author Chace Nielson
 * @created Apr 14, 2025
 * @updated Apr 14, 2025
 */


import {Theme, Grade, Subject, AssociatedTool} from "../lessonPlanEnums";

export const ClimateLessons = [
  { // Lesson 1 - Going Going Going Gone: Climate Change and the Columbia Icefield
    id: "climate-01a-going-going-gone",
    title: "Going Going Going Gone: Climate Change and the Columbia Icefield",
    provider: { name: "Alberta Tomorrow", link: "https://www.albertatomorrow.ca" },
    theme: Theme.CLIMATE_CHANGE,
    tools: [AssociatedTool.SIMULATOR],
    description: 
      "Students will explore how climate change has affected Alberta's glaciers and do some calculations to determine the loss of ice on the Athabasca Glacier.",
    approximateTime: "60 min",
    files: [
      {
        title: "Going Going Going Gone",
        link: "/pdfs/lesson-plans/climateChange/GoingGoingGoingGone.pdf"
      }
    ],
    grades: [
      Grade.GRADE_4, Grade.GRADE_5, Grade.GRADE_7, Grade.GRADE_8, Grade.GRADE_10, Grade.GRADE_11
    ],
    subjects: [
      Subject.SOCIAL_STUDIES, Subject.SCIENCE, Subject.BIOLOGY, Subject.CTS
    ],
    tags: [
      "glaciers", "climate change", "math", "ice loss", "calculations", "water", 
      "Energy Flow in Global Systems", "Environmental Stewardship", "Physical Geography of Canada"
    ],
    learningOutcomes: [
      "understand seasonal variation in glacier mass",
      "understand the effect of climate change on glacier mass",
      "calculate loss of glacier ice on the Athabasca Glacier over the next 10 years",
      "determine the loss of ice volume in Rocky Mountain Glaciers"
    ],
    videos: [
      "env-06c-greenhouse-gasses",  // Greenhouse Gases
      "landscape-01b-climate-change", // Climate Change
      "goi-35g-why-are-alberta-glaciers-important", // Is it important glaciers are in the national parks?
      "goi-22g-forest-fires-and-glaciers", // Forest fires and glaciers
      "oth-01z-oxygen-isotopes", // Oxygen Isotopes and the Paleoclimate Record
    ],
    relatedUrls: []
  },
  { // Lesson 2 - Climate Change in Alberta: Investigating Mild, Medium and Hot Climate Scenarios
    id: "climate-02a-scenarios",
    title: "Climate Change in Alberta: Investigating Mild, Medium and Hot Climate Scenarios",
    provider: { name: "Alberta Tomorrow", link: "https://www.albertatomorrow.ca" },
    theme: Theme.CLIMATE_CHANGE,
    tools: [AssociatedTool.SIMULATOR],
    description:
      "Students will use the Alberta Tomorrow simulator to investigate different climate change scenarios and see the consequences of different futures and the benefits of using beneficial management practices.",
    approximateTime: "",
    files: [
      {
        title: "Climate Change in Alberta: Using the Alberta Tomorrow Simulator",
        link: "/pdfs/lesson-plans/climateChange/ClimateChangeinAlbertaUsingtheAlbertaTomorrowSimuator.pdf"
      }
    ],
    grades: [
      Grade.GRADE_4, Grade.GRADE_5, Grade.GRADE_6, Grade.GRADE_7, Grade.GRADE_8,
      Grade.GRADE_9, Grade.GRADE_10, Grade.GRADE_11
    ],
    subjects: [
      Subject.SOCIAL_STUDIES, Subject.SCIENCE, Subject.BIOLOGY
    ],
    tags: [
      "Science 14", "Biology 20", "A Sense of the Land", "Wetland Ecosystems", "Trees and Forests",
      "Interactions and Ecosystems", "Freshwater and Saltwater Ecosystems", "Government Decision Making",
      "Environmental Chemistry", "Globalization", "Energy and Matter in Chemical Change", "The Changing Earth",
      "Energy and Matter Exchange in the Biosphere", "land use", "wildlife", "climate scenarios", "RCPs",
      "natural landscapes", "shifting ecosystems", "water quality", "water consumption", "alberta", "economy",
      "ecosystem services", "beneficial management practices", "business as usual", "ghgs", "climate change",
      "biotic carbon storage", "forestry", "oil and gas production", "agriculture", "GDP", "human population",
      "fish health", "future", "land use planning", "historical change", "industrial activity"
    ],
    learningOutcomes: [
      "Investigate the impact of climate change on Alberta’s precipitation, climate",
      "Investigate the impact of climate change on Alberta’s natural regions",
      "Investigate the impact of climate change on our environment and economy"
    ],
    videos: [
      "landscape-01b-climate-change", // Climate Change
    ],
    relatedUrls: [
      {
        title: "Climate Change in Alberta",
        link: "https://www.alberta.ca/climate-change-alberta.aspx"
      }
    ]
  },
  { // Lesson 3 - Water Quality, Climate Change and Alberta's Glaciers
    id: "climate-03a-water-quality-glaciers",
    title: "Water Quality, Climate Change and Alberta's Glaciers",
    provider: { name: "Alberta Tomorrow", link: "https://www.albertatomorrow.ca" },
    theme: Theme.CLIMATE_CHANGE,
    tools: [AssociatedTool.SIMULATOR],
    description:
      "This lesson plan accompanies the webinar recording found under the video section. The webinar was held on May 27, 2020 and features four prominent scientists discussing climate change, glacier melt, water policy, and water quality in Alberta.",
    approximateTime: "180 min",
    files: [
      {
        title: "Water Quality, Climate Change and Alberta’s Glaciers",
        link: "/pdfs/lesson-plans/climateChange/WaterQualityClimateChangeandAlbertasGlaciers.pdf"
      },
      {
        title: "Webinar Worksheet",
        link: "/pdfs/lesson-plans/climateChange/WaterQualityClimateChangeandAlbertasGlaciersStudentWorksheet.pdf"
      },
      {
        title: "Glaciers in Alberta (Google Slides)",
        link: "https://docs.google.com/presentation/d/1rBX6NS-xWfHD3HxAV341q1ZC4wZV5FvNaUdsLi94ptg/edit?usp=sharing"
      }
    ],
    grades: [
      Grade.GRADE_4, Grade.GRADE_5, Grade.GRADE_6, Grade.GRADE_7, Grade.GRADE_8,
      Grade.GRADE_9, Grade.GRADE_10, Grade.GRADE_11
    ],
    subjects: [
      Subject.SCIENCE, Subject.SOCIAL_STUDIES
    ],
    tags: [
      "water", "water quality", "water consumption", "glaciers", "glacier melt", "climate change",
      "ice coring", "forest fires", "water policy", "persistent chemicals", "cfcs", "ddt", "albedo"
    ],
    learningOutcomes: [
      "learn about water quality in Alberta",
      "identify what watershed you live within",
      "understand basic glacier terminology",
      "describe the effect of climate change on Alberta’s glaciers",
      "be introduced to the impact of forest fires on glaciers",
      "become aware of the importance of water policy in dealing with the effects of climate change",
      "consider the impact of our activities on climate change and Alberta’s glaciers"
    ],
    videos: [
      "landscape-04b-glaciers-webinar" ///Water Quality, Climate Change and Alberta's Glaciers Webinar
    ],
    relatedUrls: [
      {
        title: "Guardians of the Ice",
        link: "https://guardiansoftheice.com/the-columbia-icefield/"
      }
    ]
  }
  
];
