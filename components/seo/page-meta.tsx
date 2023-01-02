import { site } from "config";
interface IPageMeta {
  title?: string;
  description?: string;
  slug: string;
}

const url: string = process.env.NEXT_APP_PUBLIC_URL! || "http://localhost:3000";

export default function PageMeta({ title, description, slug }: IPageMeta) {
  return (
    <>
      <title>{title ? `${title} » EkomEnyong.com` : site.seo.title}</title>
      <meta charSet="utf-8" />
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta
        name="description"
        content={description ? description : site.seo.description}
      />
      <meta property="og:title" content={`${title} | EkomEnyong.com`} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url + `/${slug}`} />
      <meta property="og:image" content={url + "/og.jpg"} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:card" content={site.seo.twitterCard} />
      <meta name="twitter:site" content={site.seo.twitterHandle} />
      <meta name="twitter:image" content={url + "/og.jpg"} />
      <link rel="icon" href="/favicons/favicon.ico" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicons/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicons/favicon-16x16.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicons/favicon-32x32.png"
      />
      <link rel="manifest" href="/favicons/site.webmanifest" />
      <link rel="canonical" href={url + `${slug}`} />
    </>
  );
}
