import React from 'react';
import Navigation from "./Navigation";
import styles from '../styles/modules/Header.module.css';


function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Navigation />
      </div>
      <hr/>
    </header>
  );
}

export default Header;