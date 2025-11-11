/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://savepays.com',
  generateRobotsTxt: true,
  generateIndexSitemap: true,
};
