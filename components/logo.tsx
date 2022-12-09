import Image from "next/image";
import KommyLink from "./a";
import logoImage from "../public/logo.svg";

export default function Logo() {
  return (
    <KommyLink
      href="/"
      className="text-xl font-semibold capitalize text-dark flex flex-row flex-nowrap items-center justify-start hover:animate-jelly"
    >
      <span className="sr-only">Ekom Enyong</span>
      <Image
        src={logoImage}
        width={48}
        height={48}
        alt="Pink circle"
        className="w-4 h-4 mr-2"
      />
      Ekom Enyong
    </KommyLink>
  );
}
