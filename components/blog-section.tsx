import { shimmer, toBase64 } from "@/utils";
import { Post } from "contentlayer/generated";
import KommyLink from "./a";
import Container from "./container";
import KommyImage from "./image";

export default function BlogSection({ posts }: { posts: Post[] }) {
  return (
    <Container as="section" className="animate-in fade-in duration-500">
      <span className="font-mono text-sm font-semibold lowercase text-gray-500">
        scroll &rarr;
      </span>
      <div className="flex flex-row items-start justify-start space-x-8 overflow-x-auto pb-8">
        {posts?.length ? (
          <>
            {posts.map((p) => (
              <div
                key={p._id}
                className="group w-[330px] flex-none rounded-md border border-gray-300"
              >
                <KommyLink
                  href={`/insights/${p.slugAsParams}`}
                  className="group"
                >
                  <div className="h-[200px] w-full overflow-clip rounded-t-md">
                    <KommyImage
                      src={p.cover_image}
                      alt={p.title}
                      width={330}
                      height={200}
                      placeholder="blur"
                      blurDataURL={`data:image/svg+xml;base64,${toBase64(
                        shimmer(330, 200)
                      )}`}
                      className="group-hover:blog-scale h-full object-cover object-center"
                      priority
                    />
                  </div>

                  <div className="flex h-80 flex-col items-start justify-between p-4">
                    <h3 className="inline font-semibold capitalize leading-8">
                      {p.title}
                    </h3>

                    <div className="flex flex-col items-start justify-start">
                      <p className="text-sm lowercase text-gray-500">
                        {p.readingTime.text}
                      </p>
                      {p.tags?.length ? (
                        <div className="space-x-1">
                          {p.tags.map((t, index) => (
                            <span
                              key={index}
                              className="inline-flex text-xs font-normal uppercase tracking-wide before:content-['#'] after:ml-1 after:content-['•'] last:after:content-none"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      ) : null}
                    </div>
                  </div>
                </KommyLink>
              </div>
            ))}
          </>
        ) : (
          <p>No posts found</p>
        )}
      </div>
    </Container>
  );
}
