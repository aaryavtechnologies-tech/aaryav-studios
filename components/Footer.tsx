import Link from "next/link";
import { MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 sm:py-16 bg-black text-white border-t-4 border-[#FFDE59] overflow-x-hidden">
      <div className="container mx-auto px-4">
        {/* Main Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 items-start mb-10 sm:mb-12">
          {/* Brand & Studio Mission */}
          <div className="lg:col-span-4 flex flex-col gap-3 sm:gap-4">
            <div className="flex items-center gap-2.5">
              <img
                src="/logo.png"
                alt="Aaryav Studios Logo"
                className="w-10 h-10 sm:w-12 sm:h-12 object-contain border-2 border-[#FFDE59] shadow-[2px_2px_0px_#FFDE59]"
              />
              <div className="text-2xl sm:text-3xl font-black uppercase tracking-tighter">
                AARYAV<span className="text-[#FFDE59]"> STUDIOS</span>
              </div>
            </div>
            <p className="text-xs sm:text-sm font-bold uppercase text-white/75 max-w-sm leading-relaxed">
              Creative content and social media marketing agency based in Silvassa. Producing high-retention vertical reels, commercials, and digital branding across Silvassa, Vapi & Daman.
            </p>
            <div className="flex flex-wrap gap-3 font-black uppercase text-xs tracking-widest pt-1">
              <Link href="/" className="hover:text-[#FFDE59] transition-colors">HOME</Link>
              <Link href="/services" className="hover:text-[#FFDE59] transition-colors">SERVICES</Link>
              <Link href="/videos" className="hover:text-[#FFDE59] transition-colors">WORK</Link>
              <Link href="/shorts" className="hover:text-[#FFDE59] transition-colors">SHORTS</Link>
              <Link href="/blog" className="hover:text-[#FFDE59] transition-colors">INSIGHTS</Link>
            </div>

            {/* Official Social & Discovery Links */}
            <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-white/20">
              <a
                href="https://www.instagram.com/aaryavstudios/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-zinc-900 hover:bg-[#FFDE59] text-white hover:text-black font-black text-[11px] uppercase tracking-wider px-2.5 py-1.5 border border-white/50 flex items-center gap-1.5 transition-colors"
                aria-label="Aaryav Studios Instagram Profile"
              >
                <span>Instagram @aaryavstudios</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
              <a
                href="https://share.google/XjYDdslcZE47oTgbS"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-zinc-900 hover:bg-white text-white hover:text-black font-black text-[11px] uppercase tracking-wider px-2.5 py-1.5 border border-white/50 flex items-center gap-1.5 transition-colors"
                aria-label="Aaryav Studios Google Business Profile"
              >
                <span>Google Profile</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Services Links */}
          <div className="lg:col-span-3 flex flex-col gap-2.5 sm:gap-3">
            <span className="text-[11px] sm:text-xs font-black uppercase tracking-widest text-[#FFDE59] border-b-2 border-[#FFDE59] pb-1 inline-block w-fit">
              SERVICES
            </span>
            <div className="flex flex-col gap-1.5 text-xs font-bold uppercase text-white/80">
              <Link href="/services/social-media-marketing" className="hover:text-[#FFDE59] transition-colors flex items-center justify-between py-0.5">
                <span>Social Media Marketing</span>
                <ArrowUpRight className="w-3 h-3" />
              </Link>
              <Link href="/services/reels-editing" className="hover:text-[#FFDE59] transition-colors flex items-center justify-between py-0.5">
                <span>Reels & Shorts Editing</span>
                <ArrowUpRight className="w-3 h-3" />
              </Link>
              <Link href="/services/video-production" className="hover:text-[#FFDE59] transition-colors flex items-center justify-between py-0.5">
                <span>Commercial Video Production</span>
                <ArrowUpRight className="w-3 h-3" />
              </Link>
              <Link href="/services/video-editing" className="hover:text-[#FFDE59] transition-colors flex items-center justify-between py-0.5">
                <span>Post-Production Video Editing</span>
                <ArrowUpRight className="w-3 h-3" />
              </Link>
              <Link href="/services/color-grading" className="hover:text-[#FFDE59] transition-colors flex items-center justify-between py-0.5">
                <span>Cinematic Color Grading</span>
                <ArrowUpRight className="w-3 h-3" />
              </Link>
              <Link href="/services/branding-content" className="hover:text-[#FFDE59] transition-colors flex items-center justify-between py-0.5">
                <span>Brand Identity & Design</span>
                <ArrowUpRight className="w-3 h-3" />
              </Link>
            </div>
          </div>

          {/* Target Locations & Areas */}
          <div className="lg:col-span-2 flex flex-col gap-2.5 sm:gap-3">
            <span className="text-[11px] sm:text-xs font-black uppercase tracking-widest text-[#FFDE59] border-b-2 border-[#FFDE59] pb-1 inline-block w-fit">
              AREAS SERVED
            </span>
            <div className="flex flex-col gap-1.5 text-xs font-bold uppercase text-white/80">
              <Link href="/locations/silvassa" className="hover:text-[#FFDE59] transition-colors py-0.5">
                Silvassa (Studio HQ)
              </Link>
              <Link href="/locations/vapi" className="hover:text-[#FFDE59] transition-colors py-0.5">
                Vapi & Vapi GIDC
              </Link>
              <Link href="/locations/daman" className="hover:text-[#FFDE59] transition-colors py-0.5">
                Daman (Tourism & Hospitality)
              </Link>
              <Link href="/locations" className="text-[#FFDE59] hover:underline font-black mt-1 inline-block">
                All Regions →
              </Link>
            </div>
          </div>

          {/* Studio Contact */}
          <div className="lg:col-span-3 flex flex-col gap-2.5 sm:gap-3">
            <span className="text-[11px] sm:text-xs font-black uppercase tracking-widest text-[#FFDE59] border-b-2 border-[#FFDE59] pb-1 inline-block w-fit">
              STUDIO & CONTACT
            </span>
            <div className="flex items-start gap-2 text-xs font-bold text-white/80 leading-relaxed mb-1">
              <MapPin className="w-4 h-4 text-[#FFDE59] shrink-0 mt-0.5" />
              <span>
                Kilvani Naka, Office no 601, 6th Floor, Premaldeep Square, Silvassa, Dadra & Nagar Haveli 396230
              </span>
            </div>
            <div className="flex flex-col gap-1.5 text-xs">
              <a
                href="https://wa.me/919328603748"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 font-black text-white hover:text-[#FFDE59] transition-colors py-0.5"
              >
                <Phone className="w-3.5 h-3.5 text-[#FFDE59]" />
                <span>+91 93286 03748 (WhatsApp)</span>
              </a>
              <a
                href="tel:+917048734139"
                className="flex items-center gap-1.5 font-black text-white/80 hover:text-[#FFDE59] transition-colors py-0.5"
              >
                <Phone className="w-3.5 h-3.5 text-[#FFDE59]" />
                <span>+91 70487 34139</span>
              </a>
              <a
                href="mailto:aaryavstudios@gmail.com"
                className="flex items-center gap-1.5 text-[#FFDE59] font-black hover:underline transition-colors mt-0.5"
              >
                <Mail className="w-3.5 h-3.5 text-[#FFDE59]" />
                <span>aaryavstudios@gmail.com</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t-2 border-white/20 flex flex-col sm:flex-row justify-between items-center gap-3 text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-white/50 text-center sm:text-left">
          <span>© 2026 AARYAV STUDIOS / SILVASSA, DNH & DD / ALL RIGHTS RESERVED</span>
          <span>NEO-BRUTALIST CREATIVE AGENCY</span>
        </div>
      </div>
    </footer>
  );
};
