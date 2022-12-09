"use client";

import { clsxm } from "@/utils";
import Image, { ImageProps } from "next/image";
import { useState } from "react";

export type TKommyImage = {
  useSkeleton?: boolean;
  blurClassName?: string;
} & ImageProps;

export default function KommyImage({
  useSkeleton = false,
  blurClassName,
  src,
  alt,
  width,
  height,
  className,
  ...rest
}: TKommyImage) {
  const [status, setStatus] = useState(useSkeleton ? "loading" : "complete");
  return (
    <Image
      className={clsxm(
        className,
        status === "loading" && clsxm("animate-pulse", blurClassName)
      )}
      src={src}
      width={width}
      height={height}
      alt={alt}
      onLoadingComplete={() => setStatus("complete")}
      {...rest}
    />
  );
}
