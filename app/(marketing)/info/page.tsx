import { Container, KommyLink } from "@/components";

export default function AboutPage() {
  return (
    <Container as="section" className="py-24">
      <h1 className="mb-4 text-4xl font-semibold animate-in slide-in-from-left duration-1500 md:mb-6 md:text-7xl lg:text-8xl">
        Hey, I'm Ekom.
      </h1>
      <h2 className="h0 font-semibold animate-in slide-in-from-right duration-1500">
        Nice to meet you 🤝🏾
      </h2>
      <div className="prose prose-2xl mt-16 text-dark animate-in slide-in-from-bottom duration-1500">
        <p>
          Bacon ipsum dolor amet alcatra andouille turkey, kevin ball tip
          burgdoggen capicola brisket pork rump fatback strip steak venison
          jerky filet mignon. Kielbasa jowl prosciutto, buffalo ham venison
          landjaeger ribeye chicken picanha porchetta meatloaf. T-bone alcatra
          pork doner rump.
        </p>
        <p>
          Ham hock shank ball tip chislic strip steak doner, beef fatback tongue
          corned beef. Andouille biltong spare ribs, fatback pastrami boudin
          pork loin pork belly leberkas shoulder swine jowl. Biltong bacon
          porchetta short ribs, andouille pig pork belly meatloaf filet mignon
          kielbasa chuck corned beef.
        </p>
        <p>
          Ham hock shank ball tip chislic strip steak doner, beef fatback tongue
          corned beef. Andouille biltong spare ribs, fatback pastrami boudin
          pork loin pork belly leberkas shoulder swine jowl.
        </p>
        <hr className="my-10 w-10 border border-dark" />
        <p>
          I'm currently working as a Senior SEO & Content Manager at{" "}
          <KommyLink href="#">Patron Technology</KommyLink>, where we're
          redefining what it means to be an event creator.
        </p>
        <p>
          I am currently taking on web design and development projects! If you
          want to reach out to collaborate or for any other reason, I'd be happy
          to hear from you!
        </p>
        <div className="flex flex-row space-x-4">
          <span>↳</span>
          <KommyLink href="#">Email</KommyLink>
          <span>/</span>
          <KommyLink href="#">Twitter</KommyLink>
          <span>/</span>
          <KommyLink href="#">LinkedIn</KommyLink>
          <span>/</span>
          <KommyLink href="#">Github</KommyLink>
        </div>
      </div>
    </Container>
  );
}
