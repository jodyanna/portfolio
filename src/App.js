import React, { useState, useContext } from 'react';
import styled from "styled-components";

import Header from './components/Header';
import Intro from './components/Intro';
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Anchor from "./util";

import "./styles/App.css";
import resume from "./img/jpdanna-resume.pdf";

const Container = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  background-color: ${props => props.bg};
  color: ${props => props.fg};
`;

const Theme = React.createContext({foreground: "#f5f5f5", background: "#121212"});

export default function App() {
  const [ isLight, setIsLight ] = useState(false);
  const handleClick = () => setIsLight(!isLight);

  const themes = {
    light: {
      foreground: "#121212",
      background: "#f5f5f5"
    },
    dark: {
      foreground: "#f5f5f5",
      background: "#121212"
    }
  };

  return (
    <Theme.Provider value={isLight ? themes.light : themes.dark}>
      <Container bg={isLight ? "#f5f5f5" : "#121212"} fg={isLight ? "#121212" : "#f5f5f5"}>
        <Anchor name={"top"} />
        <ThemeButton onClick={handleClick} />
        <Intro />
        <div id={"content"}>
          <Header hr={<HR theme={isLight} />}/>
          <Anchor name={"skills"} />
          <Skills hr={<HR theme={isLight} />} />
          <Anchor name={"projects"} />
          <Projects hr={<HR theme={isLight} />} />
        </div>
        <HR theme={isLight} />
        <Footer />
      </Container>
    </Theme.Provider>
  );
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
