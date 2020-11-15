import React from 'react';
import styles from "./Intro.module.css";
import {GreetingText, NameText, NutshellText, TaglineText } from "./style";


export default function Intro() {
  return (
    <div className={styles.section} style={{height: (window.innerHeight - 70) + "px"}}>
      <div className={styles.textContainer}>
        <GreetingText>Hello</GreetingText>
        <NutshellText>
          <span>I am a web developer</span><br/>
          <span>from the Chicagoland area.</span>
        </NutshellText>
      </div>
      <div className={styles.container}>
        <div style={{backgroundImage:`url()`}} className={styles.circleContainer}/>
      </div>
      <div className={styles.textContainer}>
        <TaglineText>My name is,</TaglineText>
        <NameText>Joseph D'Anna</NameText>
      </div>
    </div>
  );
}