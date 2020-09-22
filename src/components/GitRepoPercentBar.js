import React from "react";
import {ajaxRequest, roundDecimal} from "../util";
import styles from "../styles/modules/GitAccount.module.css";


class GitRepoPercentBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
    };
  }

  componentDidMount() {
    let promises = this.props.repos.map(repo => this.githubAPIRequest(repo));
    Promise.all(promises).then(data => this.calcGitRepoLangUsage(data))
      .then(data => this.determineLangUsagePercents(data))
      .then(data => this.setState({isLoading: false, gitData: this.createStateObject(data)}))
  }

  async githubAPIRequest(repo) {
    return await ajaxRequest(`https://api.github.com/repos/${this.props.username}/${repo}/languages`)
  }

  calcGitRepoLangUsage(data) {
    let hashmap = {};
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
      hashmap[prop] = (Math.floor(roundDecimal(ratio, 2) * 100)).toString() + "%";
    }
    return hashmap
  }

  calcGitLangScore(data) {
    return Object.keys(data).map((lang) => data[lang]).reduce((a, b) => a + b, 0)
  }

  createStateObject(data) {
    let hashmaps = {};
    for (const prop in data) {
      let hashmap = {};
      hashmap["width"] = data[prop];
      hashmap["backgroundColor"] = this.determineStateStyleColor(prop.toLowerCase());
      hashmaps[prop.toLowerCase()] = hashmap;
    }
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
            <BarPart width={this.state.gitData.javascript.width}
                     backgroundColor={this.state.gitData.javascript.backgroundColor}
                     label={"JS"}
            />
            <BarPart width={this.state.gitData.html.width}
                     backgroundColor={this.state.gitData.html.backgroundColor}
                     label={"HTML"}
            />
            <BarPart width={this.state.gitData.css.width}
                     backgroundColor={this.state.gitData.css.backgroundColor}
                     label={"CSS"}
            />
            <BarPart width={this.state.gitData.python.width}
                     backgroundColor={this.state.gitData.python.backgroundColor}
                     label={"Python"}
            />
            <BarPart width={this.state.gitData.php.width}
                     backgroundColor={this.state.gitData.php.backgroundColor}
                     label={"PHP"}
            />
          </div>
        )
      }
    }
    return (
      <div className={styles.containerCol}>
        {createBar()}
      </div>
    )
  }
}

function BarPart(props) {
  return (
    <div style={{width: props.width}} className={styles.partContainer}>
      <div style={{backgroundColor: props.backgroundColor}} className={styles.barPart}>
        {props.width}
      </div>
      <span className={styles.label}>{props.label}</span>
    </div>
  )
}

export default GitRepoPercentBar;