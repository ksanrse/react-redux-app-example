import "./App.css";

import Header from "./components/Header/Header.tsx";

import RustifySection from "./components/RustifySection.tsx";
import IntroSection from "./components/IntroSection.tsx";
import TabsSection from "./components/TabsSection.tsx";
import { useState } from "react";
import FeedbackSection from "./components/FeedbackSection.tsx";
import type { Tab } from "./types.ts";
import EffectSection from "./components/EffectSection.tsx";

function App() {
  const [tab, setTab] = useState<Tab>("effect");
  return (
    <>
      <Header />
      <div className="ticks"></div>
      <section id="spacer"></section>

      <main>
        <IntroSection />
        <TabsSection
          active={tab}
          onChange={(current: Tab) => setTab(current)}
        />

        {tab === "main" && <RustifySection />}
        {tab === "feedback" && <FeedbackSection />}
        {tab === "effect" && <EffectSection />}
      </main>
    </>
  );
}

export default App;
