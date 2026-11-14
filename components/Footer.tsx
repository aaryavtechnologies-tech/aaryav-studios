import Link from "next/link";
import { MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-16 bg-black text-white border-t-4 border-[#FFDE59]">
      <div className="container mx-auto px-4">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 items-start mb-12">
          {/* Brand & Studio Mission */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <img
                src="/logo.png"
                alt="Aaryav Studios Logo"
                className="w-12 h-12 object-contain border-2 border-[#FFDE59] shadow-[3px_3px_0px_#FFDE59]"
              />
              <div className="text-3xl font-black uppercase tracking-tighter">
                AARYAV<span className="text-[#FFDE59]"> STUDIOS</span>
              </div>
            </div>
            <p className="text-sm font-bold uppercase text-white/75 max-w-sm leading-relaxed">
              Silvassa's creative & social media marketing agency. Producing high-retention vertical reels, commercials, and digital branding across Silvassa, Vapi, Daman, and South Gujarat.
            </p>
            <div className="flex flex-wrap gap-4 font-black uppercase text-xs tracking-widest pt-2">
              <Link href="/" className="hover:text-[#FFDE59] transition-colors">HOME</Link>
              <Link href="/services" className="hover:text-[#FFDE59] transition-colors">SERVICES</Link>
              <Link href="/videos" className="hover:text-[#FFDE59] transition-colors">WORK</Link>
              <Link href="/shorts" className="hover:text-[#FFDE59] transition-colors">SHORTS</Link>
              <Link href="/blog" className="hover:text-[#FFDE59] transition-colors">INSIGHTS</Link>
            </div>
          </div>

          {/* Services Links */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <span className="text-xs font-black uppercase tracking-widest text-[#FFDE59] border-b-2 border-[#FFDE59] pb-1 inline-block w-fit">
              CREATIVE SERVICES
            </span>
            <div className="flex flex-col gap-2 text-xs font-bold uppercase text-white/80">
              <Link href="/services/social-media-marketing" className="hover:text-[#FFDE59] transition-colors flex items-center justify-between">
                <span>Social Media Marketing</span>
                <ArrowUpRight className="w-3 h-3" />
              </Link>
              <Link href="/services/reels-editing" className="hover:text-[#FFDE59] transition-colors flex items-center justify-between">
                <span>Reels & Shorts Editing</span>
                <ArrowUpRight className="w-3 h-3" />
              </Link>
              <Link href="/services/video-production" className="hover:text-[#FFDE59] transition-colors flex items-center justify-between">
                <span>Commercial Video Production</span>
                <ArrowUpRight className="w-3 h-3" />
              </Link>
              <Link href="/services/video-editing" className="hover:text-[#FFDE59] transition-colors flex items-center justify-between">
                <span>Post-Production Video Editing</span>
                <ArrowUpRight className="w-3 h-3" />
              </Link>
              <Link href="/services/color-grading" className="hover:text-[#FFDE59] transition-colors flex items-center justify-between">
                <span>Cinematic Color Grading</span>
                <ArrowUpRight className="w-3 h-3" />
              </Link>
              <Link href="/services/branding-content" className="hover:text-[#FFDE59] transition-colors flex items-center justify-between">
                <span>Brand Identity & Design</span>
                <ArrowUpRight className="w-3 h-3" />
              </Link>
            </div>
          </div>

          {/* Target Locations & Areas */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <span className="text-xs font-black uppercase tracking-widest text-[#FFDE59] border-b-2 border-[#FFDE59] pb-1 inline-block w-fit">
              AREAS WE SERVE
            </span>
            <div className="flex flex-col gap-2 text-xs font-bold uppercase text-white/80">
              <Link href="/locations/silvassa" className="hover:text-[#FFDE59] transition-colors">
                Silvassa (HQ Studio)
              </Link>
              <Link href="/locations/vapi" className="hover:text-[#FFDE59] transition-colors">
                Vapi & Vapi GIDC
              </Link>
              <Link href="/locations/daman" className="hover:text-[#FFDE59] transition-colors">
                Daman (Tourism & Hospitality)
              </Link>
              <Link href="/locations" className="text-[#FFDE59] hover:underline font-black mt-1">
                View All Regions →
              </Link>
            </div>
          </div>

          {/* Studio Contact */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <span className="text-xs font-black uppercase tracking-widest text-[#FFDE59] border-b-2 border-[#FFDE59] pb-1 inline-block w-fit">
              STUDIO & CONTACT
            </span>
            <div className="flex items-start gap-2 text-xs font-bold text-white/80 leading-relaxed mb-2">
              <MapPin className="w-4 h-4 text-[#FFDE59] shrink-0 mt-0.5" />
              <span>
                Kilvani Naka, Office no 601, 6th Floor, Premaldeep Square, Silvassa, Dadra & Nagar Haveli 396230
              </span>
            </div>
            <div className="flex flex-col gap-2 text-xs">
              <a
                href="https://wa.me/919328603748"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 font-black text-white hover:text-[#FFDE59] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#FFDE59]" />
                <span>+91 93286 03748 (WhatsApp)</span>
              </a>
              <a
                href="https://wa.me/917048734139"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 font-black text-white/80 hover:text-[#FFDE59] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#FFDE59]" />
                <span>+91 70487 34139</span>
              </a>
              <a
                href="mailto:aaryavstudios@gmail.com"
                className="flex items-center gap-2 text-[#FFDE59] font-black hover:underline transition-colors mt-1"
              >
                <Mail className="w-3.5 h-3.5 text-[#FFDE59]" />
                <span>aaryavstudios@gmail.com</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t-2 border-white/20 flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] font-bold uppercase tracking-widest text-white/50">
          <span>© 2026 AARYAV STUDIOS / SILVASSA, DNH & DD, INDIA / ALL RIGHTS RESERVED</span>
          <span>NEO-BRUTALIST CREATIVE AGENCY</span>
        </div>
      </div>
    </footer>
  );
};
