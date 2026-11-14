export interface ServiceDetail {
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  overview: string;
  targetAudience: string[];
  deliverables: string[];
  processSteps: { title: string; desc: string }[];
  faqs: { q: string; a: string }[];
}

export const servicesData: ServiceDetail[] = [
  {
    slug: "social-media-marketing",
    title: "Social Media Marketing Agency in Silvassa, Vapi & Daman",
    shortTitle: "Social Media Marketing",
    tagline: "Drive real inquiries, organic reach, and brand loyalty across Instagram, Facebook, and LinkedIn.",
    metaTitle: "Social Media Marketing Agency in Silvassa & Vapi | Aaryav Studios",
    metaDescription: "Grow your business with full-suite social media marketing by Aaryav Studios. Strategy, high-retention content creation, community management & paid ad campaigns across Silvassa, Vapi & Daman.",
    keywords: [
      "social media marketing agency in silvassa",
      "social media marketing vapi",
      "social media management daman",
      "instagram marketing agency silvassa",
      "digital marketing company silvassa",
    ],
    overview:
      "Aaryav Studios provides data-driven, creative social media marketing for local enterprises, manufacturing brands, hospitality venues, and retail businesses in Silvassa, Vapi, Daman, and Dadra & Nagar Haveli. We build customized content calendars, produce high-converting vertical video reels, manage daily audience engagement, and run performance ad campaigns that turn passive scrollers into paying clients.",
    targetAudience: [
      "Retailers & Showrooms in Silvassa & Vapi seeking footfall and local inquiries.",
      "Hospitality, Resorts & Restaurants in Daman & Silvassa aiming to attract tourists and weekend travelers.",
      "Manufacturing & B2B brands in Silvassa & Vapi Industrial Zones requiring LinkedIn and executive brand authority.",
      "Healthcare, Real Estate, and Educational institutions needing trusted regional visibility.",
    ],
    deliverables: [
      "Monthly Creative Strategy & Competitive Competitor Gap Analysis",
      "Professional Vertical Video Production (Reels, Shorts, TikTok)",
      "High-Impact Carousel Designs & Promotional Visual Assets",
      "Caption Copywriting, Hashtag Strategy & Local Geotag Optimization",
      "Community Management & Direct Message (DM) Lead Routing",
      "Monthly Transparent Growth & Conversion Analytics Reporting",
    ],
    processSteps: [
      {
        title: "1. Brand & Audience Audit",
        desc: "We analyze your current social presence, regional competitor benchmarks, and target buyer persona in the Silvassa/Vapi/Daman belt.",
      },
      {
        title: "2. Visual Content Blueprint",
        desc: "We develop an editorial calendar combining hook-driven reels, educational carousels, and client trust-builders.",
      },
      {
        title: "3. On-Site Production & Editing",
        desc: "Our production team films on-location or edits your raw footage with kinetic motion typography and professional color grading.",
      },
      {
        title: "4. Deployment & Community Growth",
        desc: "We post during peak regional engagement hours, monitor incoming leads, and refine distribution based on real conversion data.",
      },
    ],
    faqs: [
      {
        q: "How does social media marketing help businesses in Silvassa and Vapi?",
        a: "Consumers and procurement heads in South Gujarat and Dadra & Nagar Haveli evaluate businesses on Instagram and LinkedIn before inquiring. Consistent, high-quality video content builds immediate trust, enhances local brand recall, and provides a direct pipeline for customer WhatsApp inquiries.",
      },
      {
        q: "Do you handle shooting and production on-site in Silvassa?",
        a: "Yes. Our studio is based in Silvassa (Kilvani Naka, Premaldeep Square). Our camera crew routinely shoots on-site across Silvassa, Vapi GIDC, Daman beachfront properties, and surrounding industrial zones.",
      },
      {
        q: "What platforms do you specialize in?",
        a: "We specialize primarily in Instagram and YouTube for high-retention visual content, and LinkedIn and Facebook for B2B industrial lead generation.",
      },
    ],
  },
  {
    slug: "reels-editing",
    title: "Instagram Reels & YouTube Shorts Video Editing Agency",
    shortTitle: "Reels & Shorts Editing",
    tagline: "High-retention vertical editing engineered for algorithm momentum, watch-time, and conversion.",
    metaTitle: "Reels Editing Agency in Silvassa & Vapi | High-Retention Shorts",
    metaDescription: "Professional Instagram Reels, YouTube Shorts & TikTok video editing by Aaryav Studios. Hook-driven pacing, kinetic subtitles, sound design & dynamic color science.",
    keywords: [
      "reels editing agency in silvassa",
      "instagram reels editor vapi",
      "youtube shorts video editing daman",
      "vertical video editor india",
      "high retention video editing",
    ],
    overview:
      "Vertical video is the undisputed currency of social media discovery. Aaryav Studios crafts viral-ready, high-retention vertical content for creators, founders, and regional brands. We implement algorithmic retention tactics — including strong visual 3-second hooks, dynamic sound effects, kinetic typography, and seamless loop transitions — keeping viewers engaged from the first second to the final frame.",
    targetAudience: [
      "Content Creators & Influencers looking to scale impressions and monetize attention.",
      "Founders & Personal Brands establishing thought leadership on Instagram and LinkedIn.",
      "E-Commerce & D2C Brands requiring high-converting UGC and product demo reels.",
      "Local Businesses in Silvassa & Vapi needing engaging visual promotions.",
    ],
    deliverables: [
      "Pattern-Interrupt Hooks designed to halt mindless scrolling within 3 seconds",
      "Kinetic Animated Subtitles & B-Roll integration (Alex Hormozi / Ali Abdaal styles)",
      "Layered Audio Design (SFX, risers, whooshes, matched background music)",
      "Color Correction & Contrast Optimization for mobile OLED screens",
      "Exported in 9:16 1080x1920 (4K available) ready for immediate posting",
    ],
    processSteps: [
      {
        title: "1. Footage Ingestion & Script Review",
        desc: "You send raw recordings or we shoot in-house; our editors identify high-impact moments and punchlines.",
      },
      {
        title: "2. Tight Assembly & Pacing",
        desc: "We cut pauses, dead air, and filler words to maximize information density and viewer retention.",
      },
      {
        title: "3. Kinetic Motion & Graphics",
        desc: "We incorporate custom branding, graphic overlays, screenshots, and visual metaphors.",
      },
      {
        title: "4. Multi-Layer Audio Polish",
        desc: "Sound effects, dialogue leveling, and royalty-free trending music are balanced for maximum punch.",
      },
    ],
    faqs: [
      {
        q: "What is the turnaround time for a batch of reels?",
        a: "Standard turnaround for weekly batches of 5 to 7 reels is typically 48 to 72 hours following receipt of footage and creative alignment.",
      },
      {
        q: "Can you edit raw smartphone footage?",
        a: "Absolutely. With professional color correction, noise reduction, and sound leveling, raw iPhone/Android recordings can look studio-grade.",
      },
    ],
  },
  {
    slug: "video-editing",
    title: "Professional Video Editing & Post-Production Agency",
    shortTitle: "Video Editing",
    tagline: "Turn raw multi-camera recordings into compelling visual narratives and cinematic masterpieces.",
    metaTitle: "Video Editing Agency in Silvassa | Post-Production Services",
    metaDescription: "Professional video editing services by Aaryav Studios. Long-form YouTube documentaries, corporate interviews, podcast production & cinematic cuts for businesses in Silvassa & Vapi.",
    keywords: [
      "video editing agency in silvassa",
      "video editing services vapi",
      "post production agency daman",
      "youtube video editor india",
      "corporate video editing silvassa",
    ],
    overview:
      "Aaryav Studios provides end-to-end post-production for brands, educational YouTube channels, corporate leaders, and filmmakers. From raw multi-cam syncing to final master delivery, our post-production suite handles timeline editing, pacing, narrative structuring, audio restoration, and graphic design to deliver television-grade output.",
    targetAudience: [
      "YouTube Creators & Educators producing long-form visual documentaries and explainers.",
      "Corporate Companies in Silvassa & Vapi producing internal training or brand films.",
      "Podcasters requiring multi-camera switching, audio cleaning, and social snippet cuts.",
      "Agencies looking to outsource post-production overflow to a reliable team.",
    ],
    deliverables: [
      "Multi-Camera Synchronization & Dialogue Editing",
      "Narrative Story Structuring & Archival B-Roll Curation",
      "Custom Motion Lower Thirds, Intros & Outros",
      "Dialogue Noise Reduction, EQ & Master Audio Leveling",
      "Multiple Aspect Ratio Deliverables (16:9 for YouTube/Web, 9:16 for Social)",
    ],
    processSteps: [
      {
        title: "1. Media Organization",
        desc: "Footage is ingested, organized by scenes, multi-cams synced, and audio dialogue aligned.",
      },
      {
        title: "2. Rough Cut & Story Flow",
        desc: "We establish the core narrative arc and rhythm before adding visual embellishments.",
      },
      {
        title: "3. Motion Design & Visual Polish",
        desc: "Text graphics, diagrams, sound design, and color grading are applied.",
      },
      {
        title: "4. Collaborative Review & Final Delivery",
        desc: "Review links are provided for frame-accurate client feedback before full 4K render delivery.",
      },
    ],
    faqs: [
      {
        q: "What software do your editors use?",
        a: "We edit primarily in Adobe Premiere Pro, DaVinci Resolve Studio for color science, and After Effects for motion graphics.",
      },
      {
        q: "How do we transfer large video files to your team?",
        a: "We provide dedicated cloud storage links (Google Drive / Frame.io / Cloudinary), or clients in Silvassa and Vapi can provide physical SSD drives directly at our office.",
      },
    ],
  },
  {
    slug: "video-production",
    title: "Commercial & Corporate Video Production Services",
    shortTitle: "Video Production",
    tagline: "From script to screen: television-quality filming, drone cinematography, and corporate stories.",
    metaTitle: "Commercial & Corporate Video Production in Silvassa | Aaryav Studios",
    metaDescription: "Full-service video production agency in Silvassa, Vapi & Daman. Factory tours, brand commercials, corporate documentaries & aerial drone cinematography.",
    keywords: [
      "video production agency in silvassa",
      "corporate video production vapi",
      "commercial video production daman",
      "industrial shoot silvassa",
      "drone cinematography vapi",
    ],
    overview:
      "Aaryav Studios operates an on-location and studio production pipeline throughout Silvassa, Vapi, Daman, and surrounding industrial hubs. We combine cinema cameras, professional three-point lighting, licensed drone cinematography, and creative direction to produce brand films that command prestige and deliver tangible commercial outcomes.",
    targetAudience: [
      "Industrial & Manufacturing Facilities in Silvassa & Vapi GIDC wanting factory overview films.",
      "Real Estate Developers showcasing architectural villas, townships, and commercial spaces.",
      "Hospitality & Luxury Resorts in Daman requiring experiential tourism video tours.",
      "Retail & Consumer Brands launching flagship products or television commercials.",
    ],
    deliverables: [
      "Creative Concepting, Scriptwriting & Storyboard Development",
      "Cinema Camera Filming (4K/6K RAW capture with cinema lenses)",
      "Professional Audio Capture (Lavalier, Shotgun, Boom mics)",
      "Studio & Location Lighting Rigs",
      "Licensed Aerial Drone Cinematography",
      "Full Post-Production with Color Grading and Sound Mixing",
    ],
    processSteps: [
      {
        title: "1. Pre-Production & Planning",
        desc: "Scripting, shot listing, location scouting, talent coordination, and scheduling.",
      },
      {
        title: "2. Production & Filming",
        desc: "Our director and camera team execute the shoot on-location with precision lighting and audio.",
      },
      {
        title: "3. Post-Production Finishing",
        desc: "Editing, sound mixing, color correction, and client revisions.",
      },
      {
        title: "4. Final Mastering",
        desc: "High-bitrate deliverables prepared for digital broadcast, social media, and web streaming.",
      },
    ],
    faqs: [
      {
        q: "Do you provide drone filming in Dadra & Nagar Haveli and Daman?",
        a: "Yes, our team operates professional drones equipped with high-resolution sensors for industrial plant fly-throughs, real estate developments, and landscape overviews, in compliance with local aviation regulations.",
      },
      {
        q: "Can you provide scriptwriting and voiceovers?",
        a: "Yes, we handle complete scriptwriting and provide multilingual professional voiceover artists in English, Hindi, and Gujarati.",
      },
    ],
  },
  {
    slug: "color-grading",
    title: "Cinematic Color Grading & Visual Finishing Studio",
    shortTitle: "Color Grading",
    tagline: "Elevate your footage with cinema-grade color science, mood enhancement, and dynamic range.",
    metaTitle: "Color Grading Studio in Silvassa & Vapi | DaVinci Resolve",
    metaDescription: "Professional color grading services by Aaryav Studios. Log conversion, skin tone protection, HDR color finishing, and film emulation in DaVinci Resolve Studio.",
    keywords: [
      "color grading studio silvassa",
      "color grading services vapi",
      "davinci resolve colorist india",
      "film color grading daman",
      "post production colorist",
    ],
    overview:
      "Color grading is the difference between amateur footage and a memorable cinematic experience. At Aaryav Studios, our colorists work on calibrated displays using DaVinci Resolve Studio. We transform flat RAW and LOG profiles into rich, vivid visual tones with natural skin tones, film grain emulation, and consistent shot-to-shot matching.",
    targetAudience: [
      "Directors and Videographers requiring high-end color grading for films and ads.",
      "Brands wanting consistent brand color palette adherence across all video campaigns.",
      "Music Video Producers seeking stylized visual atmospheres and neon aesthetics.",
    ],
    deliverables: [
      "Accurate Rec.709 & HDR Color Space Transform",
      "Balanced Contrast, Exposure, and White Balance across mixed cameras",
      "Skin Tone Isolation & Natural Hue Protection",
      "Creative Film Emulation (Kodak, Fuji film print profiles)",
      "ProRes 422 HQ & Master Web Exports",
    ],
    processSteps: [
      {
        title: "1. Conforming & Color Prep",
        desc: "We ingest XML/EDL timelines and verify color management pipelines across all camera source profiles.",
      },
      {
        title: "2. Primary Balance",
        desc: "Shot-to-shot matching, luminance leveling, and white balance correction across every cut.",
      },
      {
        title: "3. Secondary Creative Grading",
        desc: "Mood development, vignette separation, sky enhancement, and skin tone retouching.",
      },
      {
        title: "4. Delivery & Quality Check",
        desc: "Final master render verified on calibrated displays and multi-device consumer viewports.",
      },
    ],
    faqs: [
      {
        q: "Can you color grade footage filmed on mirrorless cameras like Sony, Canon, or Panasonic?",
        a: "Yes. Whether shot in S-Log3, C-Log, V-Log, Apple ProRes LOG, or standard profiles, we map your color space accurately.",
      },
      {
        q: "Do you offer test grade stills before starting full timelines?",
        a: "Yes, we provide 2 to 3 graded hero stills across different lighting scenarios for your creative sign-off before grading the entire sequence.",
      },
    ],
  },
  {
    slug: "branding-content",
    title: "Brand Development & Creative Content Creation",
    shortTitle: "Branding & Content",
    tagline: "Build a memorable, commanding brand identity across digital touchpoints and real-world media.",
    metaTitle: "Brand Development & Content Creation Agency | Silvassa & Vapi",
    metaDescription: "Complete brand development and creative content creation by Aaryav Studios. Visual identity design, commercial photography, brand messaging & social creative assets.",
    keywords: [
      "brand development agency silvassa",
      "content creation agency vapi",
      "creative agency daman",
      "commercial photography silvassa",
      "brand design services vapi",
    ],
    overview:
      "Strong businesses are built on unforgettable brands. Aaryav Studios helps ambitious enterprises in Silvassa, Vapi, and Daman discover and express their brand identity. From foundational logo systems, typography, and color guidelines to commercial photography and social media assets, we craft unified brand collateral that commands respect.",
    targetAudience: [
      "New Ventures & Startups launching products in Gujarat and Dadra & Nagar Haveli.",
      "Established Industrial & Family Businesses rebranding for contemporary markets.",
      "Retail Showrooms & Restaurants seeking cohesive aesthetic packaging and signage.",
    ],
    deliverables: [
      "Brand Positioning & Core Value Proposition Framework",
      "Logo System, Typography Rules & Master Color Palettes",
      "Comprehensive Digital & Print Brand Guidelines Manual",
      "Commercial Product & Commercial Portrait Photography",
      "Social Media Launch Kit (Templates, Covers, Story Highlights)",
    ],
    processSteps: [
      {
        title: "1. Brand Discovery & Competitor Analysis",
        desc: "We understand your heritage, target customer expectations, and competitive differentiation.",
      },
      {
        title: "2. Visual Identity Conceptualization",
        desc: "Developing logo marks, typography pairings, and color palettes that resonate emotionally.",
      },
      {
        title: "3. Commercial Asset Creation",
        desc: "Executing commercial photo shoots, iconography, and promotional collateral.",
      },
      {
        title: "4. Style Guide Handover",
        desc: "Providing all vector master files and a clear manual ensuring effortless brand consistency.",
      },
    ],
    faqs: [
      {
        q: "What files do we receive after a branding project?",
        a: "You receive vector files (AI, EPS, SVG), transparent PNGs in light/dark variants, print-ready PDF formats, and font usage licenses.",
      },
      {
        q: "Do you also do product photography at our factory or store?",
        a: "Yes, our photography gear and lighting are fully portable; we set up on-site at your premises for clean, high-resolution product and team captures.",
      },
    ],
  },
];

