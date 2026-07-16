import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { projects } from "@/content/site";
import s from "./page.module.css";

export const metadata: Metadata = {
  title: "Dev — Software & Product",
  description:
    "MXT Dev is the in-house engineering division — web apps, developer tools, and internal products built end to end.",
};

const badgeClass: Record<string, string> = {
  Live: "live",
  Beta: "beta",
  "In Development": "dev",
  Internal: "dev",
};

const caps = [
  { h: "Full-stack builds", p: "From database to interface — we design, build, and ship complete products, not just front ends." },
  { h: "Developer tooling", p: "The tools we wished existed. We build for the workflow first and polish the surface second." },
  { h: "AI where it earns it", p: "Language models wired into real products where they save real time — never as a gimmick." },
];

export default function DevPage() {
  return (
    <div data-division="dev">
      {/* ── HERO ── */}
      <section className={s.hero}>
        <div className="container">
          <div className={s.heroGrid}>
            <Reveal>
              <div className={s.callrow}>
                <span className="callsign">MXT-01</span>
                <span className="pill on">
                  <span className="dot" /> On Air
                </span>
              </div>
              <h1>
                We build<br />
                the <span className={s.u}>software</span>.
              </h1>
              <p className={s.heroLead}>
                MXT Dev is the engineering core of the studio. We design and
                ship web apps, developer tools, and the internal products that
                run MXT itself. <b>Everything here was built in-house.</b>
              </p>
              <div style={{ display: "flex", gap: "0.8rem", flexWrap: "wrap" }}>
                <Link href="#work" className="btn">
                  See the work ↓
                </Link>
                <Link href="/contact?to=dev" className="btn btn-ghost">
                  Build with us
                </Link>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className={s.term} role="img" aria-label="Terminal showing an MXT Dev build log">
                <div className={s.termBar}>
                  <span className={s.dots}>
                    <i />
                    <i />
                    <i />
                  </span>
                  <span className={s.title}>mxt-dev — build</span>
                </div>
                <div className={s.termBody}>
                  <div className={s.line}>
                    <span className={s.p}>mxt</span> <span className={s.dim}>~/studio</span> $ ./build --all
                  </div>
                  <div className={s.line}>
                    <span className={s.dim}>›</span> compiling <span className={s.b}>readmake</span> <span className={s.ok}>✓ live</span>
                  </div>
                  <div className={s.line}>
                    <span className={s.dim}>›</span> compiling <span className={s.b}>KALbot</span> <span className={s.ok}>✓ live</span>
                  </div>
                  <div className={s.line}>
                    <span className={s.dim}>›</span> compiling <span className={s.b}>Pixel</span> <span className={s.ok}>✓ beta</span>
                  </div>
                  <div className={s.line}>
                    <span className={s.dim}>›</span> linking <span className={s.b}>Rootweave</span> <span className={s.dim}>… building</span>
                  </div>
                  <div className={s.line}>
                    <span className={s.dim}>›</span> booting <span className={s.b}>prodpad</span> <span className={s.dim}>… internal</span>
                  </div>
                  <div className={s.line}>
                    <span className={s.ok}>done.</span> 5 products in the tree.
                  </div>
                  <div className={s.line}>
                    <span className={s.p}>mxt</span> <span className={s.dim}>~/studio</span> $ <span className={s.cursor} />
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── BUILD LOG / PORTFOLIO ── */}
      <section id="work" className="section container">
        <Reveal className={s.logHead}>
          <div>
            <span className="eyebrow">Build Log</span>
            <h2 style={{ marginTop: "1rem" }}>Products in the tree</h2>
          </div>
          <p className="lead">
            Five projects, from shipped tools to the platform tying them
            together. Each one solves a problem we actually had.
          </p>
        </Reveal>

        <div className={s.log}>
          {projects.map((p, i) => (
            <Reveal key={p.name} delay={i * 60} className={s.entry}>
              <div className={s.entryMeta}>
                <span className={s.hash}>
                  {String(i + 1).padStart(2, "0")}/{projects.length}
                </span>
                {p.tag}
                <span className={s.year}>{p.year}</span>
              </div>
              <div>
                <div className={s.entryTop}>
                  <span className={s.entryName}>{p.name}</span>
                  <span className={`${s.badge} ${s[badgeClass[p.status]]}`}>
                    {p.status}
                  </span>
                </div>
                <p className={s.entrySummary}>{p.summary}</p>
                <p className={s.entryDetail}>{p.detail}</p>
                <div className={s.stack}>
                  {p.stack.map((t) => (
                    <span key={t} className={s.chip}>
                      {t}
                    </span>
                  ))}
                  {p.href && (
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`link ${s.entryLink}`}
                    >
                      Visit <span className="arrow">↗</span>
                    </a>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── CAPABILITIES ── */}
      <section className="section-tight container">
        <Reveal>
          <span className="eyebrow">How we build</span>
        </Reveal>
        <Reveal className={s.caps} style={{ marginTop: "1.6rem" }}>
          {caps.map((c) => (
            <div key={c.h} className={s.cap}>
              <h3>{c.h}</h3>
              <p>{c.p}</p>
            </div>
          ))}
        </Reveal>
      </section>

      {/* ── CTA ── */}
      <section className="section container" style={{ textAlign: "center" }}>
        <Reveal>
          <h2 style={{ fontSize: "clamp(2rem, 6vw, 4rem)", lineHeight: 1 }}>
            Got something to build?
          </h2>
          <p className="lead" style={{ margin: "1.2rem auto 2rem" }}>
            Product ideas, tools, integrations — if it ships, we&apos;re interested.
          </p>
          <Link href="/contact?to=dev" className="btn">
            Talk to MXT Dev →
          </Link>
        </Reveal>
      </section>
    </div>
  );
}
