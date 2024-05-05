import React from "react";

import { Separator } from "../ui/separator";
import Container from "./container";

const SectionDivider = ({ className }: { className?: string }) => {
  return (
    <Container className="py-16">
      <Separator className={className} />
    </Container>
  );
};

export default SectionDivider;
