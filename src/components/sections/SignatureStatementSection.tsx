"use client";

import { useTranslations } from "next-intl";

import { ScrollReveal } from "@/components/animations/ScrollReveal";

export function SignatureStatementSection() {
  const t = useTranslations("home");
  const lines = t("statement").split("\n").filter(Boolean);

  return (
    <section className="flex items-center justify-center bg-cream-50 py-12 md:py-16">
      <div className="mx-auto flex w-full max-w-3xl flex-col items-center gap-1 px-[var(--container-padding-x)] text-center md:gap-2">
        {lines.map((line, lineIndex) => (
          <ScrollReveal
            key={line}
            delay={lineIndex * 0.2}
            className="font-display text-[clamp(1.75rem,4.5vw,3.75rem)] italic leading-[1.25] tracking-[-0.01em] text-espresso-900"
          >
            {line}
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
