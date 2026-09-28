import { useState } from "react";
import { Footer } from "@/src/components/layout/footer";
import { Navbar } from "@/src/components/layout/navbar";
import { AboutSection } from "@/src/modules/about-section";
import { HeroSection } from "@/src/modules/hero-section";
import { HomeSection } from "@/src/modules/home-section";
import { HowItWorksSection } from "@/src/modules/how-it-works-section";
import { TestCasesSection } from "@/src/modules/test-cases-section";

/** Tab selain "home" dirender di dalam content-wrapper. */
const PAGES = {
  about: AboutSection,
  howItWorks: HowItWorksSection,
  testCases: TestCasesSection,
};

function App() {
  const [activeTab, setActiveTab] = useState("home");
  const Page = PAGES[activeTab];

  return (
    <div className="app">
      <Navbar activeTab={activeTab} onTabChange={setActiveTab} />

      <main>
        <HeroSection />

        {Page ? (
          <section className="content-wrapper">
            <Page />
          </section>
        ) : (
          <HomeSection />
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;
