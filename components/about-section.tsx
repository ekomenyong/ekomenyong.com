import Container from "./container";

export default function AboutSection() {
  return (
    <Container as="section">
      <h2 className="mt-20 mb-6 max-w-5xl font-bold leading-8 lg:leading-10">
        An SEO Manager who has spent the last 10 years helping brands increase leads
        and organic traffic through digital strategy and high-quality content.
      </h2>
      <div className="flex flex-col items-start justify-center space-y-6 text-xl text-dark lg:flex-row lg:flex-nowrap lg:justify-between lg:space-x-16 lg:space-y-0">
        <div className="max-w-lg">
          <p>
            I'm a results-focused digital marketer and a self-taught web designer and
            developer. With a background primarily working at digital agencies, I
            understand how frustrating it can be to implement organic search and
            content strategies. My data-driven marketing efforts focus on
            architecting positive user experiences and converting web visitors into
            customers. Where I differ from your average marketer is my passion for
            building scalable websites that users love and agile teams can easily
            manage.
          </p>
        </div>
        <div className="max-w-lg">
          <p>
            I work closely with brands to build custom digital strategies or web
            experiences so they can connect deeply with their audiences. Whether I
            optimize the structure of your website, your targeted keywords, or the
            type of content you create, every choice is intentional. Each decision is
            layered on top of one another to shape and execute a custom digital
            strategy. What does this mean for you? Extendible, performant, and
            user-focused digital experiences.
          </p>
        </div>
      </div>
    </Container>
  );
}
