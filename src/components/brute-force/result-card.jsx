export function ResultCard({ keyValue, text }) {
  return (
    <div className="brute-result-card">
      <div className="result-key">KEY {keyValue}</div>
      <div className="result-arrow">↓</div>
      <div className="result-text">{text || " "}</div>
    </div>
  );
}
