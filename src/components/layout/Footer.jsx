import styles from "./Footer.module.css";
import { useLanguage } from '../LanguageContext';

function Footer() {
  const { content } = useLanguage();
  const about = content.About || {};

  const year = new Date().getFullYear();
  const name = content.IntroPanel?.name || "Sindri Rafn Gudmundsson";

  const githubUrl = about.githubUrl || "";
  const linkedinUrl = about.linkedInUrl || "";
  const email = about.email || "";
  const phone = about.phone || "";

  const socialLinks = [
    githubUrl && { id: "github", label: about.githubLabel || "GitHub", url: githubUrl },
    linkedinUrl && { id: "linkedin", label: "LinkedIn", url: linkedinUrl },
  ].filter(Boolean);

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p className={styles.copyright}>© {year} {name}</p>

        {socialLinks.length > 0 && (
          <nav className={styles.socialRow} aria-label="Social links">
            {socialLinks.map((link) => (
              <a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                {link.label}
              </a>
            ))}
          </nav>
        )}

        {(email || phone) && (
          <p className={styles.contactRow}>
            {email && (
              <a className={styles.contactLink} href={`mailto:${email}`}>
                {email}
              </a>
            )}

            {email && phone && <span className={styles.divider} aria-hidden="true">•</span>}

            {phone && (
              <a className={styles.contactLink} href={`tel:${phone.replace(/\s+/g, '')}`}>
                +354 {phone}
              </a>
            )}
          </p>
        )}
      </div>
    </footer>
  );
}

export default Footer;