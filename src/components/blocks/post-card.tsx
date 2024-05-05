import React from "react";

import Link from "next/link";

import Tag from "~/components/global/tag";

interface PostCardProps {
  href: string;
  category: string;
  title: string;
  description: string;
  date: string;
  readingTime: string;
}

const PostCard = (props: PostCardProps) => {
  const { category, title, description, date, readingTime, href } = props;
  return (
    <article className="group flex w-full flex-col rounded md:flex-row md:items-center md:justify-between md:gap-x-4">
      <div className="order-2 flex flex-col border-b pb-12 dark:border-muted-foreground md:order-1">
        <div>
          <Tag text={category} />
        </div>
        <div className="">
          <Link href={href as string} className="decoration-2 underline-offset-4 hover:underline">
            <h3 className="mb-1 cursor-pointer text-xl font-semibold after:content-['_↗'] lg:text-2xl">
              {title}
            </h3>
          </Link>
          <p className="max-w-2xl text-sm">{description}</p>
        </div>
        <div className="mt-4 flex items-center justify-start gap-x-2 text-sm">
          <span>{date}</span>
          <span>{"•"}</span>
          <span>{readingTime} min read</span>
        </div>
      </div>
    </article>
  );
};

export default PostCard;
