import { divisions } from "@/content/mxt";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";

export default function Divisions() {
  return (
    <section id="divisions" aria-labelledby="divisions-title" className="px-4 py-24 sm:px-8 sm:py-36">
      <div className="mx-auto max-w-[1400px]">
        <SectionHead
          id="divisions-title"
          index="01"
          kicker="The divisions"
          title={
            <>
              One studio,
              <br />
              <span className="text-signal">three</span> side quests.
            </>
          }
          aside={
            <p className="text-lg leading-relaxed">
              MXT isn&apos;t one thing, on purpose. Client work pays for the weird experiments,
              the experiments become products, and the music keeps everyone sane.
            </p>
          }
        />

        <div>
          {divisions.map((d, i) => (
            <Reveal key={d.slug} delay={i * 0.05} y={20}>
              <article
                id={d.slug}
                aria-labelledby={`div-${d.slug}`}
                style={{ "--dc": d.color } as React.CSSProperties}
                className="group relative isolate scroll-mt-20 border-b border-line"
              >
                {/* colour flood on hover (desktop only — touch gets the static version) */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 -z-10 hidden origin-bottom scale-y-0 bg-[var(--dc)] transition-transform duration-500 ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-y-100 group-focus-within:scale-y-100 md:block"
                />
                <div className="grid gap-5 py-8 transition-colors duration-300 md:grid-cols-12 md:gap-8 md:px-4 md:py-10 md:group-hover:text-bg md:group-focus-within:text-bg">
                  <div className="flex items-center justify-between md:col-span-1 md:block">
                    <span className="font-mono text-sm text-muted transition-colors md:group-hover:text-bg/70">
                      {d.index}
                    </span>
                    <span className="eyebrow flex items-center gap-2 md:hidden">
                      <span className="size-1.5 rounded-full bg-[var(--dc)]" />
                      {d.status}
                    </span>
                  </div>

                  <div className="md:col-span-4">
                    <h3
                      id={`div-${d.slug}`}
                      className="display text-6xl text-[var(--dc)] transition-colors sm:text-7xl lg:text-8xl md:group-hover:text-bg md:group-focus-within:text-bg"
                    >
                      {d.name}
                    </h3>
                    <p className="eyebrow mt-3 transition-colors md:group-hover:text-bg/70">
                      MXT {d.name} / {d.role}
                    </p>
                  </div>

                  <div className="md:col-span-5">
                    <p className="text-xl font-semibold leading-snug sm:text-2xl">{d.pitch}</p>
                    <p className="mt-3 max-w-[52ch] leading-relaxed text-fg/70 transition-colors md:group-hover:text-bg/80">
                      {d.body}
                    </p>
                    {d.units && (
                      <ul className="mt-5 space-y-2 border-l-2 border-[var(--dc)] pl-4 transition-colors md:group-hover:border-bg">
                        {d.units.map((u) => (
                          <li key={u.name} className="text-sm">
                            {u.href ? (
                              <a href={u.href} className="font-semibold underline decoration-1 underline-offset-4">
                                {u.name}
                              </a>
                            ) : (
                              <span className="font-semibold">{u.name}</span>
                            )}
                            <span className="text-fg/65 transition-colors md:group-hover:text-bg/75"> — {u.note}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  <div className="flex flex-col justify-between gap-4 md:col-span-2 md:items-end">
                    <span className="eyebrow hidden items-center gap-2 transition-colors md:flex md:group-hover:text-bg/70">
                      <span className="size-1.5 rounded-full bg-[var(--dc)] md:group-hover:bg-bg" />
                      {d.status}
                    </span>
                    <a
                      href={d.cta.href}
                      className="inline-flex items-center gap-2 font-medium underline decoration-1 underline-offset-4 md:no-underline"
                    >
                      {d.cta.label}
                      <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
                        →
                      </span>
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
