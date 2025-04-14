/**
 * @file LandUseLessons.js
 * @module Data/LessonPlans/LandUse
 * @desc Lesson plans organized under the "Land Use" theme for Alberta Tomorrow.
 *
 * @see {@link ../lessonPlanEnums.js | Lesson Plan Enums}
 *
 * @lessons
 * - Yesterday, Today, and Tomorrow
 * - My Future Alberta: Creating a Landuse Plan for 2050
 * - How do our Landuse Decisions affect the Biogeochemicals and Cycling of Matter in our Ecosystem?
 * - Governments Have it Rough! Can You Make Everyone Happy?
 * - Did We Do That? A Study of Alberta's Geography and the Benefits and Drawbacks of Landuse
 * - Did I Do That? The Relationship Between Humans and Their Environment
 * - Landuse Field Trip
 * - Stakeholder Debate
 * - Mistakes, Mitigations, and Making Amends. A Webinar by CPAWS and Alberta Tomorrow
 * 
 * @author Chace Nielson
 * @created Apr 13, 2025
 * @updated Apr 14, 2025
 */

import { Theme, Grade, Subject, AssociatedTool } from "../lessonPlanEnums";

export const LandUseLessons = [
  { // Lesson 1 - Yesterday, Today, and Tomorrow: Using the Alberta Tomorrow Simulator
    id: "landuse-01c-yesterday-today-tomorrow",
    title: "Yesterday, Today, and Tomorrow: Using the Alberta Tomorrow Simulator",
    provider: { name: "Alberta Tomorrow", link: "https://www.albertatomorrow.ca" },
    theme: Theme.LAND_USE,
    tools: [AssociatedTool.SIMULATOR],
    description:
      "Students will see how the landscape has changed since 1900 as a result of human activity. They will then investigate a business-as-usual future based on past development rates.",
    approximateTime: "90 min",
    files: [
      {
        title: "Yesterday, Today and Tomorrow - Using the Alberta Tomorrow Simulator",
        link: "/pdfs/lesson-plans/landUse/YesterdayTodayandTomorrow-UsingtheAlbertaTomorrowSimulator.pdf"
      }
    ],
    grades: [
      Grade.GRADE_4, Grade.GRADE_5, Grade.GRADE_6,
      Grade.GRADE_7, Grade.GRADE_8, Grade.GRADE_9,
      Grade.GRADE_10, Grade.GRADE_11
    ],
    subjects: [Subject.SOCIAL_STUDIES, Subject.SCIENCE, Subject.BIOLOGY],
    tags: [
      "land use", "historical change", "ecosystem services", "climate change", "simulator"
    ],
    learningOutcomes: [
      "Explore the province of Alberta on satellite imagery",
      "Identify which watershed they live in",
      "See how the landscape has changed and the effect on environmental indicators",
      "Explore a projected 'business as usual' scenario"
    ],
    videos: [],
    relatedUrls: []
  },
  { // Lesson 2 - My Future Alberta: Creating a Landuse Plan for 2050
    id: "landuse-02c-my-future-alberta",
    title: "My Future Alberta: Creating a Landuse Plan for 2050",
    provider: { name: "Alberta Tomorrow", link: "https://www.albertatomorrow.ca" },
    theme: Theme.LAND_USE,
    tools: [AssociatedTool.SIMULATOR],
    description:
      "Students use the Alberta Tomorrow simulator to create a land use plan for Alberta’s future.",
    approximateTime: "90 min",
    files: [
      {
        title: "My Future Alberta: Creating a Landuse Plan for 2050",
        link: "/pdfs/lesson-plans/landUse/MyFutureAlbertaCreatingaLandusePlanfor2050.pdf"
      }
    ],
    grades: [
      Grade.GRADE_4, Grade.GRADE_5, Grade.GRADE_6,
      Grade.GRADE_7, Grade.GRADE_8, Grade.GRADE_9,
      Grade.GRADE_10, Grade.GRADE_11
    ],
    subjects: [
      Subject.SOCIAL_STUDIES, Subject.SCIENCE, Subject.BIOLOGY
    ],
    tags: [
      "land use", "future planning", "economy", "ecosystem services"
    ],
    learningOutcomes: ["Create a landuse plan for Alberta’s future"],
    videos: [],
    relatedUrls: [
      {
        title: "Alberta Landuse Framework",
        link: "https://landuse.alberta.ca/Pages/default.aspx"
      }
    ]
  },
  {  // Lesson 3 - How do our Landuse Decisions affect the Biogeochemicals and Cycling of Matter in our Ecosystem?
    id: "landuse-03c-biogeochemical-cycles",
    title: "How do our Landuse Decisions affect the Biogeochemicals and Cycling of Matter in our Ecosystem?",
    provider: { name: "Alberta Tomorrow", link: "https://www.albertatomorrow.ca" },
    theme: Theme.LAND_USE,
    tools: [AssociatedTool.SIMULATOR],
    description:
      "Students explore the water, carbon, nitrogen, and phosphorus cycles and how landuse disrupts them. They use the simulator to explore scenarios and develop mitigation strategies.",
    approximateTime: "180 min",
    files: [
      { title: "Bio 20 Lesson Plan", link: "/pdfs/lesson-plans/landUse/ATBio20LessonPlanv6.pdf" },
      { title: "Bio 20 Student Worksheet", link: "/pdfs/lesson-plans/landUse/ATBio20Studentworksheetv6.pdf" },
      { title: "Bio 20 Answer Key", link: "/pdfs/lesson-plans/landUse/ATBio20AnswerKeyv6.pdf" }
    ],
    grades: [Grade.GRADE_11],
    subjects: [Subject.BIOLOGY],
    tags: ["biogeochemical cycles", "nutrients", "eutrophication", "land use planning"],
    learningOutcomes: [
      "Define biogeochemical cycles",
      "Investigate nutrient cycles and disruptions",
      "Explore scenarios using the simulator",
      "Develop a sustainable landuse plan"
    ],
    videos: [
      "env-01c-natural-landscapes",     // Natural Landscapes
      "env-02c-caribou-habitat",        // Caribou Habitat
      "env-03c-grizzly-habitat",        // Grizzly Habitat
      "env-04c-fish-habitat",           // Fish Habitat
      "env-05c-water-quality",          // Water Quality
      "env-06c-greenhouse-gasses",      // Greenhouse Gasses
      "soc-01d-human-population",       // Human Population
      "soc-02d-gdp",                    // Gross Domestic Product
      "soc-03d-hydrocarbon-production", // Hydrocarbon Production
      "soc-04d-timber-production",      // Timber Production
      "soc-05d-agriculture-production", // Agricultural Production
      "soc-06d-water-consumption",     // Water Consumption
    ],
    relatedUrls: []
  },
  { // Lesson 4 - Governments Have it Rough! Can You Make Everyone Happy?
    id: "landuse-04c-governments-have-it-rough",
    title: "Governments Have it Rough! Can You Make Everyone Happy?",
    provider: { name: "Alberta Tomorrow", link: "https://www.albertatomorrow.ca" },
    theme: Theme.LAND_USE,
    tools: [AssociatedTool.SIMULATOR],
    description:
      "Students assume the role of government planners tasked with balancing the interests of various stakeholders in land-use decisions. Through the simulator, they explore the complexities of policy-making and the challenges of satisfying diverse community needs.",
    approximateTime: "120 min",
    files: [
      {
        title: "Governments Have it Rough!",
        link: "/pdfs/lesson-plans/landUse/ATSS9LessonPlanv6.pdf"
      }
    ],
    grades: [Grade.GRADE_9],
    subjects: [Subject.SOCIAL_STUDIES],
    tags: [
      "policy-making", "stakeholder engagement", "land-use planning", "government roles"
    ],
    learningOutcomes: [
      "Students will learn about the interaction between the economy and environmental indicators",
      "students will investigate multiple perspectives on appropirate land use",
      "Students will role play different stakeholders",
      "Students will develop a landuse plan that would be best for all Albertans"
    ],
    videos: [
      "env-01c-natural-landscapes",     // Natural Landscapes
      "env-02c-caribou-habitat",        // Caribou Habitat
      "env-03c-grizzly-habitat",        // Grizzly Habitat
      "env-04c-fish-habitat",           // Fish Habitat
      "env-05c-water-quality",          // Water Quality
      "env-06c-greenhouse-gasses",      // Greenhouse Gasses
      "soc-01d-human-population",       // Human Population
      "soc-02d-gdp",                    // Gross Domestic Product
      "soc-03d-hydrocarbon-production", // Hydrocarbon Production
      "soc-04d-timber-production",      // Timber Production
      "soc-05d-agriculture-production", // Agricultural Production
      "soc-06d-water-consumption",     // Water Consumption
    ],
    relatedUrls: []
  },
  { // Lesson 5 - Did We Do That? A Study of Alberta's Geography and the Benefits and Drawbacks of Landuse
    id: "landuse-05c-did-we-do-that",
    title: "Did We Do That? A Study of Alberta's Geography and the Benefits and Drawbacks of Landuse",
    provider: { name: "Alberta Tomorrow", link: "https://www.albertatomorrow.ca" },
    theme: Theme.LAND_USE,
    tools: [AssociatedTool.SIMULATOR],
    description:
      "Grade 4 students will investigate Alberta's natural ecoregions through a series of educational videos, examining the benefits and drawbacks of different land-use decisions.",
    approximateTime: "12 classes",
    files: [
      {
        title: "Grade 4 Lesson Plan",
        link: "/pdfs/lesson-plans/landUse/ATGrade4lessonplanv6.pdf"
      }
    ],
    grades: [Grade.GRADE_4],
    subjects: [Subject.SOCIAL_STUDIES],
    tags: [
      "A sense of the Land", "land use", "quality of life", "wildlife", "water quality",
      "water consumption", "alberta", "economy", "ecosystem services",
      "beneficial management practices", "business as usual", "ghgs", "climate change",
      "biotic carbon storage", "forestry", "oil and gas production", "agriculture",
      "GDP", "human population", "fish health", "future", "land use planning",
      "historical change", "industrial activity"
    ],
    learningOutcomes: [
      "Investigate the geography of Alberta",
      "Examine the benefits and drawbacks of land-use practices"
    ],
    videos: [
      "env-01c-natural-landscapes",
      "env-02c-caribou-habitat",
      "env-03c-grizzly-habitat",
      "env-04c-fish-habitat",
      "env-05c-water-quality",
      "env-06c-greenhouse-gasses",
      "soc-01d-human-population",
      "soc-02d-gdp",
      "soc-03d-hydrocarbon-production",
      "soc-04d-timber-production",
      "soc-05d-agriculture-production",
      "soc-06d-water-consumption"
    ],
    relatedUrls: []
  },
  { // Lesson 6 - Did I Do That? The Relationship Between Humans and Their Environment
    id: "landuse-06c-did-i-do-that",
    title: "Did I Do That? The Relationship Between Humans and Their Environment",
    provider: { name: "Alberta Tomorrow", link: "https://www.albertatomorrow.ca" },
    theme: Theme.LAND_USE,
    tools: [AssociatedTool.SIMULATOR],
    description:
      "Using the Alberta Tomorrow simulator, students investigate the unintended consequences of human activity on the environment. They are challenged to come up with a future landuse plan for their watershed that balances the economy with the environment.",
    approximateTime: "180 min",
    files: [
      {
        title: "Science 7 Lesson Plan",
        link: "/pdfs/lesson-plans/landUse/ATScience7LessonPlanv6.pdf"
      }
    ],
    grades: [Grade.GRADE_7],
    subjects: [Subject.SCIENCE],
    tags: [
      "Interactions and Ecosystems", "land use", "quality of life", "wildlife", "water quality",
      "water consumption", "alberta", "economy", "ecosystem services", "beneficial management practices",
      "business as usual", "ghgs", "climate change", "biotic carbon storage", "forestry",
      "oil and gas production", "agriculture", "GDP", "human population", "fish health", "future",
      "land use planning", "historical change", "industrial activity"
    ],
    learningOutcomes: [
      "Investigate past changes on the landscape",
      "Investigate a possible future",
      "Create their own landuse plan for the future"
    ],
    videos: [
      "env-01c-natural-landscapes",
      "env-02c-caribou-habitat",
      "env-03c-grizzly-habitat",
      "env-04c-fish-habitat",
      "env-05c-water-quality",
      "env-06c-greenhouse-gasses",
      "soc-01d-human-population",
      "soc-02d-gdp",
      "soc-03d-hydrocarbon-production",
      "soc-04d-timber-production",
      "soc-05d-agriculture-production",
      "soc-06d-water-consumption"
    ],
    relatedUrls: []
  },
  { // Lesson 7 - Landuse Field Trip
    id: "landuse-07c-landuse-field-trip",
    title: "Landuse Field Trip",
    provider: { name: "Alberta Tomorrow", link: "https://www.albertatomorrow.ca" },
    theme: Theme.LAND_USE,
    tools: [AssociatedTool.SIMULATOR],
    description:
      "This is a self-led guide for teachers to go on a field trip with their class that investigates at least 2 different areas: one more pristine and one affected by landuse (e.g., a city, golf course). The lesson includes student worksheets and water test procedures. Users must supply their own test kits.",
    approximateTime: "1/2 day - full day depending on travel time",
    files: [
      {
        title: "Land Use Field Trip",
        link: "/pdfs/lesson-plans/landUse/ATLandUseFieldTripv6.pdf"
      }
    ],
    grades: [
      Grade.GRADE_4, Grade.GRADE_5, Grade.GRADE_6, Grade.GRADE_7,
      Grade.GRADE_8, Grade.GRADE_9, Grade.GRADE_10, Grade.GRADE_11
    ],
    subjects: [Subject.SCIENCE, Subject.BIOLOGY],
    tags: [
      "Science 14", "Biology 20", "Physical Geography of Canada", "Wetlands Ecosystems",
      "Interactions and Ecosystems", "Freshwater and Saltwater Systems", "Environmental Chemistry",
      "Energy FLow in Global Systems", "Change in Living Systems", "Energy and Matter Exchange ",
      "Investigating Matter and Enschange in the Biosphere",
      "Investigating Matter and Energy in the Environment",
      "Agriculture 1010", "Environmental Stewarship 1110", "Environmental Stewarship 1115",
      "Environmental Stewarship 3040", "land use", "quality of life", "wildlife", "water quality",
      "water consumption", "alberta", "economy", "ecosystem services", "beneficial management practices",
      "business as usual", "ghgs", "climate change", "biotic carbon storage", "forestry",
      "oil and gas production", "agriculture", "GDP", "human population", "fish health", "future",
      "land use planning", "historical change", "industrial activity"
    ],
    learningOutcomes: [
      "Investigate and compare water quality in a relatively pristine area and compare to one that has been affected by landuse"
    ],
    videos: [],
    relatedUrls: []
  },
  { // Lesson 8 - Stakeholder Debate
    id: "landuse-08c-stakeholder-debate",
    title: "Stakeholder Debate",
    provider: { name: "Alberta Tomorrow", link: "https://www.albertatomorrow.ca" },
    theme: Theme.LAND_USE,
    tools: [AssociatedTool.SIMULATOR],
    description:
      "In this stakeholder debate, the class is divided into different stakeholder groups. Each group must create a landuse plan that achieves their goals as a company or organization. They present their proposals to the class or government, and in the end, a consensus landuse plan that meets the goals of society is decided upon.",
    approximateTime: "4 classes",
    files: [
      {
        title: "Stakeholder Debate Lesson Plan",
        link: "/pdfs/lesson-plans/landUse/ATStakeholderdebatev6.pdf"
      }
    ],
    grades: [
      Grade.GRADE_4, Grade.GRADE_5, Grade.GRADE_6, Grade.GRADE_7,
      Grade.GRADE_8, Grade.GRADE_9, Grade.GRADE_10, Grade.GRADE_11
    ],
    subjects: [Subject.SCIENCE, Subject.SOCIAL_STUDIES],
    tags: [
      "Science 14", "Biology 20", "A Sense of the Land", "Wetland Ecosystems", "Trees and Forests",
      "Interactions and Ecosystems", "Freshwater and Saltwater Ecosystems", "Government Decision Making",
      "Environmenal Chemistry", "Globalization", "Energy and Matter in Chemical Change",
      "The Changing Earth", "Energy and Matter Exchange in the Biosphere", "land use", "wildlife",
      "water quality", "water consumption", "alberta", "economy", "ecosystem services",
      "beneficial management practices", "business as usual", "ghgs", "climate change",
      "biotic carbon storage", "forestry", "oil and gas production", "agriculture", "GDP",
      "human population", "fish health", "future", "land use planning", "historical change",
      "industrial activity"
    ],
    learningOutcomes: [
      "Students will learn about the interaction between the economy and environmental indicators",
      "Students will investigate multiple perspectives on appropriate land use",
      "Students will role play different stakeholders",
      "Students will develop a landuse plan that would be best for all Albertans"
    ],
    videos: [],
    relatedUrls: []
  },
  { // Lesson 9 - Mistakes, Mitigations, and Making Amends. A Webinar by CPAWS and Alberta Tomorrow
    id: "landuse-09c-mistakes-mitigations-making-amends",
    title: "Mistakes, Mitigations, and Making Amends. A Webinar by CPAWS and Alberta Tomorrow",
    provider: { name: "Alberta Tomorrow", link: "https://www.albertatomorrow.ca" },
    theme: Theme.LAND_USE,
    tools: [AssociatedTool.SIMULATOR],
    description:
      "A land based learning webinar presented by Alberta Tomorrow and CPAWS Southern Alberta.",
    approximateTime: "1 hour",
    files: [
      {
        title: "Land Based Learning Webinar Worksheet",
        link: "/pdfs/lesson-plans/landUse/AT_CPAWSWebinarStudentWorksheet.pdf"
      }
    ],
    grades: [
      Grade.GRADE_4, Grade.GRADE_5, Grade.GRADE_6, Grade.GRADE_7,
      Grade.GRADE_8, Grade.GRADE_9, Grade.GRADE_10, Grade.GRADE_11, Grade.GRADE_12
    ],
    subjects: [
      Subject.SCIENCE, Subject.BIOLOGY, Subject.OTHER
    ],
    tags: [
      "land use", "water quality", "Riparian zones", "indigenous knowledge"
    ],
    learningOutcomes: [],
    videos: [],
    relatedUrls: []
  }
  
];
