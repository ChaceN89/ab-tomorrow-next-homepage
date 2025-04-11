/**
 * @file lessonData.js
 * @module Data/lesson-plans/lessonData
 * @desc Contains lesson plan data for the Alberta Tomorrow application. 
 *
 * @author Chace Nielson
 * @created Apr 10, 2025
 * @updated Apr 10, 2025
 */


// 33 teacher resources
/**
 * 
 * sorting
 * - grade
 * - subject
 * 
 * - themes
 * - tags
 * 
 * Associated videos
 * 
 */

// ======= Aggregated Videos =======
export const allVideos = [
  { // Introduction to Glaciers - theme: Glaciers/Watersheds
    title: "Introduction to Glaciers",
    key: "IntroToGlaciers",
    theme: "Glaciers/Watersheds",
    description:
      "In this lesson students will be introduced to the glaciers of Alberta, glacier terminology, meet a glaciologist from the University of Alberta and identify the effects of human activity on glaciers.",
    approximateTime: "40 min",
    provider: ["Alberta Tomorrow", "https://www.albertatomorrow.ca"],
    files: [
      [
        "Glaciers in Alberta (Google Slides)",
        "https://docs.google.com/presentation/d/1rBX6NS-xWfHD3HxAV341q1ZC4wZV5FvNaUdsLi94ptg/view#slide=id.p",
      ],
    ],
    grades: ["5", "7", "8", "9", "10", "11"],
    subjects: ["Science", "Biology"],
    tags: [
      "Wetland Ecosystems",
      "Interactions and Ecosystems",
      "Freshwater and Satlwater Systems",
      "Environmental Chemistry",
      "Energy Flow in Global System",
      "Energy and Matter in the Biosphere",
      "Investigating Matter and Energy",
      "Biology 20",
      "Science 14",
      "water",
      "wetland",
      "glaciers",
      "human activity",
      "terminology",
    ],
    learningOutcomes: [
      "develop an understanding of what glaciologist do",
      "identify glacier location in Alberta",
      "be introduced to glacier vocabulary",
      "learn what Dr. Ali Criscitiello does at the Ice Core Lab",
      "identify the effects of human activity on glaciers",
    ],
    videos: [
      {
        title: "This is the Athabasca glacier",
        description: "",
        media: {
          type: "video",
          url: "https://www.youtube.com/watch?v=KF1JBsGdyZY",
          thumbUrl:
            "https://d2qcvmovr4fv.cloudfront.net/youtube/thumbnails/thisistheathabascaglacier.jpg",
        },
      },
      {
        title: "Where do glaciers form",
        description: "",
        media: {
          type: "video",
          url: "https://www.youtube.com/watch?v=Y8IaKMp4dAk",
          thumbUrl:
            "https://d2qcvmovr4fv.cloudfront.net/youtube/thumbnails/wheredoglaciersform.jpg",
        },
      },
      {
        title: "How Glaciers Move",
        description: "",
        media: {
          type: "video",
          url: "https://www.youtube.com/watch?v=Iy6sdst_Nnc",
          thumbUrl:
            "https://d2qcvmovr4fv.cloudfront.net/youtube/thumbnails/howglaciersmove.jpg",
        },
      },
      {
        title: "Colour of the Ice",
        description: "",
        media: {
          type: "video",
          url: "https://www.youtube.com/watch?v=7Ld_jQCuJzE",
          thumbUrl:
            "https://d2qcvmovr4fv.cloudfront.net/youtube/thumbnails/coloroftheice.jpg",
        },
      },
      {
        title: "Seasonal Change on the Glacier",
        description: "",
        media: {
          type: "video",
          url: "https://www.youtube.com/watch?v=KCKew0PiqOc",
          thumbUrl:
            "https://d2qcvmovr4fv.cloudfront.net/youtube/thumbnails/seasonalchangeontheglacier.jpg",
        },
      },
      {
        title: "What is a Moraine?",
        description: "",
        media: {
          type: "video",
          url: "https://www.youtube.com/watch?v=nFzRuDBiB28",
          thumbUrl:
            "https://d2qcvmovr4fv.cloudfront.net/youtube/thumbnails/whatisamoraine.jpg",
        },
      },
      {
        title: "How big is the Athabasca Glacier?",
        description: "",
        media: {
          type: "video",
          url: "https://www.youtube.com/watch?v=qq7vwd_ahzU",
          thumbUrl:
            "https://d2qcvmovr4fv.cloudfront.net/youtube/thumbnails/howbigistheathabascaglacier.jpg",
        },
      },
      {
        title: "How crevasses form",
        description: "",
        media: {
          type: "video",
          url: "https://www.youtube.com/watch?v=QbotXyLZXiQ",
          thumbUrl:
            "https://d2qcvmovr4fv.cloudfront.net/youtube/thumbnails/howcrevassesform.jpg",
        },
      },
      {
        title: "Striations on the Rocks",
        description: "",
        media: {
          type: "video",
          url: "https://www.youtube.com/watch?v=sKF4M0v1GdM",
          thumbUrl:
            "https://d2qcvmovr4fv.cloudfront.net/youtube/thumbnails/striationsontherocks.jpg",
        },
      },
      {
        title: "Are people affecting the glaciers?",
        description: "",
        media: {
          type: "video",
          url: "https://www.youtube.com/watch?v=Ns7BiGb3cMQ",
          thumbUrl:
            "https://d2qcvmovr4fv.cloudfront.net/youtube/thumbnails/arepeopleaffectingtheglaciers.jpg",
        },
      },
      {
        title: "Growth and Attrition",
        description: "",
        media: {
          type: "video",
          url: "https://www.youtube.com/watch?v=uATZEvCjoT4",
          thumbUrl:
            "https://d2qcvmovr4fv.cloudfront.net/youtube/thumbnails/growthandattrition.jpg",
        },
      },
      {
        title: "Why Should We Protect Glaciers?",
        description: "",
        media: {
          type: "video",
          url: "https://www.youtube.com/watch?v=LKtGm_ZxZyU",
          thumbUrl:
            "https://d2qcvmovr4fv.cloudfront.net/youtube/thumbnails/whyshouldweprotectglaciers.jpg",
        },
      },
    ],
    relatedUrls: [
      [
        "U of A Ice Core Lab",
        "https://www.ualberta.ca/science/research-and-teaching/research/ice-core-archive/index.html",
      ],
    ],
  },
];