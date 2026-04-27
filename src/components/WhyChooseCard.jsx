import React from 'react';

function WhyChooseCard({ icon: Icon, title, description }) {
  return (
    <div className="bg-card rounded-xl p-6 shadow-sm border border-border transition-all duration-300 hover:shadow-md flex flex-col h-full">
      <div className="mb-4">
        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
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