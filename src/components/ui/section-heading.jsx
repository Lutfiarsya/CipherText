export function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="process-heading">
      <div className="process-eyebrow">{eyebrow}</div>
      <h2 className="process-title">{title}</h2>
      <p className="process-description">{description}</p>
    </div>
  );
}
