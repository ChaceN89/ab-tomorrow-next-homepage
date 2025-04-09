

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
