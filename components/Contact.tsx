import { studio } from "@/content/mxt";
import Reveal from "./Reveal";
import WorkForm from "./WorkForm";

const perks = [
  "You talk to the person writing the code",
  "Custom builds — no theme-store templates",
  "Fast, mobile-first, SEO baked in",
  "You own the code, the domain, the data",
];

export default function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="px-4 py-24 sm:px-8 sm:py-36">
      <div className="mx-auto grid max-w-[1400px] gap-14 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <p className="eyebrow mb-5">
            <span className="text-signal">§04</span> — Work with us / MXT mCloud
          </p>
          <h2 id="contact-title" className="display text-[clamp(3.2rem,8vw,6.5rem)]">
            Your business deserves a site that{" "}
            <span className="text-mcloud">doesn&apos;t suck.</span>
          </h2>
          <p className="mt-6 max-w-[44ch] text-lg leading-relaxed text-fg/80">
            mCloud builds websites, web apps and the digital bits in between for small businesses.
            Tell us what you&apos;ve got and we&apos;ll tell you, honestly, what it&apos;d take.
          </p>
          <ul className="mt-8 space-y-3">
            {perks.map((p) => (
              <li key={p} className="flex gap-3">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-mcloud" aria-hidden="true" />
                {p}
              </li>
            ))}
          </ul>
          <p className="mt-10 text-fg/70">
            Rather email?{" "}
            <a href={`mailto:${studio.email}`} className="text-fg underline decoration-signal underline-offset-4">
              {studio.email}
            </a>
          </p>
        </Reveal>

        <Reveal delay={0.1} className="relative lg:col-span-6 lg:col-start-7">
          <WorkForm />
        </Reveal>
      </div>
    </section>
  );
}
