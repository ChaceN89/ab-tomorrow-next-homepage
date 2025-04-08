/**
 * @file NewsPopup.jsx
 * @module NewsPopup
 * @desc Displays a toast notification with the latest news items on initial site load.
 *
 * @see {@link https://react-hot-toast.com/ | React Hot Toast Documentation}
 *
 * @author Chace Nielson
 * @created Mar 17, 2025
 * @updated Apr 8, 2025
 */
"use client";

import React, { useEffect } from "react";
import toast from "react-hot-toast";
import { newsItems } from "../../data/page-data/newsData";
import { FaTimes } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";

export default function NewsPopup() {
  // timing settings
  const startDelay = 5000;     // Delay before first toast starts 
  const toastDelay = 6000;     // Delay between each toast
  const toastDuration = 14000; // Duration of each toast

  useEffect(() => {
    setTimeout(() => {
      newsItems.forEach((item, index) => {
        setTimeout(() => {
          toast(
            (t) => (
              <div className="flex items-start space-x-2 text-white ">
                {/* Icon */}
                <div >{item.icon}</div>

              {/* Content */}
              <div className="flex flex-col space-y-1 ">
                <strong className="text-lg pr-10">{item.title}</strong>
                <p className="text-sm">{item.description}</p>

                {item.link ? (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-200 underline text-sm"
                    onClick={() => toast.dismiss(t.id)}
                  >
                    Read More →
                  </a>
                ) : item.scrollLink ? (
                  <ScrollLink
                    to={item.scrollLink}
                    smooth={true}
                    duration={1000}
                    offset={-50}
                    className="text-blue-200 underline text-sm cursor-pointer"
                    onClick={() => toast.dismiss(t.id)}
                  >
                    Jump to Section →
                  </ScrollLink>
                ) : null}

                <button
                  onClick={() => toast.dismiss(t.id)}
                  className="absolute top-2 right-2 text-white hover:text-red-500 hover:cursor-pointer text-lg"
                >
                  <FaTimes />
                </button>
              </div>
            </div>
          ), {
            id: `news-toast-${index}`,
            duration: toastDuration,
          });
        }, index * toastDelay);
      });
    }, startDelay);
  }, []);

  return null;
}
