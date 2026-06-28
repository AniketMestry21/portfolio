import { profile } from "../data";
import { ArrowDownRight, ArrowUpRight } from "./Icons";

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero__glow" aria-hidden="true"></div>

      <div className="shell hero__inner">
        <p className="hero__greeting">
          Hi, I&apos;m <span className="hero__name">{profile.name}</span>.
        </p>

        <h1 className="hero__title">
          <span className="line line-1">
            <span className="underline-word">Reliable</span>
          </span>
          <span className="line line-2">software,</span>
          <span className="line line-3 accent">end to end.</span>
        </h1>

        <div className="hero__bottom">
          <p className="hero__tagline">{profile.tagline}</p>

          <div className="hero__cta">
            <a href="#projects" className="btn btn--solid">
              View my work
              <ArrowDownRight width="16" height="16" />
            </a>
            <a href="#contact" className="btn btn--outline">
              Get in touch
              <ArrowUpRight width="16" height="16" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
