import { AboutSection, BlogSection, Container } from "@/components";

export default function Home() {
  return (
    <Container as="section" className="py-12">
      <div className="py-24 md:pt-32 md:pb-24">
        <h1 className="text-4xl font-semibold animate-in slide-in-from-left duration-1500 md:text-7xl lg:text-8xl">
          Crafting Custom Digital Strategies & Web Experiences
        </h1>
      </div>
      <BlogSection />
      <AboutSection />
    </Container>
  );
}
