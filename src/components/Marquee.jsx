import { marqueeSkills } from "../data";

export default function Marquee() {
  const row = [...marqueeSkills, ...marqueeSkills];
  return (
    <div className="marquee">
      <div className="marquee__track">
        {row.map((skill, i) => (
          <span className="marquee__item" key={i}>
            <span>{skill}</span>
            <span className="accent marquee__star">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
