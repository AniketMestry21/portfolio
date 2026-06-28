import { education, experience } from "../data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section id="work" className="shell section">
      <SectionHeading index="03" kicker="Career" title="Experience" />

      <div className="exp">
        {experience.map((job) => (
          <Reveal key={job.company}>
            <article className="exp__row">
              <div className="exp__meta">
                <div className="exp__period">
                  <span className="mono dim">{job.period}</span>
                  {job.current && <span className="badge">Now</span>}
                </div>
                <h3 className="exp__company">{job.company}</h3>
                <p className="exp__role">{job.role}</p>
                <p className="mono dim exp__loc">{job.location}</p>
              </div>

              <div className="exp__body">
                <ul className="exp__points">
                  {job.points.map((p, j) => (
                    <li key={j}>
                      <span className="exp__tick"></span>
                      {p}
                    </li>
                  ))}
                </ul>
                <div className="exp__stack">
                  {job.stack.map((s) => (
                    <span className="mono dim" key={s}>
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </Reveal>
        ))}

        <Reveal>
          <article className="exp__row exp__row--edu">
            <div className="exp__meta">
              <span className="mono dim">{education.period}</span>
              <h3 className="exp__company">Education</h3>
              <p className="exp__role">{education.degree}</p>
            </div>
            <div className="exp__body exp__body--edu">
              <p className="exp__edu-name">{education.institution}</p>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
