import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";

export const routing = defineRouting({
  locales: ["pt", "en", "it"],
  defaultLocale: "pt",
  /** Sempre abrir em português; EN/IT só via URL explícita ou seletor de idioma */
  localeDetection: false,
  localePrefix: "as-needed",
  pathnames: {
    "/": "/",
    "/cardapio": {
      pt: "/cardapio",
      en: "/menu",
      it: "/cardapio",
    },
    "/bolos-personalizados": "/bolos-personalizados",
    "/a-historia": "/a-historia",
    "/lojas": "/lojas",
    "/buddys-club": "/buddys-club",
    "/contato": "/contato",
    "/privacidade": "/privacidade",
    "/termos": "/termos",
  },
});

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
