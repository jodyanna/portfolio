import React from "react";
import styles from "./Projects.module.css";
import Line from "../Line";
import TechFig from "../TechFig";

export default function Project(props) {
  const renderTechList = () => {
    return props.project.techUsed.map(tech => <TechFig key={tech} tech={tech} />)
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