import { getMenuItemImage } from "@/data/menu";
import { BRAND_IMAGES } from "@/lib/brand-images";
import { CUSTOM_CAKE_IMAGES } from "@/lib/custom-cake-images";

/** Imagens da home — hero e produtos em destaque */

const img = (file: string) => `/images/hero/${file}`;

export const HOME_IMAGES = {
  hero: img("buddy-bakery.jpg"),
  heroPoster: img("buddy-bakery.jpg"),
  cannoliTradizionale: getMenuItemImage("cannoli-tradizionale"),
  lobsterTail: getMenuItemImage("lobster-tail"),
  cannoli: getMenuItemImage("cannoli-tradizionale"),
  fondantCake: CUSTOM_CAKE_IMAGES.birthday,
  /** Composição Hello Kitty · Disney · Simpsons */
  diyCakesComposition: [
    CUSTOM_CAKE_IMAGES.baptism,
    CUSTOM_CAKE_IMAGES.birthday,
    CUSTOM_CAKE_IMAGES.gallery[5],
  ],
  buddyPortrait: BRAND_IMAGES.buddyPortrait,
} as const;
