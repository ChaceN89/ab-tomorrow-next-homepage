/**
 * 
Isotopes and Climate Change

Glenmore Dam and Resevoir

Water Quality: Water Treatment

Constructed Wetlands and Stormwater

/**
 * @file BowRiverWatershedLessons.js
 * @module Data/LessonPlans/BowRiverWatershed
 * @desc Structured lesson plan data for the "Bow River Watershed" theme in Alberta Tomorrow.
 *
 * @see {@link ../lessonPlanEnums.js | Lesson Plan Enums}
 *
 * @lessons
 * - Isotopes and Climate Change
 * - Glenmore Dam and Reservoir: Water Services
 * - Water Quality: Water Treatment
 * - Constructed Wetlands and Stormwater
 * - Aquifers
 * - The Watershed
 * - Hydrology and Land Development
 * - Watersheds and Hydrology
 * - Hydrology and Climate Change
 * - Invasive Species and Control
 * - Native Prairies and Plants
 * 
 * @author Chace Nielson
 * @created Apr 14, 2025
 * @updated Apr 14, 2025
 */
import { Theme, Grade, Subject, AssociatedTool } from "../lessonPlanEnums";

export const BowRiverWatershedLessons = [
  { // Lesson 1 - Isotopes and Climate Change
    id: "brw-01f-isotopes-and-climate-change",
    title: "Isotopes and Climate Change",
    provider: { name: "Alberta Tomorrow", link: "https://www.albertatomorrow.ca" },
    theme: Theme.BOW_RIVER_WATERSHED,
    tools: [AssociatedTool.SIMULATOR],
    description: "We can track climate changes by looking at what types of isotopes are in the water.",
    approximateTime: "30 to 60 min",
    files: [
      {
        title: "Isotopes and Climate Change - Google Doc",
        link: "https://docs.google.com/document/d/1PcI2jRXdspNZqIkJeppDro2Ub0wXz9bi/"
      }
    ],
    grades: [Grade.GRADE_10, Grade.GRADE_11, Grade.GRADE_12],
    subjects: [Subject.SCIENCE, Subject.CHEMISTRY],
    tags: [
      "isotopes", "climate change", "oxygen isotopes", "hydrogen isotopes",
      "watershed", "environmental change", "water cycle", "streamflow", "Bow River"
    ],
    learningOutcomes: [
      "Examine the use of isotope tracking",
      "Investigate the consequences of climate change",
      "Examine the negative impact of climate change"
    ],
    videos: [],
    relatedUrls: []
  },

  { // Lesson 2 - Glenmore Dam and Resevoir: Water Services
    id: "brbc-02f-glenmore-dam-water-services",
    title: "Glenmore Dam and Reservoir: Water Services",
    provider: { name: "Alberta Tomorrow", link: "https://www.albertatomorrow.ca" },
    theme: Theme.BOW_RIVER_WATERSHED,
    tools: [AssociatedTool.SIMULATOR],
    description: "In this activity you will learn about the movement and management of water within the city of Calgary, along with the history of the Glenmore Resevoir and Dam.",
    approximateTime: "30 to 60 min",
    files: [
      {
        title: "Glenmore Dam and Resevoir: Water Services - Google Doc",
        link: "https://docs.google.com/document/d/1X8bXoEl8IDyHjAtW5nSc5mtB-jVN8DU0/"
      }
    ],
    grades: [Grade.GRADE_6, Grade.GRADE_7, Grade.GRADE_8, Grade.GRADE_9, Grade.GRADE_10],
    subjects: [Subject.SCIENCE],
    tags: [
      "water treatment", "dam", "resevoir", "drinking water", "water quality",
      "Calgary", "Glenmore Resevoir", "Glenmore Dam", "water management", "Bow River"
    ],
    learningOutcomes: [],
    videos: ["brbc-09f-water-services"],
    relatedUrls: []
  },
  { // Lesson 3 - Water Quality: Water Treatment
    id: "brbc-03f-water-quality-treatment",
    title: "Water Quality: Water Treatment",
    provider: { name: "Alberta Tomorrow", link: "https://www.albertatomorrow.ca" },
    theme: Theme.BOW_RIVER_WATERSHED,
    tools: [AssociatedTool.SIMULATOR],
    description: "In this activity you will learn about the process of cleaning water to meet drinking standards within the City of Calgary.",
    approximateTime: "30 to 60 min",
    files: [
      {
        title: "Water Quality: Water Treatment - Google Doc",
        link: "https://docs.google.com/document/d/1unCOQUIHRLS5YZJ3J5ekBFurcbr9zaL7/"
      }
    ],
    grades: [Grade.GRADE_8, Grade.GRADE_9, Grade.GRADE_10, Grade.GRADE_11, Grade.GRADE_12],
    subjects: [Subject.SCIENCE],
    tags: [
      "water quality", "water treatment", "Glenmore Resevoir", "pre treatment",
      "disinfection", "Glenmore Dam", "City of Calgary", "drinking water", "Bow River"
    ],
    learningOutcomes: [
      "Investigate the stages of water treatment"
    ],
    videos: ["brbc-08f-water-quality"],
    relatedUrls: []
  },
  { // Lesson 4 - Constructed Wetlands and Stormwater
    id: "brbc-04f-constructed-wetlands-stormwater",
    title: "Constructed Wetlands and Stormwater",
    provider: { name: "Alberta Tomorrow", link: "https://www.albertatomorrow.ca" },
    theme: Theme.BOW_RIVER_WATERSHED,
    tools: [AssociatedTool.SIMULATOR],
    description: "In this activity you will learn about stormwater and how wetlands are constructed to manage it.",
    approximateTime: "30 to 60 min",
    files: [
      {
        title: "Constructed Wetlands and Stormwater - Google Doc",
        link: "https://docs.google.com/document/d/1GrkDcND2Fflt_-S-R6DyNrJL8lwalLG_/"
      }
    ],
    grades: [Grade.GRADE_8, Grade.GRADE_9, Grade.GRADE_10, Grade.GRADE_11],
    subjects: [Subject.SCIENCE, Subject.BIOLOGY],
    tags: [
      "constructed wetlands", "wetlands", "stormwater", "water management", "Bow River"
    ],
    learningOutcomes: [
      "Examine stormwater functions and the role of wetlands in water management and quality",
      "Investigate the consequences of resource production, urbanization, and economic growth on wetlands and water quality",
      "Examine the negative environmental impact of disruption of the watershed as a result of resource use"
    ],
    videos: ["brbc-07f-wetlands-stormwater"],
    relatedUrls: []
  },
  { // Lesson 5 - Aquifers
    id: "brbc-05f-aquifers",
    title: "Aquifers",
    provider: { name: "Alberta Tomorrow", link: "https://www.albertatomorrow.ca" },
    theme: Theme.BOW_RIVER_WATERSHED,
    tools: [AssociatedTool.SIMULATOR],
    description: "In this activity you will learn about the aquifer and groundwater within the Elbow River sub basin.",
    approximateTime: "30 to 60 min",
    files: [
      {
        title: "Aquifers - Google Doc",
        link: "https://docs.google.com/document/d/1GBnAfLDry3L8DEJTw1hqczlE5lSD0r5O/"
      }
    ],
    grades: [
      Grade.GRADE_5, Grade.GRADE_6, Grade.GRADE_7,
      Grade.GRADE_8, Grade.GRADE_9, Grade.GRADE_10, Grade.GRADE_11
    ],
    subjects: [Subject.SCIENCE, Subject.BIOLOGY],
    tags: [
      "aquifers", "Elbow River", "Bow River", "Groundwater",
      "water quality", "water usage", "geology", "Bragg Creek"
    ],
    learningOutcomes: [
      "Examine the landscape and compare them to what the geology below could look like",
      "Investigate the consequences of resource production, urbanization, and economic growth on aquifers and groundwater"
    ],
    videos: ["brbc-06f-erwp-aquifers"],
    relatedUrls: []
  },
  

  { // Lesson 6 - The Watershed
    id: "brbc-06f-the-watershed",
    title: "The Watershed",
    provider: { name: "Alberta Tomorrow", link: "https://www.albertatomorrow.ca" },
    theme: Theme.BOW_RIVER_WATERSHED,
    tools: [AssociatedTool.SIMULATOR],
    description: "In this activity you will learn about how land use changes impact how water moves through the landscape and how that changes our interactions with it.",
    approximateTime: "30 to 60 min",
    files: [
      {
        title: "The Watershed - Google Doc",
        link: "https://docs.google.com/document/d/1X8bXoEl8IDyHjAtW5nSc5mtB-jVN8DU0/"
      }
    ],
    grades: [
      Grade.KINDERGARTEN,
      Grade.GRADE_1,
      Grade.GRADE_2,
      Grade.GRADE_3
    ],
    subjects: [Subject.SCIENCE],
    tags: [
      "watershed", "Bow River", "water", "water cycle"
    ],
    learningOutcomes: [
      "Examine the land and spaces where water exists",
      "Investigate the different ways that people can interact with the rivers and water",
      "Examine the need for water in our lives"
    ],
    videos: ["brbc-01f-watershed"],
    relatedUrls: []
  },
  { // Lesson 7 - Hydrology and Land Development
    id: "brbc-07f-hydrology-land-development",
    title: "Hydrology and Land Development",
    provider: { name: "Alberta Tomorrow", link: "https://www.albertatomorrow.ca" },
    theme: Theme.BOW_RIVER_WATERSHED,
    tools: [AssociatedTool.SIMULATOR],
    description: "In this activity you will learn about how land use changes impact how water moves through the landscape and how that changes our interactions with it.",
    approximateTime: "30 to 60 min",
    files: [
      {
        title: "Hydrology and Land Development - Google Doc",
        link: "https://docs.google.com/document/d/1d4mr6hIi_J3jNzJVj77lyBNeCW_jGhWq/edit"
      }
    ],
    grades: [
      Grade.GRADE_2, Grade.GRADE_3, Grade.GRADE_4, Grade.GRADE_5,
      Grade.GRADE_6, Grade.GRADE_7, Grade.GRADE_8,
      Grade.GRADE_9, Grade.GRADE_10, Grade.GRADE_11
    ],
    subjects: [Subject.SCIENCE, Subject.BIOLOGY],
    tags: [
      "water", "land use", "Bow River", "eutrophication",
      "water allocation", "water use", "2013 flood"
    ],
    learningOutcomes: [
      "Examine the watershed and hydrological practices",
      "Investigate how a watershed functions"
    ],
    videos: ["brbc-05f-hydro-dev"],
    relatedUrls: []
  },
  { // Lesson 8 - Watersheds and Hydrology
    id: "brbc-08f-watersheds-hydrology",
    title: "Watersheds and Hydrology",
    provider: { name: "Alberta Tomorrow", link: "https://www.albertatomorrow.ca" },
    theme: Theme.BOW_RIVER_WATERSHED,
    tools: [AssociatedTool.SIMULATOR],
    description: "In this activity you will learn about the basic functions of a watershed, and the hydrology that is involved.",
    approximateTime: "30 to 60 min",
    files: [
      {
        title: "Watersheds and Hydrology - Google Doc",
        link: "https://docs.google.com/document/d/1pluUXun-r0TxsYWRj8b5X__UlWWcJMcW/edit"
      }
    ],
    grades: [
      Grade.GRADE_2, Grade.GRADE_3, Grade.GRADE_4,
      Grade.GRADE_5, Grade.GRADE_6, Grade.GRADE_7, Grade.GRADE_8
    ],
    subjects: [Subject.SCIENCE],
    tags: [
      "water", "watershed", "water storage", "Bow River", "water use"
    ],
    learningOutcomes: [
      "Examine the stage of the watershed",
      "Investigate watershed functions"
    ],
    videos: ["brbc-04f-watersheds-hydro"],
    relatedUrls: []
  },
  

  { // Lesson 9 - Hydrology and Climate Change
    id: "brbc-09f-hydrology-climate-change",
    title: "Hydrology and Climate Change",
    provider: { name: "Alberta Tomorrow", link: "https://www.albertatomorrow.ca" },
    theme: Theme.BOW_RIVER_WATERSHED,
    tools: [AssociatedTool.SIMULATOR],
    description: "In this activity you will learn about how to monitor climate change and hydrologic functions within a watershed.",
    approximateTime: "30 to 60 min",
    files: [
      {
        title: "Hydrology and Climate Change - Google Doc",
        link: "https://docs.google.com/document/d/1RgpNqFu8Muak1gNkwCZbaxPoFc6qzXM4/edit"
      }
    ],
    grades: [
      Grade.GRADE_3, Grade.GRADE_4, Grade.GRADE_5, Grade.GRADE_6,
      Grade.GRADE_7, Grade.GRADE_8, Grade.GRADE_9, Grade.GRADE_10
    ],
    subjects: [Subject.SCIENCE],
    tags: [
      "water cycle", "extreme weather", "precipitation",
      "glaciers", "climate change"
    ],
    learningOutcomes: [
      "Examine the effects of climate change on the water cycle and hydrology"
    ],
    videos: ["brbc-02f-hydro-climate"],
    relatedUrls: []
  },
  { // Lesson 10 - Invasive Species and Control
    id: "brbc-10f-invasive-species-control",
    title: "Invasive Species and Control",
    provider: { name: "Alberta Tomorrow", link: "https://www.albertatomorrow.ca" },
    theme: Theme.BOW_RIVER_WATERSHED,
    tools: [AssociatedTool.SIMULATOR],
    description: "In this activity you will learn about invasive species found in Alberta, along with methods to control them.",
    approximateTime: "30 to 60 min",
    files: [
      {
        title: "Invasive Species and Control - Google Doc",
        link: "https://docs.google.com/document/d/1qqVuwjHNtqhLvMsjksYxXIQTULxbah9S/"
      }
    ],
    grades: [
      Grade.GRADE_2, Grade.GRADE_3, Grade.GRADE_4, Grade.GRADE_5, Grade.GRADE_6,
      Grade.GRADE_7, Grade.GRADE_8, Grade.GRADE_9, Grade.GRADE_10,
      Grade.GRADE_11, Grade.GRADE_12
    ],
    subjects: [Subject.SCIENCE, Subject.BIOLOGY],
    tags: [
      "invasive species", "integrated pest managment",
      "native prairie", "biodiversity"
    ],
    learningOutcomes: [
      "Examine the role of invasive, introduced and threatened species",
      "Investigate the methods of addressing the management of invasive species",
      "Observe spaces that native and introduced species are seen to examine the role of biodiversity"
    ],
    videos: ["brbc-011f-invasive-species"],
    relatedUrls: []
  },
  { // Lesson 11 - Native Prairies and Plants
    id: "brbc-11f-native-prairies-plants",
    title: "Native Prairies and Plants",
    provider: { name: "Alberta Tomorrow", link: "https://www.albertatomorrow.ca" },
    theme: Theme.BOW_RIVER_WATERSHED,
    tools: [AssociatedTool.SIMULATOR],
    description: "In this activity, you will learn about the biodiversity of the native prairies, and the many different types of functions native plants have roles in, as well as the importance of bees and other pollinators.",
    approximateTime: "30 to 60 min",
    files: [
      {
        title: "Native Prairies and Plants - Google Doc",
        link: "https://docs.google.com/document/d/1uTt5BFsG986N8SgW9H4nNCfXDPj5Wta7/"
      }
    ],
    grades: [
      Grade.GRADE_7, Grade.GRADE_8, Grade.GRADE_9,
      Grade.GRADE_10, Grade.GRADE_11, Grade.GRADE_12
    ],
    subjects: [Subject.SCIENCE, Subject.BIOLOGY],
    tags: [
      "watershed", "Bow River", "Pollination", "biodiversity",
      "native plants", "native prairie", "invasive species", "agriculture"
    ],
    learningOutcomes: [
      "Examine the ecological roles of plants in the prairies",
      "Investigate the methods of addressing threatened native species",
      "Observe spaces that native and introduced species are seen to examine the role of biodiversity"
    ],
    videos: ["brbc-010f-native-prairies"],
    relatedUrls: []
  }
  


];
