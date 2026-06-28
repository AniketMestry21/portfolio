import { projects } from "../data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  return (
    <section id="projects" className="shell section">
      <SectionHeading index="04" kicker="Portfolio" title="Selected work" />

      <div className="projects">
        {projects.map((p) => (
          <Reveal key={p.name}>
            <article className="card project">
              <span className="project__ghost" aria-hidden="true">
                {p.index}
              </span>

              <div className="project__inner">
                <div className="project__left">
                  <div className="project__tag">
                    <span className="mono accent">{p.category}</span>
                  </div>
                  <h3 className="project__name">{p.name}</h3>
                  <p className="project__summary">{p.summary}</p>
                  <div className="project__stack">
                    {p.stack.map((s) => (
                      <span className="mono dim" key={s}>
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <ul className="project__highlights">
                  {p.highlights.map((h, j) => (
                    <li key={j}>
                      <span className="mono accent">
                        {String(j + 1).padStart(2, "0")}
                      </span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
