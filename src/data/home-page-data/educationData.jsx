/**
 * @file educationData.js
 * @module data/education
 * @desc Structured content data for the Education section of Alberta Tomorrow.
 *       Includes static copy, YouTube video metadata, and Water Rangers Kit information.
 * 
 * @author Chace Nielson
 * @created Mar 25, 2025
 * @updated Mar 26, 2025
 *
 * @features
 * - Title and description for the education section
 * - Water Rangers Kit promotional content (title, image, description)
 * - Media section with embedded YouTube videos and JSX-based descriptions
 *
 * @dependencies
 * - Water Rangers kit image from @/assets/ui-elements/water-rangers-kit.jpg
 */

export const eductionData = {
  // translation keys under `HomePage.Education`
  titleKey: 'title',
  descriptionKey: 'description',

  // Water Rangers Kit data keys + image
  waterRangerKitTitleKey: 'videos.waterRangersKit.title',
  waterRangerKitDescriptionKey: 'videos.waterRangersKit.description',
  waterRangerKitImg: '/ui-elements/water-rangers-kit.jpg',

  // MediaFrame data uses translation keys for titles/descriptions
  media: [
    {
      type: 'video',
      videoSrc: '7RmwsUh1-0E',
      titleKey: 'videos.visits.title',
      descriptionKey: 'videos.visits.description',
    },
    {
      type: 'video',
      videoSrc: 'XcK-MNL1zCg',
      titleKey: 'videos.studentProjects.title',
      descriptionKey: 'videos.studentProjects.description',
    },
    {
      type: 'video',
      videoSrc: 'kJ6Pu5uByQM',
      titleKey: 'videos.gettingStarted.title',
      descriptionKey: 'videos.gettingStarted.description',
    },
  ]
};