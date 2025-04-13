/**
 * @file otherVideos.js
 * @module Data/Video/OtherVideos
 * @desc Contains video data for the Other Videos category in Alberta Tomorrow.
 * 
 * @author Chace Nielson
 * @created Apr 12, 2025
 * @updated Apr 12, 2025
 */

import { VideoCategory, AssociatedTool } from "../videosEnums";

export const otherVideos = [
  { // video 1 - Oxygen Isotopes and the Paleoclimate Record
    id: "oth-01z-oxygen-isotopes",
    title: "Oxygen Isotopes and the Paleoclimate Record",
    description:
      "A brief explanation of oxygen isotopes, and how the oxygen isotope signal can be used to study past climates.",
    lessonPlans: [], 
    category: VideoCategory.OTHER,
    tools: [AssociatedTool.SIMULATOR],
    media: {
      url: "https://www.youtube.com/watch?v=YfRDNyB1XOY",
      thumbUrl: "https://d2qcvmovr4fv.cloudfront.net/youtube/thumbnails/oxygenisotopes.jpg",
      is360: true,
    },
    observedTime: 1607104608043, 
    hashtags: [
      "oxygen-isotopes", "paleoclimate", "climate-change", "climate-science", "isotope-geochemistry", "land-stewardship", "Paleoclimate"
    ]  
  },
  { // video 2
    id: "oth-02z-hydrolysis-and-the-faint-young-sun-paradox",
    title: "Hydrolysis and the Faint Young Sun Paradox",
    description:
      "The chemical weathering of continental rocks (hydrolysis) removes CO2 from the atmosphere over geologic time. Could this explain why the Earth was not frozen in its early history when the sun was very faint?",
    lessonPlans: [], 
    category: VideoCategory.OTHER,
    tools: [AssociatedTool.SIMULATOR],
    media: {
      url: "https://www.youtube.com/watch?v=rEeixDNVjeE",
      thumbUrl: "https://d2qcvmovr4fv.cloudfront.net/youtube/thumbnails/oxygenisotopes.jpg",
      is360: true,
    },
    observedTime: 1607104608043, 
    hashtags: [
      "hydrolysis", "faint-young-sun-paradox", "climate-change", "climate-science", "isotope-geochemistry", "land-stewardship", "Paleoclimate"
    ]  
  },
];
