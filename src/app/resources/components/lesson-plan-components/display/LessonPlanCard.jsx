/**
 * @file LessonPlanCard.jsx
 * @module UI/Resources/LessonPlanCard
 * @desc Displays a full lesson plan card and makes the card clickable (except links).
 *
 * @props {object} plan - A lesson plan object.
 */

"use client";

import React from "react";
import { FaFilePdf, FaLink, FaClipboardList, FaRegClock } from "react-icons/fa";
import TagList from "./TagList";
import Tooltip from "@/components/media/Tooltip";
import LinkListSection from "./LinkListSection";
import Link from "next/link";
import HexSeparator from "@/components/common/hexSparator/HexSeparator";

export default function LessonPlanCard({ plan }) {

  return (
    <Link
      href={`/resources/lesson-plans?lesson-plan=${plan.id}`}
      scroll={false}
      className="block h-full"
    >
      <div className="flex flex-col h-full justify-start gap-2 bg-gray-50 shadow-lg rounded-lg p-3 border border-black/20 hover:ring-2 hover:ring-secondary transition-all">
        <Tooltip text={plan.title} openDuration={500}>
          <div className=" border rounded-md  bg-gray-50 relative overflow-hidden">
            <HexSeparator rows={40} hexClass="bg-primary/15"/>
            <div className="p-4 flex items-start gap-2">
    
              <FaClipboardList className="text-primary text-4xl flex-shrink-0" />
              <div>
                <h3 className="text-base font-semibold leading-snug line-clamp-2">{plan.title}</h3>
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <FaRegClock className="text-gray-500 text-xs flex-shrink-0" />
                  <span className="text-gray-500 text-xs">{plan.approximateTime}</span>
                </div>
              </div>
            </div>
          </div>
        </Tooltip>

        <p className="text-sm text-gray-700 line-clamp-3  border-b pb-1">{plan.description}</p>
        

        <TagList label="Grades" items={plan.grades} pillClass="bg-gray-100 border border-gray-300 text-gray-700" />
        <TagList label="Subjects" items={plan.subjects} pillClass="bg-blue-100 border border-blue-300 text-blue-700" />

        <LinkListSection
          title="Lesson Files"
          items={plan.files}
          icon={FaFilePdf}
          iconClassName="text-red-600"

        />

        <LinkListSection
          title="Related Links"
          items={plan.relatedUrls}
          icon={FaLink}
          iconClassName="text-blue-700"
        />
      </div>
    </Link>
  );
}
