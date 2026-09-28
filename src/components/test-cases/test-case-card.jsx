import { cn } from "@/src/lib/utils";

export function TestCaseCard({ test, result, onRun }) {
  return (
    <div className="testcase-card">
      <div className="testcase-top">
        <span className="test-number">
          {String(test.id).padStart(2, "0")}
        </span>

        {result && (
          <span
            className={cn("test-status", result.passed ? "pass" : "fail")}
          >
            {result.passed ? "PASS" : "FAIL"}
          </span>
        )}
      </div>

      <h3>{test.title}</h3>
      <p className="test-description">{test.description}</p>

      <div className="test-data">
        <div>
          <span>MODE</span>
          <strong>
            {test.mode === "encrypt" ? "Encryption" : "Decryption"}
          </strong>
        </div>

        <div>
          <span>KEY</span>
          <strong>{test.key}</strong>
        </div>
      </div>

      <div className="test-output">
        <span>INPUT</span>
        <strong>{test.input}</strong>
      </div>

      <div className="test-output expected">
        <span>EXPECTED</span>
        <strong>{test.expected}</strong>
      </div>

      {result && (
        <div
          className={cn(
            "test-output actual",
            result.passed ? "success" : "error"
          )}
        >
          <span>ACTUAL</span>
          <strong>{result.actual}</strong>
        </div>
      )}

      <button type="button" className="run-test-button" onClick={onRun}>
        Run Test
      </button>
    </div>
  );
}
