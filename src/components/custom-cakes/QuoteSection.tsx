"use client";

import { ArrowRight, Check, Clock, MapPin, MessageCircle, Phone } from "lucide-react";
import { useTranslations } from "next-intl";

import { FadeIn } from "@/components/animations/FadeIn";
import { MonogramBackground } from "@/components/shared/MonogramBackground";
import { WORKSHOP_STORE } from "@/data/stores";
import { getSiteWhatsAppUrl } from "@/lib/constants";
import { CUSTOM_CAKES_QUOTE_FORM_ENABLED } from "@/lib/feature-flags";

import { QuoteForm } from "./QuoteForm";

const GUARANTEE_KEYS = ["response", "briefing", "sketch", "delivery"] as const;

export function QuoteSection() {
  const t = useTranslations("customCakes.form");
  const whatsappUrl = getSiteWhatsAppUrl(
    "Olá! Gostaria de solicitar um orçamento de bolo personalizado.",
  );

  return (
    <section
      id="orcamento"
      className="relative scroll-mt-28 overflow-hidden bg-cream-50 px-[var(--container-padding-x)] py-12 md:scroll-mt-32 md:py-16"
    >
      <MonogramBackground size="lg" />

      <div
        className={
          CUSTOM_CAKES_QUOTE_FORM_ENABLED
            ? "relative z-10 mx-auto grid max-w-[var(--max-content-width)] gap-8 lg:grid-cols-5 lg:gap-12"
            : "relative z-10 mx-auto max-w-3xl"
        }
      >
        <FadeIn className={CUSTOM_CAKES_QUOTE_FORM_ENABLED ? "lg:col-span-2" : undefined}>
          <p className="mb-4 font-sans text-xs font-medium uppercase tracking-[0.35em] text-carlo-gold">
            {t("eyebrow")}
          </p>
          <h2 className="font-display text-[clamp(2rem,4vw,3rem)] leading-tight text-espresso-900">
            {t("heading")}
          </h2>
          <p className="mt-4 font-sans text-base leading-relaxed text-espresso-700">
            {CUSTOM_CAKES_QUOTE_FORM_ENABLED ? t("subhead") : t("subheadContact")}
          </p>
          <ul className="mt-8 space-y-3">
            {GUARANTEE_KEYS.map((key) => (
              <li
                key={key}
                className="flex items-start gap-2 font-sans text-sm text-espresso-800"
              >
                <Check className="mt-0.5 size-4 shrink-0 text-carlo-gold" aria-hidden />
                {t(`guarantees.${key}`)}
              </li>
            ))}
          </ul>

          {!CUSTOM_CAKES_QUOTE_FORM_ENABLED ? (
            <div className="mt-8 rounded-sm border border-espresso-900/10 bg-cream-50/80 p-6 md:p-8">
              <p className="font-sans text-xs font-semibold uppercase tracking-[0.28em] text-carlo-gold">
                {t("storeEyebrow")}
              </p>
              <h3 className="mt-3 font-display text-2xl text-espresso-900">
                {WORKSHOP_STORE.name}
              </h3>
              <ul className="mt-5 space-y-3 font-sans text-sm leading-relaxed text-espresso-700 md:text-base">
                <li className="flex gap-3">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-carlo-gold" aria-hidden />
                  <span>
                    {WORKSHOP_STORE.address}
                    <br />
                    {WORKSHOP_STORE.neighborhood} — {WORKSHOP_STORE.city}
                  </span>
                </li>
                <li className="flex gap-3">
                  <Phone className="mt-0.5 size-4 shrink-0 text-carlo-gold" aria-hidden />
                  {WORKSHOP_STORE.phone}
                </li>
                <li className="flex gap-3">
                  <Clock className="mt-0.5 size-4 shrink-0 text-carlo-gold" aria-hidden />
                  {t("storeHours")}
                </li>
              </ul>
              <a
                href={WORKSHOP_STORE.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 font-sans text-sm font-semibold text-espresso-900 transition-colors hover:text-carlo-red"
              >
                {t("directions")}
                <ArrowRight className="size-4" aria-hidden />
              </a>
            </div>
          ) : null}

          <div className="my-6 border-t border-espresso-900/10" aria-hidden />
          <p className="font-sans text-sm font-semibold text-espresso-900">
            {t("whatsappTitle")}
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-7 py-3.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            <MessageCircle className="size-4" aria-hidden />
            {t("whatsappCta")}
          </a>
        </FadeIn>

        {CUSTOM_CAKES_QUOTE_FORM_ENABLED ? (
          <FadeIn delay={0.12} className="lg:col-span-3">
            <QuoteForm />
          </FadeIn>
        ) : null}
      </div>
    </section>
  );
}
