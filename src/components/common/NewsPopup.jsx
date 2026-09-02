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
import { useTranslations, useLocale } from "next-intl";
import { newsItems } from "../../data/newsData";
import { FaTimes } from "react-icons/fa";
import Link from "next/link";

export default function NewsPopup() {
  const t = useTranslations("Popup");
  const locale = useLocale();

  const startDelay = 5000;
  const toastDelay = 11000;
  const toastDuration = 9000;

  useEffect(() => {
    if (!newsItems.length) return;

    setTimeout(() => {
      newsItems.forEach((item, index) => {
        setTimeout(() => {
          const title = item.titleKey ? t(item.titleKey) : item.title;
          const description = item.descriptionKey ? t(item.descriptionKey) : item.description;
          const linkText = item.linkTextKey ? t(item.linkTextKey) : "See More";
          const localizedLink = item.link ? `/${locale}${item.link}` : null;

          toast(
            (toastId) => (
              <div className="flex items-start space-x-2 text-white">
                <div>{item.icon}</div>

                <div className="flex flex-col space-y-1">
                  <strong className="text-lg pr-10">{title}</strong>
                  <div className="text-sm">{description}</div>
                  {item.bulletKeys?.length ? (
                    <ul className="list-disc list-inside text-sm space-y-1">
                      {item.bulletKeys.map((bulletKey) => (
                        <li key={bulletKey}>{t(bulletKey)}</li>
                      ))}
                    </ul>
                  ) : null}

                  {localizedLink ? (
                    <Link
                      href={localizedLink}
                      className="text-blue-200 underline text-sm"
                      onClick={() => toast.dismiss(toastId.id)}
                    >
                      {linkText} →
                    </Link>
                  ) : null}

                  <button
                    onClick={() => toast.dismiss(toastId.id)}
                    className="absolute top-2 right-2 text-white hover:text-red-500 hover:cursor-pointer text-lg"
                  >
                    <FaTimes />
                  </button>
                </div>
              </div>
            ),
            {
              id: `news-toast-${index}`,
              duration: toastDuration,
            }
          );
        }, index * toastDelay);
      });
    }, startDelay);
  }, [t]);

  return null;
}
