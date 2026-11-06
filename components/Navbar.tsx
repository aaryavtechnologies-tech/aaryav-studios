"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export const Navbar = () => {
  const pathname = usePathname();

  const links = [
    { name: "HOME", href: "/" },
    { name: "LONG FORM", href: "/videos" },
    { name: "SHORTS", href: "/shorts" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-40 p-4 md:p-6 flex justify-center">
      <div className="bg-white border-4 border-black shadow-brutalist flex items-center overflow-hidden">
        <Link
          href="/"
          className="flex items-center gap-2.5 px-4 py-2 font-black uppercase tracking-tight border-r-4 border-black hover:bg-[#FFDE59] transition-colors"
        >
          <img
            src="/logo.png"
            alt="Aaryav Studios Logo"
            className="w-7 h-7 object-contain border-2 border-black"
          />
          <span className="hidden sm:inline font-black text-sm md:text-base">
            AARYAV STUDIOS
          </span>
        </Link>
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              "px-4 sm:px-6 py-2 font-black uppercase transition-colors border-r-4 last:border-r-0 border-black text-sm md:text-base",
              pathname === link.href ? "bg-[#FFDE59]" : "hover:bg-[#FFDE59]/50"
            )}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};
