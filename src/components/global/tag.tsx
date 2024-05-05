import React from "react";

import { Badge } from "../ui/badge";

const Tag = ({ text }: { text: string }) => {
  return (
    <Badge className="mb-2 rounded-full border-black uppercase text-black" variant="outline">
      #{text}
    </Badge>
  );
};

export default Tag;
