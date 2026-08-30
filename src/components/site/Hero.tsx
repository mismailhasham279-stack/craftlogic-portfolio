import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { MagneticButton } from "./MagneticButton";

const HEADLINE = ["I Build Digital", "Experiences That Make", "Businesses Stand Out."];

export function Hero() {
  const [mounted, setMounted] = useState(false);
  const visualRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setMounted(true);
    const el = visualRef.current;
    if (!el) return;
    if (window.matchMedia("(max-width: 768px), (prefers-reduced-motion: reduce)").matches) return;
    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        el.style.transform = `translateY(${Math.min(window.scrollY, 700) * -0.07}px)`;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  const anim = (i: number) => ({
    transitionDelay: `${120 + i * 90}ms`,
    opacity: mounted ? 1 : 0,
    transform: mounted ? "none" : "translateY(24px)",
  });

  return (
    <section id="home" className="relative overflow-hidden pt-36 pb-24 md:pt-48 md:pb-32">
      <div className="grid-lines pointer-events-none absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_at_50%_0%,black,transparent_75%)]" />
      <div className="drift-slow pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-primary/12 blur-[130px]" />

      <div className="relative mx-auto grid max-w-[1400px] items-center gap-16 px-6 md:px-10 lg:grid-cols-[1.05fr_1fr] lg:gap-12">
        <div>
          <div
            className="flex items-center gap-3 transition-all duration-700 ease-out"
            style={anim(0)}
          >
            <span className="h-px w-10 bg-primary" />
            <span className="text-[11px] font-medium tracking-[0.3em] text-muted-foreground uppercase">
              Full-Stack Web Developer
            </span>
          </div>

          <h1 className="font-display mt-8 text-[2.6rem] leading-[1.02] font-bold tracking-tight sm:text-6xl lg:text-[4.4rem]">
            {HEADLINE.map((line, i) => (
              <span key={line} className="block overflow-hidden">
                <span
                  className="block transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
                  style={{
                    transitionDelay: `${200 + i * 120}ms`,
                    opacity: mounted ? 1 : 0,
                    transform: mounted ? "none" : "translateY(105%)",
                  }}
                >
                  {line}
                </span>
              </span>
            ))}
          </h1>

          <p
            className="mt-8 max-w-lg text-base leading-relaxed text-muted-foreground transition-all duration-700 ease-out md:text-lg"
            style={anim(6)}
          >
            Modern, responsive websites and web applications designed around your business goals.
          </p>

          <div
            className="mt-10 flex flex-wrap items-center gap-4 transition-all duration-700 ease-out"
            style={anim(7)}
          >
            <MagneticButton href="#contact">
              Start a Project
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </MagneticButton>
            <MagneticButton href="#work" variant="ghost">
              View My Work
            </MagneticButton>
          </div>
        </div>

        <div
          ref={visualRef}
          className="relative transition-all duration-1000 ease-out will-change-transform"
          style={{ transitionDelay: "420ms", opacity: mounted ? 1 : 0 }}
        >
          <BrowserMock />
          <PhoneMock />
        </div>
      </div>
    </section>
  );
}

function BrowserMock() {
  return (
    <div className="float-slow hairline relative overflow-hidden rounded-xl bg-surface/80 shadow-[0_40px_120px_-40px_rgba(0,0,0,0.9)]">
      <div className="flex items-center gap-2 border-b border-border px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
        <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/20" />
        <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/15" />
        <span className="ml-3 rounded-full bg-background/70 px-3 py-1 font-mono text-[10px] text-muted-foreground">
          ismaildigital.site
        </span>
      </div>
      <div className="space-y-5 p-6">
        <div className="flex items-center justify-between">
          <div className="h-2 w-16 rounded-full bg-foreground/70" />
          <div className="flex gap-2">
            <div className="h-1.5 w-8 rounded-full bg-foreground/15" />
            <div className="h-1.5 w-8 rounded-full bg-foreground/15" />
            <div className="h-1.5 w-8 rounded-full bg-foreground/15" />
          </div>
        </div>
        <div className="space-y-2.5 pt-4">
          <div className="h-4 w-4/5 rounded bg-foreground/80" />
          <div className="h-4 w-3/5 rounded bg-foreground/40" />
          <div className="h-2 w-2/3 rounded bg-foreground/15" />
        </div>
        <div className="flex gap-3 pt-1">
          <div className="h-7 w-24 rounded-full bg-primary" />
          <div className="hairline h-7 w-20 rounded-full" />
        </div>
        <div className="grid grid-cols-3 gap-3 pt-5">
          {[0, 1, 2].map((i) => (
            <div key={i} className="hairline space-y-2 rounded-lg bg-background/50 p-3">
              <div className="h-1.5 w-6 rounded-full bg-primary/70" />
              <div className="h-1.5 w-full rounded-full bg-foreground/12" />
              <div className="h-1.5 w-2/3 rounded-full bg-foreground/12" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function PhoneMock() {
  return (
    <div
      className="float-slow hairline absolute -bottom-10 -left-4 hidden w-[132px] overflow-hidden rounded-[1.4rem] bg-surface-2 p-2 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.9)] sm:block"
      style={{ animationDelay: "1.2s" }}
    >
      <div className="hairline space-y-3 rounded-[1rem] bg-background p-3">
        <div className="mx-auto h-1 w-8 rounded-full bg-foreground/20" />
        <div className="h-2 w-3/4 rounded bg-foreground/70" />
        <div className="h-1.5 w-full rounded bg-foreground/15" />
        <div className="h-1.5 w-2/3 rounded bg-foreground/15" />
        <div className="h-5 w-16 rounded-full bg-primary" />
        <div className="hairline h-10 rounded-md bg-surface/60" />
        <div className="hairline h-10 rounded-md bg-surface/60" />
      </div>
    </div>
  );
}
