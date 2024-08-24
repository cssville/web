"use strict";
exports.__esModule = true;
var paths_1 = require("./data/paths");
var cssville_1 = require("cssville-generators/build/cssville");
var path = require('path');
var fs = require('fs');
function traversePaths(obj, basePath) {
    if (basePath === void 0) { basePath = ''; }
    var entries = [];
    Object.keys(obj).forEach(function (key) {
        var value = obj[key];
        if (typeof value === 'string') {
            // If the value is a string, it's a path
            entries.push({
                loc: "".concat(basePath, "/").concat(value).replace(/\/+/g, '/'),
                lastmod: new Date().toISOString().split('T')[0]
            });
        }
        else if (typeof value === 'function' && key === 'cssClasses') {
            // Special case for dynamic paths, such as cssClasses
            entries.push.apply(entries, cssville_1.Cssville.generators.map(function (g) { return ({
                loc: "".concat(basePath, "/").concat(value(g.name)).replace(/\/+/g, '/'),
                lastmod: new Date().toISOString().split('T')[0]
            }); }));
        }
        else if (typeof value === 'object') {
            // If the value is an object, recurse
            entries = entries.concat(traversePaths(value, "".concat(basePath, "/").concat(key)));
        }
    });
    return entries;
}
// Generate the sitemap entries from the paths
function buildSitemapEntries() {
    return traversePaths(paths_1.paths);
}
// Generate the sitemap entries
var urls = buildSitemapEntries();
var domain = "cssville.xyz";
var xml = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<urlset xmlns=\"http://www.sitemaps.org/schemas/sitemap/0.9\">\n  ".concat(urls
    .map(function (url) { return "\n    <url>\n      <loc>".concat("https://".concat(domain).concat(url.loc), "</loc>\n      <lastmod>").concat(url.lastmod, "</lastmod>\n    </url>"); })
    .join(''), "\n</urlset>");
// Write the sitemap.xml file to the public directory
var sitemapPath = path.resolve(__dirname, 'sitemap.xml');
fs.writeFileSync(sitemapPath, xml);
console.log('sitemap.xml has been generated at', sitemapPath);
