import React from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';
import { business } from '@/lib/business';

const defaultDescription =
  'Sajan Shree Garments is a uniform manufacturer and wholesaler in Indore for school uniforms, blazers, readymade pants, aprons, security uniforms, corporate uniforms, and custom bulk garments.';

function buildUrl(pathname) {
  const cleanPath = pathname === '/' ? '' : pathname;
  return `${business.siteUrl}${cleanPath}`;
}

function SEO({ title, description = defaultDescription, path, type = 'website', children }) {
  const location = useLocation();
  const pathname = path || location.pathname;
  const pageTitle = title.includes(business.name) ? title : `${title} | ${business.name}`;
  const canonicalUrl = buildUrl(pathname);
  const imageUrl = `${business.siteUrl}${business.logo}`;

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'ClothingStore',
    name: business.name,
    description: defaultDescription,
    url: business.siteUrl,
    logo: imageUrl,
    image: imageUrl,
    telephone: business.phone,
    email: business.email,
    priceRange: '$$',
    openingHours: business.openingHours,
    address: {
      '@type': 'PostalAddress',
      ...business.address,
    },
    areaServed: [
      {
        '@type': 'City',
        name: 'Indore',
      },
      {
        '@type': 'AdministrativeArea',
        name: 'Madhya Pradesh',
      },
    ],
    makesOffer: business.services.map((service) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: service,
      },
    })),
  };

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:type" content={type} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content={business.name} />
      <meta property="og:image" content={imageUrl} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />

      <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
      {children}
    </Helmet>
  );
}

export default SEO;
