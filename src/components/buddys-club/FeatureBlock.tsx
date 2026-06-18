"use client";

import { Check } from "lucide-react";

import { FadeIn } from "@/components/animations/FadeIn";
import { cn } from "@/lib/utils";

import { PhoneMockup, type AppScreen } from "./PhoneMockup";

type FeatureBlockProps = {
  number: string;
  eyebrow: string;
  title: string;
  description: string;
  features: string[];
  mockupScreen: AppScreen;
  reverse?: boolean;
};

export function FeatureBlock({
  number,
  eyebrow,
  title,
  description,
  features,
  mockupScreen,
  reverse,
}: FeatureBlockProps) {
  return (
    <div
      className={cn(
        "grid items-center gap-10 py-12 md:py-16 lg:grid-cols-2 lg:gap-12",
        reverse && "lg:[&>*:first-child]:order-2",
      )}
    >
      <FadeIn direction={reverse ? "left" : "right"}>
        <div className="flex items-center gap-4">
          <span className="font-display text-5xl text-carlo-gold/80">{number}</span>
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.35em] text-carlo-gold">
            {eyebrow}
          </p>
        </div>
        <h3 className="mt-5 font-display text-[clamp(2rem,4vw,3.5rem)] leading-tight text-cream-50">
          {title}
        </h3>
        <p className="mt-5 max-w-xl font-sans text-base leading-relaxed text-cream-50/72 md:text-lg">
          {description}
        </p>
        <ul className="mt-7 space-y-3">
          {features.map((feature) => (
            <li
              key={feature}
              className="flex items-start gap-3 font-sans text-sm text-cream-50/82 md:text-base"
            >
              <Check className="mt-0.5 size-4 shrink-0 text-carlo-gold" aria-hidden />
              {feature}
            </li>
          ))}
        </ul>
      </FadeIn>
      <FadeIn delay={0.12} direction={reverse ? "right" : "left"}>
        <PhoneMockup screen={mockupScreen} rotation={reverse ? 4 : -4} />
      </FadeIn>
    </div>
  );
}
