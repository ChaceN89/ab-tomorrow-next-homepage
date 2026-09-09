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

// get the Google Analytics tracking ID from the environment variables
const trackingId = process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "YOUR_GA_ID"
const appVersion = process.env.NEXT_PUBLIC_APP_VERSION || "No Version Specified"

let initialized = false

const useGoogleAnalytics = () => {
  useEffect(() => {
    if (
      process.env.NODE_ENV === "development" || 
      !trackingId || 
      initialized
    ) {
      return
    }

    try {
      ReactGA.initialize([{ trackingId, gaOptions: { anonymizeIp: true } }])
      ReactGA.set({ app_version: appVersion })
      initialized = true
      console.log("✅ Google Analytics initialized")
    } catch (error) {
      console.error("❌ GA init error", error)
    }
  }, [])

  // adjsut the options for the Google Analytics instance during runtime (edit, userID, app_version, etc)
  // ex - setOption('app_version', '1.0.0')
  // ex - setOption('userId', '12345')
  const setOption = (key, value) => {
    ReactGA.set({ [key]: value })
  }

  // track a page view ( just takes the path of the page as an argument )
  const trackPageView = (pagePath) => {
    ReactGA.send({ hitType: 'pageview', page: pagePath || window.location.pathname })
  }

  // track a custom event ( category, action, label, value are the arguments)
  // category - the category of the event (ex - 'Button')
  // action - the action of the event (ex - 'Click')
  // label - the label of the event (ex - 'DonateButton')
  // value - the value of the event (ex - 1)
  // ex - trackEvent('Button', 'Click', 'DonateButton', 1)
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
