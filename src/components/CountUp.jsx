import React, { useEffect, useRef, useState } from 'react';
import { useInView, useMotionValue, animate } from 'framer-motion';

/**
 * Animated number that counts up from 0 to `end` when scrolled into view.
 * Preserves any non-digit characters (e.g. "10,000+", "100%") around the number.
 */
function CountUp({ value, duration = 1.8, className }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const motionValue = useMotionValue(0);
  const [display, setDisplay] = useState('0');

  const match = String(value).match(/[\d,]+(?:\.\d+)?/);
  const numericString = match ? match[0].replace(/,/g, '') : '0';
  const target = parseFloat(numericString) || 0;
  const prefix = match ? value.slice(0, match.index) : '';
  const suffix = match ? value.slice(match.index + match[0].length) : value;

  useEffect(() => {
    if (!inView) return;
    const controls = animate(motionValue, target, {
      duration,
      ease: 'easeOut',
      onUpdate: (latest) => {
        const rounded = Math.round(latest);
        setDisplay(rounded.toLocaleString('en-US'));
      },
    });
    return () => controls.stop();
  }, [inView, target, duration, motionValue]);

  return (
    <span ref={ref} className={className}>
      {prefix}{display}{suffix}
    </span>
  );
}

export default CountUp;
