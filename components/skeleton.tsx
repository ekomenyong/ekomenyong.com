import { HTMLAttributes } from "react";
import { clsxm } from "@/utils";

interface ISkeleton extends HTMLAttributes<HTMLDivElement> {}

export default function Skeleton({ className, ...props }: ISkeleton) {
  return (
    <div
      className={clsxm("animate-pulse bg-slate-200", className)}
      {...props}
    />
  );
}
