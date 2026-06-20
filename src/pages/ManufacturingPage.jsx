import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Package, Truck, Ruler, Shirt, Building2, RefreshCw, Check, ArrowRight } from 'lucide-react';
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
        <section className="relative overflow-hidden py-24 lg:py-32">
          <div className="absolute inset-0 z-0">
            <img
              src="/manufacturing/manufacturing-hero.jpg"
              alt="Bulk garment manufacturing and tailoring at Sajan Shree Garments"
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
                Bulk garment manufacturing and wholesale supply in Indore
              </h1>
              <p className="text-lg text-white/90 leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
                Specialized manufacturing services for bulk garment buyers, institutions, and wholesale distributors
              </p>
            </motion.div>
          </div>
        </section>

        <section className="relative overflow-hidden py-20 bg-background">
          <img src="/manufacturing/side-left.png" alt="" aria-hidden="true" className="pointer-events-none absolute -left-14 top-2 z-0 hidden lg:block w-[32rem] xl:w-[40rem] h-auto opacity-20 animate-float" style={{ animationDelay: '0.5s' }} />
          <img src="/manufacturing/icon-1.png" alt="" aria-hidden="true" className="pointer-events-none absolute right-8 top-[6%] z-0 hidden lg:block w-24 xl:w-28 opacity-15 animate-float" style={{ animationDelay: '0s' }} />
          <img src="/manufacturing/icon-2.png" alt="" aria-hidden="true" className="pointer-events-none absolute right-36 top-[24%] z-0 hidden lg:block w-24 xl:w-28 opacity-15 animate-sway-x" style={{ animationDelay: '0.8s' }} />
          <img src="/manufacturing/icon-3.png" alt="" aria-hidden="true" className="pointer-events-none absolute right-8 top-[42%] z-0 hidden lg:block w-24 xl:w-28 opacity-15 animate-float" style={{ animationDelay: '1.6s' }} />
          <img src="/about/advantage-decor.png" alt="" aria-hidden="true" className="pointer-events-none absolute right-36 top-[58%] z-0 hidden lg:block w-24 xl:w-28 opacity-15 animate-float" style={{ animationDelay: '1.3s' }} />
          <img src="/manufacturing/icon-4.png" alt="" aria-hidden="true" className="pointer-events-none absolute right-8 top-[74%] z-0 hidden lg:block w-24 xl:w-28 opacity-15 animate-sway-x" style={{ animationDelay: '2.2s' }} />
          <img src="/manufacturing/icon-3.png" alt="" aria-hidden="true" className="pointer-events-none absolute right-36 top-[88%] z-0 hidden xl:block w-20 opacity-15 animate-float" style={{ animationDelay: '1.1s' }} />
          <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
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

                <div className="relative">
                  {capabilities.map((capability, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -24 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                      viewport={{ once: true }}
                    >
                      <CapabilityCard {...capability} isLast={index === capabilities.length - 1} />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-14 sm:py-20 lg:py-24 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <span className="eyebrow mb-4">Quality assurance</span>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight" style={{letterSpacing: '-0.02em'}}>
                  Consistent quality, checked at every stage
                </h2>
                <div className="space-y-4 text-lg text-primary/80 leading-relaxed mb-10">
                  <p>
                    Every garment we manufacture goes through rigorous quality checks at multiple stages of production. From fabric inspection to final finishing, we ensure that each piece meets our high standards before it reaches you.
                  </p>
                  <p>
                    We understand that bulk orders require absolute consistency, and our systems are designed to deliver exactly that.
                  </p>
                </div>
              </motion.div>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { title: 'Stitching strength', desc: 'Reinforced seams tested for durability.' },
                  { title: 'Colour consistency', desc: 'Uniform shades across the entire batch.' },
                  { title: 'Sizing accuracy', desc: 'Precise measurements on every piece.' },
                  { title: 'Overall finishing', desc: 'Clean, professional finish on each garment.' },
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group flex items-start gap-4 rounded-2xl border border-border/60 bg-card p-5 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-soft-lg hover:border-accent/40"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-accent-foreground">
                      <Check className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="font-semibold leading-snug">{item.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-14 sm:py-20 lg:py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-3xl bg-primary px-6 py-14 sm:px-12 lg:py-20 text-center shadow-soft-lg"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-secondary/40" />
              <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-accent/20 blur-3xl" />
              <div className="absolute -left-16 -bottom-16 h-56 w-56 rounded-full bg-secondary/20 blur-3xl" />
              <div className="relative z-10 max-w-2xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight text-primary-foreground" style={{letterSpacing: '-0.02em'}}>
                  Ready to place a bulk order?
                </h2>
                <p className="text-lg text-primary-foreground/80 leading-relaxed mb-8">
                  Contact us to discuss your requirements and get a detailed quote for your bulk garment order.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Link
                    to="/enquiry"
                    className="group inline-flex items-center justify-center rounded-lg bg-secondary text-secondary-foreground px-6 py-3 font-medium shadow-lg shadow-secondary/30 transition-all duration-200 hover:-translate-y-0.5 hover:bg-secondary/90 active:scale-[0.98]"
                  >
                    Request quote
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center rounded-lg bg-primary-foreground text-primary px-6 py-3 font-medium transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary-foreground/90 active:scale-[0.98]"
                  >
                    Contact us
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default ManufacturingPage;
