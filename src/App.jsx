import React, { useState } from 'react';
import TabBar from "./components/layout/TabBar/TabBar";
import Navbar from './components/layout/navbar';
// import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
// import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
// import Contact from './components/sections/Contact';
import IntroPanel from './components/layout/IntroPanel';
import { LanguageProvider } from './components/LanguageContext';
import { ThemeProvider } from './components/ThemeContext';
import CV from './components/sections/CV';
import ContentPanel from './components/layout/ContentPanel';

const tabs = [
  { id: "about", label: "About" },
  { id: "cv", label: "CV" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

function App() {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <ThemeProvider>
      <LanguageProvider>
        <Navbar />
        <div className="appShell themeTransition">
          {/* <Hero /> */}
          {/* <div style={{ height: "2rem" }} /> */}
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
          </ContentPanel>
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;

//         {activeTab === "cv" && <div>CV content</div>}
//         {activeTab === "skills" && <div>Skills content</div>}
//         {activeTab === "projects" && <div>Projects content</div>}
//         {activeTab === "contact" && <div>Contact content</div>}
//       </LanguageProvider>
//     </div>

//   );
// }


// export default App;