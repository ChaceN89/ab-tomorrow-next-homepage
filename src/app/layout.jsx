/**
 * @file layout.jsx
 * @module app/layout
 * @desc Root Layout for Next.js App Router. Handles global styles and document shell.
 * 
 * @author Chace Nielson
 * @created Mar 14, 2025
 * @updated Apr 1, 2025 by Chace Nielson
 * @updated Jul 7, 2026 by Chace Nielson - moved localized app shell into locale layout
 */

// styles
import "./globals.css";
import "./layout.css";

// functions
import { getPageTitle } from "@/utils/metadataUtils";

// viewport meta data
export const viewport = {
  themeColor: "#2daeb5"
};

// meta data
export const metadata = {
  metadataBase: new URL("https://albertatomorrow.ca"),

  title: getPageTitle("Home"),
  description: "An interactive tool to explore Alberta's environmental changes over time.",
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/icons/favicon16.png", sizes: "16x16", type: "image/png" },
      { url: "/icons/favicon24.png", sizes: "24x24", type: "image/png" },
      { url: "/icons/favicon32.png", sizes: "32x32", type: "image/png" },
      { url: "/icons/favicon64.png", sizes: "64x64", type: "image/png" }
    ],
    apple: "/icons/apple-touch-icon-precomposed.png"
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
        alt: "Alberta Tomorrow Preview"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Alberta Tomorrow",
    description: "Explore Alberta's environment through interactive simulations.",
    images: ["/icons/facebook.png"]
  }
};

// Root application layout
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased flex flex-col min-h-screen min-w-56">
        {children}
      </body>
    </html>
  );
}