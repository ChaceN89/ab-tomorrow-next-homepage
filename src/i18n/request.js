// src/i18n/request.js

import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";
import { getMessages } from "./messages";

export default getRequestConfig(() => {
    const locale = routing.defaultLocale;

    return {
        locale,
        messages: getMessages(locale)
    };
});