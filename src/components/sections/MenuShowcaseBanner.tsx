"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";

import { FadeIn } from "@/components/animations/FadeIn";
import { getMenuItemImage } from "@/data/menu";
import { useCardapioLink } from "@/hooks/useCardapioLink";
import { Link } from "@/i18n/routing";

const MENU_HIGHLIGHTS = [
  {
    id: "cannoliTradizionale" as const,
    menuItemId: "cannoli-tradizionale",
    index: "01",
    imageClass: "object-cover object-center",
  },
  {
    id: "lobsterTail" as const,
    menuItemId: "lobster-tail",
    index: "02",
    imageClass: "object-cover object-center",
  },
] as const;

export function MenuShowcaseBanner() {
  const t = useTranslations("home.products");
  const cardapioLink = useCardapioLink();

  return (
    <FadeIn>
      <Link
        href="/cardapio"
        {...cardapioLink}
        className="group relative block overflow-hidden rounded-sm bg-carlo-stripes shadow-[0_32px_80px_-40px_rgba(124,17,28,0.55)] ring-1 ring-champagne-on-dark-muted/20 transition-[box-shadow,ring-color] duration-700 hover:shadow-[0_40px_90px_-36px_rgba(124,17,28,0.62)] hover:ring-champagne-on-dark-soft/35"
      >
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(280px,0.9fr)_minmax(0,1fr)]">
          <div className="relative min-h-[280px] overflow-hidden sm:min-h-[320px] lg:min-h-[460px]">
            <Image
              src={getMenuItemImage(MENU_HIGHLIGHTS[0].menuItemId)}
              alt={t(`${MENU_HIGHLIGHTS[0].id}.name`)}
              fill
              className="transition-transform duration-[1.4s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03] object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 33vw"
              priority
            />
          </div>

          <div className="flex flex-col justify-center border-y border-champagne-on-dark-muted/10 px-6 py-8 md:px-8 md:py-10 lg:border-y-0 lg:border-x lg:px-10 lg:py-12">
            <p className="font-sans text-[0.65rem] font-medium uppercase tracking-[0.42em] text-champagne-on-dark">
              {t("menuBanner.eyebrow")}
            </p>
            <h3 className="mt-4 font-display text-[clamp(1.75rem,2.8vw,2.5rem)] leading-[1.1] text-cream-50">
              {t("menuBanner.tagline")}
            </h3>

            <div className="mt-8 space-y-6">
              {MENU_HIGHLIGHTS.map((item) => (
                <div key={item.id}>
                  <p className="font-sans text-[0.6rem] font-medium uppercase tracking-[0.38em] text-champagne-on-dark-muted">
                    {item.index}
                  </p>
                  <h4 className="mt-1.5 font-display text-xl leading-tight text-cream-50">
                    {t(`${item.id}.name`)}
                  </h4>
                  <p className="mt-1.5 font-sans text-sm leading-relaxed text-champagne-on-dark-muted">
                    {t(`${item.id}.description`)}
                  </p>
                </div>
              ))}
            </div>

            <span className="mt-8 inline-flex items-center gap-2 font-sans text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-champagne-on-dark-soft transition-colors duration-500 group-hover:text-champagne-on-dark">
              {t("menuBanner.cta")}
              <ArrowRight className="size-3.5 transition-transform duration-500 group-hover:translate-x-1" />
            </span>
          </div>

          <div className="relative min-h-[280px] overflow-hidden sm:min-h-[320px] lg:min-h-[460px]">
            <Image
              src={getMenuItemImage(MENU_HIGHLIGHTS[1].menuItemId)}
              alt={t(`${MENU_HIGHLIGHTS[1].id}.name`)}
              fill
              className="transition-transform duration-[1.4s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03] object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 33vw"
            />
          </div>
        </div>
      </Link>
    </FadeIn>
  );
}
