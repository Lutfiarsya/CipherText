import { useState } from "react";
import { CharacterCard } from "@/src/components/cipher/character-card";
import {
  DocumentIcon,
  KeyIcon,
  LockIcon,
  SettingsIcon,
  ShieldIcon,
} from "@/src/components/ui/icons";
import { SectionCard } from "@/src/components/ui/section-card";
import { SectionHeading } from "@/src/components/ui/section-heading";
import {
  EXAMPLE,
  EXAMPLE_STEPS,
  MAX_KEY,
  MIN_KEY,
  caesarDecrypt,
  caesarEncrypt,
  getCharacterSteps,
  isValidKey,
  parseKey,
} from "@/src/lib/caesar";
import { cn } from "@/src/lib/utils";

const COPY = {
  encrypt: {
    inputName: "Plaintext",
    outputName: "Ciphertext",
    inputDescription: "Masukkan pesan yang ingin dienkripsi.",
    inputPlaceholder: "Contoh: HELLO WORLD",
    outputLabel: "Encryption Output",
    outputDescription: "Hasil enkripsi akan muncul di sini.",
    button: "Enkripsi",
    success: "Enkripsi berhasil.",
    example: { input: EXAMPLE.plaintext, output: EXAMPLE.ciphertext },
  },
  decrypt: {
    inputName: "Ciphertext",
    outputName: "Plaintext",
    inputDescription: "Masukkan pesan yang ingin didekripsi.",
    inputPlaceholder: "Contoh: KHOOR ZRUOG",
    outputLabel: "Decryption Output",
    outputDescription: "Hasil dekripsi akan muncul di sini.",
    button: "Dekripsi",
    success: "Dekripsi berhasil.",
    example: { input: EXAMPLE.ciphertext, output: EXAMPLE.plaintext },
  },
};

export function CaesarCipherSection() {
  const [mode, setMode] = useState("encrypt");
  const [input, setInput] = useState("");
  const [key, setKey] = useState("");
  const [output, setOutput] = useState("");
  const [feedback, setFeedback] = useState(null);

  const copy = COPY[mode];
  const keyNumber = parseKey(key);
  const keyIsValid = isValidKey(keyNumber);

  const steps = getCharacterSteps(input, keyNumber, mode);
  const displaySteps = steps.length > 0 ? steps : EXAMPLE_STEPS[mode];

  const handleProcess = () => {
    if (input.trim() === "") {
      setFeedback({
        type: "error",
        text: `Masukkan ${copy.inputName.toLowerCase()} terlebih dahulu.`,
      });
      setOutput("");
      return;
    }

    if (!keyIsValid) {
      setFeedback({
        type: "error",
        text: `Key harus berupa bilangan bulat dari ${MIN_KEY} sampai ${MAX_KEY}.`,
      });
      setOutput("");
      return;
    }

    setOutput(
      mode === "encrypt"
        ? caesarEncrypt(input, keyNumber)
        : caesarDecrypt(input, keyNumber)
    );
    setFeedback({ type: "success", text: copy.success });
  };

  const handleModeChange = (newMode) => {
    setMode(newMode);
    setFeedback(null);
  };

  return (
    <div className="cipher-page">
      <div className="form-grid">
        {/* 1. INPUT */}
        <SectionCard
          icon={<DocumentIcon />}
          title={`1. ${copy.inputName}`}
          description={copy.inputDescription}
        >
          <label className="field-label" htmlFor="cipher-input">
            {copy.inputName}
          </label>

          <textarea
            id="cipher-input"
            value={input}
            onChange={(event) => {
              setInput(event.target.value);
              setFeedback(null);
            }}
            placeholder={copy.inputPlaceholder}
          />

          <div className="field-hint">
            Hanya huruf A-Z yang diproses. Spasi dan karakter lain dibiarkan
            apa adanya.
          </div>
        </SectionCard>

        {/* 2. SETTINGS */}
        <SectionCard
          icon={<SettingsIcon />}
          title="2. Pengaturan"
          description="Atur mode dan kunci Caesar Cipher."
        >
          <div className="settings-group">
            <span className="field-label">Mode</span>

            <div className="mode-control">
              <button
                type="button"
                className={cn(mode === "encrypt" && "active")}
                onClick={() => handleModeChange("encrypt")}
              >
                Encrypt
              </button>

              <button
                type="button"
                className={cn(mode === "decrypt" && "active")}
                onClick={() => handleModeChange("decrypt")}
              >
                Decrypt
              </button>
            </div>
          </div>

          <div className="settings-group">
            <label className="field-label" htmlFor="cipher-key">
              Kunci (Key)
            </label>

            <div className="key-input-wrapper">
              <input
                id="cipher-key"
                type="number"
                min={MIN_KEY}
                max={MAX_KEY}
                step="1"
                value={key}
                onChange={(event) => {
                  setKey(event.target.value);
                  setFeedback(null);
                }}
                placeholder={`Masukkan key ${MIN_KEY}–${MAX_KEY}`}
              />

              <span className="key-symbol">
                <KeyIcon />
              </span>
            </div>

            <div className="field-hint">
              Key harus berupa bilangan bulat dari {MIN_KEY} sampai {MAX_KEY}.
            </div>
          </div>

          <button
            type="button"
            className="primary-button"
            onClick={handleProcess}
          >
            <span className="primary-button-content">
              <LockIcon />
              {copy.button}
            </span>
          </button>

          {feedback && (
            <div className={cn("message", feedback.type)}>
              {feedback.text}
            </div>
          )}
        </SectionCard>

        {/* 3. OUTPUT */}
        <SectionCard
          icon={<ShieldIcon />}
          title={`3. ${copy.outputName}`}
          description={copy.outputDescription}
        >
          <span className="field-label">{copy.outputLabel}</span>

          <div className="output-box">
            {output || (
              <span className="output-placeholder">
                {copy.outputName} akan muncul di sini.
              </span>
            )}
          </div>

          <div className="output-label">{copy.outputLabel}</div>
        </SectionCard>
      </div>

      {/* CHARACTER VISUALIZATION */}
      <section className="character-process">
        <SectionHeading
          eyebrow="Visualization"
          title="Character-by-Character Process"
          description="Visualisasi perubahan setiap karakter pada proses kriptografi."
        />

        <div className="character-summary">
          <div className="character-summary-card">
            <div className="character-summary-label">{copy.inputName}</div>
            <div className="character-summary-value">
              {input || copy.example.input}
            </div>
          </div>

          <div className="character-summary-key">
            {keyIsValid ? keyNumber : EXAMPLE.key}
          </div>

          <div className="character-summary-card result">
            <div className="character-summary-label">{copy.outputName}</div>
            <div className="character-summary-value">
              {output || copy.example.output}
            </div>
          </div>
        </div>

        <div className="character-grid">
          {displaySteps.map((step, index) => (
            <CharacterCard
              key={`${step.char}-${index}`}
              index={index}
              step={step}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
