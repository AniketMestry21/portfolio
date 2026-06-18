import { skillGroups } from "../lib/data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Skills() {
  return (
    <section id="skills" className="shell scroll-mt-24 py-24 sm:py-32">
      <SectionHeading index="02" kicker="What I work with" title="The toolkit" />

      <div className="mt-10">
        {skillGroups.map((group, i) => (
          <Reveal key={group.title} delay={(i % 3) * 0.06}>
            <div className="group grid grid-cols-1 gap-3 border-b border-line/10 py-7 md:grid-cols-[0.5fr_2fr] md:items-baseline md:gap-10">
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-xs text-clay">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-lg text-bone transition-colors group-hover:text-clay">
                  {group.title}
                </h3>
              </div>

              <ul className="flex flex-wrap items-baseline gap-x-1.5 gap-y-2">
                {group.items.map((item, j) => (
                  <li
                    key={item}
                    className="text-bone-muted transition-colors hover:text-bone"
                  >
                    {item}
                    {j < group.items.length - 1 && (
                      <span className="ml-1.5 text-bone-dim/50">/</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
