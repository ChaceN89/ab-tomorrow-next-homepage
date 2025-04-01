/**
 * @file VideoDisplay.jsx
 * @module UI/Resources/VideoDisplay
 * @desc Fetches and displays video content from the API, grouped or listed.
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
        const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/resources/videos` || "http://localhost:3000/api/resources/videos");

        console.log("Fetching videos from API...");
        if (!res.ok) {
          throw new Error("Failed to fetch videos");
        }
        const data = await res.json();
        setVideos(data);
      } catch (error) {
        console.error("Failed to load videos:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchVideos();
  }, []);

  if (loading) return <div>Loading videos...</div>;

  return (
    <div className="space-y-10">
      {videos.length === 0 && <p>No videos available.</p>}

      {videos.map((video) => (
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
  );
}

// === Utility ===
function extractYouTubeId(url) {
  const match = url.match(/(?:\?v=|\/embed\/|\.be\/)([a-zA-Z0-9_-]{11})/);
  return match ? match[1] : "";
}
