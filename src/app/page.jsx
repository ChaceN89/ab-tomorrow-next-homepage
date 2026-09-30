"use client";

import { useEffect } from "react";

export default function Page() {
  useEffect(() => {
    const browserLanguages = navigator.languages?.length
      ? navigator.languages
      : [navigator.language];
    const locale = browserLanguages
      .map((language) => language.toLowerCase().split("-")[0])
      .find((language) => language === "en" || language === "fr") || "en";

    window.location.replace(`/${locale}/`);
  }, []);

  return null;
}