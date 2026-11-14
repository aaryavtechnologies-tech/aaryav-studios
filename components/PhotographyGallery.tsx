"use client";

import { motion } from "framer-motion";

const photographyImages = [
  {
    src: "/images/SaveClip.App_614587776_17858719926592460_3032298527910976435_n.jpg",
    alt: "Commercial brand photography by Aaryav Studios Silvassa",
  },
  {
    src: "/images/SaveClip.App_616048798_17858719839592460_6464278475558106308_n.jpg",
    alt: "Creative portrait and brand visual by Aaryav Studios",
  },
  {
    src: "/images/SaveClip.App_616435966_17858719812592460_3385373303241657511_n.jpg",
    alt: "Editorial lifestyle photography session in Silvassa",
  },
  {
    src: "/images/SaveClip.App_616574567_17858719821592460_8998132243722774531_n.jpg",
    alt: "Cinematic commercial brand shoot in Vapi and Silvassa",
  },
  {
    src: "/images/SaveClip.App_616818538_17858719830592460_860388173867509473_n.jpg",
    alt: "Product showcase and commercial styling by Aaryav Studios",
  },
  {
    src: "/images/SaveClip.App_628323254_17862043881592460_659820722718610903_n.jpg",
    alt: "Studio lighting and high-contrast creative photography",
  },
  {
    src: "/images/SaveClip.App_629604922_17862043872592460_3142088521257080878_n.jpg",
    alt: "Fashion and lifestyle commercial photography",
  },
  {
    src: "/images/SaveClip.App_630009758_17862043890592460_8291883071096061612_n.jpg",
    alt: "Creative agency photography portfolio Silvassa",
  },
];

export function PhotographyGallery() {
  return (
    <section id="photography" className="py-14 sm:py-20 bg-[#FFDE59] border-y-4 border-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 sm:mb-16 max-w-3xl mx-auto">
          <span className="bg-black text-[#FFDE59] text-xs font-black uppercase tracking-widest px-3 py-1 inline-block mb-3 border border-black">
            VISUAL PORTFOLIO
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-7xl brutalist-heading mb-4 text-black leading-tight">
            BRAND & STUDIO{" "}
            <span className="bg-black text-[#FFDE59] px-2 sm:px-4 py-1 border-2 sm:border-4 border-black shadow-[3px_3px_0px_black] sm:shadow-[6px_6px_0px_black] inline-block uppercase">
              PHOTOGRAPHY
            </span>
          </h2>
          <p className="text-xs sm:text-sm md:text-base font-bold uppercase tracking-tight text-black/80 max-w-xl mx-auto">
            High-impact visual assets capturing brand character, products, and creative campaigns.
          </p>
        </div>

        {/* 2-column on mobile, 4-column on desktop masonry */}
        <div className="columns-2 sm:columns-2 md:columns-3 lg:columns-4 gap-3 sm:gap-4 md:gap-6 space-y-3 sm:space-y-4 md:space-y-6">
          {photographyImages.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.3) }}
              className="break-inside-avoid relative group border-2 sm:border-4 border-black shadow-[3px_3px_0px_black] sm:shadow-brutalist bg-white overflow-hidden"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
