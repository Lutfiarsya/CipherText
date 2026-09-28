export function CharacterCard({ index, step }) {
  return (
    <div className="character-card">
      <div className="character-label">Character {index + 1}</div>

      <div className="character-letter">{step.char}</div>

      <div className="character-arrow">↓</div>

      <div className="character-values">
        <div className="character-value">
          <span>ASCII</span>
          <strong>{step.ascii}</strong>
        </div>

        <div className="character-value">
          <span>Shifted</span>
          <strong>{step.shiftedAscii}</strong>
        </div>
      </div>

      <div className="character-result">{step.shifted}</div>
    </div>
  );
}
