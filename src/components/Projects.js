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
      techUsed: ["JavaScript", "CSS", "HTML", "PHP", "MySQL"],
      description: `A simple web app that allows users to create and read blog posts anonymously. User posts are stored 
                  in a MySQL database with CRUD operations written in PHP. View uses basic HTML and custom CSS styles
                  with dynamic content rendered by JavaScript.`,
      link: "",
      gitLink: "https://github.com/jodyanna/listen-bot",
    }
    this.projectTwo = {
      name: "Spiral Designs",
      id: "spiral-designs",
      techUsed: ["JavaScript", "CSS", "HTML"],
      description: `Web app that displays an arithmetic spiral animation using HTML canvas. Spiral is rendered at 10 fps
                  with all settings being updated in real time. Written with vanilla JavaScript in an object oriented 
                  design paradigm.`,
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
      <article>
        <h3>{this.props.project.name}</h3>
        <hr/>
        <div className={styles.container}>
          {renderTechList()}
        </div>
        <p>{this.props.project.description}</p>
        <a href={this.props.project.link}>Live Site</a>
        <a href={this.props.project.gitLink}>GitHub Repo</a>
      </article>
    );
  }
}

export default Projects;