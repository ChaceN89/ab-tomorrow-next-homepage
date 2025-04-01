// app/api/videos/route.js

import { NextResponse } from 'next/server';

export async function GET() {
  const videos = [
    {
      id: 1,
      title: "The Story of Alberta’s Ecosystems",
      description: "A short documentary explaining Alberta’s unique biomes.",
      link: "https://www.youtube.com/watch?v=example1"
    },
    {
      id: 2,
      title: "Climate Change & Alberta’s Future",
      description: "An educational video about climate change impact.",
      link: "https://www.youtube.com/watch?v=example2"
    }
  ];

  return NextResponse.json(videos);
}
