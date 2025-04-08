/**
 * @file newsData.jsx
 * @module newsData
 * @desc Contains the data for the news items displayed in the popup on initial site load.
 * 
 * @see {@link https://react-hot-toast.com/ | React Hot Toast Documentation}
 * @see {@link https://react-icons.github.io/react-icons/icons?name=fa | React Icons}
 * 
 * @author Chace Nielson
 * @created Mar 18, 2025
 * @updated Mar 18, 2025
 * 
 * @example New Item
  {
    icon: <FaFeather className="text-green-600 text-2xl" />, // Feather icon representing Indigenous heritage
    title: "Titke",
    description:
      'Featuring Province-wide Map Overlays, “Stoney Stories” videos in both languages, and land use planning using Stoney Nakoda lands and indicators!',
    
    // One of the following:
    link: "https:.....",
    scrollLink: "id=some section",
  },
 
 */

import { FaFeather, FaLightbulb, FaTools } from "react-icons/fa"

/**
 * List of new updates to be displayed in the popup. Remove items afte they have become irrelevant. as all will be displayed on the site in order
 */
export const newsItems = [

  {
    icon: <FaTools className="text-yellow-400 text-2xl" />, // Tools icon to represent development
    title: "New Educational Tools Coming Soon",
    description:
      "We're planning two exciting new additions: Energy Tomorrow and Wildlife Tomorrow — interactive modules to explore Alberta's ecosystems and energy choices.",
    scrollLink: "tools",
  },
  {
    icon: <FaFeather className="text-green-600 text-2xl" />, // Feather icon representing Indigenous heritage
    title: "ALL NEW Indigenous Voices Module",
    description:
      'Featuring Province-wide Map Overlays, “Stoney Stories” videos in both languages, and land use planning using Stoney Nakoda lands and indicators!',
    scrollLink: "indigenous-voices",
  },
];


