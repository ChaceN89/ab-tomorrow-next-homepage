/**
 * @file LessonPlanDetails.jsx
 * @module UI/Resources/LessonPlanDetails
 * @desc Renders full detailed view of a lesson plan (for modals or full page).
 */

"use client";

import React from "react";
import { FaClipboardList, FaFilePdf, FaLink, FaRegClock } from "react-icons/fa";
import TagList from "./TagList";
import LinkListSection from "./LinkListSection";
import ModalVideo from "../../video-components/display/ModalVideo";
import HexSeparator from "@/components/common/hexSparator/HexSeparator";

export default function LessonPlanDetails({ plan }) {
  return (
    <div className="flex flex-col h-full justify-start gap-4 rounded-lg p-6 border border-black/10 max-w-7xl mx-auto bg-tertiary/20">

      <div className=" border rounded-md  bg-gray-50 relative overflow-hidden">
        <HexSeparator rows={40} hexClass="bg-primary/10"/>
        <div className="p-4 flex items-start gap-2">

          <FaClipboardList className="text-primary text-4xl flex-shrink-0" />
          <div className="space-y-4 ">
          <h2 className="text-2xl font-bold">{plan.title}</h2>
          <div className="flex items-center gap-2 text-gray-500">
              <FaRegClock className="text-gray-500 text-2xl flex-shrink-0" />
              <span className="text-gray-500 ">{plan.approximateTime}</span>
            </div>
            <p className="text-sm text-gray-700">{plan.description}</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2  gap-4">
        {/* Files */}
        <LinkListSection
          title="Lesson Files"
          items={plan.files}
          icon={FaFilePdf}
          iconClassName="text-red-600"
          />

            {/* External Links */}
        <LinkListSection
          title="Related Links"
          items={plan.relatedUrls}
          icon={FaLink}
          iconClassName="text-blue-700"
        />
      </div>

      {/* Tag Pills */}
      <div className="space-y-2 grid grid-cols-1 sm:grid-cols-2 gap-4 items-start">
        <TagList label="Grades" items={plan.grades} pillClass="bg-gray-100 border border-gray-300 text-gray-700" />
        <TagList label="Tools" items={plan.tools} pillClass="bg-green-100 border border-green-300 text-green-700" />
        <TagList label="Subjects" items={plan.subjects} pillClass="bg-blue-100 border border-blue-300 text-blue-700" />
        <TagList label="Tags" items={plan.tags} pillClass="bg-yellow-100 border border-yellow-300 text-yellow-700" />
      </div>

      {/* Videos */}
      {plan.videos?.length > 0 && (
        <div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
            {plan.videos.map((vid, idx) => (
              <li key={idx}>
                <ModalVideo id={vid} />
              </li>
            ))}
          </ul>
        </div>
      )}

  
    </div>
  );
}
