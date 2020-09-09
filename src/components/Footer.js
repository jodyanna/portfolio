import React from 'react';
import styles from '../styles/modules/Footer.module.css';

class Footer extends React.Component {
  constructor(props) {
    super(props);

  }


  render() {
    return (
      <footer>
        <hr/>
        <p>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik" className={styles.link}>
          Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon" className={styles.link}>www.flaticon.com</a>
        </p>
      </footer>
    );
  }
}

export default Footer;