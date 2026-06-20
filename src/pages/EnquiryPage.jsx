import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { FileText, DollarSign, MessageCircle } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import SEO from '@/components/SEO.jsx';
import EnquiryForm from '@/components/EnquiryForm.jsx';

function EnquiryPage() {
  const handleWhatsApp = () => {
    window.open('https://wa.me/919425062368', '_blank');
  };

  return (
    <>
      <SEO
        title="Bulk Uniform Enquiry in Indore"
        description="Send a bulk uniform enquiry to Sajan Shree Garments for school uniforms, blazers, corporate uniforms, security uniforms, aprons, and wholesale garment pricing in Indore."
        path="/enquiry"
      />

      <Header />

      <main>
        <section className="relative overflow-hidden py-24 lg:py-32">
          <div className="absolute inset-0 z-0">
            <img
              src="/manufacturing/manufacturing-hero.jpg"
              alt="Bulk uniform and garment supply enquiry"
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
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)]" style={{letterSpacing: '-0.02em'}}>
                Looking for bulk uniforms or garment supply in Indore?
              </h1>
              <p className="text-lg text-white/90 leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
                Share your requirements with us and we'll get back to you with detailed information and competitive pricing
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-14 sm:py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="group relative overflow-hidden bg-primary rounded-2xl p-6 shadow-soft border border-primary text-center h-full flex flex-col transition-all duration-300 hover:-translate-y-1.5 hover:shadow-soft-lg">
                    <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-accent to-secondary transition-transform duration-300 group-hover:scale-x-100" />
                    <div className="w-14 h-14 rounded-2xl bg-primary-foreground/15 ring-1 ring-inset ring-primary-foreground/10 flex items-center justify-center mx-auto mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                      <FileText className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-primary-foreground">Request catalogue</h3>
                    <p className="text-primary-foreground/70 text-sm mb-4 flex-grow">
                      Get our complete product catalogue with detailed specifications
                    </p>
                    <Button 
                      variant="outline"
                      className="w-full bg-primary-foreground text-primary border-0 hover:bg-primary-foreground/90 transition-all duration-200 active:scale-[0.98]"
                    >
                      Download catalogue
                    </Button>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="group relative overflow-hidden bg-primary rounded-2xl p-6 shadow-soft border border-primary text-center h-full flex flex-col transition-all duration-300 hover:-translate-y-1.5 hover:shadow-soft-lg">
                    <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-accent to-secondary transition-transform duration-300 group-hover:scale-x-100" />
                    <div className="w-14 h-14 rounded-2xl bg-primary-foreground/15 ring-1 ring-inset ring-primary-foreground/10 flex items-center justify-center mx-auto mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                      <DollarSign className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-primary-foreground">Get wholesale pricing</h3>
                    <p className="text-primary-foreground/70 text-sm mb-4 flex-grow">
                      Request competitive wholesale rates for bulk orders
                    </p>
                    <Button 
                      variant="outline"
                      className="w-full bg-primary-foreground text-primary border-0 hover:bg-primary-foreground/90 transition-all duration-200 active:scale-[0.98]"
                    >
                      Request pricing
                    </Button>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <div className="group relative overflow-hidden bg-primary rounded-2xl p-6 shadow-soft border border-primary text-center h-full flex flex-col transition-all duration-300 hover:-translate-y-1.5 hover:shadow-soft-lg">
                    <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-accent to-secondary transition-transform duration-300 group-hover:scale-x-100" />
                    <div className="w-14 h-14 rounded-2xl bg-primary-foreground/15 ring-1 ring-inset ring-primary-foreground/10 flex items-center justify-center mx-auto mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                      <MessageCircle className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-primary-foreground">WhatsApp us</h3>
                    <p className="text-primary-foreground/70 text-sm mb-4 flex-grow">
                      Send your requirements directly on WhatsApp for quick response
                    </p>
                    <Button 
                      onClick={handleWhatsApp}
                      variant="outline"
                      className="w-full bg-primary-foreground text-primary border-0 hover:bg-primary-foreground/90 transition-all duration-200 active:scale-[0.98]"
                    >
                      Open WhatsApp
                    </Button>
                  </div>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-card rounded-2xl shadow-soft-lg border border-border/60 p-8"
              >
                <div className="text-center mb-8 flex flex-col items-center">
                  <span className="eyebrow mb-4">Enquiry form</span>
                  <h2 className="text-2xl md:text-3xl font-semibold leading-snug">
                    Send us your enquiry
                  </h2>
                </div>
                <EnquiryForm />
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default EnquiryPage;
