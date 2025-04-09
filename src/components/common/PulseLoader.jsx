/**
 * @file PulseLoader.jsx
 * @module PulseLoader
 * @desc A simple animated gradient pulse loader used as a visual placeholder while content is loading.
 *       Features a soft blurred gradient effect with smooth pulsing animation.
 * 
 * @author Chace Nielson
 * @created Mar 31, 2025
 * @updated Mar 31, 2025
 * 
 * @notes
 * - Uses Tailwind CSS gradients and blur utilities.
 * - No interactive logic; purely visual.
 * - Designed for use behind content placeholders. - ex {isLoading && <PulseLoader />}
 */

export default function PulseLoader({ showWheel = false, className = "" }) {
  return (
    <div className={`absolute inset-0 transition-opacity duration-800 ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-accent/40 via-tertiary/40 to-primary/40 blur-3xl animate-pulse" />
      {showWheel && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 border-4 border-t-transparent border-accent rounded-full animate-spin"></div>
        </div>
      )}
    </div>
  );
}

