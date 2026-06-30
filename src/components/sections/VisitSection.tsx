"use client";

import { ArrowRight, MessageCircle } from "lucide-react";
import { useTranslations } from "next-intl";

import { FadeIn } from "@/components/animations/FadeIn";
import { getSiteWhatsAppUrl } from "@/lib/constants";
import { WORKSHOP_STORE } from "@/data/stores";

const MAP_QUERY = encodeURIComponent(
  `${WORKSHOP_STORE.address}, ${WORKSHOP_STORE.neighborhood}, ${WORKSHOP_STORE.city}`,
);

export function VisitSection() {
  const t = useTranslations("home.visit");
  const whatsappUrl = getSiteWhatsAppUrl();
  const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${MAP_QUERY}`;

  return (
    <section
      id="lojas"
      className="scroll-mt-28 bg-cream-50 px-[var(--container-padding-x)] py-[var(--section-padding-y)] md:scroll-mt-32"
    >
      <div className="mx-auto grid max-w-[var(--max-content-width)] gap-8 lg:grid-cols-5 lg:gap-10">
        <FadeIn className="relative h-[260px] overflow-hidden rounded-sm bg-espresso-100 sm:h-[320px] lg:col-span-3 lg:h-[440px]">
          <div
            className="flex h-full items-center justify-center bg-gradient-to-br from-espresso-100 to-cream-200"
            role="img"
            aria-label="Mapa — em breve"
          >
            <span className="font-sans text-sm uppercase tracking-[0.25em] text-espresso-600/60">
              Mapa
            </span>
          </div>
        </FadeIn>

        <div
          id="contato"
          className="scroll-mt-28 md:scroll-mt-32 lg:col-span-2"
        >
          <FadeIn delay={0.15} direction="left" className="flex flex-col justify-center">
            <p className="mb-4 font-sans text-xs font-medium uppercase tracking-[0.35em] text-carlo-gold">
              {t("eyebrow")}
            </p>
            <h2 className="font-display text-display leading-tight text-espresso-900">
              {t("heading")}
            </h2>
            <address className="mt-6 not-italic font-sans text-base leading-relaxed text-espresso-700">
              <p>{t("addressLine1")}</p>
              <p>{t("addressLine2")}</p>
              <p className="mt-2 text-espresso-600">{t("hours")}</p>
            </address>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-espresso-900 transition-colors hover:text-carlo-red"
              >
                {t("directions")}
                <ArrowRight className="size-4" aria-hidden />
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-espresso-900/20 px-6 py-3 text-sm font-semibold text-espresso-900 transition-colors hover:border-espresso-900 hover:bg-carlo-red-950 hover:text-cream-50"
              >
                <MessageCircle className="size-4" aria-hidden />
                {t("whatsapp")}
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
