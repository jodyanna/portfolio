import React from 'react';
import styled from "styled-components";

import Header from './components/Header';
import Intro from './components/Intro';
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Anchor from "./util";

import "./styles/App.css";
import resume from "./img/jpdanna-resume.pdf";







export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLight: false,
    }
  }

  handleClick = () => {
    this.setState({isLight: !this.state.isLight});
  }

  render() {
    return (
      <div className={this.state.isLight ? "light" : "dark"}>
        <Anchor name={"top"} />
        <ThemeButton onClick={this.handleClick} />
        <Intro />
        <div id={"content"}>
          <Header hr={<HR theme={this.state.isLight} />}/>
          <Anchor name={"skills"} />
          <Skills hr={<HR theme={this.state.isLight} />} />
          <Anchor name={"projects"} />
          <Projects hr={<HR theme={this.state.isLight} />} />
        </div>
        <HR theme={this.state.isLight} />
        <Footer />
      </div>
    );
  }
}


function ThemeButton(props) {
  return (
    <label className="themeButton">
      <input type="checkbox" />
      <span className="slider" onClick={props.onClick}/>
    </label>
  )
}

function HR(props) {
  return <hr style={{backgroundColor: props.theme ? "#121212" : "#f5f5f5"}} />
}
