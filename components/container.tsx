import { clsxm } from "utils";

interface IContainer {
  fullSize?: boolean;
  className?: string;
  children: React.ReactNode;
  as?: React.ElementType;
}

export default function Container({
  fullSize,
  className,
  as = "div",
  children,
}: IContainer) {
  const Container = as;
  return (
    <Container
      className={clsxm(
        "mx-auto px-4",
        fullSize ? "max-w-full px-0" : "max-w-6xl",
        className
      )}
    >
      {children}
    </Container>
  );
}
