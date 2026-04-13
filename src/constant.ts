/** Site-wide copy, URLs, and data. Edit here to update the whole project. */

// ─── Site / SEO ─────────────────────────────────────────────────────────────
export const SITE_METADATA = {
  title: "EO South Asia Founders Bridge",
  description: "EO South Asia Founders Bridge is a chapter of the Entrepreneurs' Organization (EO) that is dedicated to helping founders in South Asia grow their businesses and become more successful.",
} as const

// ─── Brand (navbar) ───────────────────────────────────────────────────────
export const NAVBAR_BRAND = {
  logoSrc: "/svg/logo.svg",
  logoAlt: "logo",
  titleLine1: "South Asia Founders Bridge",
  titleLine2: "Entrepreneurs' Organization",
} as const

// ─── Navigation ─────────────────────────────────────────────────────────────
export const CONTACT_SECTION_HREF = "/#contact-us"

export const NAV_LINKS = [
  { label: "Home", href: CONTACT_SECTION_HREF },
  { label: "About Us", href: CONTACT_SECTION_HREF },
  { label: "Services", href: CONTACT_SECTION_HREF },
  { label: "What we do", href: CONTACT_SECTION_HREF },
  { label: "Contact Us", href: CONTACT_SECTION_HREF },
] as const

export const CTA_FOOTER_NAV_PRIMARY = [
  { href: CONTACT_SECTION_HREF, label: "Home" },
  { href: CONTACT_SECTION_HREF, label: "About Us" },
  { href: CONTACT_SECTION_HREF, label: "Board" },
  { href: CONTACT_SECTION_HREF, label: "Membership" },
] as const

export const CTA_FOOTER_NAV_SECONDARY = [
  { href: CONTACT_SECTION_HREF, label: "Contact" },
  { href: CONTACT_SECTION_HREF, label: "Privacy Policy" },
  { href: CONTACT_SECTION_HREF, label: "Terms of Service" },
] as const

// ─── Contact ────────────────────────────────────────────────────────────────
export const CONTACT_EMAIL = "admin@eofb.org"
export const CONTACT_REGION_LABEL = "Operating Across South Asia India / Nepal / Bangladesh / Sri Lanka"

// ─── Social (footer CTA — real URLs) ────────────────────────────────────────
export const CTA_SOCIAL_LINKS = [
  { href: CONTACT_SECTION_HREF, src: "/svg/instragram.svg", label: "Instagram" },
  { href: CONTACT_SECTION_HREF, src: "/svg/linkedin.svg", label: "LinkedIn" },
  { href: CONTACT_SECTION_HREF, src: "/svg/twitter.svg", label: "X" },
  { href: CONTACT_SECTION_HREF, src: "/svg/facebook.svg", label: "Facebook" },
] as const

// ─── Social (placeholder # — hero) ───────────────────────────────────────────
export const HERO_SOCIAL_LINKS = [
  { name: "Instagram", href: CONTACT_SECTION_HREF, icon: "/svg/instragram.svg" },
  { name: "LinkedIn", href: CONTACT_SECTION_HREF, icon: "/svg/linkedin.svg" },
  { name: "X", href: CONTACT_SECTION_HREF, icon: "/svg/twitter.svg" },
  { name: "Facebook", href: CONTACT_SECTION_HREF, icon: "/svg/facebook.svg" },
] as const

// ─── Social (placeholder # — team cards) ────────────────────────────────────
// ─── Hero ────────────────────────────────────────────────────────────────────
export const HERO_BADGE =
  "Official Chapter for First-Generation Founders"
export const HERO_TITLE_LINE1 = "A Chapter For"
export const HERO_TITLE_LINE2 = "Self-Made Founders."
export const HERO_SUBTITLE =
  "We are a peer-to-peer forum network exclusive to first-generation entrepreneurs across South Asia. Emphasizing whole-life growth: business, leadership, and personal development."

// ─── Infinite carousel ─────────────────────────────────────────────────────
export const INFINITE_CAROUSEL_IMAGES = [
  "/images/infinite-carousel-1.jpg",
  "/images/infinite-carousel-2.jpg",
  "/images/infinite-carousel-3.jpg",
  "/images/infinite-carousel-4.png",
  "/images/infinte-carousel-5.jpg",
  "/images/infinite-carousel-6.jpg",
] as const

export const INFINITE_CAROUSEL_CARD_W = 411
export const INFINITE_CAROUSEL_CARD_GAP = 24
export const INFINITE_CAROUSEL_MAX_H = 411
export const INFINITE_CAROUSEL_SCROLL_SEC = 20

// ─── About Us ────────────────────────────────────────────────────────────────
export const ABOUT_SECTION_LABEL = "About Us"
export const ABOUT_HEADLINE =
  "EO is a support network of 18,000+ leaders in 61 countries, helping entrepreneurs reach their potential through connections and shared experiences."
