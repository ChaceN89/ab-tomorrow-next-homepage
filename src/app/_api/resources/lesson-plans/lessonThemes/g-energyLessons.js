/**
 * @file g-energyLessons.js
 * @module Data/LessonPlans/Energy
 * @desc Lesson plans organized under the "Energy" theme for Alberta Tomorrow.
 *
 * @see {@link ../lessonPlanEnums.js | Lesson Plan Enums}
 *
 * @lessons
 * - Renewable vs Non-Renewable Resources
 * - Factors Affecting Energy Use
 *
 * @author Chace Nielson
 * @created Jul 14, 2025
 * @updated Jul 14, 2025
 */

import { Theme, Grade, Subject, AssociatedTool } from "../lessonPlanEnums";

export const EnergyLessons = [
    { // Lesson 1 - Renewable vs Non-Renewable Resources
    id: "energy-01-renewable-vs-nonrenewable",
    title: "Renewable vs Non-Renewable Resources",
    provider: {
      name: "Alberta Tomorrow",
      link: "https://www.albertatomorrow.ca"
    },
    theme: Theme.ENERGY,
    tools: [AssociatedTool.SIMULATOR],
    description:
      "In this activity, students will compare renewable and non-renewable energy resources, exploring how they are used across Canada and how Alberta relies on both to meet its energy needs.",
    approximateTime: "3 x 45 min classes",
    files: [
      {
        title: "Renewable vs Non-Renewable Resources",
        description: "",
        link: "https://docs.google.com/document/d/1QU_kIWDMITb9Zau0XcB3-e3yTgBzn8W9P2qlM1NaDa8/edit?tab=t.0"
      }
    ],
    grades: [Grade.GRADE_5],
    subjects: [Subject.SCIENCE],
    tags: [
      "Energy", "Renewable Resources", "Non-Renewable Resources", "Alberta Energy",
      "Oil and Gas", "Hydropower", "Solar", "Wind", "Sustainability", "Environmental Impact",
      "Geography", "Energy Systems", "Canada Energy Use"
    ],
    learningOutcomes: [
      "Compare renewable and non-renewable energy resources.",
      "Discuss the advantages and disadvantages of different energy sources.",
      "Examine how provinces and territories fulfill energy needs.",
      "Understand Alberta's reliance on both renewable and non-renewable energy resources."
    ],
    videos: [
      "soc-03d-hydrocarbon-production"
    ],
    relatedUrls: []
  },

{ // Lesson 2 - Factors Affecting Energy Use
  id: "energy-02-factors-affecting-use",
  title: "Factors Affecting Energy Use",
  provider: {
    name: "Alberta Tomorrow",
    link: "https://www.albertatomorrow.ca"
  },
  theme: Theme.ENERGY,
  tools: [AssociatedTool.SIMULATOR],
  description:
    "In this lesson, students explore how energy choices are shaped by availability, accessibility, societal needs, economic considerations, and environmental impact. Using Alberta Tomorrow's simulation tools, students investigate past, present, and future scenarios around Alberta's energy use.",
  approximateTime: "3 x 45 min classes",
  files: [
    {
      title: "Factors Affecting Energy Use",
      description: "",
      link: "https://docs.google.com/document/d/1K7qSY79jvMX3pRrYz2F2jw5_vhh-6WGzRGSkDMAx6zY/edit?tab=t.0"
    },
    {
      title: "Student Worksheet",
      description: "",
      link: "https://docs.google.com/document/d/1T3bvL-Gh1cWDfkHCn6PtPiaKzS457F5EHrXWGdnbAe4/edit?tab=t.0"
    }
  ],
  grades: [Grade.GRADE_6],
  subjects: [Subject.SCIENCE],
  tags: [
    "Energy", "Resource Use", "Environmental Impact", "Oil and Gas", "Management Practices",
    "Simulation", "Economic Impact", "Societal Impact", "Sustainability", "Historical Scenarios",
    "Watersheds", "Accessibility", "Availability", "Canada Energy Use", "Alberta Energy"
  ],
  learningOutcomes: [
    "Investigate factors that influence the selection of energy resources.",
    "Explain how Alberta's energy use has changed over time and may change in the future.",
    "Distinguish between societal, economic, and environmental impacts on energy choices.",
    "Use simulations to analyze land use impacts on energy and sustainability."
  ],
  videos: [
    "soc-03d-hydrocarbon-production",
    "env-01c-natural-landscapes"
  ],
  relatedUrls: []
}

];
