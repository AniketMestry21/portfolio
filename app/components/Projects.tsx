"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "../lib/data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  return (
    <section id="projects" className="shell scroll-mt-24 py-24 sm:py-32">
      <SectionHeading
        index="04"
        kicker="A few things I've shipped"
        title="Selected work"
      />

      <div className="mt-12 space-y-6">
        {projects.map((p, i) => (
          <Reveal key={p.name} delay={i * 0.06}>
            <motion.article
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 260, damping: 24 }}
              className="group relative overflow-hidden rounded-3xl border border-line/10 bg-ink-900 p-8 sm:p-12"
            >
              {/* oversized ghost numeral */}
              <span
                aria-hidden
                className="pointer-events-none absolute -right-4 -top-10 select-none text-[10rem] font-semibold leading-none text-line/[0.03] sm:text-[16rem]"
              >
                {p.index}
              </span>

              <div className="relative grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:gap-14">
                {/* Left: identity */}
                <div>
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs uppercase tracking-[0.14em] text-clay">
                      {p.category}
                    </span>
                    <span className="font-mono text-xs text-bone-dim">
                      · {p.year}
                    </span>
                  </div>

                  <div className="mt-4 flex items-start gap-4">
                    <h3 className="text-4xl font-medium tracking-[-0.02em] text-bone sm:text-6xl">
                      {p.name}
                    </h3>
                    {p.note && (
                      <span className="mt-2 -rotate-6 font-hand text-xl leading-tight text-clay">
                        {p.note}
                      </span>
                    )}
                  </div>

                  <p className="mt-6 max-w-md leading-relaxed text-bone-muted">
                    {p.summary}
                  </p>

                  <ul className="mt-6 flex flex-wrap items-baseline gap-x-1.5 gap-y-1">
                    {p.stack.map((s, j) => (
                      <li key={s} className="font-mono text-xs text-bone-dim">
                        {s}
                        {j < p.stack.length - 1 && (
                          <span className="ml-1.5 text-bone-dim/40">·</span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right: highlights */}
                <ul className="space-y-3.5 lg:border-l lg:border-line/10 lg:pl-14">
                  {p.highlights.map((h, j) => (
                    <li key={j} className="flex gap-3 text-sm text-bone-muted">
                      <span className="mt-1.5 font-mono text-[0.7rem] text-clay">
                        {String(j + 1).padStart(2, "0")}
                      </span>
                      <span className="leading-relaxed">{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
