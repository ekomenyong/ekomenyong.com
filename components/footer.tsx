import { Container, KommyLink, Logo } from "components";
import { navigation } from "config";
const nav = navigation.footerNav;
export default function Footer() {
  return (
    <Container fullSize as="footer">
      <hr className="mt-12 border-dark" />
      <Container
        as="div"
        className="flex flex-col py-12 sm:px-6 md:flex-row md:items-center md:justify-between"
      >
        {nav.length && (
          <div className="flex justify-center space-x-6 md:order-2">
            {nav.map((item) => (
              <KommyLink
                key={item.title}
                href={item.href}
                animatedUnderline
                className="font-medium text-dark"
              >
                {item.title}
              </KommyLink>
            ))}
          </div>
        )}
        <div className="mt-8 flex flex-col items-center justify-center font-medium md:order-1 md:mt-0 md:flex-row md:flex-nowrap md:justify-start">
          <Logo textSize="text-base font-medium" />
          <p className="ml-0 mt-4 md:mt-0 md:ml-2">
            &copy; 2023 &mdash;{" "}
            <KommyLink
              dottedLine
              animatedUnderline
              href="https://github.com/ekomenyong/ekomenyong.com"
            >
              Design and development by me
            </KommyLink>
            .
          </p>
        </div>
      </Container>
    </Container>
  );
}
