import React from 'react';
import Navigation from "./Navigation";
import styles from '../styles/modules/Header.module.css';


function Header(props) {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Navigation />
      </div>
      {props.hr}
    </header>
  );
}

export default Header;