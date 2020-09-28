import React from 'react';

import {getBrowserHeight} from "../util";
import self from "../img/self.jpg";
import styles from "../styles/modules/Intro.module.css";


class Intro extends React.Component {
  constructor(props) {
    super(props);
    this.headerOffset = 70;
    this.sectionHeight = (getBrowserHeight() - this.headerOffset).toString() + "px";
  }


  render() {
    return (
      <section style={{height: this.sectionHeight}} className={styles.section}>
        <div className={styles.textContainer}>
          <div className={styles.greeting}>Hello</div>
          <div className={styles.nutshell}>
            <span>I'm an aspiring web developer</span><br/>
            <span>from the Chicago land area.</span>
          </div>
        </div>
        <div className={styles.container}>
          <div style={{backgroundImage:`url(${self})`}} className={styles.circleContainer}/>
        </div>
        <div className={styles.textContainer}>
          <div className={styles.tagline}>
            <span>
              I'm all about having a good time and getting the job done!<br/>
              <br/>
              My name is,
            </span>
            <h1 className={styles.h1}>Joseph D'Anna</h1>
          </div>
        </div>
      </section>
    );
  }
}


export default Intro;