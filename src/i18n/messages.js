// src/i18n/messages.js

import enGlobal from "../localized-content/en.global.json";
import enHomePage from "../localized-content/en.homePage.json";
import enPages from "../localized-content/en.pages.json";
import enNewsPopupData from "../localized-content/en.newsPopupData.json";

import frGlobal from "../localized-content/fr.global.json";
import frHomePage from "../localized-content/fr.homePage.json";
import frPages from "../localized-content/fr.pages.json";
import frNewsPopupData from "../localized-content/fr.newsPopupData.json";

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