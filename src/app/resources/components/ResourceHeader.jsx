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
 * @updated Apr 11, 2025
 */

import PageHeader from "@/components/common/PageHeader";
import { resourcePageData } from "@/data/resourceData/resourcePageData";
import ResourceNav from "./ResourceNav";

export default function ResourceHeader() {
  return(
    <>
    <div className="page-width  ">
      <div className="page -mb-14">
        <PageHeader title={resourcePageData.title} subtitle={resourcePageData.subtitle} />
        <ResourceNav />
      </div>
    </div>
    <hr className="border-b-2 border-secondary mb-4 mx-2"/>
    </>
  )
}
