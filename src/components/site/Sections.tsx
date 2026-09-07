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
  Minus,
  MonitorSmartphone,
  Palette,
  RefreshCw,
  Rocket,
  Server,
  ShoppingCart,
  Sparkles,
  Target,
} from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Reveal } from "./Reveal";
import { MagneticButton } from "./MagneticButton";
import { DeviceShowcase } from "./DeviceShowcase";
import { ProjectInquiry } from "./ProjectInquiry";
import { Logo } from "./Logo";
import { useScrollProgress } from "@/hooks/use-reveal";
import { EMAIL, SOCIAL, TECHNOLOGIES, futureProject, projects } from "@/data/projects";

export { EMAIL };

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
    copy: "Professional websites designed to establish a strong online presence.",
  },
  {
    n: "02",
    icon: Target,
    title: "Landing Pages",
    copy: "Focused pages designed for campaigns, products and lead generation.",
  },
  {
    n: "03",
    icon: Boxes,
    title: "Web Applications",
    copy: "Custom web applications built around specific business requirements.",
  },
  {
    n: "04",
    icon: ShoppingCart,
    title: "E-Commerce Websites",
    copy: "Online stores designed to showcase products and support online sales.",
  },
  {
    n: "05",
    icon: RefreshCw,
    title: "Website Redesign",
    copy: "Transform outdated websites into modern, responsive experiences.",
  },
  {
    n: "06",
    icon: Server,
    title: "Backend & API Solutions",
    copy: "Backend functionality, API integrations and custom web solutions.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <SectionHeading
          label="Services"
          title="What I Build"
          subtitle="Professional digital solutions designed around your business and its goals."
        />
        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal key={s.n} delay={(i % 3) * 80}>
              <article className="group relative h-full overflow-hidden bg-background p-8 transition-colors duration-500 hover:bg-surface md:p-10">
                <span className="absolute top-8 right-8 font-mono text-[11px] text-muted-foreground/50">
                  {s.n}
                </span>
                <s.icon
                  className="h-5 w-5 text-primary transition-transform duration-500 group-hover:-translate-y-1"
                  strokeWidth={1.5}
                />
                <h3 className="font-display mt-8 text-lg font-semibold tracking-tight">
                  {s.title}
                </h3>
                <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
                  {s.copy}
                </p>
                <span className="absolute inset-x-0 bottom-0 h-px w-0 bg-primary transition-all duration-700 group-hover:w-full" />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Work ---------------- */

export function Work() {
  return (
    <section id="work" className="border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <SectionHeading
          label="Selected Work"
          title="Real Projects, Real Business Purpose"
          subtitle="Each project below is a live website. Open a case study to see how it was designed around the business behind it."
        />

        <div className="mt-20 space-y-28 md:space-y-36">
          {projects.map((p, i) => (
            <article
              key={p.id}
              className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16"
            >
              <Reveal className={i % 2 === 1 ? "lg:order-2" : ""}>
                <Link
                  to="/work/$slug"
                  params={{ slug: p.slug }}
                  className="focus-ring group block rounded-xl transition-transform duration-500 hover:-translate-y-1.5"
                  aria-label={`Open the ${p.name} case study`}
                >
                  <DeviceShowcase
                    name={p.name}
                    desktopSrc={p.heroImage}
                    mobileSrc={p.mobileImage}
                  />
                </Link>
              </Reveal>

              <Reveal delay={120} className={i % 2 === 1 ? "lg:order-1" : ""}>
                <div className="mt-12 lg:mt-0">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-[11px] text-primary">{p.index}</span>
                    <span className="h-px w-8 bg-border" />
                    <span className="text-[11px] tracking-[0.24em] text-muted-foreground uppercase">
                      {p.category}
                    </span>
                  </div>
                  <h3 className="font-display mt-5 text-3xl font-bold tracking-tight sm:text-4xl">
                    {p.name}
                  </h3>
                  <p className="mt-5 max-w-lg text-base leading-relaxed text-muted-foreground">
                    {p.description}
                  </p>
                  <ul className="mt-7 flex flex-wrap gap-2">
                    {p.features.slice(0, 4).map((f) => (
                      <li
                        key={f.title}
                        className="hairline rounded-full px-3.5 py-1.5 text-xs text-muted-foreground"
                      >
                        {f.title}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-9 flex flex-wrap items-center gap-4">
                    <MagneticButton href={`/work/${p.slug}`}>
                      View Case Study
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </MagneticButton>
                    <a
                      href={p.liveUrl}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="focus-ring group inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      Visit live website
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </a>
                  </div>
                </div>
              </Reveal>
            </article>
          ))}

          <Reveal>
            <div className="hairline flex flex-col items-center justify-center rounded-2xl border-dashed px-8 py-20 text-center">
              <span className="font-mono text-[11px] text-muted-foreground/60">
                {futureProject.index}
              </span>
              <h3 className="font-display mt-4 text-2xl font-semibold tracking-tight text-muted-foreground">
                {futureProject.name}
              </h3>
              <p className="mt-3 text-sm text-muted-foreground/80">{futureProject.copy}</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Business problem ---------------- */

const WITHOUT = [
  "Limited online presence",
  "Harder to showcase services",
  "Fewer ways for customers to learn",
  "Weaker first impression",
];

const WITH = [
  "Professional online presence",
  "Clear services and products",
  "Easier customer enquiries",
  "Stronger credibility",
  "Better customer experience",
  "Stronger foundation for growth",
];

export function BusinessProblem() {
  return (
    <section className="border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <SectionHeading
          label="Why It Matters"
          title="No Website? You're Already Missing Opportunities."
          subtitle="Customers are searching online before deciding who to trust. A professional website gives your business a place to showcase what you offer, build credibility and make it easier for customers to contact you."
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="hairline h-full rounded-2xl bg-surface/40 p-8 md:p-10">
              <h3 className="text-[11px] font-medium tracking-[0.26em] text-muted-foreground uppercase">
                Without a professional website
              </h3>
              <ul className="mt-8 space-y-4">
                {WITHOUT.map((t) => (
                  <li key={t} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Minus className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground/50" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="relative h-full overflow-hidden rounded-2xl border border-primary/30 bg-primary/[0.06] p-8 md:p-10">
              <div className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-primary/15 blur-3xl" />
              <h3 className="text-[11px] font-medium tracking-[0.26em] text-primary uppercase">
                With a professional website
              </h3>
              <ul className="mt-8 space-y-4">
                {WITH.map((t) => (
                  <li key={t} className="flex items-start gap-3 text-sm text-foreground">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    {t}
                  </li>
                ))}
              </ul>
              <p className="mt-9 max-w-md text-sm leading-relaxed text-muted-foreground">
                Designed to help businesses move toward a 10× stronger digital presence and a
                stronger first impression online.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Free demo ---------------- */

export function FreeDemo() {
  const subject = encodeURIComponent("Free homepage demo request");
  const body = encodeURIComponent(
    "Hi Ismail,\n\nI'd like a free homepage demo for my business.\n\nBusiness name:\nWhat the business does:\nWebsite (if any):\n\nThanks,",
  );
  return (
    <section id="demo" className="border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-surface/50 px-8 py-16 md:px-16 md:py-20">
          <div className="grid-lines pointer-events-none absolute inset-0 opacity-40" />
          <div className="drift-slow pointer-events-none absolute -bottom-32 -left-20 h-72 w-[520px] rounded-full bg-primary/12 blur-[110px]" />
          <div className="relative max-w-2xl">
            <Reveal className="flex items-center gap-3">
              <Sparkles className="h-4 w-4 text-primary" strokeWidth={1.6} />
              <span className="text-[11px] tracking-[0.3em] text-muted-foreground uppercase">
                Free Homepage Demo
              </span>
            </Reveal>
            <Reveal delay={90}>
              <h2 className="font-display mt-6 text-3xl leading-tight font-bold tracking-tight sm:text-4xl">
                Not Sure What Your Website Could Look Like?
              </h2>
            </Reveal>
            <Reveal delay={150}>
              <p className="mt-5 text-lg text-foreground/90">
                Get a free homepage demo designed around your business.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
                I create a free homepage demo for selected businesses so you can see what a
                professional website could look like before starting a project.
              </p>
            </Reveal>
            <Reveal delay={260}>
              <div className="mt-10 flex flex-wrap items-center gap-5">
                <MagneticButton href={`mailto:${EMAIL}?subject=${subject}&body=${body}`}>
                  Request a Free Demo
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </MagneticButton>
                <a
                  href={`mailto:${EMAIL}`}
                  className="focus-ring text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {EMAIL}
                </a>
              </div>
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
  { n: "01", title: "Discover", copy: "Understand your business, audience and goals." },
  { n: "02", title: "Plan", copy: "Define the structure, content and user experience." },
  { n: "03", title: "Build", copy: "Develop the website and refine every important detail." },
  { n: "04", title: "Launch", copy: "Test, optimize and prepare the website for launch." },
];

export function Process() {
  const { ref, progress } = useScrollProgress<HTMLDivElement>();
  return (
    <section id="process" className="border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <SectionHeading label="Process" title="From Idea to Launch" />
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
          <ol className="grid gap-12 md:grid-cols-4 md:gap-8">
            {STEPS.map((s, i) => {
              const activeStep = progress > (i + 0.4) / STEPS.length;
              return (
                <li key={s.n} className="relative pl-10 md:pt-12 md:pl-0">
                  <span
                    className={`absolute top-1 left-0 grid h-[23px] w-[23px] place-items-center rounded-full border transition-all duration-500 md:top-0 ${
                      activeStep
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border bg-background text-muted-foreground"
                    }`}
                  >
                    <span className="font-mono text-[9px]">{s.n}</span>
                  </span>
                  <h3
                    className={`font-display text-lg font-semibold tracking-tight transition-colors duration-500 ${
                      activeStep ? "text-foreground" : "text-muted-foreground"
                    }`}
                  >
                    {s.title}
                  </h3>
                  <p className="mt-2.5 max-w-xs text-sm leading-relaxed text-muted-foreground">
                    {s.copy}
                  </p>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Why me ---------------- */

const WHY = [
  {
    icon: Target,
    title: "Business-First Approach",
    copy: "I focus on what your website needs to achieve.",
  },
  {
    icon: MonitorSmartphone,
    title: "Modern & Responsive",
    copy: "A consistent experience across mobile, tablet and desktop.",
  },
  {
    icon: MessageSquare,
    title: "Clear Communication",
    copy: "Simple communication throughout the project.",
  },
  {
    icon: Palette,
    title: "Custom Solutions",
    copy: "Every project is adapted to the business rather than using a one-size-fits-all approach.",
  },
  {
    icon: Sparkles,
    title: "Quality Focused",
    copy: "Attention to design, functionality, responsiveness and the details that make a website feel professional.",
  },
];

export function WhyMe() {
  return (
    <section className="border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <SectionHeading label="Why Me" title="Why Businesses Choose to Work With Me" />
        <div className="mt-14 divide-y divide-border border-y border-border">
          {WHY.map((w, i) => (
            <Reveal key={w.title} delay={i * 70}>
              <div className="group grid gap-4 py-8 transition-colors duration-500 hover:bg-surface/40 md:grid-cols-[auto_minmax(0,18rem)_1fr] md:items-center md:gap-10 md:px-6">
                <w.icon
                  className="h-5 w-5 text-primary transition-transform duration-500 group-hover:translate-x-1"
                  strokeWidth={1.5}
                />
                <h3 className="font-display text-lg font-semibold tracking-tight">{w.title}</h3>
                <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">{w.copy}</p>
              </div>
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
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1fr] lg:gap-20">
          <Reveal>
            {/* Replace this placeholder with a real professional photo. */}
            <div className="hairline relative aspect-[4/5] overflow-hidden rounded-2xl bg-surface">
              <div className="grid-lines absolute inset-0 opacity-40" />
              <div className="absolute inset-0 grid place-items-center text-center">
                <div>
                  <Logo size={64} className="mx-auto" />
                  <p className="mt-6 text-[11px] tracking-[0.26em] text-muted-foreground uppercase">
                    Professional photo
                  </p>
                  <p className="mt-2 text-xs text-muted-foreground/70">Coming soon</p>
                </div>
              </div>
            </div>
          </Reveal>

          <div>
            <SectionHeading label="About" title="Meet M. Ismail" />
            <Reveal delay={140}>
              <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground">
                Hi, I&apos;m M. Ismail, a Full-Stack Web Developer focused on creating modern
                websites and web solutions for businesses, startups and entrepreneurs.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
                I enjoy turning ideas into clean, functional and professional digital experiences
                that help businesses build a stronger presence online.
              </p>
            </Reveal>

            <Reveal delay={260}>
              <div className="mt-12">
                <div className="flex items-center gap-3">
                  <Code2 className="h-4 w-4 text-primary" strokeWidth={1.6} />
                  <h3 className="text-[11px] tracking-[0.28em] text-muted-foreground uppercase">
                    Technologies I work with
                  </h3>
                </div>
                <ul className="mt-6 flex flex-wrap gap-2.5">
                  {TECHNOLOGIES.map((t) => (
                    <li
                      key={t}
                      className="hairline rounded-full bg-surface/50 px-4 py-2 font-mono text-xs text-muted-foreground"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
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
  "E-Commerce Website",
  "Web Application",
  "Website Redesign",
  "Custom Web Solution",
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
    if (!name || !email || !message) {
      setError("Please add your name, email and a short message.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
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
              title="Let's Build Something Professional."
              subtitle="Have a business, idea or project in mind? Tell me what you're looking to build and I'll get back to you with the next steps."
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
                <div className="flex gap-6 pt-2">
                  <a
                    href={SOCIAL.instagram}
                    className="focus-ring text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Instagram
                  </a>
                  <a
                    href={SOCIAL.linkedin}
                    className="focus-ring text-muted-foreground transition-colors hover:text-foreground"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={120}>
            <div className="hairline rounded-2xl bg-surface/40 p-7 md:p-9">
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
                  <Field label="Name" name="name" required />
                  <Field label="Email" name="email" type="email" required />
                  <Field label="Business / Company" name="business" />
                  <div>
                    <label
                      htmlFor="projectType"
                      className="text-[11px] tracking-[0.2em] text-muted-foreground uppercase"
                    >
                      Project Type
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      className="hairline focus-ring mt-2 w-full rounded-lg bg-background px-4 py-3 text-sm"
                      defaultValue={PROJECT_TYPES[0]}
                    >
                      {PROJECT_TYPES.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="text-[11px] tracking-[0.2em] text-muted-foreground uppercase"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      maxLength={2000}
                      required
                      className="hairline focus-ring mt-2 w-full rounded-lg bg-background px-4 py-3 text-sm"
                    />
                  </div>
                  {error ? (
                    <p role="alert" className="text-sm text-destructive">
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
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="text-[11px] tracking-[0.2em] text-muted-foreground uppercase">
        {label} {required ? "*" : ""}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        maxLength={200}
        placeholder={placeholder ?? ""}
        className="hairline focus-ring mt-2 w-full rounded-lg bg-background px-4 py-3 text-sm"
      />
    </div>
  );
}

/* ---------------- Final CTA ---------------- */

export function FinalCta() {
  return (
    <section className="relative overflow-hidden border-t border-border py-28 md:py-36">
      <div className="grid-lines pointer-events-none absolute inset-0 opacity-40" />
      <div className="drift-slow pointer-events-none absolute top-1/2 left-1/2 h-[420px] w-[760px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/12 blur-[130px]" />
      <div className="relative mx-auto max-w-[1400px] px-6 text-center md:px-10">
        <Reveal>
          <h2 className="font-display mx-auto max-w-3xl text-4xl leading-[1.05] font-bold tracking-tight sm:text-5xl lg:text-[3.6rem]">
            Have a Project in Mind?
          </h2>
        </Reveal>
        <Reveal delay={110}>
          <p className="mx-auto mt-6 max-w-xl text-base text-muted-foreground md:text-lg">
            Let&apos;s turn your idea into a professional digital experience.
          </p>
        </Reveal>
        <Reveal delay={190}>
          <div className="mt-11 flex flex-wrap items-center justify-center gap-4">
            <MagneticButton href="#start">
              Start a Project
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </MagneticButton>
            <MagneticButton href="#demo" variant="ghost">
              Request a Free Demo
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </MagneticButton>
          </div>
        </Reveal>
        <Reveal delay={250}>
          <a
            href={`mailto:${EMAIL}`}
            className="focus-ring mt-10 inline-block text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            {EMAIL}
          </a>
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
        <div className="flex items-center gap-4">
          <Logo size={46} />
          <div>
            <p className="font-display text-sm font-bold tracking-[0.18em] uppercase">M. Ismail</p>
            <p className="mt-1.5 text-xs text-muted-foreground">Full-Stack Web Developer</p>
          </div>
        </div>

        <nav aria-label="Footer">
          <ul className="grid grid-cols-2 gap-x-10 gap-y-3 sm:grid-cols-3">
            {FOOTER_LINKS.map((l) => (
              <li key={l.hash}>
                <Link
                  to="/"
                  hash={l.hash}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="space-y-3 text-sm">
          <a
            href={`mailto:${EMAIL}`}
            className="block text-muted-foreground transition-colors hover:text-foreground"
          >
            {EMAIL}
          </a>
          <div className="flex gap-6">
            <a
              href={SOCIAL.instagram}
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Instagram
            </a>
            <a
              href={SOCIAL.linkedin}
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-12 max-w-[1400px] border-t border-border px-6 pt-7 md:px-10">
        <p className="text-xs text-muted-foreground">
          © 2026 M. Ismail. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export { Rocket };
