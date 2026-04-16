export type SeoPageType = "location" | "industry";

export interface SeoPageFaq { question: string; answer: string; }
export interface SeoPageInternalLink { href: string; anchor: string; description: string; }
export interface SeoPagePainPoint { title: string; description: string; }
export interface SeoPageProcessStep { step: number; title: string; description: string; }
export interface SeoPageCaseStudy { client: string; headline: string; description: string; metric: string; }
export interface SeoPagePricingTier { name: string; priceRange: string; description: string; includes: string[]; featured?: boolean; }

export interface SeoPageConfig {
  slug: string;
  type: SeoPageType;
  primaryKeyword: string;
  secondaryKeywords: string[];
  metaTitle: string;
  metaDescription: string;
  heroEyebrow: string;
  heroH1: string;
  heroAnswer: string;
  heroBullets: string[];
  problemHeading: string;
  problemIntro: string;
  painPoints: SeoPagePainPoint[];
  processHeading: string;
  processIntro: string;
  processSteps: SeoPageProcessStep[];
  resultsHeading: string;
  resultsIntro: string;
  caseStudies: SeoPageCaseStudy[];
  guaranteeHeadline: string;
  guaranteeBody: string;
  pricingHeading: string;
  pricingIntro: string;
  pricingTiers: SeoPagePricingTier[];
  faqs: SeoPageFaq[];
  internalLinks: SeoPageInternalLink[];
  ctaHeading: string;
  ctaSubhead: string;
  locality?: string;
  stateCode?: string;
  nearbyAreas?: string[];
  geoCoordinates?: { latitude: number; longitude: number };
  industryName?: string;
  industryExamples?: string[];
}

/* ════════════════════════════════════════════════════
   SHARED TEMPLATES
   ════════════════════════════════════════════════════ */

const guarantee = {
  headline: "20% traffic increase in 6 months — or we work for free",
  body: "Every engagement includes a written performance guarantee: if your organic traffic hasn't increased by at least 20% within six months, we continue working at no cost until the target is met. No refunds, no disputes — just free work until we deliver.",
};

const locationProcess = (city: string): SeoPageProcessStep[] => [
  { step: 1, title: `${city} market audit`, description: `We pull your current rankings, Google Business Profile health, backlinks, and technical SEO data. Then we benchmark against your top ${city} competitors to identify the gaps costing you traffic.` },
  { step: 2, title: "Keyword and content mapping", description: `We map 20–40 ${city}-area keywords to existing pages and identify content gaps. Each target comes with search volume, difficulty score, and the current top-ranking URLs.` },
  { step: 3, title: "On-page optimization and citations", description: `We rewrite title tags, meta descriptions, and on-page content. We submit your business to 40+ local citation sources relevant to ${city}. Schema markup and internal linking are built out in parallel.` },
  { step: 4, title: "Monthly reporting and iteration", description: "Monthly report with keyword rankings, GBP insights, GA4 traffic data, and next-month action items. Monthly 30-minute strategy call included." },
];

const industryProcess = (industry: string): SeoPageProcessStep[] => [
  { step: 1, title: `${industry} audit`, description: `We map every service you offer and every area you cover. Each service × area combination becomes a target page opportunity. We benchmark your current rankings against your top 5 competitors.` },
  { step: 2, title: "Keyword research with real volume", description: `Using SE Ranking data, we identify 40–80 keywords with measurable search volume in your market. We prioritize high commercial intent: 'cost,' 'quote,' 'near me,' 'emergency,' and 'licensed.'` },
  { step: 3, title: "Service-area page production", description: "We write and publish service-area pages with local schema, pricing ranges, project timelines, and testimonials from clients in that specific area. No two pages are templated copies." },
  { step: 4, title: "Link building and reporting", description: `We build links from ${industry.toLowerCase()}-relevant directories, local chambers, and trade associations. Monthly reports with rankings, traffic, and next-month actions.` },
];

const locationPricing = (city: string): SeoPagePricingTier[] => [
  { name: "Starter", priceRange: "$1,500 / month", description: `For ${city} small businesses serving one neighborhood or zip code.`, includes: ["Google Business Profile optimization", "10 target keywords tracked", "On-page SEO for 10 pages", "10 local citations per month", "Monthly ranking report"] },
  { name: "Growth", priceRange: "$2,500 / month", description: `For ${city} businesses serving the greater metro area. Our most popular tier.`, includes: ["Everything in Starter", "25 target keywords tracked", "On-page SEO for 25 pages", "2 new content pages per month", "5 quality backlinks per month", "Monthly strategy call", "20% traffic guarantee"], featured: true },
  { name: "Scale", priceRange: "$5,000+ / month", description: `For ${city} businesses with multi-location operations or aggressive growth goals.`, includes: ["Everything in Growth", "50+ keywords tracked", "Unlimited on-page SEO", "4 articles per month", "15+ backlinks per month", "Quarterly CRO audit", "Dedicated account manager"] },
];

const industryPricing = (industry: string): SeoPagePricingTier[] => [
  { name: "Solo", priceRange: "$1,500 / month", description: `For solo ${industry.toLowerCase()} and small operations serving a single city.`, includes: ["Google Business Profile optimization", "10 target keywords tracked", "3 service-area pages", "15 local citations per month", "Monthly ranking report"] },
  { name: "Growing", priceRange: "$2,500 / month", description: `For ${industry.toLowerCase()} with 5–20 employees serving multiple cities. Our most popular tier.`, includes: ["Everything in Solo", "30 target keywords tracked", "8 service-area pages", "5 industry-specific links monthly", "Review acquisition setup", "Monthly strategy call", "20% traffic guarantee"], featured: true },
  { name: "Regional", priceRange: "$5,000+ / month", description: `For multi-location ${industry.toLowerCase()} and regional operators.`, includes: ["Everything in Growing", "60+ keywords tracked", "Unlimited page production", "4 long-form articles per month", "15+ links monthly", "Dedicated account manager", "Quarterly CRO audit"] },
];

const caseStudyPool: SeoPageCaseStudy[] = [
  { client: "Atlanta commercial crane service", headline: "From page 3 to top local rankings for commercial crane keywords", description: "We rebuilt their site architecture with 12 service-area pages, published 24 case studies with schema markup, and secured 28 local citations. Organic search is now their primary source of new project inquiries.", metric: "Top local rankings" },
  { client: "Atlanta notary service", headline: "Dominant Map Pack position in under 5 months", description: "Competing against dozens of established services with zero initial visibility. Optimized GBP, added structured data, and built a content cluster around Atlanta-specific queries. Now consistently appears in the Map Pack.", metric: "Map Pack presence" },
  { client: "JDG Interior Design", headline: "Portfolio-driven strategy that converts visitors into inquiries", description: "Built an image-optimized site with structured data for every project, local schema, and content targeting neighborhood-specific searches. Organic traffic grew significantly year over year.", metric: "Strong YoY growth" },
  { client: "Georgia roofing contractor", headline: "Significant organic traffic growth in 7 months", description: "Built 15 neighborhood-specific landing pages, added industry directory citations, and launched a review request flow that grew Google reviews from 23 to 187. Organic traffic now outperforms paid ads.", metric: "Organic > paid" },
  { client: "HVAC and plumbing contractor", headline: "Map Pack visibility across 4 Georgia cities", description: "Dual-trade contractor serving 4 cities. Separated services into sub-brand pages, optimized GBP for each trade, and built city-specific pain-point content. Gained Map Pack presence across all 4 markets within 5 months.", metric: "4-city Map Pack" },
  { client: "Georgia small business collective", headline: "Multiple small businesses ranked for their primary keywords", description: "Batch SEO program for a collective of independent businesses. Standardized GBP optimization, built shared local citation infrastructure, and produced 3 content pieces per business. The majority reached page 1 for their primary target keyword.", metric: "Page 1 visibility" },
];

const pick = (pool: SeoPageCaseStudy[], indices: number[]) => indices.map((i) => pool[i]);

/* ════════════════════════════════════════════════════
   LOCATION PAGES
   ════════════════════════════════════════════════════ */

