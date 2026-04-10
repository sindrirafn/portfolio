import styles from "./TabBar.module.css";
import { useLanguage } from "../../LanguageContext";

const defaultTabs = [
  { id: "about", label: "About" },
  { id: "cv", label: "CV" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
];

function TabBar({ activeTab, onTabChange, tabs = defaultTabs }) {
  const { content } = useLanguage();
  const tabLabels = content.navbar?.tabs || {};

  return (
    <section className={styles.section} aria-label={content.navbar?.tabsAriaLabel || "Primary content tabs"}>
      <div className={styles.outer}>
        <div className={styles.bar} role="tablist" aria-orientation="horizontal">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            const label = tab.label || tabLabels[tab.id] || tab.id;

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
                <span className={styles.label}>{label}</span>
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