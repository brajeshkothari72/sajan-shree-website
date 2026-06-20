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
        <section className="relative overflow-hidden py-24 lg:py-32">
          <div className="absolute inset-0 z-0">
            <img
              src="/contact/contact-hero.jpg"
              alt="Contact Sajan Shree Garments Indore team"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-primary/30" />
          </div>
          <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)]" style={{letterSpacing: '-0.02em'}}>
                Contact us
              </h1>
              <p className="text-lg text-white/90 leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
                Contact our Indore team for school uniform, corporate uniform, security uniform, apron, blazer, and custom bulk garment requirements.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-14 sm:py-20 bg-background">
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
