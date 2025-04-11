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
import { VideoResourceProvider } from "@/app/resources/videos/components/VideoResourceContext";
import { LessonPlanResourceProvider } from "@/app/resources/lesson-plans/components/LessonPlanResourceContext";

export default function ResourceLayout({ children }) {
  return (
    <LessonPlanResourceProvider>
      <VideoResourceProvider>
        <ResourceHeader />
        <main>{children}</main>
      </VideoResourceProvider>
    </LessonPlanResourceProvider>
  );
}
