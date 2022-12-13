"use client";

import { clsxm } from "@/utils";
import Image, { ImageProps } from "next/image";
import { useState } from "react";

interface IKommyImage extends ImageProps {
  useSkeleton?: boolean;
}

export default function KommyImage({
  useSkeleton = false,
  src,
  alt,
  className,
  ...rest
}: IKommyImage) {
  const [status, setStatus] = useState(useSkeleton ? "loading" : "complete");
  return (
    <Image
      className={clsxm(
        "object-cover object-center",
        className,
        status === "loading" && "animate-pulse"
      )}
      src={src}
      alt={alt}
      onLoadingComplete={() => setStatus("complete")}
      {...rest}
    />
  );
}
