import { AboutSection, BlogSection, Container, H1Heading } from "components";
import { allPosts } from "contentlayer/generated";
import { compareDesc } from "date-fns";

export default function Home() {
  const posts = allPosts
    .filter((post) => post.published)
    .sort((a, b) => {
      return compareDesc(new Date(a.date), new Date(b.date));
    });
  return (
    <Container as="section" className="py-12">
      <div className="py-24 md:pt-32 md:pb-24">
        <H1Heading className="animate-in slide-in-from-left duration-500">
          Crafting Custom Digital Strategies & Web Experiences
        </H1Heading>
      </div>
      <BlogSection posts={posts} />
      <AboutSection />
    </Container>
  );
}
