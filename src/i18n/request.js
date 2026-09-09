// src/i18n/request.js

import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";
import { getMessages } from "./messages";

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = routing.locales.includes(requested)
    ? requested
    : routing.defaultLocale;

  return {
    locale,
    messages: getMessages(locale)
  };
});