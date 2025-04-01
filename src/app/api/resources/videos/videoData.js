import { blackfootVoicesVideos } from "./videoCategories/i-blackfootVoicesVideos";
import { pointsOfInterestVideos } from "./videoCategories/j-pointsOfInterest";

// ======= Aggregated Videos =======

export const allVideos = [
  ...blackfootVoicesVideos,
  ...pointsOfInterestVideos
];