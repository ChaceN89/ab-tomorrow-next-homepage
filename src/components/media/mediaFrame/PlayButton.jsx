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
import { FaPlay } from "react-icons/fa";

export default function PlayButton({ videoLoaded, handlePlayClick }) {
  return (
    <div
      className={`absolute inset-0 transition-opacity duration-200 ${
        videoLoaded ? "opacity-100" : "opacity-10"
      }`}
    >
      <div
        className="p-4 flex items-end justify-start inset-0 z-30 cursor-pointer group h-full w-full"
        onClick={handlePlayClick}
      >
        <div className="bg-white/40 backdrop-blur-md group-hover:bg-white text-black px-6 py-3 rounded-full text-lg font-semibold shadow-lg transition border border-black/30">
          <span className="flex items-center gap-2 text-sm md:text-base lg:text-lg">
            Play Video <FaPlay />
          </span>
        </div>
      </div>
    </div>
  );
}
