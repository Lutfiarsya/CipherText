import { Fragment } from "react";
import { AlgorithmCard } from "@/src/components/cipher/algorithm-card";
import { SectionHeading } from "@/src/components/ui/section-heading";
import { EXAMPLE, EXAMPLE_STEPS } from "@/src/lib/caesar";

const ALGORITHM_STEPS = [
  {
    number: "01",
    title: "Plaintext",
    description: "Pesan asli sebelum dienkripsi.",
    value: EXAMPLE.plaintext,
  },
  {
    number: "02",
    title: "Shift",
    description: "Setiap huruf digeser sejauh nilai key.",
    value: `+${EXAMPLE.key}`,
  },
  {
    number: "03",
    title: "Ciphertext",
    description: "Pesan setelah proses enkripsi.",
    value: EXAMPLE.ciphertext,
  },
];

const SECURITY_POINTS = [
  {
    id: "KEY SPACE",
    title: "26 kemungkinan",
    text: "Key Caesar Cipher hanya berada pada rentang 0 sampai 25.",
  },
  {
    id: "ENCRYPTION",
    title: "Pergeseran alfabet",
    text: "Setiap karakter alfabet digeser berdasarkan nilai key.",
  },
  {
    id: "BRUTE FORCE",
    title: "Mudah diuji",
    text: "Seluruh kemungkinan key dapat dicoba satu per satu untuk menemukan plaintext.",
  },
];

export function HowItWorksSection() {
  return (
    <div className="howitworks-page">
      {/* PENJELASAN */}
      <article className="article">
        <h2>How It Works - Caesar Cipher</h2>

        <p>
          Caesar Cipher adalah salah satu teknik kriptografi jenis{" "}
          <strong>Substitusi Cipher</strong> sederhana. Setiap huruf pada teks
          asli (<em>plaintext</em>) digantikan oleh huruf lain yang memiliki
          selisih posisi tertentu dalam alfabet.
        </p>

        <h3>1. Rumus Matematika</h3>

        <ul>
          <li>
            <strong>Enkripsi:</strong> <code>C = (P + K) mod 26</code>
          </li>
          <li>
            <strong>Dekripsi:</strong> <code>P = (C - K + 26) mod 26</code>
          </li>
        </ul>

        <p className="article-note">
          * Keterangan: C = Ciphertext, P = Plaintext (A=0, B=1 ... Z=25), K =
          Key/Shift
        </p>

        <h3>2. Contoh Perhitungan (Key = {EXAMPLE.key})</h3>

        <ul>
          {EXAMPLE_STEPS.encrypt.map((step, index) => (
            <li key={`${step.char}-${index}`}>
              <strong>{step.char}</strong> (&rarr; +{EXAMPLE.key}) &rarr;{" "}
              <strong>{step.shifted}</strong>
            </li>
          ))}
        </ul>

        <p>
          Maka plaintext <strong>{EXAMPLE.plaintext}</strong> menjadi
          ciphertext <strong>{EXAMPLE.ciphertext}</strong>.
        </p>
      </article>

      {/* ALGORITHM PROCESS */}
      <section className="process-section">
        <SectionHeading
          eyebrow="Caesar Cipher"
          title="Algorithm Process"
          description="Proses perubahan plaintext menjadi ciphertext menggunakan Caesar Cipher."
        />

        <div className="algorithm-flow">
          {ALGORITHM_STEPS.map((step, index) => (
            <Fragment key={step.number}>
              {index > 0 && <div className="algorithm-arrow">→</div>}
              <AlgorithmCard {...step} />
            </Fragment>
          ))}
        </div>

        <div className="formula-box">
          <div className="formula">C = (P + K) mod 26</div>

          <div className="formula-description">
            C = Ciphertext &nbsp;|&nbsp; P = Plaintext &nbsp;|&nbsp; K = Key
          </div>
        </div>
      </section>

      {/* CAESAR CIPHER SECURITY */}
      <section className="security-section">
        <SectionHeading
          eyebrow="Educational Note"
          title="Caesar Cipher Security"
          description="Caesar Cipher menggunakan jumlah kemungkinan key yang terbatas sehingga mudah dianalisis dengan brute force."
        />

        <div className="security-grid">
          {SECURITY_POINTS.map((point) => (
            <div className="security-card" key={point.id}>
              <div className="security-id">{point.id}</div>
              <h4>{point.title}</h4>
              <p>{point.text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
