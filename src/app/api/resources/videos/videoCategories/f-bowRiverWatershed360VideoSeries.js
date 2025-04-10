/**
 * @file f-bowRiverWatershed360VideoSeries.js
 * @module Data/Video/f-bowRiverWatershed360VideoSeries
 * @desc Contains video data for the "Bow River Watershed 360 Video Series" category in Alberta Tomorrow.
 * 
 * @author Chace Nielson
 * @created Apr 9, 2025
 * @updated Apr 9, 2025
 */

import { VideoCategory, AssociatedTool } from "../videosEnums";

export const bowRiverWatershed360VideoSeries = [
  {
    id: "brbc-1f-watershed",
    title: "Hydrology",
    description: 
      "In this video you will learn about the hydrology of the Bow River Watershed, located in Southern Alberta.",
    category: VideoCategory.BOW_RIVER_360,
    tools: [AssociatedTool.SIMULATOR],
    lessonPlans:[ "https://docs.google.com/document/d/1IJGMeGkcj1MlH58Ch4MnEmQOQ92UcrPz"],
    media: {
      url: "https://www.youtube.com/watch?v=_hFqA3agfhk&list=PLvZi8sQT8o8PgFddqYnvhY3EJUJx-N6y3",
      thumbUrl: "https://d2qcvmovr4fv.cloudfront.net/youtube/thumbnails/brbc_11_watershed.png",
      is360: true
    },
    hashtags: ["water", "watershed", "monitoring", "hydrology",]
  },
  {
    id: "brbc-2f-watershed",
    title: "Watershed",
    description: 
      "Visit each sub-basin in the Bow River basin and get a feel for how people use the water and the landscape. Look at the different types of buildings, pathways, and activities that can take place within the watershed as you travel from the headwaters, down to the end in the prairies.",
    category: VideoCategory.BOW_RIVER_360,
    tools: [AssociatedTool.SIMULATOR],
    lessonPlans:[ "https://docs.google.com/document/d/1IJGMeGkcj1MlH58Ch4MnEmQOQ92UcrPz"],
    media: {
      url: "https://www.youtube.com/watch?v=-66yGxMmQxE&list=PLvZi8sQT8o8PgFddqYnvhY3EJUJx-N6y3&index=9",
      thumbUrl: "https://d2qcvmovr4fv.cloudfront.net/youtube/thumbnails/brbc_11_watershed.png",
      is360: true
    },
    hashtags: ["water", "watershed", "monitoring"]
  },
  {
    id: "brbc-3f-hydro-climate",
    title: "Hydrology and Climate Change",
    description: 
      "Tricia Stadnyk talks about how a watershed can affect the climate it is in, and in turn, how the climate then affects the landscape. Go from the headwaters through to the prairies as she talks about precipitation and more.",
    category: VideoCategory.BOW_RIVER_360,
    tools: [AssociatedTool.SIMULATOR],
    lessonPlans: ["https://docs.google.com/document/d/1RgpNqFu8Muak1gNkwCZbaxPoFc6qzXM4"],
    media: {
      url: "https://www.youtube.com/watch?v=6B31usY3S6E&list=PLvZi8sQT8o8PgFddqYnvhY3EJUJx-N6y3&index=2",
      thumbUrl: "https://d2qcvmovr4fv.cloudfront.net/youtube/thumbnails/brbc_10_hydrology_and_climate_change.png",
      is360: true
    },
    hashtags: ["water", "watershed", "monitoring"]
  },
  {
    id: "brbc-4f-mgmt-data",
    title: "Watershed Management and Data",
    description: 
      "Dr. Lee Jackson talks about the Sustainable Watershed Integrated Management Platform and the necessity of shared water data for the health of the Bow River Basin. Explore from the headwaters into the prairies and learn about citizen science projects, and different data parameters.",
    category: VideoCategory.BOW_RIVER_360,
    tools: [AssociatedTool.SIMULATOR],
    lessonPlans: [],
    media: {
      url: "https://www.youtube.com/watch?v=1sIN7zr8xoo&list=PLvZi8sQT8o8PgFddqYnvhY3EJUJx-N6y3&index=5",
      thumbUrl: "https://d2qcvmovr4fv.cloudfront.net/youtube/thumbnails/brbc_9_watershed_management_and_data.png",
      is360: true
    },
    hashtags: ["water", "watershed", "monitoring"]
  },
  {
    id: "brbc-5f-watersheds-hydro",
    title: "Watersheds and Hydrology",
    description: 
      "Go from the mountains through the river basin while learning what a watershed is, and how hydrology is apparent in the landscape. Tricia Stadnyk will explain how hydrology can affect everything around it as you explore.",
    category: VideoCategory.BOW_RIVER_360,
    tools: [AssociatedTool.SIMULATOR],
    lessonPlans: ["https://docs.google.com/document/d/1pluUXun-r0TxsYWRj8b5X__UlWWcJMcW"],
    media: {
      url: "https://youtu.be/sAfLAXFTYxY",
      thumbUrl: "https://d2qcvmovr4fv.cloudfront.net/youtube/thumbnails/brbc_4_watersheds_and_hydrology.png",
      is360: true
    },
    hashtags: ["water", "watershed", "monitoring"]
  },
  {
    id: "brbc-6f-hydro-dev",
    title: "Hydrology and Land Development",
    description: 
      "Explore the watershed while Tricia Stadnyk explains how landscapes and water are affected by development and use changes. How does hydrology within the watershed change when the landscape changes because of humans?",
    category: VideoCategory.BOW_RIVER_360,
    tools: [AssociatedTool.SIMULATOR],
    lessonPlans: ["https://docs.google.com/document/d/1d4mr6hIi_J3jNzJVj77lyBNeCW_jGhWq"],
    media: {
      url: "https://youtu.be/XaO0ksMNn-s",
      thumbUrl: "https://d2qcvmovr4fv.cloudfront.net/youtube/thumbnails/brbc_8_hydrology_and_land_development.png",
      is360: true
    },
    hashtags: ["water", "watershed", "monitoring"]
  },
  {
    id: "brbc-7f-erwp-aquifers",
    title: "Elbow River Watershed Partnership (ERWP) Aquifers",
    description: 
      "Explore the Elbow River watershed and learn about its groundwater, and state of the aquifer with Joe and Flora. Learn the definitions for what an aquifer is, how groundwater is used in the sub-basin, and how it is affected by people.",
    category: VideoCategory.BOW_RIVER_360,
    tools: [AssociatedTool.SIMULATOR],
    lessonPlans: ["https://docs.google.com/document/d/1GBnAfLDry3L8DEJTw1hqczlE5lSD0r5O"],
    media: {
      url: "https://youtu.be/YZCb7n9DlUo",
      thumbUrl: "https://d2qcvmovr4fv.cloudfront.net/youtube/thumbnails/brbc_2_elbow_river_watershed_partnership_aquifers.png",
      is360: true
    },
    hashtags: ["water", "watershed", "monitoring"]
  },
  {
    id: "brbc-8f-water-quality",
    title: "Water Quality",
    description: 
      "Join Patrick Van den Eynden as he talks about the City of Calgary’s Glenmore Water Treatment Plant’s process from getting the water from the reservoir, all the way to disinfection and sending the water out to service sites across the city.",
    category: VideoCategory.BOW_RIVER_360,
    tools: [AssociatedTool.SIMULATOR],
    lessonPlans: ["https://docs.google.com/document/d/1unCOQUIHRLS5YZJ3J5ekBFurcbr9zaL7"],
    media: {
      url: "https://youtu.be/VqGRdLGLdlY",
      thumbUrl: "https://d2qcvmovr4fv.cloudfront.net/youtube/thumbnails/brbc_7_water_quality.png",
      is360: true
    },
    hashtags: ["water", "watershed", "monitoring"]
  },
  {
    id: "brbc-9f-hydro-land",
    title: "Hydrology and Land Development",
    description: 
      "Explore the watershed while Tricia Stadnyk explains how landscapes and water are affected by development and use changes. How does hydrology within the watershed change when the landscape changes because of humans?",
    category: VideoCategory.BOW_RIVER_360,
    tools: [AssociatedTool.SIMULATOR],
    lessonPlans: ["https://docs.google.com/document/d/1d4mr6hIi_J3jNzJVj77lyBNeCW_jGhWq"],
    media: {
      url: "https://youtu.be/Aa-JHTvnczc",
      thumbUrl: "https://d2qcvmovr4fv.cloudfront.net/youtube/thumbnails/brbc_8_hydrology_and_land_development.png",
      is360: true
    },
    hashtags: ["water", "hydrology", "development"]
  },
  {
    id: "brbc-10f-management-data",
    title: "Watershed Management and Data",
    description: 
      "Dr. Lee Jackson talks about the Sustainable Watershed Integrated Management Platform and the necessity of shared water data for the health of the Bow River Basin. Explore from the headwaters into the prairies and learn about citizen science projects, and different data parameters.",
    category: VideoCategory.BOW_RIVER_360,
    tools: [AssociatedTool.SIMULATOR],
    lessonPlans: [],
    media: {
      url: "https://youtu.be/lElW6Vfml9E",
      thumbUrl: "https://d2qcvmovr4fv.cloudfront.net/youtube/thumbnails/brbc_9_watershed_management_and_data.png",
      is360: true
    },
    hashtags: ["watershed", "management", "data"]
  },
  {
    id: "brbc-11f-hydro-climate",
    title: "Hydrology and Climate Change",
    description: 
      "Tricia Stadnyk talks about how a watershed can affect the climate it is in, and in turn, how the climate then affects the landscape. Go from the headwaters through to the prairies as she talks about precipitation and more.",
    category: VideoCategory.BOW_RIVER_360,
    tools: [AssociatedTool.SIMULATOR],
    lessonPlans: ["https://docs.google.com/document/d/1RgpNqFu8Muak1gNkwCZbaxPoFc6qzXM4"],
    media: {
      url: "https://youtu.be/hMZxe1La5hg",
      thumbUrl: "https://d2qcvmovr4fv.cloudfront.net/youtube/thumbnails/brbc_10_hydrology_and_climate_change.png",
      is360: true
    },
    hashtags: ["climate", "watershed", "hydrology"]
  },
  {
    id: "brbc-12f-watershed",
    title: "Watershed 360°",
    description: 
      "Visit each sub-basin in the Bow River basin and get a feel for how people use the water and the landscape. Look at the different types of buildings, pathways, and activities that can take place within the watershed as you travel from the headwaters, down to the end in the prairies.",
    category: VideoCategory.BOW_RIVER_360,
    tools: [AssociatedTool.SIMULATOR],
    lessonPlans: ["https://docs.google.com/document/d/1IJGMeGkcj1MlH58Ch4MnEmQOQ92UcrPz"],
    media: {
      url: "https://youtu.be/9LxzRUMU1RU",
      thumbUrl: "https://d2qcvmovr4fv.cloudfront.net/youtube/thumbnails/brbc_11_watershed.png",
      is360: true
    },
    hashtags: ["watershed", "ecology"]
  },
  {
    id: "brbc-13f-isotopes-climate",
    title: "Isotopes and Climate Change",
    description: 
      "Learn about how isotopes can be used to monitor climate change and hydrologic functions within a watershed.",
    category: VideoCategory.BOW_RIVER_360,
    tools: [AssociatedTool.SIMULATOR],
    lessonPlans: ["https://docs.google.com/document/d/1PcI2jRXdspNZqIkJeppDro2Ub0wXz9bi"],
    media: {
      url: "https://youtu.be/3AyvCdOzuvU",
      thumbUrl: "https://d2qcvmovr4fv.cloudfront.net/youtube/thumbnails/isotopes.png",
      is360: true
    },
    hashtags: ["climate", "isotopes", "hydrology"]
  }

];
