"use client";

import { Gift, ShoppingBag, Smartphone } from "lucide-react";
import { useTranslations } from "next-intl";

import { CountUp } from "@/components/animations/CountUp";
import { FadeIn } from "@/components/animations/FadeIn";
import { FAQ } from "@/components/custom-cakes/FAQ";
import { MonogramBackground } from "@/components/shared/MonogramBackground";

import { AppStoreButton } from "./AppStoreButton";
import { FeatureBlock } from "./FeatureBlock";
import { GooglePlayButton } from "./GooglePlayButton";
import { MemberTestimonial } from "./MemberTestimonial";
import { PhoneMockup, type AppScreen } from "./PhoneMockup";
import { QRCodeDownload } from "./QRCodeDownload";
import { StepCard } from "./StepCard";
import { TierCard } from "./TierCard";

const APP_URL = "https://carlosbakery.com.br/buddys-club";

const STEP_VISUALS = ["app", "qr", "gift"] as const;
const STEP_ICONS = [Smartphone, ShoppingBag, Gift] as const;
const FEATURE_SCREENS: AppScreen[] = ["card", "birthday", "drops", "referral"];
const FAQ_IDS = ["free", "earn", "expire", "stores", "tier", "transfer", "phone"];

export function BuddysClubPageContent() {
  const t = useTranslations("buddysClub");
  const chips = t.raw("hero.chips") as string[];
  const steps = t.raw("steps.items") as Array<{ title: string; description: string }>;
  const features = t.raw("features.items") as Array<{
    eyebrow: string;
    title: string;
    description: string;
    bullets: string[];
  }>;
  const tiers = t.raw("tiers.items") as Array<{
    name: string;
    tagline: string;
    requirement: string;
    badge?: string;
    benefits: string[];
  }>;
  const testimonials = t.raw("testimonials.items") as Array<{
    name: string;
    tier: string;
    quote: string;
  }>;
  const faqs = FAQ_IDS.map((id) => ({
    id,
    question: t(`faq.items.${id}.question`),
    answer: t(`faq.items.${id}.answer`),
  }));

  return (
    <article>
      <section className="relative overflow-hidden bg-gradient-to-br from-cream-50 via-cream-100 to-espresso-100 px-[var(--container-padding-x)]">
        <div className="mx-auto grid min-h-screen max-w-[var(--max-content-width)] items-center gap-10 py-24 lg:grid-cols-2 lg:py-28">
          <FadeIn>
            <p className="mb-5 font-sans text-xs font-semibold uppercase tracking-[0.35em] text-champagne-500">
              {t("hero.eyebrow")}
            </p>
            <h1 className="max-w-2xl font-display text-[clamp(3.2rem,7vw,6rem)] leading-none text-espresso-900">
              {t("hero.headline")}
            </h1>
            <p className="mt-6 max-w-xl font-sans text-lg leading-relaxed text-espresso-700 md:text-xl">
              {t("hero.subhead")}
            </p>
            <div className="mt-7 flex flex-wrap gap-2">
              {chips.map((chip) => (
                <span
                  key={chip}
                  className="rounded-full bg-cream-50 px-4 py-2 font-sans text-xs font-semibold uppercase tracking-[0.12em] text-espresso-800 shadow-sm"
                >
                  {chip}
                </span>
              ))}
            </div>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <AppStoreButton eyebrow={t("download.appStoreEyebrow")} label={t("download.appStore")} />
              <GooglePlayButton eyebrow={t("download.googlePlayEyebrow")} label={t("download.googlePlay")} />
            </div>
            <p className="mt-4 font-sans text-sm text-espresso-600">
              {t("hero.available")}
            </p>
          </FadeIn>
          <FadeIn delay={0.15} direction="left" className="relative">
            <div className="absolute left-1/2 top-1/2 size-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-carlo-red/10 blur-3xl" />
            <PhoneMockup screen="home" className="relative z-10" />
          </FadeIn>
        </div>
      </section>

      <section className="bg-cream-50 px-[var(--container-padding-x)] py-14 md:py-16">
        <SectionHeader
          eyebrow={t("steps.eyebrow")}
          heading={t("steps.heading")}
          subhead={t("steps.subhead")}
        />
        <div className="relative mx-auto mt-10 grid max-w-[var(--max-content-width)] gap-6 md:grid-cols-3">
          <div className="pointer-events-none absolute left-[16%] right-[16%] top-20 hidden border-t border-dashed border-champagne-on-dark-muted/45 md:block" />
          {steps.map((step, index) => (
            <StepCard
              key={step.title}
              number={`0${index + 1}`}
              icon={STEP_ICONS[index]}
              title={step.title}
              description={step.description}
              visual={STEP_VISUALS[index]}
              delay={index * 0.15}
            />
          ))}
        </div>
      </section>

      <section className="bg-carlo-red-900 px-[var(--container-padding-x)] py-16 md:py-20">
        <DarkSectionHeader
          eyebrow={t("features.eyebrow")}
          heading={t("features.heading")}
          subhead={t("features.subhead")}
        />
        <div className="mx-auto mt-8 max-w-[var(--max-content-width)]">
          {features.map((feature, index) => (
            <FeatureBlock
              key={feature.title}
              number={`0${index + 1}`}
              eyebrow={feature.eyebrow}
              title={feature.title}
              description={feature.description}
              features={feature.bullets}
              mockupScreen={FEATURE_SCREENS[index]}
              reverse={index % 2 === 1}
            />
          ))}
        </div>
      </section>

      <section className="bg-cream-50 px-[var(--container-padding-x)] py-14 md:py-16">
        <SectionHeader
          eyebrow={t("tiers.eyebrow")}
          heading={t("tiers.heading")}
          subhead={t("tiers.subhead")}
        />
        <div className="mx-auto mt-10 flex max-w-[var(--max-content-width)] gap-5 overflow-x-auto pb-4 [scrollbar-width:none] lg:grid lg:grid-cols-3 lg:overflow-visible lg:pb-0 [&::-webkit-scrollbar]:hidden">
          {tiers.map((tier, index) => (
            <div key={tier.name} className="min-w-[82vw] sm:min-w-[380px] lg:min-w-0">
              <TierCard
                {...tier}
                variant={index === 0 ? "bronze" : index === 1 ? "silver" : "gold"}
                delay={index * 0.1}
              />
            </div>
          ))}
        </div>
      </section>

      <section className="bg-carlo-red-900 px-[var(--container-padding-x)] py-12 md:py-14">
        <div className="mx-auto grid max-w-[var(--max-content-width)] grid-cols-2 gap-8 md:grid-cols-4">
          {[
            [50000, "+", t("stats.members")],
            [1, "M+", t("stats.points")],
            [200, "+", t("stats.rewards")],
            [4.9, "", t("stats.rating")],
          ].map(([value, suffix, label]) => (
            <FadeIn key={String(label)} className="text-center">
              <p className="font-display text-[clamp(2.6rem,5vw,4.5rem)] leading-none text-champagne-on-dark">
                <CountUp
                  value={Number(value)}
                  suffix={String(suffix)}
                  decimals={Number(value) % 1 === 0 ? 0 : 1}
                  duration={2.2}
                />
              </p>
              <p className="mt-3 font-sans text-xs uppercase tracking-[0.18em] text-cream-50/70">
                {String(label)}
              </p>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="bg-cream-50 px-[var(--container-padding-x)] py-14 md:py-16">
        <SectionHeader eyebrow={t("testimonials.eyebrow")} heading={t("testimonials.heading")} />
        <div className="mx-auto mt-10 flex max-w-[var(--max-content-width)] gap-5 overflow-x-auto pb-4 [scrollbar-width:none] lg:grid lg:grid-cols-4 lg:overflow-visible lg:pb-0 [&::-webkit-scrollbar]:hidden">
          {testimonials.map((item, index) => (
            <MemberTestimonial key={item.name} {...item} delay={index * 0.08} />
          ))}
        </div>
      </section>

      <section className="bg-cream-50 px-[var(--container-padding-x)] py-12 md:py-14">
        <div className="mx-auto max-w-3xl">
          <SectionHeader eyebrow={t("faq.eyebrow")} heading={t("faq.heading")} />
          <div className="mt-8">
            <FAQ items={faqs} />
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-carlo-red-900 px-[var(--container-padding-x)] py-16 md:py-20">
        <MonogramBackground variant="light" size="lg" />
        <span className="absolute left-[18%] top-20 size-2 rounded-full bg-champagne-on-dark/70" />
        <span className="absolute right-[16%] top-32 size-1.5 rounded-full bg-champagne-on-dark/60" />
        <FadeIn className="relative z-10 mx-auto max-w-3xl text-center">
          <span className="rounded-full border border-champagne-on-dark-muted/30 px-4 py-2 font-sans text-[0.65rem] font-bold uppercase tracking-[0.22em] text-champagne-on-dark">
            {t("final.badge")}
          </span>
          <h2 className="mt-8 font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-tight text-cream-50">
            {t("final.heading")}
          </h2>
          <p className="mx-auto mt-5 max-w-xl font-sans text-base leading-relaxed text-cream-50/78 md:text-lg">
            {t("final.subhead")}
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <AppStoreButton eyebrow={t("download.appStoreEyebrow")} label={t("download.appStore")} />
            <GooglePlayButton eyebrow={t("download.googlePlayEyebrow")} label={t("download.googlePlay")} />
          </div>
          <div className="mt-10">
            <QRCodeDownload value={APP_URL} label={t("final.qrLabel")} />
          </div>
          <p className="mt-6 font-sans text-sm text-cream-50/55">
            {t("final.guarantee")}
          </p>
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
      <h2 className="font-display text-[clamp(2.25rem,4.5vw,4rem)] leading-tight text-espresso-900">
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

function DarkSectionHeader({
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
      <p className="mb-4 font-sans text-xs font-semibold uppercase tracking-[0.35em] text-champagne-on-dark">
        {eyebrow}
      </p>
      <h2 className="font-display text-[clamp(2.25rem,4.5vw,4rem)] leading-tight text-cream-50">
        {heading}
      </h2>
      {subhead ? (
        <p className="mx-auto mt-4 max-w-2xl font-sans text-base leading-relaxed text-cream-50/70 md:text-lg">
          {subhead}
        </p>
      ) : null}
    </FadeIn>
  );
}
