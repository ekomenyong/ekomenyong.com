import React from "react";

import Link from "next/link";

import { formatDate, getBlogPosts, readingTime } from "~/app/(www)/insights/utils";
import PostCard from "~/components/blocks/post-card";
import Container from "~/components/global/container";
import SectionHeading from "~/components/global/section-header";

const HomePosts = () => {
  let allBlogs = getBlogPosts();
  return (
    <Container as="section" fullWidth className="bg-white pb-16 text-black">
      <Container>
        <div className="flex flex-col items-center gap-x-0 md:flex-row md:items-start md:justify-between md:gap-x-8">
          <div className="w-full md:w-[240px]">
            <SectionHeading subText="insights" headingText="My Latest Musings" className="text-black" />
          </div>
          <div className="flex w-full flex-col items-start gap-y-8 sm:w-[500px] lg:w-[580px]">
            {allBlogs
              .sort((a, b) => {
                if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
                  return -1;
                }
                return 1;
              })
              .slice(0, 5)
              .map((post) => (
                <PostCard
                  key={post.slug}
                  category={post.metadata.category}
                  title={post.metadata.title}
                  description={post.metadata.summary}
                  date={formatDate(post.metadata.publishedAt)}
                  readingTime={readingTime(post.content)}
                  href={`/insights/${post.slug}`}
                />
              ))}
            <div className="mt-16">
              <Link
                href="/insights"
                className="text-2xl font-medium underline underline-offset-2 after:ml-0 after:content-['_↗'] hover:text-brand">
                View all posts
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </Container>
  );
};

export default HomePosts;
