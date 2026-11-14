"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Menu, X, Phone, ArrowRight } from "lucide-react";

export const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // Close mobile menu whenever pathname changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is active
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const links = [
    { name: "HOME", href: "/" },
    { name: "SERVICES", href: "/services" },
    { name: "WORK", href: "/videos" },
    { name: "SHORTS", href: "/shorts" },
    { name: "AREAS", href: "/locations" },
    { name: "BLOG", href: "/blog" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 p-2 sm:p-4 md:p-6 flex justify-center pointer-events-none">
        {/* Desktop Navigation Bar */}
        <div className="hidden md:flex bg-white border-4 border-black shadow-brutalist items-center pointer-events-auto">
          <Link
            href="/"
            className="flex items-center gap-2.5 px-4 py-2 font-black uppercase tracking-tight border-r-4 border-black hover:bg-[#FFDE59] transition-colors"
          >
            <img
              src="/logo.png"
              alt="Aaryav Studios Logo"
              className="w-7 h-7 object-contain border-2 border-black"
            />
            <span className="font-black text-sm lg:text-base">
              AARYAV STUDIOS
            </span>
          </Link>

          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "px-3 lg:px-5 py-2 font-black uppercase transition-colors border-r-4 border-black text-xs lg:text-sm shrink-0",
                pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href))
                  ? "bg-[#FFDE59]"
                  : "hover:bg-[#FFDE59]/50"
              )}
            >
              {link.name}
            </Link>
          ))}

          <a
            href="https://wa.me/919328603748"
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 font-black uppercase text-xs lg:text-sm bg-black text-[#FFDE59] hover:bg-[#FFDE59] hover:text-black transition-colors flex items-center gap-1.5"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>TALK</span>
          </a>
        </div>

        {/* Mobile Header Bar (< md) */}
        <div className="flex md:hidden w-full max-w-sm justify-between items-center bg-white border-4 border-black shadow-[4px_4px_0px_black] px-3 py-2 pointer-events-auto">
          <Link
            href="/"
            className="flex items-center gap-2 font-black uppercase tracking-tight text-sm"
          >
            <img
              src="/logo.png"
              alt="Aaryav Studios"
              className="w-6 h-6 object-contain border-2 border-black"
            />
            <span className="font-black text-xs sm:text-sm tracking-tight">
              AARYAV STUDIOS
            </span>
          </Link>

          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-1.5 bg-[#FFDE59] text-black font-black uppercase text-xs px-2.5 py-1.5 border-2 border-black active:translate-x-0.5 active:translate-y-0.5"
            aria-expanded={isOpen}
            aria-label="Toggle Navigation Menu"
          >
            {isOpen ? (
              <>
                <X className="w-4 h-4" />
                <span>CLOSE</span>
              </>
            ) : (
              <>
                <Menu className="w-4 h-4" />
                <span>MENU</span>
              </>
            )}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-black/80 backdrop-blur-sm md:hidden flex flex-col justify-end">
          <div className="bg-white border-t-4 border-black p-6 space-y-4 max-h-[85vh] overflow-y-auto animate-in slide-in-from-bottom duration-200">
            <div className="flex justify-between items-center pb-3 border-b-2 border-black">
              <span className="font-black uppercase text-xs tracking-widest text-black/60">
                NAVIGATION
              </span>
              <button
                onClick={() => setIsOpen(false)}
                className="font-black text-xs uppercase bg-black text-white px-2 py-1"
              >
                [X]
              </button>
            </div>

            <nav className="flex flex-col space-y-2">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "flex items-center justify-between font-black uppercase text-base p-3 border-2 border-black transition-colors",
                    pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href))
                      ? "bg-[#FFDE59] text-black shadow-[3px_3px_0px_black]"
                      : "bg-white text-black hover:bg-[#FFDE59]/30"
                  )}
                >
                  <span>{link.name}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              ))}
            </nav>

            <div className="pt-3 border-t-2 border-black/10 space-y-2">
              <a
                href="https://wa.me/919328603748"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-[#FFDE59] text-black border-2 border-black p-3 font-black uppercase text-sm shadow-[3px_3px_0px_black]"
              >
                <Phone className="w-4 h-4" />
                <span>WHATSAPP CONSULTATION</span>
              </a>
              <div className="text-center text-[11px] font-bold uppercase text-black/60 pt-1">
                Kilvani Naka, Silvassa • Serving Silvassa, Vapi & Daman
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
