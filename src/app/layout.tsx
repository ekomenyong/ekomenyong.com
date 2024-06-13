import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";

import PlausibleProvider from "next-plausible";

import TailwindIndicator from "~/components/global/tailwind-indicator";
import { cn } from "~/lib/utils";

import "./globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Ekom Enyong",
  description: "Next.js 14, Sanity, Radix UI Shadcn",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <head>
        <PlausibleProvider domain="ekomenyong.com" />
      </head>
      <body className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable)}>
        <div className="relative flex flex-col">
          <main className="flex-1">{children}</main>
        </div>
        <TailwindIndicator />
      </body>
    </html>
  );
}
