"use client";

import { Button } from "@/components/Button";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { VideoGrid } from "@/components/VideoGrid";
import { PhotographyGallery } from "@/components/PhotographyGallery";
import { Video, Palette, Zap, CheckCircle2, MapPin, Phone, Mail, ArrowRight, Sparkles, Building2, BookOpen } from "lucide-react";
import { motion } from "framer-motion";
import { shorts, featured } from "@/data/videos";
import { servicesData } from "@/data/services";
import { locationsData } from "@/data/locations";
import { blogPosts } from "@/data/blogPosts";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      {/* 1. HERO SECTION */}
      <section className="container mx-auto px-4 pt-28 sm:pt-36 md:pt-44 pb-12 sm:pb-20 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {/* Geo-Target Badge */}
            <div className="inline-flex items-center gap-2 bg-black text-[#FFDE59] px-3 py-1 font-black uppercase text-[11px] sm:text-xs tracking-wider border-2 border-black mb-4 sm:mb-6">
              <Sparkles className="w-3.5 h-3.5 text-[#FFDE59]" />
              <span>SILVASSA • VAPI • DAMAN • CREATIVE AGENCY</span>
            </div>

            {/* Primary Headline */}
            <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl brutalist-heading mb-4 sm:mb-6 uppercase text-black leading-tight tracking-tight">
              Creative Content.{" "}
              <span className="bg-[#FFDE59] px-2 sm:px-4 py-0.5 inline-block shadow-[3px_3px_0px_black] sm:shadow-[6px_6px_0px_black] border-2 sm:border-4 border-black">
                Smarter Marketing.
              </span>{" "}
              Stronger Brands.
            </h1>

            {/* Concise Supporting Description */}
            <p className="text-sm sm:text-base md:text-xl font-bold uppercase text-black/85 max-w-2xl mx-auto mb-6 sm:mb-8 leading-relaxed">
              A creative and social media marketing agency in Silvassa, helping businesses across Vapi, Daman, and nearby cities grow through content, branding, and digital marketing.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md sm:max-w-none mx-auto">
              <Link href="/videos" className="w-full sm:w-auto">
                <Button className="w-full text-sm sm:text-base md:text-lg px-8 py-3.5 sm:py-4 bg-[#FFDE59] text-black hover:bg-black hover:text-[#FFDE59]">
                  Explore Our Work
                </Button>
              </Link>
              <a
                href="https://wa.me/919328603748"
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto"
              >
                <Button
                  variant="secondary"
                  className="w-full text-sm sm:text-base md:text-lg px-8 py-3.5 sm:py-4 bg-black text-[#FFDE59] hover:bg-white hover:text-black border-2 sm:border-4 border-black"
                >
                  <Phone className="w-4 h-4 mr-2 inline" />
                  Let's Talk
                </Button>
              </a>
            </div>
          </motion.div>

          {/* Hero Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mt-10 sm:mt-16 relative max-w-4xl mx-auto"
          >
            <div className="absolute inset-0 bg-[#FFDE59] translate-x-2 sm:translate-x-4 translate-y-2 sm:translate-y-4 border-2 sm:border-4 border-black shadow-[4px_4px_0px_black] sm:shadow-[8px_8px_0px_black]" />
            <img
              src="/hero.png"
              alt="Aaryav Studios creative video production and social media marketing in Silvassa"
              className="relative z-10 w-full border-2 sm:border-4 border-black object-cover aspect-[16/9] sm:aspect-[21/9] grayscale hover:grayscale-0 transition-all duration-700"
            />
          </motion.div>
        </div>
      </section>

      {/* 2. SERVICES PREVIEW SECTION */}
      <section id="services" className="py-14 sm:py-20 bg-white border-y-4 border-black">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
            <span className="bg-black text-[#FFDE59] text-[10px] sm:text-xs font-black uppercase tracking-widest px-3 py-1 inline-block mb-2 sm:mb-3 border border-black">
              WHAT WE DO
            </span>
            <h2 className="text-3xl sm:text-5xl md:text-6xl brutalist-heading mb-3 uppercase">
              Creative & <span className="bg-[#FFDE59] px-2 sm:px-3 shadow-[3px_3px_0px_black]">Marketing</span> Services
            </h2>
            <p className="text-xs sm:text-sm md:text-base font-bold uppercase text-black/75">
              Practical visual marketing and video production tailored to generate real business inquiries.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {servicesData.map((svc, i) => (
              <div
                key={svc.slug}
                className="bg-white border-3 sm:border-4 border-black p-5 sm:p-6 shadow-[4px_4px_0px_black] sm:shadow-brutalist flex flex-col justify-between hover:-translate-y-1 transition-transform"
              >
                <div>
                  <span className="text-[10px] sm:text-xs font-black bg-black text-[#FFDE59] px-2 py-0.5 uppercase tracking-widest inline-block mb-2">
                    0{i + 1}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black uppercase text-black mb-2">
                    {svc.shortTitle}
                  </h3>
                  <p className="text-xs sm:text-sm font-bold text-black/70 uppercase leading-relaxed mb-5">
                    {svc.tagline}
                  </p>
                </div>
                <Link
                  href={`/services/${svc.slug}`}
                  className="font-black text-xs uppercase tracking-wider bg-[#FFDE59] hover:bg-black hover:text-[#FFDE59] text-black px-3 py-2 border-2 border-black flex items-center justify-between transition-colors"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-8 sm:mt-12">
            <Link href="/services">
              <Button className="text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 bg-black text-[#FFDE59] hover:bg-white hover:text-black">
                Explore All Services & Packages →
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 3. PHOTOGRAPHY GALLERY */}
      <PhotographyGallery />

      {/* 4. PREVIEW WORK (LONG FORM) */}
      <section id="work" className="py-14 sm:py-20 bg-white border-b-4 border-black">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-5xl md:text-6xl brutalist-heading uppercase">
              <span className="bg-[#FFDE59] px-4 py-1 border-2 sm:border-4 border-black shadow-[3px_3px_0px_black] sm:shadow-brutalist">
                Featured Work
              </span>
            </h2>
            <p className="text-xs sm:text-sm font-bold uppercase text-black/70 mt-4">
              A selection of our recent commercial and long-form projects.
            </p>
          </div>
          <VideoGrid videos={featured.slice(0, 2)} type="long" />
          <Link href="/videos" className="inline-block mt-4 sm:mt-6">
            <Button
              variant="secondary"
              className="text-sm sm:text-base px-8 py-3.5 hover:bg-black hover:text-[#FFDE59] border-2 sm:border-4 border-black"
            >
              Explore All Videos →
            </Button>
          </Link>
        </div>
      </section>

      {/* 5. SHORTS PREVIEW */}
      <section className="py-14 sm:py-20 bg-black text-white border-b-4 border-black">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-5xl md:text-6xl brutalist-heading text-[#FFDE59] uppercase">
              Vertical Reels
            </h2>
            <p className="text-xs sm:text-sm font-bold uppercase text-white/70 mt-2">
              High-retention vertical edits engineered for Instagram Reels and Shorts.
            </p>
          </div>
          <VideoGrid videos={shorts.slice(0, 8)} type="short" />
          <Link href="/shorts" className="inline-block mt-8 sm:mt-10">
            <Button className="text-sm sm:text-base px-8 py-3.5 bg-[#FFDE59] text-black hover:bg-white border-2 border-black">
              View All Shorts →
            </Button>
          </Link>
        </div>
      </section>

      {/* 6. BEFORE / AFTER EDITING */}
      <section className="py-14 sm:py-20 bg-white border-b-4 border-black">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="flex-1 w-full text-center md:text-left">
              <span className="bg-black text-[#FFDE59] text-[10px] sm:text-xs font-black uppercase tracking-widest px-3 py-1 inline-block mb-3 border border-black">
                POST-PRODUCTION CRAFT
              </span>
              <h2 className="text-3xl sm:text-5xl md:text-6xl brutalist-heading mb-4 uppercase">
                Raw vs <span className="bg-[#FFDE59] px-2 border-2 sm:border-4 border-black shadow-[3px_3px_0px_black]">Edited</span>
              </h2>
              <p className="text-sm sm:text-base font-bold uppercase text-black/80 mb-6">
                Cinema-grade color science, tight pacing, and custom audio leveling that elevate raw footage.
              </p>
              <ul className="space-y-3 mb-6 inline-block text-left">
                {[
                  "Color Correction & Film Emulation",
                  "Pacing & Story Structure",
                  "Layered Sound Design & Audio Polish",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2.5 font-black text-xs sm:text-sm uppercase">
                    <CheckCircle2 className="w-4 h-4 text-black bg-[#FFDE59] border border-black p-0.5 shrink-0" />
                    <span>{item}</span>
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

      {/* 7. KINETIC TYPOGRAPHY SPOTLIGHT */}
      <section className="py-16 sm:py-20 bg-[#FFDE59] border-b-4 border-black overflow-hidden relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="w-full md:w-1/2 text-center md:text-left">
              <span className="bg-black text-white text-[10px] sm:text-xs font-black uppercase tracking-widest px-3 py-1 inline-block mb-3">
                RETENTION DESIGN
              </span>
              <h2 className="text-3xl sm:text-5xl md:text-6xl brutalist-heading mb-4 leading-none uppercase">
                Kinetic <span className="bg-black text-[#FFDE59] px-2 sm:px-3">Type</span>
              </h2>
              <p className="text-sm sm:text-base font-bold uppercase text-black/85 leading-relaxed max-w-md">
                Motion typography that commands attention. We design on-screen animated text that keeps mobile viewers engaged through every second of your message.
              </p>
            </div>

            <div className="w-full md:w-1/2">
              <div className="relative group max-w-lg mx-auto">
                <div className="relative z-10 border-3 sm:border-4 border-black shadow-[4px_4px_0px_black] sm:shadow-brutalist aspect-video w-full overflow-hidden bg-black">
                  <video
                    src="https://res.cloudinary.com/k7xizuxh/video/upload/v1794677358/aaryav-studios/core-dev-reel-1.mp4"
                    controls
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. REGIONAL TARGET LOCATIONS */}
      <section className="py-14 sm:py-20 bg-white border-b-4 border-black">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
            <span className="bg-black text-[#FFDE59] text-[10px] sm:text-xs font-black uppercase tracking-widest px-3 py-1 inline-block mb-3 border border-black">
              SERVICE AREA
            </span>
            <h2 className="text-3xl sm:text-5xl md:text-6xl brutalist-heading mb-3 uppercase">
              Areas We <span className="bg-[#FFDE59] px-2 sm:px-3 shadow-[3px_3px_0px_black]">Serve</span>
            </h2>
            <p className="text-xs sm:text-sm md:text-base font-bold uppercase text-black/75">
              Headquartered in Silvassa with regular on-location shoots throughout South Gujarat and Daman.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            {locationsData.map((loc) => (
              <div
                key={loc.slug}
                className="bg-white border-3 sm:border-4 border-black p-5 sm:p-6 shadow-[4px_4px_0px_black] sm:shadow-brutalist flex flex-col justify-between hover:-translate-y-1 transition-transform"
              >
                <div>
                  <div className="flex items-center gap-1.5 text-[10px] sm:text-xs font-black bg-black text-[#FFDE59] px-2 py-0.5 uppercase tracking-widest w-fit mb-3">
                    <MapPin className="w-3 h-3 text-[#FFDE59]" />
                    <span>{loc.cityName.toUpperCase()}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black uppercase mb-2 text-black">
                    {loc.cityName}
                  </h3>
                  <p className="text-xs sm:text-sm font-bold text-black/70 uppercase leading-relaxed mb-5">
                    {loc.headline}
                  </p>
                </div>
                <Link
                  href={`/locations/${loc.slug}`}
                  className="font-black text-xs uppercase tracking-wider bg-[#FFDE59] hover:bg-black hover:text-[#FFDE59] text-black px-3 py-2 border-2 border-black flex items-center justify-between transition-colors"
                >
                  <span>Explore {loc.cityName}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. AGENCY LEADERSHIP */}
      <section id="team" className="py-16 sm:py-20 bg-black text-white border-t-4 border-[#FFDE59]">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
            <span className="bg-[#FFDE59] text-black px-3 py-1 font-black uppercase tracking-widest text-[10px] sm:text-xs inline-block mb-3 border border-black">
              AGENCY LEADERSHIP
            </span>
            <h2 className="text-3xl sm:text-5xl md:text-6xl brutalist-heading text-[#FFDE59] mb-3 uppercase">
              Meet Our Team
            </h2>
            <p className="text-xs sm:text-sm font-bold uppercase text-white/75">
              The creative and operational team behind Aaryav Studios.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
            {/* Himanshu Singh */}
            <div className="bg-zinc-950 border-3 sm:border-4 border-white shadow-[5px_5px_0px_#FFDE59] flex flex-col">
              <div className="relative aspect-[4/3] sm:aspect-[4/4] overflow-hidden bg-black border-b-3 sm:border-b-4 border-white">
                <img
                  src="/founder.jpg"
                  alt="Himanshu Singh - Founder & CEO of Aaryav Studios"
                  className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute top-3 left-3 bg-[#FFDE59] text-black font-black uppercase text-[10px] sm:text-xs px-2.5 py-1 border border-black">
                  FOUNDER & CEO
                </div>
              </div>
              <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-[#FFDE59] mb-1 uppercase">
                    Himanshu Singh
                  </h3>
                  <div className="text-[11px] font-bold text-white/60 uppercase mb-3">
                    Strategy & Client Partnerships
                  </div>
                  <p className="text-xs sm:text-sm font-bold uppercase leading-relaxed text-white/80">
                    Directs agency vision, long-term brand strategy, and commercial partnerships across South Gujarat and Dadra & Nagar Haveli.
                  </p>
                </div>
              </div>
            </div>

            {/* Chirag Singh */}
            <div className="bg-zinc-950 border-3 sm:border-4 border-white shadow-[5px_5px_0px_#FFDE59] flex flex-col">
              <div className="relative aspect-[4/3] sm:aspect-[4/4] overflow-hidden bg-black border-b-3 sm:border-b-4 border-white">
                <img
                  src="/me1.png"
                  alt="Chirag Singh - Co-Founder & COO of Aaryav Studios"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute top-3 left-3 bg-[#FFDE59] text-black font-black uppercase text-[10px] sm:text-xs px-2.5 py-1 border border-black">
                  CO-FOUNDER & COO
                </div>
              </div>
              <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-[#FFDE59] mb-1 uppercase">
                    Chirag Singh
                  </h3>
                  <div className="text-[11px] font-bold text-white/60 uppercase mb-3">
                    Production & Delivery Lead
                  </div>
                  <p className="text-xs sm:text-sm font-bold uppercase leading-relaxed text-white/80">
                    Oversees day-to-day video editing, on-location shooting, motion graphics, and delivery standards for client campaigns.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Agency Metrics */}
          <div className="max-w-4xl mx-auto mt-10 sm:mt-12 bg-[#FFDE59] text-black p-5 sm:p-8 border-3 sm:border-4 border-white shadow-[4px_4px_0px_white]">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center">
              {[
                { label: "Years Exp", val: "3+" },
                { label: "Videos Delivered", val: "200+" },
                { label: "Active Brands", val: "50+" },
                { label: "Production Focus", val: "Retention" },
              ].map((stat, i) => (
                <div key={i} className="flex flex-col items-center">
                  <span className="text-2xl sm:text-4xl font-black text-black">
                    {stat.val}
                  </span>
                  <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-black/80">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 10. RECENT INSIGHTS */}
      <section className="py-14 sm:py-20 bg-[#FFDE59] border-t-4 border-black">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 sm:mb-12 gap-3">
            <div>
              <span className="bg-black text-[#FFDE59] text-[10px] sm:text-xs font-black uppercase tracking-widest px-3 py-1 inline-block mb-2 border border-black">
                GUIDES & STRATEGY
              </span>
              <h2 className="text-3xl sm:text-5xl brutalist-heading uppercase text-black">
                Marketing Insights
              </h2>
            </div>
            <Link href="/blog">
              <Button className="bg-black text-[#FFDE59] hover:bg-white hover:text-black text-xs sm:text-sm px-5 py-3">
                View All Guides →
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            {blogPosts.slice(0, 3).map((post) => (
              <article key={post.slug} className="bg-white border-3 sm:border-4 border-black p-5 shadow-[4px_4px_0px_black] flex flex-col justify-between">
                <div>
                  <span className="bg-black text-[#FFDE59] text-[10px] font-black uppercase px-2 py-0.5 tracking-wider inline-block mb-2">
                    {post.category}
                  </span>
                  <h3 className="text-lg sm:text-xl font-black uppercase text-black mb-2 leading-snug">
                    <Link href={`/blog/${post.slug}`} className="hover:underline">
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-xs font-bold text-black/75 uppercase leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                </div>
                <Link
                  href={`/blog/${post.slug}`}
                  className="font-black text-xs uppercase bg-[#FFDE59] hover:bg-black hover:text-[#FFDE59] text-black px-3 py-2 border-2 border-black flex items-center justify-between transition-colors"
                >
                  <span>Read Guide</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 11. CLIENT RESULTS */}
      <section className="py-14 sm:py-20 bg-white border-t-4 border-black">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
            <h2 className="text-3xl sm:text-5xl md:text-6xl brutalist-heading uppercase">
              Client <span className="bg-[#FFDE59] px-3 shadow-[3px_3px_0px_black] border-2 sm:border-4 border-black">Feedback</span>
            </h2>
            <p className="text-xs sm:text-sm font-bold uppercase text-black/70 mt-3">
              What creators and brand managers say about working with Aaryav Studios.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8 max-w-5xl mx-auto">
            {[
              {
                text: "The team at Aaryav Studios did an amazing job on our promotional video content. Fast turnaround, great eye for color grading, and our store received direct inquiries from the reels.",
                client: "Poojara Phones",
                label: "RETAIL PARTNER",
              },
              {
                text: "Understanding pacing and viewer retention is rare. Working with Chirag on our YouTube educational series brought a massive improvement in our average view duration.",
                client: "Educational Hix (YouTube)",
                label: "200K+ CREATOR",
              },
              {
                text: "Our Instagram engagement noticeably climbed within the first month. Their reels have great energy, clean typography, and feel purpose-built for the mobile feed.",
                client: "SkillPaisa (Instagram)",
                label: "INSTAGRAM CAMPAIGN",
              },
              {
                text: "Reliable production partner for shooting and editing. Having them on-site in Silvassa makes coordination effortless whenever we need quick-turnaround client deliverables.",
                client: "Burhani Socials",
                label: "MARKETING AGENCY",
              },
            ].map((t, i) => (
              <div
                key={i}
                className="bg-[#FFDE59] border-3 sm:border-4 border-black p-5 sm:p-6 shadow-[4px_4px_0px_black] sm:shadow-brutalist flex flex-col justify-between"
              >
                <p className="text-sm sm:text-base font-bold text-black uppercase leading-relaxed mb-6 italic">
                  "{t.text}"
                </p>
                <div className="flex items-center justify-between border-t-2 border-black pt-3">
                  <div>
                    <h4 className="text-sm font-black uppercase text-black">{t.client}</h4>
                    <span className="text-[9px] font-bold bg-black text-white px-2 py-0.5 uppercase tracking-widest inline-block mt-0.5">
                      {t.label}
                    </span>
                  </div>
                  <CheckCircle2 className="w-5 h-5 text-black" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. CONTACT CTA */}
      <section
        id="contact"
        className="py-16 sm:py-24 bg-[#FFDE59] border-t-4 border-black"
      >
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center gap-3 mb-4 sm:mb-6">
            <img
              src="/logo.png"
              alt="Aaryav Studios"
              className="w-10 h-10 sm:w-14 sm:h-14 object-contain border-2 sm:border-4 border-black shadow-[3px_3px_0px_black]"
            />
            <span className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-black">
              AARYAV STUDIOS
            </span>
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-8xl brutalist-heading mb-8 sm:mb-12 text-black leading-none uppercase">
            Ready to Scale?
          </h2>

          {/* Company Details Card */}
          <div className="max-w-2xl mx-auto bg-white border-3 sm:border-4 border-black shadow-[4px_4px_0px_black] sm:shadow-brutalist p-6 sm:p-8 mb-8 sm:mb-12 text-left">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Address */}
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-1.5 font-black uppercase text-xs tracking-wider bg-black text-[#FFDE59] px-2.5 py-1 w-fit border border-black">
                  <MapPin className="w-3.5 h-3.5 text-[#FFDE59]" />
                  <span>OFFICE ADDRESS</span>
                </div>
                <p className="font-bold text-xs sm:text-sm uppercase leading-relaxed text-black mt-1">
                  Kilvani Naka, Office no 601, 6th Floor, Premaldeep Square, Opp. Pravin Tailor, Silvassa, Dadra & Nagar Haveli 396230
                </p>
              </div>

              {/* Contact Info */}
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-1.5 font-black uppercase text-xs tracking-wider bg-black text-[#FFDE59] px-2.5 py-1 w-fit border border-black">
                  <Phone className="w-3.5 h-3.5 text-[#FFDE59]" />
                  <span>DIRECT CONTACT</span>
                </div>
                <div className="flex flex-col gap-1.5 mt-1 text-xs sm:text-sm font-bold text-black">
                  <a
                    href="https://wa.me/919328603748"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-[#FFDE59] hover:bg-black p-1 transition-colors block"
                  >
                    WhatsApp: +91 93286 03748
                  </a>
                  <a
                    href="tel:+917048734139"
                    className="hover:text-[#FFDE59] hover:bg-black p-1 transition-colors block"
                  >
                    Phone: +91 70487 34139
                  </a>
                  <a
                    href="mailto:aaryavstudios@gmail.com"
                    className="underline hover:text-[#FFDE59] hover:bg-black p-1 transition-colors block"
                  >
                    aaryavstudios@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 max-w-md sm:max-w-none mx-auto">
            <a href="https://wa.me/919328603748" target="_blank" rel="noreferrer" className="w-full sm:w-auto">
              <Button className="w-full bg-black text-[#FFDE59] hover:bg-white hover:text-black text-sm sm:text-lg px-8 py-3.5 sm:py-4">
                Chat on WhatsApp (+91 93286 03748)
              </Button>
            </a>
            <a href="mailto:aaryavstudios@gmail.com" className="w-full sm:w-auto">
              <Button className="w-full bg-white text-black hover:bg-black hover:text-[#FFDE59] text-sm sm:text-lg px-8 py-3.5 sm:py-4 shadow-none border-2 sm:border-4 border-black">
                Email Our Team
              </Button>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
