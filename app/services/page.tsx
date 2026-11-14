import type { Metadata } from "next";
import Link from "next/link";
import { servicesData } from "@/data/services";
import { Button } from "@/components/Button";
import { ArrowRight, CheckCircle2, Phone, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Creative & Digital Marketing Services in Silvassa, Vapi & Daman",
  description:
    "Explore our complete suite of creative services: Social Media Marketing, High-Retention Reels Editing, Commercial Video Production, Color Grading & Brand Development by Aaryav Studios.",
  openGraph: {
    title: "Services | Aaryav Studios - Video Production & Social Media Agency",
    description:
      "Explore creative services by Aaryav Studios: Social Media Marketing, Reels Video Editing, Video Production, and Brand Design in Silvassa, Vapi & Daman.",
    url: "https://studios.aaryavtech.online/services",
  },
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesIndexPage() {
  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      {/* Header */}
      <section className="container mx-auto px-4 mb-16">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-black text-[#FFDE59] px-3 py-1 font-black uppercase text-xs tracking-wider border-2 border-black mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>FULL-SERVICE CREATIVE & DIGITAL AGENCY</span>
          </div>
          <h1 className="text-5xl md:text-8xl brutalist-heading mb-6 uppercase text-black leading-none">
            OUR <span className="bg-[#FFDE59] px-4 shadow-brutalist">SERVICES</span>
          </h1>
          <p className="text-xl md:text-2xl font-bold uppercase text-black/80 max-w-3xl leading-relaxed">
            High-converting digital marketing, algorithm-driven video editing, and cinematic production engineered to elevate businesses in Silvassa, Vapi, Daman, and beyond.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="container mx-auto px-4 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((svc, idx) => (
            <div
              key={svc.slug}
              className="bg-white border-4 border-black shadow-brutalist p-8 flex flex-col justify-between hover:translate-x-1 hover:-translate-y-1 transition-transform"
            >
              <div>
                <span className="text-xs font-black bg-black text-[#FFDE59] px-2.5 py-1 uppercase tracking-widest inline-block mb-4">
                  0{idx + 1} / SERVICE
                </span>
                <h2 className="text-2xl md:text-3xl font-black uppercase mb-3 text-black">
                  {svc.shortTitle}
                </h2>
                <p className="text-sm font-bold text-black/70 uppercase leading-relaxed mb-6">
                  {svc.tagline}
                </p>
                <div className="space-y-2 mb-8 border-t-2 border-black/10 pt-4">
                  {svc.deliverables.slice(0, 3).map((item, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs font-bold text-black uppercase">
                      <CheckCircle2 className="w-4 h-4 text-black shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t-4 border-black">
                <Link
                  href={`/services/${svc.slug}`}
                  className="flex items-center justify-between font-black uppercase text-sm tracking-wider bg-[#FFDE59] hover:bg-black hover:text-[#FFDE59] text-black px-4 py-3 border-2 border-black transition-colors"
                >
                  <span>EXPLORE SERVICE</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Box */}
      <section className="container mx-auto px-4">
        <div className="bg-[#FFDE59] border-4 border-black shadow-brutalist p-8 md:p-14 text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl brutalist-heading uppercase text-black mb-6">
            NEED A CUSTOM CREATIVE STRATEGY?
          </h2>
          <p className="text-lg md:text-xl font-bold uppercase text-black max-w-2xl mx-auto mb-8">
            Let's discuss how our video production and social media marketing can generate tangible customer inquiries for your business.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://wa.me/919328603748" target="_blank" rel="noreferrer">
              <Button className="bg-black text-[#FFDE59] hover:bg-white hover:text-black text-lg px-8 py-5">
                <Phone className="w-5 h-5 mr-2 inline" />
                WHATSAPP CONSULTATION
              </Button>
            </a>
            <Link href="/videos">
              <Button className="bg-white text-black hover:bg-black hover:text-[#FFDE59] text-lg px-8 py-5 border-4 border-black shadow-brutalist">
                VIEW OUR WORK
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

