import { AboutFAQs, Container, H1Heading, KommyLink } from "@/components";

const faqs = [
  {
    question: "Tell me about yourself.",
    answer:
      "Well, for starters, I'm you, so this definitely feels a little... unconventional. But I guess for the sake of this interview, my name is Ekom Enyong. During the day, I'm the SEO manager at Patron Technology. By night, I'm a self-taught designer and developer. For the last decade, I've helped brands increase organic performance, leads, and ROI through digital strategy, content, design, and code.",
  },
  {
    question: "So what does that mean? What do you actually do?",
    answer:
      "Sometimes, it feels like everything, to be honest. But I'm basically a one-woman agency. I create and implement organic growth strategies, write content, design and build websites, manage multiple projects, analyze data, provide reporting, and speak at conferences from time to time. I'm probably forgetting a couple of things but–",
  },
  {
    question:
      "Do you seriously expect people to believe you do all of those things?",
    answer:
      "Um... yes? I'm passionate about all things digital, so throughout my career, I've continuously expanded my knowledge and skillset beyond marketing to design and development.",
  },
  {
    question:
      "Why did you start teaching yourself code if you already had a marketing career?",
    answer:
      "WordPress is my coding-villain origin backstory. When Google introduced Page Speed metrics as part of the search algorithm, clients were begging me to make their websites faster. Most of my clients were using WordPress, so I learned how to develop themes from scratch instead of using clunky page builders. Over the years, I got interested in React and now love building with Next.js.",
  },
  {
    question: "So are you not doing the whole SEO thing anymore?",
    answer:
      "I thought I just told you I am currently the SEO manager at Patron Technology. But, yes, I'll always be doing the 'SEO thing' even if I change careers or positions.",
  },
  {
    question:
      "You did say that, but you talk about Next.js a lot. What's your deal?",
    answer:
      "My deal? This is such a weird interview... Next.js makes developing web applications simple for me. Vercel has a good thing going, and Next.js allows self-taught developers like me to move faster.",
  },
  {
    question: "So you're masquerading as a developer even though you're a marketer?",
    answer:
      "Wow, um...no? My imposter syndrome thanks you for that question, but I literally built this website, so that should count for something, right?",
  },
  {
    question:
      "Hmmm, that's fair. Here's a softball: what other dev tools do you like building with?",
    answer:
      "I love the Jamstack and building with modern web technologies. So I use tools with a positive developer experience (DX) like Next.js, TypeScript, Tailwind CSS, Vercel, Prisma, Railway, PlanetScale, and Stripe.",
  },
  {
    question: "Are you actually going to post articles consistently this year?",
    answer:
      "That's a pretty shady question, especially considering this is an interview with myself... but I do hope I write a lot more content this year.",
  },
];
export default function AboutPage() {
  return (
    <Container as="section" className="py-24">
      <H1Heading className="mb-4 animate-in slide-in-from-left duration-500">
        Hey, I'm Ekom.
      </H1Heading>
      <h2 className="h0 font-bold animate-in slide-in-from-right duration-500">
        Nice to meet you 🤝🏾
      </h2>
      <div className="prose prose-lg mt-16 max-w-prose text-dark animate-in slide-in-from-bottom duration-500 md:prose-2xl">
        <p className="lead font-medium">
          Writing bios or content for "About me" pages is always awkward. So I
          decided that interviewing myself might be a little less painful experience
          for everyone involved. Read on below.
        </p>
        <AboutFAQs faqs={faqs} />
        <hr className="my-10 w-10 border border-dark" />
        <p>
          I am currently taking on speaking engagements, web design, and Next.js
          development projects! If you want to reach out to collaborate for those
          mentioned above or for any other reason, I'd love to hear from you!
        </p>
        <div className="flex flex-row space-x-4">
          <span>↳</span>
          <KommyLink href="https://twitter.com/EkomEnyong">Twitter</KommyLink>
          <span>/</span>
          <KommyLink href="mailto:hello@ekomenyong.com">Email</KommyLink>
          <span>/</span>
          <KommyLink href="https://github.com/ekomenyong">Github</KommyLink>
          <span>/</span>
          <KommyLink href="https://linkedin.com/in/ekomenyong">LinkedIn</KommyLink>
        </div>
      </div>
    </Container>
  );
}
