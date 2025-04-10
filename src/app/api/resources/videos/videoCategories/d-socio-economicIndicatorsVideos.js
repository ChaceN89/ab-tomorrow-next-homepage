/**
 * @file d-socio-economicIndicatorsVideos.js
 * @module Data/Video/SocioEconomicIndicators
 * @desc Contains video data for the Socio-Economic Indicators category in Alberta Tomorrow.
 * 
 * @author Chace Nielson
 * @created Apr 9, 2025
 * @updated Apr 9, 2025
 */

import { VideoCategory, AssociatedTool } from "../videosEnums";

export const socioEconomicIndicatorsVideos = [
  {
    id: "soc-1d-human-population",
    title: "Human Population",
    description: "Maximum population growth is assumed to be a doubling of the population. Learn more about Alberta's projected population and land use impacts.",
    category: VideoCategory.SOCIO_ECONOMIC_INDICATORS,
    tools: [AssociatedTool.SIMULATOR],
    lessonPlans: [],
    media: {
      url: "https://www.youtube.com/watch?v=BOBc-sv-qJw",
      thumbUrl: "https://d2qcvmovr4fv.cloudfront.net/020d0ab8-d1d3-4cc4-b064-ce5c86f1b702/thumbnails/Human Population v2_H264_tumb.0000010.jpg",
      is360: false
    },
    hashtags: ["abpopulation", "exponentialpopulationgrowth", "abgrowth", "landuse"]
  },
  {
    id: "soc-2a-gross-domestic-product",
    title: "Gross Domestic Product",
    description: "GDP is based on land use for oil and gas, forestry, and agriculture. Learn how economic development influences Alberta's GDP.",
    category: VideoCategory.SOCIO_ECONOMIC_INDICATORS,
    tools: [AssociatedTool.SIMULATOR],
    lessonPlans: [],
    media: {
      url: "https://www.youtube.com/watch?v=u9_-Oz9W3Dg",
      thumbUrl: "https://d2qcvmovr4fv.cloudfront.net/e6bbc086-0392-43b3-9a2b-3aa3fef83eea/thumbnails/GDP v2_H264_tumb.0000011.jpg",
      is360: false
    },
    hashtags: ["abgdp", "abeconomy", "landuse"]
  },
  {
    id: "soc-3d-hydrocarbon-production",
    title: "Hydrocarbon Production",
    description: "Hydrocarbon production includes natural gas, oil, bitumen, and coal. Learn how energy production affects land use and the economy.",
    category: VideoCategory.SOCIO_ECONOMIC_INDICATORS,
    tools: [AssociatedTool.SIMULATOR],
    lessonPlans: [],
    media: {
      url: "https://www.youtube.com/watch?v=Bfz4p6dQQcE",
      thumbUrl: "https://d2qcvmovr4fv.cloudfront.net/cd19ded8-4eea-4b3a-941b-a42e65800907/thumbnails/Oil Gas v2_tumb.0000033.jpg",
      is360: false
    },
    hashtags: ["aboilandgas", "hydrocarbons", "landuse", "abeconomy"]
  },
  {
    id: "soc-4d-timber-production",
    title: "Timber Production",
    description: "A value of 100% means all forested land is used for timber. Explore how forestry contributes to the economy and affects land use.",
    category: VideoCategory.SOCIO_ECONOMIC_INDICATORS,
    tools: [AssociatedTool.SIMULATOR],
    lessonPlans: [],
    media: {
      url: "https://www.youtube.com/watch?v=157uaHUOKJw",
      thumbUrl: "https://d2qcvmovr4fv.cloudfront.net/741f8b05-8f79-4994-8234-01592f4688e2/thumbnails/Forestry v2_H264_tumb.0000025.jpg",
      is360: false
    },
    hashtags: ["abforestry", "landuse", "forestry", "abeconomy"]
  },
  {
    id: "soc-5d-agriculture-production",
    title: "Agricultural Production",
    description: "Learn how using the landscape for agriculture contributes to food production and economic development in Alberta.",
    category: VideoCategory.SOCIO_ECONOMIC_INDICATORS,
    tools: [AssociatedTool.SIMULATOR],
    lessonPlans: [],
    media: {
      url: "https://www.youtube.com/watch?v=hh84gk46swY",
      thumbUrl: "https://d2qcvmovr4fv.cloudfront.net/760a93f5-2cff-49e0-843c-3dd759b7232d/thumbnails/Agriculture Production v2_H264_tumb.0000025.jpg",
      is360: false
    },
    hashtags: ["abag", "agriculture", "landuse", "abeconomy"]
  },
  {
    id: "soc-6d-water-consumption",
    title: "Water Consumption",
    description: "Learn how agricultural, settlement, and industrial use affect water consumption and how best practices can reduce demand.",
    category: VideoCategory.SOCIO_ECONOMIC_INDICATORS,
    tools: [AssociatedTool.SIMULATOR],
    lessonPlans: [],
    media: {
      url: "https://www.youtube.com/watch?v=YcibG9eybbc",
      thumbUrl: "https://d2qcvmovr4fv.cloudfront.net/a42e73bb-ede0-415a-b12b-a873782a69a1/thumbnails/Water Consumption v3_H264_tumb.0000039.jpg",
      is360: false
    },
    hashtags: ["abwater", "abwateruse", "wateruse", "landuse"]
  }
];
