module.exports = {
  siteUrl: 'https://savepays.com',
  generateRobotsTxt: true,
  generateIndexSitemap: true,
  outDir: './out',
  transform: async (config, path) => {
    return {
      loc: path,
      changefreq: 'weekly',
      priority: 0.7
    };
  }
};