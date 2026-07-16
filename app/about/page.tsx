import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import {
  site,
  founder,
  mission,
  timeline,
  divisions,
} from "@/content/site";
import s from "./page.module.css";

export const metadata: Metadata = {
  title: "About & Team",
  description:
    "The story of MXT Productions — founded by Max Oliver in 2024 as a studio built to make anything across software, web, film, and business.",
};

const initials = founder.name
  .split(" ")
  .map((w) => w[0])
  .join("");

export default function AboutPage() {
  return (
    <div>
      {/* ── HERO ── */}
      <section className={s.hero}>
        <div className="container">
          <Reveal>
            <span className="eyebrow">The studio</span>
            <h1 style={{ marginTop: "1.4rem" }}>
              One small team, built to <em>make anything</em>.
            </h1>
            <p className={s.heroLead}>
              MXT Productions is an independent studio in {site.location}. It
              started as one person shipping software and releasing music, and
              grew into four divisions that still run under one roof — and mostly
              one pair of hands.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── FOUNDER ── */}
      <section className="section container">
        <div className={s.founder}>
          <Reveal>
            <div
              className={s.portrait}
              role="img"
              aria-label={`Portrait placeholder for ${founder.name}`}
            >
              <div className={s.portraitMeta}>
                <span>Founder</span>
                <span>Est. {site.founded}</span>
              </div>
              <div className={s.portraitInitials}>{initials}</div>
            </div>
          </Reveal>

          <Reveal delay={100} className={s.founderBody}>
            <span className="eyebrow">Founder</span>
            <h2 className={s.founderName}>{founder.name}</h2>
            <div className={s.founderRole}>{founder.role}</div>
            {founder.bio.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <div className={s.aka}>a.k.a. {founder.alias}</div>
          </Reveal>
        </div>
      </section>

      {/* ── MISSION ── */}
      <section className={`section ${s.mission}`}>
        <div className="container">
          <div className={s.missionInner}>
            <Reveal>
              <p className={s.missionQuote}>
                “Make anything,
                <br />
                <em>under one signal.</em>”
              </p>
            </Reveal>
            <Reveal delay={100} className={s.missionBody}>
              <span className="eyebrow">Mission</span>
              <p style={{ marginTop: "1.3rem" }}>{mission.body}</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── TIMELINE ── */}
      <section className="section container">
        <Reveal>
          <span className="eyebrow">The story</span>
          <h2 style={{ fontSize: "clamp(2rem,5vw,3.4rem)", margin: "1rem 0 2rem" }}>
            How it grew
          </h2>
        </Reveal>
        <div className={s.timeline}>
          {timeline.map((t, i) => (
            <Reveal key={t.year} delay={i * 60} className={s.event}>
              <span className={s.eventYear}>{t.year}</span>
              <span className={s.eventText}>{t.event}</span>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── DIVISIONS RECAP ── */}
      <section className="section-tight container">
        <Reveal>
          <span className="eyebrow">Under the roof</span>
          <h2 style={{ fontSize: "clamp(1.8rem,4.5vw,3rem)", margin: "1rem 0 2rem" }}>
            Four divisions, one company
          </h2>
        </Reveal>
        <Reveal className={s.recap}>
          {divisions.map((d) => (
            <Link
              key={d.slug}
              href={d.href}
              className={s.recapItem}
              style={{ ["--rc" as string]: d.accent } as React.CSSProperties}
            >
              <div className={s.recapCall}>{d.callsign}</div>
              <div className={s.recapName}>{d.full}</div>
              <div className={s.recapRole}>{d.role}</div>
            </Link>
          ))}
        </Reveal>
      </section>

      {/* ── CTA ── */}
      <section className="section container" style={{ textAlign: "center" }}>
        <Reveal>
          <h2 style={{ fontSize: "clamp(2rem,6vw,4rem)", lineHeight: 1 }}>
            Want to work together?
          </h2>
          <p className="lead" style={{ margin: "1.2rem auto 2rem" }}>
            Clients, collaborators, or just curious — the door&apos;s open.
          </p>
          <Link href="/contact" className="btn">
            Get in touch →
          </Link>
        </Reveal>
      </section>
    </div>
  );
}
