import { useState } from "react";
import { StateConvention } from "@/src/components/test-cases/state-convention";
import { TestCaseCard } from "@/src/components/test-cases/test-case-card";
import { runTestCase, testCases } from "@/src/lib/test-cases";

export function TestCasesSection() {
  const [results, setResults] = useState({});

  const runTest = (test) => {
    setResults((prev) => ({ ...prev, [test.id]: runTestCase(test) }));
  };

  const runAllTests = () => {
    setResults(
      Object.fromEntries(testCases.map((test) => [test.id, runTestCase(test)]))
    );
  };

  const hasResults = Object.keys(results).length > 0;
  const passedCount = Object.values(results).filter(
    (result) => result.passed
  ).length;

  return (
    <section className="testcases-section">
      <div className="testcases-header">
        <div>
          <span className="testcases-eyebrow">TEST CASES</span>
          <h2>Automated Test Suites</h2>
          <p>
            Pengujian otomatis untuk memastikan proses enkripsi dan dekripsi
            Caesar Cipher menghasilkan output yang sesuai.
          </p>
        </div>

        <button
          type="button"
          className="run-all-button"
          onClick={runAllTests}
        >
          Jalankan Semua Test
        </button>
      </div>

      <div className="test-summary">
        <strong>
          {hasResults
            ? `${passedCount} dari ${testCases.length} test berhasil`
            : "Belum ada test yang dijalankan"}
        </strong>
      </div>

      <div className="testcases-grid">
        {testCases.map((test) => (
          <TestCaseCard
            key={test.id}
            test={test}
            result={results[test.id]}
            onRun={() => runTest(test)}
          />
        ))}
      </div>

      <StateConvention />
    </section>
  );
}
