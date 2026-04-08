import styles from "./About.module.css";
import { useLanguage } from '../LanguageContext';

function LinkIcon({ type }) {
  if (type === "email") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M4 7.5A2.5 2.5 0 0 1 6.5 5h11A2.5 2.5 0 0 1 20 7.5v9a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 4 16.5v-9Zm1.5.1 6.1 4.75a.67.67 0 0 0 .8 0l6.1-4.75"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (type === "phone") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M6.8 4.6c.5-.5 1.2-.5 1.7-.1l2 1.6c.5.4.6 1.1.4 1.7l-.8 1.8c-.1.3 0 .7.2 1 1.3 1.8 2.9 3.4 4.7 4.7.3.2.7.3 1 .2l1.8-.8c.6-.3 1.3-.1 1.7.4l1.6 2c.4.5.4 1.3-.1 1.7l-1.4 1.3c-.6.5-1.4.8-2.2.7-2.6-.3-5.1-1.5-7.4-3.8S6 11.2 5.7 8.6c-.1-.8.2-1.6.7-2.2l1.4-1.8Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (type === "location") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M12 20s6-5 6-10a6 6 0 1 0-12 0c0 5 6 10 6 10Zm0-7.2a2.2 2.2 0 1 0 0-4.4 2.2 2.2 0 0 0 0 4.4Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M9 18c-3.5 1-5-1.5-5-1.5M9 18v-3.25c0-1.1.1-1.62-.5-2.25C5.75 12.2 4.5 11.1 4.5 8.5A3.6 3.6 0 0 1 5.5 6c-.1-.4-.45-1.3.1-2.75 0 0 .85-.3 2.8 1a9.7 9.7 0 0 1 5.2 0c1.95-1.3 2.8-1 2.8-1 .55 1.45.2 2.35.1 2.75a3.6 3.6 0 0 1 1 2.5c0 2.61-1.26 3.7-4 4-.6.63-.6 1.24-.6 2.25V18"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

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
  const linksLabel = about.linksLabel || "Links";
  const contactLabel = about.contactLabel || "Contact";
  const contactText = about.contactText || "The easiest way to reach me is by email.";
  const githubLabel = about.githubLabel || "GitHub";
  const githubValue = about.githubValue || "github.com/sindrirafn";
  const emailLabel = about.emailLabel || "Email";
  const phoneLabel = about.phoneLabel || "Phone";
  const locationLabel = about.locationLabel || "Location";
  const githubUrl = about.githubUrl || "https://github.com/sindrirafn";
  const email = about.email || content.CV?.profile?.email || "your@email.com";
  const phone = about.phone || content.CV?.profile?.phone || "";
  const location = about.location || "Hveragerði";

  const links = [
    { id: "github", label: githubLabel, value: githubValue, url: githubUrl, type: "github" },
  ].filter(Boolean);

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

        {/*
          Focus section intentionally kept available in content,
          but hidden in the UI for now as requested.
        */}
        {/*
        <div className={styles.currentlyBlock}>
          <h3 className={styles.currentlyTitle}>{about.focusLabel}</h3>
          <p className={styles.currentlyText}>{about.focus}</p>
        </div>
        */}

        <div className={styles.currentlyBlock}>
          <h3 className={styles.currentlyTitle}>{currentlyLabel}</h3>
          <p className={styles.currentlyText}>{currently}</p>
        </div>
      </div>

      <aside className={styles.sidebar} aria-label={contactLabel}>
        <div className={styles.sidebarSection}>
          <h3 className={styles.sidebarTitle}>{linksLabel}</h3>
          <div className={styles.linkList}>
            {links.map((link) => (
              <a
                key={link.id}
                className={styles.linkItem}
                href={link.url}
                target="_blank"
                rel="noreferrer"
              >
                <span className={styles.linkIcon}>
                  <LinkIcon type={link.type} />
                </span>
                <span className={styles.linkCopy}>
                  <span className={styles.linkLabel}>{link.label}</span>
                  <span className={styles.linkValue}>{link.value}</span>
                </span>
              </a>
            ))}
          </div>
        </div>

        <div className={styles.sidebarSection}>
          <h3 className={styles.sidebarTitle}>{contactLabel}</h3>
          <p className={styles.contactText}>{contactText}</p>
          <div className={styles.contactList}>
            <a className={styles.emailLink} href={`mailto:${email}`}>
              <span className={styles.linkIcon}>
                <LinkIcon type="email" />
              </span>
              <span className={styles.emailCopy}>
                <span className={styles.linkLabel}>{emailLabel}</span>
                <span className={styles.linkValue}>{email}</span>
              </span>
            </a>
            <a className={styles.contactItem} href={phone ? `tel:${phone.replace(/\s+/g, "")}` : undefined}>
              <span className={styles.linkIcon}>
                <LinkIcon type="phone" />
              </span>
              <span className={styles.emailCopy}>
                <span className={styles.linkLabel}>{phoneLabel}</span>
                <span className={styles.linkValue}>{phone || "-"}</span>
              </span>
            </a>
            {/* <div className={styles.contactItem}>
              <span className={styles.linkIcon}>
                <LinkIcon type="location" />
              </span>
              <span className={styles.emailCopy}>
                <span className={styles.linkLabel}>{locationLabel}</span>
                <span className={styles.linkValue}>{location}</span>
              </span>
            </div> */}
          </div>
        </div>
      </aside>
    </section>
  );
}

export default About;
