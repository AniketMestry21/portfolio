import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // All tokens are CSS-variable driven (space-separated RGB channels)
        // so a single class works in both light and dark themes, and Tailwind
        // alpha modifiers like `border-line/10` still resolve correctly.
        ink: {
          DEFAULT: "rgb(var(--c-bg) / <alpha-value>)",
          900: "rgb(var(--c-elev-1) / <alpha-value>)",
          800: "rgb(var(--c-elev-2) / <alpha-value>)",
          700: "rgb(var(--c-elev-3) / <alpha-value>)",
          600: "rgb(var(--c-elev-4) / <alpha-value>)",
        },
        bone: {
          DEFAULT: "rgb(var(--c-fg) / <alpha-value>)",
          muted: "rgb(var(--c-fg-muted) / <alpha-value>)",
          dim: "rgb(var(--c-fg-dim) / <alpha-value>)",
        },
        clay: {
          DEFAULT: "rgb(var(--c-accent) / <alpha-value>)",
          soft: "rgb(var(--c-accent-soft) / <alpha-value>)",
          deep: "rgb(var(--c-accent-deep) / <alpha-value>)",
        },
        // Theme-aware hairlines / surface fills (white in dark, ink in light)
        line: "rgb(var(--c-line) / <alpha-value>)",
        // Always-dark label color for use on the clay accent fill
        accentInk: "rgb(var(--c-on-accent) / <alpha-value>)",
      },
      fontFamily: {
        // Single, clean typeface for headings + body. Mono kept for small labels.
        serif: ["var(--font-inter)", "system-ui", "sans-serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      letterSpacing: {
        label: "0.22em",
      },
      maxWidth: {
        shell: "1180px",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 38s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
