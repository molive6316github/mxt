import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import {
  mcloudServices,
  mcloudTiers,
  mcloudSetup,
  mcloudWhy,
} from "@/content/site";
import s from "./page.module.css";

export const metadata: Metadata = {
  title: "mCloud — Web Agency",
  description:
    "MXT mCloud builds websites that close deals. Custom design, build, and managed hosting from $200/mo. Setup fee waived with a contract.",
};

export default function MCloudPage() {
  return (
    <div data-division="mcloud">
      {/* ── HERO ── */}
      <section className={s.hero}>
        <div className={s.heroWash} aria-hidden="true" />
        <div className={`container ${s.heroInner}`}>
          <div className={s.callrow}>
            <span className="callsign">MXT-02</span>
            <span className="pill on">
              <span className="dot" /> Taking clients
            </span>
          </div>
          <h1>
            Websites that
            <br />
            <em>close the deal</em>.
          </h1>
          <p className={s.heroLead}>
            MXT mCloud is the studio&apos;s web agency. We design, build, host,
            and maintain sites for businesses that need to look inevitable
            online. <b>No templates. No page-builders. No handoffs.</b>
          </p>
          <div className={s.heroCtas}>
            <Link href="#pricing" className="btn">
              See pricing ↓
            </Link>
            <Link href="#start" className="btn btn-ghost">
              Get a quote
            </Link>
          </div>

          <div className={s.trust}>
            <div>
              <div className={s.n}>$200</div>
              <div className={s.l}>Starting / month</div>
            </div>
            <div>
              <div className={s.n}>1</div>
              <div className={s.l}>Team, start to finish</div>
            </div>
            <div>
              <div className={s.n}>100%</div>
              <div className={s.l}>You own it</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="section container">
        <Reveal>
          <span className="eyebrow">What we do</span>
          <h2 style={{ fontSize: "clamp(2rem,5vw,3.4rem)", margin: "1rem 0 2.5rem" }}>
            The whole site, handled.
          </h2>
        </Reveal>
        <Reveal className={s.services}>
          {mcloudServices.map((sv, i) => (
            <div key={sv.title} className={s.service}>
              <div className={s.serviceNum}>0{i + 1}</div>
              <h3>{sv.title}</h3>
              <p>{sv.body}</p>
            </div>
          ))}
        </Reveal>
      </section>

      {/* ── PRICING ── */}
      <section id="pricing" className="section container">
        <Reveal className={s.pricingHead}>
          <span className="eyebrow center" style={{ justifyContent: "center" }}>
            Pricing
          </span>
          <h2>Flat monthly, no surprises.</h2>
          <p>
            Pick a tier and we handle the rest — design, build, hosting, and
            updates rolled into one predictable price.
          </p>
        </Reveal>

        <Reveal className={s.tiers}>
          {mcloudTiers.map((t) => (
            <div
              key={t.name}
              className={`${s.tier} ${t.highlight ? s.featured : ""}`}
            >
              {t.highlight && <span className={s.tierFlag}>Most popular</span>}
              <div className={s.tierName}>{t.name}</div>
              <div className={s.tierPrice}>
                <span className={s.amt}>{t.price}</span>
                <span className={s.cad}>{t.cadence}</span>
              </div>
              <p className={s.tierTag}>{t.tagline}</p>
              <ul className={s.tierFeatures}>
                {t.features.map((ft) => (
                  <li key={ft}>{ft}</li>
                ))}
              </ul>
              <Link
                href="#start"
                className={t.highlight ? "btn" : "btn btn-ghost"}
              >
                Start with {t.name}
              </Link>
            </div>
          ))}
        </Reveal>

        <Reveal className={s.setup}>
          <span>
            One-time setup: <span className={s.strike}>{mcloudSetup.fee}</span>
          </span>
          <span className={s.waived}>Waived with a contract</span>
          <span style={{ color: "var(--ash-dim)", fontSize: "0.8rem" }}>
            {mcloudSetup.note}
          </span>
        </Reveal>
      </section>

      {/* ── WHY US ── */}
      <section className="section container">
        <div className={s.why}>
          <Reveal>
            <span className="eyebrow">Why mCloud</span>
            <h2
              style={{ fontSize: "clamp(2rem,5vw,3.4rem)", marginTop: "1rem", lineHeight: 1 }}
            >
              A real team,
              <br />
              not a portal.
            </h2>
            <p className="muted" style={{ marginTop: "1.2rem", maxWidth: "32ch" }}>
              You get people who answer emails and code that you keep. Here&apos;s
              what that actually means.
            </p>
          </Reveal>
          <Reveal delay={100} className={s.whyList}>
            {mcloudWhy.map((w) => (
              <div key={w.k} className={s.whyItem}>
                <h3>{w.k}</h3>
                <p>{w.v}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ── LEAD FORM ── */}
      <section id="start" className="section container">
        <Reveal className={s.leadWrap}>
          <div className={s.leadCopy}>
            <span className="eyebrow">Start a project</span>
            <h2 style={{ marginTop: "1rem" }}>
              Tell us about your business.
            </h2>
            <p>
              A few details and we&apos;ll come back with a plan and a quote —
              usually within a day or two. No pressure, no sales script.
            </p>
            <ul className={s.leadPoints}>
              <li>Free first consult</li>
              <li>Setup fee waived on contract</li>
              <li>You own everything we build</li>
            </ul>
          </div>
          <ContactForm variant="lead" defaultTo="mcloud" />
        </Reveal>
      </section>
    </div>
  );
}
