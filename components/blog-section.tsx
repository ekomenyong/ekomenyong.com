import KommyLink from "./a";
import BlogCard from "./blog-card";
import Container from "./container";

const posts = [
  {
    title: "How to boost your conversion rate using A/B testing",
    src: "https://images.unsplash.com/photo-1668365187350-05c997d09eba",
    href: "#",
    readingTime: "3 min",
    tags: [{ name: "design" }, { name: "development" }, { name: "Next.js" }],
    alt: "This is alt text",
  },
  {
    title: "How to boost your conversion rate using A/B testing",
    src: "https://images.unsplash.com/photo-1667845210425-5f805be2f355",
    href: "#",
    readingTime: "6 min",
    tags: [
      { name: "design" },
      { name: "development" },
      { name: "headless cms" },
    ],
    alt: "This is alt text",
  },
  {
    title: "How to boost your conversion rate using A/B testing",
    src: "https://images.unsplash.com/photo-1661956601349-f61c959a8fd4",
    href: "#",
    readingTime: "11 min",
    tags: [
      { name: "tailwindcss" },
      { name: "development" },
      { name: "tutorial" },
    ],
    alt: "This is alt text",
  },
  {
    title: "How to boost your conversion rate using A/B testing",
    src: "https://images.unsplash.com/photo-1668264791554-957296714f33",
    href: "#",
    readingTime: "6 min",
    tags: [
      { name: "design" },
      { name: "development" },
      { name: "headless cms" },
    ],
    alt: "This is alt text",
  },
  {
    title: "How to boost your conversion rate using A/B testing",
    src: "https://images.unsplash.com/photo-1668305766861-4b32f147399f",
    href: "#",
    readingTime: "11 min",
    tags: [
      { name: "tailwindcss" },
      { name: "development" },
      { name: "tutorial" },
    ],
    alt: "This is alt text",
  },
];

const HomeBlog = () => {
  return (
    <Container as="section">
      {/* <div className="mb-10 flex flex-col items-start justify-start">
        <h2 className="h2 mb-2 font-semibold capitalize leading-7">
          recent insights & thoughts
        </h2>
      </div> */}
      {/* BLOG GRID */}
      <span className="text-sm uppercase text-slate-500">scroll &rarr;</span>
      <div className="flex flex-row items-start justify-start space-x-8 overflow-x-auto pb-8">
        {posts.map((p, index) => (
          <BlogCard
            key={index}
            src={p.src}
            href={p.href}
            title={p.title}
            readingTime={p.readingTime}
            alt={p.alt}
            tags={p.tags}
          />
        ))}
      </div>
      {/* <div className="mt-20 flex items-start justify-center md:justify-start">
        <KommyLink
          dottedLine={false}
          href="/blog"
          className="inline-flex items-center justify-center whitespace-nowrap rounded-md border-2 border-dark bg-transparent px-3 py-1 text-base font-semibold capitalize tracking-wider text-dark hover:animate-jelly"
        >
          read more insights &#8599;
        </KommyLink>
      </div> */}
    </Container>
  );
};

export default HomeBlog;
