import { useMemo, useState } from "react";
import { useLanguage } from "../LanguageContext";
import { projects } from "../../data/projects";
import skillStyles from "./Skills.module.css";
import styles from "./Projects.module.css";

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

  return (
    <section className={styles.projectsLayout}>
      <aside className={styles.projectNav} aria-label={pageContent.navAriaLabel || "Project navigation"}>
        {projects.map((project) => {
          const text = projectTexts[project.id] || {};
          const isActive = project.id === activeProject.id;

          return (
            <button
              key={project.id}
              type="button"
              className={`${styles.projectNavItem} ${isActive ? styles.projectNavItemActive : ""}`}
              onClick={() => setActiveProjectId(project.id)}
              aria-current={isActive ? "page" : undefined}
            >
              <span className={styles.projectNavTitle}>{text.title || project.id}</span>
              {project.date && <span className={styles.projectNavMeta}>{project.date}</span>}
            </button>
          );
        })}
      </aside>

      <article key={activeProject.id} className={styles.projectDetail}>
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
          {activeProject.image ? (
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

        {activeLinks.length > 0 && (
          <section className={styles.sectionBlock}>
            <h3 className={styles.sectionHeading}>{pageContent.labels?.links || "Project Links"}</h3>
            <div className={styles.linksRow}>
              {activeLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.projectLink}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </section>
        )}
      </article>
    </section>
  );
}

export default Projects;
