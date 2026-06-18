import { BUDDYS_CLUB_ENABLED } from "@/lib/feature-flags";

/** Shared navigation paths — labels come from i18n `nav.*` keys */
const ALL_NAV_ITEMS = [
  { key: "menu", href: "/cardapio" },
  { key: "customCakes", href: "/bolos-personalizados" },
  { key: "story", href: "/a-historia" },
  { key: "stores", href: "/lojas" },
  { key: "club", href: "/buddys-club" },
  { key: "contact", href: "/contato" },
] as const;

export const NAV_ITEMS = ALL_NAV_ITEMS.filter(
  (item) => item.key !== "club" || BUDDYS_CLUB_ENABLED,
);

export type NavKey = (typeof ALL_NAV_ITEMS)[number]["key"];
export type NavHref = (typeof ALL_NAV_ITEMS)[number]["href"];
