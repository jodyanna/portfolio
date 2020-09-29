import React from 'react';

import Header from './components/Header.js';
import Intro from './components/Intro.js';
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Anchor from "./util";

function App() {
  return (
    <div id={"body"}>
      <Anchor name={"top"} />
      <Intro />
      <Header />
      <div id={"content"}>
        <Anchor name={"skills"} />
        <Skills />
        <Anchor name={"projects"} />
        <Projects />
        <Anchor name={"education"} />
        <Education />
        <Anchor name={"contact"} />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}



export default App;
