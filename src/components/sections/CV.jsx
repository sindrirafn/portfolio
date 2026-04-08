import { useState } from 'react';
import { useLanguage } from '../LanguageContext';
import styles from './CV.module.css';

const cvTabs = [
  { id: 'profile', labelKey: 'tabs.profile' },
  { id: 'experience', labelKey: 'tabs.experience' },
  { id: 'education', labelKey: 'tabs.education' },
  { id: 'projects', labelKey: 'tabs.projects' },
  { id: 'other', labelKey: 'tabs.other' },
//   { id: 'references', labelKey: 'tabs.references' },
];

function CV() {
  const { content } = useLanguage();
  const [activeTab, setActiveTab] = useState('profile');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'profile':
        return <ProfileTab data={content.CV.profile} />;
      case 'experience':
        return <ExperienceTab data={content.CV.experience} />;
      case 'education':
        return <EducationTab data={content.CV.education} />;
      case 'projects':
        return <ProjectsTab data={content.CV.projects} />;
      case 'other':
        return <OtherTab data={content.CV} />;
      // case 'references':
      //   return <ReferencesTab data={content.CV.references} />;
      default:
        return <ProfileTab data={content.CV.profile} />;
    }
  };

  return (
    <>
      {/* CV Layout - Sidebar and Content */}
      <div className={styles.cvLayout}>
        {/* Vertical Tabs Sidebar */}
        <div className={styles.tabsSidebar}>
          {cvTabs.map((tab) => {
            const isActive = activeTab === tab.id;
            const label = content.CV?.tabs?.[tab.id] || tab.labelKey;

            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-current={isActive ? 'page' : undefined}
                className={`${styles.verticalTab} ${isActive ? styles.verticalTabActive : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                <span className={styles.verticalTabLabel}>{label}</span>
              </button>
            );
          })}
        </div>

        {/* Content Area */}
        <div className={styles.tabContent}>
          {renderTabContent()}
        </div>
      </div>
    </>
  );
}

function ProfileTab({ data }) {
  if (!data) return null;

  return (
    <div className={styles.profileContent}>
      <div className={styles.profileHeader}>
        <h3 className={styles.profileName}>{data.name}</h3>
        {/* <div className={styles.contactInfo}>
          <div className={styles.contactItem}>
            <span className={styles.contactLabel}>📞</span>
            <span>{data.phone}</span>
          </div>
          <div className={styles.contactItem}>
            <span className={styles.contactLabel}>✉️</span>
            <span>{data.email}</span>
          </div>
          <div className={styles.contactItem}>
            <span className={styles.contactLabel}>📍</span>
            <span>{data.location}</span>
          </div>
        </div> */}
      </div>

      <div className={styles.profileSummary}>
        {/* <h4>Professional Summary</h4> */}
        {data.summary?.map((paragraph, index) => (
          <p key={index} className={styles.summaryParagraph}>
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
}

function ExperienceTab({ data }) {
  if (!data) return null;

  return (
    <div className={styles.experienceList}>
      {data.map((exp) => (
        <div key={exp.id} className={styles.experienceItem}>
          <div className={styles.experienceHeader}>
            <h3 className={styles.experienceTitle}>{exp.title}</h3>
            <div className={styles.experienceMeta}>
              <span className={styles.company}>{exp.company}</span>
              {exp.location && <span className={styles.location}>{exp.location}</span>}
              <span className={styles.period}>{exp.startLabel} - {exp.endLabel}</span>
            </div>
          </div>
          {exp.bullets && exp.bullets.length > 0 && (
            <ul className={styles.achievementsList}>
              {exp.bullets.map((achievement, i) => (
                <li key={i} className={styles.achievement}>{achievement}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}

function EducationTab({ data }) {
  if (!data) return null;

  return (
    <div className={styles.educationList}>
      {data.map((edu) => (
        <div key={edu.id} className={styles.educationItem}>
          <div className={styles.educationHeader}>
            <h3 className={styles.educationDegree}>{edu.degree}</h3>
            <div className={styles.educationMeta}>
              <span className={styles.school}>{edu.school}</span>
              <span className={styles.period}>{edu.startLabel} - {edu.endLabel}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function ProjectsTab({ data }) {
  if (!data) return null;

  return (
    <div className={styles.projectsList}>
      {data.map((project) => (
        <div key={project.id} className={styles.projectItem}>
          <div className={styles.projectHeader}>
            <h3 className={styles.projectTitle}>{project.title}</h3>
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className={styles.githubLink}>
                View on GitHub →
              </a>
            )}
          </div>
          {project.imageSrc && (
            <div className={styles.projectImageWrapper}>
              <img src={project.imageSrc} alt={`${project.title} screenshot`} className={styles.projectImage} />
            </div>
          )}
          {project.bullets && project.bullets.length > 0 && (
            <ul className={styles.projectBullets}>
              {project.bullets.map((bullet, i) => (
                <li key={i} className={styles.projectBullet}>{bullet}</li>
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
    <div className={styles.skillsContent}>
      {/* Languages */}
      <div className={styles.skillSection}>
        <h3 className={styles.skillSectionTitle}>{sectionLabels.languages || 'Languages'}</h3>
        <div className={styles.skillList}>
          {data.languages?.map((lang) => (
            <div key={lang.id} className={styles.skillItem}>
              <div className={styles.skillHeader}>
                <span className={styles.skillName}>{lang.name}</span>
                <span className={styles.skillLevel}>{lang.level}/{lang.max}</span>
              </div>
              <div className={styles.skillBar}>
                <div
                  className={styles.skillProgress}
                  style={{ width: `${(lang.level / lang.max) * 100}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interests */}
      {data.interests && data.interests.length > 0 && (
        <div className={styles.skillSection}>
          <h3 className={styles.skillSectionTitle}>{sectionLabels.interests || 'Interests'}</h3>
          <div className={styles.interestsList}>
            {data.interests.map((interest, index) => (
              <span key={index} className={styles.interestTag}>
                {interest}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function ReferencesTab({ data }) {
  if (!data) return null;

  return (
    <div className={styles.referencesList}>
      {data.map((ref) => (
        <div key={ref.id} className={styles.referenceCard}>
          <div className={styles.referenceHeader}>
            <h3 className={styles.referenceName}>{ref.name}</h3>
            <span className={styles.referenceRole}>{ref.role}</span>
          </div>
          <div className={styles.referenceDetails}>
            <p className={styles.referenceCompany}>{ref.company}</p>
          </div>
          <div className={styles.referenceContact}>
            <div className={styles.contactItem}>
              <span className={styles.contactLabel}>📞</span>
              <span>{ref.phone}</span>
            </div>
            <div className={styles.contactItem}>
              <span className={styles.contactLabel}>✉️</span>
              <span>{ref.email}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CV;