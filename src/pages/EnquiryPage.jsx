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
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight" style={{letterSpacing: '-0.02em'}}>
                Looking for bulk uniforms or garment supply in Indore?
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Share your requirements with us and we'll get back to you with detailed information and competitive pricing
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-card rounded-xl p-6 shadow-sm border border-border text-center h-full flex flex-col">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <FileText className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Request catalogue</h3>
                    <p className="text-muted-foreground text-sm mb-4 flex-grow">
                      Get our complete product catalogue with detailed specifications
                    </p>
                    <Button 
                      variant="outline"
                      className="w-full transition-all duration-200 active:scale-[0.98]"
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
                  <div className="bg-card rounded-xl p-6 shadow-sm border border-border text-center h-full flex flex-col">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <DollarSign className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Get wholesale pricing</h3>
                    <p className="text-muted-foreground text-sm mb-4 flex-grow">
                      Request competitive wholesale rates for bulk orders
                    </p>
                    <Button 
                      variant="outline"
                      className="w-full transition-all duration-200 active:scale-[0.98]"
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
                  <div className="bg-card rounded-xl p-6 shadow-sm border border-border text-center h-full flex flex-col">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <MessageCircle className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">WhatsApp us</h3>
                    <p className="text-muted-foreground text-sm mb-4 flex-grow">
                      Send your requirements directly on WhatsApp for quick response
                    </p>
                    <Button 
                      onClick={handleWhatsApp}
                      variant="outline"
                      className="w-full transition-all duration-200 active:scale-[0.98]"
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
                className="bg-card rounded-2xl shadow-lg p-8"
              >
                <h2 className="text-2xl md:text-3xl font-semibold mb-6 leading-snug text-center">
                  Send us your enquiry
                </h2>
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
