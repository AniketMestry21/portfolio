import { navLinks, profile } from "../data";
import { ArrowUpRight } from "./Icons";

const socials = [
  { label: "GitHub", href: profile.github },
  { label: "LinkedIn", href: profile.linkedin },
  { label: "Email", href: `mailto:${profile.email}` },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="shell footer__top">
        <div>
          <p className="mono dim">{profile.role}</p>
          <a href={`mailto:${profile.email}`} className="footer__email">
            {profile.email}
            <ArrowUpRight width="18" height="18" className="accent" />
          </a>
          {profile.available && (
            <p className="footer__status">
              <span className="status__dot"></span>
              Available for new opportunities
            </p>
          )}
        </div>

        <nav className="footer__col">
          <p className="mono dim footer__col-label">Navigate</p>
          {navLinks.map((l) => (
            <a key={l.id} href={`#${l.id}`}>
              {l.label}
            </a>
          ))}
        </nav>

        <nav className="footer__col">
          <p className="mono dim footer__col-label">Connect</p>
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
            >
              {s.label}
            </a>
          ))}
        </nav>
      </div>

      <div className="shell footer__bottom">
        <p className="mono dim">
          © {year} {profile.fullName}
        </p>
        <p className="mono dim">{profile.location}</p>
        <a href="#top" className="mono footer__top-link">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
