/**
 * @file BackgroundWrapper.jsx
 * @module ui-utils/BackgroundWrapper
 * @desc Reusable wrapper component for dynamic, responsive background image sections.
 *       Supports progressive image loading with blur transition from low-res to high-res,
 *       and optional fixed background positioning for parallax-like effects.
 *
 * @props {string} background - URL to the high-resolution background image.
 * @props {string} backgroundSm - URL to the blurred low-resolution fallback image.
 * @props {boolean} [fixed=false] - Whether to fix the background in place.
 * @props {string} [className] - Additional Tailwind or custom classes for outer wrapper.
 * @props {ReactNode} children - Content to render above the background.
 * 
 * @example
 *   <BackgroundWrapper 
      background={heroBanner} 
      backgroundSm={heroBannerSm} 
      className=" text-white flex justify-center items-end text-center h-[80vh] lg:h-screen " // specifc styles for this section
    >
      content
    </BackgroundWrapper>
    <BackgroundWrapper 
      background={heroBanner} 
      backgroundSm={heroBannerSm} 
      fixed // fixed background image
      className="text-white flex justify-center items-end text-center h-[80vh] lg:h-screen " // specifc styles for this section
    >
    content
    </BackgroundWrapper>
 *
 * @author Chace Nielson
 * @created Mar 24, 2025
 * @updated Apr 1, 2025
 */
"use client";
import React, { useState, useEffect } from 'react';

export default function BackgroundWrapper({ background, backgroundSm, children, className = "", fixed = false, blur = false }) {
  
  // Load state for the background image (high-res)
  const [loaded, setLoaded] = useState(false);

  // Preload the high-res image and set loaded state when complete (use the low-res image as a placeholder)
  useEffect(() => {
    const img = new Image();
    img.src = background;
    img.onload = () => setLoaded(true);
  }, [background]);


  // states for screen size and allowing fixed background
  const [screenSize, setScreenSize] = useState({
    allowFixed: false,
    isLargeScreen: false
  });
  
  // check screen size and set allowFixed and isLargeScreen states
  useEffect(() => {
    const checkScreen = () => {
      setScreenSize({
        allowFixed: window.innerWidth >= 640,
        isLargeScreen: window.innerWidth >= 1024
      });
    };
    checkScreen();
    window.addEventListener('resize', checkScreen);
    return () => window.removeEventListener('resize', checkScreen);
  }, []);


  // Set background attachment and position based on fixed prop and screen size
  const backgroundAttachment = fixed && screenSize.allowFixed ? 'fixed' : 'scroll';
  const backgroundPosition = screenSize.isLargeScreen && fixed ? 'calc(50% - 7rem) center' : 'center';


  // Base background styles
  const baseBackgroundStyle = {
    backgroundAttachment,
    backgroundSize: 'cover',
    backgroundPosition,
    backgroundRepeat: 'no-repeat',
    zIndex: 0,
    filter: blur ? 'blur(2px)' : 'none'
  };

  return (
    <div className={`${className} relative `}>
      {/* Blurry low-res background */}
      {backgroundSm && (
        <div
          className="absolute inset-0 filter  transition-opacity duration-1200"
          style={{
            ...baseBackgroundStyle,
            backgroundImage: `url(${backgroundSm})`,
            opacity: loaded ? 0 : 1,
            filter: 'blur(2px)',
          }}
        />
      )}

      {/* Sharp high-res background */}
      <div
        className="absolute inset-0 transition-opacity duration-1200"
        style={{
          ...baseBackgroundStyle,
          backgroundImage: `url(${background})`,
          opacity: loaded ? 1 : 0
        }}
      />

      {/* Foreground content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