export const ABOUT_BODY =
  "A global movement with local focus. Driving whole-life growth for first-generation founders across South Asia."
export const ABOUT_HIGHLIGHTS = [
  "Founded in 1987",
  "20,500+ Members Globally",
  "Presence across 80+ countries",
  "220+ Chapters Worldwide",
] as const
export const ABOUT_CARD_TITLE = "Staffing Solutions You Can Count On"
export const ABOUT_IMAGE_SRC = "/images/about-us.png"
export const ABOUT_IMAGE_ALT = "EO members collaborating"
export const ABOUT_STAT_VALUE = "$4Mn"
export const ABOUT_STAT_CAPTION =
  "Average annual revenue of EO member businesses globally"

export const ABOUT_USER_AVATARS = [
  "/images/users/user-4.webp",
  "/images/users/user-1.webp",
  "/images/users/user-2.webp",
  "/images/users/user-3.webp",
] as const

// ─── Companies logo strip ───────────────────────────────────────────────────
export const COMPANY_LOGOS = [
  { src: "/svg/companiesLogo/logo-1.svg", alt: "Company logo 1" },
  { src: "/svg/companiesLogo/logo-2.svg", alt: "Company logo 2" },
  { src: "/svg/companiesLogo/logo-3.svg", alt: "Company logo 3" },
  { src: "/svg/companiesLogo/logo-4.svg", alt: "Company logo 4" },
  { src: "/svg/companiesLogo/logo-5.svg", alt: "Company logo 5" },
] as const

// ─── Our Team ───────────────────────────────────────────────────────────────
export const TEAM_SECTION_LABEL = "WHY JOIN"
export const TEAM_HEADLINE = "Built for Founders Who Built It Themselves"
export const TEAM_DESCRIPTION =
  "This is not a networking club. It is a structured room where founders who started from zero share real experiences, hold each other accountable, and grow together across South Asia."
export const TEAM_FEATURES = [
  {
    title: "Peer Forums",
    description:
      "Peer Forums Confidential monthly groups. Real challenges. Founders only.",
    icon: "users-round",
  },
  {
    title: "Education",
    description:
      "Executive Education Harvard, INSEAD, Wharton, MIT. Built for entrepreneurs, not students.",
    icon: "file-badge-2",
  },
  {
    title: "Network",
    description:
      "Global Network 220+ chapters. 80+ countries. One membership opens it all.",
    icon: "globe",
  },
  {
    title: "Leadership",
    description:
      "Leadership from Day One Shape the chapter. Take a board role. Leave your mark early.",
    icon: "medal",
  },
] as const

// ─── Services ─────────────────────────────────────────────────────────────────
export type ServiceItem = {
  id: string
  title: string
  points: string[]
  image: string
}

export const SERVICES_SECTION_LABEL = "Services"
export const SERVICES_HEADLINE = "Membership Experience"
export const SERVICES_SUBTITLE =
  "Built on EO's global framework, our chapter offers a comprehensive ecosystem for founder growth."
export const SERVICES_PROJECT_BADGE = "[ 40+ Projects ]"

export const SERVICES: ServiceItem[] = [
  {
    id: "01",
    title: "Structured Peer Forums",
    points: [
      "Confidential small-group engagement",
      "Experience-sharing format",
      "Ongoing peer accountability",
    ],
    image: "/svg/services/service-1.svg",
  },
  {
    id: "02",
    title: "Curated Learning",
    points: [
      "Founder-relevant sessions",
      "Access to regional and global EO speakers",
      "Leadership and scale-focused programming",
    ],
    image: "/svg/services/service-2.svg",
  },
  {
    id: "03",
    title: "Chapter Engagement",
    points: [
      "Signature in-person gatherings",
      "Regional cross-chapter collaboration",
      "Family-inclusive experiences",
    ],
    image: "/svg/services/service-3.svg",
  },
  {
    id: "04",
    title: "Global EO Access",
    points: [
      "Regional and global EO conferences",
      "220+ chapters across 80+ countries",
      "Cross-chapter peer engagement",
    ],
    image: "/svg/services/service-4.svg",
  },
]

// ─── Why Choose Us ──────────────────────────────────────────────────────────
export const WHY_CHOOSE_IMAGE_SRC = "/svg/choose.svg"
export const WHY_CHOOSE_IMAGE_ALT = "Team collaborating at a desk"
export const WHY_CHOOSE_WELCOME = "Welcome to EO South Asia Founders Bridge"
export const WHY_CHOOSE_SECTION_LABEL = "Why Choose Us"
export const WHY_CHOOSE_HEADLINE = "Key Benefits"
export const WHY_CHOOSE_BODY =
  "One membership. A structured forum, global network, executive education, and a community of founders who started exactly where you did."
