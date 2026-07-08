/**
 * @file interactiveToolsData.jsx
 * @module interactiveToolsData
 * @desc Contains metadata for Alberta Tomorrow's interactive tools, including title, icon, status, description, and external link.
 *
 * @author Chace Nielson
 * @created Mar 25, 2025
 * @updated July 8, 2026 - set up translations
 */


export const interactiveToolsDataTitles = {
  // translation keys within `HomePage.InteractiveTools`
  titleKey: 'title',
  subtitleKey: 'description',
}

export const interactiveToolsData = [
  {
    id: 'landUseSimulator',
    nameKey: 'tools.landUseSimulator.title',
    icon: "/site-logos/logo-lg.png",
    descriptionKey: 'tools.landUseSimulator.description',
    link: 'https://www.simulator.albertatomorrow.ca',
    inDevelopment: false,
    buttonTextKey: 'tools.landUseSimulator.button',
  },
  {
    id: 'energyTomorrow',
    nameKey: 'tools.energyTomorrow.title',
    icon: "/tool-logos/energy-tomorrow-logo.png",
    descriptionKey: 'tools.energyTomorrow.description',
    inDevelopment: true,
    link: null,
    buttonTextKey: 'tools.energyTomorrow.button',
  },
  {
    id: 'wildlifeTomorrow',
    nameKey: 'tools.wildlifeTomorrow.title',
    icon: "/tool-logos/wildlife-tomorrow-logo.png",
    descriptionKey: 'tools.wildlifeTomorrow.description',
    inDevelopment: true,
    link: null,
    buttonTextKey: 'tools.wildlifeTomorrow.button',
  },
];
