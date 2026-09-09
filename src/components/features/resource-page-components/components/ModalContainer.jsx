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
import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';
import Modal from "@/components/common/Modal";
import SingleVideo from './video-components/display/ModalVideo';
import ModalLessonPlan from './lesson-plan-components/display/ModalLessonPlan';

export default function ModalContainer() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const locale = useLocale();
  const videoId = searchParams.get("video");
  const lessonPlanId = searchParams.get("lesson-plan");

  const router = useRouter();

  const closeModal = () => {
    const newParams = new URLSearchParams(searchParams.toString());

    newParams.delete("video");
    newParams.delete("lesson-plan");

    // Clean up the URL
    const newQuery = newParams.toString();
    const newUrl = newQuery ? `${pathname}?${newQuery}` : pathname;

    // replace the URL so direct-link modal close does not add extra history entries
    router.replace(newUrl, { scroll: false });
  };

  const switchLocale = (nextLocale) => {
    if (!nextLocale || nextLocale === locale) {
      return;
    }

    const pathSegments = (pathname || "/").split("/").filter(Boolean);
    if (pathSegments.length > 0 && ["en", "fr"].includes(pathSegments[0])) {
      pathSegments[0] = nextLocale;
    } else {
      pathSegments.unshift(nextLocale);
    }

    const nextPath = `/${pathSegments.join("/")}`;
    const nextQuery = searchParams.toString();
    const nextUrl = nextQuery ? `${nextPath}?${nextQuery}` : nextPath;
    router.replace(nextUrl, { scroll: false });
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
