import React from 'react';

class Skills extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const progLangs = [{name:"JavaScript", time:2}, {name:"PHP", time:1}, {name:"Python", time:3}]
    const frameworks = [{name:"React", time:1}, {name:"node.js", time:1}]
    const dbLangs = [{name:"MySQL", time:1}, {name:"MongoDB", time:1}]
    const other = [{name:"HTML", time:3}, {name:"CSS", time:2}]



    return (
      <section>
        <h2>[...Skills]</h2>
        <SkillGroup heading={"Programming Languages"} listElements={progLangs} />
        <SkillGroup heading={"Frameworks"} listElements={frameworks} />
        <SkillGroup heading={"Databases"} listElements={dbLangs} />
        <SkillGroup heading={"Other"} listElements={other} />
      </section>
    );
  }
}

class SkillGroup extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    const renderListElements = (array) => array.map(obj => {
      return <li>{obj.name} - {obj.time} {obj.time === 1 ? "year" : "years"}</li>
    })

    return (
      <article>
        <h3>{this.props.heading}</h3>
        <ul>
          {renderListElements(this.props.listElements)}
        </ul>
      </article>

    )
  }
}

export default Skills;