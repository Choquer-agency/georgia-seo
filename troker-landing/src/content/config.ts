export interface DomainConfig {
  slug: string;
  domain: string;
  region: string;
  regionAdjective: string;
  country: "US";

  // Domain type
  domainType: "location";
  targetIndustry?: string;

  // Branding
  brandName: string;

  // SEO
  metaTitle: string;
  metaDescription: string;
  ogImage?: string;

  // Copy
  heroH1: string;
  heroSubhead: string;

  // Location details
  locality: string;
  stateCode: string;
  nearbyAreas: string;

  // Schema.org
  schemaAddress?: {
    locality: string;
    region: string;
    country: string;
  };

  // Contact
  telephone?: string;
  email?: string;

  // Geo
  geoCoordinates?: {
    latitude: number;
    longitude: number;
  };

  geoRegionCode?: string;

  // Google Tag Manager
  gtmId?: string;

  // Google Analytics 4 (gtag.js)
  ga4Id?: string;

  // Optional per-region accent override
  accentColor?: string;

  // Market cluster for differentiated content
  cluster?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: "seo" | "pricing" | "process" | "local" | "general";
  link?: { href: string; anchor: string };
}

export interface SEOService {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  icon: string;
}

export interface ComparisonRow {
  feature: string;
  professionalSEO: string | boolean;
  diySEO: string | boolean;
  noSEO: string | boolean;
}

export interface IndustryItem {
  name: string;
  icon: string;
  description: string;
  color: string;
}

export interface PricingTier {
  name: string;
  priceRange: string;
  description: string;
  includes: string[];
  color: string;
  featured?: boolean;
}

export interface Testimonial {
  quote: string;
  name: string;
  title: string;
  company: string;
  avatar?: string;
  featured?: boolean;
}

export interface PortfolioProject {
  name: string;
  category: string;
  image: string;
  url?: string;
  description?: string;
  caseStudy?: {
    challenge: string;
    approach: string;
    result: string;
  };
}

export interface ServiceItem {
  icon: string;
  title: string;
  description: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export const defaultConfig: DomainConfig = {
  slug: "georgia-seo",
  domain: "georgiaseoexperts.com",
  region: "Georgia",
  regionAdjective: "Georgia-based",
  country: "US",
  domainType: "location",
  brandName: "Georgia SEO Experts",
  metaTitle: "SEO Services & Atlanta SEO Agency | Georgia SEO Experts",
  metaDescription:
    "SEO services from an Atlanta SEO agency: local SEO, link building, on-page SEO and content marketing for Georgia businesses, with clear Monday reports.",
  locality: "Atlanta",
  stateCode: "GA",
  nearbyAreas: "Marietta, Roswell, Alpharetta, Decatur, and Savannah",
  heroH1: "Georgia's #1 SEO Agency",
  heroSubhead:
    "Data-driven SEO strategies that put your business on page 1 of Google, drive qualified traffic, and turn searchers into customers.",
  schemaAddress: {
    locality: "Atlanta",
    region: "GA",
    country: "US",
  },
  telephone: "+17782374700",
  email: "bryce@choquer.agency",
  geoCoordinates: {
    latitude: 33.749,
    longitude: -84.388,
  },
  geoRegionCode: "US-GA",
  ga4Id: "G-WKWFCV6WTV",
};
