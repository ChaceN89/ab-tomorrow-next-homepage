/**
 * @file SplashScreen.jsx
 * @module SplashScreen
 * @desc Displays a loading state with a logo while the site content is being loaded, or an error message.
 *
 * @author Chace Nielson
 * @created Mar 15, 2025
 * @updated Mar 16, 2025 by Chace Nielson
 */

import { FiAlertCircle } from "react-icons/fi"; // Import error icon from react-icons
import HexSeparator from '@/components/common/hexSparator/HexSeparator';
import Image from "next/image";
import './SplashScreen.styles.css'; // Import custom CSS for the splash screen

export default function SplashScreen({ errorMsg = false, errorText = null, errorLocation = null }) {
  return (
    <div className="flex flex-col justify-between min-h-screen  overflow-hidden z-[99999] fixed w-screen h-screen ">
      
      {/* Top Hex Separator */}
      <HexSeparator 
        rows={10}
        hexClass="bg-secondary-alt opacity-15"
        bottom={false}
      />

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center flex-grow bg-primary">
        <Image
          src="/site-logos/splash.png"
          alt="Site Logo"
          width={128}
          height={128}
          priority
          style={{ aspectRatio: '1 / 1', objectFit: 'contain' }}
          className="mb-4"
        />
        <div className="text-xl text-gray-600 text-center">
          {errorMsg ? (
            <div className="flex flex-col items-center">
              <FiAlertCircle className="w-12 h-12 mb-2" />
              <span className="text-gray-600">{errorText}</span>
              {errorLocation && (
                <span className="text-sm text-gray-200 mt-2">📍 {errorLocation}</span>
              )}
            </div>
          ) : (
            <span className="hex-dots ml-2 flex gap-1 items-center justify-center">
              <span className="hex hex1" />
              <span className="hex hex2" />
              <span className="hex hex3" />
              <span className="hex hex4" />
            </span>
          )}
        </div>
      </div>

      {/* Bottom Hex Separator */}
      <HexSeparator 
        rows={10}
        hexClass="bg-secondary-alt opacity-15"
        bottom={true}
      />
    </div>
  );
}
