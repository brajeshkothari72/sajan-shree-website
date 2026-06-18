import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

/**
 * Scroll-linked shrink effect. As the element passes through the viewport,
 * it shrinks vertically from the TOP — width stays the same (no left/right
 * change), only the height decreases, anchored at the top edge.
 * The outer (un-transformed) div measures scroll position so the transform
 * never feeds back into the measurement, and layout space is preserved.
 */
function ScrollShrink({ children, className = '', from = 1, to = 0.6 }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  // Continuous shrink across the whole time the element is in view: the top
  // edge moves down (height decreases from the top) as the page scrolls.
  const scaleY = useTransform(scrollYProgress, [0, 1], [from, to]);

  return (
    <div ref={ref} className="h-full">
      <motion.div
        style={{ scaleY, transformOrigin: 'bottom center' }}
        className={`will-change-transform ${className}`}
      >
        {children}
      </motion.div>
    </div>
  );
}

export default ScrollShrink;
