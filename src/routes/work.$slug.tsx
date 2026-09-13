import { useState } from "react";
import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, ArrowUpRight, Check, X } from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Sections";
import { Reveal } from "@/components/site/Reveal";
import { MagneticButton } from "@/components/site/MagneticButton";
import { DeviceShowcase } from "@/components/site/DeviceShowcase";
import { getProject, projects, type Project } from "@/data/projects";
import { cn } from "@/lib/utils";

const SITE = "https://ismail-digital-crafted.lovable.app";

export const Route = createFileRoute("/work/$slug")({
  loader: ({ params }) => {
    // Only serialisable data may cross the server/client boundary, so the
    // project object itself is looked up again in the component.
    if (!getProject(params.slug)) throw notFound();
    return { slug: params.slug };
  },
  head: ({ params, loaderData }) => {
    const p = loaderData ? getProject(loaderData.slug) : undefined;
    const url = `${SITE}/work/${params.slug}`;
    if (!p) {
      return {
        meta: [{ title: "Project not found — M. Ismail" }, { name: "robots", content: "noindex" }],
      };
    }
    const title = `${p.name} — Case Study | M. Ismail`;
    return {
      meta: [
        { title },
        { name: "description", content: p.description },
        { property: "og:title", content: title },
        { property: "og:description", content: p.description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: url },
        { property: "og:image", content: p.heroImage },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:image", content: p.heroImage },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            name: p.name,
            description: p.description,
            url,
            image: p.heroImage,
            creator: { "@type": "Person", name: "M. Ismail" },
          }),
        },
      ],
    };
  },
  component: CaseStudy,
});

function CaseStudy() {
  const { slug } = Route.useLoaderData();
  const project = getProject(slug)!;
  const i = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(i + 1) % projects.length]!;

  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        <CaseHero project={project} />
        <Overview project={project} />
        <Features project={project} />
        <Anatomy project={project} />
        <Gallery project={project} />
        <Value project={project} />
        <NextProject next={next} />
      </main>
      <Footer />
    </div>
  );
}

