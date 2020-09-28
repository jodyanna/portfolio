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
import Anchor from "../util";

class Skills extends React.Component {
  constructor(props) {
    super(props);
    this.skills = {
      javaScript: {
        displayName: "JavaScript",
        icon: jsIcon,
        color: "#e4ba42",
        skillLevel: "70%",
      },
      html: {
        displayName: "HTML",
        icon: htmlIcon,
        color: "#e34c26",
        skillLevel: "90%",
      },
      css : {
        displayName: "CSS",
        icon: cssIcon,
        color: "#563d7c",
        skillLevel: "70%",
      },
      python: {
        displayName: "Python",
        icon: pythonIcon,
        color: "#3572a5",
        skillLevel: "75%",
      },
      php: {
        displayName: "PHP",
        icon: phpIcon,
        color: "#4f5d95",
        skillLevel: "30%",
      }
    }
  }

  render() {
    return (
      <section>
        <h2>[...Skills]</h2>
        <article>
          <h3>Frontend</h3>
          <hr/>
          <div className={styles.container}>
            <Skill skill={this.skills.javaScript} />
            <Skill skill={this.skills.html} />
            <Skill skill={this.skills.css} />
          </div>
          <h3>Backend</h3>
          <hr/>
          <div className={styles.container}>
            <Skill skill={this.skills.python} />
          </div>

        </article>
        <Anchor name={"github-overview"} />
        <article>
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