const atlantaPage: SeoPageConfig = {
  slug: "seo-services-atlanta",
  type: "location",
  primaryKeyword: "SEO services Atlanta",
  secondaryKeywords: ["SEO agency Atlanta", "Atlanta SEO firms", "Atlanta SEO company", "local SEO Atlanta", "Atlanta search engine optimization", "best Atlanta SEO company"],
  metaTitle: "SEO Services Atlanta, GA | Data-Driven Agency | Georgia SEO Experts",
  metaDescription: "Atlanta SEO services that drive measurable traffic growth. Our clients see a 47% average organic increase in 6 months — backed by a written guarantee. Free audit.",
  heroEyebrow: "Atlanta SEO Agency",
  heroH1: "Atlanta SEO Services That Drive Real Revenue",
  heroAnswer: "Georgia SEO Experts is an Atlanta-based agency helping local businesses grow organic traffic and capture high-intent searches. Our data-driven approach delivers a 47% average traffic increase within six months — backed by a written performance guarantee.",
  heroBullets: ["100+ Georgia businesses served since 2019", "165+ websites built and optimized for search", "47% average organic traffic lift in 6 months", "Google Partner · Certified Webflow Agency"],
  problemHeading: "Why most Atlanta businesses struggle to rank",
  problemIntro: "Atlanta is one of the most competitive local search markets in the Southeast. The top three Map Pack results capture 42% of local clicks — and most businesses never make it in.",
  painPoints: [
    { title: "Unoptimized Google Business Profile", description: "No service categories, no area coverage, inconsistent NAP data, outdated photos. Google doesn't know what you do or where you serve." },
    { title: "Generic homepage targeting nothing", description: "Your site says 'welcome' and lists services. It doesn't target any specific search query, lacks schema markup, and doesn't answer what Atlanta searchers are actually typing into Google." },
    { title: "Zero local citations or backlinks", description: "You're not listed on Atlanta Chamber, Yelp, Angi, BBB, or the 40+ citation sources Google uses to verify local businesses. Competitors with 80+ citations outrank you automatically." },
    { title: "No review strategy", description: "Competitors have 200+ Google reviews at 4.8 stars. You have 14 reviews from two years ago. Review volume and recency are top-5 ranking factors for the local pack." },
  ],
  processHeading: "Our 4-step Atlanta SEO process",
  processIntro: "Clear path from audit to results. No black-box tactics, no 50-page reports you never read.",
  processSteps: locationProcess("Atlanta"),
  resultsHeading: "Atlanta clients with measurable results",
  resultsIntro: "Real outcomes from real Atlanta-metro businesses — each with specific metrics, not vague claims.",
  caseStudies: pick(caseStudyPool, [0, 1, 2]),
  guaranteeHeadline: guarantee.headline,
  guaranteeBody: guarantee.body,
  pricingHeading: "Atlanta SEO pricing",
  pricingIntro: "Three transparent tiers. No hidden fees. Most Atlanta businesses start with Growth.",
  pricingTiers: locationPricing("Atlanta"),
  faqs: [
    { question: "How much do Atlanta SEO services cost?", answer: "Atlanta SEO typically ranges from $1,500 to $5,000+ per month depending on scope and competition. Our Starter tier begins at $1,500/month for single-neighborhood businesses. Agencies charging under $800/month almost always use tactics that risk penalizing your site." },
    { question: "How long does it take to see results in Atlanta?", answer: "Most clients see measurable ranking movement within 4–6 weeks and meaningful traffic gains by months 3–4. Our written guarantee commits to a 20% traffic increase within 6 months." },
    { question: "Is organic search worth the investment for a small Atlanta business?", answer: "46% of Google searches have local intent. A small Atlanta business investing $2,500/month in SEO typically breaks even by month 4, based on our client data across 2023–2025." },
    { question: "What makes Georgia SEO Experts different from other Atlanta agencies?", answer: "Written 20% traffic guarantee, in-house Webflow development as a Certified Agency, and a cap of 100 active clients to maintain quality. Most agencies offer none of these." },
    { question: "Do you work with businesses outside Atlanta?", answer: "Yes. We serve all of Georgia — Marietta, Alpharetta, Savannah, Augusta, Athens — plus contractors and trades businesses nationwide." },
  ],
  internalLinks: [
    { href: "/", anchor: "Georgia SEO Experts", description: "Full agency overview and client work." },
    { href: "/services/local-seo", anchor: "Local SEO and Map Pack optimization", description: "Deep dive on our local search process." },
    { href: "/services/technical-seo", anchor: "Technical SEO audits", description: "Core Web Vitals, schema, and site architecture." },
    { href: "/services/seo-for-contractors", anchor: "Contractor SEO services", description: "Industry-specific SEO for trades." },
    { href: "/locations/marietta-seo", anchor: "Marietta SEO services", description: "SEO for Marietta businesses." },
    { href: "/tools/seo-roi-calculator", anchor: "SEO ROI calculator", description: "Estimate your potential return." },
  ],
  ctaHeading: "Get a free Atlanta SEO audit",
  ctaSubhead: "45-minute audit call. We show your top 5 competitors, the keywords you're missing, and the 3 highest-ROI actions for this month.",
  locality: "Atlanta", stateCode: "GA",
  nearbyAreas: ["Marietta", "Roswell", "Alpharetta", "Sandy Springs", "Decatur", "Buckhead", "Midtown", "Dunwoody", "Brookhaven", "Smyrna"],
  geoCoordinates: { latitude: 33.749, longitude: -84.388 },
};

const mariettaPage: SeoPageConfig = {
  slug: "marietta-seo",
  type: "location",
  primaryKeyword: "Marietta SEO",
  secondaryKeywords: ["Marietta SEO company", "SEO company Marietta GA", "SEO Marietta", "Marietta search engine optimization"],
  metaTitle: "Marietta SEO Company | Local Search Experts | Georgia SEO Experts",
  metaDescription: "Marietta SEO services that help local businesses gain organic visibility. 47% average traffic increase in 6 months — guaranteed. Free SEO audit for Marietta businesses.",
  heroEyebrow: "Marietta SEO",
  heroH1: "Marietta SEO That Puts Your Business on the Map",
  heroAnswer: "We help Marietta businesses increase organic search visibility and capture local customers actively looking for their services. With keyword difficulty under 10 for most Marietta search terms, the opportunity to rank is wide open — and we specialize in making that happen fast.",
  heroBullets: ["Marietta-area keyword difficulty averages just 6–17", "47% average organic traffic increase in 6 months", "100+ Georgia businesses served", "Written traffic growth guarantee"],
  problemHeading: "Why Marietta businesses get overlooked online",
  problemIntro: "Marietta has a thriving local economy but most businesses lose to Atlanta-based competitors in search results because they haven't invested in local optimization.",
  painPoints: [
    { title: "Lumped in with Atlanta results", description: "Google defaults to showing Atlanta businesses for Marietta searchers unless your site explicitly signals Marietta as your service area with proper GBP setup, local citations, and location-specific content." },
    { title: "No Marietta-specific content", description: "Your site mentions 'metro Atlanta' but never Marietta, Cobb County, or nearby neighborhoods. Without location-specific pages, you can't rank for Marietta queries." },
    { title: "Sparse citation profile", description: "You're listed on a few national directories but missing from Cobb Chamber, Marietta Square merchants, and the 30+ Marietta-relevant sources Google trusts." },
    { title: "Competitor gap is closing", description: "Marietta SEO difficulty is still low (6–17), but more businesses are investing every quarter. The window to claim these rankings affordably is narrowing." },
  ],
  processHeading: "How we rank Marietta businesses",
  processIntro: "Same proven framework, tuned for the Marietta / Cobb County market.",
  processSteps: locationProcess("Marietta"),
  resultsHeading: "Results from the Atlanta metro area",
  resultsIntro: "We've grown traffic for businesses across the metro — here's what that looks like in practice.",
  caseStudies: pick(caseStudyPool, [1, 2, 0]),
  guaranteeHeadline: guarantee.headline, guaranteeBody: guarantee.body,
  pricingHeading: "Marietta SEO pricing", pricingIntro: "Transparent tiers built for Marietta businesses.", pricingTiers: locationPricing("Marietta"),
  faqs: [
    { question: "How much does SEO cost in Marietta?", answer: "Marietta SEO ranges from $1,500 to $5,000/month. Because competition is lower than Atlanta proper, many Marietta businesses see strong results at the $1,500–$2,500/month level." },
    { question: "Can a Marietta business really compete with Atlanta in search?", answer: "Yes — and the data backs it up. Marietta-specific keywords have difficulty scores of 6–17, far lower than Atlanta's 23–31. A well-optimized Marietta business can rank faster and more affordably than an Atlanta competitor." },
    { question: "How long until we rank for Marietta keywords?", answer: "Given the low difficulty, most Marietta clients see ranking movement within 3–4 weeks and meaningful traffic gains by month 2–3. Our written guarantee is 20% traffic growth in 6 months." },
    { question: "Do you serve areas near Marietta?", answer: "Yes — we cover Kennesaw, Smyrna, Roswell, and the broader Cobb County area in addition to Marietta proper." },
  ],
  internalLinks: [
    { href: "/", anchor: "Georgia SEO Experts", description: "Full agency overview." },
    { href: "/locations/seo-services-atlanta", anchor: "Atlanta SEO services", description: "Our Atlanta-metro offering." },
    { href: "/locations/seo-roswell", anchor: "Roswell SEO", description: "Nearby Roswell services." },
    { href: "/services/local-seo", anchor: "Local SEO deep dive", description: "Our local search methodology." },
    { href: "/services/seo-for-contractors", anchor: "Contractor SEO", description: "Industry-specific for trades." },
  ],
  ctaHeading: "Get a free Marietta SEO audit", ctaSubhead: "45-minute call. We audit your GBP, benchmark your Marietta competitors, and show the fastest path to local rankings.",
  locality: "Marietta", stateCode: "GA", nearbyAreas: ["Kennesaw", "Smyrna", "Roswell", "Acworth", "Powder Springs"], geoCoordinates: { latitude: 33.9526, longitude: -84.5499 },
};

