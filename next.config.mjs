import { withContentlayer } from "next-contentlayer";

/** @type {import('next').NextConfig} */
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
  async redirects() {
    return [
      {
        source: "/posts/how-to-setup-free-postgresql-database-on-railway-app",
        destination:
          "/insights/how-to-setup-free-postgresql-database-on-railway-app",
        permanent: true,
      },
      {
        source: "/posts/rebuilding-blog-nextjs-mdx-tailwindcss",
        destination: "/insights/redesign-next-js-13-blog-contentlayer-typescript",
        permanent: true,
      },
      {
        source: "/about",
        destination: "/info",
        permanent: true,
      },
      {
        source: "/posts",
        destination: "/insights",
        permanent: true,
      },
      {
        source: "/posts/react-nextjs-developer-tech-stack-tools",
        destination: "/insights",
        permanent: true,
      },
      {
        source:
          "/posts/from-wordpress-to-jamstack-why-self-taught-devloper-switched",
        destination: "/insights",
        permanent: true,
      },
      {
        source: "/posts/core-web-vitals-understanding-lcp-fid-and-cls",
        destination: "/insights",
        permanent: true,
      },
    ];
  },
};

export default withContentlayer(nextConfig);
