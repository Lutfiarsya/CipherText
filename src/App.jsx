import { useState } from "react";
import { CipherPage } from "./components/CipherPage";
import { BruteForce } from "./components/BruteForce";
import { HowItWorks } from "./components/HowItWorks"; // <-- IMPORT BARU

function LockIcon({ size = 28 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="5" y="10" width="14" height="10" rx="2" />
      <path d="M8 10V7a4 4 0 0 1 8 0v3" />
      <circle cx="12" cy="15" r="1" />
      <path d="M12 16v2" />
    </svg>
  );
}

function HomeIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M3 11.2 12 3l9 8.2v9.3a.5.5 0 0 1-.5.5h-5.3v-6.2H8.8V21H3.5a.5.5 0 0 1-.5-.5v-9.3Z" />
    </svg>
  );
}

function InfoIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 10v6" />
      <circle cx="12" cy="7" r=".7" fill="currentColor" />
    </svg>
  );
}

function BookIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v17H6.5A2.5 2.5 0 0 0 4 22V5.5Z" />
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M8 7h8M8 10h6" />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg
      width="21"
      height="21"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.65 17.65l1.42 1.42M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.65 6.35l1.42-1.42" />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21c.7-4.2 3.4-6.3 8-6.3s7.3 2.1 8 6.3H4Z" />
    </svg>
  );
}

function HeroIllustration() {
  return (
    <svg
      className="hero-illustration"
      viewBox="0 0 720 360"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="590" cy="95" r="90" fill="#EEF2FF" />
      <circle cx="665" cy="225" r="70" fill="#E8F0FF" />

      <rect
        x="55"
        y="45"
        width="76"
        height="88"
        rx="20"
        fill="#FFD95A"
        stroke="#172554"
        strokeWidth="7"
      />
      <path
        d="M70 54V40C70 17 86 5 105 5C124 5 139 18 139 40V54"
        stroke="#172554"
        strokeWidth="8"
        strokeLinecap="round"
      />
      <circle cx="93" cy="88" r="9" fill="#172554" />
      <path
        d="M93 98v18"
        stroke="#172554"
        strokeWidth="7"
        strokeLinecap="round"
      />

      <rect
        x="205"
        y="82"
        width="300"
        height="195"
        rx="27"
        fill="#6D7FF2"
        stroke="#172554"
        strokeWidth="8"
      />

      <rect
        x="230"
        y="107"
        width="250"
        height="145"
        rx="14"
        fill="#F8FAFF"
        stroke="#AFC3FF"
        strokeWidth="5"
      />

      <circle cx="320" cy="171" r="8" fill="#172554" />
      <circle cx="391" cy="171" r="8" fill="#172554" />

      <path
        d="M343 191C353 202 368 202 378 191"
        stroke="#172554"
        strokeWidth="6"
        strokeLinecap="round"
      />

      <circle cx="298" cy="195" r="10" fill="#FFB8C7" />
      <circle cx="411" cy="195" r="10" fill="#FFB8C7" />

      <path
        d="M180 280H530L570 310C578 317 573 328 562 328H148C137 328 132 317 140 310L180 280Z"
        fill="#6D7FF2"
        stroke="#172554"
        strokeWidth="8"
      />

      <path
        d="M276 290H434L422 307H288L276 290Z"
        fill="#E6EBFF"
      />

      <rect
        x="425"
        y="20"
        width="135"
        height="74"
        rx="18"
        fill="white"
        stroke="#8CA8FF"
        strokeWidth="5"
      />
      <text
        x="455"
        y="66"
        fontSize="27"
        fontWeight="700"
        fill="#6256D9"
      >
        A → D
      </text>

      <path
        d="M485 120C485 105 497 94 512 96L650 112C666 114 677 127 675 143L665 213C663 229 649 239 633 237L497 221C481 219 471 206 473 190L485 120Z"
        fill="white"
        stroke="#7EA3FF"
        strokeWidth="5"
      />

      <text
        x="510"
        y="150"
        fontSize="22"
        fontWeight="700"
        fill="#6382D9"
      >
        A B C D E F...
      </text>

      <text
        x="510"
        y="187"
        fontSize="22"
        fontWeight="700"
        fill="#7B68D8"
      >
        D E F G H I...
      </text>

      <path
        d="M590 42l5 14 14 5-14 5-5 14-5-14-14-5 14-5 5-14Z"
        fill="#8D7BFF"
      />

      <path
        d="M620 280l5 12 12 5-12 5-5 12-5-12-12-5 12-5 5-12Z"
        fill="#FFD35A"
      />
    </svg>
  );
}

