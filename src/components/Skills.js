import React from 'react';
import GitAccountSummary from './GitAccountSummary';
import Anchor from "../util";

import jsIcon from '../img/icons/javascript.svg';
import htmlIcon from '../img/icons/html5.svg';
import cssIcon from '../img/icons/css.svg';
import pythonIcon from '../img/icons/python.svg';
import phpIcon from '../img/icons/php.svg';
import reactIcon from '../img/icons/react.svg';

import styles from "../styles/modules/Skills.module.css";


class Skills extends React.Component {
  constructor(props) {
    super(props);
    this.skills = {
      javaScript: {
        displayName: "JavaScript",
        icon: jsIcon,
      },
      html: {
        displayName: "HTML",
        icon: htmlIcon,
      },
      css : {
        displayName: "CSS",
        icon: cssIcon,
      },
      python: {
        displayName: "Python",
        icon: pythonIcon,
      },
      php: {
        displayName: "PHP",
        icon: phpIcon,
      },
      react: {
        displayName: "React",
        icon: reactIcon,
      }
    }
  }

  render() {
    return (
      <section>
        <h2>Skills</h2>
        <article className={styles.article}>
          <h3>Frontend</h3>
          {this.props.hr}
          <div className={styles.container}>
            <Skill skill={this.skills.javaScript} />
            <Skill skill={this.skills.html} />
            <Skill skill={this.skills.css} />
            <Skill skill={this.skills.react} />
          </div>
          <h3>Backend</h3>
          {this.props.hr}
          <div className={styles.container}>
            <Skill skill={this.skills.python} />
          </div>
        </article>
        <Anchor name={"github-overview"} />
        <article className={styles.article}>
          <GitAccountSummary username={"jodyanna"} hr={this.props.hr} />
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


export default Skills;