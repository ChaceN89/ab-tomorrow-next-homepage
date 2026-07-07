"use client";

/**
 * @file not-found.jsx
 * @module app/not-found
 * @desc Redirects missing routes based on the user's browser language.
 *
 * @author Chace Nielson
 * @created July 7, 2026
 * @updated July 7, 2026 by Chace Nielson - redirects based on browser language
 */

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    // get 
    const browserLanguage = navigator.language?.toLowerCase() || "en";
    const locale = browserLanguage.startsWith("fr") ? "fr" : "en";

    router.replace(`/${locale}`);

  }, [router]);

  return null;
}