import React from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import SEO from '@/components/SEO.jsx';
import ContactForm from '@/components/ContactForm.jsx';

function ContactPage() {
  return (
    <>
      <SEO
        title="Contact Uniform Manufacturer in Indore"
        description="Contact Sajan Shree Garments in Indore for bulk uniform orders, wholesale garment enquiries, school uniforms, blazers, aprons, security uniforms, and corporate wear."
        path="/contact"
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
                Contact us
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Contact our Indore team for school uniform, corporate uniform, security uniform, apron, blazer, and custom bulk garment requirements.
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
              <ContactForm />
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default ContactPage;
