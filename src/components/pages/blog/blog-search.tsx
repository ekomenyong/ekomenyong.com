import React from "react";

import { Icons } from "~/components/global/icons";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";

export default function BlogSearch() {
  return (
    <div className="flex w-full items-center">
      <Input className="rounded-l-full bg-white" placeholder="Search for a post..." type="search" />
      <Button className="rounded-r-full" type="submit">
        <Icons.search className="h-auto w-4" />
      </Button>
    </div>
  );
}
