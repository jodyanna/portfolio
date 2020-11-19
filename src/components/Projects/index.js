import React from 'react';

import Anchor from "../Anchor";
import Project from "./Project";


export default class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.projectOne = {
      name: "Chatter-bot",
      id: "chatter-bot",
      type: "Web Application",
      techUsed: ["React", "JavaScript", "styled-components", "CSS", "Express/Node.js", "MySQL"],
      overview: "Create posts, chat rooms, and user accounts for topical discussion.",
      link: "",
      gitLink: "https://github.com/jodyanna/chatter-bot",
    }
    this.projectTwo = {
      name: "Spiral Designs",
      id: "spiral-designs",
      type: "Interactive Website",
      techUsed: ["JavaScript", "CSS", "HTML"],
      overview: "Watch an arithmetic spiral spin endlessly in this mesmerizing interactive application.",
      link: "https://spiral-designs.netlify.app/",
      gitLink: "https://github.com/jodyanna/spiral_designs",
    }
    this.projectThree = {
      name: "My Portfolio",
      id: "portfolio",
      type: "Website",
      techUsed: ["React", "JavaScript","styled-components", "CSS", "HTML"],
      overview: "This website you are on right now!",
      link: "#",
      gitLink: "https://github.com/jodyanna/portfolio_v2",
    }
    this.projectFour = {
      name: "GitHub Repo Summary",
      id: "github-summary",
      type: "React Component",
      techUsed: ["React", "JavaScript", "CSS", "HTML"],
      overview: `Displays a brief summary of a GitHub user's public repositories. Total programming language usage
      displayed as a color coded bar.`,
      link: "#",
      gitLink: "https://github.com/jodyanna/github-repo-summary",
    }
  }

  render() {
    return (
      <section>
        <Anchor name={"projects"} />
        <h2>Projects</h2>
        <Anchor name={this.projectOne.id} />
        <Project project={this.projectOne} />
        <Anchor name={this.projectTwo.id} />
        <Project project={this.projectTwo} />
        <Anchor name={this.projectFour.id} />
        <Project project={this.projectFour} />
        <Anchor name={this.projectThree.id} />
        <Project project={this.projectThree} />
      </section>
    );
  }
}
