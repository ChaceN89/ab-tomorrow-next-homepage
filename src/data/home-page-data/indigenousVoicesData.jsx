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
  title: 'Indigenous Voices',
  description:
  <span>
    We are pleased to introduce our <span className="text-accent">"Indigenous Voices Module"</span> — a new learning module in the Land Use Simulator that centers Indigenous ways of knowing through the Two-Eyed Seeing model.
  </span>,

  // Media section
  media: {
    img: {
      src: 'ui-elements/indigenous-voices.jpg',
      title: 'Indigenous Voices', // lowercase "title"
    },
    video: {
      youtubeSrc: '8Rxut4EAyYg',
      title: 'The Stoney Concept of Time'
    }
  },

  // Main body content
  content: <div className="space-y-4">
    <p>
      The Two-Eyed Seeing model is a guiding principle for intercultural collaboration that encourages viewing the world through both Indigenous and Western perspectives — valuing both knowledge systems to achieve stronger outcomes together.
    </p>
    <p>
      This interactive module highlights Indigenous perspectives and cultural-geographic knowledge while exploring land use and planning through Indigenous Territories and community-defined indicators.
    </p>
    <p>
      Our goal is to provide a meaningful platform where Indigenous knowledge systems and voices help shape land use education across Alberta — fostering reconciliation and shared understanding through future-focused tools.
    </p>
  </div>,

  // Button to link to the module
  buttonText: 'Explore the Module',
  buttonLink: 'https://www.simulator.albertatomorrow.ca/#/dashboard/voices',

  // Key features of the module (list)
  keyFeatures: {
    title: 'Module Features',
    featuresList: [
      {
        icon: <FaMapMarkedAlt />,
        text: (
          <p>
            <span className="font-semibold">Explore</span> province-wide map overlays including Treaty Areas, Indigenous Territories and Languages, Reserves and Settlements, Métis Regions, and Residential School Locations.
          </p>
        ),
      },
      {
        icon: <FaFeatherAlt />,
        text: (
          <p>
            <span className="font-semibold">Use Indigenous knowledge</span> to plan land use within study areas, guided by community-defined indicators — including those from the Stoney Nakoda Nation.
          </p>
        ),
      },
      {
        icon: <FaVideo />,
        text: (
          <p>
            <span className="font-semibold">Watch bilingual “Stoney Stories” videos</span> and explore lessons and stories from Indigenous communities such as the Stoney Nakoda and Blackfoot Nations.
          </p>
        ),
      },
    ],
  },
  
  // Land Acknowledgment Section
  landAcknowledgment: {
    heading: 'Acknowledging the First Peoples of Alberta',
    text: 
      <div className="space-y-4">
        <p>
          We acknowledge that Alberta is the traditional territory of many Indigenous Peoples, including the First Nations of Treaties 6, 7, and 8, the Métis Nation of Alberta (Regions 1–6), and the diverse communities who have cared for these lands for generations.
        </p>
        <p>
          We honor their deep connections to the land, water, and environment, and recognize their enduring cultures, languages, and traditions. We also thank the many Indigenous communities and individuals who have generously shared their knowledge, time, and stories in support of this project.
        </p>
        <p>
          We hope this application helps all of us reflect on our impact and better understand the land through both Indigenous and Western knowledge systems.
        </p>
      </div>
  }
};
