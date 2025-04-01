/**
 * @file partnerData.jsx
 * @module partnerData
 * @desc Contains structured data and utility functions for displaying Alberta Tomorrow's partners and sponsors.
 *       Provides categories, descriptions, and dynamically filtered lists for displaying in various components 
 *       such as the Partner Banner, Partner Page, and other sponsorship-related sections.
 *
 * @author Chace Nielson
 * @created Mar 14, 2025
 * @updated Apr 1, 2025
 *
 * @features
 * - Defines the title and subtitle for the Partners Page (`partnerTitleData`).
 * - Categorizes sponsors into Champions, Ambassadors, Mentors, Supporters, and Past Sponsors.
 * - Provides a structured list of sponsor objects with name, logo, link, category, and optional description.
 * - Exports utility functions:
 *    - `getSponsorsByCategory(type)`: Returns an array of sponsors matching the specified category.
 *    - `getSponsorsExcludingCategory(type)`: Returns an array of sponsors excluding the specified category.
 * - Exports filtered sponsor lists for common use cases:
 *    - `champions`
 *    - `mentors`
 *    - `ambassadors`
 *    - `supporters`
 *    - `pastSponsors`
 *    - `bannerPartners` (excludes past sponsors and includes all others)
 */


// titles for the page
export const partnerTitleData = {
  title: "Our Partners",
  subtitle: "Alberta Tomorrow is a non-profit organization that relies on the support of our partners and sponsors to help us achieve our mission. We are grateful for their contributions and commitment to environmental stewardship and land-use planning.",
};


// Categories of sponsors
const category = Object.freeze({
  CHAMPIONS: "champion",
  AMBASSADORS: "ambassador",
  MENTORS: "mentor",
  SUPPORTERS: "supporter",
  PAST_SPONSORS: "past-sponsor",
  BANNER: "banner", // not needed as the banner sponsors are everyone except past sponsors
}); 


