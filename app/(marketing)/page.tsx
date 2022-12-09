import { AboutSection, BlogSection, Container } from "@/components";

export default function Home() {
  return (
    <Container as="section" className="py-12">
      <div className="pt-32 pb-24">
        <h1 className="text-4xl font-semibold md:text-7xl lg:text-8xl">
          Crafting Custom Digital Strategies & Web Experiences
        </h1>
      </div>
      <BlogSection />
      <AboutSection />
    </Container>
  );
}
