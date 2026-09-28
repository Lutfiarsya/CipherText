import { useState } from "react";
import { ResultCard } from "@/src/components/brute-force/result-card";
import { SearchIcon, ShieldIcon } from "@/src/components/ui/icons";
import { bruteForceCaesar } from "@/src/lib/caesar";

export function BruteForceSection() {
  const [cipherText, setCipherText] = useState("");
  const [results, setResults] = useState([]);

  const handleBruteForce = () => {
    setResults(cipherText.trim() ? bruteForceCaesar(cipherText) : []);
  };

  return (
    <div className="bruteforce-page">
      {/* INTRO */}
      <section className="brute-intro">
        <div className="brute-eyebrow">Cryptanalysis</div>

        <h1 className="brute-title">Brute Force Attack</h1>

        <p className="brute-description">
          Uji seluruh kemungkinan key Caesar Cipher untuk menemukan plaintext
          yang paling mungkin.
        </p>
      </section>

      {/* INPUT */}
      <section className="brute-input-card">
        <div className="brute-card-header">
          <div className="brute-icon">
            <SearchIcon />
          </div>

          <div>
            <h2>Ciphertext</h2>
            <p>Masukkan ciphertext yang ingin dianalisis.</p>
          </div>
        </div>

        <div className="brute-input-body">
          <label htmlFor="brute-force-input">Ciphertext</label>

          <textarea
            id="brute-force-input"
            value={cipherText}
            onChange={(event) => {
              setCipherText(event.target.value);
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

      {/* RESULT */}
      {results.length > 0 && (
        <section className="brute-results">
          <div className="brute-results-heading">
            <div>
              <div className="brute-eyebrow">Analysis Result</div>

              <h2>{results.length} Possible Keys</h2>

              <p>Setiap key menghasilkan kemungkinan plaintext yang berbeda.</p>
            </div>

            <div className="key-count">{results.length}</div>
          </div>

          <div className="brute-result-grid">
            {results.map((result) => (
              <ResultCard
                key={result.key}
                keyValue={result.key}
                text={result.text}
              />
            ))}
          </div>
        </section>
      )}

      {/* EDUCATIONAL NOTE */}
      <section className="brute-note">
        <div className="brute-note-icon">
          <ShieldIcon size={25} />
        </div>

        <div>
          <h3>Mengapa Caesar Cipher mudah diserang?</h3>

          <p>
            Caesar Cipher hanya memiliki 26 kemungkinan key. Karena jumlah
            kemungkinan terbatas, seluruh key dapat dicoba secara sistematis
            menggunakan brute force.
          </p>
        </div>
      </section>
    </div>
  );
}
