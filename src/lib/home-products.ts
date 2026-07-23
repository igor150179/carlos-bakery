import { getMenuItemImage } from "@/data/menu";
import { CUSTOM_CAKE_IMAGES } from "@/lib/custom-cake-images";

export type ProductId =
  | "cannoliTradizionale"
  | "lobsterTail"
  | "cannoli"
  | "fondantCake";

export type SignatureProduct = {
  id: ProductId;
  image: string;
  href: string;
  gridClass: string;
  /** Escala extra para produtos em object-contain (zoom no recorte) */
  imageZoom?: number;
  /** Bolos menores atrás do destaque principal (Faça Você Mesmo) */
  compositionImages?: readonly string[];
};

export const SIGNATURE_PRODUCTS: SignatureProduct[] = [
  {
    id: "cannoliTradizionale",
    image: getMenuItemImage("cannoli-tradizionale"),
    href: "/cardapio",
    gridClass: "md:col-span-7 md:h-[520px]",
    imageZoom: 1.28,
  },
  {
    id: "lobsterTail",
    image: getMenuItemImage("lobster-tail"),
    href: "/cardapio",
    gridClass: "md:col-span-5 md:h-[520px]",
    imageZoom: 1.42,
  },
  {
    id: "cannoli",
    image: getMenuItemImage("cannoli-tradizionale"),
    href: "/cardapio",
    gridClass: "md:col-span-4 md:h-[440px]",
    imageZoom: 1.48,
  },
  {
    id: "fondantCake",
    image: CUSTOM_CAKE_IMAGES.birthday,
    href: "/bolos-personalizados",
    gridClass: "md:col-span-8 md:h-[440px]",
    compositionImages: [
      CUSTOM_CAKE_IMAGES.baptism,
      CUSTOM_CAKE_IMAGES.birthday,
      CUSTOM_CAKE_IMAGES.gallery[5],
    ],
  },
];
