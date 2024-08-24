import { RouteObject } from "react-router-dom";
import { Cssville } from "cssville-generators/build/cssville"
import { Routes } from "./data/pagesData";

const path = require('path');
const fs = require('fs');

// Define the structure of your sitemap entries
interface SitemapEntry {
  loc: string;
  lastmod: string;
}

function buildSitemapEntries(
  routes: RouteObject[],
  basePath: string = ''
): SitemapEntry[] {
  const entries: SitemapEntry[] = [];

  routes.forEach((route) => {
    const fullPath = `${basePath}${route.path || ''}`.replace(/\/+$/, ''); // Remove trailing slashes

    if (!fullPath.includes(':')) {
      // Static routes
      entries.push({
        loc: fullPath || '/', // Ensure root path is '/'
        lastmod: new Date().toISOString().split('T')[0], // Current date in YYYY-MM-DD format
      });
    } else if (fullPath.includes('css-classes/:name')) {
      // Dynamic routes for css-classes/:name
      Cssville.generators.forEach((g) => {
        const dynamicPath = fullPath.replace(':name', g.name);
        entries.push({
          loc: dynamicPath,
          lastmod: new Date().toISOString().split('T')[0],
        });
      });
    }

    if (route.children) {
      // Recursively add children routes
      entries.push(...buildSitemapEntries(route.children, `${fullPath}/`));
    }
  });

  return entries;
}

// Generate the sitemap entries from the routes
const urls: SitemapEntry[] = buildSitemapEntries(Routes);

const domain = "cssville.xyz"
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
