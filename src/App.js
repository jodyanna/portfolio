import React from 'react';
import './index.css';

import Header from './components/Header.js';
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
        <Summary />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </div>
      <Footer />
    </body>
  );
}

export default App;
