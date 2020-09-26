import React from 'react';

import Header from './components/Header.js';
import Anchor from "./util";
import Summary from './components/Summary.js';
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


function App() {
  return (
    <body>
      <Header />
      <div id={"content"}>
        <Anchor name={"top"} />
        <Summary />
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
    </body>
  );
}



export default App;
