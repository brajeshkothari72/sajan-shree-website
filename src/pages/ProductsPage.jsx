import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import SEO from '@/components/SEO.jsx';
import ProductCard from '@/components/ProductCard.jsx';
import { GraduationCap, Shirt, Package, ChefHat, ShieldCheck, Briefcase, Scissors, ArrowRight } from 'lucide-react';
import { servicePages } from '@/lib/business';

function ProductsPage() {
  const products = [
    {
      name: 'School uniforms',
      icon: GraduationCap,
      image: '/gallery/school-uniforms.jpg',
      description: 'Complete uniform sets including shirts, pants, skirts, and ties for schools. Available in various sizes and customizable with school logos and colors.'
    },
    {
      name: 'School blazers',
      icon: Shirt,
      image: '/gallery/school-blazers.jpg',
      description: 'Premium quality blazers with professional finishing. Custom embroidery and branding options available for school crests and badges.'
    },
    {
      name: 'Readymade pants',
      icon: Package,
      image: '/gallery/readymade-pants.jpg',
      description: 'Formal and casual pants in various fabrics and styles. Suitable for schools, offices, and institutions with bulk order discounts.'
    },
    {
      name: 'Aprons',
      icon: ChefHat,
      image: '/gallery/aprons.jpg',
      description: 'Durable kitchen and work aprons in multiple styles. Available in standard and custom sizes with optional pockets and branding.'
    },
    {
      name: 'Security uniforms',
      icon: ShieldCheck,
      image: '/gallery/security.jpg',
      description: 'Professional security attire including shirts, pants, and jackets. Designed for durability and comfort during long shifts.'
    },
    {
      name: 'Corporate uniforms',
      icon: Briefcase,
      image: '/gallery/corporate.jpg',
      description: 'Business and office wear for corporate environments. Customizable with company logos and available in various professional styles.'
    },
    {
      name: 'Custom bulk garments',
      icon: Scissors,
      image: '/gallery/custom-garments.jpg',
      description: 'Tailored bulk orders for specific requirements. We manufacture garments according to your exact specifications for design, fabric, and sizing.'
    }
  ];

  const categoryIcons = {
    'school-uniforms-indore': GraduationCap,
    'school-blazers-indore': Shirt,
    'corporate-uniforms-indore': Briefcase,
    'security-uniforms-indore': ShieldCheck,
    'aprons-manufacturer-indore': ChefHat,
  };

  return (
    <>
      <SEO
        title="Uniform Products in Indore"
        description="Browse school uniforms, blazers, readymade pants, aprons, security uniforms, corporate uniforms, and custom bulk garments manufactured by Sajan Shree Garments in Indore."
        path="/products"
      />

      <Header />

      <main>
        <section className="relative overflow-hidden py-24 lg:py-32">
          <div className="absolute inset-0 z-0">
            <img
              src="/products/products-hero.jpg"
              alt="Uniform products manufactured by Sajan Shree Garments"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-white" style={{letterSpacing: '-0.02em'}}>
                Uniform products manufactured in Indore
              </h1>
              <p className="text-lg text-white/90 leading-relaxed">
                School uniforms, blazers, corporate uniforms, security uniforms, aprons, and readymade garments with bulk order capabilities
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-14 sm:py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <ProductCard {...product} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden py-14 sm:py-20 lg:py-24 bg-muted">
          <img
            src="/products/decor-scissors.jpg"
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute -left-16 -top-8 z-0 w-64 lg:w-96 opacity-10 animate-sway-x mix-blend-multiply"
          />
          <img
            src="/products/decor-2.jpg"
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 -top-8 z-0 w-64 lg:w-96 opacity-10 animate-float mix-blend-multiply"
          />
          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-12 flex flex-col items-center"
            >
              <span className="eyebrow mb-4">Categories</span>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight max-w-2xl" style={{letterSpacing: '-0.02em'}}>
                Product categories for local buyers
              </h2>
              <p className="text-muted-foreground max-w-2xl mt-4 leading-relaxed">
                Specialised bulk uniform manufacturing across Indore for schools, businesses, and institutions.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {servicePages.map((service, index) => {
                const Icon = categoryIcons[service.slug] || Package;
                return (
                  <motion.div
                    key={service.slug}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                    viewport={{ once: true }}
                  >
                    <Link
                      to={`/${service.slug}`}
                      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border/70 bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-soft-lg hover:border-accent/40"
                    >
                      <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-accent to-primary transition-transform duration-300 group-hover:scale-x-100" />
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-accent/15 to-primary/10 text-primary ring-1 ring-inset ring-primary/5 transition-transform duration-300 group-hover:scale-110">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="font-semibold mb-2 leading-snug">{service.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed flex-grow">{service.description}</p>
                      <span className="mt-4 inline-flex items-center text-sm font-medium text-primary opacity-0 -translate-x-1 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                        Learn more
                        <ArrowRight className="ml-1.5 h-4 w-4" />
                      </span>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight" style={{letterSpacing: '-0.02em'}}>
                  Need something specific?
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  We specialize in custom bulk orders. Share your requirements and we'll manufacture garments exactly to your specifications.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Link
                    to="/enquiry"
                    className="inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground px-6 py-3 font-medium transition-all duration-200 hover:bg-primary/90 active:scale-[0.98]"
                  >
                    Send enquiry
                  </Link>
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center rounded-lg bg-secondary text-secondary-foreground px-6 py-3 font-medium transition-all duration-200 hover:bg-secondary/90 active:scale-[0.98]"
                  >
                    Contact us
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default ProductsPage;
