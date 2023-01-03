import { clsxm } from "utils";
import { HTMLAttributes, ReactNode } from "react";

interface IH1 extends HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode;
  className?: string;
}

export default function H1Heading({ className, children, ...props }: IH1) {
  return (
    <h1
      className={clsxm(
        "text-4xl font-bold tracking-wide md:text-7xl lg:text-8xl",
        className
      )}
      {...props}
    >
      {children}
    </h1>
  );
}
