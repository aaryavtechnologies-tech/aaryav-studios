import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/data/blogPosts";
import { Button } from "@/components/Button";
import { Clock, ArrowRight, BookOpen, Sparkles } from "lucide-react";

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
    <div className="pt-28 sm:pt-36 pb-16 sm:pb-24 bg-white min-h-screen overflow-x-hidden">
      {/* Header */}
      <section className="container mx-auto px-4 mb-10 sm:mb-16">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-black text-[#FFDE59] px-3 py-1 font-black uppercase text-[10px] sm:text-xs tracking-wider border border-black mb-3 sm:mb-4">
            <BookOpen className="w-3.5 h-3.5" />
            <span>INSIGHTS, GUIDES & STRATEGY</span>
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-7xl brutalist-heading mb-4 sm:mb-6 uppercase text-black leading-none">
            Aaryav <span className="bg-[#FFDE59] px-2 sm:px-4 shadow-[3px_3px_0px_black] sm:shadow-brutalist border-2 sm:border-4 border-black">Insights</span>
          </h1>
          <p className="text-sm sm:text-base md:text-xl font-bold uppercase text-black/80 max-w-2xl leading-relaxed">
            Practical knowledge, retention frameworks, and local marketing strategies engineered for businesses in Silvassa, Vapi, Daman, and South Gujarat.
          </p>
        </div>
      </section>

      {/* Featured Post Banner */}
      {featuredPost && (
        <section className="container mx-auto px-4 mb-12 sm:mb-16">
          <div className="bg-[#FFDE59] border-3 sm:border-4 border-black shadow-[4px_4px_0px_black] sm:shadow-brutalist p-5 sm:p-8 md:p-10">
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-[10px] sm:text-xs font-black uppercase tracking-wider mb-3">
              <span className="bg-black text-[#FFDE59] px-2.5 py-0.5">FEATURED ARTICLE</span>
              <span className="bg-white text-black px-2 py-0.5 border border-black">{featuredPost.category}</span>
              <span className="flex items-center gap-1 text-black font-bold">
                <Clock className="w-3 h-3" />
                {featuredPost.readTime}
              </span>
            </div>
            <h2 className="text-xl sm:text-3xl md:text-4xl brutalist-heading uppercase text-black mb-3 leading-tight">
              <Link href={`/blog/${featuredPost.slug}`} className="hover:underline">
                {featuredPost.title}
              </Link>
            </h2>
            <p className="text-xs sm:text-sm md:text-base font-bold uppercase text-black/85 mb-5 max-w-2xl leading-relaxed">
              {featuredPost.excerpt}
            </p>
            <Link href={`/blog/${featuredPost.slug}`}>
              <Button className="bg-black text-[#FFDE59] hover:bg-white hover:text-black text-xs sm:text-sm px-5 py-3">
                Read Complete Article <ArrowRight className="w-3.5 h-3.5 ml-1.5 inline" />
              </Button>
            </Link>
          </div>
        </section>
      )}

      {/* Post Grid */}
      <section className="container mx-auto px-4 mb-16 sm:mb-20">
        <h2 className="text-xl sm:text-2xl font-black uppercase text-black mb-6 border-b-2 sm:border-b-4 border-black pb-2">
          ALL GUIDES & STRATEGIES
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {regularPosts.map((post) => (
            <article
              key={post.slug}
              className="bg-white border-3 sm:border-4 border-black shadow-[4px_4px_0px_black] sm:shadow-brutalist p-5 flex flex-col justify-between hover:-translate-y-1 transition-transform"
            >
              <div>
                <div className="flex items-center justify-between text-[10px] sm:text-xs font-black uppercase tracking-wider mb-2">
                  <span className="bg-black text-[#FFDE59] px-2 py-0.5">{post.category}</span>
                  <span className="text-black/60 flex items-center gap-1 font-bold">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-black uppercase text-black mb-2 leading-snug">
                  <Link href={`/blog/${post.slug}`} className="hover:underline">
                    {post.title}
                  </Link>
                </h3>
                <p className="text-xs font-bold text-black/75 uppercase leading-relaxed mb-5">
                  {post.excerpt}
                </p>
              </div>

              <div className="pt-3 border-t-2 border-black/10">
                <Link
                  href={`/blog/${post.slug}`}
                  className="font-black text-xs uppercase tracking-wider text-black hover:text-[#FFDE59] hover:bg-black px-3 py-2 border-2 border-black inline-flex items-center gap-2 transition-colors w-full justify-between"
                >
                  <span>Read Guide</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA Box */}
      <section className="container mx-auto px-4">
        <div className="bg-black text-white border-3 sm:border-4 border-black shadow-[4px_4px_0px_#FFDE59] sm:shadow-brutalist p-6 sm:p-10 text-center max-w-2xl mx-auto">
          <Sparkles className="w-6 h-6 text-[#FFDE59] mx-auto mb-3" />
          <h3 className="text-xl sm:text-2xl md:text-3xl font-black uppercase text-white mb-2">
            Want Strategy Advice for Your Brand?
          </h3>
          <p className="text-xs sm:text-sm font-bold text-white/80 uppercase max-w-md mx-auto mb-5 leading-relaxed">
            Connect with our team in Silvassa for a practical review of your visual marketing and video workflow.
          </p>
          <a href="https://wa.me/919328603748" target="_blank" rel="noreferrer" className="inline-block w-full sm:w-auto">
            <Button className="w-full sm:w-auto bg-[#FFDE59] text-black hover:bg-white text-xs sm:text-sm font-black px-6 py-3.5">
              Chat With Us on WhatsApp
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
}
