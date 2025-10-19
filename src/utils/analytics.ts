/**
 * Analytics Utilities for SEO and Performance Tracking
 * Google Analytics 4 and Search Console integration
 */

interface GAEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
}

interface PageViewData {
  page_title: string;
  page_location: string;
  page_path: string;
}

/**
 * Initialize Google Analytics 4
 */
export function initializeGA4(measurementId: string) {
  // Load gtag script
  const script = document.createElement('script');
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  script.async = true;
  document.head.appendChild(script);

  // Initialize dataLayer
  window.dataLayer = window.dataLayer || [];
  
  function gtag(...args: any[]) {
    window.dataLayer.push(args);
  }

  // Configure GA4
  gtag('js', new Date());
  gtag('config', measurementId, {
    page_title: document.title,
    page_location: window.location.href,
    page_path: window.location.pathname,
  });

  // Store gtag function globally
  (window as any).gtag = gtag;
}

/**
 * Track page views for SPA navigation
 */
export function trackPageView(data: Partial<PageViewData> = {}) {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('config', 'GA_MEASUREMENT_ID', {
      page_title: data.page_title || document.title,
      page_location: data.page_location || window.location.href,
      page_path: data.page_path || window.location.pathname,
    });
  }
}

/**
 * Track custom events
 */
export function trackEvent(event: GAEvent) {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', event.action, {
      event_category: event.category,
      event_label: event.label,
      value: event.value,
    });
  }
}

/**
 * Track SEO-related events
 */
export const seoEvents = {
  // Track when users interact with structured data
  structuredDataInteraction: (type: string) => {
    trackEvent({
      action: 'structured_data_interaction',
      category: 'SEO',
      label: type,
    });
  },

  // Track search feature usage
  searchUsage: (query: string) => {
    trackEvent({
      action: 'search',
      category: 'SEO',
      label: query,
    });
  },

  // Track external link clicks
  externalLinkClick: (url: string) => {
    trackEvent({
      action: 'external_link_click',
      category: 'Navigation',
      label: url,
    });
  },

  // Track contact form submissions
  contactFormSubmission: () => {
    trackEvent({
      action: 'contact_form_submit',
      category: 'Lead Generation',
      value: 1,
    });
  },

  // Track newsletter signups
  newsletterSignup: () => {
    trackEvent({
      action: 'newsletter_signup',
      category: 'Lead Generation',
      value: 1,
    });
  },

  // Track 404 errors
  pageNotFound: (path: string) => {
    trackEvent({
      action: '404_error',
      category: 'Error',
      label: path,
    });
  },

  // Track site search
  siteSearch: (searchTerm: string, resultsCount: number) => {
    trackEvent({
      action: 'site_search',
      category: 'Search',
      label: searchTerm,
      value: resultsCount,
    });
  },
};

/**
 * Enhanced ecommerce tracking for business metrics
 */
export const businessEvents = {
  // Track service inquiries
  serviceInquiry: (service: string) => {
    trackEvent({
      action: 'service_inquiry',
      category: 'Business',
      label: service,
      value: 1,
    });
  },

  // Track subsidiary page visits
  subsidiaryVisit: (subsidiary: string) => {
    trackEvent({
      action: 'subsidiary_visit',
      category: 'Business',
      label: subsidiary,
    });
  },

  // Track career page interactions
  careerInteraction: (action: string, position?: string) => {
    trackEvent({
      action: 'career_interaction',
      category: 'Careers',
      label: position ? `${action}_${position}` : action,
    });
  },
};

/**
 * Core Web Vitals tracking
 */
export function trackCoreWebVitals() {
  // Track Largest Contentful Paint
  new PerformanceObserver((entryList) => {
    const entries = entryList.getEntries();
    const lastEntry = entries[entries.length - 1];
    
    trackEvent({
      action: 'lcp',
      category: 'Web Vitals',
      value: Math.round(lastEntry.startTime),
    });
  }).observe({ entryTypes: ['largest-contentful-paint'] });

  // Track Cumulative Layout Shift
  let clsValue = 0;
  new PerformanceObserver((entryList) => {
    for (const entry of entryList.getEntries()) {
      if (!(entry as any).hadRecentInput) {
        clsValue += (entry as any).value;
      }
    }
    
    trackEvent({
      action: 'cls',
      category: 'Web Vitals',
      value: Math.round(clsValue * 1000), // Convert to milliseconds
    });
  }).observe({ entryTypes: ['layout-shift'] });

  // Track First Input Delay
  new PerformanceObserver((entryList) => {
    const firstInput = entryList.getEntries()[0];
    
    trackEvent({
      action: 'fid',
      category: 'Web Vitals',
      value: Math.round((firstInput as any).processingStart - firstInput.startTime),
    });
  }).observe({ entryTypes: ['first-input'] });
}

/**
 * Track scroll depth for engagement metrics
 */
export function trackScrollDepth() {
  const scrollDepths = [25, 50, 75, 100];
  const trackedDepths = new Set<number>();

  function checkScrollDepth() {
    const scrollPercent = Math.round(
      (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
    );

    scrollDepths.forEach(depth => {
      if (scrollPercent >= depth && !trackedDepths.has(depth)) {
        trackedDepths.add(depth);
        trackEvent({
          action: 'scroll_depth',
          category: 'Engagement',
          label: `${depth}%`,
          value: depth,
        });
      }
    });
  }

  window.addEventListener('scroll', checkScrollDepth, { passive: true });
}

/**
 * Track time on page
 */
export function trackTimeOnPage() {
  const startTime = Date.now();
  
  // Track when user leaves the page
  window.addEventListener('beforeunload', () => {
    const timeOnPage = Math.round((Date.now() - startTime) / 1000);
    
    trackEvent({
      action: 'time_on_page',
      category: 'Engagement',
      value: timeOnPage,
    });
  });
}

/**
 * Initialize all analytics tracking
 */
export function initializeAnalytics() {
  // Initialize GA4 (replace with your actual measurement ID)
  initializeGA4('G-XXXXXXXXXX');
  
  // Track Core Web Vitals
  trackCoreWebVitals();
  
  // Track engagement metrics
  trackScrollDepth();
  trackTimeOnPage();
  
  console.log('📊 Analytics initialized');
}

// Export for global access
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}