import React from "react";

import { cn } from "~/lib/utils";

interface IContainer {
  fullWidth?: boolean;
  className?: string;
  children: React.ReactNode;
  as?: React.ElementType;
}

export default function Container({ fullWidth, className, as = "div", children }: IContainer) {
  const Container = as;
  return (
    <Container className={cn("mx-auto px-4 lg:px-0", fullWidth ? "max-w-full px-0" : "max-w-4xl", className)}>
      {children}
    </Container>
  );
}
