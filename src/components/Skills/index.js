import React from 'react';

import jsIcon from '../../img/icons/javascript.svg';
import htmlIcon from '../../img/icons/html5.svg';
import cssIcon from '../../img/icons/css.svg';
import pythonIcon from '../../img/icons/python.svg';
import phpIcon from '../../img/icons/php.svg';
import reactIcon from '../../img/icons/react.svg';
import gitIcon from '../../img/icons/git.png';
import scIcon from '../../img/icons/styled-components.png';
import nodeIcon from '../../img/icons/nodejs.svg';
import npmIcon from '../../img/icons/npm.png';
import mysqlIcon from '../../img/icons/mysql.svg';

import styles from "./Skills.module.css";
import Anchor from "../Anchor";
import Line from "../Line";
import Skill from "./Skill";


export default function Skills() {
  const skills = {
    javaScript: {
      displayName: "JavaScript",
      icon: jsIcon
    },
    html: {
      displayName: "HTML",
      icon: htmlIcon
    },
    css : {
      displayName: "CSS",
      icon: cssIcon
    },
    python: {
      displayName: "Python",
      icon: pythonIcon
    },
    php: {
      displayName: "PHP",
      icon: phpIcon
    },
    react: {
      displayName: "React",
      icon: reactIcon
    },
    git: {
      displayName: "git",
      icon: gitIcon
    },
    styledComponents: {
      displayName: "styled-components",
      icon: scIcon
    },
    expressNode: {
      displayName: "Express/Node.js",
      icon: nodeIcon
    },
    npm: {
      displayName: "npm",
      icon: npmIcon
    },
    mysql: {
      displayName: "MySQL",
      icon: mysqlIcon
    }
  }

  return (
    <section>
      <Anchor name={"skills"} />
      <h2>Skills</h2>
      <article className={styles.article}>
        <h3>Frontend</h3>
        <Line />
        <div className={styles.container}>
          <Skill skill={skills.javaScript} />
          <Skill skill={skills.css} />
          <Skill skill={skills.html} />
          <Skill skill={skills.react} />
          <Skill skill={skills.styledComponents} />
        </div>
        <h3>Backend/Database</h3>
        <Line />
        <div className={styles.container}>
          <Skill skill={skills.expressNode} />
          <Skill skill={skills.mysql} />
        </div>
        <h3>Tools</h3>
        <Line />
        <div className={styles.container}>
          <Skill skill={skills.git} />
          <Skill skill={skills.npm} />
        </div>
      </article>

    </section>
  );
}