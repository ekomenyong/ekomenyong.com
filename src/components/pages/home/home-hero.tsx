"use client";

import React from "react";

import Link from "next/link";

import { Heading } from "../../atoms/heading";
import Container from "../../global/container";
import { Icons } from "../../global/icons";
import { Button } from "../../ui/button";

interface HomeHeroProps {
  badge?: boolean;
  badgeMessage?: string;
  badgeHref?: string;
  heroTitle: string;
  heroText: string;
  cta?: boolean;
  ctaHref?: string;
  ctaText?: string;
}

const HomeHero = (props: HomeHeroProps) => {
  const { badge, badgeMessage, badgeHref, heroTitle, heroText, cta, ctaHref, ctaText } = props;
  return (
    <Container as="section" fullWidth>
      <Container className="py-16 lg:py-32">
        {badge && (
          <Button
            asChild
            size="sm"
            className="mb-8 inline-flex items-center rounded-full px-3 text-sm dark:bg-white dark:text-black">
            <Link href={badgeHref as string}>
              <div className="relative flex size-2.5">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex size-2.5 rounded-full bg-green-500" />
              </div>
              <span className="ml-3 font-medium hover:cursor-pointer">{badgeMessage}</span>
              <Icons.arrowRightUp className="ml-1 h-5 w-auto hover:cursor-pointer" />
            </Link>
          </Button>
        )}
        <div>
          <Heading level={1}>{heroTitle}</Heading>
          <p className="mb-8 max-w-2xl border-none text-2xl font-medium">{heroText}</p>
        </div>
        {cta && (
          <Link
            href={ctaHref as string}
            className="text-2xl font-medium underline underline-offset-2 after:ml-0 after:content-['_↗'] hover:text-brand"
            target="_blank"
            rel="noopener noreferrer">
            {ctaText}
          </Link>
        )}
      </Container>
    </Container>
  );
};

export default HomeHero;
