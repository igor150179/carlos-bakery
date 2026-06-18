import { BRAND_IMAGES } from "@/lib/brand-images";
import { CUSTOM_CAKE_IMAGES } from "@/lib/custom-cake-images";
import { MENU_IMAGES } from "@/lib/menu-images";

/** Imagens da home — hero de ambiente; retrato oficial em brand-images */

export const HOME_IMAGES = {
  hero: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=1920&q=80",
  heroPoster:
    "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=1920&q=80",
  cookiePistache: MENU_IMAGES.cookiePistache,
  lobsterTail: MENU_IMAGES.lobsterTail,
  cannoli: MENU_IMAGES.cannoliClassico,
  fondantCake: CUSTOM_CAKE_IMAGES.birthday,
  /** Três bolos da experiência Faça Você Mesmo — composição atrás do Fondant Cake */
  diyCakesComposition: [
    CUSTOM_CAKE_IMAGES.baptism,
    CUSTOM_CAKE_IMAGES.special,
    CUSTOM_CAKE_IMAGES.gallery[5],
  ],
  buddyPortrait: BRAND_IMAGES.buddyPortrait,
} as const;
