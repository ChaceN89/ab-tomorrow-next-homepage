/**
 * @file MediaFrame.jsx
 * @module UI/Media
 * @desc A reusable media component for displaying either YouTube videos or static images with optional titles, descriptions, loading states, and custom thumbnail overlays.
 *
 * @features
 * - Displays YouTube video embeds with customizable options.
 * - Supports optional image fallback for non-video content.
 * - Shows a loading animation (PulseLoader) until content is fully loaded.
 * - If a `thumbUrl` is provided, it shows a thumbnail overlay with a custom play button before playing the video.
 * - Uses `react-youtube` and `next/image` for optimized media handling.
 * - Fully responsive with Tailwind utility classes and animation support.
 *
 * @props
 * @param {string} src - YouTube video ID or image path.
 * @param {string} [alt] - Alt text for images or thumbnails.
 * @param {string} [title] - Optional title to display above the media.
 * @param {string} [description] - Optional description displayed below the media.
 * @param {string} [className="h-64"] - Additional Tailwind classes for customizing height/layout.
 * @param {boolean} [showWheel=false] - Whether to show the loading spinner animation.
 * @param {string|null} [thumbUrl] - Optional YouTube thumbnail to show before video is played.
 *
 * @dependencies
 * - react-youtube
 * - next/image
 * - react-icons (for play button styling)
 * - PulseLoader (custom visual loading animation)
 *
 * @author Chace Nielson
 * @created Mar 25, 2025
 * @updated Apr 9, 2025
 */

"use client";
import React, { useRef, useState } from "react";
import PulseLoader from "../common/PulseLoader";
import Image from "next/image";
import YouTube from 'react-youtube';
import { FaPlay } from "react-icons/fa";

export default function MediaFrame({
  type = "image",
  src,
  alt = "",
  title = "",
  description = "",
  className = "aspect-video",
  showWheel = false,
  thumbUrl = null,
}) {

  // laod and playing(if video) state
  const [loaded, setLoaded] = useState(false);
  const [videoIsPlaying, setvideoIsPlaying] = useState(false)

  // get access to the video player is its active
  const playerRef = useRef(null);
  const handleReady = (event) => {
    playerRef.current = event.target;
    setLoaded(true);
  };


  // Play the video from the thumbnail click event
  const playVideo = () => {
    setvideoIsPlaying(true);


    // pause all other videos
    const allPlayers = document.querySelectorAll("iframe");
    allPlayers.forEach((player) => {
      if (player !== playerRef.current) {
        const playerInstance = player.contentWindow;
        if (playerInstance) {
          playerInstance.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
        }
      }
    });

    // play this video
    if (playerRef.current) {
      playerRef.current.playVideo();
    }
  }


  return (
    <div className="w-full max-w-2xl mx-auto text-center space-y-2 text-inherit">
      {title && <h3 className="text-xl font-semibold">{title}</h3>}

      <div className={`relative rounded-lg shadow-lg overflow-hidden large-shadow ${className}`}>
        
        <PulseLoader showWheel={type === "video" || showWheel} className={`transition-opacity duration-800  ${loaded ? "opacity-0 pointer-events-none" : "opacity-100"}`} />
     

        {/* if video and this video isn't playing show play button over top of the video */}
        {type=="video" && !videoIsPlaying && (
          <div 
            onClick={playVideo}
            className="absolute inset-0 z-30 cursor-pointer group" 
          >
            {/* Display a thumbnail if it exists  */}
            {thumbUrl && (
              <Image
                src={thumbUrl}
                alt={alt || "Video thumbnail"}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className={`object-cover transition-opacity duration-500 ${
                  loaded ? "opacity-100" : "opacity-0"
                  }`}
              />
            )}

            {/* The click to play visual - can click anywhere */}
            <div 
              className={` absolute inset-0 flex items-end p-4 justify-start transition-opacity duration-100 
                ${loaded ? "opacity-100" : "opacity-0"} 
              `}
            >
              <div 
                className="bg-white/40 backdrop-blur-md group-hover:bg-white text-black px-6 py-3 rounded-full text-lg font-semibold shadow-lg transition border-1 border-black/30"
              >
                <span className="flex items-center gap-2 text-sm md:text-base lg:text-lg ">
                  Play Video <FaPlay  />
                </span>
              </div>
            </div>

          </div>
        )}

        {type === "video" ? (
          <div
            className={`absolute inset-0 w-full h-full transition-opacity duration-500 ${
              loaded ? "opacity-100" : "opacity-0"
            }`}
          >
            <YouTube
              videoId={src}
              onReady={handleReady}
              loading="lazy"
              onPlay={() => setvideoIsPlaying(true)}
              opts={{
                width: "100%",
                height: "100%",
              }}
              className={`w-full h-full transition duration-200 ${
                !thumbUrl || videoIsPlaying ? "opacity-100" : "opacity-0" // hide video until thumbnail is clicked and if no thumbnail
              }`}           
            />
          </div>
        
        ) : (
          <Image
            src={`/${src}`}
            alt={alt}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className={`object-cover transition-opacity duration-500 ${
              loaded ? "opacity-100" : "opacity-0"
            }`}
            onLoad={() => setLoaded(true)}
          />
        )}
      </div>

      {description && <div className="text-left pt-1.5">{description}</div>}
    </div>
  );
}