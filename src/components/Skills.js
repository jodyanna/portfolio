import React from 'react';
import {ajaxRequest, roundDecimal} from '../util';
import styles from '../styles/modules/Skills.module.css';

class Skills extends React.Component {
  constructor(props) {
    super(props);
    this.skills = {
      javaScript: {
        color: "#e4ba42",
        skillLevel: "70%"
      },
      html: {
        color: "#e34c26",
        skillLevel: "90%"
      },
      css : {
        color: "#563d7c",
        skillLevel: "70%"
      },
      python: {
        color: "#3572a5",
        skillLevel: "75%"
      },
      php: {
        color: "#4f5d95",
        skillLevel: "30%"
      }
    }
  }

  render() {
    const createTableRows = () => {

    }

    return (
      <section>
        <h2>[...Skills]</h2>
        <article>
          <GitAccountSummary />
          <hr/>
          <table>
            <thead></thead>
            <tbody>
              {createTableRows()}
            </tbody>
          </table>
        </article>
      </section>
    );
  }
}

class GitAccountSummary extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
    };
    this.gitUserName = "jodyanna";
    this.gitRepoNames = [
      "spiral_designs",
      "listen-bot",
      "resume",
      "css_templates",
      "algorithms",
      "leetcode",
      "make_sample",
      "gfl_wiki_scraper"
    ];

  }

  componentDidMount() {
    let promises = this.gitRepoNames.map(repoName => this.githubAPIRequest(repoName));
    Promise.all(promises).then(data => this.calcGitRepoLangUsage(data))
      .then(data => this.determineLangUsagePercents(data))
      .then(data => this.setState({isLoading: false, gitData: this.createStateObject(data)}))
  }

  async githubAPIRequest(repoName) {
    return await ajaxRequest(`https://api.github.com/repos/${this.gitUserName}/${repoName}/languages`)
  }

  calcGitRepoLangUsage(data) {
    let hashmap = {}
    for (let i = 0; i < data.length; i++) {
      for (const prop in data[i]) {
        if (hashmap.hasOwnProperty(prop)) hashmap[prop] += data[i][prop];
        else hashmap[prop] = data[i][prop];
      }
    }
    return hashmap
  }

  determineLangUsagePercents(data) {
    let hashmap = {};
    for (const prop in data) {
      const ratio = data[prop] / this.calcGitLangScore(data);
      hashmap[prop.toLowerCase()] = (Math.floor(roundDecimal(ratio, 2) * 100)).toString() + "%";
    }
    console.log(hashmap)
    return hashmap
  }

  calcGitLangScore(data) {
    return Object.keys(data).map((lang) => data[lang]).reduce((a, b) => a + b, 0)
  }

  createStateObject(data) {
    let hashmaps = {};
    for (const prop in data) {
      const lang = {};
      const style = {};
      style["width"] = {width:data[prop]};
      style["backgroundColor"] = {backgroundColor: this.determineStateStyleColor(prop)};
      lang["style"] = style;
      hashmaps[prop] = lang;
    }
    console.log(hashmaps)
    return hashmaps
  }

  determineStateStyleColor(lang) {
    if (lang.localeCompare("javascript") === 0) return "#e4ba42";
    if (lang.localeCompare("html") === 0) return "#e34c26";
    if (lang.localeCompare("css") === 0) return "#563d7c";
    if (lang.localeCompare("python") === 0) return "#3572a5";
    if (lang.localeCompare("php") === 0) return "#4f5d95";
  }

  render() {
    const createBar = () => {
      if (!this.state.isLoading) {
        return (
          <div className={styles.barContainer}>
            <div style={this.state.gitData.javascript.style.width} className={styles.partContainer}>
              <div key={"js"} style={this.state.gitData.javascript.style.backgroundColor} className={styles.barPart}>
                {this.state.gitData.javascript.style.width.width}
              </div>
              <span className={styles.label}>JavaScript</span>
            </div>
            <div style={this.state.gitData.html.style.width} className={styles.partContainer}>
              <div key={"js"} style={this.state.gitData.html.style.backgroundColor} className={styles.barPart}>
                {this.state.gitData.html.style.width.width}
              </div>
              <span className={styles.label}>HTML</span>
            </div>
            <div style={this.state.gitData.css.style.width} className={styles.partContainer}>
              <div key={"js"} style={this.state.gitData.css.style.backgroundColor} className={styles.barPart}>
                {this.state.gitData.css.style.width.width}
              </div>
              <span className={styles.label}>CSS</span>
            </div>
            <div style={this.state.gitData.python.style.width} className={styles.partContainer}>
              <div key={"js"} style={this.state.gitData.python.style.backgroundColor} className={styles.barPart}>
                {this.state.gitData.python.style.width.width}
              </div>
              <span className={styles.label}>Python</span>
            </div>
            <div style={this.state.gitData.php.style.width} className={styles.partContainer}>
              <div key={"js"} style={this.state.gitData.php.style.backgroundColor} className={styles.barPart}>
                {this.state.gitData.php.style.width.width}
              </div>
              <span className={styles.label}>PHP</span>
            </div>
          </div>
        )
      }
    }

    return(
      <div className={styles.container}>
        <h3>GitHub Summary</h3>
        <hr/>
        <span>Programming language usage across <a href="https://github.com/jodyanna?tab=repositories">
          {this.gitRepoNames.length}</a> repositories</span>
        {createBar()}
      </div>
    )
  }

}


export default Skills;