/**
 * @file layout.jsx
 * @module app/layout
 * @desc Root Layout for Next.js App Router, includes NavBar, Toaster, Analytics, and global styles.
 * 
 * @author Chace Nielson
 * @created Mar 14, 2025
 * @updated Mar 31, 2025
 */

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./layout.css";
import ToasterLayout from "@/components/layout/ToasterLayout";
import DisplayTesting from "@/components/testing/DisplayTesting";
import AnalyticsProvider from "@/analytics/AnalyticsProvider";
import NavBar from "@/components/navbar/NavBar";
import Footer from "@/components/footer/Footer";
import HexSeparator from "@/components/common/hexSparator/HexSeparator";
import PartnerBanner from "@/components/partners/PartnerBanner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Home - Alberta Tomorrow",
  description: "An interactive tool to explore Alberta's environmental changes over time.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen min-w-56`}>
        <ToasterLayout />
        <DisplayTesting />
        {/* newItem */}
        <AnalyticsProvider>
          {/* partern banner */}
          <PartnerBanner />
          <NavBar />
          <main className="flex-1 relative flex flex-col pb-14 sm:pb-24 lg:pb-0 outlet-background lg:mr-56 min-h-[50vh] overflow-hidden">
            <HexSeparator randomColors rows={10}   hexClass='bg-primary-alt opacity-10'/>
            <div className="relative ">
              {children}
            </div>
            <div className="mt-auto">
              <Footer />
            </div>
          </main>

        </AnalyticsProvider>
      </body>
    </html>
  );
}
