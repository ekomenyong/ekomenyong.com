import {
  AboutSection,
  BlogSection,
  Container,
  H1Heading,
  KommyImage,
  KommyLink,
} from "@/components";
import { allPosts } from "contentlayer/generated";
import { compareDesc } from "date-fns";

export default function Home() {
  const posts = allPosts
    .filter((post) => post.published)
    .sort((a, b) => {
      return compareDesc(new Date(a.date), new Date(b.date));
    });
  return (
    <Container as="section" className="py-12">
      <div className="py-24 md:pt-32 md:pb-24">
        <H1Heading className="animate-in slide-in-from-left duration-1500">
          Crafting Custom Digital Strategies & Web Experiences
        </H1Heading>
      </div>
      <Container as="section" className="animate-in fade-in duration-2500">
        <span className="font-mono text-sm font-semibold lowercase text-gray-500">
          scroll &rarr;
        </span>
        <div className="flex flex-row items-start justify-start space-x-8 overflow-x-auto pb-8">
          {posts?.length ? (
            <>
              {posts.map((p) => (
                <div
                  key={p._id}
                  className="group w-[330px] rounded-md border border-gray-300"
                >
                  <KommyLink
                    href={`/insights/${p.slugAsParams}`}
                    className="group"
                  >
                    <div className="h-[200px] w-full overflow-clip rounded-t-md">
                      <KommyImage
                        useSkeleton
                        src={p.cover_image}
                        alt={p.title}
                        width={400}
                        height={220}
                        className="group-hover:blog-scale h-full object-cover object-center"
                        priority={true}
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
      <AboutSection />
    </Container>
  );
}
