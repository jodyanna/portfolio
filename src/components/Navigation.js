import React from 'react';

import styles from '../styles/modules/Navigation.module.css';


class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
    };
  }

  handleClick = () => {
    this.setState({isVisible: !this.state.isVisible});
  }

  render() {
    return (
      <nav className={styles.container}>
        <NavButton label={"NAV"} onClick={this.handleClick} />
        <NavMenu isVisible={this.state.isVisible} onClick={this.handleClick} />
        <NavBar />
      </nav>
    );
  }
}


function NavButton(props) {
  return (
    <button className={styles.navButton} onClick={props.onClick}>
      [ <span className={styles.innerButton}>{props.label}</span> ]
    </button>
  );
}


function NavMenu(props) {
  const determineStyleClass = () => {
    if (props.isVisible) return styles.menuVisible
    else return styles.menuNotVisible
  }

  return (
    <ul className={determineStyleClass()}>
      <li className={styles.navItemSub}>
        <NavButton label={"X"} onClick={props.onClick} />
      </li>
      <li className={styles.navItem}><a href={"#top"} onClick={props.onClick}>Top</a></li>
      <li className={styles.navItemSub}><a href={"#"} onClick={props.onClick}>Resume</a></li>
      <hr/>
      <li className={styles.navItem}><a href={"#skills"} onClick={props.onClick}>Skills</a></li>
      <li className={styles.navItemSub}><a href={"#github-overview"} onClick={props.onClick}>GitHub Overview</a></li>
      <hr/>
      <li className={styles.navItem}><a href={"#projects"} onClick={props.onClick}>Projects</a></li>
      <li className={styles.navItemSub}><a href={"#listen-bot"} onClick={props.onClick}>listen-bot</a></li>
      <li className={styles.navItemSub}><a href={"#spiral-designs"} onClick={props.onClick}>Spiral Designs</a></li>
      <li className={styles.navItemSub}><a href={"#portfolio"} onClick={props.onClick}>My Portfolio</a></li>
      <hr/>
      <li className={styles.navItem}><a href={"#education"} onClick={props.onClick}>Education</a></li>
      <li className={styles.navItemSub}><a href={"#languages"} onClick={props.onClick}>Languages</a></li>
    </ul>
  )
}


function NavBar() {
  return (
    <div className={styles.navBarContainer}>
      <ul className={styles.navBar}>
        <li className={styles.navBarItem}><a href={"#top"}>Top</a></li>
        <li className={styles.navBarItem}><a href={"#skills"}>Skills</a></li>
        <li className={styles.navBarItem}><a href={"#projects"}>Projects</a></li>
        <li className={styles.navBarItem}><a href={"#education"}>Education</a></li>
      </ul>
    </div>
  );
}


export default Navigation;