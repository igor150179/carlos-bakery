import type { MetadataRoute } from "next";

import { BUDDYS_CLUB_ENABLED, STORY_ENABLED } from "@/lib/feature-flags";

const LOCALES = ["pt", "en", "it"] as const;
const ROUTES = [
  { path: "", priority: 1.0, changeFrequency: "weekly" },
  { path: "cardapio", priority: 0.9, changeFrequency: "weekly" },
  { path: "bolos-personalizados", priority: 0.9, changeFrequency: "monthly" },
  ...(STORY_ENABLED
    ? [{ path: "a-historia" as const, priority: 0.7, changeFrequency: "yearly" as const }]
    : []),
  { path: "lojas", priority: 0.8, changeFrequency: "monthly" },
  ...(BUDDYS_CLUB_ENABLED
    ? [{ path: "buddys-club" as const, priority: 0.8, changeFrequency: "monthly" as const }]
    : []),
  { path: "contato", priority: 0.6, changeFrequency: "yearly" },
] as const;

const LANGUAGE_KEYS = {
  pt: "pt-BR",
  en: "en-US",
  it: "it-IT",
} as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://carlosbakery.com.br";
  const now = new Date();

  return LOCALES.flatMap((locale) =>
    ROUTES.map((route) => {
      const suffix = route.path ? `/${route.path}` : "";

      return {
        url: `${baseUrl}/${locale}${suffix}`,
        lastModified: now,
        changeFrequency: route.changeFrequency,
        priority: route.priority,
        alternates: {
          languages: Object.fromEntries(
            LOCALES.map((item) => [
              LANGUAGE_KEYS[item],
              `${baseUrl}/${item}${suffix}`,
            ]),
          ),
        },
      };
    }),
  );
}
