/**
 * @file VideoCategory.jsx
 * @module UI/Resources/VideoCategory
 * @desc Renders a single video category section with a title and a grid of MediaFrames.
 *
 * @props {string} category - The name of the category.
 * @props {Array} videos - The list of videos in this category.
 */

import { extractYouTubeId } from "@/utils/videoResouceUtils";


import React from "react";
import { Element } from "react-scroll";
import MediaFrame from "@/components/media/MediaFrame";

export default function VideoCategory({ category, videos = [] }) {
  if (!videos.length) return null;

  return (
    <Element
      name={category}
      className="space-y-6 bg-tertiary-alt/20 p-6 rounded-3xl border-2 border-secondary shadow-2xl"
    >
      <h2 className="text-2xl font-bold border-b border-black pb-2">{category}</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
        {videos.map((video) => (
          <div key={video.id} className="flex flex-col h-full">
            <div className="min-h-[3.5rem] flex items-center justify-center text-center px-2 bg-primary/10 rounded-t-lg">
              <h3 className="text-lg font-semibold">{video.title}</h3>
            </div>
            <MediaFrame
              type="video"
              src={extractYouTubeId(video.media.url)}
              description={video.description}
              className="h-80"
            />
          </div>
        ))}
      </div>
    </Element>
  );
}