export const WHY_CHOOSE_FEATURE_LEFT_TITLE = "Real Access, Real Early"
export const WHY_CHOOSE_FEATURE_LEFT_BODY =
  "Skip the $5Mn revenue barrier. Join from $1Mn and scale into EO's global chapter as your business grows."
export const WHY_CHOOSE_FEATURE_RIGHT_TITLE = "Fast Services"
export const WHY_CHOOSE_FEATURE_RIGHT_BODY =
  "India, Nepal, Bangladesh, Sri Lanka. One room. Founders who understand your market, your culture, and your grind."

export const WHY_CHOOSE_AVATARS = [
  "/images/users/user-4.webp",
  "/images/users/user-1.webp",
  "/images/users/user-2.webp",
  "/images/users/user-3.webp",
] as const

// ─── Pricing ────────────────────────────────────────────────────────────────
export const PRICING_SECTION_LABEL = "How to Join"
export const PRICING_DESCRIPTION =
  "Check Eligibility Are you a first-generation founder generating $1Mn+ in annual revenue? You qualify."
export const PRICING_FEATURES = [
  "Strategy Session with Expert",
  "One-on-One Mentorship",
  "Brand Identity Consultation",
] as const

export const PRICING_CUSTOM_FEATURES = [
  "Expert Interview Prep",
  "Personalized Forum Placement",
  "Guided Onboarding Process",
] as const

export const PRICING_PREMIUM_FEATURES = [
  "Short application form",
  "Share your journey",
  "No lengthy paperwork",

] as const
export const PRICING_STARTER_TITLE = "STEP 1"

export const PRICING_PREMIUM_TITLE = "STEP 2"

export const PRICING_PER_MONTH = "/ Per Month"
export const PRICING_CHOOSE_LABEL = "Choose"
export const PRICING_CUSTOM_TITLE = "STEP 3"
export const PRICING_CUSTOM_DESCRIPTION = "Get Matched A quick video interview, Forum placement, and a warm welcome from EO South Asia leaders."
export const PRICING_CUSTOM_IMAGE = "/images/pricing.webp"
export const PRICING_CUSTOM_IMAGE_ALT = "Professional office consultation"
export const PRICING_PREMIUM_DECOR_IMAGE = "/images/pricing-background.png"
export const PRICING_PREMIUM_DECOR_ALT = "Pricing"

export const PRICING_SHADOW_STARTER =
  "shadow-[0_15px_16px_-7px_rgba(182,232,75,0.32)]"
export const PRICING_SHADOW_PREMIUM =
  "shadow-[0_15px_16px_-7px_rgba(75,85,232,0.34)]"
export const PRICING_SHADOW_CUSTOM = PRICING_SHADOW_STARTER

export const PRICING_LEARN_MORE_LABEL = "Contact Us"

// ─── FAQ ─────────────────────────────────────────────────────────────────────
export const FAQ_SECTION_LABEL = "FAQ"
export const FAQ_HEADLINE = "Frequently Asked Questions"

  export const FAQ_ITEMS = [
    {
      question: "Who can join EO South Asia Founders Bridge?",
      answer:
        "First-generation founders running a business with $1Mn+ in annual revenue, headquartered or operating significantly in South Asia. If you built it yourself, you qualify."
    },
    {
      question: "Is this a South Asia only chapter?",
      answer: "The chapter is India-led but open to founders across India, Nepal, Bangladesh, and Sri Lanka."
    },
    {
      question: "What is a Forum and how does it work?",
      answer: "A Forum is a confidential group of 6 to 8 founders who meet monthly to share real business challenges. No advice unless asked. No judgment. Just experience sharing among peers."
    },
    {
      question: "Can I access global EO events as a member?",
      answer: "Yes. Membership gives you direct access to EO's global ecosystem including regional summits, global conferences, and cross-chapter engagement across 80+ countries."
    },
    {
      question: "How long does the application process take?",
      answer: "The process typically involves a short application, one video interview, and Forum placement. Most applicants complete it within two to three weeks."
    },
    {
      question: "What happens when my revenue crosses $5Mn?",
      answer: "You transition seamlessly into EO's global core chapter. The Bridge chapter is designed specifically to grow with you until you hit that threshold."
    },
  ] as const

// ─── CTA footer ─────────────────────────────────────────────────────────────
export const CTA_HEADLINE = "Built It Yourself?"
export const CTA_SUBHEADLINE = "Join Your People."
export const CTA_JOIN_NOW = "Join Now"
export const CTA_CONTACT_LABEL = "Contact"
export const CTA_EMAIL_LABEL = "Email Address"
export const CTA_JOIN_ANCHOR = "#join"

// ─── Shared UI copy ──────────────────────────────────────────────────────────
export const UI_LEARN_MORE = "Contact Us"
export const UI_VIEW_MORE = "Contact Us"
export const BUTTON_ARIA_LEARN_MORE = "Contact Us"
