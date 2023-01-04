import { writeFileSync } from "fs";
import RSS from "rss";

import { allPosts } from "../.contentlayer/generated/index.mjs";

async function generate() {
  const feed = new RSS({
    title: "EkomEnyong.com",
    site_url: "https://ekomenyong.com",
    feed_url: "https://ekomenyong.com/feed.xml",
    image_url: "https://ekomenyong.com/og.jpg",
    description:
      "Ekom Enyong is a professional SEO and Content marketer, web designer, and web developer based in Charlotte.",
  });
  allPosts.map((post) => {
    feed.item({
      title: post.title,
      url: `https://ekomenyong.com/insights/${post.slug}`,
      date: post.date,
      description: post.description,
      categories: post.tags,
    });
  });
  writeFileSync("./public/rss.xml", feed.xml({ indent: true }));
}
generate();
