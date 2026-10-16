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

  const startDelay = 4000;
  const toastDelay = 11000;
  const toastDuration = 9000;

  useEffect(() => {
    if (!newsItems.length) return;

    setTimeout(() => {
      newsItems.forEach((item, index) => {
        setTimeout(() => {
          const title = item.titleKey ? t(item.titleKey) : item.title;
          const description = item.descriptionKey ? t(item.descriptionKey) : item.description;

          toast(
            (toastId) => (
              <div className="relative w-full overflow-hidden rounded-2xl border border-tertiary/50 bg-gradient-to-br from-primary-alt to-primary-alt/90 p-4 text-white shadow-xl">
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-tertiary via-accent to-tertiary-alt" />
                <button
                  aria-label={t("close")}
                  onClick={() => toast.dismiss(toastId.id)}
                  className="absolute right-3 top-3 rounded-full p-1 text-white/80 transition-colors hover:bg-white/10 hover:text-white hover:cursor-pointer"
                >
                  <FaTimes />
                </button>

                <div className="flex items-center gap-3 pr-7">
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-tertiary/15 text-tertiary">
                    {item.icon}
                  </span>
                  <strong className="min-w-0 flex-1 text-base font-bold leading-snug text-white">
                    {title}
                  </strong>
                </div>
                <div className="mt-3">
                  <p className="text-sm leading-relaxed text-white/85">
                    {description}
                  </p>

                  {item.bulletLinks?.length ? (
                    <ul className="mt-3 space-y-2">
                      {item.bulletLinks.map((bullet) => (
                        <li
                          key={bullet.labelKey}
                          className="flex min-w-0 items-center justify-between gap-3 rounded-lg border border-white/10 bg-white/5 px-3 py-2"
                        >
                          <span className="flex min-w-0 items-center gap-2 text-sm font-medium text-white">
                            <span className="h-2 w-2 shrink-0 rounded-full bg-accent" />
                            <span>{t(bullet.labelKey)}</span>
                          </span>
                          {bullet.external ? (
                            <a
                              href={bullet.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex shrink-0 items-center gap-1 rounded-md bg-tertiary px-2.5 py-1.5 text-xs font-bold text-primary-alt transition-colors hover:bg-accent"
                            >
                              {t("view")} <span aria-hidden="true">→</span>
                            </a>
                          ) : (
                            <Link
                              href={`/${locale}${bullet.href}`}
                              className="inline-flex shrink-0 items-center gap-1 rounded-md bg-tertiary px-2.5 py-1.5 text-xs font-bold text-primary-alt transition-colors hover:bg-accent"
                              onClick={() => toast.dismiss(toastId.id)}
                            >
                              {t("view")} <span aria-hidden="true">→</span>
                            </Link>
                          )}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </div>
            ),
            {
              id: `news-toast-${index}`,
              duration: toastDuration,
              style: {
                width: "min(24rem, calc(100vw - 2rem))",
                maxWidth: "calc(100vw - 24px)",
                padding: 0,
                backgroundColor: "transparent",
                border: "none",
                boxShadow: "none",
                backdropFilter: "none",
              },
            }
          );
        }, index * toastDelay);
      });
    }, startDelay);
  }, [t]);

  return null;
}
