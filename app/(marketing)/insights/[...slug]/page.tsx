import { notFound } from "next/navigation";
import { allAuthors, allPosts } from "contentlayer/generated";
import {
  TableOfContents,
  Container,
  BlogHeader,
  KommyLink,
  Callout,
  BlogFooter,
  MDXComponents,
  KommyImage,
} from "@/components";
import "./mdx.css";
import { formatDate } from "@/utils";

interface ISingleBlogPost {
  params: {
    slug: string[];
  };
}

export async function generateStaticParams(): Promise<
  ISingleBlogPost["params"][]
> {
  return allPosts.map((post) => ({
    slug: post.slugAsParams.split("/"),
  }));
}

export default function SingleBlogPost({ params }: ISingleBlogPost) {
  const slug = params?.slug?.join("/");
  const post = allPosts.find((post) => post.slugAsParams === slug);

  if (!post) {
    notFound();
  }
  const authors = post.authors.map((author) =>
    allAuthors.find(({ slug }) => slug === `authors/${author}`)
  );
  return (
    <>
      <BlogHeader
        authorName="Ekom Enyong"
        coverImageAttributionLink={post.cover_image_attribution_link}
        coverImageAttributionText={post.cover_image_attribution_text}
        date={formatDate(post.date)}
        title={post.title}
        imgSrc={post.cover_image}
        imgAlt={post.cover_image}
        readingTime={post.readingTime.text}
      />
      <Container className="flex flex-col items-center justify-start lg:flex-row lg:items-start lg:justify-between">
        <TableOfContents source={post.body.raw} />
        <article className="max-w-full px-4 pb-8 text-dark lg:max-w-3xl">
          <MDXComponents code={post.body.code} />
          <hr className="mt-24 mb-10 w-1/3 border border-gray-700" />
          {authors?.length ? (
            <footer className="space-y-8">
              {authors.map((author) => (
                <div className="flex flex-row items-center justify-start">
                  <KommyImage
                    useSkeleton
                    src={`${author?.avatar}`}
                    width={48}
                    height={48}
                    alt={`Avatar of ${author?.name}`}
                    className="my-0 mr-4 hidden h-10 w-10 rounded-full object-cover object-center lg:inline-block"
                  />
                  <p className="m-0 text-lg text-zinc-600">
                    <KommyLink
                      href={`${author?.url}`}
                      animatedUnderline
                      dottedLine
                      className="font-semibold text-dark"
                    >
                      {author?.name}
                    </KommyLink>{" "}
                    {author?.description}
                  </p>
                </div>
              ))}
            </footer>
          ) : null}
        </article>
      </Container>
    </>
  );
}
