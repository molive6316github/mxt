const items = [
  "GateKey",
  "Grraphic",
  "Pi Live",
  "Rootweave",
  "Drifthost",
  "mCloud",
  "Apex",
  "Records",
  "Dev",
];

/** Endless ticker of everything under the MXT roof. Pure CSS. */
export default function Marquee() {
  const row = (hidden: boolean) => (
    <ul className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {items.map((it) => (
        <li key={it} className="display flex items-center text-4xl sm:text-6xl">
          <span className="px-6 sm:px-10">{it}</span>
          <span className="text-bg/60" aria-hidden="true">✺</span>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="overflow-hidden py-3">
    <div className="relative -mx-4 -rotate-1 overflow-hidden border-y border-line bg-signal py-4 text-bg sm:py-5">
      <div className="marquee-track flex w-max">
        {row(false)}
        {row(true)}
      </div>
    </div>
    </div>
  );
}
