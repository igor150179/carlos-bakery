"use client";

import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";

import type { Store } from "@/data/stores";

import { StoreStatusBadge } from "./StoreStatusBadge";

type StorePopupProps = {
  store: Store;
  onDetailsClick: () => void;
};

export function StorePopup({ store, onDetailsClick }: StorePopupProps) {
  const t = useTranslations("stores.map");

  return (
    <div className="min-w-56 p-1">
      <h3 className="font-display text-lg leading-tight text-espresso-900">
        {store.shortName}
      </h3>
      <p className="mt-2 font-sans text-sm leading-relaxed text-espresso-700">
        {store.address}
        <br />
        {store.neighborhood}, {store.city}
      </p>
      <StoreStatusBadge store={store} className="mt-3" />
      <button
        type="button"
        onClick={onDetailsClick}
        className="mt-4 inline-flex items-center gap-1.5 font-sans text-sm font-semibold text-carlo-red"
      >
        {t("details")}
        <ArrowRight className="size-4" aria-hidden />
      </button>
    </div>
  );
}
