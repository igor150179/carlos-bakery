import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { BreadcrumbJsonLd } from "@/components/seo/StructuredData";
import { StoresPageContent } from "@/components/stores/StoresPageContent";
import { STORES, type Store } from "@/data/stores";
import { routing } from "@/i18n/routing";
import { buildPageMetadata } from "@/lib/seo";

import "./leaflet.css";

type Props = {
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta.stores" });
  return buildPageMetadata({ locale, page: "stores", t });
}

export default async function StoresPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "meta.stores" });

  return (
    <>
      <BreadcrumbJsonLd locale={locale} currentName={t("title")} currentPath="/lojas" />
      <StoresSchema stores={STORES} />
      <StoresPageContent />
    </>
  );
}

function StoresSchema({ stores }: { stores: Store[] }) {
  const jsonLd = stores.map((store) => ({
    "@context": "https://schema.org",
    "@type": "Bakery",
    name: store.name,
    image: store.image,
    telephone: store.phone,
    priceRange: "$$",
    url: "https://carlosbakery.com.br/lojas",
    address: {
      "@type": "PostalAddress",
      streetAddress: store.address,
      addressLocality: store.city,
      addressRegion: store.state,
      postalCode: store.zipCode,
      addressCountry: "BR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: store.coordinates.lat,
      longitude: store.coordinates.lng,
    },
    openingHours: getOpeningHours(store),
    sameAs: [store.googleMapsUrl, store.wazeUrl],
  }));

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

function getOpeningHours(store: Store) {
  const weekday = toSchemaHours("Mo-Fr", store.hours.weekdays);
  const saturday = toSchemaHours("Sa", store.hours.saturday);
  const sunday = toSchemaHours("Su", store.hours.sunday);

  return [weekday, saturday, sunday];
}

function toSchemaHours(days: string, hours: string) {
  const matches = hours.match(/(\d{1,2})h/g);
  const open = matches?.[0]?.replace("h", "").padStart(2, "0") ?? "10";
  const close = matches?.[1]?.replace("h", "").padStart(2, "0") ?? "22";

  return `${days} ${open}:00-${close}:00`;
}