const augustaPage: SeoPageConfig = {
  slug: "seo-augusta-ga",
  type: "location",
  primaryKeyword: "SEO Augusta GA",
  secondaryKeywords: ["Augusta GA SEO", "Augusta search engine optimization", "SEO company Augusta", "Augusta digital marketing"],
  metaTitle: "SEO Augusta GA | Local Search Optimization | Georgia SEO Experts",
  metaDescription: "Augusta GA SEO services that grow organic traffic for local businesses. 47% average increase in 6 months — guaranteed. Free SEO audit for Augusta businesses.",
  heroEyebrow: "Augusta GA SEO",
  heroH1: "Augusta GA Search Optimization That Delivers Traffic",
  heroAnswer: "Augusta businesses have a massive opportunity in organic search. With keyword difficulty averaging just 9–20, the competitive landscape is wide open compared to Atlanta. We help Augusta businesses capture that opportunity with data-driven optimization strategies.",
  heroBullets: ["Augusta keyword difficulty averages 9–20", "47% average traffic increase in 6 months", "Serving Augusta, Evans, Martinez, and CSRA", "Written performance guarantee"],
  problemHeading: "Why Augusta businesses miss out on local search",
  problemIntro: "Augusta has growing search demand but most local businesses haven't invested in optimization — creating a wide-open opportunity for those who move now.",
  painPoints: [
    { title: "Low digital competition means easy wins", description: "Most Augusta businesses have minimal SEO. Basic optimization — proper GBP setup, local citations, and keyword-targeted content — is often enough to reach page 1 because so few competitors are doing it." },
    { title: "No presence beyond the homepage", description: "Your site has a homepage and an 'About' page. Searchers in Augusta are looking for specific services in specific areas — Evans, Martinez, North Augusta — and you have no pages targeting those terms." },
    { title: "Missing CSRA-specific citations", description: "Augusta businesses need citations from CSRA-relevant sources: Augusta Metro Chamber, Augusta Magazine, and regional directories. Most only have generic national listings." },
    { title: "Google Business Profile underutilized", description: "Your GBP has one category, no service list, and reviews from 2+ years ago. A complete GBP with weekly posts and active review management outranks incomplete profiles consistently." },
  ],
  processHeading: "How we grow Augusta businesses in search",
  processIntro: "Proven framework adapted to the CSRA market.",
  processSteps: locationProcess("Augusta"),
  resultsHeading: "Georgia businesses with measurable results",
  resultsIntro: "Results from across Georgia — the same methodology we bring to Augusta.",
  caseStudies: pick(caseStudyPool, [5, 0, 1]),
  guaranteeHeadline: guarantee.headline, guaranteeBody: guarantee.body,
  pricingHeading: "Augusta SEO pricing", pricingIntro: "Transparent tiers built for Augusta-area businesses.", pricingTiers: locationPricing("Augusta"),
  faqs: [
    { question: "How much does SEO cost in Augusta GA?", answer: "Augusta SEO ranges from $1,500 to $5,000/month. Because local competition is lower than Atlanta, many Augusta businesses achieve strong results at the Starter tier ($1,500/month)." },
    { question: "Is there enough search volume in Augusta to justify SEO?", answer: "Yes. 'SEO Augusta GA' alone has 260 monthly searches, and service-specific queries like 'plumber Augusta GA' or 'lawyer Augusta GA' each have hundreds more. Combined, the local search opportunity in the CSRA is substantial." },
    { question: "How fast can an Augusta business rank?", answer: "Given difficulty scores of 9–20, most Augusta clients see ranking movement within 3 weeks and meaningful traffic by month 2. Our guarantee is 20% growth in 6 months." },
    { question: "Do you cover Evans and Martinez?", answer: "Yes. Our Augusta engagement covers the full CSRA area including Evans, Martinez, North Augusta, Grovetown, and Columbia County." },
  ],
  internalLinks: [
    { href: "/", anchor: "Georgia SEO Experts", description: "Full agency overview." },
    { href: "/locations/seo-services-atlanta", anchor: "Atlanta SEO", description: "Our Atlanta offering." },
    { href: "/locations/seo-georgia", anchor: "Georgia-wide SEO", description: "Statewide services." },
    { href: "/services/local-seo", anchor: "Local SEO services", description: "Map Pack optimization." },
    { href: "/services/seo-for-small-business", anchor: "Small business SEO", description: "Affordable packages for SMBs." },
  ],
  ctaHeading: "Get a free Augusta SEO audit", ctaSubhead: "45-minute call. We benchmark your CSRA competitors and show the fastest path to local visibility.",
  locality: "Augusta", stateCode: "GA", nearbyAreas: ["Evans", "Martinez", "North Augusta", "Grovetown", "Columbia County"], geoCoordinates: { latitude: 33.4735, longitude: -81.9748 },
};

const alpharettaPage: SeoPageConfig = {
  slug: "seo-company-alpharetta",
  type: "location",
  primaryKeyword: "SEO company Alpharetta",
  secondaryKeywords: ["Alpharetta SEO company", "Alpharetta SEO", "SEO Alpharetta", "Alpharetta search engine optimization", "SEO company Alpharetta GA"],
  metaTitle: "SEO Company Alpharetta GA | Local Search Growth | Georgia SEO Experts",
  metaDescription: "Alpharetta SEO company helping local businesses grow organic traffic. 47% average increase in 6 months — guaranteed. Free audit for Alpharetta businesses.",
  heroEyebrow: "Alpharetta SEO",
  heroH1: "Alpharetta SEO Company Focused on Measurable Growth",
  heroAnswer: "Alpharetta businesses compete in one of Georgia's fastest-growing tech corridors. We help companies along the GA-400 corridor cut through digital noise with search optimization that delivers trackable traffic — not vanity metrics.",
  heroBullets: ["Alpharetta keyword difficulty averages 10–14", "47% average organic traffic increase in 6 months", "Serving Alpharetta, Johns Creek, Milton, and Roswell", "Written traffic guarantee in every contract"],
  problemHeading: "Why Alpharetta businesses underperform in search",
  problemIntro: "Alpharetta has a highly educated, high-income population that searches online before making any purchasing decision. If you're not visible, you're invisible to your best customers.",
  painPoints: [
    { title: "Tech corridor competition without tech-level SEO", description: "Alpharetta is home to hundreds of tech companies with sophisticated digital marketing. Small and mid-market businesses competing for local queries need the same technical SEO rigor to keep up." },
    { title: "No North Fulton content strategy", description: "Your site targets 'Atlanta' or 'Georgia' but never mentions Alpharetta, Johns Creek, Milton, or specific GA-400 corridor terms. Location-specific content is what separates page 1 from page 3." },
    { title: "Weak backlink profile", description: "You have a handful of directory listings but no links from Alpharetta-specific sources: North Fulton Chamber, Awesome Alpharetta, Technology Association of Georgia, or local business groups." },
    { title: "Mobile experience gaps", description: "58% of local searches happen on mobile. If your site loads slowly or doesn't render well on phones, Google deprioritizes you for Alpharetta mobile searches regardless of content quality." },
  ],
  processHeading: "Our Alpharetta SEO approach",
  processIntro: "Built for the competitive North Fulton corridor.",
  processSteps: locationProcess("Alpharetta"),
  resultsHeading: "North Fulton area client results",
  resultsIntro: "Results from businesses in the Alpharetta / North Fulton area.",
  caseStudies: pick(caseStudyPool, [2, 0, 5]),
  guaranteeHeadline: guarantee.headline, guaranteeBody: guarantee.body,
  pricingHeading: "Alpharetta SEO pricing", pricingIntro: "Transparent tiers for Alpharetta businesses.", pricingTiers: locationPricing("Alpharetta"),
  faqs: [
    { question: "How competitive is SEO in Alpharetta?", answer: "Alpharetta keyword difficulty averages 10–14 — significantly lower than Atlanta proper (23–31). This means a well-optimized Alpharetta business can reach page 1 faster and more affordably than trying to rank for broader Atlanta terms." },
    { question: "How much does Alpharetta SEO cost?", answer: "Alpharetta SEO ranges from $1,500 to $5,000/month depending on scope. Most Alpharetta businesses start at the Growth tier ($2,500/month) given the area's competitive tech corridor." },
    { question: "Do you serve Johns Creek and Milton?", answer: "Yes. Our Alpharetta engagement covers the full North Fulton area: Johns Creek, Milton, Roswell, and the GA-400 corridor." },
    { question: "Can you help with both local and national SEO?", answer: "Yes. Many Alpharetta businesses serve both local customers and national clients. We build a strategy that captures local Map Pack traffic and broader organic visibility simultaneously." },
  ],
  internalLinks: [
    { href: "/", anchor: "Georgia SEO Experts", description: "Full agency overview." },
    { href: "/locations/seo-services-atlanta", anchor: "Atlanta SEO", description: "Our Atlanta offering." },
    { href: "/locations/seo-roswell", anchor: "Roswell SEO", description: "Nearby Roswell services." },
    { href: "/locations/marietta-seo", anchor: "Marietta SEO", description: "Marietta optimization." },
    { href: "/services/technical-seo", anchor: "Technical SEO", description: "Site speed and architecture." },
  ],
  ctaHeading: "Get a free Alpharetta SEO audit", ctaSubhead: "45-minute call. We benchmark your North Fulton competitors and map the fastest route to local search visibility.",
  locality: "Alpharetta", stateCode: "GA", nearbyAreas: ["Johns Creek", "Milton", "Roswell", "Cumming", "Duluth"], geoCoordinates: { latitude: 34.0754, longitude: -84.2941 },
};

