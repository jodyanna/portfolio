import React from 'react';
import styles from '../styles/modules/Footer.module.css';
import githubIcon from "../img/icons/github.svg";
import gmailIcon from "../img/icons/gmail.svg";


function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.attributions}>
        <p>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik" className={styles.link}>
          Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon" className={styles.link}>www.flaticon.com</a>
        </p>
        <p>
          Icons made by <a href="https://icon54.com/" title="Pixel perfect">Pixel perfect</a> from
          <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
        </p>
      </div>
      <div className={styles.contact}>
        <a href="https://github.com/jodyanna"><img src={githubIcon} alt="github.svg" className={styles.icon}/></a>
        <a href="mailto:jodyanna14.15@gmail.com"><img src={gmailIcon} alt="gmail.svg" className={styles.icon}/></a>
      </div>
    </footer>
  );
}

export default Footer;