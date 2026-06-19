"use client";

import { motion } from "framer-motion";
import { skillGroups } from "../lib/data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Skills() {
  return (
    <section id="skills" className="shell scroll-mt-24 py-24 sm:py-32">
      <SectionHeading index="02" kicker="Capabilities" title="Skills & tools" />

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => (
          <Reveal key={group.title} delay={(i % 3) * 0.08}>
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 260, damping: 24 }}
              className="group flex h-full flex-col rounded-2xl border border-line/10 bg-ink-900 p-7 transition-colors hover:border-clay/30"
            >
              {/* Card header */}
              <div className="flex items-center justify-between border-b border-line/10 pb-4">
                <h3 className="text-lg font-medium text-bone transition-colors group-hover:text-clay">
                  {group.title}
                </h3>
                <span className="font-mono text-xs text-bone-dim">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Items */}
              <ul className="mt-5 flex flex-col gap-2.5">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2.5 text-[0.95rem] text-bone-muted"
                  >
                    <span className="h-1 w-1 shrink-0 rounded-full bg-clay/70" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
