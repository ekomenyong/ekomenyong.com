import "./globals.css";
import localFont from "@next/font/local";
import clsxm from "../utils";

const neueMontreal = localFont({
  src: [
    {
      path: "../assets/fonts/NeueMontreal-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/NeueMontreal-Italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../assets/fonts/NeueMontreal-Medium.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../assets/fonts/NeueMontreal-Medium.woff2",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-neue",
});
const lilex = localFont({
  src: [
    {
      path: "../assets/fonts/Lilex-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/Lilex-Medium.woff2",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-lilex",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={clsxm(neueMontreal.variable, lilex.variable)}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>{children}</body>
    </html>
  );
}
