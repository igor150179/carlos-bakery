import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { BuddysClubPageContent } from "@/components/buddys-club/BuddysClubPageContent";
import {
  BreadcrumbJsonLd,
  FAQJsonLd,
} from "@/components/seo/StructuredData";
import { routing } from "@/i18n/routing";
import { BUDDYS_CLUB_ENABLED } from "@/lib/feature-flags";
import { buildPageMetadata } from "@/lib/seo";

type Props = {
  params: Promise<{ locale: string }>;
};

const FAQ_IDS = ["free", "earn", "expire", "stores", "tier", "transfer", "phone"];

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  if (!BUDDYS_CLUB_ENABLED) return {};

  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta.buddysClub" });
  return buildPageMetadata({ locale, page: "buddysClub", t });
}

export default async function BuddysClubPage({ params }: Props) {
  if (!BUDDYS_CLUB_ENABLED) notFound();

  const { locale } = await params;
  setRequestLocale(locale);
  const tMeta = await getTranslations({ locale, namespace: "meta.buddysClub" });
  const tFaq = await getTranslations({ locale, namespace: "buddysClub.faq" });

  return (
    <>
      <BreadcrumbJsonLd
        locale={locale}
        currentName={tMeta("title")}
        currentPath="/buddys-club"
      />
      <FAQJsonLd
        items={FAQ_IDS.map((id) => ({
          question: tFaq(`items.${id}.question`),
          answer: tFaq(`items.${id}.answer`),
        }))}
      />
      <BuddysClubPageContent />
    </>
  );
}
