/**
 * @file page.jsx
 * @module app/lesson-plans
 * @desc Lesson Plans page for Alberta Tomorrow. Displays a list of lesson plans and resources for educators.
 *
 * @author Chace Nielson
 * @created Mar 31st, 2025
 * @updated Mar 31st, 2025
 */

import React from 'react'
import { getPageTitle } from '@/utils/metadataUtils'
import LessonDisplay from '@/components/pages/resources/lessons/LessonDisplay'

// Page-specific metadata
export const metadata = {
  title: getPageTitle("Lesson Plans"),
}

// Board of Directors Page Component
export default function LessonPlansPage() {
  return (<LessonDisplay/>)
}
