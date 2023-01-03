const siteUrl = process.env.NEXT_PUBLIC_APP_URL;
module.exports = {
  siteUrl,
  exclude: ["/404", "/insights/seo-guide-jamstack-react-development"],
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        disallow: ["/404"],
      },
      { userAgent: "*", allow: "/" },
    ],
  },
};
