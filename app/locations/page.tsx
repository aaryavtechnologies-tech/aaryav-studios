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
    <div className="pt-32 pb-24 bg-white min-h-screen">
      {/* Header */}
      <section className="container mx-auto px-4 mb-16">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-black text-[#FFDE59] px-3 py-1 font-black uppercase text-xs tracking-wider border-2 border-black mb-4">
            <MapPin className="w-3.5 h-3.5" />
            <span>REGIONAL SERVICE COVERAGE</span>
          </div>
          <h1 className="text-5xl md:text-8xl brutalist-heading mb-6 uppercase text-black leading-none">
            AREAS WE <span className="bg-[#FFDE59] px-4 shadow-brutalist">SERVE</span>
          </h1>
          <p className="text-xl md:text-2xl font-bold uppercase text-black/80 max-w-3xl leading-relaxed">
            Headquartered at Kilvani Naka in Silvassa, Aaryav Studios provides rapid on-site video production and social media marketing throughout Dadra & Nagar Haveli, South Gujarat, and Daman.
          </p>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="container mx-auto px-4 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {locationsData.map((loc) => (
            <div
              key={loc.slug}
              className="bg-white border-4 border-black shadow-brutalist p-8 flex flex-col justify-between hover:translate-x-1 hover:-translate-y-1 transition-transform"
            >
              <div>
                <span className="text-xs font-black bg-black text-[#FFDE59] px-2.5 py-1 uppercase tracking-widest inline-block mb-4">
                  LOCATION / {loc.cityName.toUpperCase()}
                </span>
                <h2 className="text-3xl font-black uppercase mb-3 text-black">
                  {loc.cityName}
                </h2>
                <p className="text-xs font-black bg-[#FFDE59] text-black px-2 py-1 uppercase mb-4 inline-block border border-black">
                  {loc.physicalOfficeNote.split(":")[0]}
                </p>
                <p className="text-sm font-bold text-black/75 uppercase leading-relaxed mb-6">
                  {loc.localContext.slice(0, 180)}...
                </p>
              </div>

              <div className="pt-4 border-t-4 border-black">
                <Link
                  href={`/locations/${loc.slug}`}
                  className="flex items-center justify-between font-black uppercase text-sm tracking-wider bg-[#FFDE59] hover:bg-black hover:text-[#FFDE59] text-black px-4 py-3 border-2 border-black transition-colors"
                >
                  <span>VIEW {loc.cityName.toUpperCase()} SERVICES</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Studio Location Card */}
      <section className="container mx-auto px-4">
        <div className="bg-black text-white border-4 border-black shadow-brutalist p-8 md:p-12 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <span className="text-xs font-black bg-[#FFDE59] text-black px-3 py-1 uppercase tracking-widest inline-block mb-3">
                CENTRAL PRODUCTION HEADQUARTERS
              </span>
              <h3 className="text-3xl font-black uppercase text-white mb-2">
                AARYAV STUDIOS — SILVASSA
              </h3>
              <p className="text-sm font-bold text-white/80 uppercase max-w-xl leading-relaxed">
                Kilvani Naka, Office no 601, 6th Floor, Premaldeep Square, Opp. Pravin Tailor, Silvassa, Dadra and Nagar Haveli and Daman and Diu 396230.
              </p>
            </div>
            <a href="https://wa.me/919328603748" target="_blank" rel="noreferrer">
              <Button className="bg-[#FFDE59] text-black hover:bg-white text-base font-black px-6 py-4 shrink-0">
                <Phone className="w-4 h-4 mr-2 inline" />
                GET DIRECTIONS / CHAT
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

