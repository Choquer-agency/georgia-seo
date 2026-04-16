"use client";

import { useContactForm } from "@/context/ContactFormContext";
import { SeoPageConfig, credibilityStats } from "@/content/seo-pages";

interface SeoPageViewProps {
  page: SeoPageConfig;
  routePrefix?: "locations" | "services" | "seo";
}

/* ─── Reusable CTA Button ─── */
function BookCallButton({
  label = "Book a Free Strategy Call",
  variant = "primary",
}: {
  label?: string;
  variant?: "primary" | "secondary";
}) {
  const { openModal } = useContactForm();
  const base =
    "inline-flex items-center gap-3 rounded-sm px-8 py-4 font-sans font-medium text-fluid-main transition-all";
  const styles =
    variant === "primary"
      ? `${base} bg-brand text-dark hover:brightness-110`
      : `${base} bg-dark text-light hover:opacity-90`;
  return (
    <button onClick={() => openModal()} className={styles} style={{ transitionDuration: "0.3s" }}>
      {label}
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <path d="M2 14L14 2M14 2H5M14 2V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
}

/* ─── SVG Icons ─── */
const icons = {
  trendUp: (
    <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
      <rect width="40" height="40" rx="10" fill="#FFF3E0" />
      <path d="M12 26L18 20L22 24L28 14" stroke="#E8772E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M24 14H28V18" stroke="#E8772E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  users: (
    <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
      <rect width="40" height="40" rx="10" fill="#E8F5E9" />
      <circle cx="16" cy="16" r="3" stroke="#2E7D32" strokeWidth="2" />
      <circle cx="24" cy="16" r="3" stroke="#2E7D32" strokeWidth="2" />
      <path d="M10 28C10 24 13 22 16 22C17.5 22 18.5 22 20 22C21.5 22 22.5 22 24 22C27 22 30 24 30 28" stroke="#2E7D32" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
  globe: (
    <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
      <rect width="40" height="40" rx="10" fill="#E3F2FD" />
      <circle cx="20" cy="20" r="8" stroke="#1565C0" strokeWidth="2" />
      <path d="M12 20H28" stroke="#1565C0" strokeWidth="1.5" />
      <path d="M20 12C22 15 22 25 20 28" stroke="#1565C0" strokeWidth="1.5" />
      <path d="M20 12C18 15 18 25 20 28" stroke="#1565C0" strokeWidth="1.5" />
    </svg>
  ),
  shield: (
    <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
      <rect width="40" height="40" rx="10" fill="#FFF3E0" />
      <path d="M20 10L28 14V22C28 26 24 29 20 30C16 29 12 26 12 22V14L20 10Z" stroke="#E8772E" strokeWidth="2" strokeLinejoin="round" />
      <path d="M16 20L19 23L25 17" stroke="#E8772E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  search: (
    <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
      <rect width="48" height="48" rx="12" fill="#FFF3E0" />
      <circle cx="22" cy="22" r="7" stroke="#E8772E" strokeWidth="2.5" />
      <path d="M27 27L33 33" stroke="#E8772E" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  ),
  target: (
    <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
      <rect width="48" height="48" rx="12" fill="#E8F5E9" />
      <circle cx="24" cy="24" r="8" stroke="#2E7D32" strokeWidth="2" />
      <circle cx="24" cy="24" r="4" stroke="#2E7D32" strokeWidth="2" />
      <circle cx="24" cy="24" r="1.5" fill="#2E7D32" />
    </svg>
  ),
  wrench: (
    <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
      <rect width="48" height="48" rx="12" fill="#E3F2FD" />
      <path d="M28 16C30.2 16 32 17.8 32 20C32 21.1 31.6 22 30.8 22.8L22.8 30.8C22 31.6 21.1 32 20 32C17.8 32 16 30.2 16 28C16 26.9 16.4 26 17.2 25.2L25.2 17.2C26 16.4 26.9 16 28 16Z" stroke="#1565C0" strokeWidth="2" />
      <path d="M22 22L26 26" stroke="#1565C0" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
  chart: (
    <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
      <rect width="48" height="48" rx="12" fill="#F3E5F5" />
      <rect x="16" y="26" width="4" height="8" rx="1" fill="#7B1FA2" opacity="0.5" />
      <rect x="22" y="20" width="4" height="14" rx="1" fill="#7B1FA2" opacity="0.7" />
      <rect x="28" y="14" width="4" height="20" rx="1" fill="#7B1FA2" />
    </svg>
  ),
  warning: (
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 flex-shrink-0">
      <circle cx="12" cy="12" r="10" fill="#FFF3E0" />
      <path d="M12 8V12" stroke="#E8772E" strokeWidth="2" strokeLinecap="round" />
      <circle cx="12" cy="16" r="1" fill="#E8772E" />
    </svg>
  ),
};

const processIcons = [icons.search, icons.target, icons.wrench, icons.chart];

/* ─── Mini Growth Chart SVG ─── */
function GrowthChart() {
  const points = [
    [0, 80],
    [40, 72],
    [80, 60],
    [120, 50],
    [160, 35],
    [200, 20],
    [240, 12],
  ];
  const line = points.map((p) => p.join(",")).join(" ");
  const area = `0,85 ${line} 240,85`;

  return (
    <div className="relative bg-white rounded-lg border border-dark/10 p-6 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <div>
          <div className="font-mono text-[10px] uppercase tracking-wider text-dark opacity-50">
            Organic Traffic Growth
          </div>
          <div className="font-sans font-medium text-lg text-dark">
            +47% <span className="text-sm font-normal opacity-50">avg increase</span>
          </div>
        </div>
        <div className="flex items-center gap-1.5 bg-green-50 text-green-700 px-3 py-1 rounded-full text-xs font-medium">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M2 8L6 4L10 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          Growing
        </div>
      </div>
      <svg viewBox="0 0 240 90" className="w-full h-auto" preserveAspectRatio="none">
        <defs>
          <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#E8772E" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#E8772E" stopOpacity="0.02" />
          </linearGradient>
        </defs>
        {[20, 40, 60, 80].map((y) => (
          <line key={y} x1="0" y1={y} x2="240" y2={y} stroke="#f0ebe3" strokeWidth="0.5" />
        ))}
        <polygon points={area} fill="url(#chartGrad)" />
        <polyline points={line} fill="none" stroke="#E8772E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        {points.map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="3" fill="#fff" stroke="#E8772E" strokeWidth="2" />
        ))}
      </svg>
      <div className="flex justify-between mt-2 font-mono text-[9px] text-dark opacity-40 uppercase">
        <span>Month 1</span>
        <span>Month 3</span>
        <span>Month 6</span>
      </div>
    </div>
  );
}