// List of sponsors
const sponsors = [
  // champion
  {
    name: "ALCES Landscape & Landuse", 
    logo: "alces-logo.png", 
    link: "https://www.online.alces.ca/", 
    category: [category.CHAMPIONS],
    description: "We are an interdisciplinary team of scientists, consultants, and software developers focused on providing a strategic understanding of the consequences of human activities on our planet and societies. Our passion is delivering the knowledge our clients need to make informed decisions.",
  },
  {
    name: "Calgary Foundation", 
    logo: "calgary-foundation-logo.png", 
    link: "https://www.calgaryfoundation.org/", 
    category: [category.CHAMPIONS],
    description: "The Foundation facilitates collaborative philanthropy by making powerful connections between donors and community organizations for the long-term benefit of Calgary and area. In 2018-19, Calgary Foundation saw $65.2 million in new contributions, had an asset base of $1.1 billion and granted $48.9 million to 981 charitable organizations.",
  },
  {
    name: "Samuel Hanen Society for Resource Conservation", 
    logo: "samuel-hanen-society-logo.png", 
    link: "http://www.hanensociety.com/", 
    category: [category.CHAMPIONS],
    description: "Dedicated to preserving natural resources and ecosystems.",
  },
  {
    name: "Alberta Ecotrust",
    logo: "alberta-ecotrust-logo.png",
    link: "https://albertaecotrust.com/",
    category: [category.CHAMPIONS],
    description: "Alberta Ecotrust is a unique partnership between the corporate sector and the environmental community. Together, we invest in the people and projects that protect the natural systems we rely on for life and prosperity.",
  },

  // Ambassadors
  {
    name: "Bow River Basin Council",
    logo: "bow-river-basin-council-logo.png",
    link: "https://brbc.ab.ca/",
    category: [category.AMBASSADORS],
    description: "The Bow River Basin Council collaboratively works to nurture, share, and protect the waters of the Bow River Basin. Together, through science and inclusion, we promote new solutions and strategies for a healthy watershed.",
  },
  {
    partnerClass:'partner-shadow',
    name: "Integral Ecology Group",
    logo: "integral-ecology-group.png",
    link: "http://www.integralecologygroup.com/",
    category: [category.AMBASSADORS],
    description: "We are dedicated to working at the interface between humans and their environments, and apply innovative approaches to specific challenges in ecosystem and cultural assessment, repair and support, and land-use managment. By bringing together the areas of ecology, ethnoecology, reclamation monitoring and sampling design, cumulative-effects studies, and land-use planning, we work across a variety of technical disciplines to deliver the best in applied ecological and cultural research.",
  },

  // Mentors
  {
    name: "Southern Alberta Institute of Technology",
    logo: "sait-logo.svg",
    link: "https://www.sait.ca/",
    category: [category.MENTORS],
    description: null,
  },
  {
    name: "Edmonton Community Foundation",
    logo: "edmonton-community-foundation-logo.png",
    link: "https://www.ecfoundation.org/",
    category: [category.MENTORS],
    description: null,
  },
 
  // Supporters
  {
    name: "Canada Helps",
    logo: "canada-helps.png",
    link: "https://www.canadahelps.org/en/",
    category: [category.SUPPORTERS],
    description: null,
  },
  {
    name: "Cygnet Energy",
    logo: "cygnet-energy-logo.png",
    link: "https://cygnetenergy.ca/",
    category: [category.SUPPORTERS],
    description: null,
  },
  {
    name: "ARC Financial",
    logo: "arc-financial-group-logo.png",
    link: "https://www.arcfinancial.com/",
    category: [category.SUPPORTERS],
    description: null,
  },
  {
    name: "Corvus Consulting Inc.",
    logo: "corvus-logo.png",
    link: "https://www.corvus-consulting.ca/",
    category: [category.SUPPORTERS],
    description: null,
  },

  // Past Sponsors
  {
    name: "RBC Royal Bank of Canada",
    logo: "rbc-logo.png",
    link: "https://www.rbcroyalbank.com/",
    category: [category.PAST_SPONSORS],
    description: null,
  },
  {
    name: "Alberta Pacific",
    logo: "alberta-pacific-logo.png",
    link: "https://alpac.ca/",
    category: [category.PAST_SPONSORS],
    description: null,
  },
  {
    name: "Energy Efficiency Alberta",
    logo: "energy-efficient-alberta-logo.jpg",
    link: "https://www.alberta.ca/energy-efficiency",
    category: [category.PAST_SPONSORS],
    description: null,
  },
  {
    name: "Fuse Consulting",
    logo: "fuse-logo.png",
    link: "https://www.fuseconsulting.ca/",
    category: [category.PAST_SPONSORS],
    description: null,
  },
  {
    name: "TD Friends of the Environment Foundation",
    logo: "td-logo.png",
    link: "https://www.td.com/ca/en/about-td/ready-commitment/vibrant-planet/fef/",
    category: [category.PAST_SPONSORS],
    description: null,
  },
  {
    name: "Lindsay Leigh Kimmett Memorial Foundation",
    logo: "lindsay-leigh-kimmett-logo.png",
    link: "https://lindsaykimmett.net/",
    category: [category.PAST_SPONSORS],
    description: null,
  },
  {
    name: "Stantec",
    logo: "stantec-logo.png",
    link: "https://www.stantec.com/",
    category: [category.PAST_SPONSORS],
    description: null,
  },
  {
    name: "The Chawkers Foundation",
    logo: "chawkers-foundation-logo.png",
    link: "https://thechawkersfoundation.org/",
    category: [category.PAST_SPONSORS],
    description: null
  },
  {
    name: "Cenovus Energy",
    logo: "cenovus-energy-logo.png",
    link: "https://www.cenovus.com/",
    category: [category.PAST_SPONSORS],
    description: null,
  },
  {
    name: "Alberta Real Estate Foundation",
    logo: "alberta-real-estate-foundation-logo.png",
    link: "https://www.albertarealestatefoundation.com/",
    category: [category.PAST_SPONSORS],
    description: null,
  },
  {
    name: "ConocoPhillips Canada",
    logo: "conoco-phillips-logo.png",
    link: "https://www.conocophillips.ca/",
    category: [category.PAST_SPONSORS],
    description: null,
  },
  {
    name: "Encana",
    logo: "encana-logo.png",
    link: "https://www.encana.com/",
    category: [category.PAST_SPONSORS],
    description: null,
  },
  {
    name: "Government of Alberta", 
    logo: "alberta-govt-logo.png", 
    link: "https://landuse.alberta.ca/", 
    category: [category.PAST_SPONSORS],
    description: "Supports environmental stewardship and land-use planning.",
  },
  {
    name: "Water Rangers",
    logo: "water-rangers-logo.png",
    link: "https://waterrangers.ca/",
    category: [category.PAST_SPONSORS],
    description: null,
  },
];


// Function to get sponsors by category
const getSponsorsByCategory = (type) => sponsors.filter(sponsor => sponsor.category.includes(type));

// Function to get sponsors excluding a specific category
const getSponsorsExcludingCategory = (type) => sponsors.filter(sponsor => !sponsor.category.includes(type));

// Export lists of sponsors by category
export const champions = getSponsorsByCategory(category.CHAMPIONS);
export const mentors = getSponsorsByCategory(category.MENTORS);
export const ambassadors = getSponsorsByCategory(category.AMBASSADORS);
export const supporters = getSponsorsByCategory(category.SUPPORTERS);
export const pastSponsors = getSponsorsByCategory(category.PAST_SPONSORS);
export const bannerPartners = getSponsorsExcludingCategory(category.PAST_SPONSORS); // excludes past sponsors
