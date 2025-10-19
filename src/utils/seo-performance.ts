/**
 * SEO Performance Utilities
 * Tools for optimizing Core Web Vitals and SEO performance
 */

/**
 * Preload critical resources for better performance
 */
export function preloadCriticalResources() {
  // Preload critical fonts
  const fontLinks = [
    { href: '/fonts/serif-font.woff2', as: 'font', type: 'font/woff2', crossorigin: 'anonymous' },
    { href: '/fonts/sans-font.woff2', as: 'font', type: 'font/woff2', crossorigin: 'anonymous' }
  ];

  fontLinks.forEach(({ href, as, type, crossorigin }) => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = href;
    link.as = as;
    link.type = type;
    if (crossorigin) link.crossOrigin = crossorigin;
    document.head.appendChild(link);
  });

  // Preload critical images
  const criticalImages = [
    '/images/hero-bg.jpg',
    '/images/og-default.jpg',
    '/images/logo.png'
  ];

  criticalImages.forEach(src => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = src;
    link.as = 'image';
    document.head.appendChild(link);
  });
}

/**
 * Lazy load images for better performance
 */
export function setupLazyLoading() {
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          img.src = img.dataset.src || '';
          img.classList.remove('lazy');
          observer.unobserve(img);
        }
      });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
      imageObserver.observe(img);
    });
  }
}

/**
 * Optimize images with modern formats
 */
export function getOptimizedImageUrl(src: string, width?: number, quality = 80): string {
  // This would integrate with your image optimization service
  // Example with a generic CDN
  const baseUrl = src.startsWith('http') ? src : `https://nexxtgroup.ng${src}`;
  const params = new URLSearchParams();
  
  if (width) params.set('w', width.toString());
  params.set('q', quality.toString());
  params.set('f', 'webp'); // Prefer WebP format
  
  return `${baseUrl}?${params.toString()}`;
}

/**
 * Defer non-critical CSS
 */
export function deferNonCriticalCSS() {
  const nonCriticalCSS = [
    '/css/animations.css',
    '/css/print.css'
  ];

  nonCriticalCSS.forEach(href => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = href;
    link.media = 'print';
    link.onload = function() {
      this.media = 'all';
    };
    document.head.appendChild(link);
  });
}

/**
 * Service Worker registration for caching
 */
export async function registerServiceWorker(): Promise<void> {
  if ('serviceWorker' in navigator) {
    try {
      const registration = await navigator.serviceWorker.register('/sw.js');
      console.log('SW registered: ', registration);
    } catch (error) {
      console.log('SW registration failed: ', error);
    }
  }
}

/**
 * Measure Core Web Vitals
 */
export function measureCoreWebVitals() {
  // This would integrate with web-vitals library
  if (typeof window !== 'undefined') {
    // Largest Contentful Paint
    new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      const lastEntry = entries[entries.length - 1];
      console.log('LCP:', lastEntry.startTime);
    }).observe({ entryTypes: ['largest-contentful-paint'] });

    // Cumulative Layout Shift
    let clsValue = 0;
    new PerformanceObserver((entryList) => {
      for (const entry of entryList.getEntries()) {
        if (!(entry as any).hadRecentInput) {
          clsValue += (entry as any).value;
        }
      }
      console.log('CLS:', clsValue);
    }).observe({ entryTypes: ['layout-shift'] });

    // First Input Delay would be measured with user interaction
  }
}

/**
 * Optimize third-party scripts
 */
export function loadThirdPartyScripts() {
  // Load analytics with delay
  setTimeout(() => {
    // Google Analytics
    const gaScript = document.createElement('script');
    gaScript.src = 'https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID';
    gaScript.async = true;
    document.head.appendChild(gaScript);

    // Initialize GA
    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any[]) {
      window.dataLayer.push(args);
    }
    gtag('js', new Date());
    gtag('config', 'GA_MEASUREMENT_ID');
  }, 3000); // Load after 3 seconds
}

/**
 * Prefetch next page resources
 */
export function prefetchNextPageResources(nextPaths: string[]) {
  if ('requestIdleCallback' in window) {
    requestIdleCallback(() => {
      nextPaths.forEach(path => {
        const link = document.createElement('link');
        link.rel = 'prefetch';
        link.href = path;
        document.head.appendChild(link);
      });
    });
  }
}

/**
 * Critical path CSS inlining
 */
export const criticalCSS = `
  /* Critical CSS for above-the-fold content */
  body { margin: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; }
  .hero-section { min-height: 100vh; display: flex; align-items: center; justify-content: center; }
  .loading-spinner { animation: spin 1s linear infinite; }
  @keyframes spin { to { transform: rotate(360deg); } }
`;

/**
 * Initialize all performance optimizations
 */
export function initializePerformanceOptimizations() {
  // Run critical optimizations immediately
  preloadCriticalResources();
  
  // Run after DOM is loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      setupLazyLoading();
      deferNonCriticalCSS();
      measureCoreWebVitals();
    });
  } else {
    setupLazyLoading();
    deferNonCriticalCSS();
    measureCoreWebVitals();
  }
  
  // Run after window load
  window.addEventListener('load', () => {
    registerServiceWorker();
    loadThirdPartyScripts();
    
    // Prefetch likely next pages
    prefetchNextPageResources(['/about', '/services', '/contact']);
  });
}

// Global declarations for TypeScript
declare global {
  interface Window {
    dataLayer: any[];
  }
}