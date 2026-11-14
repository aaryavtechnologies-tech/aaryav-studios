import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { locationsData } from "@/data/locations";
import { Button } from "@/components/Button";
import { MapPin, Phone, CheckCircle2, ArrowRight, ArrowLeft, Building2, HelpCircle } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return locationsData.map((loc) => ({
    slug: loc.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const loc = locationsData.find((l) => l.slug === slug);
  if (!loc) return {};

  return {
    title: loc.metaTitle,
    description: loc.metaDescription,
    keywords: loc.keywords,
    alternates: {
      canonical: `/locations/${loc.slug}`,
    },
    openGraph: {
      title: `${loc.cityName} Video Production & Marketing | Aaryav Studios`,
      description: loc.metaDescription,
      url: `https://studios.aaryavtech.online/locations/${loc.slug}`,
      type: "website",
      images: [
        {
          url: "/hero.png",
          width: 1200,
          height: 630,
          alt: `Aaryav Studios serving ${loc.cityName}`,
        },
      ],
    },
  };
}

export default async function SingleLocationPage({ params }: Props) {
  const { slug } = await params;
  const loc = locationsData.find((l) => l.slug === slug);

  if (!loc) {
    notFound();
  }

  // Schema.org Place / LocalBusiness JSON-LD
  const locationJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `Aaryav Studios - ${loc.cityName}`,
    url: `https://studios.aaryavtech.online/locations/${loc.slug}`,
    telephone: "+91-9328603748",
    email: "aaryavstudios@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Kilvani Naka, Office no 601, 6th Floor, Premaldeep Square",
      addressLocality: "Silvassa",
      addressRegion: "Dadra and Nagar Haveli and Daman and Diu",
      postalCode: "396230",
      addressCountry: "IN",
    },
    areaServed: {
      "@type": "City",
      name: loc.cityName,
    },
    description: loc.localContext,
  };

  return (
    <div className="pt-28 sm:pt-36 pb-16 sm:pb-24 bg-white min-h-screen overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(locationJsonLd) }}
      />

      {/* Breadcrumb Navigation */}
      <div className="container mx-auto px-4 mb-6 sm:mb-8">
        <div className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs font-black uppercase tracking-wider text-black/60 overflow-x-auto no-scrollbar">
          <Link href="/" className="hover:text-black shrink-0">HOME</Link>
          <span>/</span>
          <Link href="/locations" className="hover:text-black shrink-0">LOCATIONS</Link>
          <span>/</span>
          <span className="text-black bg-[#FFDE59] px-2 py-0.5 border border-black shrink-0">{loc.cityName}</span>
        </div>
      </div>

      {/* Hero Header */}
      <section className="container mx-auto px-4 mb-10 sm:mb-16">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-black text-[#FFDE59] px-3 py-1 font-black uppercase text-[10px] sm:text-xs tracking-wider border border-black mb-3 sm:mb-4">
            <MapPin className="w-3.5 h-3.5" />
            <span>REGIONAL HUB — {loc.cityName.toUpperCase()}</span>
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl brutalist-heading uppercase text-black mb-4 sm:mb-6 leading-tight">
            {loc.headline}
          </h1>
          <div className="p-3 sm:p-4 bg-[#FFDE59] border-2 sm:border-4 border-black shadow-[3px_3px_0px_black] text-xs sm:text-sm font-black uppercase text-black leading-relaxed">
            ℹ️ {loc.physicalOfficeNote}
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="container mx-auto px-4 mb-12 sm:mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          <div className="lg:col-span-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl brutalist-heading uppercase text-black mb-4 sm:mb-6">
              WHY VISUAL MARKETING MATTERS IN {loc.cityName.toUpperCase()}
            </h2>
            <p className="text-sm sm:text-base md:text-lg font-bold text-black/85 leading-relaxed mb-8 sm:mb-10">
              {loc.localContext}
            </p>

            {/* Key Industries in this location */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl brutalist-heading uppercase text-black mb-4 sm:mb-6 flex items-center gap-2.5">
              <Building2 className="w-6 h-6 sm:w-8 sm:h-8 text-black" />
              <span>KEY INDUSTRIES IN {loc.cityName.toUpperCase()}</span>
            </h2>
            <div className="space-y-3 sm:space-y-4 mb-10 sm:mb-12">
              {loc.industriesServed.map((ind, i) => (
                <div key={i} className="border-2 sm:border-4 border-black p-4 sm:p-6 bg-white shadow-[3px_3px_0px_black]">
                  <h3 className="text-base sm:text-xl font-black uppercase text-black mb-1.5">{ind.name}</h3>
                  <p className="text-xs sm:text-sm font-bold text-black/75 uppercase leading-relaxed">{ind.desc}</p>
                </div>
              ))}
            </div>

            {/* Services provided */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl brutalist-heading uppercase text-black mb-4 sm:mb-6">
              SERVICES IN {loc.cityName.toUpperCase()}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-10 sm:mb-12">
              {loc.localServices.map((svc, i) => (
                <div key={i} className="bg-white border-2 sm:border-4 border-black p-3.5 sm:p-4 shadow-[3px_3px_0px_black] flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-black shrink-0 mt-0.5" />
                  <span className="font-black text-xs sm:text-sm uppercase text-black leading-snug">{svc}</span>
                </div>
              ))}
            </div>

            {/* FAQs */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl brutalist-heading uppercase text-black mb-4 sm:mb-6 flex items-center gap-2.5">
              <HelpCircle className="w-6 h-6 sm:w-8 sm:h-8 text-black" />
              <span>FREQUENTLY ASKED QUESTIONS</span>
            </h2>
            <div className="space-y-3 sm:space-y-4">
              {loc.faqs.map((faq, i) => (
                <div key={i} className="border-2 sm:border-4 border-black p-4 sm:p-6 bg-[#FFDE59]/20 shadow-[3px_3px_0px_black]">
                  <h3 className="text-sm sm:text-lg font-black uppercase text-black mb-1.5">Q: {faq.q}</h3>
                  <p className="text-xs sm:text-sm font-bold text-black/85 leading-relaxed">A: {faq.a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar CTA */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28 bg-black text-white border-3 sm:border-4 border-black shadow-[4px_4px_0px_#FFDE59] sm:shadow-brutalist p-6 sm:p-8 text-center">
              <span className="text-[10px] sm:text-xs font-black bg-[#FFDE59] text-black px-2.5 py-1 uppercase tracking-widest inline-block mb-3">
                LOCAL INQUIRY
              </span>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-black uppercase text-white mb-3">
                CONNECT IN {loc.cityName.toUpperCase()}
              </h3>
              <p className="text-xs sm:text-sm font-bold text-white/80 uppercase mb-5 leading-relaxed">
                Connect directly with our creative team to arrange an on-site shoot or discuss your marketing targets.
              </p>
              <div className="space-y-3">
                <a href="https://wa.me/919328603748" target="_blank" rel="noreferrer" className="block">
                  <Button className="w-full bg-[#FFDE59] text-black hover:bg-white hover:text-black py-3 sm:py-3.5 text-xs sm:text-sm font-black">
                    <Phone className="w-3.5 h-3.5 mr-2 inline" />
                    WhatsApp (+91 93286 03748)
                  </Button>
                </a>
                <Link href="/services" className="block">
                  <Button className="w-full bg-white text-black hover:bg-[#FFDE59] py-3 sm:py-3.5 text-xs sm:text-sm font-black border-2 border-white">
                    View All Services
                  </Button>
                </Link>
              </div>

              <div className="mt-6 pt-5 border-t border-white/20 text-left text-[11px] font-bold uppercase text-white/70 space-y-1.5">
                <p>📍 Studio: Kilvani Naka, Silvassa</p>
                <p>⚡ Serving: Silvassa, Vapi, Daman, Dadra & Nagar Haveli</p>
                <p>✉️ aaryavstudios@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other locations links */}
      <section className="container mx-auto px-4 pt-8 sm:pt-12 border-t-3 sm:border-t-4 border-black">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
          <Link href="/locations" className="font-black uppercase text-xs sm:text-sm flex items-center gap-1.5 hover:underline">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>ALL LOCATIONS</span>
          </Link>
          <div className="flex flex-wrap gap-3 text-xs sm:text-sm font-black uppercase">
            {locationsData.filter(l => l.slug !== loc.slug).map(other => (
              <Link key={other.slug} href={`/locations/${other.slug}`} className="hover:underline flex items-center gap-1">
                <span>{other.cityName}</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
