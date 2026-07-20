"use client";

import { Eye, Sparkles } from "lucide-react";
import { useTranslations } from "next-intl";

import { cn } from "@/lib/utils";

type ShowKitchenCalloutProps = {
  variant?: "light" | "dark";
  className?: string;
};

export function ShowKitchenCallout({
  variant = "light",
  className,
}: ShowKitchenCalloutProps) {
  const t = useTranslations("showKitchen");
  const isDark = variant === "dark";

  return (
    <aside
      className={cn(
        "relative overflow-hidden rounded-sm",
        isDark
          ? "border border-cream-50/15 bg-carlo-red-950/35"
          : "border border-carlo-red/20 bg-gradient-to-br from-cream-100 via-cream-50 to-carlo-red-900/[0.05] shadow-[0_8px_30px_-12px_rgba(74,12,18,0.25)]",
        className,
      )}
      aria-label={t("ariaLabel")}
    >
      <div
        className={cn(
          "pointer-events-none absolute inset-y-0 left-0 w-1.5",
          isDark ? "bg-carlo-gold/80" : "bg-carlo-red",
        )}
        aria-hidden
      />

      <div className="relative flex gap-4 p-4 pl-5 md:gap-5 md:p-5 md:pl-6">
        <div
          className={cn(
            "flex size-11 shrink-0 items-center justify-center rounded-full md:size-12",
            isDark ? "bg-cream-50/10" : "bg-carlo-red/10",
          )}
        >
          <Eye
            className={cn(
              "size-5 md:size-[1.35rem]",
              isDark ? "text-carlo-gold" : "text-carlo-red",
            )}
            aria-hidden
          />
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <span
              className={cn(
                "inline-flex items-center gap-1.5 rounded-sm px-2.5 py-1 font-sans text-[0.62rem] font-bold uppercase tracking-[0.2em] md:text-[0.65rem]",
                isDark
                  ? "bg-carlo-gold text-espresso-900"
                  : "bg-carlo-red text-cream-50",
              )}
            >
              <Sparkles className="size-3" aria-hidden />
              {t("badge")}
            </span>
            <span
              className={cn(
                "font-sans text-[0.62rem] font-semibold uppercase tracking-[0.16em] md:text-[0.65rem]",
                isDark ? "text-carlo-gold/90" : "text-carlo-gold",
              )}
            >
              {t("scope")}
            </span>
          </div>

          <h3
            className={cn(
              "mt-2 font-display text-[clamp(1.25rem,2.5vw,1.65rem)] leading-tight",
              isDark ? "text-cream-50" : "text-espresso-900",
            )}
          >
            {t("heading")}
          </h3>

          <p
            className={cn(
              "mt-2 font-sans text-sm leading-relaxed md:text-[0.9375rem]",
              isDark ? "text-cream-50/75" : "text-espresso-700",
            )}
          >
            {t("body")}
          </p>

          <ul className="mt-3 flex flex-wrap gap-2">
            {(["live", "allStores", "glass"] as const).map((item) => (
              <li
                key={item}
                className={cn(
                  "rounded-full px-3 py-1 font-sans text-[0.68rem] font-medium",
                  isDark
                    ? "bg-cream-50/10 text-cream-50/85"
                    : "bg-carlo-red-900/[0.06] text-espresso-700",
                )}
              >
                {t(`highlights.${item}`)}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </aside>
  );
}
