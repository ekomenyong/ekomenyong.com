import Footer from "components/footer";
import Header from "components/header";

interface IWebLayout {
  children?: React.ReactNode;
}

export default function WebLayout({ children }: IWebLayout) {
  return (
    <>
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}
