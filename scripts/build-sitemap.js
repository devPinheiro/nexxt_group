#!/usr/bin/env node
/**
 * Build-time sitemap generation script
 * Run this during your build process to generate sitemap.xml
 */

const fs = require('fs');
const path = require('path');

// Import sitemap utilities (if using ES modules, you might need to adjust this)
const { generateNexxtGroupSitemap } = require('../src/utils/sitemap.ts');

async function buildSitemap() {
  try {
    console.log('🗺️  Generating sitemap...');
    
    // Generate sitemap content
    const sitemapContent = generateNexxtGroupSitemap();
    
    // Ensure public directory exists
    const publicDir = path.join(process.cwd(), 'public');
    if (!fs.existsSync(publicDir)) {
      fs.mkdirSync(publicDir, { recursive: true });
    }
    
    // Write sitemap to public directory
    const sitemapPath = path.join(publicDir, 'sitemap.xml');
    fs.writeFileSync(sitemapPath, sitemapContent, 'utf8');
    
    console.log('✅ Sitemap generated successfully at public/sitemap.xml');
    
    // Also generate robots.txt if it doesn't exist
    const robotsPath = path.join(publicDir, 'robots.txt');
    if (!fs.existsSync(robotsPath)) {
      const robotsContent = `# Robots.txt for Nexxt Group
User-agent: *
Allow: /

# Sitemap location
Sitemap: https://nexxtgroup.com/sitemap.xml

# Crawl-delay for respectful crawling
Crawl-delay: 1

# Block access to sensitive areas
Disallow: /admin/
Disallow: /api/
Disallow: /.env
Disallow: /config/
Disallow: /node_modules/
Disallow: /src/`;

      fs.writeFileSync(robotsPath, robotsContent, 'utf8');
      console.log('✅ Robots.txt generated successfully at public/robots.txt');
    }
    
  } catch (error) {
    console.error('❌ Error generating sitemap:', error);
    process.exit(1);
  }
}

// Run if called directly
if (require.main === module) {
  buildSitemap();
}

module.exports = { buildSitemap };