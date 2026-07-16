import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { legalAreas, site, founder } from "@/content/site";
import s from "./page.module.css";

export const metadata: Metadata = {
  title: "Legal — Business & Ops",
  description:
    "MXT Legal is the studio's internal business and operations division — entity structure, contracts, IP, and compliance across MXT.",
};

export default function LegalPage() {
  return (
    <div data-division="legal">
      {/* ── HERO ── */}
      <section className={s.hero}>
        <div className="container">
          <div className={s.docHead}>
            <span>MXT Productions — Internal Division</span>
            <span className={s.ref}>REF · MXT-04 / OPS</span>
          </div>
          <h1>Legal &amp; Ops</h1>
          <p className={s.heroLead}>
            The quiet division that keeps the other three moving.
          </p>
        </div>
      </section>

      {/* ── PREAMBLE ── */}
      <section className="section container">
        <div className={s.preamble}>
          <Reveal>
            <div className={s.preambleLabel}>Preamble</div>
          </Reveal>
          <Reveal delay={80} className={s.preambleBody}>
            <p>
              MXT Legal isn&apos;t client-facing. It&apos;s the internal function
              that handles the paperwork, structure, and obligations behind a
              multi-division studio — so <b>Dev</b>, <b>mCloud</b>, and{" "}
              <b>Apex</b> can focus on the work.
            </p>
            <p>
              One entity, clean ownership, and agreements that hold up. Nothing
              flashy here — that&apos;s the point.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── CLAUSES ── */}
      <section className="section-tight container">
        <Reveal>
          <span className="eyebrow">What it covers</span>
        </Reveal>
        <div className={s.clauses} style={{ marginTop: "2rem" }}>
          {legalAreas.map((a, i) => (
            <Reveal key={a.title} delay={i * 50} className={s.clause}>
              <span className={s.clauseNum}>§ {i + 1}.0</span>
              <div>
                <h3>{a.title}</h3>
                <p>{a.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── NOTE ── */}
      <section className="section-tight container">
        <Reveal className={s.note}>
          <span className={s.noteMark}>Note</span>
          <p>
            Legal or business matters — partnerships, contracts, or press — reach
            the studio through the{" "}
            <Link href="/contact?to=legal">contact page</Link> or at{" "}
            <a href={`mailto:${site.email}`}>{site.email}</a>. It routes to the
            right desk.
          </p>
        </Reveal>

        <Reveal className={s.signature}>
          <span>Executed and maintained under MXT Productions</span>
          <div style={{ textAlign: "right" }}>
            <div className={s.who}>{founder.name}</div>
            <div>{founder.role} · {site.location}</div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
