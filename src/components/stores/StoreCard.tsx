"use client";

import { MapPin, MessageCircle, Phone, Star } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";

import type { Store } from "@/data/stores";
import { STORE_PHOTOS_ENABLED } from "@/lib/feature-flags";
import { formatDistance } from "@/lib/store-utils";
import { cn } from "@/lib/utils";

import { StoreStatusBadge } from "./StoreStatusBadge";

type StoreCardProps = {
  store: Store;
  isActive: boolean;
  view: "list" | "grid";
  distanceKm?: number | null;
  onClick: () => void;
};

export function StoreCard({
  store,
  isActive,
  view,
  distanceKm,
  onClick,
}: StoreCardProps) {
  const t = useTranslations("stores.card");
  const whatsappUrl = `https://wa.me/${store.whatsapp}`;
  const phoneHref = `tel:${store.phone.replace(/\D/g, "")}`;

  return (
    <article
      id={`store-card-${store.id}`}
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onClick();
        }
      }}
      className={cn(
        "group cursor-pointer border-espresso-900/10 bg-cream-50 transition-colors focus:outline-none focus:ring-2 focus:ring-carlo-gold",
        view === "grid"
          ? "rounded-sm border p-4"
          : "border-b p-5 md:p-6",
        isActive &&
          (view === "grid"
            ? "border-carlo-red bg-cream-100"
            : "border-l-4 border-l-carlo-red bg-cream-100"),
        !isActive && "hover:bg-cream-100/55",
      )}
      aria-label={store.name}
    >
      <div
        className={cn(
          "gap-5",
          view === "grid" ? "space-y-4" : "flex items-start",
        )}
      >
        {STORE_PHOTOS_ENABLED ? (
          <div
            className={cn(
              "relative shrink-0 overflow-hidden rounded-sm bg-cream-100",
              view === "grid" ? "aspect-[4/3] w-full" : "aspect-square w-24 md:w-32",
            )}
          >
            <Image
              src={store.image}
              alt={store.name}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              sizes={view === "grid" ? "(max-width: 1024px) 100vw, 22vw" : "128px"}
            />
          </div>
        ) : null}

        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-start gap-x-3 gap-y-2">
            <h3 className="font-display text-2xl leading-tight text-espresso-900">
              {store.shortName}
            </h3>
            {store.isFlagship ? (
              <span className="inline-flex items-center gap-1 rounded-full bg-carlo-gold/15 px-2.5 py-1 font-sans text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-carlo-gold">
                <Star className="size-3 fill-current" aria-hidden />
                {t("flagship")}
              </span>
            ) : null}
          </div>

          <p className="mt-2 font-sans text-sm leading-relaxed text-espresso-700">
            {store.address} · {store.neighborhood}, {store.city} · {store.zipCode}
          </p>

          <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2">
            <StoreStatusBadge store={store} />
            {typeof distanceKm === "number" ? (
              <span className="font-sans text-sm text-espresso-600">
                {t("distance", { distance: formatDistance(distanceKm) })}
              </span>
            ) : null}
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {store.features.map((feature) => (
              <span
                key={feature}
                className="rounded-full bg-carlo-red-900/[0.06] px-3 py-1 font-sans text-[0.7rem] font-medium text-espresso-700"
              >
                {feature}
              </span>
            ))}
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(event) => event.stopPropagation()}
              className="inline-flex items-center gap-1.5 font-sans text-sm font-semibold text-espresso-900 transition-colors hover:text-carlo-red"
            >
              <MessageCircle className="size-4" aria-hidden />
              {t("whatsapp")}
            </a>
            <a
              href={store.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(event) => event.stopPropagation()}
              className="inline-flex items-center gap-1.5 font-sans text-sm font-semibold text-espresso-900 transition-colors hover:text-carlo-red"
            >
              <MapPin className="size-4" aria-hidden />
              {t("directions")}
            </a>
            <a
              href={phoneHref}
              onClick={(event) => event.stopPropagation()}
              className="inline-flex items-center gap-1.5 font-sans text-sm font-semibold text-espresso-900 transition-colors hover:text-carlo-red"
            >
              <Phone className="size-4" aria-hidden />
              {t("call")}
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
