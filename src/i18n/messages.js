// src/i18n/messages.js

import enGlobal from "../localized-content/en/en.global.json";
import enHomePage from "../localized-content/en/en.homePage.json";
import enPages from "../localized-content/en/en.pages.json";
import enNewsPopupData from "../localized-content/en/en.newsPopupData.json";

import frGlobal from "../localized-content/fr/fr.global.json";
import frHomePage from "../localized-content/fr/fr.homePage.json";
import frPages from "../localized-content/fr/fr.pages.json";
import frNewsPopupData from "../localized-content/fr/fr.newsPopupData.json";

export const messages = {
  en: {
    ...enGlobal,
    ...enHomePage,
    ...enPages,
    ...enNewsPopupData
  },
  fr: {
    ...frGlobal,
    ...frHomePage,
    ...frPages,
    ...frNewsPopupData
  }
};

export function getMessages(locale) {
  return messages[locale] || messages.en;
}