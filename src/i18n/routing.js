// src/i18n/routing.js

import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
    defaultLocale: "en",
    locales: ["en", "fr"]
});

export const localeLabels = {
    en: "EN",
    fr: "FR"
};