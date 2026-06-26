"use client";

import {
  ArrowRight,
  Briefcase,
  Handshake,
  MessageCircle,
  Newspaper,
} from "lucide-react";
import { useTranslations } from "next-intl";

import { FadeIn } from "@/components/animations/FadeIn";
import { FAQ } from "@/components/custom-cakes/FAQ";
import { MonogramBackground } from "@/components/shared/MonogramBackground";
import { SITE_CONFIG } from "@/lib/constants";
import { CONTACT_DEPARTMENTS_ENABLED } from "@/lib/feature-flags";

import { ContactForm } from "./ContactForm";
import { DepartmentCard } from "./DepartmentCard";

const DEPARTMENT_ICONS = [Newspaper, Handshake, Briefcase, MessageCircle] as const;
const DEPARTMENT_IDS = ["press", "partnerships", "careers", "support"] as const;
const FAQ_IDS = ["customCake", "ifood", "outsideSp", "franchise", "supplier"] as const;

const EMAILS: Record<(typeof DEPARTMENT_IDS)[number], string> = {
  press: "imprensa@carlosbakery.com.br",
  partnerships: "parcerias@carlosbakery.com.br",
  careers: "rh@carlosbakery.com.br",
  support: "sac@carlosbakery.com.br",
};

export function ContactPageContent() {
  const t = useTranslations("contact");
  const whatsappUrl = `https://wa.me/${SITE_CONFIG.whatsapp.replace(/\D/g, "")}`;
  const faqItems = FAQ_IDS.map((id) => ({
    id,
    question: t(`faq.items.${id}.question`),
    answer: t(`faq.items.${id}.answer`),
  }));

  return (
    <article>
      <section className="relative overflow-hidden bg-cream-50 px-[var(--container-padding-x)] pb-6 pt-14 text-center md:pb-8 md:pt-16">
        <MonogramBackground size="lg" />
        <FadeIn className="relative z-10 mx-auto max-w-3xl">
          <p className="mb-4 font-sans text-xs font-semibold uppercase tracking-[0.35em] text-champagne-500">
            {t("hero.eyebrow")}
          </p>
          <h1 className="font-display text-[clamp(3rem,6vw,5rem)] leading-tight text-espresso-900">
            {t("hero.headline")}
          </h1>
          <p className="mx-auto mt-5 max-w-2xl font-sans text-base leading-relaxed text-espresso-700 md:text-lg">
            {t("hero.subhead")}
          </p>
        </FadeIn>
      </section>

      {CONTACT_DEPARTMENTS_ENABLED ? (
        <section className="bg-cream-50 px-[var(--container-padding-x)] pb-14 pt-2 md:pb-16 md:pt-4">
          <SectionHeader
            eyebrow={t("departments.eyebrow")}
            heading={t("departments.heading")}
            subhead={t("departments.subhead")}
          />
          <div className="mx-auto mt-10 grid max-w-[var(--max-content-width)] gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {DEPARTMENT_IDS.map((id, index) => {
              const Icon = DEPARTMENT_ICONS[index];
              const email = EMAILS[id];
              return (
                <FadeIn key={id} delay={index * 0.08}>
                  <DepartmentCard
                    icon={<Icon className="size-6" strokeWidth={1.75} aria-hidden />}
                    title={t(`departments.items.${id}.title`)}
                    description={t(`departments.items.${id}.description`)}
                    email={email}
                    cta={t(`departments.items.${id}.cta`)}
                    href={`mailto:${email}?subject=${encodeURIComponent(
                      t(`departments.items.${id}.subject`),
                    )}`}
                  />
                </FadeIn>
              );
            })}
          </div>
        </section>
      ) : null}

      <section className="bg-carlo-red-900 px-[var(--container-padding-x)] py-14 md:py-16">
        <div className="mx-auto grid max-w-[var(--max-content-width)] gap-10 lg:grid-cols-[3fr_2fr] lg:gap-12">
          <FadeIn>
            <ContactForm />
          </FadeIn>
          <FadeIn delay={0.12} direction="left">
            <p className="mb-4 font-sans text-xs font-semibold uppercase tracking-[0.35em] text-champagne-on-dark">
              {t("direct.eyebrow")}
            </p>
            <h2 className="font-display text-[clamp(2.25rem,4vw,3.5rem)] leading-tight text-cream-50">
              {t("direct.heading")}
            </h2>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 block rounded-sm bg-gradient-to-br from-[#22c55e] to-[#16a34a] p-7 text-cream-50 shadow-[0_24px_60px_rgba(22,163,74,0.25)]"
            >
              <MessageCircle className="size-10" aria-hidden />
              <p className="mt-5 font-display text-3xl">WhatsApp</p>
              <p className="mt-2 font-sans text-lg font-semibold">(11) 91567-9346</p>
              <p className="mt-2 font-sans text-sm text-cream-50/80">
                {t("direct.whatsappHint")}
              </p>
              <span className="mt-6 inline-flex items-center gap-2 font-sans text-sm font-semibold">
                {t("direct.whatsappCta")}
                <ArrowRight className="size-4" />
              </span>
            </a>
            <div className="my-8 border-t border-cream-50/12" />
            <div className="space-y-6 font-sans text-sm leading-relaxed text-cream-50/75">
              <div>
                <h3 className="font-display text-xl text-cream-50">
                  {t("direct.hoursTitle")}
                </h3>
                <p className="mt-2">{t("direct.hoursWeek")}</p>
                <p>{t("direct.hoursSunday")}</p>
              </div>
              <div>
                <h3 className="font-display text-xl text-cream-50">
                  {t("direct.officeTitle")}
                </h3>
                <p className="mt-2">R. Bela Cintra, 2182</p>
                <p>Jardim Paulista · São Paulo/SP</p>
                <p>CEP 01415-002</p>
              </div>
              <div className="flex flex-wrap gap-3">
                {[
                  ["Instagram", SITE_CONFIG.social.instagram],
                  ["Facebook", SITE_CONFIG.social.facebook],
                  ["TikTok", SITE_CONFIG.social.tiktok],
                  ["YouTube", SITE_CONFIG.social.youtube],
                ].map(([label, href]) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-cream-50/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] transition-colors hover:border-champagne-on-dark-muted hover:text-champagne-on-dark"
                  >
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="bg-cream-50 px-[var(--container-padding-x)] py-12 md:py-14">
        <div className="mx-auto max-w-3xl">
          <SectionHeader eyebrow={t("faq.eyebrow")} heading={t("faq.heading")} />
          <div className="mt-8">
            <FAQ items={faqItems} />
          </div>
        </div>
      </section>

      <section className="bg-cream-50 px-[var(--container-padding-x)] py-14 md:py-16">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-[clamp(2.25rem,4vw,3.5rem)] leading-tight text-espresso-900">
            {t("final.heading")}
          </h2>
          <p className="mx-auto mt-4 max-w-xl font-sans text-base leading-relaxed text-espresso-700 md:text-lg">
            {t("final.subhead")}
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#16a34a] px-8 py-4 text-sm font-semibold text-cream-50 transition-colors hover:bg-[#15803d]"
          >
            {t("final.cta")}
            <ArrowRight className="size-4" />
          </a>
        </FadeIn>
      </section>
    </article>
  );
}

function SectionHeader({
  eyebrow,
  heading,
  subhead,
}: {
  eyebrow: string;
  heading: string;
  subhead?: string;
}) {
  return (
    <FadeIn className="mx-auto max-w-3xl text-center">
      <p className="mb-4 font-sans text-xs font-semibold uppercase tracking-[0.35em] text-champagne-500">
        {eyebrow}
      </p>
      <h2 className="font-display text-[clamp(2.25rem,4vw,3.5rem)] leading-tight text-espresso-900">
        {heading}
      </h2>
      {subhead ? (
        <p className="mx-auto mt-4 max-w-2xl font-sans text-base leading-relaxed text-espresso-700 md:text-lg">
          {subhead}
        </p>
      ) : null}
    </FadeIn>
  );
}
