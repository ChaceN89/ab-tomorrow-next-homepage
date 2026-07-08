/**
 * @file DisplayTesting.jsx
 * @module DisplayTesting
 * @description A React component that conditionally renders development-only testing components in Next.js.
 * This component checks `process.env.NEXT_PUBLIC_ENVIRONMENT` to ensure it only renders in development mode.
 * It includes components for testing purposes, such as `TailwindBreakPoints`.
 * 
 * 
 * @author Chace Nielson
 * @created Jan 22, 2025
 * @updated Mar 31, 2025
 */


import TailwindBreakPoints from './TailwindBreakPoints'

export default function DisplayTesting() {
  const isDevelopment = process.env.NEXT_PUBLIC_ENVIRONMENT === 'development'

  if (!isDevelopment) return null

  return <TailwindBreakPoints />
}
