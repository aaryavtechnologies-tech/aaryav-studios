import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { blogPosts, BlogPost } from "@/data/blogPosts";
import { Button } from "@/components/Button";
import { Clock, Calendar, ArrowLeft, Phone, Share2, Tag, CheckCircle2 } from "lucide-react";

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
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      {/* Breadcrumb Navigation */}
      <div className="container mx-auto px-4 mb-8">
        <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-black/60">
          <Link href="/" className="hover:text-black">HOME</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-black">BLOG</Link>
          <span>/</span>
          <span className="text-black bg-[#FFDE59] px-2 py-0.5 border border-black truncate max-w-xs">{post.title}</span>
        </div>
      </div>

      {/* Article Header */}
      <article className="container mx-auto px-4 max-w-4xl">
        <header className="mb-12">
          <div className="flex flex-wrap items-center gap-3 text-xs font-black uppercase tracking-wider mb-4">
            <span className="bg-black text-[#FFDE59] px-3 py-1">{post.category}</span>
            <span className="flex items-center gap-1 text-black/70">
              <Calendar className="w-3.5 h-3.5" />
              {post.date}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1 text-black/70">
              <Clock className="w-3.5 h-3.5" />
              {post.readTime}
            </span>
          </div>

          <h1 className="text-3xl md:text-6xl brutalist-heading uppercase text-black mb-6 leading-tight">
            {post.title}
          </h1>

          <div className="p-4 bg-[#FFDE59] border-4 border-black shadow-brutalist flex items-center justify-between">
            <div className="text-xs md:text-sm font-black uppercase text-black">
              <span>BY {post.author.name.toUpperCase()}</span> — <span>{post.author.role.toUpperCase()}</span>
            </div>
            <a
              href="https://wa.me/919328603748"
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-black bg-black text-[#FFDE59] px-3 py-1 uppercase hover:bg-white hover:text-black transition-colors"
            >
              <Phone className="w-3 h-3" />
              <span>CONSULT AN EXPERT</span>
            </a>
          </div>
        </header>

        {/* Introduction */}
        <div className="text-lg md:text-xl font-bold text-black/90 leading-relaxed mb-10 pb-8 border-b-4 border-black">
          {post.content.introduction}
        </div>

        {/* Body Sections */}
        <div className="space-y-10 mb-14">
          {post.content.sections.map((section, idx) => (
            <section key={idx} className="space-y-4">
              <h2 className="text-2xl md:text-3xl brutalist-heading uppercase text-black">
                {section.heading}
              </h2>
              {section.paragraphs.map((p, pIdx) => (
                <p key={pIdx} className="text-base md:text-lg font-bold text-black/80 leading-relaxed">
                  {p}
                </p>
              ))}
            </section>
          ))}
        </div>

        {/* Key Takeaways Box */}
        <div className="bg-black text-white border-4 border-black p-8 shadow-brutalist mb-12">
          <h3 className="text-2xl font-black uppercase text-[#FFDE59] mb-4">
            SUMMARY & CONCLUSION
          </h3>
          <p className="text-base font-bold uppercase text-white/90 leading-relaxed">
            {post.content.conclusion}
          </p>
        </div>

        {/* Related Services Internal Links */}
        <div className="p-6 bg-white border-4 border-black shadow-brutalist mb-12">
          <h3 className="text-lg font-black uppercase text-black mb-4 flex items-center gap-2">
            <Tag className="w-5 h-5" />
            <span>EXPLORE RELATED SERVICES AT AARYAV STUDIOS</span>
          </h3>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/services/social-media-marketing"
              className="text-xs font-black bg-[#FFDE59] hover:bg-black hover:text-[#FFDE59] text-black px-3 py-2 border-2 border-black uppercase transition-colors"
            >
              SOCIAL MEDIA MARKETING
            </Link>
            <Link
              href="/services/reels-editing"
              className="text-xs font-black bg-[#FFDE59] hover:bg-black hover:text-[#FFDE59] text-black px-3 py-2 border-2 border-black uppercase transition-colors"
            >
              REELS & SHORTS EDITING
            </Link>
            <Link
              href="/services/video-production"
              className="text-xs font-black bg-[#FFDE59] hover:bg-black hover:text-[#FFDE59] text-black px-3 py-2 border-2 border-black uppercase transition-colors"
            >
              COMMERCIAL VIDEO PRODUCTION
            </Link>
            <Link
              href="/locations/silvassa"
              className="text-xs font-black bg-white hover:bg-black hover:text-white text-black px-3 py-2 border-2 border-black uppercase transition-colors"
            >
              SILVASSA AGENCY
            </Link>
          </div>
        </div>

        {/* Author & CTA */}
        <div className="bg-[#FFDE59] border-4 border-black shadow-brutalist p-8 text-center mb-16">
          <h3 className="text-2xl md:text-3xl font-black uppercase text-black mb-3">
            READY TO GROW YOUR BUSINESS IN SILVASSA, VAPI OR DAMAN?
          </h3>
          <p className="text-sm font-bold uppercase text-black/80 max-w-xl mx-auto mb-6">
            Let Aaryav Studios engineer high-converting video and social media campaigns for your brand.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://wa.me/919328603748" target="_blank" rel="noreferrer">
              <Button className="bg-black text-[#FFDE59] hover:bg-white hover:text-black py-4 px-8 text-base">
                <Phone className="w-4 h-4 mr-2 inline" />
                START A CONVERSATION ON WHATSAPP
              </Button>
            </a>
            <Link href="/blog">
              <Button className="bg-white text-black hover:bg-black hover:text-[#FFDE59] py-4 px-6 text-base border-2 border-black">
                <ArrowLeft className="w-4 h-4 mr-2 inline" />
                BACK TO BLOG
              </Button>
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}