const roswellPage: SeoPageConfig = {
  slug: "seo-roswell",
  type: "location",
  primaryKeyword: "SEO Roswell",
  secondaryKeywords: ["Roswell GA SEO", "Roswell search engine optimization", "SEO company Roswell"],
  metaTitle: "SEO Roswell GA | Local Search Services | Georgia SEO Experts",
  metaDescription: "Roswell GA SEO services that grow organic visibility for local businesses. 47% average traffic increase — guaranteed. Free audit for Roswell businesses.",
  heroEyebrow: "Roswell SEO",
  heroH1: "Roswell SEO Services for Growing Local Businesses",
  heroAnswer: "Roswell has keyword difficulty as low as 8 — one of the easiest markets in metro Atlanta to rank in. We help Roswell businesses take advantage of this low competition window before it closes with targeted local optimization strategies.",
  heroBullets: ["Roswell keyword difficulty as low as 8", "47% average traffic increase in 6 months", "Serving Roswell, East Cobb, and Sandy Springs", "Written performance guarantee"],
  problemHeading: "The Roswell search opportunity most businesses miss",
  problemIntro: "Roswell has strong local search demand but extremely low competition — most businesses aren't even trying to rank.",
  painPoints: [
    { title: "Almost no local competition", description: "Roswell SEO difficulty is 8 — extremely low. Basic optimization can earn page 1 positions that would take 6+ months in Atlanta. The catch: this window narrows every quarter." },
    { title: "Defaulting to 'Atlanta' targeting", description: "Your site says 'serving Atlanta' when you primarily serve Roswell, East Cobb, and Sandy Springs. Google rewards specificity — a Roswell-targeted page beats a generic Atlanta page for Roswell searches." },
    { title: "No review momentum", description: "Roswell searchers check reviews before calling. Businesses with 50+ recent reviews at 4.5+ stars dominate local intent queries. Most Roswell businesses have fewer than 20." },
    { title: "Missing local content", description: "No pages targeting Roswell neighborhoods, Canton Street businesses, or specific Roswell service queries. Each missing page is a missed ranking opportunity." },
  ],
  processHeading: "How we rank Roswell businesses",
  processIntro: "Same framework, tuned for Roswell's low-competition market.",
  processSteps: locationProcess("Roswell"),
  resultsHeading: "North metro area results",
  resultsIntro: "Businesses in the Roswell / North Fulton area we've helped grow.",
  caseStudies: pick(caseStudyPool, [1, 5, 2]),
  guaranteeHeadline: guarantee.headline, guaranteeBody: guarantee.body,
  pricingHeading: "Roswell SEO pricing", pricingIntro: "Transparent tiers for Roswell businesses.", pricingTiers: locationPricing("Roswell"),
  faqs: [
    { question: "How much does SEO cost in Roswell?", answer: "Roswell SEO starts at $1,500/month. Given the low competition (difficulty 8), many Roswell businesses see strong results at the Starter tier — making it one of the most affordable SEO investments in metro Atlanta." },
    { question: "How fast can a Roswell business rank?", answer: "At difficulty 8, Roswell keywords are among the fastest to rank for in the metro area. Many clients see page 1 movement within 3–4 weeks of starting." },
    { question: "Do you serve Sandy Springs and East Cobb?", answer: "Yes. Our Roswell engagement covers East Cobb, Sandy Springs, Dunwoody, and the surrounding area." },
  ],
  internalLinks: [
    { href: "/", anchor: "Georgia SEO Experts", description: "Full agency overview." },
    { href: "/locations/seo-services-atlanta", anchor: "Atlanta SEO", description: "Our Atlanta offering." },
    { href: "/locations/seo-company-alpharetta", anchor: "Alpharetta SEO", description: "Nearby Alpharetta services." },
    { href: "/services/local-seo", anchor: "Local SEO services", description: "Map Pack optimization." },
  ],
  ctaHeading: "Get a free Roswell SEO audit", ctaSubhead: "45-minute call. We show your Roswell competitors and the fastest route to local visibility.",
  locality: "Roswell", stateCode: "GA", nearbyAreas: ["East Cobb", "Sandy Springs", "Dunwoody", "Alpharetta"], geoCoordinates: { latitude: 34.0232, longitude: -84.3616 },
};

const kennesawPage: SeoPageConfig = {
  slug: "seo-company-kennesaw-ga",
  type: "location",
  primaryKeyword: "SEO company Kennesaw GA",
  secondaryKeywords: ["Kennesaw SEO", "SEO Kennesaw", "Kennesaw search optimization"],
  metaTitle: "SEO Company Kennesaw GA | Local Search Growth | Georgia SEO Experts",
  metaDescription: "Kennesaw GA SEO company helping local businesses gain organic visibility. 47% average traffic increase — guaranteed. Free audit for Kennesaw businesses.",
  heroEyebrow: "Kennesaw SEO",
  heroH1: "Kennesaw GA SEO Company Built for Local Growth",
  heroAnswer: "Kennesaw businesses sit in a sweet spot: growing population, strong local economy, and very low search competition. We help Kennesaw businesses capitalize on this by building organic visibility that compounds month over month.",
  heroBullets: ["Kennesaw keyword difficulty as low as 8", "47% average traffic lift in 6 months", "Serving Kennesaw, Acworth, and West Cobb", "Written performance guarantee"],
  problemHeading: "Why Kennesaw businesses rank behind Marietta and Atlanta",
  problemIntro: "Most Kennesaw businesses target 'Atlanta' or 'Marietta' in their SEO — missing the Kennesaw-specific queries their actual customers are typing.",
  painPoints: [
    { title: "Overshadowed by Marietta and Atlanta", description: "Kennesaw businesses get lumped into broader 'metro Atlanta' results. Without Kennesaw-specific pages and GBP optimization, Google serves Atlanta or Marietta businesses instead." },
    { title: "Untapped local keywords", description: "Searches like 'plumber Kennesaw GA' and 'dentist Kennesaw' have real volume but almost no one is optimizing for them. First movers win." },
    { title: "No Cobb County citation presence", description: "Beyond basic Yelp and Google, most Kennesaw businesses are missing from Cobb-specific directories and Kennesaw Business Association listings." },
    { title: "Outdated or no website", description: "Many Kennesaw small businesses still run on a 2018-era site (or no site at all). Modern SEO requires fast load times, mobile responsiveness, and structured data." },
  ],
  processHeading: "How we rank Kennesaw businesses",
  processIntro: "Proven framework for the Kennesaw / West Cobb market.",
  processSteps: locationProcess("Kennesaw"),
  resultsHeading: "Cobb County area results",
  resultsIntro: "Results from businesses in the Kennesaw / Marietta / Cobb County area.",
  caseStudies: pick(caseStudyPool, [0, 4, 5]),
  guaranteeHeadline: guarantee.headline, guaranteeBody: guarantee.body,
  pricingHeading: "Kennesaw SEO pricing", pricingIntro: "Transparent tiers for Kennesaw businesses.", pricingTiers: locationPricing("Kennesaw"),
  faqs: [
    { question: "How much does Kennesaw SEO cost?", answer: "Kennesaw SEO starts at $1,500/month. Low competition means many businesses achieve meaningful results at the Starter tier — one of the most cost-effective SEO markets in metro Atlanta." },
    { question: "Is there enough search demand in Kennesaw?", answer: "Yes. Kennesaw-specific service queries collectively represent hundreds of monthly searches. Combined with Acworth and West Cobb, the total addressable search volume is substantial." },
    { question: "Do you serve Acworth and Woodstock?", answer: "Yes. Our Kennesaw engagement covers Acworth, Woodstock, and the broader West Cobb and Cherokee County area." },
  ],
  internalLinks: [
    { href: "/", anchor: "Georgia SEO Experts", description: "Full agency overview." },
    { href: "/locations/marietta-seo", anchor: "Marietta SEO", description: "Nearby Marietta services." },
    { href: "/locations/seo-services-atlanta", anchor: "Atlanta SEO", description: "Our Atlanta offering." },
    { href: "/services/local-seo", anchor: "Local SEO services", description: "Map Pack optimization." },
  ],
  ctaHeading: "Get a free Kennesaw SEO audit", ctaSubhead: "45-minute call. We benchmark your local competitors and show the fastest path to Kennesaw visibility.",
  locality: "Kennesaw", stateCode: "GA", nearbyAreas: ["Acworth", "Woodstock", "West Cobb"], geoCoordinates: { latitude: 34.0234, longitude: -84.6155 },
};

