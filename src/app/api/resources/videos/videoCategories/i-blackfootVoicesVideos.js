/**
 * @file blackfootVoicesVideos.js
 * @module Data/Video/BlackfootVoices
 * @desc Contains video data for the Blackfoot Voices category in Alberta Tomorrow.
 * 
 * @author Chace Nielson
 * @created Apr 1, 2025
 * @updated Apr 9, 2025
 */

import { VideoCategory, AssociatedTool } from "../videosEnums";

export const blackfootVoicesVideos = [
  {
    id: "bfv-1db0b7-a-blackfoot-perspective-on-water",
    title: "A Blackfoot Perspective on Water",
    description:
      "A video sharing the Blackfoot perspective on water and its significance in Indigenous culture and the environment.",
    coordinates: [-112.45130318711476, 50.77737948576379],
    subtype: "blackfootvoices",
    category: VideoCategory.BLACKFOOT_VOICES,
    tools: [AssociatedTool.SIMULATOR],
    media: {
      type: "video",
      status: "Complete",
      url: "https://www.youtube.com/watch?v=r-NzlnMgDj4",
      thumbUrl: "https://d2qcvmovr4fv.cloudfront.net/youtube/thumbnails/thumb-a-blackfoot-perspective.jpg",
      shareUrl: "https://youtu.be/r-NzlnMgDj4",
      is360: true,
    },
    observedTime: 1607104608043, // Approx: Dec 4, 2020
    hashtags: [
      "blackfoot", "indigenous-voices", "traditional-ecological-knowledge", "water", "culture", "land-stewardship" 
    ]  
  },
];
