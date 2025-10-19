/**
 * SEO Components Export
 * Central export point for all SEO-related components
 */

export { SEO, withSEO, useSEO } from './SEO';
export { SimpleSEO, useSimpleSEO } from './SimpleSEO';
export {
  StructuredData,
  OrganizationStructuredData,
  ArticleStructuredData,
  BreadcrumbStructuredData,
  WebsiteStructuredData,
  LocalBusinessStructuredData
} from './StructuredData';

// Re-export types for convenience
export type {
  SEOProps,
  OpenGraphProps,
  TwitterCardProps,
  StructuredDataOrganization,
  StructuredDataArticle,
  SEOConfig
} from '../../types/seo';

// Re-export config for convenience
export { seoConfig, pageConfigs, getPageConfig } from '../../config/seo';