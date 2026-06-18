import { ArrowUpRight } from "lucide-react";
import { navLinks, profile } from "../lib/data";

const socials = [
  { label: "GitHub", href: profile.github },
  { label: "LinkedIn", href: profile.linkedin },
  { label: "Email", href: `mailto:${profile.email}` },
  { label: "Résumé", href: profile.resumeUrl },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line/10">
      <div className="shell py-16 sm:py-20">
        <div className="grid gap-12 md:grid-cols-[1.6fr_1fr_1fr]">
          {/* Identity + primary CTA */}
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-bone-dim">
              {profile.role}
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="group mt-4 inline-flex items-center gap-2 text-2xl font-medium tracking-[-0.02em] text-bone sm:text-3xl"
            >
              {profile.email}
              <ArrowUpRight className="h-5 w-5 text-clay transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            {profile.available && (
              <p className="mt-5 flex items-center gap-2 text-sm text-bone-muted">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-clay opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-clay" />
                </span>
                Available for new opportunities
              </p>
            )}
          </div>

          {/* Sitemap */}
          <nav>
            <p className="label mb-5 text-bone-dim">Navigate</p>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className="link-underline text-sm text-bone-muted hover:text-bone"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Connect */}
          <nav>
            <p className="label mb-5 text-bone-dim">Connect</p>
            <ul className="space-y-3">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target={s.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className="group inline-flex items-center gap-1.5 text-sm text-bone-muted hover:text-bone"
                  >
                    {s.label}
                    <ArrowUpRight className="h-3.5 w-3.5 text-bone-dim transition-colors group-hover:text-clay" />
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-line/10">
        <div className="shell flex flex-col items-start justify-between gap-3 py-6 sm:flex-row sm:items-center">
          <p className="font-mono text-xs text-bone-dim">
            © {year} {profile.fullName}. All rights reserved.
          </p>
          <p className="font-mono text-xs text-bone-dim">{profile.location}</p>
          <a
            href="#top"
            className="link-underline font-mono text-xs uppercase tracking-[0.14em] text-bone-muted hover:text-bone"
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
