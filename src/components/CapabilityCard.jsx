import React from 'react';

function CapabilityCard({ number, title, description, icon: Icon, isLast }) {
  return (
    <div className="group relative pl-20 pb-10 last:pb-0">
      {/* connector line */}
      {!isLast && (
        <span className="absolute left-7 top-16 bottom-0 w-px bg-border transition-colors duration-300 group-hover:bg-accent/40" />
      )}
      {/* numbered circle */}
      <span
        className="absolute left-0 top-0 flex h-14 w-14 items-center justify-center rounded-full border border-border bg-card text-base font-bold text-primary shadow-soft transition-all duration-300 group-hover:-translate-y-0.5 group-hover:border-accent group-hover:bg-primary group-hover:text-primary-foreground"
        style={{ fontVariantNumeric: 'tabular-nums' }}
      >
        {number.toString().padStart(2, '0')}
      </span>

      <div className="pt-1.5">
        <div className="mb-2 flex items-center gap-2.5">
          {Icon && (
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-accent/15 to-primary/10 text-primary ring-1 ring-inset ring-primary/5 transition-transform duration-300 group-hover:scale-110">
              <Icon className="h-5 w-5" />
            </span>
          )}
          <h3 className="text-xl font-semibold leading-snug transition-colors duration-200 group-hover:text-primary">{title}</h3>
        </div>
        <p className="text-primary/80 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

export default CapabilityCard;
