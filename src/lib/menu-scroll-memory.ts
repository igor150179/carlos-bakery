import type { MenuCategory } from "@/data/menu";

const SCROLL_KEY = "carlos-menu-scroll-y";
const CATEGORY_KEY = "carlos-menu-active-category";

export function saveMenuScrollPosition(
  scrollY: number,
  category?: MenuCategory,
): void {
  if (typeof window === "undefined") return;

  try {
    sessionStorage.setItem(SCROLL_KEY, String(Math.max(0, scrollY)));
    if (category) {
      sessionStorage.setItem(CATEGORY_KEY, category);
    }
  } catch {
    // sessionStorage indisponível
  }
}

export function getMenuScrollPosition(): number | null {
  if (typeof window === "undefined") return null;

  try {
    const value = sessionStorage.getItem(SCROLL_KEY);
    if (value == null) return null;
    const parsed = Number.parseFloat(value);
    return Number.isFinite(parsed) ? parsed : null;
  } catch {
    return null;
  }
}

export function getMenuActiveCategory(): MenuCategory | null {
  if (typeof window === "undefined") return null;

  try {
    return sessionStorage.getItem(CATEGORY_KEY) as MenuCategory | null;
  } catch {
    return null;
  }
}
