/**
 * @file aboutData.js
 * @module Data/About
 * @desc Provides the content and key features used on the Alberta Tomorrow About page.
 *
 * @author Chace Nielson
 * @created Mar 26, 2025
 * @updated Apr 1, 2025
 */

import { FaFlask, FaHandshake, FaChalkboardTeacher } from 'react-icons/fa';

// get involved section data/ our story section
export const OurStoryData = {
  title: "Be Part of Our Story",
  description: "Join us in shaping Alberta's future. Together, we can make a difference. Download our sponsorship package today to learn more about becoming a partner.",
}

// about section data
export const aboutData = {
  // translation keys for HomePage.About namespace (used with useTranslations('HomePage.About'))
  titleKey: 'title',
  description1Key: 'description1',
  description2Key: 'description2',
  description3Key: 'description3',
  buttonKey: 'button',
  buttonLink: '/board-of-directors',
  mission: {
    titleKey: 'mission.title',
    descriptionKey: 'mission.description',
  },
  vision: {
    titleKey: 'vision.title',
    descriptionKey: 'vision.description',
  },
  keyFeatures: [
    {
      icon: <FaFlask />,
      textKey: 'bulletPoints.peerReviewed',
    },
    {
      icon: <FaHandshake />,
      textKey: 'bulletPoints.endorsed',
    },
    {
      icon: <FaChalkboardTeacher />,
      textKey: 'bulletPoints.teacherTested',
    },
  ],
};
