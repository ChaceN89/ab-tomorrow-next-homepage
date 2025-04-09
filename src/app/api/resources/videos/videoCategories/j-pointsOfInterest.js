/**
 * @file pointsOfInterestVideos.js
 * @module Data/Video/PointsOfInterest
 * @desc Contains video data for the Points of Interest category in Alberta Tomorrow.
 * 
 * @author Chace Nielson
 * @created Apr 1, 2025
 * @updated Apr 9, 2025
 */

import { VideoCategory, AssociatedTool } from "../videosEnums";

export const pointsOfInterestVideos = [
  {
    id: "poi-1j-investigating-a-fish-kill",
    title: "Investigating a Fish Kill",
    description: "Michael Sullivan, provincial fish science specialist with Alberta Fish and Wildlife talks at Lake Isle where thousands of sucker fish are poking their heads out of the water literally gasping for air because of oxygen deficiency in the water in this video from March 2014.",
    coordinates: [-114.7121597, 53.63705],
    subtype: "pointsofinterest",
    category: VideoCategory.POINTS_OF_INTEREST,
    tools: [AssociatedTool.SIMULATOR],
    media: {
      type: "video",
      status: "Complete",
      url: "https://www.youtube.com/watch?v=PD8FnEmi-l0",
      thumbUrl: "https://d2qcvmovr4fv.cloudfront.net/youtube/thumbnails/michael_sullivan_isle_lake_fish_kill.jpg",
      is360: false,
    },
    observedTime: 1394823600000,
    hashtags: ["water-quality", "ab-water", "land-use", "eutrophication", "fish-kill", "ab-environment"]
  },
  {
    id: "poi-2j-native-trout-in-alberta",
    title: "Native Trout in Alberta",
    description: "Watch this recording of a LiveStream presented by CPAWS SAB, Trout Unlimited and Cows and Fish to learn about Native Trout in Alberta.",
    coordinates: [-114.51295548244191, 50.28114220769186],
    subtype: "pointsofinterest",
    category: VideoCategory.POINTS_OF_INTEREST,
    tools: [AssociatedTool.SIMULATOR],
    media: {
      type: "video",
      status: "Complete",
      url: "https://www.youtube.com/watch?v=lztrWhXpnHg",
      thumbUrl: "https://d2qcvmovr4fv.cloudfront.net/7e1583c8-8c39-47f1-89ad-12c7433c8798/thumbnails/obs_7db174da-e122-4667-82c8-824f6787c863_tumb.0000514.jpg",
      is360: false,
    },
    observedTime: 1595618236362,
    hashtags: ["water-quality", "native-trout", "cpaws", "trout-unlimited", "recreation", "agriculture"]
  },
  {
    id: "poi-3j-athabasca-sand-dunes-ecological-reserve",
    title: "Athabasca Sand Dunes Ecological Reserve",
    description: "Open, moving sand dunes surrounded by lakes.",
    coordinates: [-110.89052249220633, 58.17244060712531],
    subtype: "pointsofinterest",
    category: VideoCategory.POINTS_OF_INTEREST,
    tools: [AssociatedTool.SIMULATOR],
    media: {
      type: "video",
      status: "Complete",
      url: "https://www.youtube.com/watch?v=KrkcyfUn274",
      thumbUrl: "https://d2qcvmovr4fv.cloudfront.net/youtube/thumbnails/LGO_AthabascaSandDunes.jpg",
      is360: false,
    },
    observedTime: 1607104608043,
    hashtags: ["athabasca", "sand", "dunes", "ecological-reserve"]
  },
  {
    id: "poi-4j-writing-on-stone-provincial-park",
    title: "Writing on Stone Provincial Park",
    description: "Learn about the landforms and the significance of the area to the Blackfoot people.",
    coordinates: [-111.63423545056287, 49.06794067595865],
    subtype: "pointsofinterest",
    category: VideoCategory.POINTS_OF_INTEREST,
    tools: [AssociatedTool.SIMULATOR],
    media: {
      type: "video",
      status: "Complete",
      url: "https://www.youtube.com/watch?v=-MJXlSxkka8",
      thumbUrl: "https://d2qcvmovr4fv.cloudfront.net/youtube/thumbnails/LGO_WritingOnStone.jpg",
      is360: false,
    },
    observedTime: 1607104608043,
    hashtags: ["writing-on-stone", "petroglyphs", "milk-river", "blackfoot"]
  },
  {
    id: "poi-5j-hanging-culvert",
    title: "Hanging Culvert",
    description: "Listen to this fisheries biologist explain what a hanging culvert is in the upper reaches of the Red Deer River Watershed.",
    coordinates: [-115.34838293901707, 51.6563101205077],
    subtype: "pointsofinterest",
    category: VideoCategory.POINTS_OF_INTEREST,
    tools: [AssociatedTool.SIMULATOR],
    media: {
      type: "video",
      status: "Complete",
      url: "https://www.youtube.com/watch?v=r-_LsSi7FJ0",
      thumbUrl: "https://d2qcvmovr4fv.cloudfront.net/youtube/thumbnails/LGO_HangingCulvert.jpg",
      is360: false,
    },
    observedTime: 1607104608043,
    hashtags: ["culvert", "stream-crossing", "fish", "watershed", "roads"]
  },
  {
    id: "poi-6j-forest-attack-mountain-pine-beetle",
    title: "Forest Attack - Mountain Pine Beetle",
    description: "Follow biologists as they look for trees attacked by Mountain Pine Beetles.",
    coordinates: [-119.163818359374, 54.47916440896674],
    subtype: "pointsofinterest",
    category: VideoCategory.POINTS_OF_INTEREST,
    tools: [AssociatedTool.SIMULATOR],
    media: {
      type: "video",
      status: "Complete",
      url: "https://www.youtube.com/watch?v=3ojS4z9Z68c",
      thumbUrl: "https://d2qcvmovr4fv.cloudfront.net/youtube/thumbnails/LGO_PineBeetle.jpg",
      is360: false,
    },
    observedTime: 1607104608043,
    hashtags: ["forests", "pine-beetle", "infestation", "biology"]
  },
  {
    id: "poi-7j-grassland-restoration",
    title: "Grassland Restoration",
    description: "This ranch south of Manyberries is an Alberta Conservation Association site.",
    coordinates: [-110.69863851935013, 49.39300483924299],
    subtype: "pointsofinterest",
    category: VideoCategory.POINTS_OF_INTEREST,
    tools: [AssociatedTool.SIMULATOR],
    media: {
      type: "video",
      status: "Complete",
      url: "https://www.youtube.com/watch?v=u1qMoL3V61g",
      thumbUrl: "https://d2qcvmovr4fv.cloudfront.net/youtube/thumbnails/LGO_GrasslandRestoration.jpg",
      is360: false,
    },
    observedTime: 1607104608043,
    hashtags: ["grassland", "restoration", "ranching", "conservation"]
  },
  {
    id: "poi-8j-beneath-the-surface-water-monitoring",
    title: "Beneath the Surface: Water Monitoring in the Ghost Watershed",
    description: "Peek into a bucket of bugs and see why these aquatic invertebrates are indicators of water quality.",
    coordinates: [-114.8371996666042, 51.28249611577988],
    subtype: "pointsofinterest",
    category: VideoCategory.POINTS_OF_INTEREST,
    tools: [AssociatedTool.SIMULATOR],
    media: {
      type: "video",
      status: "Complete",
      url: "https://www.youtube.com/watch?v=KdEN85OgG4o",
      thumbUrl: "https://d2qcvmovr4fv.cloudfront.net/youtube/thumbnails/gwas-ghost-waiparous.jpg",
      is360: false,
    },
    observedTime: 1607104608043,
    hashtags: ["water", "ghost-watershed", "monitoring", "aquatic-invertebrates"]
  },
  {
    id: "poi-9j-finding-water-healthy-land-stream",
    title: "Finding Water: Healthy Land, Healthy Stream",
    description: "A documentary video on the sources of Canada’s prairie rivers and their vulnerability to land use.",
    coordinates: [-114.359536, 49.865747],
    subtype: "pointsofinterest",
    category: VideoCategory.POINTS_OF_INTEREST,
    tools: [AssociatedTool.SIMULATOR],
    media: {
      type: "video",
      status: "Complete",
      url: "https://www.youtube.com/watch?v=E2wYNZJ-tC4",
      thumbUrl: "https://d2qcvmovr4fv.cloudfront.net/youtube/thumbnails/livingstone_findingwater.jpg",
      is360: false,
    },
    observedTime: 1607104608043,
    hashtags: ["prairie-rivers", "stream-health", "land-use", "canadian-water"]
  }
];
