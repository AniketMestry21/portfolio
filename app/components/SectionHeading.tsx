import Reveal from "./Reveal";

type Props = {
  index: string;
  kicker: string;
  title: string;
};

/**
 * Numbered, editorial section header: "01 / About" with a hairline rule.
 */
export default function SectionHeading({ index, kicker, title }: Props) {
  return (
    <Reveal>
      <div className="flex items-end justify-between gap-6 border-b border-line/10 pb-6">
        <div className="flex items-baseline gap-4">
          <span className="label text-clay">{index}</span>
          <span className="label">/ {kicker}</span>
        </div>
        <h2 className="text-3xl font-medium tracking-[-0.02em] text-bone sm:text-4xl">
          {title}
        </h2>
      </div>
    </Reveal>
  );
}
