import { HOME_IMAGES } from "./home-images";

export type ProductId =
  | "cookiePistache"
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
    id: "cookiePistache",
    image: HOME_IMAGES.cookiePistache,
    href: "/cardapio",
    gridClass: "md:col-span-7 md:h-[520px]",
    imageZoom: 1.28,
  },
  {
    id: "lobsterTail",
    image: HOME_IMAGES.lobsterTail,
    href: "/cardapio",
    gridClass: "md:col-span-5 md:h-[520px]",
    imageZoom: 1.42,
  },
  {
    id: "cannoli",
    image: HOME_IMAGES.cannoli,
    href: "/cardapio",
    gridClass: "md:col-span-4 md:h-[440px]",
    imageZoom: 1.48,
  },
  {
    id: "fondantCake",
    image: HOME_IMAGES.fondantCake,
    href: "/bolos-personalizados",
    gridClass: "md:col-span-8 md:h-[440px]",
    compositionImages: HOME_IMAGES.diyCakesComposition,
  },
];
