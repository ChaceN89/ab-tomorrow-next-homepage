// src/app/[locale]/layout.jsx

/**
 * @file layout.jsx
 * @module app/LocaleLayout
 * @desc Layout component for handling locale-specific content in Alberta Tomorrow. This component wraps the main content with the NextIntlClientProvider to provide internationalization support.
 * 
 * @created July 7, 2026
 * @updated July 7, 2026
 */

import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { getMessages } from "@/i18n/messages";

export function generateStaticParams() {
    return routing.locales.map((locale) => ({
        locale
    }));
}

export default async function LocaleLayout({ children, params }) {
    const { locale } = await params;

    if (!hasLocale(routing.locales, locale)) {
        notFound();
    }

    const messages = getMessages(locale);

    return (
        <NextIntlClientProvider locale={locale} messages={messages}>
            {children}
        </NextIntlClientProvider>
    );
}