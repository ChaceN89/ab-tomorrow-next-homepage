/**
 * @file NaturalRegions360Lessons.js
 * @module Data/LessonPlans/NaturalRegions360
 * @desc Structured lesson plan data for the "Alberta Natural Regions" theme.
 *
 * @see {@link ../lessonPlanEnums.js | lessonPlanEnums}
 * 
 * @notes 
 *  previously named NaturalRegions360Lessons - from the simulator application list of lesson plans
 * 
 * @lessons
 * - 360 Virtual Field Trips to Alberta's 6 Ecoregions
 * - Animal Adaptations - Using the 360 Virtual Field Trips
 * - Plant and Animal Adaptations - Using the 360 Virtual Field Trips
 * - Alberta’s Natural Resources
 * - Alberta’s Natural Regions
 * - Alberta's Ecosystem Diversity
 *
 * @author Chace Nielson
 * @created Apr 13, 2025
 * @updated July 14, 2025
 */

import { Theme, Grade, Subject, AssociatedTool } from "../lessonPlanEnums";

export const AlbertNaturalRegions = [
  { // Lesson 1 - 360 Virtual Field Trips to Alberta's 6 Ecoregions
    id: "abRegions-01-virtual-field-trips-ecoregions",
    title: "360 Virtual Field Trips to Alberta's 6 Ecoregions",
    provider: {
      name: "Alberta Tomorrow",
      link: "https://www.albertatomorrow.ca"
    },
    theme: Theme.AB_NATURAL_REGIONS,
    tools: [AssociatedTool.SIMULATOR],
    description:
      "In this scavenger hunt lesson, students will learn about what makes each of Alberta's 6 ecoregions unique—identifying icons for geography, geology, soils, landforms, climate, plants, animals, natural resource use and interesting facts (including species at risk).",
    approximateTime: "120 min",
    files: [
      {
        title: "Alberta's Ecoregions - 360 Virtual Field Trips Lesson Plan",
        description: "",
        link: "/pdfs/lesson-plans/naturalRegions360/AlbertasEcoregions-360VirtualFieldTrips.pdf"
      },
      {
        title: "360 Virtual Tours Scavenger Hunt Student Worksheet",
        description: "",
        link: "/pdfs/lesson-plans/naturalRegions360/360VirtualToursScavengerHuntStudentWorksheet.pdf"
      },
      {
        title: "Scavenger Hunt Sheet",
        description: "",
        link: "/pdfs/lesson-plans/naturalRegions360/360ToursScavengerHuntSheet.pdf"
      },
      {
        title: "360 Virtual Tours Scavenger Hunt - Fillable Google Slides",
        description: "",
        link: "https://docs.google.com/presentation/d/1cqF8G4yz8O23Jg65PTvcoe-juJLizHjjP8vPkZY1H4k/edit?usp=sharing"
      },
      {
        title: "Scavenger Hunt Sheet - Fillable Google Slides",
        description: "",
        link: "https://docs.google.com/presentation/d/1iGXFpDscj18TBWM_f03jUxc7rGtzPWRxn6Yxvrn-Pfs/edit#slide=id.p"
      }
    ],
    grades: [
      Grade.GRADE_3, Grade.GRADE_4, Grade.GRADE_5,
      Grade.GRADE_6, Grade.GRADE_7, Grade.GRADE_8,
      Grade.GRADE_9, Grade.GRADE_10, Grade.GRADE_11,
      Grade.GRADE_12
    ],
    subjects: [
      Subject.SCIENCE,
      Subject.SOCIAL_STUDIES,
      Subject.BIOLOGY,
      Subject.CTS
    ],
    tags: [
      "Animal Life Cycles", "A sense of the land", "Trees and Forests", "Interactions and Ecosystems",
      "Biological Diversity", "Energy and Flow in Global Systems", "Changes in Living Things", "Wildlife",
      "Environmental Stewardship", "Resources", "Forestry", "adaptations", "environment", "prairie", "plants",
      "species at risk", "climate change", "geographic diversity", "ecoregions", "ecozones", "climate",
      "landforms", "shield", "grassland", "foothills", "boreal forest", "rocky mountains", "geology",
      "geography", "animals", "logging", "forestry", "environmental issues", "responsible use", "economy",
      "trees", "aspen", "human impacts", "unintended consequences", "resource use", "ecosystems",
      "environmental impacts", "interactions", "diveristy", "forests", "parkland", "adaptation", "biomes",
      "taiga", "habitat descruction", "reclamation", "forest fires", "soils", "landuse", "wildlifer",
      "forest managment practices", "adaptions", "habitat", "interaction", "structural adaptations",
      "behavioural adaptations", "forest use"
    ],
    learningOutcomes: [
      "students will demonstrate an understanding and appreciation of how geography, climate, soils, geology, plants and animals define a natural ecoregion",
      "Students will identify species and risk in each ecoregion"
    ],
    videos: [
      "oth-03z-intro-360-virtual-field-trips"  // "Introducing Alberta Tomorrow’s 360 Virtual Field Trips"
    ],
    relatedUrls: []
  },
  { // Lesson 2 - Animal Adaptations - Using the 360 Virtual Field Trips
    id: "abRegions-02-animal-adaptations",
    title: "Animal Adpatations - Using the 360 Virtual Field Trips",
    provider: {
      name: "Alberta Tomorrow",
      link: "https://www.albertatomorrow.ca"
    },
    theme: Theme.AB_NATURAL_REGIONS,
    tools: [AssociatedTool.SIMULATOR],
    description:
      "In this lesson students will explore animals in all 6 ecoregions within Alberta and learn about how they are specially adapted to living there.",
    approximateTime: "approximately 2-4 classes",
    files: [
      {
        title: "Grade 3 Science Adaptations and the 360 Virtual Field Trips",
        description: "",
        link: "/pdfs/lesson-plans/naturalRegions360/Grade3ScienceAdaptationsandthe360VirtualFieldTrips.pdf"
      },
      {
        title: "Animal Adaptations Student Worksheet - Fillable Google Slides",
        description: "",
        link: "https://docs.google.com/presentation/d/1BcHISVOfng7MYn0MFUiFrYbpL9XYm8x-lCDFQvLPmEY/edit#slide=id.p"
      }
    ],
    grades: [Grade.GRADE_3],
    subjects: [Subject.SCIENCE],
    tags: [
      "Animal Life Cycles", "adaptations", "environment", "animals", "adaptation"
    ],
    learningOutcomes: [
      "Students will learn how animals are adapted to life in each of the 6 natural regions of Alberta"
    ],
    videos: [
      "oth-03z-intro-360-virtual-field-trips"  // "Introducing Alberta Tomorrow’s 360 Virtual Field Trips"
    ],
    relatedUrls: []
  },
  { // Lesson 3 - Plant and Animal Adaptations - Using the 360 Virtual Field Trips
    id: "abRegions-03-plant-animal-adaptations",
    title: "Plant and Animal Adaptations - Using the 360 Virtual Field Trips",
    provider: {
      name: "Alberta Tomorrow",
      link: "https://www.albertatomorrow.ca"
    },
    theme: Theme.AB_NATURAL_REGIONS,
    tools: [AssociatedTool.SIMULATOR],
    description:
      "In this lesson students will explore the plants and animals in all 6 ecoregions within Alberta, learn how they are specially adapted to living there, what human activities affect their survival and which species are at risk in each ecoregion.",
    approximateTime: "one 60 min period",
    files: [
      {
        title: "Grade 9 Science Adaptations and the 360 Virtual Field Trips",
        description: "",
        link: "/pdfs/lesson-plans/naturalRegions360/Grade9Scienceandthe360VirtualFieldTrips.pdf"
      },
      {
        title: "Grade 9 Plant and Animal Adaptations Student Worksheet - Fillable Google Slides",
        description: "",
        link: "https://docs.google.com/presentation/d/1b_EosZ3fXr638ZeakaiqvjUYDMXGrXiwV7Yw3o04w8E/edit#slide=id.p"
      }
    ],
    grades: [Grade.GRADE_9],
    subjects: [Subject.SCIENCE],
    tags: [
      "Biological Diversity", "Changes in Living Things", "Wildlife", "environment", "animals", "plants",
      "species at risk", "ecoregions", "ecozones", "adaptation", "adaptations", "variation", "biodiversity",
      "structural adaptations", "behavioural adaptations"
    ],
    learningOutcomes: [
      "students will describe how plants and animals are adapted to life in each natural ecoregion of Alberta",
      "Students will identify risks to species survival in each ecoregion",
      "Students will identify species at risk in each region"
    ],
    videos: [
      "oth-03z-intro-360-virtual-field-trips"  // "Introducing Alberta Tomorrow’s 360 Virtual Field Trips"
    ],
    relatedUrls: []
  },
  { //Lesson 4 Alberta Natural Resoucres
    id: "abRegions-04-natural-resources",
    title: "Alberta’s Natural Resources",
    provider: {
      name: "Alberta Tomorrow",
      link: "https://www.albertatomorrow.ca"
    },
    theme: Theme.AB_NATURAL_REGIONS,
    tools: [AssociatedTool.SIMULATOR],
    description:
      "Students will investigate where different natural resources are located in Alberta and how they have influenced settlement, the environment and economy since 1910 to present, and how they may influence the province in the future.",
    approximateTime: "3 x 45 min classes",
    files: [
      {
        title: "Alberta’s Natural Resources",
        description: "",
        link: "https://docs.google.com/document/d/1pMXs-TmZTZcVP5PSmQVUi2jyT9IRvd_bOvSCBw6bSdg/edit?tab=t.0"
      },
      {
        title: "Student Worksheet",
        description: "",
        link: "https://docs.google.com/document/d/11p5vAYKphMkiPaqH_4zJ49AFQKH_WEhSB5yVTxKjAAw/edit?tab=t.0"
      }

    ],
    grades: [Grade.GRADE_3],
    subjects: [Subject.SOCIAL_STUDIES],
    tags: [
      "natural resources", "renewable resources", "non-renewable resources", "economic development",
      "settlement", "geography", "land use", "resource use", "energy", "agriculture", "oil and gas",
      "forestry", "gdp", "population growth", "simulator", "environment", "climate change"
    ],
    learningOutcomes: [
      "Understand the difference between renewable and non-renewable resources",
      "Explore how Alberta's geography affects the location and availability of natural resources",
      "Analyze how natural resources have shaped Alberta's economic development and settlement patterns",
      "Use satellite imagery and simulations to observe environmental and socio-economic changes over time",
      "Predict and propose sustainable land use strategies for Alberta's future"
    ],
    videos: [
      "soc-02d-gdp",
      "soc-03d-hydrocarbon-production",
      "soc-04d-timber-production",
      "soc-05d-agriculture-production",
      "landscape-02b-management-practices"
    ],
    relatedUrls: []
  },
  {// Lesson 5 - Alberta's Natural Regions
    id: "abRegions-05-alberta-natural-regions",
    title: "Alberta’s Natural Regions",
    provider: {
      name: "Alberta Tomorrow",
      link: "https://www.albertatomorrow.ca"
    },
    theme: Theme.AB_NATURAL_REGIONS,
    tools: [AssociatedTool.SIMULATOR],
    description:
      "In this activity, students will research and construct maps of Alberta’s Natural Regions.",
    approximateTime: "3 x 45 min classes",
    files: [
      {
        title: "Alberta’s Natural Regions",
        link: "https://docs.google.com/document/d/1FPPfuy7iwOp9QC0pyLNjI1ujvS1EW0JU3YV4qZO9MeE/edit?tab=t.0"
      }
    ],
    grades: [Grade.GRADE_4],
    subjects: [Subject.SOCIAL_STUDIES],
    tags: [
      "Natural Regions", "landforms", "vegetation", "bodies of water", "climate",
      "natural resources", "geography", "mapping", "virtual tours", "ecozones",
      "environment", "Alberta landscapes", "regional diversity"
    ],
    learningOutcomes: [
      "Distinguish between Alberta’s natural regions based on physical geography",
      "Describe key natural features such as landforms, vegetation, and climate",
      "Identify the relationship between natural resources and regional geography",
      "Construct and annotate maps showing Alberta’s physical regions"
    ],
    videos: [
      "env-01c-natural-landscapes",
      "poi-03j-athabasca-sand-dunes-ecological-reserve"
    ],
    relatedUrls: []
  },
  { // Lesson - Alberta's Ecosystem Diversity
    id: "abRegions-06-ecosystem-diversity",
    title: "Alberta's Ecosystem Diversity",
    provider: {
      name: "Alberta Tomorrow",
      link: "https://www.albertatomorrow.ca"
    },
    theme: Theme.AB_NATURAL_REGIONS,
    tools: [AssociatedTool.SIMULATOR],
    description:
      "In this activity, students explore Alberta’s ecosystems using 360 Virtual Tours to identify and compare abiotic and biotic components. They will analyze how ecosystem characteristics influence plant and animal diversity.",
    approximateTime: "2–3 x 45 min classes",
    files: [
      {
        title: "Alberta's Ecosystem Diversity ",
        description: "",
        link: "https://docs.google.com/document/d/1zFJMnLFr8H2mBVgnX_52c2l6XonAQ32PC6FH_O_VT90/edit?tab=t.0" 
      }
    ],
    grades: [Grade.GRADE_6],
    subjects: [Subject.SCIENCE],
    tags: [
      "Ecosystems", "Biodiversity", "Abiotic and Biotic Factors", "Alberta", "Virtual Tours",
      "Grasslands", "Wetlands", "Forests", "Climate Change", "Carbon Sink", "Ecosystem Comparison"
    ],
    learningOutcomes: [
      "Compare the characteristics of two Alberta ecosystems.",
      "Describe the role of abiotic and biotic factors in ecosystems.",
      "Identify factors that influence plant and animal diversity.",
      "Understand how ecosystems interact with greenhouse gases and carbon storage."
    ],
    videos: [
      "env-01c-natural-landscapes",
      "env-02c-caribou-habitat",
      "env-06c-greenhouse-gasses",
      "landscape-01b-climate-change"
    ],
    relatedUrls: []
  }

];

