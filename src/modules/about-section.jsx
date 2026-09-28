import { TeamCard } from "@/src/components/about/team-card";
import { teamMembers } from "@/src/lib/team";

const FEATURES = [
  "Enkripsi dan dekripsi pesan menggunakan Caesar Cipher",
  "Visualisasi perubahan karakter satu per satu",
  "Validasi input pengguna",
  "Menjalankan test case yang telah disediakan",
  "Simulasi serangan brute force",
];

export function AboutSection() {
  return (
    <article className="article article-justify">
      <h2>About CipherLab</h2>

      <p>
        CipherLab adalah aplikasi web interaktif untuk mempelajari Caesar
        Cipher melalui proses enkripsi, dekripsi, dan visualisasi langkah demi
        langkah.
      </p>

      <p>
        Pengguna dapat memasukkan plaintext atau ciphertext, menentukan key,
        lalu melihat secara langsung bagaimana setiap karakter berubah selama
        proses kriptografi. CipherLab juga menyediakan test case dan simulasi
        brute force untuk menunjukkan cara kerja Caesar Cipher serta
        kelemahannya terhadap serangan sederhana.
      </p>

      <h2>Fitur Utama</h2>

      <ul>
        {FEATURES.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>

      <div className="team-section">
        <h2>Development Team</h2>

        <div className="team-grid">
          {teamMembers.map((member) => (
            <TeamCard key={member.nim} member={member} />
          ))}
        </div>
      </div>
    </article>
  );
}
