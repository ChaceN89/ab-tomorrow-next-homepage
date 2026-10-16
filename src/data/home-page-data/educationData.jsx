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


  // MediaFrame data uses translation keys for titles/descriptions - top section
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
  ],



  contactEmail: 'info@albertatomorrow.ca',

  // Water Ranger Kit - second row
  waterRangerKit: {
    titleKey: 'videos.waterRangersKit.title',
    descriptionKey: 'videos.waterRangersKit.description',
    contactKey: 'videos.waterRangersKit.contact',
    img: '/ui-elements/water-rangers-kit.jpg',
  },


  // Floor-sized map offer section - last row 
  floormap: {
    // Floor-sized map offer data keys + image
    floorMapTitleKey: 'videos.floorMaps.title',
    floorMapImageAltKey: 'videos.floorMaps.imageAlt',
    floorMapDescriptionKey: 'videos.floorMaps.description',
    floorMapOverlaysTitleKey: 'videos.floorMaps.overlaysTitle',
    floorMapOverlayKeys: [
      'videos.floorMaps.overlays.treatyAreas',
      'videos.floorMaps.overlays.metisRegions',
      'videos.floorMaps.overlays.currentLandscape',
    ],
    floorMapBundleKey: 'videos.floorMaps.bundle',
    floorMapFrenchAvailabilityKey: 'videos.floorMaps.frenchAvailability',
    floorMapQrAltKey: 'videos.floorMaps.qrAlt',
    floorMapQrInstructionKey: 'videos.floorMaps.qrInstruction',
    floorMapMoreInfoKey: 'videos.floorMaps.moreInfo',
    floorMapQrExpandKey: 'videos.floorMaps.qrExpand',
    floorMapQrCloseKey: 'videos.floorMaps.qrClose',
    floorMapOrderUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSe3asFB8Ck0EK8A5nqZpYhYrFSyPtHtgH4sk1Ku_rzh9iW-bw/viewform',
    floorMapImg: '/ui-elements/alberta-treaty-overlays.jpg',
    floorMapQrImg: '/ui-elements/floor-map-order-qr.png',
  }

  // map stuff here - its own object
};