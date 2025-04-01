/**
 * @file SectionHeader.jsx
 * @module common/SectionHeader
 * @desc Reusable centered header section for pages and subsections.
 *       Accepts a title and description, with optional drop shadow styling for emphasis.
 *
 * @props {string} title - Main heading text, typically in uppercase bold.
 * @props {string} description - Subheading or supporting text below the title.
 * @props {boolean} [shadow=false] - Whether to apply the 'large-shadow' utility class for visual emphasis.
 * 
 * @example
 *  <SectionHeader 
 *    title="Education Tools" 
 *    description="Explore free tools and resources for classroom use." 
 *    shadow 
 *  />
 *
 * @author Chace Nielson
 * @created Mar 26, 2025
 * @updated Mar 26, 2025
 */
import React from 'react'

export default function SectionHeader({ title, description, shadow=false }) {

  return (
    <div className={`max-w-6xl mx-auto text-center space-y-6 relative text-inherit ${shadow ? 'large-shadow' : ''}`}>
    <h2 className="text-3xl lg:text-4xl font-bold uppercase font-display">
      {title}
    </h2>
    <p className="text-lg max-w-3xl mx-auto font-body">
      {description }
    </p>
  </div>
  )
}