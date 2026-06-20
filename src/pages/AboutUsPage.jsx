import React from 'react';
import { motion } from 'framer-motion';
import { Target, Heart, HeartHandshake as Handshake, TrendingUp } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import SEO from '@/components/SEO.jsx';
import ProgressRing from '@/components/ProgressRing.jsx';

function AboutUsPage() {
  const values = [
    {
      icon: Target,
      title: 'Quality first',
      description: 'We never compromise on the quality of materials, stitching, or finishing in our garments.'
    },
    {
      icon: Heart,
      title: 'Customer satisfaction',
      description: 'Building lasting relationships through responsive service and reliable delivery.'
    },
    {
      icon: Handshake,
      title: 'Ethical practices',
      description: 'Fair labor practices and sustainable manufacturing processes guide our operations.'
    },
    {
      icon: TrendingUp,
      title: 'Continuous improvement',
      description: 'Investing in better techniques, equipment, and training to serve you better.'
    }
  ];

  return (
    <>
      <SEO
        title="About Our Uniform Manufacturing Business"
        description="Learn about Sajan Shree Garments, a trusted uniform manufacturer and wholesaler in Indore for schools, corporates, institutions, and bulk garment buyers."
        path="/about"
      />

      <Header />

      <main>
        <section className="relative overflow-hidden py-24 lg:py-32">
          <div className="absolute inset-0 z-0">
            <img
              src="/about/about-hero.jpg"
              alt="Sajan Shree Garments customized stitching and tailoring"
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
                About Sajan Shree Garments
              </h1>
              <p className="text-lg text-white/90 leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
                Your trusted uniform manufacturing and wholesale supply partner in Indore
              </p>
            </motion.div>
          </div>
        </section>

        <section className="relative overflow-hidden py-20 bg-background">
          <img
            src="/about/advantage-decor.png"
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute -right-10 top-10 w-56 lg:w-80 opacity-10 animate-sway-x"
          />
          <img
            src="/about/advantage-decor.png"
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute -left-10 bottom-10 w-56 lg:w-80 opacity-10 animate-sway-x -scale-x-100"
          />
          <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch mb-16">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  viewport={{ once: true }}
                  className="relative rounded-2xl overflow-hidden shadow-soft-lg min-h-[300px] lg:min-h-0"
                >
                  <img
                    src="/about/about-main.jpg"
                    alt="Sajan Shree Garments uniform manufacturing"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight" style={{letterSpacing: '-0.02em'}}>
                  Who we are
                </h2>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-60px' }}
                  variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.25 } } }}
                  className="space-y-4 text-base text-muted-foreground leading-relaxed"
                >
                  {[
                    'Sajan Shree Garments is a leading manufacturer and wholesaler of quality uniforms and readymade garments based in Indore. With years of experience in the garment industry, we have built a reputation for delivering consistent quality, competitive pricing, and reliable service to our clients.',
                    'Our manufacturing facility is equipped with modern machinery and staffed by skilled professionals who understand the importance of precision and quality in every garment we produce. We specialize in bulk orders for schools, corporates, security agencies, and institutions, offering a complete range of uniform solutions.',
                    'From school uniforms and blazers to corporate wear and security dresses, we manufacture garments that meet the highest standards of durability and comfort. Our custom garment services allow clients to specify their exact requirements for design, fabric, sizing, and branding.',
                  ].map((text, i) => (
                    <motion.p
                      key={i}
                      variants={{
                        hidden: { opacity: 0, x: -60 },
                        visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
                      }}
                    >
                      {text}
                    </motion.p>
                  ))}
                </motion.div>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight" style={{letterSpacing: '-0.02em'}}>
                  Our mission
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our mission is to provide high-quality, affordable garments that meet the diverse needs of our clients while maintaining ethical manufacturing practices and timely delivery. We strive to be the preferred garment supplier for institutions and businesses by offering exceptional value, responsive service, and long-term reliability.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-8 leading-tight" style={{letterSpacing: '-0.02em'}}>
                  Our values
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                  {values.map((value, index) => {
                    const valueImages = ['/hero/hero-1.jpg', '/hero/hero-3.jpg', '/hero/hero-5.jpg', '/trust/working.jpg'];
                    return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
                      viewport={{ once: true }}
                      className="group relative overflow-hidden bg-card rounded-xl p-5 shadow-sm border border-border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-accent/40"
                    >
                      <img
                        src={valueImages[index % valueImages.length]}
                        alt=""
                        aria-hidden="true"
                        className="absolute inset-0 h-full w-full object-cover opacity-0 scale-105 transition-all duration-500 group-hover:opacity-100 group-hover:scale-100"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/75 to-primary/55 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                      <div className="relative z-10">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 transition-colors duration-300 group-hover:bg-primary-foreground/20">
                          <value.icon className="h-6 w-6 text-primary transition-colors duration-300 group-hover:text-primary-foreground" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2 leading-snug transition-colors duration-300 group-hover:text-primary-foreground">{value.title}</h3>
                        <p className="text-muted-foreground leading-relaxed transition-colors duration-300 group-hover:text-primary-foreground/85">
                          {value.description}
                        </p>
                      </div>
                    </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-14 sm:py-20 lg:py-24 bg-muted bg-dot-grid">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <span className="eyebrow mb-4">Why choose us</span>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight" style={{letterSpacing: '-0.02em'}}>
                  Why choose Sajan Shree Garments
                </h2>
                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    When you partner with Sajan Shree Garments, you gain access to a reliable manufacturing partner who understands the importance of quality, consistency, and timely delivery. Our bulk manufacturing capabilities allow us to handle large orders efficiently while maintaining strict quality control at every stage of production.
                  </p>
                  <p>
                    We work closely with our clients to understand their specific requirements and deliver garments that meet their exact specifications. Whether you need standard uniform designs or custom garments with specific branding and sizing, our team has the expertise and flexibility to deliver.
                  </p>
                  <p>
                    Our commitment to customer satisfaction extends beyond the initial order. We build long-term relationships with our clients by offering consistent quality, competitive pricing, and responsive service for repeat orders and ongoing supply needs.
                  </p>
                </div>
              </motion.div>

              <div className="grid grid-cols-2 gap-8 sm:gap-10 justify-items-center">
                <ProgressRing value={98} label="Quality finishing" delay={0} />
                <ProgressRing value={100} label="Timely delivery" delay={0.15} />
                <ProgressRing value={90} label="Custom design & sizing" delay={0.3} />
                <ProgressRing value={95} label="Bulk Manufacturing" delay={0.45} />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default AboutUsPage;
