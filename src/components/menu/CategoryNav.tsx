"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

import { MENU_CATEGORIES, type MenuCategory } from "@/data/menu";
import { useLenis } from "@/components/providers/SmoothScrollProvider";
import {
  HEADER_SCROLL_OFFSET_DESKTOP,
  HEADER_SCROLL_OFFSET_MOBILE,
  MENU_CATEGORY_NAV_STICKY,
} from "@/lib/header-offset";
import { cn } from "@/lib/utils";

type CategoryNavProps = {
  activeCategory: MenuCategory;
  onCategoryClick: (category: MenuCategory) => void;
};

export function CategoryNav({
  activeCategory,
  onCategoryClick,
}: CategoryNavProps) {
  const t = useTranslations("menu.categories");
  const { lenis } = useLenis();

  const scrollToCategory = (category: MenuCategory) => {
    const target = document.getElementById(`menu-${category}`);
    if (!target) return;

    const offset =
      window.innerWidth >= 768
        ? -HEADER_SCROLL_OFFSET_DESKTOP - 56
        : -HEADER_SCROLL_OFFSET_MOBILE - 48;

    if (lenis) {
      lenis.scrollTo(target, { offset });
    } else {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    onCategoryClick(category);
  };

  return (
    <nav
      aria-label={t("navLabel")}
      className={cn(
        "sticky border-b border-cream-200/80 bg-cream-50/90 backdrop-blur-md",
        MENU_CATEGORY_NAV_STICKY,
      )}
    >
      <div className="mx-auto max-w-[var(--max-content-width)] px-[var(--container-padding-x)]">
        <ul className="flex gap-1 overflow-x-auto py-3 [scrollbar-width:none] md:justify-center md:gap-2 md:py-4 [&::-webkit-scrollbar]:hidden">
          {MENU_CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <li key={cat.id} className="shrink-0">
                <button
                  type="button"
                  onClick={() => scrollToCategory(cat.id)}
                  className={cn(
                    "group relative whitespace-nowrap px-4 py-2 font-sans text-sm font-medium transition-colors",
                    isActive
                      ? "text-carlo-red"
                      : "text-espresso-700 hover:text-espresso-900",
                  )}
                >
                  {t(cat.id)}
                  <motion.span
                    className="absolute bottom-0 left-4 right-4 h-px origin-left bg-carlo-red"
                    initial={false}
                    animate={{ scaleX: isActive ? 1 : 0 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    aria-hidden
                  />
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
