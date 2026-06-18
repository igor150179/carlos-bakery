import type { Store } from "@/data/stores";

export type StoreOpenStatus = {
  isOpen: boolean;
  message: string;
  closesAt?: string;
  opensAt?: string;
};

export type Coordinates = {
  lat: number;
  lng: number;
};

const DAY_MS = 24 * 60 * 60 * 1000;

function getHoursForDate(store: Store, date: Date) {
  const day = date.getDay();
  if (day === 0) return store.hours.sunday;
  if (day === 6) return store.hours.saturday;
  return store.hours.weekdays;
}

function parseTimeRange(range: string) {
  const matches = range.match(/(\d{1,2})h/g);

  if (!matches || matches.length < 2) {
    return { openHour: 10, closeHour: 22 };
  }

  return {
    openHour: Number(matches[0].replace("h", "")),
    closeHour: Number(matches[1].replace("h", "")),
  };
}

function formatHour(hour: number) {
  return `${String(hour).padStart(2, "0")}h`;
}

export function isStoreOpen(store: Store, now = new Date()): StoreOpenStatus {
  const { openHour, closeHour } = parseTimeRange(getHoursForDate(store, now));
  const openAt = new Date(now);
  openAt.setHours(openHour, 0, 0, 0);

  const closeAt = new Date(now);
  closeAt.setHours(closeHour, 0, 0, 0);

  if (now >= openAt && now < closeAt) {
    return {
      isOpen: true,
      closesAt: formatHour(closeHour),
      message: `Aberto · até ${formatHour(closeHour)}`,
    };
  }

  if (now < openAt) {
    return {
      isOpen: false,
      opensAt: formatHour(openHour),
      message: `Fechado · abre ${formatHour(openHour)}`,
    };
  }

  const tomorrow = new Date(now.getTime() + DAY_MS);
  const { openHour: nextOpenHour } = parseTimeRange(getHoursForDate(store, tomorrow));

  return {
    isOpen: false,
    opensAt: formatHour(nextOpenHour),
    message: `Fechado · abre ${formatHour(nextOpenHour)} amanhã`,
  };
}

export function haversineDistance(origin: Coordinates, destination: Coordinates) {
  const earthRadiusKm = 6371;
  const dLat = toRadians(destination.lat - origin.lat);
  const dLng = toRadians(destination.lng - origin.lng);
  const lat1 = toRadians(origin.lat);
  const lat2 = toRadians(destination.lat);

  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.sin(dLng / 2) ** 2 * Math.cos(lat1) * Math.cos(lat2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return earthRadiusKm * c;
}

export function formatDistance(distanceKm: number) {
  if (distanceKm < 1) return `${Math.round(distanceKm * 1000)} m`;
  return `${distanceKm.toFixed(1)} km`;
}

export function getStoreDistance(
  store: Store,
  userLocation: Coordinates | null,
) {
  if (!userLocation) return null;

  return haversineDistance(userLocation, store.coordinates);
}

function toRadians(value: number) {
  return (value * Math.PI) / 180;
}
