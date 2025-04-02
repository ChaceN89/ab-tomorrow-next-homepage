
/**
 * @file error.jsx
 * @module app/error
 * @desc Global error boundary component for Next.js App Router.
 *       Displays a SplashScreen with a custom error message when a client-side error occurs.
 * 
 * @notes
 * - This component only renders on client-side errors during navigation or rendering.
 * - It uses the `SplashScreen` component to show a friendly error message to the user.
 * - In development mode, the error stack trace is also displayed for debugging.
 * - No reset button is provided; users are prompted to try again later.
 * 
 * @author Chace Nielson
 * @created Mar 31, 2025
 * @updated Mar 31, 2025
 */
'use client'
import SplashScreen from "@/components/layout/splashScreen/SplashScreen"

export default function Error({ error }) {
  const isDevelopment = process.env.NEXT_PUBLIC_ENVIRONMENT === 'development'

  return (
    <SplashScreen
      errorMsg
      errorText={error.message}
      errorLocation={isDevelopment ? error.stack : null}
    />
  )
}
