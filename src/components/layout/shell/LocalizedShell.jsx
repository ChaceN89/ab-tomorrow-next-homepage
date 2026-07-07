"use client";
/**
 * LocalizedShell.jsx
 * Client-side shell that contains NavBar, Toaster, Footer and other UI chrome
 * This component is intended to be rendered inside the locale-aware layout
 * so that these components can use `next-intl` translations via the provider.
 */
// import ToasterLayout from "./ToasterLayout";
// import DisplayTesting from "../testing/DisplayTesting";
// import NavBar from "@/components/footer/navbar/NavBar";
// import Footer from "./footer/Footer";
import HexSeparator from "@/components/common/hexSparator/HexSeparator";
// import PartnerBanner from "@/components/features/our-partner-componets/PartnerBanner";
// import NewsPopup from "@/components/common/NewsPopup";
// import ScrollProgress from "@/components/layout/ScrollProgress";

export default function LocalizedShell({ children }) {
  return (
    <>
      {/* <ScrollProgress />
      <ToasterLayout />
      <DisplayTesting />
      <NewsPopup />
      <NavBar />
      <PartnerBanner /> */}

      <main className="flex-1 relative flex flex-col pb-14 sm:pb-24 lg:pb-0 outlet-background lg:mr-56 min-h-[50vh] overflow-hidden">
        <HexSeparator randomColors rows={10} hexClass="bg-primary-alt opacity-10" />
        <div className="relative">{children}</div>
        <div className="mt-auto">
          {/* <Footer /> */}
        </div>
      </main>
    </>
  );
}
