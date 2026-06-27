/**
 * SEO Configuration
 * Central configuration for all SEO-related settings
 */

import type { SEOConfig } from '../types/seo';

export const seoConfig: SEOConfig = {
  // Default meta information
  defaultTitle: 'Nexttradiixx Company Limited — Building Africa\'s Future',
  titleTemplate: '%s | Nexttradiixx',
  defaultDescription: 'Nexttradiixx Company Limited — Driving innovation across Global Services, Automobiles, Fashion, Real Estate, E-Commerce, Hospitality, and Farming & Agriculture. Based in Lagos, Nigeria.',
  defaultKeywords: [
    'nexttradiixx',
    'nexttradiixx company limited',
    'african business conglomerate',
    'global services nigeria',
    'automobile dealership lagos',
    'fashion lifestyle nigeria',
    'real estate nigeria',
    'ecommerce tradiixx',
    'hospitality nigeria',
    'farming agriculture nigeria',
    'business consulting africa',
    'import export nigeria',
    'frank onyeukwu'
  ],

  // Site information
  siteUrl: 'https://nexttradiixx.ng',
  siteName: 'Nexttradiixx Company Limited',
  locale: 'en_NG',
  author: 'Nexttradiixx',
  twitterHandle: '@nexttradiixx',

  // Default images
  defaultImage: 'https://nexttradiixx.ng/images/hero.jpeg',
  defaultImageAlt: 'Nexttradiixx Company Limited — Building Africa\'s Future',

  // Organization structured data
  organization: {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Nexttradiixx Company Limited',
    url: 'https://nexttradiixx.ng',
    logo: 'https://nexttradiixx.ng/images/logo.png',
    description: 'African business conglomerate driving innovation across Global Services, Automobiles, Fashion, Real Estate, E-Commerce, Hospitality, and Farming & Agriculture.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '8 Funso Owoyemi Street, Abule Egba',
      addressLocality: 'Lagos',
      addressRegion: 'Lagos State',
      addressCountry: 'NG'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+2347079800450',
      contactType: 'Customer Service',
      email: 'NexxtGroup12@gmail.com'
    },
    sameAs: [
      'https://www.linkedin.com/company/nexttradiixx',
      'https://twitter.com/nexttradiixx',
      'https://www.facebook.com/nexttradiixx'
    ]
  }
};

/**
 * Page-specific SEO configurations
 */
export const pageConfigs = {
  home: {
    title: 'Nexttradiixx Company Limited — Building Africa\'s Future',
    description: 'Nexttradiixx Company Limited: Seven business divisions spanning Global Services, Automobiles, Fashion, Real Estate, E-Commerce (Tradiixx.com), Hospitality, and Farming & Agriculture. Based in Lagos, Nigeria.',
    keywords: ['nexttradiixx', 'nexttradiixx company limited', 'african conglomerate lagos', 'automobile dealership nigeria', 'real estate lagos', 'tradiixx ecommerce', 'business consulting africa']
  },
  about: {
    title: 'About Us — Nexttradiixx Company Limited',
    description: 'Meet Frank Chibuike Onyeukwu, Founder & CEO of Nexttradiixx Company Limited. Learn about our vision to build Africa\'s leading multinational enterprise through innovation and integrity.',
    keywords: ['about nexttradiixx', 'frank onyeukwu', 'nexttradiixx founder', 'lagos business', 'africa entrepreneurship', 'african ceo']
  },
  subsidiaries: {
    title: 'Business Divisions — Nexttradiixx Company Limited',
    description: 'Explore Nexttradiixx\'s seven business divisions: Global Services, Automobiles, Fashion, Real Estate, E-Commerce, Hospitality, and Farming & Agriculture.',
    keywords: ['nexttradiixx divisions', 'automobile', 'fashion', 'real estate', 'ecommerce', 'hospitality nigeria', 'farming agriculture nigeria']
  },
  services: {
    title: 'Our Services — Nexttradiixx Company Limited',
    description: 'Nexttradiixx services: Global Services, Automobile Dealership, Fashion & Lifestyle, Real Estate, E-Commerce (Tradiixx.com), Hospitality, and Farming & Agriculture across Nigeria and Africa.',
    keywords: ['automobile dealership lagos', 'real estate nigeria', 'fashion branding', 'ecommerce nigeria', 'hospitality services', 'global services africa', 'farming agriculture nigeria']
  },
  careers: {
    title: 'Careers at Nexttradiixx — Join Our Team',
    description: 'Explore career opportunities at Nexttradiixx Company Limited across our seven business divisions in Lagos, Nigeria.',
    keywords: ['careers nexttradiixx', 'jobs lagos nigeria', 'employment africa', 'nexttradiixx jobs']
  },
  contact: {
    title: 'Contact Nexttradiixx — Lagos, Nigeria',
    description: 'Get in touch with Nexttradiixx Company Limited. Visit us at 8 Funso Owoyemi Street, Abule Egba, Lagos. Call +2347079800450 or email NexxtGroup12@gmail.com.',
    keywords: ['contact nexttradiixx', 'lagos nigeria', 'abule egba', 'business inquiry nigeria']
  }
};

/**
 * Utility function to get page config
 */
export const getPageConfig = (page: keyof typeof pageConfigs) => {
  return pageConfigs[page] || pageConfigs.home;
};
