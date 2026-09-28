import { artists } from "@/content/mxt";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";

const sleeves = [
  { bg: "#c8f23a", ink: "#0c0b09", label: "#ff7a2e" },
  { bg: "var(--fg)", ink: "var(--bg)", label: "#ff5a93" },
];

const disc = (label: string): React.CSSProperties => ({
  background: `radial-gradient(circle, #0c0b09 0 3%, ${label} 3.5% 30%, #0c0b09 30.5% 33%, transparent 33.5%),
    repeating-radial-gradient(circle, #161513 0 2px, #0c0b09 2px 4px)`,
});

export default function Music() {
  return (
    <section
      id="music"
      aria-labelledby="music-title"
      className="relative border-y border-line bg-bg-2 px-4 py-24 sm:px-8 sm:py-36"
    >
      <div className="mx-auto max-w-[1400px]">
        <SectionHead
          id="music-title"
          index="03"
          kicker="MXT Apex / Music"
          title={
            <>
              Put your
              <br />
              <span className="text-records">headphones</span> on.
            </>
          }
          aside={
            <p className="text-lg leading-relaxed">
              The label side of MXT. Two artists, self-released via DistroKid, streaming
              everywhere you already listen.
            </p>
          }
        />

        <div className="mt-14 grid gap-16 md:grid-cols-2 md:gap-10">
          {artists.map((a, i) => {
            const s = sleeves[i % sleeves.length];
            return (
              <Reveal key={a.name} delay={i * 0.1}>
                <article aria-labelledby={`artist-${i}`} className="group">
                  <div className="relative w-[78%]">
                    {/* the record sliding out of its sleeve */}
                    <div
                      aria-hidden="true"
                      className="absolute inset-[4%] rounded-full shadow-2xl ring-1 ring-white/10 transition-transform duration-700 ease-[cubic-bezier(.22,1,.36,1)] translate-x-[16%] group-hover:translate-x-[34%]"
                    >
                      <div
                        className="size-full rounded-full animate-[spin_6s_linear_infinite] [animation-play-state:paused] group-hover:[animation-play-state:running]"
                        style={disc(s.label)}
                      />
                    </div>
                    <div
                      className="relative flex aspect-square flex-col justify-between p-6 shadow-xl sm:p-8"
                      style={{ background: s.bg, color: s.ink }}
                    >
                      <div className="flex justify-between font-mono text-[0.68rem] uppercase tracking-[0.16em]">
                        <span>MXT Apex</span>
                        <span>CAT-00{i + 1}</span>
                      </div>
                      <h3
                        id={`artist-${i}`}
                        className="display break-words text-[clamp(3rem,9vw,6.5rem)] normal-case"
                      >
                        {a.name}
                      </h3>
                    </div>
                  </div>

                  <p className="mt-8 max-w-[40ch] text-lg text-fg/80">{a.blurb}</p>
                  <ul className="mt-5 flex flex-wrap gap-2" aria-label={`Listen to ${a.name}`}>
                    {a.links.map((l) => (
                      <li key={l.label}>
                        <a
                          href={l.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-sm transition-colors hover:border-fg hover:bg-fg hover:text-bg"
                        >
                          {l.label} <span aria-hidden="true">↗</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            );
          })}
        </div>

        <p className="eyebrow mt-16">Distributed via DistroKid · © MXT Apex</p>
      </div>
    </section>
  );
}
