"use client";

import L from "leaflet";
import { LocateFixed } from "lucide-react";
import { useTranslations } from "next-intl";
import { useEffect, useMemo, useRef, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import type { Marker as LeafletMarker } from "leaflet";

import type { Store } from "@/data/stores";
import { cn } from "@/lib/utils";

import { StorePopup } from "./StorePopup";

type StoresMapProps = {
  stores: Store[];
  activeStoreId: string;
  onStoreSelect: (storeId: string) => void;
  onLocateMe: () => void;
  isLocating: boolean;
  locationError?: string | null;
};

const SAO_PAULO_CENTER: [number, number] = [-23.5505, -46.6333];
const POSITRON_TILES =
  "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png";

function createStoreIcon(store: Store, isActive: boolean) {
  return L.divIcon({
    className: cn(
      "carlos-marker",
      isActive && "is-active",
      store.isFlagship && "is-flagship",
    ),
    html: `
      <div class="carlos-marker-inner">
        <div class="carlos-marker-pulse"></div>
        <div class="carlos-marker-pin">
          <span>C</span>
          ${store.isFlagship ? '<strong aria-hidden="true">★</strong>' : ""}
        </div>
        <div class="carlos-marker-shadow"></div>
      </div>
    `,
    iconSize: [40, 52],
    iconAnchor: [20, 52],
    popupAnchor: [0, -46],
  });
}

function MapController({
  activeStore,
  markers,
}: {
  activeStore?: Store;
  markers: React.MutableRefObject<Record<string, LeafletMarker | null>>;
}) {
  const map = useMap();

  useEffect(() => {
    if (!activeStore) return;

    map.flyTo([activeStore.coordinates.lat, activeStore.coordinates.lng], 15, {
      duration: 0.8,
    });

    window.setTimeout(() => {
      markers.current[activeStore.id]?.openPopup();
    }, 450);
  }, [activeStore, map, markers]);

  return null;
}

function ScrollWheelActivator({
  enabled,
  onEnable,
}: {
  enabled: boolean;
  onEnable: () => void;
}) {
  const map = useMap();

  useEffect(() => {
    if (enabled) {
      map.scrollWheelZoom.enable();
    } else {
      map.scrollWheelZoom.disable();
    }
  }, [enabled, map]);

  useEffect(() => {
    map.on("click", onEnable);
    return () => {
      map.off("click", onEnable);
    };
  }, [map, onEnable]);

  return null;
}

export default function StoresMap({
  stores,
  activeStoreId,
  onStoreSelect,
  onLocateMe,
  isLocating,
  locationError,
}: StoresMapProps) {
  const t = useTranslations("stores.map");
  const [scrollWheelEnabled, setScrollWheelEnabled] = useState(false);
  const markerRefs = useRef<Record<string, LeafletMarker | null>>({});
  const activeStore = stores.find((store) => store.id === activeStoreId);

  const icons = useMemo(
    () =>
      Object.fromEntries(
        stores.map((store) => [
          store.id,
          createStoreIcon(store, store.id === activeStoreId),
        ]),
      ),
    [stores, activeStoreId],
  );

  return (
    <div className="relative size-full overflow-hidden rounded-sm border border-espresso-900/10 bg-cream-100">
      <MapContainer
        center={SAO_PAULO_CENTER}
        zoom={11}
        className="size-full"
        scrollWheelZoom={false}
        aria-label={t("ariaLabel")}
      >
        <TileLayer
          attribution='&copy; <a href="https://carto.com/attributions">CARTO</a> &copy; OpenStreetMap contributors'
          url={POSITRON_TILES}
        />
        <ScrollWheelActivator
          enabled={scrollWheelEnabled}
          onEnable={() => setScrollWheelEnabled(true)}
        />
        <MapController activeStore={activeStore} markers={markerRefs} />
        {stores.map((store) => (
          <Marker
            key={store.id}
            position={[store.coordinates.lat, store.coordinates.lng]}
            icon={icons[store.id]}
            eventHandlers={{
              click: () => onStoreSelect(store.id),
              mouseover: (event) => event.target.openPopup(),
            }}
            ref={(marker) => {
              markerRefs.current[store.id] = marker;
            }}
          >
            <Popup closeButton={false}>
              <StorePopup
                store={store}
                onDetailsClick={() => onStoreSelect(store.id)}
              />
            </Popup>
          </Marker>
        ))}
      </MapContainer>

      <div className="absolute left-4 top-4 z-[500] flex max-w-[calc(100%-2rem)] flex-col items-start gap-2">
        <button
          type="button"
          onClick={onLocateMe}
          disabled={isLocating}
          className="inline-flex items-center gap-2 rounded-full bg-cream-50 px-4 py-2.5 font-sans text-xs font-semibold uppercase tracking-[0.12em] text-espresso-900 shadow-[0_8px_24px_rgba(15,11,8,0.12)] transition-colors hover:bg-cream-100 disabled:cursor-wait disabled:opacity-70"
        >
          <LocateFixed className="size-4" aria-hidden />
          {isLocating ? t("locating") : t("nearMe")}
        </button>
        {locationError ? (
          <p className="rounded-sm bg-cream-50 px-3 py-2 font-sans text-xs text-carlo-red shadow-[0_8px_24px_rgba(15,11,8,0.12)]">
            {locationError}
          </p>
        ) : null}
      </div>
    </div>
  );
}
