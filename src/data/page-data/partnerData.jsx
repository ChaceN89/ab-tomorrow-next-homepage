/**
 * @file partnerData.jsx
 * @module partnerData
 * @desc Contains structured data and utility functions for displaying Alberta Tomorrow's partners and sponsors.
 *       Provides categories, translation keys, logos, links, and dynamically filtered lists for displaying in
 *       components such as the Partner Banner, Partner Page, and sponsorship-related sections.
 *
 * @author Chace Nielson
 * @created Mar 14, 2025
 * @updated July 7, 2026 - set up translations
 *
 * @features
 * - Defines translation keys for the Partners Page title and description.
 * - Categorizes sponsors into Champions, Ambassadors, Mentors, Supporters, and Past Sponsors.
 * - Provides a structured list of sponsor objects with id, name, logo, link, category, and optional translation keys.
 * - Exports utility functions:
 *    - getSponsorsByCategory(type): Returns an array of sponsors matching the specified category.
 *    - getSponsorsExcludingCategory(type): Returns an array of sponsors excluding the specified category.
 * - Exports filtered sponsor lists for common use cases:
 *    - champions
 *    - mentors
 *    - ambassadors
 *    - supporters
 *    - pastSponsors
 *    - bannerPartners
 */

// titles for the page
export const partnerTitleData = {
  titleKey: "title",
  subtitleKey: "description",
  buttonKey: "button",
  sponsorshipPackageButtonKey: "sponsorshipPackageButton"
};

// Categories of sponsors
export const sponsorCategory = Object.freeze({
  CHAMPIONS: "champion",
  AMBASSADORS: "ambassador",
  MENTORS: "mentor",
  SUPPORTERS: "supporter",
  PAST_SPONSORS: "past-sponsor"
});

// Translation keys for sponsor category titles
export const sponsorCategoryTitleKeys = {
  [sponsorCategory.CHAMPIONS]: "tiers.champions",
  [sponsorCategory.AMBASSADORS]: "tiers.ambassadors",
  [sponsorCategory.MENTORS]: "tiers.mentors",
  [sponsorCategory.SUPPORTERS]: "tiers.supporters",
  [sponsorCategory.PAST_SPONSORS]: "tiers.pastSponsors"
};

