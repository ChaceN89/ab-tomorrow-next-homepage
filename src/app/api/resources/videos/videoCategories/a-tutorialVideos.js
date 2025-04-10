/**
 * @file tutorialVideos.js
 * @module Data/Video/tutorialVideos
 * @desc Contains video data for the Tutorials category in Alberta Tomorrow.
 * 
 * @author Chace Nielson
 * @created Apr 9, 2025
 * @updated Apr 10, 2025
 */

import { VideoCategory, AssociatedTool } from "../videosEnums";

export const tutorialVideos = [
  {
    id: "tutorial-1a-register-account-b4d9e7d1",
    title: "User Tutorial: Registering for an Account",
    description: 
      "Watch this tutorial to see how to register for a Public, Teacher or Student Account.",
    category: VideoCategory.TUTORIALS,
    tools: [AssociatedTool.SIMULATOR],
    lessonPlans: [],
    media: {
      url: "https://www.youtube.com/watch?v=5Qi8v-Y3iXM",
      thumbUrl: "https://d2qcvmovr4fv.cloudfront.net/youtube/thumbnails/tutorialRegisterAccount.jpg",
      is360: false
    },
    hashtags: ["account", "registration", "user-guide", "education"]
  },
  {
    id: "tutorial-2a-simulator-overview-c3f2a9b0",
    title: "User Tutorial: An overview of the AT simulator and features",
    description: 
      "Watch this tutorial to see the different features of the Alberta Tomorrow Simulator.",
    category: VideoCategory.TUTORIALS,
    tools: [AssociatedTool.SIMULATOR],
    lessonPlans: [],
    media: {
      url: "https://www.youtube.com/watch?v=nnm0V6jmpbM",
      thumbUrl: "https://d2qcvmovr4fv.cloudfront.net/youtube/thumbnails/tutorialOverview.jpg",
      is360: false
    },
    hashtags: ["simulator", "overview", "tutorial", "features"]
  },
  {
    id: "tutorial-3a-your-mission-19ebd4ac",
    title: "User Tutorial: Your Mission",
    description: 
      "An overview of the mission you will accomplish using Alberta Tomorrow",
    category: VideoCategory.TUTORIALS,
    tools: [AssociatedTool.SIMULATOR],
    lessonPlans: [],
    media: {
      url: "https://www.youtube.com/watch?v=yNljbKNBI1M",
      thumbUrl: "https://d2qcvmovr4fv.cloudfront.net/youtube/thumbnails/tutorialMission.jpg",
      is360: false
    },
    hashtags: ["mission", "objectives", "learning-path", "tutorial"]
  },
  {
    id: "tutorial-4a-historical-simulation-54e2f7bd",
    title: "User Tutorial: Running a Historical Simulation in Alberta Tomorrow",
    description: 
      "Watch this video to find out how your study area has changed since 1910!",
    category: VideoCategory.TUTORIALS,
    tools: [AssociatedTool.SIMULATOR],
    lessonPlans: [],
    media: {
      url: "https://www.youtube.com/watch?v=qMXZYBHCD_E",
      thumbUrl: "https://d2qcvmovr4fv.cloudfront.net/youtube/thumbnails/tutorialHistoric.jpg",
      is360: false
    },
    hashtags: ["history", "simulation", "landuse", "education"]
  },
  {
    id: "tutorial-5a-create-bau-7f8d20a3",
    title: "User Tutorial: How to Create a Business as Usual (BAU) Scenario",
    description: 
      "A BAU scenario gives you a glimpse of a possible future, one that carries current trends in landuse into the future.",
    category: VideoCategory.TUTORIALS,
    tools: [AssociatedTool.SIMULATOR],
    lessonPlans: [],
    media: {
      url: "https://www.youtube.com/watch?v=gWm7yWBkPHo",
      thumbUrl: "https://d2qcvmovr4fv.cloudfront.net/youtube/thumbnails/tutorialCreateBAU.jpg",
      is360: false
    },
    hashtags: ["bau", "scenario", "future", "landuse"]
  },
  {
    id: "tutorial-6a-landuse-scenario-bdd4c961",
    title: "User Tutorial: How to Create your own Land Use Scenarios",
    description: 
      "This video will show you how to select your watershed study area, set goals, make changes on the map, and run your scenario.",
    category: VideoCategory.TUTORIALS,
    tools: [AssociatedTool.SIMULATOR],
    lessonPlans: [],
    media: {
      url: "https://www.youtube.com/watch?v=RQ2Pz6gLIQ0",
      thumbUrl: "https://d2qcvmovr4fv.cloudfront.net/youtube/thumbnails/tutorialLandusePlan.jpg",
      is360: false
    },
    hashtags: ["landuse", "planning", "watershed", "management"]
  },
  {
    id: "tutorial-7a-create-observation-a8c4b231",
    title: "User Tutorial: How to Create an Observation in the Simulator",
    description: 
      "This tutorial walks you through how to create your own observation in the simulator that you and all registered users can see.",
    category: VideoCategory.TUTORIALS,
    tools: [AssociatedTool.SIMULATOR],
    lessonPlans: [],
    media: {
      url: "https://www.youtube.com/watch?v=fp_WVPCdCnU",
      thumbUrl: "https://d2qcvmovr4fv.cloudfront.net/youtube/thumbnails/tutorialCreateObs.jpg",
      is360: false
    },
    hashtags: ["observation", "engagement", "student-projects"]
  },
  {
    id: "tutorial-8a-climate-scenarios-69b2e0fa",
    title: "User Tutorial: Investigating Climate Change Scenarios in Alberta Tomorrow",
    description: 
      "See how you can view changes that may occur due to climate change with Mild, Medium or Hot Climate Change Scenarios.",
    category: VideoCategory.TUTORIALS,
    tools: [AssociatedTool.SIMULATOR],
    lessonPlans: [],
    media: {
      url: "https://www.youtube.com/watch?v=yF4SY7VoqDs",
      thumbUrl: "https://d2qcvmovr4fv.cloudfront.net/youtube/thumbnails/tutorialClimate.jpg",
      is360: false
    },
    hashtags: ["climate", "change", "simulation", "future"]
  },
  {
    id: "tutorial-9a-create-report-4db5a862",
    title: "User Tutorial: Creating and Sharing a Report in Alberta Tomorrow",
    description: 
      "This short tutorial video will show you how to create and share a report in the simulator.",
    category: VideoCategory.TUTORIALS,
    tools: [AssociatedTool.SIMULATOR],
    lessonPlans: [],
    media: {
      url: "https://www.youtube.com/watch?v=poxco59ASU8",
      thumbUrl: "https://d2qcvmovr4fv.cloudfront.net/youtube/thumbnails/tutorialReports.jpg",
      is360: false
    },
    hashtags: ["reporting", "sharing", "communication", "project"]
  }
];
