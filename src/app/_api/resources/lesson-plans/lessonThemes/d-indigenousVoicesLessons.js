/**
 * @file IndigenousVoicesLessons.js
 * @module Data/LessonPlans/IndigenousVoices
 * @desc Lesson plans organized under the "Indigenous Voices" theme for Alberta Tomorrow.
 *
 * @see {@link ../lessonPlanEnums.js | Lesson Plan Enums}
 *
 * @lessons
 * - Where is my Home? Using the Indigenous Map Overlays
 * - Exploring Collective Rights Using the Indigenous Voices Module
 * - Mapping Indigenous Areas
 *
 * @author Chace Nielson
 * @created Apr 14, 2025
 * @updated July 14, 2025
 */
import {Theme, Grade, Subject, AssociatedTool} from "../lessonPlanEnums";

export const IndigenousVoicesLessons = [
  { // Lesson 1 - Where is my Home? Using the Indigenous Map Overlays
    id: "indigenous-01e-where-is-my-home",
    title: "Where is my Home? Using the Indigenous Map Overlays",
    provider: { name: "Alberta Tomorrow", link: "https://www.albertatomorrow.ca" },
    theme: Theme.INDIGENOUS_VOICES,
    tools: [AssociatedTool.SIMULATOR],
    description: "A step-by-step lesson plan to using the Indigenous Map Overlays.",
    approximateTime: "60 min",
    files: [
      {
        title: "Where is my Home? Using the Indigenous Map Layers",
        link: "/pdfs/lesson-plans/indigenousVoices/WhereIsMyHomeUsingTheIndigenousMapLayers.pdf"
      }
    ],
    grades: [
      Grade.GRADE_4, Grade.GRADE_5, Grade.GRADE_6, Grade.GRADE_7,
      Grade.GRADE_8, Grade.GRADE_9, Grade.GRADE_10, Grade.GRADE_11, Grade.GRADE_12
    ],
    subjects: [
      Subject.SOCIAL_STUDIES, Subject.SCIENCE
    ],
    tags: [
      "Residential Schools", "Traditional Territories", "Treatie Areas", "Indigenous",
      "Traditional Languages", "Reserves", "Metis Regions"
    ],
    learningOutcomes: [
      "Students will locate their home, school and community on the satellite imagery using the Indigenous map layers, see their location in relation to treaty area, indigenous territory, traditional languages, reserves and settlements, metis regions, residential school locations",
      "compare sizes of indigenous territories to reserves and settlements"
    ],
    videos: [],
    relatedUrls: []
  },
  { // Lesson 2 - Exploring Collective Rights Using the Indigenous Voices Module
    id: "indigenous-02e-exploring-collective-rights",
    title: "Exploring Collective Rights Using the Indigenous Voices Module in Alberta Tomorrow",
    provider: { name: "Alberta Tomorrow", link: "https://www.albertatomorrow.ca" },
    theme: Theme.INDIGENOUS_VOICES,
    tools: [AssociatedTool.SIMULATOR],
    description: "A lesson plan where students learn about Indigenous Rights and Treaty 7, and explore the geography of Indigenous peoples in Alberta through the Alberta Tomorrow Indigenous Voices Module.",
    approximateTime: "180 min",
    files: [
      {
        title: "Exploring Collective Rights Document",
        link: "/pdfs/lesson-plans/indigenousVoices/ATSS9IndigenousModuleLessonPlanv6.pdf"
      }
    ],
    grades: [Grade.GRADE_9],
    subjects: [Subject.SOCIAL_STUDIES, Subject.INDIGENOUS_STUDIES],
    tags: [
      "Collective Rights", "Treaty 7", "Indigenous Rights", "Canadian Charter of Rights and Freedoms",
      "Stoney Nakoda", "Residential Schools", "Traditional Territories"
    ],
    learningOutcomes: [
      "Students will explore the geography of Indigenous peoples in Alberta and learn about the relationship between the Canadian Charter of Rights and Freedoms and Indigenous Rights.",
      "Students will critically assess how collective rights have impacted Indigenous communities and whether treaty rights are being honored."
    ],
    videos: [],
    relatedUrls: []
  },
  { // lesson 3 - Mapping Indigenous Areas
    id: "ab360-tours-05-mapping-indigenous-areas",
    title: "Mapping Indigenous Areas",
    provider: {
      name: "Alberta Tomorrow",
      link: "https://www.albertatomorrow.ca"
    },
    theme: Theme.INDIGENOUS_VOICES,
    tools: [AssociatedTool.SIMULATOR],
    description:
      "Students will construct maps of traditional territories and treaty areas in Alberta using www.albertatomorrow.ca They will begin by looking at the Stoney Nakoda people in greater detail.",
    approximateTime: "5 x 45 min classes",
    files: [
      {
        title: "Mapping Indigenous Areas",
        description: "",
        link: "https://docs.google.com/document/d/1Uyrqu1VyKnJFc7Y_6tZbWeXvMeHkU0zTfktRYppQlYA/edit?tab=t.0g"
      }
    ],
    grades: [Grade.GRADE_3],
    subjects: [Subject.SOCIAL_STUDIES],
    tags: [
      "First Nations", "Métis", "Indigenous Territories", "Treaties", "Treaty 6", "Treaty 7", "Treaty 8",
      "traditional lands", "mapping", "treaty education", "land acknowledgment", "Métis Settlements",
      "Indigenous culture", "reconciliation", "Stoney Nakoda", "Indigenous voices", "geography",
      "Alberta history", "Indigenous identity"
    ],
    learningOutcomes: [
      "Recognize Alberta as traditional territory of many Indigenous groups since time immemorial",
      "Identify the 5 numbered Treaty Areas in Alberta and the reasons they were signed",
      "Differentiate Traditional Territories, Treaty Areas, and Métis Settlements on a map",
      "Use Alberta Tomorrow map layers to explore overlap between Indigenous territories",
      "Develop respect for Indigenous contributions to Alberta's identity and land use history"
    ],
    videos: [
      "stoney-06h-creator-story",
      "stoney-08h-before-treaty",
      "stoney-014h-concept-of-time",
      "stoney-013h-food-and-camp"
    ],
    relatedUrls: [
      {
        title: "Native Land",
        link: "https://native-land.ca/"
      },
      {
        title: "Métis Nation of Alberta",
        link: "https://albertametis.com/"
      },
      {
        title: "National Centre for Truth and Reconciliation",
        link: "https://nctr.ca/"
      }
    ]
  }
  
]