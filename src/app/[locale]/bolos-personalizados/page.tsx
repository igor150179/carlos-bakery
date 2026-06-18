import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { CustomCakesPageContent } from "@/components/custom-cakes/CustomCakesPageContent";
import {
  BreadcrumbJsonLd,
  FAQJsonLd,
} from "@/components/seo/StructuredData";
import { FAQ_IDS } from "@/data/custom-cakes";
import { routing } from "@/i18n/routing";
import { buildPageMetadata } from "@/lib/seo";

type Props = {
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta.customCakes" });
  return buildPageMetadata({ locale, page: "customCakes", t });
}

export default async function CustomCakesPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const tMeta = await getTranslations({ locale, namespace: "meta.customCakes" });
  const tFaq = await getTranslations({ locale, namespace: "customCakes.faq" });

  return (
    <>
      <BreadcrumbJsonLd
        locale={locale}
        currentName={tMeta("title")}
        currentPath="/bolos-personalizados"
      />
      <FAQJsonLd
        items={FAQ_IDS.map((id) => ({
          question: tFaq(`items.${id}.question`),
          answer: tFaq(`items.${id}.answer`),
        }))}
      />
      <CustomCakesPageContent />
    </>
  );
}
