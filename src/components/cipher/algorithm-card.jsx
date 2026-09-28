export function AlgorithmCard({ number, title, description, value }) {
  return (
    <div className="algorithm-card">
      <div className="algorithm-number">{number}</div>
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="algorithm-value">{value}</div>
    </div>
  );
}