// List of sponsors
const sponsors = [
  // Champions
  {
    id: "alces",
    name: "ALCES Landscape & Landuse",
    titleKey: "specificPartners.alces.title",
    descriptionKey: "specificPartners.alces.description",
    logo: "alces-logo.png",
    link: "https://alces.ca/",
    category: [sponsorCategory.CHAMPIONS]
  },
  {
    id: "calgaryFoundation",
    name: "Calgary Foundation",
    titleKey: "specificPartners.calgaryFoundation.title",
    descriptionKey: "specificPartners.calgaryFoundation.description",
    logo: "calgary-foundation-logo.png",
    link: "https://www.calgaryfoundation.org/",
    category: [sponsorCategory.CHAMPIONS]
  },
  {
    id: "samuelHanen",
    name: "Samuel Hanen Society for Resource Conservation",
    titleKey: "specificPartners.samuelHanen.title",
    descriptionKey: "specificPartners.samuelHanen.description",
    logo: "samuel-hanen-society-logo.png",
    link: "http://www.hanensociety.com/",
    category: [sponsorCategory.CHAMPIONS]
  },
  {
    id: "albertaEcotrust",
    name: "Alberta Ecotrust",
    titleKey: "specificPartners.albertaEcotrust.title",
    descriptionKey: "specificPartners.albertaEcotrust.description",
    logo: "alberta-ecotrust-logo.png",
    link: "https://albertaecotrust.com/",
    category: [sponsorCategory.CHAMPIONS]
  },

  // Ambassadors
  {
    id: "bowRiver",
    name: "Bow River Basin Council",
    titleKey: "specificPartners.bowRiver.title",
    descriptionKey: "specificPartners.bowRiver.description",
    logo: "bow-river-basin-council-logo.png",
    link: "https://brbc.ab.ca/",
    category: [sponsorCategory.AMBASSADORS]
  },
  {
    id: "integralEcology",
    name: "Integral Ecology Group",
    titleKey: "specificPartners.integralEcology.title",
    descriptionKey: "specificPartners.integralEcology.description",
    logo: "integral-ecology-group.png",
    link: "http://www.integralecologygroup.com/",
    category: [sponsorCategory.AMBASSADORS],
    partnerClass: "partner-shadow"
  },

  // Mentors
  {
    id: "sait",
    name: "Southern Alberta Institute of Technology",
    logo: "sait-logo.svg",
    link: "https://www.sait.ca/",
    category: [sponsorCategory.MENTORS]
  },
  {
    id: "edmontonCommunityFoundation",
    name: "Edmonton Community Foundation",
    logo: "edmonton-community-foundation-logo.png",
    link: "https://www.ecfoundation.org/",
    category: [sponsorCategory.MENTORS]
  },

  // Supporters
  {
    id: "canadaHelps",
    name: "Canada Helps",
    logo: "canada-helps.png",
    link: "https://www.canadahelps.org/en/",
    category: [sponsorCategory.SUPPORTERS]
  },
  {
    id: "cygnetEnergy",
    name: "Cygnet Energy",
    logo: "cygnet-energy-logo.png",
    link: "https://cygnetenergy.ca/",
    category: [sponsorCategory.SUPPORTERS]
  },
  {
    id: "arcFinancial",
    name: "ARC Financial",
    logo: "arc-financial-group-logo.png",
    link: "https://www.arcfinancial.com/",
    category: [sponsorCategory.SUPPORTERS]
  },
  {
    id: "corvusConsulting",
    name: "Corvus Consulting Inc.",
    logo: "corvus-logo.png",
    link: "https://www.corvus-consulting.ca/",
    category: [sponsorCategory.SUPPORTERS]
  },

  // Past Sponsors
  {
    id: "rbc",
    name: "RBC Royal Bank of Canada",
    logo: "rbc-logo.png",
    link: "https://www.rbcroyalbank.com/",
    category: [sponsorCategory.PAST_SPONSORS]
  },
  {
    id: "albertaPacific",
    name: "Alberta Pacific",
    logo: "alberta-pacific-logo.png",
    link: "https://alpac.ca/",
    category: [sponsorCategory.PAST_SPONSORS]
  },
  {
    id: "energyEfficiencyAlberta",
    name: "Energy Efficiency Alberta",
    logo: "energy-efficient-alberta-logo.jpg",
    link: "https://www.alberta.ca/energy-efficiency",
    category: [sponsorCategory.PAST_SPONSORS]
  },
  {
    id: "fuseConsulting",
    name: "Fuse Consulting",
    logo: "fuse-logo.png",
    link: "https://www.fuseconsulting.ca/",
    category: [sponsorCategory.PAST_SPONSORS]
  },
  {
    id: "tdFriendsOfTheEnvironmentFoundation",
    name: "TD Friends of the Environment Foundation",
    logo: "td-logo.png",
    link: "https://www.td.com/ca/en/about-td/ready-commitment/vibrant-planet/fef/",
    category: [sponsorCategory.PAST_SPONSORS]
  },
  {
    id: "lindsayLeighKimmettMemorialFoundation",
    name: "Lindsay Leigh Kimmett Memorial Foundation",
    logo: "lindsay-leigh-kimmett-logo.png",
    link: "https://lindsaykimmett.net/",
    category: [sponsorCategory.PAST_SPONSORS]
  },
  {
    id: "stantec",
    name: "Stantec",
    logo: "stantec-logo.png",
    link: "https://www.stantec.com/",
    category: [sponsorCategory.PAST_SPONSORS]
  },
  {
    id: "chawkersFoundation",
    name: "The Chawkers Foundation",
    logo: "chawkers-foundation-logo.png",
    link: "https://thechawkersfoundation.org/",
    category: [sponsorCategory.PAST_SPONSORS]
  },
  {
    id: "cenovusEnergy",
    name: "Cenovus Energy",
    logo: "cenovus-energy-logo.png",
    link: "https://www.cenovus.com/",
    category: [sponsorCategory.PAST_SPONSORS]
  },
  {
    id: "albertaRealEstateFoundation",
    name: "Alberta Real Estate Foundation",
    logo: "alberta-real-estate-foundation-logo.png",
    link: "https://www.albertarealestatefoundation.com/",
    category: [sponsorCategory.PAST_SPONSORS]
  },
  {
    id: "conocoPhillipsCanada",
    name: "ConocoPhillips Canada",
    logo: "conoco-phillips-logo.png",
    link: "https://www.conocophillips.ca/",
    category: [sponsorCategory.PAST_SPONSORS]
  },
  {
    id: "encana",
    name: "Encana",
    logo: "encana-logo.png",
    link: "https://www.encana.com/",
    category: [sponsorCategory.PAST_SPONSORS]
  },
  {
    id: "governmentOfAlberta",
    name: "Government of Alberta",
    logo: "alberta-govt-logo.png",
    link: "https://landuse.alberta.ca/",
    category: [sponsorCategory.PAST_SPONSORS]
  },
  {
    id: "waterRangers",
    name: "Water Rangers",
    logo: "water-rangers-logo.png",
    link: "https://waterrangers.ca/",
    category: [sponsorCategory.PAST_SPONSORS]
  }
];

// Function to get sponsors by category
export const getSponsorsByCategory = (type) => sponsors.filter((sponsor) => sponsor.category.includes(type));

// Function to get sponsors excluding a specific category
export const getSponsorsExcludingCategory = (type) => sponsors.filter((sponsor) => !sponsor.category.includes(type));

// Export all sponsors
export const allSponsors = sponsors;

// Export lists of sponsors by category
export const champions = getSponsorsByCategory(sponsorCategory.CHAMPIONS);
export const mentors = getSponsorsByCategory(sponsorCategory.MENTORS);
export const ambassadors = getSponsorsByCategory(sponsorCategory.AMBASSADORS);
export const supporters = getSponsorsByCategory(sponsorCategory.SUPPORTERS);
export const pastSponsors = getSponsorsByCategory(sponsorCategory.PAST_SPONSORS);

// Banner partners excludes past sponsors
export const bannerPartners = getSponsorsExcludingCategory(sponsorCategory.PAST_SPONSORS);