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
 * @updated Mar 25, 2025
 */
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

  // check if the screen is large enough to apply fixed positioning
  const allowFixed = window.innerWidth >= 640; // sm breakpoint
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  // Check screen size on mount and resize
  useEffect(() => {
    const checkScreen = () => setIsLargeScreen(window.innerWidth >= 1024); // lg breakpoint
    checkScreen();
    window.addEventListener('resize', checkScreen);
    return () => window.removeEventListener('resize', checkScreen);
  }, []);

  // Set background attachment and position based on fixed prop and screen size - specific to this app is the calc(50% - 7rem) center related to width of the partner banner
  const backgroundAttachment = fixed && allowFixed ? 'fixed' : 'scroll';
  const backgroundPosition = isLargeScreen && fixed ? 'calc(50% - 7rem) center' : 'center';

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
          className="absolute inset-0 filter blur-md scale-105 transition-opacity duration-1200"
          style={{
            ...baseBackgroundStyle,
            backgroundImage: `url(${backgroundSm})`,
            opacity: loaded ? 0 : 1
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
