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
import Link from 'next/link';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';
import Modal from "@/components/common/Modal";
import SingleVideo from './video-components/display/ModalVideo';
import ModalLessonPlan from './lesson-plan-components/display/ModalLessonPlan';

export default function ModalContainer() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const locale = useLocale();
  const detailsT = useTranslations("Details");
  const viewItemsT = useTranslations("ViewItems");
  const videoId = searchParams.get("video");
  const lessonPlanId = searchParams.get("lesson-plan");

  const router = useRouter();

  const lessonOpenHref = lessonPlanId
    ? `/${locale}/resources/lesson?id=${encodeURIComponent(String(lessonPlanId))}`
    : null;
  const videoOpenHref = videoId
    ? `/${locale}/resources/video?id=${encodeURIComponent(String(videoId))}`
    : null;

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


  return (
    <>
      {lessonPlanId && (
        <Modal
          onClose={closeModal}
          TopBackGroundClass="bg-primary/50"
          Title={detailsT("LessonDetails")}
          HeaderAction={
            lessonOpenHref ? (
              <Link
                href={lessonOpenHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full border border-primary/30 bg-white px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-primary shadow-[0_2px_10px_rgba(15,23,42,0.08)] transition-colors hover:bg-primary hover:text-white"
              >
                {viewItemsT("ViewInNewPage")}
              </Link>
            ) : null
          }
        >
          <ModalLessonPlan id={lessonPlanId} />
        </Modal>
      )}

      {videoId && (
        <Modal
          onClose={closeModal}
          TopBackGroundClass="bg-secondary/50"
          Title={detailsT("VideoDetails")}
          HeaderAction={
            videoOpenHref ? (
              <Link
                href={videoOpenHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full border border-primary/30 bg-white px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-primary shadow-[0_2px_10px_rgba(15,23,42,0.08)] transition-colors hover:bg-primary hover:text-white"
              >
                {viewItemsT("ViewInNewPage")}
              </Link>
            ) : null
          }
        >
          <SingleVideo id={videoId} />
        </Modal>
      )}
    </>
  );
}
