/**
 * @file introData.js
 * @module introData
 * @desc Contains static video and image data for the Intro homepage section.
 *
 * @author Chace Nielson
 * @created Mar 25, 2025
 * @updated July 7, 2026 - set up translations 
 */

export const introData = {
  videos: [
    {
      type: "video",
      videoSrc: "MHDH_m0agFM",
      primaryUrl: "https://d2qcvmovr4fv.cloudfront.net/video-assets/X-AlbertaTomorrowPlatform/atp-02x-seeing-is-believing/video.mp4",
      imgSrc: "https://d2qcvmovr4fv.cloudfront.net/video-assets/X-AlbertaTomorrowPlatform/atp-02x-seeing-is-believing/thumbnail.jpg",
      subtitles: {
        en: "https://d2qcvmovr4fv.cloudfront.net/video-assets/X-AlbertaTomorrowPlatform/atp-02x-seeing-is-believing/en.vtt",
        fr: "https://d2qcvmovr4fv.cloudfront.net/video-assets/X-AlbertaTomorrowPlatform/atp-02x-seeing-is-believing/fr.vtt",
      },
      titleKey: "videos.awardWinningEducation.title",
      descriptionKey: "videos.awardWinningEducation.description"
    },
    {
      type: "video",
      videoSrc: "Q6-l7HymJTQ",
      primaryUrl: "https://d2qcvmovr4fv.cloudfront.net/video-assets/X-AlbertaTomorrowPlatform/atp-01x-planning-for-a-better-future/video.mp4",
      imgSrc: "https://d2qcvmovr4fv.cloudfront.net/video-assets/X-AlbertaTomorrowPlatform/atp-01x-planning-for-a-better-future/thumbnail.jpg",
      subtitles: {
        en: "https://d2qcvmovr4fv.cloudfront.net/video-assets/X-AlbertaTomorrowPlatform/atp-01x-planning-for-a-better-future/en.vtt",
        fr: "https://d2qcvmovr4fv.cloudfront.net/video-assets/X-AlbertaTomorrowPlatform/atp-01x-planning-for-a-better-future/fr.vtt",
      },
      titleKey: "videos.planningForABetterFuture.title",
      descriptionKey: "videos.planningForABetterFuture.description"
    }
  ],
  images: [
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