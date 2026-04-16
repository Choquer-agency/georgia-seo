import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getDomainConfig } from "@/lib/getDomainConfig";
import { getLocationPageConfig, getAllLocationSlugs } from "@/content/seo-pages";
import { generateSeoPageSchema } from "@/lib/schema-seo-page";
import { ClientLayout } from "@/components/ClientLayout";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { SeoPageView } from "@/components/SeoPageView";

export const dynamic = "force-dynamic";

interface LocationPageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return getAllLocationSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: LocationPageProps): Promise<Metadata> {
  const config = getDomainConfig();
  const page = getLocationPageConfig(params.slug);

  if (!page) return {};

  return {
    title: page.metaTitle,
    description: page.metaDescription,
    openGraph: {
      title: page.metaTitle,
      description: page.metaDescription,
      url: `https://${config.domain}/locations/${page.slug}`,
      siteName: config.brandName,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: page.metaTitle,
      description: page.metaDescription,
    },
    alternates: {
      canonical: `https://${config.domain}/locations/${page.slug}`,
    },
  };
}

export default function LocationPage({ params }: LocationPageProps) {
  const config = getDomainConfig();
  const page = getLocationPageConfig(params.slug);

  if (!page) notFound();

  const schema = generateSeoPageSchema(config, page);

  return (
    <ClientLayout domain={config.domain} region={config.region}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Nav brandName={config.brandName} />
      <SeoPageView page={page} routePrefix="locations" />
      <Footer brandName={config.brandName} />
    </ClientLayout>
  );
}
