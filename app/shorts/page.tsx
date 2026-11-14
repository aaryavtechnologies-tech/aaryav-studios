import type { Metadata } from "next";
import { VideoGrid } from "@/components/VideoGrid";
import { shorts } from "@/data/videos";
import { Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Shorts & Reels Portfolio | High-Retention Vertical Video Editing",
  description: "Browse high-converting, viral vertical videos engineered by Aaryav Studios for Instagram Reels, YouTube Shorts, and TikTok. Fast-paced cuts, sound design & motion graphics.",
  alternates: {
    canonical: "/shorts",
  },
  openGraph: {
    title: "Shorts & Reels Portfolio | Aaryav Studios",
    description: "High-retention vertical content for Instagram Reels, TikTok, and YouTube Shorts.",
  },
};

export default function ShortsPage() {
  return (
    <div className="pt-28 sm:pt-36 pb-14 sm:pb-20 bg-[#FFDE59] min-h-screen overflow-x-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 bg-black text-[#FFDE59] px-2.5 py-1 text-[10px] sm:text-xs font-black uppercase tracking-wider mb-3">
            <Zap className="w-3.5 h-3.5 fill-[#FFDE59]" />
            <span>VERTICAL VIDEO PORTFOLIO</span>
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-7xl brutalist-heading mb-3 sm:mb-4">
            <span className="bg-black text-[#FFDE59] px-3 sm:px-6 py-1 border-2 sm:border-4 border-black shadow-[3px_3px_0px_black] sm:shadow-brutalist inline-block">
              REELS & SHORTS
            </span>
          </h1>
          <p className="text-xs sm:text-base md:text-lg font-bold uppercase text-black/85 leading-relaxed">
            High-retention vertical content engineered for Instagram Reels, YouTube Shorts, and mobile feeds. Tap any video to preview.
          </p>
        </div>
        <VideoGrid videos={shorts} type="short" />
      </div>
    </div>
  );
}
