import { LoadingSpinner } from "~/components/global/loading-animation";

export default function Loading() {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <LoadingSpinner />
    </div>
  );
}
