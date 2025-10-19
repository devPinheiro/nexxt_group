/**
 * SEO Provider Component
 * Provides organization structured data and default SEO setup
 */

import React from 'react';
import { seoConfig } from '../../config/seo';
import { OrganizationStructuredData } from './StructuredData';

interface SEOProviderProps {
  children: React.ReactNode;
}

export function SEOProvider({ children }: SEOProviderProps) {
  return (
    <>
      {/* Global organization structured data */}
      <OrganizationStructuredData organization={seoConfig.organization} />
      {children}
    </>
  );
}

/**
 * Hook to get SEO configuration
 */
export function useSEOConfig() {
  return seoConfig;
}