import { KommyLink, KommyImage } from "components";
import logoImage from "../public/logo.svg";
import { clsxm } from "utils";

interface ILogo {
  textSize?: string;
}

export default function Logo({ textSize }: ILogo) {
  return (
    <KommyLink
      href="/"
      className={clsxm(
        "flex flex-row flex-nowrap items-center justify-start font-bold capitalize text-dark hover:animate-jelly",
        textSize ? textSize : "text-xl "
      )}
    >
      <span className="sr-only">Ekom Enyong</span>
      <KommyImage
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
