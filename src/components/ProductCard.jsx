import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Package } from 'lucide-react';

function ProductCard({ name, description, image, icon: Icon = Package }) {
  const handleEnquiry = () => {
    window.location.href = '/enquiry';
  };

  return (
    <div className="group relative bg-card rounded-2xl shadow-soft border border-border/60 overflow-hidden transition-all duration-300 hover:shadow-soft-lg hover:-translate-y-1.5 hover:border-accent/40 flex flex-col h-full">
      <div className="absolute inset-x-0 top-0 z-20 h-1 origin-left scale-x-0 bg-gradient-to-r from-accent to-primary transition-transform duration-300 group-hover:scale-x-100" />

      <div className="aspect-[4/3] relative overflow-hidden">
        {image ? (
          <>
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </>
        ) : (
          <div className="relative h-full w-full bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10">
            <div className="absolute inset-0 bg-dot-grid opacity-60" />
            <div className="relative h-full w-full flex flex-col items-center justify-center gap-3">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-card/80 shadow-soft ring-1 ring-inset ring-primary/5 text-primary transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
                <Icon className="h-8 w-8" />
              </div>
              <span className="text-sm font-medium text-primary/60">{name}</span>
            </div>
          </div>
        )}
        <span className="absolute left-3 top-3 z-10 rounded-full bg-card/90 px-3 py-1 text-xs font-semibold text-primary shadow-sm backdrop-blur">
          Bulk orders
        </span>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold mb-2 leading-snug transition-colors duration-200 group-hover:text-primary">{name}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
          {description}
        </p>
        <Button
          onClick={handleEnquiry}
          className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 active:scale-[0.98]"
        >
          Send enquiry
          <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
        </Button>
      </div>
    </div>
  );
}

export default ProductCard;
