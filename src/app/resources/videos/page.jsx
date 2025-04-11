/**
 * @file page.jsx
 * @module app/videos
 * @desc Videos page for Alberta Tomorrow. Displays a list of videos related to the project.
 *
 * @author Chace Nielson
 * @created Mar 31st, 2025
 * @updated Mar 31st, 2025
 */
import React from 'react'
import { getPageTitle } from '@/utils/metadataUtils'
import VideoDisplay from '@/app/resources/components/video-components/VideoDisplay'

// Page-specific metadata
export const metadata = {
  title: getPageTitle("Videos"),
}

// Board of Directors Page Component
export default function VideosPage() {
  return(<VideoDisplay/>)
}
