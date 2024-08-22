const path = require('path');
const fs = require('fs');

// Define the structure of your sitemap entries
interface SitemapEntry {
  loc: string;
  lastmod: string;
}

// Define your sitemap URLs here
const urls: SitemapEntry[] = [
  { loc: '/', lastmod: '2024-08-22' },
  { loc: '/docs/intro/getting-started', lastmod: '2024-08-22' },
  { loc: '/docs/components/button', lastmod: '2024-08-22' },
  { loc: '/docs/components/chip', lastmod: '2024-08-22' },
  { loc: '/docs/components/typography', lastmod: '2024-08-22' },
  // Add more routes as needed
];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls
    .map(
      (url) => `
    <url>
      <loc>${`https://your-domain.com${url.loc}`}</loc>
      <lastmod>${url.lastmod}</lastmod>
    </url>`
    )
    .join('')}
</urlset>`;

// Write the sitemap.xml file to the public directory
const sitemapPath = path.resolve(__dirname, 'sitemap.xml');
fs.writeFileSync(sitemapPath, xml);

console.log('sitemap.xml has been generated at', sitemapPath);
