import { useEffect, useState } from "react";
import { navLinks, profile } from "../data";
import ThemeToggle from "./ThemeToggle";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((l) => document.getElementById(l.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <div className="shell nav__inner">
        <a href="#top" className="nav__brand" aria-label="Back to top">
          <span className="nav__mark">AM</span>
          <span className="nav__name">{profile.name}</span>
        </a>

        <nav className="nav__links">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`nav__link ${active === link.id ? "is-active" : ""}`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="nav__actions">
          <ThemeToggle />
          <a href={`mailto:${profile.email}`} className="btn btn--ghost nav__cta">
            Let&apos;s talk
          </a>
          <button
            className={`burger ${open ? "is-open" : ""}`}
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      {open && (
        <div className="shell nav__mobile">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="nav__mobile-link"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
