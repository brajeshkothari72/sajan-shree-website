import React from 'react';
import { motion } from 'framer-motion';
import { Target, Heart, HeartHandshake as Handshake, TrendingUp } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import SEO from '@/components/SEO.jsx';

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
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight" style={{letterSpacing: '-0.02em'}}>
                About Sajan Shree Garments
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Your trusted uniform manufacturing and wholesale supply partner in Indore
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
                  Who we are
                </h2>
                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Sajan Shree Garments is a leading manufacturer and wholesaler of quality uniforms and readymade garments based in Indore. With years of experience in the garment industry, we have built a reputation for delivering consistent quality, competitive pricing, and reliable service to our clients.
                  </p>
                  <p>
                    Our manufacturing facility is equipped with modern machinery and staffed by skilled professionals who understand the importance of precision and quality in every garment we produce. We specialize in bulk orders for schools, corporates, security agencies, and institutions, offering a complete range of uniform solutions.
                  </p>
                  <p>
                    From school uniforms and blazers to corporate wear and security dresses, we manufacture garments that meet the highest standards of durability and comfort. Our custom garment services allow clients to specify their exact requirements for design, fabric, sizing, and branding.
                  </p>
                </div>
              </motion.div>

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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {values.map((value, index) => (
                    <div key={index} className="bg-card rounded-xl p-6 shadow-sm border border-border">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                        <value.icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2 leading-snug">{value.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {value.description}
                      </p>
                    </div>
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
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default AboutUsPage;
