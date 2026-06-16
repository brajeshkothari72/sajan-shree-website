import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Package, Users, Clock, Award, Truck, Shield, Sparkles, ChevronDown, Check, Shirt, Scissors } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import SEO from '@/components/SEO.jsx';
import WhyChooseCard from '@/components/WhyChooseCard.jsx';
import EnquiryForm from '@/components/EnquiryForm.jsx';
import CountUp from '@/components/CountUp.jsx';
import HeroCarousel from '@/components/HeroCarousel.jsx';

const heroSlides = [
  {
    image: '/hero/hero-1.jpg',
    eyebrow: 'Trusted bulk garment manufacturer',
    titleBefore: 'Uniform manufacturer and wholesaler in ',
    titleHighlight: 'Indore',
    titleAfter: '',
    subtitle: 'Specializing in school uniforms, blazers, readymade pants, aprons, security uniforms, corporate wear, and custom bulk garments for Indore schools, institutions, and businesses.',
  },
  {
    image: '/hero/hero-2.jpg',
    eyebrow: 'School uniforms',
    titleBefore: 'Complete school uniforms, made in ',
    titleHighlight: 'bulk',
    titleAfter: '',
    subtitle: 'Shirts, pants, skirts, and blazers with consistent quality and sizing across thousands of units — delivered on time for schools across the region.',
  },
  {
    image: '/hero/hero-3.jpg',
    eyebrow: 'Corporate & security wear',
    titleBefore: 'Professional uniforms that fit your ',
    titleHighlight: 'brand',
    titleAfter: '',
    subtitle: 'Corporate wear, security uniforms, and workwear tailored to your colours, logo, sizing, and design requirements.',
  },
  {
    image: '/hero/hero-4.jpg',
    eyebrow: 'Custom manufacturing',
    titleBefore: 'Your design, manufactured at ',
    titleHighlight: 'scale',
    titleAfter: '',
    subtitle: 'From fabric selection to finishing — custom bulk garment production backed by reliable, on-time delivery.',
  },
  {
    image: '/hero/hero-5.jpg',
    eyebrow: 'Quality you can trust',
    titleBefore: 'Premium stitching, ',
    titleHighlight: 'durable fabrics',
    titleAfter: '',
    subtitle: 'Attention to detail in every garment we produce, backed by years of large-scale manufacturing experience.',
  },
];

