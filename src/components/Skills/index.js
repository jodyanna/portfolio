import React from 'react';

import styles from "./Skills.module.css";
import Anchor from "../Anchor";
import Line from "../Line";
import TechFig from "../TechFig";

export default function Skills() {
  const skills = {
    javaScript: "JavaScript",
    html: "HTML",
    css : "CSS",
    python: "Python",
    php: "PHP",
    react: "React",
    git: "git",
    styledComponents: "styled-components",
    expressNode: "Express/Node.js",
    npm: "npm",
    mysql: "MySQL"
  }

  return (
    <section>
      <Anchor name={"skills"} />
      <h2>Skills</h2>
      <article className={styles.article}>
        <h3>Frontend</h3>
        <Line />
        <div className={styles.container}>
          <TechFig tech={skills.javaScript} />
          <TechFig tech={skills.css} />
          <TechFig tech={skills.html} />
          <TechFig tech={skills.react} />
          <TechFig tech={skills.styledComponents} />
        </div>
        <h3>Backend/Database</h3>
        <Line />
        <div className={styles.container}>
          <TechFig tech={skills.expressNode} />
          <TechFig tech={skills.mysql} />
        </div>
        <h3>Tools</h3>
        <Line />
        <div className={styles.container}>
          <TechFig tech={skills.git} />
          <TechFig tech={skills.npm} />
        </div>
      </article>
    </section>
  );
}