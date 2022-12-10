import "./globals.css";
import { clsxm } from "@/utils";
import localFont from "@next/font/local";

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

interface IRootLayout {
  children: React.ReactNode;
}

export default function RootLayout({ children }: IRootLayout) {
  return (
    <html
      lang="en"
      className={clsxm(
        "bg-light text-dark",
        neueMontreal.variable,
        lilex.variable
      )}
    >
      <head />
      <body className="min-h-screen bg-light bg-hero-gradient bg-contain bg-top bg-no-repeat">
        {children}
      </body>
    </html>
  );
}
