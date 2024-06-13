import React from "react";

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { getBlogPosts } from "~/app/(www)/insights/utils";
import { baseUrl } from "~/app/sitemap";
import Container from "~/components/global/container";
import BlogArticleHeader from "~/components/pages/blog/blog-article-header";
import { CustomMDX } from "~/components/pages/blog/mdx";
import { Separator } from "~/components/ui/separator";

export async function generateStaticParams() {
  let posts = getBlogPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  let post = getBlogPosts().find((post) => post.slug === params.slug);
  if (!post) {
    return;
  }

  let { title, publishedAt: publishedTime, summary: description, image } = post.metadata;
  let ogImage = image ? image : `${baseUrl}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `${baseUrl}/insights/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default function BlogArticlePage({ params }: { params: { slug: string } }) {
  const post = getBlogPosts().find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <Container className="py-16">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            description: post.metadata.summary,
            image: post.metadata.image
              ? `${baseUrl}${post.metadata.image}`
              : `/og?title=${encodeURIComponent(post.metadata.title)}`,
            url: `${baseUrl}/insights/${post.slug}`,
            author: {
              "@type": "Person",
              name: "Ekom Enyong",
            },
          }),
        }}
      />
      <BlogArticleHeader
        title={post.metadata.title}
        content={post.content}
        publishedAt={post.metadata.publishedAt}
        category={post.metadata.category}
      />

      <Container as="article" className="prose max-w-2xl">
        <CustomMDX source={post.content} />
      </Container>
      <Container className="max-w-2xl">
        <Separator className="mt-8 bg-neutral-500" />
        <div className="mx-auto flex items-start gap-x-6 pt-8">
          <Image
            src="/assets/headshot.jpeg"
            alt="Ekom Enyong headshot"
            width={500}
            height={500}
            className="h-16 w-auto rounded-full"
          />
          <p className="text-sm italic">
            <Link href="/" className="font-medium underline underline-offset-4 hover:text-brand">
              Ekom Enyong
            </Link>{" "}
            is an organic search (SEO) professional with a career spanning over 10 years crafting search
            strategies, optimizing digital experiences, and connecting brands with high-intent users.
          </p>
        </div>
      </Container>
    </Container>
  );
}
