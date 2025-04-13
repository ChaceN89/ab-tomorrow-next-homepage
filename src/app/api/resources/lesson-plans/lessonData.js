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


import { GlaciersAndWatershedsLessons } from "./lessonThemes/b-glaciersAndWatershedsLessons";

// ======= Aggregated lessons =======
export const allLessons = [
  ...GlaciersAndWatershedsLessons, // 6 les
];