function App() {
  const [type, setType] = useState(true);
  // State baru untuk mengontrol navigasi atas
  const [activeTab, setActiveTab] = useState("home"); 

  return (
    <div className="app">
      {/* NAVBAR */}
      <header className="navbar">
        <div className="navbar-inner">
          <div className="brand">
            <div className="brand-mark">
              <LockIcon size={29} />
            </div>

            <div>
              <div className="brand-name">CipherLab</div>
              <div className="brand-subtitle">
                Cryptography Demonstrator
              </div>
            </div>
          </div>

          <nav className="navigation">
            <button 
              className={`nav-link ${activeTab === "home" ? "active" : ""}`}
              onClick={() => setActiveTab("home")}
            >
              <HomeIcon />
              <span>Home</span>
            </button>

            <button 
              className={`nav-link ${activeTab === "about" ? "active" : ""}`}
              onClick={() => setActiveTab("about")}
            >
              <InfoIcon />
              <span>About</span>
            </button>

            <button 
              className={`nav-link ${activeTab === "howItWorks" ? "active" : ""}`}
              onClick={() => setActiveTab("howItWorks")}
            >
              <BookIcon />
              <span>How It Works</span>
            </button>
          </nav>

          <div className="nav-actions">
            <button className="icon-button" aria-label="Theme">
              <SunIcon />
            </button>

            <button className="profile-button" aria-label="Profile">
              <UserIcon />
            </button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <main>
        <section className="hero">
          <div className="hero-inner">
            <div className="hero-copy">
              <div className="hero-badge">Cryptography Project</div>

              <h1 className="hero-title">
                Caesar Cipher
              </h1>

              <p className="hero-description">
                Encrypt, decrypt, and explore the security limitations
                of the Caesar Cipher through an interactive demonstration.
              </p>
            </div>

            <div className="hero-art">
              <HeroIllustration />
            </div>
          </div>
        </section>

        {/* RENDER HALAMAN BERDASARKAN ACTIVE TAB */}
        {activeTab === "home" && (
          <>
            {/* MODE SWITCH */}
            <section className="mode-section">
              <div className="mode-switch">
                <button
                  type="button"
                  onClick={() => setType(false)}
                  className={`mode-button ${!type ? "active" : ""}`}
                >
                  Brute Force
                </button>

                <button
                  type="button"
                  onClick={() => setType(true)}
                  className={`mode-button ${type ? "active" : ""}`}
                >
                  Caesar Cipher
                </button>
              </div>
            </section>

            {/* CONTENT */}
            <section className="content-wrapper">
              {type ? <CipherPage /> : <BruteForce />}
            </section>
          </>
        )}

        {/* TAMPILAN HOW IT WORKS */}
        {activeTab === "howItWorks" && (
          <section className="content-wrapper">
            <HowItWorks />
          </section>
        )}

        {/* TAMPILAN ABOUT */}
        {activeTab === "about" && (
          <section className="content-wrapper" style={{ padding: "2rem", color: "white", textAlign: "center" }}>
            <h2>About CipherLab</h2>
            <p style={{ marginTop: "1rem" }}>
              CipherLab adalah platform demonstrasi interaktif kriptografi sederhana yang dirancang untuk pembelajaran Caesar Cipher dan analisis serangan Brute Force.
            </p>
          </section>
        )}
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <div>
          <strong>CipherLab</strong>
          <span>Interactive Cryptography Demonstrator</span>
        </div>

        <div>
          Caesar Cipher • Educational Project
        </div>
      </footer>
    </div>
  );
}

export default App;