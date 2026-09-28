import { useState } from "react";

const caesarEncrypt = (text, shift) => {
    return [...text.toUpperCase()]
        .map((char) => {
        if (char >= "A" && char <= "Z") {
            const code = char.charCodeAt(0) - 65;
            return String.fromCharCode(((code + shift) % 26) + 65);
        }

        return char;
        })
        .join("");
    };

    const caesarDecrypt = (text, shift) => {
    return caesarEncrypt(text, (26 - shift) % 26);
    };

    const testCases = [
    {
        id: 1,
        title: "Enkripsi Standar",
        description: "Menguji proses enkripsi Caesar Cipher.",
        mode: "encrypt",
        input: "HELLO",
        key: 3,
        expected: "KHOOR",
    },
    {
        id: 2,
        title: "Alphabet Wrap-Around",
        description: "Menguji pergeseran alfabet setelah huruf Z.",
        mode: "encrypt",
        input: "XYZ",
        key: 3,
        expected: "ABC",
    },
    {
        id: 3,
        title: "Dekripsi Standar",
        description: "Menguji proses dekripsi Caesar Cipher.",
        mode: "decrypt",
        input: "KHOOR ZRUOG",
        key: 3,
        expected: "HELLO WORLD",
    },
    ];

    const TestCases = () => {
    const [results, setResults] = useState({});

    const runTest = (test) => {
        const actual =
        test.mode === "encrypt"
            ? caesarEncrypt(test.input, test.key)
            : caesarDecrypt(test.input, test.key);

        const passed = actual === test.expected;

        setResults((prev) => ({
        ...prev,
        [test.id]: {
            actual,
            passed,
        },
        }));
    };

    const runAllTests = () => {
        const newResults = {};

        testCases.forEach((test) => {
        const actual =
            test.mode === "encrypt"
            ? caesarEncrypt(test.input, test.key)
            : caesarDecrypt(test.input, test.key);

        newResults[test.id] = {
            actual,
            passed: actual === test.expected,
        };
        });

        setResults(newResults);
    };

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

            <button className="run-all-button" onClick={runAllTests}>
            Jalankan Semua Test
            </button>
        </div>

        <div className="test-summary">
            <strong>
            {Object.keys(results).length === 0
                ? "Belum ada test yang dijalankan"
                : `${passedCount} dari ${testCases.length} test berhasil`}
            </strong>
        </div>

        <div className="testcases-grid">
            {testCases.map((test) => {
            const result = results[test.id];

            return (
                <div className="testcase-card" key={test.id}>
                <div className="testcase-top">
                    <span className="test-number">
                    {String(test.id).padStart(2, "0")}
                    </span>

                    {result && (
                    <span
                        className={
                        result.passed
                            ? "test-status pass"
                            : "test-status fail"
                        }
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
                        {test.mode === "encrypt"
                        ? "Encryption"
                        : "Decryption"}
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
                    className={`test-output actual ${
                        result.passed ? "success" : "error"
                    }`}
                    >
                    <span>ACTUAL</span>
                    <strong>{result.actual}</strong>
                    </div>
                )}

                <button
                    className="run-test-button"
                    onClick={() => runTest(test)}
                >
                    Run Test
                </button>
                </div>
            );
            })}
        </div>
        <div className="state-convention">
            <div className="state-convention-header">
                <h3>State & Diff Convention</h3>
                <span>Test state / expected result</span>
            </div>
            <div className="state-convention-grid">
                <div className="state-item state-pass">
                    <span className="state-badge">PASS</span>
                    <p>Expected = Actual</p>
                </div>

                <div className="state-item state-pending">
                    <span className="state-badge">PENDING</span>
                    <p>Belum dijalankan</p>
                </div>

                <div className="state-item state-mismatch">
                    <span className="state-badge">MISMATCH</span>
                    <p>Expected ≠ Actual</p>
                </div>
            </div>
        </div>
        </section>
    );
};

export default TestCases;