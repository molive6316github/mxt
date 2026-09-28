import Wordmark from "./Wordmark";
import { divisions, products, socials, studio } from "@/content/mxt";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer id="footer" className="relative overflow-hidden border-t border-line px-4 pt-20 sm:px-8">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="display text-5xl">
              Made loud in <span className="text-signal">{studio.location.split(",")[0]}</span>.
            </p>
            <p className="mt-4 max-w-[40ch] text-fg/70">{studio.oneLiner}</p>
          </div>

          <nav aria-label="Divisions" className="md:col-span-2 md:col-start-7">
            <h2 className="eyebrow mb-4">Divisions</h2>
            <ul className="space-y-2">
              {divisions.map((d) => (
                <li key={d.slug}>
                  <a href={`/#${d.slug}`} className="hover:text-signal">MXT {d.name}</a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Products" className="md:col-span-2">
            <h2 className="eyebrow mb-4">Products</h2>
            <ul className="space-y-2">
              {products.map((p) => (
                <li key={p.name}>
                  {p.href ? (
                    <a href={p.href} target="_blank" rel="noopener noreferrer" className="hover:text-signal">
                      {p.name}
                    </a>
                  ) : (
                    <span className="text-fg/60">{p.name}</span>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Social" className="md:col-span-2">
            <h2 className="eyebrow mb-4">Elsewhere</h2>
            <ul className="space-y-2">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    {...(s.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="hover:text-signal"
                  >
                    {s.label} <span aria-hidden="true">↗</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="eyebrow mt-16 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-line py-6">
          <span>© {year} {studio.name}</span>
          <span>Est. {studio.founded}</span>
          <a href="/#top" className="hover:text-fg sm:ml-auto">Back to top ↑</a>
        </div>
      </div>

      <Wordmark className="pointer-events-none mx-auto -mb-[16vw] mt-6 block w-[92vw] max-w-[1400px] sm:-mb-[14vw] select-none text-fg/[0.06]" />
    </footer>
  );
}
