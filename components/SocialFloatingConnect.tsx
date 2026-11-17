"use client";

import { useState } from "react";
import { ExternalLink, X, Share2 } from "lucide-react";

const INSTAGRAM_URL = "https://www.instagram.com/aaryavstudios/";
const GOOGLE_PROFILE_URL = "https://share.google/XjYDdslcZE47oTgbS";

export function SocialFloatingConnect() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="fixed bottom-5 left-4 z-40 print:hidden"
      aria-label="Quick social connect links"
    >
      {isOpen ? (
        <div className="bg-black text-white border-2 border-white p-3 shadow-[4px_4px_0px_#FFDE59] flex flex-col gap-2 max-w-[220px] animate-in fade-in slide-in-from-bottom-2 duration-200">
          <div className="flex items-center justify-between border-b border-white/20 pb-1.5">
            <span className="text-[10px] font-black uppercase text-[#FFDE59] tracking-wider">
              CONNECT WITH US
            </span>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="p-1 text-white/70 hover:text-white"
              aria-label="Close social connect popup"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between text-xs font-black uppercase bg-[#FFDE59] text-black px-2.5 py-1.5 border border-black hover:bg-white transition-colors"
          >
            <span>Instagram</span>
            <ExternalLink className="w-3 h-3" />
          </a>

          <a
            href={GOOGLE_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between text-xs font-black uppercase bg-white text-black px-2.5 py-1.5 border border-black hover:bg-[#FFDE59] transition-colors"
          >
            <span>Google Profile</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="bg-black hover:bg-zinc-900 text-[#FFDE59] border-2 border-white px-3 py-2 shadow-[3px_3px_0px_#FFDE59] flex items-center gap-1.5 text-xs font-black uppercase transition-transform active:translate-x-0.5 active:translate-y-0.5"
          aria-label="Open social links menu"
        >
          <Share2 className="w-3.5 h-3.5 text-[#FFDE59]" />
          <span className="hidden sm:inline">Connect</span>
        </button>
      )}
    </div>
  );
}

