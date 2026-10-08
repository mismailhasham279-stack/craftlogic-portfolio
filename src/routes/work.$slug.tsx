import { motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { ProjectBrowserFrame } from "@/components/site/ProjectBrowserFrame";
import { Footer } from "@/components/site/Sections";
import { getProject } from "@/data/projects";
import { SITE_NAME, SITE_ORIGIN } from "@/lib/site";

export const Route = createFileRoute("/work/$slug")({
  loader: ({ params }) => {
    if (!getProject(params.slug)) throw notFound();
    return { slug: params.slug };
  },
  head: ({ params, loaderData }) => {
    const project = loaderData ? getProject(loaderData.slug) : undefined;
    const url = `${SITE_ORIGIN}/work/${params.slug}`;

    if (!project) {
      return {
        meta: [{ title: "Project not found — CRAFTLOGIC" }, { name: "robots", content: "noindex" }],
      };
    }

    const title = `${project.name} — Project | ${SITE_NAME}`;
    return {
      meta: [
        { title },
        { name: "description", content: project.description },
        { property: "og:title", content: title },
        { property: "og:description", content: project.description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: url },
        { property: "og:site_name", content: SITE_NAME },
      ],
      links: [{ rel: "canonical", href: url }],
    };
  },
  component: ProjectDetail,
});

function ProjectDetail() {
  const { slug } = Route.useLoaderData();
  const project = getProject(slug);
  const shouldReduceMotion = useReducedMotion();

  if (!project) throw notFound();

  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <motion.main
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="pt-28 pb-20 md:pt-36 md:pb-28"
      >
        <div className="mx-auto max-w-[1200px] px-6 md:px-10">
          <Link
            to="/"
            hash="work"
            className="focus-ring inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to selected work
          </Link>

          <div className="mt-10 grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end lg:gap-16">
            <div>
              <div className="flex items-center gap-3">
                <span className="font-mono text-[11px] text-primary">{project.index}</span>
                <span className="h-px w-8 bg-primary/40" />
                <span className="text-[10px] tracking-[0.2em] text-muted-foreground uppercase sm:text-[11px]">
                  {project.category}
                </span>
              </div>
              <h1 className="font-display mt-5 text-4xl leading-[1.04] font-bold tracking-tight sm:text-5xl lg:text-[3.5rem]">
                {project.name}
              </h1>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
                {project.description}
              </p>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="group focus-ring mt-7 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-[background-color,transform] duration-300 hover:-translate-y-0.5 hover:bg-primary/90"
              >
                View Live Website
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>

            <ProjectBrowserFrame
              src={project.heroImage}
              projectName={project.name}
              className="border-primary/30"
            />
          </div>

          <section className="mt-16 border-t border-border pt-10 md:mt-20 md:pt-12">
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="text-[10px] tracking-[0.22em] text-primary uppercase">
                  Project Details
                </p>
                <h2 className="font-display mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
                  Key Features
                </h2>
              </div>
              <span className="hidden font-mono text-[10px] tracking-[0.14em] text-muted-foreground uppercase sm:block">
                {String(project.features.length).padStart(2, "0")} features
              </span>
            </div>

            <ul className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {project.features.map((feature, index) => (
                <li
                  key={feature.title}
                  className="group rounded-xl border border-[#2a2418] bg-surface/70 p-5 transition-[border-color,background-color] duration-300 hover:border-primary/45 hover:bg-surface sm:p-6"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] tracking-[0.12em] text-primary/75">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <feature.icon
                      aria-hidden="true"
                      className="h-4 w-4 text-primary/80 transition-colors duration-300 group-hover:text-primary"
                      strokeWidth={1.5}
                    />
                  </div>
                  <h3 className="font-display mt-5 text-base font-semibold tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {feature.copy}
                  </p>
                </li>
              ))}
            </ul>
          </section>

          <div className="mt-12 border-t border-border pt-8">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="focus-ring group inline-flex items-center gap-2 rounded-sm text-sm font-medium text-primary transition-colors hover:text-[#f0d391]"
            >
              View Live Website
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </motion.main>
      <Footer />
    </div>
  );
}
