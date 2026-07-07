/**
 * @file MobileMenu.jsx
 * @module MobileMenu
 * @desc Responsive mobile dropdown menu for navigation. Expands from beneath the navbar with smooth Framer Motion animations.
 *
 * @see {@link https://www.framer.com/motion/ | Framer Motion Documentation}
 *
 * @author Chace Nielson
 * @created Mar 21, 2025
 * @updated Mar 25, 2025
 * 
 * @notes
 * - Prevents body scroll while open
 * - Closes on screen resize (md and up)
 * - Dismisses on outside click using backdrop overlay
 * - Uses shared dropdownVariants for animation
 */
"use client";

/**
 * @file MobileMenu.jsx
 * @module MobileMenu
 * @desc Responsive localized mobile dropdown menu for navigation. Expands from beneath the navbar with smooth Framer Motion animations.
 *
 * @see {@link https://www.framer.com/motion/ | Framer Motion Documentation}
 *
 * @author Chace Nielson
 * @created Mar 21, 2025
 * @updated July 7, 2026 - set up translations
 * 
 * @notes
 * - Prevents body scroll while open
 * - Closes on screen resize (md and up)
 * - Dismisses on outside click using backdrop overlay
 * - Uses shared dropdownVariants for animation
 */

import { useEffect } from "react";
import { useTranslations } from "next-intl";
import { AnimatePresence, motion } from "framer-motion";

// data
import { dropdownVariants, scrollLinks, toolsDropDown, learnMoreDropDown } from "@/data/navData";

// icons
import { RiScrollToBottomLine } from "react-icons/ri";

// components
import LinkItem from "./LinkItem";
import DonateButton from "./DonateButton";

// section for better separation 
function MobileMenuSection({ title, titleKey, items, translationNamespace, setIsOpen }) {
    const t = useTranslations(translationNamespace);

    return (
        <div>
            <div className="text-accent text-sm uppercase tracking-wider mb-2">
                {titleKey ? t(titleKey) : title}
            </div>

            <ul className="space-y-4 sm:space-y-2">
                {items.map((item, index) => (
                    <li key={item.labelKey || index} onClick={() => setIsOpen(false)} className="w-fit">
                        <LinkItem
                            href={item.href}
                            router={item.router}
                            scrollTo={item.scrollTo}
                            disableActive
                            className="flex items-center gap-2 text-white hover:text-accent-alt w-fit pr-2"
                        >
                            {item.icon}
                            {item.labelKey ? t(item.labelKey) : item.label}
                        </LinkItem>
                    </li>
                ))}
            </ul>
        </div>
    );
}

// main function 
function MobileMenu({ setIsOpen, isOpen }) {
    const mobileT = useTranslations("NavBar.mobile");

    useEffect(() => {
        document.body.classList.toggle("overflow-hidden", isOpen);

        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsOpen(false);
            }
        };

        window.addEventListener("resize", handleResize);

        return () => {
            document.body.classList.remove("overflow-hidden");
            window.removeEventListener("resize", handleResize);
        };
    }, [isOpen, setIsOpen]);

    return (
        <div className="md:hidden w-full z-30 overflow-hidden">
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        key="mobile-menu"
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={dropdownVariants}
                        className="w-full"
                    >
                        {/* Top Divider */}
                        <hr className="border-white border-1 rounded-4xl mt-4 sticky top-0 z-10" />

                        <div className="absolute sm:hidden bottom-2 right-2 text-secondary">
                            <RiScrollToBottomLine size={24} />
                        </div>

                        {/* backdrop */}
                        <div onClick={() => setIsOpen(false)} className="fixed bg-black/50 z-0 h-screen w-full p-4" />

                        {/* Scrollable Content */}
                        <div className="p-4 max-h-[50svh] overflow-y-auto scroll-element relative grid sm:grid-cols-2 gap-y-4">
                            <MobileMenuSection
                                setIsOpen={setIsOpen}
                                title={
                                    // prefer `label` key across locales; fall back to 'Navigation'
                                    (typeof mobileT === "function" && mobileT("label")) || "Navigation"
                                }
                                items={scrollLinks}
                                translationNamespace="NavBar.links"
                            />

                            <MobileMenuSection
                                setIsOpen={setIsOpen}
                                titleKey={toolsDropDown.titleKey}
                                items={toolsDropDown.list}
                                translationNamespace={toolsDropDown.translationNamespace}
                            />

                            <MobileMenuSection
                                setIsOpen={setIsOpen}
                                titleKey={learnMoreDropDown.titleKey}
                                items={learnMoreDropDown.list}
                                translationNamespace={learnMoreDropDown.translationNamespace}
                            />

                            <div className="py-4">
                                <DonateButton />
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default MobileMenu;