import React from 'react';

import {getBrowserHeight} from "../util";

import dropdownArrow from '../img/icons/dropdown-arrow.svg';

import styles from '../styles/modules/Navigation.module.css';


class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
    };
    this.browserHeight = getBrowserHeight();
  }

  handleClick = () => {
    this.setState({isVisible: !this.state.isVisible});
  }

  render() {
    return (
      <nav className={styles.container}>
        <NavButton label={"NAV"} onClick={this.handleClick} />
        <NavMenu isVisible={this.state.isVisible} onClick={this.handleClick} />
        <NavBar browerHeight={this.browserHeight}/>
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
    </ul>
  );
}


class NavBar extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      isMenuVisible: false,
      isMenuUp: true,
    }
    this.menuOffset = 160;
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll = () => {
    if (window.pageYOffset < (this.props.browerHeight - this.menuOffset)) {
      this.setState({isMenuVisible: this.state.isMenuVisible, isMenuUP: true});
    }
    else this.setState({isMenuVisible: this.state.isMenuVisible, isMenuUp: false});
    console.log(this.state.isMenuUp)
  }

  handleClick = () => {
    this.setState({isMenuVisible: !this.state.isMenuVisible});

  }

  render() {
    return (
      <div className={styles.navBarContainer}>
        <ul className={styles.navBar}>
          <li className={styles.navBarItem}><a href={"#top"}>Top</a></li>
          <li className={styles.navBarItem}><a href={"#skills"}>Skills</a></li>
          <li className={styles.navBarItem}>
            <a href={"#projects"}>Projects</a>
            <DropdownButton onClick={this.handleClick} />
            <DropdownMenu isMenuVisible={this.state.isMenuVisible}
                          isMenuUp={this.state.isMenuUp}
                          menuOffset={this.menuOffset}
                          onClick={this.handleClick}/>
          </li>
        </ul>
      </div>
    );
  }
}


function DropdownButton(props) {
  return (
    <button className={styles.dropdownButton} onClick={props.onClick}>
      <img src={dropdownArrow} alt="dropdown-arrow.svg" className={styles.dropdownIcon} />
    </button>
  )
}


function DropdownMenu(props) {
  const determineStyleClass = () => {
    if (props.isMenuVisible) return styles.dropdownVisible
    else return styles.dropdownNotVisible
  }

  const determinePosition = () => {
    if (props.isMenuUp) return {top: "-150px"}
    else return {top: "50px"}
  }

  return (
    <ul className={determineStyleClass()} style={determinePosition()}>
      <li className={styles.dropdownItem}><a href={"#listen-bot"} onClick={props.onClick}>listen-bot</a></li>
      <li className={styles.dropdownItem}><a href={"#spiral-designs"} onClick={props.onClick}>Spiral Designs</a></li>
      <li className={styles.dropdownItem}><a href={"#portfolio"} onClick={props.onClick}>My Portfolio</a></li>
    </ul>
  )
}


export default Navigation;