const About = () => {
    const teamMembers = [
    {
        name: "Helena Koronka Innarmastia",
        nim: "25/555609/PA/23294",
    },
    {
        name: "Celsi Alisa Nabila",
        nim: "26/591726/NPA/20047",
    },
    {
        name: "Dania Hafiza",
        nim: "25/559418/PA/23530",
    },
    {
        name: "Luthfie Asrya Darmaputra",
        nim: "26/591739/NPA/20049",
    },
        {
        name: "Gusti Muhammad Audricio Ashodiq",
        nim: "25/556877/PA/23384",
    },
    ];
    return (
        <section
        style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto", textAlign: "justify" }}
        >
        <h2>About CipherLab</h2>

        <p>
            CipherLab adalah aplikasi web interaktif untuk mempelajari Caesar Cipher melalui proses enkripsi, dekripsi, dan visualisasi langkah demi langkah.
        </p>
        <p>
            Pengguna dapat memasukkan plaintext atau ciphertext, menentukan key, lalu melihat secara langsung bagaimana setiap karakter berubah selama proses 
            kriptografi. CipherLab juga menyediakan test case dan simulasi brute force untuk menunjukkan cara kerja Caesar Cipher serta kelemahannya terhadap serangan sederhana.
        </p>
        <h2>Fitur Utama</h2>
        <p>
            - Enkripsi dan dekripsi pesan menggunakan Caesar Cipher
        </p>
        <p>
            - Visualisasi perubahan karakter satu per satu
        </p>
        <p>
            - Validasi input pengguna
        </p>
        <p>
            - Menjalankan test case yang telah disediakan
        </p>
        <p>
            - Simulasi serangan brute force
        </p>
            <div className="team-section">
                <h2>Development Team</h2>
            <div className="team-grid">
                {teamMembers.map((member, index) => (
                <div className="team-card" key={index}>
                    <div className="team-info">
                    <h4>{member.name}</h4>
                    <p className="team-role">{member.role}</p>
                    <p className="team-nim">{member.nim}</p>
                    </div>
                </div>
                ))}
            </div>
            </div>
        </section>
    );

};

export default About;