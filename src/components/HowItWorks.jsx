export const HowItWorks = () => {
  return (
    <div style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
      <h2>How It Works - Caesar Cipher</h2>
      <p>
        Caesar Cipher adalah salah satu teknik kriptografi jenis <strong>Substitusi Cipher</strong> sederhana. 
        Setiap huruf pada teks asli (<em>plaintext</em>) digantikan oleh huruf lain yang memiliki selisih posisi tertentu dalam alfabet.
      </p>

      <h3>1. Rumus Matematika</h3>
      <ul>
        <li><strong>Enkripsi:</strong> <code>C = (P + K) mod 26</code></li>
        <li><strong>Dekripsi:</strong> <code>P = (C - K + 26) mod 26</code></li>
      </ul>
      <p style={{ fontSize: "0.9rem", color: "#666" }}>
        * Keterangan: C = Ciphertext, P = Plaintext (A=0, B=1 ... Z=25), K = Key/Shift
      </p>

      <h3>2. Contoh Perhitungan (Key = 3)</h3>
      <ul>
        <li><strong>H</strong> (&rarr; +3) &rarr; <strong>K</strong></li>
        <li><strong>E</strong> (&rarr; +3) &rarr; <strong>H</strong></li>
        <li><strong>L</strong> (&rarr; +3) &rarr; <strong>O</strong></li>
        <li><strong>L</strong> (&rarr; +3) &rarr; <strong>O</strong></li>
        <li><strong>O</strong> (&rarr; +3) &rarr; <strong>R</strong></li>
      </ul>
      <p>Maka plaintext <strong>HELLO</strong> menjadi ciphertext <strong>KHOOR</strong>.</p>
    </div>
  );
};