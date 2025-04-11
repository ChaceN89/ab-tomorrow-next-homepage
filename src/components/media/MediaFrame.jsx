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
import React, { useEffect, useRef, useState } from "react";
import PulseLoader from "../common/PulseLoader";
import Image from "next/image";
import YouTube from 'react-youtube';
import { FaPlay } from "react-icons/fa";
import { useInView } from "react-intersection-observer";


export default function MediaFrame({
  type = "image",
  imgSrc = "",
  videoSrc= "",
  alt = "",
  title = "",
  description = "",
  className = "aspect-video",
  showWheel = false,
}) {

  const { ref, inView } = useInView({
    triggerOnce: true,     // only trigger once
    threshold: 0.2,        // 20% of the component must be visible
  });

  // laod and playing(if video) state
  const [imgLoaded, setImgLoaded] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);

  const [videoIsPlaying, setvideoIsPlaying] = useState(false)

  // get access to the video player is its active
  const playerRef = useRef(null);
  const handleVideoReady = (event) => {
    playerRef.current = event.target;
    setVideoLoaded(true);
  };


  //pause all other videos on screen
  const pauseOtherVideos = () => {
    const allPlayers = document.querySelectorAll("iframe.yt-frame");
  
    allPlayers.forEach((player) => {
      // Skip the current video by comparing videoId
      if (player.src.includes(videoSrc)) return;
  
      const playerInstance = player.contentWindow;
      if (playerInstance) {
        playerInstance.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
      }
    });
  };
  

  // function to play the video and pause all other videos
  const myOnPlay = () => {
    setvideoIsPlaying(true);
    pauseOtherVideos();
  }

  // Play the video from the thumbnail click event
  const playVideo = () => {
    if (type !== "video") return

    if (!playerRef.current) return

    myOnPlay();
      
    // try to play video
    if (playerRef.current && typeof playerRef.current.playVideo === "function") {
      playerRef.current.playVideo();
    } else {
      console.warn("🎥 YouTube player not ready yet. Retrying in 300ms...");
      setTimeout(() => {
        if (playerRef.current && typeof playerRef.current.playVideo === "function") {
          playerRef.current.playVideo();
        } else {
          console.error("❌ Failed to play video: player is still null.");
        }
      }, 300);
    }
  };

  // Pause the video when the component unmounts
  useEffect(() => {
    return () => {
      // Pause the video if it's active
      if (playerRef.current?.pauseVideo) {
        try {
          playerRef.current.pauseVideo();
        } catch (err) {
          console.warn("🎬 Failed to pause video on unmount:", err);
        }
      }
  
      // Also nullify the ref for safety
      playerRef.current = null;
    };
  }, []);

  if (!imgSrc && !videoSrc) {
    return null;
  }

  return(
    <div className="w-full max-w-5xl mx-auto text-center space-y-2 text-inherit">
      {title && <h3 className="text-xl font-semibold">{title}</h3>}
      
      <div ref={ref} className={`relative rounded-lg shadow-lg overflow-hidden small-shadow ${className}`}>
        
        {inView && (<>
          <PulseLoader showWheel={type === "video" || showWheel} className={`transition-opacity duration-800  ${imgLoaded || videoLoaded ? "opacity-0 pointer-events-none" : "opacity-100"}`} />
      

          {/* Load img if image or load it as thumnail if video is the type */}
          {(
            type == "image" ||  // if an image 
            (type == "video" && imgSrc &&  // or its a video with a thumbnail
                (!videoLoaded || !videoIsPlaying) // and if its a video with a thumbn ail its either not loaded or not playing
            )
          ) &&   
            <Image
              src={imgSrc}
              alt={alt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className={`object-cover transition-opacity duration-500 ${
                imgLoaded ? "opacity-100" : "opacity-0"
                }`}
              onLoad={() => setImgLoaded(true)}
            />
          
          }

          {/* Video component */}
          {type == "video" &&
            // <div className="bg-black">
              <YouTube
                videoId={videoSrc}
                onReady={handleVideoReady}
                loading="lazy"
                iframeClassName="yt-frame"
                onPlay={() => myOnPlay() }
                opts={{
                  width: "100%",
                  height: "100%",
                }}
                className={`w-full h-full transition duration-200 ${
                  (videoIsPlaying || !imgSrc)  ? "opacity-100" : "opacity-0" // if video is playing or no thumbnail show it
                }`}           
              />
          }  
              
          {/* Button over video to trigger playing */}
          {(type=="video" && !videoIsPlaying ) &&
            <div  className={`absolute inset-0 transition-opacity duration-200  ${videoLoaded ? "opacity-100" : "opacity-10"}`} >
              <div 
                className="p-4 flex items-end justify-start  inset-0 z-30 cursor-pointer group h-full w-full " 
                onClick={playVideo} 
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
          }
        </>)}       
      </div>

      {description && <div className="text-left pt-1.5">{description}</div>}
    </div>
  )
}