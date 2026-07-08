/**
 * @file NavBar.jsx
 * @module NavBar
 * @desc A fixed localized navigation bar that increases opacity as you scroll.
 * 
 * @author Chace Nielson
 * @created Mar 14, 2025
 * @updated July 7, 2026 - set up translations
 */

"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import { BsHexagonHalf } from "react-icons/bs";
import { HiBars3BottomRight } from "react-icons/hi2";
import { HiX } from "react-icons/hi";

import LinkItem from "./LinkItem";
import NavDropdown from "./NavDropdown";
import NavLogo from "./NavLogo";
import DonateButton from "./DonateButton";
import MobileMenu from "./MobileMenu";

import LanguageSwitcher from "@/components/layout/language/LanguageSwitcher";

import { toolsDropDown, learnMoreDropDown, scrollLinks } from "@/data/navData";

import "./nav.styles.css";

const HextDot = () => (
  <BsHexagonHalf className="text-accent-alt w-2 h-2 opacity-60 mx-1 translate-y-[1.5px]" />
);

export default function NavBar() {
  const t = useTranslations("NavBar.links");

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const pathname = usePathname();
  const isHomePage = pathname === "/" || pathname === "/en" || pathname === "/fr";

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className="fixed z-[9998] top-0 left-0 min-w-full py-2 backdrop-blur-md bg-gray-200/20 shadow-lg border-b border-white/10 2xl:min-w-[calc(100%-14rem)]"
      style={{
        backgroundColor: `rgba(31, 41, 55, ${isHomePage ? Math.min(0.75, 0.4 + scrollY / 1000) : 0.75})`,
      }}
    >
      <div className="flex w-full md:flex-col lg:flex-row justify-between md:justify-start lg:justify-between items-center page-width">
        <div className="flex items-center">
          <LinkItem router="/" scrollTo="hero" disableActive className="text-white hover:cursor-pointer">
            <NavLogo />
          </LinkItem>

          <div className="items-center hidden md:flex">
            <HextDot />
            <NavDropdown
              titleKey={toolsDropDown.titleKey}
              items={toolsDropDown.list}
              translationNamespace={toolsDropDown.translationNamespace}
            />
          </div>
        </div>

        <div className="hidden md:flex items-center">
          {scrollLinks.flatMap(({ labelKey, scrollTo, icon }, index, arr) => [
            <LinkItem
              key={scrollTo}
              router="/"
              scrollTo={scrollTo}
              className="nav-element-default nav-element-default-hover flex items-center gap-0.5"
              activeClassName="nav-element-active"
            >
              {icon}
              {t(labelKey)}
            </LinkItem>,
            index < arr.length - 1 ? <HextDot key={`sep-${scrollTo}`} /> : null,
          ])}

          <HextDot />

          <NavDropdown
            titleKey={learnMoreDropDown.titleKey}
            items={learnMoreDropDown.list}
            translationNamespace={learnMoreDropDown.translationNamespace}
            openToLeft={false}
          />

          <HextDot />

          <LanguageSwitcher />
          <HextDot />
          <DonateButton />
        </div>

        <button
          className="flex items-center md:hidden hover:cursor-pointer"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <HiX className="text-white w-6 h-6 transition-transform duration-500 hover:text-accent" />
          ) : (
            <HiBars3BottomRight className="text-white w-6 h-6 transition-transform duration-500 hover:text-accent" />
          )}
        </button>
      </div>

      <MobileMenu setIsOpen={setIsMobileMenuOpen} isOpen={isMobileMenuOpen} />
    </nav>
  );
}