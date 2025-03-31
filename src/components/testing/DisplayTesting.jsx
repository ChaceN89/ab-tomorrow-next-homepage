/**
 * @file DisplayTesting.jsx
 * @module DisplayTesting
 * @description A React component that conditionally renders development-only testing components in Next.js.
 * This component checks `process.env.NODE_ENV` to ensure it only renders in development mode.
 * It includes components for testing purposes, such as `TailwindBreakPoints`.
 * 
 * @notes
 * - This component ensures development-only tools do not appear in production builds.
 * - Automatically prefixes the document title with "Dev | " in development.
 * 
 * @author Chace Nielson
 * @created Jan 22, 2025
 * @updated Mar 31, 2025
 */

'use client'

import { useEffect } from 'react'
import TailwindBreakPoints from './TailwindBreakPoints'

export default function DisplayTesting() {
  const isDevelopment = process.env.NEXT_PUBLIC_ENVIRONMENT === 'development'

  useEffect(() => {
    if (isDevelopment && !document.title.startsWith('Dev | ')) {
      document.title = `Dev | ${document.title}`
    }
  }, [isDevelopment])

  if (!isDevelopment) return null

  return <TailwindBreakPoints />
}
