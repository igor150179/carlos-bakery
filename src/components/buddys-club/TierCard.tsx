"use client";

import { Check, Medal, Star } from "lucide-react";

import { FadeIn } from "@/components/animations/FadeIn";
import { cn } from "@/lib/utils";

type TierCardProps = {
  name: string;
  tagline: string;
  requirement: string;
  benefits: string[];
  variant: "bronze" | "silver" | "gold";
  badge?: string;
  delay?: number;
};

export function TierCard({
  name,
  tagline,
  requirement,
  benefits,
  variant,
  badge,
  delay = 0,
}: TierCardProps) {
  const isGold = variant === "gold";
  const isSilver = variant === "silver";

  return (
    <FadeIn
      delay={delay}
      className={cn(
        "relative rounded-sm p-7 transition-transform duration-500 hover:scale-[1.02]",
        isGold
          ? "bg-espresso-900 text-cream-50 shadow-[0_24px_60px_rgba(15,11,8,0.18)]"
          : "bg-cream-50 text-espresso-900",
        isSilver
          ? "border-2 border-carlo-gold shadow-[0_24px_60px_rgba(184,147,90,0.16)]"
          : "border border-espresso-900/10",
      )}
    >
      {badge ? (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-carlo-red px-4 py-1 font-sans text-[0.65rem] font-bold uppercase tracking-[0.14em] text-cream-50">
          {badge}
        </span>
      ) : null}
      <div
        className={cn(
          "flex size-14 items-center justify-center rounded-full",
          isGold ? "bg-carlo-gold text-espresso-900" : "bg-carlo-gold/15 text-carlo-gold",
        )}
      >
        {isGold ? <Star className="size-7 fill-current" /> : <Medal className="size-7" />}
      </div>
      <h3 className={cn("mt-6 font-display text-4xl", isGold && "text-cream-50")}>
        {name}
      </h3>
      <p className={cn("mt-2 font-sans text-sm", isGold ? "text-carlo-gold" : "text-espresso-700")}>
        {tagline}
      </p>
      <p
        className={cn(
          "mt-5 rounded-full px-4 py-2 font-sans text-xs font-semibold uppercase tracking-[0.14em]",
          isGold ? "bg-cream-50/10 text-cream-50" : "bg-cream-100 text-espresso-700",
        )}
      >
        {requirement}
      </p>
      <ul className="mt-7 space-y-3">
        {benefits.map((benefit) => (
          <li
            key={benefit}
            className={cn("flex items-start gap-3 font-sans text-sm", isGold ? "text-cream-50/78" : "text-espresso-700")}
          >
            <Check className="mt-0.5 size-4 shrink-0 text-carlo-gold" aria-hidden />
            {benefit}
          </li>
        ))}
      </ul>
    </FadeIn>
  );
}
