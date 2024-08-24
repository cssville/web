"use strict";
exports.__esModule = true;
var cssville_1 = require("cssville-generators/build/cssville");
var pagesData_1 = require("./data/pagesData");
var path = require('path');
var fs = require('fs');
function buildSitemapEntries(routes, basePath) {
    if (basePath === void 0) { basePath = ''; }
    var entries = [];
    routes.forEach(function (route) {
        var fullPath = "".concat(basePath).concat(route.path || '').replace(/\/+$/, ''); // Remove trailing slashes
        if (!fullPath.includes(':')) {
            // Static routes
            entries.push({
                loc: fullPath || '/',
                lastmod: new Date().toISOString().split('T')[0]
            });
        }
        else if (fullPath.includes('css-classes/:name')) {
            // Dynamic routes for css-classes/:name
            cssville_1.Cssville.generators.forEach(function (g) {
                var dynamicPath = fullPath.replace(':name', g.name);
                entries.push({
                    loc: dynamicPath,
                    lastmod: new Date().toISOString().split('T')[0]
                });
            });
        }
        if (route.children) {
            // Recursively add children routes
            entries.push.apply(entries, buildSitemapEntries(route.children, "".concat(fullPath, "/")));
        }
    });
    return entries;
}
// Generate the sitemap entries from the routes
var urls = buildSitemapEntries(pagesData_1.Routes);
var domain = "cssville.xyz";
var xml = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<urlset xmlns=\"http://www.sitemaps.org/schemas/sitemap/0.9\">\n  ".concat(urls
    .map(function (url) { return "\n    <url>\n      <loc>".concat("https://".concat(domain).concat(url.loc), "</loc>\n      <lastmod>").concat(url.lastmod, "</lastmod>\n    </url>"); })
    .join(''), "\n</urlset>");
// Write the sitemap.xml file to the public directory
var sitemapPath = path.resolve(__dirname, 'sitemap.xml');
fs.writeFileSync(sitemapPath, xml);
console.log('sitemap.xml has been generated at', sitemapPath);
