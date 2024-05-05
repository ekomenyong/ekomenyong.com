"use client";

import React from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

import Container from "~/components/global/container";
import { Icons } from "~/components/global/icons";
import { Button, buttonVariants } from "~/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "~/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "~/components/ui/sheet";
import { cn } from "~/lib/utils";

const SiteHeader = () => {
  const pathname = usePathname();
  return (
    <div className="sticky top-10 z-50 mx-2 mb-20">
      <Container className="flex flex-row items-center justify-between rounded-full border bg-white px-2 py-3">
        <div className="flex items-center justify-start gap-x-4 md:pl-4">
          <Link
            href="/"
            className="flex cursor-pointer items-center justify-start text-lg font-semibold transition hover:scale-[0.97]">
            <Icons.logo className="mr-2 h-8 w-auto cursor-pointer text-brand" />
            <span className="cursor-pointer tracking-tight dark:text-black">Ekom Enyong</span>
          </Link>

          <NavigationMenu className="hidden md:block">
            <NavigationMenuList className="gap-x-1">
              {navLinks.mainNav.map((nav, index) => (
                <NavigationMenuItem
                  key={index}
                  className={cn(
                    buttonVariants({ variant: "link" }),
                    "px-2 text-base tracking-wide",
                    pathname === nav.href ? "font-bold underline decoration-2" : ""
                  )}>
                  <NavigationMenuLink asChild>
                    <Link href={nav.href}>{nav.title}</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="hidden pr-4 md:inline-flex">
          <Button asChild className="rounded-full text-base dark:text-white">
            <Link href="https://hey.new/ekom">Let&apos;s connect</Link>
          </Button>
        </div>
        <div className="inline-flex md:hidden">
          <Sheet>
            <SheetTrigger className={cn(buttonVariants({ variant: "default" }), "rounded-full uppercase")}>
              Menu
            </SheetTrigger>
            <SheetContent
              side="nav"
              className="flex h-screen w-screen flex-col items-start justify-between bg-foreground py-10 text-white">
              <SheetHeader className="text-left">
                <SheetTitle>
                  <Link href="/" className="nowrap flex items-center justify-start text-lg font-semibold">
                    <Icons.logo className="mr-2 h-8 w-auto text-brand" />
                    <span className="text-white">EkomEnyong</span>
                  </Link>
                </SheetTitle>
              </SheetHeader>
              <div className="py-auto flex flex-col items-start justify-center gap-y-8">
                {navLinks.mobileNav.map((nav, index) => (
                  <Link key={index} href={nav.href} className="text-5xl font-semibold hover:text-brand">
                    {nav.title}
                  </Link>
                ))}
              </div>
              <SheetFooter className="w-full">
                <div className="flex w-full flex-row items-center justify-between">
                  <div>&copy;2024</div>
                  <div className="flex gap-x-6">
                    {navLinks.socialLinks.map((link, index) => (
                      <Link key={index} href={link.url} className="">
                        <link.icon className="h-6 w-auto hover:text-brand" />
                        <div className="sr-only">{link.name}</div>
                      </Link>
                    ))}
                  </div>
                </div>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </Container>
    </div>
  );
};

export default SiteHeader;

export type NavLinks = typeof navLinks;
const navLinks = {
  mainNav: [
    {
      title: "Info",
      href: "/#info",
    },
    {
      title: "Insights",
      href: "/insights",
    },
    {
      title: "FAQs",
      href: "/#faqs",
    },
  ],
  mobileNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Info",
      href: "/#info",
    },
    {
      title: "Insights",
      href: "/insights",
    },
    {
      title: "FAQs",
      href: "/#faqs",
    },
    {
      title: "Let's connect",
      href: "https://hey.new/ekom",
    },
  ],
  socialLinks: [
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
  ],
};
