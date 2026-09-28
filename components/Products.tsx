import { products, type Product } from "@/content/mxt";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";

const statusColor: Record<Product["status"], string> = {
  Live: "var(--c-records)",
  Beta: "var(--c-mcloud)",
  "In development": "var(--c-dev)",
  Concept: "var(--c-apex)",
};

function ProductCard({ p, n }: { p: Product; n: number }) {
  const external = p.href?.startsWith("http");
  return (
    <article
      aria-labelledby={`prd-${n}`}
      className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-bg-2 p-6 transition-[transform,border-color] duration-300 hover:-translate-y-1 hover:border-fg/40 sm:p-8`}
    >
      <header className="eyebrow flex flex-wrap items-center gap-x-4 gap-y-1">
        <span>PRD-{String(n).padStart(2, "0")}</span>
        <span>{p.kind}</span>
        <span className="ml-auto flex items-center gap-2 text-fg">
          <span className="size-1.5 rounded-full" style={{ background: statusColor[p.status] }} />
          {p.status}
        </span>
      </header>

      <div className={p.flagship ? "mt-8 grid gap-8 md:grid-cols-2 md:items-start" : "mt-8"}>
        <div>
          <h3 id={`prd-${n}`} className="display text-5xl sm:text-6xl">
            {p.href ? (
              <a
                href={p.href}
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="after:absolute after:inset-0 after:content-['']"
              >
                {p.name}
              </a>
            ) : (
              p.name
            )}
          </h3>
          {p.flagship && <p className="eyebrow mt-2 text-signal">Flagship</p>}
          <p className="mt-4 max-w-[48ch] leading-relaxed text-fg/75">{p.description}</p>
        </div>

        {p.flagship && (
          <div
            aria-hidden="true"
            className="rounded-xl border border-line bg-bg p-5 font-mono text-[0.78rem] leading-7 text-fg/80"
          >
            <p className="text-muted">$ gatekey auth --methods</p>
            <p><span className="text-records">✓</span> discord oauth</p>
            <p><span className="text-records">✓</span> oauth providers ×4</p>
            <p><span className="text-records">✓</span> totp · recovery codes</p>
            <p><span className="text-records">✓</span> passkeys (webauthn)</p>
            <p><span className="text-records">✓</span> hash: argon2id</p>
            <p className="text-muted">
              ready<span className="blink">_</span>
            </p>
          </div>
        )}
      </div>

      <footer className="mt-auto pt-8">
        <ul className="flex flex-wrap gap-2" aria-label={`${p.name} tech stack`}>
          {p.stack.map((s) => (
            <li key={s} className="badge">
              {s}
            </li>
          ))}
        </ul>
        <div className="mt-6 flex items-end justify-between gap-4 border-t border-line pt-5">
          {p.stat ? (
            <p>
              <span className="display block text-4xl text-signal">{p.stat.value}</span>
              <span className="eyebrow">{p.stat.label}</span>
            </p>
          ) : (
            <span className="eyebrow">{p.href ? "Try it" : "No public link yet"}</span>
          )}
          {p.href && (
            <span className="flex items-center gap-2 font-mono text-sm">
              {p.linkLabel}
              <span
                aria-hidden="true"
                className="grid size-9 place-items-center rounded-full border border-line transition-all duration-300 group-hover:rotate-[-45deg] group-hover:border-signal group-hover:bg-signal group-hover:text-bg"
              >
                →
              </span>
            </span>
          )}
        </div>
      </footer>
    </article>
  );
}

export default function Products() {
  return (
    <section id="products" aria-labelledby="products-title" className="px-4 py-24 sm:px-8 sm:py-36">
      <div className="mx-auto max-w-[1400px]">
        <SectionHead
          id="products-title"
          index="02"
          kicker="Built by MXT Dev"
          title={
            <>
              Stuff we <span className="text-signal">shipped</span>
              <br />
              (and stuff we will).
            </>
          }
          aside={
            <p className="text-lg leading-relaxed">
              Real products with real users. Every one of these was designed, built and deployed
              in-house — no outsourcing, no templates, no excuses.
            </p>
          }
        />

        <ul className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {products.map((p, i) => (
            <Reveal
              as="li"
              key={p.name}
              delay={(i % 3) * 0.08}
              className={p.flagship ? "md:col-span-2" : ""}
            >
              <ProductCard p={p} n={i + 1} />
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
