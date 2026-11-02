import * as fs from 'fs';
import * as path from 'path';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { createStaticHandler, createStaticRouter, StaticRouterProvider } from 'react-router-dom/server';
import { Routes } from './data/pagesData';
import { canonicalUrl, getPageMetadata } from './components/PageMetadata';

const out = path.resolve('dist');
const assets = ['web.bundle.js', 'web.bundle.js.LICENSE.txt', 'web.bundle.css', 'github-dark-dimmed.min.css', 'favicon.ico', 'robots.txt', 'sitemap.xml', 'img'];

const escapeHtml = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');

// Puts value between the two capture groups; fails the build if index.html no longer matches
const fill = (html: string, pattern: RegExp, value: string) => {
  if (!pattern.test(html)) throw new Error(`prerender: ${pattern} not found in index.html`);
  return html.replace(pattern, (_, before, after) => before + value + after);
};

async function prerender() {
  const template = fs.readFileSync('index.html', 'utf8');
  const sitemap = fs.readFileSync('sitemap.xml', 'utf8');
  const pages = Array.from(sitemap.matchAll(/<loc>https:\/\/cssville\.xyz([^<]*)<\/loc>/g)).map(m => m[1]);

  fs.rmSync(out, { recursive: true, force: true });
  fs.mkdirSync(out);
  assets.forEach(a => fs.cpSync(a, path.join(out, a), { recursive: true }));
  // Unrendered shell for routes that are not prerendered (vercel.json rewrites to it)
  fs.writeFileSync(path.join(out, 'app.html'), template);

  const handler = createStaticHandler(Routes);
  for (const page of pages) {
    const context = await handler.query(new Request(canonicalUrl(page)));
    if (context instanceof Response || context.statusCode !== 200) {
      throw new Error(`prerender: ${page} did not render with status 200`);
    }
    const router = createStaticRouter(handler.dataRoutes, context);
    const body = renderToString(<StaticRouterProvider router={router} context={context} hydrate={false} />);
    const { title, description } = getPageMetadata(context.matches[context.matches.length - 1].route.handle, page);
    const url = canonicalUrl(page);

    let html = template;
    html = fill(html, /(<title>)[^<]*(<\/title>)/, escapeHtml(title));
    html = fill(html, /(<meta name="description" content=")[^"]*(")/, escapeHtml(description));
    html = fill(html, /(<meta property="og:title" content=")[^"]*(")/, escapeHtml(title));
    html = fill(html, /(<meta property="og:description" content=")[^"]*(")/, escapeHtml(description));
    html = fill(html, /(<meta property="og:url" content=")[^"]*(")/, url);
    html = fill(html, /(<meta name="twitter:title" content=")[^"]*(")/, escapeHtml(title));
    html = fill(html, /(<meta name="twitter:description" content=")[^"]*(")/, escapeHtml(description));
    html = fill(html, /()(<\/head>)/, `  <link rel="canonical" href="${url}" />\n`);
    html = fill(html, /(<div[^>]*id="root"[^>]*>)(<\/div>)/, body);

    const file = path.join(out, page === '/' ? 'index.html' : `${page}.html`);
    fs.mkdirSync(path.dirname(file), { recursive: true });
    fs.writeFileSync(file, html);
  }
  console.log(`prerendered ${pages.length} pages to ${out}`);
}

prerender().catch(e => {
  console.error(e);
  process.exit(1);
});
