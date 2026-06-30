"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, ShoppingBag } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";

import { Logo } from "@/components/shared/Logo";
import { Link, usePathname } from "@/i18n/routing";
import { NAV_ITEMS } from "@/lib/navigation";
import { cn } from "@/lib/utils";

import { LangSwitcher } from "./LangSwitcher";
import { MobileMenu } from "./MobileMenu";
import { NavLink } from "./NavLink";

export function HeaderShell() {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();

  const isHome = pathname === "/";
  const overlay = isHome && !scrolled;

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 80);
  });

  return (
    <>
      <motion.header
        initial={false}
        animate={{ y: 0, opacity: 1 }}
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-[height,background-color,border-color,box-shadow] duration-500",
          scrolled ? "h-16 md:h-[5.5rem]" : "h-[4.5rem] md:h-[6.25rem]",
          overlay
            ? "border-b border-transparent bg-transparent shadow-none"
            : "border-b border-cream-200/80 bg-cream-50/95 shadow-[0_2px_16px_rgba(15,11,8,0.04)] backdrop-blur-md",
        )}
      >
        <motion.div
          className="mx-auto flex h-full max-w-[var(--max-content-width)] items-center gap-3 px-[var(--container-padding-x)] md:gap-8"
          layout
        >
          <div className="min-w-0 shrink">
            <Logo variant={overlay ? "light" : "dark"} size="sm" />
          </div>

          <nav
            className="hidden flex-1 items-center justify-center gap-6 md:flex lg:gap-8"
            aria-label="Navegação principal"
          >
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.key}
                href={item.href}
                labelKey={item.key}
                variant={overlay ? "light" : "dark"}
              />
            ))}
          </nav>

          <div className="ml-auto flex shrink-0 items-center gap-2 md:ml-0 md:gap-4">
            <LangSwitcher
              variant={overlay ? "light" : "dark"}
              className="hidden md:block"
            />

            <Link
              href="/cardapio"
              className="hidden items-center gap-2 rounded-full bg-carlo-red px-5 py-2.5 text-sm font-semibold text-cream-50 transition-colors hover:bg-carlo-red-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-carlo-gold md:inline-flex"
            >
              <ShoppingBag className="size-4" strokeWidth={2} />
              {t("orderNow")}
            </Link>

            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              className={cn(
                "rounded-full p-2 transition-colors md:hidden",
                overlay
                  ? "text-cream-50 hover:bg-cream-50/10"
                  : "text-espresso-900 hover:bg-cream-200",
              )}
              aria-label={t("openMenu")}
              aria-expanded={mobileOpen}
            >
              <Menu className="size-6" strokeWidth={1.5} />
            </button>
          </div>
        </motion.div>
      </motion.header>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
