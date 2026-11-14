import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/data/blogPosts";
import { Button } from "@/components/Button";
import { Calendar, Clock, ArrowRight, BookOpen, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog & Creative Insights | Aaryav Studios Silvassa",
  description:
    "Explore actionable guides on social media marketing, high-retention reels editing, video production, and local business growth strategies for Silvassa, Vapi & Daman.",
  openGraph: {
    title: "Blog & Insights | Aaryav Studios",
    description: "Marketing insights and video production guides by Aaryav Studios.",
    url: "https://studios.aaryavtech.online/blog",
  },
  alternates: {
    canonical: "/blog",
  },
};

export default function BlogIndexPage() {
  const featuredPost = blogPosts[0];
  const regularPosts = blogPosts.slice(1);

  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      {/* Header */}
      <section className="container mx-auto px-4 mb-16">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-black text-[#FFDE59] px-3 py-1 font-black uppercase text-xs tracking-wider border-2 border-black mb-4">
            <BookOpen className="w-3.5 h-3.5" />
            <span>INSIGHTS, GUIDES & STRATEGY</span>
          </div>
          <h1 className="text-5xl md:text-8xl brutalist-heading mb-6 uppercase text-black leading-none">
            AARYAV <span className="bg-[#FFDE59] px-4 shadow-brutalist">INSIGHTS</span>
          </h1>
          <p className="text-xl md:text-2xl font-bold uppercase text-black/80 max-w-3xl leading-relaxed">
            Practical knowledge, retention frameworks, and local marketing strategies engineered for businesses in Silvassa, Vapi, Daman, and South Gujarat.
          </p>
        </div>
      </section>

      {/* Featured Post Banner */}
      {featuredPost && (
        <section className="container mx-auto px-4 mb-16">
          <div className="bg-[#FFDE59] border-4 border-black shadow-brutalist p-8 md:p-12">
            <div className="flex flex-wrap items-center gap-4 text-xs font-black uppercase tracking-wider mb-4">
              <span className="bg-black text-[#FFDE59] px-3 py-1">FEATURED ARTICLE</span>
              <span className="bg-white text-black px-2.5 py-1 border border-black">{featuredPost.category}</span>
              <span className="flex items-center gap-1 text-black font-bold">
                <Clock className="w-3.5 h-3.5" />
                {featuredPost.readTime}
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl brutalist-heading uppercase text-black mb-4 leading-tight">
              <Link href={`/blog/${featuredPost.slug}`} className="hover:underline">
                {featuredPost.title}
              </Link>
            </h2>
            <p className="text-base md:text-lg font-bold uppercase text-black/80 mb-6 max-w-3xl leading-relaxed">
              {featuredPost.excerpt}
            </p>
            <Link href={`/blog/${featuredPost.slug}`}>
              <Button className="bg-black text-[#FFDE59] hover:bg-white hover:text-black text-base px-6 py-4">
                READ COMPLETE ARTICLE <ArrowRight className="w-4 h-4 ml-2 inline" />
              </Button>
            </Link>
          </div>
        </section>
      )}

      {/* Post Grid */}
      <section className="container mx-auto px-4 mb-20">
        <h2 className="text-3xl font-black uppercase text-black mb-8 border-b-4 border-black pb-3">
          ALL PUBLISHED GUIDES
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularPosts.map((post) => (
            <article
              key={post.slug}
              className="bg-white border-4 border-black shadow-brutalist p-6 flex flex-col justify-between hover:translate-x-1 hover:-translate-y-1 transition-transform"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-black uppercase tracking-wider mb-3">
                  <span className="bg-black text-[#FFDE59] px-2 py-0.5">{post.category}</span>
                  <span className="text-black/60 flex items-center gap-1 font-bold">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </span>
                </div>
                <h3 className="text-xl md:text-2xl font-black uppercase text-black mb-3 leading-snug">
                  <Link href={`/blog/${post.slug}`} className="hover:underline">
                    {post.title}
                  </Link>
                </h3>
                <p className="text-xs md:text-sm font-bold text-black/75 uppercase leading-relaxed mb-6">
                  {post.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t-2 border-black/10">
                <Link
                  href={`/blog/${post.slug}`}
                  className="font-black text-xs uppercase tracking-widest text-black hover:text-[#FFDE59] hover:bg-black px-3 py-2 border-2 border-black inline-flex items-center gap-2 transition-colors w-full justify-between"
                >
                  <span>READ ARTICLE</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Newsletter / CTA */}
      <section className="container mx-auto px-4">
        <div className="bg-black text-white border-4 border-black shadow-brutalist p-8 md:p-12 text-center max-w-3xl mx-auto">
          <Sparkles className="w-8 h-8 text-[#FFDE59] mx-auto mb-4" />
          <h3 className="text-3xl font-black uppercase text-white mb-4">
            WANT STRATEGY ADVICE FOR YOUR BRAND?
          </h3>
          <p className="text-sm font-bold text-white/80 uppercase max-w-xl mx-auto mb-6">
            Book a complimentary 20-minute video or in-person creative audit at our Silvassa studio.
          </p>
          <a href="https://wa.me/919328603748" target="_blank" rel="noreferrer">
            <Button className="bg-[#FFDE59] text-black hover:bg-white text-base font-black px-8 py-4">
              CHAT WITH OUR TEAM ON WHATSAPP
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
}

