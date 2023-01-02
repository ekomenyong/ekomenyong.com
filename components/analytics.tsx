"use client";
import { site } from "config";

import { Analytics as VercelAnalytics } from "@vercel/analytics/react";
import Script from "next/script";

export default function Analytics() {
  return (
    <>
      <VercelAnalytics />
      <Script
        strategy="lazyOnload"
        data-domain={site.plausibleDataDomain}
        src="/js/script.js"
      />
    </>
  );
}
