/**
 * @file ClientLayout.jsx
 * @module components/layout/ClientLayout
 * @desc Client-only layout wrapper for dynamic components like AnalyticsProvider.
 * 
 * @author Chace Nielson
 * @created Apr 1, 2025
 * @updated Apr 1, 2025
 */

"use client";
import { Suspense } from "react";
import AnalyticsProvider from "@/analytics/AnalyticsProvider";
import SplashScreen from "@/components/layout/splashScreen/SplashScreen";

export default function ClientLayout({ children }) {
  return (
    <Suspense fallback={<SplashScreen />} >
      <AnalyticsProvider>{children}</AnalyticsProvider>
    </Suspense>
  );
}
