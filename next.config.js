/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require("@next/bundle-analyzer")();
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
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
    ];
  },
};

module.exports = process.env.ANALYZE === "true" ? withBundleAnalyzer(nextConfig) : nextConfig;
