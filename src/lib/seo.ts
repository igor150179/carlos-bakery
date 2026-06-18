import type { Metadata } from "next";
import type { getTranslations } from "next-intl/server";

import { routing } from "@/i18n/routing";

import { SITE_CONFIG } from "./constants";

export type SeoPageKey =
  | "home"
  | "menu"
  | "customCakes"
  | "story"
  | "stores"
  | "buddysClub"
  | "contact";

export const PAGE_PATHS: Record<SeoPageKey, string> = {
  home: "",
  menu: "cardapio",
  customCakes: "bolos-personalizados",
  story: "a-historia",
  stores: "lojas",
  buddysClub: "buddys-club",
  contact: "contato",
};

const LOCALE_OG: Record<string, string> = {
  pt: "pt_BR",
  en: "en_US",
  it: "it_IT",
};

const LANGUAGE_KEYS: Record<string, string> = {
  pt: "pt-BR",
  en: "en-US",
  it: "it-IT",
};

type Translator = Awaited<ReturnType<typeof getTranslations>>;

export function buildPageMetadata({
  locale,
  page,
  t,
}: {
  locale: string;
  page: SeoPageKey;
  t: Translator;
}): Metadata {
  const path = PAGE_PATHS[page];
  const url = localizedUrl(locale, path);
  const imageUrl = `/opengraph-image?locale=${locale}&page=${page}`;

  return {
    metadataBase: new URL(SITE_CONFIG.url),
    title: t("title"),
    description: t("description"),
    keywords: t("keywords"),
    openGraph: {
      title: t("og.title"),
      description: t("og.description"),
      url,
      siteName: SITE_CONFIG.name,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: t("og.imageAlt"),
        },
      ],
      locale: LOCALE_OG[locale] ?? "pt_BR",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: t("og.title"),
      description: t("og.description"),
      images: [imageUrl],
    },
    alternates: {
      canonical: url,
      languages: Object.fromEntries(
        routing.locales.map((item) => [
          LANGUAGE_KEYS[item],
          localizedUrl(item, path),
        ]),
      ),
    },
  };
}

export function localizedUrl(locale: string, path = "") {
  const cleanPath = path.replace(/^\/+/, "");
  return `${SITE_CONFIG.url}/${locale}${cleanPath ? `/${cleanPath}` : ""}`;
}
