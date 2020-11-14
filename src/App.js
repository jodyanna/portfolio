import React, { useState, useEffect } from 'react';
import styled from "styled-components";

import Header from './components/Header';
import Intro from './components/Intro';
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import About from "./components/About";
import Anchor from "./components/Anchor";
import ThemeButton from "./components/ThemeToggle";

import "./styles/App.css";
import ThemeContext from "./contexts/ThemeContext";

const Container = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  background-color: ${props => props.bg};
  color: ${props => props.fg};
`;

export default function App() {
  const [ isLight, setIsLight ] = useState(false);
  const handleClick = () => setIsLight(!isLight);

  const [ isButtonVisible, setIsButtonVisible ] = useState(false);
  const handleScroll = (menuHeight) => {
    window.pageYOffset > menuHeight ? setIsButtonVisible(true) : setIsButtonVisible(false);
  }

  useEffect(() => {
    const dropdownMenuHeight = 200;
    window.addEventListener("scroll", () => handleScroll(dropdownMenuHeight));
  })

  const themeHook = useState("dark")

  return (
    <ThemeContext.Provider value={themeHook}>
      <Container bg={isLight ? "#f5f5f5" : "#121212"} fg={isLight ? "#121212" : "#f5f5f5"}>
        <Anchor name={"top"} />
        <ThemeButton onClick={handleClick} />
        <Intro />
        <div id={"content"}>
          <Header hr={<HR theme={isLight} />}
                  isButtonVisible={isButtonVisible}
          />
          <About />
          <Skills hr={<HR theme={isLight} />} />
          <Projects hr={<HR theme={isLight} />} />
        </div>
        <HR theme={isLight} />
        <Footer />
      </Container>
    </ThemeContext.Provider>
  );
}


function HR(props) {
  return <hr style={{backgroundColor: props.theme ? "#121212" : "#f5f5f5"}} />
}
