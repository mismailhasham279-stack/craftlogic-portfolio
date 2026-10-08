import { useState, type FormEvent } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Boxes,
  Check,
  Code2,
  Globe,
  Layout,
  LineChart,
  Mail,
  MessageSquare,
  MonitorSmartphone,
  Palette,
  RefreshCw,
  Rocket,
  ShoppingCart,
  Sparkles,
  Target,
} from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Reveal } from "./Reveal";
import { MagneticButton } from "./MagneticButton";
import { ProjectBrowserFrame } from "./ProjectBrowserFrame";
import { ProjectInquiry } from "./ProjectInquiry";
import { useScrollProgress } from "@/hooks/use-reveal";
import { EMAIL, SOCIAL, TECHNOLOGIES, projects } from "@/data/projects";

export { EMAIL };

const SOCIAL_LINKS = Object.entries(SOCIAL).filter(([, url]) => /^https?:\/\//i.test(url));

export function SectionHeading({
  label,
  title,
  subtitle,
}: {
  label: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="max-w-3xl">
      <Reveal className="flex items-center gap-3">
        <span className="h-px w-8 bg-primary" />
        <span className="text-[11px] font-medium tracking-[0.3em] text-muted-foreground uppercase">
          {label}
        </span>
      </Reveal>
      <Reveal delay={80}>
        <h2 className="font-display mt-6 text-3xl leading-[1.08] font-bold tracking-tight sm:text-4xl lg:text-[3rem]">
          {title}
        </h2>
      </Reveal>
      {subtitle ? (
        <Reveal delay={150}>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
            {subtitle}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}

/* ---------------- Value ---------------- */

const VALUES = [
  {
    icon: BadgeCheck,
    title: "Look Professional",
    copy: "Build trust from the first visit.",
  },
  {
    icon: Globe,
    title: "Reach More Customers",
    copy: "Make your business available online 24/7.",
  },
  {
    icon: LineChart,
    title: "Generate More Opportunities",
    copy: "Turn visitors into enquiries, bookings and customers.",
  },
];

export function Trust() {
  return (
    <section className="relative border-y border-border py-20 md:py-28">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-20">
          <Reveal>
            <h2 className="font-display max-w-lg text-2xl leading-[1.12] font-bold tracking-tight sm:text-3xl lg:text-[2.5rem]">
              Your Business Deserves a Better Online Presence.
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="max-w-xl text-base leading-relaxed text-muted-foreground">
              Your website is often the first impression customers have of your business. I create
              modern, responsive websites that present your brand professionally and make it easier
              for customers to take action.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-3">
          {VALUES.map((v, i) => (
            <Reveal key={v.title} delay={i * 90}>
              <div className="group h-full bg-background p-8 transition-colors duration-500 hover:bg-surface md:p-10">
                <v.icon
                  className="h-5 w-5 text-primary transition-transform duration-500 group-hover:-translate-y-1"
                  strokeWidth={1.5}
                />
                <h3 className="font-display mt-6 text-[13px] font-semibold tracking-[0.16em] uppercase">
                  {v.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{v.copy}</p>
                <span className="mt-6 block h-px w-0 bg-primary transition-all duration-500 group-hover:w-12" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Services ---------------- */

const SERVICES = [
  {
    n: "01",
    icon: Layout,
    title: "Business Websites",
    copy: "Professional websites that build trust and present your business clearly.",
  },
  {
    n: "02",
    icon: Target,
    title: "Landing Pages",
    copy: "Focused pages designed to turn visitors into enquiries.",
  },
  {
    n: "03",
    icon: Boxes,
    title: "Web Applications",
    copy: "Custom web experiences built around your business needs.",
  },
  {
    n: "04",
    icon: ShoppingCart,
    title: "E-Commerce Websites",
    copy: "Modern online stores designed for a smooth shopping experience.",
  },
  {
    n: "05",
    icon: RefreshCw,
    title: "Website Redesign",
    copy: "A stronger, cleaner digital presence for an outdated website.",
  },
  {
    n: "06",
    icon: Code2,
    title: "Custom Web Solutions",
    copy: "Purpose-built digital solutions for unique requirements.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <SectionHeading
          label="Services"
          title="Digital Experiences, Built for Business."
          subtitle="From business websites to custom digital solutions, we build experiences designed around your goals."
        />
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:mt-14 lg:grid-cols-3 lg:gap-5">
          {SERVICES.map((service, index) => (
            <Reveal key={service.n} delay={(index % 3) * 70} className="h-full">
              <article className="group relative flex h-full min-h-[220px] flex-col overflow-hidden rounded-xl border border-primary/20 bg-[#141414] p-6 transition-[border-color,background-color,box-shadow,transform] duration-300 hover:-translate-y-1 hover:border-primary/55 hover:bg-[#171613] hover:shadow-[0_16px_40px_-28px_rgba(229,195,120,0.35)] sm:min-h-[230px] sm:p-7">
                <span className="absolute top-6 right-6 font-mono text-[10px] tracking-[0.18em] text-primary/65 transition-colors duration-300 group-hover:text-primary sm:top-7 sm:right-7">
                  {service.n}
                </span>
                <service.icon
                  className="h-4 w-4 text-primary/85 transition-colors duration-300 group-hover:text-primary"
                  strokeWidth={1.5}
                />
                <h3 className="font-display mt-6 max-w-[18rem] text-lg font-semibold tracking-tight sm:text-xl">
                  {service.title}
                </h3>
                <p className="mt-2.5 max-w-sm text-sm leading-relaxed text-muted-foreground">
                  {service.copy}
                </p>
                <span className="absolute bottom-0 left-0 h-px w-8 bg-primary/55 transition-[width,background-color] duration-300 group-hover:w-full group-hover:bg-primary" />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Work ---------------- */

const SELECTED_WORK = {
  luxevia: {
    name: "LUXEVIA PURSE",
    category: "E-Commerce Website",
    description: "Premium online shopping experience.",
  },
  usaluxe: {
    name: "USA LUXE IMPORT",
    category: "Business Website",
    description: "Product and launch updates connect visitors to the USA Luxe Instagram account.",
  },
  nailsbygrace: {
    name: "NAILSBYGRACE",
    category: "Beauty Service Website",
    description: "A clear introduction to Gel-X, nail art and custom sets.",
  },
  shoptop: {
    name: "SHOPTOP",
    category: "E-Commerce Website",
    description: "A curated fashion storefront for drops and pre-orders.",
  },
} as const;

const SELECTED_WORK_IDS = ["luxevia", "usaluxe", "nailsbygrace", "shoptop"] as const;

export function Work() {
  const selectedProjects = SELECTED_WORK_IDS.flatMap((id) => {
    const project = projects.find((item) => item.id === id);
    return project ? [{ project, presentation: SELECTED_WORK[id] }] : [];
  });

  return (
    <section id="work" className="border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <SectionHeading
          label="Selected Work"
          title="Selected Work, Thoughtfully Built."
          subtitle="A selection of websites and digital experiences created for different businesses and industries."
        />

        <div className="mt-14 space-y-6 lg:space-y-8">
          {selectedProjects[0] && (
            <Reveal>
              <Link
                to="/work/$slug"
                params={{ slug: selectedProjects[0].project.slug }}
                className="focus-ring group grid overflow-hidden rounded-2xl border border-[#2a2418] bg-[#0c0c0c] transition-[border-color,box-shadow] duration-300 hover:border-primary/60 hover:shadow-[0_24px_70px_-42px_rgba(229,195,120,0.32)] lg:grid-cols-[1.25fr_0.75fr]"
                aria-label={`View ${selectedProjects[0].presentation.name} project`}
              >
                <div className="relative flex items-center justify-center overflow-hidden bg-[#10100f] p-5 sm:p-8 lg:min-h-[390px] lg:p-10">
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_45%,rgba(197,160,89,0.08),transparent_62%)]" />
                  <ProjectBrowserFrame
                    src={selectedProjects[0].project.thumbnail}
                    projectName={selectedProjects[0].presentation.name}
                    className="relative z-10 w-full"
                  />
                  <span className="absolute top-5 left-5 font-mono text-[10px] tracking-[0.18em] text-primary/70">
                    {selectedProjects[0].project.index}
                  </span>
                </div>
                <div className="flex flex-col justify-center border-t border-[#2a2418] p-6 sm:p-9 lg:border-t-0 lg:border-l lg:p-10">
                  <span className="text-[10px] tracking-[0.18em] text-primary uppercase">
                    {selectedProjects[0].presentation.category}
                  </span>
                  <h3 className="font-display mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
                    {selectedProjects[0].presentation.name}
                  </h3>
                  <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
                    {selectedProjects[0].presentation.description}
                  </p>
                  <span className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-primary">
                    View Project
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </Reveal>
          )}

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {selectedProjects.slice(1).map(({ project, presentation }, index) => (
              <Reveal key={project.id} delay={(index % 2) * 80}>
                <Link
                  to="/work/$slug"
                  params={{ slug: project.slug }}
                  className="focus-ring group block h-full overflow-hidden rounded-xl border border-[#2a2418] bg-[#0c0c0c] transition-[border-color,box-shadow] duration-300 hover:border-primary/60 hover:shadow-[0_18px_48px_-34px_rgba(229,195,120,0.3)]"
                  aria-label={`View ${presentation.name} project`}
                >
                  <div className="relative overflow-hidden bg-[#10100f] p-4 sm:p-5">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_45%,rgba(197,160,89,0.07),transparent_62%)]" />
                    <ProjectBrowserFrame
                      src={project.thumbnail}
                      projectName={presentation.name}
                      className="relative z-10"
                    />
                    <span className="absolute top-4 left-4 font-mono text-[10px] tracking-[0.18em] text-primary/70">
                      {project.index}
                    </span>
                  </div>
                  <div className="border-t border-[#2a2418] p-5 sm:p-6">
                    <span className="text-[9px] tracking-[0.16em] text-primary uppercase">
                      {presentation.category}
                    </span>
                    <h3 className="font-display mt-3 text-xl font-semibold tracking-tight">
                      {presentation.name}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {presentation.description}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-primary">
                      View Project
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Business problem ---------------- */

const PRESENCE_COMPARISON = [
  {
    label: "SOCIAL MEDIA",
    items: ["Quick attention.", "Limited information.", "Customers depend on your social profile."],
  },
  {
    label: "YOUR WEBSITE",
    items: ["Your brand.", "Your information.", "Your services.", "Your direct customer journey."],
  },
];

export function BusinessProblem() {
  return (
    <section className="border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="max-w-3xl">
          <Reveal className="flex items-center gap-3">
            <span className="h-px w-8 bg-primary" />
            <span className="text-[11px] font-medium tracking-[0.3em] text-muted-foreground uppercase">
              Why It Matters
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="font-display mt-6 text-3xl leading-[1.08] font-bold tracking-tight sm:text-4xl lg:text-[3rem]">
              Your Business Is Online.
              <br className="hidden sm:block" /> Your Website Should Be Too.
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
              Social media gets attention. Your website gives customers a place to understand, trust
              and choose your business.
            </p>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-2 lg:gap-6">
          {PRESENCE_COMPARISON.map((comparison, index) => (
            <Reveal key={comparison.label} delay={index * 100}>
              <article className="group h-full overflow-hidden rounded-xl border border-primary/20 bg-surface/70 transition-[border-color,box-shadow] duration-300 hover:border-primary/45 hover:shadow-[0_20px_50px_-36px_rgba(229,195,120,0.28)]">
                <div className="flex items-center gap-2 border-b border-primary/15 bg-[#10100f] px-5 py-3.5 sm:px-7">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary/70" />
                  <span className="font-mono text-[10px] font-medium tracking-[0.18em] text-primary/90">
                    {comparison.label}
                  </span>
                  <span className="ml-auto h-px w-8 bg-primary/35 transition-all duration-300 group-hover:w-12 group-hover:bg-primary/70" />
                </div>

                <div className="p-5 sm:p-7">
                  <ul className="divide-y divide-border/70">
                    {comparison.items.map((item, itemIndex) => (
                      <li
                        key={item}
                        className="flex items-center gap-3 py-3.5 first:pt-0 last:pb-0"
                      >
                        <span
                          aria-hidden="true"
                          className={`h-1 w-1 shrink-0 rounded-full ${
                            index === 1 ? "bg-primary/80" : "bg-muted-foreground/55"
                          }`}
                        />
                        <span className="text-sm leading-relaxed text-foreground/85 sm:text-[15px]">
                          {item}
                        </span>
                        {index === 1 && itemIndex === comparison.items.length - 1 ? (
                          <ArrowRight
                            aria-hidden="true"
                            className="ml-auto h-4 w-4 shrink-0 text-primary/70 transition-transform duration-300 group-hover:translate-x-1"
                          />
                        ) : null}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Free demo ---------------- */

export function FreeDemo() {
  return (
    <section id="demo" className="border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="relative overflow-hidden rounded-2xl border border-primary/25 bg-[#10100f] px-7 py-12 shadow-[0_28px_80px_-56px_rgba(229,195,120,0.24)] sm:px-10 sm:py-14 md:px-16 md:py-16">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_12%_0%,rgba(197,160,89,0.08),transparent_48%)]" />
          <div className="relative max-w-2xl">
            <Reveal className="flex items-center gap-3">
              <span className="text-[11px] tracking-[0.3em] text-muted-foreground uppercase">
                Free Homepage Demo
              </span>
            </Reveal>
            <Reveal delay={90}>
              <h2 className="font-display mt-6 text-3xl leading-tight font-bold tracking-tight sm:text-4xl">
                See Your Business on the Web.
              </h2>
            </Reveal>
            <Reveal delay={150}>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
                Not sure what your website could look like? Get a free homepage demo designed around
                your business.
              </p>
            </Reveal>
            <Reveal delay={210}>
              <div className="mt-8 flex flex-wrap items-center gap-5">
                <MagneticButton href="#contact">
                  Get a Free Demo
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </MagneticButton>
              </div>
            </Reveal>
            <Reveal delay={260}>
              <p className="mt-5 text-xs leading-relaxed text-muted-foreground/75 sm:text-sm">
                No commitment. Just a first look at what your business could become online.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Project inquiry ---------------- */

export function StartProject() {
  return (
    <section id="start" className="border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <SectionHeading
          label="Project Brief"
          title="Tell Me About Your Project"
          subtitle="The more I understand about your business, the better I can shape the right digital solution for you."
        />
        <Reveal delay={120}>
          <div className="mt-14">
            <ProjectInquiry />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Process ---------------- */

const STEPS = [
  { n: "01", title: "Discover", copy: "Understand your business and goals." },
  { n: "02", title: "Plan", copy: "Define the structure and direction." },
  { n: "03", title: "Build", copy: "Design and develop the experience." },
  { n: "04", title: "Launch", copy: "Polish, test and bring it online." },
];

export function Process() {
  const { ref, progress } = useScrollProgress<HTMLDivElement>();
  return (
    <section id="process" className="border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <SectionHeading label="Process" title="From Idea to Launch." />
        <div ref={ref} className="relative mt-16">
          <div className="absolute top-0 bottom-0 left-[11px] w-px bg-border md:top-[11px] md:right-0 md:bottom-auto md:left-0 md:h-px md:w-full" />
          <div
            className="absolute top-0 left-[11px] w-px origin-top bg-primary transition-transform duration-200 md:top-[11px] md:left-0 md:h-px md:w-full md:origin-left"
            style={{
              transform: `scaleY(${progress})`,
              height: "100%",
            }}
          />
          <div
            className="absolute top-[11px] left-0 hidden h-px w-full origin-left bg-primary transition-transform duration-200 md:block"
            style={{ transform: `scaleX(${progress})` }}
          />
          <ol className="grid gap-8 md:grid-cols-4 md:gap-6">
            {STEPS.map((s, i) => {
              const activeStep = progress > (i + 0.4) / STEPS.length;
              return (
                <li key={s.n} className="relative pl-10 md:pt-12 md:pl-0">
                  <span
                    className={`absolute top-1 left-0 grid h-[23px] w-[23px] place-items-center rounded-full border transition-all duration-500 md:top-0 ${
                      activeStep
                        ? "border-primary/70 bg-background text-primary shadow-[0_0_14px_-5px_rgba(229,195,120,0.5)]"
                        : "border-primary/30 bg-background text-muted-foreground"
                    }`}
                  >
                    <span className="font-mono text-[9px]">{s.n}</span>
                  </span>
                  <Reveal delay={i * 70} className="h-full">
                    <article className="h-full rounded-xl border border-primary/15 bg-surface/60 p-5 transition-[border-color,background-color] duration-300 hover:border-primary/35 hover:bg-surface md:p-6">
                      <h3
                        className={`font-display text-lg font-semibold tracking-tight transition-colors duration-300 ${
                          activeStep ? "text-foreground" : "text-foreground/90"
                        }`}
                      >
                        {s.title}
                      </h3>
                      <p className="mt-2.5 max-w-xs text-sm leading-relaxed text-muted-foreground">
                        {s.copy}
                      </p>
                    </article>
                  </Reveal>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Why CRAFTLOGIC ---------------- */

const WHY = [
  {
    title: "Business First",
    copy: "We start with your goals.",
  },
  {
    title: "Purposeful Design",
    copy: "Every section has a reason.",
  },
  {
    title: "Responsive Experience",
    copy: "Designed for every screen.",
  },
  {
    title: "Clear Communication",
    copy: "Simple and direct throughout.",
  },
];

export function WhyMe() {
  return (
    <section className="border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <SectionHeading
          label="Why CRAFTLOGIC"
          title="Built Around Your Business."
          subtitle="Every project starts with the business behind it."
        />
        <div className="mt-12 grid gap-4 md:grid-cols-2 md:gap-5">
          {WHY.map((w, i) => (
            <Reveal key={w.title} delay={(i % 2) * 70}>
              <article className="group h-full rounded-xl border border-primary/20 bg-surface/60 p-5 transition-[border-color,background-color] duration-300 hover:border-primary/40 hover:bg-surface sm:p-6">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-[10px] tracking-[0.14em] text-primary/75">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="h-px w-8 bg-primary/35 transition-all duration-300 group-hover:w-11 group-hover:bg-primary/70" />
                </div>
                <h3 className="font-display mt-5 text-lg font-semibold tracking-tight sm:text-xl">
                  {w.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{w.copy}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- About ---------------- */

export function About() {
  return (
    <section id="about" className="border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1fr] lg:gap-20">
          <Reveal>
            <div className="relative mx-auto aspect-[4/3] w-full max-w-[560px] overflow-hidden rounded-xl border border-primary/25 bg-[#0c0c0c] shadow-[inset_0_1px_40px_rgba(0,0,0,0.55)]">
              <img
                src="/images/founder/muhammad-ismail.jpg"
                alt="Muhammad Ismail, Founder of CRAFTLOGIC"
                className="h-full w-full object-cover object-center"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"
              />
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7">
                <div className="border-l-2 border-primary pl-4">
                  <p className="font-display text-xl font-bold tracking-wide text-white sm:text-2xl">
                    Muhammad Ismail
                  </p>
                  <p className="mt-1 font-mono text-[9px] tracking-[0.2em] text-white/65 uppercase sm:text-[10px]">
                    Founder, CRAFTLOGIC
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="max-w-2xl">
            <Reveal className="flex items-center gap-3">
              <span className="h-px w-8 bg-primary" />
              <span className="text-[10px] font-medium tracking-[0.24em] text-muted-foreground uppercase sm:text-[11px] sm:tracking-[0.3em]">
                Muhammad Ismail
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="font-display mt-6 text-3xl leading-[1.08] font-bold tracking-tight sm:text-4xl lg:text-[3rem]">
                Built With Purpose.
                <br className="hidden sm:block" /> Designed for Business.
              </h2>
            </Reveal>
            <Reveal delay={150}>
              <p className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
                CRAFTLOGIC creates modern websites and digital experiences for businesses, startups
                and entrepreneurs. Every project is shaped around the brand, audience and goal
                behind it.
              </p>
            </Reveal>

            <Reveal delay={220}>
              <div className="mt-10 border-t border-[#2a2418] pt-7">
                <ul className="grid gap-3 sm:grid-cols-3 sm:gap-5">
                  {["Business-focused", "Modern design", "Clear communication"].map(
                    (principle, index) => (
                      <li key={principle} className="flex items-center gap-2.5 text-sm">
                        <span className="font-mono text-[9px] tracking-wide text-primary/80">
                          0{index + 1}
                        </span>
                        <span className="h-px w-4 bg-primary/35" aria-hidden="true" />
                        <span className="text-foreground/85">{principle}</span>
                      </li>
                    ),
                  )}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={280}>
              <div className="mt-8 border-t border-border pt-5">
                <p className="font-display text-base font-semibold tracking-wide text-foreground">
                  Muhammad Ismail
                </p>
                <p className="mt-1 text-sm text-muted-foreground">Founder, CRAFTLOGIC</p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Contact ---------------- */

const PROJECT_TYPES = [
  "Business Website",
  "Landing Page",
  "E-Commerce",
  "Web Application",
  "Website Redesign",
  "Custom Solution",
  "Not Sure Yet",
];

export function Contact() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const get = (k: string) => String(data.get(k) ?? "").trim();
    const name = get("name");
    const email = get("email");
    const message = get("message");
    if (!name) {
      setError("Please enter your name.");
      return;
    }
    if (!email) {
      setError("Please enter your email address.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    if (!message) {
      setError("Please add a short message about your project.");
      return;
    }
    setError("");
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Business: ${get("business")}`,
      `Project type: ${get("projectType")}`,
      "",
      message,
    ].join("\n");
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(
      `New enquiry from ${name}`,
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <section id="contact" className="border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.05fr] lg:gap-20">
          <div>
            <SectionHeading
              label="Contact"
              title="Have a Project in Mind?"
              subtitle="Tell us what you're looking to build."
            />
            <Reveal delay={200}>
              <div className="mt-10 space-y-4 text-sm">
                <a
                  href={`mailto:${EMAIL}`}
                  className="focus-ring inline-flex items-center gap-2.5 text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Mail className="h-4 w-4 text-primary" strokeWidth={1.6} />
                  {EMAIL}
                </a>
                {SOCIAL_LINKS.length > 0 ? (
                  <div className="flex gap-6 pt-2">
                    {SOCIAL_LINKS.map(([name, url]) => (
                      <a
                        key={name}
                        href={url}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="focus-ring rounded-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {name === "instagram" ? "Instagram" : "LinkedIn"}
                      </a>
                    ))}
                  </div>
                ) : null}
              </div>
            </Reveal>
          </div>

          <Reveal delay={120}>
            <div className="rounded-2xl border border-[#2A2418] bg-[#141414] p-6 shadow-[0_24px_70px_-48px_rgba(229,195,120,0.22)] sm:p-8 md:p-9">
              {sent ? (
                <div className="py-10 text-center">
                  <Check className="mx-auto h-6 w-6 text-primary" />
                  <h3 className="font-display mt-5 text-xl font-semibold">Message ready to send</h3>
                  <p className="mt-3 text-sm text-muted-foreground">
                    Your email app should have opened with the details. If it didn&apos;t, write to{" "}
                    {EMAIL}.
                  </p>
                </div>
              ) : (
                <form onSubmit={onSubmit} noValidate className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Name" name="name" autoComplete="name" required />
                    <Field label="Email" name="email" type="email" autoComplete="email" required />
                    <Field label="Business / Company" name="business" autoComplete="organization" />
                    <div>
                      <label
                        htmlFor="projectType"
                        className="text-[11px] font-medium tracking-[0.16em] text-muted-foreground uppercase"
                      >
                        Project Type
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        className="hairline focus-ring mt-2 w-full rounded-lg bg-background px-4 py-3 text-sm transition-colors duration-200 hover:border-primary/35 focus:border-primary/70"
                        defaultValue="Not Sure Yet"
                      >
                        {PROJECT_TYPES.map((t) => (
                          <option key={t} value={t}>
                            {t}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="text-[11px] font-medium tracking-[0.16em] text-muted-foreground uppercase"
                    >
                      Message <span className="text-primary">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      maxLength={2000}
                      required
                      placeholder="A few details about your goals, audience or timeline..."
                      className="hairline focus-ring mt-2 w-full resize-y rounded-lg bg-background px-4 py-3 text-sm transition-colors duration-200 placeholder:text-muted-foreground/55 hover:border-primary/35 focus:border-primary/70"
                    />
                  </div>
                  {error ? (
                    <p id="contact-form-error" role="alert" className="text-sm text-destructive">
                      {error}
                    </p>
                  ) : null}
                  <button
                    type="submit"
                    className="focus-ring group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                  >
                    Start a Conversation
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  autoComplete?: string;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="text-[11px] font-medium tracking-[0.16em] text-muted-foreground uppercase"
      >
        {label} {required ? <span className="text-primary">*</span> : null}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        maxLength={200}
        placeholder={placeholder ?? ""}
        className="hairline focus-ring mt-2 w-full rounded-lg bg-background px-4 py-3 text-sm transition-colors duration-200 placeholder:text-muted-foreground/55 hover:border-primary/35 focus:border-primary/70"
      />
    </div>
  );
}

/* ---------------- Final CTA ---------------- */

export function FinalCta() {
  return (
    <section className="relative overflow-hidden border-t border-border py-28 md:py-36">
      <div className="relative mx-auto max-w-[1400px] px-6 text-center md:px-10">
        <Reveal>
          <h2 className="font-display mx-auto max-w-3xl text-4xl leading-[1.05] font-bold tracking-tight sm:text-5xl lg:text-[3.6rem]">
            Let&apos;s Build Something
            <br />
            Professional.
          </h2>
        </Reveal>
        <Reveal delay={110}>
          <p className="mx-auto mt-6 max-w-xl text-base text-muted-foreground md:text-lg">
            Have an idea, a business or a project in mind? Let&apos;s turn it into a strong digital
            presence.
          </p>
        </Reveal>
        <Reveal delay={150}>
          <span aria-hidden="true" className="mx-auto mt-8 block h-px w-12 bg-primary/70" />
        </Reveal>
        <Reveal delay={190}>
          <div className="mt-11 flex flex-wrap items-center justify-center gap-4">
            <MagneticButton href="#start">
              Start a Project
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </MagneticButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Footer ---------------- */

const FOOTER_LINKS = [
  { label: "Home", hash: "home" },
  { label: "Services", hash: "services" },
  { label: "Work", hash: "work" },
  { label: "Process", hash: "process" },
  { label: "About", hash: "about" },
  { label: "Contact", hash: "contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-border py-14">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-10 px-6 md:px-10 lg:flex-row lg:items-start lg:justify-between">
        <div className="flex items-start gap-4">
          <img
            src="/logo.png"
            alt=""
            width={50}
            height={50}
            className="h-10 w-auto shrink-0 object-contain drop-shadow-[0_0_10px_rgba(229,195,120,0.15)] md:h-[50px]"
            loading="lazy"
            decoding="async"
          />
          <div>
            <p className="font-display text-sm font-bold tracking-[0.12em] uppercase">CRAFTLOGIC</p>
            <p className="mt-1.5 text-[10px] tracking-[0.12em] text-primary uppercase">
              Full-Stack Digital Agency
            </p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Digital experiences built around real business goals.
            </p>
          </div>
        </div>

        <nav aria-label="Footer">
          <ul className="grid grid-cols-2 gap-x-10 gap-y-3 sm:grid-cols-3">
            {FOOTER_LINKS.map((l) => (
              <li key={l.hash}>
                <Link
                  to="/"
                  hash={l.hash}
                  activeOptions={{ exact: true, includeHash: true }}
                  className="focus-ring rounded-sm text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="space-y-3 text-sm">
          <div className="space-y-2">
            <a
              href={`mailto:${EMAIL}`}
              className="focus-ring block rounded-sm text-muted-foreground transition-colors hover:text-primary"
            >
              {EMAIL}
            </a>
            <a
              href="https://wa.me/923344957382"
              className="focus-ring block rounded-sm text-muted-foreground transition-colors hover:text-primary"
            >
              Phone / WhatsApp: +92 334 4957382
            </a>
          </div>
          {SOCIAL_LINKS.length > 0 ? (
            <div className="flex gap-6">
              {SOCIAL_LINKS.map(([name, url]) => (
                <a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="focus-ring rounded-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {name === "instagram" ? "Instagram" : "LinkedIn"}
                </a>
              ))}
            </div>
          ) : null}
        </div>
      </div>
      <div className="mx-auto mt-12 max-w-[1400px] border-t border-border px-6 pt-7 md:px-10">
        <p className="text-xs text-muted-foreground">© 2026 CRAFTLOGIC. All rights reserved.</p>
      </div>
    </footer>
  );
}

export { Rocket };
