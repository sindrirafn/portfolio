import { useMemo, useState } from "react";
import { useLanguage } from "../LanguageContext";
import { projects } from "../../data/projects";
import skillStyles from "./Skills.module.css";
import styles from "./Projects_Dev.module.css";
import ImageCompareSlider from "../ui/ImageCompareSlider";

function ProjectLinkIcon({ id }) {
  if (id === "github") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.39.6.11.8-.26.8-.58v-2.2c-3.34.72-4.04-1.42-4.04-1.42-.55-1.39-1.34-1.75-1.34-1.75-1.1-.75.08-.73.08-.73 1.21.08 1.85 1.24 1.85 1.24 1.08 1.84 2.81 1.3 3.49 1 .11-.78.42-1.31.77-1.61-2.66-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.53.12-3.18 0 0 1.01-.32 3.3 1.23a11.4 11.4 0 0 1 6.01 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.49 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.2.69.8.58A12 12 0 0 0 24 12c0-6.63-5.37-12-12-12Z"
        />
      </svg>
    );
  }

  if (id === "live") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm6.93 9h-3.02a15.8 15.8 0 0 0-1.4-5.03A8.03 8.03 0 0 1 18.93 11Zm-6.93 9c-.93 0-2.43-1.92-2.95-5h5.9c-.52 3.08-2.02 5-2.95 5Zm-3.24-7a14.1 14.1 0 0 1 0-2h6.48a14.1 14.1 0 0 1 0 2H8.76Zm-4.69-2h3.02c.17-1.84.67-3.54 1.4-5.03A8.03 8.03 0 0 0 4.07 11Zm3.02 2H4.07a8.03 8.03 0 0 0 4.42 5.03A15.8 15.8 0 0 1 7.09 13Zm5.86-9c.93 0 2.43 1.92 2.95 5h-5.9c.52-3.08 2.02-5 2.95-5Zm1.56 14.03A15.8 15.8 0 0 0 15.91 13h3.02a8.03 8.03 0 0 1-4.42 5.03Z"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M14 3h7v7h-2V6.41l-9.3 9.3-1.4-1.42 9.29-9.29H14V3ZM5 5h6v2H7v10h10v-4h2v6H5V5Z"
      />
    </svg>
  );
}

function Projects() {
  const { content } = useLanguage();
  const pageContent = content.projectsPage || {};
  const projectTexts = pageContent.items || {};
  const [activeProjectId, setActiveProjectId] = useState(projects[0]?.id || "");

  const activeProject = useMemo(
    () => projects.find((project) => project.id === activeProjectId) || projects[0],
    [activeProjectId]
  );

  if (!activeProject) return null;

  const activeText = projectTexts[activeProject.id] || {};
  const statusLabel = pageContent.statuses?.[activeProject.status] || activeProject.status;
  const summaryPoints = activeText.highlights || [];
  const activeLinks = [
    {
      id: "github",
      label: pageContent.labels?.github || "GitHub",
      url: activeProject.githubUrl,
    },
    {
      id: "live",
      label: pageContent.labels?.live || "Live",
      url: activeProject.liveUrl,
    },
    {
      id: "try",
      label: pageContent.labels?.tryItOut || "Try It Out",
      url: activeProject.tryItOutUrl,
    },
  ].filter((link) => Boolean(link.url));

  const headerLinkLabels = {
    github: pageContent.labels?.viewOnGithub || "View on GitHub",
    live: pageContent.labels?.viewLive || "View Live",
    try: pageContent.labels?.tryItOut || "Try It Out",
  };

  return (
    <section className={styles.projectsWrapper}>
      <div className={styles.tabBar} role="tablist" aria-label={pageContent.navAriaLabel || "Project navigation"}>
        {projects.map((project) => {
          const text = projectTexts[project.id] || {};
          const isActive = project.id === activeProject.id;

          return (
            <button
              key={project.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              className={`${styles.tabBarItem} ${isActive ? styles.tabBarItemActive : ""}`}
              onClick={() => setActiveProjectId(project.id)}
            >
              <span className={styles.tabBarItemTitle}>{text.title || project.id}</span>
              {project.date && <span className={styles.tabBarItemMeta}>{project.date}</span>}
            </button>
          );
        })}
      </div>

      <div className={styles.contentArea}>
        <article key={activeProject.id} className={styles.mainContent}>
          <header className={styles.projectHeader}>
            <h2 className={styles.projectTitle}>{activeText.title || activeProject.id}</h2>
            <div className={styles.metaRow}>
              {statusLabel && (
                <span
                  className={`${styles.metaStatusBadge} ${
                    activeProject.status === "completed" ? styles.statusCompleted : styles.statusActive
                  }`}
                >
                  {statusLabel}
                </span>
              )}
              {activeProject.date && (
                <span className={styles.metaYear}>{activeProject.date}</span>
              )}

              {activeLinks.length > 0 && (
                <div className={styles.headerLinks}>
                  {activeLinks.map((link) => (
                    <a
                      key={link.id}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.headerLinkButton}
                      aria-label={headerLinkLabels[link.id] || link.label}
                      title={headerLinkLabels[link.id] || link.label}
                    >
                      <span className={styles.headerLinkIcon}>
                        <ProjectLinkIcon id={link.id} />
                      </span>
                      <span className={styles.headerLinkText}>{headerLinkLabels[link.id] || link.label}</span>
                    </a>
                  ))}
                </div>
              )}
            </div>
          </header>

          {summaryPoints.length > 0 ? (
            <ul className={styles.projectSummaryList}>
              {summaryPoints.map((point) => (
                <li key={point} className={styles.projectSummaryPoint}>
                  {point}
                </li>
              ))}
            </ul>
          ) : (
            <p className={styles.projectSummary}>{activeText.summary}</p>
          )}

          <div className={styles.previewSurface}>
            {activeProject.compareImages ? (
              <ImageCompareSlider
                before={activeProject.compareImages.before}
                after={activeProject.compareImages.after}
                beforeLabel={activeProject.compareImages.beforeLabel}
                afterLabel={activeProject.compareImages.afterLabel}
              />
            ) : activeProject.image ? (
              <img
                src={activeProject.image}
                alt={activeText.imageAlt || activeText.title || activeProject.id}
                className={styles.previewImage}
              />
            ) : (
              <div className={styles.previewFallback}>
                {pageContent.labels?.imageFallback || "Preview coming soon"}
              </div>
            )}
          </div>

          <section className={styles.sectionBlock}>
            <h3 className={styles.sectionHeading}>{pageContent.labels?.skills || "Skills & Technologies"}</h3>
            <div className={styles.skillList}>
              {activeProject.skills.map((skillId) => (
                <span key={skillId} className={skillStyles.skillChip}>
                  <span className={skillStyles.skillName}>{content.skills?.items?.[skillId] || skillId}</span>
                </span>
              ))}
            </div>
          </section>
        </article>
      </div>
    </section>
  );
}

export default Projects;
