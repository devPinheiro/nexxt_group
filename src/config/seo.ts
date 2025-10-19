/**
 * SEO Configuration
 * Central configuration for all SEO-related settings
 */

import type { SEOConfig } from '../types/seo';

export const seoConfig: SEOConfig = {
  // Default meta information
  defaultTitle: 'Nexxt Group - Global Business Accelerator',
  titleTemplate: '%s | Nexxt Group',
  defaultDescription: 'Global Business Accelerator. Trusted Excellence across Automobile, Fashion, Real Estate, and Manufacturing. Two decades of proven leadership across diverse industries worldwide.',
  defaultKeywords: [
    'nexxt group',
    'global business',
    'automobile',
    'fashion',
    'real estate',
    'manufacturing',
    'business accelerator',
    'trusted excellence',
    'international business',
    'corporate solutions'
  ],
  
  // Site information
  siteUrl: 'https://nexxtgroup.com',
  siteName: 'Nexxt Group',
  locale: 'en_US',
  author: 'Nexxt Group',
  twitterHandle: '@nexxtgroup',
  
  // Default images
  defaultImage: 'https://nexxtgroup.com/images/og-default.jpg',
  defaultImageAlt: 'Nexxt Group - Global Business Accelerator',
  
  // Organization structured data
  organization: {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Nexxt Group',
    url: 'https://nexxtgroup.com',
    logo: 'https://nexxtgroup.com/images/logo.png',
    description: 'Global Business Accelerator. Trusted Excellence across Automobile, Fashion, Real Estate, and Manufacturing.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '1234 Business Plaza',
      addressLocality: 'New York',
      addressRegion: 'NY',
      postalCode: '10001',
      addressCountry: 'US'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-555-123-4567',
      contactType: 'Customer Service',
      email: 'info@nexxtgroup.com'
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
    title: 'Global Business Accelerator - Trusted Excellence',
    description: 'Nexxt Group: Two decades of proven leadership across Automobile, Fashion, Real Estate, and Manufacturing. Accelerating global business with mature, trusted solutions.',
    keywords: ['global business accelerator', 'trusted excellence', 'automobile', 'fashion', 'real estate', 'manufacturing']
  },
  about: {
    title: 'About Us - The Nexxt Story',
    description: 'Learn about Nexxt Group\'s two decades of accelerating global business across diverse industries. Our story of trusted excellence and mature business solutions.',
    keywords: ['about nexxt group', 'company history', 'business leadership', 'global expansion']
  },
  subsidiaries: {
    title: 'Our Subsidiaries - Diverse Industry Portfolio',
    description: 'Explore Nexxt Group\'s subsidiaries: Nexxt Automobile, Nexxt Fashion, Nexxt Real Estate, and Nexxt Manufacturing. Global leaders in their respective industries.',
    keywords: ['subsidiaries', 'automobile division', 'fashion retail', 'real estate development', 'manufacturing']
  },
  services: {
    title: 'Global Services - Comprehensive Solutions',
    description: 'Nexxt Group services: Automobile Dealership, Real Estate Investment, Customer Goods, and Import/Export. Comprehensive solutions for global markets.',
    keywords: ['automobile dealership', 'real estate services', 'customer goods', 'import export', 'global services']
  },
  careers: {
    title: 'Careers - Join Our Global Team',
    description: 'Join Nexxt Group\'s global team. Explore career opportunities across our Automobile, Fashion, Real Estate, and Manufacturing divisions worldwide.',
    keywords: ['careers', 'jobs', 'employment', 'global opportunities', 'join nexxt group']
  },
  contact: {
    title: 'Contact Us - Get In Touch',
    description: 'Contact Nexxt Group for partnership opportunities, business inquiries, or more information about our global services and solutions.',
    keywords: ['contact', 'business inquiries', 'partnerships', 'get in touch']
  }
};

/**
 * Utility function to get page config
 */
export const getPageConfig = (page: keyof typeof pageConfigs) => {
  return pageConfigs[page] || pageConfigs.home;
};