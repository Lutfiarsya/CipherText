import { HeroIllustration } from "@/src/components/layout/hero-illustration";

export function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-inner">
        <div className="hero-copy">
          <div className="hero-badge">Cryptography Project</div>

          <h1 className="hero-title">Caesar Cipher</h1>

          <p className="hero-description">
            Encrypt, decrypt, and explore the security limitations of the
            Caesar Cipher through an interactive demonstration.
          </p>
        </div>

        <div className="hero-art">
          <HeroIllustration />
        </div>
      </div>
    </section>
  );
}
