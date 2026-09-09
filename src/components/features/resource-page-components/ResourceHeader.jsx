/**
 * @file ResourceHeader.jsx
 * @module UI/Resources/ResourceHeader
 * @desc Renders the top section of the Resources pages, including the page title,
 *       subtitle, navigation menu (ResourceNav), and a visual separator line.
 *
 * @features
 * - Displays the main Resources page title and subtitle via PageHeader
 * - Includes ResourceNav for switching between Videos and Lesson Plans
 * - Adds a bottom border separator for section clarity
 *
 * @dependencies
 * - PageHeader (for displaying title and subtitle)
 * - ResourceNav (navigation links between resource tools)
 * - resourcePageData (data source for title and subtitle content)
 *
 * @author Chace Nielson
 * @created Apr 11, 2025
 * @updated July 21 2026 - added translations 
 */

import PageHeader from "@/components/common/headers/PageHeader";
import { getTranslations } from "next-intl/server";
import { resourcePageData } from "@/data/resourceData/resourcePageData";
import ResourceNav from "./ResourceNav";

export default async function ResourceHeader({ locale }) {

  const t = await getTranslations({
    locale,
    namespace: "Pages.ResourcesPage"
  });

  return (
    <>
      <div className="page-width  ">
        <div className="page -mb-14">
          <PageHeader
            title={t(resourcePageData.titleKey)}
            subtitle={t(resourcePageData.subtitleKey)}
          />
          <ResourceNav />
        </div>
      </div>
      <hr className="border-b-2 border-secondary mb-4 mx-2" />
    </>
  )
}
