/**
 * @file VideoDisplay.jsx
 * @module UI/Resources/VideoDisplay
 * @desc Fetches and displays video content from the API, grouped by category.
 *       Displays each category with its respective video list.
 * 
 * @author Chace Nielson
 * @created Apr 1, 2025
 * @updated Apr 1, 2025
 */

"use client";

import React, { useEffect, useState } from "react";
import MediaFrame from "@/components/media/MediaFrame";

export default function VideoDisplay() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchVideos() {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_SITE_URL}/api/resources/videos`
        );

        console.log("📺 Fetching videos from API...");
        if (!res.ok) {
          throw new Error("Failed to fetch videos");
        }
        const data = await res.json();
        setVideos(data);
      } catch (error) {
        console.error("❌ Failed to load videos:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchVideos();
  }, []);

  const groupedVideos = groupVideosByCategory(videos);

  if (loading) return <div>Loading videos...</div>;

  return (
    <div className="space-y-12">
      {Object.keys(groupedVideos).length === 0 && (
        <p>No videos available.</p>
      )}

      {Object.entries(groupedVideos).map(([category, vids]) => (
        <div key={category} className="space-y-6 bg-tertiary-alt/20 p-4 rounded-3xl">
          <h2 className="text-2xl font-bold border-b border-blackpb-2">
            {category}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {vids.map((video) => (
              <MediaFrame
                key={video.id}
                type="video"
                src={extractYouTubeId(video.media.url)}
                title={video.title}
                description={video.description}
                className="h-80"
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

// === Utilities ===
function extractYouTubeId(url) {
  const match = url.match(/(?:\?v=|\/embed\/|\.be\/)([a-zA-Z0-9_-]{11})/);
  return match ? match[1] : "";
}

function groupVideosByCategory(videos) {
  return videos.reduce((acc, video) => {
    const category = video.category || "Uncategorized";
    if (!acc[category]) acc[category] = [];
    acc[category].push(video);
    return acc;
  }, {});
}
