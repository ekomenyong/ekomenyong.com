import { navigation } from "@/config/navigation";
import { clsxm } from "@/utils";
import KommyLink from "./a";
import Logo from "./logo";

const nav = navigation.mainNav;
export default function Header() {
  return (
    <header className="border-b border-dark lg:border-none">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="w-full py-6 flex items-center justify-between">
          <div className="flex items-center">
            <Logo />
          </div>
          <div className="ml-10 space-x-8">
            {nav.map((item, index) => (
              <KommyLink
                key={index}
                href={item.href}
                dottedLine
                animatedUnderline
                className={clsxm("text-base font-medium text-dark")}
              >
                {item.title}
              </KommyLink>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
