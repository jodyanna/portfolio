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
        <li className={styles.navItem}><a href={"#top"} onClick={this.props.onClick}>Top</a></li>
        <li className={styles.navItemSub}><a href={"#"} onClick={this.props.onClick}>Resume</a></li>
        <hr/>
        <li className={styles.navItem}><a href={"#skills"} onClick={this.props.onClick}>Skills</a></li>
        <li className={styles.navItemSub}><a href={"#github-overview"} onClick={this.props.onClick}>GitHub Overview</a></li>
        <hr/>
        <li className={styles.navItem}><a href={"#projects"} onClick={this.props.onClick}>Projects</a></li>
        <li className={styles.navItemSub}><a href={"#listen-bot"} onClick={this.props.onClick}>listen-bot</a></li>
        <li className={styles.navItemSub}><a href={"#spiral-designs"} onClick={this.props.onClick}>Spiral Designs</a></li>
        <hr/>
        <li className={styles.navItem}><a href={"#education"} onClick={this.props.onClick}>Education</a></li>
        <li className={styles.navItemSub}><a href={"#languages"} onClick={this.props.onClick}>Languages</a></li>
        <hr/>
        <li className={styles.navItem}><a href={"#contact"} onClick={this.props.onClick}>Contact</a></li>
      </ul>
    )
  }
}

export default Navigation;