/**
 * @file allVideos.js
 * @module Data/Video/allVideos
 * @desc Aggregates all categorized video data into a single unified list for use in the Alberta Tomorrow application.
 *
 * @features
 * - Imports video entries from all individual category files.
 * - Exports a single array `allVideos` combining all sources.
 * - Allows centralized access to all educational video content.
 * - Can be used across components for filtering, display, or searching.
 *
 * @dependencies
 * - Each file in `/videoCategories` (e.g., `a-tutorialVideos`, `b-understandingTheLandscapeVideos`, etc.)
 *
 * @notes
 * - `guardiansOfTheIceVideos` is currently commented out and not included in `allVideos`.
 *
 * @author Chace Nielson
 * @created Apr 10, 2025
 * @updated Apr 10, 2025
 */
import { tutorialVideos } from "./videoCategories/a-tutorialVideos";
import { understandingTheLandscapeVideos } from "./videoCategories/b-understandingTheLandscapeVideos";
import { environmentalIndicatorsVideos } from "./videoCategories/c-environmentalIndicatorsVideos";
import { socioEconomicIndicatorsVideos } from "./videoCategories/d-socio-economicIndicatorsVideos";
import { indigenousIndicatorsVideos } from "./videoCategories/e-indigenousIndicatorsVideos";
import { bowRiverWatershed360VideoSeries } from "./videoCategories/f-bowRiverWatershed360VideoSeries";
import { guardiansOfTheIceVideos } from "./videoCategories/g-guardiansOfTheIceVideoSeries";
import { stoneyVoicesVideos } from "./videoCategories/h-stoneyVoicesVideos";
import { blackfootVoicesVideos } from "./videoCategories/i-blackfootVoicesVideos";
import { pointsOfInterestVideos } from "./videoCategories/j-pointsOfInterest";
import { otherVideos } from "./videoCategories/z-otherVideos";

// ======= Aggregated Videos =======
export const allVideos = [
  ...tutorialVideos, // 9 videos
  ...understandingTheLandscapeVideos, // 4 videos

  // indcators videos
  ...environmentalIndicatorsVideos, // 6 videos
  ...socioEconomicIndicatorsVideos, // 6 videos
  ...indigenousIndicatorsVideos, // 6 videos

  ...bowRiverWatershed360VideoSeries, //12 videos

  ...guardiansOfTheIceVideos, // 44 videos
 
  // Indigenous Voices
  ...stoneyVoicesVideos, // 28 videos
  ...blackfootVoicesVideos, // 1 video

  ...pointsOfInterestVideos, // 9 videos

  ...otherVideos, // 2 videos

  // 127 videos total
];