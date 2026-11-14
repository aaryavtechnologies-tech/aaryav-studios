"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export const Navbar = () => {
  const pathname = usePathname();

  const links = [
    { name: "HOME", href: "/" },
    { name: "SERVICES", href: "/services" },
    { name: "WORK", href: "/videos" },
    { name: "SHORTS", href: "/shorts" },
    { name: "AREAS", href: "/locations" },
    { name: "BLOG", href: "/blog" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-40 p-2 sm:p-4 md:p-6 flex justify-center">
      <div className="bg-white border-4 border-black shadow-brutalist flex items-center overflow-x-auto max-w-full no-scrollbar">
        <Link
          href="/"
          className="flex items-center gap-2 px-3 sm:px-4 py-2 font-black uppercase tracking-tight border-r-4 border-black hover:bg-[#FFDE59] transition-colors shrink-0"
        >
          <img
            src="/logo.png"
            alt="Aaryav Studios Logo"
            className="w-7 h-7 object-contain border-2 border-black"
          />
          <span className="hidden lg:inline font-black text-sm md:text-base">
            AARYAV STUDIOS
          </span>
        </Link>
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              "px-3 sm:px-4 md:px-5 py-2 font-black uppercase transition-colors border-r-4 last:border-r-0 border-black text-xs sm:text-sm md:text-base shrink-0",
              pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href))
                ? "bg-[#FFDE59]"
                : "hover:bg-[#FFDE59]/50"
            )}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};
