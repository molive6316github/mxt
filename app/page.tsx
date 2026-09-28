import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Divisions from "@/components/Divisions";
import Products from "@/components/Products";
import Music from "@/components/Music";
import Contact from "@/components/Contact";
import { artists, divisions, products, socials, studio } from "@/content/mxt";

// Structured data so search engines understand who MXT is and what it ships.
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${studio.url}/#org`,
      name: studio.name,
      url: studio.url,
      email: studio.email,
      description: studio.description,
      foundingDate: String(studio.founded),
      sameAs: socials.filter((s) => s.href.startsWith("http")).map((s) => s.href),
      subOrganization: divisions.map((d) => ({
        "@type": "Organization",
        name: `MXT ${d.name}`,
        description: d.body,
      })),
    },
    ...products
      .filter((p) => p.href)
      .map((p) => ({
        "@type": "SoftwareApplication",
        name: p.name,
        url: p.href,
        applicationCategory: p.kind,
        description: p.description,
        publisher: { "@id": `${studio.url}/#org` },
      })),
    ...artists.map((a) => ({
      "@type": "MusicGroup",
      name: a.name,
      recordLabel: { "@type": "Organization", name: "MXT Records" },
    })),
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <Hero />
      <Marquee />
      <Divisions />
      <Products />
      <Music />
      <Contact />
    </>
  );
}
