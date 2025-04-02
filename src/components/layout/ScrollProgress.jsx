/**
 * @file ScrollProgress.tsx
 * @module ScrollProgress
 * @desc A Framer Motion-based progress bar that tracks the scroll progress of the main content area.
 *
 * @author Chace Nielson
 * @created Mar 14, 2025
 * @updated Apr 1, 2025
 */

"use client";

import React, { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const springScrollYProgress = useSpring(scrollYProgress, {
    stiffness: 300,
    damping: 30,
    mass: 1,
  });

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-0.5 bg-tertiary-alt origin-left z-50"
      style={{ scaleX: springScrollYProgress }}
    />
  );
}
