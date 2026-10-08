import { useReducedMotion, motion } from "framer-motion";

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="home"
      className="relative flex min-h-[calc(100svh-72px)] items-center overflow-hidden bg-background pt-32 pb-16 md:pt-36 md:pb-20"
    >
      <motion.div
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease: "easeOut" }}
        className="mx-auto grid w-full max-w-[1400px] items-center gap-12 px-6 md:px-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16"
      >
        <div>
          <div className="flex items-center gap-3">
            <span className="h-px w-10 shrink-0 bg-primary" />
            <span className="text-[10px] font-medium tracking-[0.18em] text-muted-foreground uppercase sm:text-[11px] sm:tracking-[0.22em]">
              CRAFTLOGIC — DIGITAL EXPERIENCES FOR MODERN BUSINESSES
            </span>
          </div>

          <h1 className="font-display mt-8 text-[2.8rem] leading-[1.04] font-bold tracking-tight sm:text-6xl lg:text-[4.35rem]">
            <span className="block">Your Website Is</span>
            <span className="block">Your Digital Office.</span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Professional websites designed to build trust, showcase your business and make it easier
            for customers to take the next step.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#start"
              className="focus-ring inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3.5 text-sm font-semibold tracking-tight text-primary-foreground transition-[background-color,transform] duration-300 hover:-translate-y-0.5 hover:bg-primary/90 sm:px-7"
            >
              Start a Project <span aria-hidden="true">→</span>
            </a>
            <a
              href="#work"
              className="hairline focus-ring inline-flex items-center rounded-full px-5 py-3.5 text-sm font-medium tracking-tight text-foreground transition-colors duration-300 hover:border-primary/60 hover:bg-primary/5 sm:px-7"
            >
              View Our Work
            </a>
          </div>
        </div>

        <figure className="relative overflow-hidden rounded-2xl border border-primary/30 bg-surface shadow-[0_32px_100px_-38px_rgba(0,0,0,0.85)]">
          <img
            src="/hero-office.jpg"
            alt="A refined, glass-walled modern office with a welcoming lounge and workspace"
            width={1800}
            height={1350}
            fetchPriority="high"
            decoding="async"
            className="aspect-[4/3] w-full object-cover lg:aspect-[1.08/1]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/45 via-black/5 to-black/10"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-8 right-0 w-px bg-primary/55"
          />
        </figure>
      </motion.div>
    </section>
  );
}
