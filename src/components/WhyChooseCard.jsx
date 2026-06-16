import React from 'react';

function WhyChooseCard({ icon: Icon, title, description }) {
  return (
    <div className="group relative bg-card rounded-2xl p-6 shadow-soft border border-border/70 transition-all duration-300 hover:-translate-y-1 hover:shadow-soft-lg hover:border-accent/40 flex flex-col h-full overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-accent to-primary scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
      <div className="mb-4">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/15 to-primary/10 flex items-center justify-center ring-1 ring-inset ring-primary/5 transition-transform duration-300 group-hover:scale-110">
          <Icon className="h-6 w-6 text-primary" />
        </div>
      </div>
      <h3 className="text-lg font-semibold mb-2 leading-snug">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed flex-grow">
        {description}
      </p>
    </div>
  );
}

export default WhyChooseCard;