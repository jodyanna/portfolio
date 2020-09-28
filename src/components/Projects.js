import React from 'react';
import Anchor from "../util";
import styles from '../styles/modules/Projects.module.css';

import cssIcon from '../img/icons/css.svg';
import htmlIcon from '../img/icons/html5.svg';
import jsIcon from '../img/icons/javascript.svg';
import mysqlIcon from '../img/icons/mysql.svg';
import phpIcon from '../img/icons/php.svg';
import pythonIcon from '../img/icons/python.svg';
import reactIcon from '../img/icons/react.svg';

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.projectOne = {
      name: "listen-bot",
      id: "listen-bot",
      type: "Full Stack Web App",
      techUsed: ["JavaScript", "CSS", "HTML", "PHP", "MySQL"],
      description: [
        "A simple web app that allows users to create and read blog posts anonymously",
        "",
        ""
      ],
      link: "",
      gitLink: "https://github.com/jodyanna/listen-bot",
    }
    this.projectTwo = {
      name: "Spiral Designs",
      id: "spiral-designs",
      type: "Web App",
      techUsed: ["JavaScript", "CSS", "HTML"],
      description: [
        "Web app that displays an arithmetic spiral animation using HTML canvas",
        "Spiral is rendered at 10 fps with all settings being updated in real time",
        ""
      ],
      link: "https://spiral-designs.netlify.app/",
      gitLink: "https://github.com/jodyanna/spiral_designs",
    }
  }

  render() {
    return (
      <section>
        <h2 id={"projects"}>Projects = {"{...}"}</h2>
        <Anchor name={this.projectOne.id} />
        <Project project={this.projectOne}/>
        <Anchor name={this.projectTwo.id} />
        <Project project={this.projectTwo}/>
      </section>
    );
  }
}

class Project extends React.Component {
  constructor(props) {
    super(props);
    this.icons = {
      "JavaScript": jsIcon,
      "HTML": htmlIcon,
      "CSS": cssIcon,
      "Python": pythonIcon,
      "PHP": phpIcon,
      "MySQL": mysqlIcon,
      "React": reactIcon
    }
  }

  render() {
    const renderTechList = () => {
      return this.props.project.techUsed.map(tech => {
        return (
          <figure className={styles.iconContainer}>
            <img src={this.icons[tech]} alt={tech} className={styles.icon}/>
            <figcaption className={styles.caption}>{tech}</figcaption>
          </figure>)
      })
    }

    return (
      <article className={styles.article}>
        <h3>{this.props.project.name}</h3>
        <h4 className={styles.caption}>{this.props.project.type}</h4>
        <hr/>
        <div className={styles.container}>
          {renderTechList()}
        </div>
        <div className={styles.container}>
          <ul className={styles.textContainer}>
            {this.props.project.description.map(desc => <li className={styles.li}>{desc}</li>)}
          </ul>
          <div className={styles.buttonContainer}>
            <button className={styles.button} onClick={e => {
              e.preventDefault();
              window.location.href = this.props.project.link;
            }}
            >View Site</button>
            <button className={styles.button} onClick={e => {
              e.preventDefault();
              window.location.href = this.props.project.gitLink;
            }}
            >Git Repo</button>
          </div>
        </div>
      </article>
    );
  }
}

export default Projects;