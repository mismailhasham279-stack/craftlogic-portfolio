import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import {
  Trust,
  Services,
  Work,
  FreeDemo,
  Process,
  WhyMe,
  About,
  FinalCta,
  Footer,
} from "@/components/site/Sections";

const TITLE = "M. Ismail | Full-Stack Web Developer";
const DESCRIPTION =
  "Modern, responsive websites and web applications for businesses, startups and entrepreneurs.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "M. Ismail",
          jobTitle: "Full-Stack Web Developer",
          email: "mailto:mismailhasham279@gmail.com",
          url: "https://ismaildigital.site",
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
        <FreeDemo />
        <Process />
        <WhyMe />
        <About />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
