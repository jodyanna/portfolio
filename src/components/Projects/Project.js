import React from "react";

import jsIcon from "../../img/icons/javascript.svg";
import htmlIcon from "../../img/icons/html5.svg";
import cssIcon from "../../img/icons/css.svg";
import pythonIcon from "../../img/icons/python.svg";
import nodeIcon from "../../img/icons/nodejs.svg";
import mysqlIcon from "../../img/icons/mysql.svg";
import reactIcon from "../../img/icons/react.svg";
import scIcon from "../../img/icons/styled-components.png";

import styles from "./Projects.module.css";
import Line from "../Line";
import TechFig from "./TechFig";

export default function Project(props) {
  const icons = {
      "JavaScript": jsIcon,
      "HTML": htmlIcon,
      "CSS": cssIcon,
      "Python": pythonIcon,
      "Express/Node.js": nodeIcon,
      "MySQL": mysqlIcon,
      "React": reactIcon,
      "styled-components": scIcon,
  }

  const renderTechList = () => {
    return props.project.techUsed.map(tech => <TechFig key={tech} tech={tech} icons={icons} />)
  }

  const renderLink = () => {
    return props.project.link === "#" ? "" : <a href={props.project.link} className={styles.link}>Live Demo</a>
  }

  return (
    <article className={styles.article}>
      <div className={styles.heading}>
        <h3 className={styles.name}>{props.project.name}</h3>
        <h4 className={styles.caption}>{props.project.type}</h4>
        <div className={styles.links}>
          {renderLink()}
          <a href={props.project.gitLink} className={styles.link}>Code</a>
        </div>
      </div>
      <Line />
      <div className={styles.techs}>
        {renderTechList()}
      </div>
      <div className={styles.overview}>
        {props.project.overview}
      </div>
    </article>
  );
}