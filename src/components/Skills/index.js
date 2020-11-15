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


export default class Skills extends React.Component {
  constructor(props) {
    super(props);
    this.skills = {
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
  }

  render() {
    return (
      <section>
        <Anchor name={"skills"} />
        <h2>Skills</h2>
        <article className={styles.article}>
          <h3>Frontend</h3>
          <Line />
          <div className={styles.container}>
            <Skill skill={this.skills.javaScript} />
            <Skill skill={this.skills.html} />
            <Skill skill={this.skills.css} />
            <Skill skill={this.skills.react} />
          </div>
          <h3>Backend/Database</h3>
          <Line />
          <div className={styles.container}>
            <Skill skill={this.skills.expressNode} />
            <Skill skill={this.skills.mysql} />
          </div>
          <h3>Tools</h3>
          <Line />
          <div className={styles.container}>
            <Skill skill={this.skills.git} />
            <Skill skill={this.skills.npm} />
          </div>
        </article>

      </section>
    );
  }
}


function Skill(props) {
  return (
    <div className={styles.skillContainer}>
      <img src={props.skill.icon} alt="mysql.svg" className={styles.icon}/>
      <p>{props.skill.displayName}</p>
    </div>
  );
}