/**
 * SEO Configuration Types
 * Comprehensive types for SEO metadata management
 */

export interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  canonical?: string;
  image?: string;
  imageAlt?: string;
  type?: 'website' | 'article' | 'product' | 'profile';
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  locale?: string;
  siteName?: string;
  twitterHandle?: string;
  noIndex?: boolean;
  noFollow?: boolean;
  structuredData?: Record<string, any>;
}

export interface OpenGraphProps {
  title: string;
  description: string;
  image: string;
  url: string;
  type: string;
  siteName: string;
  locale?: string;
}

export interface TwitterCardProps {
  card: 'summary' | 'summary_large_image' | 'app' | 'player';
  site?: string;
  creator?: string;
  title: string;
  description: string;
  image: string;
  imageAlt?: string;
}

export interface StructuredDataOrganization {
  '@context': string;
  '@type': 'Organization';
  name: string;
  url: string;
  logo: string;
  description: string;
  address?: {
    '@type': 'PostalAddress';
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  contactPoint?: {
    '@type': 'ContactPoint';
    telephone: string;
    contactType: string;
    email?: string;
  };
  sameAs?: string[];
}

export interface StructuredDataArticle {
  '@context': string;
  '@type': 'Article';
  headline: string;
  description: string;
  image: string;
  author: {
    '@type': 'Person' | 'Organization';
    name: string;
  };
  publisher: {
    '@type': 'Organization';
    name: string;
    logo: {
      '@type': 'ImageObject';
      url: string;
    };
  };
  datePublished: string;
  dateModified?: string;
  url: string;
}

export interface SEOConfig {
  defaultTitle: string;
  titleTemplate: string;
  defaultDescription: string;
  defaultKeywords: string[];
  siteUrl: string;
  defaultImage: string;
  defaultImageAlt: string;
  siteName: string;
  twitterHandle: string;
  author: string;
  locale: string;
  organization: StructuredDataOrganization;
}