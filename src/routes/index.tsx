import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import {
  Trust,
  Services,
  Work,
  BusinessProblem,
  FreeDemo,
  StartProject,
  Process,
  WhyMe,
  About,
  Contact,
  FinalCta,
  Footer,
} from "@/components/site/Sections";
import { EMAIL, projects } from "@/data/projects";

const SITE = "https://ismail-digital-crafted.lovable.app";
const TITLE = "M. Ismail — Full-Stack Web Developer for Business Websites";
const DESCRIPTION =
  "Full-Stack Web Developer building modern, responsive websites and web applications for businesses, startups and entrepreneurs.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: projects[0]!.heroImage },
      { name: "twitter:image", content: projects[0]!.heroImage },
    ],
    links: [{ rel: "canonical", href: SITE }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "M. Ismail",
          jobTitle: "Full-Stack Web Developer",
          email: `mailto:${EMAIL}`,
          url: SITE,
          knowsAbout: [
            "Web Development",
            "Business Websites",
            "E-Commerce Websites",
            "Web Applications",
          ],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        <Hero />
        <Trust />
        <Services />
        <Work />
        <BusinessProblem />
        <FreeDemo />
        <Process />
        <WhyMe />
        <About />
        <StartProject />
        <Contact />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
