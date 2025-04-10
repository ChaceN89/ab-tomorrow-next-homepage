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

import React, { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

// Data
import { dropdownVariants, scrollLinks, toolsDropDown, learnMoreDropDown } from "../../data/navData";

// Icons
import { RiScrollToBottomLine } from "react-icons/ri";

// COmponent 
import LinkItem from './LinkItem';
import DonateButton from './DonateButton';


// Section for better separation 
function MobileMenuSection({ title, items, setIsOpen }) {
  return (
    <div>
      <div className="text-accent text-sm uppercase tracking-wider mb-2">{title}</div>
      <ul className="space-y-4 sm:space-y-2">
        {items.map((item, index) => (
          <li key={index} onClick={() => setIsOpen(false)} className='w-fit'>
 
          <LinkItem
              href={item.href}
              router={item.router}
              scrollTo={item.scrollTo}
              disableActive // no active styles needed in dropdown
              className="flex items-center gap-2 text-white hover:text-accent-alt w-fit pr-2" // this applies the hover background etc.
            >
              {item.icon}
              {item.label}
            </LinkItem>
          </li>
        ))}
      </ul>
    </div>
  )
}


// Main function 
function MobileMenu({setIsOpen, isOpen }) {
  useEffect(() => {
    // Toggle body overflow based on menu open state
    document.body.classList.toggle("overflow-hidden", isOpen);
  
    // Resize handler to auto-close menu on md+
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };
  
    window.addEventListener("resize", handleResize);
  
    // Cleanup
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
            className="w-full "
          >

            {/* Top Divider */}
            <hr className="border-white border-1 rounded-4xl mt-4 sticky top-0 z-10" />
            <div className="absolute sm:hidden bottom-2 right-2 text-secondary"><RiScrollToBottomLine size={24} /></div>
            
            {/* backdrop */}
            <div onClick={() => setIsOpen(false)} className="fixed bg-black/50 z-0 h-screen w-full p-4"/>


            {/* Scrollable Content */}
            <div className="p-4 max-h-[50svh] overflow-y-auto scroll-element relative grid sm:grid-cols-2 gap-y-4">
              <MobileMenuSection setIsOpen={setIsOpen} title="Navigation" items={scrollLinks} />
              <MobileMenuSection setIsOpen={setIsOpen} title={toolsDropDown.title} items={toolsDropDown.list} />  
              <MobileMenuSection setIsOpen={setIsOpen} title={learnMoreDropDown.title} items={learnMoreDropDown.list} isRouter />
              <div className='py-4'><DonateButton /></div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default MobileMenu