function CaseHero({ project }: { project: Project }) {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-44 md:pb-24">
      <div className="grid-lines pointer-events-none absolute inset-0 opacity-50 [mask-image:radial-gradient(ellipse_at_50%_0%,black,transparent_75%)]" />
      <div className="drift-slow pointer-events-none absolute -top-40 left-1/2 h-[460px] w-[760px] -translate-x-1/2 rounded-full bg-primary/12 blur-[130px]" />
      <div className="relative mx-auto max-w-[1400px] px-6 md:px-10">
        <Link
          to="/"
          hash="work"
          className="focus-ring inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" /> All work
        </Link>

        <div className="mt-10 grid gap-14 lg:grid-cols-[1fr_1.05fr] lg:items-center lg:gap-16">
          <div>
            <div className="flex items-center gap-3">
              <span className="font-mono text-[11px] text-primary">{project.index}</span>
              <span className="h-px w-8 bg-border" />
              <span className="text-[11px] tracking-[0.24em] text-muted-foreground uppercase">
                {project.category}
              </span>
            </div>
            <h1 className="font-display mt-6 text-4xl leading-[1.03] font-bold tracking-tight sm:text-5xl lg:text-[3.6rem]">
              {project.name}
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              {project.description}
            </p>

            <dl className="mt-10 grid max-w-lg grid-cols-2 gap-x-8 gap-y-6 border-t border-border pt-8 text-sm">
              <div>
                <dt className="text-[10px] tracking-[0.24em] text-muted-foreground uppercase">
                  Project type
                </dt>
                <dd className="mt-2">{project.projectType}</dd>
              </div>
              <div>
                <dt className="text-[10px] tracking-[0.24em] text-muted-foreground uppercase">
                  Status
                </dt>
                <dd className="mt-2 inline-flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" /> Live website
                </dd>
              </div>
              <div className="col-span-2">
                <dt className="text-[10px] tracking-[0.24em] text-muted-foreground uppercase">
                  Services
                </dt>
                <dd className="mt-2">{project.services.join(" · ")}</dd>
              </div>
              <div className="col-span-2">
                <dt className="text-[10px] tracking-[0.24em] text-muted-foreground uppercase">
                  Technologies
                </dt>
                <dd className="mt-3 flex flex-wrap gap-2">
                  {project.technologies.map((t) => (
                    <span
                      key={t}
                      className="hairline rounded-full px-3 py-1.5 font-mono text-[11px] text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </dd>
              </div>
            </dl>

            <div className="mt-10">
              <MagneticButton href={project.liveUrl}>
                Visit Live Website
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </MagneticButton>
            </div>
          </div>

          <DeviceShowcase
            eager
            name={project.name}
            desktopSrc={project.heroImage}
            mobileSrc={project.mobileImage}
            className="float-slow"
          />
        </div>
      </div>
    </section>
  );
}

function Overview({ project }: { project: Project }) {
  return (
    <section className="border-t border-border py-20 md:py-28">
      <div className="mx-auto grid max-w-[1400px] gap-12 px-6 md:px-10 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <h2 className="text-[11px] tracking-[0.3em] text-muted-foreground uppercase">
            The business challenge
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            {project.businessChallenge}
          </p>
        </Reveal>
        <Reveal delay={120}>
          <h2 className="text-[11px] tracking-[0.3em] text-primary uppercase">The solution</h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">{project.solution}</p>
        </Reveal>
      </div>
    </section>
  );
}

function Features({ project }: { project: Project }) {
  return (
    <section className="border-t border-border py-20 md:py-28">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <Reveal>
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            What the website does
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
          {project.features.map((f, i) => (
            <Reveal key={f.title} delay={(i % 3) * 80}>
              <article className="group h-full bg-background p-8 transition-colors duration-500 hover:bg-surface md:p-10">
                <f.icon
                  className="h-5 w-5 text-primary transition-transform duration-500 group-hover:-translate-y-1"
                  strokeWidth={1.5}
                />
                <h3 className="font-display mt-7 text-lg font-semibold tracking-tight">
                  {f.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.copy}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Anatomy({ project }: { project: Project }) {
  const [active, setActive] = useState(0);
  const item = project.anatomy[active] ?? project.anatomy[0]!;
  const desktop2 = project.gallery.find((g) => g.device === "desktop" && g.src !== project.heroImage);
  const src =
    item.view === "mobile"
      ? project.mobileImage
      : item.view === "desktop2"
        ? (desktop2?.src ?? project.heroImage)
        : project.heroImage;

  return (
    <section className="border-t border-border py-20 md:py-28">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <Reveal>
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Anatomy of the page
          </h2>
          <p className="mt-5 max-w-xl text-base text-muted-foreground">
            Select a part of the website to see how it was designed and why it is there.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,20rem)_1fr] lg:gap-14">
          <div className="flex flex-wrap gap-2 lg:flex-col lg:gap-1">
            {project.anatomy.map((a, i) => (
              <button
                key={a.id}
                type="button"
                onClick={() => setActive(i)}
                aria-pressed={i === active}
                className={cn(
                  "focus-ring rounded-lg px-4 py-3 text-left text-sm transition-all duration-300",
                  i === active
                    ? "bg-primary/10 text-foreground"
                    : "text-muted-foreground hover:bg-surface hover:text-foreground",
                )}
              >
                <span className="font-mono text-[10px] text-primary">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="ml-3">{a.label}</span>
              </button>
            ))}
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground lg:mt-8">
              {item.copy}
            </p>
          </div>

          <div className="hairline relative overflow-hidden rounded-xl bg-surface/60 p-3">
            <div className="relative overflow-hidden rounded-lg">
              <img
                key={src}
                src={src}
                alt={`${project.name} — ${item.label}`}
                loading="lazy"
                decoding="async"
                className={cn(
                  "animate-fade-in w-full object-cover object-top",
                  item.view === "mobile" ? "mx-auto max-w-[320px]" : "",
                )}
              />
              <span
                aria-hidden
                className="pointer-events-none absolute rounded-md border-2 border-primary bg-primary/10 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
                style={{
                  top: `${item.rect.top}%`,
                  left: `${item.rect.left}%`,
                  width: `${item.rect.width}%`,
                  height: `${item.rect.height}%`,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Gallery({ project }: { project: Project }) {
  const [open, setOpen] = useState<number | null>(null);
  const current = open === null ? null : project.gallery[open];

  return (
    <section className="border-t border-border py-20 md:py-28">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <Reveal>
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">Gallery</h2>
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {project.gallery.map((g, i) => (
            <Reveal key={g.src} delay={(i % 4) * 70}>
              <button
                type="button"
                onClick={() => setOpen(i)}
                className="focus-ring hairline group block w-full overflow-hidden rounded-xl bg-surface/50 text-left"
              >
                <span className="block overflow-hidden">
                  <img
                    src={g.src}
                    alt={g.alt}
                    loading="lazy"
                    decoding="async"
                    className={cn(
                      "w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]",
                      g.device === "mobile" ? "aspect-[9/16]" : "aspect-[16/10]",
                    )}
                  />
                </span>
                <span className="block px-4 py-3 text-xs text-muted-foreground">{g.caption}</span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {current ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={current.alt}
          className="fixed inset-0 z-[70] grid place-items-center bg-background/95 p-5 backdrop-blur-xl"
          onClick={() => setOpen(null)}
        >
          <button
            type="button"
            aria-label="Close image"
            onClick={() => setOpen(null)}
            className="hairline focus-ring absolute top-6 right-6 grid h-10 w-10 place-items-center rounded-full"
          >
            <X className="h-4 w-4" />
          </button>
          <img
            src={current.src}
            alt={current.alt}
            className="animate-fade-in max-h-[86vh] max-w-full rounded-xl object-contain"
          />
        </div>
      ) : null}
    </section>
  );
}

function Value({ project }: { project: Project }) {
  return (
    <section className="border-t border-border py-20 md:py-28">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <Reveal>
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            What it gives the business
          </h2>
        </Reveal>
        <ul className="mt-12 grid gap-x-12 gap-y-5 md:grid-cols-2">
          {project.businessValue.map((v, i) => (
            <Reveal key={v} delay={(i % 2) * 70}>
              <li className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                {v}
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

function NextProject({ next }: { next: Project }) {
  return (
    <section className="border-t border-border py-20 md:py-28">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <div>
            <p className="text-[11px] tracking-[0.3em] text-muted-foreground uppercase">
              Next project
            </p>
            <h2 className="font-display mt-5 text-3xl font-bold tracking-tight sm:text-4xl">
              {next.name}
            </h2>
            <p className="mt-3 text-sm text-muted-foreground">{next.category}</p>
          </div>
          <div className="flex flex-wrap gap-4">
            <MagneticButton href={`/work/${next.slug}`}>
              View Case Study
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </MagneticButton>
            <MagneticButton href="/#start" variant="ghost">
              Start a Project
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </MagneticButton>
          </div>
        </div>
      </div>
    </section>
  );
}
