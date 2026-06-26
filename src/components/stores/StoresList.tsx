"use client";

import { useEffect, useRef } from "react";
import { useTranslations } from "next-intl";

import type { Store } from "@/data/stores";
import type { Coordinates } from "@/lib/store-utils";
import { getStoreDistance } from "@/lib/store-utils";
import { cn } from "@/lib/utils";

import { StoreCard } from "./StoreCard";
import { StoreFilters, type StoreFilter, type StoreView } from "./StoreFilters";

type StoresListProps = {
  stores: Store[];
  activeStoreId: string;
  onStoreSelect: (storeId: string) => void;
  query: string;
  onQueryChange: (query: string) => void;
  filter: StoreFilter;
  onFilterChange: (filter: StoreFilter) => void;
  view: StoreView;
  onViewChange: (view: StoreView) => void;
  userLocation: Coordinates | null;
};

export function StoresList({
  stores,
  activeStoreId,
  onStoreSelect,
  query,
  onQueryChange,
  filter,
  onFilterChange,
  view,
  onViewChange,
  userLocation,
}: StoresListProps) {
  const t = useTranslations("stores.list");
  const cardRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    const activeCard = cardRefs.current[activeStoreId];
    activeCard?.scrollIntoView({ block: "nearest", behavior: "smooth" });
  }, [activeStoreId]);

  return (
    <div
      id="stores-list"
      data-lenis-prevent
      className="h-full overflow-y-auto overscroll-y-contain bg-cream-50 px-5 pb-8 md:px-8 lg:px-10"
    >
      <StoreFilters
        query={query}
        onQueryChange={onQueryChange}
        filter={filter}
        onFilterChange={onFilterChange}
        view={view}
        onViewChange={onViewChange}
        resultCount={stores.length}
      />

      {stores.length > 0 ? (
        <div
          className={cn(
            "pt-2",
            view === "grid"
              ? "gap-4 lg:grid lg:grid-cols-2"
              : "divide-y divide-espresso-900/0",
          )}
        >
          {stores.map((store) => (
            <div
              key={store.id}
              ref={(node) => {
                cardRefs.current[store.id] = node;
              }}
            >
              <StoreCard
                store={store}
                isActive={activeStoreId === store.id}
                view={view}
                distanceKm={getStoreDistance(store, userLocation)}
                onClick={() => onStoreSelect(store.id)}
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="py-16 text-center">
          <p className="font-display text-2xl text-espresso-900">
            {t("emptyTitle")}
          </p>
          <p className="mx-auto mt-2 max-w-sm font-sans text-sm text-espresso-600">
            {t("emptyBody")}
          </p>
        </div>
      )}
    </div>
  );
}
