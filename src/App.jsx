import { useState } from 'react';
import TabBar from "./components/layout/TabBar/TabBar";
import Navbar from './components/layout/Navbar';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import IntroPanel from './components/layout/IntroPanel';
import { LanguageProvider } from './components/LanguageContext';
import { ThemeProvider } from './components/ThemeContext';
import CV from './components/sections/CV';
import ContentPanel from './components/layout/ContentPanel';

const tabs = [
  { id: "about" },
  { id: "cv", label: "CV" },
  { id: "skills" },
  { id: "projects" },
];

function App() {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <ThemeProvider>
      <LanguageProvider>
        <Navbar />
        <div className="appShell themeTransition">
          <IntroPanel />

          <TabBar activeTab={activeTab} onTabChange={setActiveTab} tabs={tabs} />

          <ContentPanel>
            {activeTab === "about" && (
              <About />
            )}
            {activeTab === "cv" && (
              <CV />
            )}
            {activeTab === "skills" && (
              <Skills />
            )}
            {activeTab === "projects" && (
              <Projects />
            )}
          </ContentPanel>
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
