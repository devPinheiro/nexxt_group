/**
 * Simplified SEO Component
 * No external dependencies - works with any React setup
 */

import React, { useEffect } from 'react';
import type { SEOProps } from '../../types/seo';
import { seoConfig } from '../../config/seo';

interface SimpleSEOProps extends Omit<SEOProps, 'canonical'> {
  canonical?: string;
  path?: string; // Manual path override
}

export function SimpleSEO({
  title,
  description,
  keywords = [],
  canonical,
  path,
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
}: SimpleSEOProps) {
  // Get current path safely
  const currentPath = path || (typeof window !== 'undefined' ? window.location.pathname : '/');
  
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

      // Create or update meta tags
      setMetaTag('description', metaDescription);
      setMetaTag('keywords', metaKeywords.join(', '));
      setMetaTag('author', pageAuthor);
      
      // Robots meta tag
      const robotsContent = [];
      if (noIndex) robotsContent.push('noindex');
      if (noFollow) robotsContent.push('nofollow');
      if (robotsContent.length === 0) robotsContent.push('index', 'follow');
      setMetaTag('robots', robotsContent.join(', '));

      // Open Graph tags
      setMetaProperty('og:title', fullTitle);
      setMetaProperty('og:description', metaDescription);
      setMetaProperty('og:image', ogImage);
      setMetaProperty('og:image:alt', ogImageAlt);
      setMetaProperty('og:url', canonicalUrl);
      setMetaProperty('og:type', type);
      setMetaProperty('og:site_name', ogSiteName);
      setMetaProperty('og:locale', ogLocale);

      // Article-specific Open Graph tags
      if (type === 'article') {
        if (publishedTime) setMetaProperty('article:published_time', publishedTime);
        if (modifiedTime) setMetaProperty('article:modified_time', modifiedTime);
        if (pageAuthor) setMetaProperty('article:author', pageAuthor);
      }

      // Twitter Card tags
      setMetaTag('twitter:card', 'summary_large_image');
      setMetaTag('twitter:site', twitterSite);
      setMetaTag('twitter:creator', twitterSite);
      setMetaTag('twitter:title', fullTitle);
      setMetaTag('twitter:description', metaDescription);
      setMetaTag('twitter:image', ogImage);
      setMetaTag('twitter:image:alt', ogImageAlt);

      // Canonical URL
      setLinkTag('canonical', canonicalUrl);

      // Language and theme
      if (document.documentElement) {
        document.documentElement.lang = ogLocale.split('_')[0];
      }
      setMetaTag('theme-color', '#000000');
      
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

  // This component doesn't render anything visible
  return null;
}

/**
 * Utility functions for meta tag management
 */
function setMetaTag(name: string, content: string) {
  if (!content) return;
  
  try {
    // Remove existing tag
    const existing = document.querySelector(`meta[name="${name}"]`);
    if (existing) {
      existing.remove();
    }
    
    // Create new tag
    const meta = document.createElement('meta');
    meta.name = name;
    meta.content = content;
    document.head.appendChild(meta);
  } catch (error) {
    console.error(`Error setting meta tag ${name}:`, error);
  }
}

function setMetaProperty(property: string, content: string) {
  if (!content) return;
  
  try {
    // Remove existing tag
    const existing = document.querySelector(`meta[property="${property}"]`);
    if (existing) {
      existing.remove();
    }
    
    // Create new tag
    const meta = document.createElement('meta');
    meta.setAttribute('property', property);
    meta.content = content;
    document.head.appendChild(meta);
  } catch (error) {
    console.error(`Error setting meta property ${property}:`, error);
  }
}

function setLinkTag(rel: string, href: string) {
  if (!href) return;
  
  try {
    // Remove existing tag
    const existing = document.querySelector(`link[rel="${rel}"]`);
    if (existing) {
      existing.remove();
    }
    
    // Create new tag
    const link = document.createElement('link');
    link.rel = rel;
    link.href = href;
    document.head.appendChild(link);
  } catch (error) {
    console.error(`Error setting link tag ${rel}:`, error);
  }
}

/**
 * Hook for simplified SEO usage
 */
export function useSimpleSEO(props: SimpleSEOProps) {
  return <SimpleSEO {...props} />;
}