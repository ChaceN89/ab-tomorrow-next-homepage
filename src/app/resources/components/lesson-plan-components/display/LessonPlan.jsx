/**
 * @file LessonPlan.jsx
 * @module UI/Resources/LessonPlan
 * @desc Displays full lesson plan data including title, description, videos, tags, files, and links.
 *
 * @props {object} plan - A lesson plan object with full metadata.
 */

import React from "react";
import Link from "next/link";
import { FaFilePdf, FaLink, FaYoutube } from "react-icons/fa";

export default function LessonPlan({ plan }) {
  return (
    <div className="flex flex-col h-full justify-between gap-2 bg-white shadow-md rounded-lg p-4 border border-black/20">
      <h3 className="text-lg font-semibold">{plan.title}</h3>

      <p className="text-sm text-gray-700">{plan.description}</p>

      <Link 
            scroll={false} 
            href={`/resources/lesson-plans?lesson-plan=${plan.id}`} 
            className=" text-blue hover:underline text-xs mt-2 flex items-center gap-1"
          >
            See Details
          </Link>

      {plan.files?.length > 0 && (
        <div className="mt-2">
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
        <div className="mt-2">
          <div className="text-sm font-semibold">Related Videos</div>
          <ul className="text-xs text-blue-700 mt-1 space-y-1">
            {plan.videos.map((vid, idx) => (
              <li key={idx}>
                <Link href={`/resources/videos?video=${vid}`} scroll={false} className="hover:underline flex items-center gap-1">
                  <FaYoutube className="text-red-500" /> {vid}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      {plan.relatedUrls?.length > 0 && (
        <div className="mt-2">
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
