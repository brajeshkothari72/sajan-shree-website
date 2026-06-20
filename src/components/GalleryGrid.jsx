import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Shirt, Package, ChefHat, ShieldCheck, Briefcase, Scissors } from 'lucide-react';

function GalleryGrid() {
  const categories = [
    { name: 'School uniforms', description: 'Complete uniform sets for schools', icon: GraduationCap, image: '/gallery/school-uniforms.jpg' },
    { name: 'School blazers', description: 'Premium quality blazers', icon: Shirt, image: '/gallery/school-blazers.jpg' },
    { name: 'Readymade pants', description: 'Formal and casual pants', icon: Package, image: '/gallery/readymade-pants.jpg' },
    { name: 'Aprons', description: 'Kitchen and work aprons', icon: ChefHat, image: '/gallery/aprons.jpg' },
    { name: 'Security uniforms', description: 'Professional security attire', icon: ShieldCheck, image: '/gallery/security.jpg' },
    { name: 'Corporate uniforms', description: 'Business and office wear', icon: Briefcase, image: '/gallery/corporate.jpg' },
    { name: 'Custom garments', description: 'Tailored bulk orders', icon: Scissors, image: '/gallery/custom-garments.jpg' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {categories.map((category, index) => {
        const Icon = category.icon;
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="group relative flex flex-col overflow-hidden rounded-2xl border border-border/60 bg-card shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-soft-lg hover:border-accent/40"
          >
            <div className="absolute inset-x-0 top-0 z-20 h-1 origin-left scale-x-0 bg-gradient-to-r from-accent to-primary transition-transform duration-300 group-hover:scale-x-100" />

            <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10">
              {category.image ? (
                <>
                  <img
                    src={category.image}
                    alt={category.name}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </>
              ) : (
                <>
                  <div className="absolute inset-0 bg-dot-grid opacity-60" />
                  <div className="relative flex h-full w-full items-center justify-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-card/80 text-primary shadow-soft ring-1 ring-inset ring-primary/5 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
                      <Icon className="h-8 w-8" />
                    </div>
                  </div>
                </>
              )}
              <span className="absolute left-3 top-3 z-10 rounded-full bg-card/90 px-3 py-1 text-xs font-semibold text-primary shadow-sm backdrop-blur">
                Bulk orders
              </span>
            </div>

            <div className="p-6">
              <h3 className="text-lg font-semibold mb-2 leading-snug transition-colors duration-200 group-hover:text-primary">{category.name}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{category.description}</p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

export default GalleryGrid;
