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

function DocumentIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
      <path d="M14 2v6h6" />
      <path d="M8 13h8M8 17h6" />
    </svg>
  );
}

function SettingsIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.7 1.7 0 0 0 .34 1.88l.06.06-1.4 1.4-.06-.06a1.7 1.7 0 0 0-1.88-.34 1.7 1.7 0 0 0-1.03 1.56V21h-2v-.5a1.7 1.7 0 0 0-1.03-1.56 1.7 1.7 0 0 0-1.88.34l-.06.06-1.4-1.4.06-.06A1.7 1.7 0 0 0 9.4 15a1.7 1.7 0 0 0-1.56-1.03H7v-2h.84A1.7 1.7 0 0 0 9.4 10a1.7 1.7 0 0 0-.34-1.88L9 8.06l1.4-1.4.06.06a1.7 1.7 0 0 0 1.88.34A1.7 1.7 0 0 0 13.37 5.5V5h2v.5a1.7 1.7 0 0 0 1.03 1.56 1.7 1.7 0 0 0 1.88-.34l.06-.06 1.4 1.4-.06.06A1.7 1.7 0 0 0 19.4 10a1.7 1.7 0 0 0 1.56 1.03H21v2h-.04A1.7 1.7 0 0 0 19.4 15Z" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg
      width="24"
      height="24"
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

function KeyIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="7.5" cy="15.5" r="3.5" />
      <path d="m10 13 9-9" />
      <path d="m15 6 3 3" />
      <path d="m17 4 3 3" />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="5" y="10" width="14" height="10" rx="2" />
      <path d="M8 10V7a4 4 0 0 1 8 0v3" />
    </svg>
  );
}

