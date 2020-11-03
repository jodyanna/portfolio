import React from 'react';
import Navigation from "../Navigation";
import styles from '../../styles/modules/Header.module.css';


export default function Header(props) {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Navigation hr={props.hr} />
      </div>
      {props.hr}
    </header>
  );
}