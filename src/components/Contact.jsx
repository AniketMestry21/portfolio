import { profile } from "../data";
import Reveal from "./Reveal";
import { ArrowUpRight } from "./Icons";

const channels = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  {
    label: "Phone",
    value: profile.phone,
    href: `tel:${profile.phone.replace(/\s/g, "")}`,
  },
  { label: "GitHub", value: "View repositories", href: profile.github },
  { label: "LinkedIn", value: "Connect with me", href: profile.linkedin },
];

export default function Contact() {
  return (
    <section id="contact" className="shell section section--contact">
      <Reveal>
        <span className="mono accent">05 / Contact</span>
        <h2 className="contact__title">
          Let&apos;s work
          <br />
          <span className="accent">together.</span>
        </h2>
      </Reveal>

      <Reveal delay={100}>
        <p className="contact__text">
          I&apos;m open to full-time roles. Whether you have a product to build
          or a position to fill, I&apos;d be glad to hear from you and will
          respond promptly.
        </p>
      </Reveal>

      <Reveal delay={150}>
        <a href={`mailto:${profile.email}`} className="btn btn--accent contact__btn">
          {profile.email}
          <ArrowUpRight width="18" height="18" />
        </a>
      </Reveal>

      <div className="contact__grid">
        {channels.map((c, i) => (
          <Reveal key={c.label} delay={i * 60}>
            <a
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="card contact__channel"
            >
              <span className="mono dim">{c.label}</span>
              <span className="contact__value">
                {c.value}
                <ArrowUpRight width="14" height="14" className="accent" />
              </span>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
