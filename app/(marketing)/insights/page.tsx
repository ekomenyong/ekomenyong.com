"use client";
import { useState } from "react";
import {
  BlogSection,
  Container,
  H1Heading,
  KommyImage,
  KommyLink,
} from "@/components";
import { allPosts } from "contentlayer/generated";
import { compareDesc } from "date-fns";

export default function BlogIndexPage() {
  const [searchValue, setSearchValue] = useState("");
  const posts = allPosts
    .filter((post) => post.published)
    .sort((a, b) => {
      return compareDesc(new Date(a.date), new Date(b.date));
    })
    .filter((post) => {
      if (searchValue === "") {
        return post;
      } else if (
        post.title.toLowerCase().includes(searchValue.toLowerCase()) ||
        post.description.toLowerCase().includes(searchValue.toLowerCase())
      ) {
        return post;
      }
    });

  return (
    <Container className="py-24">
      <div className="flex max-w-4xl flex-col items-start justify-center animate-in slide-in-from-left duration-1000">
        <H1Heading className="mb-4 md:mb-6">
          From the desk of Ekom Enyong...
        </H1Heading>
        <p className="max-w-2xl text-2xl leading-8">
          Sometimes I write about things. When I do write about things, I write
          about SEO, digital marketing, web design, user experience,
          development, and stuff.
        </p>
      </div>
      <div className="mt-10 mb-24 max-w-3xl animate-in slide-in-from-right duration-500">
        <input
          type="text"
          name="search"
          id="search"
          onChange={(e) => setSearchValue(e.target.value)}
          aria-label="Search all articles"
          placeholder="Search for an article..."
          className="block w-full rounded-md border border-gray-500 bg-light tracking-wide focus:border-brand focus:ring-brand"
        />
      </div>
      <BlogSection posts={posts} />
    </Container>
  );
}
