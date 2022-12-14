"use client";

import { clsxm, shimmer, toBase64 } from "@/utils";
import Image, { ImageProps } from "next/image";

export interface IKommyImage extends ImageProps {}

export default function KommyImage({
  src,
  alt,
  className,
  ...rest
}: IKommyImage) {
  return (
    <Image
      className={clsxm("object-cover object-center", className)}
      src={src}
      alt={alt}
      {...rest}
    />
  );
}
