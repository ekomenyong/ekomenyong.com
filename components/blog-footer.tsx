import KommyImage from "./image";

export default function BlogFooter() {
  return (
    <footer className="space-y-8">
      <div className="flex flex-row items-center justify-start">
        <KommyImage
          useSkeleton
          src="/avatars/avatar.png"
          width={48}
          height={48}
          alt="Headshot of Ekom Enyong"
          className="my-0 mr-4 hidden h-10 w-10 rounded-full object-cover object-center lg:inline-block"
        />
        <p className="m-0 text-lg text-zinc-600">
          <span className="font-semibold text-dark">Ekom Enyong</span> is an SEO
          Manager who has spent the last 10 years helping brands increase leads
          and organic traffic through digital strategy and high-quality content.
        </p>
      </div>
    </footer>
  );
}
