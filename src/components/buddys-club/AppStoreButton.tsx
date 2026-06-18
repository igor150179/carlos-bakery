"use client";

import { Apple } from "lucide-react";

type AppStoreButtonProps = {
  href?: string;
  eyebrow: string;
  label: string;
};

export function AppStoreButton({
  href = "#",
  eyebrow,
  label,
}: AppStoreButtonProps) {
  return (
    <a
      href={href}
      className="inline-flex min-w-48 items-center gap-3 rounded-xl bg-black px-5 py-3 text-white shadow-[0_12px_30px_rgba(15,11,8,0.18)] transition-transform duration-300 hover:scale-105"
      aria-label={`${eyebrow} ${label}`}
    >
      <Apple className="size-8 fill-white" strokeWidth={1.5} aria-hidden />
      <span className="text-left leading-tight">
        <span className="block font-sans text-xs text-white/80">{eyebrow}</span>
        <span className="block font-sans text-lg font-semibold">{label}</span>
      </span>
    </a>
  );
}
