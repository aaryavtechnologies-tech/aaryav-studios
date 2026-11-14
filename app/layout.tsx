import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://aaryavstudios.com";

export const viewport: Viewport = {
  themeColor: "#FFDE59",
  colorScheme: "dark light",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Aaryav Studios | Premier Video Production & Post-Production Agency",
    template: "%s | Aaryav Studios",
  },
  description:
    "Aaryav Studios is a premier creative video production and post-production agency. We specialize in high-retention video editing, cinematic commercials, YouTube storytelling, and viral social reels.",
  applicationName: "Aaryav Studios",
  authors: [{ name: "Aaryav Studios", url: siteUrl }],
  creator: "Aaryav Studios",
  publisher: "Aaryav Studios",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  keywords: [
    "Aaryav Studios",
    "video production agency",
    "video editing services",
    "post production company",
    "commercial video production",
    "YouTube video editor",
    "Instagram reels editing",
    "color grading studio",
    "motion graphics agency",
    "cinematic video editing",
    "high retention editing",
    "corporate video production",
    "Silvassa video production",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Aaryav Studios",
    title: "Aaryav Studios | Creative Video Production & Post-Production Agency",
    description:
      "Crafting high-converting visual stories, high-retention video edits, and cinematic commercials for top brands, agencies, and enterprise creators.",
    images: [
      {
        url: "/hero.png",
        width: 1200,
        height: 630,
        alt: "Aaryav Studios Portfolio - Impactful Visual Stories",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aaryav Studios | Video Production & Post-Production Agency",
    description:
      "High-retention video editing, viral short-form reels, color grading, and commercial video production.",
    images: ["/hero.png"],
    creator: "@aaryavstudios",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/icon.png" },
      { url: "/favicon.ico" },
    ],
    apple: "/apple-icon.png",
  },
  category: "Video Production & Editing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Aaryav Studios",
    image: `${siteUrl}/hero.png`,
    logo: `${siteUrl}/logo.png`,
    url: siteUrl,
    telephone: "+91-9328603748",
    email: "aaryavstudios@gmail.com",
    priceRange: "$$",
    description:
      "Full-service creative video production and post-production agency specializing in high-retention video editing, color grading, and commercial films.",
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "Kilvani Naka, Office no 601, 6th Floor, Premaldeep Square, Opp. Pravin Tailor",
      addressLocality: "Silvassa",
      addressRegion: "Dadra and Nagar Haveli and Daman and Diu",
      postalCode: "396230",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "20.2763",
      longitude: "73.0083",
    },
    sameAs: [
      "https://wa.me/919328603748",
      "https://wa.me/917048734139",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Video Production Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Video Editing",
            description: "High-retention pacing, narrative storytelling, and professional cuts.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Color Grading",
            description: "Cinematic color science and mood enhancement for raw footage.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Short Form / Reels / TikTok",
            description: "Fast-paced vertical edits designed for viral retention.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Commercial & Corporate Films",
            description: "High-end brand campaigns and documentary style videos.",
          },
        },
      ],
    },
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
