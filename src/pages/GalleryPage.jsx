import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import GalleryGrid from '@/components/GalleryGrid.jsx';

function GalleryPage() {
  return (
    <>
      <Helmet>
        <title>Product Gallery - Sajan Shree Garments</title>
        <meta name="description" content="Browse our product gallery showcasing school uniforms, blazers, pants, aprons, security uniforms, corporate wear, and custom garments." />
      </Helmet>

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
                Our product gallery
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Explore our range of quality uniforms and garments manufactured for various industries and institutions
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <GalleryGrid />
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight" style={{letterSpacing: '-0.02em'}}>
                  Interested in our products?
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Contact us to learn more about our products, request samples, or place a bulk order.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <a 
                    href="/enquiry"
                    className="inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground px-6 py-3 font-medium transition-all duration-200 hover:bg-primary/90 active:scale-[0.98]"
                  >
                    Send enquiry
                  </a>
                  <a 
                    href="/products"
                    className="inline-flex items-center justify-center rounded-lg bg-secondary text-secondary-foreground px-6 py-3 font-medium transition-all duration-200 hover:bg-secondary/90 active:scale-[0.98]"
                  >
                    View all products
                  </a>
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

export default GalleryPage;