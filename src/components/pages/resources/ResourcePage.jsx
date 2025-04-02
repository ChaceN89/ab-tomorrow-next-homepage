

import PageHeader from "@/components/common/PageHeader";

import { resourcePageData } from "@/data/resourceData/resourcePageData";
import ResourceNav from "./ResourceNav";

export default function ResourcePage() {

  return(
    <div className="page-width">
      <div className="page">
        <PageHeader title={resourcePageData.title} subtitle={resourcePageData.subtitle} />
        <ResourceNav />
      </div>
    </div>
  )

}
