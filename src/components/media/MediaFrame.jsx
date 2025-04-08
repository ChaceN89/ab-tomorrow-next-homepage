/**
 * @file MediaFrame.jsx
 * @module UI/Media
 * @desc A reusable media component to display YouTube videos or images with optional title, description, and pulse loader.
 *
 * @props {string} src - YouTube video ID or image path.
 * @props {string} [alt] - Alt text for images.
 * @props {string} [title] - Optional title above the media.
 * @props {string} [description] - Optional description below.
 * @props {string} [className] - Additional Tailwind classes for media container.
 *
 * @author Chace Nielson
 * @created Mar 25, 2025
 * @updated Apr 1, 2025
 */
"use client";

import React, { useState } from "react";
import PulseLoader from "../common/PulseLoader";
import Image from "next/image";
import YouTube from 'react-youtube';

export default function MediaFrame({
  type = "image",
  src,
  alt = "",
  title = "",
  description = "",
  className = "h-64",
  showWheel = false,
}) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="w-full max-w-2xl mx-auto text-center space-y-2 text-inherit">
      {title && <h3 className="text-xl font-semibold">{title}</h3>}

      <div className={`relative rounded-lg shadow-lg overflow-hidden large-shadow ${className}`}>
        {!loaded && <PulseLoader showWheel={type === "video" || showWheel}/>}

        {type === "video" ? (
          <YouTube
            videoId={src}
            onReady={()=>setLoaded(true)}
            loading="lazy"
            opts={{
              width: "100%",
              height: "100%",
              playerVars: {
                modestbranding: 1,
                rel: 0,
              },
            }}
            className="w-full h-full"
          />
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
