/**
 * @file indigenousVoicesData.jsx
 * @module indigenousVoicesData
 * @desc Contains metadata for the Indigenous Voices module, including title, description, media, content, button text, and key features.
 *
 * @author Chace Nielson
 * @created Apr 8, 2025
 * @updated Apr 8, 2025
 */
import { FaMapMarkedAlt, FaFeatherAlt, FaVideo } from 'react-icons/fa';

export const indigenousVoicesData = {
  // translation keys under `HomePage.IndigenousVoices`
  titleKey: 'title',
  description1Key: 'description1',
  description2Key: 'description2',

  // Media section
  media: {
    img: {
      src: '/ui-elements/indigenous-voices.jpg',
      title: 'Indigenous Voices', // lowercase "title"
    },
    video: {
      youtubeSrc: '8Rxut4EAyYg',
      title: 'The Stoney Concept of Time'
    }
  },

  // Main body content
  // content will be provided by translations; components should render description2 with t.rich when needed
  contentKey: 'description2',

  // Button to link to the module
  buttonText: 'Explore the Module',
  buttonTextKey: 'ExploreTheModule',
  buttonLink: 'https://www.simulator.albertatomorrow.ca/#/dashboard/voices',

  // Key features of the module (list)
  keyFeatures: {
    // key from `Other` namespace
    titleKey: 'ModuleFeatures',
    featuresList: [
      {
        icon: <FaMapMarkedAlt />,
        textKey: 'bulletPoints.mapOverlays',
      },
      {
        icon: <FaFeatherAlt />,
        textKey: 'bulletPoints.indigenousKnowledge',
      },
      {
        icon: <FaVideo />,
        textKey: 'bulletPoints.stoneyStories',
      },
    ],
  },

  // Land Acknowledgment Section
  landAcknowledgment: {
    headingKey: 'landAcknowledgement.title',
    textKey: 'landAcknowledgement.description',
  }
};
