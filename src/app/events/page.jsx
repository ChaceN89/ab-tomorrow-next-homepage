/**
 * @file page.jsx
 * @module app/events
 * @desc Events page for Alberta Tomorrow. Displays a list of upcoming events and activities.
 *
 * @author Chace Nielson
 * @created Mar 31st, 2025
 * @updated Mar 31st, 2025
 */

import React from 'react'
import { getPageTitle } from '@/utils/metadataUtils'
import Events from '@/app/events/components/Events'

// Page-specific metadata
export const metadata = {
  title: getPageTitle("Webinar Events"),
}

// Board of Directors Page Component
export default function EventsPage() {
  return (<Events/>)
}
