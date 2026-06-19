import { BRAND_IMAGES } from "@/lib/brand-images";
import { CUSTOM_CAKE_IMAGES } from "@/lib/custom-cake-images";
import { MENU_IMAGES } from "@/lib/menu-images";

/** Imagens da home — hero e produtos em destaque */

const img = (file: string) => `/images/hero/${file}`;

export const HOME_IMAGES = {
  hero: img("buddy-bakery.jpg"),
  heroPoster: img("buddy-bakery.jpg"),
  cookiePistache: MENU_IMAGES.cookiePistache,
  lobsterTail: MENU_IMAGES.lobsterTail,
  cannoli: MENU_IMAGES.cannoliClassico,
  fondantCake: CUSTOM_CAKE_IMAGES.birthday,
  /** Composição Hello Kitty · Disney · Simpsons */
  diyCakesComposition: [
    CUSTOM_CAKE_IMAGES.baptism,
    CUSTOM_CAKE_IMAGES.birthday,
    CUSTOM_CAKE_IMAGES.gallery[5],
  ],
  buddyPortrait: BRAND_IMAGES.buddyPortrait,
} as const;
