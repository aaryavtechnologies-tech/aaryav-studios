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
    <div className="pt-28 sm:pt-36 pb-16 sm:pb-24 bg-white min-h-screen overflow-x-hidden">
      {/* Header */}
      <section className="container mx-auto px-4 mb-10 sm:mb-16">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-black text-[#FFDE59] px-3 py-1 font-black uppercase text-[10px] sm:text-xs tracking-wider border border-black mb-3 sm:mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>FULL-SERVICE CREATIVE & DIGITAL AGENCY</span>
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-7xl brutalist-heading mb-4 sm:mb-6 uppercase text-black leading-none">
            Our <span className="bg-[#FFDE59] px-2 sm:px-4 shadow-[3px_3px_0px_black] sm:shadow-brutalist border-2 sm:border-4 border-black">Services</span>
          </h1>
          <p className="text-sm sm:text-base md:text-xl font-bold uppercase text-black/80 max-w-2xl leading-relaxed">
            Content creation, video production, and social media marketing engineered to help businesses grow in Silvassa, Vapi, Daman, and beyond.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="container mx-auto px-4 mb-14 sm:mb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
          {servicesData.map((svc, idx) => (
            <div
              key={svc.slug}
              className="bg-white border-3 sm:border-4 border-black shadow-[4px_4px_0px_black] sm:shadow-brutalist p-5 sm:p-7 flex flex-col justify-between hover:-translate-y-1 transition-transform"
            >
              <div>
                <span className="text-[10px] sm:text-xs font-black bg-black text-[#FFDE59] px-2 py-0.5 uppercase tracking-widest inline-block mb-3">
                  0{idx + 1} / SERVICE
                </span>
                <h2 className="text-xl sm:text-2xl font-black uppercase mb-2 text-black">
                  {svc.shortTitle}
                </h2>
                <p className="text-xs sm:text-sm font-bold text-black/70 uppercase leading-relaxed mb-5">
                  {svc.tagline}
                </p>
                <div className="space-y-2 mb-6 border-t-2 border-black/10 pt-3">
                  {svc.deliverables.slice(0, 3).map((item, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs font-bold text-black uppercase">
                      <CheckCircle2 className="w-3.5 h-3.5 text-black shrink-0 mt-0.5" />
                      <span className="leading-tight">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t-2 sm:border-t-4 border-black">
                <Link
                  href={`/services/${svc.slug}`}
                  className="flex items-center justify-between font-black uppercase text-xs sm:text-sm tracking-wider bg-[#FFDE59] hover:bg-black hover:text-[#FFDE59] text-black px-3.5 py-2.5 border-2 border-black transition-colors"
                >
                  <span>Explore Service</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Box */}
      <section className="container mx-auto px-4">
        <div className="bg-[#FFDE59] border-3 sm:border-4 border-black shadow-[4px_4px_0px_black] sm:shadow-brutalist p-6 sm:p-12 text-center max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-4xl md:text-5xl brutalist-heading uppercase text-black mb-4">
            Need a Custom Creative Strategy?
          </h2>
          <p className="text-xs sm:text-sm md:text-base font-bold uppercase text-black/85 max-w-xl mx-auto mb-6">
            Let's discuss how our video production and social media marketing can generate tangible customer inquiries for your business.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <a href="https://wa.me/919328603748" target="_blank" rel="noreferrer" className="w-full sm:w-auto">
              <Button className="w-full bg-black text-[#FFDE59] hover:bg-white hover:text-black text-sm sm:text-base px-6 py-3.5">
                <Phone className="w-4 h-4 mr-2 inline" />
                WhatsApp Consultation
              </Button>
            </a>
            <Link href="/videos" className="w-full sm:w-auto">
              <Button className="w-full bg-white text-black hover:bg-black hover:text-[#FFDE59] text-sm sm:text-base px-6 py-3.5 border-2 sm:border-4 border-black">
                View Our Work
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
