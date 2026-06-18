"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import type { MouseEvent } from "react";

import { useLenis } from "@/components/providers/SmoothScrollProvider";
import { Link, usePathname } from "@/i18n/routing";
import type { NavKey, NavHref } from "@/lib/navigation";
import { cn } from "@/lib/utils";

type NavLinkProps = {
  href: NavHref;
  labelKey: NavKey;
  variant?: "dark" | "light";
  className?: string;
  onClick?: () => void;
};

const HOME_SECTION_HREFS = new Set<NavHref>(["/contato"]);

export function NavLink({
  href,
  labelKey,
  variant = "dark",
  className,
  onClick,
}: NavLinkProps) {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const { lenis } = useLenis();
  const isLight = variant === "light";
  const isHome = pathname === "/";
  const isActive = pathname === href;
  const shouldUseHomeSection = isHome && HOME_SECTION_HREFS.has(href);
  const sectionId = href.slice(1);
  const resolvedHref = (
    shouldUseHomeSection ? { pathname: "/" as const, hash: sectionId } : href
  ) as Parameters<typeof Link>[0]["href"];

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.();
    if (!shouldUseHomeSection || event.defaultPrevented) return;

    const hash = sectionId;
    if (!hash) return;

    const target = document.getElementById(hash);
    if (!target) return;

    event.preventDefault();
    const offset = window.innerWidth >= 768 ? -112 : -80;

    if (lenis) {
      lenis.scrollTo(target, { offset });
    } else {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <Link
      href={resolvedHref}
      onClick={handleClick}
      aria-current={isActive ? "page" : undefined}
      className={cn(
        "group relative whitespace-nowrap py-1 text-sm font-medium tracking-wide transition-colors",
        isLight
          ? "text-cream-50/90 hover:text-cream-50"
          : "text-espresso-800 hover:text-carlo-red",
        className,
      )}
    >
      {t(labelKey)}
      <motion.span
        className={cn(
          "absolute -bottom-0.5 left-0 h-px origin-left bg-carlo-red",
          isLight && "bg-champagne-on-dark-soft",
        )}
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        style={{ width: "100%" }}
        aria-hidden
      />
    </Link>
  );
}
