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
};

module.exports = process.env.ANALYZE === "true" ? withBundleAnalyzer(nextConfig) : nextConfig;
