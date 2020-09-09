import React from 'react';

import githubIcon from '../img/icons/github.svg';
import gmailIcon from '../img/icons/gmail.svg';

import styles from '../styles/modules/Contact.module.css';


class Contact extends React.Component {
  constructor(props) {
    super(props);

  }
  componentDidMount() {

  }

  render() {
    return (
      <section>
        <h2>Contact(me)</h2>
        <article>
          <div className={styles.contactItem}>
            <img src={gmailIcon} alt="gmail.svg" className={styles.icon}/>
            <a href="mailto:jodyanna14.15@gmail.com">jodyanna14.15@gmail.com</a>
          </div>
          <div className={styles.contactItem}>
            <img src={githubIcon} alt="github.svg" className={styles.icon}/>
            <a href="https://github.com/jodyanna">github.com/jodyanna</a>
          </div>
        </article>
      </section>
    );
  }
}

export default Contact;