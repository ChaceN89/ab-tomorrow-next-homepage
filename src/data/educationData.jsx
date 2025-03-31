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

import waterRangersImg from '@/assets/ui-elements/water-rangers-kit.jpg';

export const eductionData = {
  title: "Free Tools & Lesson Plans to Energize Your Classroom",
  description: "Alberta Tomorrow is a free digital resource designed to support K–12 and post-secondary education across Alberta.",

  // Water Rangers Kit data - sepcific section
  waterRangerKitTitle: "Water Rangers Kit",
  waterRangerKitDescription: "Do you want to take your students out to test water but don’t have the equipment? No problem! Check out our Water Rangers test kits. Not only are you getting great testing equipment, you are helping Alberta Tomorrow at the same time! A percentage of sales goes back to Alberta Tomorrow to keep the platform completely free for you!",
  waterRangerKitImg: waterRangersImg,

  // MediaFrame data
  media: [
    {
      type: "video",
      src: "7RmwsUh1-0E",
      title: "The Power of Alberta Tomorrow",
      description: (
        <p>
          Discover how powerful your classroom can be! Alberta Tomorrow was developed by Albertans for Albertans, with full curriculum support and lesson plans — all available for free.
        </p>
      ),
    },
    {
      type: "video",
      src: "XcK-MNL1zCg",
      title: "Student Projects in Action",
      description: (
        <p>
          Grade 4 students at Glenbow School used Alberta Tomorrow to cover <em>all</em> cross-curricular competencies — and had fun while doing it!
        </p>
      ),
    },
    {
      type: "video",
      src: "kJ6Pu5uByQM",
      title: "Getting Started",
      description: (
        <p>
          Follow these easy steps to create your own Public, Teacher, or Student account in Alberta Tomorrow.
        </p>
      ),
    },
  ]
};