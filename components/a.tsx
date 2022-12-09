import { clsxm } from "@/utils";
import Link, { LinkProps } from "next/link";
import { AllHTMLAttributes, ReactNode } from "react";

export type TKommyLink = {
  showIcon?: boolean;
  dottedLine?: boolean;
  animatedUnderline?: boolean;
  className?: string;
  children?: ReactNode;
} & LinkProps &
  AllHTMLAttributes<HTMLAnchorElement>;

export default function KommyLink({
  showIcon = false,
  dottedLine = false,
  animatedUnderline = false,
  className,
  children,
  href,
  ...props
}: TKommyLink) {
  const isInternalLink =
    (href && href.startsWith("/")) || (href && href.startsWith("#"));
  if (isInternalLink) {
    return (
      <Link
        href={href}
        className={clsxm(
          dottedLine &&
            "border-b border-dotted border-dark hover:border-dark/0",
          animatedUnderline && "animated-underline",
          className
        )}
        {...props}
      >
        {children}
      </Link>
    );
  }
  return (
    <Link
      target="_blank"
      rel="noopener noreferrer"
      href={href}
      className={clsxm(
        dottedLine && "border-b border-dotted border-dark hover:border-dark/0",
        showIcon && "after:content-['_↗'] after:ml-2",
        animatedUnderline && "animated-underline",
        className
      )}
      {...props}
    >
      {children}
    </Link>
  );
}
