/**
 * @file useGoogleAnalytics.js
 * @module useGoogleAnalytics
 * @desc Google Analytics hook for Next.js App Router.
 * 
 * @author Chace Nielson
 * @created Jan 22, 2025
 * @updated Mar 31, 2025
 * 
 * @exampleUsage
 * 
 * // Tracks a custom event
 * import useGoogleAnalytics from './useGoogleAnalytics';
 * 
 * const { trackEvent, setOption } = useGoogleAnalytics();
 * 
 * trackEvent('Button', 'Click', 'DonateButton', 1);
 * 
 * // Set a custom user ID
 * setOption('userId', '12345');
 * 
 * // Tracks page views automatically when wrapped in <AnalyticsProvider>
 */


'use client'

import { useEffect } from 'react'
import ReactGA from 'react-ga4'

const trackingId = process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "YOUR_GA_ID"
const appVersion = process.env.NEXT_PUBLIC_APP_VERSION || "No Version Specified"

const useGoogleAnalytics = () => {
  useEffect(() => {
    if (process.env.NODE_ENV === "development" || !trackingId) {
      console.log("Development mode: Google Analytics initialization disabled")
      return
    } // don't track in development 

    // initialize Google Analytics on client side on inital page load
    try {
      ReactGA.initialize([
        {
          trackingId,
          gaOptions: { 
            anonymizeIp: true, // privacy compliance 
          },
        },
      ])
      ReactGA.set({ app_version: appVersion })

      console.log("✅ Google Analytics initialized")
    } catch (error) {
      console.error("❌ Error initializing Google Analytics", error)
    }
  }, [])

  // adjsut the options for the Google Analytics instance during runtime (edit, userID, app_version, etc)
  // ex - setOption('app_version', '1.0.0')
  // ex - setOption('userId', '12345')
  const setOption = (key, value) => {
    ReactGA.set({ [key]: value })
  }

  // track a page view
  const trackPageView = (pagePath) => {
    ReactGA.send({ hitType: 'pageview', page: pagePath || window.location.pathname })
  }

  // track a custom event
  const trackEvent = (category, action, label, value) => {
    ReactGA.event({ category, action, label, value })
  }

  // function for tracking pages events and chaning options
  return {
    setOption,
    trackPageView,
    trackEvent,
  }
}

export default useGoogleAnalytics
