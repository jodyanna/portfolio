import React from 'react';

import styles from './Education.module.css';

import ncc from '../../img/ncc.png';


export default function Education() {
  return (
    <section>
      <article className={styles.article}>
        <h3>Bachelor of Arts</h3>
        <hr/>
        <span className={styles.schoolName}>North Central College</span>
        <p className={styles.edMajorText}>Japanese<br/>&<br/>East Asian Studies</p>
        <img src={ncc} alt="ncc.png" className={styles.schoolSeal}/>
      </article>
    </section>
  );
}