import React from "react";
import styled from "styled-components";
import DropdownMenu from "./DropdownMenu";
import DropdownButton from "./DropdownButton";


const Bar = styled.ul`
  display: flex;
  
  align-items: flex-end;
  justify-content: space-evenly;
  
  width: 100%;

  margin: 0;
  padding: 0;
  
  background-color: inherit;
  
  @media screen and (max-width: 640px) {
    display: none;
  }
`;

const BarItem = styled.li`
  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: center;

  width: 150px;

  font-size: 1.5em;
  text-align: center;

  margin: 0.5em 1em 0.2em 1em;

  list-style: none;
  
  background-color: inherit;
`;


export default class NavBar extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      isMenuVisible: false,
      isMenuUp: true,
    }
    this.menuOffset = 160;
  }

  handleClick = () => {
    this.setState({isMenuVisible: !this.state.isMenuVisible});
  }

  render() {
    return (
      <Bar>
        <BarItem><a href={"#top"}>Top</a></BarItem>
        <BarItem><a href={"#skills"}>Skills</a></BarItem>
        <BarItem>
          <a href={"#projects"}>Projects</a>
          <DropdownButton onClick={this.handleClick} />
          <DropdownMenu isMenuVisible={this.state.isMenuVisible}
                        isMenuUp={this.state.isMenuUp}
                        menuOffset={this.menuOffset}
                        onClick={this.handleClick}/>
        </BarItem>
      </Bar>
    );
  }
}