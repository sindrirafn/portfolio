import React from 'react';
import { useLanguage } from '../LanguageContext';

function Hero() {
  const { content } = useLanguage();

  return (
    <section id="hero">
      <h1>{content.hero.title}</h1>
      <p>{content.hero.subtitle}</p>
      <div>
        <a href="#projects">{content.hero.viewProjects}</a>
        <a href="#contact">{content.hero.contactMe}</a>
      </div>
    </section>
  );
}

export default Hero;