import React from 'react';
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
      techUsed: ["JavaScript", "CSS", "HTML", "PHP", "MySQL"],
      description: `A simple web app that allows users to create and read blog posts anonymously. User posts are stored 
                  in a MySQL database with CRUD operations written in PHP. View uses basic HTML and custom CSS styles
                  with dynamic content rendered by JavaScript.`,
      gitLink: "https://github.com/jodyanna/listen-bot",
    }
    this.projectTwo = {
      name: "Spiral Designs",
      techUsed: ["JavaScript", "CSS", "HTML"],
      description: `Web app that displays an arithmetic spiral animation using HTML canvas. Spiral is rendered at 10 fps
                  with all settings being updated in real time. Written with vanilla JavaScript in an object oriented 
                  design paradigm.`,
      gitLink: "https://github.com/jodyanna/spiral_designs",
    }
  }

  render() {
    return (
      <section>
        <h2 id={"projects"}>Projects = {"{...}"}</h2>
        <Project project={this.projectOne}/>
        <Project project={this.projectTwo}/>
      </section>
    );
  }
}

class Project extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const renderTechList = techList => {
      let string = "";
      for (let i = 0; i < techList.length; i++) {
        string += techList[i] + " ";
      }
      return string.trim()
    }

    const renderIcon = tech => {
      if (tech.localeCompare("JavaScript") === 0) return (<img src={jsIcon} alt="javascript.svg" className={styles.icon}/>)
      if (tech.localeCompare("CSS") === 0) return <img src={cssIcon} alt="css.svg" className={styles.icon}/>
      if (tech.localeCompare("HTML") === 0) return <img src={htmlIcon} alt="html5.svg" className={styles.icon}/>
      if (tech.localeCompare("PHP") === 0) return <img src={phpIcon} alt="php.svg" className={styles.icon}/>
      if (tech.localeCompare("Python") === 0) return <img src={pythonIcon} alt="python.svg" className={styles.icon}/>
      if (tech.localeCompare("React") === 0) return <img src={reactIcon} alt="react.svg" className={styles.icon}/>
      if (tech.localeCompare("MySQL") === 0) return <img src={mysqlIcon} alt="mysql.svg" className={styles.icon}/>
    }

    return (
      <article>
        <h3 id={this.props.project.name.toLowerCase()}>{this.props.project.name}</h3>
        <hr/>
        <div className={styles.container}>
          {this.props.project.techUsed.map(tech => {
            return (
              <figure className={styles.iconContainer}>
                {renderIcon(tech)}
                <figcaption className={styles.caption}>{tech}</figcaption>
              </figure>
              )
            })
          }
        </div>
        <p>{this.props.project.description}</p>
        <a href={this.props.project.gitLink}>{this.props.project.name} - Github</a>
      </article>
    );
  }
}

export default Projects;