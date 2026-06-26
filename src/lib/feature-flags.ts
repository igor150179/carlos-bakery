/**
 * Feature flags — reexporta visibilidade a partir do registro de mudanças provisórias.
 * Preferir adicionar novas entradas em provisional-changes.ts.
 */
import { isProvisionalVisible } from "@/lib/provisional-changes";

export const BUDDYS_CLUB_ENABLED = isProvisionalVisible("buddysClub");
export const STORE_PHOTOS_ENABLED = isProvisionalVisible("storePhotos");
export const CUSTOM_CAKES_TESTIMONIALS_ENABLED = isProvisionalVisible(
  "customCakesTestimonials",
);
export const CUSTOM_CAKES_QUOTE_FORM_ENABLED = isProvisionalVisible(
  "customCakesQuoteForm",
);
export const CONTACT_DEPARTMENTS_ENABLED = isProvisionalVisible(
  "contactDepartments",
);
export const STORY_ENABLED = isProvisionalVisible("story");
