import React from 'react';
import Navigation from "./Navigation";
import styles from '../styles/modules/Header.module.css';

class Header extends React.Component {
  constructor(props) {
    super(props);

  }


  render() {
    return (
      <header className={styles.header}>
        <div className={styles.container}>

          <Navigation />
        </div>
        <hr/>
      </header>
    );
  }
}

export default Header;