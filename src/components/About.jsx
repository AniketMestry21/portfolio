import { facts, profile } from "../data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="shell section">
      <SectionHeading index="01" kicker="Introduction" title="About me" />

      <div className="about__grid">
        <Reveal>
          <div className="about__letter">
            {profile.letter.map((para, i) => (
              <p key={i} className={i === 0 ? "about__lead" : ""}>
                {para}
              </p>
            ))}
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="card facts">
            <p className="mono dim facts__label">At a glance</p>
            <dl className="facts__list">
              {facts.map(([k, v]) => (
                <div className="facts__row" key={k}>
                  <dt className="mono dim">{k}</dt>
                  <dd>{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
