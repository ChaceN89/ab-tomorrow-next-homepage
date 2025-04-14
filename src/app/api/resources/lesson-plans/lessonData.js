/**
 * @file lessonData.js
 * @module Data/lesson-plans/lessonData
 * @desc Contains lesson plan data for the Alberta Tomorrow application. 
 *
 * @author Chace Nielson
 * @created Apr 10, 2025
 * @updated Apr 10, 2025
 */


// 33 teacher resources
/**
 * 
 * sorting
 * - grade
 * - subject
 * 
 * - themes
 * - hastags = ["words1", "words2", "words3"]
 * 
 * Associated videos 
 * id list
 * 
 */

import { ClimateLessons } from "./lessonThemes/a-climateChangeLessons";
import { GlaciersAndWatershedsLessons } from "./lessonThemes/b-glaciersAndWatershedsLessons";
import { LandUseLessons } from "./lessonThemes/c-landUseLessons";
import { IndigenousVoicesLessons } from "./lessonThemes/d-indigenousVoicesLessons";
import { BowRiverWatershedLessons } from "./lessonThemes/e-bowRiverWatershedLessons";
import { NaturalRegions360Lessons } from "./lessonThemes/f-naturalRegions360Lessons";

// ======= Aggregated lessons =======
export const allLessons = [
  ...GlaciersAndWatershedsLessons, // 5 lesssons
  ...NaturalRegions360Lessons, // 3 lessons
  ...ClimateLessons, // 3 lessons
  ...IndigenousVoicesLessons, // 2 lessons
  ...LandUseLessons, // 9 lessons
  ...BowRiverWatershedLessons // 11 lessons

  // 33 lessons total
];