/**
 * @file Tooltip.jsx
 * @module Tooltip
 * @desc React component that displays a tooltip with adjustable position.
 * 
 * @author Chace Nielson
 * @created Jul 28, 2024
 * @updated Mar 31, 2025
 */

'use client'

import React, { useState, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'

const Tooltip = ({ text, openDuration = 1000, className = '', children }) => {
  const [hovered, setHovered] = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)
  const [tooltipStyle, setTooltipStyle] = useState({ left: 0, top: 0, visibility: 'hidden' })
  const tooltipRef = useRef(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true) // client-only
  }, [])

  // Handle tooltip position
  const handleMouseMove = (event) => {
    const viewportWidth = window.innerWidth
    const viewportHeight = window.innerHeight
    const tooltipRect = tooltipRef.current?.getBoundingClientRect() || { width: 0, height: 0 }

    let newStyle = {
      left: event.clientX,
      top: event.clientY,
      visibility: showTooltip ? 'visible' : 'hidden',
    }

    if (newStyle.left + tooltipRect.width > viewportWidth) {
      newStyle.left = event.clientX - tooltipRect.width - 10
    }
    if (newStyle.top + tooltipRect.height > viewportHeight) {
      newStyle.top = event.clientY - tooltipRect.height - 10
    }

    setTooltipStyle(newStyle)
  }

  // Show after delay
  useEffect(() => {
    if (hovered) {
      const timer = setTimeout(() => {
        setShowTooltip(true)
        setTooltipStyle((prev) => ({ ...prev, visibility: 'visible' }))
      }, openDuration)
      return () => clearTimeout(timer)
    } else {
      setShowTooltip(false)
      setTooltipStyle((prev) => ({ ...prev, visibility: 'hidden' }))
    }
  }, [hovered, openDuration])

  return (
    <div
      onMouseEnter={(e) => {
        setHovered(true)
        handleMouseMove(e)
      }}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={handleMouseMove}
    >
      {children}
      {mounted &&
        createPortal(
          <div
            ref={tooltipRef}
            className={`fixed inline-block p-2 px-3
              bg-secondary border-2 border-secondary-alt rounded-lg 
              max-w-52 text-center text-sm text-white
              transition-opacity duration-300 ${showTooltip ? 'opacity-100' : 'opacity-0'}
              ${className}`}
            style={{ ...tooltipStyle, zIndex: 9999 }}
          >
            {text}
          </div>,
          document.body // <- this is better in Next.js, no need for tooltip-root div
        )}
    </div>
  )
}

export default Tooltip