const georgiaPage: SeoPageConfig = {
  slug: "seo-georgia",
  type: "location",
  primaryKeyword: "SEO Georgia",
  secondaryKeywords: ["SEO companies Georgia", "Georgia SEO company", "SEO agencies Georgia", "Georgia search engine optimization", "SEO services in Georgia"],
  metaTitle: "SEO Georgia | Statewide Search Optimization | Georgia SEO Experts",
  metaDescription: "Georgia SEO services for businesses across the state. 47% average traffic increase in 6 months — guaranteed. Serving Atlanta, Savannah, Augusta, and all GA metros.",
  heroEyebrow: "Georgia SEO",
  heroH1: "Georgia SEO Services for Businesses Statewide",
  heroAnswer: "Georgia SEO Experts serves businesses in every major Georgia metro — from Atlanta to Savannah, Augusta to Columbus. Our statewide approach combines local optimization for your primary market with broader organic visibility across the state.",
  heroBullets: ["100+ Georgia businesses served since 2019", "165+ websites built and optimized", "Covering all major GA metros", "Written 20% traffic guarantee"],
  problemHeading: "Why Georgia businesses get stuck at page 2",
  problemIntro: "Georgia is a diverse search market — what works in Atlanta won't work in Savannah. Most agencies apply a one-size-fits-all approach and wonder why results stall.",
  painPoints: [
    { title: "Atlanta-centric strategy for a statewide business", description: "If you serve multiple Georgia cities, your SEO needs city-specific pages, separate GBP listings, and localized citation profiles for each market. One homepage can't rank in 5 different cities." },
    { title: "No multi-location SEO architecture", description: "Businesses serving multiple GA metros need hub-and-spoke site architecture: a statewide hub page linking to city-specific spoke pages. Most businesses have a flat site structure that can't compete." },
    { title: "Ignoring secondary Georgia metros", description: "Savannah, Augusta, Macon, Columbus, and Athens each have growing search demand with lower competition than Atlanta. Businesses that optimize for these markets capture traffic their competitors ignore." },
    { title: "Inconsistent NAP across locations", description: "Your business name, address, and phone number are different across directories for different locations. This inconsistency confuses Google and tanks your local rankings in every city." },
  ],
  processHeading: "How we grow Georgia businesses in search",
  processIntro: "Multi-market framework for statewide organic visibility.",
  processSteps: locationProcess("Georgia"),
  resultsHeading: "Results from Georgia businesses",
  resultsIntro: "Real outcomes from businesses across the state.",
  caseStudies: pick(caseStudyPool, [5, 3, 4]),
  guaranteeHeadline: guarantee.headline, guaranteeBody: guarantee.body,
  pricingHeading: "Georgia SEO pricing", pricingIntro: "Tiers that scale with your statewide footprint.", pricingTiers: locationPricing("Georgia"),
  faqs: [
    { question: "Do you serve all of Georgia?", answer: "Yes. We serve every major Georgia metro: Atlanta, Savannah, Augusta, Columbus, Macon, Athens, Marietta, Alpharetta, Roswell, and more. Each market gets its own localized optimization strategy." },
    { question: "How does statewide SEO differ from local?", answer: "Statewide SEO requires multi-location architecture: separate pages, GBP listings, and citation profiles per city. It's more complex but captures far more total search volume than single-city optimization." },
    { question: "How much does Georgia-wide SEO cost?", answer: "Statewide SEO typically requires the Growth ($2,500/month) or Scale ($5,000+/month) tier depending on how many markets you want to cover. Each additional city adds page production and citation work." },
    { question: "Can I start with one city and expand?", answer: "Yes. Most statewide clients start with their primary market and add cities as results prove out. We build the site architecture to support expansion from day one." },
  ],
  internalLinks: [
    { href: "/", anchor: "Georgia SEO Experts", description: "Full agency overview." },
    { href: "/locations/seo-services-atlanta", anchor: "Atlanta SEO", description: "Our flagship Atlanta offering." },
    { href: "/locations/seo-augusta-ga", anchor: "Augusta SEO", description: "CSRA market optimization." },
    { href: "/locations/marietta-seo", anchor: "Marietta SEO", description: "Cobb County services." },
    { href: "/services/seo-for-small-business", anchor: "Small business SEO", description: "Affordable packages for SMBs." },
  ],
  ctaHeading: "Get a free Georgia SEO audit", ctaSubhead: "45-minute call. We assess your statewide footprint and map the highest-ROI markets to target first.",
  locality: "Atlanta", stateCode: "GA", nearbyAreas: ["Savannah", "Augusta", "Columbus", "Macon", "Athens", "Marietta", "Roswell", "Alpharetta"],
  geoCoordinates: { latitude: 33.749, longitude: -84.388 },
};

/* ════════════════════════════════════════════════════
   INDUSTRY PAGES
   ════════════════════════════════════════════════════ */

const forContractorsPage: SeoPageConfig = {
  slug: "seo-for-contractors",
  type: "industry",
  primaryKeyword: "SEO for contractors",
  secondaryKeywords: ["contractor SEO", "contractor SEO services", "construction SEO", "local SEO for contractors", "SEO services for contractors"],
  metaTitle: "SEO for Contractors | Contractor SEO Services | Georgia SEO Experts",
  metaDescription: "SEO for contractors that drives measurable organic traffic. 47% average traffic increase in 6 months — guaranteed. Free audit for contractors.",
  heroEyebrow: "Contractor SEO",
  heroH1: "SEO for Contractors That Drives Measurable Traffic Growth",
  heroAnswer: "Search optimization for contractors helps construction businesses appear when homeowners and property managers search for services like 'general contractor near me' or 'roof replacement [city].' Done well, it drives consistent organic traffic at a fraction of what paid ads cost.",
  heroBullets: ["Built for GCs, roofers, plumbers, HVAC, and specialty trades", "47% average organic traffic lift in 6 months", "100+ contractor clients served", "Written traffic guarantee in every contract"],
  problemHeading: "Why most contractor websites don't generate traffic",
  problemIntro: "Contractors are one of the most underserved industries in digital marketing. Agencies treat every trade the same and miss the buying signals unique to construction searches.",
  painPoints: [
    { title: "No service-area pages", description: "A contractor serving 8 counties should have 8 service-area pages — not one 'Areas We Serve' bullet list. Each county needs its own URL, H1, and local proof to rank." },
    { title: "Missing structured data", description: "Contractors need Service schema for each trade, LocalBusiness schema with service-area coordinates, and review schema. Most contractor sites have zero structured data." },
    { title: "Content that doesn't match buyer intent", description: "You have pages titled 'Services' and 'About Us.' Buyers search 'roof replacement cost Atlanta' and 'emergency plumber 24 hour.' The gap is why you don't rank." },
    { title: "Underutilized Google Business Profile", description: "One category, no service list, no job photos, sporadic review replies. Optimized GBP profiles get significantly more calls than non-optimized ones — and GBP optimization is free." },
  ],
  processHeading: "Our contractor SEO framework",
  processIntro: "Built specifically for construction, trades, and service contractors.",
  processSteps: industryProcess("Contractors"),
  resultsHeading: "Contractor clients with real results",
  resultsIntro: "Construction is a results-only business. Here are specific outcomes we've delivered.",
  caseStudies: pick(caseStudyPool, [0, 3, 4]),
  guaranteeHeadline: guarantee.headline, guaranteeBody: guarantee.body,
  pricingHeading: "Contractor SEO pricing", pricingIntro: "Priced below the cost of equivalent paid ad traffic, every time.", pricingTiers: industryPricing("contractors"),
  faqs: [
    { question: "How much does SEO for contractors cost?", answer: "Contractor SEO ranges from $1,500 to $5,000/month. Solo contractors start at $1,500. Growing operations with 5–20 employees usually invest $2,500/month. The math: if your average job is worth $5,000+, a single new client per month pays for SEO." },
    { question: "How long until contractor SEO shows results?", answer: "Most contractors see their first organic traffic within 60–90 days and meaningful volume by month 4–6. Local service-area pages tend to rank faster than general keywords because contractor search competition is relatively low." },
    { question: "Is organic search better than Google Ads for contractors?", answer: "They serve different stages. Ads generate immediate traffic but cost $35–$150 per click for contractor keywords and stop the day you stop paying. SEO takes 4–6 months to build but delivers traffic at 40–70% lower cost and compounds over time." },
    { question: "Do you work with contractors outside Georgia?", answer: "Yes. Our contractor SEO program is national. We work with GCs, roofers, plumbers, HVAC, electricians, and specialty trades across all 50 states." },
    { question: "What should contractor SEO include?", answer: "At minimum: Google Business Profile optimization, local citations, service-area page production, on-page optimization with schema markup, industry-specific link building, review acquisition, and monthly reporting." },
  ],
  internalLinks: [
    { href: "/", anchor: "Georgia SEO Experts", description: "Full agency overview." },
    { href: "/services/seo-for-roofers", anchor: "Roofing SEO", description: "Roofer-specific optimization." },
    { href: "/services/seo-for-plumbers", anchor: "Plumber SEO", description: "Plumbing-specific optimization." },
    { href: "/services/seo-for-hvac", anchor: "HVAC SEO", description: "HVAC-specific optimization." },
    { href: "/locations/seo-services-atlanta", anchor: "Atlanta SEO services", description: "Atlanta-focused optimization." },
    { href: "/services/local-seo", anchor: "Local SEO deep dive", description: "Our local search methodology." },
  ],
  ctaHeading: "Get a free contractor SEO audit", ctaSubhead: "45-minute call. We audit your GBP, benchmark your top 5 competitors, and show the keywords that would drive the most traffic for your trade.",
  industryName: "Contractors", industryExamples: ["General contractors", "Roofers", "Plumbers", "HVAC", "Electricians", "Painters", "Landscapers"],
};

