import { useEffect, useState } from 'react';
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
import Footer from './components/layout/Footer';
import { projects } from './data/projects';


const tabs = [
  { id: "about" },
  { id: "cv", label: "CV" },
  { id: "skills" },
  { id: "projects" },
];

function getRouteState() {
  const projectSlug = window.location.pathname.match(/^\/projects\/([^/]+)\/?$/)?.[1];
  const project = projects.find((item) => item.slug === projectSlug);

  return project
    ? { activeTab: "projects", projectId: project.id }
    : { activeTab: "about", projectId: null };
}

function App() {
  const [routeState, setRouteState] = useState(getRouteState);

  useEffect(() => {
    const handlePopState = () => setRouteState(getRouteState());

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const handleTabChange = (tabId) => {
    setRouteState({ activeTab: tabId, projectId: null });

    if (window.location.pathname !== "/") {
      window.history.pushState({}, "", "/");
    }
  };

  const handleProjectChange = (project) => {
    setRouteState({ activeTab: "projects", projectId: project.id });

    const projectPath = `/projects/${project.slug}`;
    if (window.location.pathname !== projectPath) {
      window.history.pushState({}, "", projectPath);
    }
  };

  return (
    <ThemeProvider>
      <LanguageProvider>
        <Navbar />
        <div className="appShell themeTransition">
          <IntroPanel />

          <TabBar activeTab={routeState.activeTab} onTabChange={handleTabChange} tabs={tabs} />

          <ContentPanel>
            {routeState.activeTab === "about" && (
              <About />
            )}
            {routeState.activeTab === "cv" && (
              <CV onNavigateToTab={handleTabChange} />
            )}
            {routeState.activeTab === "skills" && (
              <Skills />
            )}
            {routeState.activeTab === "projects" && (
              <Projects
                selectedProjectId={routeState.projectId}
                onProjectChange={handleProjectChange}
              />
            )}
          </ContentPanel>
        </div>
        <Footer />
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
