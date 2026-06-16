import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';

/**
 * Full-bleed background carousel for the hero section.
 * Controlled component: the parent owns `index` and the auto-advance timer
 * so the background image stays in sync with the changing hero text.
 * Crossfades between images with a slow Ken Burns zoom. Renders only the
 * image layer (absolute inset-0) — gradient overlays and content sit on top.
 */
function HeroCarousel({ images, index, onSelect, slideDuration = 5000 }) {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <AnimatePresence initial={false}>
        <motion.img
          key={index}
          src={images[index]}
          alt=""
          aria-hidden="true"
          initial={{ opacity: 0, scale: 1.35 }}
          animate={{ opacity: 1, scale: 1.05 }}
          exit={{ opacity: 0, scale: 1.0 }}
          transition={{
            opacity: { duration: 1.2, ease: 'easeInOut' },
            scale: { duration: 1.6, ease: [0.22, 1, 0.36, 1] },
          }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>

      {images.length > 1 && (
        <div className="absolute bottom-6 right-6 z-20 flex gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => onSelect(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === index
                  ? 'w-6 bg-primary-foreground'
                  : 'w-2 bg-primary-foreground/40 hover:bg-primary-foreground/70'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default HeroCarousel;
