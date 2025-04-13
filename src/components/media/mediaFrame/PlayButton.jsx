/**
 * @file PlayButton.jsx
 * @module UI/Media/PlayButton
 * @desc A styled overlay play button used to trigger YouTube video playback inside the MediaFrame component.
 *
 * @features
 * - Visually indicates video is ready to play.
 * - Triggers a playback handler when clicked.
 * - Fully responsive and animated.
 *
 * @props
 * @param {boolean} videoLoaded - Whether the video iframe is ready.
 * @param {Function} handlePlayClick - Function to call when the button is clicked.
 *
 * @dependencies
 * - react-icons (FaPlay)
 *
 * @author Chace Nielson
 * @created Apr 12, 2025
 * @updated Apr 12, 2025
 */

import React from "react";
import { FaPlay, FaCloudDownloadAlt } from "react-icons/fa";


export default function PlayButton({ videoLoaded, handlePlayClick, canPlayVideo, preload }) {
  return (
    <div
      className={`absolute inset-0 `}
    >
      <div
        className="p-4 flex items-end justify-start inset-0 z-30 cursor-pointer group h-full w-full"
        onClick={handlePlayClick}
      >
        <div className={`bg-white/10 group-hover:bg-black/50 text-black group-hover:text-white 
        border-black/40 group-hover:border-white/20
        backdrop-blur-lg


              ${preload && videoLoaded ? "opacity-100" : preload && !videoLoaded ? "opacity-0" : "opacity-100"}


         px-6 py-3 rounded-full font-semibold shadow-lg transition border 
         `}>
          
          
          <div className="text-sm md:text-base lg:text-lg">
            
          {canPlayVideo ? (
  videoLoaded ? (
    <span className="flex items-center gap-2">
      Play Video <FaPlay />
    </span>
  ) : (
    <span className="flex items-center gap-2 animate-pulse">
      Loading Video... <FaCloudDownloadAlt />
    </span>
  )
) : (
  <span className="flex items-center gap-2">
    Load Video <FaCloudDownloadAlt />
  </span>
)}



            {/* {canPlayVideo ?  // if the video can be played
              <span className={`${(videoLoaded) ? "opacity-100" : "opacity-0"} flex items-center gap-2  `}>
                Play Video <FaPlay />  
              </span> 
            : 
              <span className=" flex items-center gap-2">
                Load Video <FaCloudDownloadAlt />                
              </span>
            } */}
          </div>
        </div>
      </div>
    </div>
  );
}
