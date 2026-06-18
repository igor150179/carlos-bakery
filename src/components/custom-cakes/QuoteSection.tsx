"use client";

import { Check, MessageCircle } from "lucide-react";
import { useTranslations } from "next-intl";

import { FadeIn } from "@/components/animations/FadeIn";
import { MonogramBackground } from "@/components/shared/MonogramBackground";
import { SITE_CONFIG } from "@/lib/constants";

import { QuoteForm } from "./QuoteForm";

const GUARANTEE_KEYS = ["response", "briefing", "sketch", "delivery"] as const;

export function QuoteSection() {
  const t = useTranslations("customCakes.form");
  const whatsappUrl = `https://wa.me/${SITE_CONFIG.whatsapp.replace(/\D/g, "")}`;

  return (
    <section
      id="orcamento"
      className="relative scroll-mt-28 overflow-hidden bg-cream-50 px-[var(--container-padding-x)] py-12 md:scroll-mt-32 md:py-16"
    >
      <MonogramBackground size="lg" />

      <div className="relative z-10 mx-auto grid max-w-[var(--max-content-width)] gap-8 lg:grid-cols-5 lg:gap-12">
        <FadeIn className="lg:col-span-2">
          <p className="mb-4 font-sans text-xs font-medium uppercase tracking-[0.35em] text-carlo-gold">
            {t("eyebrow")}
          </p>
          <h2 className="font-display text-[clamp(2rem,4vw,3rem)] leading-tight text-espresso-900">
            {t("heading")}
          </h2>
          <p className="mt-4 font-sans text-base leading-relaxed text-espresso-700">
            {t("subhead")}
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
          <div className="my-6 border-t border-espresso-900/10" aria-hidden />
          <p className="font-sans text-sm font-semibold text-espresso-900">
            {t("whatsappTitle")}
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            <MessageCircle className="size-4" aria-hidden />
            {t("whatsappCta")}
          </a>
        </FadeIn>

        <FadeIn delay={0.12} className="lg:col-span-3">
          <QuoteForm />
        </FadeIn>
      </div>
    </section>
  );
}
