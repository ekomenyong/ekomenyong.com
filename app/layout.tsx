import "./globals.css";
import { Analytics, TailwindIndicator } from "@/components";
import { clsxm } from "@/utils";
import localFont from "@next/font/local";

const neueMontreal = localFont({
  src: [
    {
      path: "../assets/fonts/PPNeueMontreal-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/PPNeueMontreal-Italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../assets/fonts/PPNeueMontreal-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/fonts/PPNeueMontreal-MediumItalic.woff2",
      weight: "500",
      style: "italic",
    },
    {
      path: "../assets/fonts/PPNeueMontreal-Semibold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../assets/fonts/PPNeueMontreal-SemiBoldItalic.woff2",
      weight: "700",
      style: "italic",
    },
    {
      path: "../assets/fonts/PPNeueMontreal-Bold.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "../assets/fonts/PPNeueMontreal-BoldItalic.woff2",
      weight: "800",
      style: "italic",
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
        "bg-light text-dark antialiased",
        neueMontreal.variable,
        lilex.variable
      )}
    >
      <head />
      <body className="min-h-screen bg-light bg-hero-gradient bg-contain bg-top bg-no-repeat text-dark">
        {children}
        <Analytics />
        <TailwindIndicator />
      </body>
    </html>
  );
}
