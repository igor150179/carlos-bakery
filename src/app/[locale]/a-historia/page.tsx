import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { BreadcrumbJsonLd } from "@/components/seo/StructuredData";
import { StoryPageContent } from "@/components/story/StoryPageContent";
import { routing } from "@/i18n/routing";
import { STORY_ENABLED } from "@/lib/feature-flags";
import { buildPageMetadata } from "@/lib/seo";

type Props = {
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  if (!STORY_ENABLED) return {};

  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta.story" });
  return buildPageMetadata({ locale, page: "story", t });
}

export default async function StoryPage({ params }: Props) {
  if (!STORY_ENABLED) notFound();

  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "meta.story" });

  return (
    <>
      <BreadcrumbJsonLd locale={locale} currentName={t("title")} currentPath="/a-historia" />
      <StoryPageContent />
    </>
  );
}