const heroImages = heroSlides.map((s) => s.image);

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

  const HERO_INTERVAL = 5000;
  const [slide, setSlide] = useState(0);

  const selectSlide = useCallback((i) => setSlide(i), []);

  useEffect(() => {
    const id = setInterval(() => {
      setSlide((i) => (i + 1) % heroSlides.length);
    }, HERO_INTERVAL);
    return () => clearInterval(id);
  }, [slide]);

  const activeSlide = heroSlides[slide];

  const handleWhatsApp = () => {
    window.open('https://wa.me/919425062368', '_blank');
  };

  return (
    <>
      <SEO
        title="Uniform Manufacturer & Wholesaler in Indore"
        description="Sajan Shree Garments manufactures and wholesales school uniforms, blazers, readymade pants, aprons, security uniforms, corporate wear, and custom bulk garments in Indore."
        path="/"
      />

      <Header />

      <main>
        <section className="relative min-h-[92dvh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <HeroCarousel images={heroImages} index={slide} onSelect={selectSlide} slideDuration={HERO_INTERVAL} />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-primary/20 pointer-events-none" />
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl">
              <div className="min-h-[280px] sm:min-h-[300px] md:min-h-[340px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={slide}
                    initial={{ opacity: 0, y: -28 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <span className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-1.5 text-sm font-medium text-primary-foreground/90 backdrop-blur-sm mb-6">
                      <Sparkles className="h-4 w-4 text-accent animate-float" />
                      {activeSlide.eyebrow}
                    </span>
                    <h1
                      className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight"
                      style={{letterSpacing: '-0.02em'}}
                    >
                      {activeSlide.titleBefore}
                      <span className="bg-gradient-to-r from-accent via-sky-200 to-accent bg-[length:200%_auto] bg-clip-text text-transparent animate-gradient-pan">
                        {activeSlide.titleHighlight}
                      </span>
                      {activeSlide.titleAfter}
                    </h1>
                    <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed max-w-2xl">
                      {activeSlide.subtitle}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-wrap gap-4 mt-8"
              >
                <Button
                  asChild
                  size="lg"
                  className="group bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-lg shadow-secondary/30 transition-all duration-200 hover:-translate-y-0.5 active:scale-[0.98]"
                >
                  <Link to="/enquiry">
                    Enquire now
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 border-primary-foreground transition-all duration-200 hover:-translate-y-0.5 active:scale-[0.98]"
                >
                  <Link to="/products">
                    View products
                  </Link>
                </Button>
                <Button
                  onClick={handleWhatsApp}
                  size="lg"
                  variant="outline"
                  className="bg-transparent text-primary-foreground hover:bg-primary-foreground/10 border-primary-foreground/40 transition-all duration-200 hover:-translate-y-0.5 active:scale-[0.98]"
                >
                  WhatsApp us
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="mt-12 flex flex-wrap gap-x-10 gap-y-4 border-t border-primary-foreground/15 pt-8"
              >
                {[
                  { value: '10,000+', label: 'Garments delivered' },
                  { value: '50+', label: 'Schools & institutions' },
                  { value: '100%', label: 'On-time delivery focus' },
                ].map((stat) => (
                  <div key={stat.label}>
                    <CountUp value={stat.value} className="block text-2xl md:text-3xl font-bold text-primary-foreground" />
                    <div className="text-sm text-primary-foreground/70">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-primary-foreground/70"
          >
            <ChevronDown className="h-7 w-7 animate-scroll-cue" />
          </motion.div>
        </section>

        <section className="py-20 lg:py-28 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left: content */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true }}
              >
                <span className="eyebrow mb-5">About us</span>
                <h2 className="text-3xl md:text-4xl lg:text-[2.6rem] font-bold leading-[1.15] mb-5" style={{letterSpacing: '-0.02em'}}>
                  Where quality meets craftsmanship in every <span className="text-gradient">uniform</span> we make
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-7 max-w-xl">
                  We are a trusted uniform manufacturer and wholesaler in Indore, serving schools, corporates, security agencies, and institutions across the region with years of bulk garment production experience.
                </p>

                <div className="grid sm:grid-cols-2 gap-x-6 gap-y-4 mb-8">
                  {[
                    'Bulk manufacturing expertise',
                    'Quality fabrics & finishing',
                    'On-time, reliable delivery',
                    'Custom design & sizing',
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                        <Check className="h-4 w-4" />
                      </span>
                      <span className="text-sm font-medium text-foreground">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="border-t border-border my-8" />

                <div className="grid sm:grid-cols-2 gap-6 mb-9">
                  {[
                    { icon: Shirt, title: 'School & corporate uniforms' },
                    { icon: Scissors, title: 'Custom bulk garment orders' },
                  ].map((f) => (
                    <div key={f.title} className="flex items-center gap-4">
                      <div className="h-12 w-12 shrink-0 rounded-xl bg-primary text-primary-foreground flex items-center justify-center">
                        <f.icon className="h-6 w-6" />
                      </div>
                      <span className="font-semibold leading-snug">{f.title}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-6">
                  <Button
                    asChild
                    size="lg"
                    className="group bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-lg shadow-secondary/20 transition-all duration-200 hover:-translate-y-0.5 active:scale-[0.98]"
                  >
                    <Link to="/about">
                      Explore more
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </motion.div>

              {/* Right: image collage */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="relative rounded-3xl overflow-hidden shadow-soft-lg">
                  <img
                    src="/about/about-main.jpg"
                    alt="Sajan Shree Garments quality apparel production facility"
                    className="w-full h-[420px] lg:h-[520px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5 sm:right-auto sm:max-w-[280px] bg-background/95 backdrop-blur rounded-2xl p-4 shadow-soft flex items-center gap-3">
                    <div className="h-11 w-11 shrink-0 rounded-full bg-accent/15 text-accent flex items-center justify-center">
                      <Award className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="font-bold text-primary leading-tight">Trusted by 50+ schools</div>
                      <div className="text-xs text-muted-foreground">& institutions across Indore</div>
                    </div>
                  </div>
                </div>

                <div className="hidden sm:block absolute -bottom-8 -left-8 w-40 h-40 lg:w-48 lg:h-48 rounded-2xl overflow-hidden border-4 border-background shadow-soft-lg">
                  <img
                    src="/hero/hero-1.jpg"
                    alt="Garment workers stitching uniforms"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="hidden lg:block absolute top-1/2 -right-6 -translate-y-1/2 rotate-90 origin-center text-xs font-semibold tracking-[0.3em] uppercase text-muted-foreground/50 whitespace-nowrap">
                  Sajan Shree Garments
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-muted bg-dot-grid">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-12 flex flex-col items-center"
            >
              <span className="eyebrow mb-4">Why choose us</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight" style={{letterSpacing: '-0.02em'}}>
                Built for bulk, finished with care
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
                className="text-center mb-12 flex flex-col items-center"
              >
                <span className="eyebrow mb-4">Get a quote</span>
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
                className="bg-card border border-border/60 rounded-2xl shadow-soft-lg p-8"
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
