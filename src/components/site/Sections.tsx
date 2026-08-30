import { ArrowRight, ArrowUpRight } from "lucide-react";
import {
  Layout,
  Smartphone,
  Target,
  Gauge,
  Globe,
  MousePointerClick,
  Boxes,
  Code2,
  Server,
  Wrench,
} from "lucide-react";
import { Reveal } from "./Reveal";
import { MagneticButton } from "./MagneticButton";
import { useScrollProgress } from "@/hooks/use-reveal";

export const EMAIL = "mismailhasham279@gmail.com";

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
        <h2 className="font-display mt-6 text-3xl leading-[1.08] font-bold tracking-tight sm:text-4xl lg:text-[3.1rem]">
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

/* ---------------- Trust ---------------- */

const VALUES = [
  { icon: Layout, title: "Modern Design", copy: "Clean interfaces designed around users and business goals." },
  { icon: Smartphone, title: "Responsive", copy: "Optimized for mobile, tablet and desktop." },
  { icon: Target, title: "Business Focused", copy: "Websites designed to support real business objectives." },
  { icon: Gauge, title: "Performance", copy: "Fast, smooth and reliable digital experiences." },
];

export function Trust() {
  return (
    <section className="border-y border-border py-20 md:py-28">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <Reveal>
          <h2 className="font-display max-w-2xl text-2xl leading-tight font-semibold tracking-tight sm:text-3xl">
            Turning Ideas Into Professional Digital Experiences
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((v, i) => (
            <Reveal key={v.title} delay={i * 90}>
              <v.icon className="h-5 w-5 text-primary" strokeWidth={1.5} />
              <h3 className="font-display mt-5 text-base font-semibold">{v.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{v.copy}</p>
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
    icon: Globe,
    title: "Business Website Development",
    copy: "Professional websites for businesses that want to establish a strong online presence.",
  },
  {
    icon: MousePointerClick,
    title: "Landing Pages",
    copy: "Focused pages for campaigns, products and lead generation.",
  },
  {
    icon: Boxes,
    title: "Web Applications",
    copy: "Custom web solutions built around specific business requirements.",
  },
  {
    icon: Code2,
    title: "Frontend Development",
    copy: "Modern, responsive and user-friendly interfaces.",
  },
  {
    icon: Server,
    title: "Backend & APIs",
    copy: "Backend functionality, APIs, integrations and server-side solutions.",
  },
  {
    icon: Wrench,
    title: "Website Improvements & Maintenance",
    copy: "Design improvements, responsiveness, functionality updates, bug fixes and ongoing improvements.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 md:py-36">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <SectionHeading label="Services" title="What I Can Build For Your Business" />
        <div className="mt-16 grid border-t border-l border-border sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal
              key={s.title}
              delay={(i % 3) * 90}
              className="group relative border-r border-b border-border p-8 transition-colors duration-500 hover:bg-surface/60 md:p-10"
            >
              <span className="pointer-events-none absolute inset-x-0 top-0 h-px scale-x-0 bg-primary transition-transform duration-500 group-hover:scale-x-100" />
              <div className="flex items-start justify-between">
                <s.icon
                  className="h-5 w-5 text-muted-foreground transition-colors duration-300 group-hover:text-primary"
                  strokeWidth={1.5}
                />
                <span className="font-mono text-[11px] text-muted-foreground/60">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="font-display mt-14 text-lg font-semibold tracking-tight">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.copy}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Work ---------------- */

type Project = {
  index: string;
  title: string;
  category: string;
  description: string;
  features: string[];
  cta: string;
  href: string;
};

const PROJECTS: Project[] = [
  {
    index: "01",
    title: "K2 Organics",
    category: "Business Website",
    description:
      "A modern and responsive website created for K2 Organics to showcase its natural and organic products with a professional online presence.",
    features: [
      "Responsive design",
      "Product showcase",
      "Modern UI",
      "Business-focused structure",
      "Contact/inquiry section",
    ],
    cta: "View Live Project",
    href: "#",
  },
  {
    index: "02",
    title: "ShopTop — Business Website Demo",
    category: "Website Demo",
    description:
      "A professional website concept created to demonstrate how a business can build a stronger online presence and provide customers with a better digital experience.",
    features: ["Responsive design", "Professional UI", "Product/business showcase", "Contact section"],
    cta: "View Live Demo",
    href: "#",
  },
];

function ProjectShot({ label }: { label: string }) {
  return (
    <div className="hairline group/shot relative aspect-[16/10] w-full overflow-hidden rounded-lg bg-surface">
      <div className="grid-lines absolute inset-0 opacity-50" />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/8 to-transparent" />
      <div className="absolute inset-0 grid place-items-center px-6 text-center">
        <div>
          <p className="font-mono text-[11px] tracking-[0.25em] text-muted-foreground uppercase">
            Screenshot placeholder
          </p>
          <p className="mt-2 text-sm text-muted-foreground/70">{label}</p>
        </div>
      </div>
      <div className="absolute inset-0 bg-foreground/0 transition-colors duration-500 group-hover/shot:bg-foreground/[0.03]" />
    </div>
  );
}

export function Work() {
  return (
    <section id="work" className="border-t border-border py-24 md:py-36">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <SectionHeading
          label="Work"
          title="Selected Work"
          subtitle="A selection of websites and digital experiences I've built."
        />

        <div className="mt-20 space-y-28 md:space-y-36">
          {PROJECTS.map((p, i) => (
            <article
              key={p.title}
              className={`grid items-center gap-10 lg:grid-cols-[1.25fr_1fr] lg:gap-16 ${
                i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <Reveal className="group">
                <ProjectShot label={`Add the ${p.title} screenshot here`} />
              </Reveal>
              <Reveal delay={120}>
                <span className="font-mono text-xs text-primary">{p.index}</span>
                <h3 className="font-display mt-4 text-2xl font-bold tracking-tight sm:text-3xl">
                  {p.title}
                </h3>
                <p className="mt-2 text-xs tracking-[0.22em] text-muted-foreground uppercase">
                  {p.category}
                </p>
                <p className="mt-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {p.description}
                </p>
                <ul className="mt-7 grid gap-2 sm:grid-cols-2">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                      <span className="h-1 w-1 rounded-full bg-primary" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href={p.href}
                  className="group/link mt-9 inline-flex items-center gap-2 border-b border-border pb-1 text-sm font-medium transition-colors hover:border-primary hover:text-primary"
                >
                  {p.cta}
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                </a>
              </Reveal>
            </article>
          ))}

          <Reveal>
            <div className="hairline grid place-items-center rounded-lg border-dashed px-6 py-20 text-center">
              <span className="font-mono text-xs text-muted-foreground/70">03</span>
              <p className="font-display mt-3 text-xl font-semibold">Next project slot</p>
              <p className="mt-2 max-w-sm text-sm text-muted-foreground">
                Reserved for an upcoming client project.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Free demo CTA ---------------- */

export function FreeDemo() {
  return (
    <section className="relative overflow-hidden border-y border-border bg-surface/50 py-24 md:py-32">
      <div className="drift-slow pointer-events-none absolute -right-32 -bottom-40 h-[420px] w-[620px] rounded-full bg-primary/12 blur-[130px]" />
      <div className="relative mx-auto grid max-w-[1400px] gap-12 px-6 md:px-10 lg:grid-cols-[1.1fr_1fr] lg:items-end">
        <div>
          <Reveal>
            <span className="text-[11px] font-medium tracking-[0.3em] text-primary uppercase">
              Free Homepage Demo
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="font-display mt-6 text-3xl leading-[1.08] font-bold tracking-tight sm:text-4xl lg:text-[3.2rem]">
              Not Sure What Your Website Could Look Like?
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <p className="mt-6 text-lg text-foreground/90">
              Get a free homepage demo designed around your business.
            </p>
          </Reveal>
        </div>
        <Reveal delay={200}>
          <p className="text-sm leading-relaxed text-muted-foreground">
            I create a free homepage demo for selected businesses so you can see what a professional
            website could look like before starting a project.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-5">
            <MagneticButton href={`mailto:${EMAIL}?subject=Free%20homepage%20demo%20request`}>
              Request a Free Demo
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </MagneticButton>
            <a
              href={`mailto:${EMAIL}`}
              className="font-mono text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              {EMAIL}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Process ---------------- */

const STEPS = [
  { n: "01", title: "Discover", copy: "Understand your business, audience and goals." },
  { n: "02", title: "Plan", copy: "Define the structure, content and user experience." },
  { n: "03", title: "Build", copy: "Develop and refine the website around your requirements." },
  { n: "04", title: "Launch", copy: "Test, optimize and prepare the website for launch." },
];

export function Process() {
  const { ref, progress } = useScrollProgress<HTMLDivElement>();

  return (
    <section id="process" className="py-24 md:py-36">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <SectionHeading label="Process" title="From Idea to Launch" />
        <div ref={ref} className="relative mt-16 pl-8 md:pl-0">
          <div className="absolute top-0 bottom-0 left-[3px] w-px bg-border md:left-1/2" />
          <div
            className="absolute top-0 left-[3px] w-px origin-top bg-primary transition-transform duration-300 md:left-1/2"
            style={{ height: "100%", transform: `scaleY(${progress})` }}
          />
          <div className="space-y-16 md:space-y-24">
            {STEPS.map((s, i) => {
              const active = progress > (i + 0.35) / STEPS.length;
              return (
                <div
                  key={s.n}
                  className={`relative md:grid md:grid-cols-2 md:gap-16 ${
                    i % 2 === 1 ? "md:[&>div]:col-start-2" : ""
                  }`}
                >
                  <span
                    className={`absolute top-2 -left-8 h-[7px] w-[7px] rounded-full transition-all duration-500 md:left-1/2 md:-ml-[3.5px] ${
                      active ? "scale-125 bg-primary" : "bg-border"
                    }`}
                  />
                  <div
                    className={`transition-all duration-700 ease-out ${
                      active ? "translate-y-0 opacity-100" : "translate-y-4 opacity-35"
                    } ${i % 2 === 1 ? "md:pl-16" : "md:pr-16 md:text-right"}`}
                  >
                    <span className="font-mono text-xs text-primary">{s.n}</span>
                    <h3 className="font-display mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
                      {s.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.copy}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Why me ---------------- */

const REASONS = [
  { title: "Business-first approach", copy: "I focus on what your website needs to achieve." },
  {
    title: "Modern & Responsive",
    copy: "A consistent experience across mobile, tablet and desktop.",
  },
  { title: "Clear Communication", copy: "Simple communication throughout the project." },
  {
    title: "Custom Solutions",
    copy: "Every project is adapted to the business rather than using a one-size-fits-all approach.",
  },
];

export function WhyMe() {
  return (
    <section className="border-t border-border py-24 md:py-36">
      <div className="mx-auto grid max-w-[1400px] gap-14 px-6 md:px-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
        <SectionHeading label="Why me" title="Why Businesses Choose To Work With Me" />
        <div className="divide-y divide-border">
          {REASONS.map((r, i) => (
            <Reveal
              key={r.title}
              delay={i * 90}
              className="group grid gap-3 py-8 md:grid-cols-[auto_1fr] md:gap-10"
            >
              <span className="font-mono text-xs text-muted-foreground/60 transition-colors group-hover:text-primary">
                0{i + 1}
              </span>
              <div>
                <h3 className="font-display text-xl font-semibold tracking-tight">{r.title}</h3>
                <p className="mt-2 max-w-lg text-sm leading-relaxed text-muted-foreground">
                  {r.copy}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- About + Tech ---------------- */

const TECH = ["HTML", "CSS", "JavaScript", "React", "Node.js", "Tailwind CSS", "Add tool", "Add tool"];

export function About() {
  return (
    <section id="about" className="border-t border-border py-24 md:py-36">
      <div className="mx-auto grid max-w-[1400px] gap-14 px-6 md:px-10 lg:grid-cols-[1fr_0.85fr] lg:gap-24">
        <div>
          <SectionHeading label="About" title="About Me" />
          <Reveal delay={140}>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Hi, I'm M. Ismail, a Full-Stack Web Developer focused on creating modern websites and
              web solutions for businesses, startups and entrepreneurs.
            </p>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              I enjoy turning ideas into clean, functional and professional digital experiences.
            </p>
          </Reveal>

          <Reveal delay={200}>
            <h3 className="mt-14 text-[11px] font-medium tracking-[0.3em] text-muted-foreground uppercase">
              Technology & Tools
            </h3>
            <ul className="mt-6 flex flex-wrap gap-2.5">
              {TECH.map((t) => (
                <li
                  key={t}
                  className="hairline rounded-full px-4 py-2 font-mono text-xs text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
                >
                  {t}
                </li>
              ))}
            </ul>
            <p className="mt-4 font-mono text-[11px] text-muted-foreground/60">
              Placeholder list — edit to match the exact stack you use.
            </p>
          </Reveal>
        </div>

        <Reveal delay={120}>
          <div className="hairline relative aspect-[4/5] overflow-hidden rounded-lg bg-surface">
            <div className="grid-lines absolute inset-0 opacity-40" />
            <div className="absolute inset-0 grid place-items-center px-6 text-center">
              <p className="font-mono text-[11px] tracking-[0.25em] text-muted-foreground uppercase">
                Photo placeholder
              </p>
            </div>
          </div>
          <div className="hairline mt-6 rounded-lg p-6">
            <p className="text-[11px] tracking-[0.28em] text-muted-foreground uppercase">
              Client feedback
            </p>
            <p className="mt-3 text-sm text-muted-foreground">Client feedback coming soon.</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Final CTA + Footer ---------------- */

export function FinalCta() {
  return (
    <section id="contact" className="relative overflow-hidden border-t border-border py-28 md:py-40">
      <div className="drift-slow pointer-events-none absolute -bottom-52 left-1/2 h-[440px] w-[760px] -translate-x-1/2 rounded-full bg-primary/14 blur-[140px]" />
      <div className="relative mx-auto max-w-[1400px] px-6 text-center md:px-10">
        <Reveal>
          <h2 className="font-display mx-auto max-w-3xl text-4xl leading-[1.05] font-bold tracking-tight sm:text-5xl lg:text-[4rem]">
            Have a Project in Mind?
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <p className="mx-auto mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">
            Let's turn your idea into a professional digital experience.
          </p>
        </Reveal>
        <Reveal delay={180}>
          <div className="mt-10 flex flex-col items-center gap-6">
            <MagneticButton href={`mailto:${EMAIL}?subject=New%20project%20enquiry`}>
              Start a Project
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </MagneticButton>
            <a
              href={`mailto:${EMAIL}`}
              className="font-mono text-xs text-muted-foreground transition-colors hover:text-foreground sm:text-sm"
            >
              {EMAIL}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const FOOTER_LINKS = ["Home", "Services", "Work", "Process", "About", "Contact"];

export function Footer() {
  return (
    <footer className="border-t border-border py-16">
      <div className="mx-auto grid max-w-[1400px] gap-12 px-6 md:px-10 lg:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <p className="font-display text-sm font-bold tracking-[0.22em] uppercase">
            M.<span className="text-primary">Ismail</span>
          </p>
          <p className="mt-3 text-sm text-muted-foreground">Full-Stack Web Developer</p>
          <a
            href="https://ismaildigital.site"
            className="mt-4 inline-block font-mono text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            ismaildigital.site
          </a>
        </div>

        <nav aria-label="Footer">
          <p className="text-[11px] tracking-[0.28em] text-muted-foreground uppercase">Navigation</p>
          <ul className="mt-5 grid grid-cols-2 gap-y-2.5">
            {FOOTER_LINKS.map((l) => (
              <li key={l}>
                <a
                  href={`#${l.toLowerCase()}`}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="text-[11px] tracking-[0.28em] text-muted-foreground uppercase">Contact</p>
          <a
            href={`mailto:${EMAIL}`}
            className="mt-5 block text-sm break-all transition-colors hover:text-primary"
          >
            {EMAIL}
          </a>
          <div className="mt-5 flex gap-5">
            {[
              { label: "Instagram", href: "#" },
              { label: "LinkedIn", href: "#" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                className="group inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {s.label}
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="mx-auto mt-14 max-w-[1400px] border-t border-border px-6 pt-6 md:px-10">
        <p className="font-mono text-[11px] text-muted-foreground/60">
          © {new Date().getFullYear()} M. Ismail. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
