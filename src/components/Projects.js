import React from 'react';

import Anchor from "../util";

import cssIcon from '../img/icons/css.svg';
import htmlIcon from '../img/icons/html5.svg';
import jsIcon from '../img/icons/javascript.svg';
import mysqlIcon from '../img/icons/mysql.svg';
import phpIcon from '../img/icons/php.svg';
import pythonIcon from '../img/icons/python.svg';
import reactIcon from '../img/icons/react.svg';

import styles from '../styles/modules/Projects.module.css';


class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.projectOne = {
      name: "listen-bot",
      id: "listen-bot",
      type: "Full Stack Web App",
      techUsed: ["JavaScript", "CSS", "HTML", "PHP", "MySQL"],
      overview: `Got something you need to get off your chest? A secret you can't hold in any longer? Allow me to 
      introduce you to my robot, listen-bot! It's a really good listener!`,
      description: [
        "Implemented pre form validation for clear user experience",
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
      overview: `Watch an arithmetic spiral spin endlessly in this interactive application. Tweak the controls right of 
      the visual display to create a unique spiral of your own design.`,
      description: [
        "Spiral animation created using the HTML canvas API",
        "Animation renders at 10 frames per second with settings updated every frame",
        "Self rendering UI on load by vanilla JavaScript DOM manipulation",
      ],
      link: "https://spiral-designs.netlify.app/",
      gitLink: "https://github.com/jodyanna/spiral_designs",
    }
    this.projectThree = {
      name: "My Portfolio",
      id: "portfolio",
      type: "React App",
      techUsed: ["React", "JavaScript", "CSS", "HTML"],
      overview: "This website you are on right now!",
      description: [
        "AJAX requests to github’s API using the XMLHttpRequest object",
        "Utilized promises for request data mutation and rendering",
        "Responsive design with custom CSS styles",
      ],
      link: "#",
      gitLink: "https://github.com/jodyanna/portfolio_v2",
    }
  }

  render() {
    return (
      <section>
        <Anchor name={this.projectOne.id} />
        <Project project={this.projectOne}/>
        <Anchor name={this.projectTwo.id} />
        <Project project={this.projectTwo}/>
        <Anchor name={this.projectThree.id} />
        <Project project={this.projectThree}/>
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
      return this.props.project.techUsed.map(tech => <TechFig key={tech} tech={tech} icons={this.icons} />)
    }

    const renderDescription = () => {
      return this.props.project.description.map((desc, i) => <li key={i} className={styles.li}>{desc}</li>)
    }

    return (
      <article className={styles.article}>
        <div className={styles.heading}>
          <h3 className={styles.name}>{this.props.project.name}</h3>
          <h4 className={styles.caption}>{this.props.project.type}</h4>
          <a href={this.props.project.link} className={styles.link}>Live Demo</a>
          <a href={this.props.project.gitLink} className={styles.link}>Code</a>
        </div>
        <hr/>
        <div className={styles.techs}>
          {renderTechList()}
        </div>
        <div className={styles.overview}>
          {this.props.project.overview}
        </div>
        <ul>
          {renderDescription()}
        </ul>
      </article>
    );
  }
}


function TechFig(props) {
  return (
    <figure className={styles.iconContainer}>
      <img src={props.icons[props.tech]} alt={props.tech} className={styles.icon}/>
      <figcaption className={styles.caption}>{props.tech}</figcaption>
    </figure>
  );
}


export default Projects;