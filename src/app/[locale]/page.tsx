import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { BuddysClubSection } from "@/components/sections/BuddysClubSection";
import { FamilySection } from "@/components/sections/FamilySection";
import { HeroSection } from "@/components/sections/HeroSection";
import { SignatureProductsSection } from "@/components/sections/SignatureProductsSection";
import { SignatureStatementSection } from "@/components/sections/SignatureStatementSection";
import { BakeryJsonLd } from "@/components/seo/StructuredData";
import { BUDDYS_CLUB_ENABLED, STORY_ENABLED } from "@/lib/feature-flags";
import { buildPageMetadata } from "@/lib/seo";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta.home" });
  return buildPageMetadata({ locale, page: "home", t });
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <BakeryJsonLd />
      <HeroSection />
      <SignatureStatementSection />
      <SignatureProductsSection />
      {BUDDYS_CLUB_ENABLED ? <BuddysClubSection /> : null}
      {STORY_ENABLED ? <FamilySection /> : null}
    </>
  );
}
