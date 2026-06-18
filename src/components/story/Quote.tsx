"use client";

import { motion, useInView } from "framer-motion";
import type { ReactNode } from "react";
import { useRef } from "react";

import { cn } from "@/lib/utils";

type QuoteProps = {
  children: ReactNode;
  attribution?: string;
  signature?: string;
  translation?: string;
  variant?: "light" | "dark";
  className?: string;
};

export function Quote({
  children,
  attribution,
  signature,
  translation,
  variant = "light",
  className,
}: QuoteProps) {
  const ref = useRef<HTMLQuoteElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.35 });
  const isDark = variant === "dark";

  return (
    <motion.blockquote
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={cn("relative border-l-2 border-carlo-gold pl-6 md:pl-8", className)}
    >
      <p
        className="pointer-events-none font-display text-6xl leading-none text-carlo-gold/25 md:text-7xl"
        aria-hidden
      >
        &ldquo;
      </p>
      <p
        className={cn(
          "font-italic text-xl leading-relaxed md:text-2xl",
          isDark ? "text-cream-50" : "text-espresso-800",
        )}
      >
        {children}
      </p>
      {translation?.trim() ? (
        <p
          className={cn(
            "mt-3 font-sans text-sm leading-relaxed",
            isDark ? "text-cream-50/60" : "text-espresso-600",
          )}
        >
          {translation}
        </p>
      ) : null}
      {attribution ? (
        <cite
          className={cn(
            "mt-4 block font-sans text-sm not-italic",
            isDark ? "text-cream-50/70" : "text-espresso-600",
          )}
        >
          {attribution}
        </cite>
      ) : null}
      {signature ? (
        <p className="mt-4 font-script text-2xl text-carlo-gold">{signature}</p>
      ) : null}
    </motion.blockquote>
  );
}
