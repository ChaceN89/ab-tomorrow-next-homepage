/**
 * @file f-bowRiverWatershed360VideoSeries.js
 * @module Data/Video/f-bowRiverWatershed360VideoSeries
 * @desc Contains video data for the "Bow River Watershed 360 Video Series" category in Alberta Tomorrow.
 * 
 * @author Chace Nielson
 * @created Apr 9, 2025
 * @updated Apr 10, 2025
 */


import { VideoCategory, AssociatedTool } from "../videosEnums";

export const bowRiverWatershed360VideoSeries = [
  { // 1 watershed 360 tour - done
    id: "brbc-01f-watershed",
    title: "Watershed 360° Tour", // General tour of the watershed in locations
    description: 
      "Visit each sub-basin in the Bow River basin and get a feel for how people use the water and the landscape. Look at the different types of buildings, pathways, and activities that can take place within the watershed as you travel from the headwaters, down to the end in the prairies.",
    coordinates: [-116.464694, 51.678851],
    category: VideoCategory.BOW_RIVER_360,
    tools: [AssociatedTool.SIMULATOR],
    lessonPlans:[ 
      {title: "The Watershed",link:"https://docs.google.com/document/d/1IJGMeGkcj1MlH58Ch4MnEmQOQ92UcrPz"}
    ],
    media: {
      url: "https://www.youtube.com/watch?v=-66yGxMmQxE&list=PLvZi8sQT8o8PgFddqYnvhY3EJUJx-N6y3&index=9", //Bow River Watershed 360 Tour
      thumbUrl: "https://d2qcvmovr4fv.cloudfront.net/youtube/thumbnails/brbc_11_watershed.png",
      is360: true,
      locations: [
        {time: 0, coordinates: '-116.464694, 51.678851',},
        {time: 20, coordinates: '-115.129660, 50.932082',},
        {time: 35, coordinates: '-114.959892, 51.263301',},
        {time: 50, coordinates: '-114.771438, 51.037320',},
        {time: 65, coordinates: '-114.716500, 51.219053',},
        {time: 80, coordinates: '-114.190296, 50.201977',},
        {time: 95, coordinates: '-114.703432, 50.615995',},
        {time: 110, coordinates: '-114.116592, 50.927827',},
        {time: 125, coordinates: '-114.097184, 50.999912',},
        {time: 140, coordinates: '-114.049133, 51.422275',},
        {time: 155, coordinates: '-114.077158, 51.055417',},
        {time: 170, coordinates: '-113.696312, 50.805607',},
        {time: 185, coordinates: '-113.441861, 50.827096',},
        {time: 200, coordinates: '-112.918901, 50.561080',},
      ],

    },
    hashtags: ["water", "watershed", "monitoring", "tour"]
  },
  { // 2 hydrology and climate change - done
    id: "brbc-02f-hydro-climate",
    title: "Hydrology and Climate Change",
    description: 
      "Tricia Stadnyk talks about how a watershed can affect the climate it is in, and in turn, how the climate then affects the landscape. Go from the headwaters through to the prairies as she talks about precipitation and more.",
    coordinates: [-116.464694, 51.678451],
    category: VideoCategory.BOW_RIVER_360,
    tools: [AssociatedTool.SIMULATOR],
    lessonPlans:[ 
      {title:"Hydrology & Climate Change", link:"https://docs.google.com/document/d/1RgpNqFu8Muak1gNkwCZbaxPoFc6qzXM4"}
    ],
    media: {
      url: "https://www.youtube.com/watch?v=6B31usY3S6E&list=PLvZi8sQT8o8PgFddqYnvhY3EJUJx-N6y3&index=2", // Bow River Watershed: Hydrology & Climate Change
      thumbUrl: "https://d2qcvmovr4fv.cloudfront.net/youtube/thumbnails/brbc_10_hydrology_and_climate_change.png",
      is360: true,
      locations: [
        {time: 0, coordinates: '-116.464694, 51.678851',},
        {time: 126,coordinates: '-114.959892,51.263301',},
        {time: 208,coordinates: '-114.243607,50.689097',},
      ],
    },
    hashtags: ["water", "watershed", "monitoring", "climate", "hydrology"]
  },
  { // 3 managing the watershed - done
    id: "brbc-03f-management-data",
    title: "Watershed Management and Data",
    description: 
      "Dr. Lee Jackson talks about the Sustainable Watershed Integrated Management Platform and the necessity of shared water data for the health of the Bow River Basin. Explore from the headwaters into the prairies and learn about citizen science projects, and different data parameters.",
    category: VideoCategory.BOW_RIVER_360,
    tools: [AssociatedTool.SIMULATOR],
    lessonPlans: [],
    media: {
      url: "https://www.youtube.com/watch?v=1sIN7zr8xoo&list=PLvZi8sQT8o8PgFddqYnvhY3EJUJx-N6y3&index=5", //managing the watershed
      thumbUrl: "https://d2qcvmovr4fv.cloudfront.net/youtube/thumbnails/brbc_9_watershed_management_and_data.png",
      is360: true,
      locations: [
        {time: 0, coordinates: '-116.464694, 51.678851',},
        {time: 47, coordinates: '-114.959892, 51.263301',},
        {time: 89, coordinates: '-114.077158, 51.055417',},
        {time: 139, coordinates: '-114.220627, 51.099321',},
        {time: 160, coordinates: '-114.097184, 50.999912',},
        {time: 191, coordinates: '-113.828234, 51.020180',},
        {time: 235, coordinates: '-113.696312, 50.805607',},
      ],
    },
    hashtags: ["water", "watershed", "monitoring", "sustainability"]
  },
  { // 4 watersheds and hydrology - done
    id: "brbc-04f-watersheds-hydro",
    title: "Watersheds and Hydrology",
    description: 
      "Go from the mountains through the river basin while learning what a watershed is, and how hydrology is apparent in the landscape. Tricia Stadnyk will explain how hydrology can affect everything around it as you explore.",
    coordinates: [-115.12966, 50.932082],
    category: VideoCategory.BOW_RIVER_360,
    tools: [AssociatedTool.SIMULATOR],
    lessonPlans: [
      { title: "Watersheds and Hydrology", link: "https://docs.google.com/document/d/1pluUXun-r0TxsYWRj8b5X__UlWWcJMcW" },
    ],
    media: {
      url: "https://www.youtube.com/watch?v=_hFqA3agfhk&list=PLvZi8sQT8o8PgFddqYnvhY3EJUJx-N6y3", 
      thumbUrl: "https://d2qcvmovr4fv.cloudfront.net/youtube/thumbnails/brbc_4_watersheds_and_hydrology.png",
      is360: true,
      locations: [
        {time: 0, coordinates: '-115.129660, 50.932082',},
        {time: 54, coordinates: '-114.587656,50.390193',},
        {time: 172, coordinates: '-113.696312,50.805607',},
      ],
    },
    hashtags: ["water", "watershed", "monitoring", "hydrology", "landscape"]
  },
  { // 5 hydrology and land development - done
    id: "brbc-05f-hydro-dev",
    title: "Hydrology and Land Development",
    description: 
      "Explore the watershed while Tricia Stadnyk explains how landscapes and water are affected by development and use changes. How does hydrology within the watershed change when the landscape changes because of humans?",
    coordinates: [-114.716500, 51.219053],
    category: VideoCategory.BOW_RIVER_360,
    tools: [AssociatedTool.SIMULATOR],
    lessonPlans: [
      { title: "Hydrology and Land Development", link: "https://docs.google.com/document/d/1d4mr6hIi_J3jNzJVj77lyBNeCW_jGhWq" },
    ],
    media: {
      url: "https://www.youtube.com/watch?v=2qSAx5fmtWg&list=PLvZi8sQT8o8PgFddqYnvhY3EJUJx-N6y3&index=3",
      thumbUrl: "https://d2qcvmovr4fv.cloudfront.net/youtube/thumbnails/brbc_8_hydrology_and_land_development.png",
      is360: true,
      locations: [
        {time: 0, coordinates: '-114.716500, 51.219053',},
        {time: 54, coordinates: '-114.097184,50.999912',},
        {time: 116, coordinates: '-114.077158,51.055417',},
        {time: 155, coordinates: '-115.129660,50.932082',},
        {time: 212, coordinates: '-115.145593,50.917276',},
        {time: 238, coordinates: '-115.048676,51.033742',},
      ],
    },
    hashtags: ["water", "watershed", "monitoring"]
  },
  { // 6 elbow river watershed partnership - Video not aviable - data done
    id: "brbc-06f-erwp-aquifers",
    title: "Elbow River Watershed Partnership (ERWP) Aquifers",
    description: 
      "Explore the Elbow River watershed and learn about its groundwater, and state of the aquifer with Joe and Flora. Learn the definitions for what an aquifer is, how groundwater is used in the sub-basin, and how it is affected by people.",
    coordinates: [-114.7810132, 50.8678614],
    category: VideoCategory.BOW_RIVER_360,
    tools: [AssociatedTool.SIMULATOR],
    lessonPlans: [
      { title: "Aquifers", link: "https://docs.google.com/document/d/1GBnAfLDry3L8DEJTw1hqczlE5lSD0r5O" },
    ],
    media: {
      url: "https://www.youtube.com/watch?v=3wvA7macCMM",
      thumbUrl: "https://d2qcvmovr4fv.cloudfront.net/youtube/thumbnails/brbc_2_elbow_river_watershed_partnership_aquifers.png",
      is360: true,
      locations: [
        {time: 0,coordinates: '-114.7810132,50.8678614',},
        {time: 161,coordinates: '-114.6923929,50.901219',},
        {time: 238,coordinates: '-114.563245,50.9533249',},
      ],
    },
    hashtags: ["water", "watershed", "monitoring"]
  },
  { // 7 wetlands and stormwater -  done
    id: "brbc-07f-wetlands-stormwater",
    title: 'Wetlands and Stormwater',
    description: 
      `Take a walk around the constructed wetlands in North Glenmore park with Liliana Bozic as she explains the uses of wetlands for storage and stormwater. Learn how water quality is affected by wetlands, and how land development changes, and seasons affect them.`,
    coordinates: [-114.120316, 50.989518],
    category: VideoCategory.BOW_RIVER_360,
    tools: [AssociatedTool.SIMULATOR],
    lessonPlans: [
      { title: "Constructed Wetlands and Stormwater", link: "https://docs.google.com/document/d/1GrkDcND2Fflt_-S-R6DyNrJL8lwalLG_" },
    ],
    media: {
      url: 'https://www.youtube.com/watch?v=lmypedsjMjQ&list=PLvZi8sQT8o8PgFddqYnvhY3EJUJx-N6y3&index=10',
      thumbUrl: 'https://d2qcvmovr4fv.cloudfront.net/youtube/thumbnails/brbc_5_wetlands_and_stormwater.png',
      is360: true,
      locations: [
        {time: 0,coordinates: '-114.120316, 50.989518',},
        {time: 110,coordinates: '-114.028253, 51.303713',},
      ],
    },
    observedTime: 1607104608043,
    hashtags: ['water','watershed', 'monitoring', "storm"],
  },  
  { // 8 water quality - done
    id: "brbc-08f-water-quality",
    title: "Water Quality",
    description: 
      "Join Patrick Van den Eynden as he talks about the City of Calgary’s Glenmore Water Treatment Plant’s process from getting the water from the reservoir, all the way to disinfection and sending the water out to service sites across the city.",
    coordinates: [-114.098440, 51.002496],
    category: VideoCategory.BOW_RIVER_360,
    tools: [AssociatedTool.SIMULATOR],
    lessonPlans: [
      { title: "Water Quality: Water Treatment", link: "https://docs.google.com/document/d/1unCOQUIHRLS5YZJ3J5ekBFurcbr9zaL7" },
    ],
    media: {
      url: "https://www.youtube.com/watch?v=9ksSbswY_CA&list=PLvZi8sQT8o8PgFddqYnvhY3EJUJx-N6y3&index=8", //Water Quality
      thumbUrl: "https://d2qcvmovr4fv.cloudfront.net/youtube/thumbnails/brbc_7_water_quality.png",
      is360: true
    },
    hashtags: ["water", "watershed", "monitoring"]
  },
  { // 9 water services - done
    id: "brbc-09f-water-services",
    title: "Water Services",
    description: 
      "Explore some of the Glenmore dam and reservoir as Patrick Van den Eynden talks about its history, infrastructure, services, and the City’s water drinking system.",
    coordinates: [-114.097184, 50.999912],
    category: VideoCategory.BOW_RIVER_360,
    tools: [AssociatedTool.SIMULATOR],
    lessonPlans: [
      { title: "Glenmore Dam and Resevoir: Water Services", link: "https://docs.google.com/document/d/1X8bXoEl8IDyHjAtW5nSc5mtB-jVN8DU0" },
    ],
    media: {
      url: "https://www.youtube.com/watch?v=BselhdsCzvM&list=PLvZi8sQT8o8PgFddqYnvhY3EJUJx-N6y3&index=6",
      thumbUrl: "https://d2qcvmovr4fv.cloudfront.net/youtube/thumbnails/brbc_6_water_services.png",
      is360: true,
      locations: [
        {time: 0, coordinates: '-114.097184, 50.999912'},
        {time: 225, coordinates: '-114.220395, 51.099285'},
        {time: 261, coordinates: '-114.097184, 50.999912'},
      ]
    },
    hashtags: ["water", "watershed", "monitoring"]
  },
  { // 10 native prairies and plants - done
    id: "brbc-010f-native-prairies",
    title: "Native Prairies and Plants",
    description: 
      "As Megan Evans and Erin Anderson talk about the importance of prairies and their native plants, explore several grassland landscapes within the Bow River Basin.",
    coordinates: [-114.116592, 50.927827],
    category: VideoCategory.BOW_RIVER_360,
    tools: [AssociatedTool.SIMULATOR],
    lessonPlans: [
      { title: "Native Prairies and Plants", link: "https://docs.google.com/document/d/1uTt5BFsG986N8SgW9H4nNCfXDPj5Wta7" },
    ],
    media: {
      url: "https://www.youtube.com/watch?v=EAVeYoygr0c&list=PLvZi8sQT8o8PgFddqYnvhY3EJUJx-N6y3&index=11",
      thumbUrl: "https://d2qcvmovr4fv.cloudfront.net/youtube/thumbnails/brbc_3_native_prairies_and_plants.png",
      is360: true,
      locations: [
        {time: 0, coordinates: '-114.116592, 50.927827'},
        {time: 47, coordinates: '-114.233110, 50.876436'},
        {time: 123, coordinates: '-113.696312, 50.805607'},
        {time: 200, coordinates: '-114.587656, 50.390193'},
        {time: 242, coordinates: '-114.190296, 50.201977'},
      ]
    },
    hashtags: ["water", "watershed", "monitoring"]
  },
  { // 11 invasive species and control - converted
    id: "brbc-011f-invasive-species",
    title: "Invasive Species and Control",
    description: 
      "Learn about invasive species in native grasslands, control systems, and the importance of native species from Erin Anderson and Megan Evans as you explore various prairie landscapes.",
    coordinates: [-114.190296, 50.201977],
    category: VideoCategory.BOW_RIVER_360,
    tools: [AssociatedTool.SIMULATOR],
    lessonPlans: [
      { title: "Invasive Species and Control", link: "https://docs.google.com/document/d/1qqVuwjHNtqhLvMsjksYxXIQTULxbah9S" },
    ],
    media: {
      url: "https://www.youtube.com/watch?v=EQXmN_v_2qw&list=PLvZi8sQT8o8PgFddqYnvhY3EJUJx-N6y3&index=7",
      thumbUrl: "https://d2qcvmovr4fv.cloudfront.net/youtube/thumbnails/brbc_1_invasive_species_and_control.png",
      is360: true,
      locations: [
        {time: 0, coordinates: '-114.190296, 50.201977'},
        {time: 74, coordinates: '-112.841994, 50.994639'},
        {time: 122, coordinates: '-114.076243, 50.705873'},
        {time: 175, coordinates: '-114.587656, 50.390193'},
        {time: 229, coordinates: '-113.369413, 51.006424'},
      ]
    },
    hashtags: ["water", "watershed", "monitoring"]
  },
  { // 12 isotopes and climate change - done
    id: "brbc-012f-isotopes-climate",
    title: "Isotopes and Climate Change",
    description: 
      "Learn about how isotopes can be used to monitor climate change and hydrologic functions within a watershed.",
    coordinates: [-114.7036, 50.6158],
    category: VideoCategory.BOW_RIVER_360,
    tools: [AssociatedTool.SIMULATOR],
    lessonPlans: [
      { title: "Isotopes and Climate Change", link: "https://docs.google.com/document/d/1PcI2jRXdspNZqIkJeppDro2Ub0wXz9bi" },
    ],
    media: {
      url: "https://www.youtube.com/watch?v=LebvVpUHCYE&list=PLvZi8sQT8o8PgFddqYnvhY3EJUJx-N6y3&index=4",
      thumbUrl: "https://d2qcvmovr4fv.cloudfront.net/youtube/thumbnails/isotopes.png",
      is360: true,
      locations: [
        {time: 0, coordinates: '-114.7036, 50.6158'},
      ]
    },
    hashtags: ["water", "watershed", "monitoring", "isotopes", "climate"]
  },
]
