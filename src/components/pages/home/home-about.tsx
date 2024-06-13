import React from "react";

import Image from "next/image";
import Link from "next/link";

import Container from "~/components/global/container";
import SectionHeading from "~/components/global/section-header";

import HomeCapabilities from "./home-capabilities";

// interface HomeAboutProps {
//   aboutTitle: string;
//   aboutSubTitle: string;
//   aboutContent: PortableTextBlock[];
//   aboutImage: (SanityImage & { alt?: string | null }) | null;
// }
const HomeAbout = () => {
  return (
    <Container fullWidth as="section" className="bg-white py-16 text-black">
      <Container>
        <SectionHeading id="info" headingText="About" subText="Info" className="text-black" />
        <div className="mt-8 flex flex-col items-center gap-x-0 md:flex-row md:items-start md:justify-start md:gap-x-8">
          <div>
            <Image
              src="/assets/headshot.jpeg"
              height={500}
              width={500}
              alt="Headshot of Ekom Enyong"
              className="mb-8 h-auto max-w-[280px] rounded-lg border-black object-cover shadow-lg md:mb-0"
              priority
            />
          </div>
          <div>
            <h3 className="text-3xl font-semibold">I connect brands with high-intent users.</h3>
            <p className="mt-4 text-xl">
              As organic search professional, I partner with founders and leaders to define and implement
              organic growth strategies. I&apos;ve spent the last 10 years growing organic traffic, optimizing
              websites, and turning web visitors into customers.
            </p>
            <p className="mb-12 mt-4 text-xl">
              I pride myself on delivering high-quality content that will convert your web visitors into happy
              users, clients, or customers. I&apos;m focused on more than quick wins &mdash; I&apos;m like
              creating scalable and effective strategies that will continue to drive organic growth over the
              long-term.
            </p>
            <Link
              href="https://read.cv/ekomenyong"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl font-medium underline underline-offset-2 after:ml-0 after:content-['_↗'] hover:text-brand">
              View resume
            </Link>
          </div>
        </div>
      </Container>
      <HomeCapabilities />
    </Container>
  );
};

export default HomeAbout;
