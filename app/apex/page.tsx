import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { apexProduction, apexTeam, apexReleased } from "@/content/site";
import s from "./page.module.css";

export const metadata: Metadata = {
  title: "Apex — Animation Studio",
  description:
    "MXT Apex is the studio's animated film division — currently in production on its first feature. Stories built frame by frame.",
};

export default function ApexPage() {
  return (
    <div data-division="apex" className={s.wrap}>
      <div className={s.filmGrain} aria-hidden="true" />

      {/* ── HERO ── */}
      <section className={s.hero}>
        <div className={s.bar + " " + s.barTop} aria-hidden="true" />
        <div className={s.bar + " " + s.barBot} aria-hidden="true" />
        <div className={s.heroWash} aria-hidden="true" />
        <div className={`container ${s.heroInner}`}>
          <div className={s.callrow}>
            <span className="callsign">MXT-03</span>
            <span className="pill on">
              <span className="dot" /> In production
            </span>
          </div>
          <h1>
            A<span className={s.ax}>pex</span>
          </h1>
          <p className={s.heroSub}>
            An animated film studio telling the stories that don&apos;t fit
            anywhere else.
          </p>
          <div className={s.heroMeta}>
            <span>
              Division <b>III</b>
            </span>
            <span>
              Format <b>Animation / Film</b>
            </span>
            <span>
              Status <b>First feature in production</b>
            </span>
          </div>
        </div>
      </section>

      {/* ── NOW IN PRODUCTION ── */}
      <section className="section container">
        <div className={s.slate}>
          <Reveal>
            <div className={s.poster} role="img" aria-label={`Placeholder poster for ${apexProduction.codename}`}>
              <div className={s.posterTop}>
                <span>MXT Apex</span>
                <span>Reel 01</span>
              </div>
              <div className={s.posterMid}>
                <div className={s.posterMark}>Project<br />Ascent</div>
                <div className={s.posterCode}>{apexProduction.codename}</div>
              </div>
              <div className={s.posterBot}>Pre-production · Artwork to come</div>
            </div>
          </Reveal>

          <Reveal delay={120} className={s.prodInfo}>
            <span className="eyebrow">Now in production</span>
            <h2 className={s.prodTitle}>{apexProduction.title}</h2>
            <div className={s.prodCode}>{apexProduction.codename}</div>
            <p className={s.prodLog}>{apexProduction.logline}</p>
            <div className={s.prodStats}>
              <div className={s.prodStat}>
                <div className={s.k}>Stage</div>
                <div className={s.v}>{apexProduction.status}</div>
              </div>
              <div className={s.prodStat}>
                <div className={s.k}>Release</div>
                <div className={s.v}>{apexProduction.eta}</div>
              </div>
              <div className={s.prodStat}>
                <div className={s.k}>Studio</div>
                <div className={s.v}>MXT Apex</div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── REEL / RELEASED ── */}
      <section className="section container">
        <Reveal>
          <span className="eyebrow">Screening room</span>
          <h2 style={{ fontSize: "clamp(2rem,5vw,3.4rem)", margin: "1rem 0 2.2rem" }}>
            Released work &amp; trailers
          </h2>
        </Reveal>

        {apexReleased.length > 0 ? (
          <Reveal className={s.reel}>
            {apexReleased.map((r) => (
              <div key={r.title} className={s.frame}>
                <div className={s.frameLabel}>
                  <span className={s.play}>▶</span>
                  {r.title} · {r.year}
                </div>
              </div>
            ))}
          </Reveal>
        ) : (
          <Reveal className={s.emptyReel}>
            <h3>The screen is warming up.</h3>
            <p>
              Apex is heads-down on its first feature. Trailers and shorts will
              premiere here as they finish — check back, or follow along from the
              contact page.
            </p>
            <div style={{ marginTop: "1.8rem" }}>
              <Link href="/contact?to=apex" className="btn">
                Follow the production →
              </Link>
            </div>
          </Reveal>
        )}
      </section>

      {/* ── TEAM / CREDITS ── */}
      <section className="section container">
        <Reveal>
          <span className="eyebrow">The team</span>
          <h2 style={{ fontSize: "clamp(2rem,5vw,3.4rem)", margin: "1rem 0 2.2rem" }}>
            Credits, so far
          </h2>
        </Reveal>
        <Reveal className={s.credits}>
          {apexTeam.map((m, i) => (
            <div key={i} className={s.credit}>
              <span className={s.creditRole}>{m.role}</span>
              <span
                className={`${s.creditName} ${m.name === "Open" ? s.open : ""}`}
              >
                {m.name === "Open" ? "Hiring" : m.name}
              </span>
            </div>
          ))}
        </Reveal>
        <p className="muted" style={{ marginTop: "1.6rem", fontSize: "0.88rem" }}>
          Animators, writers, and composers — Apex is building its roster.{" "}
          <Link href="/contact?to=apex" className="accent" style={{ textDecoration: "underline" }}>
            Introduce yourself.
          </Link>
        </p>
      </section>
    </div>
  );
}
