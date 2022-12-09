import BlogCard from "./blog-card";
import Container from "./container";

const posts = [
  {
    title: "Increasing Ticketleap's Organic Traffic by 92% in one year",
    src: "https://images.unsplash.com/photo-1668365187350-05c997d09eba",
    href: "#",
    readingTime: "4 min",
    tags: [{ name: "SaaS" }, { name: "seo" }, { name: "case-study" }],
    alt: "This is alt text",
  },
  {
    title: "Building an organic search landing page that converts at 74%",
    src: "https://images.unsplash.com/photo-1667845210425-5f805be2f355",
    href: "#",
    readingTime: "6 min",
    tags: [{ name: "cro" }, { name: "seo" }, { name: "a/b-testing" }],
    alt: "This is alt text",
  },
  {
    title: "How HYPERETHOS™ passed Google's Core Web Vitals with flying colors",
    src: "https://images.unsplash.com/photo-1661956601349-f61c959a8fd4",
    href: "#",
    readingTime: "11 min",
    tags: [
      { name: "Next.js" },
      { name: "Tailwind-CSS" },
      { name: "Development" },
    ],
    alt: "This is alt text",
  },
  {
    title: "How to Build an SEO Report using Google Data Studio",
    src: "https://images.unsplash.com/photo-1668264791554-957296714f33",
    href: "#",
    readingTime: "6 min",
    tags: [
      { name: "Google" },
      { name: "Reporting" },
      { name: "Data" },
      { name: "seo" },
    ],
    alt: "This is alt text",
  },
  {
    title: "Ultimate Guide to Jamstack SEO – From a former SEO",
    src: "https://images.unsplash.com/photo-1668305766861-4b32f147399f",
    href: "#",
    readingTime: "11 min",
    tags: [{ name: "jamstack" }, { name: "seo" }, { name: "tutorial" }],
    alt: "This is alt text",
  },
];

const HomeBlog = () => {
  return (
    <Container as="section" className="animate-in fade-in duration-2500">
      <span className="font-mono text-sm font-semibold lowercase text-gray-500">
        scroll &rarr;
      </span>
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
    </Container>
  );
};

export default HomeBlog;
