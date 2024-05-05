import React from "react";

import { Icons } from "./icons";

export const LoadingSpinner = () => {
  return (
    <div className="flex size-full items-center justify-center gap-5">
      <span className="animate-spin rounded-full border px-4 py-2">
        <Icons.logo className="h-10 w-auto" />
      </span>
      <span className="animate-pulse">Loading ...</span>
    </div>
  );
};
