/**
 * @file InteractiveTools.jsx
 * @module InteractiveTools
 * @desc Showcases the three core educational tools using logos, descriptions, and links. Includes support for tools still in development.
 *
 * @author Chace Nielson
 * @created Mar 25, 2025
 * @updated Mar 25, 2025
 */

import React from 'react';
import { interactiveToolsData } from '@/data/interactiveToolsData';
import HexButton from '@/components/common/HexButton';
import SectionHeader from '@/components/common/SectionHeader';
import ToolCard from './education/ToolCard';

export default function InteractiveTools() {
  return (
    <section className="bg-secondary text-white">
      <div className='home-section home-y-padding space-y-8'>
        <SectionHeader
          shadow
          title={'Explore Our Interactive Tools'}
          description={
            <>Use our powerful <span className='text-accent'>educational tools</span> to explore land use, energy sustainability, and wildlife conservation in Alberta.</>
          }
        />
        <div className="grid-section">
          {interactiveToolsData.map((tool, index) => (
            <ToolCard
              key={tool.name || index} // ✅ Unique key (ideally use a unique property like `tool.id` or `tool.name`)
              index={index}
              tool={tool}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
