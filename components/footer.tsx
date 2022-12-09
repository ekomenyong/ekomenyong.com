import { navigation } from "@/config/navigation";
import KommyLink from "./a";
import Container from "./container";
import Logo from "./logo";

const nav = navigation.footerNav;
export default function Footer() {
  return (
    <Container fullSize as="footer">
      <hr className="mt-12 border-dark" />
      <Container
        as="div"
        className="flex flex-col py-12 sm:px-6 md:flex-row md:items-center md:justify-between"
      >
        <div className="flex justify-center space-x-6 md:order-2">
          {nav.map((item, index) => (
            <KommyLink
              key={index}
              href={item.href}
              animatedUnderline
              className="font-semibold text-dark"
            >
              {item.title}
            </KommyLink>
          ))}
        </div>
        <div className="mt-8 flex flex-row flex-nowrap items-center justify-center md:order-1 md:mt-0 md:justify-start">
          <Logo textSize="text-base" />{" "}
          <p className="ml-2 font-semibold">&copy; 2022</p>
        </div>
      </Container>
    </Container>
  );
}