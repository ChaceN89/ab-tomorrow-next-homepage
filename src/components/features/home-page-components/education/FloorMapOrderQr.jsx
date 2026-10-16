"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { FiMaximize2 } from "react-icons/fi";
import { FaTimes } from "react-icons/fa";

export default function FloorMapOrderQr({
  src,
  alt,
  instruction,
  orderUrl,
  expandLabel,
  closeLabel,
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    if (!isExpanded) return;

    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setIsExpanded(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [isExpanded]);

  const expandedView =
    isExpanded && typeof document !== "undefined"
      ? createPortal(
        <div
          className="fixed inset-x-0 top-16 bottom-14 z-[10000] flex items-center justify-center bg-black/60 p-4 sm:bottom-24 lg:right-56 lg:bottom-0"
          role="presentation"
          onClick={(event) => {
            if (event.target === event.currentTarget) setIsExpanded(false);
          }}
        >
          <div
            className="relative w-full max-w-lg rounded-2xl bg-white p-4 shadow-2xl"
            role="dialog"
            aria-modal="true"
            aria-label={alt}
          >
            <button
              type="button"
              className="absolute right-2 top-2 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary-alt text-white transition-colors hover:bg-primary"
              onClick={() => setIsExpanded(false)}
              aria-label={closeLabel}
            >
              <FaTimes aria-hidden="true" />
            </button>
            <a
              className="mx-auto block w-fit rounded-xl bg-white p-3"
              href={orderUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={alt}
            >
              <Image
                unoptimized
                src={src}
                alt={alt}
                width={512}
                height={512}
                className="h-auto max-h-[calc(100vh-12rem)] w-auto max-w-full"
              />
            </a>
          </div>
        </div>,
        document.body
      )
      : null;

  return (
    <>
      <div className="flex flex-wrap items-center gap-3 rounded-xl border border-primary/20 bg-white/80 p-2">
        <div className="flex items-start gap-2">
          <a
            className="block shrink-0 rounded-lg bg-white p-2 shadow-sm"
            href={orderUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={alt}
          >
            <Image
              unoptimized
              src={src}
              alt={alt}
              width={160}
              height={160}
            />
          </a>
          <button
            type="button"
            className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-primary-alt text-white shadow transition-colors hover:bg-primary"
            onClick={() => setIsExpanded(true)}
            aria-label={expandLabel}
            title={expandLabel}
          >
            <FiMaximize2 aria-hidden="true" />
          </button>
        </div>
        <p className="min-w-0 flex-1 text-base leading-relaxed sm:text-lg">
          {instruction}
        </p>
      </div>

      {expandedView}
    </>
  );
}