const mkIndustryPage = (
  slug: string, name: string, primaryKw: string, secondaryKws: string[],
  metaTitle: string, metaDesc: string, h1: string, heroAnswer: string, heroBullets: string[],
  problemHeading: string, problemIntro: string, painPoints: SeoPagePainPoint[],
  faqs: SeoPageFaq[], caseStudyIndices: number[], links: SeoPageInternalLink[],
  examples: string[]
): SeoPageConfig => ({
  slug, type: "industry", primaryKeyword: primaryKw, secondaryKeywords: secondaryKws,
  metaTitle, metaDescription: metaDesc, heroEyebrow: name, heroH1: h1, heroAnswer, heroBullets,
  problemHeading, problemIntro, painPoints,
  processHeading: `Our ${name.toLowerCase()} SEO framework`,
  processIntro: `Built for the ${name.toLowerCase()} industry.`,
  processSteps: industryProcess(name),
  resultsHeading: `${name} client results`,
  resultsIntro: "Specific outcomes we've delivered — each with trackable metrics.",
  caseStudies: pick(caseStudyPool, caseStudyIndices),
  guaranteeHeadline: guarantee.headline, guaranteeBody: guarantee.body,
  pricingHeading: `${name} SEO pricing`,
  pricingIntro: `Transparent tiers built for ${name.toLowerCase()} economics.`,
  pricingTiers: industryPricing(name.toLowerCase()),
  faqs, internalLinks: links,
  ctaHeading: `Get a free ${name.toLowerCase()} SEO audit`,
  ctaSubhead: "45-minute call. We audit your current visibility, benchmark competitors, and map the fastest path to organic visibility.",
  industryName: name, industryExamples: examples,
});

const rooferPage = mkIndustryPage(
  "seo-for-roofers", "Roofer", "roofing SEO", ["roofer SEO", "SEO for roofing contractors", "roofing contractor SEO", "local SEO for roofing companies", "roofer SEO agency"],
  "Roofing SEO | SEO for Roofing Companies | Georgia SEO Experts",
  "Roofing SEO services that drive measurable traffic growth from organic search. 47% average traffic increase in 6 months — guaranteed. Free audit for roofers.",
  "Roofing SEO That Drives Organic Search Visibility",
  "Roofing businesses depend on steady organic visibility. Organic search optimization helps roofing companies appear for high-value queries like 'roof replacement [city]' and 'emergency roof repair near me' — driving traffic at a fraction of what HomeAdvisor or Google Ads charge.",
  ["Roofing keyword CPC averages $15 — SEO drives traffic for less", "47% average organic traffic increase in 6 months", "Serving roofers across Georgia and nationwide", "Written traffic guarantee"],
  "Why most roofing websites don't rank",
  "Roofing is one of the highest-CPC industries in Google Ads ($15+ per click). Yet most roofer websites are completely unoptimized for organic search.",
  [
    { title: "No storm-damage or seasonal content", description: "Roofing demand spikes after storms and during specific seasons. Without timely, location-specific content addressing these events, you miss the highest-intent searches." },
    { title: "Missing service-area coverage", description: "You serve 10 counties but have one 'Service Area' page. Each county and major neighborhood needs its own optimized page to rank locally." },
    { title: "No before/after portfolio", description: "Homeowners want to see your work before calling. A portfolio with before/after images, structured data, and location tags drives both trust and rankings." },
    { title: "Relying on lead-gen platforms", description: "HomeAdvisor and Angi charge $30–$80 per lead and you share it with 3 other roofers. Organic traffic costs less and are exclusive to you." },
  ],
  [
    { question: "How much does roofing SEO cost?", answer: "Roofing SEO ranges from $1,500 to $5,000/month. Most growing roofing companies invest $2,500/month — roughly the cost of 15 HomeAdvisor referrals, but generating far more volume over time." },
    { question: "How long until roofing SEO shows results?", answer: "Most roofing clients see traffic growth within 60–90 days and steady traffic growth by month 4–6. Storm-related and seasonal content can rank even faster due to timely relevance." },
    { question: "Is SEO better than HomeAdvisor for roofers?", answer: "They complement each other. HomeAdvisor gives instant (shared) referrals at $30–$80 each. SEO takes months to build but delivers exclusive traffic at lower long-term cost. Successful roofers run both." },
    { question: "Do you work with roofers outside Georgia?", answer: "Yes. Our roofer SEO program is national. We work with residential and commercial roofers across all 50 states." },
  ],
  [3, 0, 4],
  [
    { href: "/", anchor: "Georgia SEO Experts", description: "Full agency overview." },
    { href: "/services/seo-for-contractors", anchor: "Contractor SEO", description: "Broader contractor program." },
    { href: "/services/seo-for-hvac", anchor: "HVAC SEO", description: "HVAC-specific optimization." },
    { href: "/locations/seo-services-atlanta", anchor: "Atlanta SEO", description: "Atlanta-area services." },
    { href: "/services/local-seo", anchor: "Local SEO services", description: "Map Pack optimization." },
  ],
  ["Residential roofers", "Commercial roofers", "Roof repair specialists", "Storm damage contractors"]
);

const plumberPage = mkIndustryPage(
  "seo-for-plumbers", "Plumber", "plumber SEO services", ["plumbing SEO services", "SEO for plumbers", "plumbing SEO company", "plumber SEO company", "plumbing and HVAC SEO"],
  "Plumber SEO Services | SEO for Plumbers | Georgia SEO Experts",
  "Plumber SEO services that grow organic traffic. 47% average traffic increase in 6 months — guaranteed. Free audit for plumbing businesses.",
  "Plumber SEO Services That Generate Calls, Not Just Clicks",
  "Plumbing searches have among the highest commercial intent of any trade — people searching 'emergency plumber near me' need help right now. Organic optimization ensures your business appears at the moment of need without paying $25–$50 per click for Google Ads.",
  ["Plumbing keywords have extremely high buyer intent", "47% average organic traffic increase in 6 months", "Serving plumbers across Georgia and nationwide", "Written traffic guarantee"],
  "Why most plumbing websites lose to competitors",
  "Plumbing is a high-intent, high-competition industry in paid ads. But in organic search, most plumbing businesses have barely tried — leaving massive opportunity on the table.",
  [
    { title: "No emergency content strategy", description: "Searchers type 'emergency plumber 24 hour [city]' and need immediate help. If you don't have pages targeting emergency queries with your phone number prominent, you lose the call." },
    { title: "Single service page for multiple trades", description: "Drain cleaning, water heater repair, sewer line replacement, and bathroom remodels are different services. Each needs its own page to rank for its specific keywords." },
    { title: "No review velocity", description: "Happy plumbing customers rarely leave reviews unprompted. A structured review request flow — sent via text 2 hours after job completion — can 5× your monthly review rate." },
    { title: "GBP not optimized for all services", description: "Your Google Business Profile lists 'Plumber' but not your 15 sub-services. Adding every service and posting weekly photos from job sites directly improves local pack visibility." },
  ],
  [
    { question: "How much does plumber SEO cost?", answer: "Plumber SEO ranges from $1,500 to $5,000/month. Most plumbing businesses with 3–15 technicians invest $2,500/month. With average job values of $300–$3,000, organic traffic growth quickly covers the investment." },
    { question: "How long until SEO works for plumbers?", answer: "Most plumbing clients see traffic growth within 60–90 days. Emergency plumbing content can rank faster because of high urgency signals and lower competition for long-tail terms." },
    { question: "Can SEO work for both residential and commercial plumbing?", answer: "Yes. We build separate service clusters for residential and commercial, targeting different keywords and buyer personas. Many plumbers find their commercial traffic grows fastest because competition is lower." },
  ],
  [4, 0, 5],
  [
    { href: "/", anchor: "Georgia SEO Experts", description: "Full agency overview." },
    { href: "/services/seo-for-contractors", anchor: "Contractor SEO", description: "Broader contractor program." },
    { href: "/services/seo-for-hvac", anchor: "HVAC SEO", description: "HVAC-specific optimization." },
    { href: "/services/seo-for-roofers", anchor: "Roofing SEO", description: "Roofer-specific optimization." },
    { href: "/services/local-seo", anchor: "Local SEO services", description: "Map Pack optimization." },
  ],
  ["Residential plumbers", "Commercial plumbers", "Drain specialists", "Water heater installers"]
);

