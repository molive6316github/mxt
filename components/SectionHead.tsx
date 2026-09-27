import Reveal from "./Reveal";

type Props = {
  index: string;
  kicker: string;
  title: React.ReactNode;
  id: string;
  aside?: React.ReactNode;
};

export default function SectionHead({ index, kicker, title, id, aside }: Props) {
  return (
    <div className="grid gap-6 border-b border-line pb-8 lg:grid-cols-12 lg:items-end">
      <Reveal className="lg:col-span-8">
        <p className="eyebrow mb-5">
          <span className="text-signal">§{index}</span> — {kicker}
        </p>
        <h2 id={id} className="display text-[clamp(3rem,9vw,7.5rem)]">
          {title}
        </h2>
      </Reveal>
      {aside && (
        <Reveal delay={0.1} className="text-fg/75 lg:col-span-4 lg:pb-3">
          {aside}
        </Reveal>
      )}
    </div>
  );
}
