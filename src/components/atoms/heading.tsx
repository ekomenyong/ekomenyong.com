import { ComponentProps } from "react";

import { cn } from "~/lib/utils";

type HeadingProps = {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  wrapBalance?: boolean;
} & ComponentProps<"h1" | "h2" | "h3" | "h4" | "h5" | "h6">;

function Heading({ level, className, wrapBalance = true, ...props }: HeadingProps) {
  const Element = `h${level}` as const;
  return (
    <Element
      className={cn(
        "mb-2 scroll-m-36 font-semibold leading-10 tracking-tight text-foreground  [&:not(:first-child)]:mt-3",
        wrapBalance ? "[text-wrap:balance]" : "",
        Element === "h1"
          ? "text-4xl font-extrabold lg:text-5xl"
          : Element === "h2"
            ? "text-3xl first:mt-0 lg:text-4xl"
            : Element === "h3"
              ? "scroll-m-20 text-2xl lg:text-3xl"
              : Element === "h4"
                ? "scroll-m-20 text-lg lg:text-xl"
                : Element === "h5"
                  ? "scroll-m-20 text-base lg:text-lg"
                  : Element === "h6"
                    ? "scroll-m-20 text-sm lg:text-base"
                    : "",
        className
      )}
      {...props}
    />
  );
}

type HeadingEyebrowProps = {
  variant?: "gradient" | "brand" | "default";
} & ComponentProps<"p">;

/** Used for text above headings */
function HeadingEyebrow({ className, variant = "default", ...props }: HeadingEyebrowProps) {
  return (
    <p
      className={cn(
        "w-max text-sm font-semibold uppercase tracking-[1px] [text-wrap:balance]",
        variant === "gradient"
          ? "bg-text-gradient bg-clip-text text-transparent dark:bg-text-dark-gradient"
          : variant === "brand"
            ? "text-brand"
            : variant === "default"
              ? "text-foreground"
              : "",
        className
      )}
      {...props}
    />
  );
}

export { Heading, HeadingEyebrow };
