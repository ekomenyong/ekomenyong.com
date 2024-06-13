import { Metadata } from "next";

import SiteFooter from "~/components/global/site-footer";
import SiteHeader from "~/components/global/site-header";

export const metadata: Metadata = {
  title: "Blog | Ekom Enyong | Organic Growth & SEO Professional",
  description: "Read the latest insights from Ekom Enyong, an organic growth and SEO professional.",
  openGraph: {
    images: [
      {
        url: "https://ekomenyong.com/assets/home-og.jpg",
      },
    ],
  },
};

export default function WebLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SiteHeader />
      <section>{children}</section>
      <SiteFooter />
    </>
  );
}
