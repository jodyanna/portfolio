import React from 'react';
import navIcon from "../img/icons/menu.png";
import styles from '../styles/modules/Navigation.module.css';

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
    }
  }

  handleClick = () => {
    this.setState({isVisible: !this.state.isVisible});
  }

  render() {
    return (
      <nav className={styles.container}>
        <NavButton label={"NAV"} onClick={this.handleClick} />
        <NavMenu isVisible={this.state.isVisible} onClick={this.handleClick}/>
      </nav>
    );
  }
}

class NavButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button className={styles.navButton} onClick={this.props.onClick}>
        [ <span className={styles.innerButton}>{this.props.label}</span> ]
      </button>
    )
  }
}

class NavMenu extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const determineStyleClass = () => {
      if (this.props.isVisible) return styles.menuVisible
      else return styles.menuNotVisible
    }

    return (
      <ul className={determineStyleClass()}>
        <li className={styles.navItemSub}>
          <NavButton label={"X"} onClick={this.props.onClick} />
        </li>
        <li className={styles.navItem}><a href={"#top"}>Top</a></li>
        <li className={styles.navItemSub}><a href={"#"}>Resume</a></li>
        <hr/>
        <li className={styles.navItem}><a href={"#skills"}>Skills</a></li>
        <li className={styles.navItemSub}><a href={"#github-overview"}>GitHub Overview</a></li>
        <hr/>
        <li className={styles.navItem}><a href={"#projects"}>Projects</a></li>
        <li className={styles.navItemSub}><a href={"#listen-bot"}>listen-bot</a></li>
        <li className={styles.navItemSub}><a href={"#spiral designs"}>Spiral Designs</a></li>
        <hr/>
        <li className={styles.navItem}><a href={"#education"}>Education</a></li>
        <li className={styles.navItemSub}><a href={"#languages"}>Languages</a></li>
        <hr/>
        <li className={styles.navItem}><a href={"#contact"}>Contact</a></li>
      </ul>
    )
  }
}

export default Navigation;