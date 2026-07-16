import Link from "next/link";
import Reveal from "@/components/Reveal";
import { site, divisions, mission } from "@/content/site";
import s from "./page.module.css";

const EQ_BARS = [0.5, 0.9, 0.35, 0.7, 1, 0.55, 0.8, 0.4, 0.95, 0.6, 0.75, 0.45, 0.85, 0.5, 0.7, 0.3];

const figures = [
  { num: "4", label: "Divisions" },
  { num: "2024", label: "Established" },
  { num: "5", label: "Products Built" },
  { num: "1", label: "Signal" },
];

export default function Home() {
  return (
    <>
      {/* ── HERO ────────────────────────────────────────────────────── */}
      <section className={s.hero}>
        <div className={s.heroBg} aria-hidden="true" />
        <div className={s.heroWash} aria-hidden="true" />

        <div className="container">
          <div className={s.stationBar}>
            <span className={s.onair}>
              <span className={s.led} /> On Air
            </span>
            <span className={s.barSep}>/</span>
            <span>{site.location}</span>
            <span className={s.barSep}>/</span>
            <span>Est. {site.founded}</span>
            <span className={s.barSep}>/</span>
            <span>Broadcasting on 4 channels</span>
          </div>

          <div className={s.heroInner}>
            <h1 className={s.wordmark}>
              <span className={s.mx}>MX</span>
              <span className={s.t}>T</span>
              <span className={s.prod}>Productions</span>
            </h1>

            <div className={s.signal} aria-hidden="true">
              {EQ_BARS.map((h, i) => (
                <span
                  key={i}
                  style={{
                    height: `${h * 100}%`,
                    animationDelay: `${i * 0.07}s`,
                    animationDuration: `${1.1 + (i % 4) * 0.22}s`,
                  }}
                />
              ))}
            </div>

            <div className={s.heroBottom}>
              <p className={s.heroLead}>
                One studio, four working divisions — software, a web agency, an
                animation studio, and the business that holds them together.
                Independent since {site.founded}. <b>Made in-house, end to end.</b>
              </p>
              <div className={s.heroCtas}>
                <Link href="#channels" className="btn">
                  Tune in ↓
                </Link>
                <Link href="/contact" className="btn btn-ghost">
                  Start a project
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CHANNELS ────────────────────────────────────────────────── */}
      <section id="channels" className="section container">
        <Reveal className={s.channelHead}>
          <div>
            <span className="eyebrow">The Channels</span>
            <h2 style={{ marginTop: "1rem" }}>Four divisions,<br />one frequency.</h2>
          </div>
          <p className="lead">
            Each channel runs on its own — its own work, its own look — but they
            share a signal. Tune into any of them.
          </p>
        </Reveal>

        <div className={s.channels}>
          {divisions.map((d, i) => (
            <Reveal
              key={d.slug}
              delay={i * 70}
              className={s.channel}
              style={
                {
                  ["--ch" as string]: d.accent,
                  ["--ch-soft" as string]: `${d.accent}22`,
                } as React.CSSProperties
              }
            >
              <Link
                href={d.href}
                aria-label={`${d.full} — ${d.role}`}
                style={{ display: "contents" }}
              >
                <div className={s.channelId}>
                  <div className={s.channelCall}>{d.callsign}</div>
                  <div className={s.channelStatus}>
                    <span className={s.led} /> {d.status}
                  </div>
                </div>
                <div className={s.channelMid}>
                  <div className={s.name}>{d.full}</div>
                  <div className={s.role}>{d.role}</div>
                  <p className={s.blurb}>{d.blurb}</p>
                </div>
                <span className={s.channelGo}>
                  Tune in <span className={s.arw}>→</span>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── MANIFESTO ───────────────────────────────────────────────── */}
      <section className={`section ${s.manifesto}`}>
        <div className="container">
          <div className={s.manifestoGrid}>
            <Reveal>
              <p className={s.manifestoQuote}>
                “{mission.headline.replace(/\.$/, "")}<em>.</em>”
              </p>
            </Reveal>
            <Reveal delay={120} className={s.manifestoBody}>
              <span className="eyebrow">Why MXT exists</span>
              <p style={{ marginTop: "1.4rem" }}>{mission.body}</p>
              <p>{site.description}</p>
              <Link href="/about" className="link" style={{ marginTop: "0.6rem" }}>
                Read the story <span className="arrow">↗</span>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── FIGURES ─────────────────────────────────────────────────── */}
      <section className="section-tight container">
        <Reveal className={s.figures}>
          {figures.map((f) => (
            <div key={f.label} className={s.figure}>
              <div className={s.figureNum}>{f.num}</div>
              <div className={s.figureLabel}>{f.label}</div>
            </div>
          ))}
        </Reveal>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────────── */}
      <section className={`section ${s.cta}`}>
        <div className={`container ${s.ctaInner}`}>
          <span className="eyebrow center" style={{ justifyContent: "center" }}>
            Get in touch
          </span>
          <h2>
            Let&apos;s put something <em>worth watching</em> on the air.
          </h2>
          <Link href="/contact" className="btn">
            Contact MXT →
          </Link>
        </div>
      </section>
    </>
  );
}
