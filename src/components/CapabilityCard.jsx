import React from 'react';

function CapabilityCard({ number, title, description, icon: Icon }) {
  return (
    <div className="flex gap-6 items-start">
      <div className="flex-shrink-0">
        <span 
          className="text-6xl font-bold text-primary/10 leading-none block"
          style={{fontVariantNumeric: 'tabular-nums'}}
        >
          {number.toString().padStart(2, '0')}
        </span>
      </div>
      <div className="flex-grow pt-2">
        <div className="flex items-center gap-3 mb-3">
          {Icon && <Icon className="h-6 w-6 text-primary" />}
          <h3 className="text-xl font-semibold leading-snug">{title}</h3>
        </div>
        <p className="text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}

export default CapabilityCard;