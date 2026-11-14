"use client";

import { useState, useRef } from "react";

interface BeforeAfterSliderProps {
  before: string;
  after: string;
}

export const BeforeAfterSlider = ({ before, after }: BeforeAfterSliderProps) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = "touches" in e ? e.touches[0].clientX : e.clientX;
    const position = ((x - rect.left) / rect.width) * 100;

    setSliderPosition(Math.max(0, Math.min(100, position)));
  };

  return (
    <div 
      ref={containerRef}
      className="relative w-full aspect-[4/3] sm:aspect-video border-3 sm:border-4 border-black group cursor-ew-resize overflow-hidden shadow-[4px_4px_0px_black] sm:shadow-brutalist select-none"
      onMouseMove={handleMove}
      onTouchMove={handleMove}
      onTouchStart={handleMove}
    >
      {/* After Image (Edited) */}
      <div className="absolute inset-0">
        <img src={after} alt="Edited color graded preview" className="w-full h-full object-cover" />
        <div className="absolute top-3 right-3 sm:top-6 sm:right-6 bg-[#FFDE59] border-2 sm:border-4 border-black px-2.5 sm:px-5 py-1 sm:py-1.5 font-black text-xs sm:text-base uppercase z-10 shadow-[2px_2px_0px_black] sm:shadow-brutalist-sm">
          EDITED
        </div>
      </div>

      {/* Before Image (Raw) */}
      <div 
        className="absolute inset-0 border-r-2 sm:border-r-4 border-black z-20"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <img src={before} alt="Raw ungraded footage preview" className="w-full h-full object-cover grayscale" />
        <div className="absolute top-3 left-3 sm:top-6 sm:left-6 bg-white border-2 sm:border-4 border-black px-2.5 sm:px-5 py-1 sm:py-1.5 font-black text-xs sm:text-base uppercase shadow-[2px_2px_0px_black] sm:shadow-brutalist-sm">
          RAW LOG
        </div>
      </div>

      {/* Slider Divider */}
      <div 
        className="absolute top-0 bottom-0 w-1 sm:w-1.5 bg-black z-30 pointer-events-none"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 sm:w-11 sm:h-11 bg-[#FFDE59] border-2 sm:border-4 border-black rounded-none flex items-center justify-center font-black shadow-[2px_2px_0px_black] sm:shadow-brutalist text-sm sm:text-xl">
          ↔
        </div>
      </div>
    </div>
  );
};
