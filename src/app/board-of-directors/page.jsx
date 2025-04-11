/**
 * @file page.jsx
 * @module app/board-of-directors
 * @desc Board of Directors page for Alberta Tomorrow. Displays information about the board members.
 *
 * @author Chace Nielson
 * @created mar 31st, 2025
 * @updated mar 31st, 2025
 */

import React from 'react'
import { getPageTitle } from '@/utils/metadataUtils'
import BoardOfDirectors from '@/app/board-of-directors/components/BoardOfDirectors'

// Page-specific metadata
export const metadata = {
  title: getPageTitle("Board of Directors"),
}

// Board of Directors Page Component
export default function BoardPage() {
  return (<BoardOfDirectors/>)
}
