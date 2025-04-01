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
 * @dependencies
 * - React
 * 
 * @notes
 * - Uses Tailwind CSS gradients and blur utilities.
 * - No interactive logic; purely visual.
 * - Designed for use behind content placeholders.
 */
import React from 'react'

export default function PulseLoader() {
  return (
      <div className="absolute inset-0 bg-gradient-to-br from-accent-alt via-tertiary to-primary blur-3xl animate-pulse overflow-hidden" /> 

  )
}
