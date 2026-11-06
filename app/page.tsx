"use client";

import { Button } from "@/components/Button";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { VideoGrid } from "@/components/VideoGrid";
import { PhotographyGallery } from "@/components/PhotographyGallery";
import { Video, Palette, Zap, CheckCircle2, Camera, MapPin, Phone, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { shorts, featured } from "@/data/videos";
import Link from "next/link";

export default function Home() {
  const services = [
    {
      title: "VIDEO EDITING",
      icon: <Video className="w-8 h-8" />,
      desc: "Professional cuts and cinematic flow.",
    },
    {
      title: "COLOR GRADING",
      icon: <Palette className="w-8 h-8" />,
      desc: "Making your footage pop with premium looks.",
    },
    {
      title: "REELS / SHORTS",
      icon: <Zap className="w-8 h-8" />,
      desc: "Fast-paced, high-retention vertical content.",
    },
    {
      title: "YOUTUBE EDITING",
      icon: <Video className="w-8 h-8" />,
      desc: "Full channel management and storytelling.",
    },
  ];

  return (
    <main className="min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="container mx-auto px-4 pt-48 pb-20 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-6xl md:text-8xl brutalist-heading mb-6 uppercase">
              WE CREATE{" "}
              <span className="bg-[#FFDE59] px-4 shadow-[6px_6px_0px_black]">
                IMPACTFUL
              </span>{" "}
              VISUAL STORIES
            </h1>
            <p className="text-xl md:text-2xl font-black uppercase mb-10 tracking-tight bg-black text-white inline-block px-4 py-2 border-4 border-black shadow-brutalist">
              CAPTURING MOMENTS & TRANSFORMING RAW FOOTAGE INTO HIGH-CONVERTING CINEMATIC EXPERIENCES.
            </p>
            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <Link href="/videos">
                <Button className="w-full md:w-auto text-xl px-12 py-6">
                  VIEW OUR WORK
                </Button>
              </Link>
              <Button
                variant="secondary"
                className="hover:bg-black hover:text-[#FFDE59] w-full md:w-auto text-xl px-12 py-6"
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                WORK WITH US
              </Button>
              <Button
                variant="secondary"
                className="w-full md:w-auto text-xl px-12 py-6 bg-white text-black hover:bg-[#FFDE59] border-4 border-black"
                onClick={() =>
                  document
                    .getElementById("team")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                OUR TEAM
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-20 relative max-w-5xl mx-auto"
          >
            <div className="absolute inset-0 bg-[#FFDE59] translate-x-4 translate-y-4 border-4 border-black shadow-[8px_8px_0px_black]" />
            <img
              src="/hero.png"
              alt="Professional Video Editing"
              className="relative z-10 w-full border-4 border-black object-cover aspect-[21/9] grayscale hover:grayscale-0 transition-all duration-700"
            />
          </motion.div>
        </div>
      </section>

      {/* 1.5. PHOTOGRAPHY GALLERY */}
      <PhotographyGallery />

      {/* 2. PREVIEW WORK */}
      <section id="work" className="py-20 bg-white border-b-4 border-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl md:text-7xl brutalist-heading mb-12">
            <span className="bg-[#FFDE59] px-6 py-2 border-4 border-black shadow-brutalist uppercase">
              LATEST EDITS
            </span>
          </h2>
          <VideoGrid videos={featured.slice(0, 2)} type="long" />
          <Link href="/videos" className="inline-block mt-8">
            <Button
              variant="secondary"
              className="text-xl px-12 py-6 hover:bg-black hover:text-[#FFDE59]"
            >
              EXPLORE ALL VIDEOS →
            </Button>
          </Link>
        </div>
      </section>

      {/* 2.5 SHORTS PREVIEW */}
      <section className="py-20 bg-black text-white border-b-4 border-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl md:text-7xl brutalist-heading mb-12 text-[#FFDE59]">
            VERTICAL REELS
          </h2>
          <VideoGrid videos={shorts.slice(0, 8)} type="short" />
          <Link href="/shorts" className="inline-block mt-12">
            <Button className="text-xl px-12 py-6 bg-[#FFDE59] text-black hover:bg-white">
              VIEW ALL SHORTS →
            </Button>
          </Link>
        </div>
      </section>

      {/* 3. BEFORE / AFTER */}
      <section className="py-20 bg-white border-b-4 border-black">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <h2 className="text-5xl md:text-7xl brutalist-heading mb-6">
                RAW VS{" "}
                <span className="text-[#FFDE59] bg-black px-2">EDITED</span>
              </h2>
              <p className="text-xl font-black uppercase mb-8">
                We don't just cut clips, we craft high-impact cinematic experiences.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "PRO COLOR GRADING",
                  "SEAMLESS TRANSITIONS",
                  "SOUND DESIGN & FOLEY",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 font-black">
                    <CheckCircle2 className="text-black bg-[#FFDE59] border-2 border-black p-1" />{" "}
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-1 w-full">
              <BeforeAfterSlider
                before="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=2070&auto=format&fit=crop"
                after="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=2070&auto=format&fit=crop"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. TYPOGRAPHY SPOTLIGHT */}
      <section className="py-24 bg-[#FFDE59] border-b-4 border-black overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="text-[15rem] font-black leading-none rotate-12 -translate-x-20">
            TYPE TYPE TYPE TYPE
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="w-full md:w-1/2">
              <h2 className="text-7xl md:text-9xl brutalist-heading mb-8 leading-none">
                KINETIC{" "}
                <span className="bg-black text-[#FFDE59] px-4">TYPE</span>
              </h2>
              <div className="bg-white border-4 border-black p-8 shadow-brutalist relative">
                <div className="absolute -top-6 -right-6 bg-black text-white px-4 py-2 font-black rotate-3">
                  TOP TIER
                </div>
                <p className="text-2xl font-black uppercase leading-tight">
                  Motion design isn't just about moving images—it's about making
                  words <span className="underline decoration-8">SCREAM</span>.
                  Our studio specializes in high-retention typography and motion graphics that keep viewers
                  hooked until the last second.
                </p>
              </div>
              <div className="mt-12 flex gap-4">
                <div className="bg-black text-[#FFDE59] px-6 py-3 font-black text-xl border-4 border-black">
                  MOTION GRAPHICS
                </div>
                <div className="bg-white text-black px-6 py-3 font-black text-xl border-4 border-black shadow-[4px_4px_0px_black]">
                  RETENTION DRIVEN
                </div>
              </div>
            </div>

            <div className="w-full">
              <div className="relative group max-w-5xl mx-auto">
                <div className="absolute inset-0 bg-black translate-x-6 translate-y-6 border-4 border-white" />
                <div className="relative z-10 border-8 border-black shadow-brutalist-lg aspect-video w-full overflow-hidden bg-black">
                  <video
                    src="/videos/Core-Dev-Reel-1.mp4"
                    controls
                    autoPlay
                    muted
                    loop
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. AGENCY LEADERSHIP & TEAM */}
      <section id="team" className="py-24 bg-black text-white border-t-4 border-[#FFDE59]">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-3 bg-[#FFDE59] text-black px-4 py-1.5 border-4 border-white shadow-[4px_4px_0px_white] font-black uppercase tracking-widest text-sm mb-4">
              EXECUTIVE LEADERSHIP
            </div>
            <h2 className="text-5xl md:text-8xl brutalist-heading text-[#FFDE59] mb-4">
              MEET OUR TEAM
            </h2>
            <p className="text-lg md:text-xl font-bold uppercase text-white/80">
              The creative minds and operational backbone powering Aaryav Studios' high-converting visual stories.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Himanshu Singh - Founder & CEO */}
            <div className="bg-zinc-950 border-4 border-white shadow-[10px_10px_0px_#FFDE59] flex flex-col overflow-hidden">
              <div className="relative aspect-[4/5] sm:aspect-[4/4] overflow-hidden bg-black border-b-4 border-white">
                <img
                  src="/founder.jpg"
                  alt="Himanshu Singh - Founder & CEO, Aaryav Studios"
                  className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute top-4 left-4 bg-[#FFDE59] text-black font-black uppercase text-xs sm:text-sm px-3 py-1 border-2 border-black shadow-[3px_3px_0px_black]">
                  FOUNDER & CEO
                </div>
              </div>
              <div className="p-8 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="text-3xl sm:text-4xl brutalist-heading text-[#FFDE59] mb-2 uppercase">
                    HIMANSHU SINGH
                  </h3>
                  <div className="inline-block bg-white text-black font-black uppercase text-xs px-2.5 py-1 mb-4 border-2 border-black">
                    FOUNDER & CEO · VISION & STRATEGIC GROWTH
                  </div>
                  <p className="text-base sm:text-lg font-bold uppercase leading-relaxed text-white/85">
                    Focuses on high-level vision, agency growth, brand reputation, and long-term client retention. Steers the creative roadmap and enterprise partnerships for Aaryav Studios.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t-2 border-white/20 flex items-center justify-between text-xs font-black uppercase text-[#FFDE59] tracking-wider">
                  <span>STRATEGY & ACQUISITION</span>
                  <span>AARYAV STUDIOS</span>
                </div>
              </div>
            </div>

            {/* Chirag Singh - Co-founder & COO */}
            <div className="bg-zinc-950 border-4 border-white shadow-[10px_10px_0px_#FFDE59] flex flex-col overflow-hidden">
              <div className="relative aspect-[4/5] sm:aspect-[4/4] overflow-hidden bg-black border-b-4 border-white">
                <img
                  src="/me1.png"
                  alt="Chirag Singh - Co-Founder & COO"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute top-4 left-4 bg-[#FFDE59] text-black font-black uppercase text-xs sm:text-sm px-3 py-1 border-2 border-black shadow-[3px_3px_0px_black]">
                  CO-FOUNDER & COO
                </div>
              </div>
              <div className="p-8 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="text-3xl sm:text-4xl brutalist-heading text-[#FFDE59] mb-2 uppercase">
                    CHIRAG SINGH
                  </h3>
                  <div className="inline-block bg-white text-black font-black uppercase text-xs px-2.5 py-1 mb-4 border-2 border-black">
                    OPERATIONS & PRODUCTION BACKBONE
                  </div>
                  <p className="text-base sm:text-lg font-bold uppercase leading-relaxed text-white/85">
                    Focuses on day-to-day operations, delivery, and efficiency. Serves as the backbone of the company's production output, guaranteeing high-converting edits and cinematic standards.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t-2 border-white/20 flex items-center justify-between text-xs font-black uppercase text-[#FFDE59] tracking-wider">
                  <span>PRODUCTION & DELIVERY</span>
                  <span>AARYAV STUDIOS</span>
                </div>
              </div>
            </div>
          </div>

          {/* Agency Metrics */}
          <div className="max-w-6xl mx-auto mt-16 bg-[#FFDE59] text-black p-8 md:p-10 border-4 border-white shadow-[8px_8px_0px_white]">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { label: "YEARS EXP", val: "3+" },
                { label: "VIDEOS DELIVERED", val: "200+" },
                { label: "ACTIVE CLIENTS", val: "50+" },
                { label: "PRODUCTION FOCUS", val: "ROI & RETENTION" },
              ].map((stat, i) => (
                <div key={i} className="flex flex-col items-center">
                  <span className="text-4xl md:text-5xl font-black text-black">
                    {stat.val}
                  </span>
                  <span className="font-black uppercase tracking-widest text-xs mt-1">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Vision Banner */}
          <div className="max-w-6xl mx-auto mt-12 bg-white text-black p-8 md:p-12 border-8 border-[#FFDE59] shadow-brutalist relative">
            <div className="absolute -top-7 left-8 bg-black text-[#FFDE59] px-6 py-1.5 font-black text-xl md:text-2xl uppercase border-2 border-white shadow-[4px_4px_0px_black]">
              OUR VISION
            </div>
            <p className="text-xl md:text-3xl font-black uppercase leading-snug">
              "TO TURN IDEAS INTO IMPACTFUL VISUAL EXPERIENCES THAT HELP BRANDS
              AND CREATORS SCALE IN TODAY’S FAST-PACED DIGITAL WORLD."
            </p>
          </div>
        </div>
      </section>

      {/* 6. TESTIMONIALS */}
      <section className="py-24 bg-white border-t-4 border-black relative overflow-hidden">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl md:text-8xl brutalist-heading mb-16 text-center leading-none">
            CLIENT{" "}
            <span className="bg-[#FFDE59] px-4 shadow-brutalist border-4 border-black">
              RESULTS
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                text: "The team at Aaryav Studios did an amazing job editing our promotional videos. The quality, creativity, and attention to detail were outstanding. Their work helped us present our brand in a much more professional and engaging way.",
                client: "Poojara Phones",
                label: "RETAIL BRAND",
              },
              {
                text: "Working with Chirag and the Aaryav Studios team for our YouTube channel was a great experience. They understand content flow and audience retention very well. Their editing made our educational videos more engaging and easy to follow.",
                client: "Educational Hix (YouTube)",
                label: "200K+ SUBS",
              },
              {
                text: "Aaryav Studios created high-quality Instagram reels for us that significantly improved our engagement. Their editing style is modern, fast-paced, and perfectly suited for social media growth.",
                client: "SkillPaisa (Instagram)",
                label: "INSTAGRAM GROWTH",
              },
              {
                text: "Aaryav Studios is a highly skilled creative production agency. They handled both shooting and editing for our clients’ projects with professionalism and creativity. A reliable and talented production partner.",
                client: "Burhani Socials",
                label: "MARKETING AGENCY",
              },
            ].map((t, i) => (
              <div
                key={i}
                className="bg-[#FFDE59] border-4 border-black p-8 shadow-brutalist-lg relative group transition-transform hover:-translate-y-2"
              >
                <div className="absolute -top-6 -left-4 text-7xl font-black text-black leading-none opacity-20">
                  "
                </div>
                <p className="text-xl font-black uppercase leading-tight mb-8 relative z-10 italic">
                  {t.text}
                </p>
                <div className="flex items-center justify-between border-t-4 border-black pt-4">
                  <div>
                    <h4 className="text-lg font-black uppercase">{t.client}</h4>
                    <span className="text-[10px] font-bold bg-black text-white px-2 py-0.5 uppercase tracking-widest">
                      {t.label}
                    </span>
                  </div>
                  <CheckCircle2 className="w-8 h-8 text-black" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section
        id="contact"
        className="py-28 bg-[#FFDE59] border-t-4 border-black"
      >
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center gap-4 mb-6">
            <img
              src="/logo.png"
              alt="Aaryav Studios Logo"
              className="w-14 h-14 md:w-16 md:h-16 object-contain border-4 border-black shadow-[4px_4px_0px_black]"
            />
            <span className="text-3xl md:text-5xl font-black uppercase tracking-tight text-black">
              AARYAV STUDIOS
            </span>
          </div>

          <h2 className="text-6xl md:text-9xl brutalist-heading mb-12 text-black leading-none">
            READY TO SCALE?
          </h2>

          {/* Company Details Card */}
          <div className="max-w-3xl mx-auto bg-white border-4 border-black shadow-brutalist p-8 md:p-10 mb-12 text-left">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Address */}
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 font-black uppercase text-sm tracking-wider bg-black text-[#FFDE59] px-3 py-1 w-fit border-2 border-black">
                  <MapPin className="w-4 h-4 text-[#FFDE59]" />
                  <span>OFFICE ADDRESS</span>
                </div>
                <p className="font-black text-sm uppercase leading-relaxed text-black mt-2">
                  Kilvani Naka, Office no 601, 6th Floor, Premaldeep Square, Opp. Pravin Tailor, Silvassa, Dadra and Nagar Haveli and Daman and Diu 396230
                </p>
              </div>

              {/* Contact Info */}
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2 font-black uppercase text-sm tracking-wider bg-black text-[#FFDE59] px-3 py-1 w-fit border-2 border-black">
                  <Phone className="w-4 h-4 text-[#FFDE59]" />
                  <span>DIRECT CONTACT</span>
                </div>
                <div className="flex flex-col gap-2 mt-2">
                  <a
                    href="https://wa.me/919328603748"
                    target="_blank"
                    className="flex items-center gap-2 font-black text-base text-black hover:text-[#FFDE59] hover:bg-black px-2 py-1 transition-colors"
                  >
                    <span>PHONE / WA: +91 93286 03748</span>
                  </a>
                  <a
                    href="https://wa.me/917048734139"
                    target="_blank"
                    className="flex items-center gap-2 font-black text-base text-black/80 hover:text-[#FFDE59] hover:bg-black px-2 py-1 transition-colors"
                  >
                    <span>PHONE / WA: +91 70487 34139</span>
                  </a>
                  <a
                    href="mailto:aaryavstudios@gmail.com"
                    className="flex items-center gap-2 font-black text-sm text-black underline hover:text-[#FFDE59] hover:bg-black px-2 py-1 transition-colors"
                  >
                    <Mail className="w-4 h-4 shrink-0" />
                    <span>aaryavstudios@gmail.com</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            <a href="https://wa.me/919328603748" target="_blank">
              <Button className="bg-black text-[#FFDE59] hover:bg-white hover:text-black text-xl md:text-2xl px-10 md:px-12 py-6 md:py-8">
                WHATSAPP (+91 93286 03748)
              </Button>
            </a>
            <a href="mailto:aaryavstudios@gmail.com" target="_blank">
              <Button className="bg-white text-black hover:bg-black hover:text-[#FFDE59] text-xl md:text-2xl px-10 md:px-12 py-6 md:py-8 shadow-brutalist">
                EMAIL US
              </Button>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
