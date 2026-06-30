"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { ArrowRight, Clock, MapPin, MessageCircle, Phone } from "lucide-react";
import { useTranslations } from "next-intl";
import { useEffect, useMemo, useState } from "react";

import { FadeIn } from "@/components/animations/FadeIn";
import { Parallax } from "@/components/animations/Parallax";
import { MonogramBackground } from "@/components/shared/MonogramBackground";
import { FLAGSHIP_STORE, STORES, WORKSHOP_STORE } from "@/data/stores";
import { Link } from "@/i18n/routing";
import { getSiteWhatsAppUrl, SITE_CONFIG } from "@/lib/constants";
import { STORE_PHOTOS_ENABLED } from "@/lib/feature-flags";
import {
  getStoreDistance,
  type Coordinates,
} from "@/lib/store-utils";

import { StoresList } from "./StoresList";
import type { StoreFilter, StoreView } from "./StoreFilters";

const DynamicStoresMap = dynamic(() => import("./StoresMap"), {
  ssr: false,
  loading: () => (
    <div className="size-full animate-pulse rounded-sm bg-cream-100" />
  ),
});

export function StoresPageContent() {
  const t = useTranslations("stores");
  const [activeStoreId, setActiveStoreId] = useState(STORES[0].id);
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [filter, setFilter] = useState<StoreFilter>("all");
  const [view, setView] = useState<StoreView>("list");
  const [userLocation, setUserLocation] = useState<Coordinates | null>(null);
  const [isLocating, setIsLocating] = useState(false);
  const [locationError, setLocationError] = useState<string | null>(null);

  useEffect(() => {
    const timeout = window.setTimeout(() => setDebouncedQuery(query), 200);
    return () => window.clearTimeout(timeout);
  }, [query]);

  const filteredStores = useMemo(() => {
    const normalizedQuery = debouncedQuery.trim().toLowerCase();

    const results = STORES.filter((store) => {
      const matchesQuery =
        normalizedQuery.length === 0 ||
        [
          store.name,
          store.shortName,
          store.neighborhood,
          store.city,
          store.address,
        ]
          .join(" ")
          .toLowerCase()
          .includes(normalizedQuery);

      const matchesFilter =
        filter === "all" ||
        (filter === "shopping" && store.features.includes("Shopping")) ||
        (filter === "street" && !store.features.includes("Shopping")) ||
        (filter === "workshop" &&
          store.features.some((feature) =>
            feature.toLowerCase().includes("workshop"),
          )) ||
        (filter === "flagship" && store.isFlagship);

      return matchesQuery && matchesFilter;
    });

    if (!userLocation) return results;

    return [...results].sort((a, b) => {
      const distanceA = getStoreDistance(a, userLocation) ?? Number.MAX_VALUE;
      const distanceB = getStoreDistance(b, userLocation) ?? Number.MAX_VALUE;
      return distanceA - distanceB;
    });
  }, [debouncedQuery, filter, userLocation]);

  useEffect(() => {
    if (filteredStores.length === 0) return;
    if (!filteredStores.some((store) => store.id === activeStoreId)) {
      setActiveStoreId(filteredStores[0].id);
    }
  }, [activeStoreId, filteredStores]);

  const handleLocateMe = () => {
    if (!("geolocation" in navigator)) {
      setLocationError(t("map.locationUnsupported"));
      return;
    }

    setIsLocating(true);
    setLocationError(null);
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
        setIsLocating(false);
      },
      () => {
        setLocationError(t("map.locationError"));
        setIsLocating(false);
      },
      { enableHighAccuracy: true, timeout: 10_000, maximumAge: 60_000 },
    );
  };

  return (
    <>
      <section className="relative flex min-h-[55vh] items-center justify-center overflow-hidden bg-cream-50">
        {STORE_PHOTOS_ENABLED ? (
          <div className="absolute inset-0">
            <Image
              src={FLAGSHIP_STORE.image}
              alt=""
              fill
              priority
              className="object-cover opacity-[0.14] blur-sm"
              sizes="100vw"
            />
            <div
              className="absolute inset-0 bg-gradient-to-b from-cream-50/70 via-cream-50/95 to-cream-50"
              aria-hidden
            />
          </div>
        ) : null}
        <FadeIn className="relative z-10 mx-auto max-w-3xl px-[var(--container-padding-x)] py-16 text-center md:py-20">
          <p className="mb-4 font-sans text-xs font-medium uppercase tracking-[0.35em] text-carlo-gold">
            {t("hero.eyebrow")}
          </p>
          <h1 className="font-display text-[clamp(3rem,6vw,5rem)] leading-tight text-espresso-900">
            {t("hero.headline")}
          </h1>
          <p className="mx-auto mt-5 max-w-xl font-sans text-base leading-relaxed text-espresso-700 md:text-lg">
            {t("hero.subhead")}
          </p>
        </FadeIn>
      </section>

      <section
        className="bg-cream-50"
        aria-label={t("locator.ariaLabel")}
      >
        <a
          href="#stores-list"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[1000] focus:rounded-full focus:bg-carlo-red focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-cream-50"
        >
          {t("locator.skipToList")}
        </a>
        <div className="grid lg:h-[calc(100vh-80px)] lg:grid-cols-[45%_55%]">
          <div className="order-2 min-h-[60vh] lg:order-1 lg:h-full lg:min-h-0 lg:overflow-hidden">
            <StoresList
              stores={filteredStores}
              activeStoreId={activeStoreId}
              onStoreSelect={setActiveStoreId}
              query={query}
              onQueryChange={setQuery}
              filter={filter}
              onFilterChange={setFilter}
              view={view}
              onViewChange={setView}
              userLocation={userLocation}
            />
          </div>
          <div className="order-1 h-[50vh] p-4 lg:sticky lg:top-20 lg:order-2 lg:h-[calc(100vh-80px)] lg:p-6">
            <DynamicStoresMap
              stores={filteredStores.length > 0 ? filteredStores : STORES}
              activeStoreId={activeStoreId}
              onStoreSelect={setActiveStoreId}
              onLocateMe={handleLocateMe}
              isLocating={isLocating}
              locationError={locationError}
            />
          </div>
        </div>
      </section>

      <FlagshipSection />
      <WorkshopSection />
      <FinalCtaSection />
    </>
  );
}

