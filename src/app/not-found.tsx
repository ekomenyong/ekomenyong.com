import Link from "next/link";

import { Heading, HeadingEyebrow } from "~/components/atoms/heading";
import Container from "~/components/global/container";
import { Icons } from "~/components/global/icons";
import SiteHeader from "~/components/global/site-header";
import { Button } from "~/components/ui/button";

export default function NotFound() {
  return (
    <Container fullWidth>
      <SiteHeader />
      <Container className="flex max-w-3xl flex-col items-center justify-center py-36">
        <div className="flex flex-col items-center justify-center">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Ekom Enyong</span>
            <Icons.logo className="h-24 w-auto text-brand" />
          </Link>
          <div className="mt-8 flex max-w-2xl flex-col items-center text-center">
            <HeadingEyebrow className="uppercase" variant="gradient">
              404 Error
            </HeadingEyebrow>
            <Heading level={1}>
              A wise man once told me, “you need to get lost in order to find your way.”
            </Heading>
            <p className="max-w-md text-2xl text-muted-foreground">
              Here are some useful links to help you find your way.
            </p>
            <div className="flex flex-row items-center justify-center gap-x-4">
              <Button variant="outline" size="lg" asChild className="rounded-full text-base">
                <Link href="/insights" className="mt-8">
                  Read the blog
                </Link>
              </Button>
              <Button size="lg" asChild className="rounded-full text-base">
                <Link href="/" className="mt-8">
                  Take me home
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </Container>
  );
}
