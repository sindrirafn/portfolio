
import styles from "./About.module.css";
import { useLanguage } from '../LanguageContext';

function About() {
  const { content } = useLanguage();

  const heading = content.About?.heading || "About me";
  const lead = content.About?.lead || "I enjoy building practical digital solutions and improving systems in ways that make everyday work smoother, clearer, and more effective.";
  const body = content.About?.body || [];
  const githubUrl = content.About?.githubUrl || "https://github.com/sindrirafn";
  const linkedinUrl = content.About?.linkedInUrl || "";
  const email = content.About?.email || "your@email.com";

  return (
    <>
      <div className={styles.header}>
        <h2 className={styles.title}>{heading}</h2>
        <p className={styles.lead}>{lead}</p>
      </div>

      <div className={styles.content}>
        <div className={styles.textBlock}>
          {body.map((paragraph, index) => (
            <p key={index} className={styles.paragraph}>
              {paragraph}
            </p>
          ))}
        </div>

        <aside className={styles.sideCard}>
          <h3 className={styles.sideTitle}>Links</h3>

          <div className={styles.linkList}>
            <a
              className={styles.linkCard}
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
            >
              <span className={styles.linkLabel}>GitHub</span>
              <span className={styles.linkValue}>View profile</span>
            </a>

            {linkedinUrl && (
              <a
                className={styles.linkCard}
                href={linkedinUrl}
                target="_blank"
                rel="noreferrer"
              >
                <span className={styles.linkLabel}>LinkedIn</span>
                <span className={styles.linkValue}>Open profile</span>
              </a>
            )}

            <a className={styles.linkCard} href={`mailto:${email}`}>
              <span className={styles.linkLabel}>Email</span>
              <span className={styles.linkValue}>{email}</span>
            </a>
          </div>
        </aside>
      </div>
    </>
  );
}

export default About;