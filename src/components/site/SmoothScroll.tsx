import { useEffect, useRef } from "react";
import { useRouterState } from "@tanstack/react-router";
import Lenis from "lenis";

/**
 * Site-wide weighted smooth scrolling.
 * - Drives the native window scroll, so scroll listeners / IntersectionObserver
 *   and any scroll-driven animation keep working.
 * - Disabled when the visitor prefers reduced motion.
 * - Takes over anchor / hash navigation so in-page links glide instead of jumping.
 */
export function SmoothScroll() {
  const lenisRef = useRef<Lenis | null>(null);
  const { hash, pathname } = useRouterState({ select: (s) => s.location });

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t: number) => 1 - Math.pow(1 - t, 3),
      smoothWheel: true,
      touchMultiplier: 1.6,
      wheelMultiplier: 1,
    });
    lenisRef.current = lenis;

    let frame = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);

    // Plain <a href="#..."> anchors
    const onClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement | null)?.closest?.("a[href^='#']");
      if (!anchor) return;
      const id = anchor.getAttribute("href")!.slice(1);
      const target = id ? document.getElementById(id) : null;
      if (!target) return;
      e.preventDefault();
      lenis.scrollTo(target, { offset: -80 });
      history.replaceState(null, "", `#${id}`);
    };
    document.addEventListener("click", onClick);

    return () => {
      document.removeEventListener("click", onClick);
      cancelAnimationFrame(frame);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  // Router-driven hash navigation (TanStack <Link hash="..." />)
  useEffect(() => {
    const lenis = lenisRef.current;
    const id = hash?.replace(/^#/, "");

    const run = () => {
      if (!id) {
        if (lenis) lenis.scrollTo(0, { immediate: true });
        else window.scrollTo(0, 0);
        return;
      }
      const target = document.getElementById(id);
      if (!target) return;
      if (lenis) lenis.scrollTo(target, { offset: -80 });
      else target.scrollIntoView({ behavior: "smooth" });
    };

    const t = window.setTimeout(run, 60);
    return () => window.clearTimeout(t);
  }, [hash, pathname]);

  return null;
}
