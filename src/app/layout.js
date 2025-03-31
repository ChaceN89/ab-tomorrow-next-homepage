
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ToasterLayout from "@/components/layout/ToasterLayout";
import DisplayTesting from "@/components/testing/DisplayTesting";
import AnalyticsProvider from "@/analytics/AnalyticsProvider";

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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div>
          <ToasterLayout/>
          <DisplayTesting/>
          <AnalyticsProvider>
            {children}
          </AnalyticsProvider>
        </div>
      </body>
    </html>
  );
}
