/**
 * @file LessonPlanDetails.jsx
 * @module UI/Resources/LessonPlanDetails
 * @desc Renders full detailed view of a lesson plan (for modals or full page).
 */

import React from "react";
import Link from "next/link";
import { FaFilePdf, FaLink, FaYoutube } from "react-icons/fa";
import Video from "../../video-components/display/Video";
import ModalVideo from "../../video-components/display/ModalVideo";

export default function LessonPlanDetails({ plan }) {
  return (
    <div className="flex flex-col h-full justify-start gap-4 bg-white rounded-lg p-6 border border-black/10 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold">{plan.title}</h2>
      <p className="text-sm text-gray-700">{plan.description}</p>

      <div className="text-xs text-gray-600">
        <div><strong>Approximate Time:</strong> {plan.approximateTime || "N/A"}</div>
        <div><strong>Grades:</strong> {plan.grades?.join(", ")}</div>
        <div><strong>Subjects:</strong> {plan.subjects?.join(", ")}</div>
        <div><strong>Tools:</strong> {plan.tools?.join(", ")}</div>
        <div><strong>Tags:</strong> {plan.tags?.join(", ")}</div>
      </div>

      {plan.files?.length > 0 && (
        <div>
          <div className="text-sm font-semibold">Lesson Files</div>
          <ul className="text-xs text-blue-700 mt-1 space-y-1">
            {plan.files.map((f, idx) => (
              <li key={idx}>
                <a href={f.link} target="_blank" rel="noopener noreferrer" className="hover:underline flex gap-1 items-center">
                  <FaFilePdf className="text-red-600" /> {f.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      {plan.videos?.length > 0 && (
        <div>
          <div className="text-sm font-semibold">Related Videos</div>
          <ul className="text-xs text-blue-700 mt-1 space-y-1">
            {plan.videos.map((vid, idx) => (
              <li key={idx}>
                <ModalVideo id={vid} />
              </li>
            ))}
          </ul>
        </div>
      )}

      {plan.relatedUrls?.length > 0 && (
        <div>
          <div className="text-sm font-semibold">Related Links</div>
          <ul className="text-xs text-blue-700 mt-1 space-y-1">
            {plan.relatedUrls.map((url, idx) => (
              <li key={idx}>
                <a href={url.link} target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-1">
                  <FaLink /> {url.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
