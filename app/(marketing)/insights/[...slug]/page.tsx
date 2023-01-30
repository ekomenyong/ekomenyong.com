import "./mdx.css";
import {
  BlogHeader,
  Container,
  KommyImage,
  KommyLink,
  MDXComponents,
  TableOfContents,
} from "@/components";
import { formatDate, shimmer, toBase64 } from "@/utils";
import { allAuthors, allPosts } from "contentlayer/generated";
import { notFound } from "next/navigation";

interface ISingleBlogPost {
  params: {
    slug: string[];
  };
}

export async function generateStaticParams(): Promise<ISingleBlogPost["params"][]> {
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
        authorName={
          authors?.length ? (
            authors.map((author) => (
              <span
                key={author?._id}
                className="after:content-[',_'] last-of-type:before:content-['and_'] last-of-type:after:content-none only-of-type:before:content-none"
              >
                {author?.name}
              </span>
            ))
          ) : (
            <span />
          )
        }
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
          <p className="mt-4 text-xl text-dark">
            I would love to hear your comments, revisions, or suggestions on this
            post. Let's{" "}
            <KommyLink
              dottedLine
              animatedUnderline
              href={`https://twitter.com/intent/tweet?text=${post.title}
                &url=https://ekomenyong.com/insights/${post.slugAsParams}`}
            >
              discuss it on Twitter
            </KommyLink>
            !
          </p>
          <hr className="my-16 w-1/3 border border-gray-700" />
          {authors?.length ? (
            <div className="space-y-8">
              {authors.map((author) => (
                <div
                  key={author?._id}
                  className="flex flex-row items-center justify-start"
                >
                  <KommyImage
                    src={`${author?.avatar}`}
                    width={48}
                    height={48}
                    alt={`Avatar of ${author?.name}`}
                    placeholder="blur"
                    blurDataURL={`data:image/svg+xml;base64,${toBase64(
                      shimmer(48, 48)
                    )}`}
                    className="my-0 mr-4 hidden h-10 w-10 rounded-full object-cover object-center lg:inline-block"
                  />
                  <p className="m-0 text-lg text-gray-600">
                    <KommyLink
                      href={`${author?.url}`}
                      animatedUnderline
                      dottedLine
                      className="font-medium text-dark"
                    >
                      {author?.name}
                    </KommyLink>{" "}
                    {author?.description}
                  </p>
                </div>
              ))}
            </div>
          ) : null}
        </article>
      </Container>
    </>
  );
}
