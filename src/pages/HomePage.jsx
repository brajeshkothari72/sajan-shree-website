import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Package, Users, Clock, Award, Truck, Shield, Sparkles } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import WhyChooseCard from '@/components/WhyChooseCard.jsx';
import EnquiryForm from '@/components/EnquiryForm.jsx';

function HomePage() {
  const whyChooseItems = [
    {
      icon: Package,
      title: 'Wide product range',
      description: 'From school uniforms to corporate wear, we manufacture a complete range of garments for all your needs.'
    },
    {
      icon: Users,
      title: 'Bulk manufacturing',
      description: 'Specialized in large-scale production with consistent quality across thousands of units.'
    },
    {
      icon: Sparkles,
      title: 'Custom requirements',
      description: 'Tailored solutions for your specific design, fabric, and sizing requirements.'
    },
    {
      icon: Award,
      title: 'Quality finishing',
      description: 'Premium stitching, durable fabrics, and attention to detail in every garment we produce.'
    },
    {
      icon: Shield,
      title: 'Trusted supply partner',
      description: 'Serving schools, corporates, and institutions with reliable, long-term supply partnerships.'
    },
    {
      icon: Truck,
      title: 'Timely delivery',
      description: 'Efficient production schedules ensuring your orders are delivered on time, every time.'
    },
    {
      icon: Clock,
      title: 'Professional range',
      description: 'Comprehensive selection of professional garments suitable for various industries and sectors.'
    }
  ];

  const handleWhatsApp = () => {
    window.open('https://wa.me/919425006236', '_blank');
  };

  return (
    <>
      <Helmet>
        <title>Sajan Shree Garments - Manufacturers & Wholesalers of Quality Uniforms</title>
        <meta name="description" content="Leading manufacturers and wholesalers of school uniforms, blazers, readymade pants, aprons, security uniforms, and corporate wear in Indore. Bulk orders and custom garments available." />
      </Helmet>

      <Header />

      <main>
        <section className="relative min-h-[90dvh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1603782637810-95d06f1d5663" 
              alt="Modern garment manufacturing facility with industrial sewing machines"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/75" />
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight" style={{letterSpacing: '-0.02em'}}>
                Manufacturers & wholesalers of quality uniforms and readymade garments
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 leading-relaxed max-w-2xl">
                Specializing in school uniforms, blazers, readymade pants, aprons, security uniforms, corporate wear, and custom bulk garments for institutions and businesses.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  asChild
                  size="lg"
                  className="bg-secondary text-secondary-foreground hover:bg-secondary/90 transition-all duration-200 active:scale-[0.98]"
                >
                  <Link to="/enquiry">
                    Enquire now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button 
                  asChild
                  size="lg"
                  variant="outline"
                  className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 border-primary-foreground transition-all duration-200 active:scale-[0.98]"
                >
                  <Link to="/products">
                    View products
                  </Link>
                </Button>
                <Button 
                  onClick={handleWhatsApp}
                  size="lg"
                  variant="outline"
                  className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 border-primary-foreground transition-all duration-200 active:scale-[0.98]"
                >
                  WhatsApp us
                </Button>
              </div>
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
              className="max-w-3xl mx-auto text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight" style={{letterSpacing: '-0.02em'}}>
                About Sajan Shree Garments
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We are a trusted manufacturer and wholesaler of quality garments, serving schools, corporates, and institutions across the region. With years of experience in bulk garment production, we deliver consistent quality, competitive pricing, and reliable supply partnerships. Our manufacturing facility is equipped to handle large orders while maintaining the highest standards of craftsmanship.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-muted rounded-2xl p-8"
              >
                <h3 className="text-xl font-semibold mb-4">Our mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To provide high-quality, affordable garments that meet the diverse needs of our clients while maintaining ethical manufacturing practices and timely delivery.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-muted rounded-2xl p-8"
              >
                <h3 className="text-xl font-semibold mb-4">Our commitment</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We are committed to building long-term relationships with our clients through consistent quality, competitive pricing, and responsive customer service.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight" style={{letterSpacing: '-0.02em'}}>
                Why choose us
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                We combine manufacturing expertise with customer-focused service to deliver exceptional value
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {whyChooseItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <WhyChooseCard {...item} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight" style={{letterSpacing: '-0.02em'}}>
                  Get in touch
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Share your requirements and we'll get back to you with a detailed quote
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-card rounded-2xl shadow-lg p-8"
              >
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

export default HomePage;