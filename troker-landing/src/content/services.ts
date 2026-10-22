import { FAQItem, ProcessStep } from "./config";

export interface ServicePageConfig {
  slug: string;
  title: string;
  eyebrow: string;
  problemEyebrow: string;
  problemHeading: string;
  processHeading: string;
  metaTitle: (locality: string, region: string) => string;
  metaDescription: (locality: string, region: string) => string;
  heroH1: (locality: string, region: string) => string;
  heroSubhead: (locality: string, region: string) => string;
  heroQualifier: (locality: string, region: string) => string;
  painPoints: { title: string; description: string }[];
  processSteps: ProcessStep[];
  faqs: (locality: string, region: string) => FAQItem[];
  showComparison: boolean;
  showPortfolio: boolean;
  areasSection?: {
    heading: string;
    paragraphs: string[];
    links: { href: string; anchor: string }[];
    outro: string;
  };
}

/* ─── Service Page Configs ─── */

export const serviceMap: Record<string, ServicePageConfig> = {
  "local-seo": {
    slug: "local-seo",
    title: "Local SEO Services",
    eyebrow: "Local SEO Experts",
    problemEyebrow: "Why You're Not Ranking Locally",
    problemHeading: "Your competitors are getting the calls that should be yours.",
    processHeading: "How we dominate local search in four steps.",
    metaTitle: () => `Local SEO Services in Atlanta & Georgia | Georgia SEO Experts`,
    metaDescription: () =>
      `Local SEO services for Atlanta, Marietta, Roswell, Alpharetta and Decatur businesses: Google Business Profile, listings, reviews and local pages, with clear Monday reports.`,
    heroH1: (_locality, region) =>
      `Local SEO Services for ${region} Businesses`,
    heroSubhead: (_locality, region) =>
      `Our local SEO services help Georgia businesses show up when nearby customers search on Google and Google Maps.`,
    heroQualifier: (_locality, region) =>
      `For ${region} businesses that want to dominate local search and the Google Map Pack.`,
    painPoints: [
      {
        title: "Invisible in the Map Pack",
        description:
          "When nearby customers search on Google Maps, businesses outside the top results are rarely seen. We work on the profile, listing and review signals that decide who appears there.",
      },
      {
        title: "Inconsistent business listings",
        description:
          "If your name, address and phone number differ between directories, Google receives mixed signals about your business. We check your listings and make them match.",
      },
      {
        title: "No review strategy",
        description:
          "Reviews are part of how Google and customers judge a local business. Without a steady way of asking for them, your profile can look stale next to nearby competitors.",
      },
      {
        title: "Generic website content",
        description:
          "Your website doesn't mention the specific cities, neighborhoods, or service areas you cover. Google has no reason to show you for local searches.",
      },
      {
        title: "Unclaimed or unoptimized GBP",
        description:
          "Your Google Business Profile is either unclaimed, incomplete, or hasn't been updated in months. This is the #1 factor for Map Pack rankings.",
      },
    ],
    processSteps: [
      {
        step: 1,
        title: "Local SEO Audit",
        description:
          "We audit your Google Business Profile, local citations, website, and competitors to identify exactly why you're not ranking in local search.",
      },
      {
        step: 2,
        title: "GBP & Citation Optimization",
        description:
          "We fully optimize your Google Business Profile, clean up and build local citations, and ensure NAP consistency across all directories.",
      },
      {
        step: 3,
        title: "Local Content & On-Page SEO",
        description:
          "We create geo-targeted service area pages, optimize existing content for local keywords, and implement local schema markup.",
      },
      {
        step: 4,
        title: "Review Strategy & Link Building",
        description:
          "We implement a review acquisition system and build local backlinks from relevant directories, publications, and community organizations.",
      },
    ],
    faqs: () => [
      {
        category: "process",
        question: "How does local SEO work with you?",
        answer: `Local SEO works by improving the signals Google uses for nearby searches: your Google Business Profile, business listings, reviews and the local pages on your website. We work on those with you, and you get a report every Monday. We are three specialists, in business for over seven years.`,
      },
      {
        category: "process",
        question: "What do I need to do to get started?",
        answer: `Getting started means telling us about your business, the areas you serve and what you want from search. Use the free SEO audit button on this page to begin that conversation with our team.`,
      },
      {
        category: "general",
        question: "How will I know it is working?",
        answer: `You will see it in your Monday reports, which show how your search visibility and traffic are changing from week to week. Georgia SEO Experts reports on what has actually happened, not on promises.`,
      },
      {
        category: "pricing",
        question: "How is pricing set?",
        answer: `Pricing depends on the scope of the work and how competitive your area is. Our pricing guide explains what drives the price of SEO in Georgia.`,
        link: { href: "/blog/seo-cost-georgia-pricing-guide", anchor: "Read the SEO cost in Georgia pricing guide." },
      },
    ],
    showComparison: false,
    showPortfolio: true,
    areasSection: {
      heading: "Local SEO services across Atlanta, Marietta, Roswell, Alpharetta and Decatur",
      paragraphs: [
        "We provide local SEO services for businesses in Atlanta, Marietta, Roswell, Alpharetta and Decatur, and across Georgia statewide. Each area page explains how we work in that market:",
      ],
      links: [
        { href: "/locations/seo-services-atlanta", anchor: "SEO services in Atlanta" },
        { href: "/locations/marietta-seo", anchor: "Marietta SEO" },
        { href: "/locations/seo-roswell", anchor: "Roswell SEO" },
        { href: "/locations/seo-company-alpharetta", anchor: "Alpharetta SEO" },
      ],
      outro:
        "For a plain-English walkthrough, read our guide to local SEO strategies for Atlanta businesses (/blog/local-seo-strategies-atlanta-businesses). For an outside view, see",
    },
  },

  "technical-seo": {
    slug: "technical-seo",
    title: "Technical SEO Services",
    eyebrow: "Technical SEO Experts",
    problemEyebrow: "Why Your Site Isn't Ranking",
    problemHeading: "Great content means nothing if Google can't find it.",
    processHeading: "How we fix your technical SEO in four steps.",
    metaTitle: (locality, region) =>
      `Technical SEO Services ${locality} | ${region} Technical SEO Agency`,
    metaDescription: (locality, region) =>
      `Technical SEO services for ${region} businesses. Site speed, Core Web Vitals, crawlability, and indexation optimization. Free technical SEO audit in ${locality}.`,
    heroH1: (_locality, region) =>
      `Technical SEO Services for ${region} Businesses`,
    heroSubhead: (_locality, region) =>
      `Your content might be perfect, but if Google can't crawl, index, and render your site efficiently, none of it matters. We fix the technical foundation so your ${region} business can rank.`,
    heroQualifier: (_locality, region) =>
      `For ${region} businesses whose websites aren't performing despite having good content.`,
    painPoints: [
      {
        title: "Slow page speed",
        description:
          "Your site takes 4+ seconds to load. Google penalizes slow sites, and 53% of mobile visitors abandon pages that take longer than 3 seconds.",
      },
      {
        title: "Failing Core Web Vitals",
        description:
          "LCP, FID, and CLS scores are in the red. These are confirmed Google ranking factors — failing them means you're starting every race behind the line.",
      },
      {
        title: "Crawl errors and broken links",
        description:
          "Google is encountering 404 errors, redirect chains, and crawl budget waste. Pages you want indexed aren't being found.",
      },
      {
        title: "Duplicate content issues",
        description:
          "Missing canonical tags, parameter URLs, and duplicate meta tags are diluting your ranking signals across multiple URLs.",
      },
      {
        title: "No structured data",
        description:
          "Your competitors show rich snippets, star ratings, and FAQ dropdowns in search results. You show a plain blue link. Schema markup changes that.",
      },
    ],
    processSteps: [
      {
        step: 1,
        title: "Technical SEO Audit",
        description:
          "We crawl your entire site with enterprise tools to identify every technical issue: speed bottlenecks, crawl errors, indexation problems, and Core Web Vitals failures.",
      },
      {
        step: 2,
        title: "Prioritized Fix Plan",
        description:
          "We prioritize issues by ranking impact and create a clear roadmap. Critical fixes first, then optimizations that compound over time.",
      },
      {
        step: 3,
        title: "Implementation & Testing",
        description:
          "We implement fixes: speed optimization, schema markup, canonical tags, redirect cleanup, sitemap optimization, and Core Web Vitals improvements.",
      },
      {
        step: 4,
        title: "Monitoring & Maintenance",
        description:
          "Ongoing monitoring of crawl health, indexation, and Core Web Vitals. We catch and fix new issues before they impact rankings.",
      },
    ],
    faqs: (locality, region) => [
      {
        category: "seo",
        question: "What is a technical SEO audit?",
        answer: `A technical SEO audit is a comprehensive analysis of your website's technical health — how Google crawls, indexes, and renders your pages. We check site speed, Core Web Vitals, mobile-friendliness, URL structure, canonical tags, schema markup, XML sitemaps, robots.txt, and hundreds of other factors. For ${region} businesses, this is the critical first step before any content or link building work.`,
      },
      {
        category: "pricing",
        question: `How much does technical SEO cost in ${region}?`,
        answer: `A one-time technical SEO audit and fix implementation typically ranges from $2,500 to $7,500 depending on site complexity. Ongoing technical SEO maintenance is included in all our monthly retainer packages starting at $1,500/month. For large ${locality} enterprise sites, custom pricing applies.`,
      },
      {
        category: "process",
        question: "How long does a technical SEO audit take?",
        answer: `A thorough technical audit takes 1-2 weeks to complete. Implementation of fixes depends on the severity and quantity of issues found, but most sites can be significantly improved within 30-60 days. We prioritize high-impact fixes first so you see results as quickly as possible.`,
      },
      {
        category: "seo",
        question: "What are Core Web Vitals and why do they matter?",
        answer: `Core Web Vitals are Google's metrics for page experience: LCP (Largest Contentful Paint) measures loading speed, INP (Interaction to Next Paint) measures interactivity, and CLS (Cumulative Layout Shift) measures visual stability. Google confirmed these are ranking factors — sites with good Core Web Vitals have a measurable advantage in search results.`,
      },
      {
        category: "general",
        question: "Can technical SEO alone improve my rankings?",
        answer: `Technical SEO alone can produce significant ranking improvements, especially if your site has major issues holding it back. However, the biggest gains come from combining technical SEO with on-page optimization, content strategy, and link building. Think of technical SEO as the foundation — without it, nothing else works at full capacity.`,
      },
    ],
    showComparison: true,
    showPortfolio: true,
  },

  "content-marketing": {
    slug: "content-marketing",
    title: "SEO Content Marketing",
    eyebrow: "Content Marketing Experts",
    problemEyebrow: "Why Your Content Isn't Working",
    problemHeading: "Publishing without strategy is just creating noise.",
    processHeading: "How we build content that ranks and converts.",
    metaTitle: (locality, region) =>
      `SEO Content Marketing ${locality} | ${region} Content Strategy`,
    metaDescription: (locality, region) =>
      `SEO content marketing for ${region} businesses. Keyword-targeted blog posts, landing pages, and content strategy that drives organic traffic and leads. Free consultation in ${locality}.`,
    heroH1: (_locality, region) =>
      `SEO Content Marketing for ${region} Businesses`,
    heroSubhead: (_locality, region) =>
      `Content without strategy is just noise. We create keyword-targeted content that ranks on Google, establishes your authority, and turns organic traffic into qualified leads for your ${region} business.`,
    heroQualifier: (_locality, region) =>
      `For ${region} businesses that want content that actually drives revenue, not just pageviews.`,
    painPoints: [
      {
        title: "Content that nobody finds",
        description:
          "You've published blog posts, but they get 10 visits a month. Without keyword research and SEO optimization, content is invisible to search engines.",
      },
      {
        title: "No content strategy",
        description:
          "You publish randomly — whatever seems interesting that week. Without topic clusters and keyword mapping, your content doesn't build topical authority.",
      },
      {
        title: "Content that doesn't convert",
        description:
          "Traffic is nice, but it doesn't pay the bills. Your content gets reads but no calls, no form fills, no demo requests.",
      },
      {
        title: "Inconsistent publishing",
        description:
          "You published 5 posts last year, then nothing for 6 months. Google rewards consistent, fresh content. Inconsistency signals an abandoned site.",
      },
      {
        title: "Competing with yourself",
        description:
          "Multiple pages targeting the same keywords cannibalize each other. Instead of one page ranking well, you have three pages ranking poorly.",
      },
    ],
    processSteps: [
      {
        step: 1,
        title: "Content Audit & Keyword Research",
        description:
          "We audit your existing content, research high-intent keywords in your industry, and identify content gaps your competitors are exploiting.",
      },
      {
        step: 2,
        title: "Content Strategy & Calendar",
        description:
          "We build topic clusters, map keywords to content types, and create a publishing calendar aligned with your business goals and seasonal trends.",
      },
      {
        step: 3,
        title: "Content Creation & Optimization",
        description:
          "Our writers create expert-level content optimized for search intent, on-page SEO, and conversion. Every piece targets specific keywords and includes clear calls to action.",
      },
      {
        step: 4,
        title: "Promotion & Performance Tracking",
        description:
          "We promote new content through link building and distribution channels, then track rankings, traffic, and conversions to continuously improve performance.",
      },
    ],
    faqs: (locality, region) => [
      {
        category: "process",
        question: "How many blog posts do I need per month for SEO?",
        answer: `For most ${region} businesses, 2-4 high-quality, SEO-optimized posts per month is the sweet spot. Quality matters far more than quantity. One well-researched, 2,000-word post targeting a high-value keyword will outperform ten 500-word filler posts. Our Growth package includes 4 posts per month.`,
      },
      {
        category: "pricing",
        question: `How much does SEO content marketing cost in ${region}?`,
        answer: `SEO content marketing is included in our monthly retainer packages starting at $1,500/month (2 posts). Standalone content packages typically run $500-$1,500 per optimized blog post depending on length, research depth, and topic complexity. Custom content programs for ${locality} enterprises are available.`,
      },
      {
        category: "seo",
        question: "What is a topic cluster strategy?",
        answer: `A topic cluster organizes your content around a central pillar page with supporting content that links back to it. For example, a "Solar Panel Installation" pillar page might be supported by posts about residential installation, commercial installation, ROI calculators, and maintenance guides. This structure tells Google you're an authority on the topic, boosting rankings for all related pages.`,
      },
      {
        category: "general",
        question: "Can I write my own content and have you optimize it?",
        answer: `Absolutely. We offer content optimization services where we take your drafts and optimize them for SEO — keyword placement, meta tags, internal linking, header structure, and search intent alignment. Many ${region} businesses prefer this hybrid approach because it combines their industry expertise with our SEO knowledge.`,
      },
      {
        category: "process",
        question: "How long does it take for content to rank on Google?",
        answer: `New content typically takes 2-6 months to reach its ranking potential. Factors include keyword competition, domain authority, and content quality. We accelerate this timeline through internal linking, backlink building, and technical optimization. High-quality evergreen content can continue climbing in rankings for years.`,
      },
    ],
    showComparison: false,
    showPortfolio: true,
  },

  "link-building": {
    slug: "link-building",
    title: "Link Building Services",
    eyebrow: "Link Building Experts",
    problemEyebrow: "Why Your Authority Is Low",
    problemHeading: "Without backlinks, your content is a library with no roads.",
    processHeading: "How we build authority in four steps.",
    metaTitle: (locality, region) =>
      `Link Building Services ${locality} | ${region} Link Building Agency`,
    metaDescription: (locality, region) =>
      `White-hat link building for ${region} businesses. Earn authoritative backlinks that boost domain authority and rankings. Free backlink audit in ${locality}.`,
    heroH1: (_locality, region) =>
      `Link Building Services for ${region} Businesses`,
    heroSubhead: (_locality, region) =>
      `Backlinks are the currency of SEO. Without them, your ${region} business won't outrank competitors with stronger domain authority. We earn links the right way — from real, relevant websites.`,
    heroQualifier: (_locality, region) =>
      `For ${region} businesses that need to build domain authority and outrank established competitors.`,
    painPoints: [
      {
        title: "Low domain authority",
        description:
          "Your competitors have DA 50+. You're at 15. Every keyword battle is uphill because Google trusts their site more than yours.",
      },
      {
        title: "Content ranks on page 2-3",
        description:
          "Your content is well-written and optimized, but it's stuck on page 2. The missing ingredient is almost always backlinks.",
      },
      {
        title: "Past link building burned you",
        description:
          "A previous agency built spammy links that hurt your rankings. You need someone who does it right — white-hat, manual, and sustainable.",
      },
      {
        title: "Competitors are pulling ahead",
        description:
          "They're getting featured in publications, earning editorial links, and building partnerships. You're standing still.",
      },
      {
        title: "No link building strategy",
        description:
          "You've never actively built backlinks. Your link profile is whatever you've accumulated passively, which isn't enough to compete.",
      },
    ],
    processSteps: [
      {
        step: 1,
        title: "Backlink Audit & Competitor Analysis",
        description:
          "We analyze your current link profile and your competitors' backlinks to identify gaps, opportunities, and the exact links that are giving them an advantage.",
      },
      {
        step: 2,
        title: "Link Prospecting & Strategy",
        description:
          "We build a targeted outreach list of relevant websites, publications, and resource pages in your industry and region. Every prospect is vetted for quality and relevance.",
      },
      {
        step: 3,
        title: "Outreach & Link Acquisition",
        description:
          "We earn backlinks through digital PR, guest content, resource creation, and strategic partnerships. Every link is from a real, authoritative website.",
      },
      {
        step: 4,
        title: "Monitoring & Scaling",
        description:
          "We track new and lost links, measure ranking impact, and continuously scale successful outreach campaigns to compound your authority over time.",
      },
    ],
    faqs: (locality, region) => [
      {
        category: "seo",
        question: "What is white-hat link building?",
        answer: `White-hat link building means earning backlinks through legitimate methods — guest posting, digital PR, resource creation, and editorial outreach. We never buy links, use PBNs (private blog networks), or engage in link schemes that violate Google's guidelines. These shortcuts may produce short-term gains but result in penalties that can destroy your rankings.`,
      },
      {
        category: "pricing",
        question: `How much does link building cost in ${region}?`,
        answer: `Quality link building in ${region} typically costs $3,000-$10,000 per month depending on the aggressiveness of the campaign and the authority of target sites. Our Growth package includes 5-10 quality backlinks per month. One authoritative link from a DA 60+ site is worth more than 50 links from low-quality directories.`,
      },
      {
        category: "process",
        question: "How many backlinks do I need to rank?",
        answer: `There's no magic number — it depends on your keyword competition. For local ${locality} keywords, you might need 20-50 quality backlinks to reach page 1. For competitive national keywords, it could be 100+. We analyze your specific competition and build a link acquisition plan that matches what's needed to outrank them.`,
      },
      {
        category: "seo",
        question: "What makes a good backlink?",
        answer: `A good backlink comes from a relevant, authoritative website with real traffic. Key factors: domain authority of the linking site, relevance to your industry, editorial context (link placed naturally within content), and the anchor text used. A single link from a respected industry publication is worth more than 100 links from generic directories.`,
      },
      {
        category: "general",
        question: "Can bad backlinks hurt my SEO?",
        answer: `Yes. Spammy, low-quality, or manipulative backlinks can trigger Google penalties that tank your rankings. If a previous agency built risky links, we can audit your backlink profile and disavow harmful links through Google Search Console. Building your link profile with quality, relevant links is critical for long-term SEO health.`,
      },
    ],
    showComparison: false,
    showPortfolio: true,
  },
};

export function getServiceConfig(slug: string): ServicePageConfig | undefined {
  return serviceMap[slug];
}

export function getAllServiceSlugs(): string[] {
  return Object.keys(serviceMap);
}
