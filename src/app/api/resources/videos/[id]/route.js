/**
 * @file [id]/route.js
 * @module API/Videos/Single
 * @desc API endpoint for fetching a single video by ID.
 *
 * @author Chace Nielson
 * @created Apr 11, 2025
 * @updated Apr 11, 2025
 */

import { NextResponse } from "next/server";
import { allVideos } from "../videoData";

/**
 * GET /api/videos/[id]
 */
export async function GET(_, { params }) {
  const { id } = params;

  console.log("➡️ Fetching video by ID:", id);

  const video = allVideos.find((v) => String(v.id) === String(id));

  if (!video) {
    console.warn("❌ Video not found:", id);
    return NextResponse.json(
      { error: `Video with ID ${id} not found` },
      { status: 404 }
    );
  }

  console.log("✅ Found video:", video.title);
  return NextResponse.json(video);
}
