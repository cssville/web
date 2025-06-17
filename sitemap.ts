import { paths } from './data/paths';
import { Cssville } from "cssville-generators/build/cssville";

const path = require('path');
const fs = require('fs');

interface SitemapEntry {
  loc: string;
  lastmod: string;
}

function traversePaths(obj: any, basePath: string = ''): SitemapEntry[] {
  let entries: SitemapEntry[] = [];

  Object.keys(obj).forEach((key) => {
    const value = obj[key];
    if (typeof value === 'string') {
      // If the value is a string, it's a path
      // Add /docs prefix for components and css-classes paths
      const needsDocsPrefix = (basePath === 'components' || value.startsWith('components/') || 
                              value.startsWith('css-classes/') || basePath === 'intro' || 
                              value.startsWith('intro/'));
      const prefix = needsDocsPrefix ? '/docs' : '';
      entries.push({
        loc: `${prefix}/${value}`.replace(/\/+/g, '/'), // Add prefix, leading slash and normalize
        lastmod: new Date().toISOString().split('T')[0],
      });
    } else if (typeof value === 'function' && key === 'cssClasses') {
      // Special case for dynamic paths, such as cssClasses
      entries.push(
        ...Cssville.generators.map((g) => ({
          loc: `/docs/${value(g.name)}`.replace(/\/+/g, '/'), // Add /docs prefix, leading slash and normalize
          lastmod: new Date().toISOString().split('T')[0],
        }))
      );
    } else if (typeof value === 'object') {
      // If the value is an object, recurse
      entries = entries.concat(traversePaths(value, key));
    }
  });

  return entries;
}

// Generate the sitemap entries from the paths
function buildSitemapEntries(): SitemapEntry[] {
  return traversePaths(paths);
}

// Generate the sitemap entries
const urls: SitemapEntry[] = buildSitemapEntries();

const domain = "cssville.xyz";
const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls
    .map(
      (url) => `
    <url>
      <loc>${`https://${domain}${url.loc}`}</loc>
      <lastmod>${url.lastmod}</lastmod>
    </url>`
    )
    .join('')}
</urlset>`;

// Write the sitemap.xml file to the public directory
const sitemapPath = path.resolve(__dirname, 'sitemap.xml');
fs.writeFileSync(sitemapPath, xml);

console.log('sitemap.xml has been generated at', sitemapPath);
