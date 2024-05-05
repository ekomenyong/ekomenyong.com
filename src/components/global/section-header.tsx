import React from "react";

import { Heading, HeadingEyebrow } from "~/components/atoms/heading";

interface SectionHeadingProps {
  subText?: string;
  headingText: string;
  id?: string;
  className?: string;
  variant?: "gradient" | "brand" | "default";
}

const SectionHeading = (props: SectionHeadingProps) => {
  const { subText, headingText, id, variant, className } = props;
  return (
    <div>
      <HeadingEyebrow className={className} variant={variant}>
        {subText}
      </HeadingEyebrow>
      <Heading level={2} id={id} className={className}>
        {headingText}
      </Heading>
    </div>
  );
};

export default SectionHeading;
