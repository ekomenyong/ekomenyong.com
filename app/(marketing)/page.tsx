import { AboutSection, BlogSection, Container, H1Heading } from "@/components";

export default function Home() {
  return (
    <Container as="section" className="py-12">
      <div className="py-24 md:pt-32 md:pb-24">
        <H1Heading className="animate-in slide-in-from-left duration-1500">
          Crafting Custom Digital Strategies & Web Experiences
        </H1Heading>
      </div>
      <BlogSection />
      <AboutSection />
    </Container>
  );
}
