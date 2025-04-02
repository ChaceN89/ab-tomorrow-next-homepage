/**
 * @file layout.jsx
 * @module app/layout
 * @desc Root Layout for Next.js App Router, includes NavBar, Toaster, Analytics, and global styles.
 * 
 * @author Chace Nielson
 * @created Mar 14, 2025
 * @updated Mar 31, 2025
 */

// styles
import "./globals.css";
import "./layout.css";

// components
import ToasterLayout from "@/components/layout/ToasterLayout";
import DisplayTesting from "@/components/testing/DisplayTesting";
import AnalyticsProvider from "@/analytics/AnalyticsProvider";
import NavBar from "@/components/navbar/NavBar";
import Footer from "@/components/footer/Footer";
import HexSeparator from "@/components/common/hexSparator/HexSeparator";
import PartnerBanner from "@/components/pages/partners/PartnerBanner";
import NewsPopup from "@/components/media/NewsPopup";

// More Components
import ScrollProgress from "@/components/layout/ScrollProgress";
import SplashScreen from "@/components/layout/SplashScreen";

// functions
import { getPageTitle } from "@/utils/metadataUtils";
import { Suspense } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ClientLayout from "./ClientLayout";

// viewport meta data
export const viewport = {
  themeColor: "#2daeb5", // Primary blue color
};

// meta data
export const metadata = {
  metadataBase: new URL("https://albertatomorrow.ca"), // ✅ Add this

  title: getPageTitle("Home"),
  description: "An interactive tool to explore Alberta's environmental changes over time.",
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/icons/favicon16.png", sizes: "16x16", type: "image/png" },
      { url: "/icons/favicon24.png", sizes: "24x24", type: "image/png" },
      { url: "/icons/favicon32.png", sizes: "32x32", type: "image/png" },
      { url: "/icons/favicon64.png", sizes: "64x64", type: "image/png" },
    ],
    apple: "/icons/apple-touch-icon-precomposed.png",
  },
  openGraph: {
    title: "Alberta Tomorrow",
    description: "An interactive tool to explore Alberta's environmental changes over time.",
    url: "https://albertatomorrow.ca",
    type: "website",
    images: [
      {
        url: "/icons/facebook.png",
        width: 1200,
        height: 630,
        alt: "Alberta Tomorrow Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alberta Tomorrow",
    description: "Explore Alberta's environment through interactive simulations.",
    images: ["/icons/facebook.png"],
  },
}


// Root application layout
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='antialiased flex flex-col min-h-screen min-w-56'>
        <ScrollProgress/>
        <ToasterLayout />
        <DisplayTesting />
        <NewsPopup/>
        <NavBar />
        <PartnerBanner />

        <ClientLayout>
          <main className="flex-1 relative flex flex-col pb-14 sm:pb-24 lg:pb-0 outlet-background lg:mr-56 min-h-[50vh] overflow-hidden">
            <HexSeparator
              randomColors
              rows={10}
              hexClass="bg-primary-alt opacity-10"
            />
            <div className="relative">{children}aaaaaaa</div>
            <div className="mt-auto">
              <Footer />
            </div>
          </main>
        </ClientLayout>
      </body>
    </html>
  );
}
