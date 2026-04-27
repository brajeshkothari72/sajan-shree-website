import React from 'react';
import { Navigate, Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import SEO from '@/components/SEO.jsx';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { servicePages } from '@/lib/business';

function ServicePage({ slug: routeSlug }) {
  const { slug: paramSlug } = useParams();
  const slug = routeSlug || paramSlug;
  const service = servicePages.find((item) => item.slug === slug);

  if (!service) {
    return <Navigate to="/products" replace />;
  }

  return (
    <>
      <SEO title={service.title} description={service.description} path={`/${service.slug}`} />

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
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                {service.title}
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-6 leading-tight">
                  Bulk {service.name.toLowerCase()} supply for Indore institutions
                </h2>
                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Sajan Shree Garments manufactures and supplies {service.name.toLowerCase()} for schools, businesses, agencies, and institutions in Indore. We support bulk orders, repeat supply, custom sizing, and specific fabric or branding requirements.
                  </p>
                  <p>
                    Our team focuses on durable stitching, consistent finishing, practical fabric selection, and dependable delivery schedules for wholesale and institutional buyers.
                  </p>
                </div>

                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.highlights.map((highlight) => (
                    <div key={highlight} className="flex gap-3 rounded-lg border border-border bg-card p-4">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <p className="text-sm leading-relaxed text-muted-foreground">{highlight}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.aside
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="rounded-xl border border-border bg-card p-6 h-fit"
              >
                <h2 className="text-xl font-semibold mb-3">Request a quote</h2>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  Share quantity, sizes, fabric preference, branding details, and delivery timeline for accurate pricing.
                </p>
                <div className="space-y-3">
                  <Link
                    to="/enquiry"
                    className="inline-flex w-full items-center justify-center rounded-lg bg-primary text-primary-foreground px-5 py-3 font-medium transition-all duration-200 hover:bg-primary/90 active:scale-[0.98]"
                  >
                    Send enquiry
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                  <a
                    href="https://wa.me/919425062368"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-full items-center justify-center rounded-lg bg-secondary text-secondary-foreground px-5 py-3 font-medium transition-all duration-200 hover:bg-secondary/90 active:scale-[0.98]"
                  >
                    WhatsApp us
                  </a>
                </div>
              </motion.aside>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default ServicePage;
