/**
 * @file VideoCategory.jsx
 * @module UI/Resources/VideoCategory
 * @desc Renders a single video category section with a title and a grid of MediaFrames.
 *
 * @props {string} category - The name of the category.
 * @props {Array} videos - The list of videos in this category.
 */


import React from "react";
import { Element } from "react-scroll";

// components
import HexSeparator from "@/components/common/hexSparator/HexSeparator";
import Video from "./Video";

export default function VideoCategory({ category, videos = [] }) {
  if (!videos.length) return null;

  return (
    <Element
      name={category}
      className="bg-tertiary/20 px-6 rounded-xl border-2 border-secondary shadow-2xl overflow-hidden relative"
    >
      <HexSeparator rows={4} hexClass="bg-tertiary-alt/20"/>
      <div className="relative ">
        <h2 className="text-4xl font-bold border-b border-black py-4">{category}</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2  xl:grid-cols-3  gap-4 my-4  overflow-hidden">
          {videos.map((video) => (
            <Video video={video} key={video.id} />
          ))}
        </div>
      </div>
    </Element>
  );
}
