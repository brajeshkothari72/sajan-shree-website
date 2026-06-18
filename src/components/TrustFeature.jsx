import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ChevronDown } from 'lucide-react';

/**
 * A trust checklist item with an expand arrow. Clicking the row (or arrow)
 * reveals the item's description with a smooth height/opacity animation.
 */
function TrustFeature({ title, description }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-border/60 py-2">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="flex w-full items-center gap-3 text-left"
      >
        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
          <Check className="h-4 w-4" />
        </span>
        <span className="text-sm font-medium">{title}</span>
        <motion.span
          className="ml-auto shrink-0 text-accent"
          animate={open ? { rotate: 180, y: 0 } : { rotate: 0, y: [0, 4, 0] }}
          transition={
            open
              ? { duration: 0.3, ease: 'easeInOut' }
              : { y: { duration: 1.2, repeat: Infinity, ease: 'easeInOut' }, rotate: { duration: 0.3 } }
          }
        >
          <ChevronDown className="h-4 w-4" />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="pl-9 pt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default TrustFeature;
