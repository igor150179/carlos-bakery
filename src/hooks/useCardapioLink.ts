"use client";

import type { MouseEvent } from "react";

import { usePathname } from "@/i18n/routing";
import { isMenuPathname } from "@/lib/menu-path";

export function useCardapioLink(onClick?: () => void) {
  const pathname = usePathname();

  return {
    scroll: false as const,
    onClick: (event: MouseEvent<HTMLAnchorElement>) => {
      onClick?.();
      if (isMenuPathname(pathname)) {
        event.preventDefault();
      }
    },
  };
}
