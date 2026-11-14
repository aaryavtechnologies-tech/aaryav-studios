import type { Metadata } from "next";
import { VideoGrid } from "@/components/VideoGrid";
import { featured } from "@/data/videos";
import { Video } from "lucide-react";

export const metadata: Metadata = {
  title: "Long-Form Video Production & YouTube Editing Portfolio",
  description: "Explore cinematic long-form video production, YouTube documentary edits, color grading, and commercial films created by Aaryav Studios post-production team.",
  alternates: {
    canonical: "/videos",
  },
  openGraph: {
    title: "Long-Form Video Portfolio | Aaryav Studios",
    description: "Cinematic storytelling, documentary editing, and professional color grading by Aaryav Studios.",
  },
};

export default function LongFormPage() {
  return (
    <div className="pt-28 sm:pt-36 pb-14 sm:pb-20 bg-white min-h-screen overflow-x-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 bg-black text-[#FFDE59] px-2.5 py-1 text-[10px] sm:text-xs font-black uppercase tracking-wider mb-3">
            <Video className="w-3.5 h-3.5" />
            <span>COMMERCIAL & LONG-FORM PORTFOLIO</span>
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-7xl brutalist-heading mb-3 sm:mb-4">
            <span className="bg-[#FFDE59] px-3 sm:px-6 py-1 border-2 sm:border-4 border-black shadow-[3px_3px_0px_black] sm:shadow-brutalist inline-block">
              LONG FORM & ADS
            </span>
          </h1>
          <p className="text-xs sm:text-base md:text-lg font-bold uppercase text-black/85 leading-relaxed">
            Cinematic storytelling, documentary YouTube editing, and commercial campaigns produced by Aaryav Studios. Tap any card to preview.
          </p>
        </div>
        <VideoGrid videos={featured} type="long" />
      </div>
    </div>
  );
}