export function CipherPage() {
  const [mode, setMode] = useState("encrypt");
  const [plainText, setPlainText] = useState("");
  const [key, setKey] = useState("");
  const [cipherText, setCipherText] = useState("");
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  const keyNumber = Number(key);

  const handleProcess = () => {
    if (plainText.trim() === "") {
      setMessage("Masukkan plaintext terlebih dahulu.");
      setMessageType("error");
      setCipherText("");
      return;
    }

    if (
      key === "" ||
      !Number.isInteger(keyNumber) ||
      keyNumber < 0 ||
      keyNumber > 25
    ) {
      setMessage("Key harus berupa bilangan bulat dari 0 sampai 25.");
      setMessageType("error");
      setCipherText("");
      return;
    }

    const result =
      mode === "encrypt"
        ? caesarEncrypt(plainText, keyNumber)
        : caesarDecrypt(plainText, keyNumber);

    setCipherText(result);

    setMessage(
      mode === "encrypt"
        ? "Enkripsi berhasil."
        : "Dekripsi berhasil."
    );

    setMessageType("success");
  };

  const handleModeChange = (newMode) => {
    setMode(newMode);
    setMessage("");
    setMessageType("");
  };

  const characters = [...plainText.toUpperCase()]
    .filter((char) => char >= "A" && char <= "Z")
    .slice(0, 5);

  const visualizationResult =
    characters.length > 0 &&
    Number.isInteger(keyNumber) &&
    keyNumber >= 0 &&
    keyNumber <= 25
      ? characters.map((char) => {
          const ascii = char.charCodeAt(0);
          const shifted =
            mode === "encrypt"
              ? ((ascii - 65 + keyNumber) % 26) + 65
              : ((ascii - 65 - keyNumber + 26) % 26) + 65;

          return {
            char,
            ascii,
            shifted: String.fromCharCode(shifted),
            shiftedAscii: shifted,
          };
        })
      : [];

  return (
    <div className="cipher-page">

      {/* =====================================================
          MAIN 3 CARDS
      ===================================================== */}

      <div className="form-grid">

        {/* ===================================================
            PLAINTEXT
        =================================================== */}

        <section className="section-card">
          <div className="section-card-header">
            <div className="section-card-icon">
              <DocumentIcon />
            </div>

            <div>
              <h2 className="section-card-title">
                1. Plaintext
              </h2>

              <p className="section-card-description">
                Masukkan pesan yang ingin dienkripsi.
              </p>
            </div>
          </div>

          <div className="section-card-body">
            <label className="field-label">
              Plaintext
            </label>

            <textarea
              value={plainText}
              onChange={(event) => {
                setPlainText(event.target.value);
                setMessage("");
                setMessageType("");
              }}
              placeholder="Contoh: HELLO WORLD"
            />

            <div className="field-hint">
              Hanya huruf A-Z dan spasi yang diperbolehkan.
            </div>
          </div>
        </section>

        {/* ===================================================
            SETTINGS
        =================================================== */}

        <section className="section-card">
          <div className="section-card-header">
            <div className="section-card-icon">
              <SettingsIcon />
            </div>

            <div>
              <h2 className="section-card-title">
                2. Pengaturan
              </h2>

              <p className="section-card-description">
                Atur mode dan kunci Caesar Cipher.
              </p>
            </div>
          </div>

          <div className="section-card-body">

            <div className="settings-group">
              <label className="field-label">
                Mode
              </label>

              <div className="mode-control">
                <button
                  type="button"
                  className={mode === "encrypt" ? "active" : ""}
                  onClick={() => handleModeChange("encrypt")}
                >
                  Encrypt
                </button>

                <button
                  type="button"
                  className={mode === "decrypt" ? "active" : ""}
                  onClick={() => handleModeChange("decrypt")}
                >
                  Decrypt
                </button>
              </div>
            </div>

            <div className="settings-group">
              <label className="field-label">
                Kunci (Key)
              </label>

              <div className="key-input-wrapper">
                <input
                  type="number"
                  min="0"
                  max="25"
                  step="1"
                  value={key}
                  onChange={(event) => {
                    setKey(event.target.value);
                    setMessage("");
                    setMessageType("");
                  }}
                  placeholder="Masukkan key 0–25"
                />

                <span className="key-symbol">
                  <KeyIcon />
                </span>
              </div>

              <div className="field-hint">
                Key harus berupa bilangan bulat dari 0 sampai 25.
              </div>
            </div>

            <button
              type="button"
              className="primary-button"
              onClick={handleProcess}
            >
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "9px",
                }}
              >
                <LockIcon />
                {mode === "encrypt" ? "Enkripsi" : "Dekripsi"}
              </span>
            </button>

            {message && (
              <div className={`message ${messageType}`}>
                {message}
              </div>
            )}
          </div>
        </section>

        {/* ===================================================
            CIPHERTEXT
        =================================================== */}

        <section className="section-card">
          <div className="section-card-header">
            <div className="section-card-icon">
              <ShieldIcon />
            </div>

            <div>
              <h2 className="section-card-title">
                3. Ciphertext
              </h2>

              <p className="section-card-description">
                Hasil enkripsi atau dekripsi akan muncul di sini.
              </p>
            </div>
          </div>

          <div className="section-card-body">
            <label className="field-label">
              {mode === "encrypt"
                ? "Encryption Output"
                : "Decryption Output"}
            </label>

            <div className="output-box">
              {cipherText ? (
                cipherText
              ) : (
                <span className="output-placeholder">
                  Ciphertext akan muncul di sini.
                </span>
              )}
            </div>

            <div className="output-label">
              {mode === "encrypt"
                ? "Encryption Output"
                : "Decryption Output"}
            </div>
          </div>
        </section>
      </div>

      {/* =====================================================
          ALGORITHM PROCESS
      ===================================================== */}

      <section className="process-section">
        <div className="process-heading">
          <div className="process-eyebrow">
            Caesar Cipher
          </div>

          <h2 className="process-title">
            Algorithm Process
          </h2>

          <p className="process-description">
            Proses perubahan plaintext menjadi ciphertext
            menggunakan Caesar Cipher.
          </p>
        </div>

        <div className="algorithm-flow">

          <div className="algorithm-card">
            <div className="algorithm-number">
              01
            </div>

            <h3>
              Plaintext
            </h3>

            <p>
              Pesan asli yang dimasukkan pengguna.
            </p>

            <div className="algorithm-value">
              {plainText || "HELLO"}
            </div>
          </div>

          <div className="algorithm-arrow">
            →
          </div>

          <div className="algorithm-card">
            <div className="algorithm-number">
              02
            </div>

            <h3>
              Shift
            </h3>

            <p>
              Setiap huruf digeser berdasarkan key.
            </p>

            <div className="algorithm-value">
              +{keyNumber || 3}
            </div>
          </div>

          <div className="algorithm-arrow">
            →
          </div>

          <div className="algorithm-card">
            <div className="algorithm-number">
              03
            </div>

            <h3>
              Ciphertext
            </h3>

            <p>
              Pesan setelah proses kriptografi.
            </p>

            <div className="algorithm-value">
              {cipherText || "KHOOR"}
            </div>
          </div>
        </div>

        <div className="formula-box">
          <div className="formula">
            C = (P + K) mod 26
          </div>

          <div className="formula-description">
            C = Ciphertext &nbsp;|&nbsp;
            P = Plaintext &nbsp;|&nbsp;
            K = Key
          </div>
        </div>
      </section>

      {/* =====================================================
          CHARACTER VISUALIZATION
      ===================================================== */}

      <section className="character-process">
        <div className="process-heading">
          <div className="process-eyebrow">
            Visualization
          </div>

          <h2 className="process-title">
            Character-by-Character Process
          </h2>

          <p className="process-description">
            Visualisasi perubahan setiap karakter pada proses
            kriptografi.
          </p>
        </div>

        <div className="character-summary">

          <div className="character-summary-card">
            <div className="character-summary-label">
              Plaintext
            </div>

            <div className="character-summary-value">
              {plainText || "HELLO"}
            </div>
          </div>

          <div className="character-summary-key">
            {Number.isInteger(keyNumber) &&
            keyNumber >= 0 &&
            keyNumber <= 25
              ? keyNumber
              : 0}
          </div>

          <div className="character-summary-card result">
            <div className="character-summary-label">
              Ciphertext
            </div>

            <div className="character-summary-value">
              {cipherText || "KHOOR"}
            </div>
          </div>
        </div>

        {visualizationResult.length > 0 ? (
          <div className="character-grid">
            {visualizationResult.map((item, index) => (
              <div
                className="character-card"
                key={`${item.char}-${index}`}
              >
                <div className="character-label">
                  Character {index + 1}
                </div>

                <div className="character-letter">
                  {item.char}
                </div>

                <div className="character-arrow">
                  ↓
                </div>

                <div className="character-values">
                  <div className="character-value">
                    <span>ASCII</span>
                    <strong>{item.ascii}</strong>
                  </div>

                  <div className="character-value">
                    <span>Shifted</span>
                    <strong>
                      {item.shiftedAscii}
                    </strong>
                  </div>
                </div>

                <div
                  style={{
                    marginTop: "10px",
                    fontWeight: 700,
                    color: "#159b68",
                    fontSize: "14px",
                  }}
                >
                  {item.shifted}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="character-grid">
            {["H", "E", "L", "L", "O"].map(
              (letter, index) => {
                const ascii = letter.charCodeAt(0);
                const shifted =
                  ((ascii - 65 + 3) % 26) + 65;

                return (
                  <div
                    className="character-card"
                    key={letter + index}
                  >
                    <div className="character-label">
                      Character {index + 1}
                    </div>

                    <div className="character-letter">
                      {letter}
                    </div>

                    <div className="character-arrow">
                      ↓
                    </div>

                    <div className="character-values">
                      <div className="character-value">
                        <span>ASCII</span>
                        <strong>{ascii}</strong>
                      </div>

                      <div className="character-value">
                        <span>Shifted</span>
                        <strong>{shifted}</strong>
                      </div>
                    </div>

                    <div
                      style={{
                        marginTop: "10px",
                        fontWeight: 700,
                        color: "#159b68",
                        fontSize: "14px",
                      }}
                    >
                      {String.fromCharCode(shifted)}
                    </div>
                  </div>
                );
              }
            )}
          </div>
        )}
      </section>

      {/* =====================================================
          SECURITY NOTE
      ===================================================== */}

      <section className="test-section">
        <div className="process-heading">
          <div className="process-eyebrow">
            Educational Note
          </div>

          <h2 className="process-title">
            Caesar Cipher Security
          </h2>

          <p className="process-description">
            Caesar Cipher menggunakan jumlah kemungkinan key
            yang terbatas sehingga mudah dianalisis dengan brute
            force.
          </p>
        </div>

        <div className="test-grid">
          <div className="test-card">
            <div className="test-id">
              KEY SPACE
            </div>

            <h4>
              26 kemungkinan
            </h4>

            <p>
              Key Caesar Cipher hanya berada pada rentang
              0 sampai 25.
            </p>
          </div>

          <div className="test-card">
            <div className="test-id">
              ENCRYPTION
            </div>

            <h4>
              Pergeseran alfabet
            </h4>

            <p>
              Setiap karakter alfabet digeser berdasarkan
              nilai key.
            </p>
          </div>

          <div className="test-card">
            <div className="test-id">
              BRUTE FORCE
            </div>

            <h4>
              Mudah diuji
            </h4>

            <p>
              Seluruh kemungkinan key dapat dicoba satu per
              satu untuk menemukan plaintext.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}