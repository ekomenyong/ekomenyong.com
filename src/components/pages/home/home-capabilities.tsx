import React from "react";

import { Heading } from "~/components/atoms/heading";
import Container from "~/components/global/container";

const HomeCapabilities = () => {
  return (
    <Container className="mt-24">
      <div className="flex flex-col items-start gap-x-8 md:flex-row md:justify-between">
        <Heading level={3} className="mb-8 min-w-[280px] text-black">
          Capabilities
        </Heading>
        <div className="flex flex-wrap gap-4">
          {skills.map((skill) => (
            <span key={skill} className="rounded-full border-2 border-black px-3 py-2 text-xl font-medium">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default HomeCapabilities;

const skills = [
  "SEO Consulting",
  "On-page Optimization",
  "Content Strategy",
  "Copywriting",
  "SaaS SEO",
  "SEO for PLG",
  "Ecommerce SEO",
  "Technical SEO",
  "Local SEO",
  "Conversion Rate Optimization",
];
