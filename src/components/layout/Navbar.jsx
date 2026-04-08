import { useLanguage } from '../LanguageContext';
import { useTheme } from '../ThemeContext';
import styles from './navbar.module.css';

export default function Navbar() {
    const { language, setLanguage, content } = useLanguage();
    const { theme, toggleTheme } = useTheme();
    const controls = content.navbar?.controls || {};

    return (
        <nav className={styles.navbar}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <h1>{content.navbar?.logo || "Sindri Rafn"}</h1>
                </div>
                <div className={styles.controls}>
                    <button
                        type="button"
                        onClick={toggleTheme}
                        className={styles.themeToggle}
                        aria-label={controls.themeToggleAria || "Toggle theme"}
                        aria-pressed={theme === 'dark'}
                        title={controls.themeToggleAria || "Toggle theme"}
                    >
                        {theme === 'light' ? '🌙' : '☀️'}
                    </button>
                    <div className={styles.languageToggle} role="group" aria-label={controls.languageToggleAria || "Language selector"}>
                        <button
                            type="button"
                            className={`${styles.languageButton} ${language === 'en' ? styles.languageButtonActive : ''}`}
                            onClick={() => setLanguage('en')}
                            aria-pressed={language === 'en'}
                        >
                            EN
                        </button>
                        <button
                            type="button"
                            className={`${styles.languageButton} ${language === 'is' ? styles.languageButtonActive : ''}`}
                            onClick={() => setLanguage('is')}
                            aria-pressed={language === 'is'}
                        >
                            IS
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}