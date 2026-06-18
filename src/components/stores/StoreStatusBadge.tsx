"use client";

import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

import type { Store } from "@/data/stores";
import { isStoreOpen, type StoreOpenStatus } from "@/lib/store-utils";
import { cn } from "@/lib/utils";

type StoreStatusBadgeProps = {
  store: Store;
  className?: string;
};

export function StoreStatusBadge({ store, className }: StoreStatusBadgeProps) {
  const t = useTranslations("stores.status");
  const [status, setStatus] = useState<StoreOpenStatus | null>(null);

  useEffect(() => {
    setStatus(isStoreOpen(store));

    const interval = window.setInterval(() => {
      setStatus(isStoreOpen(store));
    }, 60_000);

    return () => window.clearInterval(interval);
  }, [store]);

  if (!status) {
    return (
      <span className={cn("text-sm text-espresso-600", className)}>
        {t("checking")}
      </span>
    );
  }

  const message = status.isOpen
    ? t("openUntil", { time: status.closesAt ?? "" })
    : status.opensAt
      ? t("closedOpens", { time: status.opensAt })
      : t("closed");

  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 text-sm font-medium",
        status.isOpen ? "text-[#247a3d]" : "text-carlo-red",
        className,
      )}
    >
      <span
        className={cn(
          "size-2 rounded-full",
          status.isOpen ? "bg-[#247a3d]" : "bg-carlo-red",
        )}
        aria-hidden
      />
      {message}
    </span>
  );
}
