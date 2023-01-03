module.exports = {
  siteUrl: "https://ekomenyong.com",
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
