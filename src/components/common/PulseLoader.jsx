/**
 * @file PulseLoader.jsx
 * @module PulseLoader
 * @desc A simple animated gradient pulse loader used as a visual placeholder while content is loading.
 *       Features a soft blurred gradient effect with smooth pulsing animation.
 * 
 * has class name arguments for custom styling.
 * has custom loading text is required.
 * can show a spinner wheel if showWheel is true.
 * 
 * @author Chace Nielson
 * @created Mar 31, 2025
 * @updated Apr 9, 2025
 * 
 * @notes
 * - Uses Tailwind CSS gradients and blur utilities.
 * - No interactive logic; purely visual.
 * - Designed for use behind content placeholders. - ex {isLoading && <PulseLoader />}
 */

export default function PulseLoader({ showWheel = false, className = "", loadingText="" }) {
  return (
    <div className={`absolute inset-0 transition-opacity duration-800 ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-accent/40 via-tertiary/40 to-primary/40 blur-3xl animate-pulse" />
      {showWheel && (
        <div className="absolute inset-0 flex flex-col gap-4 items-center justify-center">
          <div className="flex items-center justify-center f">
            <div className="w-16 h-16 border-4 border-t-transparent border-accent rounded-full animate-spin"/>
          </div>
          <span>{loadingText}</span>
        </div>
      )}
    </div>
  );
}

