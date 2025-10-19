/**
 * Structured Data Component
 * Handles JSON-LD structured data injection for SEO
 */

import { useEffect } from 'react';
import type { StructuredDataOrganization, StructuredDataArticle } from '../../types/seo';

interface StructuredDataProps {
  data: StructuredDataOrganization | StructuredDataArticle | Record<string, any>;
  id?: string;
}

export function StructuredData({ data, id = 'structured-data' }: StructuredDataProps) {
  useEffect(() => {
    // Remove existing structured data script if it exists
    const existingScript = document.getElementById(id);
    if (existingScript) {
      existingScript.remove();
    }

    // Create new script element
    const script = document.createElement('script');
    script.id = id;
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(data, null, 2);
    
    // Append to head
    document.head.appendChild(script);

    // Cleanup function
    return () => {
      const scriptToRemove = document.getElementById(id);
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [data, id]);

  return null; // This component doesn't render anything visible
}

/**
 * Predefined structured data components for common use cases
 */

interface OrganizationStructuredDataProps {
  organization: StructuredDataOrganization;
}

export function OrganizationStructuredData({ organization }: OrganizationStructuredDataProps) {
  return <StructuredData data={organization} id="organization-structured-data" />;
}

interface ArticleStructuredDataProps {
  article: StructuredDataArticle;
}

export function ArticleStructuredData({ article }: ArticleStructuredDataProps) {
  return <StructuredData data={article} id="article-structured-data" />;
}

/**
 * Breadcrumb structured data
 */
interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbStructuredDataProps {
  items: BreadcrumbItem[];
}

export function BreadcrumbStructuredData({ items }: BreadcrumbStructuredDataProps) {
  const breadcrumbData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  };

  return <StructuredData data={breadcrumbData} id="breadcrumb-structured-data" />;
}

/**
 * Website structured data
 */
interface WebsiteStructuredDataProps {
  name: string;
  url: string;
  description: string;
  searchAction?: {
    target: string;
    queryInput: string;
  };
}

export function WebsiteStructuredData({ name, url, description, searchAction }: WebsiteStructuredDataProps) {
  const websiteData: Record<string, any> = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name,
    url,
    description
  };

  if (searchAction) {
    websiteData.potentialAction = {
      '@type': 'SearchAction',
      target: searchAction.target,
      'query-input': searchAction.queryInput
    };
  }

  return <StructuredData data={websiteData} id="website-structured-data" />;
}

/**
 * Local Business structured data
 */
interface LocalBusinessStructuredDataProps {
  name: string;
  description: string;
  url: string;
  telephone: string;
  address: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  openingHours?: string[];
  image?: string;
}

export function LocalBusinessStructuredData({
  name,
  description,
  url,
  telephone,
  address,
  openingHours,
  image
}: LocalBusinessStructuredDataProps) {
  const businessData: Record<string, any> = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name,
    description,
    url,
    telephone,
    address: {
      '@type': 'PostalAddress',
      ...address
    }
  };

  if (openingHours) {
    businessData.openingHoursSpecification = openingHours.map(hours => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: hours
    }));
  }

  if (image) {
    businessData.image = image;
  }

  return <StructuredData data={businessData} id="local-business-structured-data" />;
}