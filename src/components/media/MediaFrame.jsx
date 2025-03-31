/**
 * @file Media.jsx
 * @module UI/Media
 * @desc A reusable YouTube iframe component with optional title and description.
 *
 * @props {string} src - The YouTube embed URL (e.g., https://www.youtube.com/embed/xyz).
 * @props {string} [title] - Optional title for the iframe and visual heading.
 * @props {string} [description] - Optional text displayed below the iframe.
 *
 * @author Chace Nielson
 * @created Mar 25, 2025
 * @updated Mar 25, 2025
 */

import React from 'react'
import { Blurhash } from 'react-blurhash'

export default function MediaFrame({ 
  type = 'image',          // 'image' or 'video'
  src,                     // media source (YouTube video ID or image URL)
  alt = '',                // for images
  title = '',              // title above media
  description = '',        // description below
  blurhash = '',           // optional for images
  className = 'h-64',      // tailwind height for media box
}) {
  return (
    <div className="w-full max-w-2xl mx-auto text-center space-y-2 text-inherit ">
      {title && <h3 className="text-xl font-semibold   ">{title}</h3>}

      <div className={`rounded-lg shadow-lg overflow-hidden large-shadow ${className}`}>
        {type === 'video' ? (
          <iframe
            src={`https://www.youtube.com/embed/${src}`}
            title={alt}
            allowFullScreen
            className="w-full h-full "
          />
        ) : (
          <>
            {blurhash && (
              <Blurhash
                hash={blurhash}
                width="100%"
                height="100%"
                resolutionX={32}
                resolutionY={32}
                punch={1}
              />
            )}
            <img
              src={src}
              alt={alt}
              className={`w-full h-full object-cover ${blurhash ? 'absolute inset-0 opacity-0 transition-opacity duration-500' : ''}`}
              onLoad={(e) => {
                if (blurhash) e.target.previousSibling.style.opacity = 0
                e.target.style.opacity = 1
              }}
            />
          </>
        )}
      </div>
      {description && <div className=" text-left pt-1.5 ">{description}</div>}
    </div>
  )
}
