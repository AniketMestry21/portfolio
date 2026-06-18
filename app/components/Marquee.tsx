import { marqueeSkills } from "../lib/data";

export default function Marquee() {
  const row = [...marqueeSkills, ...marqueeSkills];

  return (
    <div className="relative flex overflow-hidden border-y border-line/10 py-5">
      <div className="flex shrink-0 animate-marquee items-center">
        {row.map((skill, i) => (
          <span key={i} className="flex items-center">
            <span className="px-7 text-2xl font-medium tracking-[-0.01em] text-bone-muted">
              {skill}
            </span>
            <span className="text-sm text-clay">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
