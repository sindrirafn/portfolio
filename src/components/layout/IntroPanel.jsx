import styles from "./IntroPanel.module.css";
import { useLanguage } from '../LanguageContext';

function IntroPanel() {
  const { content } = useLanguage();

  const name = content.IntroPanel?.name || "Sindri Rafn Guðmundsson";
  const title = content.IntroPanel?.title || "Software Specialist / Developer";
  const intro = content.IntroPanel?.intro || "I build practical, user-focused technical solutions with a strong foundation in support, systems, and software development.";
  const imageSrc = content.IntroPanel?.imageSrc || "../assets/images/mynd.JPG";
  const imageAlt = content.IntroPanel?.imageAlt || "Portrait of Sindri Rafn Guðmundsson";
  const badges = content.IntroPanel?.badges || ["React", ".NET", "SQL", "Power BI"];

  return (
    <section className={styles.panel}>
      <div className={styles.inner}>
        <div className={styles.imageWrapper}>
          <img className={styles.image} src={imageSrc} alt={imageAlt} />
        </div>

        <div className={styles.content}>
          <p className={styles.eyebrow}>Portfolio</p>
          <h1 className={styles.name}>{name}</h1>
          <p className={styles.title}>{title}</p>
          <p className={styles.intro}>{intro}</p>

          <div className={styles.badges}>
            {badges.map((badge) => (
              <span key={badge} className={styles.badge}>
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default IntroPanel;