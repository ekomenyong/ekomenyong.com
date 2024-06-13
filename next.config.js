/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require("@next/bundle-analyzer")();
const { withPlausibleProxy } = require("next-plausible");
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/insights/how-to-setup-free-postgresql-database-on-railway-app",
        destination: "/insights",
        permanent: true,
      },
      {
        source: "/insights/redesign-next-js-13-blog-contentlayer-typescript",
        destination: "/insights",
        permanent: true,
      },
      {
        source: "/info",
        destination: "/#info",
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/js/script.js",
        destination: "https://plausible.io/js/script.js",
      },
      // {
      //   source: "/api/event",
      //   destination: "https://plausible.io/api/event",
      // },
    ];
  },
};

module.exports =
  process.env.ANALYZE === "true" ? withPlausibleProxy(withBundleAnalyzer(nextConfig)) : nextConfig;
