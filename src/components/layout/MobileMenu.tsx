"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useTranslations } from "next-intl";
import { useCallback, useEffect, useRef } from "react";

import { useLenis } from "@/components/providers/SmoothScrollProvider";
import { NAV_ITEMS } from "@/lib/navigation";

import { LangSwitcher } from "./LangSwitcher";
import { NavLink } from "./NavLink";

const overlayVariants = {
  closed: {
    opacity: 0,
    scale: 1.02,
    clipPath: "inset(0 0 100% 0)",
  },
  open: {
    opacity: 1,
    scale: 1,
    clipPath: "inset(0 0 0% 0)",
  },
};

const linkVariants = {
  closed: { opacity: 0, y: 40 },
  open: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.15 + i * 0.07,
      duration: 0.5,
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
          className="fixed inset-0 z-[60] flex flex-col bg-carlo-stripes"
          variants={overlayVariants}
          initial="closed"
          animate="open"
          exit="closed"
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center justify-end px-6 pt-6">
            <button
              ref={closeButtonRef}
              type="button"
              onClick={onClose}
              aria-label={t("closeMenu")}
              className="rounded-full p-2 text-cream-50 transition-colors hover:bg-cream-50/10"
            >
              <X className="size-7" strokeWidth={1.5} />
            </button>
          </div>

          <nav className="flex flex-1 flex-col justify-center gap-2 px-8 pb-12">
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
                  className="font-display text-5xl font-medium leading-tight text-cream-50 md:text-6xl"
                />
              </motion.div>
            ))}
          </nav>

          <div className="border-t border-cream-50/10 px-8 py-8">
            <LangSwitcher variant="light" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
