import React from 'react'

export default function PulseLoader() {
  return (
    <div
      className="absolute inset-0 bg-gradient-to-br from-gray-700 via-gray-300 to-primary-alt-transparent blur-sm  animate-pulse"
      style={{ filter: "blur(8px)" }}
    />   
  )
}
