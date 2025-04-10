import { tutorialVideos } from "./videoCategories/a-tutorialVideos";
import { understandingTheLandscapeVideos } from "./videoCategories/b-understandingTheLandscapeVideos";
import { environmentalIndicatorsVideos } from "./videoCategories/c-environmentalIndicatorsVideos";
import { socioEconomicIndicatorsVideos } from "./videoCategories/d-socio-economicIndicatorsVideos";
import { indigenousIndicatorsVideos } from "./videoCategories/e-indigenousIndicatorsVideos";
import { bowRiverWatershed360VideoSeries } from "./videoCategories/f-bowRiverWatershed360VideoSeries";
import { stoneyVoicesVideos } from "./videoCategories/h-stoneyVoicesVideos";
import { stoneyVoicesAdditionalVideos } from "./videoCategories/h2-stoneyVoicesAdditionalVideos";
import { blackfootVoicesVideos } from "./videoCategories/i-blackfootVoicesVideos";
import { pointsOfInterestVideos } from "./videoCategories/j-pointsOfInterest";

// ======= Aggregated Videos =======

export const allVideos = [
  // ...tutorialVideos,
  // ...understandingTheLandscapeVideos,
  // ...environmentalIndicatorsVideos,
  // ...socioEconomicIndicatorsVideos,
  // ...indigenousIndicatorsVideos,

  ...bowRiverWatershed360VideoSeries,

  // ...stoneyVoicesVideos,
  // ...stoneyVoicesAdditionalVideos,

  // ...blackfootVoicesVideos,
  // ...pointsOfInterestVideos
];