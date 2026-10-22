import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getDomainConfig } from "@/lib/getDomainConfig";
import { getServiceConfig, getAllServiceSlugs } from "@/content/services";
import { getServiceSeoPageConfig, getAllServiceSeoSlugs } from "@/content/seo-pages";
import { generateServiceSchema } from "@/lib/schema-service";
import { generateSeoPageSchema } from "@/lib/schema-seo-page";
import { ClientLayout } from "@/components/ClientLayout";
import { Nav } from "@/components/Nav";
import { ServiceHero } from "@/components/ServiceHero";
import { ServiceProblem } from "@/components/ServiceProblem";
import { SEOComparison } from "@/components/SEOComparison";
import { ServiceProcess } from "@/components/ServiceProcess";
import { Portfolio } from "@/components/Portfolio";
import { Testimonials } from "@/components/Testimonials";
import { ServiceFAQ } from "@/components/ServiceFAQ";
import { CtaBanner } from "@/components/CtaBanner";
import { MobileCta } from "@/components/MobileCta";
import { Footer } from "@/components/Footer";
import { SeoPageView } from "@/components/SeoPageView";

export const dynamic = "force-dynamic";

interface ServicePageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  const existing = getAllServiceSlugs().map((slug) => ({ slug }));
  const programmatic = getAllServiceSeoSlugs().map((slug) => ({ slug }));
  return [...existing, ...programmatic];
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const config = getDomainConfig();

  const seoPage = getServiceSeoPageConfig(params.slug);
  if (seoPage) {
    return {
      title: seoPage.metaTitle,
      description: seoPage.metaDescription,
      openGraph: {
        title: seoPage.metaTitle,
        description: seoPage.metaDescription,
        url: `https://${config.domain}/services/${seoPage.slug}`,
        siteName: config.brandName,
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        title: seoPage.metaTitle,
        description: seoPage.metaDescription,
      },
      alternates: {
        canonical: `https://${config.domain}/services/${seoPage.slug}`,
      },
    };
  }

  const service = getServiceConfig(params.slug);
  if (!service) return {};

  const title = service.metaTitle(config.locality, config.region);
  const description = service.metaDescription(config.locality, config.region);

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://${config.domain}/services/${service.slug}`,
      siteName: config.brandName,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    alternates: {
      canonical: `https://${config.domain}/services/${service.slug}`,
    },
  };
}

export default function ServicePage({ params }: ServicePageProps) {
  const config = getDomainConfig();

  const seoPage = getServiceSeoPageConfig(params.slug);
  if (seoPage) {
    const schema = generateSeoPageSchema(config, seoPage);
    return (
      <ClientLayout domain={config.domain} region={config.region}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        <Nav brandName={config.brandName} />
        <SeoPageView page={seoPage} routePrefix="services" />
        <Footer brandName={config.brandName} />
      </ClientLayout>
    );
  }

  const service = getServiceConfig(params.slug);
  if (!service) notFound();

  const schema = generateServiceSchema(config, service);

  return (
    <ClientLayout domain={config.domain} region={config.region}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Nav brandName={config.brandName} />
      <ServiceHero
        h1={service.heroH1(config.locality, config.region)}
        subhead={service.heroSubhead(config.locality, config.region)}
        qualifier={service.heroQualifier(config.locality, config.region)}
        region={config.region}
        eyebrow={service.eyebrow}
      />
      <ServiceProblem
        painPoints={service.painPoints}
        eyebrow={service.problemEyebrow}
        heading={service.problemHeading}
      />
      <MobileCta />
      {service.areasSection && (
        <section className="section-space-main" style={{ backgroundColor: "#FFF9F0" }}>
          <div className="u-container max-w-3xl">
            <h2 className="font-sans font-medium text-fluid-h3 leading-[1.1] text-dark mb-6">
              {service.areasSection.heading}
            </h2>
            {service.areasSection.paragraphs.map((p) => (
              <p key={p} className="font-sans text-fluid-main text-dark opacity-70 leading-relaxed mb-4">
                {p}
              </p>
            ))}
            <ul className="list-disc pl-5 space-y-2 mb-4">
              {service.areasSection.links.map((l) => (
                <li key={l.href} className="font-sans text-fluid-main text-dark">
                  <a href={l.href} className="underline underline-offset-4">
                    {l.anchor}
                  </a>
                </li>
              ))}
            </ul>
            <p className="font-sans text-fluid-main text-dark opacity-70 leading-relaxed">
              {service.areasSection.outro}{" "}
              <a
                href="https://support.google.com/business/answer/7091"
                className="underline underline-offset-4"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google&apos;s guide to improving your local ranking
              </a>
              .
            </p>
          </div>
        </section>
      )}
      {service.showComparison && <SEOComparison slug={config.slug} />}
      <ServiceProcess steps={service.processSteps} heading={service.processHeading} />
      {service.showPortfolio && <Portfolio slug={config.slug} />}
      <Testimonials slug={config.slug} />
      <MobileCta />
      <ServiceFAQ
        faqs={service.faqs(config.locality, config.region)}
        serviceTitle={service.title}
      />
      <CtaBanner />
      <Footer brandName={config.brandName} />
    </ClientLayout>
  );
}
