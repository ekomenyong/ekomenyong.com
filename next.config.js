/** @type {import('next').NextConfig} */

const withPlugins = require("next-compose-plugins");
const { withContentlayer } = require("next-contentlayer");
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["res.cloudinary.com", "images.pexels.com", "images.unsplash.com"],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

module.exports = withPlugins([[withContentlayer]], nextConfig);
