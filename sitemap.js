var path = require('path');
var fs = require('fs');
// Define your sitemap URLs here
var urls = [
    { loc: '/', lastmod: '2024-08-22' },
    { loc: '/docs/intro/getting-started', lastmod: '2024-08-22' },
    { loc: '/docs/components/button', lastmod: '2024-08-22' },
    { loc: '/docs/components/chip', lastmod: '2024-08-22' },
    { loc: '/docs/components/typography', lastmod: '2024-08-22' },
    // Add more routes as needed
];
var xml = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<urlset xmlns=\"http://www.sitemaps.org/schemas/sitemap/0.9\">\n  ".concat(urls
    .map(function (url) { return "\n    <url>\n      <loc>".concat("https://your-domain.com".concat(url.loc), "</loc>\n      <lastmod>").concat(url.lastmod, "</lastmod>\n    </url>"); })
    .join(''), "\n</urlset>");
// Write the sitemap.xml file to the public directory
var sitemapPath = path.resolve(__dirname, 'sitemap.xml');
fs.writeFileSync(sitemapPath, xml);
console.log('sitemap.xml has been generated at', sitemapPath);
