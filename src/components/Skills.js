import React from 'react';
import GitAccountSummary from './GitAccountSummary';


class Skills extends React.Component {
  constructor(props) {
    super(props);
    this.skills = {
      javaScript: {
        color: "#e4ba42",
        skillLevel: "70%",
      },
      html: {
        color: "#e34c26",
        skillLevel: "90%",
      },
      css : {
        color: "#563d7c",
        skillLevel: "70%",
      },
      python: {
        color: "#3572a5",
        skillLevel: "75%",
      },
      php: {
        color: "#4f5d95",
        skillLevel: "30%",
      }
    }
  }

  render() {
    const createTableRows = () => {
      return
    }

    return (
      <section>
        <h2>[...Skills]</h2>
        <article>
          <GitAccountSummary username={"jodyanna"} />
        </article>
      </section>
    );
  }
}



export default Skills;