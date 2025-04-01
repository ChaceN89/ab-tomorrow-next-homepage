/**
 * @file route.js
 * @module API/Videos
 * @desc API endpoint for fetching video data. Supports optional filtering by category or associated tool.
 *
 * @author Chace Nielson
 * @created Apr 1, 2025
 * @updated Apr 1, 2025
 */

import { NextResponse } from "next/server";
import { allVideos } from "./videoData";

export async function GET(request) {
  const { searchParams } = new URL(request.url);

  const category = searchParams.get("category");
  const tool = searchParams.get("tool");

  console.log("➡️ Incoming request to /api/videos");
  console.log("Category Filter:", category);
  console.log("Tool Filter:", tool);

  let filteredVideos = allVideos;

  // Filter by category
  if (category) {
    filteredVideos = filteredVideos.filter(
      (video) => video.subtype?.toLowerCase() === category.toLowerCase()
    );
    console.log("Filtered by category:", filteredVideos.length);
  }

  // Filter by tool
  if (tool) {
    filteredVideos = filteredVideos.filter(
      (video) =>
        video.tools &&
        video.tools.some((t) => t.toLowerCase() === tool.toLowerCase())
    );
    console.log("Filtered by tool:", filteredVideos.length);
  }

  console.log("✅ Returning videos:", filteredVideos.length);

  return NextResponse.json(filteredVideos, {
    headers: {
      "Access-Control-Allow-Origin": "*", // Allow CORS in development
    },
  });
}
