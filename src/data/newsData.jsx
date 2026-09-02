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
 * @updated July 14, 2025
 * 
 * @example New Item
  {
    icon: <FaFeather className="text-green-600 text-2xl" />, // Feather icon representing Indigenous heritage
    title: "Titke",
    description:
      'Featuring Province-wide Map Overlays, “Stoney Stories” videos in both languages, and land use planning using Stoney Nakoda lands and indicators!',
    
    // One of the following:
    link: "/resources", // Link to a page in the application
    scrollLink: "id=some section",
    href: "https://example.com", // External link
  },
 
 */

import { FaFeather, FaTools } from "react-icons/fa"
import { LuClipboardList } from "react-icons/lu";


/**
 * List of new updates to be displayed in the popup. Remove items afte they have become irrelevant. as all will be displayed on the site in order
 */
export const newsItems = [
  {
    icon: <FaFeather className="text-green-600 text-2xl" />,
    titleKey: "siteUpdateTitle",
    descriptionKey: "siteUpdateDescription",
    bulletKeys: [
      "siteUpdateLessonPlans",
      "siteUpdateVideos",
      "siteUpdateSimulator",
    ],
    link: "/resources",
    linkTextKey: "viewResources",
  },
];


