import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import { site, contactRoutes, divisions, legalDivision } from "@/content/site";
import s from "./page.module.css";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with MXT Productions. Inquiries route to the right division — mCloud, Dev, Apex, or Legal.",
};

// Legal isn't part of the public `divisions` list, but its inquiries still
// need somewhere to route — look it up alongside the public divisions here.
const routeLookup = [...divisions, legalDivision];

const accentFor = (value: string) =>
  routeLookup.find((d) => d.slug === value)?.accent ?? "#7de8d8";

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ to?: string }>;
}) {
  const { to } = await searchParams;
  const valid = contactRoutes.some((r) => r.value === to);
  const defaultTo = valid ? (to as string) : "general";

  return (
    <div>
      {/* ── HERO ── */}
      <section className={s.hero}>
        <div className="container">
          <Reveal>
            <span className="eyebrow">Contact</span>
            <h1 style={{ marginTop: "1.3rem" }}>
              Reach the <em>right desk</em>.
            </h1>
            <p className={s.heroLead}>
              One inbox, routed by division. Tell us what it&apos;s about and it
              lands with whoever handles it — usually answered within a day or two.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── SWITCHBOARD + FORM ── */}
      <section className="section-tight container">
        <div className={s.grid}>
          {/* left */}
          <Reveal className={s.board}>
            <div className={s.boardLabel}>Routing — MXT switchboard</div>
            <div className={s.routes}>
              {contactRoutes
                .filter((r) => r.value !== "general")
                .map((r) => {
                  const d = routeLookup.find((x) => x.slug === r.value);
                  return (
                    <div
                      key={r.value}
                      className={s.route}
                      style={{ ["--rc" as string]: accentFor(r.value) } as React.CSSProperties}
                    >
                      <span className={s.led} />
                      <div className={s.info}>
                        <div className={s.name}>{r.division}</div>
                        <div className={s.desc}>{r.label}</div>
                      </div>
                      <span className={s.call}>{d?.callsign ?? "MXT"}</span>
                    </div>
                  );
                })}
            </div>

            <div className={s.direct}>
              <h4>Or reach us directly</h4>
              <a href={`mailto:${site.email}`}>{site.email}</a>
              <p>
                {site.location} · Est. {site.founded}
              </p>
            </div>
          </Reveal>

          {/* right */}
          <Reveal delay={100} className={s.panel}>
            <div className={s.panelHead}>
              <span className="eyebrow">Send a message</span>
              <h2>Let&apos;s talk.</h2>
              <p>
                Fill this in and pick the division it&apos;s for. If you&apos;re
                not sure, leave it on “Something else” and we&apos;ll route it.
              </p>
            </div>
            <ContactForm variant="general" defaultTo={defaultTo} />
          </Reveal>
        </div>
      </section>
    </div>
  );
}
