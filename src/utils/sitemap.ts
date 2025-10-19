/**
 * Sitemap Generation Utilities
 * Dynamic sitemap generation for SEO
 */

export interface SitemapURL {
  loc: string;
  lastmod?: string;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
}

export interface SitemapConfig {
  baseUrl: string;
  routes: SitemapURL[];
}

/**
 * Generate XML sitemap content
 */
export function generateSitemap(config: SitemapConfig): string {
  const { baseUrl, routes } = config;
  
  const urlEntries = routes.map(route => {
    const url = route.loc.startsWith('http') ? route.loc : `${baseUrl}${route.loc}`;
    
    return `  <url>
    <loc>${url}</loc>${route.lastmod ? `
    <lastmod>${route.lastmod}</lastmod>` : ''}${route.changefreq ? `
    <changefreq>${route.changefreq}</changefreq>` : ''}${route.priority ? `
    <priority>${route.priority}</priority>` : ''}
  </url>`;
  }).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>`;
}

/**
 * Static routes configuration for Nexxt Group
 */
export const staticRoutes: SitemapURL[] = [
  {
    loc: '/',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'weekly',
    priority: 1.0
  },
  {
    loc: '/about',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'monthly',
    priority: 0.9
  },
  {
    loc: '/subsidiaries',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'monthly',
    priority: 0.8
  },
  {
    loc: '/services',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'monthly',
    priority: 0.8
  },
  {
    loc: '/careers',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'weekly',
    priority: 0.7
  },
  {
    loc: '/contact',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'monthly',
    priority: 0.6
  }
];

/**
 * Generate sitemap for Nexxt Group
 */
export function generateNexxtGroupSitemap(): string {
  const config: SitemapConfig = {
    baseUrl: 'https://nexxtgroup.com',
    routes: staticRoutes
  };
  
  return generateSitemap(config);
}

/**
 * Save sitemap to public directory (for build process)
 */
export async function saveSitemap(content: string, filename = 'sitemap.xml'): Promise<void> {
  // This would typically be used in a build script
  // For client-side, you'd need to implement server endpoint
  if (typeof window === 'undefined') {
    // Node.js environment (build time)
    const fs = await import('fs');
    const path = await import('path');
    
    const sitemapPath = path.join(process.cwd(), 'public', filename);
    fs.writeFileSync(sitemapPath, content, 'utf8');
  }
}

/**
 * Robots.txt content generation
 */
export function generateRobotsTxt(sitemapUrl: string): string {
  return `# Robots.txt for Nexxt Group
# ${sitemapUrl.replace('/sitemap.xml', '/robots.txt')}

User-agent: *
Allow: /

# Sitemap location
Sitemap: ${sitemapUrl}

# Crawl-delay for respectful crawling
Crawl-delay: 1

# Block access to sensitive areas
Disallow: /admin/
Disallow: /api/
Disallow: /.env
Disallow: /config/
Disallow: /node_modules/
Disallow: /src/

# Allow access to important assets
Allow: /images/
Allow: /css/
Allow: /js/
Allow: /fonts/

# Block common bot traps
Disallow: /*?utm_*
Disallow: /*?ref=*
Disallow: /*?source=*

# Major search engines - no restrictions
User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: Slurp
Allow: /

User-agent: DuckDuckBot
Allow: /

# Social media crawlers
User-agent: facebookexternalhit
Allow: /

User-agent: Twitterbot
Allow: /

User-agent: LinkedInBot
Allow: /

# Block problematic bots
User-agent: AhrefsBot
Disallow: /

User-agent: MJ12bot
Disallow: /

User-agent: SemrushBot
Disallow: /

User-agent: DotBot
Disallow: /`;
}

/**
 * Build time sitemap generation script
 */
export async function buildSitemap(): Promise<void> {
  try {
    const sitemapContent = generateNexxtGroupSitemap();
    await saveSitemap(sitemapContent);
    
    console.log('✅ Sitemap generated successfully at public/sitemap.xml');
  } catch (error) {
    console.error('❌ Error generating sitemap:', error);
  }
}