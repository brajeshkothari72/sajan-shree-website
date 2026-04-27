import React from 'react';

function GalleryGrid() {
  const categories = [
    { name: 'School uniforms', description: 'Complete uniform sets for schools' },
    { name: 'School blazers', description: 'Premium quality blazers' },
    { name: 'Readymade pants', description: 'Formal and casual pants' },
    { name: 'Aprons', description: 'Kitchen and work aprons' },
    { name: 'Security uniforms', description: 'Professional security attire' },
    { name: 'Corporate uniforms', description: 'Business and office wear' },
    { name: 'Custom garments', description: 'Tailored bulk orders' }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {categories.map((category, index) => (
        <div 
          key={index}
          className="group bg-card rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
        >
          <div className="aspect-[4/3] bg-muted relative overflow-hidden">
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-muted-foreground text-sm">Product gallery</span>
            </div>
          </div>
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-2 leading-snug">{category.name}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {category.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default GalleryGrid;