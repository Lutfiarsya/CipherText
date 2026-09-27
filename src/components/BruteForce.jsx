import { useState } from "react";

const caesarDecrypt = (text, shift) => {
  return [...text.toUpperCase()]
    .map((char) => {
      if (char >= "A" && char <= "Z") {
        const code = char.charCodeAt(0) - 65;
        return String.fromCharCode(
          ((code - shift + 26) % 26) + 65
        );
      }

      return char;
    })
    .join("");
};

function SearchIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-4-4" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3 20 6v5c0 5-3.4 8.8-8 10-4.6-1.2-8-5-8-10V6l8-3Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

export function BruteForce() {
  const [cipherText, setCipherText] = useState("");
  const [results, setResults] = useState([]);
  const [searched, setSearched] = useState(false);

  const handleBruteForce = () => {
    if (!cipherText.trim()) {
      setResults([]);
      setSearched(false);
      return;
    }

    const possibilities = Array.from(
      { length: 26 },
      (_, key) => ({
        key,
        text: caesarDecrypt(cipherText, key),
      })
    );

    setResults(possibilities);
    setSearched(true);
  };

  return (
    <div className="bruteforce-page">

      {/* =========================================
          INTRO
      ========================================= */}

      <section className="brute-intro">

        <div className="brute-eyebrow">
          Cryptanalysis
        </div>

        <h1 className="brute-title">
          Brute Force Attack
        </h1>

        <p className="brute-description">
          Uji seluruh kemungkinan key Caesar Cipher
          untuk menemukan plaintext yang paling mungkin.
        </p>
      </section>

      {/* =========================================
          INPUT CARD
      ========================================= */}

      <section className="brute-input-card">

        <div className="brute-card-header">

          <div className="brute-icon">
            <SearchIcon />
          </div>

          <div>
            <h2>
              Ciphertext
            </h2>

            <p>
              Masukkan ciphertext yang ingin dianalisis.
            </p>
          </div>

        </div>

        <div className="brute-input-body">

          <label>
            Ciphertext
          </label>

          <textarea
            value={cipherText}
            onChange={(event) => {
              setCipherText(event.target.value);
              setSearched(false);
              setResults([]);
            }}
            placeholder="Contoh: KHOOR"
          />

          <p className="brute-hint">
            Sistem akan mencoba seluruh key dari 0 sampai 25.
          </p>

          <button
            type="button"
            className="brute-button"
            onClick={handleBruteForce}
          >
            <SearchIcon />
            Try All Keys
          </button>

        </div>
      </section>

      {/* =========================================
          RESULT
      ========================================= */}

      {searched && (
        <section className="brute-results">

          <div className="brute-results-heading">

            <div>
              <div className="brute-eyebrow">
                Analysis Result
              </div>

              <h2>
                26 Possible Keys
              </h2>

              <p>
                Setiap key menghasilkan kemungkinan
                plaintext yang berbeda.
              </p>
            </div>

            <div className="key-count">
              26
            </div>

          </div>

          <div className="brute-result-grid">

            {results.map((result) => (
              <div
                className="brute-result-card"
                key={result.key}
              >

                <div className="result-key">
                  KEY {result.key}
                </div>

                <div className="result-arrow">
                  ↓
                </div>

                <div className="result-text">
                  {result.text || " "}
                </div>

              </div>
            ))}

          </div>

        </section>
      )}

      {/* =========================================
          EDUCATIONAL NOTE
      ========================================= */}

      <section className="brute-note">

        <div className="brute-note-icon">
          <ShieldIcon />
        </div>

        <div>
          <h3>
            Mengapa Caesar Cipher mudah diserang?
          </h3>

          <p>
            Caesar Cipher hanya memiliki 26 kemungkinan
            key. Karena jumlah kemungkinan terbatas,
            seluruh key dapat dicoba secara sistematis
            menggunakan brute force.
          </p>
        </div>

      </section>

    </div>
  );
}