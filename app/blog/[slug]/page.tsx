import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { blogPosts, BlogPost } from "@/data/blogPosts";
import { Button } from "@/components/Button";
import { Clock, Calendar, ArrowLeft, Phone, Tag } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    keywords: post.keywords,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      url: `https://studios.aaryavtech.online/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date,
      authors: [post.author.name],
      images: [
        {
          url: "/hero.png",
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.metaDescription,
    },
  };
}

export default async function SingleBlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  // Schema.org Article JSON-LD
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDescription,
    image: "https://studios.aaryavtech.online/hero.png",
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Organization",
      name: "Aaryav Studios",
      url: "https://studios.aaryavtech.online",
    },
    publisher: {
      "@type": "Organization",
      name: "Aaryav Studios",
      logo: {
        "@type": "ImageObject",
        url: "https://studios.aaryavtech.online/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://studios.aaryavtech.online/blog/${post.slug}`,
    },
  };

  return (
    <div className="pt-28 sm:pt-36 pb-16 sm:pb-24 bg-white min-h-screen overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      {/* Breadcrumb Navigation */}
      <div className="container mx-auto px-4 mb-6 sm:mb-8">
        <div className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs font-black uppercase tracking-wider text-black/60 overflow-x-auto no-scrollbar">
          <Link href="/" className="hover:text-black shrink-0">HOME</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-black shrink-0">BLOG</Link>
          <span>/</span>
          <span className="text-black bg-[#FFDE59] px-2 py-0.5 border border-black truncate max-w-[200px] sm:max-w-xs">{post.title}</span>
        </div>
      </div>

      {/* Article Container */}
      <article className="container mx-auto px-4 max-w-3xl">
        <header className="mb-8 sm:mb-10">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-[10px] sm:text-xs font-black uppercase tracking-wider mb-3">
            <span className="bg-black text-[#FFDE59] px-2.5 py-0.5">{post.category}</span>
            <span className="flex items-center gap-1 text-black/70">
              <Calendar className="w-3 h-3" />
              {post.date}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1 text-black/70">
              <Clock className="w-3 h-3" />
              {post.readTime}
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl md:text-5xl brutalist-heading uppercase text-black mb-4 sm:mb-6 leading-tight">
            {post.title}
          </h1>

          <div className="p-3 sm:p-4 bg-[#FFDE59] border-2 sm:border-4 border-black shadow-[3px_3px_0px_black] sm:shadow-brutalist flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
            <div className="text-[11px] sm:text-xs font-black uppercase text-black">
              <span>BY {post.author.name.toUpperCase()}</span> — <span>{post.author.role.toUpperCase()}</span>
            </div>
            <a
              href="https://wa.me/919328603748"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-[10px] sm:text-xs font-black bg-black text-[#FFDE59] px-2.5 py-1 uppercase hover:bg-white hover:text-black transition-colors"
            >
              <Phone className="w-3 h-3" />
              <span>CONSULT AN EXPERT</span>
            </a>
          </div>
        </header>

        {/* Introduction */}
        <div className="text-base sm:text-lg font-bold text-black/90 leading-relaxed mb-8 pb-6 border-b-2 sm:border-b-4 border-black">
          {post.content.introduction}
        </div>

        {/* Body Sections */}
        <div className="space-y-8 sm:space-y-10 mb-12">
          {post.content.sections.map((section, idx) => (
            <section key={idx} className="space-y-3">
              <h2 className="text-xl sm:text-2xl md:text-3xl brutalist-heading uppercase text-black">
                {section.heading}
              </h2>
              {section.paragraphs.map((p, pIdx) => (
                <p key={pIdx} className="text-sm sm:text-base font-bold text-black/80 leading-relaxed">
                  {p}
                </p>
              ))}
            </section>
          ))}
        </div>

        {/* Key Takeaways */}
        <div className="bg-black text-white border-2 sm:border-4 border-black p-5 sm:p-8 shadow-[4px_4px_0px_#FFDE59] mb-10">
          <h3 className="text-lg sm:text-2xl font-black uppercase text-[#FFDE59] mb-3">
            SUMMARY & CONCLUSION
          </h3>
          <p className="text-xs sm:text-sm md:text-base font-bold uppercase text-white/90 leading-relaxed">
            {post.content.conclusion}
          </p>
        </div>

        {/* Related Services Links */}
        <div className="p-4 sm:p-6 bg-white border-2 sm:border-4 border-black shadow-[3px_3px_0px_black] mb-10">
          <h3 className="text-sm sm:text-base font-black uppercase text-black mb-3 flex items-center gap-1.5">
            <Tag className="w-4 h-4" />
            <span>EXPLORE RELATED SERVICES</span>
          </h3>
          <div className="flex flex-wrap gap-2">
            <Link
              href="/services/social-media-marketing"
              className="text-[10px] sm:text-xs font-black bg-[#FFDE59] hover:bg-black hover:text-[#FFDE59] text-black px-2.5 py-1.5 border border-black uppercase transition-colors"
            >
              SOCIAL MEDIA MARKETING
            </Link>
            <Link
              href="/services/reels-editing"
              className="text-[10px] sm:text-xs font-black bg-[#FFDE59] hover:bg-black hover:text-[#FFDE59] text-black px-2.5 py-1.5 border border-black uppercase transition-colors"
            >
              REELS & SHORTS EDITING
            </Link>
            <Link
              href="/locations/silvassa"
              className="text-[10px] sm:text-xs font-black bg-white hover:bg-black hover:text-white text-black px-2.5 py-1.5 border border-black uppercase transition-colors"
            >
              SILVASSA AGENCY
            </Link>
          </div>
        </div>

        {/* Author & CTA */}
        <div className="bg-[#FFDE59] border-2 sm:border-4 border-black shadow-[4px_4px_0px_black] p-6 sm:p-8 text-center mb-12">
          <h3 className="text-xl sm:text-2xl font-black uppercase text-black mb-2">
            Ready to Grow Your Brand?
          </h3>
          <p className="text-xs sm:text-sm font-bold uppercase text-black/80 max-w-md mx-auto mb-5 leading-relaxed">
            Let Aaryav Studios engineer high-converting video and social media campaigns for your business.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <a href="https://wa.me/919328603748" target="_blank" rel="noreferrer" className="w-full sm:w-auto">
              <Button className="w-full bg-black text-[#FFDE59] hover:bg-white hover:text-black py-3 px-6 text-xs sm:text-sm">
                <Phone className="w-3.5 h-3.5 mr-1.5 inline" />
                Chat on WhatsApp
              </Button>
            </a>
            <Link href="/blog" className="w-full sm:w-auto">
              <Button className="w-full bg-white text-black hover:bg-black hover:text-[#FFDE59] py-3 px-5 text-xs sm:text-sm border-2 border-black">
                <ArrowLeft className="w-3.5 h-3.5 mr-1.5 inline" />
                Back to Blog
              </Button>
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
