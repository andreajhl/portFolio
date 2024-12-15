/** @type {import('next-sitemap').IConfig} */
export default {
  siteUrl: 'https://andrea-hernandez-dev.vercel.app/',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
      { userAgent: 'Googlebot', allow: '/' },
    ],
  },
  sitemapSize: 5000,
  priority: 0.7,
  changefreq: 'monthly',
};