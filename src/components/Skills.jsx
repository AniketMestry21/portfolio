import { skillGroups } from "../data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Skills() {
  return (
    <section id="skills" className="shell section">
      <SectionHeading index="02" kicker="Capabilities" title="Skills & tools" />

      <div className="skills__grid">
        {skillGroups.map((group, i) => (
          <Reveal key={group.title} delay={(i % 3) * 80}>
            <div className="card skill-card">
              <div className="skill-card__head">
                <h3>{group.title}</h3>
                <span className="mono dim">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <ul className="skill-card__list">
                {group.items.map((item) => (
                  <li key={item}>
                    <span className="dot"></span>
                    {item}
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
