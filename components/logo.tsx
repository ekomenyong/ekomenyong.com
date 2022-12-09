import Image from "next/image";
import KommyLink from "./a";
import logoImage from "../public/logo.svg";

export default function Logo() {
  return (
    <KommyLink
      href="/"
      className="flex flex-row flex-nowrap items-center justify-start text-xl font-semibold capitalize text-dark hover:animate-jelly"
    >
      <span className="sr-only">Ekom Enyong</span>
      <Image
        src={logoImage}
        width={48}
        height={48}
        alt="Pink circle"
        className="mr-2 h-4 w-4"
      />
      Ekom Enyong
    </KommyLink>
  );
}
