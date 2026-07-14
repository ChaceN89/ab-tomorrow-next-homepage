/**
 * @file layout.jsx
 * @module app/LocaleLayout
 * @desc Layout component for handling locale-specific content in Alberta Tomorrow. This component wraps the main content with the NextIntlClientProvider to provide internationalization support.
 * 
 * @created July 7, 2026
 * @updated July 14, 2026
 */

import { Suspense } from "react";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { getMessages } from "@/i18n/messages";
import LocalizedShell from "@/components/layout/shell/LocalizedShell";

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
      <Suspense fallback={null}>
        <LocalizedShell>{children}</LocalizedShell>
      </Suspense>
    </NextIntlClientProvider>
  );
}