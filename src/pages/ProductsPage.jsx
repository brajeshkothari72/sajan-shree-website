import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import SEO from '@/components/SEO.jsx';
import ProductCard from '@/components/ProductCard.jsx';
import { servicePages } from '@/lib/business';

function ProductsPage() {
  const products = [
    {
      name: 'School uniforms',
      description: 'Complete uniform sets including shirts, pants, skirts, and ties for schools. Available in various sizes and customizable with school logos and colors.'
    },
    {
      name: 'School blazers',
      description: 'Premium quality blazers with professional finishing. Custom embroidery and branding options available for school crests and badges.'
    },
    {
      name: 'Readymade pants',
      description: 'Formal and casual pants in various fabrics and styles. Suitable for schools, offices, and institutions with bulk order discounts.'
    },
    {
      name: 'Aprons',
      description: 'Durable kitchen and work aprons in multiple styles. Available in standard and custom sizes with optional pockets and branding.'
    },
    {
      name: 'Security uniforms',
      description: 'Professional security attire including shirts, pants, and jackets. Designed for durability and comfort during long shifts.'
    },
    {
      name: 'Corporate uniforms',
      description: 'Business and office wear for corporate environments. Customizable with company logos and available in various professional styles.'
    },
    {
      name: 'Custom bulk garments',
      description: 'Tailored bulk orders for specific requirements. We manufacture garments according to your exact specifications for design, fabric, and sizing.'
    }
  ];

  return (
    <>
      <SEO
        title="Uniform Products in Indore"
        description="Browse school uniforms, blazers, readymade pants, aprons, security uniforms, corporate uniforms, and custom bulk garments manufactured by Sajan Shree Garments in Indore."
        path="/products"
      />

      <Header />

      <main>
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight" style={{letterSpacing: '-0.02em'}}>
                Uniform products manufactured in Indore
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                School uniforms, blazers, corporate uniforms, security uniforms, aprons, and readymade garments with bulk order capabilities
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-background">
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

        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center leading-tight">
                Product categories for local buyers
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {servicePages.map((service) => (
                  <Link
                    key={service.slug}
                    to={`/${service.slug}`}
                    className="rounded-lg border border-border bg-background p-5 transition-all duration-200 hover:border-primary hover:shadow-sm"
                  >
                    <h3 className="font-semibold mb-2">{service.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
