import SiteFooter from "~/components/global/site-footer";
import SiteHeader from "~/components/global/site-header";

export default function WebLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SiteHeader />
      <section>{children}</section>
      <SiteFooter />
    </>
  );
}
