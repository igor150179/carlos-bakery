"use client";

import { Search } from "lucide-react";
import { useTranslations } from "next-intl";

import { cn } from "@/lib/utils";

export type StoreFilter = "all" | "shopping" | "street" | "workshop" | "flagship";
export type StoreView = "list" | "grid";

type StoreFiltersProps = {
  query: string;
  onQueryChange: (query: string) => void;
  filter: StoreFilter;
  onFilterChange: (filter: StoreFilter) => void;
  view: StoreView;
  onViewChange: (view: StoreView) => void;
  resultCount: number;
};

const FILTERS: StoreFilter[] = ["all", "shopping", "street", "workshop", "flagship"];

export function StoreFilters({
  query,
  onQueryChange,
  filter,
  onFilterChange,
  view,
  onViewChange,
  resultCount,
}: StoreFiltersProps) {
  const t = useTranslations("stores.filters");

  return (
    <div className="sticky top-0 z-20 border-b border-espresso-900/10 bg-cream-50/95 pb-5 pt-6 backdrop-blur-md lg:pt-8">
      <div className="relative">
        <Search
          className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-espresso-600/60"
          aria-hidden
        />
        <input
          value={query}
          onChange={(event) => onQueryChange(event.target.value)}
          placeholder={t("placeholder")}
          className="w-full rounded-full border border-espresso-900/15 bg-cream-100 py-3 pl-11 pr-4 font-sans text-sm text-espresso-900 outline-none transition-colors placeholder:text-espresso-600/55 focus:border-carlo-gold"
          type="search"
        />
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-2">
        {FILTERS.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => onFilterChange(item)}
            className={cn(
              "rounded-full border px-4 py-2 font-sans text-xs font-semibold uppercase tracking-[0.12em] transition-colors",
              filter === item
                ? "border-carlo-red bg-carlo-red text-cream-50"
                : "border-espresso-900/10 bg-cream-50 text-espresso-700 hover:border-espresso-900/30",
            )}
          >
            {t(`chips.${item}`)}
          </button>
        ))}
      </div>

      <div className="mt-4 flex items-center justify-between gap-4">
        <p className="font-sans text-sm text-espresso-600">
          {t("resultCount", { count: resultCount })}
        </p>

        <div className="hidden rounded-full border border-espresso-900/10 p-1 lg:flex">
          {(["list", "grid"] as StoreView[]).map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => onViewChange(item)}
              className={cn(
                "rounded-full px-4 py-1.5 font-sans text-xs font-semibold uppercase tracking-[0.12em] transition-colors",
                view === item
                  ? "bg-espresso-900 text-cream-50"
                  : "text-espresso-600 hover:text-espresso-900",
              )}
            >
              {t(`view.${item}`)}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
