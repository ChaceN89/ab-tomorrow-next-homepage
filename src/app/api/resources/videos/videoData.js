/**
 * @file videoData.js
 * @module Data/Resource/Videos
 * @desc Provides structured video resource data used in the Resources page, including video tutorials
 *       and educational content. Each video is tagged with related tools for filtering.
 *
 * @tools Enum:
 * - Simulator
 * - Energy Tomorrow
 * - Wildlife Tomorrow
 *
 * @author Chace Nielson
 * @created Apr 1, 2025
 * @updated Apr 1, 2025
 */

// ===== Enum for Tools =====
export const VideoTools = Object.freeze({
  SIMULATOR: "Simulator",
  ENERGY: "Energy Tomorrow",
  WILDLIFE: "Wildlife Tomorrow",
});

// ===== Video Data =====
export const videoData = [
  {
    category: "Tutorials",
    videos: [
      {
        title: "User Tutorial: Registering for an Account",
        description: "How to register for a Public, Teacher or Student Account.",
        media: {
          type: "video",
          url: "https://www.youtube.com/watch?v=5Qi8v-Y3iXM",
          thumbUrl: "https://d2qcvmovr4fv.cloudfront.net/youtube/thumbnails/tutorialRegisterAccount.jpg",
          shareUrl: "https://youtu.be/5Qi8v-Y3iXM",
        },
        hashtags: "",
        tools: [VideoTools.SIMULATOR],
      },
      {
        title: "User Tutorial: An overview of the AT simulator and features",
        description: "See the different features of the Alberta Tomorrow Simulator.",
        media: {
          type: "video",
          url: "https://www.youtube.com/watch?v=nnm0V6jmpbM",
          thumbUrl: "https://d2qcvmovr4fv.cloudfront.net/youtube/thumbnails/tutorialOverview.jpg",
          shareUrl: "https://youtu.be/nnm0V6jmpbM",
        },
        hashtags: "",
        tools: [VideoTools.SIMULATOR],
      },
      {
        title: "User Tutorial: Your Mission",
        description: "Overview of your mission in Alberta Tomorrow.",
        media: {
          type: "video",
          url: "https://www.youtube.com/watch?v=yNljbKNBI1M",
          thumbUrl: "https://d2qcvmovr4fv.cloudfront.net/youtube/thumbnails/tutorialMission.jpg",
          shareUrl: "https://youtu.be/yNljbKNBI1M",
        },
        hashtags: "",
        tools: [VideoTools.SIMULATOR],
      },
      {
        title: "User Tutorial: Running a Historical Simulation",
        description: "Find out how your study area has changed since 1910.",
        media: {
          type: "video",
          url: "https://www.youtube.com/watch?v=qMXZYBHCD_E",
          thumbUrl: "https://d2qcvmovr4fv.cloudfront.net/youtube/thumbnails/tutorialHistoric.jpg",
          shareUrl: "https://youtu.be/qMXZYBHCD_E",
        },
        hashtags: "",
        tools: [VideoTools.SIMULATOR],
      },
      {
        title: "User Tutorial: Create a Business as Usual (BAU) Scenario",
        description: "See how to create a BAU scenario based on current trends.",
        media: {
          type: "video",
          url: "https://www.youtube.com/watch?v=gWm7yWBkPHo",
          thumbUrl: "https://d2qcvmovr4fv.cloudfront.net/youtube/thumbnails/tutorialCreateBAU.jpg",
          shareUrl: "https://youtu.be/gWm7yWBkPHo",
        },
        hashtags: "",
        tools: [VideoTools.SIMULATOR],
      },
      {
        title: "User Tutorial: Create Your Own Land Use Scenarios",
        description: "Steps to create a watershed study area and scenario.",
        media: {
          type: "video",
          url: "https://www.youtube.com/watch?v=RQ2Pz6gLIQ0",
          thumbUrl: "https://d2qcvmovr4fv.cloudfront.net/youtube/thumbnails/tutorialLandusePlan.jpg",
          shareUrl: "https://youtu.be/RQ2Pz6gLIQ0",
        },
        hashtags: "",
        tools: [VideoTools.SIMULATOR],
      },
      {
        title: "User Tutorial: Create an Observation",
        description: "Create your own observation in the simulator.",
        media: {
          type: "video",
          url: "https://www.youtube.com/watch?v=fp_WVPCdCnU",
          thumbUrl: "https://d2qcvmovr4fv.cloudfront.net/youtube/thumbnails/tutorialCreateObs.jpg",
          shareUrl: "https://youtu.be/fp_WVPCdCnU",
        },
        hashtags: "",
        tools: [VideoTools.SIMULATOR],
      },
      {
        title: "User Tutorial: Climate Change Scenarios",
        description: "View climate change scenarios in Alberta Tomorrow.",
        media: {
          type: "video",
          url: "https://www.youtube.com/watch?v=yF4SY7VoqDs",
          thumbUrl: "https://d2qcvmovr4fv.cloudfront.net/youtube/thumbnails/tutorialClimate.jpg",
          shareUrl: "https://youtu.be/yF4SY7VoqDs",
        },
        hashtags: "",
        tools: [VideoTools.SIMULATOR],
      },
      {
        title: "User Tutorial: Creating and Sharing a Report",
        description: "How to create and share reports in Alberta Tomorrow.",
        media: {
          type: "video",
          url: "https://www.youtube.com/watch?v=poxco59ASU8",
          thumbUrl: "https://d2qcvmovr4fv.cloudfront.net/youtube/thumbnails/tutorialReports.jpg",
          shareUrl: "https://youtu.be/poxco59ASU8",
        },
        hashtags: "",
        tools: [VideoTools.SIMULATOR],
      },
    ],
  },
  {
    category: "Understanding the Landscape",
    videos: [
      {
        title: "Ecological Goods and Services",
        description: "Introduction to ecological goods and services.",
        media: {
          type: "video",
          url: "https://d2qcvmovr4fv.cloudfront.net/out/v1/d3af3f5027fc4578bb8a5e661fd15662/4ca13953c62041b89da9ee75727d50c9/d421596074b04016aafe5f186ec3ff53/index.m3u8",
          thumbUrl: "https://d2qcvmovr4fv.cloudfront.net/7f76a14f-20e9-430d-bef6-5c08247cad75/thumbnails/Ecological Goods v2_H264_tumb.0000033.jpg",
          shareUrl: "https://youtu.be/WBdpkY9KSgs",
        },
        hashtags: "EGS,landuse,landuseplanning",
        tools: [VideoTools.SIMULATOR],
      },
      {
        title: "Water Quality, Climate Change & Alberta's Glaciers Webinar",
        description: "Discussion with scientists about climate change, glaciers, and water quality.",
        media: {
          type: "video",
          url: "https://www.youtube.com/watch?v=Xgb3_I8nagY",
          thumbUrl: "https://d2qcvmovr4fv.cloudfront.net/youtube/thumbnails/water-climate-change-glaciers-webinar.jpg",
          shareUrl: "https://www.youtube.com/watch?v=Xgb3_I8nagY",
        },
        hashtags: "abglaciers,climatechange,waterquality,abwater,columbiaicefield,athabascaglacier,landuse",
        tools: [VideoTools.SIMULATOR],
      },
    ],
  },
];

export default videoData;
