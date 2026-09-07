import { useEffect, useRef, useState } from "react";
import { ArrowRight, ArrowDown } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { MagneticButton } from "./MagneticButton";
import { DeviceShowcase } from "./DeviceShowcase";
import { projects } from "@/data/projects";
import { cn } from "@/lib/utils";

const HEADLINE = ["I Build Websites", "That Help", "Businesses Grow."];

export function Hero() {
  const [mounted, setMounted] = useState(false);
  const [active, setActive] = useState(0);
  const visualRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setMounted(true);
    const el = visualRef.current;
    if (!el) return;
    if (window.matchMedia("(max-width: 900px), (prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    let scrollY = 0;
    let mx = 0;
    let my = 0;
    const apply = () => {
      frame = 0;
      el.style.transform = `translate3d(${mx}px, ${my - Math.min(scrollY, 700) * 0.06}px, 0)`;
    };
    const queue = () => {
      if (!frame) frame = requestAnimationFrame(apply);
    };
    const onScroll = () => {
      scrollY = window.scrollY;
      queue();
    };
    const onMove = (e: MouseEvent) => {
      mx = (e.clientX / window.innerWidth - 0.5) * 16;
      my = (e.clientY / window.innerHeight - 0.5) * 12;
      queue();
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("mousemove", onMove);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  const project = projects[active] ?? projects[0]!;

  const anim = (i: number) => ({
    transitionDelay: `${120 + i * 90}ms`,
    opacity: mounted ? 1 : 0,
    transform: mounted ? "none" : "translateY(24px)",
  });

  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-24 md:pt-44 md:pb-32">
      <div className="grid-lines pointer-events-none absolute inset-0 opacity-50 [mask-image:radial-gradient(ellipse_at_50%_0%,black,transparent_75%)]" />
      <div className="noise pointer-events-none absolute inset-0" />
      <div className="drift-slow pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-primary/12 blur-[130px]" />

      <div className="relative mx-auto grid max-w-[1400px] items-center gap-20 px-6 md:px-10 lg:grid-cols-[1.02fr_1fr] lg:gap-14">
        <div>
          <div className="flex items-center gap-3 transition-all duration-700 ease-out" style={anim(0)}>
            <span className="h-px w-10 bg-primary" />
            <span className="text-[11px] font-medium tracking-[0.3em] text-muted-foreground uppercase">
              Full-Stack Web Developer
            </span>
          </div>

          <h1 className="font-display mt-8 text-[2.55rem] leading-[1.03] font-bold tracking-tight sm:text-6xl lg:text-[3.85rem]">
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
            Modern, responsive websites and web applications designed to give your business a
            stronger online presence and turn visitors into customers.
          </p>

          <p
            className="mt-6 font-mono text-[11px] tracking-[0.16em] text-muted-foreground/80 uppercase transition-all duration-700 ease-out"
            style={anim(7)}
          >
            Business Websites • Web Apps • Landing Pages • Custom Web Solutions
          </p>

          <div
            className="mt-9 flex flex-wrap items-center gap-4 transition-all duration-700 ease-out"
            style={anim(8)}
          >
            <MagneticButton href="#start">
              Start a Project
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </MagneticButton>
            <MagneticButton href="#work" variant="ghost">
              View My Work
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </MagneticButton>
          </div>

          <p
            className="mt-7 text-sm text-muted-foreground/90 transition-all duration-700 ease-out"
            style={anim(9)}
          >
            Have a business without a professional website? Let&apos;s change that.
          </p>
        </div>

        <div
          className="relative transition-all duration-1000 ease-out"
          style={{ transitionDelay: "420ms", opacity: mounted ? 1 : 0 }}
        >
          <div ref={visualRef} className="will-change-transform">
            <div className="mb-5 flex items-baseline gap-3">
              <span className="font-mono text-[10px] tracking-[0.28em] text-primary uppercase">
                Selected Work
              </span>
              <span className="h-px flex-1 bg-border" />
            </div>

            <Link
              to="/work/$slug"
              params={{ slug: project.slug }}
              className="group block focus-ring rounded-xl"
              aria-label={`Open the ${project.name} case study`}
            >
              <DeviceShowcase
                eager
                name={project.name}
                desktopSrc={project.heroImage}
                mobileSrc={project.mobileImage}
                className="float-slow"
              />
            </Link>

            <div className="mt-14 flex flex-wrap items-end justify-between gap-6 sm:mt-12">
              <div>
                <h2 className="font-display text-lg font-semibold tracking-tight">{project.name}</h2>
                <p className="mt-1 text-xs text-muted-foreground">{project.category}</p>
              </div>
              <div className="flex gap-2" role="tablist" aria-label="Featured project">
                {projects.map((p, i) => (
                  <button
                    key={p.id}
                    type="button"
                    role="tab"
                    aria-selected={i === active}
                    aria-label={`Show ${p.name}`}
                    onClick={() => setActive(i)}
                    onMouseEnter={() => setActive(i)}
                    className={cn(
                      "focus-ring rounded-full px-3 py-1.5 font-mono text-[10px] tracking-widest transition-all duration-300",
                      i === active
                        ? "bg-primary text-primary-foreground"
                        : "hairline text-muted-foreground hover:text-foreground",
                    )}
                  >
                    {p.index}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative mx-auto mt-20 hidden max-w-[1400px] px-6 md:block md:px-10">
        <span className="inline-flex items-center gap-2 text-[10px] tracking-[0.28em] text-muted-foreground uppercase">
          <ArrowDown className="h-3.5 w-3.5 animate-bounce" /> Scroll
        </span>
      </div>
    </section>
  );
}
