/**
 * @file PolicySection.jsx
 * @module PolicySection
 * @desc A reusable component for collapsible policy content using QuestionDropdown.
 *       Allows JSX content instead of just a string for the answer.
 *
 * @author Chace Nielson
 * @created Mar 14, 2025
 * @updated Mar 27, 2025
 */

import React from 'react';
import QuestionDropdown from '@/components/common/QuestionDropdown';

export default function PolicySection({ title, children, }) {
  return (
    <QuestionDropdown
      maxW='6xl'
      question={title}
      answer={children}
      isRichContent // Optional flag for styling flexibility
    />
  );
}
