import KommyLink, { TKommyLink } from "./a";
import KommyImage, { TKommyImage } from "./image";

interface ITag {
  name: string;
}

type TBlogCard = {
  title: string;
  tags: ITag[];
  readingTime: string;
} & TKommyImage &
  TKommyLink;

const Tag = ({ name }: ITag) => {
  return (
    <span className="inline-flex text-xs font-normal uppercase tracking-wide before:content-['#'] after:ml-1 after:content-['•'] last:after:content-none">
      {name}
    </span>
  );
};

const BlogCard = ({ href, src, alt, title, tags, readingTime }: TBlogCard) => {
  return (
    <div className="group w-[330px] rounded-md border border-gray-300">
      <KommyLink href={href} className="group">
        <div className="h-[200px] w-[320px] overflow-clip rounded-t-md">
          <KommyImage
            useSkeleton
            src={src}
            alt={alt}
            width={400}
            height={220}
            className="group-hover:blog-scale h-full w-[320px] object-cover object-center"
          />
        </div>

        <div className="flex h-60 flex-col items-start justify-between p-4">
          <h3 className="inline font-semibold capitalize leading-6">{title}</h3>

          <div className="flex flex-col items-start justify-start">
            <p className="text-sm lowercase text-gray-500">{readingTime}</p>
            <div className="space-x-1">
              {tags.map((t, index) => (
                <Tag key={index} name={t.name} />
              ))}
            </div>
          </div>
        </div>
      </KommyLink>
    </div>
  );
};

export default BlogCard;