const hvacPage = mkIndustryPage(
  "seo-for-hvac", "HVAC", "SEO for HVAC contractors", ["HVAC SEO", "plumbing and HVAC SEO", "local SEO for HVAC contractors", "HVAC SEO services"],
  "SEO for HVAC Contractors | HVAC SEO Services | Georgia SEO Experts",
  "SEO for HVAC contractors that drives year-round traffic. 47% average traffic increase in 6 months — guaranteed. Free audit for HVAC businesses.",
  "HVAC SEO That Drives Year-Round Organic Traffic",
  "HVAC search demand is highly seasonal — AC searches spike in summer, heating in winter. A smart organic strategy captures traffic year-round by targeting both seasonal peaks and evergreen maintenance queries, reducing your dependence on paid advertising.",
  ["HVAC keyword difficulty averages just 14", "47% average organic traffic increase in 6 months", "Seasonal content strategy for year-round traffic", "Written traffic guarantee"],
  "Why HVAC companies struggle with online visibility",
  "HVAC businesses face unique challenges: extreme seasonal demand swings, dual-trade complexity, and consumers who only search when something breaks.",
  [
    { title: "No seasonal content calendar", description: "HVAC demand shifts dramatically by season. Without pre-published content targeting 'AC repair [city]' before summer and 'furnace replacement [city]' before winter, you miss the peak windows." },
    { title: "Dual-trade confusion", description: "Companies offering both HVAC and plumbing often merge everything onto one page. Google can't determine what you specialize in. Separate service clusters for each trade rank better." },
    { title: "Maintenance queries ignored", description: "High-intent queries like 'HVAC tune-up cost' and 'annual AC maintenance' are lower volume but extremely high conversion. Most HVAC sites have no content targeting these." },
    { title: "Emergency search gap", description: "'AC not working' and 'heater won't turn on' are urgent searches. Without emergency-specific landing pages with prominent phone numbers, you lose these calls to the first competitor that appears." },
  ],
  [
    { question: "How much does HVAC SEO cost?", answer: "HVAC SEO ranges from $1,500 to $5,000/month. Most HVAC companies with 5–20 technicians invest $2,500/month. Given average service calls of $150–$500 and equipment sales of $3,000–$10,000, ROI is typically strong." },
    { question: "How do you handle seasonal demand in HVAC SEO?", answer: "We pre-publish seasonal content 4–6 weeks before demand spikes, optimize existing pages seasonally, and build evergreen maintenance content for year-round traffic. This smooths the feast-or-famine cycle." },
    { question: "Should HVAC and plumbing be separate SEO strategies?", answer: "Yes, if you offer both. Separate service clusters, separate GBP categories, and separate content tracks rank better than a combined approach. We build both but keep them architecturally distinct." },
  ],
  [4, 3, 0],
  [
    { href: "/", anchor: "Georgia SEO Experts", description: "Full agency overview." },
    { href: "/services/seo-for-contractors", anchor: "Contractor SEO", description: "Broader contractor program." },
    { href: "/services/seo-for-plumbers", anchor: "Plumber SEO", description: "Plumbing-specific optimization." },
    { href: "/locations/seo-services-atlanta", anchor: "Atlanta SEO", description: "Atlanta-area services." },
    { href: "/services/local-seo", anchor: "Local SEO", description: "Map Pack optimization." },
  ],
  ["HVAC companies", "AC repair specialists", "Heating contractors", "Dual-trade HVAC/plumbing"]
);

const painterPage = mkIndustryPage(
  "seo-for-painters", "Painter", "SEO for painting contractors", ["painting contractor SEO", "painter SEO", "house painter SEO"],
  "SEO for Painting Contractors | Painter SEO | Georgia SEO Experts",
  "SEO for painting contractors that drives measurable traffic growth. 47% average traffic increase in 6 months — guaranteed. Free audit for painters.",
  "Painting Contractor SEO That Drives Organic Visibility",
  "Painting contractors operate in one of the lowest-competition SEO niches in the trades — keyword difficulty as low as 6. This means a well-optimized painting business can reach page 1 faster and more affordably than nearly any other contractor type.",
  ["Painting SEO difficulty as low as 6", "47% average organic traffic increase in 6 months", "Portfolio-driven strategy for visual trades", "Written traffic guarantee"],
  "Why painting contractors miss out on organic traffic",
  "Painting is a visual business, but most painter websites are text-heavy and invisible in search.",
  [
    { title: "No visual portfolio online", description: "Homeowners want to see your work. A portfolio page with before/after images, color consultation shots, and project descriptions — each with image alt text and structured data — drives both trust and rankings." },
    { title: "Not targeting residential vs. commercial", description: "'House painter' and 'commercial painting contractor' attract different buyers. Separate pages for each segment rank better and convert higher because they speak to specific needs." },
    { title: "Ignoring seasonal demand", description: "Exterior painting searches spike in spring and summer. Interior painting is year-round. A content calendar aligned to these patterns captures demand at peak moments." },
    { title: "No neighborhood targeting", description: "Painting jobs are hyperlocal. Pages targeting specific neighborhoods and zip codes rank for the exact searches your ideal customers make." },
  ],
  [
    { question: "How much does painter SEO cost?", answer: "Painting contractor SEO starts at $1,500/month. Given difficulty scores as low as 6, painters often achieve meaningful results at the entry tier — making it one of the most affordable SEO investments in the trades." },
    { question: "How fast can a painting business rank?", answer: "Painting keywords have some of the lowest competition in all trades SEO. Many clients see page 1 movement within 4–6 weeks." },
    { question: "Do you work with both residential and commercial painters?", answer: "Yes. We build separate keyword clusters for residential and commercial painting, targeting different buyer intents with dedicated pages." },
  ],
  [2, 5, 0],
  [
    { href: "/", anchor: "Georgia SEO Experts", description: "Full agency overview." },
    { href: "/services/seo-for-contractors", anchor: "Contractor SEO", description: "Broader contractor program." },
    { href: "/locations/seo-services-atlanta", anchor: "Atlanta SEO", description: "Atlanta services." },
    { href: "/services/local-seo", anchor: "Local SEO", description: "Map Pack optimization." },
  ],
  ["Residential painters", "Commercial painters", "Interior specialists", "Exterior specialists"]
);

const gcPage = mkIndustryPage(
  "seo-for-general-contractors", "General Contractor", "general contractor SEO", ["SEO for general contractors", "GC SEO", "general contractor SEO services"],
  "General Contractor SEO | GC SEO Services | Georgia SEO Experts",
  "General contractor SEO that generates measurable traffic growth. 47% average traffic increase in 6 months — guaranteed. Free audit for GCs.",
  "General Contractor SEO That Drives Organic Project Traffic",
  "General contractors bid on complex, high-value projects — and increasingly, those projects start with a Google search. Organic optimization helps GCs appear for searches like 'general contractor [city]' and 'home renovation contractor near me,' capturing searches worth tens of thousands of dollars.",
  ["GC keyword difficulty averages just 8–11", "47% average organic traffic increase in 6 months", "High-value organic visibility", "Written traffic guarantee"],
  "Why general contractors lag behind in search",
  "GCs are often too busy running jobs to invest in digital marketing. The irony: a steady organic pipeline would eliminate the feast-or-famine cycle most GCs face.",
  [
    { title: "No project-type pages", description: "Kitchen remodels, bathroom renovations, additions, and new construction each attract different searchers. A single 'Services' page can't rank for all of them." },
    { title: "Missing portfolio with project details", description: "GCs have the best visual proof of any trade — finished projects. But most GC sites have a bare gallery with no descriptions, no cost ranges, and no structured data." },
    { title: "No cost-range content", description: "Homeowners search 'kitchen remodel cost [city]' before they search for a contractor. Cost-guide content captures these research-phase queries and builds trust before the sales call." },
    { title: "License and insurance not visible", description: "Licensed and insured GCs should prominently display credentials. Google rewards trust signals, and homeowners filter for them." },
  ],
  [
    { question: "How much does GC SEO cost?", answer: "General contractor SEO ranges from $1,500 to $5,000/month. Given the high value of GC projects ($10,000–$500,000+), a single organic lead per month can deliver 10× ROI." },
    { question: "How long until GC SEO shows results?", answer: "Most GC clients see organic traffic growth within 60–90 days. Project-type pages targeting specific services (e.g., 'kitchen remodel contractor [city]') tend to rank fastest." },
    { question: "Is SEO worth it for high-end general contractors?", answer: "Especially so. High-end homeowners research extensively online before hiring. A strong organic presence with portfolio content and cost guides positions you as the expert before the first call." },
  ],
  [0, 3, 5],
  [
    { href: "/", anchor: "Georgia SEO Experts", description: "Full agency overview." },
    { href: "/services/seo-for-contractors", anchor: "Contractor SEO overview", description: "Our broader contractor program." },
    { href: "/services/seo-for-roofers", anchor: "Roofing SEO", description: "Roofer-specific optimization." },
    { href: "/locations/seo-services-atlanta", anchor: "Atlanta SEO", description: "Atlanta services." },
  ],
  ["General contractors", "Home renovators", "Custom home builders", "Commercial GCs"]
);

