import { DomainConfig } from "@/content/config";
import { SeoPageConfig } from "@/content/seo-pages";

export function generateSeoPageSchema(
  config: DomainConfig,
  page: SeoPageConfig
) {
  const origin = `https://${config.domain}`;
  const routePrefix = page.type === "location" ? "locations" : "services";
  const pageUrl = `${origin}/${routePrefix}/${page.slug}`;

  const areaServed =
    page.type === "location"
      ? [
          {
            "@type": "City",
            name: page.locality || config.locality,
            containedInPlace: {
              "@type": "State",
              name: "Georgia",
            },
          },
          ...(page.nearbyAreas || []).map((city) => ({
            "@type": "City",
            name: city,
          })),
        ]
      : [
          { "@type": "State", name: "Georgia" },
          { "@type": "Country", name: "United States" },
        ];

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "ProfessionalService"],
        "@id": `${origin}/#business`,
        name: config.brandName,
        url: origin,
        description:
          "Data-driven SEO agency headquartered in Atlanta, Georgia. Specializing in local SEO, technical SEO, and programmatic SEO for small and mid-market businesses across the United States.",
        ...(config.telephone && { telephone: config.telephone }),
        ...(config.email && { email: config.email }),
        address: {
          "@type": "PostalAddress",
          addressLocality: "Atlanta",
          addressRegion: "GA",
          addressCountry: "US",
        },
        ...(config.geoCoordinates && {
          geo: {
            "@type": "GeoCoordinates",
            latitude: config.geoCoordinates.latitude,
            longitude: config.geoCoordinates.longitude,
          },
        }),
        priceRange: "$$",
        areaServed: [
          { "@type": "State", name: "Georgia" },
          { "@type": "Country", name: "United States" },
        ],
        sameAs: [],
      },
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: page.primaryKeyword,
        description: page.metaDescription,
        provider: { "@id": `${origin}/#business` },
        serviceType: "Search Engine Optimization",
        areaServed,
        offers: {
          "@type": "AggregateOffer",
          priceCurrency: "USD",
          lowPrice: "1500",
          highPrice: "5000",
          offerCount: String(page.pricingTiers.length),
          availability: "https://schema.org/InStock",
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: `${page.primaryKeyword} — service tiers`,
          itemListElement: page.pricingTiers.map((tier) => ({
            "@type": "Offer",
            name: tier.name,
            description: tier.description,
            price: tier.priceRange.replace(/[^\d]/g, ""),
            priceCurrency: "USD",
          })),
        },
      },
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: page.metaTitle,
        description: page.metaDescription,
        isPartOf: { "@id": `${origin}/#website` },
        about: { "@id": `${pageUrl}#service` },
        inLanguage: "en-US",
        speakable: {
          "@type": "SpeakableSpecification",
          cssSelector: [".seo-hero h1", ".seo-hero-answer", ".seo-faq"],
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
        mainEntity: page.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumbs`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: origin,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: page.type === "location" ? "Locations" : "Services",
            item: `${origin}/${routePrefix}`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: page.heroH1,
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${origin}/#website`,
        url: origin,
        name: config.brandName,
        publisher: { "@id": `${origin}/#business` },
        inLanguage: "en-US",
      },
    ],
  };
}
