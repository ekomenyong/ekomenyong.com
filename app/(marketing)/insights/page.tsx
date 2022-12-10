"use client";
import { useState } from "react";
import { BlogSection, Container } from "@/components";

export default function BlogIndexPage({}) {
  const [searchValue, setSearchValue] = useState("");
  return (
    <Container className="py-24">
      <div className="flex max-w-4xl flex-col items-start justify-center animate-in slide-in-from-left duration-1500">
        <h1 className="mb-4 text-4xl font-semibold  md:mb-6 md:text-7xl lg:text-8xl">
          From the desk of Ekom Enyong...
        </h1>
        <p className="max-w-2xl text-2xl leading-8 ">
          Sometimes I write about things. When I do write about things, I write
          about SEO, digital marketing, web design, user experience,
          development, and stuff.
        </p>
      </div>
      <div className="mt-10 mb-24 max-w-3xl animate-in slide-in-from-right duration-1500">
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
      <BlogSection />
    </Container>
  );
}
