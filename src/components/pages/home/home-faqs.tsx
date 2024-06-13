import React from "react";

import Container from "~/components/global/container";
import SectionHeading from "~/components/global/section-header";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "~/components/ui/accordion";

const HomeFAQs = () => {
  return (
    <Container fullWidth className="">
      <Container className="py-16">
        <div className="flex flex-col items-start gap-x-10 md:flex-row md:justify-between">
          <div className="mb-4 min-w-[240px] md:mb-0">
            <SectionHeading className="text-black" headingText="Got Questions?" subText="FAQs" id="faqs" />
          </div>

          <Accordion
            type="single"
            collapsible
            className="mb-4 w-full text-foreground sm:w-[500px] lg:w-[580px]">
            {faqs &&
              faqs.map((f, index) => (
                <AccordionItem key={index} value={`item-${index + 1}`} className="py-2">
                  <AccordionTrigger>{f.question}</AccordionTrigger>
                  <AccordionContent>{f.answer}</AccordionContent>
                </AccordionItem>
              ))}
          </Accordion>
        </div>
      </Container>
    </Container>
  );
};

export default HomeFAQs;

const faqs = [
  {
    question: "What is SEO for Product-Led Growth (PLG)?",
    answer:
      "In the context of PLG, where the product itself is the primary means of acquisition, engagement, and expansion, SEO plays a crucial role in attracting potential users to the product through search engines and other organic channels. SEO supports PLG with strategies for product discovery, accessibility, enhancing user experience, leveraging user feedback, and more.",
  },
  {
    question: "What makes your approach to SEO different from others?",
    answer:
      'With the advancements of search engines and AI, modern SEO is more than optimizing titles, meta descriptions and targeting keywords. There is no "cookie-cutter" approach to doing SEO. Every project or engagement starts fresh. I like to talk to stakeholders, users, and use historical data to help formulate a strategy based on your users.',
  },
  {
    question: "What is your pricing structure?",
    answer:
      "I prefer to consult on a project-basis or monthly retainer instead of time-based or hourly pricing. If that makes sense to you, let's hop on a call and customize something that makes sense based on your goals, deliverables, and budget.",
  },
  {
    question: 'What does an SEO "project" look like?',
    answer:
      "Sometimes startups or tech companies want me to consult on creating their SEO strategy from the ground up or hiring their first SEO. Other times, a company will need assistance for something complex like a website migration. In cases like these, I consult for just the period of time to support the specific effort or project.",
  },
  {
    question: "Will you collaborate with other teams?",
    answer:
      "I am more than happy to work alongside marketers, copywriters, engineers, product teams, or any other people involved. I prefer to communicate asynchronously using email and tools like Slack for day-to-day conversations. For project management, I like to use tools like Asana, Clickup, Notion, or whatever tools you are currently using.",
  },
  {
    question: "Are available for a full-time role?",
    answer:
      "I am always interested to hear how you think we can work together. If you'd like to hire me in a full-time capacity, let's hop on a call and talk about it.",
  },
];
