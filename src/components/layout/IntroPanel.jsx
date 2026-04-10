import portraitImage from '../../assets/images/mynd.JPG';
import styles from "./IntroPanel.module.css";
import { useLanguage } from '../LanguageContext';

function IntroActionIcon({ id }) {
  if (id === 'linkedin') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3A1.97 1.97 0 0 0 3.28 4.97c0 1.08.88 1.97 1.97 1.97a1.97 1.97 0 1 0 0-3.94ZM20.72 13.02c0-3.12-1.66-4.57-3.88-4.57-1.79 0-2.59.98-3.04 1.67V8.5h-3.38V20h3.38v-6.03c0-1.59.3-3.12 2.27-3.12 1.95 0 1.98 1.82 1.98 3.22V20h3.39l-.01-6.98Z"
        />
      </svg>
    );
  }

  if (id === 'github') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.39.6.11.8-.26.8-.58v-2.2c-3.34.72-4.04-1.42-4.04-1.42-.55-1.39-1.34-1.75-1.34-1.75-1.1-.75.08-.73.08-.73 1.21.08 1.85 1.24 1.85 1.24 1.08 1.84 2.81 1.3 3.49 1 .11-.78.42-1.31.77-1.61-2.66-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.53.12-3.18 0 0 1.01-.32 3.3 1.23a11.4 11.4 0 0 1 6.01 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.49 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.2.69.8.58A12 12 0 0 0 24 12c0-6.63-5.37-12-12-12Z"
        />
      </svg>
    );
  }

  if (id === 'email') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M3 5h18a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Zm0 2v.01L12 13l9-5.99V7H3Zm18 10V9.37l-8.46 5.64a1 1 0 0 1-1.08 0L3 9.37V17h18Z"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M6.62 10.79a15.46 15.46 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.03-.24c1.12.37 2.3.56 3.56.56a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.26.19 2.44.56 3.56a1 1 0 0 1-.24 1.03l-2.2 2.2Z"
      />
    </svg>
  );
}

function IntroPanel() {
  const { content } = useLanguage();

  const name = content.IntroPanel?.name || "Sindri Rafn Guðmundsson";
  const title = content.IntroPanel?.title || "Software Specialist / Developer";
  const intro = content.IntroPanel?.intro || "I build practical, user-focused technical solutions with a strong foundation in support, systems, and software development.";
  const configuredImageSrc = content.IntroPanel?.imageSrc;
  const imageSrc = configuredImageSrc && !configuredImageSrc.includes('src/assets/') ? configuredImageSrc : portraitImage;
  const imageAlt = content.IntroPanel?.imageAlt || "Portrait of Sindri Rafn Guðmundsson";
  const about = content.About || {};

  const actions = [
    about.linkedInUrl && {
      id: 'linkedin',
      href: about.linkedInUrl,
      label: 'LinkedIn',
      value: 'LinkedIn',
      external: true,
    },
    about.githubUrl && {
      id: 'github',
      href: about.githubUrl,
      label: about.githubLabel || 'GitHub',
      value: about.githubValue || about.githubLabel || 'GitHub',
      external: true,
    },
    about.email && {
      id: 'email',
      href: `mailto:${about.email}`,
      label: about.emailLabel || 'Email',
      value: about.email,
      external: false,
    },
    about.phone && {
      id: 'phone',
      href: `tel:${about.phone.replace(/\s+/g, '')}`,
      label: about.phoneLabel || 'Phone',
      value: about.phone,
      external: false,
    },
  ].filter(Boolean);

  return (
    <section className={styles.panel}>
      <div className={styles.inner}>
        <div className={styles.imageWrapper}>
          <img className={styles.image} src={imageSrc} alt={imageAlt} />
        </div>

        <div className={styles.content}>
          <h1 className={styles.name}>{name}</h1>
          <p className={styles.title}>{title}</p>
          <p className={styles.intro}>{intro}</p>

          {actions.length > 0 && (
            <div className={styles.actions}>
              {actions.map((action) => (
                <a
                  key={action.id}
                  href={action.href}
                  className={styles.actionLink}
                  aria-label={action.label}
                  title={action.label}
                  target={action.external ? '_blank' : undefined}
                  rel={action.external ? 'noopener noreferrer' : undefined}
                >
                  <span className={styles.actionIcon}>
                    <IntroActionIcon id={action.id} />
                  </span>
                  <span className={styles.actionLabel}>{action.label}</span>
                </a>
              ))}
            </div>
          )}
        </div>
        
      </div>
    </section>
  );
}

export default IntroPanel;