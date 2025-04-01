/**
 * @file interactiveToolsData.jsx
 * @module interactiveToolsData
 * @desc Contains metadata for Alberta Tomorrow's interactive tools, including title, icon, status, description, and external link.
 *
 * @author Chace Nielson
 * @created Mar 25, 2025
 * @updated Mar 25, 2025
 */


export const interactiveToolsDataTitles ={
  title: 'Explore Our Interactive Tools',
  subtitle: <>Use our powerful <span className='text-accent'>educational tools</span> to explore land use, energy sustainability, and wildlife conservation in Alberta.</>
}

export const interactiveToolsData = [
  {
    name: 'Land Use Simulator',
    icon: "/site-logos/logo-lg.png",
    description: 'Explore how land use decisions impact Alberta’s landscapes. Compare past and present, create custom development plans, and analyze the effects of agriculture, oil & gas, forestry, and more.',
    link: 'https://www.simulator.albertatomorrow.ca',
    buttonText: 'Try the Simulator',
  },
  {
    name: 'Energy Tomorrow',
    icon: "/tool-logos/energy-tomorrow-logo.png",
    description: 'Learn how energy production impacts Alberta’s economy and environment.',
    inDevelopment: true,
    link: null,
    buttonText: 'Coming Soon',
  },
  {
    name: 'Wildlife Tomorrow',
    icon: "/tool-logos/wildlife-tomorrow-logo.png",
    description: 'Explore conservation efforts and the impact of land use on Alberta’s wildlife.',
    inDevelopment: true,
    link: null,
    buttonText: 'Coming Soon',
  },
];
