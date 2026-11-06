import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-16 bg-black text-white border-t-4 border-[#FFDE59]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start mb-12">
          {/* Brand & Logo */}
          <div className="md:col-span-5 flex flex-col gap-4">
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
            <p className="text-sm font-bold uppercase text-white/70 max-w-sm">
              Capturing moments & transforming raw footage into high-converting cinematic experiences.
            </p>
            <div className="flex flex-wrap gap-6 font-black uppercase text-sm tracking-widest pt-2">
              <Link href="/" className="hover:text-[#FFDE59] transition-colors">HOME</Link>
              <Link href="/videos" className="hover:text-[#FFDE59] transition-colors">VIDEO</Link>
              <Link href="/shorts" className="hover:text-[#FFDE59] transition-colors">SHORTS</Link>
              <Link href="/#team" className="hover:text-[#FFDE59] transition-colors">TEAM</Link>
            </div>
          </div>

          {/* Office Address */}
          <div className="md:col-span-4 flex flex-col gap-3">
            <span className="text-xs font-black uppercase tracking-widest text-[#FFDE59] border-b-2 border-[#FFDE59] pb-1 inline-block w-fit">
              STUDIO ADDRESS
            </span>
            <div className="flex items-start gap-2.5 text-sm font-bold text-white/80 leading-relaxed">
              <MapPin className="w-5 h-5 text-[#FFDE59] shrink-0 mt-0.5" />
              <span>
                Kilvani Naka, Office no 601, 6th Floor, Premaldeep Square, Opp. Pravin Tailor, Silvassa, Dadra and Nagar Haveli and Daman and Diu 396230
              </span>
            </div>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-3 flex flex-col gap-3 md:items-end">
            <span className="text-xs font-black uppercase tracking-widest text-[#FFDE59] border-b-2 border-[#FFDE59] pb-1 inline-block w-fit">
              GET IN TOUCH
            </span>
            <div className="flex flex-col gap-2 md:items-end text-sm">
              <a
                href="https://wa.me/919328603748"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 font-black text-white hover:text-[#FFDE59] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#FFDE59]" />
                <span>+91 93286 03748</span>
              </a>
              <a
                href="https://wa.me/917048734139"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 font-black text-white/80 hover:text-[#FFDE59] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#FFDE59]" />
                <span>+91 70487 34139</span>
              </a>
              <a
                href="mailto:aaryavstudios@gmail.com"
                className="flex items-center gap-2 text-[#FFDE59] font-black hover:underline transition-colors mt-1"
              >
                <Mail className="w-4 h-4 text-[#FFDE59]" />
                <span>aaryavstudios@gmail.com</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t-2 border-white/20 flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] font-bold uppercase tracking-widest text-white/50">
          <span>© 2026 AARYAV STUDIOS / ALL RIGHTS RESERVED</span>
          <span>NEO-BRUTALIST DESIGN</span>
        </div>
      </div>
    </footer>
  );
};