const tradesmenPage = mkIndustryPage(
  "seo-for-tradesmen", "Tradesmen", "SEO for tradesmen", ["tradesman SEO", "trades SEO", "SEO marketing for contractors"],
  "SEO for Tradesmen | Trades SEO Services | Georgia SEO Experts",
  "SEO for tradesmen and skilled trades that drives measurable traffic growth. 47% average traffic increase in 6 months — guaranteed. Free audit.",
  "SEO for Tradesmen That Drives Steady Organic Traffic",
  "Skilled tradesmen — electricians, carpenters, welders, masons, and specialty contractors — all benefit from organic visibility. Trade-specific search optimization helps your business appear when customers search for your exact skill set in their area.",
  ["Trade-specific keyword targeting", "47% average organic traffic increase in 6 months", "Serving all skilled trades nationwide", "Written traffic guarantee"],
  "Why skilled tradesmen get overlooked online",
  "Most tradesmen rely on word-of-mouth and repeat business. That works until it doesn't — and the tradesmen who invest in organic visibility build more resilient businesses.",
  [
    { title: "No online presence beyond a basic listing", description: "Many tradesmen have a GBP listing and nothing else. A proper website with service pages, portfolio, and local content converts searchers into callers." },
    { title: "Trade-specific keywords untargeted", description: "Generic 'handyman' pages don't rank for 'licensed electrician [city]' or 'custom carpentry near me.' Each trade needs its own keyword strategy." },
    { title: "Certifications and licensing not highlighted", description: "Licensed, bonded, and insured tradesmen should feature credentials prominently. It builds trust with Google and customers alike." },
    { title: "No review management", description: "Trades customers leave reviews when asked. A simple post-job text or email can build a review profile that dominates local results." },
  ],
  [
    { question: "Does SEO work for specialty trades?", answer: "Yes — and often better than for general contractors. Specialty trade keywords (electrician, carpenter, welder) have lower competition and higher intent than broad 'contractor' terms." },
    { question: "How much does SEO cost for tradesmen?", answer: "Trades SEO starts at $1,500/month. Many individual tradesmen see meaningful results at this level due to low competition for trade-specific local queries." },
    { question: "Which trades benefit most from SEO?", answer: "Electricians, plumbers, HVAC techs, carpenters, and landscapers see the fastest ROI. Any trade where customers search before calling benefits from organic visibility." },
  ],
  [5, 0, 4],
  [
    { href: "/", anchor: "Georgia SEO Experts", description: "Full agency overview." },
    { href: "/services/seo-for-contractors", anchor: "Contractor SEO", description: "Broader contractor program." },
    { href: "/services/seo-for-plumbers", anchor: "Plumber SEO", description: "Plumbing-specific." },
    { href: "/services/seo-for-roofers", anchor: "Roofing SEO", description: "Roofer-specific." },
  ],
  ["Electricians", "Carpenters", "Welders", "Masons", "Landscapers", "Handymen"]
);

const smallBizPage = mkIndustryPage(
  "seo-for-small-business", "Small Business", "affordable SEO for small business", ["SEO for small business", "best SEO services for small business", "small business SEO packages", "SEO help near me", "best SEO for small business"],
  "Affordable SEO for Small Business | Georgia SEO Experts",
  "Affordable SEO packages for small businesses that deliver measurable traffic growth. 47% average increase in 6 months — guaranteed. Free audit.",
  "Affordable SEO for Small Businesses That Actually Works",
  "Small businesses don't need enterprise SEO budgets to rank. With the right strategy focused on local keywords and commercial-intent searches, a small business can compete with larger competitors and generate consistent organic traffic on a manageable monthly investment.",
  ["Packages starting at $1,500/month", "47% average organic traffic increase in 6 months", "100+ small businesses served across Georgia", "Written traffic guarantee — no results, no cost"],
  "Why small businesses struggle with SEO agencies",
  "Most SEO agencies are built for mid-market and enterprise clients. Small businesses get the leftover attention, generic strategies, and no accountability.",
  [
    { title: "Overcharged for generic strategies", description: "Large agencies charge $3,000–$10,000/month and apply the same playbook to every client. Small businesses need focused, local strategies — not bloated enterprise frameworks." },
    { title: "No ROI visibility", description: "You're paying monthly but can't tell if it's working. Without clear keyword tracking, traffic reporting, and lead attribution, SEO feels like a black box." },
    { title: "Locked into long contracts", description: "Many agencies require 12-month contracts with no performance accountability. You're stuck paying even when nothing improves." },
    { title: "Wrong keywords targeted", description: "Agencies target high-volume national keywords instead of the local, commercial-intent keywords that actually bring paying customers to small businesses." },
  ],
  [
    { question: "How much should a small business spend on SEO?", answer: "Most small businesses achieve meaningful results at $1,500–$2,500/month. Spending less than $1,000/month typically means corners are being cut. Our guarantee ensures you see measurable progress or you don't pay." },
    { question: "Is SEO worth it for a very small business?", answer: "Yes — especially for local businesses. 46% of Google searches have local intent. A small business with a well-optimized website and GBP can capture traffic that larger, less-optimized competitors miss." },
    { question: "How long does SEO take for small businesses?", answer: "Small businesses targeting local keywords typically see results faster than those targeting national terms. Most clients see ranking movement in 4–6 weeks and traffic gains by month 3." },
    { question: "What's included at the $1,500/month level?", answer: "GBP optimization, 10 tracked keywords, on-page SEO for 10 pages, 10 local citations monthly, and a monthly ranking report. It's focused and effective for single-location businesses." },
    { question: "Do you require long-term contracts?", answer: "No. We offer month-to-month agreements with a 20% traffic guarantee at 6 months. If we don't deliver, we work free until we do. No lock-in." },
  ],
  [5, 1, 2],
  [
    { href: "/", anchor: "Georgia SEO Experts", description: "Full agency overview." },
    { href: "/locations/seo-services-atlanta", anchor: "Atlanta SEO", description: "Atlanta-focused services." },
    { href: "/locations/seo-georgia", anchor: "Georgia SEO", description: "Statewide services." },
    { href: "/services/local-seo", anchor: "Local SEO", description: "Map Pack optimization." },
    { href: "/tools/seo-roi-calculator", anchor: "SEO ROI calculator", description: "Estimate your return." },
  ],
  ["Retail shops", "Professional services", "Restaurants", "Medical practices", "Home services"]
);

/* ════════════════════════════════════════════════════
   REGISTRY + EXPORTS
   ════════════════════════════════════════════════════ */

export const seoLocationPages: Record<string, SeoPageConfig> = {
  "seo-services-atlanta": atlantaPage,
  "marietta-seo": mariettaPage,
  "seo-augusta-ga": augustaPage,
  "seo-company-alpharetta": alpharettaPage,
  "seo-roswell": roswellPage,
  "seo-company-kennesaw-ga": kennesawPage,
  "seo-georgia": georgiaPage,
};

export const seoServicePages: Record<string, SeoPageConfig> = {
  "seo-for-contractors": forContractorsPage,
  "seo-for-roofers": rooferPage,
  "seo-for-plumbers": plumberPage,
  "seo-for-hvac": hvacPage,
  "seo-for-painters": painterPage,
  "seo-for-general-contractors": gcPage,
  "seo-for-tradesmen": tradesmenPage,
  "seo-for-small-business": smallBizPage,
};

export const seoPagesMap: Record<string, SeoPageConfig> = { ...seoLocationPages, ...seoServicePages };

export function getSeoPageConfig(slug: string): SeoPageConfig | undefined { return seoPagesMap[slug]; }
export function getLocationPageConfig(slug: string): SeoPageConfig | undefined { return seoLocationPages[slug]; }
export function getServiceSeoPageConfig(slug: string): SeoPageConfig | undefined { return seoServicePages[slug]; }
export function getAllLocationSlugs(): string[] { return Object.keys(seoLocationPages); }
export function getAllServiceSeoSlugs(): string[] { return Object.keys(seoServicePages); }
export function getAllSeoPageSlugs(): string[] { return Object.keys(seoPagesMap); }

export const credibilityStats = {
  avgTrafficIncrease: "47%",
  avgTrafficIncreasePeriod: "in the first 6 months",
  clientsServed: "100+",
  websitesBuilt: "165+",
  guaranteeAmount: "20%",
  guaranteePeriod: "6 months",
} as const;
