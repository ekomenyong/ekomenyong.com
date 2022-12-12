import { SingleBlogMeta } from "@/components";

export default function Head({ params }: { params: { slug: string[] } }) {
  return <SingleBlogMeta params={params} />;
}
