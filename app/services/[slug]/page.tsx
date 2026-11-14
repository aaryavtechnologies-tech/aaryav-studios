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
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />

      {/* Breadcrumb Navigation */}
      <div className="container mx-auto px-4 mb-8">
        <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-black/60">
          <Link href="/" className="hover:text-black">HOME</Link>
          <span>/</span>
          <Link href="/services" className="hover:text-black">SERVICES</Link>
          <span>/</span>
          <span className="text-black bg-[#FFDE59] px-2 py-0.5 border border-black">{svc.shortTitle}</span>
        </div>
      </div>

      {/* Hero Header */}
      <section className="container mx-auto px-4 mb-16">
        <div className="max-w-4xl">
          <span className="text-xs font-black bg-black text-[#FFDE59] px-3 py-1 uppercase tracking-widest inline-block mb-4 border-2 border-black">
            EXPERT SERVICE
          </span>
          <h1 className="text-4xl md:text-7xl brutalist-heading uppercase text-black mb-6 leading-tight">
            {svc.title}
          </h1>
          <p className="text-xl md:text-2xl font-bold uppercase text-black/80 leading-relaxed bg-[#FFDE59] p-4 border-4 border-black shadow-brutalist">
            {svc.tagline}
          </p>
        </div>
      </section>

      {/* Detailed Overview */}
      <section className="container mx-auto px-4 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8">
            <h2 className="text-3xl md:text-4xl brutalist-heading uppercase text-black mb-6 flex items-center gap-3">
              <Layers className="w-8 h-8 text-black" />
              <span>SERVICE OVERVIEW</span>
            </h2>
            <p className="text-base md:text-lg font-bold text-black/90 leading-relaxed mb-8">
              {svc.overview}
            </p>

            {/* Target Audience */}
            <div className="bg-black text-white p-8 border-4 border-black shadow-brutalist mb-12">
              <h3 className="text-2xl font-black uppercase text-[#FFDE59] mb-4 flex items-center gap-2">
                <Target className="w-6 h-6 text-[#FFDE59]" />
                <span>WHO THIS IS BUILT FOR</span>
              </h3>
              <ul className="space-y-3">
                {svc.targetAudience.map((aud, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm font-bold uppercase leading-relaxed text-white/90">
                    <CheckCircle2 className="w-5 h-5 text-[#FFDE59] shrink-0 mt-0.5" />
                    <span>{aud}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Deliverables */}
            <h2 className="text-3xl md:text-4xl brutalist-heading uppercase text-black mb-6">
              WHAT YOU GET (DELIVERABLES)
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
              {svc.deliverables.map((item, idx) => (
                <div key={idx} className="bg-white border-4 border-black p-5 shadow-[4px_4px_0px_black] flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-black shrink-0 mt-0.5" />
                  <span className="font-black text-sm uppercase text-black leading-snug">{item}</span>
                </div>
              ))}
            </div>

            {/* Process Steps */}
            <h2 className="text-3xl md:text-4xl brutalist-heading uppercase text-black mb-6">
              OUR EXECUTION PROCESS
            </h2>
            <div className="space-y-4 mb-12">
              {svc.processSteps.map((step, idx) => (
                <div key={idx} className="border-4 border-black p-6 bg-white shadow-brutalist">
                  <h3 className="text-xl font-black uppercase text-black mb-2">{step.title}</h3>
                  <p className="text-sm font-bold text-black/75 uppercase leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>

            {/* FAQs */}
            <h2 className="text-3xl md:text-4xl brutalist-heading uppercase text-black mb-6 flex items-center gap-3">
              <HelpCircle className="w-8 h-8 text-black" />
              <span>FREQUENTLY ASKED QUESTIONS</span>
            </h2>
            <div className="space-y-4">
              {svc.faqs.map((faq, idx) => (
                <div key={idx} className="border-4 border-black p-6 bg-[#FFDE59]/20 shadow-[4px_4px_0px_black]">
                  <h3 className="text-lg font-black uppercase text-black mb-2">Q: {faq.q}</h3>
                  <p className="text-sm font-bold text-black/85 leading-relaxed">A: {faq.a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Sticky Sidebar CTA */}
          <div className="lg:col-span-4">
            <div className="sticky top-28 bg-[#FFDE59] border-4 border-black shadow-brutalist p-8 text-center">
              <span className="text-xs font-black bg-black text-white px-3 py-1 uppercase tracking-widest inline-block mb-4">
                READY TO START?
              </span>
              <h3 className="text-2xl md:text-3xl font-black uppercase text-black mb-4">
                WORK WITH AARYAV STUDIOS
              </h3>
              <p className="text-sm font-bold text-black/80 uppercase mb-6 leading-relaxed">
                Connect with our creative production team in Silvassa for a tailored quote and strategy session.
              </p>
              <div className="space-y-3">
                <a href="https://wa.me/919328603748" target="_blank" rel="noreferrer" className="block">
                  <Button className="w-full bg-black text-[#FFDE59] hover:bg-white hover:text-black py-4 text-base">
                    <Phone className="w-4 h-4 mr-2 inline" />
                    WHATSAPP DIRECT
                  </Button>
                </a>
                <Link href="/videos" className="block">
                  <Button className="w-full bg-white text-black hover:bg-black hover:text-[#FFDE59] border-2 border-black py-4 text-base shadow-[3px_3px_0px_black]">
                    VIEW PORTFOLIO
                  </Button>
                </Link>
              </div>

              <div className="mt-8 pt-6 border-t-2 border-black/20 text-left text-xs font-bold uppercase text-black/80 space-y-2">
                <p>📍 Studio: Kilvani Naka, Silvassa</p>
                <p>⚡ Serving: Silvassa, Vapi, Daman & Nearby</p>
                <p>✉️ aaryavstudios@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Footer for other services */}
      <section className="container mx-auto px-4 pt-12 border-t-4 border-black">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <Link href="/services" className="font-black uppercase text-sm flex items-center gap-2 hover:underline">
            <ArrowLeft className="w-4 h-4" />
            <span>ALL SERVICES</span>
          </Link>
          <div className="flex gap-4">
            <Link href="/shorts" className="font-black uppercase text-sm hover:underline">
              BROWSE SHORTS
            </Link>
            <span>•</span>
            <Link href="/videos" className="font-black uppercase text-sm hover:underline">
              BROWSE LONG FORM
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