function FlagshipSection() {
  const t = useTranslations("stores.flagship");
  const whatsappUrl = `https://wa.me/${FLAGSHIP_STORE.whatsapp}`;

  return (
    <section className="bg-carlo-stripes px-[var(--container-padding-x)] py-14 md:py-16">
      <div className="mx-auto grid max-w-[var(--max-content-width)] items-center gap-8 lg:grid-cols-2 lg:gap-12">
        {STORE_PHOTOS_ENABLED ? (
          <FadeIn className="relative aspect-[4/5] overflow-hidden rounded-sm">
            <Parallax speed={0.25} className="relative size-full">
              <Image
                src={FLAGSHIP_STORE.image}
                alt={FLAGSHIP_STORE.name}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </Parallax>
          </FadeIn>
        ) : null}
        <FadeIn delay={0.12} direction="left" className={STORE_PHOTOS_ENABLED ? undefined : "lg:col-span-2 lg:max-w-3xl lg:mx-auto"}>
          <p className="mb-4 font-sans text-xs font-medium uppercase tracking-[0.35em] text-carlo-gold">
            {t("eyebrow")}
          </p>
          <h2 className="font-display text-[clamp(2.25rem,4.5vw,4rem)] leading-tight text-cream-50">
            {t("heading")}
          </h2>
          <p className="mt-5 font-italic text-xl leading-relaxed text-cream-50/80 md:text-2xl">
            {t("subhead")}
          </p>

          <ul className="mt-8 space-y-3 font-sans text-sm text-cream-50/80 md:text-base">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-carlo-gold" aria-hidden />
              {FLAGSHIP_STORE.address} · {FLAGSHIP_STORE.shortName}
            </li>
            <li className="flex gap-3">
              <Clock className="mt-0.5 size-4 shrink-0 text-carlo-gold" aria-hidden />
              {t("hoursWeek")}
            </li>
            <li className="flex gap-3">
              <Clock className="mt-0.5 size-4 shrink-0 text-carlo-gold" aria-hidden />
              {t("hoursSunday")}
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 size-4 shrink-0 text-carlo-gold" aria-hidden />
              {FLAGSHIP_STORE.phone}
            </li>
          </ul>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href={FLAGSHIP_STORE.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-carlo-red px-8 py-3.5 text-sm font-semibold text-cream-50 transition-colors hover:bg-carlo-red-dark"
            >
              {t("directions")}
              <ArrowRight className="size-4" aria-hidden />
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-cream-50/40 px-8 py-3.5 text-sm font-semibold text-cream-50 transition-colors hover:border-cream-50 hover:bg-cream-50/10"
            >
              {t("whatsapp")}
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function WorkshopSection() {
  const t = useTranslations("stores.workshop");
  const whatsappUrl = `https://wa.me/${WORKSHOP_STORE.whatsapp}`;

  return (
    <section className="bg-cream-50 px-[var(--container-padding-x)] py-14 md:py-16">
      <FadeIn className="mx-auto max-w-3xl text-center">
        <p className="mb-4 font-sans text-xs font-medium uppercase tracking-[0.35em] text-carlo-gold">
          {t("eyebrow")}
        </p>
        <h2 className="font-display text-[clamp(2.25rem,4.5vw,4rem)] leading-tight text-espresso-900">
          {t("heading")}
        </h2>
        <p className="mx-auto mt-5 max-w-2xl font-sans text-base leading-relaxed text-espresso-700 md:text-lg">
          {t("subhead")}
        </p>
        <dl className="mx-auto mt-8 grid max-w-2xl grid-cols-2 gap-4 text-left md:grid-cols-4">
          {(["location", "duration", "age", "price"] as const).map((key) => (
            <div key={key} className="rounded-sm bg-cream-100 p-4">
              <dt className="font-sans text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-carlo-gold">
                {t(`info.${key}.label`)}
              </dt>
              <dd className="mt-2 font-sans text-sm font-medium text-espresso-900">
                {t(`info.${key}.value`)}
              </dd>
            </div>
          ))}
        </dl>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-carlo-red px-8 py-3.5 text-sm font-semibold text-cream-50 transition-colors hover:bg-carlo-red-dark"
        >
          {t("cta")}
          <ArrowRight className="size-4" aria-hidden />
        </a>
      </FadeIn>
    </section>
  );
}

function FinalCtaSection() {
  const t = useTranslations("stores.finalCta");
  const whatsappUrl = getSiteWhatsAppUrl();

  return (
    <section className="relative overflow-hidden bg-cream-50 px-[var(--container-padding-x)] py-14 md:py-16">
      <MonogramBackground size="md" />
      <FadeIn className="relative mx-auto max-w-2xl text-center">
        <h2 className="font-display text-[clamp(2rem,4vw,3.25rem)] leading-tight text-espresso-900">
          {t("heading")}
        </h2>
        <p className="mx-auto mt-4 max-w-xl font-sans text-base leading-relaxed text-espresso-700 md:text-lg">
          {t("subhead")}
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={SITE_CONFIG.ifood}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-carlo-red px-8 py-3.5 text-sm font-semibold text-cream-50 transition-colors hover:bg-carlo-red-dark"
          >
            {t("ifood")}
            <ArrowRight className="size-4" aria-hidden />
          </a>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-espresso-900/20 px-8 py-3.5 text-sm font-semibold text-espresso-900 transition-colors hover:border-espresso-900 hover:bg-carlo-red-950 hover:text-cream-50"
          >
            <MessageCircle className="size-4" aria-hidden />
            {t("whatsapp")}
          </a>
        </div>
      </FadeIn>
    </section>
  );
}
