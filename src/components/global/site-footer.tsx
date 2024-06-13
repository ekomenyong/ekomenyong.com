import React from "react";

import Link from "next/link";

import Container from "./container";
import { Icons } from "./icons";

const SiteFooter = () => {
  return (
    <Container className="bg-black py-20 text-white" fullWidth as="section">
      <footer className="">
        <Container className="mb-20 flex items-center justify-between">
          <div className="flex items-center justify-start gap-x-2">
            <span className="text-base font-medium md:text-xl">
              All rights reserved. All wrongs restored. &hearts;
            </span>
          </div>
          <div className="flex gap-x-6">
            {socialLinks.map((link, index) => (
              <Link key={index} href={link.url}>
                <link.icon className="h-6 w-auto hover:cursor-pointer hover:text-brand" />
                <div className="sr-only">{link.name}</div>
              </Link>
            ))}
          </div>
        </Container>
        <Container className="flex flex-col items-center justify-center gap-y-4 text-sm md:flex-row md:items-start md:justify-between">
          <span>&copy; Ekom Enyong 2017-2024</span>
          <span />
          <div>
            <p>
              Site design and development by:{" "}
              <Link
                href="https://github.com/ekomenyong/ekomenyong.com"
                className="font-medium underline underline-offset-2 hover:text-brand">
                Ekom Enyong
              </Link>
            </p>
          </div>
        </Container>
      </footer>
    </Container>
  );
};

export default SiteFooter;

const socialLinks = [
  {
    name: "Twitter",
    url: "https://twitter.com/ekomenyong",
    icon: Icons.twitter,
  },
  {
    name: "Github",
    url: "https://github.com/ekomenyong",
    icon: Icons.github,
  },
];
