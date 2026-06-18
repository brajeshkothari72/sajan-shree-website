import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Package, Users, Clock, Award, Truck, Shield, Sparkles, ChevronDown, Check, Shirt, Scissors, GraduationCap, Briefcase, ShieldCheck, Phone } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import SEO from '@/components/SEO.jsx';
import WhyChooseCard from '@/components/WhyChooseCard.jsx';
import EnquiryForm from '@/components/EnquiryForm.jsx';
import CountUp from '@/components/CountUp.jsx';
import HeroCarousel from '@/components/HeroCarousel.jsx';
import ScrollShrink from '@/components/ScrollShrink.jsx';
import ScrollParallax from '@/components/ScrollParallax.jsx';
import TrustFeature from '@/components/TrustFeature.jsx';

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

  // One stable interval that auto-rotates the hero (image + text together)
  // continuously for the life of the page.
  useEffect(() => {
    const id = setInterval(() => {
      setSlide((i) => (i + 1) % heroSlides.length);
    }, HERO_INTERVAL);
    return () => clearInterval(id);
  }, []);

  // Advantage carousel: auto-advance one card at a time (discrete slide).
  const ADV_CARD_PX = 280;
  const [advIdx, setAdvIdx] = useState(0);
  const [advAnimate, setAdvAnimate] = useState(true);

  useEffect(() => {
    const id = setInterval(() => setAdvIdx((i) => i + 1), 3000);
    return () => clearInterval(id);
  }, []);

  // When we slide past the first full set, snap back to the start invisibly
  // (the duplicated list makes the jump seamless).
  useEffect(() => {
    if (advIdx >= advantages.length) {
      const t = setTimeout(() => {
        setAdvAnimate(false);
        setAdvIdx(0);
      }, 700);
      return () => clearTimeout(t);
    }
    return undefined;
  }, [advIdx]);

  useEffect(() => {
    if (!advAnimate) {
      const t = setTimeout(() => setAdvAnimate(true), 50);
      return () => clearTimeout(t);
    }
    return undefined;
  }, [advAnimate]);

  const activeSlide = heroSlides[slide];

  const advantages = [
    {
      title: 'Skilled workforce expertise',
      image: '/hero/hero-1.jpg',
      description: 'Experienced tailors delivering consistent, precise stitching on every single order.',
    },
    {
      title: 'Unmatched quality control',
      image: '/trust/working.jpg',
      description: 'Rigorous checks at every stage ensure durable, well-finished garments.',
    },
    {
      title: 'On-time bulk delivery',
      image: '/hero/hero-5.jpg',
      description: 'Efficient production schedules so your large orders always arrive on time.',
    },
    {
      title: 'Custom fabric solutions',
      image: '/hero/hero-3.jpg',
      description: 'Tailored fabric, colour and sizing options to match your exact requirements.',
    },
  ];

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
        <section className="relative min-h-[92dvh] flex items-center justify-center py-24 sm:py-28 lg:py-24">
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
                <ScrollShrink className="relative rounded-3xl overflow-hidden shadow-soft-lg">
                  <img
                    src="/about/about-main.jpg"
                    alt="Sajan Shree Garments quality apparel production facility"
                    className="w-full h-[320px] sm:h-[420px] lg:h-[520px] object-cover"
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
                </ScrollShrink>

                <div className="hidden lg:block absolute top-1/2 -right-6 -translate-y-1/2 rotate-90 origin-center text-xs font-semibold tracking-[0.3em] uppercase text-muted-foreground/50 whitespace-nowrap">
                  Sajan Shree Garments
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-14 sm:py-20 lg:py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-14 flex flex-col items-center"
            >
              <span className="eyebrow mb-4">Our services</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight max-w-3xl" style={{letterSpacing: '-0.02em'}}>
                Complete uniform &amp; garment manufacturing solutions
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: GraduationCap,
                  title: 'School uniforms',
                  description: 'Complete uniform sets — shirts, pants, skirts and blazers — manufactured in bulk with consistent quality and sizing.',
                  to: '/school-uniforms-indore',
                },
                {
                  icon: Briefcase,
                  title: 'Corporate & office wear',
                  description: 'Professional corporate uniforms tailored to your brand colours, logo and design requirements.',
                  to: '/corporate-uniforms-indore',
                },
                {
                  icon: ShieldCheck,
                  title: 'Security uniforms',
                  description: 'Durable, sharp-looking security and guard uniforms built for daily wear and long-lasting use.',
                  to: '/security-uniforms-indore',
                },
                {
                  icon: Scissors,
                  title: 'Custom bulk garments',
                  description: 'Your design, fabric and sizing — manufactured at scale with reliable, on-time delivery.',
                  to: '/products',
                },
              ].map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link
                    to={service.to}
                    className="group relative flex h-full min-h-[300px] flex-col justify-between overflow-hidden rounded-2xl border border-border/70 bg-muted/40 p-7 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-soft-lg hover:border-accent/40"
                  >
                    <img
                      src="/services/services-bg.jpg"
                      alt=""
                      aria-hidden="true"
                      className="absolute inset-0 h-full w-full object-cover opacity-0 scale-105 transition-all duration-500 group-hover:opacity-100 group-hover:scale-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/75 to-primary/45 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    <div className="absolute inset-x-0 top-0 z-10 h-1 origin-left scale-x-0 bg-gradient-to-r from-accent to-primary transition-transform duration-300 group-hover:scale-x-100" />
                    <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-accent/15 text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-accent-foreground">
                      <service.icon className="h-7 w-7" />
                    </div>
                    <div className="relative z-10 mt-auto pt-10">
                      <h3 className="mb-3 text-xl font-semibold leading-snug transition-colors duration-300 group-hover:text-primary-foreground">{service.title}</h3>
                      <p className="text-sm leading-relaxed text-muted-foreground transition-colors duration-300 group-hover:text-primary-foreground/85">{service.description}</p>
                      <span className="mt-4 inline-flex items-center text-sm font-medium text-primary opacity-0 transition-all duration-300 group-hover:text-primary-foreground group-hover:opacity-100">
                        Learn more
                        <ArrowRight className="ml-1.5 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                      </span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-14 sm:py-20 lg:py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-16 xl:px-28">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center mb-8 lg:mb-0"
            >
              <span className="eyebrow w-fit lg:ml-24">Why brands trust us</span>
              <div>
                <h2 className="text-3xl md:text-4xl lg:text-[2.5rem] font-bold leading-[1.15] mb-2 mt-12" style={{letterSpacing: '-0.02em'}}>
                  Why schools &amp; businesses rely on <span className="text-gradient">Sajan Shree</span> quality
                </h2>
                <p className="text-sm text-muted-foreground mt-0">
                  We are committed to consistent quality, ethical manufacturing, and on-time delivery. As a trusted bulk uniform manufacturer in Indore, we take responsibility for every garment that carries your name.
                </p>
              </div>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-start">
              {/* Left: stat card */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                <ScrollShrink className="relative flex min-h-[340px] sm:min-h-[440px] lg:min-h-[480px] flex-col justify-between overflow-hidden rounded-3xl border border-border/70 bg-muted/50 p-6 shadow-soft w-full lg:-mt-24">
                  <img
                    src="/trust/stat.png"
                    alt="Quality garment materials"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/20 to-background/80" />
                  <div className="relative z-10 max-w-[220px] text-xs md:text-sm font-semibold text-primary">
                    10,000+ satisfied customers across the region
                  </div>
                  <div className="relative z-10">
                    <div className="text-3xl md:text-4xl font-bold text-primary">50k+</div>
                    <div className="text-sm text-muted-foreground">Garments produced</div>
                  </div>
                </ScrollShrink>
              </motion.div>

              {/* Right: image + progress bars + checklist */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true }}
                className="flex flex-col gap-8"
              >
                <div className="grid sm:grid-cols-2 gap-6">
                  <ScrollShrink className="rounded-2xl overflow-hidden shadow-soft min-h-[220px] mt-1">
                    <img
                      src="/trust/working.jpg"
                      alt="Tailor working on garment production"
                      className="w-full h-full object-cover"
                    />
                  </ScrollShrink>
                  <div className="flex flex-col justify-center gap-5">
                    {[
                      { label: 'Quality materials & finishing', value: 95 },
                      { label: 'On-time delivery', value: 100 },
                      { label: 'Customer satisfaction', value: 96 },
                    ].map((bar, i) => (
                      <div key={bar.label}>
                        <div className="mb-2 flex justify-between text-sm font-medium">
                          <span>{bar.label}</span>
                          <span className="text-primary">{bar.value}%</span>
                        </div>
                        <div className="h-2 overflow-hidden rounded-full bg-border">
                          <motion.div
                            className="h-full rounded-full bg-gradient-to-r from-accent to-primary"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${bar.value}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.1, delay: 0.2 + i * 0.15, ease: 'easeOut' }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6">
                  {[
                    { title: 'Bulk Manufacturing', description: 'Specialized in large-scale production with consistent quality across thousands of units.' },
                    { title: 'Custom design & sizing', description: 'Tailored solutions for your specific design, fabric, and sizing requirements.' },
                    { title: 'Wide product range', description: 'From school uniforms to corporate wear, we manufacture a complete range of garments for all your needs.' },
                    { title: 'Trusted supply partner', description: 'Serving schools, corporates, and institutions with reliable, long-term supply partnerships.' },
                    { title: 'Timely delivery', description: 'Efficient production schedules ensuring your orders are delivered on time, every time.' },
                    { title: 'Quality finishing', description: 'Premium stitching, durable fabrics, and attention to detail in every garment we produce.' },
                  ].map((item) => (
                    <TrustFeature key={item.title} title={item.title} description={item.description} />
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden py-14 sm:py-20 lg:py-24 bg-muted/40">
          <img
            src="/about/advantage-decor.png"
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute top-6 left-2 w-40 lg:left-10 lg:w-56 opacity-20 animate-sway-x"
          />
          <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-14 flex flex-col items-center"
            >
              <span className="eyebrow mb-4">Our advantage</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight max-w-2xl" style={{letterSpacing: '-0.02em'}}>
                Why we stand out in the uniform industry
              </h2>
            </motion.div>
          </div>

          <div className="overflow-hidden border-y border-gray-200 py-4">
              <div
                className="flex w-max"
                style={{
                  transform: `translateX(-${advIdx * ADV_CARD_PX}px)`,
                  transition: advAnimate ? 'transform 700ms ease-in-out' : 'none',
                }}
              >
                {[...advantages, ...advantages].map((adv, index) => (
                  <div
                    key={index}
                    className="group w-[280px] shrink-0 rounded-2xl p-6"
                  >
                    <h3 className="text-lg font-semibold leading-snug mb-4 min-h-[3.25rem]">{adv.title}</h3>
                    <div className="relative rounded-xl overflow-hidden shadow-soft mb-4">
                      <img
                        src={adv.image}
                        alt={adv.title}
                        className="w-full h-28 object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                      />
                      <img
                        src={adv.image}
                        alt=""
                        aria-hidden="true"
                        className="absolute inset-0 w-full h-28 object-cover translate-x-full scale-105 opacity-0 transition-all duration-700 ease-out group-hover:translate-x-0 group-hover:scale-100 group-hover:opacity-100"
                      />
                      <div className="pointer-events-none absolute inset-0 -translate-x-full skew-x-12 bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-1000 ease-out group-hover:translate-x-[200%]" />
                    </div>
                    <p className="text-sm leading-relaxed text-muted-foreground">{adv.description}</p>
                  </div>
                ))}
              </div>
            </div>
        </section>

        <section className="py-14 sm:py-20 lg:py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              {/* Left: tall image */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true }}
                className="rounded-3xl overflow-hidden shadow-soft-lg"
              >
                <img
                  src="/about/about-main.jpg"
                  alt="Garment production and quality material selection"
                  className="w-full h-[320px] sm:h-[440px] lg:h-[560px] object-cover"
                />
              </motion.div>

              {/* Right: heading + stats */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true }}
              >
                <span className="eyebrow mb-5">Innovation in manufacturing</span>
                <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-[1.12] mb-5" style={{letterSpacing: '-0.02em'}}>
                  Modern tradition at the forefront of uniform manufacturing
                </h2>
                <p className="text-primary-foreground/80 leading-relaxed mb-10 max-w-xl">
                  We believe in operating in a way that ensures consistent quality and reliable delivery — taking care of every product and process that carries your name.
                </p>

                <div className="grid sm:grid-cols-2 gap-x-10 gap-y-8">
                  {[
                    { value: '25+', label: 'Years of experience', desc: 'Decades of experience delivering quality bulk garments.' },
                    { value: '50k+', label: 'Garments produced', desc: 'Efficient large-scale production every single month.' },
                    { value: '50+', label: 'Schools & institutions', desc: 'A trusted uniform supply partner across Indore.' },
                    { value: '99%', label: 'On-time delivery', desc: 'We deliver bulk orders reliably and on schedule.' },
                  ].map((stat) => (
                    <div key={stat.label}>
                      <CountUp value={stat.value} className="block text-4xl md:text-5xl font-bold text-primary-foreground mb-1" />
                      <div className="font-semibold mb-3">{stat.label}</div>
                      <p className="text-sm text-primary-foreground/70 border-t border-primary-foreground/20 pt-3">{stat.desc}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-14 sm:py-20 lg:py-24 bg-muted/40">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-16 flex flex-col items-center"
            >
              <span className="eyebrow mb-4">Working process</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight max-w-3xl" style={{letterSpacing: '-0.02em'}}>
                Our process for delivering quality uniforms
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
              {[
                { num: '01', title: 'Requirement & design', desc: 'We understand your design, fabric, sizing and quantity requirements in detail.' },
                { num: '02', title: 'Fabric & sampling', desc: 'Quality fabric selection with a sample approved by you before bulk production.' },
                { num: '03', title: 'Bulk production', desc: 'Large-scale manufacturing with strict quality checks at every single stage.' },
                { num: '04', title: 'Delivery & support', desc: 'On-time delivery and a reliable, long-term supply partnership.' },
              ].map((step, index) => (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group flex flex-col items-center text-center"
                >
                  <div className="mb-6 flex h-28 w-28 lg:h-32 lg:w-32 items-center justify-center rounded-full bg-card border border-border shadow-soft text-3xl lg:text-4xl font-bold text-primary transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-soft-lg">
                    {step.num}
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground max-w-[240px]">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-14 sm:py-20 lg:py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left: heading + form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true }}
              >
                <span className="eyebrow mb-5">Get a quote</span>
                <h2 className="text-3xl md:text-4xl lg:text-[2.6rem] font-bold leading-[1.12] mb-5" style={{letterSpacing: '-0.02em'}}>
                  Get in touch
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8 max-w-xl">
                  Share your requirements and we'll get back to you with a detailed quote
                </p>
                <div className="bg-card border border-border/60 rounded-2xl shadow-soft-lg p-8">
                  <EnquiryForm />
                </div>
              </motion.div>

              {/* Right: image + floating call card */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true }}
                className="relative hidden lg:block"
              >
                <div className="rounded-3xl overflow-hidden shadow-soft-lg">
                  <img
                    src="/trust/working.jpg"
                    alt="Sajan Shree Garments team ready to help"
                    className="w-full h-[560px] object-cover"
                  />
                </div>

                <div className="absolute top-1/2 -right-5 -translate-y-1/2 flex flex-col items-center gap-4 rounded-3xl bg-background/95 backdrop-blur px-4 py-6 shadow-soft-lg">
                  <a
                    href="tel:9893053534"
                    className="flex items-center gap-3 [writing-mode:vertical-rl] rotate-180 text-sm font-semibold tracking-wide text-primary"
                  >
                    <span className="text-muted-foreground font-medium">Call us any time</span>
                    9893053534
                  </a>
                  <a
                    href="tel:9893053534"
                    aria-label="Call Sajan Shree Garments"
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-lg shadow-accent/30 transition-transform duration-200 hover:scale-110"
                  >
                    <Phone className="h-5 w-5" />
                  </a>
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

export default HomePage;
