import React from 'react';

import {getBrowserHeight} from "../util";

import styles from "../styles/modules/Intro.module.css";


class Intro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {textIndex: 0};
    this.summaryText = ["Teaching computers how to solve problems",
      "Making clean, effective, and intuitive applications",
      ""
    ]
    this.headerOffset = 70;
    this.sectionHeight = (getBrowserHeight() - this.headerOffset).toString() + "px";
  }

  componentDidMount() {
    this.textCycle = setInterval(this.changeText, 3000);
  }

  componentWillUnmount() {
    clearInterval(this.textCycle);
  }

  changeText = () => {
    this.setState({textIndex: this.state.textIndex + 1});
    if (this.state.textIndex === this.summaryText.length) this.setState({textIndex: 0});
  }

  render() {
    return (
      <section style={{height: this.sectionHeight}}>
        <h2>Hi!</h2>
        <article className={styles.article}>
          <p>Self-taught hobbyist programmer seeking employment as a Jr. Web Developer</p>
          <p>{this.summaryText[this.state.textIndex]}</p>
        </article>
        <div className={styles.circleContainer}>
        </div>
      </section>
    );
  }
}


export default Intro;