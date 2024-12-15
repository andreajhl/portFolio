/** @type {import('next-sitemap').IConfig} */
export default {
  siteUrl: 'https://andrea-hernandez-dev.vercel.app',
  generateRobotsTxt: true,
  exclude: [],
  sitemapSize: 1,
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
  }
};