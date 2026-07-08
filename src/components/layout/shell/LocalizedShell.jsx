"use client";
/**
 * LocalizedShell.jsx
 * Client-side shell that contains NavBar, Toaster, Footer and other UI chrome
 * This component is intended to be rendered inside the locale-aware layout
 * so that these components can use `next-intl` translations via the provider.
 */

import HexSeparator from "@/components/common/hexSparator/HexSeparator";
import ScrollProgress from "../scroll/ScrollProgress";
import Footer from "../footer/Footer";
import ToasterLayout from "./ToasterLayout";
import DisplayTesting from "@/components/testing/DisplayTesting";
import NewsPopup from "@/components/common/NewsPopup";
import NavBar from "../navbar/NavBar";
import PartnerBanner from "@/components/features/our-partner-componets/PartnerBanner";
import { usePathname } from "next/navigation";

export default function LocalizedShell({ children }) {
  const pathname = usePathname() || "";
  const hidePartnerBanner = pathname.includes("/resources");
  const mainClassName = `flex-1 relative flex flex-col pb-14 sm:pb-24 lg:pb-0 outlet-background ${!hidePartnerBanner ? "lg:mr-56" : ""} min-h-[50vh] overflow-hidden`;
  return (
    <>
      <ScrollProgress />
      <ToasterLayout />
      <DisplayTesting />
      <NewsPopup />
      <NavBar />
      {!hidePartnerBanner && <PartnerBanner />}

      <main className={mainClassName}>
        <HexSeparator randomColors rows={10} hexClass="bg-primary-alt opacity-10" />
        <div className="relative">{children}</div>
        <div className="mt-auto">
          <Footer />
        </div>
      </main>
    </>
  );
}
