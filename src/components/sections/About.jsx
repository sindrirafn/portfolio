import styles from "./About.module.css";
import { useLanguage } from '../LanguageContext';

function About() {
  const { content } = useLanguage();

  const about = content.About || {};
  const heading = about.heading || "About me";
  const introParagraphs = about.introParagraphs || [
    about.intro || "I am a software specialist with a background in computer science and biomedical engineering.",
  ];
  const currentlyLabel = about.currentlyLabel || "Currently";
  const currently =
    about.currently ||
    "I am currently building this portfolio, developing projects, and looking for opportunities in software development or engineering.";

  return (
    <section className={styles.layout}>
      <div className={styles.primary}>
        <header className={styles.header}>
          <h2 className={styles.title}>{heading}</h2>
        </header>

        <div className={styles.introBlock}>
          {introParagraphs.map((paragraph) => (
            <p key={paragraph} className={styles.introParagraph}>
              {paragraph}
            </p>
          ))}
        </div>

        <div className={styles.currentlyBlock}>
          <h3 className={styles.currentlyTitle}>{currentlyLabel}</h3>
          <p className={styles.currentlyText}>{currently}</p>
        </div>
      </div>
    </section>
  );
}

export default About;
