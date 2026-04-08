import React from 'react';
import { useLanguage } from '../LanguageContext';
import { useTheme } from '../ThemeContext';
import styles from './navbar.module.css';

export default function Navbar() {
    const { language, toggleLanguage, content } = useLanguage();
    const { theme, toggleTheme } = useTheme();

    return (
        <nav className={styles.navbar}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <h1>{content.navbar.logo}</h1>
                </div>
                <div className={styles.controls}>
                    <button onClick={toggleTheme} className={styles.themeToggle}>
                        {theme === 'light' ? '🌙' : '☀️'}
                    </button>
                    <button onClick={toggleLanguage} className={styles.languageToggle}>
                        {language === 'en' ? 'IS' : 'EN'}
                    </button>
                </div>
            </div>
        </nav>
    );
}