import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { ContactPageContent } from "@/components/contact/ContactPageContent";
import {
  BreadcrumbJsonLd,
  FAQJsonLd,
} from "@/components/seo/StructuredData";
import { routing } from "@/i18n/routing";
import { buildPageMetadata } from "@/lib/seo";

type Props = {
  params: Promise<{ locale: string }>;
};

const FAQ_IDS = ["customCake", "ifood", "outsideSp", "franchise", "supplier"];

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta.contact" });
  return buildPageMetadata({ locale, page: "contact", t });
}

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "contact" });
  const tMeta = await getTranslations({ locale, namespace: "meta.contact" });

  return (
    <>
      <BreadcrumbJsonLd
        locale={locale}
        currentName={tMeta("title")}
        currentPath="/contato"
      />
      <FAQJsonLd
        items={FAQ_IDS.map((id) => ({
          question: t(`faq.items.${id}.question`),
          answer: t(`faq.items.${id}.answer`),
        }))}
      />
      <ContactPageContent />
    </>
  );
}
