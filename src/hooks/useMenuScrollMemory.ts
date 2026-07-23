"use client";

import { useEffect, useRef } from "react";

import type { MenuCategory } from "@/data/menu";
import { useLenis } from "@/components/providers/SmoothScrollProvider";
import {
  getMenuScrollPosition,
  saveMenuScrollPosition,
} from "@/lib/menu-scroll-memory";

type UseMenuScrollMemoryOptions = {
  activeCategory: MenuCategory;
};

export function useMenuScrollMemory({
  activeCategory,
}: UseMenuScrollMemoryOptions): void {
  const { lenis } = useLenis();
  const activeCategoryRef = useRef(activeCategory);

  activeCategoryRef.current = activeCategory;

  useEffect(() => {
    const targetScroll = getMenuScrollPosition() ?? 0;

    const frame = requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        if (lenis) {
          lenis.scrollTo(targetScroll, { immediate: true });
        } else {
          window.scrollTo(0, targetScroll);
        }
      });
    });

    return () => cancelAnimationFrame(frame);
  }, [lenis]);

  useEffect(() => {
    let frame = 0;

    const persistScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const scrollY = lenis?.scroll ?? window.scrollY;
        saveMenuScrollPosition(scrollY, activeCategoryRef.current);
      });
    };

    if (lenis) {
      lenis.on("scroll", persistScroll);
    } else {
      window.addEventListener("scroll", persistScroll, { passive: true });
    }

    return () => {
      cancelAnimationFrame(frame);
      if (lenis) {
        lenis.off("scroll", persistScroll);
      } else {
        window.removeEventListener("scroll", persistScroll);
      }

      const scrollY = lenis?.scroll ?? window.scrollY;
      saveMenuScrollPosition(scrollY, activeCategoryRef.current);
    };
  }, [lenis]);
}
