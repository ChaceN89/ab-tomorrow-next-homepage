/**
 * @file ToolCard.jsx
 * @module UI/ToolCard
 * @desc A card component for displaying Alberta Tomorrow tools with an icon, title,
 *       description, and an optional action button. Each card adapts responsively
 *       to grid layout and supports dynamic height scaling.
 * 
 * @author Chace Nielson
 * @created Mar 26, 2025
 * @updated Mar 26, 2025
 *
 * @features
 * - Displays icon, title, and description for each educational tool
 * - Supports conditional "Coming Soon" label or a HexButton
 * - Auto-stretches to fill full height inside CSS grid (`h-full`)
 * - Hover interaction with lift animation
 *
 * @dependencies
 * - `HexButton` (from @/components/common/HexButton)
 * - Tailwind CSS utility classes
 */

import React from 'react'
import HexButton from '@/components/common/HexButton'

export default function ToolCard({tool, index}) {

  return(
    <div 
      key={index}
      className="w-full max-w-2xl mx-auto text-center space-y-2 text-inherit"
    >
      <div
        
        className="bg-primary/40 backdrop-blur-md border border-white/10 rounded-2xl shadow-lg p-6 flex flex-col items-center transition hover:transform hover:translate-y-[-4px] small-shadow h-full"
      >
        <img src={tool.icon} alt={tool.name} className="w-28 h-28 object-contain mb-4" />
        <h3 className="text-2xl font-semibold font-display text-white">{tool.name}</h3>
        <p className="my-2 text-gray-300 font-body">{tool.description}</p>

        <div className="my-auto">
          {tool.inDevelopment ? (
            <span className="text-gray-400 text-lg italic">Coming Soon</span>
          ) : (
            <HexButton link={tool.link} name={tool.buttonText || 'Learn More'} />
          )}
        </div>
      </div>
    </div>
  )
}
