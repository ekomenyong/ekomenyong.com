import Container from "./container";
import KommyImage from "./image";

export default function BlogHeader({}) {
  return (
    <Container className="mt-32 mb-14">
      <div className="">
        <div className="mt-2 space-x-2 text-base italic tracking-wide">
          <span> Published: July 30,2022</span>
          <span>&mdash;</span>
          <span>6 min read</span>
        </div>
        <h1 className="mb-4 text-5xl font-semibold md:text-7xl">
          Building an organic search landing page that converts at 74%
        </h1>
        <div className="space-x-2 text-lg md:text-xl">
          <span>Written by: Ekom Enyong</span>
          <span>&mdash;</span>
          <span>Cover Art by: Kommy Digital</span>
        </div>
      </div>
      <KommyImage
        useSkeleton
        src="https://images.unsplash.com/photo-1667845210425-5f805be2f355"
        width={1200}
        height={630}
        alt=""
        className="my-8 h-[280px] w-full rounded-md border border-gray-300 object-cover object-center md:h-[500px]"
      />
    </Container>
  );
}
