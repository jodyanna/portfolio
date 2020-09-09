import React from 'react';



class Summary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {textIndex: 0};
    this.summaryText = ["Teaching computers how to solve problems",
      "Making clean, effective, and intuitive applications",
      "Inappropriate jokes, shows up late, bad attitude"
    ]
  }

  componentDidMount() {
    this.textCycle = setInterval(this.changeText, 3000);
  }

  componentWillUnmount() {
    clearInterval(this.textCycle);
  }

  changeText = () => {
    this.setState({textIndex: this.state.textIndex + 1});
    if (this.state.textIndex === this.summaryText.length) this.setState({textIndex: 0});
  }

  render() {
    return (
      <section>
        <article>
          <p>Self-taught hobbyist programmer seeking employment as a Jr. Web Developer</p>
          <p>{this.summaryText[this.state.textIndex]}</p>
        </article>
      </section>
    );
  }
}


export default Summary;