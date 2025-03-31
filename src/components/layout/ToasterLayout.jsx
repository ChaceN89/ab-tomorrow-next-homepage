/**
 * @file ToasterLayout.jsx
 * @module ToasterLayout
 * @desc Global Toaster Layout Component for Next.js. Adjusts position based on screen width.
 * 
 * @see {@link https://react-hot-toast.com/ | React Hot Toast Documentation}
 * 
 * @created Mar 18, 2022
 * @updated Mar 31, 2025
 */

'use client'

import React, { useState, useEffect } from 'react'
import { Toaster } from "react-hot-toast"

export default function ToasterLayout() {
  const [isSm, setIsSm] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsSm(window.innerWidth >= 640)
    }

    handleResize() // Set on first load
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <Toaster
      position={isSm ? "bottom-right" : "bottom-center"}
      reverseOrder={false}
      toastOptions={{
        style: {
          backgroundColor: "var(--color-primary-alt-transparent)", 
          border: "2px solid var(--color-primary)",
          borderRadius: "12px", 
          padding: "12px 4px", 
          boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.5)", 
          backdropFilter: "blur(20px)",
        },
      }}
    />
  )
}
