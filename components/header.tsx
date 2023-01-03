import { navigation } from "config";
import { KommyLink, Container, Logo } from "components";

const nav = navigation.mainNav;
export default function Header() {
  return (
    <Container
      as="header"
      fullSize
      className="border-b border-dark animate-in slide-in-from-top duration-500 lg:border-none"
    >
      <Container as="nav" aria-label="Top">
        <div className="flex w-full items-center justify-between py-6">
          <div className="flex items-center">
            <Logo />
          </div>
          <div className="hidden font-medium capitalize lg:inline-flex">
            <p>Creating digital strategies & Web experiences</p>
          </div>
          <div className="ml-10 space-x-8">
            {nav.map((item, index) => (
              <KommyLink
                key={index}
                href={item.href}
                animatedUnderline
                className="text-base font-medium tracking-wide text-dark"
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
