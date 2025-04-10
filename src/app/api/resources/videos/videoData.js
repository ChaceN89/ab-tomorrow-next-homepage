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
import { stoneyVoicesAdditionalVideos } from "./videoCategories/h2-stoneyVoicesAdditionalVideos";
import { blackfootVoicesVideos } from "./videoCategories/i-blackfootVoicesVideos";
import { pointsOfInterestVideos } from "./videoCategories/j-pointsOfInterest";

// ======= Aggregated Videos =======
export const allVideos = [
  ...tutorialVideos,
  ...understandingTheLandscapeVideos,
  ...environmentalIndicatorsVideos,
  ...socioEconomicIndicatorsVideos,
  ...indigenousIndicatorsVideos,

  ...bowRiverWatershed360VideoSeries,

  // ...guardiansOfTheIceVideos, // not ready yet

  ...stoneyVoicesVideos,
  ...stoneyVoicesAdditionalVideos,

  ...blackfootVoicesVideos,
  ...pointsOfInterestVideos
];