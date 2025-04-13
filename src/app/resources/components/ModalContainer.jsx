/**
 * @file ModalContainer.jsx
 * @module UI/Resources/ModalContainer
 * @desc Responsible for conditionally rendering modal overlays based on query parameters.
 *       Supports modals for both videos and lesson plans using search param keys (`video`, `lessonPlan`).
 *
 * @features
 * - Listens to query params and renders corresponding modal content
 * - Automatically closes modals by cleaning URL params and maintaining client-side navigation
 * - Supports deep linking and back/forward navigation for modals
 *
 * @dependencies
 * - `useSearchParams` and `useRouter` from Next.js App Router
 * - `Modal` (generic modal wrapper component)
 * - `SingleVideo` (renders video content inside modal)
 *
 * @notes
 * - This file must be a Client Component (`"use client"`) due to use of hooks
 * - Designed to be rendered within a layout or page where query-based modal behavior is needed
 * 
 * @author Chace Nielson
 * @created Apr 11, 2025
 * @updated Apr 11, 2025
 */
"use client";
import { useSearchParams, useRouter } from 'next/navigation';
import Modal from "@/components/common/Modal";
import SingleVideo from './video-components/display/ModalVideo';
import ModalLessonPlan from './lesson-plan-components/display/ModalLessonPlan';

export default function ModalContainer() {
  const searchParams = useSearchParams();
  const videoId = searchParams.get("video");
  const lessonPlanId = searchParams.get("lesson-plan");

  const router = useRouter();

  const closeModal = () => {
    const newParams = new URLSearchParams(searchParams.toString());
  
    if (videoId) newParams.delete("video");
    if (lessonPlanId) newParams.delete("lesson-plan");
  
    // Clean up the URL
    const basePath = window.location.pathname; // e.g., /resources or /resources/videos
    const newQuery = newParams.toString();
    const newUrl = newQuery ? `${basePath}?${newQuery}` : basePath;
    
    // push the new url
    router.push(newUrl, { scroll: false });
  };

  return (
    <>
      {videoId && (
        <Modal onClose={closeModal}>
          <SingleVideo id={videoId} />
        </Modal>
      )}

      {lessonPlanId && (
        <Modal onClose={closeModal}>
          <ModalLessonPlan id={lessonPlanId} />
        </Modal>
      )}
    </>
  );
}
