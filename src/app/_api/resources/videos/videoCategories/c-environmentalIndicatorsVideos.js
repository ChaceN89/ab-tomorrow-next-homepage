/**
 * @file c-environmentalIndicatorsVideos.js
 * @module Data/Video/EnvironmentalIndicators
 * @desc Contains video data for the Environmental Indicators category in Alberta Tomorrow.
 * 
 * @author Chace Nielson
 * @created Apr 9, 2025
 * @updated Apr 10, 2025
 */

import { VideoCategory, AssociatedTool } from "../videosEnums";

export const environmentalIndicatorsVideos = [
  { // video 1 - Natural Landscapes
    id: "env-01c-natural-landscapes",
    title: "Natural Landscapes",
    description: 
      "Prior to Alberta's European Settlement, 100% of the landscape was considered natural. Learn more about Alberta's natural landscapes and how best practices can reduce the footprint of development.",
    category: VideoCategory.ENVIRONMENTAL_INDICATORS,
    tools: [AssociatedTool.SIMULATOR],
    lessonPlans: [],
    media: {
      url: "https://www.youtube.com/watch?v=Lx94jZ9ZSBY",
      thumbUrl: "https://d2qcvmovr4fv.cloudfront.net/7d120260-62f4-48f9-8d72-63fb519fd9a7/thumbnails/Natural Landscapes v3_H264_tumb.0000064.jpg",
      is360: false
    },
    hashtags: ["landuse", "abnaturallandscapes", "abecoregions"]
  },
  { // video 2 - Caribou Habitat
    id: "env-02c-caribou-habitat",
    title: "Caribou Habitat",
    description: 
      "Explore how caribou habitat is impacted by human development and how best practices can reduce disturbances in their environment.",
    category: VideoCategory.ENVIRONMENTAL_INDICATORS,
    tools: [AssociatedTool.SIMULATOR, AssociatedTool.WILDLIFE_TOMORROW],
    lessonPlans: [],
    media: {
      url: "https://www.youtube.com/watch?v=xiBz_Vov6H0",
      thumbUrl: "https://d2qcvmovr4fv.cloudfront.net/6d77c369-dc90-454f-a833-ace354a38e40/thumbnails/Caribou Habitat v4_H264_tumb.0000035.jpg",
      is360: false
    },
    hashtags: ["caribouhabitat", "abcaribou", "woodlandcaribou", "threatenedspecies", "landuse", "abwildlife"]
  },
  { // video 3 - Grizzly Habitat
    id: "env-03c-grizzly-habitat",
    title: "Grizzly Habitat",
    description: 
      "Learn how forest development and human activity affect the suitability of grizzly bear habitat across Alberta.",
    category: VideoCategory.ENVIRONMENTAL_INDICATORS,
    tools: [AssociatedTool.SIMULATOR, AssociatedTool.WILDLIFE_TOMORROW],
    lessonPlans: [],
    media: {
      url: "https://www.youtube.com/watch?v=4wxOOhpNRhs",
      thumbUrl: "https://d2qcvmovr4fv.cloudfront.net/4aec75a3-5a3a-44fa-8350-8f8dfda26f0c/thumbnails/Grizzly Bear habitat v1_tumb.0000021.jpg",
      is360: false
    },
    hashtags: ["grizzlybearhabitat", "abwildlife", "abgrizzlies", "landuse", "threatenedspecies"]
  },
  { // video 4 - Fish Habitat
    id: "env-04c-fish-habitat",
    title: "Fish Habitat",
    description: 
      "Discover how land use affects fish community health, from native trout populations to the impacts of angling and habitat disturbance.",
    category: VideoCategory.ENVIRONMENTAL_INDICATORS,
    tools: [AssociatedTool.SIMULATOR, AssociatedTool.WILDLIFE_TOMORROW],
    lessonPlans: [],
    media: {
      url: "https://www.youtube.com/watch?v=oti7o8JS62Q",
      thumbUrl: "https://d2qcvmovr4fv.cloudfront.net/28da03d6-aee2-4c23-be8f-bee1d50d7a4a/thumbnails/Fish Habitat v2_H264_tumb.0000030.jpg",
      is360: false
    },
    hashtags: ["abfish", "fishhabitat", "abwater", "abtrout", "nativetrout"]
  },
  { // video 5 - Water Quality
    id: "env-05c-water-quality",
    title: "Water Quality",
    description: 
      "Explore how phosphorus runoff from agriculture and settlement impacts aquatic ecosystems and how best practices can improve water quality.",
    category: VideoCategory.ENVIRONMENTAL_INDICATORS,
    tools: [AssociatedTool.SIMULATOR],
    lessonPlans: [],
    media: {
      url: "https://www.youtube.com/watch?v=qsaeCqrJ64o",
      thumbUrl: "https://d2qcvmovr4fv.cloudfront.net/71ac9e8a-e577-4765-9783-71eaee4c08dd/thumbnails/Water Quality v2_H264_tumb.0000063.jpg",
      is360: false
    },
    hashtags: ["abwater", "waterquality", "eutrophication", "landuse"]
  },
  { // video 6 - Greenhouse Gasses
    id: "env-06c-greenhouse-gasses",
    title: "Greenhouse Gasses",
    description: 
      "Understand how greenhouse gas emissions are linked to population and resource production, and how best practices can cut emissions.",
    category: VideoCategory.ENVIRONMENTAL_INDICATORS,
    tools: [AssociatedTool.SIMULATOR, AssociatedTool.ENERGY_TOMORROW],
    lessonPlans: [],
    media: {
      url: "https://www.youtube.com/watch?v=m7G3mSq2aD0",
      thumbUrl: "https://d2qcvmovr4fv.cloudfront.net/be03a00b-b27d-4afe-be64-332ec61b92c5/thumbnails/Greenhouse Gases v2_H264_tumb.0000039.jpg",
      is360: false
    },
    hashtags: [
      "abclimatechange", "climatechange", "bioticcarbonstorage", "landuse",
      "photosynthesis", "carbonsinks", "carbonsources", "greenhousegases", "greenhouseeffect"
    ]
  }
];
