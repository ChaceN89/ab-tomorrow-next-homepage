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

// utils
import { extractYouTubeId } from "@/utils/videoResouceUtils";

// components
import MediaFrame from "@/components/media/MediaFrame";
import HexSeparator from "@/components/common/hexSparator/HexSeparator";

import { MdHexagon } from "react-icons/md";

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


{/*         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4 my-4">*/}
        <div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 gap-4 my-4  overflow-hidden">
          {videos.map((video) => (
            <div key={video.id} className="flex flex-col h-full justify-end gap-2">
              <div className="flex flex-col justify-start text-start px-1">
                <h3 className="text-lg font-semibold">{video.title}</h3>
              </div>
              <MediaFrame
                type="video"
                src={extractYouTubeId(video.media.url)}
                // className="aspect-video"
                thumbUrl={video.media.thumbUrl}
              />
              <div className="h-28 shadow-md rounded-b-lg bg-white/60 -mt-2 overflow-hidden">

              <div className="h-24 overflow-y-auto custom-scrollbar px-1 pt-4 flex">
                  <p className="text-sm text-gray-500 px-1 ">{video.description}</p>

                  {video.lessonPlans.length > 0 && (
                    <div className="w-1/4 flex-shrink-0 flex flex-col gap-1 pr-2">
                      <div className="text-sm font-semibold underline">Lesson Plans</div>
                      {video.lessonPlans.map((plan, index) => (
                        <a 
                        key={index}
                        href={plan.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-xs text-blue-600 hover:underline flex items-start gap-1"
                      >
                        <MdHexagon size={6} className="mt-1.5 shrink-0" />
                        {plan.title || `Lesson Plan ${index + 1}`}
                      </a>
                    ))}
                    </div>
                  )}
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </Element>
  );
}
