import { education, experience } from "../lib/data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section id="work" className="shell scroll-mt-24 py-24 sm:py-32">
      <SectionHeading index="03" kicker="Career" title="Experience" />

      <div className="mt-8">
        {experience.map((job, i) => (
          <Reveal key={job.company} delay={i * 0.05}>
            <article className="group grid gap-6 border-b border-line/10 py-10 md:grid-cols-[0.8fr_2fr] md:gap-12">
              <div>
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs uppercase tracking-[0.14em] text-bone-dim">
                    {job.period}
                  </span>
                  {job.current && (
                    <span className="rounded-full border border-clay/40 bg-clay/10 px-2 py-0.5 font-mono text-[0.6rem] uppercase tracking-[0.14em] text-clay">
                      Now
                    </span>
                  )}
                </div>
                <h3 className="mt-4 font-serif text-2xl text-bone">
                  {job.company}
                </h3>
                <p className="mt-1 text-sm text-bone-muted">{job.role}</p>
                <p className="mt-0.5 font-mono text-xs text-bone-dim">
                  {job.location}
                </p>
              </div>

              <div>
                <ul className="space-y-3">
                  {job.points.map((p, j) => (
                    <li key={j} className="flex gap-3 text-bone-muted">
                      <span className="mt-2.5 h-px w-4 shrink-0 bg-clay/60" />
                      <span className="leading-relaxed">{p}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex flex-wrap gap-2">
                  {job.stack.map((s) => (
                    <span
                      key={s}
                      className="font-mono text-[0.7rem] uppercase tracking-[0.1em] text-bone-dim"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </Reveal>
        ))}

        {/* Education row, same ledger rhythm */}
        <Reveal>
          <article className="grid gap-6 py-10 md:grid-cols-[0.8fr_2fr] md:gap-12">
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.14em] text-bone-dim">
                {education.period}
              </span>
              <h3 className="mt-4 font-serif text-2xl text-bone">Education</h3>
              <p className="mt-1 text-sm text-bone-muted">{education.degree}</p>
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-lg leading-relaxed text-bone">
                {education.institution}
              </p>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
