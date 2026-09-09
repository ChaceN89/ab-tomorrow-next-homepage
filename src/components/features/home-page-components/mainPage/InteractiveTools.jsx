/**
 * @file InteractiveTools.jsx
 * @module InteractiveTools
 * @desc Showcases the three core educational tools using logos, descriptions, and links. Includes support for tools still in development.
 *
 * @author Chace Nielson
 * @created Mar 25, 2025
 * @updated July 8, 2026 - set up translations
 */

//data
import { interactiveToolsData, interactiveToolsDataTitles } from '@/data/home-page-data/interactiveToolsData';

//components
import SectionHeader from '@/components/common/headers/SectionHeader';
import ToolCard from '../education/ToolCard';

import { useTranslations } from "next-intl";

export default function InteractiveTools() {
  const tHome = useTranslations("HomePage.InteractiveTools");
  const tOther = useTranslations("Other");

  const richTextComponents = {
    Bold: (chunks) => (
      <span className="text-tertiary">
        {chunks}
      </span>
    )
  };


  return (
    <section className="bg-secondary text-white">
      <div className='home-section home-y-padding space-y-8'>
        <SectionHeader
          shadow
          title={tHome(interactiveToolsDataTitles.titleKey)}
          description={tHome.rich(interactiveToolsDataTitles.subtitleKey, richTextComponents)}
        />
        <div className="grid-section">
          {interactiveToolsData.map((tool, index) => {
            const name = tHome(tool.nameKey);
            const description = tHome.rich(tool.descriptionKey, richTextComponents);
            const buttonText = tool.inDevelopment ? tOther('comingSoon') : tOther('launchSimulator');

            return (
              <ToolCard
                key={tool.id || index}
                index={index}
                tool={{ ...tool, name, description, buttonText }}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
