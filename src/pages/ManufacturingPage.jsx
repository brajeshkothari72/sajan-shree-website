import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Package, Truck, Ruler, Shirt, Building2, RefreshCw } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import SEO from '@/components/SEO.jsx';
import CapabilityCard from '@/components/CapabilityCard.jsx';

function ManufacturingPage() {
  const capabilities = [
    {
      number: 1,
      icon: Package,
      title: 'Bulk orders',
      description: 'We specialize in large-scale production with the capacity to handle orders ranging from hundreds to thousands of units while maintaining consistent quality.'
    },
    {
      number: 2,
      icon: Truck,
      title: 'Wholesale supply',
      description: 'Competitive wholesale pricing for retailers, distributors, and institutions. Long-term supply partnerships with reliable delivery schedules.'
    },
    {
      number: 3,
      icon: Ruler,
      title: 'Custom sizing',
      description: 'Flexible sizing options to accommodate diverse requirements. We can manufacture garments in standard sizes or create custom size charts for your organization.'
    },
    {
      number: 4,
      icon: Shirt,
      title: 'Fabric options',
      description: 'Wide selection of fabrics including cotton, polyester blends, and premium materials. We help you choose the right fabric for your specific needs and budget.'
    },
    {
      number: 5,
      icon: Building2,
      title: 'Institutional orders',
      description: 'Specialized service for schools, colleges, hospitals, and corporate clients. We understand the unique requirements of institutional uniform programs.'
    },
    {
      number: 6,
      icon: RefreshCw,
      title: 'Repeat supply',
      description: 'Streamlined reordering process for ongoing uniform needs. We maintain records of your specifications for quick and accurate repeat orders.'
    }
  ];

  return (
    <>
      <SEO
        title="Bulk Garment Manufacturing in Indore"
        description="Large-scale garment manufacturing and wholesale uniform supply in Indore with custom sizing, fabric options, quality checks, and reliable delivery for institutional bulk orders."
        path="/manufacturing"
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
                Bulk garment manufacturing and wholesale supply in Indore
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Specialized manufacturing services for bulk garment buyers, institutions, and wholesale distributors
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight" style={{letterSpacing: '-0.02em'}}>
                  Our manufacturing capabilities
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-12">
                  With modern equipment and experienced staff, we deliver large-scale garment production with consistent quality and timely delivery. Our manufacturing process is designed to handle complex bulk orders while maintaining the flexibility to accommodate custom requirements.
                </p>

                <div className="space-y-12">
                  {capabilities.map((capability, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <CapabilityCard {...capability} />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight" style={{letterSpacing: '-0.02em'}}>
                  Quality assurance
                </h2>
                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Every garment we manufacture goes through rigorous quality checks at multiple stages of production. From fabric inspection to final finishing, we ensure that each piece meets our high standards before it reaches you.
                  </p>
                  <p>
                    Our quality control process includes checking stitching strength, color consistency, sizing accuracy, and overall finishing. We understand that bulk orders require absolute consistency, and our systems are designed to deliver exactly that.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight" style={{letterSpacing: '-0.02em'}}>
                  Ready to place a bulk order?
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Contact us to discuss your requirements and get a detailed quote for your bulk garment order.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Link
                    to="/enquiry"
                    className="inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground px-6 py-3 font-medium transition-all duration-200 hover:bg-primary/90 active:scale-[0.98]"
                  >
                    Request quote
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

export default ManufacturingPage;
