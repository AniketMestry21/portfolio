import Reveal from "./Reveal";

// Numbered section header: "01 / About" + title, with a divider line.
export default function SectionHeading({ index, kicker, title }) {
  return (
    <Reveal>
      <div className="section-head">
        <div className="section-head__label">
          <span className="mono accent">{index}</span>
          <span className="mono dim">/ {kicker}</span>
        </div>
        <h2 className="section-head__title">{title}</h2>
      </div>
    </Reveal>
  );
}
