"use client";

import { useTranslations } from "next-intl";

import { FadeIn } from "@/components/animations/FadeIn";
import {
  CATEGORY_SUBGROUP_ORDER,
  getItemsByCategory,
  getItemsBySubgroup,
  type MenuCategory,
  type MenuItem,
  type MenuSubgroup,
} from "@/data/menu";
import { MENU_SECTION_SCROLL_MARGIN } from "@/lib/header-offset";
import { cn } from "@/lib/utils";

import { ProductCard } from "./ProductCard";

type MenuCategorySectionProps = {
  category: MenuCategory;
  order: number;
};


function ProductGrid({ items }: { items: MenuItem[] }) {
  return (
    <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item, index) => (
        <li key={item.id}>
          <FadeIn delay={index * 0.06}>
            <ProductCard
              id={item.id}
              price={item.price}
              priceFrom={item.priceFrom}
              image={item.image}
              badge={item.badge}
              category={item.category}
            />
          </FadeIn>
        </li>
      ))}
    </ul>
  );
}

export function MenuCategorySection({ category, order }: MenuCategorySectionProps) {
  const t = useTranslations("menu.categorySections");
  const subgroupOrder = CATEGORY_SUBGROUP_ORDER[category];
  const tSalgadosSub = useTranslations("menu.salgadosSubgroups");
  const tCakesSub = useTranslations("menu.cakesSubgroups");
  const tSouvenirsSub = useTranslations("menu.souvenirsSubgroups");
  const tSub =
    category === "souvenirs"
      ? tSouvenirsSub
      : category === "salgados"
        ? tSalgadosSub
        : category === "cakes"
          ? tCakesSub
          : null;
  const items = getItemsByCategory(category);
  const orderLabel = String(order).padStart(2, "0");

  return (
    <section
      id={`menu-${category}`}
      className={cn(
        MENU_SECTION_SCROLL_MARGIN,
        "bg-cream-50 px-[var(--container-padding-x)] py-10 md:py-12",
      )}
    >
      <div className="mx-auto max-w-[var(--max-content-width)]">
        <FadeIn className="mb-8 max-w-2xl">
          <p className="mb-3 font-sans text-xs font-medium uppercase tracking-[0.35em] text-carlo-gold">
            {orderLabel} · {t(`${category}.eyebrow`)}
          </p>
          <h2 className="font-display text-[clamp(2rem,4vw,3rem)] leading-tight text-espresso-900">
            {t(`${category}.heading`)}
          </h2>
          <p className="mt-4 font-display text-lg italic leading-relaxed text-espresso-700">
            {t(`${category}.description`)}
          </p>
        </FadeIn>

        {subgroupOrder && tSub ? (
          <div className="space-y-12 md:space-y-14">
            {subgroupOrder.map((subgroup) => {
              const subgroupItems = getItemsBySubgroup(
                category,
                subgroup as MenuSubgroup,
              );
              if (subgroupItems.length === 0) return null;

              return (
                <div key={subgroup}>
                  <FadeIn className="mb-6 max-w-xl">
                    <h3 className="font-display text-2xl text-espresso-900 md:text-3xl">
                      {tSub(`${subgroup}.heading`)}
                    </h3>
                    <p className="mt-2 font-sans text-sm leading-relaxed text-espresso-700">
                      {tSub(`${subgroup}.description`)}
                    </p>
                  </FadeIn>
                  <ProductGrid items={subgroupItems} />
                </div>
              );
            })}
          </div>
        ) : (
          <ProductGrid items={items} />
        )}
      </div>
    </section>
  );
}
