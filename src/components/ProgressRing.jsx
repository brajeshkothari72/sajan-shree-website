import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, useMotionValue, animate } from 'framer-motion';

/**
 * Animated circular progress ring with a gradient arc, soft glow, and a
 * count-up percentage. The arc fills and the number counts up when scrolled
 * into view. The whole ring lifts gently on hover.
 */
function ProgressRing({ value, label, size = 168, stroke = 9, delay = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const gradId = `ring-grad-${label.replace(/[^a-zA-Z0-9]/g, '-')}`;

  const motionValue = useMotionValue(0);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return undefined;
    const controls = animate(motionValue, value, {
      duration: 1.6,
      ease: 'easeOut',
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, value, motionValue]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="group flex flex-col items-center text-center"
    >
      <div
        className="relative w-full transition-transform duration-300 group-hover:-translate-y-1.5"
        style={{ maxWidth: size, aspectRatio: '1 / 1' }}
      >
        <svg viewBox={`0 0 ${size} ${size}`} className="w-full h-full -rotate-90 overflow-visible">
          <defs>
            <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(var(--accent))" />
              <stop offset="100%" stopColor="hsl(var(--secondary))" />
            </linearGradient>
          </defs>
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="hsl(var(--border))"
            strokeWidth={stroke}
          />
          <motion.circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke={`url(#${gradId})`}
            strokeWidth={stroke}
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={inView ? { strokeDashoffset: circumference * (1 - value / 100) } : {}}
            transition={{ duration: 1.6, ease: 'easeOut' }}
            style={{ filter: 'drop-shadow(0 3px 8px hsl(var(--secondary) / 0.35))' }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-2xl sm:text-3xl font-bold text-primary tabular-nums">{display}</span>
          <span className="mt-0.5 sm:mt-1 text-base sm:text-lg font-semibold text-secondary">%</span>
        </div>
      </div>
      <div className="mt-4 sm:mt-5 text-sm sm:text-base font-semibold text-foreground">{label}</div>
    </motion.div>
  );
}

export default ProgressRing;
