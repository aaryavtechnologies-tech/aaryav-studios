export interface LocationDetail {
  slug: string;
  cityName: string;
  headline: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  localContext: string;
  physicalOfficeNote: string;
  industriesServed: { name: string; desc: string }[];
  localServices: string[];
  faqs: { q: string; a: string }[];
}

export const locationsData: LocationDetail[] = [
  {
    slug: "silvassa",
    cityName: "Silvassa",
    headline: "Social Media Marketing & Video Production Agency in Silvassa",
    metaTitle: "Social Media Marketing Agency in Silvassa | Video Production | Aaryav Studios",
    metaDescription: "Aaryav Studios is Silvassa's dedicated creative agency based at Kilvani Naka. We specialize in high-retention video editing, social media management, Instagram reels & commercial video production.",
    keywords: [
      "social media marketing agency in silvassa",
      "video editing in silvassa",
      "digital marketing agency in silvassa",
      "reels editor silvassa",
      "creative agency silvassa",
    ],
    localContext:
      "Silvassa is a rapidly expanding commercial hub where modern consumer businesses, retail showrooms, educational centers, and established industrial conglomerates compete for attention. In today's digital landscape, local word-of-mouth is amplified through Instagram Reels and professional video storytelling. Aaryav Studios operates right here in the heart of Silvassa at Premaldeep Square, Kilvani Naka, delivering hands-on creative partnerships with immediate turnaround.",
    physicalOfficeNote: "Official Studio Headquarters: Office no 601, 6th Floor, Premaldeep Square, Kilvani Naka, Silvassa 396230. In-person meetings and production shoots welcome.",
    industriesServed: [
      {
        name: "Retail Showrooms & Fashion Outlets",
        desc: "Transforming new collections and seasonal launches into viral Instagram Reels that drive local foot traffic and direct WhatsApp inquiries.",
      },
      {
        name: "Manufacturing Plants & Industrial Units",
        desc: "High-definition corporate profile films, machinery walk-throughs, and recruitment video content for Silvassa's thriving industrial sector.",
      },
      {
        name: "Cafes, Restaurants & Hospitality",
        desc: "Appetite-inducing culinary shorts, aesthetic ambience showcases, and event coverage designed for high local shareability.",
      },
      {
        name: "Real Estate & Architecture",
        desc: "Cinematic drone walk-throughs, villa showcases, and developer project launches across Dadra & Nagar Haveli.",
      },
    ],
    localServices: [
      "Daily/Weekly Social Media Management (Instagram & Facebook)",
      "High-Retention Reels & YouTube Shorts Video Editing",
      "Commercial Brand Filming & Drone Aerial Cinematography",
      "Cinematic Color Grading & Audio Restoration",
      "Professional Product & Executive Commercial Photography",
    ],
    faqs: [
      {
        q: "Where is Aaryav Studios located in Silvassa?",
        a: "Our studio is located at Kilvani Naka, Office no 601, 6th Floor, Premaldeep Square (Opposite Pravin Tailor), Silvassa.",
      },
      {
        q: "Can you film directly at our facility or store in Silvassa?",
        a: "Yes. Our filming gear is portable and we regularly shoot on-location across Silvassa, Naroli, Dadra, and surrounding industrial belts.",
      },
    ],
  },
  {
    slug: "vapi",
    cityName: "Vapi",
    headline: "Digital Marketing, Reels & Corporate Video Production for Vapi Businesses",
    metaTitle: "Social Media & Video Production Agency for Vapi | Aaryav Studios",
    metaDescription: "Drive real business inquiries in Vapi with Aaryav Studios. We deliver high-retention video editing, B2B corporate films, GIDC factory showcases & social media marketing for Vapi businesses.",
    keywords: [
      "social media marketing vapi",
      "video editing services vapi",
      "corporate video production vapi",
      "digital marketing agency vapi",
      "vapi gidc video shoot",
    ],
    localContext:
      "Vapi is one of Asia's most prominent industrial corridors (Vapi GIDC), known for chemical, paper, packaging, textile, and engineering excellence, alongside a booming retail sector along Koparli Road and the town center. Modern B2B leaders and local retail merchants in Vapi require high-caliber video to project institutional authority to global procurement partners and capture local consumer spend. Located just 20-25 minutes away in Silvassa, Aaryav Studios serves Vapi as our immediate neighboring market.",
    physicalOfficeNote: "We serve Vapi via on-location video shoots and dedicated on-site consultations, operating from our central studio in nearby Silvassa (approx. 20-25 mins drive from Vapi GIDC).",
    industriesServed: [
      {
        name: "Vapi GIDC Manufacturing & Engineering",
        desc: "Precision B2B industrial films showcasing international standard manufacturing lines, cleanrooms, and testing facilities for global export clients.",
      },
      {
        name: "Commercial Retailers & Auto Dealerships",
        desc: "Punchy, fast-paced video advertisements for retail stores, electronics hubs, and car dealerships across Vapi town.",
      },
      {
        name: "Professional Services & Medical Clinics",
        desc: "Reputation-building educational videos and doctor/consultant personal branding reels that build regional patient trust.",
      },
    ],
    localServices: [
      "Industrial Plant & Facility Walkthrough Video Production",
      "B2B LinkedIn Brand Strategy & Executive Content",
      "Short-Form Reels Editing for Vapi Retailers & Brands",
      "Licensed Aerial Drone Inspections & Marketing Filming",
      "Paid Performance Advertising across Gujarat & Maharashtra Corridors",
    ],
    faqs: [
      {
        q: "Do you have clients or shooting availability in Vapi GIDC?",
        a: "Yes, our team frequently conducts factory tours, industrial profile shoots, and executive interviews throughout Vapi GIDC, Koparli, and Chala.",
      },
      {
        q: "How fast can you visit our factory in Vapi for an initial consultation?",
        a: "Because we are located in neighboring Silvassa (under 30 minutes away), we can typically arrange an on-site visit or shoot within 24 to 48 hours.",
      },
    ],
  },
  {
    slug: "daman",
    cityName: "Daman",
    headline: "Creative Video Production & Social Media Agency for Daman",
    metaTitle: "Creative Content & Video Production Agency in Daman | Aaryav Studios",
    metaDescription: "Elevate your Daman brand with cinematic video production and social media marketing. Resort showcases, tourism content, hospitality reels & commercial filmmaking by Aaryav Studios.",
    keywords: [
      "creative agency daman",
      "social media marketing daman",
      "hotel video shoot daman",
      "video production daman",
      "resort promotion reels daman",
    ],
    localContext:
      "Daman's unique economic ecosystem blends historic coastal tourism, luxury beachfront hospitality, coastal dining, water sports, and thriving industrial pockets in Somnath and Dabhel. In Daman's tourism and hospitality sector, visual aesthetics are everything — guests book weekend stays and destination events based on compelling Instagram Reels and cinematic drone views. Aaryav Studios brings cinema cameras and viral editing expertise directly to Daman venues.",
    physicalOfficeNote: "We frequently shoot on-location across Devka Beach, Jampore Beach, Nani Daman, and Somnath industrial areas, coordinated through our central Silvassa production hub.",
    industriesServed: [
      {
        name: "Beach Resorts, Hotels & Weekend Retreats",
        desc: "Cinematic experiential tours, drone shoreline captures, and luxury room walkthroughs that maximize direct weekend booking revenue.",
      },
      {
        name: "Restaurants, Bars & Beach Clubs",
        desc: "Dynamic food and beverage cinematography capturing lively weekend atmospheres and signature dishes for social media buzz.",
      },
      {
        name: "Industrial Facilities in Somnath & Dabhel",
        desc: "Corporate safety and export-oriented industrial profile videos for manufacturing units based in Daman.",
      },
    ],
    localServices: [
      "Experiential Resort & Hotel Cinematography",
      "Coastal & Beachfront Drone Video Capture",
      "Instagram Reels Campaigns for Tourist Discovery",
      "Cinematic Color Grading with Vibrant Coastal Tones",
      "Local Brand Commercials & Event Content Creation",
    ],
    faqs: [
      {
        q: "Can you film drone shots along Daman's beaches?",
        a: "Yes, we operate licensed professional drone equipment capable of high-bitrate 4K footage along Devka and Jampore beachfronts, observing all necessary security clearances.",
      },
      {
        q: "How do you help Daman resorts attract tourists from Mumbai and Gujarat?",
        a: "We produce algorithm-targeted Instagram Reels featuring weekend getaways, pool views, and culinary experiences, combined with targeted geo-fenced promotions reaching travelers in Surat, Ahmedabad, and Mumbai.",
      },
    ],
  },
];

