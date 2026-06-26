/**
 * SEO Configuration
 * Central configuration for all SEO-related settings
 */

import type { SEOConfig } from '../types/seo';

export const seoConfig: SEOConfig = {
  // Default meta information
  defaultTitle: 'Nexxt Group — NexxtTradiixx Company Limited',
  titleTemplate: '%s | Nexxt Group',
  defaultDescription: 'NexxtTradiixx Company Limited — Driving innovation across Global Services, Automobiles, Fashion, Real Estate, E-Commerce, and Hospitality. Based in Lagos, Nigeria.',
  defaultKeywords: [
    'nexxt group',
    'nexxtradiixx',
    'global services nigeria',
    'automobile dealership lagos',
    'fashion lifestyle',
    'real estate nigeria',
    'ecommerce tradiixx',
    'hospitality nigeria',
    'business consulting africa',
    'import export nigeria'
  ],

  // Site information
  siteUrl: 'https://nexxtgroup.com',
  siteName: 'NexxtTradiixx Company Limited',
  locale: 'en_NG',
  author: 'Nexxt Group',
  twitterHandle: '@nexxtgroup',

  // Default images
  defaultImage: 'https://nexxtgroup.com/images/og-default.jpg',
  defaultImageAlt: 'Nexxt Group — NexxtTradiixx Company Limited',

  // Organization structured data
  organization: {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'NexxtTradiixx Company Limited',
    url: 'https://nexxtgroup.com',
    logo: 'https://nexxtgroup.com/images/logo.png',
    description: 'Driving innovation across Global Services, Automobiles, Fashion, Real Estate, E-Commerce, and Hospitality.',
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
      email: 'ocfrankofficial2@gmail.com'
    },
    sameAs: [
      'https://www.linkedin.com/company/nexxtgroup',
      'https://twitter.com/nexxtgroup',
      'https://www.facebook.com/nexxtgroup'
    ]
  }
};

/**
 * Page-specific SEO configurations
 */
export const pageConfigs = {
  home: {
    title: 'NexxtTradiixx Company Limited — Building Africa\'s Future',
    description: 'Nexxt Group: Six business divisions spanning Global Services, Automobiles, Fashion, Real Estate, E-Commerce (Tradiixx.com), and Hospitality. Based in Lagos, Nigeria.',
    keywords: ['nexxtradiixx', 'nexxt group lagos', 'automobile dealership nigeria', 'real estate lagos', 'tradiixx ecommerce', 'business consulting africa']
  },
  about: {
    title: 'About Us — Nexxt Group',
    description: 'Meet Frank Chibuike Onyeukwu, Founder & CEO of Nexxt Group. Learn about our vision to build Africa\'s leading multinational enterprise through innovation and integrity.',
    keywords: ['about nexxt group', 'frank onyeukwu', 'nexxtradiixx founder', 'lagos business', 'africa entrepreneurship']
  },
  subsidiaries: {
    title: 'Business Divisions — Nexxt Group',
    description: 'Explore Nexxt Group\'s six business divisions: Global Services, Automobiles, Fashion, Real Estate, E-Commerce, and Hospitality.',
    keywords: ['nexxt group divisions', 'automobile', 'fashion', 'real estate', 'ecommerce', 'hospitality nigeria']
  },
  services: {
    title: 'Our Services — Nexxt Group',
    description: 'Nexxt Group services: Global Services, Automobile Dealership, Fashion & Lifestyle, Real Estate, E-Commerce (Tradiixx.com), and Hospitality across Nigeria and Africa.',
    keywords: ['automobile dealership lagos', 'real estate nigeria', 'fashion branding', 'ecommerce nigeria', 'hospitality services', 'global services']
  },
  careers: {
    title: 'Careers — Join Nexxt Group',
    description: 'Explore career opportunities at Nexxt Group across our six business divisions in Lagos, Nigeria.',
    keywords: ['careers nexxt group', 'jobs lagos nigeria', 'employment africa']
  },
  contact: {
    title: 'Contact Us — Nexxt Group',
    description: 'Get in touch with Nexxt Group. Visit us at 8 Funso Owoyemi Street, Abule Egba, Lagos. Call +2347079800450 or email ocfrankofficial2@gmail.com.',
    keywords: ['contact nexxt group', 'lagos nigeria', 'abule egba', 'business inquiry']
  }
};

/**
 * Utility function to get page config
 */
export const getPageConfig = (page: keyof typeof pageConfigs) => {
  return pageConfigs[page] || pageConfigs.home;
};