import { MENU_IMAGES } from "@/lib/menu-images";

export type MenuCategory =
  | "signatures"
  | "cookies"
  | "croissants"
  | "salgados"
  | "cakes"
  | "cake-slices"
  | "cannoli"
  | "cupcakes"
  | "donuts"
  | "beverages"
  | "cold-beverages"
  | "specials"
  | "souvenirs";

export type MenuBadge = "novo" | "bestseller" | "sazonal";

/** Subgrupos exibidos na página (não na navegação) */
export type MenuSubgroup =
  | "assados"
  | "fritos"
  | "porcoes"
  | "bolos-inteiros"
  | "mini-bolos"
  | "canecas"
  | "garrafas";

export const SALGADOS_SUBGROUP_ORDER: MenuSubgroup[] = ["fritos", "porcoes"];

export const CAKES_SUBGROUP_ORDER: MenuSubgroup[] = ["bolos-inteiros", "mini-bolos"];

export const SOUVENIRS_SUBGROUP_ORDER: MenuSubgroup[] = ["canecas", "garrafas"];

export const CATEGORY_SUBGROUP_ORDER: Partial<
  Record<MenuCategory, MenuSubgroup[]>
> = {
  salgados: SALGADOS_SUBGROUP_ORDER,
  cakes: CAKES_SUBGROUP_ORDER,
  souvenirs: SOUVENIRS_SUBGROUP_ORDER,
};

export interface MenuItem {
  id: string;
  category: MenuCategory;
  price: number;
  /** Exibe "A partir de" antes do preço (variantes no iFood) */
  priceFrom?: boolean;
  image: string;
  /** Galeria opcional — exibe carrossel quando há mais de uma foto */
  images?: string[];
  badge?: MenuBadge;
  subgroup?: MenuSubgroup;
}

export const MENU_CATEGORIES = [
  { id: "signatures" as const, order: 1 },
  { id: "cannoli" as const, order: 2 },
  { id: "specials" as const, order: 3 },
  { id: "cake-slices" as const, order: 4 },
  { id: "cakes" as const, order: 5 },
  { id: "cookies" as const, order: 6 },
  { id: "croissants" as const, order: 7 },
  { id: "cupcakes" as const, order: 8 },
  { id: "donuts" as const, order: 9 },
  { id: "beverages" as const, order: 10 },
  { id: "cold-beverages" as const, order: 11 },
  { id: "salgados" as const, order: 12 },
  { id: "souvenirs" as const, order: 13 },
] as const;

