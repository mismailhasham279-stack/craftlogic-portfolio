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
import { EMAIL } from "@/data/projects";
import { SITE_NAME, SITE_ORIGIN, SITE_URL } from "@/lib/site";

const SITE = SITE_ORIGIN;
const TITLE = "CRAFTLOGIC — Full-Stack Web Development & Digital Agency";
const DESCRIPTION =
  "CRAFTLOGIC designs and builds high-performance custom websites, e-commerce platforms, and digital experiences tailored for ambitious businesses.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE_URL },
      { property: "og:site_name", content: SITE_NAME },
      { property: "og:image", content: `${SITE}/og-preview.png` },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:type", content: "image/png" },
      {
        property: "og:image:alt",
        content: "CRAFTLOGIC — Full-Stack Web Development & Digital Agency",
      },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "twitter:image", content: `${SITE}/og-preview.png` },
      {
        name: "twitter:image:alt",
        content: "CRAFTLOGIC — Full-Stack Web Development & Digital Agency",
      },
    ],
    links: [{ rel: "canonical", href: SITE_URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              "@id": `${SITE}/#organization`,
              name: SITE_NAME,
              url: SITE_URL,
              email: EMAIL,
              telephone: "+92 334 4957382",
              logo: `${SITE}/logo.png`,
              description: "Full-Stack Web Development Agency",
              knowsAbout: [
                "Business Websites",
                "Landing Pages",
                "Web Applications",
                "E-Commerce Development",
                "Website Redesign",
                "Custom Solutions",
              ],
            },
            {
              "@type": "ProfessionalService",
              "@id": `${SITE}/#professional-service`,
              name: SITE_NAME,
              url: SITE_URL,
              description: "Full-Stack Web Development Agency",
              email: EMAIL,
              telephone: "+92 334 4957382",
              priceRange: "$$",
              parentOrganization: { "@id": `${SITE}/#organization` },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Web Development Services",
                itemListElement: [
                  "Business Websites",
                  "Landing Pages",
                  "Web Applications",
                  "E-Commerce Development",
                  "Website Redesign",
                  "Custom Solutions",
                ].map((name) => ({
                  "@type": "Offer",
                  itemOffered: { "@type": "Service", name },
                })),
              },
            },
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
