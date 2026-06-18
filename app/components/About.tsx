import { facts, profile } from "../lib/data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="shell scroll-mt-24 py-24 sm:py-32">
      <SectionHeading index="01" kicker="About" title="A bit about me" />

      <div className="mt-14 grid gap-14 md:grid-cols-[1.3fr_1fr] md:gap-20">
        {/* The letter */}
        <Reveal>
          <p className="font-hand text-3xl text-clay">So, hi —</p>
          <div className="mt-5 space-y-5">
            {profile.letter.map((para, i) => (
              <p
                key={i}
                className={
                  i === 0
                    ? "text-2xl leading-snug text-bone"
                    : "text-base leading-relaxed text-bone-muted"
                }
              >
                {para}
              </p>
            ))}
          </div>
          <p className="mt-8 font-hand text-3xl text-bone-muted">
            — Aniket
          </p>
        </Reveal>

        {/* Notebook of facts */}
        <Reveal delay={0.1}>
          <div className="rounded-2xl border border-line/10 bg-ink-900/60 p-7">
            <p className="label mb-6 text-bone-dim">The quick facts</p>
            <dl className="divide-y divide-line/10">
              {facts.map(([k, v]) => (
                <div key={k} className="flex items-baseline gap-4 py-3.5">
                  <dt className="w-28 shrink-0 font-mono text-[0.7rem] uppercase tracking-[0.14em] text-bone-dim">
                    {k}
                  </dt>
                  <dd className="text-[0.95rem] leading-snug text-bone">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
