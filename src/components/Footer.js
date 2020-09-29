import React from 'react';
import styles from '../styles/modules/Footer.module.css';


function Footer() {
  return (
    <footer>
      <hr/>
      <p>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik" className={styles.link}>
        Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon" className={styles.link}>www.flaticon.com</a>
      </p>
      <p>
        Icons made by <a href="https://icon54.com/" title="Pixel perfect">Pixel perfect</a> from
        <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
      </p>
    </footer>
  );
}

export default Footer;