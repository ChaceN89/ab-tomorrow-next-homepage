/**
 * @file layout.jsx
 * @module Layout/Resources
 * @desc Layout wrapper for the Resources section. This layout is used to display
 *       the ResourcePage component and include nested pages such as Lesson Plans and Videos.
 *
 * @author Chace Nielson
 * @created Apr 1, 2025
 * @updated Apr 1, 2025
 */

import ResourceHeader from "@/app/resources/components/ResourceHeader";
import { VideoResourceProvider } from "@/app/resources/components/video-components/VideoResourceContext";
import { LessonPlanResourceProvider } from "@/app/resources/components/lesson-plan-components/LessonPlanResourceContext";
import ModalContainer from "./components/ModalContainer";

export default function ResourceLayout({ children }) {
  return (
    <LessonPlanResourceProvider>
      <VideoResourceProvider>
        <ResourceHeader />
        <ModalContainer/>
        <main>{children}</main>
      </VideoResourceProvider>
    </LessonPlanResourceProvider>
  );
}
