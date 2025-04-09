import { tutorialVideos } from "./videoCategories/a-tutorialVideos";
import { understandingTheLandscapeVideos } from "./videoCategories/b-understandingTheLandscapeVideos";
import { environmentalIndicatorsVideos } from "./videoCategories/c-environmentalIndicatorsVideos";
import { socioEconomicIndicatorsVideos } from "./videoCategories/d-socio-economicIndicatorsVideos";
import { blackfootVoicesVideos } from "./videoCategories/i-blackfootVoicesVideos";
import { pointsOfInterestVideos } from "./videoCategories/j-pointsOfInterest";

// ======= Aggregated Videos =======

export const allVideos = [
  ...tutorialVideos,
  ...understandingTheLandscapeVideos,
  ...environmentalIndicatorsVideos,
  ...socioEconomicIndicatorsVideos,
  ...blackfootVoicesVideos,
  ...pointsOfInterestVideos
];