import React from "react";

import { formatDate, readingTime } from "~/app/(www)/insights/utils";
import { Heading } from "~/components/atoms/heading";
import Container from "~/components/global/container";
import Tag from "~/components/global/tag";

interface BlogArticleHeaderProps {
  title: string;
  publishedAt: string;
  content: string;
  category: string;
}
const BlogArticleHeader = (props: BlogArticleHeaderProps) => {
  const { title, publishedAt, content, category } = props;
  return (
    <Container fullWidth>
      <Container className="mx-auto flex flex-col items-center justify-center text-center">
        <Tag text={category} />
        <Heading level={1} className="text-balance">
          {title}
        </Heading>
        <div className="mb-8 mt-2 flex items-center justify-between text-sm">
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            {formatDate(publishedAt)} • {readingTime(content)} min read
          </p>
        </div>
      </Container>
    </Container>
  );
};

export default BlogArticleHeader;
