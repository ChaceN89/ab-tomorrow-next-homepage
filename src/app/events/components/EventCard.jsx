/**
 * @file EventCard.jsx
 * @module UI/Events/EventCard
 * @desc Displays an individual event card with title, summary, dates, description, image, and speaker information.
 *       Includes loading placeholder animation until image is fully loaded.
 * 
 * @author Chace Nielson
 * @created Mar 31, 2025
 * @updated Apr 1, 2025
 *
 * @exampleUsage
 * <EventCard event={event} />
 */
"use client";

import PulseLoader from "@/components/common/PulseLoader";
import React, { useState } from "react";
import Image from "next/image";

export default function EventCard({ event }) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mb-8 border border-gray-200 hover:shadow-xl transition-shadow duration-300">
      <div className="flex flex-col lg:flex-row-reverse gap-6 items-start">
        {/* Right: Event Image */}
        <div className="flex-shrink-0 w-full md:w-[24rem] xl:w-[24rem]">
          <div className="relative w-full pt-[100%] rounded-lg overflow-hidden shadow-inner-lg border border-black/50">
            {/* Square ratio: pt-[100%] */}
            <Image
              src={`/webinar-events/${event.image}`}
              alt={event.title}
              fill
              unoptimized
              className={`object-cover rounded-lg transition-opacity duration-500 ${
                imageLoaded ? "opacity-100" : "opacity-0"
              }`}
              onLoad={() => setImageLoaded(true)}
            />
            {!imageLoaded && (
              <PulseLoader />
            )}
          </div>
        </div>

        {/* Left: Textual content */}
        <div className="flex-1 flex flex-col gap-4">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">{event.title}</h2>
            <h3 className="text-xl font-medium text-gray-600">{event.summary}</h3>
          </div>

          <div className="event-dates space-y-2">
            {event.dates?.map((date, index) => (
              <div key={index} className="font-semibold text-lg flex flex-wrap gap-2">
                <p>{date.visualDate}:</p>
                <a
                  href={date.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  <span className="underline">Register Here</span>
                </a>
              </div>
            ))}
          </div>

          <hr className="border-gray-300" />

          <div className="text-gray-700">{event.description}</div>

          {event.speakers?.length > 0 && (
            <div className="mt-4">
              <h4 className="text-lg font-semibold text-gray-800 mb-2">Speakers</h4>
              <div className="flex flex-col gap-3">
                {event.speakers.map((speaker, index) => (
                  <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-sm">
                    <h5 className="text-md font-medium text-gray-800">{speaker.name}</h5>
                    <p className="text-gray-600 text-sm">{speaker.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
