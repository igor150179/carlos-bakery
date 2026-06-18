"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import Lenis from "lenis";

import "lenis/dist/lenis.css";
import { loadGsap } from "@/lib/gsap-client";

const LENIS_OPTIONS = {
  duration: 1.4,
  easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smoothWheel: true,
  wheelMultiplier: 1,
  touchMultiplier: 2,
} as const;

type LenisContextValue = {
  lenis: Lenis | null;
};

const LenisContext = createContext<LenisContextValue>({ lenis: null });

export function useLenis() {
  return useContext(LenisContext);
}

type SmoothScrollProviderProps = {
  children: ReactNode;
};

export function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  const [lenis, setLenis] = useState<Lenis | null>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    let cancelled = false;
    let cleanup: (() => void) | undefined;

    const initLenis = async () => {
      if (mediaQuery.matches || cancelled) return;

      const { gsap, ScrollTrigger } = await loadGsap();
      if (cancelled || mediaQuery.matches) return;

      const lenisInstance = new Lenis(LENIS_OPTIONS);
      setLenis(lenisInstance);

      lenisInstance.on("scroll", ScrollTrigger.update);

      const onTick = (time: number) => {
        lenisInstance.raf(time * 1000);
      };

      gsap.ticker.add(onTick);
      gsap.ticker.lagSmoothing(0);

      cleanup = () => {
        gsap.ticker.remove(onTick);
        lenisInstance.destroy();
        setLenis(null);
      };
    };

    void initLenis();

    const onMotionChange = () => {
      cleanup?.();
      cleanup = undefined;
      setLenis(null);
      void initLenis();
    };

    mediaQuery.addEventListener("change", onMotionChange);

    return () => {
      cancelled = true;
      mediaQuery.removeEventListener("change", onMotionChange);
      cleanup?.();
    };
  }, []);

  return (
    <LenisContext.Provider value={{ lenis }}>
      {children}
    </LenisContext.Provider>
  );
}
