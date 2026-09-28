const STATES = [
  { className: "state-pass", badge: "PASS", text: "Expected = Actual" },
  { className: "state-pending", badge: "PENDING", text: "Belum dijalankan" },
  { className: "state-mismatch", badge: "MISMATCH", text: "Expected ≠ Actual" },
];

export function StateConvention() {
  return (
    <div className="state-convention">
      <div className="state-convention-header">
        <h3>State & Diff Convention</h3>
        <span>Test state / expected result</span>
      </div>

      <div className="state-convention-grid">
        {STATES.map((state) => (
          <div key={state.badge} className={`state-item ${state.className}`}>
            <span className="state-badge">{state.badge}</span>
            <p>{state.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
