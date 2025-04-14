/**
 * Filename: NaturalRegions360Lessons.js
 * Author: Chace Nielson
 * Created: Apr 13, 2025
 * Updated: Apr 13, 2025
 * Description: Lesson plans for 360 Virtual Field Trips to Alberta's Natural Regions.
 * Dependencies: lessonPlanEnums, videoEnums
 */

import { Theme, Grade, Subject, AssociatedTool } from "../lessonPlanEnums";

export const NaturalRegions360Lessons = [
  {
    // Lesson 1 - 360 Virtual Field Trips to Alberta's 6 Ecoregions
    id: "ab360-tours-01-virtual-field-trips-ecoregions",
    title: "360 Virtual Field Trips to Alberta's 6 Ecoregions",
    provider: {
      name: "Alberta Tomorrow",
      link: "https://www.albertatomorrow.ca"
    },
    theme: Theme.AB_NATURAL_REGIONS_360_TOURS,
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
  {
    // Lesson 2 - Animal Adaptations - Using the 360 Virtual Field Trips
    id: "ab360-tours-02-animal-adaptations",
    title: "Animal Adpatations - Using the 360 Virtual Field Trips",
    provider: {
      name: "Alberta Tomorrow",
      link: "https://www.albertatomorrow.ca"
    },
    theme: Theme.AB_NATURAL_REGIONS_360_TOURS,
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
  {
    // Lesson 3 - Plant and Animal Adaptations - Using the 360 Virtual Field Trips
    id: "ab360-tours-03-plant-animal-adaptations",
    title: "Plant and Animal Adaptations - Using the 360 Virtual Field Trips",
    provider: {
      name: "Alberta Tomorrow",
      link: "https://www.albertatomorrow.ca"
    },
    theme: Theme.AB_NATURAL_REGIONS_360_TOURS,
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
  }
];

