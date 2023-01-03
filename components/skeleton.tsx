import React from "react";
import { clsxm } from "utils";

interface ISkeleton extends React.HTMLAttributes<HTMLDivElement> {}

export default function Skeleton({ className, ...props }: ISkeleton) {
  return (
    <div className={clsxm("animate-pulse bg-gray-300", className)} {...props} />
  );
}
