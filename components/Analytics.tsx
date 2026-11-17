"use client";

import Script from "next/script";
import { useEffect } from "react";

declare global {
  interface Window {
    dataLayer: any[];
    gtag?: (...args: any[]) => void;
  }
}

export const Analytics = () => {
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  useEffect(() => {
    // Event delegation for conversion tracking (WhatsApp, Calls, Emails)
    const handleDocumentClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("a");
      if (!target) return;

      const href = target.getAttribute("href") || "";

      if (href.includes("wa.me") || href.includes("whatsapp.com")) {
        if (typeof window.gtag === "function") {
          window.gtag("event", "generate_lead", {
            event_category: "Conversion",
            event_label: "WhatsApp Click",
            link_url: href,
          });
        }
        if (Array.isArray(window.dataLayer)) {
          window.dataLayer.push({
            event: "conversion_whatsapp",
            conversion_type: "WhatsApp Click",
            link_url: href,
          });
        }
      } else if (href.startsWith("tel:")) {
        if (typeof window.gtag === "function") {
          window.gtag("event", "contact", {
            event_category: "Conversion",
            event_label: "Phone Call Click",
            link_url: href,
          });
        }
        if (Array.isArray(window.dataLayer)) {
          window.dataLayer.push({
            event: "conversion_phone",
            conversion_type: "Phone Call Click",
            link_url: href,
          });
        }
      } else if (href.startsWith("mailto:")) {
        if (typeof window.gtag === "function") {
          window.gtag("event", "contact", {
            event_category: "Conversion",
            event_label: "Email Click",
            link_url: href,
          });
        }
        if (Array.isArray(window.dataLayer)) {
          window.dataLayer.push({
            event: "conversion_email",
            conversion_type: "Email Click",
            link_url: href,
          });
        }
      }
    };

    document.addEventListener("click", handleDocumentClick);
    return () => document.removeEventListener("click", handleDocumentClick);
  }, []);

  if (!gaId) {
    return null;
  }

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gaId}', {
              page_path: window.location.pathname,
              send_page_view: true
            });
          `,
        }}
      />
    </>
  );
};