export const MENU_ITEMS: MenuItem[] = [
  {
    id: "lobster-tail",
    category: "signatures",
    price: 25.99,
    priceFrom: true,
    image: MENU_IMAGES.lobsterTail,
    badge: "bestseller",
  },
  {
    id: "cannoli-siciliano",
    category: "signatures",
    price: 23.99,
    image: MENU_IMAGES.cannoliSiciliano,
  },
  {
    id: "chocolate-chip-cookie",
    category: "cookies",
    price: 21.99,
    image: MENU_IMAGES.cookieChocolateChip,
    badge: "bestseller",
  },
  {
    id: "croissant-classico",
    category: "croissants",
    price: 15.99,
    image: MENU_IMAGES.croissantClassico,
    badge: "bestseller",
  },
  {
    id: "croissant-gergelim",
    category: "croissants",
    price: 21.99,
    image: MENU_IMAGES.croissantGergelim,
    badge: "novo",
  },
  {
    id: "coxinha",
    category: "salgados",
    subgroup: "fritos",
    price: 15.99,
    priceFrom: true,
    image: MENU_IMAGES.salgadoCoxinha,
    badge: "bestseller",
  },
  {
    id: "coxinha-catupiry",
    category: "salgados",
    subgroup: "fritos",
    price: 15.99,
    priceFrom: true,
    image: MENU_IMAGES.salgadoCoxinhaCatupiry,
    badge: "bestseller",
  },
  {
    id: "pao-de-queijo-copo",
    category: "salgados",
    subgroup: "porcoes",
    price: 17.99,
    image: MENU_IMAGES.salgadoPaoDeQueijo,
    badge: "bestseller",
  },
  {
    id: "red-velvet-cake",
    category: "cakes",
    subgroup: "bolos-inteiros",
    price: 180,
    image: MENU_IMAGES.boloRedVelvet,
    badge: "bestseller",
  },
  {
    id: "black-white-cake",
    category: "cakes",
    subgroup: "bolos-inteiros",
    price: 180,
    image: MENU_IMAGES.boloBlackWhite,
  },
  {
    id: "bolo-chocolate-brigadeiro",
    category: "cakes",
    subgroup: "bolos-inteiros",
    price: 180,
    image: MENU_IMAGES.boloChocolateBrigadeiro,
    badge: "bestseller",
  },
  {
    id: "bolo-cannoli",
    category: "cakes",
    subgroup: "bolos-inteiros",
    price: 180,
    image: MENU_IMAGES.boloCannoli,
    badge: "novo",
  },
  {
    id: "bolo-strawberry-shortcake",
    category: "cakes",
    subgroup: "bolos-inteiros",
    price: 180,
    image: MENU_IMAGES.boloStrawberryShortcake,
  },
  {
    id: "mini-bolo-chocolate",
    category: "cakes",
    subgroup: "mini-bolos",
    price: 79.99,
    image: MENU_IMAGES.miniBoloChocolateBrigadeiro,
    badge: "bestseller",
  },
  {
    id: "mini-bolo-black-white",
    category: "cakes",
    subgroup: "mini-bolos",
    price: 79.99,
    image: MENU_IMAGES.miniBoloBlackWhite,
  },
  {
    id: "mini-bolo-cenoura",
    category: "cakes",
    subgroup: "mini-bolos",
    price: 79.99,
    image: MENU_IMAGES.miniBoloCenoura,
    badge: "sazonal",
  },
  {
    id: "mini-bolo-red-velvet",
    category: "cakes",
    subgroup: "mini-bolos",
    price: 79.99,
    image: MENU_IMAGES.miniBoloRedVelvet,
    badge: "bestseller",
  },
  {
    id: "fatia-bolo-rainbow",
    category: "cake-slices",
    price: 26.99,
    image: MENU_IMAGES.fatiaBoloRainbow,
    badge: "bestseller",
  },
  {
    id: "fatia-bolo-coco",
    category: "cake-slices",
    price: 26.99,
    image: MENU_IMAGES.fatiaBoloCoco,
  },
  {
    id: "fatia-bolo-chocolate",
    category: "cake-slices",
    price: 26.99,
    image: MENU_IMAGES.fatiaBoloChocolate,
    badge: "bestseller",
  },
  {
    id: "fatia-bolo-red-velvet",
    category: "cake-slices",
    price: 26.99,
    image: MENU_IMAGES.fatiaBoloRedVelvet,
    badge: "bestseller",
  },
  {
    id: "fatia-bolo-cenoura",
    category: "cake-slices",
    price: 26.99,
    image: MENU_IMAGES.fatiaBoloCenoura,
    badge: "sazonal",
  },
  {
    id: "cannoli-tradizionale",
    category: "cannoli",
    price: 23.99,
    image: MENU_IMAGES.cannoliTradizionale,
  },
  {
    id: "cannoli-pistachio-fondente",
    category: "cannoli",
    price: 27.99,
    priceFrom: true,
    image: MENU_IMAGES.cannoliPistachioFondente,
  },
  {
    id: "cannoli-chocolate-chip",
    category: "cannoli",
    price: 24,
    image: MENU_IMAGES.cannoliChocolateChip,
  },
  {
    id: "cannoli-cioccolato",
    category: "cannoli",
    price: 23.99,
    image: MENU_IMAGES.cannoliCioccolato,
  },
  {
    id: "cannoli-chocolate-zero",
    category: "cannoli",
    price: 24.99,
    image: MENU_IMAGES.cannoliChocolateZero,
    badge: "novo",
  },
  {
    id: "cannoli-cioccolato-chip",
    category: "cannoli",
    price: 26,
    image: MENU_IMAGES.cannoliCioccolatoChip,
    badge: "bestseller",
  },
  {
    id: "cannoli-cioccolato-premium",
    category: "cannoli",
    price: 28,
    image: MENU_IMAGES.cannoliCioccolatoPremium,
  },
  {
    id: "cannoli-fondente",
    category: "cannoli",
    price: 25.99,
    priceFrom: true,
    image: MENU_IMAGES.cannoliFondente,
  },
  {
    id: "cannoli-fondente-crema",
    category: "cannoli",
    price: 26,
    image: MENU_IMAGES.cannoliFondenteCrema,
  },
  {
    id: "sfogliatella-chocolate",
    category: "cannoli",
    price: 25.99,
    priceFrom: true,
    image: MENU_IMAGES.folhadoSfogliatellaChocolate,
  },
  {
    id: "sfogliatella-pistache",
    category: "cannoli",
    price: 27.99,
    priceFrom: true,
    image: MENU_IMAGES.folhadoSfogliatellaPistache,
    badge: "novo",
  },
  {
    id: "cauda-lagosta-doce-leite",
    category: "cannoli",
    price: 26.99,
    priceFrom: true,
    image: MENU_IMAGES.folhadoCaudaLagostaDoceLeite,
  },
  {
    id: "cauda-lagosta-cacau",
    category: "cannoli",
    price: 27.99,
    priceFrom: true,
    image: MENU_IMAGES.folhadoCaudaLagostaCacau,
  },
  {
    id: "sfogliatella-fondente",
    category: "cannoli",
    price: 25.99,
    priceFrom: true,
    image: MENU_IMAGES.folhadoSfogliatellaFondente,
  },
  {
    id: "red-velvet-cupcake",
    category: "cupcakes",
    price: 18,
    image: MENU_IMAGES.cupcakeRedVelvet,
    badge: "bestseller",
  },
  {
    id: "cupcake-brigadeiro-menu",
    category: "cupcakes",
    price: 20,
    image: MENU_IMAGES.cupcakeBrigadeiro,
    badge: "novo",
  },
  {
    id: "donut-confete",
    category: "donuts",
    price: 22.99,
    priceFrom: true,
    image: MENU_IMAGES.donutConfete,
    badge: "novo",
  },
  {
    id: "donut-sonho-morango",
    category: "donuts",
    price: 22.99,
    priceFrom: true,
    image: MENU_IMAGES.donutSonhoMorango,
    badge: "bestseller",
  },
  {
    id: "italian-espresso",
    category: "beverages",
    price: 12,
    image: MENU_IMAGES.bebidaEspresso,
    badge: "bestseller",
  },
  {
    id: "cafe-americano",
    category: "beverages",
    price: 10,
    image: MENU_IMAGES.bebidaCafeAmericano,
  },
  {
    id: "signature-hot-chocolate",
    category: "beverages",
    price: 24,
    image: MENU_IMAGES.bebidaChocolateQuente,
    badge: "bestseller",
  },
  {
    id: "cappuccino",
    category: "beverages",
    price: 14,
    image: MENU_IMAGES.bebidaCappuccino,
    badge: "bestseller",
  },
  {
    id: "house-latte",
    category: "beverages",
    price: 16,
    image: MENU_IMAGES.bebidaCortado,
  },
  {
    id: "macchiato",
    category: "beverages",
    price: 14,
    image: MENU_IMAGES.bebidaMacchiato,
  },
  {
    id: "flat-white",
    category: "beverages",
    price: 15,
    image: MENU_IMAGES.bebidaFlatWhite,
    badge: "novo",
  },
  {
    id: "cafe-com-leite",
    category: "beverages",
    price: 12,
    image: MENU_IMAGES.bebidaCafeComLeite,
  },
  {
    id: "latte-macchiato",
    category: "beverages",
    price: 15,
    image: MENU_IMAGES.bebidaLatteMacchiato,
    badge: "novo",
  },
  {
    id: "iced-latte-caramelo",
    category: "cold-beverages",
    price: 18,
    image: MENU_IMAGES.bebidaFriaLatteCaramelo,
    badge: "bestseller",
  },
  {
    id: "iced-latte",
    category: "cold-beverages",
    price: 16,
    image: MENU_IMAGES.bebidaFriaIcedLatte,
  },
  {
    id: "cha-frutas-vermelhas",
    category: "cold-beverages",
    price: 14,
    image: MENU_IMAGES.bebidaFriaChaFrutas,
    badge: "novo",
  },
  {
    id: "eclair-morango-creme",
    category: "specials",
    price: 24.99,
    image: MENU_IMAGES.especialEclairMorangoCreme,
    badge: "novo",
  },
  {
    id: "eclair-chocolate",
    category: "specials",
    price: 24.99,
    image: MENU_IMAGES.especialEclairChocolate,
    badge: "bestseller",
  },
  {
    id: "eclair-pistache",
    category: "specials",
    price: 26.99,
    image: MENU_IMAGES.especialEclairPistache,
  },
  {
    id: "brigadeiro-gourmet",
    category: "specials",
    price: 10.99,
    image: MENU_IMAGES.especialBrigadeiro,
    badge: "bestseller",
  },
  {
    id: "morango-com-chocolate",
    category: "specials",
    price: 11.99,
    image: MENU_IMAGES.especialMorangoChocolate,
  },
  {
    id: "cone-morango-chocolate",
    category: "specials",
    price: 37.99,
    image: MENU_IMAGES.especialConeMorangoChocolate,
  },
  {
    id: "cheesecake-frutas-vermelhas",
    category: "specials",
    price: 24.99,
    image: MENU_IMAGES.especialCheesecakeFrutas,
    badge: "bestseller",
  },
  {
    id: "brownie-chocolate",
    category: "specials",
    price: 21.99,
    image: MENU_IMAGES.especialBrownieChocolate,
    badge: "bestseller",
  },
  {
    id: "brownie-pistache",
    category: "specials",
    price: 22,
    image: MENU_IMAGES.especialBrowniePistache,
    badge: "novo",
  },
  {
    id: "tiramisu-potinho",
    category: "specials",
    price: 24.99,
    image: MENU_IMAGES.especialTiramisu,
    badge: "bestseller",
  },
  {
    id: "mousse-maracuja",
    category: "specials",
    price: 24.99,
    image: MENU_IMAGES.especialMousseMaracuja,
    badge: "novo",
  },
  {
    id: "mousse-chocolate",
    category: "specials",
    price: 24.99,
    image: MENU_IMAGES.especialMousseChocolate,
  },
  {
    id: "caneca-ilustrada-cake-boss",
    category: "souvenirs",
    subgroup: "canecas",
    price: 79,
    image: MENU_IMAGES.souvenirCanecaIlustrada,
    badge: "novo",
  },
  {
    id: "caneca-carlos-faixa",
    category: "souvenirs",
    subgroup: "canecas",
    price: 49,
    image: MENU_IMAGES.souvenirCanecaCarlosFaixa,
    badge: "bestseller",
  },
  {
    id: "caneca-carlos-classica",
    category: "souvenirs",
    subgroup: "canecas",
    price: 45,
    image: MENU_IMAGES.souvenirCanecaCarlosClassica,
  },
  {
    id: "garrafa-carlos-vermelha",
    category: "souvenirs",
    subgroup: "garrafas",
    price: 89,
    image: MENU_IMAGES.souvenirGarrafaCarlosVermelha,
    images: [
      MENU_IMAGES.souvenirGarrafaCarlosVermelha,
      MENU_IMAGES.souvenirGarrafaBuddyVermelha,
    ],
    badge: "bestseller",
  },
  {
    id: "garrafa-carlos-transparente",
    category: "souvenirs",
    subgroup: "garrafas",
    price: 79,
    image: MENU_IMAGES.souvenirGarrafaCarlosTransparente,
    badge: "novo",
  },
];

function sortBySubgroupOrder(
  items: MenuItem[],
  order: MenuSubgroup[],
): MenuItem[] {
  return [...items].sort(
    (a, b) =>
      order.indexOf(a.subgroup ?? order[0]) -
      order.indexOf(b.subgroup ?? order[0]),
  );
}

export function getItemsByCategory(category: MenuCategory): MenuItem[] {
  const items = MENU_ITEMS.filter((item) => item.category === category);
  const subgroupOrder = CATEGORY_SUBGROUP_ORDER[category];
  if (subgroupOrder) {
    return sortBySubgroupOrder(items, subgroupOrder);
  }
  return items;
}

export function getItemsBySubgroup(
  category: MenuCategory,
  subgroup: MenuSubgroup,
): MenuItem[] {
  return getItemsByCategory(category).filter(
    (item) => item.subgroup === subgroup,
  );
}

export function getSalgadosBySubgroup(
  subgroup: MenuSubgroup,
): MenuItem[] {
  return getItemsBySubgroup("salgados", subgroup);
}
