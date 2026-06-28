import { useEffect, useState } from "react";
import { profile } from "../data";
import { ArrowDownRight, ArrowUpRight } from "./Icons";

export default function Hero() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const tick = () =>
      setTime(
        new Intl.DateTimeFormat("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
          timeZone: "Asia/Kolkata",
        }).format(new Date())
      );
    tick();
    const id = setInterval(tick, 30000);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="top" className="hero">
      <div className="hero__glow" aria-hidden="true"></div>

      <div className="shell hero__inner">
        <div className="hero__eyebrow">
          {profile.available && (
            <span className="status">
              <span className="status__dot"></span>
              <span className="mono">Open to work</span>
            </span>
          )}
          <span className="mono dim">
            Vengurla, IN {time && <>· {time} local</>}
          </span>
        </div>

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
