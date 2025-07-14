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
 *
 * @author Chace Nielson
 * @created Apr 14, 2025
 * @updated Apr 14, 2025
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
  }
  

]