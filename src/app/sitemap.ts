import { getBlogPosts } from "~/app/(www)/insights/utils";

export const baseUrl = "https://ekomenyong.com";

export default async function sitemap() {
  let blogs = getBlogPosts().map((post) => ({
    url: `${baseUrl}/insights/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }));

  let routes = ["", "/insights"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes, ...blogs];
}
