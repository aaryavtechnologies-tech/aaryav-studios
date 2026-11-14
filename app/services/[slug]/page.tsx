import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { servicesData, ServiceDetail } from "@/data/services";
import { Button } from "@/components/Button";
import { CheckCircle2, Phone, ArrowLeft, ArrowRight, HelpCircle, Target, Layers } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return servicesData.map((svc) => ({
    slug: svc.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const svc = servicesData.find((s) => s.slug === slug);
  if (!svc) return {};

  return {
    title: svc.metaTitle,
    description: svc.metaDescription,
    keywords: svc.keywords,
    alternates: {
      canonical: `/services/${svc.slug}`,
    },
    openGraph: {
      title: `${svc.shortTitle} | Aaryav Studios`,
      description: svc.metaDescription,
      url: `https://studios.aaryavtech.online/services/${svc.slug}`,
      type: "website",
      images: [
        {
          url: "/hero.png",
          width: 1200,
          height: 630,
          alt: `${svc.title} by Aaryav Studios`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: svc.metaTitle,
      description: svc.metaDescription,
    },
  };
}

export default async function SingleServicePage({ params }: Props) {
  const { slug } = await params;
  const svc = servicesData.find((s) => s.slug === slug);

  if (!svc) {
    notFound();
  }

  // Schema.org Service JSON-LD
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: svc.title,
    provider: {
      "@type": "LocalBusiness",
      name: "Aaryav Studios",
      url: "https://studios.aaryavtech.online",
      telephone: "+91-9328603748",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Kilvani Naka, Office no 601, 6th Floor, Premaldeep Square",
        addressLocality: "Silvassa",
        addressRegion: "Dadra and Nagar Haveli and Daman and Diu",
        postalCode: "396230",
        addressCountry: "IN",
      },
    },
    areaServed: [
      { "@type": "City", name: "Silvassa" },
      { "@type": "City", name: "Vapi" },
      { "@type": "City", name: "Daman" },
      { "@type": "AdministrativeArea", name: "Dadra and Nagar Haveli" },
    ],
    description: svc.overview,
  };

  return (
    <div className="pt-28 sm:pt-36 pb-16 sm:pb-24 bg-white min-h-screen overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />

      {/* Breadcrumb Navigation */}
      <div className="container mx-auto px-4 mb-6 sm:mb-8">
        <div className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs font-black uppercase tracking-wider text-black/60 overflow-x-auto no-scrollbar">
          <Link href="/" className="hover:text-black shrink-0">HOME</Link>
          <span>/</span>
          <Link href="/services" className="hover:text-black shrink-0">SERVICES</Link>
          <span>/</span>
          <span className="text-black bg-[#FFDE59] px-2 py-0.5 border border-black shrink-0 truncate max-w-[180px] sm:max-w-none">{svc.shortTitle}</span>
        </div>
      </div>

      {/* Hero Header */}
      <section className="container mx-auto px-4 mb-10 sm:mb-16">
        <div className="max-w-4xl">
          <span className="text-[10px] sm:text-xs font-black bg-black text-[#FFDE59] px-2.5 py-1 uppercase tracking-widest inline-block mb-3 border border-black">
            EXPERT SERVICE
          </span>
          <h1 className="text-3xl sm:text-5xl md:text-6xl brutalist-heading uppercase text-black mb-4 sm:mb-6 leading-tight">
            {svc.title}
          </h1>
          <p className="text-sm sm:text-lg md:text-xl font-bold uppercase text-black/85 leading-relaxed bg-[#FFDE59] p-3 sm:p-5 border-3 sm:border-4 border-black shadow-[3px_3px_0px_black] sm:shadow-brutalist">
            {svc.tagline}
          </p>
        </div>
      </section>

      {/* Detailed Overview */}
      <section className="container mx-auto px-4 mb-12 sm:mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          <div className="lg:col-span-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl brutalist-heading uppercase text-black mb-4 sm:mb-6 flex items-center gap-2.5">
              <Layers className="w-6 h-6 sm:w-8 sm:h-8 text-black" />
              <span>SERVICE OVERVIEW</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg font-bold text-black/85 leading-relaxed mb-8">
              {svc.overview}
            </p>

            {/* Target Audience */}
            <div className="bg-black text-white p-5 sm:p-8 border-3 sm:border-4 border-black shadow-[4px_4px_0px_#FFDE59] mb-10">
              <h3 className="text-xl sm:text-2xl font-black uppercase text-[#FFDE59] mb-4 flex items-center gap-2">
                <Target className="w-5 h-5 text-[#FFDE59]" />
                <span>WHO THIS IS BUILT FOR</span>
              </h3>
              <ul className="space-y-3">
                {svc.targetAudience.map((aud, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm font-bold uppercase leading-relaxed text-white/90">
                    <CheckCircle2 className="w-4 h-4 text-[#FFDE59] shrink-0 mt-0.5" />
                    <span>{aud}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Deliverables */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl brutalist-heading uppercase text-black mb-4 sm:mb-6">
              WHAT YOU GET (DELIVERABLES)
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-10 sm:mb-12">
              {svc.deliverables.map((item, idx) => (
                <div key={idx} className="bg-white border-2 sm:border-4 border-black p-4 shadow-[3px_3px_0px_black] flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-black shrink-0 mt-0.5" />
                  <span className="font-black text-xs sm:text-sm uppercase text-black leading-snug">{item}</span>
                </div>
              ))}
            </div>

            {/* Process Steps */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl brutalist-heading uppercase text-black mb-4 sm:mb-6">
              OUR EXECUTION PROCESS
            </h2>
            <div className="space-y-3 sm:space-y-4 mb-10 sm:mb-12">
              {svc.processSteps.map((step, idx) => (
                <div key={idx} className="border-2 sm:border-4 border-black p-4 sm:p-6 bg-white shadow-[3px_3px_0px_black]">
                  <h3 className="text-base sm:text-xl font-black uppercase text-black mb-1.5">{step.title}</h3>
                  <p className="text-xs sm:text-sm font-bold text-black/75 uppercase leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>

            {/* FAQs */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl brutalist-heading uppercase text-black mb-4 sm:mb-6 flex items-center gap-2.5">
              <HelpCircle className="w-6 h-6 sm:w-8 sm:h-8 text-black" />
              <span>FREQUENTLY ASKED QUESTIONS</span>
            </h2>
            <div className="space-y-3 sm:space-y-4">
              {svc.faqs.map((faq, idx) => (
                <div key={idx} className="border-2 sm:border-4 border-black p-4 sm:p-6 bg-[#FFDE59]/20 shadow-[3px_3px_0px_black]">
                  <h3 className="text-sm sm:text-lg font-black uppercase text-black mb-1.5">Q: {faq.q}</h3>
                  <p className="text-xs sm:text-sm font-bold text-black/85 leading-relaxed">A: {faq.a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar CTA */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28 bg-[#FFDE59] border-3 sm:border-4 border-black shadow-[4px_4px_0px_black] sm:shadow-brutalist p-6 sm:p-8 text-center">
              <span className="text-[10px] sm:text-xs font-black bg-black text-white px-2.5 py-1 uppercase tracking-widest inline-block mb-3">
                READY TO START?
              </span>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-black uppercase text-black mb-3">
                WORK WITH AARYAV STUDIOS
              </h3>
              <p className="text-xs sm:text-sm font-bold text-black/80 uppercase mb-5 leading-relaxed">
                Connect with our creative production team in Silvassa for a tailored quote and strategy session.
              </p>
              <div className="space-y-3">
                <a href="https://wa.me/919328603748" target="_blank" rel="noreferrer" className="block">
                  <Button className="w-full bg-black text-[#FFDE59] hover:bg-white hover:text-black py-3 sm:py-3.5 text-xs sm:text-sm">
                    <Phone className="w-3.5 h-3.5 mr-2 inline" />
                    WhatsApp Direct
                  </Button>
                </a>
                <Link href="/videos" className="block">
                  <Button className="w-full bg-white text-black hover:bg-black hover:text-[#FFDE59] border-2 border-black py-3 sm:py-3.5 text-xs sm:text-sm">
                    View Portfolio
                  </Button>
                </Link>
              </div>

              <div className="mt-6 pt-5 border-t-2 border-black/20 text-left text-[11px] font-bold uppercase text-black/80 space-y-1.5">
                <p>📍 Studio: Kilvani Naka, Silvassa</p>
                <p>⚡ Serving: Silvassa, Vapi, Daman & Nearby</p>
                <p>✉️ aaryavstudios@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Footer */}
      <section className="container mx-auto px-4 pt-8 sm:pt-12 border-t-3 sm:border-t-4 border-black">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
          <Link href="/services" className="font-black uppercase text-xs sm:text-sm flex items-center gap-1.5 hover:underline">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>ALL SERVICES</span>
          </Link>
          <div className="flex gap-3 text-xs sm:text-sm font-black uppercase">
            <Link href="/shorts" className="hover:underline">
              BROWSE SHORTS
            </Link>
            <span>•</span>
            <Link href="/videos" className="hover:underline">
              BROWSE WORK
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
