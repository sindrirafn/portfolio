import { useState } from 'react';
import { useLanguage } from '../LanguageContext';
import styles from './CV.module.css';

const cvTabs = [
  { id: 'profile', labelKey: 'tabs.profile' },
  { id: 'experience', labelKey: 'tabs.experience' },
  { id: 'education', labelKey: 'tabs.education' },
  { id: 'projects', labelKey: 'tabs.projects' },
  { id: 'other', labelKey: 'tabs.other' },
];

function CV() {
  const { content } = useLanguage();
  const [activeTab, setActiveTab] = useState('experience');
  const cvData = content.CV || {};

  const renderTabContent = () => {
    switch (activeTab) {
      case 'profile':    return <ProfileTab data={cvData.profile} />;
      case 'experience': return <ExperienceTab data={cvData.experience} />;
      case 'education':  return <EducationTab data={cvData.education} />;
      case 'projects':   return <ProjectsTab data={cvData.projects} />;
      case 'other':      return <OtherTab data={cvData} />;
      default:           return <ProfileTab data={cvData.profile} />;
    }
  };

  return (
    <div className={styles.cvWrapper}>
      <div className={styles.tabBar} role="tablist">
        {cvTabs.map((tab) => {
          const isActive = activeTab === tab.id;
          const label = cvData.tabs?.[tab.id] || tab.labelKey;
          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              className={`${styles.tabBarItem} ${isActive ? styles.tabBarItemActive : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {label}
            </button>
          );
        })}
      </div>

      <div className={styles.contentArea}>
        <div className={styles.mainContent}>
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
}

function ProfileTab({ data }) {
  if (!data) return null;
  return (
    <div className={styles.section}>
      {/* <h2 className={styles.sectionHeading}>Profile</h2> */}
      {data.summary?.map((p, i) => (
        <p key={i} className={styles.paragraphMuted}>{p}</p>
      ))}
    </div>
  );
}

function ExperienceTab({ data }) {
  if (!data) return null;
  return (
    <div className={styles.section}>
      {/* <h2 className={styles.sectionHeading}>Experience</h2>
      <p className={styles.sectionSubtitle}>A summary of my professional background.</p> */}
      
      <div className={styles.timeline}>
        {data.map((exp) => (
          <div key={exp.id} className={styles.timelineEntry}>
            <div className={styles.timelineMeta}>
              <span className={styles.timelineDate}>{exp.startLabel}<br />– {exp.endLabel}</span>
            </div>
            <div className={styles.timelineDot} />
            <div className={styles.timelineContent}>
              <h3 className={styles.timelineTitle}>{exp.title}</h3>
              {exp.company && (
                <p className={styles.timelineCompany}>
                  {exp.company}{exp.location ? ` · ${exp.location}` : ''}
                </p>
              )}
              {exp.bullets?.length > 0 && (
                <ul className={styles.timelineBullets}>
                  {exp.bullets.map((b, i) => (
                    <li key={i} className={styles.timelineBullet}>{b}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function EducationTab({ data }) {
  if (!data) return null;
  return (
    <div className={styles.section}>
      {/* <h2 className={styles.sectionHeading}>Education</h2> */}
      <div className={styles.timeline}>
        {data.map((edu) => (
          <div key={edu.id} className={styles.timelineEntry}>
            <div className={styles.timelineMeta}>
              <span className={styles.timelineDate}>{edu.startLabel}<br />– {edu.endLabel}</span>
            </div>
            <div className={styles.timelineDot} />
            <div className={styles.timelineContent}>
              <h3 className={styles.timelineTitle}>{edu.degree}</h3>
              <p className={styles.timelineCompany}>{edu.school}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProjectsTab({ data }) {
  if (!data) return null;
  return (
    <div className={styles.section}>
      {/* <h2 className={styles.sectionHeading}>Projects</h2> */}
      {data.map((project) => (
        <div key={project.id} className={styles.projectEntry}>
          <div className={styles.projectEntryHeader}>
            <h3 className={styles.timelineTitle}>{project.title}</h3>
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
                GitHub →
              </a>
            )}
          </div>
          {project.bullets?.length > 0 && (
            <ul className={styles.timelineBullets}>
              {project.bullets.map((b, i) => (
                <li key={i} className={styles.timelineBullet}>{b}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}

function OtherTab({ data }) {
  if (!data) return null;
  const sectionLabels = data.otherSections || {};
  return (
    <div className={styles.section}>
      <h2 className={styles.sectionHeading}>{sectionLabels.languages || 'Languages'}</h2>
      <div className={styles.languageList}>
        {data.languages?.map((lang) => (
          <div key={lang.id} className={styles.languageItem}>
            <div className={styles.languageHeader}>
              <span>{lang.name}</span>
              <span className={styles.languageLevel}>{lang.level}/{lang.max}</span>
            </div>
            <div className={styles.skillBar}>
              <div className={styles.skillProgress} style={{ width: `${(lang.level / lang.max) * 100}%` }} />
            </div>
          </div>
        ))}
      </div>
      {data.interests?.length > 0 && (
        <>
          <h2 className={`${styles.sectionHeading} ${styles.sectionHeadingSpaced}`}>
            {sectionLabels.interests || 'Interests'}
          </h2>
          <div className={styles.strengthsChips}>
            {data.interests.map((interest, i) => (
              <span key={i} className={styles.strengthChip}>{interest}</span>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default CV;
