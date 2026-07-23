"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ShoppingBag, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { useCallback, useEffect, useRef } from "react";

import { useLenis } from "@/components/providers/SmoothScrollProvider";
import { useCardapioLink } from "@/hooks/useCardapioLink";
import { Link } from "@/i18n/routing";
import { NAV_ITEMS } from "@/lib/navigation";

import { NavLink } from "./NavLink";

const overlayVariants = {
  closed: { opacity: 0, x: "100%" },
  open: { opacity: 1, x: 0 },
};

const linkVariants = {
  closed: { opacity: 0, y: 24 },
  open: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.08 + i * 0.05,
      duration: 0.4,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  }),
};

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
};

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  const t = useTranslations("nav");
  const { lenis } = useLenis();
  const cardapioLink = useCardapioLink(onClose);
  const panelRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }

      if (event.key !== "Tab" || !panelRef.current) return;

      const focusable = panelRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    },
    [onClose],
  );

  useEffect(() => {
    if (!open) return;

    document.body.style.overflow = "hidden";
    lenis?.stop();

    closeButtonRef.current?.focus();
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      lenis?.start();
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, lenis, handleKeyDown]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          ref={panelRef}
          role="dialog"
          aria-modal="true"
          aria-label={t("mobileMenu")}
          className="fixed inset-0 z-[60] flex min-h-dvh flex-col bg-carlo-stripes pt-[env(safe-area-inset-top,0px)]"
          variants={overlayVariants}
          initial="closed"
          animate="open"
          exit="closed"
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex shrink-0 items-center justify-end px-5 pt-4 sm:px-6">
            <button
              ref={closeButtonRef}
              type="button"
              onClick={onClose}
              aria-label={t("closeMenu")}
              className="rounded-full p-2.5 text-cream-50 transition-colors hover:bg-cream-50/10"
            >
              <X className="size-7" strokeWidth={1.5} />
            </button>
          </div>

          <nav
            className="flex min-h-0 flex-1 flex-col justify-center gap-1 overflow-y-auto overscroll-y-contain px-5 py-4 sm:gap-2 sm:px-8"
            aria-label="Navegação principal"
          >
            {NAV_ITEMS.map((item, index) => (
              <motion.div
                key={item.key}
                custom={index}
                variants={linkVariants}
                initial="closed"
                animate="open"
              >
                <NavLink
                  href={item.href}
                  labelKey={item.key}
                  variant="light"
                  onClick={onClose}
                  className="block py-2 font-display text-[clamp(1.65rem,7vw,2.5rem)] font-medium leading-[1.15] whitespace-normal text-cream-50 sm:py-2.5"
                />
              </motion.div>
            ))}
          </nav>

          <div className="shrink-0 border-t border-cream-50/10 px-5 py-5 pb-[max(1.25rem,env(safe-area-inset-bottom,0px))] sm:px-8">
            <Link
              href="/cardapio"
              {...cardapioLink}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-carlo-red px-6 py-3 text-sm font-semibold text-cream-50 transition-colors hover:bg-carlo-red-dark"
            >
              <ShoppingBag className="size-4" strokeWidth={2} aria-hidden />
              {t("orderNow")}
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
