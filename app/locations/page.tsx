import type { Metadata } from "next";
import Link from "next/link";
import { locationsData } from "@/data/locations";
import { Button } from "@/components/Button";
import { MapPin, ArrowRight, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Areas We Serve — Silvassa, Vapi & Daman | Aaryav Studios",
  description:
    "Explore the geographic regions served by Aaryav Studios. Dedicated video production, reels editing, and social media marketing across Silvassa, Vapi, Daman & Dadra & Nagar Haveli.",
  openGraph: {
    title: "Locations Served | Aaryav Studios",
    description: "Video production & social media marketing agency serving Silvassa, Vapi, Daman and nearby industrial corridors.",
    url: "https://studios.aaryavtech.online/locations",
  },
  alternates: {
    canonical: "/locations",
  },
};

export default function LocationsIndexPage() {
  return (
    <div className="pt-28 sm:pt-36 pb-16 sm:pb-24 bg-white min-h-screen overflow-x-hidden">
      {/* Header */}
      <section className="container mx-auto px-4 mb-10 sm:mb-16">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-black text-[#FFDE59] px-3 py-1 font-black uppercase text-[10px] sm:text-xs tracking-wider border border-black mb-3 sm:mb-4">
            <MapPin className="w-3.5 h-3.5" />
            <span>REGIONAL SERVICE COVERAGE</span>
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-7xl brutalist-heading mb-4 sm:mb-6 uppercase text-black leading-none">
            Areas We <span className="bg-[#FFDE59] px-2 sm:px-4 shadow-[3px_3px_0px_black] sm:shadow-brutalist border-2 sm:border-4 border-black">Serve</span>
          </h1>
          <p className="text-sm sm:text-base md:text-xl font-bold uppercase text-black/80 max-w-2xl leading-relaxed">
            Headquartered in Silvassa, Aaryav Studios provides rapid on-site video production and social media marketing throughout Dadra & Nagar Haveli, South Gujarat, and Daman.
          </p>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="container mx-auto px-4 mb-14 sm:mb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
          {locationsData.map((loc) => (
            <div
              key={loc.slug}
              className="bg-white border-3 sm:border-4 border-black shadow-[4px_4px_0px_black] sm:shadow-brutalist p-5 sm:p-7 flex flex-col justify-between hover:-translate-y-1 transition-transform"
            >
              <div>
                <span className="text-[10px] sm:text-xs font-black bg-black text-[#FFDE59] px-2 py-0.5 uppercase tracking-widest inline-block mb-3">
                  LOCATION / {loc.cityName.toUpperCase()}
                </span>
                <h2 className="text-2xl sm:text-3xl font-black uppercase mb-2 text-black">
                  {loc.cityName}
                </h2>
                <p className="text-[10px] sm:text-xs font-black bg-[#FFDE59] text-black px-2 py-0.5 uppercase mb-3 inline-block border border-black">
                  {loc.physicalOfficeNote.split(":")[0]}
                </p>
                <p className="text-xs sm:text-sm font-bold text-black/75 uppercase leading-relaxed mb-6">
                  {loc.localContext.slice(0, 160)}...
                </p>
              </div>

              <div className="pt-3 border-t-2 sm:border-t-4 border-black">
                <Link
                  href={`/locations/${loc.slug}`}
                  className="flex items-center justify-between font-black uppercase text-xs sm:text-sm tracking-wider bg-[#FFDE59] hover:bg-black hover:text-[#FFDE59] text-black px-3.5 py-2.5 border-2 border-black transition-colors"
                >
                  <span>Explore {loc.cityName}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Studio Location Card */}
      <section className="container mx-auto px-4">
        <div className="bg-black text-white border-3 sm:border-4 border-black shadow-[4px_4px_0px_#FFDE59] sm:shadow-brutalist p-6 sm:p-10 max-w-3xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-6">
            <div>
              <span className="text-[10px] sm:text-xs font-black bg-[#FFDE59] text-black px-2.5 py-1 uppercase tracking-widest inline-block mb-2">
                CENTRAL PRODUCTION HEADQUARTERS
              </span>
              <h3 className="text-xl sm:text-2xl font-black uppercase text-white mb-2">
                AARYAV STUDIOS — SILVASSA
              </h3>
              <p className="text-xs sm:text-sm font-bold text-white/80 uppercase max-w-md leading-relaxed">
                Kilvani Naka, Office no 601, 6th Floor, Premaldeep Square, Opp. Pravin Tailor, Silvassa, Dadra & Nagar Haveli 396230.
              </p>
            </div>
            <a href="https://wa.me/919328603748" target="_blank" rel="noreferrer" className="w-full sm:w-auto">
              <Button className="w-full sm:w-auto bg-[#FFDE59] text-black hover:bg-white text-xs sm:text-sm font-black px-5 py-3">
                <Phone className="w-3.5 h-3.5 mr-2 inline" />
                WhatsApp Direct
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
