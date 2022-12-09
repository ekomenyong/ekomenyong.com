export default function Home() {
  return (
    <section>
      <h1 className="text-6xl font-semibold">Welcome to the homepage.</h1>
      <p className="text-base">
        Tailwind CSS is working with Next.js 13 RSC and serving a local font
        using{" "}
        <span className="bg-light font-mono text-brand">`@next/font`</span>.
      </p>
    </section>
  );
}
