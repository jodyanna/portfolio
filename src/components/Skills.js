import React from 'react';
import GitAccountSummary from './GitAccountSummary';

import jsIcon from '../img/icons/javascript.svg';
import htmlIcon from '../img/icons/html5.svg';
import cssIcon from '../img/icons/css.svg';
import pythonIcon from '../img/icons/python.svg';
import phpIcon from '../img/icons/php.svg';
import reactIcon from '../img/icons/react.svg';
import mysqlIcon from '../img/icons/mysql.svg';

import styles from "../styles/modules/Skills.module.css";

class Skills extends React.Component {
  constructor(props) {
    super(props);
    this.skills = {
      javaScript: {
        displayName: "JavaScript (ES6)",
        icon: jsIcon,
        color: "#e4ba42",
        skillLevel: "70%",
      },
      html: {
        displayName: "HTML 5",
        icon: htmlIcon,
        color: "#e34c26",
        skillLevel: "90%",
      },
      css : {
        displayName: "CSS 3",
        icon: cssIcon,
        color: "#563d7c",
        skillLevel: "70%",
      },
      python: {
        displayName: "Python 3",
        icon: pythonIcon,
        color: "#3572a5",
        skillLevel: "75%",
      },
      php: {
        displayName: "PHP 7",
        icon: phpIcon,
        color: "#4f5d95",
        skillLevel: "30%",
      }
    }
    this.skillsSummary = ``;
  }

  render() {
    return (
      <section>
        <h2 id={"skills"}>[...Skills]</h2>
        <article className={styles.article}>
          <div className={styles.container}>
            <Skill skill={this.skills.javaScript} />
            <Skill skill={this.skills.html} />
            <Skill skill={this.skills.css} />
            <Skill skill={this.skills.python} />
          </div>
        </article>
        <article id={"github-overview"}>
          <GitAccountSummary username={"jodyanna"} />
        </article>
      </section>
    );
  }
}


class Skill extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={styles.containerRow}>
        <img src={this.props.skill.icon} alt="mysql.svg" className={styles.icon}/>
        <p>{this.props.skill.displayName}</p>
      </div>
    )
  }
}



export default Skills;