/* ─── Dashboard Mock for Hero ─── */
function HeroDashboard() {
  return (
    <div className="space-y-4">
      <GrowthChart />
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-white rounded-lg border border-dark/10 p-4 shadow-sm">
          <div className="font-mono text-[10px] uppercase tracking-wider text-dark opacity-50 mb-1">
            Keywords Ranked
          </div>
          <div className="font-sans font-medium text-2xl text-dark">142</div>
          <div className="flex items-center gap-1 text-green-600 text-xs font-medium mt-1">
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path d="M2 7L5 3L8 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            +38 this month
          </div>
        </div>
        <div className="bg-white rounded-lg border border-dark/10 p-4 shadow-sm">
          <div className="font-mono text-[10px] uppercase tracking-wider text-dark opacity-50 mb-1">
            Map Pack
          </div>
          <div className="font-sans font-medium text-2xl text-brand">#1</div>
          <div className="flex items-center gap-1 text-green-600 text-xs font-medium mt-1">
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path d="M5 8V2M5 2L2 5M5 2L8 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Top position
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Case Study Card with Visual Metric ─── */
function CaseStudyCard({ cs, index }: { cs: SeoPageConfig["caseStudies"][number]; index: number }) {
  const colors = [
    { bg: "#E8F5E9", text: "#2E7D32", bar: "#66BB6A" },
    { bg: "#FFF3E0", text: "#E65100", bar: "#FFA726" },
    { bg: "#E3F2FD", text: "#1565C0", bar: "#42A5F5" },
  ];
  const color = colors[index % colors.length];

  return (
    <article className="bg-white rounded-lg border border-dark/10 shadow-sm overflow-hidden">
      <div className="grid md:grid-cols-[200px_1fr]">
        {/* Metric visual */}
        <div
          className="flex flex-col items-center justify-center p-8 text-center"
          style={{ backgroundColor: color.bg }}
        >
          <div className="font-sans font-bold text-3xl leading-none mb-2" style={{ color: color.text }}>
            {cs.metric.split("·")[0].trim()}
          </div>
          <div className="font-mono text-[10px] uppercase tracking-wider opacity-70" style={{ color: color.text }}>
            {cs.client}
          </div>
          {/* Mini bar chart */}
          <div className="flex items-end gap-1.5 mt-4 h-8">
            {[25, 40, 35, 55, 70, 90].map((h, i) => (
              <div
                key={i}
                className="w-3 rounded-t-sm transition-all"
                style={{
                  height: `${h}%`,
                  backgroundColor: color.bar,
                  opacity: 0.3 + i * 0.14,
                }}
              />
            ))}
          </div>
        </div>
        {/* Description */}
        <div className="p-6 md:p-8">
          <h3 className="font-sans font-medium text-base md:text-lg text-dark mb-2 leading-snug">
            {cs.headline}
          </h3>
          <p className="font-sans text-sm md:text-base text-dark opacity-70 leading-relaxed">
            {cs.description}
          </p>
        </div>
      </div>
    </article>
  );
}

/* ─── Main Page View ─── */
export function SeoPageView({ page, routePrefix = "seo" }: SeoPageViewProps) {
  const breadcrumbParent = routePrefix === "locations" ? "Locations" : routePrefix === "services" ? "Services" : "SEO Services";
  const lastUpdated = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      {/* ───────────────── HERO (2-column) ───────────────── */}
      <header className="seo-hero section-space-hero" style={{ backgroundColor: "#FFF9F0" }}>
        <div className="u-container">
          <div className="max-w-[85rem] mx-auto">
            {/* Breadcrumb */}
            <nav
              aria-label="Breadcrumb"
              className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-dark opacity-60 mb-8"
            >
              <a href="/" className="hover:opacity-100 transition-opacity">Home</a>
              <span aria-hidden="true">/</span>
              <a href={`/${routePrefix}`} className="hover:opacity-100 transition-opacity">{breadcrumbParent}</a>
              <span aria-hidden="true">/</span>
              <span className="opacity-100 text-brand">{page.heroEyebrow}</span>
            </nav>

            <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-16 items-start">
              {/* Left: copy */}
              <div>
                <div className="flex items-center gap-2.5 mb-6">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-brand" aria-hidden="true">
                    <path d="M4 10L8 14L16 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="font-mono text-xs uppercase tracking-wider text-brand">{page.heroEyebrow}</span>
                </div>

                <h1 className="font-sans font-medium text-fluid-h2 leading-[1.1] tracking-tight text-dark max-w-[28ch] mb-6">
                  {page.heroH1}
                </h1>

                <p className="seo-hero-answer font-sans text-base md:text-lg text-dark opacity-80 max-w-[62ch] mb-6 leading-relaxed">
                  {page.heroAnswer}
                </p>

                <ul className="grid gap-3 mb-10 max-w-[52ch]">
                  {page.heroBullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3 font-sans text-sm md:text-base text-dark">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-brand flex-shrink-0 mt-0.5" aria-hidden="true">
                        <rect width="20" height="20" rx="10" fill="#FFF3E0" />
                        <path d="M6 10L9 13L14 7" stroke="#E8772E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-4 items-center">
                  <BookCallButton label="Get a Free SEO Audit" />
                  <a href="#pricing" className="font-sans text-sm md:text-base text-dark underline underline-offset-4 hover:opacity-70 transition-opacity">
                    See pricing below
                  </a>
                </div>

                <p className="mt-8 font-mono text-xs text-dark opacity-40 uppercase tracking-wider">
                  Last updated: {lastUpdated}
                </p>
              </div>

              {/* Right: dashboard visuals */}
              <div className="hidden lg:block">
                <HeroDashboard />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ──────────── CREDIBILITY STATS BAR ──────────── */}
      <section className="section-space-medium border-y border-dark/10" style={{ backgroundColor: "#F8F4EC" }} aria-label="Performance stats">
        <div className="u-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-[85rem] mx-auto">
            {[
              { icon: icons.trendUp, value: credibilityStats.avgTrafficIncrease, label: `Avg traffic lift ${credibilityStats.avgTrafficIncreasePeriod}` },
              { icon: icons.users, value: credibilityStats.clientsServed, label: "Clients served since 2019" },
              { icon: icons.globe, value: credibilityStats.websitesBuilt, label: "Websites built and optimized" },
              { icon: icons.shield, value: credibilityStats.guaranteeAmount, label: `Traffic guarantee in ${credibilityStats.guaranteePeriod} or we work free` },
            ].map((stat) => (
              <div key={stat.label} className="flex items-start gap-4">
                <div className="flex-shrink-0">{stat.icon}</div>
                <div>
                  <div className="font-sans font-medium text-2xl md:text-3xl leading-none text-dark mb-1">
                    {stat.value}
                  </div>
                  <div className="font-mono text-[10px] uppercase tracking-wider text-dark opacity-50">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────── PROBLEM ──────────────── */}
      <section className="section-space-large" style={{ backgroundColor: "#FFF9F0" }}>
        <div className="u-container">
          <div className="max-w-[85rem] mx-auto">
            <div className="max-w-[60ch] mb-10">
              <span className="font-mono text-xs uppercase tracking-wider text-brand mb-4 block">The Problem</span>
              <h2 className="font-sans font-medium text-fluid-h3 leading-[1.15] tracking-tight text-dark mb-4">
                {page.problemHeading}
              </h2>
              <p className="font-sans text-base text-dark opacity-70 leading-relaxed">
                {page.problemIntro}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {page.painPoints.map((pain, i) => (
                <div key={pain.title} className="bg-white rounded-lg border border-dark/10 p-6 shadow-sm">
                  <div className="flex items-start gap-4 mb-4">
                    {icons.warning}
                    <div className="font-mono text-xs text-dark opacity-40">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                  </div>
                  <h3 className="font-sans font-medium text-base md:text-lg text-dark mb-2 leading-snug">
                    {pain.title}
                  </h3>
                  <p className="font-sans text-sm md:text-base text-dark opacity-70 leading-relaxed">
                    {pain.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-14 flex justify-center">
              <BookCallButton label="Get My Free Audit" />
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────── PROCESS ──────────────── */}
      <section className="section-space-large" style={{ backgroundColor: "#F8F4EC" }}>
        <div className="u-container">
          <div className="max-w-[85rem] mx-auto">
            <div className="max-w-[60ch] mb-10">
              <span className="font-mono text-xs uppercase tracking-wider text-brand mb-4 block">Our Process</span>
              <h2 className="font-sans font-medium text-fluid-h3 leading-[1.15] tracking-tight text-dark mb-4">
                {page.processHeading}
              </h2>
              <p className="font-sans text-base text-dark opacity-70 leading-relaxed">
                {page.processIntro}
              </p>
            </div>

            <ol className="grid md:grid-cols-2 gap-8">
              {page.processSteps.map((step, i) => (
                <li key={step.step} className="bg-white rounded-lg border border-dark/10 p-6 shadow-sm">
                  <div className="flex items-center gap-4 mb-4">
                    {processIcons[i % processIcons.length]}
                    <div>
                      <div className="font-mono text-[10px] uppercase tracking-wider text-dark opacity-40">
                        Step {String(step.step).padStart(2, "0")}
                      </div>
                      <h3 className="font-sans font-medium text-base md:text-lg text-dark leading-snug">
                        {step.title}
                      </h3>
                    </div>
                  </div>
                  <p className="font-sans text-sm md:text-base text-dark opacity-70 leading-relaxed">
                    {step.description}
                  </p>
                  {/* Visual connector between steps */}
                  {i < page.processSteps.length - 1 && (
                    <div className="hidden md:flex justify-center mt-4 text-dark opacity-20">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M10 4V16M10 16L5 11M10 16L15 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  )}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ──────────────── RESULTS ──────────────── */}
      <section className="section-space-large" style={{ backgroundColor: "#FFF9F0" }}>
        <div className="u-container">
          <div className="max-w-[85rem] mx-auto">
            <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 items-start mb-12">
              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-brand mb-4 block">Results</span>
                <h2 className="font-sans font-medium text-fluid-h3 leading-[1.15] tracking-tight text-dark mb-4">
                  {page.resultsHeading}
                </h2>
                <p className="font-sans text-base text-dark opacity-70 leading-relaxed">
                  {page.resultsIntro}
                </p>
              </div>
              {/* Summary growth chart next to results intro */}
              <div className="hidden lg:block">
                <GrowthChart />
              </div>
            </div>

            <div className="space-y-6">
              {page.caseStudies.map((cs, i) => (
                <CaseStudyCard key={cs.client} cs={cs} index={i} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────── GUARANTEE ──────────────── */}
      <section
        className="section-space-large"
        style={{ background: "linear-gradient(135deg, #FFF3E0 0%, #FFE0B2 50%, #FFCC80 100%)" }}
      >
        <div className="u-container">
          <div className="max-w-[70rem] mx-auto text-center">
            {/* Shield badge */}
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white shadow-md mb-8">
              <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
                <path d="M20 4L32 10V22C32 28 26 33 20 34C14 33 8 28 8 22V10L20 4Z" stroke="#E8772E" strokeWidth="2.5" strokeLinejoin="round" />
                <path d="M14 20L18 24L26 16" stroke="#E8772E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <span className="font-mono text-xs uppercase tracking-wider text-dark opacity-60 mb-6 block">
              Our Performance Guarantee
            </span>
            <h2 className="font-sans font-medium text-fluid-h3 leading-[1.15] tracking-tight text-dark mb-6 max-w-[24ch] mx-auto">
              {page.guaranteeHeadline}
            </h2>
            <p className="font-sans text-base md:text-lg text-dark opacity-80 max-w-[60ch] mx-auto leading-relaxed mb-8">
              {page.guaranteeBody}
            </p>
            <BookCallButton label="Claim the Guarantee" variant="secondary" />
          </div>
        </div>
      </section>

      {/* ──────────────── PRICING ──────────────── */}
      <section id="pricing" className="section-space-large" style={{ backgroundColor: "#F8F4EC" }}>
        <div className="u-container">
          <div className="max-w-[85rem] mx-auto">
            <div className="max-w-[60ch] mb-10">
              <span className="font-mono text-xs uppercase tracking-wider text-brand mb-4 block">Pricing</span>
              <h2 className="font-sans font-medium text-fluid-h3 leading-[1.15] tracking-tight text-dark mb-4">
                {page.pricingHeading}
              </h2>
              <p className="font-sans text-base text-dark opacity-70 leading-relaxed">
                {page.pricingIntro}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {page.pricingTiers.map((tier) => (
                <div
                  key={tier.name}
                  className={`p-8 rounded-lg border ${
                    tier.featured ? "border-brand bg-white shadow-lg ring-2 ring-brand/20" : "border-dark/10 bg-white shadow-sm"
                  }`}
                >
                  {tier.featured && (
                    <div className="inline-block font-mono text-[10px] uppercase tracking-wider text-white bg-brand px-3 py-1 rounded-full mb-4">
                      Most Popular
                    </div>
                  )}
                  <h3 className="font-sans font-medium text-base md:text-lg text-dark mb-1">{tier.name}</h3>
                  <div className="font-sans font-medium text-xl md:text-2xl text-brand mb-3">{tier.priceRange}</div>
                  <p className="font-sans text-sm text-dark opacity-70 leading-relaxed mb-5">
                    {tier.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {tier.includes.map((item) => (
                      <li key={item} className="flex items-start gap-2 font-sans text-sm text-dark">
                        <svg width="16" height="16" viewBox="0 0 20 20" fill="none" className="text-brand flex-shrink-0 mt-0.5" aria-hidden="true">
                          <path d="M4 10L8 14L16 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <BookCallButton label="Get Started" variant={tier.featured ? "primary" : "secondary"} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────── FAQ ──────────────── */}
      <section className="seo-faq section-space-large" style={{ backgroundColor: "#FFF9F0" }}>
        <div className="u-container">
          <div className="max-w-[85rem] mx-auto">
            <div className="max-w-[60ch] mb-12">
              <span className="font-mono text-xs uppercase tracking-wider text-brand mb-4 block">Frequently Asked</span>
              <h2 className="font-sans font-medium text-fluid-h2 leading-[1.1] tracking-tight text-dark">
                {page.primaryKeyword} — answers to common questions
              </h2>
            </div>

            <div className="space-y-6 max-w-[75ch]">
              {page.faqs.map((faq) => (
                <div key={faq.question} className="bg-white rounded-lg border border-dark/10 p-6 shadow-sm">
                  <h3 className="font-sans font-medium text-base md:text-lg text-dark mb-2 leading-snug">
                    {faq.question}
                  </h3>
                  <p className="font-sans text-sm md:text-base text-dark opacity-70 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────── RELATED / INTERNAL LINKS ──────────────── */}
      <section className="section-space-large" style={{ backgroundColor: "#F8F4EC" }}>
        <div className="u-container">
          <div className="max-w-[85rem] mx-auto">
            <div className="max-w-[60ch] mb-12">
              <span className="font-mono text-xs uppercase tracking-wider text-brand mb-4 block">Related</span>
              <h2 className="font-sans font-medium text-fluid-h3 leading-[1.15] tracking-tight text-dark mb-4">
                Keep exploring our SEO services
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {page.internalLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="group p-5 border border-dark/10 bg-white rounded-lg shadow-sm transition-all hover:border-brand hover:shadow-md"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-sans font-medium text-sm text-dark group-hover:text-brand transition-colors">
                      {link.anchor}
                    </span>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-dark opacity-30 group-hover:text-brand group-hover:opacity-100 transition-all" aria-hidden="true">
                      <path d="M1 13L13 1M13 1H3M13 1V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <p className="font-sans text-xs text-dark opacity-50 leading-relaxed">
                    {link.description}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────── FINAL CTA ──────────────── */}
      <section
        className="section-space-large"
        style={{ background: "linear-gradient(135deg, #FFF3E0 0%, #FFE0B2 50%, #FFCC80 100%)" }}
      >
        <div className="u-container text-center">
          <div className="max-w-[70rem] mx-auto">
            <p className="font-mono text-xs uppercase tracking-wider opacity-60 mb-4">
              Ready to get started?
            </p>
            <h2 className="font-sans font-medium text-fluid-h3 leading-[1.15] tracking-tight text-dark max-w-[24ch] mx-auto mb-4">
              {page.ctaHeading}
            </h2>
            <p className="font-sans text-fluid-large text-dark opacity-80 max-w-[60ch] mx-auto mb-10 leading-relaxed">
              {page.ctaSubhead}
            </p>
            <BookCallButton label="Schedule My Free Audit" />
          </div>
        </div>
      </section>
    </>
  );
}
