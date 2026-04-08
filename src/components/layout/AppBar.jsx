import styles from "./AppBar.module.css";

const tabs = [
  { id: "about", label: "About" },
  { id: "cv", label: "CV" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

function AppBar({ activeTab, setActiveTab, language, setLanguage }) {
  return (
    <header className={styles.appBar}>
      <div className={styles.inner}>
        {/* Left: Name / Brand */}
        <div className={styles.brand}>
          Sindri Rafn
        </div>

        {/* Center: Tabs */}
        <nav className={styles.tabs}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`${styles.tab} ${
                activeTab === tab.id ? styles.active : ""
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </nav>

        {/* Right: Language toggle */}
        <div className={styles.langToggle}>
          <button
            className={language === "en" ? styles.activeLang : ""}
            onClick={() => setLanguage("en")}
          >
            EN
          </button>
          <button
            className={language === "is" ? styles.activeLang : ""}
            onClick={() => setLanguage("is")}
          >
            IS
          </button>
        </div>
      </div>
    </header>
  );
}

export default AppBar;