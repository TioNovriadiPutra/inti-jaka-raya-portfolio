const path = require("path");
const { createSitemap } = require("sitemaps");

createSitemap({
  filePath: path.join(__dirname, "sitemap.xml"),
  urls: [
    {
      loc: "https://intijakaraya.com/home",
      changefreq: "daily",
      priority: 1,
    },
    {
      loc: "https://intijakaraya.com/about",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      loc: "https://intijakaraya.com/newsletter",
      changefreq: "monthly",
      priority: 0.4,
    },
    {
      loc: "https://intijakaraya.com/content",
      changefreq: "monthly",
      priority: 0.4,
    },
  ],
});
