import SectionDivider from "~/components/global/section-divider";
import HomeAbout from "~/components/pages/home/home-about";
import HomeFAQs from "~/components/pages/home/home-faqs";
import HomeHero from "~/components/pages/home/home-hero";
import HomePosts from "~/components/pages/home/home-posts";

export default async function Home() {
  return (
    <>
      <HomeHero
        badge
        badgeHref="https://cal.com/ekomenyong/discovery"
        badgeMessage="Limited Availability Q3/24"
        cta
        ctaHref="https://cal.com/ekomenyong/discovery"
        ctaText="Let's connect"
        heroTitle="Ekom Enyong"
        heroText="I'm an organic search (SEO) professional with a career spanning over 10 years crafting search strategies, optimizing digital experiences, and generating leads."
      />
      <HomeAbout />
      <div className="bg-white">
        <SectionDivider />
      </div>
      <HomePosts />
      <HomeFAQs />
    </>
  );
}
