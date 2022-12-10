import { navigation } from "@/config/navigation";
import KommyLink from "./a";
import Container from "./container";
import Logo from "./logo";

const nav = navigation.mainNav;
export default function Header() {
  return (
    <Container
      as="header"
      fullSize
      className="border-b border-dark animate-in slide-in-from-top duration-1000 lg:border-none"
    >
      <Container as="nav" aria-label="Top">
        <div className="flex w-full items-center justify-between py-6">
          <div className="flex items-center">
            <Logo />
          </div>
          <div className="hidden font-semibold capitalize lg:inline-flex">
            <p>Creating digital strategies & Web experiences</p>
          </div>
          <div className="ml-10 space-x-8">
            {nav.map((item, index) => (
              <KommyLink
                key={index}
                href={item.href}
                animatedUnderline
                className="text-base font-semibold tracking-wide text-dark"
              >
                {item.title}
              </KommyLink>
            ))}
          </div>
        </div>
      </Container>
    </Container>
  );
}
