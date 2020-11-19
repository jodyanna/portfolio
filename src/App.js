import React, { useState, useEffect } from 'react';
import styled from "styled-components";

import Header from './components/Header';
import Intro from './components/Intro';
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import About from "./components/About";
import Anchor from "./components/Anchor";
import Line from "./components/Line";
import ThemeButton from "./components/ThemeToggle";

import "./styles/App.css";
import ThemeContext from "./contexts/ThemeContext";
import { themes } from "./styles/ThemeColors";

const Container = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  background-color: ${props => props.theme.background};
  color: ${props => props.theme.foreground};
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  
  align-items: center;
  width: 100%;
`;

export default function App() {
  const [ isLight, setIsLight ] = useState(false);
  const handleClick = () => setIsLight(!isLight);

  const [ isButtonVisible, setIsButtonVisible ] = useState(false);
  const handleScroll = menuHeight => {
    window.pageYOffset > menuHeight ? setIsButtonVisible(true) : setIsButtonVisible(false);
  }

  useEffect(() => {
    const dropdownMenuHeight = 200;
    window.addEventListener("scroll", () => handleScroll(dropdownMenuHeight));
  })

  const themeHook = useState("dark");

  return (
    <ThemeContext.Provider value={themeHook}>
      <Container theme={themes[isLight ? "light" : "dark"]}>
        <Anchor name={"top"} />
        <ThemeButton handleClick={handleClick} />
        <Intro />
        <Content>
          <Header isButtonVisible={isButtonVisible} />
          <About />
          <Skills />
          <Projects />
        </Content>
        <Line />
        <Footer />
      </Container>
    </ThemeContext.Provider>
  );
}
