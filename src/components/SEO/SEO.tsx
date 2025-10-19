/**
 * SEO Component
 * Comprehensive SEO management for React applications
 * Handles meta tags, Open Graph, Twitter Cards, and structured data
 */

import React, { useEffect } from 'react';
import type { SEOProps } from '../../types/seo';
import { seoConfig } from '../../config/seo';
import { OrganizationStructuredData, StructuredData } from './StructuredData';

export function SEO({
  title,
  description,
  keywords = [],
  canonical,
  image,
  imageAlt,
  type = 'website',
  author,
  publishedTime,
  modifiedTime,
  locale,
  siteName,
  twitterHandle,
  noIndex = false,
  noFollow = false,
  structuredData
}: SEOProps) {
  // SSR-safe pathname detection
  const currentPath = React.useMemo(() => {
    if (typeof window !== 'undefined') {
      return window.location.pathname;
    }
    return '/'; // Fallback for SSR
  }, []);
  
  // Generate full title with template
  const fullTitle = title 
    ? title.includes('|') 
      ? title 
      : seoConfig.titleTemplate.replace('%s', title)
    : seoConfig.defaultTitle;
  
  // Use provided values or fallback to defaults
  const metaDescription = description || seoConfig.defaultDescription;
  const metaKeywords = keywords.length > 0 ? keywords : seoConfig.defaultKeywords;
  const canonicalUrl = canonical || `${seoConfig.siteUrl}${currentPath}`;
  const ogImage = image || seoConfig.defaultImage;
  const ogImageAlt = imageAlt || seoConfig.defaultImageAlt;
  const ogLocale = locale || seoConfig.locale;
  const ogSiteName = siteName || seoConfig.siteName;
  const twitterSite = twitterHandle || seoConfig.twitterHandle;
  const pageAuthor = author || seoConfig.author;

  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return;

    try {
      // Update document title
      document.title = fullTitle;

      // Update meta tags
      updateMetaTag('description', metaDescription);
      updateMetaTag('keywords', metaKeywords.join(', '));
      updateMetaTag('author', pageAuthor);
      
      // Robots meta tag
      const robotsContent = [];
      if (noIndex) robotsContent.push('noindex');
      if (noFollow) robotsContent.push('nofollow');
      if (robotsContent.length === 0) robotsContent.push('index', 'follow');
      updateMetaTag('robots', robotsContent.join(', '));

      // Canonical URL
      updateLinkTag('canonical', canonicalUrl);

      // Open Graph tags
      updateMetaProperty('og:title', fullTitle);
      updateMetaProperty('og:description', metaDescription);
      updateMetaProperty('og:image', ogImage);
      updateMetaProperty('og:image:alt', ogImageAlt);
      updateMetaProperty('og:url', canonicalUrl);
      updateMetaProperty('og:type', type);
      updateMetaProperty('og:site_name', ogSiteName);
      updateMetaProperty('og:locale', ogLocale);

      // Article-specific Open Graph tags
      if (type === 'article') {
        if (publishedTime) updateMetaProperty('article:published_time', publishedTime);
        if (modifiedTime) updateMetaProperty('article:modified_time', modifiedTime);
        if (pageAuthor) updateMetaProperty('article:author', pageAuthor);
      }

      // Twitter Card tags
      updateMetaName('twitter:card', 'summary_large_image');
      updateMetaName('twitter:site', twitterSite);
      updateMetaName('twitter:creator', twitterSite);
      updateMetaName('twitter:title', fullTitle);
      updateMetaName('twitter:description', metaDescription);
      updateMetaName('twitter:image', ogImage);
      updateMetaName('twitter:image:alt', ogImageAlt);

      // Language attribute on html element
      if (document.documentElement) {
        document.documentElement.lang = ogLocale.split('_')[0];
      }

      // Theme color for mobile browsers
      updateMetaName('theme-color', '#000000');
      updateMetaName('msapplication-TileColor', '#000000');

      // Viewport meta tag (should be in index.html but ensure it's set)
      updateMetaName('viewport', 'width=device-width, initial-scale=1.0');
    } catch (error) {
      console.error('SEO component error:', error);
    }

  }, [
    fullTitle,
    metaDescription,
    metaKeywords,
    canonicalUrl,
    ogImage,
    ogImageAlt,
    ogLocale,
    ogSiteName,
    twitterSite,
    pageAuthor,
    type,
    publishedTime,
    modifiedTime,
    noIndex,
    noFollow
  ]);

  return (
    <>
      {/* Organization structured data (always include) */}
      <OrganizationStructuredData organization={seoConfig.organization} />
      
      {/* Custom structured data if provided */}
      {structuredData && (
        <StructuredData data={structuredData} id="custom-structured-data" />
      )}
    </>
  );
}

/**
 * Utility functions for meta tag management
 * All functions include error handling and SSR compatibility
 */

function updateMetaTag(name: string, content: string) {
  if (typeof window === 'undefined' || !content) return;
  
  try {
    let meta = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement;
    if (!meta) {
      meta = document.createElement('meta');
      meta.name = name;
      document.head.appendChild(meta);
    }
    meta.content = content;
  } catch (error) {
    console.error(`Error updating meta tag ${name}:`, error);
  }
}

function updateMetaProperty(property: string, content: string) {
  if (typeof window === 'undefined' || !content) return;
  
  try {
    let meta = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement;
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('property', property);
      document.head.appendChild(meta);
    }
    meta.content = content;
  } catch (error) {
    console.error(`Error updating meta property ${property}:`, error);
  }
}

function updateMetaName(name: string, content: string) {
  if (typeof window === 'undefined' || !content) return;
  
  try {
    let meta = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement;
    if (!meta) {
      meta = document.createElement('meta');
      meta.name = name;
      document.head.appendChild(meta);
    }
    meta.content = content;
  } catch (error) {
    console.error(`Error updating meta name ${name}:`, error);
  }
}

function updateLinkTag(rel: string, href: string) {
  if (typeof window === 'undefined' || !href) return;
  
  try {
    let link = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement;
    if (!link) {
      link = document.createElement('link');
      link.rel = rel;
      document.head.appendChild(link);
    }
    link.href = href;
  } catch (error) {
    console.error(`Error updating link tag ${rel}:`, error);
  }
}

/**
 * HOC for pages that need SEO
 */
export function withSEO<T extends Record<string, unknown>>(
  Component: React.ComponentType<T>,
  seoProps: SEOProps
) {
  return function WrappedComponent(props: T) {
    return (
      <>
        <SEO {...seoProps} />
        <Component {...props} />
      </>
    );
  };
}

/**
 * Hook for dynamic SEO updates
 * Use this when you need to update SEO based on dynamic data
 */
export function useSEO(seoProps: SEOProps) {
  const [currentSEO, setCurrentSEO] = React.useState<SEOProps>(seoProps);
  
  useEffect(() => {
    setCurrentSEO(seoProps);
  }, [seoProps]);
  
  return {
    updateSEO: setCurrentSEO,
    currentSEO,
    SEOComponent: <SEO {...currentSEO} />
  };
}