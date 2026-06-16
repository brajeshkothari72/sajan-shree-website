import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

function ProductCard({ name, description, image }) {
  const handleEnquiry = () => {
    window.location.href = '/enquiry';
  };

  return (
    <div className="group bg-card rounded-2xl shadow-soft border border-border/60 overflow-hidden transition-all duration-300 hover:shadow-soft-lg hover:-translate-y-1.5 hover:border-accent/40 flex flex-col h-full">
      <div className="aspect-[4/3] bg-muted relative overflow-hidden">
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
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-muted-foreground text-sm">Product image</span>
          </div>
        )}
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold mb-2 leading-snug">{name}</h3>
        <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">
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