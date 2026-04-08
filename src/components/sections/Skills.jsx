import { useState } from 'react';
import { useLanguage } from '../LanguageContext';
import { skills } from '../../data/skills';
import styles from './Skills.module.css';

function Skills() {
  const { content } = useLanguage();
  const [expandedSections, setExpandedSections] = useState(
    Object.keys(skills).reduce((acc, key) => ({ ...acc, [key]: true }), {})
  );

  const toggleSection = (sectionKey) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionKey]: !prev[sectionKey]
    }));
  };

  return (
    <>
      <div className={styles.skillSections}>
        {Object.entries(skills).map(([sectionKey, skillIds]) => {
          const sectionTitle = content.skills?.sections?.[sectionKey] || sectionKey;
          const isExpanded = expandedSections[sectionKey];

          return (
            <div key={sectionKey} className={styles.skillSection}>
              <button
                className={styles.sectionHeader}
                onClick={() => toggleSection(sectionKey)}
                aria-expanded={isExpanded}
                aria-controls={`section-${sectionKey}`}
              >
                <div className={styles.sectionTitle}>
                  <h3>{sectionTitle}</h3>
                  <span className={styles.skillCount}>({skillIds.length})</span>
                </div>
                <div className={`${styles.chevron} ${isExpanded ? styles.chevronExpanded : ''}`}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </button>

              <div
                id={`section-${sectionKey}`}
                className={`${styles.sectionContent} ${isExpanded ? styles.sectionContentExpanded : ''}`}
                aria-hidden={!isExpanded}
              >
                <div className={styles.skillGrid}>
                  {skillIds.map((skillId) => {
                    const skillName = content.skills?.items?.[skillId] || skillId;
                    return (
                      <div key={skillId} className={styles.skillChip}>
                        <span className={styles.skillName}>{skillName}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Skills;