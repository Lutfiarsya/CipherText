export function SectionCard({ icon, title, description, children }) {
  return (
    <section className="section-card">
      <div className="section-card-header">
        <div className="section-card-icon">{icon}</div>

        <div>
          <h2 className="section-card-title">{title}</h2>
          <p className="section-card-description">{description}</p>
        </div>
      </div>

      <div className="section-card-body">{children}</div>
    </section>
  );
}
