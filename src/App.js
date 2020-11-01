import React from 'react';

import Header from './components/Header.js';
import Intro from './components/Intro.js';
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Anchor from "./util";

import "./styles/App.css";
import resume from "./img/jpdanna-resume.pdf";


class App extends React.Component {
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
        <Header hr={<HR theme={this.state.isLight} />}/>
        <div id={"content"}>
          <div className={"emptySpace"} />
          <Anchor name={"skills"} />
          <Skills hr={<HR theme={this.state.isLight} />} />
          <div className={"emptySpace"} />
          <Anchor name={"projects"} />
          <Projects hr={<HR theme={this.state.isLight} />} />
          <div className={"emptySpace"} />
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

function Resume() {
  return (
    <object data={resume} type="application/pdf" width="100%" height="100%">
      <p>Cannot view document - <a href={resume} target="_blank" rel="noopener noreferrer">Download PDF</a></p>
    </object>
  )
}



export default App;
