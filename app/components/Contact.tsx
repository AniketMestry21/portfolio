"use client";

import { ArrowUpRight } from "lucide-react";
import { profile } from "../lib/data";
import Reveal from "./Reveal";

const channels = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
  { label: "GitHub", value: "View repositories", href: profile.github },
  { label: "LinkedIn", value: "Connect with me", href: profile.linkedin },
];

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 py-24 sm:py-36">
      <div className="shell">
        <Reveal>
          <span className="label text-clay">05 / Contact</span>
          <h2 className="mt-8 text-[clamp(2.5rem,8vw,6rem)] font-medium leading-[0.95] tracking-[-0.03em] text-bone">
            Let&apos;s work
            <br />
            <span className="text-clay">together.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-8 max-w-lg text-lg leading-relaxed text-bone-muted">
            I&apos;m open to full-time roles and freelance projects. Whether you
            have a product to build or a position to fill, I&apos;d be glad to
            hear from you and will respond promptly.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <a
            href={`mailto:${profile.email}`}
            className="group mt-10 inline-flex items-center gap-4 rounded-full bg-clay px-8 py-4 text-base font-medium text-accentInk transition-transform hover:-translate-y-0.5"
          >
            {profile.email}
            <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </Reveal>

        <div className="mt-20 grid gap-px overflow-hidden rounded-2xl border border-line/10 bg-line/5 sm:grid-cols-2 lg:grid-cols-4">
          {channels.map((c, i) => (
            <Reveal key={c.label} delay={i * 0.06}>
              <a
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="flex h-full flex-col justify-between gap-8 bg-ink-900 p-6 transition-colors hover:bg-ink-800"
              >
                <span className="font-mono text-xs uppercase tracking-[0.18em] text-bone-dim">
                  {c.label}
                </span>
                <span className="flex items-center justify-between gap-2 text-bone">
                  {c.value}
                  <ArrowUpRight className="h-4 w-4 shrink-0 text-clay" />
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
