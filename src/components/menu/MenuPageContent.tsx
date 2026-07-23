"use client";

import { useEffect, useState } from "react";

import { MENU_CATEGORIES, type MenuCategory } from "@/data/menu";
import { useMenuScrollMemory } from "@/hooks/useMenuScrollMemory";
import {
  getMenuActiveCategory,
} from "@/lib/menu-scroll-memory";

import { CategoryNav } from "./CategoryNav";
import { IngredientsSection } from "./IngredientsSection";
import { MenuCategorySection } from "./MenuCategorySection";
import { MenuCtaBanner } from "./MenuCtaBanner";
import { MenuFinalCta } from "./MenuFinalCta";
import { MenuHero } from "./MenuHero";

export function MenuPageContent() {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>(() => {
    const saved = getMenuActiveCategory();
    if (saved && MENU_CATEGORIES.some((category) => category.id === saved)) {
      return saved;
    }
    return "signatures";
  });

  useMenuScrollMemory({ activeCategory });

  useEffect(() => {
    const sectionIds = MENU_CATEGORIES.map((c) => `menu-${c.id}`);
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target.id) {
          const id = visible[0].target.id.replace("menu-", "") as MenuCategory;
          setActiveCategory(id);
        }
      },
      {
        rootMargin: "-35% 0px -45% 0px",
        threshold: [0, 0.15, 0.35, 0.55],
      },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <MenuHero />
      <CategoryNav
        activeCategory={activeCategory}
        onCategoryClick={setActiveCategory}
      />

      {MENU_CATEGORIES.map((cat, index) => (
        <div key={cat.id}>
          <MenuCategorySection category={cat.id} order={cat.order} />
          {(index + 1) % 2 === 0 && index < MENU_CATEGORIES.length - 1 ? (
            <MenuCtaBanner />
          ) : null}
        </div>
      ))}

      <IngredientsSection />
      <MenuFinalCta />
    </>
  );
}
