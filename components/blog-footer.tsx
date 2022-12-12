import KommyImage from "./image";

interface IBlogFooter {
  imgSrc: string;
  name: string;
  bio: string;
}

export default function BlogFooter({ imgSrc, name, bio }: IBlogFooter) {
  return (
    <footer className="space-y-8">
      <div className="flex flex-row items-center justify-start">
        <KommyImage
          useSkeleton
          src={imgSrc}
          width={48}
          height={48}
          alt={`Avatar of ${name}`}
          className="my-0 mr-4 hidden h-10 w-10 rounded-full object-cover object-center lg:inline-block"
        />
        <p className="m-0 text-lg text-zinc-600">
          <span className="font-semibold text-dark">{name}</span> {bio}
        </p>
      </div>
    </footer>
  );
}
