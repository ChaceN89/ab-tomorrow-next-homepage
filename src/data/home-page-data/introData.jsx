/**
 * @file introData.js
 * @module introData
 * @desc Contains non-localized media data for the Intro homepage section.
 *
 * @author Chace Nielson
 * @created Mar 25, 2025
 * @updated July 7, 2026 - set up translations 
 */

export const introData = {
  media: [
    {
      type: "video",
      videoSrc: "MHDH_m0agFM",
      titleKey: "videos.awardWinningEducation.title",
      descriptionKey: "videos.awardWinningEducation.description"
    },
    {
      type: "video",
      videoSrc: "Q6-l7HymJTQ",
      titleKey: "videos.planningForABetterFuture.title",
      descriptionKey: "videos.planningForABetterFuture.description"
    },
    {
      type: "image",
      imgSrc: "/simulator-screenshots/sim-8-new-historic.jpg",
      altKey: "videos.historicLandscapeSimulation.title",
      titleKey: "videos.historicLandscapeSimulation.title",
      descriptionKey: "videos.historicLandscapeSimulation.description"
    },
    {
      type: "image",
      imgSrc: "/simulator-screenshots/sim-7-new-climate-planning.jpg",
      altKey: "videos.climatePlanningSimulation.title",
      titleKey: "videos.climatePlanningSimulation.title",
      descriptionKey: "videos.climatePlanningSimulation.description"
    }
  ]
};