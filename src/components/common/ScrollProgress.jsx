/**
 * @file ScrollProgress.tsx
 * @module UI/ScrollProgress
 * @desc Framer Motion-based scroll progress bar displayed at the top of the page.
 *       Provides smooth scroll tracking feedback to the user.
 *
 * @author Chace Nielson
 * @created Mar 14, 2025
 * @updated Apr 1, 2025
 *
 * @features
 * - Uses Framer Motion `useScroll` and `useSpring` for smooth animation
 * - Responsive and lightweight scroll indicator
 * - Automatically reacts to vertical scroll position
 */

// framer-motion library
import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  // Track the scroll progress (0 - 1) of entire page scroll
  const { scrollYProgress } = useScroll();

  // Apply spring animation for smooth progress bar motion
  const springScrollYProgress = useSpring(scrollYProgress, {
    stiffness: 300,
    damping: 30,
    mass: 1,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-1 bg-tertiary-alt origin-left z-50"
      style={{ scaleX: springScrollYProgress }}
      aria-hidden="true"
    />
  );
}
