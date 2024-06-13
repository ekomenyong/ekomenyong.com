import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import Script from "next/script";

import TailwindIndicator from "~/components/global/tailwind-indicator";
import { cn } from "~/lib/utils";

import "./globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Ekom Enyong | Organic Growth & SEO Professional",
  description:
    "Ekom Enyong is an organic search (SEO) professional with a career spanning over 10 years crafting search strategies, optimizing digital experiences, and generating leads.",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    images: [
      {
        url: "https://ekomenyong.com/assets/home-og.jpg",
      },
    ],
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable)}>
        <div className="relative flex flex-col">
          <main className="flex-1">{children}</main>
        </div>
        <TailwindIndicator />
      </body>
      <Script defer data-domain="ekomenyong.com" src="/js/script.js" />
    </html>
  );
}
