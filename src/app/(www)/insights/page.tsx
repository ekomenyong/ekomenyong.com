import React from "react";

import { formatDate, getBlogPosts, readingTime } from "~/app/(www)/insights/utils";
import { Heading, HeadingEyebrow } from "~/components/atoms/heading";
import PostCard from "~/components/blocks/post-card";
import Container from "~/components/global/container";

export default function BlogIndexPage() {
  const allBlogs = getBlogPosts();

  return (
    <Container as="section" fullWidth>
      <Container>
        <div className="relative flex flex-col items-center gap-x-0 md:flex-row md:items-start md:justify-start md:gap-x-20">
          <div className="w-full md:sticky md:top-32 md:mb-0 md:w-[240px]">
            <HeadingEyebrow>Insights</HeadingEyebrow>
            <Heading level={1}>My Latest Musings</Heading>
            {/* <div className="mt-8">
              <BlogSearch />
            </div> */}
            <p className="text-sm">
              Sometimes I write about things. When I do write about things, I write about SEO, digital
              marketing, web design, user experience, development, and stuff.
            </p>
          </div>
          <div className="mt-8 flex w-full flex-col items-end gap-y-8 sm:w-[500px] md:mt-0 lg:w-[580px]">
            {allBlogs
              .sort((a, b) => {
                if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
                  return -1;
                }
                return 1;
              })
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
          </div>
        </div>
      </Container>
    </Container>
  );
}
