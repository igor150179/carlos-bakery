import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { MenuPageContent } from "@/components/menu/MenuPageContent";
import { BreadcrumbJsonLd } from "@/components/seo/StructuredData";
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
  const t = await getTranslations({ locale, namespace: "meta.menu" });
  return buildPageMetadata({ locale, page: "menu", t });
}

export default async function MenuPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "meta.menu" });

  return (
    <>
      <BreadcrumbJsonLd locale={locale} currentName={t("title")} currentPath="/cardapio" />
      <MenuPageContent />
    </>
  );
}
