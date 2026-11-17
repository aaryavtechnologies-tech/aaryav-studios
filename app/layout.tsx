import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Analytics } from "@/components/Analytics";
import { SocialFloatingConnect } from "@/components/SocialFloatingConnect";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://studios.aaryavtech.online";

export const viewport: Viewport = {
  themeColor: "#FFDE59",
  colorScheme: "dark light",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Social Media Marketing Agency in Silvassa | Aaryav Studios",
    template: "%s | Aaryav Studios",
  },
  description:
    "Aaryav Studios is a premier creative & social media marketing agency based in Silvassa, serving businesses across Silvassa, Vapi, Daman & nearby areas. High-converting video production, reels editing & digital branding.",
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
    "social media marketing agency in silvassa",
    "digital marketing agency in silvassa",
    "video editing agency in silvassa",
    "social media management in silvassa",
    "content creation agency in silvassa",
    "creative agency in silvassa",
    "social media marketing in vapi",
    "video production agency in vapi",
    "digital marketing agency in daman",
    "instagram marketing agency silvassa",
    "reels editing agency silvassa",
    "color grading studio silvassa",
    "Aaryav Studios",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "Aaryav Studios",
    title: "Social Media Marketing Agency in Silvassa | Aaryav Studios",
    description:
      "Aaryav Studios is a creative and social media marketing agency based in Silvassa, serving businesses across Silvassa, Vapi, Daman and nearby areas.",
    images: [
      {
        url: "/hero.png",
        width: 1200,
        height: 630,
        alt: "Aaryav Studios - Social Media Marketing & Video Production Agency in Silvassa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Social Media Marketing Agency in Silvassa | Aaryav Studios",
    description:
      "High-retention social media marketing, viral vertical reels editing, commercial video production and digital branding in Silvassa, Vapi & Daman.",
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
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "googlebceb25f4d474895f",
  },
  category: "Social Media Marketing & Video Production",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "Aaryav Studios",
        description: "Social Media Marketing, Digital Marketing & Video Production Agency in Silvassa",
        publisher: {
          "@id": `${siteUrl}/#organization`,
        },
        inLanguage: "en-IN",
      },
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: "Aaryav Studios",
        url: siteUrl,
        logo: `${siteUrl}/logo.png`,
        image: `${siteUrl}/hero.png`,
        telephone: "+91-9328603748",
        email: "aaryavstudios@gmail.com",
        sameAs: [
          "https://www.instagram.com/aaryavstudios/",
          "https://wa.me/919328603748",
          "https://wa.me/917048734139",
        ],
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+91-9328603748",
          contactType: "customer service",
          areaServed: ["IN"],
          availableLanguage: ["English", "Hindi", "Gujarati"],
        },
      },
      {
        "@type": ["LocalBusiness", "ProfessionalService"],
        "@id": `${siteUrl}/#localbusiness`,
        name: "Aaryav Studios",
        url: siteUrl,
        logo: `${siteUrl}/logo.png`,
        image: `${siteUrl}/hero.png`,
        telephone: "+91-9328603748",
        email: "aaryavstudios@gmail.com",
        hasMap: "https://share.google/XjYDdslcZE47oTgbS",
        sameAs: [
          "https://www.instagram.com/aaryavstudios/",
          "https://share.google/XjYDdslcZE47oTgbS",
        ],
        priceRange: "$$",
        currenciesAccepted: "INR",
        paymentAccepted: "Cash, Credit Card, UPI, Bank Transfer",
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
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            opens: "09:30",
            closes: "19:00",
          },
        ],
        areaServed: [
          { "@type": "City", name: "Silvassa" },
          { "@type": "City", name: "Vapi" },
          { "@type": "City", name: "Daman" },
          { "@type": "AdministrativeArea", name: "Dadra and Nagar Haveli" },
          { "@type": "AdministrativeArea", name: "Daman and Diu" },
          { "@type": "Country", name: "India" },
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Marketing and Creative Services",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Social Media Marketing",
                description: "Strategy, management, and campaign execution for Instagram, Facebook, and LinkedIn.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Reels & Shorts Video Editing",
                description: "High-retention vertical editing with sound design and motion kinetic graphics.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Commercial & Corporate Video Production",
                description: "End-to-end commercial filming, documentary production, and brand campaigns.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Color Grading & Post-Production",
                description: "Cinematic color science and visual finishing for brand and creative films.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Brand Development & Content Creation",
                description: "Visual identity, commercial photography, and brand storytelling.",
              },
            },
          ],
        },
      },
    ],
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
        <Analytics />
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <SocialFloatingConnect />
      </body>
    </html>
  );
}
