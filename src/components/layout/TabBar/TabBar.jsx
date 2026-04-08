import styles from "./TabBar.module.css";

const defaultTabs = [
  { id: "about", label: "About" },
  { id: "cv", label: "CV" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

function TabBar({ activeTab, onTabChange, tabs = defaultTabs }) {
  return (
    <section className={styles.section} aria-label="Primary content tabs">
      <div className={styles.outer}>
        <div className={styles.bar} role="tablist" aria-orientation="horizontal">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;

            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-current={isActive ? "page" : undefined}
                className={`${styles.tab} ${isActive ? styles.tabActive : ""}`}
                onClick={() => onTabChange(tab.id)}
              >
                <span className={styles.label}>{tab.label}</span>
                <span
                  className={`${styles.indicator} ${
                    isActive ? styles.indicatorActive : ""
                  }`}
                  aria-hidden="true"
                />
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default TabBar;