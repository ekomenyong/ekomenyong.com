import {
  TableOfContents,
  Container,
  BlogHeader,
  KommyLink,
  Callout,
  BlogFooter,
  Icons,
} from "@/components";
import { clsxm } from "@/utils";

export default function SingleBlogPost({}) {
  return (
    <>
      <BlogHeader />
      <Container className="flex flex-col items-center justify-start lg:flex-row lg:items-start lg:justify-between">
        <TableOfContents />
        <article className="prose prose-xl max-w-3xl py-8 text-dark prose-a:no-underline prose-li:marker:text-dark">
          <Callout>
            Pastrami turducken shoulder short loin strip steak.{" "}
            <KommyLink href="#" dottedLine animatedUnderline>
              Hamburger ribeye
            </KommyLink>{" "}
            pork loin. Pastrami turducken shoulder short loin strip steak.
            Hamburger ribeye pork loin.
          </Callout>
          <h2>This is the first subheading for this post</h2>
          <p>
            Pastrami turducken shoulder short loin strip steak. Hamburger ribeye
            pork loin pork belly pancetta short ribs chicken biltong meatloaf
            beef ribs tri-tip sirloin. Frankfurter biltong short ribs boudin,
            jowl buffalo meatball.
          </p>
          <blockquote
            className={clsxm(
              "mt-6 border-l-4 border-brand pl-6 italic text-dark [&>*]:text-zinc-600"
            )}
          >
            <p>Pastrami turducken shoulder short loin strip steak.</p>
            <cite>– This is a citation</cite>
          </blockquote>
          <p>
            Bacon ipsum dolor amet tail swine cow shank ham hock. Turkey kevin
            strip steak, corned beef salami shankle ground round sausage pork
            chop. Tongue jerky salami filet mignon shoulder swine, short loin
            ball tip.
          </p>
          <h3>This is the first subheading for this post</h3>
          <p>
            Pastrami turducken shoulder short loin strip steak. Hamburger ribeye
            pork loin{" "}
            <KommyLink
              dottedLine
              animatedUnderline
              className="no-underline"
              href="#"
            >
              pork belly pancetta short ribs
            </KommyLink>{" "}
            chicken biltong meatloaf beef ribs tri-tip sirloin. Frankfurter
            biltong short ribs boudin, jowl buffalo meatball.
          </p>
          <ol>
            <li>List 1</li>
            <li>List 2</li>
            <li>List 3</li>
          </ol>
          <p>
            Bacon ipsum dolor amet tail swine cow shank ham hock. Turkey kevin
            strip steak, corned beef salami shankle ground round sausage pork
            chop. Tongue jerky salami filet mignon shoulder swine, short loin
            ball tip.
          </p>
          <h2>This is the first subheading for this post</h2>
          <p>
            Pastrami turducken shoulder short loin strip steak. Hamburger ribeye
            pork loin pork belly pancetta short ribs chicken biltong meatloaf
            beef ribs tri-tip sirloin. Frankfurter biltong short ribs boudin,
            jowl buffalo meatball.
          </p>
          <ul>
            <li>List 1</li>
            <li>List 2</li>
            <li>List 3</li>
          </ul>
          <p>
            Bacon ipsum dolor amet tail swine cow shank ham hock. Turkey kevin
            strip steak, corned beef salami shankle ground round sausage pork
            chop. Tongue jerky salami filet mignon shoulder swine, short loin
            ball tip.
          </p>
          <h3>This is the first subheading for this post</h3>
          <p>
            Pastrami turducken shoulder short loin strip steak. Hamburger ribeye
            pork loin{" "}
            <KommyLink
              dottedLine
              animatedUnderline
              className="no-underline"
              href="#"
            >
              pork belly pancetta short ribs
            </KommyLink>{" "}
            chicken biltong meatloaf beef ribs tri-tip sirloin. Frankfurter
            biltong short ribs boudin, jowl buffalo meatball.
          </p>
          <ol>
            <li>List 1</li>
            <li>List 2</li>
            <li>List 3</li>
          </ol>
          <p>
            Bacon ipsum dolor amet tail swine cow shank ham hock. Turkey kevin
            strip steak, corned beef salami shankle ground round sausage pork
            chop. Tongue jerky salami filet mignon shoulder swine, short loin
            ball tip.
          </p>
          <h2>This is the first subheading for this post</h2>
          <p>
            Pastrami turducken shoulder short loin strip steak. Hamburger ribeye
            pork loin pork belly pancetta short ribs chicken biltong meatloaf
            beef ribs tri-tip sirloin. Frankfurter biltong short ribs boudin,
            jowl buffalo meatball.
          </p>
          <ul>
            <li>List 1</li>
            <li>List 2</li>
            <li>List 3</li>
          </ul>
          <p>
            Bacon ipsum dolor amet tail swine cow shank ham hock. Turkey kevin
            strip steak, corned beef salami shankle ground round sausage pork
            chop. Tongue jerky salami filet mignon shoulder swine, short loin
            ball tip.
          </p>
          <hr className="mt-24 mb-10 w-1/3 border border-gray-700" />
          <BlogFooter />
        </article>
      </Container>
    </>
  );
}
