import { useState } from "react";
import { BruteForceSection } from "@/src/modules/brute-force-section";
import { CaesarCipherSection } from "@/src/modules/caesar-cipher-section";
import { cn } from "@/src/lib/utils";

export function HomeSection() {
  const [showCipher, setShowCipher] = useState(true);

  return (
    <>
      <section className="mode-section">
        <div className="mode-switch">
          <button
            type="button"
            onClick={() => setShowCipher(false)}
            className={cn("mode-button", !showCipher && "active")}
          >
            Brute Force
          </button>

          <button
            type="button"
            onClick={() => setShowCipher(true)}
            className={cn("mode-button", showCipher && "active")}
          >
            Caesar Cipher
          </button>
        </div>
      </section>

      <section className="content-wrapper">
        {showCipher ? <CaesarCipherSection /> : <BruteForceSection />}
      </section>
    </>
  );
}
