/**
 * @file AnalyticsProvider.jsx
 * @module AnalyticsProvider
 * @desc Tracks page views on route changes in Next.js App Router.
 * 
 * @author Chace Nielson
 * @created Jan 22, 2025
 * @updated Mar 31, 2025
 * 
 * @exampleUsage
 * See useGoogelAnalytics.js for usage
 * 
 */

'use client'

import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import useGoogleAnalytics from './useGoogleAnalytics'

export default function AnalyticsProvider({ children }) {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  // my custom hook to track page views using google analytics
  const { trackPageView } = useGoogleAnalytics()

  useEffect(() => {
    if (process.env.NEXT_PUBLIC_ENVIRONMENT === 'development') {
      console.log('Development mode: Page view tracking disabled ' + pathname)
      return
    }

    const url = pathname + searchParams.toString()
    trackPageView(url)
  }, [pathname, searchParams, trackPageView])

  return <>{children}</>
}
