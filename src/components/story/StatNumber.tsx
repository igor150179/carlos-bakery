"use client";

import { CountUp } from "@/components/animations/CountUp";
import { FadeIn } from "@/components/animations/FadeIn";
import { cn } from "@/lib/utils";

type StatNumberProps = {
  value: number;
  suffix?: string;
  label: string;
  className?: string;
};

export function StatNumber({
  value,
  suffix = "",
  label,
  className,
}: StatNumberProps) {
  return (
    <FadeIn className={cn("text-center", className)}>
      <p className="font-display text-[clamp(2.5rem,5vw,4rem)] leading-none text-champagne-on-dark">
        <CountUp value={value} suffix={suffix} duration={2.2} />
      </p>
      <p className="mt-3 font-sans text-xs uppercase tracking-[0.2em] text-cream-50/70">
        {label}
      </p>
    </FadeIn>
  );
}
