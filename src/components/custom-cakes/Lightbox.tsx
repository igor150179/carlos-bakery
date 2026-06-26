"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useRef } from "react";

import { cn } from "@/lib/utils";

export type LightboxSlide = {
  id: string;
  image: string;
  alt: string;
  caption?: string;
};

type LightboxProps = {
  slides: LightboxSlide[];
  index: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
};

export function Lightbox({
  slides,
  index,
  onClose,
  onNavigate,
}: LightboxProps) {
  const open = index !== null;
  const current = index !== null ? slides[index] : null;
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const goPrev = useCallback(() => {
    if (index === null) return;
    onNavigate(index === 0 ? slides.length - 1 : index - 1);
  }, [index, onNavigate, slides.length]);

  const goNext = useCallback(() => {
    if (index === null) return;
    onNavigate(index === slides.length - 1 ? 0 : index + 1);
  }, [index, onNavigate, slides.length]);

  useEffect(() => {
    if (!open) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose, goPrev, goNext]);

  return (
    <AnimatePresence>
      {open && current ? (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={current.alt}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-carlo-red-900/95 p-4 backdrop-blur-md md:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            className="absolute right-4 top-4 z-10 rounded-full p-2 text-cream-50 transition-colors hover:bg-cream-50/10 md:right-8 md:top-8"
            aria-label="Fechar galeria"
          >
            <X className="size-7" strokeWidth={1.5} />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              goPrev();
            }}
            className="absolute left-2 z-10 hidden rounded-full p-3 text-cream-50 transition-colors hover:bg-cream-50/10 md:left-6 md:flex"
            aria-label="Imagem anterior"
          >
            <ChevronLeft className="size-8" />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              goNext();
            }}
            className="absolute right-2 z-10 hidden rounded-full p-3 text-cream-50 transition-colors hover:bg-cream-50/10 md:right-6 md:flex"
            aria-label="Próxima imagem"
          >
            <ChevronRight className="size-8" />
          </button>

          <motion.figure
            className="relative flex max-h-[85vh] w-full max-w-5xl flex-col"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm md:aspect-[16/10]">
              <Image
                src={current.image}
                alt={current.alt}
                fill
                className="object-contain"
                sizes="(max-width: 1280px) 100vw, 1280px"
                priority
              />
            </div>
            {current.caption ? (
              <figcaption className="mt-4 text-center font-sans text-sm text-cream-50/80 md:text-base">
                {current.caption}
              </figcaption>
            ) : null}
          </motion.figure>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
