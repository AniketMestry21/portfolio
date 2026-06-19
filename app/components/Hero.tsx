"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";
import { profile } from "../lib/data";

const ease = [0.22, 1, 0.36, 1] as const;

function Word({ children, delay }: { children: string; delay: number }) {
  return (
    <span className="inline-block overflow-hidden align-bottom">
      <motion.span
        className="inline-block"
        initial={{ y: "110%" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.9, delay, ease }}
      >
        {children}
      </motion.span>
    </span>
  );
}

/** Hand-drawn underline — imperfect on purpose. */
function Squiggle() {
  return (
    <svg
      className="absolute -bottom-3 left-0 w-full text-clay"
      viewBox="0 0 300 18"
      fill="none"
      preserveAspectRatio="none"
      aria-hidden
    >
      <motion.path
        d="M3 11C53 5 110 4 150 8c40 4 90 2 147-4"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, delay: 0.9, ease }}
      />
    </svg>
  );
}

export default function Hero() {
  const reduce = useReducedMotion();
  const [time, setTime] = useState("");

  useEffect(() => {
    const tick = () =>
      setTime(
        new Intl.DateTimeFormat("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
          timeZone: profile.timezone,
        }).format(new Date())
      );
    tick();
    const id = setInterval(tick, 1000 * 30);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden">
      {/* warm glow, pushed off-center */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-1/3 h-[34rem] w-[34rem] rounded-full bg-clay/10 blur-[150px]"
      />

      <div className="shell relative flex min-h-[100svh] flex-col justify-center pt-28 pb-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-10 flex flex-wrap items-center gap-x-5 gap-y-2"
        >
          {profile.available && (
            <span className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-clay opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-clay" />
              </span>
              <span className="label">Open to work</span>
            </span>
          )}
          <span className="label text-bone-dim">
            Vengurla, IN {time && <>· {time} local</>}
          </span>
        </motion.div>

        {/* Personal greeting */}
        <motion.p
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
          className="mb-5 text-xl text-bone-muted sm:text-2xl"
        >
          Hi, I&apos;m{" "}
          <span className="font-medium text-bone">{profile.name}</span>.
        </motion.p>

        <h1 className="font-sans font-medium leading-[0.92] tracking-[-0.03em] text-bone">
          <span className="block text-[clamp(2.6rem,8.5vw,7rem)]">
            <span className="relative inline-block">
              <Word delay={0.05}>Reliable</Word>
              <Squiggle />
            </span>
          </span>
          <span className="block text-[clamp(2.6rem,8.5vw,7rem)]">
            <Word delay={0.15}>software,</Word>
          </span>
          <span className="block text-[clamp(2.6rem,8.5vw,7rem)] text-clay">
            <Word delay={0.25}>end to end.</Word>
          </span>
        </h1>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55, ease }}
          className="relative mt-12 grid gap-10 md:grid-cols-[1.5fr_1fr] md:items-end"
        >
          <p className="max-w-xl text-lg leading-relaxed text-bone-muted">
            {profile.tagline}
          </p>

          <div className="flex flex-col gap-4 sm:flex-row md:flex-col md:items-end">
            <a
              href="#projects"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-bone px-6 py-3 text-sm font-medium text-ink transition-transform hover:-translate-y-0.5"
            >
              View my work
              <ArrowDownRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-line/20 px-6 py-3 text-sm font-medium text-bone transition-colors hover:border-clay hover:text-clay"
            >
              Get in touch
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
