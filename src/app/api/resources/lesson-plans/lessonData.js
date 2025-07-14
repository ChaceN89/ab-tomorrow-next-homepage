/**
 * @file lessonData.js
 * @module Data/lesson-plans/lessonData
 * @desc Contains lesson plan data for the Alberta Tomorrow application. 
 *
 * @author Chace Nielson
 * @created Apr 10, 2025
 * @updated July 14, 2025
 */


import { ClimateLessons } from "./lessonThemes/a-climateChangeLessons";
import { GlaciersAndWatershedsLessons } from "./lessonThemes/b-glaciersAndWatershedsLessons";
import { LandUseLessons } from "./lessonThemes/c-landUseLessons";
import { IndigenousVoicesLessons } from "./lessonThemes/d-indigenousVoicesLessons";
import { BowRiverWatershedLessons } from "./lessonThemes/e-bowRiverWatershedLessons";
import { AlbertNaturalRegions } from "./lessonThemes/f-albertaNaturalRegions"; // previously named NaturalRegions360Lessons
import { EnergyLessons } from "./lessonThemes/g-energyLessons";

// ======= Aggregated lessons =======
export const allLessons = [
  ...GlaciersAndWatershedsLessons, // 5 lesssons
  ...AlbertNaturalRegions, // 3 lessons
  ...ClimateLessons, // 3 lessons
  ...IndigenousVoicesLessons, // 2 lessons
  ...LandUseLessons, // 9 lessons
  ...BowRiverWatershedLessons, // 11 lessons
  ...EnergyLessons, // 2 lessons


  // 35 lessons total
];