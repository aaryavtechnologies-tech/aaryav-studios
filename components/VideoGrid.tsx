"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Zap, X } from "lucide-react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface Video {
  id: string;
  title: string;
  description?: string;
  url: string;
  type?: string;
  thumbnail?: string;
}

export const VideoGrid = ({ videos, type }: { videos: Video[], type: "short" | "long" }) => {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);

  // Lock scroll when video modal is open
  useEffect(() => {
    if (selectedVideo) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedVideo]);

  return (
    <div className="py-10 sm:py-16">
      <div className={cn(
        "grid gap-4 sm:gap-6 md:gap-8",
        type === "short" ? "grid-cols-2 md:grid-cols-4" : "grid-cols-1 md:grid-cols-2"
      )}>
        {videos.map((video, idx) => (
          <motion.div
            key={video.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: Math.min(idx * 0.08, 0.4) }}
          >
            <Card 
              className="group cursor-pointer overflow-hidden p-0 h-full flex flex-col border-3 sm:border-4 border-black shadow-[4px_4px_0px_black] sm:shadow-brutalist transition-transform hover:-translate-y-1"
              onClick={() => setSelectedVideo(video)}
            >
              <div className={cn(
                "relative overflow-hidden border-b-3 sm:border-b-4 border-black bg-black",
                type === "short" ? "aspect-[9/16]" : "aspect-video"
              )}>
                {/* Thumbnail / Local Video preview */}
                {video.thumbnail ? (
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 opacity-90 group-hover:opacity-100"
                    loading="lazy"
                  />
                ) : (
                  <video 
                    src={`${video.url}#t=0.5`} 
                    preload="metadata"
                    muted
                    playsInline
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 opacity-90 group-hover:opacity-100"
                  />
                )}
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 bg-[#FFDE59]/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="bg-[#FFDE59] p-3 sm:p-5 border-2 sm:border-4 border-black shadow-[3px_3px_0px_black] transform scale-0 group-hover:scale-100 transition-transform">
                    {type === "short" ? <Zap className="w-5 h-5 sm:w-7 sm:h-7 fill-black" /> : <Play className="w-6 h-6 sm:w-8 sm:h-8 fill-black" />}
                  </div>
                </div>
                
                {type === "short" && (
                  <div className="absolute bottom-2 sm:bottom-3 left-2 sm:left-3 z-10">
                    <span className="bg-black text-[#FFDE59] px-1.5 sm:px-2 py-0.5 font-black text-[10px] sm:text-xs border border-[#FFDE59]">REEL</span>
                  </div>
                )}
              </div>

              <div className="p-3 sm:p-5 flex-1 bg-white flex flex-col justify-between">
                <div>
                  <h3 className="text-sm sm:text-lg md:text-xl font-black uppercase mb-1 line-clamp-2 leading-tight">
                    {video.title}
                  </h3>
                  {video.description && (
                    <p className="font-bold uppercase tracking-tight text-[11px] sm:text-xs text-gray-700 line-clamp-2">
                      {video.description}
                    </p>
                  )}
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Responsive Video Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-3 sm:p-6 backdrop-blur-md"
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 10 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 10 }}
              className={cn(
                "bg-black border-4 border-[#FFDE59] relative shadow-[6px_6px_0px_#FFDE59] sm:shadow-[12px_12px_0px_#FFDE59] max-h-[90vh] flex flex-col",
                type === "short" ? "w-full max-w-[340px] aspect-[9/16]" : "w-full max-w-4xl aspect-video"
              )}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedVideo(null)}
                className="absolute top-2 right-2 z-30 bg-[#FFDE59] text-black font-black px-2.5 py-1 text-xs sm:text-sm border-2 border-black flex items-center gap-1 uppercase hover:bg-white transition-colors"
                aria-label="Close video player"
              >
                <X className="w-3.5 h-3.5" />
                <span>CLOSE</span>
              </button>
              
              <div className="flex-1 w-full h-full relative overflow-hidden bg-black flex items-center justify-center">
                {selectedVideo.url.startsWith("http") && selectedVideo.url.includes("youtube") ? (
                  <iframe
                    src={`${selectedVideo.url}?autoplay=1&playsinline=1`}
                    className="w-full h-full"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                  />
                ) : (
                  <video 
                    src={selectedVideo.url} 
                    controls 
                    autoPlay 
                    playsInline
                    className="w-full h-full object-contain bg-black"
                  />
                )}
              </div>

              {/* Title Bar */}
              <div className="bg-black border-t-2 border-[#FFDE59] p-3 flex justify-between items-center text-[#FFDE59] gap-2">
                <div className="truncate">
                  <h4 className="text-xs sm:text-sm font-black uppercase truncate">{selectedVideo.title}</h4>
                  {selectedVideo.description && (
                    <p className="text-[10px] sm:text-xs font-bold text-white/70 uppercase truncate">{selectedVideo.description}</p>
                  )}
                </div>
                <span className="bg-[#FFDE59] text-black px-2 py-0.5 text-[10px] font-black shrink-0 border border-black">
                  {type === "short" ? "REEL" : "VIDEO"}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
