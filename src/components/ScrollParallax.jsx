import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

/**
 * Scroll-linked parallax. As the element passes through the viewport, its
 * contents drift vertically (default: upward) at a rate tied to scroll
 * position — so text "scrolls" with a gentle offset relative to the page.
 * The outer (un-transformed) div measures scroll and reserves layout space.
 */
function ScrollParallax({ children, className = '', distance = 60 }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [distance, -distance]);

  return (
    <div ref={ref} className={className}>
      <motion.div style={{ y }} className="will-change-transform">
        {children}
      </motion.div>
    </div>
  );
}

export default ScrollParallax;
