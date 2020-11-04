import React from 'react';
import styles from "./Intro.module.css";


export default function Intro() {
  return (
    <section className={styles.section} style={{height: (window.innerHeight - 70) + "px"}}>
      <div className={styles.textContainer}>
        <div className={styles.greeting}>Hello</div>
        <div className={styles.nutshell}>
          <span>I am a web developer</span><br/>
          <span>from the Chicagoland area.</span>
        </div>
      </div>
      <div className={styles.container}>
        <div style={{backgroundImage:`url()`}} className={styles.circleContainer}/>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.tagline}>
            <span>
              My name is,
            </span>
          <h1 className={styles.h1}>Joseph D'Anna</h1>
        </div>
      </div>
    </section>
  );
}